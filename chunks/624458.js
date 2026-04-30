l.d(t, { A: () => _ });
var n = l(636537),
    i = l(228366),
    r = l(157559),
    s = l(956793),
    a = l(95701),
    u = l(51271),
    o = l(844944),
    c = l(513461),
    d = l(212455),
    E = l(652215),
    h = l(985018);
let _ = {
    fetchGuildJoinRequest: async (e) => {
        let t = await n.Bo.get({ url: E.Rsh.GUILD_JOIN_REQUEST_BY_ID(e), rejectWithError: !1 }),
            l = (0, d.j)(t.body);
        return i.h.dispatch({ type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS", joinRequest: l }), t;
    },
    fetchGuildJoinRequests: async (e) => {
        let { guildId: t, status: l = c.B5.SUBMITTED, before: r, after: s, limit: a = 25, force: u = !1 } = e,
            h = u || !o.A.hasFetched(t);
        if (!o.A.isFetching() && h) {
            i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
                let e = await n.Bo.get({
                        url: E.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: { status: l, limit: a, before: r, after: s },
                        rejectWithError: !1,
                    }),
                    u = e.body.total,
                    o = (e.body.guild_join_requests ?? []).map(d.j);
                return (
                    i.h.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: l,
                        requests: o,
                        total: u,
                        limit: a,
                        guildId: t,
                    }),
                    e
                );
            } catch (e) {
                throw (i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e);
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await n.Bo.post({ url: E.Rsh.GUILD_JOIN_REQUEST_ACK(e, t), rejectWithError: !1 });
        } catch (e) {
        } finally {
            i.h.dispatch({ type: "ACK_APPROVED_GUILD_JOIN_REQUEST", id: t, guildId: e });
        }
    },
    removeGuildJoinRequest: async (e) => {
        try {
            let t = await n.Bo.del({ url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: null }), t;
        } catch (e) {
            throw e;
        }
    },
    updateGuildJoinRequest: async function (e, t, l) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, u.iN)({ guildId: e, actionType: s, applicationUserId: t });
        let o = await n.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUEST_ID(e, l),
            body: { action: s, rejection_reason: a },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e &&
                    e.body &&
                    e.body.code === E.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                    r.A.show({ title: h.intl.string(h.t.DxJj4e), body: h.intl.string(h.t.rSAOk9) }),
                Promise.reject(e)
            ),
        );
        i.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: o.body.application_status,
            request: o.body,
        });
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let l = await n.Bo.patch({ url: E.Rsh.GUILD_JOIN_REQUESTS(e), body: { action: t }, rejectWithError: !1 });
        return i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_BULK_ACTION", guildId: e, action: t }), l.body;
    },
    resetGuildJoinRequest: async (e) => {
        try {
            let { body: t } = await n.Bo.post({ url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e), rejectWithError: !1 });
            return i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: t }), t;
        } catch (e) {
            throw e;
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await n.Bo.get({ url: E.Rsh.USER_JOIN_REQUEST_GUILDS, rejectWithError: !1 });
        i.h.dispatch({ type: "USER_JOIN_REQUEST_GUILDS_FETCH", guilds: e.body });
    },
    setSelectedApplicationTab: (e, t) => {
        i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId: e, applicationTab: t });
    },
    setSelectedSortOrder: (e, t) => {
        i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId: e, sortOrder: t });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t && (0, u.gH)({ guildId: e, applicationStatus: t.applicationStatus, applicationUserId: t.userId }),
            i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId: e, request: t });
    },
    createOrEnterJoinRequestInterview: async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            l = await n.Bo.post({ url: E.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e), rejectWithError: !1 }),
            r = (0, a.UE)(l.body);
        return i.h.dispatch({ type: "CHANNEL_CREATE", channel: r }), t && s.default.selectPrivateChannel(r.id), r.id;
    },
    fetchJoinRequestCooldown: async (e) => {
        try {
            let t = await n.Bo.get({ url: E.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e), rejectWithError: !1 });
            return (
                i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH", guildId: e, cooldown: t.body.cooldown }),
                t
            );
        } catch (t) {
            throw (i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH", guildId: e, cooldown: null }), t);
        }
    },
};
