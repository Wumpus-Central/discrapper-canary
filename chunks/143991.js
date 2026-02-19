n.d(t, { A: () => F });
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n(311907),
    s = n(933958),
    o = n(969151),
    d = n(91242),
    c = n(643501),
    u = n(652896),
    A = n(242919),
    h = n(400492),
    _ = n(723991),
    m = n(105530),
    p = n(95701),
    g = n(616356),
    E = n(961350),
    I = n(734057),
    f = n(71393),
    C = n(430452),
    T = n(803224),
    N = n(383501),
    S = n(309010),
    x = n(485296),
    v = n(977997),
    y = n(607567),
    b = n(403362),
    O = n(652215);
function L(e, t, n, i) {
    r.useEffect(() => {
        let r = t(),
            l = new a.ru(e, () => {
                let e = t(),
                    l = n(r, e);
                null == l || T.A.isSoundDisabled(l) || (0, h.Ak)(l, i ?? 0.4), (r = e);
            });
        return l.attach("useSound"), () => l.detach();
    });
}
function R() {
    return (
        L(
            [C.Ay, S.A],
            () => ({
                inVoiceChannel: null != S.A.getVoiceChannelId(),
                selfMute: C.Ay.isSelfMute(),
                selfDeaf: C.Ay.isSelfDeaf(),
                audioPermissionReady: C.Ay.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: C.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: i,
                    selfDeaf: r,
                    audioPermissionReady: l,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== r) return r ? "deafen" : "undeafen";
                if (l && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return a ? void C.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function P() {
    return (
        L(
            [C.Ay, S.A],
            () => ({ videoEnabled: C.Ay.isVideoEnabled(), inVoiceChannel: null != S.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t;
                if (!(0, _.q)()) return;
                let { videoEnabled: r, inVoiceChannel: l } = e;
                if (r !== n && l && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function j() {
    return (
        L(
            [I.A, N.A, S.A, c.default],
            () => {
                let e = I.A.getChannel(S.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = N.A.getWasEverRtcConnected(),
                    r = N.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: r === O.S7L.RTC_CONNECTED,
                    connectHasStarted: (!i && r !== O.S7L.DISCONNECTED) || r === O.S7L.RTC_CONNECTED,
                    awaitingRemote: null != c.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != c.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: r, awaitingRemote: l, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && r) || (a && !o)) {
                    if (null != n && p.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (l || a || (null != s && p.Do.has(s))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function D() {
    return (
        L(
            [x.A],
            () => x.A.isCurrentUserPTTActive(),
            (e, t) => {
                if (e !== t) {
                    let e = C.Ay.isSelfMute();
                    if (C.Ay.getMode() === O.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function M() {
    return (
        L(
            [C.Ay],
            () => C.Ay.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t)
                    if (null != t) return null != e ? "voice_filter_swap" : "voice_filter_on";
                    else return "voice_filter_off";
            },
        ),
        null
    );
}
function w() {
    return (
        L(
            [C.Ay],
            () => C.Ay.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = C.Ay.isSelfMute();
                    if (C.Ay.getMode() === O.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function U() {
    return (
        L(
            [x.A],
            () => x.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = C.Ay.isSelfMute();
                    if (C.Ay.getMode() === O.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function G() {
    return (
        L(
            [v.A],
            () => v.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function k() {
    return (
        L(
            [S.A, v.A],
            () => {
                let e = S.A.getVoiceChannelId();
                if (null == e) return m.zF.NONE;
                let t = v.A.getVoiceStateForChannel(e);
                return (0, m.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === m.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function V() {
    return (
        L(
            [S.A, g.A, E.default, v.A, I.A],
            () => {
                let e,
                    t,
                    n = S.A.getVoiceChannelId(),
                    i = E.default.getId(),
                    r = [],
                    l = null,
                    a = 0,
                    s = g.A.getAllActiveStreams();
                if (null != n) {
                    let i = I.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = y.Ay.countVoiceStatesForChannel(i.id) - !!v.A.isInChannel(i.id)),
                        (r = g.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (o = 1 === s.length ? s[0] : g.A.getCurrentUserActiveStream()),
                    o?.state === O.XYD.CONNECTING && (o = null),
                    null != o && ((l = (0, u._z)(o)), (a = g.A.getViewerIds(l).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: r,
                        singleActiveStreamKey: l,
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
                    voiceChannelUserCount: r,
                    streamingUserIds: l,
                    singleActiveStreamKey: a,
                    singleActiveStreamViewerCount: s,
                    currentUserId: o,
                } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = I.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = f.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && p.Do.has(n))
                )
                    return;
                let d = null != a && e.singleActiveStreamKey === a,
                    c = l.some((t) => !e.streamingUserIds.includes(t)),
                    u = e.allActiveStreams.map((e) => e.ownerId),
                    A = e.streamingUserIds.some((e) => !l.includes(e) && (e === o || u.includes(e)));
                if (c) return "stream_started";
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
function B() {
    return (
        L(
            [S.A, s.Ay, d.A, E.default],
            () => {
                let e = S.A.getVoiceChannelId(),
                    t = S.A.getChannelId(),
                    n = s.Ay.getConnectedActivityLocation(),
                    i = (0, o.H)(n),
                    r = E.default.getId(),
                    l = (0, b.Vq)(t) ? s.Ay.getEmbeddedActivitiesForChannel(t) : s.Am,
                    a = (0, b.Vq)(e) ? s.Ay.getEmbeddedActivitiesForChannel(e) : s.Am,
                    c = (0, b.Vq)(i) ? s.Ay.getEmbeddedActivitiesForChannel(i) : s.Am,
                    u = (0, b.Vq)(n) ? s.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: r,
                    channelActivities: l,
                    connectedChannelActivities: c,
                    userConnectedActivity: u,
                    voiceChannelActivities: a,
                    connectedFrame: d.A.getConnectedFrame(),
                };
            },
            (e, t) => {
                let n,
                    {
                        connectedActivityLocation: i,
                        voiceChannelId: r,
                        currentUserId: l,
                        channelActivities: a,
                        connectedChannelActivities: s,
                        userConnectedActivity: o,
                        voiceChannelActivities: d,
                        connectedFrame: c,
                    } = t,
                    u = d.some((e) => e.applicationId === o?.applicationId && e.launchId === o.launchId);
                if ((0, b.Vq)(r)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        i = d.find((e) => e.userIds.has(l));
                    e.voiceChannelActivities.length < d.length &&
                        (0, b.Vq)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === i && (0, b.Vq)(t) && (n = "activity_end"),
                        void 0 === t && (0, b.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"),
                        (0, b.Vq)(i) &&
                            (0, b.Vq)(t) &&
                            (i.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            i.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!u) {
                    e.connectedChannelActivities.length < s.length &&
                        e.channelActivities.length < a.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == o && (0, b.Vq)(t) && (n = "activity_end"),
                        (0, b.Vq)(o) &&
                            (0, b.Vq)(t) &&
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
function H() {
    return (
        L(
            [A.A, S.A],
            () => ({
                hangStatus: A.A.getCurrentHangStatus(),
                customHangStatus: A.A.getCustomHangStatus(),
                gameActivityHangStatus: A.A.getGameActivityHangStatus(),
                inVoice: null != S.A.getVoiceChannelId(),
            }),
            (e, t) => {
                let { hangStatus: n, customHangStatus: i, gameActivityHangStatus: r } = t;
                if (
                    e.inVoice &&
                    ((null != n && n !== e.hangStatus) ||
                        (null != i &&
                            (i.status !== e.customHangStatus?.status ||
                                !(0, l.isEqual)(i.emoji, e.customHangStatus?.emoji))) ||
                        (null != r && e.gameActivityHangStatus !== r))
                )
                    return "hang_status_select";
            },
            0.15,
        ),
        null
    );
}
function F() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(H, {}),
        ],
    });
}
