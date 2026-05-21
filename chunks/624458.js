"use strict";
n.d(t, { A: () => h });
var i = n(636537),
    r = n(228366),
    s = n(157559),
    a = n(730852),
    o = n(95701),
    l = n(51271),
    u = n(844944),
    c = n(513461),
    d = n(212455),
    _ = n(652215),
    f = n(375708);
let h = {
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: n = c.B5.SUBMITTED, before: s, after: a, limit: o = 25, force: l = !1 } = e,
            f = l || !u.A.hasFetched(t);
        if (!u.A.isFetching() && f) {
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let e = await i.Bo.get({
                        url: _.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: { status: n, limit: o, before: s, after: a },
                        rejectWithError: !1,
                    }),
                    l = e.body.total,
                    u = (e.body.guild_join_requests ?? []).map(d.j);
                return (
                    r.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: u,
                        total: l,
                        limit: o,
                        guildId: t,
                    }),
                    e
                );
            } catch (e) {
                throw (r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e);
            }
        }
    },
    fetchGuildJoinRequestsForUser: async (e, t) => {
        let n = await i.Bo.get({ url: _.Rsh.GUILD_JOIN_REQUESTS_FOR_USER(e, t), rejectWithError: !1 }),
            s = (n.body ?? []).map(d.j);
        return (
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: e, userId: t, requests: s }), n
        );
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await i.Bo.post({ url: _.Rsh.GUILD_JOIN_REQUEST_ACK(e, t), rejectWithError: !1 });
        } catch (e) {
        } finally {
            r.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: t, guildId: e });
        }
    },
    removeGuildJoinRequest: async (e) => {
        try {
            let t = await i.Bo.del({ url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: null }), t;
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function (e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.B5.APPROVED,
            o = arguments.length > 4 ? arguments[4] : void 0;
        (0, l.iN)({ guildId: e, actionType: a, applicationUserId: t });
        let u = await i.Bo.patch({
            url: _.Rsh.GUILD_JOIN_REQUEST(e, n),
            body: { action: a, rejection_reason: o },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e &&
                    e.body &&
                    e.body.code === _.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    s.A.show({ title: f.intl.string(f.t.DxJj4e), body: f.intl.string(f.t.rSAOk9) }),
                Promise.reject(e)
            ),
        );
        r.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: u.body.application_status,
            request: u.body,
        });
    },
    resetGuildJoinRequest: async (e) => {
        try {
            let { body: t } = await i.Bo.post({ url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: t }), t;
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await i.Bo.get({ url: _.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: !1 });
        r.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: e.body });
    },
    setSelectedApplicationTab: (e, t) => {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: e, applicationTab: t });
    },
    setSelectedSortOrder: (e, t, n) => {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: e, sortOrder: t, applicationStatus: n });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t && (0, l.gH)({ guildId: e, applicationStatus: t.applicationStatus, applicationUserId: t.userId }),
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: e, request: t });
    },
    fetchJoinRequestForInterview: async (e) => {
        let t = await i.Bo.get({ url: _.Rsh.JOIN_REQUEST(e), rejectWithError: !1 }),
            n = (0, d.j)(t.body);
        return r.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), t;
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({ url: _.Rsh.JOIN_REQUEST_INTERVIEW(e), rejectWithError: !1 }),
            s = (0, o.UE)(n.body);
        return r.h.dispatch({ type: "CHANNEL_CREATE", channel: s }), t && a.default.selectPrivateChannel(s.id), s.id;
    },
};
