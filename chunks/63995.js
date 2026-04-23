"use strict";
n.d(t, { A: () => W }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(713402),
    d = n(228366),
    _ = n(652896),
    u = n(616356),
    c = n(495544),
    E = n(734057),
    h = n(71393),
    m = n(576705),
    f = n(994500),
    g = n(485296),
    p = n(287809),
    A = n(977997),
    I = n(607567),
    T = n(69407),
    S = n(312006),
    N = n(446600);
let C = "NO_GUILD",
    R = new l.J(
        (e) => [e.getGuildId() ?? C],
        (e) => e.id,
    ),
    O = new Set(),
    y = {};
function v(e) {
    return R.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    O.has(e) ||
        (O.add(e),
        a()(E.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                w(e) && R.set(e.id, e);
            }));
}
function L(e) {
    let t = y[e];
    if (null != t) return t;
    let n = E.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), w(n)) ? b(e) : null;
}
function b(e) {
    let t = y[e];
    return null == t && ((t = new T.Ay(e)), (y[e] = t), t.rebuild()), t;
}
function w(e) {
    return null != e && e.isGuildStageVoice() && I.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v();
    return t.reduce((t, n) => {
        let i,
            r = b(n);
        return e(r)
            ? (null != (i = E.A.getChannel(n)) && i.isGuildStageVoice()
                  ? 0 === r.size()
                      ? M(i.id)
                      : null != R.get(i.id) || R.set(i.id, i)
                  : M(n),
              !0)
            : t;
    }, !1);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v();
    return P((t) => t.updateParticipant(e), t);
}
function M(e) {
    return null != e && (delete y[e], R.delete(e), !0);
}
function U() {
    O.clear(), R.clear(), (y = {});
}
function x(e, t, n) {
    if (null == n || e.has(n)) return;
    let i = E.A.getChannel(n);
    i?.isGuildStageVoice() && (t.add(n), null == y[n] && e.add(n));
}
function G(e) {
    let { user: t } = e;
    return k(t.id);
}
function V(e) {
    let { relationship: t } = e;
    return k(t.id);
}
function F(e) {
    let { guild: t } = e;
    var n = t.id;
    for (let e of R.values(n)) R.delete(e.id), delete y[e.id];
    O.delete(n);
}
function B(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: i, ownerId: r } = (0, _.Iy)(t);
    return null != i && !!O.has(i) && k(r, [n]);
}
let H = [];
class j extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(c.default, p.default, E.A, g.A, A.A, m.A, I.Ay, h.A, S.Ay, f.A, N.A, u.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (L(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? H : (L(e)?.toArray(t) ?? H);
    }
    getMutableRequestToSpeakParticipants(e) {
        return L(e)?.getRequestToSpeakParticipants() ?? H;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return L(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return L(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return D(e ?? C), R.values(e ?? C);
    }
    getChannelsVersion() {
        return R.version;
    }
    getParticipant(e, t) {
        return L(e)?.getParticipant(t) ?? null;
    }
}
let W = new j(d.h, {
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = new Set();
        return t.reduce((e, t) => {
            if (null == t.guildId || !O.has(t.guildId)) return e;
            let i = new Set();
            return (x(n, i, t.oldChannelId), x(n, i, t.channelId), 0 === i.size) ? e : k(t.userId, Array.from(i)) || e;
        }, !1);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return M(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) for (let t of e.members) n = k(t.user.id) || n;
        return n;
    },
    USER_UPDATE: G,
    GUILD_MEMBER_REMOVE: G,
    GUILD_MEMBER_UPDATE: G,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !O.has(t.guild_id)) return e;
                let n = R.get(t.id);
                return (
                    null == n || r()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), R.set(t.id, t)),
                    e
                );
            }, []);
        return P((e) => e.rebuild(), n), n.length > 0;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        if (O.has(t)) return P((e) => e.rebuild(), v(t));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, guildId: n, userId: i } = e;
        return null != n && !!O.has(n) && k(i, [t]);
    },
    STREAM_CLOSE: B,
    STREAM_DELETE: B,
    RELATIONSHIP_ADD: V,
    RELATIONSHIP_REMOVE: V,
    RELATIONSHIP_UPDATE: V,
    GUILD_CREATE: F,
    GUILD_DELETE: F,
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of v(e.guildId)) t = b(n).rebuild() || t;
        return t;
    },
});
