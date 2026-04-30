n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(933958),
    s = n(969151),
    o = n(91242),
    d = n(643501),
    u = n(652896),
    c = n(400492),
    h = n(105530),
    E = n(95701),
    A = n(616356),
    _ = n(495544),
    p = n(734057),
    g = n(71393),
    f = n(51760),
    I = n(803224),
    S = n(763827),
    T = n(309010),
    m = n(485296),
    C = n(977997),
    O = n(607567),
    N = n(403362),
    y = n(652215);
function R(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            r = new a.ru(e, () => {
                let e = t(),
                    a = n(l, e);
                null == a || I.A.isSoundDisabled(a) || (0, c.Ak)(a, i ?? 0.4), (l = e);
            });
        return r.attach("useSound"), () => r.detach();
    });
}
function L() {
    return (
        R(
            [f.Ay, T.A],
            () => ({
                inVoiceChannel: null != T.A.getVoiceChannelId(),
                selfMute: f.Ay.isSelfMute(),
                selfDeaf: f.Ay.isSelfDeaf(),
                audioPermissionReady: f.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: f.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: i,
                    selfDeaf: l,
                    audioPermissionReady: a,
                    shouldSkipMuteUnmuteSound: r,
                } = t;
                if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
                if (a && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return r ? void f.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function v() {
    return (
        R(
            [f.Ay, T.A],
            () => ({ videoEnabled: f.Ay.isVideoEnabled(), inVoiceChannel: null != T.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t,
                    { videoEnabled: l, inVoiceChannel: a } = e;
                if (l !== n && a && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function D() {
    return (
        R(
            [p.A, S.A, T.A, d.default],
            () => {
                let e = p.A.getChannel(T.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = S.A.getWasEverRtcConnected(),
                    l = S.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: l === y.S7L.RTC_CONNECTED,
                    connectHasStarted: (!i && l !== y.S7L.DISCONNECTED) || l === y.S7L.RTC_CONNECTED,
                    awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != d.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: l, awaitingRemote: a, connectedRemote: r } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && l) || (r && !o)) {
                    if (null != n && E.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (a || r || (null != s && E.Do.has(s))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function U() {
    return (
        R(
            [m.A],
            () => m.A.isCurrentUserPTTActive(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === y.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function P() {
    return (
        R(
            [f.Ay],
            () => f.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === y.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function b() {
    return (
        R(
            [m.A],
            () => m.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === y.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function M() {
    return (
        R(
            [C.A],
            () => C.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function w() {
    return (
        R(
            [T.A, C.A],
            () => {
                let e = T.A.getVoiceChannelId();
                if (null == e) return h.zF.NONE;
                let t = C.A.getVoiceStateForChannel(e);
                return (0, h.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === h.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function G() {
    return (
        R(
            [T.A, A.A, _.default, C.A, p.A],
            () => {
                let e,
                    t,
                    n = T.A.getVoiceChannelId(),
                    i = _.default.getId(),
                    l = [],
                    a = null,
                    r = 0,
                    s = A.A.getAllActiveStreams();
                if (null != n) {
                    let i = p.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = O.Ay.countVoiceStatesForChannel(i.id) - !!C.A.isInChannel(i.id)),
                        (l = A.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (o = 1 === s.length ? s[0] : A.A.getCurrentUserActiveStream()),
                    o?.state === y.XYD.CONNECTING && (o = null),
                    null != o && ((a = (0, u._z)(o)), (r = A.A.getViewerIds(a).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: l,
                        singleActiveStreamKey: a,
                        singleActiveStreamViewerCount: r,
                        currentUserId: i,
                        allActiveStreams: s,
                    }
                );
            },
            (e, t) => {
                let {
                    channelType: n,
                    voiceChannelId: i,
                    voiceChannelUserCount: l,
                    streamingUserIds: a,
                    singleActiveStreamKey: r,
                    singleActiveStreamViewerCount: s,
                    currentUserId: o,
                } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = p.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = g.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && E.Do.has(n))
                )
                    return;
                let d = null != r && e.singleActiveStreamKey === r,
                    u = a.some((t) => !e.streamingUserIds.includes(t)),
                    c = e.allActiveStreams.map((e) => e.ownerId),
                    h = e.streamingUserIds.some((e) => !a.includes(e) && (e === o || c.includes(e)));
                if (u) return "stream_started";
                if (h) return "stream_ended";
                if (e.singleActiveStreamViewerCount <= 25 && d && s > e.singleActiveStreamViewerCount)
                    return "stream_user_joined";
                if (
                    null != e.voiceChannelUserCount &&
                    null != l &&
                    e.voiceChannelUserCount <= 25 &&
                    l > e.voiceChannelUserCount
                )
                    return "user_join";
                if (
                    null != e.voiceChannelUserCount &&
                    null != l &&
                    e.voiceChannelUserCount <= 25 &&
                    l < e.voiceChannelUserCount
                )
                    return "user_leave";
                else if (e.singleActiveStreamViewerCount <= 25 && d && s < e.singleActiveStreamViewerCount)
                    return "stream_user_left";
            },
        ),
        null
    );
}
function F() {
    return (
        R(
            [T.A, r.Ay, o.A, _.default],
            () => {
                let e = T.A.getVoiceChannelId(),
                    t = T.A.getChannelId(),
                    n = r.Ay.getConnectedActivityLocation(),
                    i = (0, s.H)(n),
                    l = _.default.getId(),
                    a = (0, N.Vq)(t) ? r.Ay.getEmbeddedActivitiesForChannel(t) : r.Am,
                    d = (0, N.Vq)(e) ? r.Ay.getEmbeddedActivitiesForChannel(e) : r.Am,
                    u = (0, N.Vq)(i) ? r.Ay.getEmbeddedActivitiesForChannel(i) : r.Am,
                    c = (0, N.Vq)(n) ? r.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: l,
                    channelActivities: a,
                    connectedChannelActivities: u,
                    userConnectedActivity: c,
                    voiceChannelActivities: d,
                    connectedFrame: o.A.getConnectedFrame(),
                };
            },
            (e, t) => {
                let n,
                    {
                        connectedActivityLocation: i,
                        voiceChannelId: l,
                        currentUserId: a,
                        channelActivities: r,
                        connectedChannelActivities: s,
                        userConnectedActivity: o,
                        voiceChannelActivities: d,
                        connectedFrame: u,
                    } = t,
                    c = d.some((e) => e.applicationId === o?.applicationId && e.launchId === o.launchId);
                if ((0, N.Vq)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(a)),
                        i = d.find((e) => e.userIds.has(a));
                    e.voiceChannelActivities.length < d.length &&
                        (0, N.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === i && (0, N.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, N.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"),
                        (0, N.Vq)(i) &&
                            (0, N.Vq)(t) &&
                            (i.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            i.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!c) {
                    e.connectedChannelActivities.length < s.length &&
                        e.channelActivities.length < r.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == o && (0, N.Vq)(t) && (n = "activity_end"),
                        (0, N.Vq)(o) &&
                            (0, N.Vq)(t) &&
                            (o.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            o.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                return (
                    null == n &&
                        (null != e.connectedActivityLocation || null != i) &&
                        (null == e.connectedActivityLocation && null != i
                            ? (n = "activity_launch")
                            : null != e.connectedActivityLocation && null == i
                              ? (n = "activity_end")
                              : null != o &&
                                null != e.userConnectedActivity &&
                                (e.userConnectedActivity.userIds.size < o.userIds.size
                                    ? (n = "activity_user_join")
                                    : e.userConnectedActivity.userIds.size > o.userIds.size &&
                                      (n = "activity_user_leave"))),
                    null == n &&
                        (null != e.connectedFrame || null != u) &&
                        (null == e.connectedFrame && null != u
                            ? (n = "activity_launch")
                            : null != e.connectedFrame && null == u && (n = "activity_end")),
                    n
                );
            },
        ),
        null
    );
}
function V() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L, {}),
            (0, i.jsx)(v, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(b, {}),
        ],
    });
}
