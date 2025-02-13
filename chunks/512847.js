n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(317381),
    s = n(16609),
    o = n(258609),
    c = n(569545),
    d = n(460181),
    u = n(590415),
    h = n(131704),
    m = n(199902),
    p = n(314897),
    g = n(592125),
    _ = n(430824),
    f = n(131951),
    E = n(292959),
    I = n(19780),
    C = n(944486),
    N = n(606304),
    v = n(979651),
    T = n(938475),
    S = n(823379),
    b = n(981631);
function A(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            a = new r.Fh(e, () => {
                let e = t(),
                    r = n(l, e);
                null == r || E.Z.isSoundDisabled(r) || (0, d.GN)(r, null != i ? i : 0.4), (l = e);
            });
        return a.attach('useSound'), () => a.detach();
    });
}
function Z() {
    return (
        A(
            [f.Z, C.Z],
            () => ({
                inVoiceChannel: null != C.Z.getVoiceChannelId(),
                selfMute: f.Z.isSelfMute(),
                selfDeaf: f.Z.isSelfDeaf(),
                audioPermissionReady: f.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: f.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: i, selfDeaf: l, audioPermissionReady: r, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== l) return l ? 'deafen' : 'undeafen';
                if (r && (n || e.audioPermissionReady) && e.selfMute !== i) {
                    if (a) {
                        f.Z.notifyMuteUnmuteSoundWasSkipped();
                        return;
                    }
                    return i ? 'mute' : 'unmute';
                }
            }
        ),
        null
    );
}
function x() {
    return (
        A(
            [g.Z, I.Z, C.Z, o.Z],
            () => {
                let e = g.Z.getChannel(C.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    i = I.Z.getWasEverRtcConnected(),
                    l = I.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: l === b.hes.RTC_CONNECTED,
                    connectHasStarted: (!i && l !== b.hes.DISCONNECTED) || l === b.hes.RTC_CONNECTED,
                    awaitingRemote: null != o.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != o.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: l, awaitingRemote: r, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    c = e.connected;
                if ((!e.connectHasStarted && l) || (a && !o)) {
                    if (null != n && h.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !i) {
                    if (r || a || (null != s && h.Lr.has(s))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function L() {
    return (
        A(
            [N.Z],
            () => N.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Z.isSelfMute();
                    if (f.Z.getMode() === b.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function y() {
    return (
        A(
            [f.Z],
            () => f.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t) return null != t ? (null != e ? 'voice_filter_swap' : 'voice_filter_on') : 'voice_filter_off';
            }
        ),
        null
    );
}
function P() {
    return (
        A(
            [f.Z],
            () => f.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = f.Z.isSelfMute();
                    if (f.Z.getMode() === b.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function O() {
    return (
        A(
            [v.Z],
            () => v.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function R() {
    return (
        A(
            [C.Z, v.Z],
            () => {
                let e = C.Z.getVoiceChannelId();
                if (null == e) return u.xO.NONE;
                let t = v.Z.getVoiceStateForChannel(e);
                return (0, u.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === u.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function j() {
    return (
        A(
            [C.Z, m.Z, p.default, v.Z, g.Z],
            () => {
                let e, t;
                let n = C.Z.getVoiceChannelId(),
                    i = p.default.getId(),
                    l = [],
                    r = null,
                    a = 0,
                    s = m.Z.getAllActiveStreams();
                if (null != n) {
                    let i = g.Z.getChannel(n);
                    null != i && ((e = i.type), (t = T.ZP.countVoiceStatesForChannel(i.id) - (v.Z.isInChannel(i.id) ? 1 : 0)), (l = m.Z.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (null == (o = 1 === s.length ? s[0] : m.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === b.jm8.CONNECTING && (o = null),
                    null != o && ((r = (0, c.V9)(o)), (a = m.Z.getViewerIds(r).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: l,
                        singleActiveStreamKey: r,
                        singleActiveStreamViewerCount: a,
                        currentUserId: i,
                        allActiveStreams: s
                    }
                );
            },
            (e, t) => {
                let { channelType: n, voiceChannelId: i, voiceChannelUserCount: l, streamingUserIds: r, singleActiveStreamKey: a, singleActiveStreamViewerCount: s, currentUserId: o } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = g.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = _.Z.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && h.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    d = r.some((t) => !e.streamingUserIds.includes(t)),
                    u = e.allActiveStreams.map((e) => e.ownerId),
                    m = e.streamingUserIds.some((e) => !r.includes(e) && (e === o || u.includes(e)));
                if (d) return 'stream_started';
                if (m) return 'stream_ended';
                if (e.singleActiveStreamViewerCount <= 25 && c && s > e.singleActiveStreamViewerCount) return 'stream_user_joined';
                if (null != e.voiceChannelUserCount && null != l && e.voiceChannelUserCount <= 25 && l > e.voiceChannelUserCount) return 'user_join';
                if (null != e.voiceChannelUserCount && null != l && e.voiceChannelUserCount <= 25 && l < e.voiceChannelUserCount) return 'user_leave';
                else if (e.singleActiveStreamViewerCount <= 25 && c && s < e.singleActiveStreamViewerCount) return 'stream_user_left';
            }
        ),
        null
    );
}
function D() {
    return (
        A(
            [C.Z, a.ZP, p.default],
            () => {
                let e = C.Z.getVoiceChannelId(),
                    t = C.Z.getChannelId(),
                    n = a.ZP.getConnectedActivityLocation(),
                    i = (0, s.pY)(n),
                    l = p.default.getId(),
                    r = (0, S.lm)(t) ? a.ZP.getEmbeddedActivitiesForChannel(t) : a.i6,
                    o = (0, S.lm)(e) ? a.ZP.getEmbeddedActivitiesForChannel(e) : a.i6,
                    c = (0, S.lm)(i) ? a.ZP.getEmbeddedActivitiesForChannel(i) : a.i6,
                    d = (0, S.lm)(n) ? a.ZP.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: l,
                    channelActivities: r,
                    connectedChannelActivities: c,
                    userConnectedActivity: d,
                    voiceChannelActivities: o
                };
            },
            (e, t) => {
                let n,
                    { connectedActivityLocation: i, voiceChannelId: l, currentUserId: r, channelActivities: a, connectedChannelActivities: s, userConnectedActivity: o, voiceChannelActivities: c } = t,
                    d = c.some((e) => e.applicationId === (null == o ? void 0 : o.applicationId) && e.launchId === o.launchId);
                if ((0, S.lm)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = c.find((e) => e.userIds.has(r));
                    e.voiceChannelActivities.length < c.length && (0, S.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, S.lm)(t) && (n = 'activity_end'), void 0 === t && (0, S.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, S.lm)(i) && (0, S.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!d) {
                    e.connectedChannelActivities.length < s.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == o && (0, S.lm)(t) && (n = 'activity_end'), (0, S.lm)(o) && (0, S.lm)(t) && (o.userIds.size > t.userIds.size && (n = 'activity_user_join'), o.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return null == n && (null != e.connectedActivityLocation || null != i) && (null == e.connectedActivityLocation && null != i ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == i ? (n = 'activity_end') : null != o && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < o.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > o.userIds.size && (n = 'activity_user_leave'))), n;
            }
        ),
        null
    );
}
function w() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(Z, {}), (0, i.jsx)(x, {}), (0, i.jsx)(L, {}), (0, i.jsx)(P, {}), (0, i.jsx)(O, {}), (0, i.jsx)(j, {}), (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(y, {})]
    });
}
