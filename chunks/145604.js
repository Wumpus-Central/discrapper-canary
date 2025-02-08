n.d(t, { Z: () => X }), n(789020), n(47120);
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
    N = n(924301),
    v = n(734307),
    T = n(355298),
    S = n(454991),
    Z = n(32300),
    A = n(371651),
    x = n(829907),
    b = n(427679),
    L = n(695346),
    y = n(592125),
    P = n(77498),
    O = n(271383),
    R = n(430824),
    j = n(131951),
    D = n(375954),
    w = n(19780),
    M = n(944486),
    k = n(914010),
    U = n(885110),
    G = n(9156),
    B = n(594174),
    V = n(774343),
    H = n(974042),
    F = n(237997),
    z = n(626135),
    W = n(630388),
    Y = n(823379),
    K = n(981631);
class q extends l.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
        t && null != e && ((0, d.yw)(K.rMx.CHANNEL_OPENED, { ...(0, d.$H)(e) }), (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), i && (0, d.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let { voiceChannelId: r, voiceChannelGuildId: c, voiceChannelType: I, voiceChannelBitrate: C, videoEnabled: T, isScreenSharing: O, runningGame: j, runningGamePid: M, selectedChannelId: B, selectedGuildId: V, connected: H, homeLink: q, friendsTabSection: X, isNSFWChannel: Q, isMemberPending: J, hasPreviewEnabled: $, postableChannelCount: ee, isTextInVoice: et, numMessageRequests: en } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
            let t = E.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                i = b.Z.getStageInstanceByChannel(e.voiceChannelId),
                l = N.ZP.getActiveEventByChannel(e.voiceChannelId);
            z.default.track(K.rMx.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: w.Z.getRTCConnectionId(),
                game_name: n,
                duration: w.Z.getDuration(),
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: w.Z.getMediaSessionId(),
                stage_instance_id: null == i ? void 0 : i.id,
                guild_scheduled_event_id: null == l ? void 0 : l.id,
                ...(0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...w.Z.getVoiceStateStats(),
                ...g.Z.getSelectedParticipantStats(e.voiceChannelId)
            });
        }
        if (e.voiceChannelId !== r && null != r) {
            let e = E.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = b.Z.getStageInstanceByChannel(r),
                i = N.ZP.getActiveEventByChannel(r);
            (0, d.yw)(K.rMx.CHANNEL_OPENED, { ...(0, d.$H)(r) }), (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r });
            let l = null,
                a = F.Z.getFocusedPID();
            null == a || A.Z.getOverlayMethod(a) === s.gl.Disabled || (F.Z.isInstanceLocked() ? (l = K.ADE.OVERLAY_LOCKED_ACTIVATED) : F.Z.isInstanceLocked() || (l = F.Z.isPinned(K.Odu.TEXT) ? K.ADE.OVERLAY_UNLOCKED_PINNED : K.ADE.OVERLAY_UNLOCKED)),
                z.default.track(K.rMx.JOIN_VOICE_CHANNEL, {
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
        if (e.runningGame !== j && null != j && !j.isLauncher) {
            let e = P.Z.getGameByName(j.name),
                n = E.ZP.getOverrideForGame(j),
                i = R.Z.getGuildIds(),
                l = L.SE.getSetting(),
                d = i.filter((e) => !l.includes(e)).slice(0, 200),
                u = null;
            u = null != n ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let h = (0, E.b6)(j),
                m = null !== (t = A.Z.getOverlayMethod(j.pid)) && void 0 !== t ? t : h.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, x.hj)(j.pid),
                        { gameName: i, gameId: l, exe: a, distributor: p } = (0, f.G8)(j),
                        g = (0, Z.NW)('ChatAutoAnalytics', !1),
                        _ = h.enabledLegacy || (g && h.enabledOOP),
                        N = S.v.legacyEnabled || (g && S.v.oopEnabled),
                        v = h.source;
                    z.default.track(K.rMx.LAUNCH_GAME, {
                        game: i,
                        game_id: l,
                        verified: null != e && (0, f.vp)(a, null == e ? void 0 : e.executables),
                        elevated: j.elevated,
                        is_launcher: null !== (t = null == j ? void 0 : j.isLauncher) && void 0 !== t && t,
                        game_platform: K.M7m.DESKTOP,
                        detection_method: u,
                        distributor: p,
                        is_overlay_enabled: N,
                        is_overlay_game_enabled: _,
                        is_overlay_game_source: v,
                        fullscreen_type: null != n ? o.Jx[n] : o.Jx.UNKNOWN.toString(),
                        overlay_method: s.gl[m],
                        activity_status_enabled: L.G6.getSetting(),
                        activity_status_shared_guilds: d,
                        current_user_status: U.Z.getStatus(),
                        game_detection_enabled: (0, E.ik)(j),
                        executable_path: a,
                        voice_channel_id: r,
                        voice_channel_type: I,
                        voice_channel_bitrate: C,
                        voice_channel_guild_id: c
                    }),
                        null != a && E.ZP.addExecutableTrackedByAnalytics(a);
                }, 10000),
                null != j.name && null != M && P.Z.shouldReport(j.name))
            ) {
                let e = j.name;
                a.Z.identifyGame(M, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new _.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== T || e.isScreenSharing !== O) && null != r) {
            let e = 'none',
                t = [O ? 'screen' : null, T ? 'camera' : null].filter(Y.lm),
                n = null;
            O ? ((e = 'screen'), (n = (0, p.t)())) : T && (e = 'camera'),
                z.default.track(K.rMx.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                    enabled_inputs: t,
                    preview_enabled: L.qF.getSetting(),
                    ...n,
                    ...this.getGameMetadata(),
                    ...(0, d.AB)(r)
                });
        }
        if (H && null != V && (V !== e.selectedGuildId || !e.connected || (J && !e.isMemberPending))) {
            let e = {
                ...(J
                    ? {
                          is_pending: J,
                          preview_enabled: $
                      }
                    : {}),
                postable_channels: ee,
                premium_progress_bar_enabled: null !== (i = null === (n = R.Z.getGuild(k.Z.getGuildId())) || void 0 === n ? void 0 : n.premiumProgressBarEnabled) && void 0 !== i && i,
                viewing_all_channels: !G.ZP.isOptInEnabled(V),
                num_recent_channels: v.Z.recentsChannelCount(V)
            };
            (0, d.yw)(K.rMx.GUILD_VIEWED, e), (0, h.a)(K.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: V });
        } else H && null == V && q === K.Z5c.FRIENDS && (!e.connected || X !== e.friendsTabSection || q !== e.homeLink) ? (0, m.Z)({ tab_opened: X }) : !H || null != V || q !== K.Z5c.MESSAGE_REQUESTS || (e.connected && q === e.homeLink) || this.isMessageRequestsInitialized || ((this.isMessageRequestsInitialized = !0), z.default.track(K.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: en }));
        if (H && null != B && (!e.connected || B !== e.selectedChannelId || V !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = y.Z.getChannel(t),
                i = R.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = D.Z.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, W.yE)(e.flags, K.iLy.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187';
                        });
                z.default.track(K.rMx.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: null == r ? void 0 : r.id,
                    last_message_reference_message_id: null == r ? void 0 : null === (l = r.messageReference) || void 0 === l ? void 0 : l.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, d.v_)(n),
                    ...(0, d.hH)(i.id)
                });
            }
            let r = (0, u.K)(y.Z.getChannel(B), !0);
            (0, d.yw)(K.rMx.CHANNEL_OPENED, {
                ...r,
                ...(0, d.$H)(B)
            }),
                (0, h.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: B }),
                et && (0, d.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: Q });
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
function X() {
    let [e, t] = (0, r.Wu)([M.Z], () => [M.Z.getVoiceChannelId(), M.Z.getChannelId()], []),
        n = (0, r.e7)([y.Z], () => y.Z.getChannel(t), [t]),
        l = (0, r.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, r.e7)([y.Z], () => y.Z.getChannel(e), [e]),
        o = (0, r.e7)([k.Z], () => k.Z.getGuildId(), []),
        d = (0, r.e7)([R.Z], () => R.Z.getGuild(o), [o]),
        u = (0, r.e7)([B.default], () => B.default.getCurrentUser(), []),
        h = (0, r.e7)(
            [O.ZP],
            () => {
                var e, t;
                return null != u && null != o && null !== (t = null === (e = O.ZP.getMember(o, u.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
            },
            [u, o]
        ),
        m = (0, r.e7)([H.ZP], () => H.ZP.getState().section, []),
        p = (0, r.e7)([V.Z], () => V.Z.getHomeLink(), []),
        _ = (0, r.e7)([I.Z], () => I.Z.isConnected(), []),
        [f, N] = (0, r.Wu)([j.Z], () => [j.Z.isVideoEnabled(), j.Z.isScreenSharing()], []),
        v = (0, r.e7)([U.Z], () => U.Z.getPrimaryActivity(), []),
        S = (0, r.e7)([E.ZP], () => E.ZP.getCurrentGameForAnalytics(), []),
        Z = (0, C.Z)(o),
        A = (0, r.e7)([T.Z], () => T.Z.getMessageRequestsCount(), []),
        x = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: o,
            friendsTabSection: m,
            homeLink: p,
            connected: _,
            videoEnabled: f,
            isScreenSharing: N,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: S,
            runningGamePid: null != S ? S.pid : null,
            gamePlatform: (0, c.Z)(v),
            gameName: null != v ? v.name : null,
            gameId: null != v ? v.application_id : null,
            gameExeName: null != S ? S.exeName : null,
            hasPreviewEnabled: null == d ? void 0 : d.features.has(K.oNc.PREVIEW_ENABLED),
            isMemberPending: h,
            postableChannelCount: Z,
            isTextInVoice: l,
            numMessageRequests: A
        };
    return (0, i.jsx)(q, { ...x });
}
