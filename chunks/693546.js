var i = r(544891),
    a = r(570140),
    o = r(668781),
    s = r(287734),
    l = r(131704),
    u = r(926526),
    c = r(826581),
    d = r(246364),
    f = r(937111),
    p = r(981631),
    h = r(388032);
let _ = async (e) => {
        let n = await i.tn.get({
                url: p.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            r = (0, f.j)(n.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: r
            }),
            n
        );
    },
    m = async (e) => {
        let { guildId: n, status: r = d.wB.SUBMITTED, before: o, after: s, limit: l = d.tB, force: u = !1 } = e,
            h = u || !c.Z.hasFetched(n);
        if (!c.Z.isFetching() && h) {
            a.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var _;
                let e = await i.tn.get({
                        url: p.ANM.GUILD_JOIN_REQUESTS(n),
                        query: {
                            status: r,
                            limit: l,
                            before: o,
                            after: s
                        },
                        rejectWithError: !1
                    }),
                    u = e.body.total,
                    c = (null !== (_ = e.body.guild_join_requests) && void 0 !== _ ? _ : []).map(f.j);
                return (
                    a.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: r,
                        requests: c,
                        total: u,
                        limit: l,
                        guildId: n
                    }),
                    e
                );
            } catch (e) {
                throw (a.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE' }), e);
            }
        }
    },
    g = async (e) => {
        try {
            let n = await i.tn.del({
                url: p.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: null
                }),
                n
            );
        } catch (e) {
            throw e;
        }
    },
    E = async (e, n) => {
        try {
            return await i.tn.post({
                url: p.ANM.GUILD_JOIN_REQUEST_ACK(e, n),
                rejectWithError: !1
            });
        } catch (e) {
        } finally {
            a.Z.dispatch({
                type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
                id: n,
                guildId: e
            });
        }
    },
    v = async function (e, n, r) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.wB.APPROVED,
            l = arguments.length > 4 ? arguments[4] : void 0;
        (0, u.ID)({
            guildId: e,
            actionType: s,
            applicationUserId: n
        });
        let c = await i.tn
            .patch({
                url: p.ANM.GUILD_JOIN_REQUEST_ID(e, r),
                body: {
                    action: s,
                    rejection_reason: l
                },
                rejectWithError: !1
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === p.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        o.Z.show({
                            title: h.intl.string(h.t.DxJj4e),
                            body: h.intl.string(h.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: c.body.application_status,
            request: c.body
        });
    },
    y = async (e, n) => {
        let r = await i.tn.patch({
            url: p.ANM.GUILD_JOIN_REQUESTS(e),
            body: { action: n },
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
                guildId: e,
                action: n
            }),
            r.body
        );
    },
    b = async (e) => {
        try {
            let { body: n } = await i.tn.post({
                url: p.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: n
                }),
                n
            );
        } catch (e) {
            throw e;
        }
    },
    I = async () => {
        let e = await i.tn.get({
            url: p.ANM.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
            guilds: e.body
        });
    },
    T = (e, n) => {
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
            guildId: e,
            applicationTab: n
        });
    },
    S = (e, n) => {
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
            guildId: e,
            sortOrder: n
        });
    },
    A = (e, n) => {
        null != n &&
            (0, u.Dq)({
                guildId: e,
                applicationStatus: n.applicationStatus,
                applicationUserId: n.userId
            }),
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: n
            });
    },
    C = async function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = await i.tn.post({
                url: p.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            o = (0, l.q_)(r.body);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: o
            }),
            n && s.default.selectPrivateChannel(o.id),
            o.id
        );
    },
    N = async (e) => {
        try {
            let n = await i.tn.get({
                url: p.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: n.body.cooldown
                }),
                n
            );
        } catch (n) {
            throw (
                (a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                n)
            );
        }
    };
n.Z = {
    fetchGuildJoinRequest: _,
    fetchGuildJoinRequests: m,
    ackUserGuildJoinRequest: E,
    removeGuildJoinRequest: g,
    updateGuildJoinRequest: v,
    actionAllPendingJoinRequests: y,
    resetGuildJoinRequest: b,
    fetchRequestToJoinGuilds: I,
    setSelectedApplicationTab: T,
    setSelectedSortOrder: S,
    setSelectedGuildJoinRequest: A,
    createOrEnterJoinRequestInterview: C,
    fetchJoinRequestCooldown: N
};
