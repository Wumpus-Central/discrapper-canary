"use strict";
n.d(t, { A: () => ee }), n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(713402),
    u = n(73153),
    c = n(652896),
    d = n(616356),
    _ = n(961350),
    f = n(734057),
    p = n(71393),
    h = n(576705),
    m = n(994500),
    g = n(485296),
    E = n(287809),
    A = n(977997),
    I = n(607567),
    T = n(69407),
    y = n(312006),
    S = n(446600);
let v = "NO_GUILD",
    C = new l.J(
        (e) => [R(e)],
        (e) => e.id,
    ),
    b = new Set(),
    N = {};
function R(e) {
    return e.getGuildId() ?? v;
}
function O(e) {
    return C.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    b.has(e) ||
        (b.add(e),
        s()(f.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                x(e) && C.set(e.id, e);
            }));
}
function L(e) {
    let t = N[e];
    if (null != t) return t;
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), x(n)) ? w(e) : null;
}
function w(e) {
    let t = N[e];
    return null == t && ((t = new T.Ay(e)), (N[e] = t), t.rebuild()), t;
}
function x(e) {
    return null != e && e.isGuildStageVoice() && I.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function P(e, t) {
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice()
        ? 0 === t.size()
            ? G(n.id)
            : null == C.get(n.id) && C.set(n.id, n)
        : G(e);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return t.reduce((t, n) => {
        let r = w(n);
        return e(r) ? (P(n, r), !0) : t;
    }, !1);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return M((t) => t.updateParticipant(e), t);
}
function U(e) {
    for (let t of C.values(e)) C.delete(t.id), delete N[t.id];
    b.delete(e);
}
function G(e) {
    return null != e && (delete N[e], C.delete(e), !0);
}
function V() {
    b.clear(), C.clear(), (N = {});
}
function F(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = f.A.getChannel(n);
    r?.isGuildStageVoice() && (t.add(n), null == N[n] && e.add(n));
}
function B(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !b.has(t.guildId)) return e;
        let r = new Set();
        return (F(n, r, t.oldChannelId), F(n, r, t.channelId), 0 === r.size) ? e : k(t.userId, Array.from(r)) || e;
    }, !1);
}
function j(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = k(t.user.id) || n;
    return n;
}
function H(e) {
    let t = !1;
    for (let n of O(e.guildId)) t = w(n).rebuild() || t;
    return t;
}
function Y(e) {
    let { user: t } = e;
    return k(t.id);
}
function W(e) {
    let { relationship: t } = e;
    return k(t.id);
}
function K(e) {
    let { guild: t } = e;
    U(t.id);
}
function z(e) {
    let { channelId: t, guildId: n, userId: r } = e;
    return null != n && !!b.has(n) && k(r, [t]);
}
function $(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, c.Iy)(t);
    return null != r && !!b.has(r) && k(i, [n]);
}
function q(e) {
    let {
        channel: { id: t },
    } = e;
    return G(t);
}
function Z(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !b.has(t.guild_id)) return e;
            let n = C.get(t.id);
            return (
                null == n || i()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), C.set(t.id, t)), e
            );
        }, []);
    return M((e) => e.rebuild(), n), n.length > 0;
}
function Q(e) {
    let { guildId: t } = e;
    if (b.has(t)) return M((e) => e.rebuild(), O(t));
}
let X = [];
class J extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, E.default, f.A, g.A, A.A, h.A, I.Ay, p.A, y.Ay, m.A, S.A, d.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (L(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? X : (L(e)?.toArray(t) ?? X);
    }
    getMutableRequestToSpeakParticipants(e) {
        return L(e)?.getRequestToSpeakParticipants() ?? X;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return L(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return L(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return D(e ?? v), C.values(e ?? v);
    }
    getChannelsVersion() {
        return C.version;
    }
    getParticipant(e, t) {
        return L(e)?.getParticipant(t) ?? null;
    }
}
let ee = new J(u.h, {
    CONNECTION_OPEN: V,
    OVERLAY_INITIALIZE: V,
    VOICE_STATE_UPDATES: B,
    CHANNEL_DELETE: q,
    GUILD_MEMBERS_CHUNK_BATCH: j,
    USER_UPDATE: Y,
    GUILD_MEMBER_REMOVE: Y,
    GUILD_MEMBER_UPDATE: Y,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_UPDATE: Q,
    RTC_CONNECTION_VIDEO: z,
    STREAM_CLOSE: $,
    STREAM_DELETE: $,
    RELATIONSHIP_ADD: W,
    RELATIONSHIP_REMOVE: W,
    RELATIONSHIP_UPDATE: W,
    GUILD_CREATE: K,
    GUILD_DELETE: K,
    PASSIVE_UPDATE_V2: H,
});
