let i, a, s, o;
var l,
    u = r(47120);
var c = r(653041);
var d = r(724458);
var f = r(442837),
    _ = r(570140),
    h = r(258609),
    p = r(594190),
    m = r(569545),
    g = r(102172),
    E = r(139656),
    v = r(855403),
    I = r(314897),
    T = r(592125),
    b = r(430824),
    y = r(131951),
    S = r(496675),
    A = r(19780),
    N = r(944486),
    C = r(979651),
    R = r(981631),
    O = r(70722);
function D(e, n, r) {
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
let L = null,
    x = {},
    w = null;
function P() {
    (i = new Map()), (a = {}), (s = {}), (o = {});
}
function M(e) {
    var n;
    null == a[e.ownerId] && (a[e.ownerId] = {}), (a[e.ownerId][null !== (n = e.guildId) && void 0 !== n ? n : R.kod] = e);
}
function k(e, n) {
    var r;
    let i = null != n ? n : R.kod;
    return (null === (r = a[e]) || void 0 === r ? void 0 : r[i]) != null && (delete a[e][i], !0);
}
function U(e) {
    i.delete(e);
}
function B() {
    let e = [];
    for (let n in a) {
        let r = a[n];
        for (let i in r) e.push(a[n][i]);
    }
    return e;
}
function G(e) {
    let { applicationStreamState: n } = e;
    (a = n.streamsByUserAndGuild), (i = new Map(n.activeStreams)), (s = n.rtcStreams), (o = n.streamerActiveStreamMetadatas);
}
function Z(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { userId: r, guildId: i, channelId: a, sessionId: s, selfStream: o, discoverable: l } = n;
        if (o && null != a)
            return (
                M({
                    streamType: null != i ? O.lo.GUILD : O.lo.CALL,
                    ownerId: r,
                    guildId: i,
                    channelId: a,
                    discoverable: l
                }),
                !0
            );
        {
            let n = I.default.getSessionId();
            return r === I.default.getId() && s !== n && null != A.Z.getChannelId() ? e : k(r, i) || e;
        }
    }, !1);
}
function F(e) {
    let { streamKey: n } = e,
        r = (0, m.my)(n);
    i.delete(n),
        i.set(n, {
            ...r,
            state: R.jm8.CONNECTING
        }),
        r.ownerId === I.default.getId() && (x[r.channelId] = !1);
}
function V(e) {
    var n;
    let { streamType: r, guildId: a, channelId: s, pid: l, sourceName: u, sourceId: c, previewDisabled: d } = e,
        f = (0, m.V9)({
            streamType: r,
            guildId: a,
            channelId: s,
            ownerId: I.default.getId()
        }),
        _ = null !== (n = null != l ? p.ZP.getGameForPID(l) : null != c ? p.ZP.getRunningGames().find((e) => (0, v.Z)(c, e.windowHandle)) : null) && void 0 !== n ? n : null;
    (o[f] = {
        id: null == _ ? void 0 : _.id,
        pid: l,
        sourceName: u,
        previewDisabled: d
    }),
        i.delete(f),
        i.set(f, {
            streamType: r,
            guildId: a,
            channelId: s,
            ownerId: I.default.getId(),
            state: R.jm8.CONNECTING
        });
}
function j(e) {
    let { streamKey: n } = e;
    o[n] = null;
}
function H(e) {
    let { streamKey: n, region: r, viewerIds: a, paused: o } = e;
    i.set(n, {
        ...(0, m.my)(n),
        state: o ? R.jm8.PAUSED : R.jm8.ACTIVE
    }),
        (s[n] = {
            streamKey: n,
            region: r,
            viewerIds: a
        });
}
function Y(e) {
    let { streamKey: n } = e;
    U(n);
}
function W(e) {
    let { id: n, channelId: r } = e;
    if (
        ((L = n),
        Array.from(i.values()).forEach((e) => {
            (0, m.V9)(e) !== L && e.state === R.jm8.ENDED && U((0, m.V9)(e));
        }),
        null != n)
    )
        (0, m.DB)(n) && n.includes(I.default.getId()) && (x[r] = !1);
}
function K(e) {
    let { streamKey: n, unavailable: a, reason: o } = e;
    delete s[n];
    let l = i.get(n);
    if (null == l) return !1;
    let u = R.jm8.ENDED;
    if (a) u = R.jm8.RECONNECTING;
    else if (o === R.si2.UNAUTHORIZED) u = R.jm8.FAILED;
    else if (o === R.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, m.my)(n);
        r
            .e('76731')
            .then(r.bind(r, 626892))
            .then((n) => {
                let { default: r } = n;
                r(e);
            }),
            (u = R.jm8.ENDED);
    }
    i.set(n, {
        ...l,
        state: u
    }),
        u === R.jm8.ENDED && L !== n && U(n);
}
function z(e) {
    let { streamKey: n } = e,
        r = i.get(n);
    if (null == r) return !1;
    i.set(n, {
        ...r,
        state: R.jm8.FAILED
    });
}
function q(e) {
    let { streamKey: n, state: r } = e;
    if (null == n) return !1;
    let a = i.get(n);
    if (null == a || a.state === R.jm8.ENDED) return !1;
    let s = a.state;
    switch (r) {
        case R.hes.DISCONNECTED:
            s = R.jm8.RECONNECTING;
            break;
        case R.hes.RTC_CONNECTED:
            s = R.jm8.ACTIVE;
    }
    if (s === a.state) return !1;
    i.set(n, {
        ...a,
        state: s
    });
}
function Q(e) {
    let { channelId: n, selfStreamHidden: r } = e;
    (0, m.DB)(L) && (null == L ? void 0 : L.includes(I.default.getId())) && !1 === x[n] && !0 === r && (L = null), (x[n] = r);
}
function X(e) {
    let { intent: n } = e;
    w = n;
}
function J(e, n) {
    let r = T.Z.getBasicChannel(n);
    return e === O.lo.CALL || (null != r && S.Z.canBasicChannel(R.S7T.VIEW_CHANNEL, r));
}
function $(e) {
    if (J(e.streamType, e.channelId)) return !0;
    let n = T.Z.getBasicChannel(e.channelId);
    return null != n && (0, g.p9)(n, C.Z, b.Z, S.Z, h.Z)[0];
}
P();
class ee extends (l = f.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([S.Z], () => !0), this.waitFor(p.ZP, S.Z), (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 && Object.assign(x, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: x };
    }
    isSelfStreamHidden(e) {
        var n;
        return null !== (n = x[e]) && void 0 !== n && n;
    }
    getLastActiveStream() {
        var e;
        return (0, E.Z)(y.Z) ? (null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null) : null;
    }
    getAllActiveStreams() {
        return (0, E.Z)(y.Z) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, E.Z)(y.Z) ? Array.from(i.values()).filter((n) => n.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var n;
        return (0, E.Z)(y.Z) ? (null !== (n = i.get(e)) && void 0 !== n ? n : null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        var n;
        if (!(0, E.Z)(y.Z) || null == e) return null;
        let r = (0, m.V9)(e);
        return null !== (n = this.getActiveStreamForStreamKey(r)) && void 0 !== n ? n : null;
    }
    getCurrentUserActiveStream() {
        let e = N.Z.getVoiceChannelId(),
            n = T.Z.getChannel(e);
        return null == n ? null : this.getActiveStreamForUser(I.default.getId(), n.getGuildId());
    }
    getActiveStreamForUser(e, n) {
        var r;
        let i = this.getStreamForUser(e, n);
        return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (r = this.getAllActiveStreams().find((n) => n.ownerId === e)) && void 0 !== r ? r : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let n = N.Z.getVoiceChannelId(),
            r = T.Z.getChannel(n);
        if (null == r) return null;
        let i = this.getActiveStreamForUser(I.default.getId(), r.getGuildId());
        return null == i ? null : null !== (e = o[(0, m.V9)(i)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var n;
        return null !== (n = o[e]) && void 0 !== n ? n : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var n;
        let r = o[e];
        return null !== (n = null == r ? void 0 : r.previewDisabled) && void 0 !== n && n;
    }
    getAnyStreamForUser(e) {
        var n;
        if (!(0, E.Z)(y.Z)) return null;
        let r = a[e];
        return null == r ? null : null !== (n = Object.values(r).find((e) => $(e))) && void 0 !== n ? n : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var n;
        if (!(0, E.Z)(y.Z)) return null;
        let r = a[e];
        return null == r ? null : null !== (n = Object.values(r).find((e) => $(e) && !1 !== e.discoverable)) && void 0 !== n ? n : null;
    }
    getStreamForUser(e, n) {
        var r;
        if (!(0, E.Z)(y.Z)) return null;
        let i = null === (r = a[e]) || void 0 === r ? void 0 : r[null != n ? n : R.kod];
        return null != i && $(i) ? i : null;
    }
    getRTCStream(e) {
        var n;
        return (0, E.Z)(y.Z) ? (null !== (n = s[e]) && void 0 !== n ? n : null) : null;
    }
    getAllApplicationStreams() {
        return (0, E.Z)(y.Z) ? B().filter((e) => null != e && J(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, E.Z)(y.Z) ? B().filter((n) => null != n && n.channelId === e && J(n.streamType, n.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, E.Z)(y.Z)) return [];
        let n = null,
            r = null != (n = 'string' == typeof e ? e : (0, m.V9)(e)) ? s[n] : null;
        return null != r ? r.viewerIds : [];
    }
    getCurrentAppIntent() {
        return w;
    }
    getStreamingState() {
        return (0, E.Z)(y.Z)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: a,
                  rtcStreams: s,
                  streamerActiveStreamMetadatas: o
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
D(ee, 'displayName', 'ApplicationStreamingStore'),
    D(ee, 'persistKey', 'ApplicationStreamingStore'),
    (n.Z = new ee(_.Z, {
        OVERLAY_INITIALIZE: G,
        VOICE_STATE_UPDATES: Z,
        STREAM_WATCH: F,
        STREAM_START: V,
        STREAM_STOP: j,
        STREAM_CREATE: H,
        STREAM_UPDATE: H,
        STREAM_TIMED_OUT: z,
        STREAM_DELETE: K,
        STREAM_CLOSE: Y,
        STREAM_UPDATE_SELF_HIDDEN: Q,
        SET_STREAM_APP_INTENT: X,
        RTC_CONNECTION_STATE: q,
        CHANNEL_RTC_SELECT_PARTICIPANT: W,
        CONNECTION_OPEN: P,
        CONNECTION_CLOSED: P,
        LOGOUT: P
    }));
