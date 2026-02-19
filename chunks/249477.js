n.d(t, { A: () => el }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(665260),
    o = n(311907),
    d = n(544420),
    c = n(56562),
    u = n(77729),
    A = n(855511),
    h = n(58149),
    _ = n(332456),
    m = n(237774),
    p = n(973854),
    g = n(504982),
    E = n(815706),
    I = n(134047),
    f = n(313961),
    C = n(626584),
    T = n(953384),
    N = n(973522),
    S = n(15285),
    x = n(142120),
    v = n(442187),
    y = n(903223),
    b = n(698441),
    O = n(960755),
    L = n(380335),
    R = n(211753),
    P = n(41984),
    j = n(833551),
    D = n(515183),
    M = n(847521),
    w = n(446600),
    U = n(253932),
    G = n(734057),
    k = n(760751),
    V = n(696451),
    B = n(71393),
    H = n(430452),
    F = n(320501),
    Y = n(383501),
    W = n(309010),
    q = n(967198),
    z = n(461213),
    K = n(543465),
    $ = n(287809),
    Q = n(619921),
    X = n(595623),
    Z = n(256415),
    J = n(954571),
    ee = n(403362),
    et = n(652215),
    en = n(705751);
async function ei(e) {
    let {
            runningGame: t,
            game: n,
            detectionMethod: i,
            overlayStatus: r,
            overlayMethod: l,
            sharedGuildIds: a,
            voiceChannelId: s,
            voiceChannelType: o,
            voiceChannelBitrate: d,
            voiceChannelGuildId: A,
        } = e,
        h = await (0, D.E1)(t.pid),
        { gameName: _, gameId: m, exe: p, distributor: g, rawExePath: E } = (0, N.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        f = R.x.legacyEnabled || R.x.oopEnabled,
        C = r.source;
    J.default.track(et.HAw.LAUNCH_GAME, {
        game: _,
        game_id: m,
        verified: null != n && (0, N.PQ)(E, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: et.yTV.DESKTOP,
        detection_method: i,
        distributor: g,
        is_overlay_enabled: f,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != h ? c.aI[h] : c.aI.UNKNOWN.toString(),
        hardware_display_count: (await u.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: P.Ue[l] ?? (__OVERLAY__ ? P.Ue[P.Ue.Hook] : null),
        activity_status_enabled: U.tz.getSetting(),
        activity_status_shared_guilds: a,
        current_user_status: z.A.getStatus(),
        game_detection_enabled: (0, S.Xr)(t),
        executable_path: p,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: A,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, M.MT)(t),
        executable_fingerprint: t.executableFingerprint,
    }),
        null != p && S.Ay.addExecutableTrackedByAnalytics(p);
}
class er extends r.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = a().debounce(ei, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: r,
            videoEnabled: l,
            isScreenSharing: a,
            runningGame: o,
            runningGamePid: c,
            runningNonGame: u,
            selectedChannelId: A,
            selectedGuildId: _,
            connected: m,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = S.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = w.A.getStageInstanceByChannel(e.voiceChannelId),
                r = b.Ay.getActiveEventByChannel(e.voiceChannelId),
                l = Y.A.getLastRTCConnectionState();
            l?.channelId !== e.voiceChannelId && (l = null),
                J.default.track(et.HAw.LEAVE_VOICE_CHANNEL, {
                    channel_id: e.voiceChannelId,
                    channel_type: e.voiceChannelType,
                    channel_bitrate: e.voiceChannelBitrate,
                    guild_id: e.voiceChannelGuildId,
                    rtc_connection_id: l?.rtcConnectionId,
                    game_name: n,
                    duration: l?.duration,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    media_session_id: l?.mediaSessionId,
                    stage_instance_id: i?.id,
                    guild_scheduled_event_id: r?.id,
                    ...(0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...l?.voiceStateAnalytics?.getStats(),
                    ...f.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = S.Ay.getCurrentGameForAnalytics(),
                a = null != e ? e.name : "",
                s = w.A.getStageInstanceByChannel(t),
                o = b.Ay.getActiveEventByChannel(t);
            (0, h.zV)(et.HAw.CHANNEL_OPENED, { ...(0, h.qL)(t) }), (0, p.A)({ channelId: t });
            let d = null,
                c = Z.default.getFocusedPID();
            null != c &&
                j.default.getOverlayMethod(c) !== P.Ue.Disabled &&
                (Z.default.isInstanceLocked()
                    ? (d = et.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : Z.default.isInstanceLocked() ||
                      (d = Z.default.isPinned(et.uss.TEXT) ? et.Xmn.OVERLAY_UNLOCKED_PINNED : et.Xmn.OVERLAY_UNLOCKED)),
                J.default.track(et.HAw.JOIN_VOICE_CHANNEL, {
                    location: d,
                    channel_id: t,
                    channel_type: i,
                    channel_bitrate: r,
                    guild_id: n,
                    game_name: a,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: s?.id,
                    guild_scheduled_event_id: o?.id,
                    was_moved: Y.A.getWasMoved(),
                    join_voice_id: Y.A.getJoinVoiceId(),
                    ...(0, h.dL)(n, t),
                    ...(0, h.JK)(n, t, l),
                });
        }
        let g =
                o?.distributor === e.runningGame?.distributor &&
                o?.sku === e.runningGame?.sku &&
                o?.name === e.runningGame?.name,
            x = null != e.runningGame && null != o && e.runningGame.isLauncher !== o.isLauncher;
        if (e.runningGame !== o && null != o && !o.isLauncher && (!g || x)) {
            let { gameId: e } = (0, N.wH)(o),
                l = void 0 !== e ? k.A.getDetectableGame(e) : null,
                a = S.Ay.getOverrideForGame(o),
                s = B.A.getGuildIds(),
                u = U.JG.getSetting(),
                A = s.filter((e) => !u.includes(e)).slice(0, 200),
                h = null;
            h = null != a ? "custom_override" : null != l ? "verified_game" : "launcher";
            let _ = j.default.getTrackedGameByPid(o.pid),
                m = (0, S.hw)(o),
                p = {
                    enabledOOP: _?.oopEnabled ?? m.enabledOOP,
                    enabledLegacy: _?.legacyEnabled ?? m.enabledLegacy,
                    overlayMethod: _?.overlayMethod ?? m.overlayMethod,
                    source: _?.source ?? m.source,
                    reason: "ChatAutoAnalytics",
                },
                g = j.default.getOverlayMethod(o.pid) ?? p.overlayMethod;
            if (
                (setTimeout(() => {
                    (o.distributor === et.d3x.ROBLOX ? this.debouncedRobloxAnalytics : ei)({
                        runningGame: o,
                        game: l,
                        detectionMethod: h,
                        overlayStatus: p,
                        overlayMethod: g,
                        sharedGuildIds: A,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != o.name && null != c && k.A.shouldReport(o))
            ) {
                let e = o.name;
                d.A.identifyGame(c, e)
                    .then((e) => d.A.reportUnverifiedGame(e))
                    .catch((e) => new C.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== u && u?.id != null && e.runningNonGame?.id !== u.id) {
            let e = T.A.getById(u.id);
            null != e &&
                J.default.track(et.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: en.S7.NON_GAME_DETECTABLE,
                    elevated: u.elevated,
                    game_platform: et.yTV.DESKTOP,
                    distributor: u.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: z.A.getStatus(),
                    executable_path: (0, N.Ic)(u.exePath),
                    voice_channel_id: t,
                    voice_channel_type: i,
                    voice_channel_bitrate: r,
                    voice_channel_guild_id: n,
                    executable_fingerprint: u.executableFingerprint,
                });
        }
        if ((e.videoEnabled !== l || e.isScreenSharing !== a) && null != t) {
            let e = "none",
                n = [a ? "screen" : null, l ? "camera" : null].filter(ee.Vq),
                i = null;
            a ? ((e = "screen"), (i = (0, E.p)())) : l && (e = "camera"),
                J.default.track(et.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: U.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, h.QS)(t),
                });
        }
        if (m && null != A && (!e.connected || A !== e.selectedChannelId || _ !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = G.A.getChannel(t),
                i = B.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = F.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, s.Lt)(e.flags, et.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                J.default.track(et.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, h.dI)(n),
                    ...(0, h.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                I.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                J.default.track(et.HAw.TEXT_IN_VOICE_CLOSED, {
                    reason: "switched away",
                    channel_id: t,
                    guild_id: n?.getGuildId(),
                });
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId,
        };
    }
    render() {
        return null;
    }
}
function el() {
    let [e, t] = (0, o.yK)([W.A], () => [W.A.getVoiceChannelId(), W.A.getChannelId()], []),
        n = (0, o.bG)([G.A], () => G.A.getChannel(t), [t]),
        l = (0, o.bG)([f.A], () => n?.id != null && f.A.getChatOpen(n.id), [n]),
        a = n?.nsfw,
        s = (0, o.bG)([G.A], () => G.A.getChannel(e), [e]),
        d = (0, o.bG)([q.A], () => q.A.getGuildId(), []),
        c = (0, o.bG)([B.A], () => B.A.getGuild(d), [d]),
        u = (0, o.bG)([$.default], () => $.default.getCurrentUser(), []),
        E = (0, o.bG)([V.Ay], () => null != u && null != d && (V.Ay.getMember(d, u.id)?.isPending ?? !1), [u, d]),
        I = (0, o.bG)([X.Ay], () => X.Ay.getState().section, []),
        C = (0, o.bG)([Q.A], () => Q.A.getHomeLink(), []),
        T = (0, o.bG)([x.A], () => x.A.isConnected(), []),
        [N, b] = (0, o.yK)([H.Ay], () => [H.Ay.isVideoEnabled(), H.Ay.isScreenSharing()], []),
        R = (0, o.bG)([z.A], () => z.A.getPrimaryActivity(), []),
        { currentGame: P, currentNonGame: j } = (0, o.cf)(
            [S.Ay],
            () => ({
                currentGame: S.Ay.getCurrentGameForAnalytics(),
                currentNonGame: S.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        D = (0, v.A)(d),
        M = (0, o.bG)([L.A], () => L.A.getMessageRequestsCount(), []),
        w = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: d,
            friendsTabSection: I,
            homeLink: C,
            connected: T,
            videoEnabled: N,
            isScreenSharing: b,
            voiceChannelId: s?.id,
            voiceChannelGuildId: s?.getGuildId(),
            voiceChannelType: s?.type,
            voiceChannelBitrate: s?.bitrate,
            runningGame: P,
            runningGamePid: null != P ? P.pid : null,
            runningNonGame: j,
            gamePlatform: (0, A.A)(R),
            gameName: null != R ? R.name : null,
            gameId: null != R ? R.application_id : null,
            gameExeName: null != P ? P.exeName : null,
            hasPreviewEnabled: c?.features.has(et.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: E,
            postableChannelCount: D,
            isTextInVoice: l,
            numMessageRequests: M,
        };
    return (
        !(function (e) {
            let t = r.useRef(e);
            r.useEffect(() => {
                t.current = e;
            }, [e]);
            let {
                connected: n,
                friendsTabSection: i,
                homeLink: l,
                isMemberPending: a,
                selectedChannelId: s,
                selectedGuildId: o,
            } = e;
            r.useEffect(() => {
                if (n && null != s) {
                    let e = (0, _.C)(G.A.getChannel(s), !0);
                    (0, h.zV)(et.HAw.CHANNEL_OPENED, { ...e, ...(0, h.qL)(s) }),
                        (0, p.A)({ channelId: s }),
                        t.current.isTextInVoice &&
                            (0, h.zV)(et.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel });
                }
            }, [n, s]),
                r.useEffect(() => {
                    n && null == o && l === et.BVt.FRIENDS && (0, g.A)({ tab_opened: i });
                }, [n, i, l, o]),
                r.useEffect(() => {
                    if (n && null != o) {
                        let e = a ? { is_pending: a, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = B.A.getGuild(q.A.getGuildId()),
                            i = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: null != n && (0, y.$k)(n, { location: "guild-view" }),
                                viewing_all_channels: !K.Ay.isOptInEnabled(o),
                                num_recent_channels: O.A.recentsChannelCount(o),
                            };
                        (0, h.zV)(et.HAw.GUILD_VIEWED, i), (0, m.k)(et.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: o });
                    }
                }, [n, o, a]);
            let d = r.useRef(!1);
            r.useEffect(() => {
                n &&
                    null == o &&
                    l === et.BVt.MESSAGE_REQUESTS &&
                    !d.current &&
                    ((d.current = !0),
                    J.default.track(et.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, l]);
        })(w),
        (0, i.jsx)(er, { ...w })
    );
}
