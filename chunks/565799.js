var i,
    a = r(47120);
var s = r(724458);
var o = r(653041);
var l = r(348327),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(759174),
    h = r(570140),
    p = r(569545),
    m = r(199902),
    g = r(314897),
    E = r(592125),
    v = r(430824),
    I = r(496675),
    T = r(699516),
    b = r(606304),
    y = r(594174),
    S = r(979651),
    A = r(938475),
    N = r(501655),
    C = r(88751),
    R = r(427679);
function O(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let D = 'NO_GUILD',
    L = new _.h(
        (e) => [P(e)],
        (e) => e.id
    ),
    x = new Set(),
    w = {};
function P(e) {
    var n;
    return null !== (n = e.getGuildId()) && void 0 !== n ? n : D;
}
function M(e) {
    return L.values(null != e ? e : void 0, !0).map((e) => {
        let { id: n } = e;
        return n;
    });
}
function k(e) {
    !x.has(e) &&
        (x.add(e),
        d()(E.Z.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                G(e) && L.set(e.id, e);
            }));
}
function U(e) {
    let n = w[e];
    if (null != n) return n;
    let r = E.Z.getChannel(e);
    return null != r && r.isGuildStageVoice() ? ((k(r.guild_id), G(r)) ? B(e) : null) : null;
}
function B(e) {
    let n = w[e];
    return null == n && ((n = new N.ZP(e)), (w[e] = n), n.rebuild()), n;
}
function G(e) {
    return null != e && e.isGuildStageVoice() && A.ZP.countVoiceStatesForChannel(e.id) > 0;
}
function Z(e, n) {
    let r = E.Z.getChannel(e);
    return null != r && r.isGuildStageVoice() ? (0 === n.size() ? H(r.id) : null == L.get(r.id) && L.set(r.id, r)) : H(e);
}
function F(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M();
    return n.reduce((n, r) => {
        let i = B(r);
        return e(i) ? (Z(r, i), !0) : n;
    }, !1);
}
function V(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M();
    return F((n) => n.updateParticipant(e), n);
}
function j(e) {
    for (let n of L.values(e)) L.delete(n.id), delete w[n.id];
    x.delete(e);
}
function H(e) {
    return null != e && (delete w[e], L.delete(e), !0);
}
function Y() {
    x.clear(), L.clear(), (w = {});
}
function W(e, n, r) {
    if (null == r || e.has(r)) return;
    let i = E.Z.getChannel(r);
    if (!!(null == i ? void 0 : i.isGuildStageVoice())) n.add(r), e.add(r);
}
function K(e) {
    let { voiceStates: n } = e,
        r = new Set();
    return n.reduce((e, n) => {
        if (null == n.guildId || !x.has(n.guildId)) return e;
        let i = new Set();
        return (W(r, i, n.oldChannelId), W(r, i, n.channelId), 0 === i.size) ? e : V(n.userId, Array.from(i)) || e;
    }, !1);
}
function z(e) {
    let { chunks: n } = e,
        r = !1;
    for (let e of n) for (let n of e.members) r = V(n.user.id) || r;
    return r;
}
function q(e) {
    let n = !1;
    for (let r of M(e.guildId)) n = B(r).rebuild() || n;
    return n;
}
function Q(e) {
    let { user: n } = e;
    return V(n.id);
}
function X(e) {
    let { relationship: n } = e;
    return V(n.id);
}
function J(e) {
    let { guild: n } = e;
    j(n.id);
}
function $(e) {
    let { channelId: n, guildId: r, userId: i } = e;
    return !!(null != r && x.has(r)) && V(i, [n]);
}
function ee(e) {
    let { streamKey: n } = e,
        { channelId: r, guildId: i, ownerId: a } = (0, p.my)(n);
    return !!(null != i && x.has(i)) && V(a, [r]);
}
function et(e) {
    let {
        channel: { id: n }
    } = e;
    return H(n);
}
function en(e) {
    let { channels: n } = e,
        r = n.reduce((e, n) => {
            if (!n.isGuildStageVoice() || !x.has(n.guild_id)) return e;
            let r = L.get(n.id);
            return null == r || u()(n.permissionOverwrites, r.permissionOverwrites) ? e : (e.push(n.id), L.set(n.id, n), e);
        }, []);
    return F((e) => e.rebuild(), r), r.length > 0;
}
function er(e) {
    let { guildId: n } = e;
    if (x.has(n)) return F((e) => e.rebuild(), M(n));
}
let ei = [];
class ea extends (i = f.ZP.Store) {
    initialize() {
        this.waitFor(g.default, y.default, E.Z, b.Z, S.Z, I.Z, A.ZP, v.Z, C.ZP, T.Z, R.Z, m.Z);
    }
    getParticipantsVersion(e) {
        var n, r;
        return null == e ? -1 : null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.version) && void 0 !== r ? r : -1;
    }
    getMutableParticipants(e, n) {
        var r, i;
        return null == e ? ei : null !== (i = null === (r = U(e)) || void 0 === r ? void 0 : r.toArray(n)) && void 0 !== i ? i : ei;
    }
    getMutableRequestToSpeakParticipants(e) {
        var n, r;
        return null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.getRequestToSpeakParticipants()) && void 0 !== r ? r : ei;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var n, r;
        return null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.requestToSpeakVersion) && void 0 !== r ? r : -1;
    }
    getParticipantCount(e, n) {
        var r, i;
        return null !== (i = null === (r = U(e)) || void 0 === r ? void 0 : r.size(n)) && void 0 !== i ? i : 0;
    }
    getChannels(e) {
        return k(null != e ? e : D), L.values(null != e ? e : D);
    }
    getChannelsVersion() {
        return L.version;
    }
    getParticipant(e, n) {
        var r, i;
        return null !== (i = null === (r = U(e)) || void 0 === r ? void 0 : r.getParticipant(n)) && void 0 !== i ? i : null;
    }
}
O(ea, 'displayName', 'StageChannelParticipantStore'),
    (n.Z = new ea(h.Z, {
        CONNECTION_OPEN: Y,
        OVERLAY_INITIALIZE: Y,
        VOICE_STATE_UPDATES: K,
        CHANNEL_DELETE: et,
        GUILD_MEMBERS_CHUNK_BATCH: z,
        USER_UPDATE: Q,
        GUILD_MEMBER_REMOVE: Q,
        GUILD_MEMBER_UPDATE: Q,
        CHANNEL_UPDATES: en,
        GUILD_ROLE_UPDATE: er,
        RTC_CONNECTION_VIDEO: $,
        STREAM_CLOSE: ee,
        STREAM_DELETE: ee,
        RELATIONSHIP_ADD: X,
        RELATIONSHIP_REMOVE: X,
        RELATIONSHIP_UPDATE: X,
        GUILD_CREATE: J,
        GUILD_DELETE: J,
        PASSIVE_UPDATE_V2: q
    }));
