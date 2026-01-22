n.d(t, { A: () => en }), n(896048), n(321073);
var r,
    i = n(812729),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(713402),
    u = n(73153),
    d = n(652896),
    f = n(616356),
    p = n(961350),
    _ = n(734057),
    h = n(71393),
    m = n(576705),
    g = n(994500),
    E = n(485296),
    b = n(287809),
    y = n(977997),
    O = n(607567),
    A = n(69407),
    v = n(312006),
    S = n(446600);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let T = "NO_GUILD",
    C = new c.J(
        (e) => [w(e)],
        (e) => e.id,
    ),
    N = new Set(),
    R = {};
function w(e) {
    var t;
    return null != (t = e.getGuildId()) ? t : T;
}
function P(e) {
    return C.values(null != e ? e : void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    N.has(e) ||
        (N.add(e),
        o()(_.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                j(e) && C.set(e.id, e);
            }));
}
function x(e) {
    let t = R[e];
    if (null != t) return t;
    let n = _.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), j(n)) ? L(e) : null;
}
function L(e) {
    let t = R[e];
    return null == t && ((t = new A.Ay(e)), (R[e] = t), t.rebuild()), t;
}
function j(e) {
    return null != e && e.isGuildStageVoice() && O.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function M(e, t) {
    let n = _.A.getChannel(e);
    return null != n && n.isGuildStageVoice()
        ? 0 === t.size()
            ? V(n.id)
            : null == C.get(n.id) && C.set(n.id, n)
        : V(e);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P();
    return t.reduce((t, n) => {
        let r = L(n);
        return e(r) ? (M(n, r), !0) : t;
    }, !1);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P();
    return k((t) => t.updateParticipant(e), t);
}
function G(e) {
    for (let t of C.values(e)) C.delete(t.id), delete R[t.id];
    N.delete(e);
}
function V(e) {
    return null != e && (delete R[e], C.delete(e), !0);
}
function F() {
    N.clear(), C.clear(), (R = {});
}
function B(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = _.A.getChannel(n);
    (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), null == R[n] && e.add(n));
}
function H(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !N.has(t.guildId)) return e;
        let r = new Set();
        return (B(n, r, t.oldChannelId), B(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e;
    }, !1);
}
function Y(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = U(t.user.id) || n;
    return n;
}
function W(e) {
    let t = !1;
    for (let n of P(e.guildId)) t = L(n).rebuild() || t;
    return t;
}
function K(e) {
    let { user: t } = e;
    return U(t.id);
}
function z(e) {
    let { relationship: t } = e;
    return U(t.id);
}
function q(e) {
    let { guild: t } = e;
    G(t.id);
}
function X(e) {
    let { channelId: t, guildId: n, userId: r } = e;
    return null != n && !!N.has(n) && U(r, [t]);
}
function Z(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, d.Iy)(t);
    return null != r && !!N.has(r) && U(i, [n]);
}
function Q(e) {
    let {
        channel: { id: t },
    } = e;
    return V(t);
}
function $(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !N.has(t.guild_id)) return e;
            let n = C.get(t.id);
            return (
                null == n || a()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), C.set(t.id, t)), e
            );
        }, []);
    return k((e) => e.rebuild(), n), n.length > 0;
}
function J(e) {
    let { guildId: t } = e;
    if (N.has(t)) return k((e) => e.rebuild(), P(t));
}
let ee = [];
class et extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(p.default, b.default, _.A, E.A, y.A, m.A, O.Ay, h.A, v.Ay, g.A, S.A, f.A);
    }
    getParticipantsVersion(e) {
        var t, n;
        return null == e ? -1 : null != (t = null == (n = x(e)) ? void 0 : n.version) ? t : -1;
    }
    getMutableParticipants(e, t) {
        var n, r;
        return null == e ? ee : null != (n = null == (r = x(e)) ? void 0 : r.toArray(t)) ? n : ee;
    }
    getMutableRequestToSpeakParticipants(e) {
        var t, n;
        return null != (t = null == (n = x(e)) ? void 0 : n.getRequestToSpeakParticipants()) ? t : ee;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var t, n;
        return null != (t = null == (n = x(e)) ? void 0 : n.requestToSpeakVersion) ? t : -1;
    }
    getParticipantCount(e, t) {
        var n, r;
        return null != (n = null == (r = x(e)) ? void 0 : r.size(t)) ? n : 0;
    }
    getChannels(e) {
        return D(null != e ? e : T), C.values(null != e ? e : T);
    }
    getChannelsVersion() {
        return C.version;
    }
    getParticipant(e, t) {
        var n, r;
        return null != (n = null == (r = x(e)) ? void 0 : r.getParticipant(t)) ? n : null;
    }
}
I(et, "displayName", "StageChannelParticipantStore");
let en = new et(u.h, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    VOICE_STATE_UPDATES: H,
    CHANNEL_DELETE: Q,
    GUILD_MEMBERS_CHUNK_BATCH: Y,
    USER_UPDATE: K,
    GUILD_MEMBER_REMOVE: K,
    GUILD_MEMBER_UPDATE: K,
    CHANNEL_UPDATES: $,
    GUILD_ROLE_UPDATE: J,
    RTC_CONNECTION_VIDEO: X,
    STREAM_CLOSE: Z,
    STREAM_DELETE: Z,
    RELATIONSHIP_ADD: z,
    RELATIONSHIP_REMOVE: z,
    RELATIONSHIP_UPDATE: z,
    GUILD_CREATE: q,
    GUILD_DELETE: q,
    PASSIVE_UPDATE_V2: W,
});
