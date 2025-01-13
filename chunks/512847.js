n.d(t, {
    Z: function () {
        return U;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(317381),
    c = n(16609),
    d = n(258609),
    u = n(569545),
    h = n(106301),
    m = n(590415),
    p = n(131704),
    g = n(199902),
    f = n(314897),
    _ = n(592125),
    E = n(430824),
    I = n(131951),
    C = n(292959),
    N = n(19780),
    v = n(944486),
    S = n(606304),
    T = n(979651),
    A = n(938475),
    b = n(823379),
    Z = n(557177),
    x = n(981631);
function L(e, t, n, i) {
    r.useEffect(() => {
        let r = t(),
            l = new s.Fh(e, () => {
                let e = t(),
                    l = n(r, e);
                null != l && !C.Z.isSoundDisabled(l) && (0, Z.GN)(l, null != i ? i : 0.4), (r = e);
            });
        return l.attach('useSound'), () => l.detach();
    });
}
function P() {
    return (
        L(
            [I.Z, v.Z],
            () => ({
                inVoiceChannel: null != v.Z.getVoiceChannelId(),
                selfMute: I.Z.isSelfMute(),
                selfDeaf: I.Z.isSelfDeaf(),
                audioPermissionReady: I.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: I.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: i, selfDeaf: r, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== r) return r ? 'deafen' : 'undeafen';
                if (!!l && (!!n || !!e.audioPermissionReady)) {
                    if (e.selfMute !== i) {
                        if (a) {
                            I.Z.notifyMuteUnmuteSoundWasSkipped();
                            return;
                        }
                        return i ? 'mute' : 'unmute';
                    }
                }
            }
        ),
        null
    );
}
function O() {
    return (
        L(
            [_.Z, N.Z, v.Z, d.Z],
            () => {
                let e = _.Z.getChannel(v.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    i = N.Z.getWasEverRtcConnected(),
                    r = N.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: r === x.hes.RTC_CONNECTED,
                    connectHasStarted: (!i && r !== x.hes.DISCONNECTED) || r === x.hes.RTC_CONNECTED,
                    awaitingRemote: null != d.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != d.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: r, awaitingRemote: l, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    c = e.connected,
                    d = e.connectHasStarted;
                if ((!d && r) || (a && !o)) {
                    if (null != n && p.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !i) {
                    if (l || a || (null != s && p.Lr.has(s))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function y() {
    return (
        L(
            [S.Z],
            () => S.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = I.Z.isSelfMute();
                    if (I.Z.getMode() === x.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function R() {
    return (
        L(
            [I.Z],
            () => I.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = I.Z.isSelfMute();
                    if (I.Z.getMode() === x.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function j() {
    return (
        L(
            [T.Z],
            () => T.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function D() {
    return (
        L(
            [v.Z, T.Z],
            () => {
                let e = v.Z.getVoiceChannelId();
                if (null == e) return m.xO.NONE;
                let t = T.Z.getVoiceStateForChannel(e);
                return (0, m.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function M() {
    return (
        L(
            [v.Z, g.Z, f.default, T.Z, _.Z],
            () => {
                let e, t;
                let n = v.Z.getVoiceChannelId(),
                    i = f.default.getId();
                let r = [],
                    l = null,
                    a = 0,
                    s = g.Z.getAllActiveStreams();
                if (null != n) {
                    let i = _.Z.getChannel(n);
                    null != i && ((e = i.type), (t = A.ZP.countVoiceStatesForChannel(i.id) - (T.Z.isInChannel(i.id) ? 1 : 0)), (r = g.Z.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (null == (o = 1 === s.length ? s[0] : g.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === x.jm8.CONNECTING && (o = null),
                    null != o && ((l = (0, u.V9)(o)), (a = g.Z.getViewerIds(l).filter((e) => e !== i).length)),
                    {
                        channelType: e,
                        voiceChannelId: n,
                        voiceChannelUserCount: t,
                        streamingUserIds: r,
                        singleActiveStreamKey: l,
                        singleActiveStreamViewerCount: a,
                        currentUserId: i,
                        allActiveStreams: s
                    }
                );
            },
            (e, t) => {
                let { channelType: n, voiceChannelId: i, voiceChannelUserCount: r, streamingUserIds: l, singleActiveStreamKey: a, singleActiveStreamViewerCount: s, currentUserId: o } = t;
                if (
                    e.voiceChannelId !== i ||
                    null == i ||
                    (function (e) {
                        let t = _.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = E.Z.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && p.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    d = l.some((t) => !e.streamingUserIds.includes(t)),
                    u = e.allActiveStreams.map((e) => e.ownerId),
                    h = e.streamingUserIds.some((e) => !l.includes(e) && (e === o || u.includes(e)));
                if (d) return 'stream_started';
                if (h) return 'stream_ended';
                if (e.singleActiveStreamViewerCount <= 25 && c && s > e.singleActiveStreamViewerCount) return 'stream_user_joined';
                else if (null != e.voiceChannelUserCount && null != r && e.voiceChannelUserCount <= 25 && r > e.voiceChannelUserCount) return 'user_join';
                else if (null != e.voiceChannelUserCount && null != r && e.voiceChannelUserCount <= 25 && r < e.voiceChannelUserCount) return 'user_leave';
                else if (e.singleActiveStreamViewerCount <= 25 && c && s < e.singleActiveStreamViewerCount) return 'stream_user_left';
            }
        ),
        null
    );
}
function w() {
    return (
        L(
            [v.Z, o.ZP, f.default],
            () => {
                let e = v.Z.getVoiceChannelId(),
                    t = v.Z.getChannelId(),
                    n = o.ZP.getConnectedActivityLocation(),
                    i = (0, c.p)(n),
                    r = f.default.getId(),
                    l = (0, b.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
                    a = (0, b.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
                    s = (0, b.lm)(i) ? o.ZP.getEmbeddedActivitiesForChannel(i) : o.i6,
                    d = (0, b.lm)(n) ? o.ZP.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: r,
                    channelActivities: l,
                    connectedChannelActivities: s,
                    userConnectedActivity: d,
                    voiceChannelActivities: a
                };
            },
            (e, t) => {
                let n,
                    { connectedActivityLocation: i, voiceChannelId: r, currentUserId: l, channelActivities: a, connectedChannelActivities: s, userConnectedActivity: o, voiceChannelActivities: c } = t;
                let d = c.some((e) => e.applicationId === (null == o ? void 0 : o.applicationId) && e.launchId === o.launchId);
                if ((0, b.lm)(r)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        i = c.find((e) => e.userIds.has(l));
                    e.voiceChannelActivities.length < c.length && (0, b.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, b.lm)(t) && (n = 'activity_end'), void 0 === t && (0, b.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, b.lm)(i) && (0, b.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!d) {
                    e.connectedChannelActivities.length < s.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == o && (0, b.lm)(t) && (n = 'activity_end'), (0, b.lm)(o) && (0, b.lm)(t) && (o.userIds.size > t.userIds.size && (n = 'activity_user_join'), o.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return null == n && (null != e.connectedActivityLocation || null != i) && (null == e.connectedActivityLocation && null != i ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == i ? (n = 'activity_end') : null != o && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < o.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > o.userIds.size && (n = 'activity_user_leave'))), n;
            }
        ),
        null
    );
}
function k() {
    return (
        L(
            [h.Z, v.Z],
            () => ({
                hangStatus: h.Z.getCurrentHangStatus(),
                customHangStatus: h.Z.getCustomHangStatus(),
                inVoice: null != v.Z.getVoiceChannelId()
            }),
            (e, t) => {
                var n, i;
                let { hangStatus: r, customHangStatus: l } = t;
                if (e.inVoice && ((null != r && r !== e.hangStatus) || (null != l && (l.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !a().isEqual(l.emoji, null === (i = e.customHangStatus) || void 0 === i ? void 0 : i.emoji))))) return 'hang_status_select';
            },
            0.15
        ),
        null
    );
}
function U() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(P, {}), (0, i.jsx)(O, {}), (0, i.jsx)(y, {}), (0, i.jsx)(R, {}), (0, i.jsx)(j, {}), (0, i.jsx)(M, {}), (0, i.jsx)(D, {}), (0, i.jsx)(w, {}), (0, i.jsx)(k, {})]
    });
}
