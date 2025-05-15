n.d(t, { Z: () => g }), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(275759),
    s = n(710845),
    l = n(626135),
    c = n(573261),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = new s.Z('ConnectedAccounts');
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: u.ANM.CONNECTIONS_CALLBACK(e),
        body: p(f({}, t), {
            insecure: n,
            friend_sync: u.BFP.has(e)
        }),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
let g = {
    fetch: () =>
        i.tn
            .get({
                url: u.ANM.CONNECTIONS,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    o.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        let { location: t, twoWayLinkType: n, userCode: r, twoWayLink: o, successRedirect: a, handle: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        l.default.track(u.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: t
        });
        let c = u.ANM.CONNECTIONS_AUTHORIZE(e),
            d = new URLSearchParams();
        return (
            null != r && d.append('two_way_user_code', r),
            null != a && d.append('success_redirect', a),
            null != n ? (d.append('two_way_link_type', n), d.append('two_way_link', 'true')) : null != o && d.append('two_way_link', String(o)),
            null != s && d.append('handle', s),
            (c = c + '?' + d.toString()),
            await i.tn.get({
                url: c,
                oldFormErrors: !0,
                rejectWithError: !1
            })
        );
    },
    callback: m,
    connect(e, t, n, i, o) {
        var a;
        return c.Z.put({
            url: u.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null != (a = null == o ? void 0 : o.friend_sync) ? a : u.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: u.BFP.has(e)
                }
            },
            rejectWithError: !1
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: u.ANM.CONNECTION(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: u.ANM.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setVisibility(e, t, n) {
        return this.update(e, t, { visibility: 1 === n });
    },
    setMetadataVisibility(e, t, n) {
        return this.update(e, t, { metadata_visibility: 1 === n });
    },
    setFriendSync(e, t, n) {
        return this.update(e, t, { friend_sync: n });
    },
    setShowActivity(e, t, n) {
        return this.update(e, t, { show_activity: n });
    },
    update: (e, t, n) =>
        c.Z.patch({
            url: u.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: f({}, n)
            },
            rejectWithError: !1
        }),
    joinServer(e, t) {
        o.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            i.tn.post(
                {
                    url: u.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                },
                (n) => {
                    o.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        n.ok ||
                            (o.Z.dispatch({
                                type: 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR',
                                integrationId: e,
                                error: n.hasErr ? void 0 : n.body.message
                            }),
                            null == t || t());
                }
            );
    },
    async refreshAccessToken(e, t) {
        try {
            let {
                body: { access_token: n }
            } = await i.tn.get({
                url: u.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
            return (
                o.Z.dispatch({
                    type: 'USER_CONNECTION_UPDATE',
                    platformType: e,
                    id: t,
                    accessToken: n
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === u.evJ.CONNECTION_REVOKED &&
                    o.Z.dispatch({
                        type: 'USER_CONNECTION_UPDATE',
                        platformType: e,
                        id: t,
                        revoked: !0
                    }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        i.tn.post({
            url: u.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: f({}, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) return void h.error('Two-way link: missing authorize location');
        let { code: o, error: s, errorDescription: l } = (0, a.xp)(t);
        return null != s
            ? void h.error('Two-way link: missing authorize code', {
                  error: s,
                  errorDescription: l
              })
            : await m(e, {
                  code: n,
                  state: r,
                  two_way_link_code: o,
                  token_redirect_uri: i
              });
    },
    sessionHandoff: function (e, t, n, r, o) {
        return i.tn.post({
            url: u.ANM.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: r,
                iss: o
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append('state', t);
        let r = ''.concat(u.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
        return i.tn.get({
            url: r,
            body: { state: t },
            rejectWithError: !0
        });
    }
};
