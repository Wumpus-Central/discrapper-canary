n.d(t, { Z: () => J }), n(583741), n(997841), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(224706),
    o = n(615287),
    s = n(593472),
    c = n(603113),
    u = n(367907),
    d = n(731429),
    p = n(188471),
    h = n(176881),
    f = n(318885),
    g = n(358221),
    m = n(710845),
    b = n(581567),
    _ = n(594190),
    E = n(38618),
    O = n(501640),
    N = n(924301),
    y = n(734307),
    I = n(355298),
    v = n(454991),
    C = n(32300),
    S = n(371651),
    T = n(829907),
    P = n(427679),
    j = n(695346),
    A = n(592125),
    Z = n(77498),
    x = n(271383),
    L = n(430824),
    w = n(131951),
    R = n(375954),
    D = n(19780),
    k = n(944486),
    M = n(914010),
    U = n(885110),
    G = n(9156),
    W = n(594174),
    V = n(774343),
    B = n(974042),
    H = n(237997),
    F = n(626135),
    z = n(630388),
    Y = n(823379),
    K = n(981631);
function q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                q(e, t, n[t]);
            });
    }
    return e;
}
class X extends i.PureComponent {
    componentDidMount() {
        let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: r } = this.props;
        t && null != e && ((0, u.yw)(K.rMx.CHANNEL_OPENED, Q({}, (0, u.$H)(e))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }), r && (0, u.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
    }
    componentDidUpdate(e) {
        var t, n, r, i, l, c;
        let { voiceChannelId: E, voiceChannelGuildId: O, voiceChannelType: I, voiceChannelBitrate: x, videoEnabled: w, isScreenSharing: k, runningGame: W, runningGamePid: V, selectedChannelId: B, selectedGuildId: q, connected: X, homeLink: J, friendsTabSection: $, isNSFWChannel: ee, isMemberPending: et, hasPreviewEnabled: en, postableChannelCount: er, isTextInVoice: ei, numMessageRequests: el } = this.props;
        if (e.voiceChannelId !== E && null != e.voiceChannelId) {
            let t = _.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                r = P.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = N.ZP.getActiveEventByChannel(e.voiceChannelId);
            F.default.track(
                K.rMx.LEAVE_VOICE_CHANNEL,
                Q(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: D.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: D.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: D.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id
                    },
                    (0, u.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    D.Z.getVoiceStateStats(),
                    g.Z.getSelectedParticipantStats(e.voiceChannelId)
                )
            );
        }
        if (e.voiceChannelId !== E && null != E) {
            let e = _.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = P.Z.getStageInstanceByChannel(E),
                r = N.ZP.getActiveEventByChannel(E);
            (0, u.yw)(K.rMx.CHANNEL_OPENED, Q({}, (0, u.$H)(E))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: E });
            let i = null,
                l = H.default.getFocusedPID();
            null != l && S.default.getOverlayMethod(l) !== o.gl.Disabled && (H.default.isInstanceLocked() ? (i = K.ADE.OVERLAY_LOCKED_ACTIVATED) : H.default.isInstanceLocked() || (i = H.default.isPinned(K.Odu.TEXT) ? K.ADE.OVERLAY_UNLOCKED_PINNED : K.ADE.OVERLAY_UNLOCKED)),
                F.default.track(
                    K.rMx.JOIN_VOICE_CHANNEL,
                    Q(
                        {
                            location: i,
                            channel_id: E,
                            channel_type: I,
                            channel_bitrate: x,
                            guild_id: O,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id
                        },
                        (0, u.oG)(O, E),
                        (0, u.kO)(O, E, w)
                    )
                );
        }
        if (e.runningGame !== W && null != W && !W.isLauncher) {
            let e = Z.Z.getGameByName(W.name),
                n = _.ZP.getOverrideForGame(W),
                r = L.Z.getGuildIds(),
                i = j.SE.getSetting(),
                l = r.filter((e) => !i.includes(e)).slice(0, 200),
                c = null;
            c = null != n ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let u = (0, _.b6)(W),
                d = null != (t = S.default.getOverlayMethod(W.pid)) ? t : u.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, T.hj)(W.pid),
                        { gameName: r, gameId: i, exe: a, distributor: p } = (0, b.G8)(W),
                        h = (0, C.NW)('ChatAutoAnalytics', !1),
                        f = u.enabledLegacy || (h && u.enabledOOP),
                        g = v.v.legacyEnabled || (h && v.v.oopEnabled),
                        m = u.source;
                    F.default.track(K.rMx.LAUNCH_GAME, {
                        game: r,
                        game_id: i,
                        verified: null != e && (0, b.vp)(a, null == e ? void 0 : e.executables),
                        elevated: W.elevated,
                        is_launcher: null != (t = null == W ? void 0 : W.isLauncher) && t,
                        game_platform: K.M7m.DESKTOP,
                        detection_method: c,
                        distributor: p,
                        is_overlay_enabled: g,
                        is_overlay_game_enabled: f,
                        is_overlay_game_source: m,
                        fullscreen_type: null != n ? s.Jx[n] : s.Jx.UNKNOWN.toString(),
                        overlay_method: o.gl[d],
                        activity_status_enabled: j.G6.getSetting(),
                        activity_status_shared_guilds: l,
                        current_user_status: U.Z.getStatus(),
                        game_detection_enabled: (0, _.ik)(W),
                        executable_path: a,
                        voice_channel_id: E,
                        voice_channel_type: I,
                        voice_channel_bitrate: x,
                        voice_channel_guild_id: O
                    }),
                        null != a && _.ZP.addExecutableTrackedByAnalytics(a);
                }, 10000),
                null != W.name && null != V && Z.Z.shouldReport(W.name))
            ) {
                let e = W.name;
                a.Z.identifyGame(V, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new m.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== w || e.isScreenSharing !== k) && null != E) {
            let e = 'none',
                t = [k ? 'screen' : null, w ? 'camera' : null].filter(Y.lm),
                n = null;
            k ? ((e = 'screen'), (n = (0, f.t)())) : w && (e = 'camera'),
                F.default.track(
                    K.rMx.VIDEO_INPUT_TOGGLED,
                    Q(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                            enabled_inputs: t,
                            preview_enabled: j.qF.getSetting()
                        },
                        n,
                        this.getGameMetadata(),
                        (0, u.AB)(E)
                    )
                );
        }
        if (X && null != q && (q !== e.selectedGuildId || !e.connected || (et && !e.isMemberPending))) {
            let e =
                ((l = Q(
                    {},
                    et
                        ? {
                              is_pending: et,
                              preview_enabled: en
                          }
                        : {}
                )),
                (c = c =
                    {
                        postable_channels: er,
                        premium_progress_bar_enabled: null != (r = null == (n = L.Z.getGuild(M.Z.getGuildId())) ? void 0 : n.premiumProgressBarEnabled) && r,
                        viewing_all_channels: !G.ZP.isOptInEnabled(q),
                        num_recent_channels: y.Z.recentsChannelCount(q)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(c)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                      }),
                l);
            (0, u.yw)(K.rMx.GUILD_VIEWED, e), (0, p.a)(K.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: q });
        } else X && null == q && J === K.Z5c.FRIENDS && (!e.connected || $ !== e.friendsTabSection || J !== e.homeLink) ? (0, h.Z)({ tab_opened: $ }) : !X || null != q || J !== K.Z5c.MESSAGE_REQUESTS || (e.connected && J === e.homeLink) || this.isMessageRequestsInitialized || ((this.isMessageRequestsInitialized = !0), F.default.track(K.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: el }));
        if (X && null != B && (!e.connected || B !== e.selectedChannelId || q !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = A.Z.getChannel(t),
                r = L.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = R.Z.getMessages(t),
                    l = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, z.yE)(e.flags, K.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? void 0 : t.guild_id) === '667560445975986187';
                        });
                F.default.track(
                    K.rMx.ACK_COMMUNITY_MESSAGES,
                    Q(
                        {
                            last_message_id: null == l ? void 0 : l.id,
                            last_message_reference_message_id: null == l || null == (i = l.messageReference) ? void 0 : i.message_id,
                            messages_loaded: e.hasFetched
                        },
                        (0, u.v_)(n),
                        (0, u.hH)(r.id)
                    )
                );
            }
            let l = (0, d.K)(A.Z.getChannel(B), !0);
            (0, u.yw)(K.rMx.CHANNEL_OPENED, Q({}, l, (0, u.$H)(B))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: B }), ei && (0, u.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: ee });
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
        super(...e), q(this, 'isMessageRequestsInitialized', !1);
    }
}
function J() {
    let [e, t] = (0, l.Wu)([k.Z], () => [k.Z.getVoiceChannelId(), k.Z.getChannelId()], []),
        n = (0, l.e7)([A.Z], () => A.Z.getChannel(t), [t]),
        i = (0, l.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        o = (0, l.e7)([A.Z], () => A.Z.getChannel(e), [e]),
        s = (0, l.e7)([M.Z], () => M.Z.getGuildId(), []),
        u = (0, l.e7)([L.Z], () => L.Z.getGuild(s), [s]),
        d = (0, l.e7)([W.default], () => W.default.getCurrentUser(), []),
        p = (0, l.e7)(
            [x.ZP],
            () => {
                var e, t;
                return null != d && null != s && null != (t = null == (e = x.ZP.getMember(s, d.id)) ? void 0 : e.isPending) && t;
            },
            [d, s]
        ),
        h = (0, l.e7)([B.ZP], () => B.ZP.getState().section, []),
        f = (0, l.e7)([V.Z], () => V.Z.getHomeLink(), []),
        m = (0, l.e7)([E.Z], () => E.Z.isConnected(), []),
        [b, N] = (0, l.Wu)([w.Z], () => [w.Z.isVideoEnabled(), w.Z.isScreenSharing()], []),
        y = (0, l.e7)([U.Z], () => U.Z.getPrimaryActivity(), []),
        v = (0, l.e7)([_.ZP], () => _.ZP.getCurrentGameForAnalytics(), []),
        C = (0, O.Z)(s),
        S = (0, l.e7)([I.Z], () => I.Z.getMessageRequestsCount(), []),
        T = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: h,
            homeLink: f,
            connected: m,
            videoEnabled: b,
            isScreenSharing: N,
            voiceChannelId: null == o ? void 0 : o.id,
            voiceChannelGuildId: null == o ? void 0 : o.getGuildId(),
            voiceChannelType: null == o ? void 0 : o.type,
            voiceChannelBitrate: null == o ? void 0 : o.bitrate,
            runningGame: v,
            runningGamePid: null != v ? v.pid : null,
            gamePlatform: (0, c.Z)(y),
            gameName: null != y ? y.name : null,
            gameId: null != y ? y.application_id : null,
            gameExeName: null != v ? v.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(K.oNc.PREVIEW_ENABLED),
            isMemberPending: p,
            postableChannelCount: C,
            isTextInVoice: i,
            numMessageRequests: S
        };
    return (0, r.jsx)(X, Q({}, T));
}
