var i = r(610138);
var a = r(216116);
var o = r(78328);
var s = r(815648);
var l = r(47120);
var u = r(990547),
    c = r(544891),
    d = r(570140),
    f = r(275759),
    p = r(185669),
    h = r(710845),
    _ = r(314897),
    m = r(553795),
    g = r(626135),
    E = r(573261),
    v = r(981631);
let y = new h.Z('ConnectedAccounts');
function b(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return c.tn.post({
        url: v.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...n,
            insecure: r,
            friend_sync: v.BFP.has(e),
            ...(p.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.callback' }).enabled ? { session_id: _.default.getSessionId() } : {})
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function I(e, n, r, i, a) {
    return c.tn.post({
        url: v.ANM.CONNECTIONS_SESSION_HANDOFF(e),
        body: {
            state: n,
            code: r,
            openid_params: i,
            iss: a
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function T(e, n) {
    let r = new URLSearchParams();
    r.append('state', n);
    let i = ''.concat(v.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(r.toString());
    return c.tn.get({
        url: i,
        body: { state: n },
        rejectWithError: !0
    });
}
n.Z = {
    fetch: () =>
        c.tn
            .get({
                url: v.ANM.CONNECTIONS,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    d.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    d.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        var n;
        let { location: r, twoWayLinkType: i, userCode: a, twoWayLink: o, successRedirect: s, handle: l } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        g.default.track(v.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: r
        });
        let u = v.ANM.CONNECTIONS_AUTHORIZE(e),
            d = new URLSearchParams();
        null != a && d.append('two_way_user_code', a), null != s && d.append('success_redirect', s), null != i ? (d.append('two_way_link_type', i), d.append('two_way_link', 'true')) : null != o && d.append('two_way_link', String(o)), null != l && d.append('handle', l);
        let { enabled: h } = p.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (h) {
            let e = _.default.getSessionId();
            null != e && d.append('session_id', e);
        }
        u = u + '?' + d.toString();
        let E = await c.tn.get({
                url: u,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            { state: y } = (0, f.xp)(null !== (n = E.body.url) && void 0 !== n ? n : '');
        return null != y && !p.g.getCurrentConfig({ location: 'ConnectedAccountsActionCreators.authorize' }).enabled && m.Z.addPendingAuthorizedState(y), E;
    },
    callback: b,
    connect(e, n, r, i, a) {
        var o;
        return E.Z.put({
            url: v.ANM.CONNECTION(e, n),
            body: {
                name: r,
                friend_sync: null !== (o = null == a ? void 0 : a.friend_sync) && void 0 !== o ? o : v.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: u.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: r,
                    friend_sync: v.BFP.has(e)
                }
            },
            rejectWithError: !1
        });
    },
    disconnect: (e, n) =>
        c.tn.del({
            url: v.ANM.CONNECTION(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    refresh: (e, n) =>
        c.tn.post({
            url: v.ANM.CONNECTION_REFRESH(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setVisibility(e, n, r) {
        return this.update(e, n, { visibility: 1 === r });
    },
    setMetadataVisibility(e, n, r) {
        return this.update(e, n, { metadata_visibility: 1 === r });
    },
    setFriendSync(e, n, r) {
        return this.update(e, n, { friend_sync: r });
    },
    setShowActivity(e, n, r) {
        return this.update(e, n, { show_activity: r });
    },
    update: (e, n, r) =>
        E.Z.patch({
            url: v.ANM.CONNECTION(e, n),
            body: r,
            oldFormErrors: !0,
            trackedActionData: {
                event: u.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { ...r }
            },
            rejectWithError: !1
        }),
    joinServer(e, n) {
        d.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            c.tn.post(
                {
                    url: v.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                },
                (r) => {
                    d.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        !r.ok &&
                            (d.Z.dispatch({
                                type: 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR',
                                integrationId: e,
                                error: r.hasErr ? void 0 : r.body.message
                            }),
                            null == n || n());
                }
            );
    },
    async refreshAccessToken(e, n) {
        try {
            let {
                body: { access_token: r }
            } = await c.tn.get({
                url: v.ANM.CONNECTION_ACCESS_TOKEN(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            });
            return (
                d.Z.dispatch({
                    type: 'USER_CONNECTION_UPDATE',
                    platformType: e,
                    id: n,
                    accessToken: r
                }),
                r
            );
        } catch (r) {
            throw (
                (r.body.code === v.evJ.CONNECTION_REVOKED &&
                    d.Z.dispatch({
                        type: 'USER_CONNECTION_UPDATE',
                        platformType: e,
                        id: n,
                        revoked: !0
                    }),
                r)
            );
        }
    },
    linkDispatchAuthCallback: (e, n) =>
        c.tn.post({
            url: v.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async completeTwoWayLink(e, n, r, i, a) {
        if (null == n) {
            y.error('Two-way link: missing authorize location');
            return;
        }
        let { code: o, error: s, errorDescription: l } = (0, f.xp)(n);
        if (null != s) {
            y.error('Two-way link: missing authorize code', {
                error: s,
                errorDescription: l
            });
            return;
        }
        return await b(e, {
            code: r,
            state: i,
            two_way_link_code: o,
            token_redirect_uri: a
        });
    },
    sessionHandoff: I,
    getHandoffStatus: T
};
