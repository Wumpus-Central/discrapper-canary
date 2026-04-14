n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    r = n(735438),
    a = n(311907),
    s = n(933958),
    o = n(969151),
    d = n(91242),
    c = n(643501),
    u = n(652896),
    A = n(242919),
    h = n(400492),
    _ = n(105530),
    m = n(95701),
    g = n(616356),
    p = n(961350),
    E = n(734057),
    I = n(71393),
    f = n(430452),
    C = n(803224),
    T = n(383501),
    S = n(309010),
    N = n(485296),
    x = n(977997),
    v = n(607567),
    b = n(403362),
    y = n(652215);
function O(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            r = new a.ru(e, () => {
                let e = t(),
                    r = n(l, e);
                null == r || C.A.isSoundDisabled(r) || (0, h.Ak)(r, i ?? 0.4), (l = e);
            });
        return r.attach("useSound"), () => r.detach();
    });
}
function L() {
    return (
        O(
            [f.Ay, S.A],
            () => ({
                inVoiceChannel: null != S.A.getVoiceChannelId(),
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
                    audioPermissionReady: r,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
                if (r && (n || e.audioPermissionReady) && e.selfMute !== i)
                    return a ? void f.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute";
            },
        ),
        null
    );
}
function R() {
    return (
        O(
            [f.Ay, S.A],
            () => ({ videoEnabled: f.Ay.isVideoEnabled(), inVoiceChannel: null != S.A.getVoiceChannelId() }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: i } = t,
                    { videoEnabled: l, inVoiceChannel: r } = e;
                if (l !== n && r && i) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function P() {
    return (
        O(
            [E.A, T.A, S.A, c.default],
            () => {
                let e = E.A.getChannel(S.A.getVoiceChannelId()),
                    t = e?.type,
                    n = e?.getGuildId(),
                    i = T.A.getWasEverRtcConnected(),
                    l = T.A.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: l === y.S7L.RTC_CONNECTED,
                    connectHasStarted: (!i && l !== y.S7L.DISCONNECTED) || l === y.S7L.RTC_CONNECTED,
                    awaitingRemote: null != c.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != c.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: l, awaitingRemote: r, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    d = e.connected;
                if ((!e.connectHasStarted && l) || (a && !o)) {
                    if (null != n && m.Do.has(n)) return;
                    return "user_join";
                }
                if (d && !i) {
                    if (r || a || (null != s && m.Do.has(s))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function D() {
    return (
        O(
            [N.A],
            () => N.A.isCurrentUserPTTActive(),
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
function j() {
    return (
        O(
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
function M() {
    return (
        O(
            [N.A],
            () => N.A.isCurrentUserPrioritySpeaker(),
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
function w() {
    return (
        O(
            [x.A],
            () => x.A.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function U() {
    return (
        O(
            [S.A, x.A],
            () => {
                let e = S.A.getVoiceChannelId();
                if (null == e) return _.zF.NONE;
                let t = x.A.getVoiceStateForChannel(e);
                return (0, _.eY)(t);
            },
            (e, t) => {
                if (e !== t && t === _.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function G() {
    return (
        O(
            [S.A, g.A, p.default, x.A, E.A],
            () => {
                let e,
                    t,
                    n = S.A.getVoiceChannelId(),
                    i = p.default.getId(),
                    l = [],
                    r = null,
                    a = 0,
                    s = g.A.getAllActiveStreams();
                if (null != n) {
                    let i = E.A.getChannel(n);
                    null != i &&
                        ((e = i.type),
                        (t = v.Ay.countVoiceStatesForChannel(i.id) - !!x.A.isInChannel(i.id)),
                        (l = g.A.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (o = 1 === s.length ? s[0] : g.A.getCurrentUserActiveStream()),
                    o?.state === y.XYD.CONNECTING && (o = null),
                    null != o && ((r = (0, u._z)(o)), (a = g.A.getViewerIds(r).filter((e) => e !== i).length)),
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
                        let t = E.A.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = I.A.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && m.Do.has(n))
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
function k() {
    return (
        O(
            [S.A, s.Ay, d.A, p.default],
            () => {
                let e = S.A.getVoiceChannelId(),
                    t = S.A.getChannelId(),
                    n = s.Ay.getConnectedActivityLocation(),
                    i = (0, o.H)(n),
                    l = p.default.getId(),
                    r = (0, b.Vq)(t) ? s.Ay.getEmbeddedActivitiesForChannel(t) : s.Am,
                    a = (0, b.Vq)(e) ? s.Ay.getEmbeddedActivitiesForChannel(e) : s.Am,
                    c = (0, b.Vq)(i) ? s.Ay.getEmbeddedActivitiesForChannel(i) : s.Am,
                    u = (0, b.Vq)(n) ? s.Ay.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: l,
                    channelActivities: r,
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
                        voiceChannelId: l,
                        currentUserId: r,
                        channelActivities: a,
                        connectedChannelActivities: s,
                        userConnectedActivity: o,
                        voiceChannelActivities: d,
                        connectedFrame: c,
                    } = t,
                    u = d.some((e) => e.applicationId === o?.applicationId && e.launchId === o.launchId);
                if ((0, b.Vq)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = d.find((e) => e.userIds.has(r));
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
function V() {
    return (
        O(
            [A.A, S.A],
            () => ({
                hangStatus: A.A.getCurrentHangStatus(),
                customHangStatus: A.A.getCustomHangStatus(),
                gameActivityHangStatus: A.A.getGameActivityHangStatus(),
                inVoice: null != S.A.getVoiceChannelId(),
            }),
            (e, t) => {
                let { hangStatus: n, customHangStatus: i, gameActivityHangStatus: l } = t;
                if (
                    e.inVoice &&
                    ((null != n && n !== e.hangStatus) ||
                        (null != i &&
                            (i.status !== e.customHangStatus?.status ||
                                !(0, r.isEqual)(i.emoji, e.customHangStatus?.emoji))) ||
                        (null != l && e.gameActivityHangStatus !== l))
                )
                    return "hang_status_select";
            },
            0.15,
        ),
        null
    );
}
function B() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L, {}),
            (0, i.jsx)(R, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(V, {}),
        ],
    });
}
