"use strict";
n.d(t, { A: () => A }), n(323874), n(14289), n(35956);
var i = n(562708),
    r = n(636537),
    a = n(228366),
    s = n(370480),
    l = n(626584),
    o = n(30370),
    d = n(174459),
    c = n(499785),
    u = n(652215);
let _ = new l.A("ConnectedAccounts");
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return r.Bo.post({
        url: u.Rsh.CONNECTIONS_CALLBACK(e),
        body: { ...t, insecure: n, friend_sync: u.txh.has(e) },
        oldFormErrors: !0,
        rejectWithError: (0, r.fT)(),
    });
}
let A = {
    fetch: () =>
        r.Bo.get({ url: u.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => a.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
            () => a.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
        ),
    async authorize(e) {
        let {
            location: t,
            twoWayLinkType: n,
            userCode: i,
            twoWayLink: a,
            successRedirect: l,
            handle: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        d.default.track(u.HAw.CONNECTED_ACCOUNT_INITIATED, { platform_type: e, location: t });
        let _ = u.Rsh.CONNECTIONS_AUTHORIZE(e),
            E = new URLSearchParams();
        null != i && E.append("two_way_user_code", i),
            null != l && E.append("success_redirect", l),
            null != n
                ? (E.append("two_way_link_type", n), E.append("two_way_link", "true"))
                : null != a && E.append("two_way_link", String(a)),
            null != c && E.append("handle", c),
            (_ = _ + "?" + E.toString());
        let A = await r.Bo.get({ url: _, oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
            { state: h } = (0, s.vA)(A.body.url ?? "");
        return null != h && o.A.addPendingAuthorizedState(h), A;
    },
    callback: E,
    connect: (e, t, n, a, s) =>
        c.A.put({
            url: u.Rsh.CONNECTION(e, t),
            body: { name: n, friend_sync: s?.friend_sync ?? u.txh.has(e) },
            context: { location: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { name: n, friend_sync: u.txh.has(e) },
            },
            rejectWithError: (0, r.fT)(),
        }),
    disconnect: (e, t) => r.Bo.del({ url: u.Rsh.CONNECTION(e, t), oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
    refresh: (e, t) =>
        r.Bo.post({ url: u.Rsh.CONNECTION_REFRESH(e, t), oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
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
            url: u.Rsh.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { ...n } },
            rejectWithError: (0, r.fT)(),
        }),
    joinServer(e, t) {
        a.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !0 }),
            r.Bo.post({ url: u.Rsh.INTEGRATION_JOIN(e), oldFormErrors: !0, rejectWithError: (0, r.fT)() }, (n) => {
                a.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !1 }),
                    n.ok ||
                        (a.h.dispatch({
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
            } = await r.Bo.get({
                url: u.Rsh.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            });
            return a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, accessToken: n }), n;
        } catch (n) {
            throw (
                (n.body.code === u.t02.CONNECTION_REVOKED &&
                    a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, revoked: !0 }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        r.Bo.post({
            url: u.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        }),
    async completeTwoWayLink(e, t, n, i, r) {
        if (null == t) return void _.error("Two-way link: missing authorize location");
        let { code: a, error: l, errorDescription: o } = (0, s.vA)(t);
        return null != l
            ? void _.error("Two-way link: missing authorize code", { error: l, errorDescription: o })
            : await E(e, { code: n, state: i, two_way_link_code: a, token_redirect_uri: r });
    },
    sessionHandoff: function (e, t, n, i, a) {
        return r.Bo.post({
            url: u.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
            body: { state: t, code: n, openid_params: i, iss: a },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append("state", t);
        let i = `${u.Rsh.CONNECTIONS_SESSION_HANDOFF(e)}?${n.toString()}`;
        return r.Bo.get({ url: i, body: { state: t }, rejectWithError: !0 });
    },
};
