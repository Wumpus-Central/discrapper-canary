n.d(t, { A: () => A }), n(323874), n(14289), n(35956);
var i = n(110259),
    a = n(636537),
    r = n(228366),
    s = n(370480),
    l = n(626584),
    o = n(30370),
    d = n(954571),
    c = n(499785),
    _ = n(652215);
let E = new l.A("ConnectedAccounts");
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.Bo.post({
        url: _.Rsh.CONNECTIONS_CALLBACK(e),
        body: { ...t, insecure: n, friend_sync: _.txh.has(e) },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
let A = {
    fetch: () =>
        a.Bo.get({ url: _.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
            () => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
        ),
    async authorize(e) {
        let {
            location: t,
            twoWayLinkType: n,
            userCode: i,
            twoWayLink: r,
            successRedirect: l,
            handle: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        d.default.track(_.HAw.CONNECTED_ACCOUNT_INITIATED, { platform_type: e, location: t });
        let E = _.Rsh.CONNECTIONS_AUTHORIZE(e),
            u = new URLSearchParams();
        null != i && u.append("two_way_user_code", i),
            null != l && u.append("success_redirect", l),
            null != n
                ? (u.append("two_way_link_type", n), u.append("two_way_link", "true"))
                : null != r && u.append("two_way_link", String(r)),
            null != c && u.append("handle", c),
            (E = E + "?" + u.toString());
        let A = await a.Bo.get({ url: E, oldFormErrors: !0, rejectWithError: !1 }),
            { state: I } = (0, s.vA)(A.body.url ?? "");
        return null != I && o.A.addPendingAuthorizedState(I), A;
    },
    callback: u,
    connect: (e, t, n, a, r) =>
        c.A.put({
            url: _.Rsh.CONNECTION(e, t),
            body: { name: n, friend_sync: r?.friend_sync ?? _.txh.has(e) },
            context: { location: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { name: n, friend_sync: _.txh.has(e) },
            },
            rejectWithError: !1,
        }),
    disconnect: (e, t) => a.Bo.del({ url: _.Rsh.CONNECTION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    refresh: (e, t) => a.Bo.post({ url: _.Rsh.CONNECTION_REFRESH(e, t), oldFormErrors: !0, rejectWithError: !1 }),
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
            url: _.Rsh.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { ...n } },
            rejectWithError: !1,
        }),
    joinServer(e, t) {
        r.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !0 }),
            a.Bo.post({ url: _.Rsh.INTEGRATION_JOIN(e), oldFormErrors: !0, rejectWithError: !1 }, (n) => {
                r.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !1 }),
                    n.ok ||
                        (r.h.dispatch({
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
            } = await a.Bo.get({ url: _.Rsh.CONNECTION_ACCESS_TOKEN(e, t), oldFormErrors: !0, rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, accessToken: n }), n;
        } catch (n) {
            throw (
                (n.body.code === _.t02.CONNECTION_REVOKED &&
                    r.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, revoked: !0 }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        a.Bo.post({
            url: _.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async completeTwoWayLink(e, t, n, i, a) {
        if (null == t) return void E.error("Two-way link: missing authorize location");
        let { code: r, error: l, errorDescription: o } = (0, s.vA)(t);
        return null != l
            ? void E.error("Two-way link: missing authorize code", { error: l, errorDescription: o })
            : await u(e, { code: n, state: i, two_way_link_code: r, token_redirect_uri: a });
    },
    sessionHandoff: function (e, t, n, i, r) {
        return a.Bo.post({
            url: _.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
            body: { state: t, code: n, openid_params: i, iss: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append("state", t);
        let i = `${_.Rsh.CONNECTIONS_SESSION_HANDOFF(e)}?${n.toString()}`;
        return a.Bo.get({ url: i, body: { state: t }, rejectWithError: !0 });
    },
};
