let r, i, o, a;
n.d(t, { Z: () => ee }), n(47120), n(653041);
var s,
    l = n(442837),
    c = n(570140),
    u = n(258609),
    d = n(594190),
    f = n(569545),
    p = n(102172),
    _ = n(139656),
    h = n(855403),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(131951),
    b = n(496675),
    y = n(19780),
    O = n(944486),
    S = n(979651),
    I = n(981631),
    T = n(70722);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = null,
    w = {},
    D = null;
function x() {
    (r = new Map()), (i = {}), (o = {}), (a = {});
}
function L(e) {
    var t;
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : I.kod] = e);
}
function M(e, t) {
    var n;
    let r = null != t ? t : I.kod;
    return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
}
function k(e) {
    r.delete(e);
}
function j() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function U(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild), (r = new Map(t.activeStreams)), (o = t.rtcStreams), (a = t.streamerActiveStreamMetadatas);
}
function G(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: o, selfStream: a, discoverable: s } = t;
        if (a && null != i)
            return (
                L({
                    streamType: null != r ? T.lo.GUILD : T.lo.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: s
                }),
                !0
            );
        {
            let t = m.default.getSessionId();
            return n === m.default.getId() && o !== t && null != y.Z.getChannelId() ? e : M(n, r) || e;
        }
    }, !1);
}
function B(e) {
    let { streamKey: t } = e,
        n = (0, f.my)(t);
    r.delete(t), r.set(t, R(A({}, n), { state: I.jm8.CONNECTING })), n.ownerId === m.default.getId() && (w[n.channelId] = !1);
}
function Z(e) {
    var t;
    let { streamType: n, guildId: i, channelId: o, pid: s, sourceName: l, sourceId: c, previewDisabled: u } = e,
        p = (0, f.V9)({
            streamType: n,
            guildId: i,
            channelId: o,
            ownerId: m.default.getId()
        }),
        _ = null !== (t = null != s ? d.ZP.getGameForPID(s) : null != c ? d.ZP.getRunningGames().find((e) => (0, h.Z)(c, e.windowHandle)) : null) && void 0 !== t ? t : null;
    (a[p] = {
        id: null == _ ? void 0 : _.id,
        pid: s,
        sourceName: l,
        previewDisabled: u
    }),
        r.delete(p),
        r.set(p, {
            streamType: n,
            guildId: i,
            channelId: o,
            ownerId: m.default.getId(),
            state: I.jm8.CONNECTING
        });
}
function F(e) {
    let { streamKey: t } = e;
    a[t] = null;
}
function V(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: a } = e;
    r.set(t, R(A({}, (0, f.my)(t)), { state: a ? I.jm8.PAUSED : I.jm8.ACTIVE })),
        (o[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function H(e) {
    let { streamKey: t } = e;
    k(t);
}
function W(e) {
    let { id: t, channelId: n } = e;
    (P = t),
        Array.from(r.values()).forEach((e) => {
            (0, f.V9)(e) !== P && e.state === I.jm8.ENDED && k((0, f.V9)(e));
        }),
        null != t && (0, f.DB)(t) && t.includes(m.default.getId()) && (w[n] = !1);
}
function Y(e) {
    let { streamKey: t, unavailable: i, reason: a } = e;
    delete o[t];
    let s = r.get(t);
    if (null == s) return !1;
    let l = I.jm8.ENDED;
    if (i) l = I.jm8.RECONNECTING;
    else if (a === I.si2.UNAUTHORIZED) l = I.jm8.FAILED;
    else if (a === I.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, f.my)(t);
        n
            .e('76731')
            .then(n.bind(n, 626892))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = I.jm8.ENDED);
    }
    r.set(t, R(A({}, s), { state: l })), l === I.jm8.ENDED && P !== t && k(t);
}
function K(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, R(A({}, n), { state: I.jm8.FAILED }));
}
function z(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === I.jm8.ENDED) return !1;
    let o = i.state;
    switch (n) {
        case I.hes.DISCONNECTED:
            o = I.jm8.RECONNECTING;
            break;
        case I.hes.RTC_CONNECTED:
            o = I.jm8.ACTIVE;
    }
    if (o === i.state) return !1;
    r.set(t, R(A({}, i), { state: o }));
}
function q(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, f.DB)(P) && (null == P ? void 0 : P.includes(m.default.getId())) && !1 === w[t] && !0 === n && (P = null), (w[t] = n);
}
function Q(e) {
    let { intent: t } = e;
    D = t;
}
function X(e, t) {
    let n = g.Z.getBasicChannel(t);
    return e === T.lo.CALL || (null != n && b.Z.canBasicChannel(I.S7T.VIEW_CHANNEL, n));
}
function J(e) {
    if (X(e.streamType, e.channelId)) return !0;
    let t = g.Z.getBasicChannel(e.channelId);
    return null != t && (0, p.p9)(t, S.Z, E.Z, b.Z, u.Z)[0];
}
x();
class $ extends (s = l.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([b.Z], () => !0), this.waitFor(d.ZP, b.Z), (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 && Object.assign(w, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: w };
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, _.Z)(v.Z) && null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null;
    }
    getAllActiveStreams() {
        return (0, _.Z)(v.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, _.Z)(v.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, _.Z)(v.Z) && null !== (t = r.get(e)) && void 0 !== t ? t : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, _.Z)(v.Z) || null == e) return null;
        let n = (0, f.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = O.Z.getVoiceChannelId(),
            t = g.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(m.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = O.Z.getVoiceChannelId(),
            n = g.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(m.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = a[(0, f.V9)(r)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null !== (t = a[e]) && void 0 !== t ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = a[e];
        return null !== (t = null == n ? void 0 : n.previewDisabled) && void 0 !== t && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, _.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => J(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, _.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => J(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, _.Z)(v.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : I.kod];
        return null != r && J(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, _.Z)(v.Z) && null !== (t = o[e]) && void 0 !== t ? t : null;
    }
    getAllApplicationStreams() {
        return (0, _.Z)(v.Z) ? j().filter((e) => null != e && X(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, _.Z)(v.Z) ? j().filter((t) => null != t && t.channelId === e && X(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, _.Z)(v.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, f.V9)(e)) ? o[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return D;
    }
    getStreamingState() {
        return (0, _.Z)(v.Z)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: o,
                  streamerActiveStreamMetadatas: a
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
N($, 'displayName', 'ApplicationStreamingStore'), N($, 'persistKey', 'ApplicationStreamingStore');
let ee = new $(c.Z, {
    OVERLAY_INITIALIZE: U,
    VOICE_STATE_UPDATES: G,
    STREAM_WATCH: B,
    STREAM_START: Z,
    STREAM_STOP: F,
    STREAM_CREATE: V,
    STREAM_UPDATE: V,
    STREAM_TIMED_OUT: K,
    STREAM_DELETE: Y,
    STREAM_CLOSE: H,
    STREAM_UPDATE_SELF_HIDDEN: q,
    SET_STREAM_APP_INTENT: Q,
    RTC_CONNECTION_STATE: z,
    CHANNEL_RTC_SELECT_PARTICIPANT: W,
    CONNECTION_OPEN: x,
    CONNECTION_CLOSED: x,
    LOGOUT: x
});
