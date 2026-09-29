n.d(t, { A: () => A });
var i = n(636537),
    l = n(228366),
    r = n(157559),
    s = n(730852),
    a = n(95701),
    o = n(51271),
    c = n(844944),
    E = n(513461),
    u = n(212455),
    d = n(652215),
    _ = n(375708);
let A = {
    fetchGuildJoinRequests: async function e(e) {
        let { guildId: t, status: n = E.B5.SUBMITTED, before: r, after: s, limit: a = 25, force: o = !1 } = e,
            _ = o || !c.A.hasFetched(t);
        if (!c.A.isFetching() && _) {
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let e = await i.Bo.get({
                        url: d.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: { status: n, limit: a, before: r, after: s },
                        rejectWithError: (0, i.fT)(),
                    }),
                    o = e.body.total,
                    c = (e.body.guild_join_requests ?? []).map(u.j);
                return (
                    l.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: c,
                        total: o,
                        limit: a,
                        guildId: t,
                    }),
                    e
                );
            } catch (e) {
                throw (l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e);
            }
        }
    },
    fetchGuildJoinRequestsForUser: async function e(e, t) {
        let n = await i.Bo.get({ url: d.Rsh.GUILD_JOIN_REQUESTS_FOR_USER(e, t), rejectWithError: (0, i.fT)() }),
            r = (n.body ?? []).map(u.j);
        return (
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: e, userId: t, requests: r }), n
        );
    },
    ackUserGuildJoinRequest: async function e(e, t) {
        try {
            return await i.Bo.post({ url: d.Rsh.GUILD_JOIN_REQUEST_ACK(e, t), rejectWithError: (0, i.fT)() });
        } catch (e) {
        } finally {
            l.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: t, guildId: e });
        }
    },
    removeGuildJoinRequest: async function e(e) {
        try {
            let t = await i.Bo.del({ url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: (0, i.fT)() });
            return (l.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: null }), t);
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function e(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.iN)({ guildId: e, actionType: s, applicationUserId: t });
        let c = await i.Bo.patch({
            url: d.Rsh.GUILD_JOIN_REQUEST(e, n),
            body: { action: s, rejection_reason: a },
            rejectWithError: (0, i.fT)(),
        }).catch(
            (e) => (
                e &&
                    e.body &&
                    e.body.code === d.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    r.A.show({ title: _.intl.string(_.t.DxJj4e), body: _.intl.string(_.t.rSAOk9) }),
                Promise.reject(e)
            ),
        );
        l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: c.body.application_status,
            request: c.body,
        });
    },
    resetGuildJoinRequest: async function e(e) {
        try {
            let { body: t } = await i.Bo.post({
                url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: (0, i.fT)(),
            });
            return (l.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: t }), t);
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async function e() {
        let e = await i.Bo.get({ url: d.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: (0, i.fT)() });
        l.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: e.body });
    },
    setSelectedApplicationTab: function (e, t) {
        l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: e, applicationTab: t });
    },
    setSelectedSortOrder: function (e, t, n) {
        l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: e, sortOrder: t, applicationStatus: n });
    },
    setSelectedGuildJoinRequest: function (e, t) {
        (null != t && (0, o.gH)({ guildId: e, applicationStatus: t.applicationStatus, applicationUserId: t.userId }),
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: e, request: t }));
    },
    fetchJoinRequestForInterview: async function (e) {
        let t = await i.Bo.get({ url: d.Rsh.JOIN_REQUEST(e), rejectWithError: (0, i.fT)() }),
            n = (0, u.j)(t.body);
        return (l.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), t);
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({ url: d.Rsh.JOIN_REQUEST_INTERVIEW(e), rejectWithError: (0, i.fT)() }),
            r = (0, a.UE)(n.body);
        return (l.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), t && s.default.selectPrivateChannel(r.id), r.id);
    },
};
