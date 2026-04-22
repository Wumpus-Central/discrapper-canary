"use strict";
let r, i, s, a, o, l;
n.d(t, { A: () => G }), n(321073);
var u = n(311907),
    d = n(73153),
    c = n(643501),
    _ = n(15285),
    f = n(652896),
    E = n(279250),
    h = n(254057),
    p = n(613235),
    m = n(830012),
    g = n(961350),
    A = n(734057),
    I = n(71393),
    T = n(430452),
    S = n(576705),
    y = n(383501),
    N = n(309010),
    O = n(977997),
    R = n(652215),
    v = n(502075);
let C = null,
    b = {},
    D = null;
function L() {
    (r = new Map()), (i = {}), (s = {}), (a = {});
}
function w(e) {
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
function P(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: a } = e;
    r.set(t, { ...(0, f.Iy)(t), state: a ? R.XYD.PAUSED : R.XYD.ACTIVE }),
        (s[t] = { streamKey: t, region: n, viewerIds: i });
}
function U(e, t) {
    let n = A.A.getBasicChannel(t);
    return e === v.U4.CALL || (null != n && S.A.canBasicChannel(R.hVb.VIEW_CHANNEL, n));
}
function k(e) {
    if (U(e.streamType, e.channelId)) return !0;
    let t = A.A.getBasicChannel(e.channelId);
    return null != t && (0, E.eo)(t, O.A, I.A, S.A, c.default)[0];
}
L();
class x extends u.Ay.PersistedStore {
    static displayName = "ApplicationStreamingStore";
    static persistKey = "ApplicationStreamingStore";
    initialize(e) {
        this.syncWith([S.A], () => !0),
            this.waitFor(g.default, A.A, S.A, y.A, _.Ay, N.A),
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
        let e = N.A.getVoiceChannelId(),
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
        let e = N.A.getVoiceChannelId(),
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
        return null == t ? null : (Object.values(t).find((e) => k(e)) ?? null);
    }
    getAnyDiscoverableStreamForUser(e) {
        if (!(0, h.A)(T.Ay)) return null;
        let t = i[e];
        return null == t ? null : (Object.values(t).find((e) => k(e) && !1 !== e.discoverable) ?? null);
    }
    getStreamForUser(e, t) {
        if (!(0, h.A)(T.Ay)) return null;
        let n = i[e]?.[t ?? R.eGj];
        return null != n && k(n) ? n : null;
    }
    getRTCStream(e) {
        return (0, h.A)(T.Ay) ? (s[e] ?? null) : null;
    }
    getAllApplicationStreams() {
        return (0, h.A)(T.Ay) ? M().filter((e) => null != e && U(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, h.A)(T.Ay) ? M().filter((t) => null != t && t.channelId === e && U(t.streamType, t.channelId)) : [];
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
let G = new x(d.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t, endReason: n, errorCode: i } = e;
        if (t?.desktopSettings != null || t?.cameraSettings != null || null == i) return !1;
        let s = !1;
        for (let e in a) {
            let t = r.get(e);
            null != t && (r.set(e, { ...t, state: R.XYD.FAILED, endReason: n, errorCode: i }), (s = !0));
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
        let r = (0, p.A)(n),
            i = { pid: o, id: l?.id };
        null != r && (i.sourceName = r);
        let s = !1;
        for (let e in a) a[e]?.sourceId?.startsWith("prepicked:") && ((a[e] = { ...a[e], ...i }), (s = !0));
        return s;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applicationStreamState: t } = e;
        (i = t.streamsByUserAndGuild),
            (r = new Map(t.activeStreams)),
            (s = t.rtcStreams),
            (a = t.streamerActiveStreamMetadatas);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            var n;
            let { userId: r, guildId: s, channelId: a, sessionId: o, selfStream: l, discoverable: u } = t;
            if (l && null != a)
                return (
                    null ==
                        i[
                            (n = {
                                streamType: null != s ? v.U4.GUILD : v.U4.CALL,
                                ownerId: r,
                                guildId: s,
                                channelId: a,
                                discoverable: u,
                            }).ownerId
                        ] && (i[n.ownerId] = {}),
                    (i[n.ownerId][n.guildId ?? R.eGj] = n),
                    !0
                );
            {
                let t,
                    n = g.default.getId(),
                    a = g.default.getSessionId();
                return r === n && o !== a && null != y.A.getChannelId()
                    ? e
                    : ((t = s ?? R.eGj), (i[r]?.[t] != null && (delete i[r][t], !0)) || e);
            }
        }, !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            n = (0, f.Iy)(t);
        r.delete(t),
            r.set(t, { ...n, state: R.XYD.CONNECTING }),
            n.ownerId === g.default.getId() && (b[n.channelId] = !1);
    },
    STREAM_START: function (e) {
        let {
                streamType: t,
                guildId: n,
                channelId: i,
                pid: s,
                sourceName: u,
                sourceId: d,
                sourceIcon: c,
                previewDisabled: E,
            } = e,
            h = (0, f._z)({ streamType: t, guildId: n, channelId: i, ownerId: g.default.getId() });
        d?.startsWith("prepicked:") && null == s && (s = o);
        let p =
            (d?.startsWith("prepicked:") && null != l
                ? l
                : null != s
                  ? _.Ay.getGameForPID(s)
                  : null != d
                    ? _.Ay.getRunningGames().find((e) => (0, m.A)(d, e.windowHandle))
                    : null) ?? null;
        (a[h] = { id: p?.id, pid: s, sourceName: u, previewDisabled: E, sourceIcon: c, sourceId: d }),
            r.delete(h),
            r.set(h, { streamType: t, guildId: n, channelId: i, ownerId: g.default.getId(), state: R.XYD.CONNECTING });
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        a[t] = null;
    },
    STREAM_CREATE: P,
    STREAM_UPDATE: P,
    STREAM_TIMED_OUT: function (e) {
        let { streamKey: t } = e,
            n = r.get(t);
        if (null == n) return !1;
        r.set(t, { ...n, state: R.XYD.FAILED });
    },
    STREAM_DELETE: function (e) {
        let { streamKey: t, unavailable: i, reason: a } = e;
        delete s[t];
        let o = r.get(t);
        if (null == o) return !1;
        let l = R.XYD.ENDED;
        if (i) l = R.XYD.RECONNECTING;
        else if (a === R.H2B.UNAUTHORIZED) l = R.XYD.FAILED;
        else if (a === R.H2B.SAFETY_GUILD_RATE_LIMITED) {
            let { guildId: e } = (0, f.Iy)(t);
            n
                .e("52729")
                .then(n.bind(n, 116960))
                .then((t) => {
                    let { default: n } = t;
                    n(e);
                }),
                (l = R.XYD.ENDED);
        } else o.state === R.XYD.FAILED && a === R.H2B.USER_REQUESTED && (l = R.XYD.FAILED);
        r.set(t, { ...o, state: l }), l === R.XYD.ENDED && C !== t && w(t);
    },
    STREAM_CLOSE: function (e) {
        let { streamKey: t } = e;
        w(t);
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e;
        (0, f.wL)(C) && C?.includes(g.default.getId()) && !1 === b[t] && !0 === n && (C = null), (b[t] = n);
    },
    SET_STREAM_APP_INTENT: function (e) {
        let { intent: t } = e;
        D = t;
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n } = e;
        if (null == t) return !1;
        let i = r.get(t);
        if (null == i || i.state === R.XYD.ENDED || (i.state === R.XYD.FAILED && i.ownerId === g.default.getId()))
            return !1;
        let s = i.state;
        switch (n) {
            case R.S7L.DISCONNECTED:
                s = R.XYD.RECONNECTING;
                break;
            case R.S7L.RTC_CONNECTED:
                s = R.XYD.ACTIVE;
        }
        if (s === i.state) return !1;
        r.set(t, { ...i, state: s });
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { id: t, channelId: n } = e;
        (C = t),
            Array.from(r.values()).forEach((e) => {
                (0, f._z)(e) !== C && e.state === R.XYD.ENDED && w((0, f._z)(e));
            }),
            null == t || ((0, f.wL)(t) && t.includes(g.default.getId()) && (b[n] = !1));
    },
    CONNECTION_OPEN: L,
    CONNECTION_CLOSED: L,
    LOGOUT: L,
});
