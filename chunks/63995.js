"use strict";
n.d(t, { A: () => Y }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(713402),
    u = n(228366),
    c = n(652896),
    d = n(616356),
    _ = n(495544),
    h = n(734057),
    f = n(71393),
    p = n(576705),
    E = n(994500),
    m = n(485296),
    g = n(287809),
    A = n(977997),
    I = n(607567),
    T = n(518769),
    S = n(312006),
    y = n(446600);
let C = "NO_GUILD",
    N = new l.J(
        (e) => [e.getGuildId() ?? C],
        (e) => e.id,
    ),
    v = new Set(),
    R = {};
function O(e) {
    return N.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function b(e) {
    v.has(e) ||
        (v.add(e),
        a()(h.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                w(e) && N.set(e.id, e);
            }));
}
function D(e) {
    let t = R[e];
    if (null != t) return t;
    let n = h.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (b(n.guild_id), w(n)) ? L(e) : null;
}
function L(e) {
    let t = R[e];
    return null == t && ((t = new T.Ay(e)), (R[e] = t), t.rebuild()), t;
}
function w(e) {
    return null != e && e.isGuildStageVoice() && I.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return t.reduce((t, n) => {
        let i,
            r = L(n);
        return e(r)
            ? (null != (i = h.A.getChannel(n)) && i.isGuildStageVoice()
                  ? 0 === r.size()
                      ? x(i.id)
                      : null != N.get(i.id) || N.set(i.id, i)
                  : x(n),
              !0)
            : t;
    }, !1);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return M((t) => t.updateParticipant(e), t);
}
function x(e) {
    return null != e && (delete R[e], N.delete(e), !0);
}
function k() {
    v.clear(), N.clear(), (R = {});
}
function U(e, t, n) {
    if (null == n || e.has(n)) return;
    let i = h.A.getChannel(n);
    i?.isGuildStageVoice() && (t.add(n), null == R[n] && e.add(n));
}
function G(e) {
    let { user: t } = e;
    return P(t.id);
}
function F(e) {
    let { relationship: t } = e;
    return P(t.id);
}
function V(e) {
    let { guild: t } = e;
    var n = t.id;
    for (let e of N.values(n)) N.delete(e.id), delete R[e.id];
    v.delete(n);
}
function B(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: i, ownerId: r } = (0, c.Iy)(t);
    return null != i && !!v.has(i) && P(r, [n]);
}
let j = [];
class H extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, g.default, h.A, m.A, A.A, p.A, I.Ay, f.A, S.Ay, E.A, y.A, d.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (D(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? j : (D(e)?.toArray(t) ?? j);
    }
    getMutableRequestToSpeakParticipants(e) {
        return D(e)?.getRequestToSpeakParticipants() ?? j;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return D(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return D(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return b(e ?? C), N.values(e ?? C);
    }
    getChannelsVersion() {
        return N.version;
    }
    getParticipant(e, t) {
        return D(e)?.getParticipant(t) ?? null;
    }
}
let Y = new H(u.h, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    VOICE_CHANNEL_SELECT: function (e) {
        let { currentVoiceChannelId: t } = e;
        if (null == t) return !1;
        let n = h.A.getChannel(t);
        if (!n?.isGuildStageVoice() || !v.has(n.guild_id)) return !1;
        let i = _.default.getId();
        return null != i && P(i, [t]);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = new Set();
        return t.reduce((e, t) => {
            if (null == t.guildId || !v.has(t.guildId)) return e;
            let i = new Set();
            return (U(n, i, t.oldChannelId), U(n, i, t.channelId), 0 === i.size) ? e : P(t.userId, Array.from(i)) || e;
        }, !1);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return x(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) for (let t of e.members) n = P(t.user.id) || n;
        return n;
    },
    USER_UPDATE: G,
    GUILD_MEMBER_REMOVE: G,
    GUILD_MEMBER_UPDATE: G,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !v.has(t.guild_id)) return e;
                let n = N.get(t.id);
                return (
                    null == n || r()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), N.set(t.id, t)),
                    e
                );
            }, []);
        return M((e) => e.rebuild(), n), n.length > 0;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        if (v.has(t)) return M((e) => e.rebuild(), O(t));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, guildId: n, userId: i } = e;
        return null != n && !!v.has(n) && P(i, [t]);
    },
    STREAM_CLOSE: B,
    STREAM_DELETE: B,
    RELATIONSHIP_ADD: F,
    RELATIONSHIP_REMOVE: F,
    RELATIONSHIP_UPDATE: F,
    GUILD_CREATE: V,
    GUILD_DELETE: V,
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of O(e.guildId)) t = L(n).rebuild() || t;
        return t;
    },
});
