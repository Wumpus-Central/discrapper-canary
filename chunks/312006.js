"use strict";
n.d(t, { Ay: () => C });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(734057),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(287809),
    _ = n(977997),
    h = n(488926),
    f = n(233993),
    p = n(105530),
    E = n(418208);
let m = {},
    g = { speaker: !1, moderator: !1 };
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == m[t] && (m[t] = {});
    let i = (function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = o.A.getChannel(t),
            s = r?.getGuildId(),
            a = c.A.getGuild(s);
        return null != a && null != r && r.isGuildStageVoice()
            ? {
                  speaker: ((n = _.A.getVoiceStateForChannel(t, e)), (0, p.eY)(n) === p.zF.ON_STAGE),
                  moderator: i
                      ? h.$3({
                            permission: f.QY,
                            user: e,
                            context: a,
                            overwrites: r.permissionOverwrites,
                            roles: u.A.getUnsafeMutableRoles(a.id),
                        })
                      : null,
              }
            : g;
    })(e, t, n);
    return (m[t][e] = i), i;
}
function I(e) {
    let t = Object.values(o.A.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete m[e.id];
    return t.length > 0;
}
function T(e) {
    let { guildId: t, user: n } = e;
    if (null == n || null == t) return !1;
    var i = n.id;
    for (let e in m) {
        let n = o.A.getBasicChannel(e);
        null != n && n.guild_id === t && delete m[e][i];
    }
    return !0;
}
function S(e) {
    let { guild: t } = e;
    for (let e in m) {
        let n = o.A.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete m[e];
    }
}
class y extends s.Ay.Store {
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
        if (null == e || null == t || (e === d.default.getCurrentUser()?.id && (0, E.o$)())) return g;
        let i = m[t]?.[e];
        if (null != i)
            if (n && null == i.moderator) return A(e, t, !0);
            else return i;
        return A(e, t, n);
    }
}
let C = new y(a.h, {
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) delete m[e.id];
    },
    CONNECTION_OPEN: function () {
        m = {};
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
            !r().isEmpty(m) &&
            t.reduce((e, t) => {
                let { userId: n, channelId: i } = t;
                return (
                    (function (e, t) {
                        if (null == t) return !1;
                        let n = o.A.getChannel(t);
                        return null != n && !!n.isGuildStageVoice() && (delete m[t]?.[e], !0);
                    })(n, i) || e
                );
            }, !1)
        );
    },
    GUILD_CREATE: S,
    GUILD_DELETE: S,
});
