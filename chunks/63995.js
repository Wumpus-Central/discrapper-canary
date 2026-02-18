"use strict";
n.d(t, { A: () => ee }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
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
    E = n(485296),
    g = n(287809),
    A = n(977997),
    I = n(607567),
    T = n(69407),
    S = n(312006),
    y = n(446600);
let v = "NO_GUILD",
    N = new l.J(
        (e) => [R(e)],
        (e) => e.id,
    ),
    C = new Set(),
    b = {};
function R(e) {
    return e.getGuildId() ?? v;
}
function O(e) {
    return N.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    C.has(e) ||
        (C.add(e),
        a()(f.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                x(e) && N.set(e.id, e);
            }));
}
function L(e) {
    let t = b[e];
    if (null != t) return t;
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), x(n)) ? w(e) : null;
}
function w(e) {
    let t = b[e];
    return null == t && ((t = new T.Ay(e)), (b[e] = t), t.rebuild()), t;
}
function x(e) {
    return null != e && e.isGuildStageVoice() && I.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function M(e, t) {
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice()
        ? 0 === t.size()
            ? G(n.id)
            : null == N.get(n.id) && N.set(n.id, n)
        : G(e);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return t.reduce((t, n) => {
        let r = w(n);
        return e(r) ? (M(n, r), !0) : t;
    }, !1);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
    return P((t) => t.updateParticipant(e), t);
}
function U(e) {
    for (let t of N.values(e)) N.delete(t.id), delete b[t.id];
    C.delete(e);
}
function G(e) {
    return null != e && (delete b[e], N.delete(e), !0);
}
function F() {
    C.clear(), N.clear(), (b = {});
}
function V(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = f.A.getChannel(n);
    r?.isGuildStageVoice() && (t.add(n), null == b[n] && e.add(n));
}
function B(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !C.has(t.guildId)) return e;
        let r = new Set();
        return (V(n, r, t.oldChannelId), V(n, r, t.channelId), 0 === r.size) ? e : k(t.userId, Array.from(r)) || e;
    }, !1);
}
function H(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = k(t.user.id) || n;
    return n;
}
function j(e) {
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
    return null != n && !!C.has(n) && k(r, [t]);
}
function $(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, c.Iy)(t);
    return null != r && !!C.has(r) && k(i, [n]);
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
            if (!t.isGuildStageVoice() || !C.has(t.guild_id)) return e;
            let n = N.get(t.id);
            return (
                null == n || i()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), N.set(t.id, t)), e
            );
        }, []);
    return P((e) => e.rebuild(), n), n.length > 0;
}
function X(e) {
    let { guildId: t } = e;
    if (C.has(t)) return P((e) => e.rebuild(), O(t));
}
let Q = [];
class J extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, g.default, f.A, E.A, A.A, h.A, I.Ay, p.A, S.Ay, m.A, y.A, d.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (L(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? Q : (L(e)?.toArray(t) ?? Q);
    }
    getMutableRequestToSpeakParticipants(e) {
        return L(e)?.getRequestToSpeakParticipants() ?? Q;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return L(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return L(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return D(e ?? v), N.values(e ?? v);
    }
    getChannelsVersion() {
        return N.version;
    }
    getParticipant(e, t) {
        return L(e)?.getParticipant(t) ?? null;
    }
}
let ee = new J(u.h, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    VOICE_STATE_UPDATES: B,
    CHANNEL_DELETE: q,
    GUILD_MEMBERS_CHUNK_BATCH: H,
    USER_UPDATE: Y,
    GUILD_MEMBER_REMOVE: Y,
    GUILD_MEMBER_UPDATE: Y,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_UPDATE: X,
    RTC_CONNECTION_VIDEO: z,
    STREAM_CLOSE: $,
    STREAM_DELETE: $,
    RELATIONSHIP_ADD: W,
    RELATIONSHIP_REMOVE: W,
    RELATIONSHIP_UPDATE: W,
    GUILD_CREATE: K,
    GUILD_DELETE: K,
    PASSIVE_UPDATE_V2: j,
});
