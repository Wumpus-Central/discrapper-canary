"use strict";
n.d(t, { A: () => I, j: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(287809),
    s = n(149790),
    l = n(821124);
let o = null,
    d = {},
    c = !1,
    u = {};
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
function E(e) {
    delete d[e], o === e && (o = null);
}
function A(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let i = _(n),
        r = a.default.getCurrentUser();
    if (null != r && i.userId !== r.id) return !1;
    (0, l.NK)(i) ? E(t) : (d[t] = i);
}
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
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
        return null != u[e] ? (0, s.yF)(u[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return c;
    }
    hasJoinRequestCoackmark() {
        return null != o;
    }
}
let I = new h(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guildJoinRequests: t } = e;
        (c = !1),
            (u = {}),
            (d = {}),
            t.forEach((e) => {
                let { guild_id: t } = e;
                null != t && (d[t] = _(e));
            });
    },
    GUILD_JOIN_REQUEST_UPDATE: A,
    GUILD_JOIN_REQUEST_CREATE: A,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { guildId: t } = e;
        E(t);
    },
    USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
        let { request: t, guildId: n } = e;
        if (null == t) return void E(n);
        let i = _(t);
        (0, l.NK)(i) ? E(n) : (d[n] = i);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        E(t.id);
    },
    USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
        let { guilds: t } = e;
        (c = !0),
            t.forEach((e) => {
                let { id: t, name: n, features: i, icon: r, splash: a } = e;
                u[t] = { id: t, name: n, features: i, icon: r, splash: a };
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (t?.guild != null) {
            let { id: e, name: i, icon: r, features: a, splash: s } = t.guild;
            u[n] = { id: e, name: i, icon: r, features: a ?? [], splash: s };
        }
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { guild: n, join_request: i } = t;
        if (null != n && null != i) {
            let { guild_id: e } = i;
            d[e] = _(i);
            let { id: t, name: r, icon: a, features: s, splash: l } = n;
            u[t] = { id: t, name: r, icon: a, features: s ?? [], splash: l };
        }
    },
    ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
        let { guildId: t } = e;
        E(t);
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function (e) {
        let { guildId: t } = e;
        o = t;
    },
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function () {
        o = null;
    },
});
