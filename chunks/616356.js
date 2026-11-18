let i, r, a, s, l, o, d;
n(321073);
var c = n(855986),
    u = n(73153),
    _ = n(643501),
    E = n(644727),
    A = n(652896),
    f = n(279250),
    h = n(254057),
    I = n(613235),
    p = n(830012),
    m = n(353835),
    g = n(927813),
    T = n(46653),
    S = n(734057),
    N = n(71393),
    C = n(988468),
    O = n(576705),
    R = n(495867),
    L = n(309010),
    y = n(977997),
    D = n(652215),
    b = n(55010);
let v = null,
    P = {},
    M = null,
    U = 10 * g.A.Millis.SECOND;
function w() {
    ((i = new Map()), (r = {}), (a = {}), (s = {}), (l = new Map()));
}
function G(e) {
    i.delete(e);
}
function x() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function k(e) {
    let t,
        { streamKey: n, region: r, viewerIds: s, paused: o } = e;
    (null == (t = l.get(n)) || Date.now() - t < U || l.delete(n),
        i.set(n, { ...(0, A.Iy)(n), state: o ? D.XYD.PAUSED : D.XYD.ACTIVE }),
        (a[n] = { streamKey: n, region: r, viewerIds: s }));
}
function F(e, t) {
    let n = S.A.getBasicChannel(t);
    return e === b.U4.CALL || (null != n && O.A.canBasicChannel(D.hVb.VIEW_CHANNEL, n));
}
function B(e) {
    if (F(e.streamType, e.channelId)) return !0;
    let t = S.A.getBasicChannel(e.channelId);
    return null != t && (0, f.eo)(t, y.A, N.A, O.A, _.default)[0];
}
w();
class V extends c.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        (this.syncWith([O.A], () => !0),
            this.waitFor(T.default, S.A, O.A, R.A, E.Ay, L.Ay),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(P, e?.selfStreamParticipantsHidden));
    }
    getState() {
        return { selfStreamParticipantsHidden: P };
    }
    isSelfStreamHidden(e) {
        return P[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, h.A)(C.Ay) ? (Array.from(i.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, h.A)(C.Ay) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, h.A)(C.Ay) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, h.A)(C.Ay) ? (i.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, h.A)(C.Ay) || null == e) return null;
        let t = (0, A._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = L.Ay.getVoiceChannelId(),
            t = S.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(T.default.getId(), t.getGuildId());
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
        let e = L.Ay.getVoiceChannelId(),
            t = S.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(T.default.getId(), t.getGuildId());
        return null == n ? null : (s[(0, A._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return s[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = s[e];
        return t?.previewDisabled ?? null;
    }
    getAnyStreamForUser(e) {
        if (!(0, h.A)(C.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => B(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, h.A)(C.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => B(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, h.A)(C.Ay)) return null;
        let n = r[e]?.[t ?? "null"];
        return null != n && B(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, h.A)(C.Ay) ? (a[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, h.A)(C.Ay) ? x().filter((e) => null != e && F(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.A)(C.Ay) ? x().filter((t) => null != t && t.channelId === e && F(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, h.A)(C.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, A._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return M;
    }
    getStreamingState() {
        return (0, h.A)(C.Ay)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let H = new V(u.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let a = !1;
        for (let e in s) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: D.XYD.FAILED, endReason: n, errorCode: r }), (a = !0));
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
        let i = (0, I.A)(n),
            r = { pid: o, gamePid: o, id: d?.id };
        null != i && (r.sourceName = i);
        let a = !1;
        for (let e in s) s[e]?.sourceId?.startsWith("prepicked:") && ((s[e] = { ...s[e], ...r }), (a = !0));
        return a;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applicationStreamState: t } = e;
        ((r = t.streamsByUserAndGuild),
            (i = new Map(t.activeStreams)),
            (a = t.rtcStreams),
            (s = t.streamerActiveStreamMetadatas),
            (l = new Map()));
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
                                streamType: null != a ? b.U4.GUILD : b.U4.CALL,
                                ownerId: i,
                                guildId: a,
                                channelId: s,
                                discoverable: c,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? "null"] = n),
                    !0
                );
            {
                let t,
                    n,
                    s = T.default.getId(),
                    d = T.default.getSessionId();
                if (i === s && o !== d && null != R.A.getChannelId()) return e;
                let c =
                    ((t = !1),
                    l.forEach((e, n) => {
                        let r = (0, A.Iy)(n);
                        r.ownerId === i && (r.guildId ?? null) === (a ?? null) && (t = l.delete(n) || t);
                    }),
                    t);
                return ((n = a ?? "null"), (r[i]?.[n] != null && (delete r[i][n], !0)) || c || e);
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, A.Iy)(t);
        (i.delete(t),
            i.set(t, { ...n, state: D.XYD.CONNECTING }),
            n.ownerId === T.default.getId() && (P[n.channelId] = !1));
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
            f = (0, A._z)({ streamType: t, guildId: n, channelId: r, ownerId: T.default.getId() });
        c?.startsWith("prepicked:") && null == a && (a = o);
        let h =
            (c?.startsWith("prepicked:") && null != d
                ? d
                : null != a
                  ? E.Ay.getGameForPID(a)
                  : null != c
                    ? (function (e) {
                          let t = E.Ay.getRunningGames().find((t) => (0, p.A)(e, t.windowHandle));
                          if (null != t || !e.startsWith("window:")) return t ?? null;
                          let n = m.A.getPidFromDesktopSource(e);
                          return null != n ? E.Ay.getGameForPID(n) : null;
                      })(c)
                    : null) ?? null;
        ((s[f] = { id: h?.id, pid: a, gamePid: h?.pid, sourceName: l, previewDisabled: _, sourceIcon: u, sourceId: c }),
            i.delete(f),
            i.set(f, { streamType: t, guildId: n, channelId: r, ownerId: T.default.getId(), state: D.XYD.CONNECTING }));
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        s[t] = null;
    },
    STREAM_CREATE: k,
    STREAM_UPDATE: k,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = i.get(t);
        if (null == n) return !1;
        i.set(t, { ...n, state: D.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let t,
            { streamKey: r, unavailable: s, reason: o } = e;
        delete a[r];
        let d = !1;
        o === D.H2B.STREAM_FULL && ((t = !l.has(r)), l.set(r, Date.now()), (d = t));
        let c = i.get(r);
        if (null == c) return d;
        let u = D.XYD.ENDED;
        if (s) u = D.XYD.RECONNECTING;
        else if (o === D.H2B.UNAUTHORIZED) u = D.XYD.FAILED;
        else if (o === D.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, A.Iy)(r);
            (n
                .e(452729)
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (u = D.XYD.ENDED));
        } else c.state === D.XYD.FAILED && o === D.H2B.USER_REQUESTED && (u = D.XYD.FAILED);
        (i.set(r, { ...c, state: u }), u === D.XYD.ENDED && v !== r && G(r));
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        G(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        ((0, A.wL)(v) && v?.includes(T.default.getId()) && !1 === P[t] && !0 === n && (v = null), (P[t] = n));
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
        if (null == r || r.state === D.XYD.ENDED || (r.state === D.XYD.FAILED && r.ownerId === T.default.getId()))
            return !1;
        let a = r.state;
        switch (n) {
            case D.S7L.DISCONNECTED:
                a = D.XYD.RECONNECTING;
                break;
            case D.S7L.RTC_CONNECTED:
                a = D.XYD.ACTIVE;
        }
        if (a === r.state) return !1;
        i.set(t, { ...r, state: a });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        ((v = t),
            Array.from(i.values()).forEach((e) => {
                (0, A._z)(e) !== v && e.state === D.XYD.ENDED && G((0, A._z)(e));
            }),
            null == t || ((0, A.wL)(t) && t.includes(T.default.getId()) && (P[n] = !1)));
    },
    CONNECTION_OPEN: w,
    CONNECTION_CLOSED: w,
    LOGOUT: w,
});
n.d(t, {}, { A: H });
