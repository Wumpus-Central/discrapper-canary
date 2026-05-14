"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => G }), n(321073);
var u = n(17928),
    c = n(228366),
    d = n(643501),
    _ = n(952818),
    f = n(652896),
    h = n(279250),
    p = n(254057),
    E = n(613235),
    m = n(830012),
    g = n(495544),
    A = n(734057),
    I = n(71393),
    T = n(235058),
    S = n(576705),
    N = n(763827),
    y = n(309010),
    C = n(977997),
    v = n(652215),
    O = n(325278);
let R = null,
    b = {},
    D = null;
function L() {
    (i = new Map()), (r = {}), (s = {}), (a = {});
}
function w(e) {
    i.delete(e);
}
function M() {
    let e = [];
    for (let t in r) {
        let n = r[t];
        for (let i in n) e.push(r[t][i]);
    }
    return e;
}
function P(e) {
    let { streamKey: t, region: n, viewerIds: r, paused: a } = e;
    i.set(t, { ...(0, f.Iy)(t), state: a ? v.XYD.PAUSED : v.XYD.ACTIVE }),
        (s[t] = { streamKey: t, region: n, viewerIds: r });
}
function x(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === O.U4.CALL || (null != n && S.A.canBasicChannel(v.hVb.VIEW_CHANNEL, n));
}
function U(e) {
    if (x(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, h.eo)(t, C.A, I.A, S.A, d.default)[0];
}
L();
class k extends u.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(g.default, A.A, S.A, N.A, _.Ay, y.A),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(b, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: b };
    }
    isSelfStreamHidden(e) {
        return b[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, p.A)(T.Ay) ? (Array.from(i.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, p.A)(T.Ay) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, p.A)(T.Ay) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, p.A)(T.Ay) ? (i.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, p.A)(T.Ay) || null == e) return null;
        let t = (0, f._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = y.A.getVoiceChannelId(),
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
        let e = y.A.getVoiceChannelId(),
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
        if (!(0, p.A)(T.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => U(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, p.A)(T.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => U(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, p.A)(T.Ay)) return null;
        let n = r[e]?.[t ?? v.eGj];
        return null != n && U(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, p.A)(T.Ay) ? (s[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, p.A)(T.Ay) ? M().filter((e) => null != e && x(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, p.A)(T.Ay) ? M().filter((t) => null != t && t.channelId === e && x(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, p.A)(T.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, f._z)(e)) ? s[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return D;
    }
    getStreamingState() {
        return (0, p.A)(T.Ay)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: s,
                  streamerActiveStreamMetadatas: a,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let G = new k(c.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let s = !1;
        for (let e in a) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: v.XYD.FAILED, endReason: n, errorCode: r }), (s = !0));
        }
        return s;
    },
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (
            null == n ||
            ((l = (function (e) {
                for (let t of e.applications) {
                    let e = _.Ay.getGameForPID(t.id);
                    if (null != e) return e;
                }
                for (let t of e.windows)
                    if (null != t.owningApplication) {
                        let e = _.Ay.getGameForPID(t.owningApplication.id);
                        if (null != e) return e;
                    }
            })(n)),
            (o = l?.pid),
            !t)
        )
            return !1;
        let i = (0, E.A)(n),
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
            let { userId: i, guildId: s, channelId: a, sessionId: o, selfStream: l, discoverable: u } = t;
            if (l && null != a)
                return (
                    null ==
                        r[
                            (n = {
                                streamType: null != s ? O.U4.GUILD : O.U4.CALL,
                                ownerId: i,
                                guildId: s,
                                channelId: a,
                                discoverable: u,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? v.eGj] = n),
                    !0
                );
            {
                let t,
                    n = g.default.getId(),
                    a = g.default.getSessionId();
                return i === n && o !== a && null != N.A.getChannelId()
                    ? e
                    : ((t = s ?? v.eGj), (r[i]?.[t] != null && (delete r[i][t], !0)) || e);
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, f.Iy)(t);
        i.delete(t),
            i.set(t, { ...n, state: v.XYD.CONNECTING }),
            n.ownerId === g.default.getId() && (b[n.channelId] = !1);
    },
    STREAM_START: function (e) {
        let {
                streamType: t,
                guildId: n,
                channelId: r,
                pid: s,
                sourceName: u,
                sourceId: c,
                sourceIcon: d,
                previewDisabled: h,
            } = e,
            p = (0, f._z)({ streamType: t, guildId: n, channelId: r, ownerId: g.default.getId() });
        c?.startsWith("prepicked:") && null == s && (s = o);
        let E =
            (c?.startsWith("prepicked:") && null != l
                ? l
                : null != s
                  ? _.Ay.getGameForPID(s)
                  : null != c
                    ? _.Ay.getRunningGames().find((e) => (0, m.A)(c, e.windowHandle))
                    : null) ?? null;
        (a[p] = { id: E?.id, pid: s, sourceName: u, previewDisabled: h, sourceIcon: d, sourceId: c }),
            i.delete(p),
            i.set(p, { streamType: t, guildId: n, channelId: r, ownerId: g.default.getId(), state: v.XYD.CONNECTING });
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        a[t] = null;
    },
    STREAM_CREATE: P,
    STREAM_UPDATE: P,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = i.get(t);
        if (null == n) return !1;
        i.set(t, { ...n, state: v.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let { streamKey: t, unavailable: r, reason: a } = e;
        delete s[t];
        let o = i.get(t);
        if (null == o) return !1;
        let l = v.XYD.ENDED;
        if (r) l = v.XYD.RECONNECTING;
        else if (a === v.H2B.UNAUTHORIZED) l = v.XYD.FAILED;
        else if (a === v.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, f.Iy)(t);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (l = v.XYD.ENDED);
        } else o.state === v.XYD.FAILED && a === v.H2B.USER_REQUESTED && (l = v.XYD.FAILED);
        i.set(t, { ...o, state: l }), l === v.XYD.ENDED && R !== t && w(t);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        w(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, f.wL)(R) && R?.includes(g.default.getId()) && !1 === b[t] && !0 === n && (R = null), (b[t] = n);
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        D = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let r = i.get(t);
        if (null == r || r.state === v.XYD.ENDED || (r.state === v.XYD.FAILED && r.ownerId === g.default.getId()))
            return !1;
        let s = r.state;
        switch (n) {
            case v.S7L.DISCONNECTED:
                s = v.XYD.RECONNECTING;
                break;
            case v.S7L.RTC_CONNECTED:
                s = v.XYD.ACTIVE;
        }
        if (s === r.state) return !1;
        i.set(t, { ...r, state: s });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (R = t),
            Array.from(i.values()).forEach((e) => {
                (0, f._z)(e) !== R && e.state === v.XYD.ENDED && w((0, f._z)(e));
            }),
            null == t || ((0, f.wL)(t) && t.includes(g.default.getId()) && (b[n] = !1));
    },
    CONNECTION_OPEN: L,
    CONNECTION_CLOSED: L,
    LOGOUT: L,
});
