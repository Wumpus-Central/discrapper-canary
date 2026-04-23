n.d(t, { A: () => k });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(933958),
    s = n(969151),
    o = n(91242),
    d = n(643501),
    u = n(652896),
    c = n(400492),
    A = n(105530),
    h = n(95701),
    _ = n(616356),
    E = n(961350),
    p = n(734057),
    m = n(71393),
    g = n(430452),
    I = n(803224),
    C = n(383501),
    f = n(309010),
    T = n(485296),
    S = n(977997),
    N = n(607567),
    O = n(403362),
    L = n(652215);
function y(e, t, n, i) {
    r.useEffect(() => {
        let r = t(),
            l = new a.ru(e, () => {
                let e = t(),
                    a = n(r, e);
                null == a || I.A.isSoundDisabled(a) || (0, c.Ak)(a, i ?? 0.4), (r = e);
            });
        return l.attach("useSound"), () => l.detach();
    });
}
function v() {
    return (
        y(
            [g.Ay, f.A],
            () => ({
                inVoiceChannel: null != f.A.getVoiceChannelId(),
                selfMute: g.Ay.isSelfMute(),
                selfDeaf: g.Ay.isSelfDeaf(),
                audioPermissionReady: g.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: g.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: i,
                    selfDeaf: r,
                    audioPermissionReady: a,
                    shouldSkipMuteUnmuteSound: l,
                } = t;
                if (e.selfDeaf !== r) return r ? "deafen" : "undeafen";
                if (a && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return l ? void g.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function b() {
    return (
        y(
            [g.Ay, f.A],
            () => ({ videoEnabled: g.Ay.isVideoEnabled(), inVoiceChannel: null != f.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t,
                    { videoEnabled: r, inVoiceChannel: a } = e;
                if (r !== n && a && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function D() {
    return (
        y(
            [p.A, C.A, f.A, d.default],
            () => {
                let e = p.A.getChannel(f.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = C.A.getWasEverRtcConnected(),
                    r = C.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: r === L.S7L.RTC_CONNECTED,
                    connectHasStarted: (!i && r !== L.S7L.DISCONNECTED) || r === L.S7L.RTC_CONNECTED,
                    awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != d.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: r, awaitingRemote: a, connectedRemote: l } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && r) || (l && !o)) {
                    if (null != n && h.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (a || l || (null != s && h.Do.has(s))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function R() {
    return (
        y(
            [T.A],
            () => T.A.isCurrentUserPTTActive(),
            (e, t) => {
                if (e !== t) {
                    let e = g.Ay.isSelfMute();
                    if (g.Ay.getMode() === L.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function P() {
    return (
        y(
            [g.Ay],
            () => g.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = g.Ay.isSelfMute();
                    if (g.Ay.getMode() === L.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function w() {
    return (
        y(
            [T.A],
            () => T.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = g.Ay.isSelfMute();
                    if (g.Ay.getMode() === L.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function M() {
    return (
        y(
            [S.A],
            () => S.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function U() {
    return (
        y(
            [f.A, S.A],
            () => {
                let e = f.A.getVoiceChannelId();
                if (null == e) return A.zF.NONE;
                let t = S.A.getVoiceStateForChannel(e);
                return (0, A.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function x() {
    return (
        y(
            [f.A, _.A, E.default, S.A, p.A],
            () => {
                let e,
                    t,
                    n = f.A.getVoiceChannelId(),
                    i = E.default.getId(),
                    r = [],
                    a = null,
                    l = 0,
                    s = _.A.getAllActiveStreams();
                if (null != n) {
                    let i = p.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = N.Ay.countVoiceStatesForChannel(i.id) - !!S.A.isInChannel(i.id)),
                        (r = _.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (o = 1 === s.length ? s[0] : _.A.getCurrentUserActiveStream()),
                    o?.state === L.XYD.CONNECTING && (o = null),
                    null != o && ((a = (0, u._z)(o)), (l = _.A.getViewerIds(a).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: r,
                        singleActiveStreamKey: a,
                        singleActiveStreamViewerCount: l,
                        currentUserId: i,
                        allActiveStreams: s,
                    }
                );
            },
            (e, t) => {
                let {
                    channelType: n,
                    voiceChannelId: i,
                    voiceChannelUserCount: r,
                    streamingUserIds: a,
                    singleActiveStreamKey: l,
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
                        let i = m.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && h.Do.has(n))
                )
                    return;
                let d = null != l && e.singleActiveStreamKey === l,
                    u = a.some((t) => !e.streamingUserIds.includes(t)),
                    c = e.allActiveStreams.map((e) => e.ownerId),
                    A = e.streamingUserIds.some((e) => !a.includes(e) && (e === o || c.includes(e)));
                if (u) return "stream_started";
                if (A) return "stream_ended";
                if (e.singleActiveStreamViewerCount <= 25 && d && s > e.singleActiveStreamViewerCount)
                    return "stream_user_joined";
                if (
                    null != e.voiceChannelUserCount &&
                    null != r &&
                    e.voiceChannelUserCount <= 25 &&
                    r > e.voiceChannelUserCount
                )
                    return "user_join";
                if (
                    null != e.voiceChannelUserCount &&
                    null != r &&
                    e.voiceChannelUserCount <= 25 &&
                    r < e.voiceChannelUserCount
                )
                    return "user_leave";
                else if (e.singleActiveStreamViewerCount <= 25 && d && s < e.singleActiveStreamViewerCount)
                    return "stream_user_left";
            },
        ),
        null
    );
}
function G() {
    return (
        y(
            [f.A, l.Ay, o.A, E.default],
            () => {
                let e = f.A.getVoiceChannelId(),
                    t = f.A.getChannelId(),
                    n = l.Ay.getConnectedActivityLocation(),
                    i = (0, s.H)(n),
                    r = E.default.getId(),
                    a = (0, O.Vq)(t) ? l.Ay.getEmbeddedActivitiesForChannel(t) : l.Am,
                    d = (0, O.Vq)(e) ? l.Ay.getEmbeddedActivitiesForChannel(e) : l.Am,
                    u = (0, O.Vq)(i) ? l.Ay.getEmbeddedActivitiesForChannel(i) : l.Am,
                    c = (0, O.Vq)(n) ? l.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: r,
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
                        voiceChannelId: r,
                        currentUserId: a,
                        channelActivities: l,
                        connectedChannelActivities: s,
                        userConnectedActivity: o,
                        voiceChannelActivities: d,
                        connectedFrame: u,
                    } = t,
                    c = d.some((e) => e.applicationId === o?.applicationId && e.launchId === o.launchId);
                if ((0, O.Vq)(r)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(a)),
                        i = d.find((e) => e.userIds.has(a));
                    e.voiceChannelActivities.length < d.length &&
                        (0, O.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === i && (0, O.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, O.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"),
                        (0, O.Vq)(i) &&
                            (0, O.Vq)(t) &&
                            (i.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            i.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!c) {
                    e.connectedChannelActivities.length < s.length &&
                        e.channelActivities.length < l.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == o && (0, O.Vq)(t) && (n = "activity_end"),
                        (0, O.Vq)(o) &&
                            (0, O.Vq)(t) &&
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
function k() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v, {}),
            (0, i.jsx)(b, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(R, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(w, {}),
        ],
    });
}
