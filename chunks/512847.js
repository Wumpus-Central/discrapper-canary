n.d(t, { Z: () => U });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(317381),
    o = n(16609),
    s = n(258609),
    c = n(569545),
    u = n(460181),
    d = n(979283),
    p = n(590415),
    h = n(131704),
    f = n(199902),
    g = n(314897),
    m = n(592125),
    b = n(430824),
    _ = n(131951),
    E = n(292959),
    O = n(19780),
    y = n(944486),
    I = n(606304),
    v = n(979651),
    C = n(938475),
    S = n(823379),
    N = n(981631);
function T(e, t, n, r) {
    i.useEffect(() => {
        let i = t(),
            a = new l.Fh(e, () => {
                let e = t(),
                    l = n(i, e);
                (null == l || E.Z.isSoundDisabled(l) || (0, u.GN)(l, null != r ? r : 0.4), (i = e));
            });
        return (a.attach('useSound'), () => a.detach());
    });
}
function P() {
    return (
        T(
            [_.Z, y.Z],
            () => ({
                inVoiceChannel: null != y.Z.getVoiceChannelId(),
                selfMute: _.Z.isSelfMute(),
                selfDeaf: _.Z.isSelfDeaf(),
                audioPermissionReady: _.Z.isNativeAudioPermissionReady(),
                shouldSkipMuteUnmuteSound: _.Z.shouldSkipMuteUnmuteSound()
            }),
            (e, t) => {
                let { inVoiceChannel: n, selfMute: r, selfDeaf: i, audioPermissionReady: l, shouldSkipMuteUnmuteSound: a } = t;
                if (e.selfDeaf !== i) return i ? 'deafen' : 'undeafen';
                if (l && (n || e.audioPermissionReady) && e.selfMute !== r) return a ? void _.Z.notifyMuteUnmuteSoundWasSkipped() : r ? 'mute' : 'unmute';
            }
        ),
        null
    );
}
function j() {
    return (
        T(
            [_.Z, y.Z],
            () => ({
                videoEnabled: _.Z.isVideoEnabled(),
                inVoiceChannel: null != y.Z.getVoiceChannelId()
            }),
            (e, t) => {
                let { videoEnabled: n, inVoiceChannel: r } = t;
                if (!(0, d.O)()) return;
                let { videoEnabled: i, inVoiceChannel: l } = e;
                if (i !== n && l && r) return n ? 'camera_on' : 'camera_off';
            }
        ),
        null
    );
}
function A() {
    return (
        T(
            [m.Z, O.Z, y.Z, s.Z],
            () => {
                let e = m.Z.getChannel(y.Z.getVoiceChannelId()),
                    t = null == e ? void 0 : e.type,
                    n = null == e ? void 0 : e.getGuildId(),
                    r = O.Z.getWasEverRtcConnected(),
                    i = O.Z.getState();
                return {
                    channelType: t,
                    guildId: n,
                    connected: i === N.hes.RTC_CONNECTED,
                    connectHasStarted: (!r && i !== N.hes.DISCONNECTED) || i === N.hes.RTC_CONNECTED,
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
                    if (null != n && h.Lr.has(n)) return;
                    return 'user_join';
                }
                if (c && !r) {
                    if (l || a || (null != o && h.Lr.has(o))) return;
                    return 'disconnect';
                }
            }
        ),
        null
    );
}
function Z() {
    return (
        T(
            [I.Z],
            () => I.Z.isCurrentUserSpeaking(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Z.isSelfMute();
                    if (_.Z.getMode() === N.pM4.PUSH_TO_TALK && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function x() {
    return (
        T(
            [_.Z],
            () => _.Z.getActiveVoiceFilter(),
            (e, t) => {
                if (e !== t)
                    if (null != t) return null != e ? 'voice_filter_swap' : 'voice_filter_on';
                    else return 'voice_filter_off';
            }
        ),
        null
    );
}
function w() {
    return (
        T(
            [_.Z],
            () => _.Z.isSelfMutedTemporarily(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Z.isSelfMute();
                    if (_.Z.getMode() === N.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_stop' : 'ptt_start';
                }
            }
        ),
        null
    );
}
function L() {
    return (
        T(
            [I.Z],
            () => I.Z.isCurrentUserPrioritySpeaker(),
            (e, t) => {
                if (e !== t) {
                    let e = _.Z.isSelfMute();
                    if (_.Z.getMode() === N.pM4.VOICE_ACTIVITY && !e) return t ? 'ptt_start' : 'ptt_stop';
                }
            }
        ),
        null
    );
}
function R() {
    return (
        T(
            [v.Z],
            () => v.Z.userHasBeenMovedVersion,
            (e, t) => {
                if (e !== t) return 'user_moved';
            }
        ),
        null
    );
}
function D() {
    return (
        T(
            [y.Z, v.Z],
            () => {
                let e = y.Z.getVoiceChannelId();
                if (null == e) return p.xO.NONE;
                let t = v.Z.getVoiceStateForChannel(e);
                return (0, p.gf)(t);
            },
            (e, t) => {
                if (e !== t && t === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return 'reconnect';
            }
        ),
        null
    );
}
function k() {
    return (
        T(
            [y.Z, f.Z, g.default, v.Z, m.Z],
            () => {
                let e,
                    t,
                    n = y.Z.getVoiceChannelId(),
                    r = g.default.getId(),
                    i = [],
                    l = null,
                    a = 0,
                    o = f.Z.getAllActiveStreams();
                if (null != n) {
                    let r = m.Z.getChannel(n);
                    null != r && ((e = r.type), (t = C.ZP.countVoiceStatesForChannel(r.id) - +!!v.Z.isInChannel(r.id)), (i = f.Z.getAllApplicationStreamsForChannel(r.id).map((e) => e.ownerId)));
                }
                let s = null;
                return (
                    (null == (s = 1 === o.length ? o[0] : f.Z.getCurrentUserActiveStream()) ? void 0 : s.state) === N.jm8.CONNECTING && (s = null),
                    null != s && ((l = (0, c.V9)(s)), (a = f.Z.getViewerIds(l).filter((e) => e !== r).length)),
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
                        let t = m.Z.getChannel(e);
                        if (null == t) return !1;
                        let n = t.getGuildId();
                        if (null == n) return !1;
                        let r = b.Z.getGuild(n);
                        return null != r && r.afkChannelId === t.id;
                    })(r) ||
                    (null != n && h.Lr.has(n))
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
function M() {
    return (
        T(
            [y.Z, a.ZP, g.default],
            () => {
                let e = y.Z.getVoiceChannelId(),
                    t = y.Z.getChannelId(),
                    n = a.ZP.getConnectedActivityLocation(),
                    r = (0, o.p)(n),
                    i = g.default.getId(),
                    l = (0, S.lm)(t) ? a.ZP.getEmbeddedActivitiesForChannel(t) : a.i6,
                    s = (0, S.lm)(e) ? a.ZP.getEmbeddedActivitiesForChannel(e) : a.i6,
                    c = (0, S.lm)(r) ? a.ZP.getEmbeddedActivitiesForChannel(r) : a.i6,
                    u = (0, S.lm)(n) ? a.ZP.getSelfEmbeddedActivityForLocation(n) : null;
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
                if ((0, S.lm)(i)) {
                    let t = e.voiceChannelActivities.find((e) => e.userIds.has(l)),
                        r = c.find((e) => e.userIds.has(l));
                    (e.voiceChannelActivities.length < c.length && (0, S.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === r && (0, S.lm)(t) && (n = 'activity_end'), void 0 === t && (0, S.lm)(r) && r.userIds.size > 1 && (n = 'activity_user_join'), (0, S.lm)(r) && (0, S.lm)(t) && (r.userIds.size > t.userIds.size && (n = 'activity_user_join'), r.userIds.size < t.userIds.size && (n = 'activity_user_left')));
                }
                if (!u) {
                    e.connectedChannelActivities.length < o.length && e.channelActivities.length < a.length && (n = 'activity_launch');
                    let t = e.userConnectedActivity;
                    (null == s && (0, S.lm)(t) && (n = 'activity_end'), (0, S.lm)(s) && (0, S.lm)(t) && (s.userIds.size > t.userIds.size && (n = 'activity_user_join'), s.userIds.size < t.userIds.size && (n = 'activity_user_left')));
                }
                return (null == n && (null != e.connectedActivityLocation || null != r) && (null == e.connectedActivityLocation && null != r ? (n = 'activity_launch') : null != e.connectedActivityLocation && null == r ? (n = 'activity_end') : null != s && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < s.userIds.size ? (n = 'activity_user_join') : e.userConnectedActivity.userIds.size > s.userIds.size && (n = 'activity_user_leave'))), n);
            }
        ),
        null
    );
}
function U() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(P, {}), (0, r.jsx)(j, {}), (0, r.jsx)(A, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(w, {}), (0, r.jsx)(R, {}), (0, r.jsx)(k, {}), (0, r.jsx)(D, {}), (0, r.jsx)(M, {}), (0, r.jsx)(x, {}), (0, r.jsx)(L, {})]
    });
}
