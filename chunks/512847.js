n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(442837),
    o = n(317381),
    s = n(16609),
    c = n(258609),
    u = n(569545),
    d = n(106301),
    p = n(460181),
    h = n(979283),
    f = n(590415),
    g = n(131704),
    m = n(199902),
    b = n(314897),
    _ = n(592125),
    O = n(430824),
    E = n(131951),
    y = n(292959),
    v = n(19780),
    I = n(944486),
    C = n(606304),
    S = n(979651),
    N = n(938475),
    T = n(823379),
    P = n(981631);
function j(e, t, n, r) {
    i.useEffect(() => {
        let i = t(),
            l = new a.Fh(e, () => {
                let e = t(),
                    l = n(i, e);
                (null == l || y.Z.isSoundDisabled(l) || (0, p.GN)(l, null != r ? r : 0.4), (i = e));
            });
        return (l.attach('useSound'), () => l.detach());
    });
}
function A() {
    return (
        j(
            [E.Z, I.Z],
            () => ({
                inVoiceChannel: null != I.Z.getVoiceChannelId(),
                selfMute: E.Z.isSelfMute(),
                selfDeaf: E.Z.isSelfDeaf(),
                audioPermissionReady: E.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: E.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: r, selfDeaf: i, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== i) return i ? 'deafen' : 'undeafen';
                if (l && (n || e.audioPermissionReady) && e.selfMute !== r) return a ? void E.Z.notifyMuteUnmuteSoundWasSkipped() : r ? 'mute' : 'unmute';
            }
        ),
        null
    );
}
function x() {
    return (
        j(
            [E.Z, I.Z],
            () => ({
                videoEnabled: E.Z.isVideoEnabled(),
                inVoiceChannel: null != I.Z.getVoiceChannelId()
            }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: r } = t;
                if (!(0, h.O)()) return;
                let { videoEnabled: i, inVoiceChannel: l } = e;
                if (i !== n && l && r) return n ? 'camera_on' : 'camera_off';
            }
        ),
        null
    );
}
function Z() {
    return (
        j(
            [_.Z, v.Z, I.Z, c.Z],
            () => {
                let e = _.Z.getChannel(I.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    r = v.Z.getWasEverRtcConnected(),
                    i = v.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: i === P.hes.RTC_CONNECTED,
                    connectHasStarted: (!r && i !== P.hes.DISCONNECTED) || i === P.hes.RTC_CONNECTED,
                    awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
                    connectedRemote: null != c.Z.getRemoteSessionId()
                };
            },
            (e, t) => {
                let { channelType: n, connected: r, connectHasStarted: i, awaitingRemote: l, connectedRemote: a } = t,
                    o = e.channelType,
                    s = e.connectedRemote,
                    c = e.connected;
                if ((!e.connectHasStarted && i) || (a && !s)) {
                    if (null != n && g.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !r) {
                    if (l || a || (null != o && g.Lr.has(o))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function w() {
    return (
        j(
            [C.Z],
            () => C.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === P.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function L() {
    return (
        j(
            [E.Z],
            () => E.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t)
                    if (null != t) return null != e ? 'voice_filter_swap' : 'voice_filter_on';
                    else return 'voice_filter_off';
            }
        ),
        null
    );
}
function R() {
    return (
        j(
            [E.Z],
            () => E.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function D() {
    return (
        j(
            [C.Z],
            () => C.Z.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = E.Z.isSelfMute();
                    if (E.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function k() {
    return (
        j(
            [S.Z],
            () => S.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function M() {
    return (
        j(
            [I.Z, S.Z],
            () => {
                let e = I.Z.getVoiceChannelId();
                if (null == e) return f.xO.NONE;
                let t = S.Z.getVoiceStateForChannel(e);
                return (0, f.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function U() {
    return (
        j(
            [I.Z, m.Z, b.default, S.Z, _.Z],
            () => {
                let e,
                    t,
                    n = I.Z.getVoiceChannelId(),
                    r = b.default.getId(),
                    i = [],
                    l = null,
                    a = 0,
                    o = m.Z.getAllActiveStreams();
                if (null != n) {
                    let r = _.Z.getChannel(n);
                    null != r && ((e = r.type), (t = N.ZP.countVoiceStatesForChannel(r.id) - +!!S.Z.isInChannel(r.id)), (i = m.Z.getAllApplicationStreamsForChannel(r.id).map((e) => e.ownerId)));
                }
                let s = null;
                return (
                    (null == (s = 1 === o.length ? o[0] : m.Z.getCurrentUserActiveStream()) ? void 0 : s.state) === P.jm8.CONNECTING && (s = null),
                    null != s && ((l = (0, u.V9)(s)), (a = m.Z.getViewerIds(l).filter((e) => e !== r).length)),
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
                        let t = _.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let r = O.Z.getGuild(n);
                        return null != r && r.afkChannelId === t.id;
                    })(r) ||
                    (null != n && g.Lr.has(n))
                )
                    return;
                let c = null != a && e.singleActiveStreamKey === a,
                    u = l.some((t) => !e.streamingUserIds.includes(t)),
                    d = e.allActiveStreams.map((e) => e.ownerId),
                    p = e.streamingUserIds.some((e) => !l.includes(e) && (e === s || d.includes(e)));
                if (u) return 'stream_started';
                if (p) return 'stream_ended';
                if (e.singleActiveStreamViewerCount <= 25 && c && o > e.singleActiveStreamViewerCount) return 'stream_user_joined';
                if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i > e.voiceChannelUserCount) return 'user_join';
                if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i < e.voiceChannelUserCount) return 'user_leave';
                else if (e.singleActiveStreamViewerCount <= 25 && c && o < e.singleActiveStreamViewerCount) return 'stream_user_left';
            }
        ),
        null
    );
}
function G() {
    return (
        j(
            [I.Z, o.ZP, b.default],
            () => {
                let e = I.Z.getVoiceChannelId(),
                    t = I.Z.getChannelId(),
                    n = o.ZP.getConnectedActivityLocation(),
                    r = (0, s.p)(n),
                    i = b.default.getId(),
                    l = (0, T.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
                    a = (0, T.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
                    c = (0, T.lm)(r) ? o.ZP.getEmbeddedActivitiesForChannel(r) : o.i6,
                    u = (0, T.lm)(n) ? o.ZP.getSelfEmbeddedActivityForLocation(n) : null;
                return {
                    connectedActivityLocation: n,
                    voiceChannelId: e,
                    currentUserId: i,
                    channelActivities: l,
                    connectedChannelActivities: c,
                    userConnectedActivity: u,
                    voiceChannelActivities: a
                };
            },
            (e, t) => {
                let n,
                    { connectedActivityLocation: r, voiceChannelId: i, currentUserId: l, channelActivities: a, connectedChannelActivities: o, userConnectedActivity: s, voiceChannelActivities: c } = t,
                    u = c.some((e) => e.applicationId === (null == s ? void 0 : s.applicationId) && e.launchId === s.launchId);
                if ((0, T.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        r = c.find((e) => e.userIds.has(l));
                    (e.voiceChannelActivities.length < c.length && (0, T.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === r && (0, T.lm)(t) && (n = 'activity_end'), void 0 === t && (0, T.lm)(r) && r.userIds.size > 1 && (n = 'activity_user_join'), (0, T.lm)(r) && (0, T.lm)(t) && (r.userIds.size > t.userIds.size && (n = 'activity_user_join'), r.userIds.size < t.userIds.size && (n = 'activity_user_left')));
                }
                if (!u) {
                    e.connectedChannelActivities.length < o.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    (null == s && (0, T.lm)(t) && (n = 'activity_end'), (0, T.lm)(s) && (0, T.lm)(t) && (s.userIds.size > t.userIds.size && (n = 'activity_user_join'), s.userIds.size < t.userIds.size && (n = 'activity_user_left')));
                }
                return (null == n && (null != e.connectedActivityLocation || null != r) && (null == e.connectedActivityLocation && null != r ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == r ? (n = 'activity_end') : null != s && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < s.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > s.userIds.size && (n = 'activity_user_leave'))), n);
            }
        ),
        null
    );
}
function V() {
    return (
        j(
            [d.Z, I.Z],
            () => ({
                hangStatus: d.Z.getCurrentHangStatus(),
                customHangStatus: d.Z.getCustomHangStatus(),
                inVoice: null != I.Z.getVoiceChannelId()
            }),
            (e, t) => {
                var n, r;
                let { hangStatus: i, customHangStatus: a } = t;
                if (e.inVoice && ((null != i && i !== e.hangStatus) || (null != a && (a.status !== (null == (n = e.customHangStatus) ? void 0 : n.status) || !(0, l.isEqual)(a.emoji, null == (r = e.customHangStatus) ? void 0 : r.emoji))))) return 'hang_status_select';
            },
            0.15
        ),
        null
    );
}
function B() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A, {}), (0, r.jsx)(x, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(w, {}), (0, r.jsx)(R, {}), (0, r.jsx)(k, {}), (0, r.jsx)(U, {}), (0, r.jsx)(M, {}), (0, r.jsx)(G, {}), (0, r.jsx)(L, {}), (0, r.jsx)(D, {}), (0, r.jsx)(V, {})]
    });
}
