"use strict";
n.d(t, { A: () => u });
var i = n(562465),
    r = n(73153),
    l = n(157559),
    s = n(956793),
    a = n(95701),
    o = n(51271),
    E = n(844944),
    c = n(513461),
    _ = n(212455),
    d = n(652215),
    A = n(985018);
let u = {
    fetchGuildJoinRequest: async (e) => {
        let t = await i.Bo.get({ url: d.Rsh.GUILD_JOIN_REQUEST_BY_ID(e), rejectWithError: !1 }),
            n = (0, _.j)(t.body);
        return r.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: n }), t;
    },
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: n = c.B5.SUBMITTED, before: l, after: s, limit: a = 25, force: o = !1 } = e,
            A = o || !E.A.hasFetched(t);
        if (!E.A.isFetching() && A) {
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let e = await i.Bo.get({
                        url: d.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: { status: n, limit: a, before: l, after: s },
                        rejectWithError: !1,
                    }),
                    o = e.body.total,
                    E = (e.body.guild_join_requests ?? []).map(_.j);
                return (
                    r.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: E,
                        total: o,
                        limit: a,
                        guildId: t,
                    }),
                    e
                );
            } catch (e) {
                throw (r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e);
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await i.Bo.post({ url: d.Rsh.GUILD_JOIN_REQUEST_ACK(e, t), rejectWithError: !1 });
        } catch (e) {
        } finally {
            r.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: t, guildId: e });
        }
    },
    removeGuildJoinRequest: async (e) => {
        try {
            let t = await i.Bo.del({ url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: null }), t;
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.iN)({ guildId: e, actionType: s, applicationUserId: t });
        let E = await i.Bo.patch({
            url: d.Rsh.GUILD_JOIN_REQUEST_ID(e, n),
            body: { action: s, rejection_reason: a },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e &&
                    e.body &&
                    e.body.code === d.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    l.A.show({ title: A.intl.string(A.t.DxJj4e), body: A.intl.string(A.t.rSAOk9) }),
                Promise.reject(e)
            ),
        );
        r.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: E.body.application_status,
            request: E.body,
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await i.Bo.patch({ url: d.Rsh.GUILD_JOIN_REQUESTS(e), body: { action: t }, rejectWithError: !1 });
        return r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_BULK_ACTION", guildId: e, action: t }), n.body;
    },
    resetGuildJoinRequest: async (e) => {
        try {
            let { body: t } = await i.Bo.post({ url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: t }), t;
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await i.Bo.get({ url: d.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: !1 });
        r.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: e.body });
    },
    setSelectedApplicationTab: (e, t) => {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: e, applicationTab: t });
    },
    setSelectedSortOrder: (e, t) => {
        r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: e, sortOrder: t });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t && (0, o.gH)({ guildId: e, applicationStatus: t.applicationStatus, applicationUserId: t.userId }),
            r.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: e, request: t });
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({ url: d.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e), rejectWithError: !1 }),
            l = (0, a.UE)(n.body);
        return r.h.dispatch({ type: "CHANNEL_CREATE", channel: l }), t && s.default.selectPrivateChannel(l.id), l.id;
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await i.Bo.get({ url: d.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e), rejectWithError: !1 });
            return (
                r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH", guildId: e, cooldown: t.body.cooldown }),
                t
            );
        } catch (t) {
            throw (r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH", guildId: e, cooldown: null }), t);
        }
    },
};
