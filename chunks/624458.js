"use strict";
n.d(t, { A: () => A });
var i = n(636537),
    r = n(228366),
    a = n(157559),
    s = n(730852),
    l = n(95701),
    o = n(51271),
    d = n(844944),
    c = n(513461),
    u = n(212455),
    _ = n(652215),
    E = n(375708);
let A = {
    fetchGuildJoinRequests: async function e(e) {
        let { guildId: t, status: n = c.B5.SUBMITTED, before: a, after: s, limit: l = 25, force: o = !1 } = e,
            E = o || !d.A.hasFetched(t);
        if (!d.A.isFetching() && E) {
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let e = await i.Bo.get({
                        url: _.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: { status: n, limit: l, before: a, after: s },
                        rejectWithError: !1,
                    }),
                    o = e.body.total,
                    d = (e.body.guild_join_requests ?? []).map(u.j);
                return (
                    r.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: d,
                        total: o,
                        limit: l,
                        guildId: t,
                    }),
                    e
                );
            } catch (e) {
                throw (r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e);
            }
        }
    },
    fetchGuildJoinRequestsForUser: async function e(e, t) {
        let n = await i.Bo.get({ url: _.Rsh.GUILD_JOIN_REQUESTS_FOR_USER(e, t), rejectWithError: !1 }),
            a = (n.body ?? []).map(u.j);
        return (
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS", guildId: e, userId: t, requests: a }), n
        );
    },
    ackUserGuildJoinRequest: async function e(e, t) {
        try {
            return await i.Bo.post({ url: _.Rsh.GUILD_JOIN_REQUEST_ACK(e, t), rejectWithError: !1 });
        } catch (e) {
        } finally {
            r.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: t, guildId: e });
        }
    },
    removeGuildJoinRequest: async function e(e) {
        try {
            let t = await i.Bo.del({ url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: null }), t;
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function e(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.B5.APPROVED,
            l = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.iN)({ guildId: e, actionType: s, applicationUserId: t });
        let d = await i.Bo.patch({
            url: _.Rsh.GUILD_JOIN_REQUEST(e, n),
            body: { action: s, rejection_reason: l },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e &&
                    e.body &&
                    e.body.code === _.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    a.A.show({ title: E.intl.string(E.t.DxJj4e), body: E.intl.string(E.t.rSAOk9) }),
                Promise.reject(e)
            ),
        );
        r.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: d.body.application_status,
            request: d.body,
        });
    },
    resetGuildJoinRequest: async function e(e) {
        try {
            let { body: t } = await i.Bo.post({ url: _.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: t }), t;
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async function e() {
        let e = await i.Bo.get({ url: _.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: !1 });
        r.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: e.body });
    },
    setSelectedApplicationTab: function (e, t) {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: e, applicationTab: t });
    },
    setSelectedSortOrder: function (e, t, n) {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: e, sortOrder: t, applicationStatus: n });
    },
    setSelectedGuildJoinRequest: function (e, t) {
        null != t && (0, o.gH)({ guildId: e, applicationStatus: t.applicationStatus, applicationUserId: t.userId }),
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: e, request: t });
    },
    fetchJoinRequestForInterview: async function (e) {
        let t = await i.Bo.get({ url: _.Rsh.JOIN_REQUEST(e), rejectWithError: !1 }),
            n = (0, u.j)(t.body);
        return r.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), t;
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({ url: _.Rsh.JOIN_REQUEST_INTERVIEW(e), rejectWithError: !1 }),
            a = (0, l.UE)(n.body);
        return r.h.dispatch({ type: "CHANNEL_CREATE", channel: a }), t && s.default.selectPrivateChannel(a.id), a.id;
    },
};
