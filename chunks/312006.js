"use strict";
n.d(t, { Ay: () => P });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(734057),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(287809),
    _ = n(977997),
    f = n(488926),
    p = n(233993),
    h = n(105530),
    m = n(418208);
let g = {},
    E = { speaker: !1, moderator: !1 };
function A(e, t) {
    let n = _.A.getVoiceStateForChannel(t, e);
    return (0, h.eY)(n) === h.zF.ON_STAGE;
}
function I(e, t, n) {
    return f.$3({
        permission: p.QY,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: u.A.getUnsafeMutableRoles(t.id),
    });
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = o.A.getChannel(t),
        i = r?.getGuildId(),
        a = c.A.getGuild(i);
    return null != a && null != r && r.isGuildStageVoice() ? { speaker: A(e, t), moderator: n ? I(e, a, r) : null } : E;
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let r = T(e, t, n);
    return (g[t][e] = r), r;
}
function S(e, t) {
    if (null == t) return !1;
    let n = o.A.getChannel(t);
    return null != n && !!n.isGuildStageVoice() && (delete g[t]?.[e], !0);
}
function v(e, t) {
    for (let n in g) {
        let r = o.A.getBasicChannel(n);
        null != r && r.guild_id === t && delete g[n][e];
    }
    return !0;
}
function C(e) {
    let t = Object.values(o.A.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function b(e) {
    let { channels: t } = e;
    for (let e of t) delete g[e.id];
}
function N(e) {
    let { guildId: t } = e;
    C(t);
}
function R(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && v(n.id, t);
}
function O(e) {
    let { voiceStates: t } = e;
    return (
        !i().isEmpty(g) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: r } = t;
            return S(n, r) || e;
        }, !1)
    );
}
function D(e) {
    return C(e.guildId);
}
function L() {
    g = {};
}
function w(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = o.A.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class x extends a.Ay.Store {
    static displayName = "StageChannelRoleStore";
    initialize() {
        this.waitFor(l.Ay, o.A, c.A, d.default, _.A, u.A);
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker;
    }
    isModerator(e, t) {
        return this.getPermissionsForUser(e, t, !0).moderator ?? !1;
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator;
    }
    getPermissionsForUser(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t || (e === d.default.getCurrentUser()?.id && (0, m.o$)())) return E;
        let r = g[t]?.[e];
        if (null != r)
            if (n && null == r.moderator) return y(e, t, !0);
            else return r;
        return y(e, t, n);
    }
}
let P = new x(s.h, {
    CHANNEL_UPDATES: b,
    CONNECTION_OPEN: L,
    GUILD_MEMBER_REMOVE: R,
    GUILD_MEMBER_UPDATE: R,
    GUILD_ROLE_UPDATE: N,
    PASSIVE_UPDATE_V2: D,
    VOICE_STATE_UPDATES: O,
    GUILD_CREATE: w,
    GUILD_DELETE: w,
});
