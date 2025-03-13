let r, i, o, a, s, l;
n.d(t, { Z: () => eo }), n(47120), n(653041);
var c,
    u = n(442837),
    d = n(570140),
    f = n(258609),
    _ = n(594190),
    p = n(569545),
    h = n(102172),
    m = n(139656),
    g = n(783443),
    E = n(855403),
    v = n(314897),
    b = n(592125),
    y = n(430824),
    O = n(131951),
    I = n(496675),
    S = n(19780),
    T = n(944486),
    N = n(979651),
    A = n(981631),
    C = n(70722);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = null,
    x = {},
    M = null;
function k() {
    (r = new Map()), (i = {}), (o = {}), (a = {});
}
function j(e) {
    var t;
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : A.kod] = e);
}
function U(e, t) {
    var n;
    let r = null != t ? t : A.kod;
    return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
}
function G(e) {
    r.delete(e);
}
function B() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function V(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild), (r = new Map(t.activeStreams)), (o = t.rtcStreams), (a = t.streamerActiveStreamMetadatas);
}
function F(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: o, selfStream: a, discoverable: s } = t;
        if (a && null != i)
            return (
                j({
                    streamType: null != r ? C.lo.GUILD : C.lo.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: s
                }),
                !0
            );
        {
            let t = v.default.getSessionId();
            return n === v.default.getId() && o !== t && null != S.Z.getChannelId() ? e : U(n, r) || e;
        }
    }, !1);
}
function Z(e) {
    let { streamKey: t } = e,
        n = (0, p.my)(t);
    r.delete(t), r.set(t, D(P({}, n), { state: A.jm8.CONNECTING })), n.ownerId === v.default.getId() && (x[n.channelId] = !1);
}
function H(e) {
    var t;
    let { streamType: n, guildId: i, channelId: o, pid: c, sourceName: u, sourceId: d, sourceIcon: f, previewDisabled: h } = e,
        m = (0, p.V9)({
            streamType: n,
            guildId: i,
            channelId: o,
            ownerId: v.default.getId()
        });
    (null == d ? void 0 : d.startsWith('prepicked:')) && null == c && (c = s);
    let g = null !== (t = (null == d ? void 0 : d.startsWith('prepicked:')) && null != l ? l : null != c ? _.ZP.getGameForPID(c) : null != d ? _.ZP.getRunningGames().find((e) => (0, E.Z)(d, e.windowHandle)) : null) && void 0 !== t ? t : null;
    (a[m] = {
        id: null == g ? void 0 : g.id,
        pid: c,
        sourceName: u,
        previewDisabled: h,
        sourceIcon: f,
        sourceId: d
    }),
        r.delete(m),
        r.set(m, {
            streamType: n,
            guildId: i,
            channelId: o,
            ownerId: v.default.getId(),
            state: A.jm8.CONNECTING
        });
}
function W(e) {
    for (let t of e.applications) {
        let e = _.ZP.getGameForPID(t.id);
        if (null != e) return e;
    }
    for (let t of e.windows)
        if (null != t.owningApplication) {
            let e = _.ZP.getGameForPID(t.owningApplication.id);
            if (null != e) return e;
        }
}
function Y(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((s = null == (l = W(n)) ? void 0 : l.pid), !t)) return !1;
    let r = (0, g.Z)(n),
        i = {
            pid: s,
            id: null == l ? void 0 : l.id
        };
    null != r && (i.sourceName = r);
    let o = !1;
    for (let e in a) {
        var c, u;
        (null === (u = a[e]) || void 0 === u ? void 0 : null === (c = u.sourceId) || void 0 === c ? void 0 : c.startsWith('prepicked:')) && ((a[e] = P({}, a[e], i)), (o = !0));
    }
    return o;
}
function K(e) {
    let { streamKey: t } = e;
    a[t] = null;
}
function z(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: a } = e;
    r.set(t, D(P({}, (0, p.my)(t)), { state: a ? A.jm8.PAUSED : A.jm8.ACTIVE })),
        (o[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function q(e) {
    let { streamKey: t } = e;
    G(t);
}
function Q(e) {
    let { id: t, channelId: n } = e;
    (L = t),
        Array.from(r.values()).forEach((e) => {
            (0, p.V9)(e) !== L && e.state === A.jm8.ENDED && G((0, p.V9)(e));
        }),
        null != t && (0, p.DB)(t) && t.includes(v.default.getId()) && (x[n] = !1);
}
function X(e) {
    let { streamKey: t, unavailable: i, reason: a } = e;
    delete o[t];
    let s = r.get(t);
    if (null == s) return !1;
    let l = A.jm8.ENDED;
    if (i) l = A.jm8.RECONNECTING;
    else if (a === A.si2.UNAUTHORIZED) l = A.jm8.FAILED;
    else if (a === A.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, p.my)(t);
        n
            .e('76731')
            .then(n.bind(n, 626892))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = A.jm8.ENDED);
    }
    r.set(t, D(P({}, s), { state: l })), l === A.jm8.ENDED && L !== t && G(t);
}
function J(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, D(P({}, n), { state: A.jm8.FAILED }));
}
function $(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === A.jm8.ENDED) return !1;
    let o = i.state;
    switch (n) {
        case A.hes.DISCONNECTED:
            o = A.jm8.RECONNECTING;
            break;
        case A.hes.RTC_CONNECTED:
            o = A.jm8.ACTIVE;
    }
    if (o === i.state) return !1;
    r.set(t, D(P({}, i), { state: o }));
}
function ee(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, p.DB)(L) && (null == L ? void 0 : L.includes(v.default.getId())) && !1 === x[t] && !0 === n && (L = null), (x[t] = n);
}
function et(e) {
    let { intent: t } = e;
    M = t;
}
function en(e, t) {
    let n = b.Z.getBasicChannel(t);
    return e === C.lo.CALL || (null != n && I.Z.canBasicChannel(A.S7T.VIEW_CHANNEL, n));
}
function er(e) {
    if (en(e.streamType, e.channelId)) return !0;
    let t = b.Z.getBasicChannel(e.channelId);
    return null != t && (0, h.p9)(t, N.Z, y.Z, I.Z, f.Z)[0];
}
k();
class ei extends (c = u.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([I.Z], () => !0), this.waitFor(_.ZP, I.Z), (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 && Object.assign(x, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: x };
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, m.Z)(O.Z) && null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null;
    }
    getAllActiveStreams() {
        return (0, m.Z)(O.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, m.Z)(O.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, m.Z)(O.Z) && null !== (t = r.get(e)) && void 0 !== t ? t : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, m.Z)(O.Z) || null == e) return null;
        let n = (0, p.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = T.Z.getVoiceChannelId(),
            t = b.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(v.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = T.Z.getVoiceChannelId(),
            n = b.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(v.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = a[(0, p.V9)(r)]) && void 0 !== e ? e : null;
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
        if (!(0, m.Z)(O.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => er(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, m.Z)(O.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => er(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, m.Z)(O.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : A.kod];
        return null != r && er(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, m.Z)(O.Z) && null !== (t = o[e]) && void 0 !== t ? t : null;
    }
    getAllApplicationStreams() {
        return (0, m.Z)(O.Z) ? B().filter((e) => null != e && en(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, m.Z)(O.Z) ? B().filter((t) => null != t && t.channelId === e && en(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, m.Z)(O.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, p.V9)(e)) ? o[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return M;
    }
    getStreamingState() {
        return (0, m.Z)(O.Z)
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
R(ei, 'displayName', 'ApplicationStreamingStore'), R(ei, 'persistKey', 'ApplicationStreamingStore');
let eo = new ei(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: Y,
    OVERLAY_INITIALIZE: V,
    VOICE_STATE_UPDATES: F,
    STREAM_WATCH: Z,
    STREAM_START: H,
    STREAM_STOP: K,
    STREAM_CREATE: z,
    STREAM_UPDATE: z,
    STREAM_TIMED_OUT: J,
    STREAM_DELETE: X,
    STREAM_CLOSE: q,
    STREAM_UPDATE_SELF_HIDDEN: ee,
    SET_STREAM_APP_INTENT: et,
    RTC_CONNECTION_STATE: $,
    CHANNEL_RTC_SELECT_PARTICIPANT: Q,
    CONNECTION_OPEN: k,
    CONNECTION_CLOSED: k,
    LOGOUT: k
});
