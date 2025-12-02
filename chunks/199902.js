let r, i, a, o, s, l;
n.d(t, { Z: () => eo }), n(388685), n(539854);
var c,
    u = n(442837),
    d = n(570140),
    f = n(258609),
    p = n(594190),
    _ = n(569545),
    m = n(102172),
    h = n(139656),
    g = n(783443),
    E = n(855403),
    b = n(314897),
    y = n(592125),
    O = n(430824),
    v = n(131951),
    S = n(496675),
    I = n(19780),
    T = n(944486),
    A = n(979651),
    C = n(981631),
    N = n(70722);
function P(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
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
let x = null,
    L = {},
    j = null;
function M() {
    (r = new Map()), (i = {}), (a = {}), (o = {});
}
function k(e) {
    var t;
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][null != (t = e.guildId) ? t : C.kod] = e);
}
function U(e, t) {
    var n;
    let r = null != t ? t : C.kod;
    return (null == (n = i[e]) ? void 0 : n[r]) != null && (delete i[e][r], !0);
}
function G(e) {
    r.delete(e);
}
function Z() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function B(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild),
        (r = new Map(t.activeStreams)),
        (a = t.rtcStreams),
        (o = t.streamerActiveStreamMetadatas);
}
function F(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: a, selfStream: o, discoverable: s } = t;
        if (o && null != i)
            return (
                k({
                    streamType: null != r ? N.lo.GUILD : N.lo.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: s,
                }),
                !0
            );
        {
            let t = b.default.getSessionId();
            return n === b.default.getId() && a !== t && null != I.Z.getChannelId() ? e : U(n, r) || e;
        }
    }, !1);
}
function V(e) {
    let { streamKey: t } = e,
        n = (0, _.my)(t);
    r.delete(t),
        r.set(t, D(R({}, n), { state: C.jm8.CONNECTING })),
        n.ownerId === b.default.getId() && (L[n.channelId] = !1);
}
function H(e) {
    var t;
    let {
            streamType: n,
            guildId: i,
            channelId: a,
            pid: c,
            sourceName: u,
            sourceId: d,
            sourceIcon: f,
            previewDisabled: m,
        } = e,
        h = (0, _.V9)({
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: b.default.getId(),
        });
    (null == d ? void 0 : d.startsWith("prepicked:")) && null == c && (c = s);
    let g =
        null !=
        (t =
            (null == d ? void 0 : d.startsWith("prepicked:")) && null != l
                ? l
                : null != c
                  ? p.ZP.getGameForPID(c)
                  : null != d
                    ? p.ZP.getRunningGames().find((e) => (0, E.Z)(d, e.windowHandle))
                    : null)
            ? t
            : null;
    (o[h] = {
        id: null == g ? void 0 : g.id,
        pid: c,
        sourceName: u,
        previewDisabled: m,
        sourceIcon: f,
        sourceId: d,
    }),
        r.delete(h),
        r.set(h, {
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: b.default.getId(),
            state: C.jm8.CONNECTING,
        });
}
function Y(e) {
    for (let t of e.applications) {
        let e = p.ZP.getGameForPID(t.id);
        if (null != e) return e;
    }
    for (let t of e.windows)
        if (null != t.owningApplication) {
            let e = p.ZP.getGameForPID(t.owningApplication.id);
            if (null != e) return e;
        }
}
function W(e) {
    let { settings: t, endReason: n, errorCode: i } = e;
    if (
        (null == t ? void 0 : t.desktopSettings) != null ||
        (null == t ? void 0 : t.cameraSettings) != null ||
        null == i
    )
        return !1;
    let a = !1;
    for (let e in o) {
        let t = r.get(e);
        null != t &&
            (r.set(
                e,
                D(R({}, t), {
                    state: C.jm8.FAILED,
                    endReason: n,
                    errorCode: i,
                }),
            ),
            (a = !0));
    }
    return a;
}
function K(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((s = null == (l = Y(n)) ? void 0 : l.pid), !t)) return !1;
    let r = (0, g.Z)(n),
        i = {
            pid: s,
            id: null == l ? void 0 : l.id,
        };
    null != r && (i.sourceName = r);
    let a = !1;
    for (let e in o) {
        var c, u;
        (null == (u = o[e]) || null == (c = u.sourceId) ? void 0 : c.startsWith("prepicked:")) &&
            ((o[e] = R({}, o[e], i)), (a = !0));
    }
    return a;
}
function z(e) {
    let { streamKey: t } = e;
    o[t] = null;
}
function q(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: o } = e;
    r.set(t, D(R({}, (0, _.my)(t)), { state: o ? C.jm8.PAUSED : C.jm8.ACTIVE })),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i,
        });
}
function X(e) {
    let { streamKey: t } = e;
    G(t);
}
function Q(e) {
    let { id: t, channelId: n } = e;
    (x = t),
        Array.from(r.values()).forEach((e) => {
            (0, _.V9)(e) !== x && e.state === C.jm8.ENDED && G((0, _.V9)(e));
        }),
        null != t && (0, _.DB)(t) && t.includes(b.default.getId()) && (L[n] = !1);
}
function J(e) {
    let { streamKey: t, unavailable: i, reason: o } = e;
    delete a[t];
    let s = r.get(t);
    if (null == s) return !1;
    let l = C.jm8.ENDED;
    if (i) l = C.jm8.RECONNECTING;
    else if (o === C.si2.UNAUTHORIZED) l = C.jm8.FAILED;
    else if (o === C.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, _.my)(t);
        n
            .e("76731")
            .then(n.bind(n, 626892))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = C.jm8.ENDED);
    } else s.state === C.jm8.FAILED && o === C.si2.USER_REQUESTED && (l = C.jm8.FAILED);
    r.set(t, D(R({}, s), { state: l })), l === C.jm8.ENDED && x !== t && G(t);
}
function $(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, D(R({}, n), { state: C.jm8.FAILED }));
}
function ee(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === C.jm8.ENDED || (i.state === C.jm8.FAILED && i.ownerId === b.default.getId()))
        return !1;
    let a = i.state;
    switch (n) {
        case C.hes.DISCONNECTED:
            a = C.jm8.RECONNECTING;
            break;
        case C.hes.RTC_CONNECTED:
            a = C.jm8.ACTIVE;
    }
    if (a === i.state) return !1;
    r.set(t, D(R({}, i), { state: a }));
}
function et(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, _.DB)(x) && (null == x ? void 0 : x.includes(b.default.getId())) && !1 === L[t] && !0 === n && (x = null),
        (L[t] = n);
}
function en(e) {
    let { intent: t } = e;
    j = t;
}
function er(e, t) {
    let n = y.Z.getBasicChannel(t);
    return e === N.lo.CALL || (null != n && S.Z.canBasicChannel(C.S7T.VIEW_CHANNEL, n));
}
function ei(e) {
    if (er(e.streamType, e.channelId)) return !0;
    let t = y.Z.getBasicChannel(e.channelId);
    return null != t && (0, m.p9)(t, A.Z, O.Z, S.Z, f.default)[0];
}
M();
class ea extends (c = u.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([S.Z], () => !0),
            this.waitFor(b.default, y.Z, S.Z, I.Z, p.ZP, T.Z),
            (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 &&
                Object.assign(L, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: L };
    }
    isSelfStreamHidden(e) {
        var t;
        return null != (t = L[e]) && t;
    }
    getLastActiveStream() {
        var e;
        return (0, h.Z)(v.Z) && null != (e = Array.from(r.values()).pop()) ? e : null;
    }
    getAllActiveStreams() {
        return (0, h.Z)(v.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, h.Z)(v.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, h.Z)(v.Z) && null != (t = r.get(e)) ? t : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, h.Z)(v.Z) || null == e) return null;
        let n = (0, _.V9)(e);
        return null != (t = this.getActiveStreamForStreamKey(n)) ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = T.Z.getVoiceChannelId(),
            t = y.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(b.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r
            ? this.getActiveStreamForApplicationStream(r)
            : null != (n = this.getAllActiveStreams().find((t) => t.ownerId === e))
              ? n
              : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = T.Z.getVoiceChannelId(),
            n = y.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(b.default.getId(), n.getGuildId());
        return null == r ? null : null != (e = o[(0, _.V9)(r)]) ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null != (t = o[e]) ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = o[e];
        return null != (t = null == n ? void 0 : n.previewDisabled) && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, h.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null != (t = Object.values(n).find((e) => ei(e))) ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, h.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null != (t = Object.values(n).find((e) => ei(e) && !1 !== e.discoverable)) ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, h.Z)(v.Z)) return null;
        let r = null == (n = i[e]) ? void 0 : n[null != t ? t : C.kod];
        return null != r && ei(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, h.Z)(v.Z) && null != (t = a[e]) ? t : null;
    }
    getAllApplicationStreams() {
        return (0, h.Z)(v.Z) ? Z().filter((e) => null != e && er(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.Z)(v.Z) ? Z().filter((t) => null != t && t.channelId === e && er(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, h.Z)(v.Z)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, _.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return j;
    }
    getStreamingState() {
        return (0, h.Z)(v.Z)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: o,
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {},
              };
    }
}
P(ea, "displayName", "ApplicationStreamingStore"), P(ea, "persistKey", "ApplicationStreamingStore");
let eo = new ea(d.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: W,
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: K,
    OVERLAY_INITIALIZE: B,
    VOICE_STATE_UPDATES: F,
    STREAM_WATCH: V,
    STREAM_START: H,
    STREAM_STOP: z,
    STREAM_CREATE: q,
    STREAM_UPDATE: q,
    STREAM_TIMED_OUT: $,
    STREAM_DELETE: J,
    STREAM_CLOSE: X,
    STREAM_UPDATE_SELF_HIDDEN: et,
    SET_STREAM_APP_INTENT: en,
    RTC_CONNECTION_STATE: ee,
    CHANNEL_RTC_SELECT_PARTICIPANT: Q,
    CONNECTION_OPEN: M,
    CONNECTION_CLOSED: M,
    LOGOUT: M,
});
