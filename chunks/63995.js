"use strict";
n.d(t, { A: () => et }), n(321073);
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
    h = n(71393),
    p = n(576705),
    g = n(994500),
    E = n(485296),
    A = n(287809),
    I = n(977997),
    T = n(607567),
    y = n(69407),
    S = n(312006),
    v = n(446600);
let C = "NO_GUILD",
    b = new l.J(
        (e) => [O(e)],
        (e) => e.id,
    ),
    N = new Set(),
    R = {};
function O(e) {
    return e.getGuildId() ?? C;
}
function D(e) {
    return b.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function L(e) {
    N.has(e) ||
        (N.add(e),
        s()(f.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                P(e) && b.set(e.id, e);
            }));
}
function w(e) {
    let t = R[e];
    if (null != t) return t;
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (L(n.guild_id), P(n)) ? x(e) : null;
}
function x(e) {
    let t = R[e];
    return null == t && ((t = new y.Ay(e)), (R[e] = t), t.rebuild()), t;
}
function P(e) {
    return null != e && e.isGuildStageVoice() && T.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function M(e, t) {
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice()
        ? 0 === t.size()
            ? F(n.id)
            : null == b.get(n.id) && b.set(n.id, n)
        : F(e);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D();
    return t.reduce((t, n) => {
        let r = x(n);
        return e(r) ? (M(n, r), !0) : t;
    }, !1);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D();
    return k((t) => t.updateParticipant(e), t);
}
function G(e) {
    for (let t of b.values(e)) b.delete(t.id), delete R[t.id];
    N.delete(e);
}
function F(e) {
    return null != e && (delete R[e], b.delete(e), !0);
}
function V() {
    N.clear(), b.clear(), (R = {});
}
function B(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = f.A.getChannel(n);
    r?.isGuildStageVoice() && (t.add(n), null == R[n] && e.add(n));
}
function j(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !N.has(t.guildId)) return e;
        let r = new Set();
        return (B(n, r, t.oldChannelId), B(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e;
    }, !1);
}
function H(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = U(t.user.id) || n;
    return n;
}
function Y(e) {
    let t = !1;
    for (let n of D(e.guildId)) t = x(n).rebuild() || t;
    return t;
}
function W(e) {
    let { user: t } = e;
    return U(t.id);
}
function K(e) {
    let { relationship: t } = e;
    return U(t.id);
}
function $(e) {
    let { guild: t } = e;
    G(t.id);
}
function z(e) {
    let { channelId: t, guildId: n, userId: r } = e;
    return null != n && !!N.has(n) && U(r, [t]);
}
function q(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, c.Iy)(t);
    return null != r && !!N.has(r) && U(i, [n]);
}
function X(e) {
    let {
        channel: { id: t },
    } = e;
    return F(t);
}
function Z(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !N.has(t.guild_id)) return e;
            let n = b.get(t.id);
            return (
                null == n || i()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), b.set(t.id, t)), e
            );
        }, []);
    return k((e) => e.rebuild(), n), n.length > 0;
}
function Q(e) {
    let { guildId: t } = e;
    if (N.has(t)) return k((e) => e.rebuild(), D(t));
}
let J = [];
class ee extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, A.default, f.A, E.A, I.A, p.A, T.Ay, h.A, S.Ay, g.A, v.A, d.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (w(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? J : (w(e)?.toArray(t) ?? J);
    }
    getMutableRequestToSpeakParticipants(e) {
        return w(e)?.getRequestToSpeakParticipants() ?? J;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return w(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return w(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return L(e ?? C), b.values(e ?? C);
    }
    getChannelsVersion() {
        return b.version;
    }
    getParticipant(e, t) {
        return w(e)?.getParticipant(t) ?? null;
    }
}
let et = new ee(u.h, {
    CONNECTION_OPEN: V,
    OVERLAY_INITIALIZE: V,
    VOICE_STATE_UPDATES: j,
    CHANNEL_DELETE: X,
    GUILD_MEMBERS_CHUNK_BATCH: H,
    USER_UPDATE: W,
    GUILD_MEMBER_REMOVE: W,
    GUILD_MEMBER_UPDATE: W,
    CHANNEL_UPDATES: Z,
    GUILD_ROLE_UPDATE: Q,
    RTC_CONNECTION_VIDEO: z,
    STREAM_CLOSE: q,
    STREAM_DELETE: q,
    RELATIONSHIP_ADD: K,
    RELATIONSHIP_REMOVE: K,
    RELATIONSHIP_UPDATE: K,
    GUILD_CREATE: $,
    GUILD_DELETE: $,
    PASSIVE_UPDATE_V2: Y,
});
