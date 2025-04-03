n.d(t, { Z: () => y }), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(275759),
    s = n(185669),
    l = n(710845),
    c = n(314897),
    u = n(553795),
    d = n(626135),
    f = n(573261),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new l.Z('ConnectedAccounts');
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: _.ANM.CONNECTIONS_CALLBACK(e),
        body: h(
            g(h({}, t), {
                insecure: n,
                friend_sync: _.BFP.has(e)
            }),
            s.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.callback' }).enabled ? { session_id: c.default.getSessionId() } : {}
        ),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
let y = {
    fetch: () =>
        i.tn
            .get({
                url: _.ANM.CONNECTIONS,
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
        var t;
        let { location: n, twoWayLinkType: r, userCode: o, twoWayLink: l, successRedirect: f, handle: p } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        d.default.track(_.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let h = _.ANM.CONNECTIONS_AUTHORIZE(e),
            m = new URLSearchParams();
        null != o && m.append('two_way_user_code', o), null != f && m.append('success_redirect', f), null != r ? (m.append('two_way_link_type', r), m.append('two_way_link', 'true')) : null != l && m.append('two_way_link', String(l)), null != p && m.append('handle', p);
        let { enabled: g } = s.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (g) {
            let e = c.default.getSessionId();
            null != e && m.append('session_id', e);
        }
        h = h + '?' + m.toString();
        let E = await i.tn.get({
                url: h,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            { state: b } = (0, a.xp)(null != (t = E.body.url) ? t : '');
        return null == b || s.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.authorize' }).enabled || u.Z.addPendingAuthorizedState(b), E;
    },
    callback: b,
    connect(e, t, n, i, o) {
        var a;
        return f.Z.put({
            url: _.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null != (a = null == o ? void 0 : o.friend_sync) ? a : _.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: _.BFP.has(e)
                }
            },
            rejectWithError: !1
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: _.ANM.CONNECTION(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: _.ANM.CONNECTION_REFRESH(e, t),
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
        f.Z.patch({
            url: _.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: h({}, n)
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
                    url: _.ANM.INTEGRATION_JOIN(e),
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
                url: _.ANM.CONNECTION_ACCESS_TOKEN(e, t),
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
                (n.body.code === _.evJ.CONNECTION_REVOKED &&
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
            url: _.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: h({}, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) return void E.error('Two-way link: missing authorize location');
        let { code: o, error: s, errorDescription: l } = (0, a.xp)(t);
        return null != s
            ? void E.error('Two-way link: missing authorize code', {
                  error: s,
                  errorDescription: l
              })
            : await b(e, {
                  code: n,
                  state: r,
                  two_way_link_code: o,
                  token_redirect_uri: i
              });
    },
    sessionHandoff: function (e, t, n, r, o) {
        return i.tn.post({
            url: _.ANM.CONNECTIONS_SESSION_HANDOFF(e),
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
        let r = ''.concat(_.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
        return i.tn.get({
            url: r,
            body: { state: t },
            rejectWithError: !0
        });
    }
};
