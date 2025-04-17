n.d(t, { Z: () => D });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(317381),
    o = n(16609),
    s = n(258609),
    c = n(569545),
    u = n(460181),
    d = n(590415),
    p = n(131704),
    h = n(199902),
    f = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(131951),
    _ = n(292959),
    E = n(19780),
    O = n(944486),
    N = n(606304),
    y = n(979651),
    I = n(938475),
    v = n(823379),
    C = n(981631);
function S(e, t, n, r) {
    i.useEffect(() => {
        let i = t(),
            a = new l.Fh(e, () => {
                let e = t(),
                    l = n(i, e);
                null == l || _.Z.isSoundDisabled(l) || (0, u.GN)(l, null != r ? r : 0.4), (i = e);
            });
        return a.attach('useSound'), () => a.detach();
    });
}
function T() {
    return (
        S(
            [b.Z, O.Z],
            () => ({
                inVoiceChannel: null != O.Z.getVoiceChannelId(),
                selfMute: b.Z.isSelfMute(),
                selfDeaf: b.Z.isSelfDeaf(),
                audioPermissionReady: b.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: b.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: r, selfDeaf: i, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== i) return i ? 'deafen' : 'undeafen';
                if (l && (n || e.audioPermissionReady) && e.selfMute !== r) return a ? void b.Z.notifyMuteUnmuteSoundWasSkipped() : r ? 'mute' : 'unmute';
            }
        ),
        null
    );
}
function P() {
    return (
        S(
            [g.Z, E.Z, O.Z, s.Z],
            () => {
                let e = g.Z.getChannel(O.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    r = E.Z.getWasEverRtcConnected(),
                    i = E.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: i === C.hes.RTC_CONNECTED,
                    connectHasStarted: (!r && i !== C.hes.DISCONNECTED) || i === C.hes.RTC_CONNECTED,
                    awaitingRemote: null != s.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != s.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: r, connectHasStarted: i, awaitingRemote: l, connectedRemote: a } = t,
                    o = e.channelType,
                    s = e.connectedRemote,
                    c = e.connected;
                if ((!e.connectHasStarted && i) || (a && !s)) {
                    if (null != n && p.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !r) {
                    if (l || a || (null != o && p.Lr.has(o))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function j() {
    return (
        S(
            [N.Z],
            () => N.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = b.Z.isSelfMute();
                    if (b.Z.getMode() === C.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function A() {
    return (
        S(
            [b.Z],
            () => b.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t)
                    if (null != t) return null != e ? 'voice_filter_swap' : 'voice_filter_on';
                    else return 'voice_filter_off';
            }
        ),
        null
    );
}
function Z() {
    return (
        S(
            [b.Z],
            () => b.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = b.Z.isSelfMute();
                    if (b.Z.getMode() === C.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function x() {
    return (
        S(
            [y.Z],
            () => y.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function L() {
    return (
        S(
            [O.Z, y.Z],
            () => {
                let e = O.Z.getVoiceChannelId();
                if (null == e) return d.xO.NONE;
                let t = y.Z.getVoiceStateForChannel(e);
                return (0, d.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === d.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function w() {
    return (
        S(
            [O.Z, h.Z, f.default, y.Z, g.Z],
            () => {
                let e,
                    t,
                    n = O.Z.getVoiceChannelId(),
                    r = f.default.getId(),
                    i = [],
                    l = null,
                    a = 0,
                    o = h.Z.getAllActiveStreams();
                if (null != n) {
                    let r = g.Z.getChannel(n);
                    null != r && ((e = r.type), (t = I.ZP.countVoiceStatesForChannel(r.id) - +!!y.Z.isInChannel(r.id)), (i = h.Z.getAllApplicationStreamsForChannel(r.id).map((e) => e.ownerId)));
                }
                let s = null;
                return (
                    (null == (s = 1 === o.length ? o[0] : h.Z.getCurrentUserActiveStream()) ? void 0 : s.state) === C.jm8.CONNECTING && (s = null),
                    null != s && ((l = (0, c.V9)(s)), (a = h.Z.getViewerIds(l).filter((e) => e !== r).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: i,
                        singleActiveStreamKey: l,
                        singleActiveStreamViewerCount: a,
                        currentUserId: r,
                        allActiveStreams: o
                    }
                );
            },
            (e, t) => {
                let { channelType: n, voiceChannelId: r, voiceChannelUserCount: i, streamingUserIds: l, singleActiveStreamKey: a, singleActiveStreamViewerCount: o, currentUserId: s } = t;
                if (
                    e.voiceChannelId !== r ||
                    null == r ||
                    (function (e) {
                        let t = g.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let r = m.Z.getGuild(n);
                        return null != r && r.afkChannelId === t.id;
                    })(r) ||
                    (null != n && p.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    u = l.some((t) => !e.streamingUserIds.includes(t)),
                    d = e.allActiveStreams.map((e) => e.ownerId),
                    h = e.streamingUserIds.some((e) => !l.includes(e) && (e === s || d.includes(e)));
                if (u) return 'stream_started';
                if (h) return 'stream_ended';
                if (e.singleActiveStreamViewerCount <= 25 && c && o > e.singleActiveStreamViewerCount) return 'stream_user_joined';
                if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i > e.voiceChannelUserCount) return 'user_join';
                if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i < e.voiceChannelUserCount) return 'user_leave';
                else if (e.singleActiveStreamViewerCount <= 25 && c && o < e.singleActiveStreamViewerCount) return 'stream_user_left';
            }
        ),
        null
    );
}
function R() {
    return (
        S(
            [O.Z, a.ZP, f.default],
            () => {
                let e = O.Z.getVoiceChannelId(),
                    t = O.Z.getChannelId(),
                    n = a.ZP.getConnectedActivityLocation(),
                    r = (0, o.pY)(n),
                    i = f.default.getId(),
                    l = (0, v.lm)(t) ? a.ZP.getEmbeddedActivitiesForChannel(t) : a.i6,
                    s = (0, v.lm)(e) ? a.ZP.getEmbeddedActivitiesForChannel(e) : a.i6,
                    c = (0, v.lm)(r) ? a.ZP.getEmbeddedActivitiesForChannel(r) : a.i6,
                    u = (0, v.lm)(n) ? a.ZP.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: l,
                    connectedChannelActivities: c,
                    userConnectedActivity: u,
                    voiceChannelActivities: s
                };
            },
            (e, t) => {
                let n,
                    { connectedActivityLocation: r, voiceChannelId: i, currentUserId: l, channelActivities: a, connectedChannelActivities: o, userConnectedActivity: s, voiceChannelActivities: c } = t,
                    u = c.some((e) => e.applicationId === (null == s ? void 0 : s.applicationId) && e.launchId === s.launchId);
                if ((0, v.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        r = c.find((e) => e.userIds.has(l));
                    e.voiceChannelActivities.length < c.length && (0, v.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === r && (0, v.lm)(t) && (n = 'activity_end'), void 0 === t && (0, v.lm)(r) && r.userIds.size > 1 && (n = 'activity_user_join'), (0, v.lm)(r) && (0, v.lm)(t) && (r.userIds.size > t.userIds.size && (n = 'activity_user_join'), r.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!u) {
                    e.connectedChannelActivities.length < o.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == s && (0, v.lm)(t) && (n = 'activity_end'), (0, v.lm)(s) && (0, v.lm)(t) && (s.userIds.size > t.userIds.size && (n = 'activity_user_join'), s.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return null == n && (null != e.connectedActivityLocation || null != r) && (null == e.connectedActivityLocation && null != r ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == r ? (n = 'activity_end') : null != s && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < s.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > s.userIds.size && (n = 'activity_user_leave'))), n;
            }
        ),
        null
    );
}
function D() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T, {}), (0, r.jsx)(P, {}), (0, r.jsx)(j, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(x, {}), (0, r.jsx)(w, {}), (0, r.jsx)(L, {}), (0, r.jsx)(R, {}), (0, r.jsx)(A, {})]
    });
}
