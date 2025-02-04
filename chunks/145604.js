n.d(t, { Z: () => q }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(224706),
    s = n(615287),
    o = n(593472),
    c = n(603113),
    d = n(367907),
    u = n(731429),
    h = n(188471),
    m = n(176881),
    p = n(318885),
    g = n(358221),
    _ = n(710845),
    f = n(581567),
    E = n(594190),
    I = n(38618),
    C = n(501640),
    v = n(924301),
    N = n(734307),
    T = n(355298),
    S = n(371651),
    Z = n(829907),
    x = n(427679),
    A = n(695346),
    b = n(592125),
    L = n(77498),
    y = n(271383),
    P = n(430824),
    O = n(131951),
    R = n(375954),
    j = n(19780),
    D = n(944486),
    w = n(914010),
    M = n(885110),
    k = n(9156),
    U = n(594174),
    G = n(774343),
    B = n(974042),
    V = n(808506),
    H = n(237997),
    F = n(626135),
    z = n(630388),
    W = n(823379),
    K = n(981631);
class Y extends l.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
        t && null != e && ((0, d.yw)(K.rMx.CHANNEL_OPENED, { ...(0, d.$H)(e) }), (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), i && (0, d.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let { voiceChannelId: r, voiceChannelGuildId: c, voiceChannelType: I, voiceChannelBitrate: C, videoEnabled: T, isScreenSharing: y, runningGame: O, runningGamePid: D, selectedChannelId: U, selectedGuildId: G, connected: B, homeLink: Y, friendsTabSection: q, isNSFWChannel: X, isMemberPending: Q, hasPreviewEnabled: J, postableChannelCount: $, isTextInVoice: ee, numMessageRequests: et } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
            let t = E.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                i = x.Z.getStageInstanceByChannel(e.voiceChannelId),
                l = v.ZP.getActiveEventByChannel(e.voiceChannelId);
            F.default.track(K.rMx.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: j.Z.getRTCConnectionId(),
                game_name: n,
                duration: j.Z.getDuration(),
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: j.Z.getMediaSessionId(),
                stage_instance_id: null == i ? void 0 : i.id,
                guild_scheduled_event_id: null == l ? void 0 : l.id,
                ...(0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...j.Z.getVoiceStateStats(),
                ...g.Z.getSelectedParticipantStats(e.voiceChannelId)
            });
        }
        if (e.voiceChannelId !== r && null != r) {
            let e = E.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = x.Z.getStageInstanceByChannel(r),
                i = v.ZP.getActiveEventByChannel(r);
            (0, d.yw)(K.rMx.CHANNEL_OPENED, { ...(0, d.$H)(r) }), (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r });
            let l = null,
                a = H.Z.getFocusedPID();
            null == a || S.Z.getOverlayMethod(a) === s.gl.Disabled || (H.Z.isInstanceLocked() ? (l = K.ADE.OVERLAY_LOCKED_ACTIVATED) : H.Z.isInstanceLocked() || (l = H.Z.isPinned(K.Odu.TEXT) ? K.ADE.OVERLAY_UNLOCKED_PINNED : K.ADE.OVERLAY_UNLOCKED)),
                F.default.track(K.rMx.JOIN_VOICE_CHANNEL, {
                    location: l,
                    channel_id: r,
                    channel_type: I,
                    channel_bitrate: C,
                    guild_id: c,
                    game_name: t,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: null == n ? void 0 : n.id,
                    guild_scheduled_event_id: null == i ? void 0 : i.id,
                    ...(0, d.oG)(c, r),
                    ...(0, d.kO)(c, r, T)
                });
        }
        if (e.runningGame !== O && null != O && !O.isLauncher) {
            let e = L.Z.getGameByName(O.name),
                n = E.ZP.getOverrideForGame(O),
                i = P.Z.getGuildIds(),
                l = A.SE.getSetting(),
                d = i.filter((e) => !l.includes(e)).slice(0, 200),
                u = null;
            u = null != n ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let h = (0, E.b6)(O),
                m = S.Z.getTrackedGameByPid(O.pid),
                p = null !== (t = null == m ? void 0 : m.overlayMethod) && void 0 !== t ? t : h.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t, n, i;
                    let l = await (0, Z.hj)(O.pid),
                        { gameName: a, gameId: g, exe: _, distributor: v } = (0, f.G8)(O);
                    F.default.track(K.rMx.LAUNCH_GAME, {
                        game: a,
                        game_id: g,
                        verified: null != e && (0, f.vp)(_, null == e ? void 0 : e.executables),
                        elevated: O.elevated,
                        is_launcher: null !== (t = null == O ? void 0 : O.isLauncher) && void 0 !== t && t,
                        game_platform: K.M7m.DESKTOP,
                        detection_method: u,
                        distributor: v,
                        is_overlay_enabled: V.Z.enabled,
                        is_overlay_game_enabled: null !== (n = null == m ? void 0 : m.enabled) && void 0 !== n && n,
                        is_overlay_game_source: null !== (i = null == m ? void 0 : m.source) && void 0 !== i ? i : h.source,
                        fullscreen_type: null != l ? o.Jx[l] : o.Jx.UNKNOWN.toString(),
                        overlay_method: s.gl[p],
                        activity_status_enabled: A.G6.getSetting(),
                        activity_status_shared_guilds: d,
                        current_user_status: M.Z.getStatus(),
                        game_detection_enabled: (0, E.ik)(O),
                        executable_path: _,
                        voice_channel_id: r,
                        voice_channel_type: I,
                        voice_channel_bitrate: C,
                        voice_channel_guild_id: c
                    }),
                        null != _ && E.ZP.addExecutableTrackedByAnalytics(_);
                }, 10000),
                null != O.name && null != D && L.Z.shouldReport(O.name))
            ) {
                let e = O.name;
                a.Z.identifyGame(D, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new _.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== T || e.isScreenSharing !== y) && null != r) {
            let e = 'none',
                t = [y ? 'screen' : null, T ? 'camera' : null].filter(W.lm),
                n = null;
            y ? ((e = 'screen'), (n = (0, p.t)())) : T && (e = 'camera'),
                F.default.track(K.rMx.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                    enabled_inputs: t,
                    preview_enabled: A.qF.getSetting(),
                    ...n,
                    ...this.getGameMetadata(),
                    ...(0, d.AB)(r)
                });
        }
        if (B && null != G && (G !== e.selectedGuildId || !e.connected || (Q && !e.isMemberPending))) {
            let e = {
                ...(Q
                    ? {
                          is_pending: Q,
                          preview_enabled: J
                      }
                    : {}),
                postable_channels: $,
                premium_progress_bar_enabled: null !== (i = null === (n = P.Z.getGuild(w.Z.getGuildId())) || void 0 === n ? void 0 : n.premiumProgressBarEnabled) && void 0 !== i && i,
                viewing_all_channels: !k.ZP.isOptInEnabled(G),
                num_recent_channels: N.Z.recentsChannelCount(G)
            };
            (0, d.yw)(K.rMx.GUILD_VIEWED, e), (0, h.a)(K.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: G });
        } else B && null == G && Y === K.Z5c.FRIENDS && (!e.connected || q !== e.friendsTabSection || Y !== e.homeLink) ? (0, m.Z)({ tab_opened: q }) : !B || null != G || Y !== K.Z5c.MESSAGE_REQUESTS || (e.connected && Y === e.homeLink) || this.isMessageRequestsInitialized || ((this.isMessageRequestsInitialized = !0), F.default.track(K.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: et }));
        if (B && null != U && (!e.connected || U !== e.selectedChannelId || G !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = b.Z.getChannel(t),
                i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = R.Z.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, z.yE)(e.flags, K.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187';
                        });
                F.default.track(K.rMx.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: null == r ? void 0 : r.id,
                    last_message_reference_message_id: null == r ? void 0 : null === (l = r.messageReference) || void 0 === l ? void 0 : l.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, d.v_)(n),
                    ...(0, d.hH)(i.id)
                });
            }
            let r = (0, u.K)(b.Z.getChannel(U), !0);
            (0, d.yw)(K.rMx.CHANNEL_OPENED, {
                ...r,
                ...(0, d.$H)(U)
            }),
                (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: U }),
                ee && (0, d.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: X });
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId
        };
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = 'isMessageRequestsInitialized') in this
                ? Object.defineProperty(this, t, {
                      value: !1,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = !1);
    }
}
function q() {
    let [e, t] = (0, r.Wu)([D.Z], () => [D.Z.getVoiceChannelId(), D.Z.getChannelId()], []),
        n = (0, r.e7)([b.Z], () => b.Z.getChannel(t), [t]),
        l = (0, r.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, r.e7)([b.Z], () => b.Z.getChannel(e), [e]),
        o = (0, r.e7)([w.Z], () => w.Z.getGuildId(), []),
        d = (0, r.e7)([P.Z], () => P.Z.getGuild(o), [o]),
        u = (0, r.e7)([U.default], () => U.default.getCurrentUser(), []),
        h = (0, r.e7)(
            [y.ZP],
            () => {
                var e, t;
                return null != u && null != o && null !== (t = null === (e = y.ZP.getMember(o, u.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
            },
            [u, o]
        ),
        m = (0, r.e7)([B.ZP], () => B.ZP.getState().section, []),
        p = (0, r.e7)([G.Z], () => G.Z.getHomeLink(), []),
        _ = (0, r.e7)([I.Z], () => I.Z.isConnected(), []),
        [f, v] = (0, r.Wu)([O.Z], () => [O.Z.isVideoEnabled(), O.Z.isScreenSharing()], []),
        N = (0, r.e7)([M.Z], () => M.Z.getPrimaryActivity(), []),
        S = (0, r.e7)([E.ZP], () => E.ZP.getCurrentGameForAnalytics(), []),
        Z = (0, C.Z)(o),
        x = (0, r.e7)([T.Z], () => T.Z.getMessageRequestsCount(), []),
        A = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: o,
            friendsTabSection: m,
            homeLink: p,
            connected: _,
            videoEnabled: f,
            isScreenSharing: v,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: S,
            runningGamePid: null != S ? S.pid : null,
            gamePlatform: (0, c.Z)(N),
            gameName: null != N ? N.name : null,
            gameId: null != N ? N.application_id : null,
            gameExeName: null != S ? S.exeName : null,
            hasPreviewEnabled: null == d ? void 0 : d.features.has(K.oNc.PREVIEW_ENABLED),
            isMemberPending: h,
            postableChannelCount: Z,
            isTextInVoice: l,
            numMessageRequests: x
        };
    return (0, i.jsx)(Y, { ...A });
}
