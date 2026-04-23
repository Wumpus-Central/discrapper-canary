n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var i = n(110259),
    r = n(636537),
    a = n(228366),
    s = n(370480),
    _ = n(626584),
    l = n(30370),
    o = n(954571),
    E = n(499785),
    d = n(652215);
let c = new _.A("ConnectedAccounts");
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return r.Bo.post({
        url: d.Rsh.CONNECTIONS_CALLBACK(e),
        body: { ...t, insecure: n, friend_sync: d.txh.has(e) },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
let I = {
    fetch: () =>
        r.Bo.get({ url: d.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => a.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
            () => a.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
        ),
    async authorize(e) {
        let {
            location: t,
            twoWayLinkType: n,
            userCode: i,
            twoWayLink: a,
            successRedirect: _,
            handle: E,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o.default.track(d.HAw.CONNECTED_ACCOUNT_INITIATED, { platform_type: e, location: t });
        let c = d.Rsh.CONNECTIONS_AUTHORIZE(e),
            u = new URLSearchParams();
        null != i && u.append("two_way_user_code", i),
            null != _ && u.append("success_redirect", _),
            null != n
                ? (u.append("two_way_link_type", n), u.append("two_way_link", "true"))
                : null != a && u.append("two_way_link", String(a)),
            null != E && u.append("handle", E),
            (c = c + "?" + u.toString());
        let I = await r.Bo.get({ url: c, oldFormErrors: !0, rejectWithError: !1 }),
            { state: A } = (0, s.vA)(I.body.url ?? "");
        return null != A && l.A.addPendingAuthorizedState(A), I;
    },
    callback: u,
    connect: (e, t, n, r, a) =>
        E.A.put({
            url: d.Rsh.CONNECTION(e, t),
            body: { name: n, friend_sync: a?.friend_sync ?? d.txh.has(e) },
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
        E.A.patch({
            url: d.Rsh.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { ...n } },
            rejectWithError: !1,
        }),
    joinServer(e, t) {
        a.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !0 }),
            r.Bo.post({ url: d.Rsh.INTEGRATION_JOIN(e), oldFormErrors: !0, rejectWithError: !1 }, (n) => {
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
            } = await r.Bo.get({ url: d.Rsh.CONNECTION_ACCESS_TOKEN(e, t), oldFormErrors: !0, rejectWithError: !1 });
            return a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, accessToken: n }), n;
        } catch (n) {
            throw (
                (n.body.code === d.t02.CONNECTION_REVOKED &&
                    a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, revoked: !0 }),
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
        if (null == t) return void c.error("Two-way link: missing authorize location");
        let { code: a, error: _, errorDescription: l } = (0, s.vA)(t);
        return null != _
            ? void c.error("Two-way link: missing authorize code", { error: _, errorDescription: l })
            : await u(e, { code: n, state: i, two_way_link_code: a, token_redirect_uri: r });
    },
    sessionHandoff: function (e, t, n, i, a) {
        return r.Bo.post({
            url: d.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
            body: { state: t, code: n, openid_params: i, iss: a },
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
