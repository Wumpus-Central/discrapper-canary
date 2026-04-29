n.d(t, { A: () => j });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(933958),
    r = n(969151),
    u = n(91242),
    d = n(643501),
    o = n(652896),
    c = n(400492),
    h = n(105530),
    g = n(95701),
    A = n(616356),
    C = n(495544),
    _ = n(734057),
    m = n(71393),
    f = n(51760),
    p = n(803224),
    S = n(763827),
    E = n(309010),
    y = n(485296),
    I = n(977997),
    T = n(607567),
    v = n(403362),
    N = n(652215);
function D(e, t, n, l) {
    i.useEffect(() => {
        let i = t(),
            a = new s.ru(e, () => {
                let e = t(),
                    s = n(i, e);
                null == s || p.A.isSoundDisabled(s) || (0, c.Ak)(s, l ?? 0.4), (i = e);
            });
        return a.attach("useSound"), () => a.detach();
    });
}
function b() {
    return (
        D(
            [f.Ay, E.A],
            () => ({
                inVoiceChannel: null != E.A.getVoiceChannelId(),
                selfMute: f.Ay.isSelfMute(),
                selfDeaf: f.Ay.isSelfDeaf(),
                audioPermissionReady: f.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: f.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: l,
                    selfDeaf: i,
                    audioPermissionReady: s,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== i) return i ? "deafen" : "undeafen";
                if (s && (n || e.audioPermissionReady) && e.selfMute !== l)
                    return a ? void f.Ay.notifyMuteUnmuteSoundWasSkipped() : l ? "mute" : "unmute";
            },
        ),
        null
    );
}
function O() {
    return (
        D(
            [f.Ay, E.A],
            () => ({ videoEnabled: f.Ay.isVideoEnabled(), inVoiceChannel: null != E.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: l } = t,
                    { videoEnabled: i, inVoiceChannel: s } = e;
                if (i !== n && s && l) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function w() {
    return (
        D(
            [_.A, S.A, E.A, d.default],
            () => {
                let e = _.A.getChannel(E.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    l = S.A.getWasEverRtcConnected(),
                    i = S.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: i === N.S7L.RTC_CONNECTED,
                    connectHasStarted: (!l && i !== N.S7L.DISCONNECTED) || i === N.S7L.RTC_CONNECTED,
                    awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != d.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: l, connectHasStarted: i, awaitingRemote: s, connectedRemote: a } = t,
                    r = e.channelType,
                    u = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && i) || (a && !u)) {
                    if (null != n && g.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !l) {
                    if (s || a || (null != r && g.Do.has(r))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function G() {
    return (
        D(
            [y.A],
            () => y.A.isCurrentUserPTTActive(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === N.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function L() {
    return (
        D(
            [f.Ay],
            () => f.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === N.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function U() {
    return (
        D(
            [y.A],
            () => y.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Ay.isSelfMute();
                    if (f.Ay.getMode() === N.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function R() {
    return (
        D(
            [I.A],
            () => I.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function P() {
    return (
        D(
            [E.A, I.A],
            () => {
                let e = E.A.getVoiceChannelId();
                if (null == e) return h.zF.NONE;
                let t = I.A.getVoiceStateForChannel(e);
                return (0, h.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === h.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function k() {
    return (
        D(
            [E.A, A.A, C.default, I.A, _.A],
            () => {
                let e,
                    t,
                    n = E.A.getVoiceChannelId(),
                    l = C.default.getId(),
                    i = [],
                    s = null,
                    a = 0,
                    r = A.A.getAllActiveStreams();
                if (null != n) {
                    let l = _.A.getChannel(n);
                    null != l &&
                        ((e = l.type),
                        (t = T.Ay.countVoiceStatesForChannel(l.id) - !!I.A.isInChannel(l.id)),
                        (i = A.A.getAllApplicationStreamsForChannel(l.id).map((e) => e.ownerId)));
                }
                let u = null;
                return (
                    (u = 1 === r.length ? r[0] : A.A.getCurrentUserActiveStream()),
                    u?.state === N.XYD.CONNECTING && (u = null),
                    null != u && ((s = (0, o._z)(u)), (a = A.A.getViewerIds(s).filter((e) => e !== l).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: i,
                        singleActiveStreamKey: s,
                        singleActiveStreamViewerCount: a,
                        currentUserId: l,
                        allActiveStreams: r,
                    }
                );
            },
            (e, t) => {
                let {
                    channelType: n,
                    voiceChannelId: l,
                    voiceChannelUserCount: i,
                    streamingUserIds: s,
                    singleActiveStreamKey: a,
                    singleActiveStreamViewerCount: r,
                    currentUserId: u,
                } = t;
                if (
                    e.voiceChannelId !== l ||
                    null == l ||
                    (function (e) {
                        let t = _.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let l = m.A.getGuild(n);
                        return null != l && l.afkChannelId === t.id;
                    })(l) ||
                    (null != n && g.Do.has(n))
                )
                    return;
                let d = null != a && e.singleActiveStreamKey === a,
                    o = s.some((t) => !e.streamingUserIds.includes(t)),
                    c = e.allActiveStreams.map((e) => e.ownerId),
                    h = e.streamingUserIds.some((e) => !s.includes(e) && (e === u || c.includes(e)));
                if (o) return "stream_started";
                if (h) return "stream_ended";
                if (e.singleActiveStreamViewerCount <= 25 && d && r > e.singleActiveStreamViewerCount)
                    return "stream_user_joined";
                if (
                    null != e.voiceChannelUserCount &&
                    null != i &&
                    e.voiceChannelUserCount <= 25 &&
                    i > e.voiceChannelUserCount
                )
                    return "user_join";
                if (
                    null != e.voiceChannelUserCount &&
                    null != i &&
                    e.voiceChannelUserCount <= 25 &&
                    i < e.voiceChannelUserCount
                )
                    return "user_leave";
                else if (e.singleActiveStreamViewerCount <= 25 && d && r < e.singleActiveStreamViewerCount)
                    return "stream_user_left";
            },
        ),
        null
    );
}
function M() {
    return (
        D(
            [E.A, a.Ay, u.A, C.default],
            () => {
                let e = E.A.getVoiceChannelId(),
                    t = E.A.getChannelId(),
                    n = a.Ay.getConnectedActivityLocation(),
                    l = (0, r.H)(n),
                    i = C.default.getId(),
                    s = (0, v.Vq)(t) ? a.Ay.getEmbeddedActivitiesForChannel(t) : a.Am,
                    d = (0, v.Vq)(e) ? a.Ay.getEmbeddedActivitiesForChannel(e) : a.Am,
                    o = (0, v.Vq)(l) ? a.Ay.getEmbeddedActivitiesForChannel(l) : a.Am,
                    c = (0, v.Vq)(n) ? a.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: s,
                    connectedChannelActivities: o,
                    userConnectedActivity: c,
                    voiceChannelActivities: d,
                    connectedFrame: u.A.getConnectedFrame(),
                };
            },
            (e, t) => {
                let n,
                    {
                        connectedActivityLocation: l,
                        voiceChannelId: i,
                        currentUserId: s,
                        channelActivities: a,
                        connectedChannelActivities: r,
                        userConnectedActivity: u,
                        voiceChannelActivities: d,
                        connectedFrame: o,
                    } = t,
                    c = d.some((e) => e.applicationId === u?.applicationId && e.launchId === u.launchId);
                if ((0, v.Vq)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(s)),
                        l = d.find((e) => e.userIds.has(s));
                    e.voiceChannelActivities.length < d.length &&
                        (0, v.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === l && (0, v.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, v.Vq)(l) && l.userIds.size > 1 && (n = "activity_user_join"),
                        (0, v.Vq)(l) &&
                            (0, v.Vq)(t) &&
                            (l.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            l.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!c) {
                    e.connectedChannelActivities.length < r.length &&
                        e.channelActivities.length < a.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == u && (0, v.Vq)(t) && (n = "activity_end"),
                        (0, v.Vq)(u) &&
                            (0, v.Vq)(t) &&
                            (u.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            u.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                return (
                    null == n &&
                        (null != e.connectedActivityLocation || null != l) &&
                        (null == e.connectedActivityLocation && null != l
                            ? (n = "activity_launch")
                            : null != e.connectedActivityLocation && null == l
                              ? (n = "activity_end")
                              : null != u &&
                                null != e.userConnectedActivity &&
                                (e.userConnectedActivity.userIds.size < u.userIds.size
                                    ? (n = "activity_user_join")
                                    : e.userConnectedActivity.userIds.size > u.userIds.size &&
                                      (n = "activity_user_leave"))),
                    null == n &&
                        (null != e.connectedFrame || null != o) &&
                        (null == e.connectedFrame && null != o
                            ? (n = "activity_launch")
                            : null != e.connectedFrame && null == o && (n = "activity_end")),
                    n
                );
            },
        ),
        null
    );
}
function j() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b, {}),
            (0, l.jsx)(O, {}),
            (0, l.jsx)(w, {}),
            (0, l.jsx)(G, {}),
            (0, l.jsx)(L, {}),
            (0, l.jsx)(R, {}),
            (0, l.jsx)(k, {}),
            (0, l.jsx)(P, {}),
            (0, l.jsx)(M, {}),
            (0, l.jsx)(U, {}),
        ],
    });
}
