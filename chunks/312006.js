"use strict";
n.d(t, { Ay: () => C });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(734057),
    l = n(696451),
    d = n(317525),
    _ = n(71393),
    u = n(287809),
    c = n(977997),
    E = n(488926),
    h = n(233993),
    m = n(105530),
    f = n(418208);
let g = {},
    p = { speaker: !1, moderator: !1 };
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let i = (function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = o.A.getChannel(t),
            s = r?.getGuildId(),
            a = _.A.getGuild(s);
        return null != a && null != r && r.isGuildStageVoice()
            ? {
                  speaker: ((n = c.A.getVoiceStateForChannel(t, e)), (0, m.eY)(n) === m.zF.ON_STAGE),
                  moderator: i
                      ? E.$3({
                            permission: h.QY,
                            user: e,
                            context: a,
                            overwrites: r.permissionOverwrites,
                            roles: d.A.getUnsafeMutableRoles(a.id),
                        })
                      : null,
              }
            : p;
    })(e, t, n);
    return (g[t][e] = i), i;
}
function I(e) {
    let t = Object.values(o.A.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function T(e) {
    let { guildId: t, user: n } = e;
    if (null == n || null == t) return !1;
    var i = n.id;
    for (let e in g) {
        let n = o.A.getBasicChannel(e);
        null != n && n.guild_id === t && delete g[e][i];
    }
    return !0;
}
function S(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = o.A.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class N extends s.Ay.Store {
    static displayName = "StageChannelRoleStore";
    initialize() {
        this.waitFor(l.Ay, o.A, _.A, u.default, c.A, d.A);
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
        if (null == e || null == t || (e === u.default.getCurrentUser()?.id && (0, f.o$)())) return p;
        let i = g[t]?.[e];
        if (null != i)
            if (n && null == i.moderator) return A(e, t, !0);
            else return i;
        return A(e, t, n);
    }
}
let C = new N(a.h, {
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) delete g[e.id];
    },
    CONNECTION_OPEN: function () {
        g = {};
    },
    GUILD_MEMBER_REMOVE: T,
    GUILD_MEMBER_UPDATE: T,
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        I(t);
    },
    PASSIVE_UPDATE_V2: function (e) {
        return I(e.guildId);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            !r().isEmpty(g) &&
            t.reduce((e, t) => {
                let { userId: n, channelId: i } = t;
                return (
                    (function (e, t) {
                        if (null == t) return !1;
                        let n = o.A.getChannel(t);
                        return null != n && !!n.isGuildStageVoice() && (delete g[t]?.[e], !0);
                    })(n, i) || e
                );
            }, !1)
        );
    },
    GUILD_CREATE: S,
    GUILD_DELETE: S,
});
