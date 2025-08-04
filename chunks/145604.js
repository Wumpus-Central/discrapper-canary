(n.d(t, { Z: () => $ }), n(583741), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(224706),
    o = n(593472),
    s = n(603113),
    c = n(367907),
    u = n(731429),
    d = n(188471),
    p = n(176881),
    h = n(318885),
    f = n(358221),
    g = n(710845),
    m = n(581567),
    b = n(594190),
    _ = n(38618),
    O = n(501640),
    E = n(924301),
    y = n(734307),
    v = n(355298),
    I = n(454991),
    C = n(837268),
    S = n(32300),
    N = n(371651),
    T = n(829907),
    P = n(509003),
    j = n(427679),
    A = n(695346),
    Z = n(592125),
    x = n(77498),
    w = n(271383),
    L = n(430824),
    R = n(131951),
    D = n(375954),
    k = n(19780),
    M = n(944486),
    U = n(914010),
    G = n(885110),
    V = n(9156),
    H = n(594174),
    B = n(774343),
    F = n(974042),
    z = n(237997),
    W = n(626135),
    Y = n(630388),
    K = n(823379),
    q = n(981631);
function Q(e, t, n) {
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Q(e, t, n[t]);
            }));
    }
    return e;
}
class J extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, s;
        let { voiceChannelId: u, voiceChannelGuildId: p, voiceChannelType: _, voiceChannelBitrate: O, videoEnabled: y, isScreenSharing: v, runningGame: w, runningGamePid: R, selectedChannelId: M, selectedGuildId: U, connected: V } = this.props;
        if (e.voiceChannelId !== u && null != e.voiceChannelId) {
            let t = b.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                r = j.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = E.ZP.getActiveEventByChannel(e.voiceChannelId);
            W.default.track(
                q.rMx.LEAVE_VOICE_CHANNEL,
                X(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: k.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: k.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: k.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id
                    },
                    (0, c.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    k.Z.getVoiceStateStats(),
                    f.Z.getSelectedParticipantStats(e.voiceChannelId)
                )
            );
        }
        if (e.voiceChannelId !== u && null != u) {
            let e = b.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = j.Z.getStageInstanceByChannel(u),
                r = E.ZP.getActiveEventByChannel(u);
            ((0, c.yw)(q.rMx.CHANNEL_OPENED, X({}, (0, c.$H)(u))), (0, d.a)(q.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: u }));
            let i = null,
                l = z.default.getFocusedPID();
            (null != l && N.default.getOverlayMethod(l) !== C.gl.Disabled && (z.default.isInstanceLocked() ? (i = q.ADE.OVERLAY_LOCKED_ACTIVATED) : z.default.isInstanceLocked() || (i = z.default.isPinned(q.Odu.TEXT) ? q.ADE.OVERLAY_UNLOCKED_PINNED : q.ADE.OVERLAY_UNLOCKED)),
                W.default.track(
                    q.rMx.JOIN_VOICE_CHANNEL,
                    X(
                        {
                            location: i,
                            channel_id: u,
                            channel_type: _,
                            channel_bitrate: O,
                            guild_id: p,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: k.Z.getWasMoved()
                        },
                        (0, c.oG)(p, u),
                        (0, c.kO)(p, u, y)
                    )
                ));
        }
        let H = null != w && null != w.distributor && null != w.sku && null != e.runningGame && e.runningGame.distributor === w.distributor && w.sku === e.runningGame.sku,
            B = null != e.runningGame && null != w && e.runningGame.isLauncher !== w.isLauncher;
        if (e.runningGame !== w && null != w && !w.isLauncher && (!H || B)) {
            let e = x.Z.getGameByName(w.name),
                s = b.ZP.getOverrideForGame(w),
                c = L.Z.getGuildIds(),
                d = A.SE.getSetting(),
                h = c.filter((e) => !d.includes(e)).slice(0, 200),
                f = null;
            f = null != s ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let E = N.default.getTrackedGameByPid(w.pid),
                y = (0, b.b6)(w),
                v = {
                    enabledOOP: null != (t = null == E ? void 0 : E.oopEnabled) ? t : y.enabledOOP,
                    enabledLegacy: null != (n = null == E ? void 0 : E.legacyEnabled) ? n : y.enabledLegacy,
                    overlayMethod: null != (r = null == E ? void 0 : E.overlayMethod) ? r : y.overlayMethod,
                    source: null != (i = null == E ? void 0 : E.source) ? i : y.source
                },
                j = null != (l = N.default.getOverlayMethod(w.pid)) ? l : v.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, T.hj)(w.pid),
                        { gameName: r, gameId: i, exe: l, distributor: a } = (0, m.G8)(w),
                        s = (0, S.NW)('ChatAutoAnalytics', !1),
                        c = v.enabledLegacy || (s && v.enabledOOP),
                        d = I.v.legacyEnabled || (s && I.v.oopEnabled),
                        g = v.source;
                    (W.default.track(q.rMx.LAUNCH_GAME, {
                        game: r,
                        game_id: i,
                        verified: null != e && (0, m.vp)(l, null == e ? void 0 : e.executables),
                        elevated: w.elevated,
                        is_launcher: null != (t = null == w ? void 0 : w.isLauncher) && t,
                        game_platform: q.M7m.DESKTOP,
                        detection_method: f,
                        distributor: a,
                        is_overlay_enabled: d,
                        is_overlay_game_enabled: c,
                        is_overlay_game_source: g,
                        fullscreen_type: null != n ? o.Jx[n] : o.Jx.UNKNOWN.toString(),
                        overlay_method: C.gl[j],
                        activity_status_enabled: A.G6.getSetting(),
                        activity_status_shared_guilds: h,
                        current_user_status: G.Z.getStatus(),
                        game_detection_enabled: (0, b.ik)(w),
                        executable_path: l,
                        voice_channel_id: u,
                        voice_channel_type: _,
                        voice_channel_bitrate: O,
                        voice_channel_guild_id: p,
                        distributor_game_id: w.sku,
                        hidden_by_distributor: w.hidden,
                        game_metadata: (0, P.sD)(w)
                    }),
                        null != l && b.ZP.addExecutableTrackedByAnalytics(l));
                }, 10000),
                null != w.name && null != R && x.Z.shouldReport(w.name))
            ) {
                let e = w.name;
                a.Z.identifyGame(R, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new g.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== y || e.isScreenSharing !== v) && null != u) {
            let e = 'none',
                t = [v ? 'screen' : null, y ? 'camera' : null].filter(K.lm),
                n = null;
            (v ? ((e = 'screen'), (n = (0, h.t)())) : y && (e = 'camera'),
                W.default.track(
                    q.rMx.VIDEO_INPUT_TOGGLED,
                    X(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                            enabled_inputs: t,
                            preview_enabled: A.qF.getSetting()
                        },
                        n,
                        this.getGameMetadata(),
                        (0, c.AB)(u)
                    )
                ));
        }
        if (V && null != M && (!e.connected || M !== e.selectedChannelId || U !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = Z.Z.getChannel(t),
                r = L.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = D.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, Y.yE)(e.flags, q.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? void 0 : t.guild_id) === '667560445975986187';
                        });
                W.default.track(
                    q.rMx.ACK_COMMUNITY_MESSAGES,
                    X(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id: null == i || null == (s = i.messageReference) ? void 0 : s.message_id,
                            messages_loaded: e.hasFetched
                        },
                        (0, c.v_)(n),
                        (0, c.hH)(r.id)
                    )
                );
            }
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
        (super(...e), Q(this, 'isMessageRequestsInitialized', !1));
    }
}
function $() {
    let [e, t] = (0, l.Wu)([M.Z], () => [M.Z.getVoiceChannelId(), M.Z.getChannelId()], []),
        n = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t), [t]),
        a = (0, l.e7)([f.Z], () => (null == n ? void 0 : n.id) != null && f.Z.getChatOpen(n.id), [n]),
        o = null == n ? void 0 : n.nsfw,
        h = (0, l.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
        g = (0, l.e7)([U.Z], () => U.Z.getGuildId(), []),
        m = (0, l.e7)([L.Z], () => L.Z.getGuild(g), [g]),
        E = (0, l.e7)([H.default], () => H.default.getCurrentUser(), []),
        I = (0, l.e7)(
            [w.ZP],
            () => {
                var e, t;
                return null != E && null != g && null != (t = null == (e = w.ZP.getMember(g, E.id)) ? void 0 : e.isPending) && t;
            },
            [E, g]
        ),
        C = (0, l.e7)([F.ZP], () => F.ZP.getState().section, []),
        S = (0, l.e7)([B.Z], () => B.Z.getHomeLink(), []),
        N = (0, l.e7)([_.Z], () => _.Z.isConnected(), []),
        [T, P] = (0, l.Wu)([R.Z], () => [R.Z.isVideoEnabled(), R.Z.isScreenSharing()], []),
        j = (0, l.e7)([G.Z], () => G.Z.getPrimaryActivity(), []),
        A = (0, l.e7)([b.ZP], () => b.ZP.getCurrentGameForAnalytics(), []),
        x = (0, O.Z)(g),
        D = (0, l.e7)([v.Z], () => v.Z.getMessageRequestsCount(), []),
        k = {
            selectedChannelId: t,
            isNSFWChannel: o,
            selectedGuildId: g,
            friendsTabSection: C,
            homeLink: S,
            connected: N,
            videoEnabled: T,
            isScreenSharing: P,
            voiceChannelId: null == h ? void 0 : h.id,
            voiceChannelGuildId: null == h ? void 0 : h.getGuildId(),
            voiceChannelType: null == h ? void 0 : h.type,
            voiceChannelBitrate: null == h ? void 0 : h.bitrate,
            runningGame: A,
            runningGamePid: null != A ? A.pid : null,
            gamePlatform: (0, s.Z)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != A ? A.exeName : null,
            hasPreviewEnabled: null == m ? void 0 : m.features.has(q.oNc.PREVIEW_ENABLED),
            isMemberPending: I,
            postableChannelCount: x,
            isTextInVoice: a,
            numMessageRequests: D
        },
        z = i.useRef(k);
    i.useEffect(() => {
        z.current = k;
    }, [k]);
    let { connected: Y, friendsTabSection: K, homeLink: Q, isMemberPending: $, selectedChannelId: ee, selectedGuildId: et } = k;
    (i.useEffect(() => {
        if (Y && null != ee) {
            let e = (0, u.K)(Z.Z.getChannel(ee), !0);
            ((0, c.yw)(q.rMx.CHANNEL_OPENED, X({}, e, (0, c.$H)(ee))), (0, d.a)(q.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: ee }), z.current.isTextInVoice && (0, c.yw)(q.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: z.current.isNSFWChannel }));
        }
    }, [Y, ee]),
        i.useEffect(() => {
            Y && null == et && Q === q.Z5c.FRIENDS && (0, p.Z)({ tab_opened: K });
        }, [Y, K, Q, et]),
        i.useEffect(() => {
            if (Y && null != et) {
                var e, t, n, r;
                let i =
                    ((n = X(
                        {},
                        $
                            ? {
                                  is_pending: $,
                                  preview_enabled: z.current.hasPreviewEnabled
                              }
                            : {}
                    )),
                    (r = r =
                        {
                            postable_channels: z.current.postableChannelCount,
                            premium_progress_bar_enabled: null != (t = null == (e = L.Z.getGuild(U.Z.getGuildId())) ? void 0 : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !V.ZP.isOptInEnabled(et),
                            num_recent_channels: y.Z.recentsChannelCount(et)
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n);
                ((0, c.yw)(q.rMx.GUILD_VIEWED, i), (0, d.a)(q.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: et }));
            }
        }, [Y, et, $]));
    let en = i.useRef(!1);
    return (
        i.useEffect(() => {
            Y && null == et && Q === q.Z5c.MESSAGE_REQUESTS && !en.current && ((en.current = !0), W.default.track(q.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: z.current.numMessageRequests }));
        }, [Y, et, Q]),
        (0, r.jsx)(J, X({}, k))
    );
}
