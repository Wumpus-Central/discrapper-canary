n.d(t, { Z: () => p });
var i = n(544891),
    r = n(570140),
    a = n(668781),
    s = n(287734),
    o = n(131704),
    l = n(926526),
    u = n(826581),
    c = n(246364),
    d = n(937111),
    f = n(981631),
    _ = n(388032);
let p = {
    fetchGuildJoinRequest: async (e) => {
        let t = await i.tn.get({
                url: f.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            n = (0, d.j)(t.body);
        return (
            r.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: n
            }),
            t
        );
    },
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: n = c.wB.SUBMITTED, before: a, after: s, limit: o = c.tB, force: l = !1 } = e,
            _ = l || !u.Z.hasFetched(t);
        if (!u.Z.isFetching() && _) {
            r.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var p;
                let e = await i.tn.get({
                        url: f.ANM.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: o,
                            before: a,
                            after: s
                        },
                        rejectWithError: !1
                    }),
                    l = e.body.total,
                    u = (null !== (p = e.body.guild_join_requests) && void 0 !== p ? p : []).map(d.j);
                return (
                    r.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: n,
                        requests: u,
                        total: l,
                        limit: o,
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
                url: f.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
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
                url: f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.wB.APPROVED,
            o = arguments.length > 4 ? arguments[4] : void 0;
        (0, l.ID)({
            guildId: e,
            actionType: s,
            applicationUserId: t
        });
        let u = await i.tn
            .patch({
                url: f.ANM.GUILD_JOIN_REQUEST_ID(e, n),
                body: {
                    action: s,
                    rejection_reason: o
                },
                rejectWithError: !1
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === f.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        a.Z.show({
                            title: _.intl.string(_.t.DxJj4e),
                            body: _.intl.string(_.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        r.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: u.body.application_status,
            request: u.body
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await i.tn.patch({
            url: f.ANM.GUILD_JOIN_REQUESTS(e),
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
                url: f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
            url: f.ANM.USER_JOIN_REQUEST_GUILDS,
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
        null != t &&
            (0, l.Dq)({
                guildId: e,
                applicationStatus: t.applicationStatus,
                applicationUserId: t.userId
            }),
            r.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: t
            });
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.tn.post({
                url: f.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            a = (0, o.q_)(n.body);
        return (
            r.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: a
            }),
            t && s.default.selectPrivateChannel(a.id),
            a.id
        );
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await i.tn.get({
                url: f.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
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
                (r.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                t)
            );
        }
    }
};
