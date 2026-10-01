(n.d(t, { A: () => h }), n(323874), n(14289), n(35956));
var i = n(562708),
    r = n(636537),
    a = n(73153),
    s = n(370480),
    l = n(888363),
    o = n(306677),
    d = n(626584),
    c = n(30370),
    u = n(174459),
    _ = n(499785),
    E = n(652215);
let A = new d.A("ConnectedAccounts"),
    h = {
        fetch: l.q,
        async authorize(e) {
            let {
                location: t,
                twoWayLinkType: n,
                userCode: i,
                twoWayLink: a,
                successRedirect: l,
                handle: o,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            u.default.track(E.HAw.CONNECTED_ACCOUNT_INITIATED, { platform_type: e, location: t });
            let d = E.Rsh.CONNECTIONS_AUTHORIZE(e),
                _ = new URLSearchParams();
            (null != i && _.append("two_way_user_code", i),
                null != l && _.append("success_redirect", l),
                null != n
                    ? (_.append("two_way_link_type", n), _.append("two_way_link", "true"))
                    : null != a && _.append("two_way_link", String(a)),
                null != o && _.append("handle", o),
                (d = d + "?" + _.toString()));
            let A = await r.Bo.get({ url: d, oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
                { state: h } = (0, s.vA)(A.body.url ?? "");
            return (null != h && c.A.addPendingAuthorizedState(h), A);
        },
        callback: o.Q,
        connect: (e, t, n, a, s) =>
            _.A.put({
                url: E.Rsh.CONNECTION(e, t),
                body: { name: n, friend_sync: s?.friend_sync ?? E.txh.has(e) },
                context: { location: a },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: { name: n, friend_sync: E.txh.has(e) },
                },
                rejectWithError: (0, r.fT)(),
            }),
        disconnect: (e, t) =>
            r.Bo.del({ url: E.Rsh.CONNECTION(e, t), oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
        refresh: (e, t) =>
            r.Bo.post({ url: E.Rsh.CONNECTION_REFRESH(e, t), oldFormErrors: !0, rejectWithError: (0, r.fT)() }),
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
            _.A.patch({
                url: E.Rsh.CONNECTION(e, t),
                body: n,
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { ...n } },
                rejectWithError: (0, r.fT)(),
            }),
        joinServer(e, t) {
            (a.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !0 }),
                r.Bo.post({ url: E.Rsh.INTEGRATION_JOIN(e), oldFormErrors: !0, rejectWithError: (0, r.fT)() }, (n) => {
                    (a.h.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: e, joining: !1 }),
                        n.ok ||
                            (a.h.dispatch({
                                type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
                                integrationId: e,
                                error: n.hasErr ? void 0 : n.body.message,
                            }),
                            t?.()));
                }));
        },
        async refreshAccessToken(e, t) {
            try {
                let {
                    body: { access_token: n },
                } = await r.Bo.get({
                    url: E.Rsh.CONNECTION_ACCESS_TOKEN(e, t),
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                });
                return (a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, accessToken: n }), n);
            } catch (n) {
                throw (
                    n.body.code === E.t02.CONNECTION_REVOKED &&
                        a.h.dispatch({ type: "USER_CONNECTION_UPDATE", platformType: e, id: t, revoked: !0 }),
                    n
                );
            }
        },
        linkDispatchAuthCallback: (e, t) =>
            r.Bo.post({
                url: E.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                body: { ...t },
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            }),
        async completeTwoWayLink(e, t, n, i, r) {
            if (null == t) return void A.error("Two-way link: missing authorize location");
            let { code: a, error: l, errorDescription: d } = (0, s.vA)(t);
            return null != l
                ? void A.error("Two-way link: missing authorize code", { error: l, errorDescription: d })
                : await (0, o.Q)(e, { code: n, state: i, two_way_link_code: a, token_redirect_uri: r });
        },
        sessionHandoff: function (e, t, n, i, a) {
            return r.Bo.post({
                url: E.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
                body: { state: t, code: n, openid_params: i, iss: a },
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            });
        },
        getHandoffStatus: function (e, t) {
            let n = new URLSearchParams();
            n.append("state", t);
            let i = `${E.Rsh.CONNECTIONS_SESSION_HANDOFF(e)}?${n.toString()}`;
            return r.Bo.get({ url: i, body: { state: t }, rejectWithError: !0 });
        },
    };
