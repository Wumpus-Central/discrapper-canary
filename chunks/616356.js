"use strict";
let r, i, a, s, o, l;
n.d(t, { A: () => en }), n(321073);
var u = n(311907),
    c = n(73153),
    d = n(643501),
    _ = n(15285),
    f = n(652896),
    h = n(279250),
    p = n(254057),
    g = n(613235),
    E = n(830012),
    A = n(961350),
    I = n(734057),
    T = n(71393),
    y = n(430452),
    S = n(576705),
    v = n(383501),
    C = n(309010),
    b = n(977997),
    N = n(652215),
    R = n(502075);
let O = null,
    D = {},
    L = null;
function w() {
    (r = new Map()), (i = {}), (a = {}), (s = {});
}
function x(e) {
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][e.guildId ?? N.eGj] = e);
}
function P(e, t) {
    let n = t ?? N.eGj;
    return i[e]?.[n] != null && (delete i[e][n], !0);
}
function M(e) {
    r.delete(e);
}
function k() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function U(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild),
        (r = new Map(t.activeStreams)),
        (a = t.rtcStreams),
        (s = t.streamerActiveStreamMetadatas);
}
function G(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: a, selfStream: s, discoverable: o } = t;
        if (s && null != i)
            return (
                x({
                    streamType: null != r ? R.U4.GUILD : R.U4.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: o,
                }),
                !0
            );
        {
            let t = A.default.getSessionId();
            return n === A.default.getId() && a !== t && null != v.A.getChannelId() ? e : P(n, r) || e;
        }
    }, !1);
}
function F(e) {
    let { streamKey: t } = e,
        n = (0, f.Iy)(t);
    r.delete(t), r.set(t, { ...n, state: N.XYD.CONNECTING }), n.ownerId === A.default.getId() && (D[n.channelId] = !1);
}
function V(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: i,
            pid: a,
            sourceName: u,
            sourceId: c,
            sourceIcon: d,
            previewDisabled: h,
        } = e,
        p = (0, f._z)({ streamType: t, guildId: n, channelId: i, ownerId: A.default.getId() });
    c?.startsWith("prepicked:") && null == a && (a = o);
    let g =
        (c?.startsWith("prepicked:") && null != l
            ? l
            : null != a
              ? _.Ay.getGameForPID(a)
              : null != c
                ? _.Ay.getRunningGames().find((e) => (0, E.A)(c, e.windowHandle))
                : null) ?? null;
    (s[p] = { id: g?.id, pid: a, sourceName: u, previewDisabled: h, sourceIcon: d, sourceId: c }),
        r.delete(p),
        r.set(p, { streamType: t, guildId: n, channelId: i, ownerId: A.default.getId(), state: N.XYD.CONNECTING });
}
function B(e) {
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
function j(e) {
    let { settings: t, endReason: n, errorCode: i } = e;
    if (t?.desktopSettings != null || t?.cameraSettings != null || null == i) return !1;
    let a = !1;
    for (let e in s) {
        let t = r.get(e);
        null != t && (r.set(e, { ...t, state: N.XYD.FAILED, endReason: n, errorCode: i }), (a = !0));
    }
    return a;
}
function H(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((l = B(n)), (o = l?.pid), !t)) return !1;
    let r = (0, g.A)(n),
        i = { pid: o, id: l?.id };
    null != r && (i.sourceName = r);
    let a = !1;
    for (let e in s) s[e]?.sourceId?.startsWith("prepicked:") && ((s[e] = { ...s[e], ...i }), (a = !0));
    return a;
}
function Y(e) {
    let { streamKey: t } = e;
    s[t] = null;
}
function W(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(t, { ...(0, f.Iy)(t), state: s ? N.XYD.PAUSED : N.XYD.ACTIVE }),
        (a[t] = { streamKey: t, region: n, viewerIds: i });
}
function K(e) {
    let { streamKey: t } = e;
    M(t);
}
function $(e) {
    let { id: t, channelId: n } = e;
    (O = t),
        Array.from(r.values()).forEach((e) => {
            (0, f._z)(e) !== O && e.state === N.XYD.ENDED && M((0, f._z)(e));
        }),
        null == t || ((0, f.wL)(t) && t.includes(A.default.getId()) && (D[n] = !1));
}
function z(e) {
    let { streamKey: t, unavailable: i, reason: s } = e;
    delete a[t];
    let o = r.get(t);
    if (null == o) return !1;
    let l = N.XYD.ENDED;
    if (i) l = N.XYD.RECONNECTING;
    else if (s === N.H2B.UNAUTHORIZED) l = N.XYD.FAILED;
    else if (s === N.H2B.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, f.Iy)(t);
        n
            .e("52729")
            .then(n.bind(n, 116960))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = N.XYD.ENDED);
    } else o.state === N.XYD.FAILED && s === N.H2B.USER_REQUESTED && (l = N.XYD.FAILED);
    r.set(t, { ...o, state: l }), l === N.XYD.ENDED && O !== t && M(t);
}
function q(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, { ...n, state: N.XYD.FAILED });
}
function X(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === N.XYD.ENDED || (i.state === N.XYD.FAILED && i.ownerId === A.default.getId()))
        return !1;
    let a = i.state;
    switch (n) {
        case N.S7L.DISCONNECTED:
            a = N.XYD.RECONNECTING;
            break;
        case N.S7L.RTC_CONNECTED:
            a = N.XYD.ACTIVE;
    }
    if (a === i.state) return !1;
    r.set(t, { ...i, state: a });
}
function Z(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, f.wL)(O) && O?.includes(A.default.getId()) && !1 === D[t] && !0 === n && (O = null), (D[t] = n);
}
function Q(e) {
    let { intent: t } = e;
    L = t;
}
function J(e, t) {
    let n = I.A.getBasicChannel(t);
    return e === R.U4.CALL || (null != n && S.A.canBasicChannel(N.hVb.VIEW_CHANNEL, n));
}
function ee(e) {
    if (J(e.streamType, e.channelId)) return !0;
    let t = I.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, b.A, T.A, S.A, d.default)[0];
}
w();
class et extends u.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(A.default, I.A, S.A, v.A, _.Ay, C.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(D, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: D };
    }
    isSelfStreamHidden(e) {
        return D[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, p.A)(y.Ay) ? (Array.from(r.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, p.A)(y.Ay) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, p.A)(y.Ay) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, p.A)(y.Ay) ? (r.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, p.A)(y.Ay) || null == e) return null;
        let t = (0, f._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = C.A.getVoiceChannelId(),
            t = I.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(A.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = C.A.getVoiceChannelId(),
            t = I.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(A.default.getId(), t.getGuildId());
        return null == n ? null : (s[(0, f._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return s[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = s[e];
        return t?.previewDisabled ?? !1;
    }
    getAnyStreamForUser(e) {
        if (!(0, p.A)(y.Ay)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => ee(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, p.A)(y.Ay)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => ee(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, p.A)(y.Ay)) return null;
        let n = i[e]?.[t ?? N.eGj];
        return null != n && ee(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, p.A)(y.Ay) ? (a[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, p.A)(y.Ay) ? k().filter((e) => null != e && J(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, p.A)(y.Ay) ? k().filter((t) => null != t && t.channelId === e && J(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, p.A)(y.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, f._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return L;
    }
    getStreamingState() {
        return (0, p.A)(y.Ay)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let en = new et(c.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: j,
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: H,
    OVERLAY_INITIALIZE: U,
    VOICE_STATE_UPDATES: G,
    STREAM_WATCH: F,
    STREAM_START: V,
    STREAM_STOP: Y,
    STREAM_CREATE: W,
    STREAM_UPDATE: W,
    STREAM_TIMED_OUT: q,
    STREAM_DELETE: z,
    STREAM_CLOSE: K,
    STREAM_UPDATE_SELF_HIDDEN: Z,
    SET_STREAM_APP_INTENT: Q,
    RTC_CONNECTION_STATE: X,
    CHANNEL_RTC_SELECT_PARTICIPANT: $,
    CONNECTION_OPEN: w,
    CONNECTION_CLOSED: w,
    LOGOUT: w,
});
