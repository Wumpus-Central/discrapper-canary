"use strict";
let i, r, a, s, l, o;
n.d(t, { A: () => k }), n(321073);
var d = n(17928),
    c = n(228366),
    u = n(643501),
    _ = n(952818),
    E = n(652896),
    A = n(279250),
    h = n(254057),
    I = n(613235),
    f = n(830012),
    p = n(280450),
    T = n(734057),
    m = n(71393),
    g = n(186295),
    S = n(576705),
    N = n(763827),
    C = n(309010),
    R = n(977997),
    O = n(652215),
    L = n(325278);
let y = null,
    D = {},
    v = null;
function b() {
    (i = new Map()), (r = {}), (a = {}), (s = {});
}
function M(e) {
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
function U(e) {
    let { streamKey: t, region: n, viewerIds: r, paused: s } = e;
    i.set(t, { ...(0, E.Iy)(t), state: s ? O.XYD.PAUSED : O.XYD.ACTIVE }),
        (a[t] = { streamKey: t, region: n, viewerIds: r });
}
function w(e, t) {
    let n = T.A.getBasicChannel(t);
    return e === L.U4.CALL || (null != n && S.A.canBasicChannel(O.hVb.VIEW_CHANNEL, n));
}
function G(e) {
    if (w(e.streamType, e.channelId)) return !0;
    let t = T.A.getBasicChannel(e.channelId);
    return null != t && (0, A.eo)(t, R.A, m.A, S.A, u.default)[0];
}
b();
class x extends d.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(p.default, T.A, S.A, N.A, _.Ay, C.Ay),
            e?.selfStreamParticipantsHidden !== void 0 && Object.assign(D, e?.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: D };
    }
    isSelfStreamHidden(e) {
        return D[e] ?? !1;
    }
    getLastActiveStream() {
        return (0, h.A)(g.Ay) ? (Array.from(i.values()).pop() ?? null) : null;
    }
    getAllActiveStreams() {
        return (0, h.A)(g.Ay) ? Array.from(i.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, h.A)(g.Ay) ? Array.from(i.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        return (0, h.A)(g.Ay) ? (i.get(e) ?? null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        if (!(0, h.A)(g.Ay) || null == e) return null;
        let t = (0, E._z)(e);
        return this.getActiveStreamForStreamKey(t) ?? null;
    }
    getCurrentUserActiveStream() {
        let e = C.Ay.getVoiceChannelId(),
            t = T.A.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(p.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        let n = this.getStreamForUser(e, t);
        return null != n
            ? this.getActiveStreamForApplicationStream(n)
            : (this.getAllActiveStreams().find((t) => t.ownerId === e) ?? null);
    }
    getStreamerActiveStreamMetadata() {
        let e = C.Ay.getVoiceChannelId(),
            t = T.A.getChannel(e);
        if (null == t) return null;
        let n = this.getActiveStreamForUser(p.default.getId(), t.getGuildId());
        return null == n ? null : (s[(0, E._z)(n)] ?? null);
    }
    getStreamerActiveStreamMetadataForStream(e) {
        return s[e] ?? null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        let t = s[e];
        return t?.previewDisabled ?? !1;
    }
    getAnyStreamForUser(e) {
        if (!(0, h.A)(g.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => G(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, h.A)(g.Ay)) return null;
        let t = r[e];
        return null == t ? null : (Object.values(t).find((e) => G(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, h.A)(g.Ay)) return null;
        let n = r[e]?.[t ?? O.eGj];
        return null != n && G(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, h.A)(g.Ay) ? (a[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, h.A)(g.Ay) ? P().filter((e) => null != e && w(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.A)(g.Ay) ? P().filter((t) => null != t && t.channelId === e && w(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, h.A)(g.Ay)) return [];
        let t = null,
            n = null != (t = "string" == typeof e ? e : (0, E._z)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return v;
    }
    getStreamingState() {
        return (0, h.A)(g.Ay)
            ? {
                  activeStreams: Array.from(i.entries()),
                  streamsByUserAndGuild: r,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s,
              }
            : { activeStreams: [], streamsByUserAndGuild: {}, rtcStreams: {}, streamerActiveStreamMetadatas: {} };
    }
}
let k = new x(c.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: r } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == r) return !1;
        let a = !1;
        for (let e in s) {
            let t = i.get(e);
            null != t && (i.set(e, { ...t, state: O.XYD.FAILED, endReason: n, errorCode: r }), (a = !0));
        }
        return a;
    },
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (
            null == n ||
            ((o = (function (e) {
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
            (l = o?.pid),
            !t)
        )
            return !1;
        let i = (0, I.A)(n),
            r = { pid: l, id: o?.id };
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
            (s = t.streamerActiveStreamMetadatas);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            var n;
            let { userId: i, guildId: a, channelId: s, sessionId: l, selfStream: o, discoverable: d } = t;
            if (o && null != s)
                return (
                    null ==
                        r[
                            (n = {
                                streamType: null != a ? L.U4.GUILD : L.U4.CALL,
                                ownerId: i,
                                guildId: a,
                                channelId: s,
                                discoverable: d,
                            }).ownerId
                        ] && (r[n.ownerId] = {}),
                    (r[n.ownerId][n.guildId ?? O.eGj] = n),
                    !0
                );
            {
                let t,
                    n = p.default.getId(),
                    s = p.default.getSessionId();
                return i === n && l !== s && null != N.A.getChannelId()
                    ? e
                    : ((t = a ?? O.eGj), (r[i]?.[t] != null && (delete r[i][t], !0)) || e);
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
                pid: a,
                sourceName: d,
                sourceId: c,
                sourceIcon: u,
                previewDisabled: A,
            } = e,
            h = (0, E._z)({ streamType: t, guildId: n, channelId: r, ownerId: p.default.getId() });
        c?.startsWith("prepicked:") && null == a && (a = l);
        let I =
            (c?.startsWith("prepicked:") && null != o
                ? o
                : null != a
                  ? _.Ay.getGameForPID(a)
                  : null != c
                    ? _.Ay.getRunningGames().find((e) => (0, f.A)(c, e.windowHandle))
                    : null) ?? null;
        (s[h] = { id: I?.id, pid: a, sourceName: d, previewDisabled: A, sourceIcon: u, sourceId: c }),
            i.delete(h),
            i.set(h, { streamType: t, guildId: n, channelId: r, ownerId: p.default.getId(), state: O.XYD.CONNECTING });
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        s[t] = null;
    },
    STREAM_CREATE: U,
    STREAM_UPDATE: U,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = i.get(t);
        if (null == n) return !1;
        i.set(t, { ...n, state: O.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let { streamKey: t, unavailable: r, reason: s } = e;
        delete a[t];
        let l = i.get(t);
        if (null == l) return !1;
        let o = O.XYD.ENDED;
        if (r) o = O.XYD.RECONNECTING;
        else if (s === O.H2B.UNAUTHORIZED) o = O.XYD.FAILED;
        else if (s === O.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, E.Iy)(t);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (o = O.XYD.ENDED);
        } else l.state === O.XYD.FAILED && s === O.H2B.USER_REQUESTED && (o = O.XYD.FAILED);
        i.set(t, { ...l, state: o }), o === O.XYD.ENDED && y !== t && M(t);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        M(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, E.wL)(y) && y?.includes(p.default.getId()) && !1 === D[t] && !0 === n && (y = null), (D[t] = n);
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        v = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let r = i.get(t);
        if (null == r || r.state === O.XYD.ENDED || (r.state === O.XYD.FAILED && r.ownerId === p.default.getId()))
            return !1;
        let a = r.state;
        switch (n) {
            case O.S7L.DISCONNECTED:
                a = O.XYD.RECONNECTING;
                break;
            case O.S7L.RTC_CONNECTED:
                a = O.XYD.ACTIVE;
        }
        if (a === r.state) return !1;
        i.set(t, { ...r, state: a });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (y = t),
            Array.from(i.values()).forEach((e) => {
                (0, E._z)(e) !== y && e.state === O.XYD.ENDED && M((0, E._z)(e));
            }),
            null == t || ((0, E.wL)(t) && t.includes(p.default.getId()) && (D[n] = !1));
    },
    CONNECTION_OPEN: b,
    CONNECTION_CLOSED: b,
    LOGOUT: b,
});
