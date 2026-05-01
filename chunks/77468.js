"use strict";
n.d(t, { A: () => h }), n(323874), n(14289), n(35956);
var i = n(562708),
    r = n(636537),
    s = n(228366),
    a = n(370480),
    o = n(626584),
    l = n(30370),
    u = n(174459),
    c = n(499785),
    d = n(652215);
let _ = new o.A("ConnectedAccounts");
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return r.Bo.post({
        url: d.Rsh.CONNECTIONS_CALLBACK(e),
        body: { ...t, insecure: n, friend_sync: d.txh.has(e) },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
let h = {
    fetch: () =>
        r.Bo.get({ url: d.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => s.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
            () => s.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
        ),
    async authorize(e) {
        let {
            location: t,
            twoWayLinkType: n,
            userCode: i,
            twoWayLink: s,
            successRedirect: o,
            handle: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        u.default.track(d.HAw.CONNECTED_ACCOUNT_INITIATED, { platform_type: e, location: t });
        let _ = d.Rsh.CONNECTIONS_AUTHORIZE(e),
            f = new URLSearchParams();
        null != i && f.append("two_way_user_code", i),
            null != o && f.append("success_redirect", o),
            null != n
                ? (f.append("two_way_link_type", n), f.append("two_way_link", "true"))
                : null != s && f.append("two_way_link", String(s)),
            null != c && f.append("handle", c),
            (_ = _ + "?" + f.toString());
        let h = await r.Bo.get({ url: _, oldFormErrors: !0, rejectWithError: !1 }),
            { state: p } = (0, a.vA)(h.body.url ?? "");
        return null != p && l.A.addPendingAuthorizedState(p), h;
    },
    callback: f,
    connect: (e, t, n, r, s) =>
        c.A.put({
            url: d.Rsh.CONNECTION(e, t),
            body: { name: n, friend_sync: s?.friend_sync ?? d.txh.has(e) },
            context: { location: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { name: n, friend_sync: d.txh.has(e) },
            },
            rejectWithError: !1,
        }),
    disconnect: (e, t) => r.Bo.del({ url: d.Rsh.CONNECTION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    refresh: (e, t) => r.Bo.post({ url: d.Rsh.CONNECTION_REFRESH(e, t), oldFormErrors: !0, rejectWithError: !1 }),
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
        c.A.patch({
            url: d.Rsh.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { ...n } },
            rejectWithError: !1,
        }),
    joinServer(e, t) {
        s.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !0 }),
            r.Bo.post({ url: d.Rsh.INTEGRATION_JOIN(e), oldFormErrors: !0, rejectWithError: !1 }, (n) => {
                s.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !1 }),
                    n.ok ||
                        (s.h.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
                            integrationId: e,
                            error: n.hasErr ? void 0 : n.body.message,
                        }),
                        t?.());
            });
    },
    async refreshAccessToken(e, t) {
        try {
            let {
                body: { access_token: n },
            } = await r.Bo.get({ url: d.Rsh.CONNECTION_ACCESS_TOKEN(e, t), oldFormErrors: !0, rejectWithError: !1 });
            return s.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, accessToken: n }), n;
        } catch (n) {
            throw (
                (n.body.code === d.t02.CONNECTION_REVOKED &&
                    s.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, revoked: !0 }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        r.Bo.post({
            url: d.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async completeTwoWayLink(e, t, n, i, r) {
        if (null == t) return void _.error("Two-way link: missing authorize location");
        let { code: s, error: o, errorDescription: l } = (0, a.vA)(t);
        return null != o
            ? void _.error("Two-way link: missing authorize code", { error: o, errorDescription: l })
            : await f(e, { code: n, state: i, two_way_link_code: s, token_redirect_uri: r });
    },
    sessionHandoff: function (e, t, n, i, s) {
        return r.Bo.post({
            url: d.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
            body: { state: t, code: n, openid_params: i, iss: s },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append("state", t);
        let i = `${d.Rsh.CONNECTIONS_SESSION_HANDOFF(e)}?${n.toString()}`;
        return r.Bo.get({ url: i, body: { state: t }, rejectWithError: !0 });
    },
};
