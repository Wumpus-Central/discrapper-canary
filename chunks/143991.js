n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(933958),
    s = n(969151),
    o = n(91242),
    d = n(643501),
    c = n(652896),
    u = n(400492),
    A = n(105530),
    h = n(95701),
    _ = n(616356),
    m = n(961350),
    g = n(734057),
    p = n(71393),
    E = n(430452),
    I = n(803224),
    f = n(383501),
    C = n(309010),
    T = n(485296),
    N = n(977997),
    S = n(607567),
    x = n(403362),
    v = n(652215);
function b(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            a = new r.ru(e, () => {
                let e = t(),
                    r = n(l, e);
                null == r || I.A.isSoundDisabled(r) || (0, u.Ak)(r, i ?? 0.4), (l = e);
            });
        return a.attach("useSound"), () => a.detach();
    });
}
function y() {
    return (
        b(
            [E.Ay, C.A],
            () => ({
                inVoiceChannel: null != C.A.getVoiceChannelId(),
                selfMute: E.Ay.isSelfMute(),
                selfDeaf: E.Ay.isSelfDeaf(),
                audioPermissionReady: E.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: E.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: i,
                    selfDeaf: l,
                    audioPermissionReady: r,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
                if (r && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return a ? void E.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function O() {
    return (
        b(
            [E.Ay, C.A],
            () => ({ videoEnabled: E.Ay.isVideoEnabled(), inVoiceChannel: null != C.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t,
                    { videoEnabled: l, inVoiceChannel: r } = e;
                if (l !== n && r && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function L() {
    return (
        b(
            [g.A, f.A, C.A, d.default],
            () => {
                let e = g.A.getChannel(C.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = f.A.getWasEverRtcConnected(),
                    l = f.A.getState();
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
                let { channelType: n, connected: i, connectHasStarted: l, awaitingRemote: r, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && l) || (a && !o)) {
                    if (null != n && h.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (r || a || (null != s && h.Do.has(s))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function R() {
    return (
        b(
            [T.A],
            () => T.A.isCurrentUserPTTActive(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Ay.isSelfMute();
                    if (E.Ay.getMode() === v.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function P() {
    return (
        b(
            [E.Ay],
            () => E.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Ay.isSelfMute();
                    if (E.Ay.getMode() === v.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function D() {
    return (
        b(
            [T.A],
            () => T.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Ay.isSelfMute();
                    if (E.Ay.getMode() === v.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function j() {
    return (
        b(
            [N.A],
            () => N.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function M() {
    return (
        b(
            [C.A, N.A],
            () => {
                let e = C.A.getVoiceChannelId();
                if (null == e) return A.zF.NONE;
                let t = N.A.getVoiceStateForChannel(e);
                return (0, A.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function w() {
    return (
        b(
            [C.A, _.A, m.default, N.A, g.A],
            () => {
                let e,
                    t,
                    n = C.A.getVoiceChannelId(),
                    i = m.default.getId(),
                    l = [],
                    r = null,
                    a = 0,
                    s = _.A.getAllActiveStreams();
                if (null != n) {
                    let i = g.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = S.Ay.countVoiceStatesForChannel(i.id) - !!N.A.isInChannel(i.id)),
                        (l = _.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (o = 1 === s.length ? s[0] : _.A.getCurrentUserActiveStream()),
                    o?.state === v.XYD.CONNECTING && (o = null),
                    null != o && ((r = (0, c._z)(o)), (a = _.A.getViewerIds(r).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: l,
                        singleActiveStreamKey: r,
                        singleActiveStreamViewerCount: a,
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
                    streamingUserIds: r,
                    singleActiveStreamKey: a,
                    singleActiveStreamViewerCount: s,
                    currentUserId: o,
                } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = g.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = p.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && h.Do.has(n))
                )
                    return;
                let d = null != a && e.singleActiveStreamKey === a,
                    c = r.some((t) => !e.streamingUserIds.includes(t)),
                    u = e.allActiveStreams.map((e) => e.ownerId),
                    A = e.streamingUserIds.some((e) => !r.includes(e) && (e === o || u.includes(e)));
                if (c) return "stream_started";
                if (A) return "stream_ended";
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
function U() {
    return (
        b(
            [C.A, a.Ay, o.A, m.default],
            () => {
                let e = C.A.getVoiceChannelId(),
                    t = C.A.getChannelId(),
                    n = a.Ay.getConnectedActivityLocation(),
                    i = (0, s.H)(n),
                    l = m.default.getId(),
                    r = (0, x.Vq)(t) ? a.Ay.getEmbeddedActivitiesForChannel(t) : a.Am,
                    d = (0, x.Vq)(e) ? a.Ay.getEmbeddedActivitiesForChannel(e) : a.Am,
                    c = (0, x.Vq)(i) ? a.Ay.getEmbeddedActivitiesForChannel(i) : a.Am,
                    u = (0, x.Vq)(n) ? a.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: l,
                    channelActivities: r,
                    connectedChannelActivities: c,
                    userConnectedActivity: u,
                    voiceChannelActivities: d,
                    connectedFrame: o.A.getConnectedFrame(),
                };
            },
            (e, t) => {
                let n,
                    {
                        connectedActivityLocation: i,
                        voiceChannelId: l,
                        currentUserId: r,
                        channelActivities: a,
                        connectedChannelActivities: s,
                        userConnectedActivity: o,
                        voiceChannelActivities: d,
                        connectedFrame: c,
                    } = t,
                    u = d.some((e) => e.applicationId === o?.applicationId && e.launchId === o.launchId);
                if ((0, x.Vq)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = d.find((e) => e.userIds.has(r));
                    e.voiceChannelActivities.length < d.length &&
                        (0, x.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === i && (0, x.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, x.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"),
                        (0, x.Vq)(i) &&
                            (0, x.Vq)(t) &&
                            (i.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            i.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!u) {
                    e.connectedChannelActivities.length < s.length &&
                        e.channelActivities.length < a.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == o && (0, x.Vq)(t) && (n = "activity_end"),
                        (0, x.Vq)(o) &&
                            (0, x.Vq)(t) &&
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
                        (null != e.connectedFrame || null != c) &&
                        (null == e.connectedFrame && null != c
                            ? (n = "activity_launch")
                            : null != e.connectedFrame && null == c && (n = "activity_end")),
                    n
                );
            },
        ),
        null
    );
}
function G() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y, {}),
            (0, i.jsx)(O, {}),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(R, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(D, {}),
        ],
    });
}
