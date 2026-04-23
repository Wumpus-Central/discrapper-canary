"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => G }), n(321073);
var d = n(17928),
    _ = n(228366),
    u = n(643501),
    c = n(328153),
    E = n(652896),
    h = n(279250),
    m = n(254057),
    f = n(613235),
    g = n(830012),
    p = n(495544),
    A = n(734057),
    I = n(71393),
    T = n(969341),
    S = n(576705),
    N = n(763827),
    C = n(309010),
    R = n(977997),
    O = n(652215),
    y = n(325278);
let v = null,
    D = {},
    L = null;
function b() {
    (i = new Map()), (r = {}), (s = {}), (a = {});
}
function w(e) {
    i.delete(e);
}
function P() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function k(e) {
    let { streamKey: t, region: n, viewerIds: r, paused: a } = e;
    i.set(t, { ...(0, E.Iy)(t), state: a ? O.XYD.PAUSED : O.XYD.ACTIVE }),
        (s[t] = { streamKey: t, region: n, viewerIds: r });
}
function M(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === y.U4.CALL || (null != n && S.A.canBasicChannel(O.hVb.VIEW_CHANNEL, n));
}
function U(e) {
    if (M(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, R.A, I.A, S.A, u.default)[0];
}
b();
class x extends d.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(p.default, A.A, S.A, N.A, c.Ay, C.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(D, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: D };
    }
    isSelfStreamHidden(e) {
        return D[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, m.A)(T.Ay) ? (Array.from(i.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, m.A)(T.Ay) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, m.A)(T.Ay) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, m.A)(T.Ay) ? (i.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, m.A)(T.Ay) || null == e) return null;
        let t = (0, E._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = C.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(p.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = C.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(p.default.getId(), t.getGuildId());
        return null == n ? null : (a[(0, E._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return a[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = a[e];
        return t?.previewDisabled ?? !1;
    }
    getAnyStreamForUser(e) {
        if (!(0, m.A)(T.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => U(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, m.A)(T.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => U(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, m.A)(T.Ay)) return null;
        let n = r[e]?.[t ?? O.eGj];
        return null != n && U(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, m.A)(T.Ay) ? (s[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, m.A)(T.Ay) ? P().filter((e) => null != e && M(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, m.A)(T.Ay) ? P().filter((t) => null != t && t.channelId === e && M(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, m.A)(T.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, E._z)(e)) ? s[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return L;
    }
    getStreamingState() {
        return (0, m.A)(T.Ay)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: s,
                  streamerActiveStreamMetadatas: a,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let G = new x(_.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let s = !1;
        for (let e in a) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: O.XYD.FAILED, endReason: n, errorCode: r }), (s = !0));
        }
        return s;
    },
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (
            null == n ||
            ((l = (function (e) {
                for (let t of e.applications) {
                    let e = c.Ay.getGameForPID(t.id);
                    if (null != e) return e;
                }
                for (let t of e.windows)
                    if (null != t.owningApplication) {
                        let e = c.Ay.getGameForPID(t.owningApplication.id);
                        if (null != e) return e;
                    }
            })(n)),
            (o = l?.pid),
            !t)
        )
            return !1;
        let i = (0, f.A)(n),
            r = { pid: o, id: l?.id };
        null != i && (r.sourceName = i);
        let s = !1;
        for (let e in a) a[e]?.sourceId?.startsWith("prepicked:") && ((a[e] = { ...a[e], ...r }), (s = !0));
        return s;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applicationStreamState: t } = e;
        (r = t.streamsByUserAndGuild),
            (i = new Map(t.activeStreams)),
            (s = t.rtcStreams),
            (a = t.streamerActiveStreamMetadatas);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            var n;
            let { userId: i, guildId: s, channelId: a, sessionId: o, selfStream: l, discoverable: d } = t;
            if (l && null != a)
                return (
                    null ==
                        r[
                            (n = {
                                streamType: null != s ? y.U4.GUILD : y.U4.CALL,
                                ownerId: i,
                                guildId: s,
                                channelId: a,
                                discoverable: d,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? O.eGj] = n),
                    !0
                );
            {
                let t,
                    n = p.default.getId(),
                    a = p.default.getSessionId();
                return i === n && o !== a && null != N.A.getChannelId()
                    ? e
                    : ((t = s ?? O.eGj), (r[i]?.[t] != null && (delete r[i][t], !0)) || e);
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, E.Iy)(t);
        i.delete(t),
            i.set(t, { ...n, state: O.XYD.CONNECTING }),
            n.ownerId === p.default.getId() && (D[n.channelId] = !1);
    },
    STREAM_START: function (e) {
        let {
                streamType: t,
                guildId: n,
                channelId: r,
                pid: s,
                sourceName: d,
                sourceId: _,
                sourceIcon: u,
                previewDisabled: h,
            } = e,
            m = (0, E._z)({ streamType: t, guildId: n, channelId: r, ownerId: p.default.getId() });
        _?.startsWith("prepicked:") && null == s && (s = o);
        let f =
            (_?.startsWith("prepicked:") && null != l
                ? l
                : null != s
                  ? c.Ay.getGameForPID(s)
                  : null != _
                    ? c.Ay.getRunningGames().find((e) => (0, g.A)(_, e.windowHandle))
                    : null) ?? null;
        (a[m] = { id: f?.id, pid: s, sourceName: d, previewDisabled: h, sourceIcon: u, sourceId: _ }),
            i.delete(m),
            i.set(m, { streamType: t, guildId: n, channelId: r, ownerId: p.default.getId(), state: O.XYD.CONNECTING });
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        a[t] = null;
    },
    STREAM_CREATE: k,
    STREAM_UPDATE: k,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = i.get(t);
        if (null == n) return !1;
        i.set(t, { ...n, state: O.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let { streamKey: t, unavailable: r, reason: a } = e;
        delete s[t];
        let o = i.get(t);
        if (null == o) return !1;
        let l = O.XYD.ENDED;
        if (r) l = O.XYD.RECONNECTING;
        else if (a === O.H2B.UNAUTHORIZED) l = O.XYD.FAILED;
        else if (a === O.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, E.Iy)(t);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (l = O.XYD.ENDED);
        } else o.state === O.XYD.FAILED && a === O.H2B.USER_REQUESTED && (l = O.XYD.FAILED);
        i.set(t, { ...o, state: l }), l === O.XYD.ENDED && v !== t && w(t);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        w(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, E.wL)(v) && v?.includes(p.default.getId()) && !1 === D[t] && !0 === n && (v = null), (D[t] = n);
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        L = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let r = i.get(t);
        if (null == r || r.state === O.XYD.ENDED || (r.state === O.XYD.FAILED && r.ownerId === p.default.getId()))
            return !1;
        let s = r.state;
        switch (n) {
            case O.S7L.DISCONNECTED:
                s = O.XYD.RECONNECTING;
                break;
            case O.S7L.RTC_CONNECTED:
                s = O.XYD.ACTIVE;
        }
        if (s === r.state) return !1;
        i.set(t, { ...r, state: s });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (v = t),
            Array.from(i.values()).forEach((e) => {
                (0, E._z)(e) !== v && e.state === O.XYD.ENDED && w((0, E._z)(e));
            }),
            null == t || ((0, E.wL)(t) && t.includes(p.default.getId()) && (D[n] = !1));
    },
    CONNECTION_OPEN: b,
    CONNECTION_CLOSED: b,
    LOGOUT: b,
});
