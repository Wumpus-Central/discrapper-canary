n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(317381),
    s = n(16609),
    o = n(258609),
    c = n(569545),
    d = n(590415),
    u = n(131704),
    h = n(199902),
    m = n(314897),
    p = n(592125),
    g = n(430824),
    _ = n(131951),
    f = n(292959),
    E = n(19780),
    I = n(944486),
    C = n(606304),
    v = n(979651),
    N = n(938475),
    T = n(823379),
    S = n(557177),
    Z = n(981631);
function x(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            a = new r.Fh(e, () => {
                let e = t(),
                    r = n(l, e);
                null == r || f.Z.isSoundDisabled(r) || (0, S.GN)(r, null != i ? i : 0.4), (l = e);
            });
        return a.attach('useSound'), () => a.detach();
    });
}
function A() {
    return (
        x(
            [_.Z, I.Z],
            () => ({
                inVoiceChannel: null != I.Z.getVoiceChannelId(),
                selfMute: _.Z.isSelfMute(),
                selfDeaf: _.Z.isSelfDeaf(),
                audioPermissionReady: _.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: _.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: i, selfDeaf: l, audioPermissionReady: r, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== l) return l ? 'deafen' : 'undeafen';
                if (r && (n || e.audioPermissionReady) && e.selfMute !== i) {
                    if (a) {
                        _.Z.notifyMuteUnmuteSoundWasSkipped();
                        return;
                    }
                    return i ? 'mute' : 'unmute';
                }
            }
        ),
        null
    );
}
function b() {
    return (
        x(
            [p.Z, E.Z, I.Z, o.Z],
            () => {
                let e = p.Z.getChannel(I.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    i = E.Z.getWasEverRtcConnected(),
                    l = E.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: l === Z.hes.RTC_CONNECTED,
                    connectHasStarted: (!i && l !== Z.hes.DISCONNECTED) || l === Z.hes.RTC_CONNECTED,
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
                    if (null != n && u.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !i) {
                    if (r || a || (null != s && u.Lr.has(s))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function L() {
    return (
        x(
            [C.Z],
            () => C.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Z.isSelfMute();
                    if (_.Z.getMode() === Z.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function y() {
    return (
        x(
            [_.Z],
            () => _.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t) return null != t ? (null != e ? 'voice_filter_swap' : 'voice_filter_on') : 'voice_filter_off';
            }
        ),
        null
    );
}
function P() {
    return (
        x(
            [_.Z],
            () => _.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Z.isSelfMute();
                    if (_.Z.getMode() === Z.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function O() {
    return (
        x(
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
        x(
            [I.Z, v.Z],
            () => {
                let e = I.Z.getVoiceChannelId();
                if (null == e) return d.xO.NONE;
                let t = v.Z.getVoiceStateForChannel(e);
                return (0, d.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === d.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function j() {
    return (
        x(
            [I.Z, h.Z, m.default, v.Z, p.Z],
            () => {
                let e, t;
                let n = I.Z.getVoiceChannelId(),
                    i = m.default.getId(),
                    l = [],
                    r = null,
                    a = 0,
                    s = h.Z.getAllActiveStreams();
                if (null != n) {
                    let i = p.Z.getChannel(n);
                    null != i && ((e = i.type), (t = N.ZP.countVoiceStatesForChannel(i.id) - (v.Z.isInChannel(i.id) ? 1 : 0)), (l = h.Z.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (null == (o = 1 === s.length ? s[0] : h.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === Z.jm8.CONNECTING && (o = null),
                    null != o && ((r = (0, c.V9)(o)), (a = h.Z.getViewerIds(r).filter((e) => e !== i).length)),
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
                        let t = p.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = g.Z.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && u.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    d = r.some((t) => !e.streamingUserIds.includes(t)),
                    h = e.allActiveStreams.map((e) => e.ownerId),
                    m = e.streamingUserIds.some((e) => !r.includes(e) && (e === o || h.includes(e)));
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
        x(
            [I.Z, a.ZP, m.default],
            () => {
                let e = I.Z.getVoiceChannelId(),
                    t = I.Z.getChannelId(),
                    n = a.ZP.getConnectedActivityLocation(),
                    i = (0, s.p)(n),
                    l = m.default.getId(),
                    r = (0, T.lm)(t) ? a.ZP.getEmbeddedActivitiesForChannel(t) : a.i6,
                    o = (0, T.lm)(e) ? a.ZP.getEmbeddedActivitiesForChannel(e) : a.i6,
                    c = (0, T.lm)(i) ? a.ZP.getEmbeddedActivitiesForChannel(i) : a.i6,
                    d = (0, T.lm)(n) ? a.ZP.getSelfEmbeddedActivityForLocation(n) : null;
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
                if ((0, T.lm)(l)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = c.find((e) => e.userIds.has(r));
                    e.voiceChannelActivities.length < c.length && (0, T.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, T.lm)(t) && (n = 'activity_end'), void 0 === t && (0, T.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, T.lm)(i) && (0, T.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!d) {
                    e.connectedChannelActivities.length < s.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == o && (0, T.lm)(t) && (n = 'activity_end'), (0, T.lm)(o) && (0, T.lm)(t) && (o.userIds.size > t.userIds.size && (n = 'activity_user_join'), o.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return null == n && (null != e.connectedActivityLocation || null != i) && (null == e.connectedActivityLocation && null != i ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == i ? (n = 'activity_end') : null != o && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < o.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > o.userIds.size && (n = 'activity_user_leave'))), n;
            }
        ),
        null
    );
}
function w() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A, {}), (0, i.jsx)(b, {}), (0, i.jsx)(L, {}), (0, i.jsx)(P, {}), (0, i.jsx)(O, {}), (0, i.jsx)(j, {}), (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(y, {})]
    });
}
