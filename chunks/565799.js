n.d(t, { Z: () => en }), n(47120), n(653041);
var r,
    i = n(348327),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(759174),
    u = n(570140),
    d = n(569545),
    f = n(199902),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(496675),
    g = n(699516),
    E = n(606304),
    b = n(594174),
    y = n(979651),
    v = n(938475),
    O = n(501655),
    I = n(88751),
    S = n(427679);
function T(e, t, n) {
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
    A = new c.h(
        (e) => [P(e)],
        (e) => e.id
    ),
    C = new Set(),
    R = {};
function P(e) {
    var t;
    return null != (t = e.getGuildId()) ? t : N;
}
function w(e) {
    return A.values(null != e ? e : void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    C.has(e) ||
        (C.add(e),
        s()(p.Z.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                M(e) && A.set(e.id, e);
            }));
}
function L(e) {
    let t = R[e];
    if (null != t) return t;
    let n = p.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), M(n)) ? x(e) : null;
}
function x(e) {
    let t = R[e];
    return null == t && ((t = new O.ZP(e)), (R[e] = t), t.rebuild()), t;
}
function M(e) {
    return null != e && e.isGuildStageVoice() && v.ZP.countVoiceStatesForChannel(e.id) > 0;
}
function k(e, t) {
    let n = p.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() ? (0 === t.size() ? B(n.id) : null == A.get(n.id) && A.set(n.id, n)) : B(e);
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
    return t.reduce((t, n) => {
        let r = x(n);
        return e(r) ? (k(n, r), !0) : t;
    }, !1);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
    return j((t) => t.updateParticipant(e), t);
}
function G(e) {
    for (let t of A.values(e)) A.delete(t.id), delete R[t.id];
    C.delete(e);
}
function B(e) {
    return null != e && (delete R[e], A.delete(e), !0);
}
function F() {
    C.clear(), A.clear(), (R = {});
}
function V(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = p.Z.getChannel(n);
    (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n));
}
function Z(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !C.has(t.guildId)) return e;
        let r = new Set();
        return (V(n, r, t.oldChannelId), V(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e;
    }, !1);
}
function H(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = U(t.user.id) || n;
    return n;
}
function W(e) {
    let t = !1;
    for (let n of w(e.guildId)) t = x(n).rebuild() || t;
    return t;
}
function Y(e) {
    let { user: t } = e;
    return U(t.id);
}
function K(e) {
    let { relationship: t } = e;
    return U(t.id);
}
function z(e) {
    let { guild: t } = e;
    G(t.id);
}
function q(e) {
    let { channelId: t, guildId: n, userId: r } = e;
    return null != n && !!C.has(n) && U(r, [t]);
}
function Q(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, d.my)(t);
    return null != r && !!C.has(r) && U(i, [n]);
}
function X(e) {
    let {
        channel: { id: t }
    } = e;
    return B(t);
}
function J(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !C.has(t.guild_id)) return e;
            let n = A.get(t.id);
            return null == n || o()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), A.set(t.id, t)), e;
        }, []);
    return j((e) => e.rebuild(), n), n.length > 0;
}
function $(e) {
    let { guildId: t } = e;
    if (C.has(t)) return j((e) => e.rebuild(), w(t));
}
let ee = [];
class et extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(_.default, b.default, p.Z, E.Z, y.Z, m.Z, v.ZP, h.Z, I.ZP, g.Z, S.Z, f.Z);
    }
    getParticipantsVersion(e) {
        var t, n;
        return null == e ? -1 : null != (n = null == (t = L(e)) ? void 0 : t.version) ? n : -1;
    }
    getMutableParticipants(e, t) {
        var n, r;
        return null == e ? ee : null != (r = null == (n = L(e)) ? void 0 : n.toArray(t)) ? r : ee;
    }
    getMutableRequestToSpeakParticipants(e) {
        var t, n;
        return null != (n = null == (t = L(e)) ? void 0 : t.getRequestToSpeakParticipants()) ? n : ee;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var t, n;
        return null != (n = null == (t = L(e)) ? void 0 : t.requestToSpeakVersion) ? n : -1;
    }
    getParticipantCount(e, t) {
        var n, r;
        return null != (r = null == (n = L(e)) ? void 0 : n.size(t)) ? r : 0;
    }
    getChannels(e) {
        return D(null != e ? e : N), A.values(null != e ? e : N);
    }
    getChannelsVersion() {
        return A.version;
    }
    getParticipant(e, t) {
        var n, r;
        return null != (r = null == (n = L(e)) ? void 0 : n.getParticipant(t)) ? r : null;
    }
}
T(et, 'displayName', 'StageChannelParticipantStore');
let en = new et(u.Z, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    VOICE_STATE_UPDATES: Z,
    CHANNEL_DELETE: X,
    GUILD_MEMBERS_CHUNK_BATCH: H,
    USER_UPDATE: Y,
    GUILD_MEMBER_REMOVE: Y,
    GUILD_MEMBER_UPDATE: Y,
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
    PASSIVE_UPDATE_V2: W
});
