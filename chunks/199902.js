let i, r, a, s;
n.d(t, { Z: () => X }), n(47120), n(653041), n(724458);
var o,
    l = n(442837),
    u = n(570140),
    c = n(258609),
    d = n(594190),
    f = n(569545),
    _ = n(102172),
    p = n(139656),
    h = n(855403),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(131951),
    y = n(496675),
    I = n(19780),
    T = n(944486),
    b = n(979651),
    S = n(981631),
    A = n(70722);
function N(e, t, n) {
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
let C = null,
    R = {},
    O = null;
function D() {
    (i = new Map()), (r = {}), (a = {}), (s = {});
}
function L(e) {
    var t;
    null == r[e.ownerId] && (r[e.ownerId] = {}), (r[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : S.kod] = e);
}
function x(e, t) {
    var n;
    let i = null != t ? t : S.kod;
    return (null === (n = r[e]) || void 0 === n ? void 0 : n[i]) != null && (delete r[e][i], !0);
}
function w(e) {
    i.delete(e);
}
function P() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function M(e) {
    let { applicationStreamState: t } = e;
    (r = t.streamsByUserAndGuild), (i = new Map(t.activeStreams)), (a = t.rtcStreams), (s = t.streamerActiveStreamMetadatas);
}
function k(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: i, channelId: r, sessionId: a, selfStream: s, discoverable: o } = t;
        if (s && null != r)
            return (
                L({
                    streamType: null != i ? A.lo.GUILD : A.lo.CALL,
                    ownerId: n,
                    guildId: i,
                    channelId: r,
                    discoverable: o
                }),
                !0
            );
        {
            let t = m.default.getSessionId();
            return n === m.default.getId() && a !== t && null != I.Z.getChannelId() ? e : x(n, i) || e;
        }
    }, !1);
}
function U(e) {
    let { streamKey: t } = e,
        n = (0, f.my)(t);
    i.delete(t),
        i.set(t, {
            ...n,
            state: S.jm8.CONNECTING
        }),
        n.ownerId === m.default.getId() && (R[n.channelId] = !1);
}
function G(e) {
    var t;
    let { streamType: n, guildId: r, channelId: a, pid: o, sourceName: l, sourceId: u, previewDisabled: c } = e,
        _ = (0, f.V9)({
            streamType: n,
            guildId: r,
            channelId: a,
            ownerId: m.default.getId()
        }),
        p = null !== (t = null != o ? d.ZP.getGameForPID(o) : null != u ? d.ZP.getRunningGames().find((e) => (0, h.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
    (s[_] = {
        id: null == p ? void 0 : p.id,
        pid: o,
        sourceName: l,
        previewDisabled: c
    }),
        i.delete(_),
        i.set(_, {
            streamType: n,
            guildId: r,
            channelId: a,
            ownerId: m.default.getId(),
            state: S.jm8.CONNECTING
        });
}
function B(e) {
    let { streamKey: t } = e;
    s[t] = null;
}
function Z(e) {
    let { streamKey: t, region: n, viewerIds: r, paused: s } = e;
    i.set(t, {
        ...(0, f.my)(t),
        state: s ? S.jm8.PAUSED : S.jm8.ACTIVE
    }),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: r
        });
}
function F(e) {
    let { streamKey: t } = e;
    w(t);
}
function V(e) {
    let { id: t, channelId: n } = e;
    (C = t),
        Array.from(i.values()).forEach((e) => {
            (0, f.V9)(e) !== C && e.state === S.jm8.ENDED && w((0, f.V9)(e));
        }),
        null != t && (0, f.DB)(t) && t.includes(m.default.getId()) && (R[n] = !1);
}
function j(e) {
    let { streamKey: t, unavailable: r, reason: s } = e;
    delete a[t];
    let o = i.get(t);
    if (null == o) return !1;
    let l = S.jm8.ENDED;
    if (r) l = S.jm8.RECONNECTING;
    else if (s === S.si2.UNAUTHORIZED) l = S.jm8.FAILED;
    else if (s === S.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, f.my)(t);
        n
            .e('76731')
            .then(n.bind(n, 626892))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = S.jm8.ENDED);
    }
    i.set(t, {
        ...o,
        state: l
    }),
        l === S.jm8.ENDED && C !== t && w(t);
}
function H(e) {
    let { streamKey: t } = e,
        n = i.get(t);
    if (null == n) return !1;
    i.set(t, {
        ...n,
        state: S.jm8.FAILED
    });
}
function Y(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let r = i.get(t);
    if (null == r || r.state === S.jm8.ENDED) return !1;
    let a = r.state;
    switch (n) {
        case S.hes.DISCONNECTED:
            a = S.jm8.RECONNECTING;
            break;
        case S.hes.RTC_CONNECTED:
            a = S.jm8.ACTIVE;
    }
    if (a === r.state) return !1;
    i.set(t, {
        ...r,
        state: a
    });
}
function W(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, f.DB)(C) && (null == C ? void 0 : C.includes(m.default.getId())) && !1 === R[t] && !0 === n && (C = null), (R[t] = n);
}
function K(e) {
    let { intent: t } = e;
    O = t;
}
function z(e, t) {
    let n = g.Z.getBasicChannel(t);
    return e === A.lo.CALL || (null != n && y.Z.canBasicChannel(S.S7T.VIEW_CHANNEL, n));
}
function q(e) {
    if (z(e.streamType, e.channelId)) return !0;
    let t = g.Z.getBasicChannel(e.channelId);
    return null != t && (0, _.p9)(t, b.Z, E.Z, y.Z, c.Z)[0];
}
D();
class Q extends (o = l.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([y.Z], () => !0), this.waitFor(d.ZP, y.Z), (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 && Object.assign(R, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: R };
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, p.Z)(v.Z) && null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null;
    }
    getAllActiveStreams() {
        return (0, p.Z)(v.Z) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, p.Z)(v.Z) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, p.Z)(v.Z) && null !== (t = i.get(e)) && void 0 !== t ? t : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, p.Z)(v.Z) || null == e) return null;
        let n = (0, f.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = T.Z.getVoiceChannelId(),
            t = g.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(m.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let i = this.getStreamForUser(e, t);
        return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = T.Z.getVoiceChannelId(),
            n = g.Z.getChannel(t);
        if (null == n) return null;
        let i = this.getActiveStreamForUser(m.default.getId(), n.getGuildId());
        return null == i ? null : null !== (e = s[(0, f.V9)(i)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null !== (t = s[e]) && void 0 !== t ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = s[e];
        return null !== (t = null == n ? void 0 : n.previewDisabled) && void 0 !== t && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, p.Z)(v.Z)) return null;
        let n = r[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => q(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, p.Z)(v.Z)) return null;
        let n = r[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => q(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, p.Z)(v.Z)) return null;
        let i = null === (n = r[e]) || void 0 === n ? void 0 : n[null != t ? t : S.kod];
        return null != i && q(i) ? i : null;
    }
    getRTCStream(e) {
        var t;
        return (0, p.Z)(v.Z) && null !== (t = a[e]) && void 0 !== t ? t : null;
    }
    getAllApplicationStreams() {
        return (0, p.Z)(v.Z) ? P().filter((e) => null != e && z(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, p.Z)(v.Z) ? P().filter((t) => null != t && t.channelId === e && z(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, p.Z)(v.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, f.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return O;
    }
    getStreamingState() {
        return (0, p.Z)(v.Z)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
N(Q, 'displayName', 'ApplicationStreamingStore'), N(Q, 'persistKey', 'ApplicationStreamingStore');
let X = new Q(u.Z, {
    OVERLAY_INITIALIZE: M,
    VOICE_STATE_UPDATES: k,
    STREAM_WATCH: U,
    STREAM_START: G,
    STREAM_STOP: B,
    STREAM_CREATE: Z,
    STREAM_UPDATE: Z,
    STREAM_TIMED_OUT: H,
    STREAM_DELETE: j,
    STREAM_CLOSE: F,
    STREAM_UPDATE_SELF_HIDDEN: W,
    SET_STREAM_APP_INTENT: K,
    RTC_CONNECTION_STATE: Y,
    CHANNEL_RTC_SELECT_PARTICIPANT: V,
    CONNECTION_OPEN: D,
    CONNECTION_CLOSED: D,
    LOGOUT: D
});
