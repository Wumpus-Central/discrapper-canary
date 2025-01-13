n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(317381),
    c = n(258609),
    d = n(569545),
    u = n(106301),
    h = n(590415),
    m = n(131704),
    p = n(199902),
    g = n(314897),
    f = n(592125),
    _ = n(430824),
    E = n(131951),
    I = n(292959),
    C = n(19780),
    N = n(944486),
    v = n(606304),
    S = n(979651),
    T = n(938475),
    A = n(823379),
    b = n(557177),
    Z = n(981631);
function x(e, t, n, i) {
    r.useEffect(() => {
        let r = t(),
            l = new s.Fh(e, () => {
                let e = t(),
                    l = n(r, e);
                null != l && !I.Z.isSoundDisabled(l) && (0, b.GN)(l, null != i ? i : 0.4), (r = e);
            });
        return l.attach('useSound'), () => l.detach();
    });
}
function L() {
    return (
        x(
            [E.Z, N.Z],
            () => ({
                inVoiceChannel: null != N.Z.getVoiceChannelId(),
                selfMute: E.Z.isSelfMute(),
                selfDeaf: E.Z.isSelfDeaf(),
                audioPermissionReady: E.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: E.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: i, selfDeaf: r, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== r) return r ? 'deafen' : 'undeafen';
                if (!!l && (!!n || !!e.audioPermissionReady)) {
                    if (e.selfMute !== i) {
                        if (a) {
                            E.Z.notifyMuteUnmuteSoundWasSkipped();
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
function P() {
    return (
        x(
            [f.Z, C.Z, N.Z, c.Z],
            () => {
                let e = f.Z.getChannel(N.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    i = C.Z.getWasEverRtcConnected(),
                    r = C.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: r === Z.hes.RTC_CONNECTED,
                    connectHasStarted: (!i && r !== Z.hes.DISCONNECTED) || r === Z.hes.RTC_CONNECTED,
                    awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != c.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: i, connectHasStarted: r, awaitingRemote: l, connectedRemote: a } = t,
                    s = e.channelType,
                    o = e.connectedRemote,
                    c = e.connected,
                    d = e.connectHasStarted;
                if ((!d && r) || (a && !o)) {
                    if (null != n && m.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !i) {
                    if (l || a || (null != s && m.Lr.has(s))) return;
                    return 'disconnect';
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
            () => v.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === Z.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function y() {
    return (
        x(
            [E.Z],
            () => E.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === Z.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function R() {
    return (
        x(
            [S.Z],
            () => S.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function j() {
    return (
        x(
            [N.Z, S.Z],
            () => {
                let e = N.Z.getVoiceChannelId();
                if (null == e) return h.xO.NONE;
                let t = S.Z.getVoiceStateForChannel(e);
                return (0, h.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function D() {
    return (
        x(
            [N.Z, p.Z, g.default, S.Z, f.Z],
            () => {
                let e, t;
                let n = N.Z.getVoiceChannelId(),
                    i = g.default.getId();
                let r = [],
                    l = null,
                    a = 0,
                    s = p.Z.getAllActiveStreams();
                if (null != n) {
                    let i = f.Z.getChannel(n);
                    null != i && ((e = i.type), (t = T.ZP.countVoiceStatesForChannel(i.id) - (S.Z.isInChannel(i.id) ? 1 : 0)), (r = p.Z.getAllApplicationStreamsForChannel(i.id).map((e) => e.ownerId)));
                }
                let o = null;
                return (
                    (null == (o = 1 === s.length ? s[0] : p.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === Z.jm8.CONNECTING && (o = null),
                    null != o && ((l = (0, d.V9)(o)), (a = p.Z.getViewerIds(l).filter((e) => e !== i).length)),
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
                        let t = f.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let i = _.Z.getGuild(n);
                        return null != i && i.afkChannelId === t.id;
                    })(i) ||
                    (null != n && m.Lr.has(n))
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
function M() {
    return (
        x(
            [N.Z, o.ZP, g.default],
            () => {
                let e = N.Z.getVoiceChannelId(),
                    t = N.Z.getChannelId(),
                    n = o.ZP.getConnectedActivityChannelId(),
                    i = g.default.getId(),
                    r = (0, A.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
                    l = (0, A.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
                    a = (0, A.lm)(n) ? o.ZP.getEmbeddedActivitiesForChannel(n) : o.i6;
                return {
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: r,
                    connectedChannelActivities: a,
                    userConnectedActivity: (0, A.lm)(n) ? o.ZP.getSelfEmbeddedActivityForChannel(n) : null,
                    voiceChannelActivities: l
                };
            },
            (e, t) => {
                let n,
                    { voiceChannelId: i, currentUserId: r, channelActivities: l, connectedChannelActivities: a, userConnectedActivity: s, voiceChannelActivities: o } = t;
                let c = o.some((e) => e.applicationId === (null == s ? void 0 : s.applicationId) && e.launchId === s.launchId);
                if ((0, A.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(r)),
                        i = o.find((e) => e.userIds.has(r));
                    e.voiceChannelActivities.length < o.length && (0, A.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, A.lm)(t) && (n = 'activity_end'), void 0 === t && (0, A.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, A.lm)(i) && (0, A.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                if (!c) {
                    e.connectedChannelActivities.length < a.length && e.channelActivities.length < l.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    null == s && (0, A.lm)(t) && (n = 'activity_end'), (0, A.lm)(s) && (0, A.lm)(t) && (s.userIds.size > t.userIds.size && (n = 'activity_user_join'), s.userIds.size < t.userIds.size && (n = 'activity_user_left'));
                }
                return n;
            }
        ),
        null
    );
}
function w() {
    return (
        x(
            [u.Z, N.Z],
            () => ({
                hangStatus: u.Z.getCurrentHangStatus(),
                customHangStatus: u.Z.getCustomHangStatus(),
                inVoice: null != N.Z.getVoiceChannelId()
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
function k() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(L, {}), (0, i.jsx)(P, {}), (0, i.jsx)(O, {}), (0, i.jsx)(y, {}), (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(j, {}), (0, i.jsx)(M, {}), (0, i.jsx)(w, {})]
    });
}
