n.d(t, { Z: () => en }), n(47120), n(724458), n(653041);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(759174),
    c = n(570140),
    d = n(569545),
    f = n(199902),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(496675),
    g = n(699516),
    E = n(606304),
    v = n(594174),
    y = n(979651),
    I = n(938475),
    T = n(501655),
    b = n(88751),
    S = n(427679);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = 'NO_GUILD',
    C = new u.h(
        (e) => [D(e)],
        (e) => e.id
    ),
    R = new Set(),
    O = {};
function D(e) {
    var t;
    return null !== (t = e.getGuildId()) && void 0 !== t ? t : N;
}
function L(e) {
    return C.values(null != e ? e : void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function x(e) {
    R.has(e) ||
        (R.add(e),
        o()(p.Z.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                M(e) && C.set(e.id, e);
            }));
}
function P(e) {
    let t = O[e];
    if (null != t) return t;
    let n = p.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() && (x(n.guild_id), M(n)) ? w(e) : null;
}
function w(e) {
    let t = O[e];
    return null == t && ((t = new T.ZP(e)), (O[e] = t), t.rebuild()), t;
}
function M(e) {
    return null != e && e.isGuildStageVoice() && I.ZP.countVoiceStatesForChannel(e.id) > 0;
}
function k(e, t) {
    let n = p.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() ? (0 === t.size() ? Z(n.id) : null == C.get(n.id) && C.set(n.id, n)) : Z(e);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L();
    return t.reduce((t, n) => {
        let i = w(n);
        return e(i) ? (k(n, i), !0) : t;
    }, !1);
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L();
    return U((t) => t.updateParticipant(e), t);
}
function B(e) {
    for (let t of C.values(e)) C.delete(t.id), delete O[t.id];
    R.delete(e);
}
function Z(e) {
    return null != e && (delete O[e], C.delete(e), !0);
}
function F() {
    R.clear(), C.clear(), (O = {});
}
function V(e, t, n) {
    if (null == n || e.has(n)) return;
    let i = p.Z.getChannel(n);
    (null == i ? void 0 : i.isGuildStageVoice()) && (t.add(n), e.add(n));
}
function j(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !R.has(t.guildId)) return e;
        let i = new Set();
        return (V(n, i, t.oldChannelId), V(n, i, t.channelId), 0 === i.size) ? e : G(t.userId, Array.from(i)) || e;
    }, !1);
}
function H(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = G(t.user.id) || n;
    return n;
}
function Y(e) {
    let t = !1;
    for (let n of L(e.guildId)) t = w(n).rebuild() || t;
    return t;
}
function W(e) {
    let { user: t } = e;
    return G(t.id);
}
function K(e) {
    let { relationship: t } = e;
    return G(t.id);
}
function z(e) {
    let { guild: t } = e;
    B(t.id);
}
function q(e) {
    let { channelId: t, guildId: n, userId: i } = e;
    return !!(null != n && R.has(n)) && G(i, [t]);
}
function Q(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: i, ownerId: r } = (0, d.my)(t);
    return !!(null != i && R.has(i)) && G(r, [n]);
}
function X(e) {
    let {
        channel: { id: t }
    } = e;
    return Z(t);
}
function J(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !R.has(t.guild_id)) return e;
            let n = C.get(t.id);
            return null == n || a()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), C.set(t.id, t)), e;
        }, []);
    return U((e) => e.rebuild(), n), n.length > 0;
}
function $(e) {
    let { guildId: t } = e;
    if (R.has(t)) return U((e) => e.rebuild(), L(t));
}
let ee = [];
class et extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.default, v.default, p.Z, E.Z, y.Z, m.Z, I.ZP, h.Z, b.ZP, g.Z, S.Z, f.Z);
    }
    getParticipantsVersion(e) {
        var t, n;
        return null == e ? -1 : null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1;
    }
    getMutableParticipants(e, t) {
        var n, i;
        return null == e ? ee : null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== i ? i : ee;
    }
    getMutableRequestToSpeakParticipants(e) {
        var t, n;
        return null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : ee;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var t, n;
        return null !== (n = null === (t = P(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1;
    }
    getParticipantCount(e, t) {
        var n, i;
        return null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== i ? i : 0;
    }
    getChannels(e) {
        return x(null != e ? e : N), C.values(null != e ? e : N);
    }
    getChannelsVersion() {
        return C.version;
    }
    getParticipant(e, t) {
        var n, i;
        return null !== (i = null === (n = P(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== i ? i : null;
    }
}
A(et, 'displayName', 'StageChannelParticipantStore');
let en = new et(c.Z, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    VOICE_STATE_UPDATES: j,
    CHANNEL_DELETE: X,
    GUILD_MEMBERS_CHUNK_BATCH: H,
    USER_UPDATE: W,
    GUILD_MEMBER_REMOVE: W,
    GUILD_MEMBER_UPDATE: W,
    CHANNEL_UPDATES: J,
    GUILD_ROLE_UPDATE: $,
    RTC_CONNECTION_VIDEO: q,
    STREAM_CLOSE: Q,
    STREAM_DELETE: Q,
    RELATIONSHIP_ADD: K,
    RELATIONSHIP_REMOVE: K,
    RELATIONSHIP_UPDATE: K,
    GUILD_CREATE: z,
    GUILD_DELETE: z,
    PASSIVE_UPDATE_V2: Y
});
