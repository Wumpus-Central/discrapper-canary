"use strict";
let r, i, a, s, o, l;
n.d(t, { A: () => et }), n(321073);
var u = n(311907),
    c = n(73153),
    d = n(643501),
    _ = n(15285),
    f = n(652896),
    p = n(279250),
    h = n(254057),
    m = n(613235),
    g = n(830012),
    E = n(961350),
    A = n(734057),
    I = n(71393),
    T = n(430452),
    y = n(576705),
    S = n(383501),
    v = n(309010),
    C = n(977997),
    b = n(652215),
    N = n(502075);
let R = null,
    O = {},
    D = null;
function L() {
    (r = new Map()), (i = {}), (a = {}), (s = {});
}
function w(e) {
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][e.guildId ?? b.eGj] = e);
}
function x(e, t) {
    let n = t ?? b.eGj;
    return i[e]?.[n] != null && (delete i[e][n], !0);
}
function P(e) {
    r.delete(e);
}
function M() {
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
        (a = t.rtcStreams),
        (s = t.streamerActiveStreamMetadatas);
}
function U(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: a, selfStream: s, discoverable: o } = t;
        if (s && null != i)
            return (
                w({
                    streamType: null != r ? N.U4.GUILD : N.U4.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: o,
                }),
                !0
            );
        {
            let t = E.default.getSessionId();
            return n === E.default.getId() && a !== t && null != S.A.getChannelId() ? e : x(n, r) || e;
        }
    }, !1);
}
function G(e) {
    let { streamKey: t } = e,
        n = (0, f.Iy)(t);
    r.delete(t), r.set(t, { ...n, state: b.XYD.CONNECTING }), n.ownerId === E.default.getId() && (O[n.channelId] = !1);
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
            previewDisabled: p,
        } = e,
        h = (0, f._z)({ streamType: t, guildId: n, channelId: i, ownerId: E.default.getId() });
    c?.startsWith("prepicked:") && null == a && (a = o);
    let m =
        (c?.startsWith("prepicked:") && null != l
            ? l
            : null != a
              ? _.Ay.getGameForPID(a)
              : null != c
                ? _.Ay.getRunningGames().find((e) => (0, g.A)(c, e.windowHandle))
                : null) ?? null;
    (s[h] = { id: m?.id, pid: a, sourceName: u, previewDisabled: p, sourceIcon: d, sourceId: c }),
        r.delete(h),
        r.set(h, { streamType: t, guildId: n, channelId: i, ownerId: E.default.getId(), state: b.XYD.CONNECTING });
}
function F(e) {
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
    let a = !1;
    for (let e in s) {
        let t = r.get(e);
        null != t && (r.set(e, { ...t, state: b.XYD.FAILED, endReason: n, errorCode: i }), (a = !0));
    }
    return a;
}
function j(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((l = F(n)), (o = l?.pid), !t)) return !1;
    let r = (0, m.A)(n),
        i = { pid: o, id: l?.id };
    null != r && (i.sourceName = r);
    let a = !1;
    for (let e in s) s[e]?.sourceId?.startsWith("prepicked:") && ((s[e] = { ...s[e], ...i }), (a = !0));
    return a;
}
function H(e) {
    let { streamKey: t } = e;
    s[t] = null;
}
function Y(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(t, { ...(0, f.Iy)(t), state: s ? b.XYD.PAUSED : b.XYD.ACTIVE }),
        (a[t] = { streamKey: t, region: n, viewerIds: i });
}
function W(e) {
    let { streamKey: t } = e;
    P(t);
}
function K(e) {
    let { id: t, channelId: n } = e;
    (R = t),
        Array.from(r.values()).forEach((e) => {
            (0, f._z)(e) !== R && e.state === b.XYD.ENDED && P((0, f._z)(e));
        }),
        null == t || ((0, f.wL)(t) && t.includes(E.default.getId()) && (O[n] = !1));
}
function z(e) {
    let { streamKey: t, unavailable: i, reason: s } = e;
    delete a[t];
    let o = r.get(t);
    if (null == o) return !1;
    let l = b.XYD.ENDED;
    if (i) l = b.XYD.RECONNECTING;
    else if (s === b.H2B.UNAUTHORIZED) l = b.XYD.FAILED;
    else if (s === b.H2B.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, f.Iy)(t);
        n
            .e("52729")
            .then(n.bind(n, 116960))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = b.XYD.ENDED);
    } else o.state === b.XYD.FAILED && s === b.H2B.USER_REQUESTED && (l = b.XYD.FAILED);
    r.set(t, { ...o, state: l }), l === b.XYD.ENDED && R !== t && P(t);
}
function $(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, { ...n, state: b.XYD.FAILED });
}
function q(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === b.XYD.ENDED || (i.state === b.XYD.FAILED && i.ownerId === E.default.getId()))
        return !1;
    let a = i.state;
    switch (n) {
        case b.S7L.DISCONNECTED:
            a = b.XYD.RECONNECTING;
            break;
        case b.S7L.RTC_CONNECTED:
            a = b.XYD.ACTIVE;
    }
    if (a === i.state) return !1;
    r.set(t, { ...i, state: a });
}
function Z(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, f.wL)(R) && R?.includes(E.default.getId()) && !1 === O[t] && !0 === n && (R = null), (O[t] = n);
}
function Q(e) {
    let { intent: t } = e;
    D = t;
}
function X(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === N.U4.CALL || (null != n && y.A.canBasicChannel(b.hVb.VIEW_CHANNEL, n));
}
function J(e) {
    if (X(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, p.eo)(t, C.A, I.A, y.A, d.default)[0];
}
L();
class ee extends u.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([y.A], () => !0),
            this.waitFor(E.default, A.A, y.A, S.A, _.Ay, v.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(O, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: O };
    }
    isSelfStreamHidden(e) {
        return O[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, h.A)(T.A) ? (Array.from(r.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, h.A)(T.A) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, h.A)(T.A) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, h.A)(T.A) ? (r.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, h.A)(T.A) || null == e) return null;
        let t = (0, f._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = v.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(E.default.getId(), t.getGuildId());
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
        let n = this.getActiveStreamForUser(E.default.getId(), t.getGuildId());
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
        if (!(0, h.A)(T.A)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => J(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, h.A)(T.A)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => J(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, h.A)(T.A)) return null;
        let n = i[e]?.[t ?? b.eGj];
        return null != n && J(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, h.A)(T.A) ? (a[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, h.A)(T.A) ? M().filter((e) => null != e && X(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.A)(T.A) ? M().filter((t) => null != t && t.channelId === e && X(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, h.A)(T.A)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, f._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return D;
    }
    getStreamingState() {
        return (0, h.A)(T.A)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let et = new ee(c.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: B,
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: j,
    OVERLAY_INITIALIZE: k,
    VOICE_STATE_UPDATES: U,
    STREAM_WATCH: G,
    STREAM_START: V,
    STREAM_STOP: H,
    STREAM_CREATE: Y,
    STREAM_UPDATE: Y,
    STREAM_TIMED_OUT: $,
    STREAM_DELETE: z,
    STREAM_CLOSE: W,
    STREAM_UPDATE_SELF_HIDDEN: Z,
    SET_STREAM_APP_INTENT: Q,
    RTC_CONNECTION_STATE: q,
    CHANNEL_RTC_SELECT_PARTICIPANT: K,
    CONNECTION_OPEN: L,
    CONNECTION_CLOSED: L,
    LOGOUT: L,
});
