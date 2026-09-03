n.d(t, { Ay: () => C });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(734057),
    o = n(696451),
    d = n(317525),
    c = n(71393),
    u = n(287809),
    _ = n(977997),
    E = n(488926),
    A = n(233993),
    h = n(105530),
    I = n(418208);
let f = {},
    p = { speaker: !1, moderator: !1 };
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == f[t] && (f[t] = {});
    let i = (function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = l.A.getChannel(t),
            a = r?.getGuildId(),
            s = c.A.getGuild(a);
        return null != s && null != r && r.isGuildStageVoice()
            ? {
                  speaker: ((n = _.A.getVoiceStateForChannel(t, e)), (0, h.eY)(n) === h.zF.ON_STAGE),
                  moderator: i
                      ? E.$3({
                            permission: A.QY,
                            user: e,
                            context: s,
                            overwrites: r.permissionOverwrites,
                            roles: d.A.getUnsafeMutableRoles(s.id),
                        })
                      : null,
              }
            : p;
    })(e, t, n);
    return (f[t][e] = i), i;
}
function m(e) {
    let t = Object.values(l.A.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete f[e.id];
    return t.length > 0;
}
function g(e) {
    let { guildId: t, user: n } = e;
    if (null == n || null == t) return !1;
    var i = n.id;
    for (let e in f) {
        let n = l.A.getBasicChannel(e);
        null != n && n.guild_id === t && delete f[e][i];
    }
    return !0;
}
function S(e) {
    let { guild: t } = e;
    for (let e in f) {
        let n = l.A.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete f[e];
    }
}
class N extends a.Ay.Store {
    static displayName = "StageChannelRoleStore";
    initialize() {
        this.waitFor(o.Ay, l.A, c.A, u.default, _.A, d.A);
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
        if (null == e || null == t || (e === u.default.getCurrentUser()?.id && (0, I.o$)())) return p;
        let i = f[t]?.[e];
        if (null != i)
            if (n && null == i.moderator) return T(e, t, !0);
            else return i;
        return T(e, t, n);
    }
}
let C = new N(s.h, {
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) delete f[e.id];
    },
    CONNECTION_OPEN: function () {
        f = {};
    },
    GUILD_MEMBER_REMOVE: g,
    GUILD_MEMBER_UPDATE: g,
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        m(t);
    },
    PASSIVE_UPDATE_V2: function (e) {
        return m(e.guildId);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            !r().isEmpty(f) &&
            t.reduce((e, t) => {
                let { userId: n, channelId: i } = t;
                return (
                    (function (e, t) {
                        if (null == t) return !1;
                        let n = l.A.getChannel(t);
                        return null != n && !!n.isGuildStageVoice() && (delete f[t]?.[e], !0);
                    })(n, i) || e
                );
            }, !1)
        );
    },
    GUILD_CREATE: S,
    GUILD_DELETE: S,
});
