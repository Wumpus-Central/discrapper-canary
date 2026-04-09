"use strict";
let r, i, s, a, o, l;
n.d(t, { A: () => et }), n(321073);
var u = n(311907),
    c = n(73153),
    d = n(643501),
    _ = n(15285),
    f = n(652896),
    p = n(279250),
    h = n(254057),
    m = n(613235),
    E = n(830012),
    g = n(961350),
    A = n(734057),
    I = n(71393),
    T = n(430452),
    S = n(576705),
    y = n(383501),
    v = n(309010),
    N = n(977997),
    C = n(652215),
    R = n(502075);
let O = null,
    b = {},
    D = null;
function L() {
    (r = new Map()), (i = {}), (s = {}), (a = {});
}
function w(e) {
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][e.guildId ?? C.eGj] = e);
}
function M(e, t) {
    let n = t ?? C.eGj;
    return i[e]?.[n] != null && (delete i[e][n], !0);
}
function x(e) {
    r.delete(e);
}
function P() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function k(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild),
        (r = new Map(t.activeStreams)),
        (s = t.rtcStreams),
        (a = t.streamerActiveStreamMetadatas);
}
function U(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: s, selfStream: a, discoverable: o } = t;
        if (a && null != i)
            return (
                w({
                    streamType: null != r ? R.U4.GUILD : R.U4.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: o,
                }),
                !0
            );
        {
            let t = g.default.getId(),
                i = g.default.getSessionId();
            return n === t && s !== i && null != y.A.getChannelId() ? e : M(n, r) || e;
        }
    }, !1);
}
function G(e) {
    let { streamKey: t } = e,
        n = (0, f.Iy)(t);
    r.delete(t), r.set(t, { ...n, state: C.XYD.CONNECTING }), n.ownerId === g.default.getId() && (b[n.channelId] = !1);
}
function F(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: i,
            pid: s,
            sourceName: u,
            sourceId: c,
            sourceIcon: d,
            previewDisabled: p,
        } = e,
        h = (0, f._z)({ streamType: t, guildId: n, channelId: i, ownerId: g.default.getId() });
    c?.startsWith("prepicked:") && null == s && (s = o);
    let m =
        (c?.startsWith("prepicked:") && null != l
            ? l
            : null != s
              ? _.Ay.getGameForPID(s)
              : null != c
                ? _.Ay.getRunningGames().find((e) => (0, E.A)(c, e.windowHandle))
                : null) ?? null;
    (a[h] = { id: m?.id, pid: s, sourceName: u, previewDisabled: p, sourceIcon: d, sourceId: c }),
        r.delete(h),
        r.set(h, { streamType: t, guildId: n, channelId: i, ownerId: g.default.getId(), state: C.XYD.CONNECTING });
}
function V(e) {
    for (let t of e.applications) {
        let e = _.Ay.getGameForPID(t.id);
        if (null != e) return e;
    }
    for (let t of e.windows)
        if (null != t.owningApplication) {
            let e = _.Ay.getGameForPID(t.owningApplication.id);
            if (null != e) return e;
        }
}
function B(e) {
    let { settings: t, endReason: n, errorCode: i } = e;
    if (t?.desktopSettings != null || t?.cameraSettings != null || null == i) return !1;
    let s = !1;
    for (let e in a) {
        let t = r.get(e);
        null != t && (r.set(e, { ...t, state: C.XYD.FAILED, endReason: n, errorCode: i }), (s = !0));
    }
    return s;
}
function H(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((l = V(n)), (o = l?.pid), !t)) return !1;
    let r = (0, m.A)(n),
        i = { pid: o, id: l?.id };
    null != r && (i.sourceName = r);
    let s = !1;
    for (let e in a) a[e]?.sourceId?.startsWith("prepicked:") && ((a[e] = { ...a[e], ...i }), (s = !0));
    return s;
}
function j(e) {
    let { streamKey: t } = e;
    a[t] = null;
}
function Y(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: a } = e;
    r.set(t, { ...(0, f.Iy)(t), state: a ? C.XYD.PAUSED : C.XYD.ACTIVE }),
        (s[t] = { streamKey: t, region: n, viewerIds: i });
}
function W(e) {
    let { streamKey: t } = e;
    x(t);
}
function K(e) {
    let { id: t, channelId: n } = e;
    (O = t),
        Array.from(r.values()).forEach((e) => {
            (0, f._z)(e) !== O && e.state === C.XYD.ENDED && x((0, f._z)(e));
        }),
        null == t || ((0, f.wL)(t) && t.includes(g.default.getId()) && (b[n] = !1));
}
function $(e) {
    let { streamKey: t, unavailable: i, reason: a } = e;
    delete s[t];
    let o = r.get(t);
    if (null == o) return !1;
    let l = C.XYD.ENDED;
    if (i) l = C.XYD.RECONNECTING;
    else if (a === C.H2B.UNAUTHORIZED) l = C.XYD.FAILED;
    else if (a === C.H2B.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, f.Iy)(t);
        n
            .e("52729")
            .then(n.bind(n, 116960))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = C.XYD.ENDED);
    } else o.state === C.XYD.FAILED && a === C.H2B.USER_REQUESTED && (l = C.XYD.FAILED);
    r.set(t, { ...o, state: l }), l === C.XYD.ENDED && O !== t && x(t);
}
function z(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, { ...n, state: C.XYD.FAILED });
}
function q(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === C.XYD.ENDED || (i.state === C.XYD.FAILED && i.ownerId === g.default.getId()))
        return !1;
    let s = i.state;
    switch (n) {
        case C.S7L.DISCONNECTED:
            s = C.XYD.RECONNECTING;
            break;
        case C.S7L.RTC_CONNECTED:
            s = C.XYD.ACTIVE;
    }
    if (s === i.state) return !1;
    r.set(t, { ...i, state: s });
}
function Z(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, f.wL)(O) && O?.includes(g.default.getId()) && !1 === b[t] && !0 === n && (O = null), (b[t] = n);
}
function X(e) {
    let { intent: t } = e;
    D = t;
}
function Q(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === R.U4.CALL || (null != n && S.A.canBasicChannel(C.hVb.VIEW_CHANNEL, n));
}
function J(e) {
    if (Q(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, p.eo)(t, N.A, I.A, S.A, d.default)[0];
}
L();
class ee extends u.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(g.default, A.A, S.A, y.A, _.Ay, v.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(b, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: b };
    }
    isSelfStreamHidden(e) {
        return b[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, h.A)(T.Ay) ? (Array.from(r.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, h.A)(T.Ay) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, h.A)(T.Ay) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, h.A)(T.Ay) ? (r.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, h.A)(T.Ay) || null == e) return null;
        let t = (0, f._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = v.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(g.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = v.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(g.default.getId(), t.getGuildId());
        return null == n ? null : (a[(0, f._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return a[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = a[e];
        return t?.previewDisabled ?? !1;
    }
    getAnyStreamForUser(e) {
        if (!(0, h.A)(T.Ay)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => J(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, h.A)(T.Ay)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => J(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, h.A)(T.Ay)) return null;
        let n = i[e]?.[t ?? C.eGj];
        return null != n && J(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, h.A)(T.Ay) ? (s[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, h.A)(T.Ay) ? P().filter((e) => null != e && Q(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.A)(T.Ay) ? P().filter((t) => null != t && t.channelId === e && Q(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, h.A)(T.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, f._z)(e)) ? s[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return D;
    }
    getStreamingState() {
        return (0, h.A)(T.Ay)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: s,
                  streamerActiveStreamMetadatas: a,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let et = new ee(c.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: B,
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: H,
    OVERLAY_INITIALIZE: k,
    VOICE_STATE_UPDATES: U,
    STREAM_WATCH: G,
    STREAM_START: F,
    STREAM_STOP: j,
    STREAM_CREATE: Y,
    STREAM_UPDATE: Y,
    STREAM_TIMED_OUT: z,
    STREAM_DELETE: $,
    STREAM_CLOSE: W,
    STREAM_UPDATE_SELF_HIDDEN: Z,
    SET_STREAM_APP_INTENT: X,
    RTC_CONNECTION_STATE: q,
    CHANNEL_RTC_SELECT_PARTICIPANT: K,
    CONNECTION_OPEN: L,
    CONNECTION_CLOSED: L,
    LOGOUT: L,
});
