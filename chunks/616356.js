let r, i, a, s, o, l;
n.d(t, {
    A: () => es,
}),
    n(896048),
    n(321073);
var c,
    u = n(311907),
    d = n(73153),
    f = n(643501),
    p = n(15285),
    _ = n(652896),
    h = n(279250),
    m = n(254057),
    g = n(613235),
    E = n(830012),
    b = n(961350),
    y = n(734057),
    O = n(71393),
    A = n(430452),
    v = n(576705),
    S = n(383501),
    I = n(309010),
    T = n(977997),
    C = n(652215),
    N = n(502075);

function R(e, t, n) {
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

function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}

function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = null,
    L = {},
    j = null;

function M() {
    (r = new Map()), (i = {}), (a = {}), (s = {});
}

function k(e) {
    var t;
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][null != (t = e.guildId) ? t : C.eGj] = e);
}

function U(e, t) {
    var n;
    let r = null != t ? t : C.eGj;
    return (null == (n = i[e]) ? void 0 : n[r]) != null && (delete i[e][r], !0);
}

function G(e) {
    r.delete(e);
}

function V() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}

function F(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild),
        (r = new Map(t.activeStreams)),
        (a = t.rtcStreams),
        (s = t.streamerActiveStreamMetadatas);
}

function B(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: a, selfStream: s, discoverable: o } = t;
        if (s && null != i)
            return (
                k({
                    streamType: null != r ? N.U4.GUILD : N.U4.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: o,
                }),
                !0
            );
        {
            let t = b.default.getSessionId();
            return n === b.default.getId() && a !== t && null != S.A.getChannelId() ? e : U(n, r) || e;
        }
    }, !1);
}

function H(e) {
    let { streamKey: t } = e,
        n = (0, _.Iy)(t);
    r.delete(t),
        r.set(
            t,
            D(w({}, n), {
                state: C.XYD.CONNECTING,
            }),
        ),
        n.ownerId === b.default.getId() && (L[n.channelId] = !1);
}

function Y(e) {
    var t;
    let {
            streamType: n,
            guildId: i,
            channelId: a,
            pid: c,
            sourceName: u,
            sourceId: d,
            sourceIcon: f,
            previewDisabled: h,
        } = e,
        m = (0, _._z)({
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: b.default.getId(),
        });
    (null == d ? void 0 : d.startsWith("prepicked:")) && null == c && (c = o);
    let g =
        null !=
        (t =
            (null == d ? void 0 : d.startsWith("prepicked:")) && null != l
                ? l
                : null != c
                  ? p.Ay.getGameForPID(c)
                  : null != d
                    ? p.Ay.getRunningGames().find((e) => (0, E.A)(d, e.windowHandle))
                    : null)
            ? t
            : null;
    (s[m] = {
        id: null == g ? void 0 : g.id,
        pid: c,
        sourceName: u,
        previewDisabled: h,
        sourceIcon: f,
        sourceId: d,
    }),
        r.delete(m),
        r.set(m, {
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: b.default.getId(),
            state: C.XYD.CONNECTING,
        });
}

function W(e) {
    for (let t of e.applications) {
        let e = p.Ay.getGameForPID(t.id);
        if (null != e) return e;
    }
    for (let t of e.windows)
        if (null != t.owningApplication) {
            let e = p.Ay.getGameForPID(t.owningApplication.id);
            if (null != e) return e;
        }
}

function K(e) {
    let { settings: t, endReason: n, errorCode: i } = e;
    if (
        (null == t ? void 0 : t.desktopSettings) != null ||
        (null == t ? void 0 : t.cameraSettings) != null ||
        null == i
    )
        return !1;
    let a = !1;
    for (let e in s) {
        let t = r.get(e);
        null != t &&
            (r.set(
                e,
                D(w({}, t), {
                    state: C.XYD.FAILED,
                    endReason: n,
                    errorCode: i,
                }),
            ),
            (a = !0));
    }
    return a;
}

function z(e) {
    let { existing: t, content: n } = e;
    if (null == n || ((o = null == (l = W(n)) ? void 0 : l.pid), !t)) return !1;
    let r = (0, g.A)(n),
        i = {
            pid: o,
            id: null == l ? void 0 : l.id,
        };
    null != r && (i.sourceName = r);
    let a = !1;
    for (let e in s) {
        var c, u;
        (null == (u = s[e]) || null == (c = u.sourceId) ? void 0 : c.startsWith("prepicked:")) &&
            ((s[e] = w({}, s[e], i)), (a = !0));
    }
    return a;
}

function q(e) {
    let { streamKey: t } = e;
    s[t] = null;
}

function X(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(
        t,
        D(w({}, (0, _.Iy)(t)), {
            state: s ? C.XYD.PAUSED : C.XYD.ACTIVE,
        }),
    ),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i,
        });
}

function Z(e) {
    let { streamKey: t } = e;
    G(t);
}

function Q(e) {
    let { id: t, channelId: n } = e;
    (x = t),
        Array.from(r.values()).forEach((e) => {
            (0, _._z)(e) !== x && e.state === C.XYD.ENDED && G((0, _._z)(e));
        }),
        null == t || ((0, _.wL)(t) && t.includes(b.default.getId()) && (L[n] = !1));
}

function $(e) {
    let { streamKey: t, unavailable: i, reason: s } = e;
    delete a[t];
    let o = r.get(t);
    if (null == o) return !1;
    let l = C.XYD.ENDED;
    if (i) l = C.XYD.RECONNECTING;
    else if (s === C.H2B.UNAUTHORIZED) l = C.XYD.FAILED;
    else if (s === C.H2B.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, _.Iy)(t);
        n
            .e("52729")
            .then(n.bind(n, 116960))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = C.XYD.ENDED);
    } else o.state === C.XYD.FAILED && s === C.H2B.USER_REQUESTED && (l = C.XYD.FAILED);
    r.set(
        t,
        D(w({}, o), {
            state: l,
        }),
    ),
        l === C.XYD.ENDED && x !== t && G(t);
}

function J(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(
        t,
        D(w({}, n), {
            state: C.XYD.FAILED,
        }),
    );
}

function ee(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === C.XYD.ENDED || (i.state === C.XYD.FAILED && i.ownerId === b.default.getId()))
        return !1;
    let a = i.state;
    switch (n) {
        case C.S7L.DISCONNECTED:
            a = C.XYD.RECONNECTING;
            break;
        case C.S7L.RTC_CONNECTED:
            a = C.XYD.ACTIVE;
    }
    if (a === i.state) return !1;
    r.set(
        t,
        D(w({}, i), {
            state: a,
        }),
    );
}

function et(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, _.wL)(x) && (null == x ? void 0 : x.includes(b.default.getId())) && !1 === L[t] && !0 === n && (x = null),
        (L[t] = n);
}

function en(e) {
    let { intent: t } = e;
    j = t;
}

function er(e, t) {
    let n = y.A.getBasicChannel(t);
    return e === N.U4.CALL || (null != n && v.A.canBasicChannel(C.hVb.VIEW_CHANNEL, n));
}

function ei(e) {
    if (er(e.streamType, e.channelId)) return !0;
    let t = y.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, T.A, O.A, v.A, f.default)[0];
}
M();
class ea extends (c = u.Ay.PersistedStore) {
    initialize(e) {
        this.syncWith([v.A], () => !0),
            this.waitFor(b.default, y.A, v.A, S.A, p.Ay, I.A),
            (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 &&
                Object.assign(L, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return {
            selfStreamParticipantsHidden: L,
        };
    }
    isSelfStreamHidden(e) {
        var t;
        return null != (t = L[e]) && t;
    }
    getLastActiveStream() {
        var e;
        return (0, m.A)(A.A) && null != (e = Array.from(r.values()).pop()) ? e : null;
    }
    getAllActiveStreams() {
        return (0, m.A)(A.A) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, m.A)(A.A) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, m.A)(A.A) && null != (t = r.get(e)) ? t : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, m.A)(A.A) || null == e) return null;
        let n = (0, _._z)(e);
        return null != (t = this.getActiveStreamForStreamKey(n)) ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = I.A.getVoiceChannelId(),
            t = y.A.getChannel(e);
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
        let t = I.A.getVoiceChannelId(),
            n = y.A.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(b.default.getId(), n.getGuildId());
        return null == r ? null : null != (e = s[(0, _._z)(r)]) ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null != (t = s[e]) ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = s[e];
        return null != (t = null == n ? void 0 : n.previewDisabled) && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, m.A)(A.A)) return null;
        let n = i[e];
        return null == n ? null : null != (t = Object.values(n).find((e) => ei(e))) ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, m.A)(A.A)) return null;
        let n = i[e];
        return null == n ? null : null != (t = Object.values(n).find((e) => ei(e) && !1 !== e.discoverable)) ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, m.A)(A.A)) return null;
        let r = null == (n = i[e]) ? void 0 : n[null != t ? t : C.eGj];
        return null != r && ei(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, m.A)(A.A) && null != (t = a[e]) ? t : null;
    }
    getAllApplicationStreams() {
        return (0, m.A)(A.A) ? V().filter((e) => null != e && er(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, m.A)(A.A) ? V().filter((t) => null != t && t.channelId === e && er(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, m.A)(A.A)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, _._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return j;
    }
    getStreamingState() {
        return (0, m.A)(A.A)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {},
              };
    }
}
R(ea, "displayName", "ApplicationStreamingStore"), R(ea, "persistKey", "ApplicationStreamingStore");
let es = new ea(d.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: K,
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: z,
    OVERLAY_INITIALIZE: F,
    VOICE_STATE_UPDATES: B,
    STREAM_WATCH: H,
    STREAM_START: Y,
    STREAM_STOP: q,
    STREAM_CREATE: X,
    STREAM_UPDATE: X,
    STREAM_TIMED_OUT: J,
    STREAM_DELETE: $,
    STREAM_CLOSE: Z,
    STREAM_UPDATE_SELF_HIDDEN: et,
    SET_STREAM_APP_INTENT: en,
    RTC_CONNECTION_STATE: ee,
    CHANNEL_RTC_SELECT_PARTICIPANT: Q,
    CONNECTION_OPEN: M,
    CONNECTION_CLOSED: M,
    LOGOUT: M,
});
