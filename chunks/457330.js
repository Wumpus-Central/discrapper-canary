n.d(t, { Z: () => E }), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(275759),
    s = n(710845),
    l = n(553795),
    c = n(626135),
    u = n(573261),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new s.Z("ConnectedAccounts");
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: d.ANM.CONNECTIONS_CALLBACK(e),
        body: h(_({}, t), {
            insecure: n,
            friend_sync: d.BFP.has(e),
        }),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
let E = {
    fetch: () =>
        i.tn
            .get({
                url: d.ANM.CONNECTIONS,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: "USER_CONNECTIONS_UPDATE",
                        local: !0,
                        accounts: e.body,
                    }),
                () =>
                    o.Z.dispatch({
                        type: "USER_CONNECTIONS_UPDATE",
                        local: !0,
                        accounts: [],
                    }),
            ),
    async authorize(e) {
        var t;
        let {
            location: n,
            twoWayLinkType: r,
            userCode: o,
            twoWayLink: s,
            successRedirect: u,
            handle: f,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c.default.track(d.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n,
        });
        let _ = d.ANM.CONNECTIONS_AUTHORIZE(e),
            p = new URLSearchParams();
        null != o && p.append("two_way_user_code", o),
            null != u && p.append("success_redirect", u),
            null != r
                ? (p.append("two_way_link_type", r), p.append("two_way_link", "true"))
                : null != s && p.append("two_way_link", String(s)),
            null != f && p.append("handle", f),
            (_ = _ + "?" + p.toString());
        let h = await i.tn.get({
                url: _,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            { state: m } = (0, a.xp)(null != (t = h.body.url) ? t : "");
        return null != m && l.Z.addPendingAuthorizedState(m), h;
    },
    callback: g,
    connect(e, t, n, i, o) {
        var a;
        return u.Z.put({
            url: d.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null != (a = null == o ? void 0 : o.friend_sync) ? a : d.BFP.has(e),
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: d.BFP.has(e),
                },
            },
            rejectWithError: !1,
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: d.ANM.CONNECTION(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: d.ANM.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
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
        u.Z.patch({
            url: d.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: _({}, n),
            },
            rejectWithError: !1,
        }),
    joinServer(e, t) {
        o.Z.dispatch({
            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
            integrationId: e,
            joining: !0,
        }),
            i.tn.post(
                {
                    url: d.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                },
                (n) => {
                    o.Z.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !1,
                    }),
                        n.ok ||
                            (o.Z.dispatch({
                                type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
                                integrationId: e,
                                error: n.hasErr ? void 0 : n.body.message,
                            }),
                            null == t || t());
                },
            );
    },
    async refreshAccessToken(e, t) {
        try {
            let {
                body: { access_token: n },
            } = await i.tn.get({
                url: d.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            return (
                o.Z.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n,
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === d.evJ.CONNECTION_REVOKED &&
                    o.Z.dispatch({
                        type: "USER_CONNECTION_UPDATE",
                        platformType: e,
                        id: t,
                        revoked: !0,
                    }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        i.tn.post({
            url: d.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: _({}, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) return void m.error("Two-way link: missing authorize location");
        let { code: o, error: s, errorDescription: l } = (0, a.xp)(t);
        return null != s
            ? void m.error("Two-way link: missing authorize code", {
                  error: s,
                  errorDescription: l,
              })
            : await g(e, {
                  code: n,
                  state: r,
                  two_way_link_code: o,
                  token_redirect_uri: i,
              });
    },
    sessionHandoff: function (e, t, n, r, o) {
        return i.tn.post({
            url: d.ANM.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: r,
                iss: o,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append("state", t);
        let r = "".concat(d.ANM.CONNECTIONS_SESSION_HANDOFF(e), "?").concat(n.toString());
        return i.tn.get({
            url: r,
            body: { state: t },
            rejectWithError: !0,
        });
    },
};
