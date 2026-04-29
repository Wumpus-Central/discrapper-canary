"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => x }), n(321073);
var _ = n(17928),
    d = n(228366),
    u = n(643501),
    c = n(328153),
    E = n(652896),
    h = n(279250),
    m = n(254057),
    f = n(613235),
    g = n(830012),
    I = n(495544),
    A = n(734057),
    p = n(71393),
    T = n(51760),
    S = n(576705),
    N = n(763827),
    O = n(309010),
    R = n(977997),
    C = n(652215),
    y = n(325278);
let D = null,
    L = {},
    v = null;
function w() {
    (i = new Map()), (r = {}), (s = {}), (a = {});
}
function P(e) {
    i.delete(e);
}
function b() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function k(e) {
    let { streamKey: t, region: n, viewerIds: r, paused: a } = e;
    i.set(t, { ...(0, E.Iy)(t), state: a ? C.XYD.PAUSED : C.XYD.ACTIVE }),
        (s[t] = { streamKey: t, region: n, viewerIds: r });
}
function U(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === y.U4.CALL || (null != n && S.A.canBasicChannel(C.hVb.VIEW_CHANNEL, n));
}
function M(e) {
    if (U(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, R.A, p.A, S.A, u.default)[0];
}
w();
class G extends _.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(I.default, A.A, S.A, N.A, c.Ay, O.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(L, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: L };
    }
    isSelfStreamHidden(e) {
        return L[e] ?? !1;
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
        let e = O.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(I.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = O.A.getVoiceChannelId(),
            t = A.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(I.default.getId(), t.getGuildId());
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
        return null == t ? null : (Object.values(t).find((e) => M(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, m.A)(T.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => M(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, m.A)(T.Ay)) return null;
        let n = r[e]?.[t ?? C.eGj];
        return null != n && M(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, m.A)(T.Ay) ? (s[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, m.A)(T.Ay) ? b().filter((e) => null != e && U(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, m.A)(T.Ay) ? b().filter((t) => null != t && t.channelId === e && U(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, m.A)(T.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, E._z)(e)) ? s[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return v;
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
let x = new G(d.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let s = !1;
        for (let e in a) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: C.XYD.FAILED, endReason: n, errorCode: r }), (s = !0));
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
            let { userId: i, guildId: s, channelId: a, sessionId: o, selfStream: l, discoverable: _ } = t;
            if (l && null != a)
                return (
                    null ==
                        r[
                            (n = {
                                streamType: null != s ? y.U4.GUILD : y.U4.CALL,
                                ownerId: i,
                                guildId: s,
                                channelId: a,
                                discoverable: _,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? C.eGj] = n),
                    !0
                );
            {
                let t,
                    n = I.default.getId(),
                    a = I.default.getSessionId();
                return i === n && o !== a && null != N.A.getChannelId()
                    ? e
                    : ((t = s ?? C.eGj), (r[i]?.[t] != null && (delete r[i][t], !0)) || e);
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, E.Iy)(t);
        i.delete(t),
            i.set(t, { ...n, state: C.XYD.CONNECTING }),
            n.ownerId === I.default.getId() && (L[n.channelId] = !1);
    },
    STREAM_START: function (e) {
        let {
                streamType: t,
                guildId: n,
                channelId: r,
                pid: s,
                sourceName: _,
                sourceId: d,
                sourceIcon: u,
                previewDisabled: h,
            } = e,
            m = (0, E._z)({ streamType: t, guildId: n, channelId: r, ownerId: I.default.getId() });
        d?.startsWith("prepicked:") && null == s && (s = o);
        let f =
            (d?.startsWith("prepicked:") && null != l
                ? l
                : null != s
                  ? c.Ay.getGameForPID(s)
                  : null != d
                    ? c.Ay.getRunningGames().find((e) => (0, g.A)(d, e.windowHandle))
                    : null) ?? null;
        (a[m] = { id: f?.id, pid: s, sourceName: _, previewDisabled: h, sourceIcon: u, sourceId: d }),
            i.delete(m),
            i.set(m, { streamType: t, guildId: n, channelId: r, ownerId: I.default.getId(), state: C.XYD.CONNECTING });
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
        i.set(t, { ...n, state: C.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let { streamKey: t, unavailable: r, reason: a } = e;
        delete s[t];
        let o = i.get(t);
        if (null == o) return !1;
        let l = C.XYD.ENDED;
        if (r) l = C.XYD.RECONNECTING;
        else if (a === C.H2B.UNAUTHORIZED) l = C.XYD.FAILED;
        else if (a === C.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, E.Iy)(t);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (l = C.XYD.ENDED);
        } else o.state === C.XYD.FAILED && a === C.H2B.USER_REQUESTED && (l = C.XYD.FAILED);
        i.set(t, { ...o, state: l }), l === C.XYD.ENDED && D !== t && P(t);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        P(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, E.wL)(D) && D?.includes(I.default.getId()) && !1 === L[t] && !0 === n && (D = null), (L[t] = n);
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        v = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let r = i.get(t);
        if (null == r || r.state === C.XYD.ENDED || (r.state === C.XYD.FAILED && r.ownerId === I.default.getId()))
            return !1;
        let s = r.state;
        switch (n) {
            case C.S7L.DISCONNECTED:
                s = C.XYD.RECONNECTING;
                break;
            case C.S7L.RTC_CONNECTED:
                s = C.XYD.ACTIVE;
        }
        if (s === r.state) return !1;
        i.set(t, { ...r, state: s });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (D = t),
            Array.from(i.values()).forEach((e) => {
                (0, E._z)(e) !== D && e.state === C.XYD.ENDED && P((0, E._z)(e));
            }),
            null == t || ((0, E.wL)(t) && t.includes(I.default.getId()) && (L[n] = !1));
    },
    CONNECTION_OPEN: w,
    CONNECTION_CLOSED: w,
    LOGOUT: w,
});
