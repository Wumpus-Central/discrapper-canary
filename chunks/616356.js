"use strict";
let i, r, a, s, l, o, d;
n.d(t, { A: () => B }), n(321073);
var c = n(17928),
    u = n(228366),
    _ = n(643501),
    E = n(952818),
    A = n(652896),
    h = n(279250),
    I = n(254057),
    f = n(613235),
    p = n(830012),
    T = n(927813),
    m = n(280450),
    g = n(734057),
    S = n(71393),
    N = n(186295),
    C = n(576705),
    O = n(763827),
    R = n(309010),
    L = n(977997),
    y = n(652215),
    D = n(325278);
let v = null,
    b = {},
    M = null,
    P = 10 * T.A.Millis.SECOND;
function U() {
    (i = new Map()), (r = {}), (a = {}), (s = {}), (l = new Map());
}
function w(e) {
    i.delete(e);
}
function G() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function x(e) {
    let t,
        { streamKey: n, region: r, viewerIds: s, paused: o } = e;
    null == (t = l.get(n)) || Date.now() - t < P || l.delete(n),
        i.set(n, { ...(0, A.Iy)(n), state: o ? y.XYD.PAUSED : y.XYD.ACTIVE }),
        (a[n] = { streamKey: n, region: r, viewerIds: s });
}
function k(e, t) {
    let n = g.A.getBasicChannel(t);
    return e === D.U4.CALL || (null != n && C.A.canBasicChannel(y.hVb.VIEW_CHANNEL, n));
}
function F(e) {
    if (k(e.streamType, e.channelId)) return !0;
    let t = g.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, L.A, S.A, C.A, _.default)[0];
}
U();
class V extends c.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([C.A], () => !0),
            this.waitFor(m.default, g.A, C.A, O.A, E.Ay, R.Ay),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(b, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: b };
    }
    isSelfStreamHidden(e) {
        return b[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, I.A)(N.Ay) ? (Array.from(i.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, I.A)(N.Ay) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, I.A)(N.Ay) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, I.A)(N.Ay) ? (i.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, I.A)(N.Ay) || null == e) return null;
        let t = (0, A._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = R.Ay.getVoiceChannelId(),
            t = g.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(m.default.getId(), t.getGuildId());
    }
    isStreamMarkedFull(e) {
        return l.has(e);
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = R.Ay.getVoiceChannelId(),
            t = g.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(m.default.getId(), t.getGuildId());
        return null == n ? null : (s[(0, A._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return s[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = s[e];
        return t?.previewDisabled ?? !1;
    }
    getAnyStreamForUser(e) {
        if (!(0, I.A)(N.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => F(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, I.A)(N.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => F(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, I.A)(N.Ay)) return null;
        let n = r[e]?.[t ?? y.eGj];
        return null != n && F(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, I.A)(N.Ay) ? (a[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, I.A)(N.Ay) ? G().filter((e) => null != e && k(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, I.A)(N.Ay) ? G().filter((t) => null != t && t.channelId === e && k(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, I.A)(N.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, A._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return M;
    }
    getStreamingState() {
        return (0, I.A)(N.Ay)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let B = new V(u.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let a = !1;
        for (let e in s) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: y.XYD.FAILED, endReason: n, errorCode: r }), (a = !0));
        }
        return a;
    },
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (
            null == n ||
            ((d = (function (e) {
                for (let t of e.applications) {
                    let e = E.Ay.getGameForPID(t.id);
                    if (null != e) return e;
                }
                for (let t of e.windows)
                    if (null != t.owningApplication) {
                        let e = E.Ay.getGameForPID(t.owningApplication.id);
                        if (null != e) return e;
                    }
            })(n)),
            (o = d?.pid),
            !t)
        )
            return !1;
        let i = (0, f.A)(n),
            r = { pid: o, id: d?.id };
        null != i && (r.sourceName = i);
        let a = !1;
        for (let e in s) s[e]?.sourceId?.startsWith("prepicked:") && ((s[e] = { ...s[e], ...r }), (a = !0));
        return a;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applicationStreamState: t } = e;
        (r = t.streamsByUserAndGuild),
            (i = new Map(t.activeStreams)),
            (a = t.rtcStreams),
            (s = t.streamerActiveStreamMetadatas),
            (l = new Map());
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            var n;
            let { userId: i, guildId: a, channelId: s, sessionId: o, selfStream: d, discoverable: c } = t;
            if (d && null != s)
                return (
                    null ==
                        r[
                            (n = {
                                streamType: null != a ? D.U4.GUILD : D.U4.CALL,
                                ownerId: i,
                                guildId: a,
                                channelId: s,
                                discoverable: c,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? y.eGj] = n),
                    !0
                );
            {
                let t,
                    n,
                    s = m.default.getId(),
                    d = m.default.getSessionId();
                if (i === s && o !== d && null != O.A.getChannelId()) return e;
                let c =
                    ((t = !1),
                    l.forEach((e, n) => {
                        let r = (0, A.Iy)(n);
                        r.ownerId === i && (r.guildId ?? null) === (a ?? null) && (t = l.delete(n) || t);
                    }),
                    t);
                return (n = a ?? y.eGj), (r[i]?.[n] != null && (delete r[i][n], !0)) || c || e;
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, A.Iy)(t);
        i.delete(t),
            i.set(t, { ...n, state: y.XYD.CONNECTING }),
            n.ownerId === m.default.getId() && (b[n.channelId] = !1);
    },
    STREAM_START: function (e) {
        let {
                streamType: t,
                guildId: n,
                channelId: r,
                pid: a,
                sourceName: l,
                sourceId: c,
                sourceIcon: u,
                previewDisabled: _,
            } = e,
            h = (0, A._z)({ streamType: t, guildId: n, channelId: r, ownerId: m.default.getId() });
        c?.startsWith("prepicked:") && null == a && (a = o);
        let I =
            (c?.startsWith("prepicked:") && null != d
                ? d
                : null != a
                  ? E.Ay.getGameForPID(a)
                  : null != c
                    ? E.Ay.getRunningGames().find((e) => (0, p.A)(c, e.windowHandle))
                    : null) ?? null;
        (s[h] = { id: I?.id, pid: a, sourceName: l, previewDisabled: _, sourceIcon: u, sourceId: c }),
            i.delete(h),
            i.set(h, { streamType: t, guildId: n, channelId: r, ownerId: m.default.getId(), state: y.XYD.CONNECTING });
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        s[t] = null;
    },
    STREAM_CREATE: x,
    STREAM_UPDATE: x,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = i.get(t);
        if (null == n) return !1;
        i.set(t, { ...n, state: y.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let t,
            { streamKey: r, unavailable: s, reason: o } = e;
        delete a[r];
        let d = !1;
        o === y.H2B.STREAM_FULL && ((t = !l.has(r)), l.set(r, Date.now()), (d = t));
        let c = i.get(r);
        if (null == c) return d;
        let u = y.XYD.ENDED;
        if (s) u = y.XYD.RECONNECTING;
        else if (o === y.H2B.UNAUTHORIZED) u = y.XYD.FAILED;
        else if (o === y.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, A.Iy)(r);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (u = y.XYD.ENDED);
        } else c.state === y.XYD.FAILED && o === y.H2B.USER_REQUESTED && (u = y.XYD.FAILED);
        i.set(r, { ...c, state: u }), u === y.XYD.ENDED && v !== r && w(r);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        w(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, A.wL)(v) && v?.includes(m.default.getId()) && !1 === b[t] && !0 === n && (v = null), (b[t] = n);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = !1;
        return (
            l.forEach((e, i) => {
                (0, A.Iy)(i).channelId !== t && (n = l.delete(i) || n);
            }),
            n
        );
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        M = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let r = i.get(t);
        if (null == r || r.state === y.XYD.ENDED || (r.state === y.XYD.FAILED && r.ownerId === m.default.getId()))
            return !1;
        let a = r.state;
        switch (n) {
            case y.S7L.DISCONNECTED:
                a = y.XYD.RECONNECTING;
                break;
            case y.S7L.RTC_CONNECTED:
                a = y.XYD.ACTIVE;
        }
        if (a === r.state) return !1;
        i.set(t, { ...r, state: a });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (v = t),
            Array.from(i.values()).forEach((e) => {
                (0, A._z)(e) !== v && e.state === y.XYD.ENDED && w((0, A._z)(e));
            }),
            null == t || ((0, A.wL)(t) && t.includes(m.default.getId()) && (b[n] = !1));
    },
    CONNECTION_OPEN: U,
    CONNECTION_CLOSED: U,
    LOGOUT: U,
});
