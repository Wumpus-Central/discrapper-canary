n.d(t, { A: () => E }), n(896048), n(680155), n(323874), n(14289), n(35956);
var r = n(110259),
    i = n(562465),
    a = n(73153),
    s = n(370480),
    o = n(626584),
    l = n(962173),
    c = n(954571),
    u = n(499785),
    d = n(652215);
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
function p(e) {
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
function h(e, t) {
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
let m = new o.A("ConnectedAccounts");
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.Bo.post({
        url: d.Rsh.CONNECTIONS_CALLBACK(e),
        body: h(p({}, t), {
            insecure: n,
            friend_sync: d.txh.has(e),
        }),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
let E = {
    fetch: () =>
        i.Bo.get({
            url: d.Rsh.CONNECTIONS,
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) =>
                a.h.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: e.body,
                }),
            () =>
                a.h.dispatch({
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
            userCode: a,
            twoWayLink: o,
            successRedirect: u,
            handle: f,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c.default.track(d.HAw.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n,
        });
        let p = d.Rsh.CONNECTIONS_AUTHORIZE(e),
            _ = new URLSearchParams();
        null != a && _.append("two_way_user_code", a),
            null != u && _.append("success_redirect", u),
            null != r
                ? (_.append("two_way_link_type", r), _.append("two_way_link", "true"))
                : null != o && _.append("two_way_link", String(o)),
            null != f && _.append("handle", f),
            (p = p + "?" + _.toString());
        let h = await i.Bo.get({
                url: p,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            { state: m } = (0, s.vA)(null != (t = h.body.url) ? t : "");
        return null != m && l.A.addPendingAuthorizedState(m), h;
    },
    callback: g,
    connect(e, t, n, i, a) {
        var s;
        return u.A.put({
            url: d.Rsh.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null != (s = null == a ? void 0 : a.friend_sync) ? s : d.txh.has(e),
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: d.txh.has(e),
                },
            },
            rejectWithError: !1,
        });
    },
    disconnect: (e, t) =>
        i.Bo.del({
            url: d.Rsh.CONNECTION(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    refresh: (e, t) =>
        i.Bo.post({
            url: d.Rsh.CONNECTION_REFRESH(e, t),
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
        u.A.patch({
            url: d.Rsh.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: p({}, n),
            },
            rejectWithError: !1,
        }),
    joinServer(e, t) {
        a.h.dispatch({
            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
            integrationId: e,
            joining: !0,
        }),
            i.Bo.post(
                {
                    url: d.Rsh.INTEGRATION_JOIN(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                },
                (n) => {
                    a.h.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !1,
                    }),
                        n.ok ||
                            (a.h.dispatch({
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
            } = await i.Bo.get({
                url: d.Rsh.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            return (
                a.h.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n,
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === d.t02.CONNECTION_REVOKED &&
                    a.h.dispatch({
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
        i.Bo.post({
            url: d.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: p({}, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) return void m.error("Two-way link: missing authorize location");
        let { code: a, error: o, errorDescription: l } = (0, s.vA)(t);
        return null != o
            ? void m.error("Two-way link: missing authorize code", {
                  error: o,
                  errorDescription: l,
              })
            : await g(e, {
                  code: n,
                  state: r,
                  two_way_link_code: a,
                  token_redirect_uri: i,
              });
    },
    sessionHandoff: function (e, t, n, r, a) {
        return i.Bo.post({
            url: d.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: r,
                iss: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append("state", t);
        let r = "".concat(d.Rsh.CONNECTIONS_SESSION_HANDOFF(e), "?").concat(n.toString());
        return i.Bo.get({
            url: r,
            body: { state: t },
            rejectWithError: !0,
        });
    },
};
