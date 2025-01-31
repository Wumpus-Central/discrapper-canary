n.d(t, { Z: () => m }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(990547),
    r = n(544891),
    a = n(570140),
    s = n(275759),
    o = n(185669),
    l = n(710845),
    u = n(314897),
    c = n(553795),
    d = n(626135),
    f = n(573261),
    _ = n(981631);
let p = new l.Z('ConnectedAccounts');
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return r.tn.post({
        url: _.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: _.BFP.has(e),
            ...(o.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.callback' }).enabled ? { session_id: u.default.getSessionId() } : {})
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
let m = {
    fetch: () =>
        r.tn
            .get({
                url: _.ANM.CONNECTIONS,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        var t;
        let { location: n, twoWayLinkType: i, userCode: a, twoWayLink: l, successRedirect: f, handle: p } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        d.default.track(_.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let h = _.ANM.CONNECTIONS_AUTHORIZE(e),
            m = new URLSearchParams();
        null != a && m.append('two_way_user_code', a), null != f && m.append('success_redirect', f), null != i ? (m.append('two_way_link_type', i), m.append('two_way_link', 'true')) : null != l && m.append('two_way_link', String(l)), null != p && m.append('handle', p);
        let { enabled: g } = o.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (g) {
            let e = u.default.getSessionId();
            null != e && m.append('session_id', e);
        }
        h = h + '?' + m.toString();
        let E = await r.tn.get({
                url: h,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            { state: v } = (0, s.xp)(null !== (t = E.body.url) && void 0 !== t ? t : '');
        return null == v || o.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.authorize' }).enabled || c.Z.addPendingAuthorizedState(v), E;
    },
    callback: h,
    connect(e, t, n, r, a) {
        var s;
        return f.Z.put({
            url: _.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (s = null == a ? void 0 : a.friend_sync) && void 0 !== s ? s : _.BFP.has(e)
            },
            context: { location: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: _.BFP.has(e)
                }
            },
            rejectWithError: !1
        });
    },
    disconnect: (e, t) =>
        r.tn.del({
            url: _.ANM.CONNECTION(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    refresh: (e, t) =>
        r.tn.post({
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
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { ...n }
            },
            rejectWithError: !1
        }),
    joinServer(e, t) {
        a.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            r.tn.post(
                {
                    url: _.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                },
                (n) => {
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        n.ok ||
                            (a.Z.dispatch({
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
            } = await r.tn.get({
                url: _.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
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
                    a.Z.dispatch({
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
        r.tn.post({
            url: _.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async completeTwoWayLink(e, t, n, i, r) {
        if (null == t) {
            p.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: l } = (0, s.xp)(t);
        if (null != o) {
            p.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: l
            });
            return;
        }
        return await h(e, {
            code: n,
            state: i,
            two_way_link_code: a,
            token_redirect_uri: r
        });
    },
    sessionHandoff: function (e, t, n, i, a) {
        return r.tn.post({
            url: _.ANM.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: i,
                iss: a
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append('state', t);
        let i = ''.concat(_.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
        return r.tn.get({
            url: i,
            body: { state: t },
            rejectWithError: !0
        });
    }
};
