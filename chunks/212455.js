"use strict";
n.d(t, { A: () => g, j: () => E });
var i = n(17928),
    r = n(228366),
    s = n(287809),
    a = n(860689),
    o = n(821124);
let l = null,
    d = {},
    _ = !1,
    u = {},
    c = {};
function E(e) {
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
function h(e) {
    delete d[e], l === e && (l = null);
}
function m(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let i = E(n),
        r = s.default.getCurrentUser();
    if (null != r && i.userId !== r.id) return !1;
    (0, o.NK)(i) ? h(t) : (d[t] = i);
}
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "UserGuildJoinRequestStore";
    getRequest(e) {
        return d[e];
    }
    computeGuildIds() {
        return Object.values(d)
            .map((e) => e?.guildId)
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != u[e] ? (0, a.yF)(u[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return _;
    }
    hasJoinRequestCoackmark() {
        return null != l;
    }
    getCooldown(e) {
        return c[e];
    }
}
let g = new f(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guildJoinRequests: t } = e;
        (_ = !1),
            (u = {}),
            (d = {}),
            t.forEach((e) => {
                let { guild_id: t } = e;
                null != t && (d[t] = E(e));
            });
    },
    GUILD_JOIN_REQUEST_UPDATE: m,
    GUILD_JOIN_REQUEST_CREATE: m,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { guildId: t } = e;
        h(t);
    },
    USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
        let { request: t, guildId: n } = e;
        if (null == t) return void h(n);
        let i = E(t);
        (0, o.NK)(i) ? h(n) : (d[n] = i);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        h(t.id);
    },
    USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
        let { guilds: t } = e;
        (_ = !0),
            t.forEach((e) => {
                let { id: t, name: n, features: i, icon: r, splash: s } = e;
                u[t] = { id: t, name: n, features: i, icon: r, splash: s };
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (t?.guild != null) {
            let { id: e, name: i, icon: r, features: s, splash: a } = t.guild;
            u[n] = { id: e, name: i, icon: r, features: s ?? [], splash: a };
        }
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { guild: n, join_request: i } = t;
        if (null != n && null != i) {
            let { guild_id: e } = i;
            d[e] = E(i);
            let { id: t, name: r, icon: s, features: a, splash: o } = n;
            u[t] = { id: t, name: r, icon: s, features: a ?? [], splash: o };
        }
    },
    ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
        let { guildId: t } = e;
        h(t);
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
        c[t] = n ?? 0;
    },
});
