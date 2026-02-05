"use strict";
n.d(t, { A: () => R, j: () => f });
var r = n(311907),
    i = n(73153),
    a = n(287809),
    s = n(860689),
    o = n(821124);
let l = null,
    u = {},
    c = !1,
    d = {},
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
function p(e) {
    delete u[e], l === e && (l = null);
}
function h(e) {
    let { guildJoinRequests: t } = e;
    (c = !1),
        (d = {}),
        (u = {}),
        t.forEach((e) => {
            let { guild_id: t } = e;
            null != t && (u[t] = f(e));
        });
}
function m(e) {
    let { request: t, guildId: n } = e;
    if (null == t) return void p(n);
    let r = f(t);
    (0, o.NK)(r) ? p(n) : (u[n] = r);
}
function g(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = f(n),
        i = a.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, o.NK)(r) ? p(t) : (u[t] = r);
}
function E(e) {
    let { guildId: t } = e;
    p(t);
}
function A(e) {
    let { guild: t } = e;
    p(t.id);
}
function I(e) {
    let { invite: t } = e,
        { guild: n, join_request: r } = t;
    if (null != n && null != r) {
        let { guild_id: e } = r;
        u[e] = f(r);
        let { id: t, name: i, icon: a, features: s, splash: o } = n;
        d[t] = { id: t, name: i, icon: a, features: s ?? [], splash: o };
    }
}
function T(e) {
    let { guilds: t } = e;
    (c = !0),
        t.forEach((e) => {
            let { id: t, name: n, features: r, icon: i, splash: a } = e;
            d[t] = { id: t, name: n, features: r, icon: i, splash: a };
        });
}
function y(e) {
    let { guildId: t, cooldown: n } = e;
    _[t] = n ?? 0;
}
function S(e) {
    let { form: t, guildId: n } = e;
    if (t?.guild != null) {
        let { id: e, name: r, icon: i, features: a, splash: s } = t.guild;
        d[n] = { id: e, name: r, icon: i, features: a ?? [], splash: s };
    }
}
function v(e) {
    let { guildId: t } = e;
    p(t);
}
function C(e) {
    let { guildId: t } = e;
    l = t;
}
function b() {
    l = null;
}
class N extends r.Ay.Store {
    initialize() {
        this.waitFor(a.default);
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
        return null != d[e] ? (0, s.yF)(d[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return c;
    }
    hasJoinRequestCoackmark() {
        return null != l;
    }
    getCooldown(e) {
        return _[e];
    }
}
let R = new N(i.h, {
    CONNECTION_OPEN: h,
    GUILD_JOIN_REQUEST_UPDATE: g,
    GUILD_JOIN_REQUEST_CREATE: g,
    GUILD_JOIN_REQUEST_DELETE: E,
    USER_GUILD_JOIN_REQUEST_UPDATE: m,
    GUILD_DELETE: A,
    USER_JOIN_REQUEST_GUILDS_FETCH: T,
    MEMBER_VERIFICATION_FORM_UPDATE: S,
    INVITE_ACCEPT_SUCCESS: I,
    ACK_APPROVED_GUILD_JOIN_REQUEST: v,
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: C,
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: b,
    USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: y,
});
