n.d(t, { Z: () => I });
var r = n(544891),
    i = n(570140),
    l = n(668781),
    a = n(287734),
    s = n(131704),
    o = n(926526),
    u = n(826581),
    c = n(246364),
    d = n(937111),
    _ = n(981631),
    E = n(388032);
let I = {
    fetchGuildJoinRequest: async (e) => {
        let t = await r.tn.get({
                url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
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
        let { guildId: t, status: n = c.wB.SUBMITTED, before: l, after: a, limit: s = c.tB, force: o = !1 } = e,
            E = o || !u.Z.hasFetched(t);
        if (!u.Z.isFetching() && E) {
            i.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var I;
                let e = await r.tn.get({
                        url: _.ANM.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: s,
                            before: l,
                            after: a
                        },
                        rejectWithError: !1
                    }),
                    o = e.body.total,
                    u = (null != (I = e.body.guild_join_requests) ? I : []).map(d.j);
                return (
                    i.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: n,
                        requests: u,
                        total: o,
                        limit: s,
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
                url: _.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
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
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.wB.APPROVED,
            s = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.ID)({
            guildId: e,
            actionType: a,
            applicationUserId: t
        });
        let u = await r.tn
            .patch({
                url: _.ANM.GUILD_JOIN_REQUEST_ID(e, n),
                body: {
                    action: a,
                    rejection_reason: s
                },
                rejectWithError: !1
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === _.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        l.Z.show({
                            title: E.NW.string(E.t.DxJj4e),
                            body: E.NW.string(E.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: u.body.application_status,
            request: u.body
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await r.tn.patch({
            url: _.ANM.GUILD_JOIN_REQUESTS(e),
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
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
            url: _.ANM.USER_JOIN_REQUEST_GUILDS,
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
            (0, o.Dq)({
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
                url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            l = (0, s.q_)(n.body);
        return (
            i.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: l
            }),
            t && a.default.selectPrivateChannel(l.id),
            l.id
        );
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await r.tn.get({
                url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
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
