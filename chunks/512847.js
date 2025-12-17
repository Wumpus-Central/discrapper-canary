n.d(t, { Z: () => V });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(442837),
    o = n(317381),
    s = n(16609),
    c = n(591472),
    u = n(258609),
    d = n(569545),
    p = n(106301),
    f = n(460181),
    g = n(979283),
    h = n(590415),
    m = n(131704),
    b = n(199902),
    _ = n(314897),
    E = n(592125),
    O = n(430824),
    v = n(131951),
    y = n(292959),
    I = n(19780),
    C = n(944486),
    S = n(606304),
    T = n(979651),
    N = n(938475),
    j = n(823379),
    P = n(981631);
function x(e, t, n, r) {
    i.useEffect(() => {
        let i = t(),
            l = new a.Fh(e, () => {
                let e = t(),
                    l = n(i, e);
                null == l || y.Z.isSoundDisabled(l) || (0, f.GN)(l, null != r ? r : 0.4), (i = e);
            });
        return l.attach("useSound"), () => l.detach();
    });
}
function A() {
    return (
        x(
            [v.Z, C.Z],
            () => ({
                inVoiceChannel: null != C.Z.getVoiceChannelId(),
                selfMute: v.Z.isSelfMute(),
                selfDeaf: v.Z.isSelfDeaf(),
                audioPermissionReady: v.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: v.Z.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
                let {
                    inVoiceChannel: n,
                    selfMute: r,
                    selfDeaf: i,
                    audioPermissionReady: l,
                    shouldSkipMuteUnmuteSound: a,
                } = t;
                if (e.selfDeaf !== i) return i ? "deafen" : "undeafen";
                if (l && (n || e.audioPermissionReady) && e.selfMute !== r)
                    return a ? void v.Z.notifyMuteUnmuteSoundWasSkipped() : r ? "mute" : "unmute";
            },
        ),
        null
    );
}
function Z() {
    return (
        x(
            [v.Z, C.Z],
            () => ({
                videoEnabled: v.Z.isVideoEnabled(),
                inVoiceChannel: null != C.Z.getVoiceChannelId(),
            }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: r } = t;
                if (!(0, g.O)()) return;
                let { videoEnabled: i, inVoiceChannel: l } = e;
                if (i !== n && l && r) return n ? "camera_on" : "camera_off";
            },
        ),
        null
    );
}
function w() {
    return (
        x(
            [E.Z, I.Z, C.Z, u.default],
            () => {
                let e = E.Z.getChannel(C.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    r = I.Z.getWasEverRtcConnected(),
                    i = I.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: i === P.hes.RTC_CONNECTED,
                    connectHasStarted: (!r && i !== P.hes.DISCONNECTED) || i === P.hes.RTC_CONNECTED,
                    awaitingRemote: null != u.default.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != u.default.getRemoteSessionId(),
                };
            },
            (e, t) => {
                let { channelType: n, connected: r, connectHasStarted: i, awaitingRemote: l, connectedRemote: a } = t,
                    o = e.channelType,
                    s = e.connectedRemote,
                    c = e.connected;
                if ((!e.connectHasStarted && i) || (a && !s)) {
                    if (null != n && m.Lr.has(n)) return;
                    return "user_join";
                }
                if (c && !r) {
                    if (l || a || (null != o && m.Lr.has(o))) return;
                    return "disconnect";
                }
            },
        ),
        null
    );
}
function L() {
    return (
        x(
            [S.Z],
            () => S.Z.isCurrentUserPTTActive() || S.Z.isCurrentUserPTTLatched(),
            (e, t) => {
                if (e !== t) {
                    let e = v.Z.isSelfMute();
                    if (v.Z.getMode() === P.pM4.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function R() {
    return (
        x(
            [v.Z],
            () => v.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t)
                    if (null != t) return null != e ? "voice_filter_swap" : "voice_filter_on";
                    else return "voice_filter_off";
            },
        ),
        null
    );
}
function D() {
    return (
        x(
            [v.Z],
            () => v.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = v.Z.isSelfMute();
                    if (v.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start";
                }
            },
        ),
        null
    );
}
function M() {
    return (
        x(
            [S.Z],
            () => S.Z.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = v.Z.isSelfMute();
                    if (v.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop";
                }
            },
        ),
        null
    );
}
function k() {
    return (
        x(
            [T.Z],
            () => T.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return "user_moved";
            },
        ),
        null
    );
}
function U() {
    return (
        x(
            [C.Z, T.Z],
            () => {
                let e = C.Z.getVoiceChannelId();
                if (null == e) return h.xO.NONE;
                let t = T.Z.getVoiceStateForChannel(e);
                return (0, h.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect";
            },
        ),
        null
    );
}
function G() {
    return (
        x(
            [C.Z, b.Z, _.default, T.Z, E.Z],
            () => {
                let e,
                    t,
                    n = C.Z.getVoiceChannelId(),
                    r = _.default.getId(),
                    i = [],
                    l = null,
                    a = 0,
                    o = b.Z.getAllActiveStreams();
                if (null != n) {
                    let r = E.Z.getChannel(n);
                    null != r &&
                        ((e = r.type),
                        (t = N.ZP.countVoiceStatesForChannel(r.id) - !!T.Z.isInChannel(r.id)),
                        (i = b.Z.getAllApplicationStreamsForChannel(r.id).map((e) => e.ownerId)));
                }
                let s = null;
                return (
                    (null == (s = 1 === o.length ? o[0] : b.Z.getCurrentUserActiveStream()) ? void 0 : s.state) ===
                        P.jm8.CONNECTING && (s = null),
                    null != s && ((l = (0, d.V9)(s)), (a = b.Z.getViewerIds(l).filter((e) => e !== r).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: i,
                        singleActiveStreamKey: l,
                        singleActiveStreamViewerCount: a,
                        currentUserId: r,
                        allActiveStreams: o,
                    }
                );
            },
            (e, t) => {
                let {
                    channelType: n,
                    voiceChannelId: r,
                    voiceChannelUserCount: i,
                    streamingUserIds: l,
                    singleActiveStreamKey: a,
                    singleActiveStreamViewerCount: o,
                    currentUserId: s,
                } = t;
                if (
                    e.voiceChannelId !== r ||
                    null == r ||
                    (function (e) {
                        let t = E.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let r = O.Z.getGuild(n);
                        return null != r && r.afkChannelId === t.id;
                    })(r) ||
                    (null != n && m.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    u = l.some((t) => !e.streamingUserIds.includes(t)),
                    d = e.allActiveStreams.map((e) => e.ownerId),
                    p = e.streamingUserIds.some((e) => !l.includes(e) && (e === s || d.includes(e)));
                if (u) return "stream_started";
                if (p) return "stream_ended";
                if (e.singleActiveStreamViewerCount <= 25 && c && o > e.singleActiveStreamViewerCount)
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
                else if (e.singleActiveStreamViewerCount <= 25 && c && o < e.singleActiveStreamViewerCount)
                    return "stream_user_left";
            },
        ),
        null
    );
}
function H() {
    return (
        x(
            [C.Z, o.ZP, c.Z, _.default],
            () => {
                let e = C.Z.getVoiceChannelId(),
                    t = C.Z.getChannelId(),
                    n = o.ZP.getConnectedActivityLocation(),
                    r = (0, s.p)(n),
                    i = _.default.getId(),
                    l = (0, j.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
                    a = (0, j.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
                    u = (0, j.lm)(r) ? o.ZP.getEmbeddedActivitiesForChannel(r) : o.i6,
                    d = (0, j.lm)(n) ? o.ZP.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: l,
                    connectedChannelActivities: u,
                    userConnectedActivity: d,
                    voiceChannelActivities: a,
                    connectedFrame: c.Z.getConnectedFrame(),
                };
            },
            (e, t) => {
                let n,
                    {
                        connectedActivityLocation: r,
                        voiceChannelId: i,
                        currentUserId: l,
                        channelActivities: a,
                        connectedChannelActivities: o,
                        userConnectedActivity: s,
                        voiceChannelActivities: c,
                        connectedFrame: u,
                    } = t,
                    d = c.some(
                        (e) => e.applicationId === (null == s ? void 0 : s.applicationId) && e.launchId === s.launchId,
                    );
                if ((0, j.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        r = c.find((e) => e.userIds.has(l));
                    e.voiceChannelActivities.length < c.length &&
                        (0, j.lm)(e.voiceChannelId) &&
                        (n = "activity_launch"),
                        void 0 === r && (0, j.lm)(t) && (n = "activity_end"),
                        void 0 === t && (0, j.lm)(r) && r.userIds.size > 1 && (n = "activity_user_join"),
                        (0, j.lm)(r) &&
                            (0, j.lm)(t) &&
                            (r.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            r.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                if (!d) {
                    e.connectedChannelActivities.length < o.length &&
                        e.channelActivities.length < a.length &&
                        (n = "activity_launch");
                    let t = e.userConnectedActivity;
                    null == s && (0, j.lm)(t) && (n = "activity_end"),
                        (0, j.lm)(s) &&
                            (0, j.lm)(t) &&
                            (s.userIds.size > t.userIds.size && (n = "activity_user_join"),
                            s.userIds.size < t.userIds.size && (n = "activity_user_left"));
                }
                return (
                    null == n &&
                        (null != e.connectedActivityLocation || null != r) &&
                        (null == e.connectedActivityLocation && null != r
                            ? (n = "activity_launch")
                            : null != e.connectedActivityLocation && null == r
                              ? (n = "activity_end")
                              : null != s &&
                                null != e.userConnectedActivity &&
                                (e.userConnectedActivity.userIds.size < s.userIds.size
                                    ? (n = "activity_user_join")
                                    : e.userConnectedActivity.userIds.size > s.userIds.size &&
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
function B() {
    return (
        x(
            [p.Z, C.Z],
            () => ({
                hangStatus: p.Z.getCurrentHangStatus(),
                customHangStatus: p.Z.getCustomHangStatus(),
                gameActivityHangStatus: p.Z.getGameActivityHangStatus(),
                inVoice: null != C.Z.getVoiceChannelId(),
            }),
            (e, t) => {
                var n, r;
                let { hangStatus: i, customHangStatus: a, gameActivityHangStatus: o } = t;
                if (
                    e.inVoice &&
                    ((null != i && i !== e.hangStatus) ||
                        (null != a &&
                            (a.status !== (null == (n = e.customHangStatus) ? void 0 : n.status) ||
                                !(0, l.isEqual)(a.emoji, null == (r = e.customHangStatus) ? void 0 : r.emoji))) ||
                        (null != o && e.gameActivityHangStatus !== o))
                )
                    return "hang_status_select";
            },
            0.15,
        ),
        null
    );
}
function V() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A, {}),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(L, {}),
            (0, r.jsx)(D, {}),
            (0, r.jsx)(k, {}),
            (0, r.jsx)(G, {}),
            (0, r.jsx)(U, {}),
            (0, r.jsx)(H, {}),
            (0, r.jsx)(R, {}),
            (0, r.jsx)(M, {}),
            (0, r.jsx)(B, {}),
        ],
    });
}
