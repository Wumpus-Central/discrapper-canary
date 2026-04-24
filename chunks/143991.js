n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(933958),
    r = n(969151),
    u = n(91242),
    d = n(643501),
    o = n(652896),
    c = n(400492),
    h = n(105530),
    A = n(95701),
    g = n(616356),
    m = n(495544),
    C = n(734057),
    p = n(71393),
    _ = n(969341),
    f = n(803224),
    E = n(763827),
    S = n(309010),
    y = n(485296),
    I = n(977997),
    N = n(607567),
    T = n(403362),
    v = n(652215);
function D(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            a = new s.ru(e, () => {
                let e = t(),
                    s = n(l, e);
                null == s || f.A.isSoundDisabled(s) || (0, c.Ak)(s, i ?? 0.4), (l = e);
            });
        return a.attach("useSound"), () => a.detach();
    });
}
function O() {
    return (
        D(
            [_.Ay, S.A],
            () => ({
                inVoiceChannel: null != S.A.getVoiceChannelId(),
                selfMute: _.Ay.isSelfMute(),
                selfDeaf: _.Ay.isSelfDeaf(),
                audioPermissionReady: _.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: _.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: i,
                    selfDeaf: l,
                    audioPermissionReady: s,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
                if (s && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return a ? void _.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function w() {
    return (
        D(
            [_.Ay, S.A],
            () => ({ videoEnabled: _.Ay.isVideoEnabled(), inVoiceChannel: null != S.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t,
                    { videoEnabled: l, inVoiceChannel: s } = e;
                if (l !== n && s && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function b() {
    return (
        D(
            [C.A, E.A, S.A, d.default],
            () => {
                let e = C.A.getChannel(S.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = E.A.getWasEverRtcConnected(),
                    l = E.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: l === v.S7L.RTC_CONNECTED,
                    connectHasStarted: (!i && l !== v.S7L.DISCONNECTED) || l === v.S7L.RTC_CONNECTED,
                    awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != d.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: l, awaitingRemote: s, connectedRemote: a } = t,
                    r = e.channelType,
                    u = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && l) || (a && !u)) {
                    if (null != n && A.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (s || a || (null != r && A.Do.has(r))) return;
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
                    let e = _.Ay.isSelfMute();
                    if (_.Ay.getMode() === v.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function L() {
    return (
        D(
            [_.Ay],
            () => _.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Ay.isSelfMute();
                    if (_.Ay.getMode() === v.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function R() {
    return (
        D(
            [y.A],
            () => y.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Ay.isSelfMute();
                    if (_.Ay.getMode() === v.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function P() {
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
function U() {
    return (
        D(
            [S.A, I.A],
            () => {
                let e = S.A.getVoiceChannelId();
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
            [S.A, g.A, m.default, I.A, C.A],
            () => {
                let e,
                    t,
                    n = S.A.getVoiceChannelId(),
                    i = m.default.getId(),
                    l = [],
                    s = null,
                    a = 0,
                    r = g.A.getAllActiveStreams();
                if (null != n) {
                    let i = C.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = N.Ay.countVoiceStatesForChannel(i.id) - !!I.A.isInChannel(i.id)),
                        (l = g.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let u = null;
                return (
                    (u = 1 === r.length ? r[0] : g.A.getCurrentUserActiveStream()),
                    u?.state === v.XYD.CONNECTING && (u = null),
                    null != u && ((s = (0, o._z)(u)), (a = g.A.getViewerIds(s).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: l,
                        singleActiveStreamKey: s,
                        singleActiveStreamViewerCount: a,
                        currentUserId: i,
                        allActiveStreams: r,
                    }
                );
            },
            (e, t) => {
                let {
                    channelType: n,
                    voiceChannelId: i,
                    voiceChannelUserCount: l,
                    streamingUserIds: s,
                    singleActiveStreamKey: a,
                    singleActiveStreamViewerCount: r,
                    currentUserId: u,
                } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = C.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = p.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && A.Do.has(n))
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
            [S.A, a.Ay, u.A, m.default],
            () => {
                let e = S.A.getVoiceChannelId(),
                    t = S.A.getChannelId(),
                    n = a.Ay.getConnectedActivityLocation(),
                    i = (0, r.H)(n),
                    l = m.default.getId(),
                    s = (0, T.Vq)(t) ? a.Ay.getEmbeddedActivitiesForChannel(t) : a.Am,
                    d = (0, T.Vq)(e) ? a.Ay.getEmbeddedActivitiesForChannel(e) : a.Am,
                    o = (0, T.Vq)(i) ? a.Ay.getEmbeddedActivitiesForChannel(i) : a.Am,
                    c = (0, T.Vq)(n) ? a.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: l,
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
                        connectedActivityLocation: i,
                        voiceChannelId: l,
                        currentUserId: s,
                        channelActivities: a,
                        connectedChannelActivities: r,
                        userConnectedActivity: u,
                        voiceChannelActivities: d,
                        connectedFrame: o,
                    } = t,
                    c = d.some((e) => e.applicationId === u?.applicationId && e.launchId === u.launchId);
                if ((0, T.Vq)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(s)),
                        i = d.find((e) => e.userIds.has(s));
                    e.voiceChannelActivities.length < d.length &&
                        (0, T.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === i && (0, T.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, T.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"),
                        (0, T.Vq)(i) &&
                            (0, T.Vq)(t) &&
                            (i.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            i.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!c) {
                    e.connectedChannelActivities.length < r.length &&
                        e.channelActivities.length < a.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == u && (0, T.Vq)(t) && (n = "activity_end"),
                        (0, T.Vq)(u) &&
                            (0, T.Vq)(t) &&
                            (u.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            u.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                return (
                    null == n &&
                        (null != e.connectedActivityLocation || null != i) &&
                        (null == e.connectedActivityLocation && null != i
                            ? (n = "activity_launch")
                            : null != e.connectedActivityLocation && null == i
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
function $() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(b, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(R, {}),
        ],
    });
}
