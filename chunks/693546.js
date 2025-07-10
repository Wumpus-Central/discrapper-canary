n.d(t, { Z: () => E });
var i = n(544891),
    r = n(570140),
    l = n(668781),
    o = n(287734),
    s = n(131704),
    a = n(926526),
    c = n(826581),
    d = n(246364),
    u = n(937111),
    _ = n(981631),
    h = n(388032);
let E = {
    fetchGuildJoinRequest: async (e) => {
        let t = await i.tn.get({
                url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            n = (0, u.j)(t.body);
        return (
            r.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: n
            }),
            t
        );
    },
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: n = d.wB.SUBMITTED, before: l, after: o, limit: s = d.tB, force: a = !1 } = e,
            h = a || !c.Z.hasFetched(t);
        if (!c.Z.isFetching() && h) {
            r.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var E;
                let e = await i.tn.get({
                        url: _.ANM.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: s,
                            before: l,
                            after: o
                        },
                        rejectWithError: !1
                    }),
                    a = e.body.total,
                    c = (null != (E = e.body.guild_join_requests) ? E : []).map(u.j);
                return (
                    r.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: n,
                        requests: c,
                        total: a,
                        limit: s,
                        guildId: t
                    }),
                    e
                );
            } catch (e) {
                throw (r.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE' }), e);
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await i.tn.post({
                url: _.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
                rejectWithError: !1
            });
        } catch (e) {
        } finally {
            r.Z.dispatch({
                type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
                id: t,
                guildId: e
            });
        }
    },
    removeGuildJoinRequest: async (e) => {
        try {
            let t = await i.tn.del({
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                r.Z.dispatch({
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
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.wB.APPROVED,
            s = arguments.length > 4 ? arguments[4] : void 0;
        (0, a.ID)({
            guildId: e,
            actionType: o,
            applicationUserId: t
        });
        let c = await i.tn
            .patch({
                url: _.ANM.GUILD_JOIN_REQUEST_ID(e, n),
                body: {
                    action: o,
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
                            title: h.intl.string(h.t.DxJj4e),
                            body: h.intl.string(h.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        r.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: c.body.application_status,
            request: c.body
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await i.tn.patch({
            url: _.ANM.GUILD_JOIN_REQUESTS(e),
            body: { action: t },
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
                guildId: e,
                action: t
            }),
            n.body
        );
    },
    resetGuildJoinRequest: async (e) => {
        try {
            let { body: t } = await i.tn.post({
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                r.Z.dispatch({
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
        let e = await i.tn.get({
            url: _.ANM.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
            guilds: e.body
        });
    },
    setSelectedApplicationTab: (e, t) => {
        r.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
            guildId: e,
            applicationTab: t
        });
    },
    setSelectedSortOrder: (e, t) => {
        r.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
            guildId: e,
            sortOrder: t
        });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        (null != t &&
            (0, a.Dq)({
                guildId: e,
                applicationStatus: t.applicationStatus,
                applicationUserId: t.userId
            }),
            r.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: t
            }));
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.tn.post({
                url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            l = (0, s.q_)(n.body);
        return (
            r.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: l
            }),
            t && o.default.selectPrivateChannel(l.id),
            l.id
        );
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await i.tn.get({
                url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return (
                r.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: t.body.cooldown
                }),
                t
            );
        } catch (t) {
            throw (
                r.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                t
            );
        }
    }
};
