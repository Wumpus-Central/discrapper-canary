n.d(t, { Z: () => I });
var r = n(544891),
    i = n(570140),
    l = n(668781),
    o = n(287734),
    a = n(131704),
    s = n(926526),
    c = n(826581),
    u = n(246364),
    d = n(937111),
    E = n(981631),
    _ = n(388032);
let I = {
    fetchGuildJoinRequest: async (e) => {
        let t = await r.tn.get({
                url: E.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            n = (0, d.j)(t.body);
        return (
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: n
            }),
            t
        );
    },
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: n = u.wB.SUBMITTED, before: l, after: o, limit: a = u.tB, force: s = !1 } = e,
            _ = s || !c.Z.hasFetched(t);
        if (!c.Z.isFetching() && _) {
            i.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var I;
                let e = await r.tn.get({
                        url: E.ANM.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: a,
                            before: l,
                            after: o
                        },
                        rejectWithError: !1
                    }),
                    s = e.body.total,
                    c = (null != (I = e.body.guild_join_requests) ? I : []).map(d.j);
                return (
                    i.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: n,
                        requests: c,
                        total: s,
                        limit: a,
                        guildId: t
                    }),
                    e
                );
            } catch (e) {
                throw (i.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE' }), e);
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await r.tn.post({
                url: E.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
                rejectWithError: !1
            });
        } catch (e) {
        } finally {
            i.Z.dispatch({
                type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
                id: t,
                guildId: e
            });
        }
    },
    removeGuildJoinRequest: async (e) => {
        try {
            let t = await r.tn.del({
                url: E.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: null
                }),
                t
            );
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function (e, t, n) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.wB.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, s.ID)({
            guildId: e,
            actionType: o,
            applicationUserId: t
        });
        let c = await r.tn
            .patch({
                url: E.ANM.GUILD_JOIN_REQUEST_ID(e, n),
                body: {
                    action: o,
                    rejection_reason: a
                },
                rejectWithError: !1
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === E.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        l.Z.show({
                            title: _.NW.string(_.t.DxJj4e),
                            body: _.NW.string(_.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: c.body.application_status,
            request: c.body
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await r.tn.patch({
            url: E.ANM.GUILD_JOIN_REQUESTS(e),
            body: { action: t },
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
                guildId: e,
                action: t
            }),
            n.body
        );
    },
    resetGuildJoinRequest: async (e) => {
        try {
            let { body: t } = await r.tn.post({
                url: E.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: t
                }),
                t
            );
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await r.tn.get({
            url: E.ANM.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        i.Z.dispatch({
            type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
            guilds: e.body
        });
    },
    setSelectedApplicationTab: (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
            guildId: e,
            applicationTab: t
        });
    },
    setSelectedSortOrder: (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
            guildId: e,
            sortOrder: t
        });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t &&
            (0, s.Dq)({
                guildId: e,
                applicationStatus: t.applicationStatus,
                applicationUserId: t.userId
            }),
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: t
            });
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await r.tn.post({
                url: E.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            l = (0, a.q_)(n.body);
        return (
            i.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: l
            }),
            t && o.default.selectPrivateChannel(l.id),
            l.id
        );
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await r.tn.get({
                url: E.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: t.body.cooldown
                }),
                t
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                t)
            );
        }
    }
};
