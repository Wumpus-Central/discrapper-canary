var i = n(620632),
    r = n(73153),
    l = n(157559),
    u = n(597798),
    s = n(95701),
    o = n(51271),
    E = n(844944),
    a = n(513461),
    d = n(212455),
    _ = n(652215),
    c = n(792996);
n.d(
    e,
    {},
    {
        A: {
            fetchGuildJoinRequests: async function (t) {
                let { guildId: e, status: n = a.B5.SUBMITTED, before: l, after: u, limit: s = 25, force: o = !1 } = t,
                    c = o || !E.A.hasFetched(e);
                if (!E.A.isFetching() && c) {
                    r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
                    try {
                        let t = await i.Bo.get({
                                url: _.Rsh.GUILD_JOIN_REQUESTS(e),
                                query: { status: n, limit: s, before: l, after: u },
                                rejectWithError: (0, i.fT)(),
                            }),
                            o = t.body.total,
                            E = (t.body.guild_join_requests ?? []).map(d.j);
                        return (
                            r.h.dispatch({
                                type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                                status: n,
                                requests: E,
                                total: o,
                                limit: s,
                                guildId: e,
                            }),
                            t
                        );
                    } catch (t) {
                        throw (r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), t);
                    }
                }
            },
            fetchGuildJoinRequestsForUser: async function (t, e) {
                let n = await i.Bo.get({ url: _.Rsh.GUILD_JOIN_REQUESTS_FOR_USER(t, e), rejectWithError: (0, i.fT)() }),
                    l = (n.body ?? []).map(d.j);
                return (
                    r.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS",
                        guildId: t,
                        userId: e,
                        requests: l,
                    }),
                    n
                );
            },
            ackUserGuildJoinRequest: async function (t, e) {
                try {
                    return await i.Bo.post({ url: _.Rsh.GUILD_JOIN_REQUEST_ACK(t, e), rejectWithError: (0, i.fT)() });
                } catch (t) {
                } finally {
                    r.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: e, guildId: t });
                }
            },
            removeGuildJoinRequest: async function (t) {
                try {
                    let e = await i.Bo.del({
                        url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                        rejectWithError: (0, i.fT)(),
                    });
                    return (r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: t, request: null }), e);
                } catch (t) {
                    throw t;
                }
            },
            updateGuildJoinRequest: async function (t, e, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.B5.APPROVED,
                    s = arguments.length > 4 ? arguments[4] : void 0;
                (0, o.iN)({ guildId: t, actionType: u, applicationUserId: e });
                let E = await i.Bo.patch({
                    url: _.Rsh.GUILD_JOIN_REQUEST(t, n),
                    body: { action: u, rejection_reason: s },
                    rejectWithError: (0, i.fT)(),
                }).catch(
                    (t) => (
                        t &&
                            t.body &&
                            t.body.code === _.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                            l.A.show({ title: c.intl.string(c.t.DxJj4e), body: c.intl.string(c.t.rSAOk9) }),
                        Promise.reject(t)
                    ),
                );
                r.h.dispatch({
                    type: "GUILD_JOIN_REQUEST_UPDATE",
                    guildId: t,
                    status: E.body.application_status,
                    request: E.body,
                });
            },
            resetGuildJoinRequest: async function (t) {
                try {
                    let { body: e } = await i.Bo.post({
                        url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                        rejectWithError: (0, i.fT)(),
                    });
                    return (r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: t, request: e }), e);
                } catch (t) {
                    throw t;
                }
            },
            fetchRequestToJoinGuilds: async function () {
                let t = await i.Bo.get({ url: _.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: (0, i.fT)() });
                r.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: t.body });
            },
            setSelectedApplicationTab: function (t, e) {
                r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: t, applicationTab: e });
            },
            setSelectedSortOrder: function (t, e, n) {
                r.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
                    guildId: t,
                    sortOrder: e,
                    applicationStatus: n,
                });
            },
            setSelectedGuildJoinRequest: function (t, e) {
                (null != e &&
                    (0, o.gH)({ guildId: t, applicationStatus: e.applicationStatus, applicationUserId: e.userId }),
                    r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: t, request: e }));
            },
            fetchJoinRequestForInterview: async function (t) {
                let e = await i.Bo.get({ url: _.Rsh.JOIN_REQUEST(t), rejectWithError: (0, i.fT)() }),
                    n = (0, d.j)(e.body);
                return (r.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), e);
            },
            createOrEnterJoinRequestInterview: async function (t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = await i.Bo.post({ url: _.Rsh.JOIN_REQUEST_INTERVIEW(t), rejectWithError: (0, i.fT)() }),
                    l = (0, s.UE)(n.body);
                return (
                    r.h.dispatch({ type: "CHANNEL_CREATE", channel: l }),
                    e && u.default.selectPrivateChannel(l.id),
                    l.id
                );
            },
        },
    },
);
