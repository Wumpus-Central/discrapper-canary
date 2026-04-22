"use strict";
n.d(t, { A: () => m, j: () => f });
var r = n(311907),
    i = n(73153),
    s = n(287809),
    a = n(860689),
    o = n(821124);
let l = null,
    u = {},
    d = !1,
    c = {},
    _ = {};
function f(e) {
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
function E(e) {
    delete u[e], l === e && (l = null);
}
function h(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = f(n),
        i = s.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, o.NK)(r) ? E(t) : (u[t] = r);
}
class p extends r.Ay.Store {
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
        return null != c[e] ? (0, a.yF)(c[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return d;
    }
    hasJoinRequestCoackmark() {
        return null != l;
    }
    getCooldown(e) {
        return _[e];
    }
}
let m = new p(i.h, {
    CONNECTION_OPEN: function (e) {
        let { guildJoinRequests: t } = e;
        (d = !1),
            (c = {}),
            (u = {}),
            t.forEach((e) => {
                let { guild_id: t } = e;
                null != t && (u[t] = f(e));
            });
    },
    GUILD_JOIN_REQUEST_UPDATE: h,
    GUILD_JOIN_REQUEST_CREATE: h,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { guildId: t } = e;
        E(t);
    },
    USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
        let { request: t, guildId: n } = e;
        if (null == t) return void E(n);
        let r = f(t);
        (0, o.NK)(r) ? E(n) : (u[n] = r);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        E(t.id);
    },
    USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
        let { guilds: t } = e;
        (d = !0),
            t.forEach((e) => {
                let { id: t, name: n, features: r, icon: i, splash: s } = e;
                c[t] = { id: t, name: n, features: r, icon: i, splash: s };
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (t?.guild != null) {
            let { id: e, name: r, icon: i, features: s, splash: a } = t.guild;
            c[n] = { id: e, name: r, icon: i, features: s ?? [], splash: a };
        }
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { guild: n, join_request: r } = t;
        if (null != n && null != r) {
            let { guild_id: e } = r;
            u[e] = f(r);
            let { id: t, name: i, icon: s, features: a, splash: o } = n;
            c[t] = { id: t, name: i, icon: s, features: a ?? [], splash: o };
        }
    },
    ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
        let { guildId: t } = e;
        E(t);
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function (e) {
        let { guildId: t } = e;
        l = t;
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function () {
        l = null;
    },
    USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: function (e) {
        let { guildId: t, cooldown: n } = e;
        _[t] = n ?? 0;
    },
});
