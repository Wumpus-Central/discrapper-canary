"use strict";
n.d(t, { A: () => E, j: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(287809),
    a = n(860689),
    o = n(821124);
let l = null,
    u = {},
    c = !1,
    d = {};
function _(e) {
    return {
        joinRequestId: e.join_request_id,
        guildId: e.guild_id,
        userId: e.user_id,
        user: e.user,
        createdAt: e.created_at,
        formResponses: e.form_responses,
        rejectionReason: e.rejection_reason,
        applicationStatus: e.application_status,
        actionedAt: e.actioned_at,
        actionedByUser: e.actioned_by_user,
        lastSeen: e.last_seen,
        interviewChannelId: e.interview_channel_id,
    };
}
function f(e) {
    delete u[e], l === e && (l = null);
}
function h(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let i = _(n),
        r = s.default.getCurrentUser();
    if (null != r && i.userId !== r.id) return !1;
    (0, o.NK)(i) ? f(t) : (u[t] = i);
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "UserGuildJoinRequestStore";
    getRequest(e) {
        return u[e];
    }
    computeGuildIds() {
        return Object.values(u)
            .map((e) => e?.guildId)
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != d[e] ? (0, a.yF)(d[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return c;
    }
    hasJoinRequestCoackmark() {
        return null != l;
    }
}
let E = new p(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guildJoinRequests: t } = e;
        (c = !1),
            (d = {}),
            (u = {}),
            t.forEach((e) => {
                let { guild_id: t } = e;
                null != t && (u[t] = _(e));
            });
    },
    GUILD_JOIN_REQUEST_UPDATE: h,
    GUILD_JOIN_REQUEST_CREATE: h,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { guildId: t } = e;
        f(t);
    },
    USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
        let { request: t, guildId: n } = e;
        if (null == t) return void f(n);
        let i = _(t);
        (0, o.NK)(i) ? f(n) : (u[n] = i);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        f(t.id);
    },
    USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
        let { guilds: t } = e;
        (c = !0),
            t.forEach((e) => {
                let { id: t, name: n, features: i, icon: r, splash: s } = e;
                d[t] = { id: t, name: n, features: i, icon: r, splash: s };
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (t?.guild != null) {
            let { id: e, name: i, icon: r, features: s, splash: a } = t.guild;
            d[n] = { id: e, name: i, icon: r, features: s ?? [], splash: a };
        }
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { guild: n, join_request: i } = t;
        if (null != n && null != i) {
            let { guild_id: e } = i;
            u[e] = _(i);
            let { id: t, name: r, icon: s, features: a, splash: o } = n;
            d[t] = { id: t, name: r, icon: s, features: a ?? [], splash: o };
        }
    },
    ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
        let { guildId: t } = e;
        f(t);
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function (e) {
        let { guildId: t } = e;
        l = t;
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function () {
        l = null;
    },
});
