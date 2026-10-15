n.d(e, { A: () => A });
var i = n(636537),
    l = n(73153),
    r = n(157559),
    s = n(730852),
    a = n(95701),
    u = n(51271),
    o = n(844944),
    d = n(513461),
    c = n(212455),
    E = n(652215),
    _ = n(105292);
let A = {
    fetchGuildJoinRequests: async function t(t) {
        let { guildId: e, status: n = d.B5.SUBMITTED, before: r, after: s, limit: a = 25, force: u = !1 } = t,
            _ = u || !o.A.hasFetched(e);
        if (!o.A.isFetching() && _) {
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let t = await i.Bo.get({
                        url: E.Rsh.GUILD_JOIN_REQUESTS(e),
                        query: { status: n, limit: a, before: r, after: s },
                        rejectWithError: (0, i.fT)(),
                    }),
                    u = t.body.total,
                    o = (t.body.guild_join_requests ?? []).map(c.j);
                return (
                    l.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: o,
                        total: u,
                        limit: a,
                        guildId: e,
                    }),
                    t
                );
            } catch (t) {
                throw (l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), t);
            }
        }
    },
    fetchGuildJoinRequestsForUser: async function t(t, e) {
        let n = await i.Bo.get({ url: E.Rsh.GUILD_JOIN_REQUESTS_FOR_USER(t, e), rejectWithError: (0, i.fT)() }),
            r = (n.body ?? []).map(c.j);
        return (
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: t, userId: e, requests: r }), n
        );
    },
    ackUserGuildJoinRequest: async function t(t, e) {
        try {
            return await i.Bo.post({ url: E.Rsh.GUILD_JOIN_REQUEST_ACK(t, e), rejectWithError: (0, i.fT)() });
        } catch (t) {
        } finally {
            l.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: e, guildId: t });
        }
    },
    removeGuildJoinRequest: async function t(t) {
        try {
            let e = await i.Bo.del({ url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t), rejectWithError: (0, i.fT)() });
            return (l.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: t, request: null }), e);
        } catch (t) {
            throw t;
        }
    },
    updateGuildJoinRequest: async function t(t, e, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, u.iN)({ guildId: t, actionType: s, applicationUserId: e });
        let o = await i.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUEST(t, n),
            body: { action: s, rejection_reason: a },
            rejectWithError: (0, i.fT)(),
        }).catch(
            (t) => (
                t &&
                    t.body &&
                    t.body.code === E.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    r.A.show({ title: _.intl.string(_.t.DxJj4e), body: _.intl.string(_.t.rSAOk9) }),
                Promise.reject(t)
            ),
        );
        l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: t,
            status: o.body.application_status,
            request: o.body,
        });
    },
    resetGuildJoinRequest: async function t(t) {
        try {
            let { body: e } = await i.Bo.post({
                url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                rejectWithError: (0, i.fT)(),
            });
            return (l.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: t, request: e }), e);
        } catch (t) {
            throw t;
        }
    },
    fetchRequestToJoinGuilds: async function t() {
        let t = await i.Bo.get({ url: E.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: (0, i.fT)() });
        l.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: t.body });
    },
    setSelectedApplicationTab: function (t, e) {
        l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: t, applicationTab: e });
    },
    setSelectedSortOrder: function (t, e, n) {
        l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: t, sortOrder: e, applicationStatus: n });
    },
    setSelectedGuildJoinRequest: function (t, e) {
        (null != e && (0, u.gH)({ guildId: t, applicationStatus: e.applicationStatus, applicationUserId: e.userId }),
            l.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: t, request: e }));
    },
    fetchJoinRequestForInterview: async function (t) {
        let e = await i.Bo.get({ url: E.Rsh.JOIN_REQUEST(t), rejectWithError: (0, i.fT)() }),
            n = (0, c.j)(e.body);
        return (l.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), e);
    },
    createOrEnterJoinRequestInterview: async function (t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({ url: E.Rsh.JOIN_REQUEST_INTERVIEW(t), rejectWithError: (0, i.fT)() }),
            r = (0, a.UE)(n.body);
        return (l.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), e && s.default.selectPrivateChannel(r.id), r.id);
    },
};
