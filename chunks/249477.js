n.d(t, { A: () => er }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(665260),
    o = n(311907),
    d = n(544420),
    c = n(56562),
    u = n(77729),
    A = n(855511),
    h = n(58149),
    _ = n(332456),
    m = n(237774),
    p = n(504982),
    g = n(815706),
    E = n(134047),
    I = n(313961),
    f = n(626584),
    C = n(953384),
    N = n(973522),
    T = n(15285),
    S = n(142120),
    x = n(442187),
    v = n(903223),
    b = n(698441),
    y = n(960755),
    L = n(380335),
    O = n(211753),
    R = n(41984),
    P = n(833551),
    j = n(515183),
    D = n(847521),
    w = n(446600),
    M = n(253932),
    U = n(734057),
    G = n(760751),
    k = n(696451),
    V = n(71393),
    B = n(430452),
    H = n(320501),
    F = n(383501),
    Y = n(309010),
    W = n(967198),
    q = n(461213),
    z = n(543465),
    K = n(287809),
    $ = n(619921),
    Q = n(595623),
    X = n(256415),
    Z = n(954571),
    J = n(403362),
    ee = n(652215),
    et = n(705751);
async function en(e) {
    let {
            runningGame: t,
            game: n,
            detectionMethod: i,
            overlayStatus: r,
            overlayMethod: a,
            sharedGuildIds: l,
            voiceChannelId: s,
            voiceChannelType: o,
            voiceChannelBitrate: d,
            voiceChannelGuildId: A,
        } = e,
        h = await (0, j.E1)(t.pid),
        { gameName: _, gameId: m, exe: p, distributor: g, rawExePath: E } = (0, N.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        f = O.x.legacyEnabled || O.x.oopEnabled,
        C = r.source;
    Z.default.track(ee.HAw.LAUNCH_GAME, {
        game: _,
        game_id: m,
        verified: null != n && (0, N.PQ)(E, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: ee.yTV.DESKTOP,
        detection_method: i,
        distributor: g,
        is_overlay_enabled: f,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != h ? c.aI[h] : c.aI.UNKNOWN.toString(),
        hardware_display_count: (await u.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: R.Ue[a] ?? (__OVERLAY__ ? R.Ue[R.Ue.Hook] : null),
        activity_status_enabled: M.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: q.A.getStatus(),
        game_detection_enabled: (0, T.Xr)(t),
        executable_path: p,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: A,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, D.MT)(t),
        executable_fingerprint: t.executableFingerprint,
    }),
        null != p && T.Ay.addExecutableTrackedByAnalytics(p);
}
class ei extends r.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = l().debounce(en, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: r,
            videoEnabled: a,
            isScreenSharing: l,
            runningGame: o,
            runningGamePid: c,
            runningNonGame: u,
            selectedChannelId: A,
            selectedGuildId: _,
            connected: p,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = T.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = w.A.getStageInstanceByChannel(e.voiceChannelId),
                r = b.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = F.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                Z.default.track(ee.HAw.LEAVE_VOICE_CHANNEL, {
                    channel_id: e.voiceChannelId,
                    channel_type: e.voiceChannelType,
                    channel_bitrate: e.voiceChannelBitrate,
                    guild_id: e.voiceChannelGuildId,
                    rtc_connection_id: a?.rtcConnectionId,
                    game_name: n,
                    duration: a?.duration,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    media_session_id: a?.mediaSessionId,
                    stage_instance_id: i?.id,
                    guild_scheduled_event_id: r?.id,
                    ...(0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...a?.voiceStateAnalytics?.getStats(),
                    ...I.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = T.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = w.A.getStageInstanceByChannel(t),
                o = b.Ay.getActiveEventByChannel(t);
            (0, h.zV)(ee.HAw.CHANNEL_OPENED, { ...(0, h.qL)(t) }),
                (0, m.k)(ee.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: t });
            let d = null,
                c = X.default.getFocusedPID();
            null != c &&
                P.default.getOverlayMethod(c) !== R.Ue.Disabled &&
                (X.default.isInstanceLocked()
                    ? (d = ee.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : X.default.isInstanceLocked() ||
                      (d = X.default.isPinned(ee.uss.TEXT) ? ee.Xmn.OVERLAY_UNLOCKED_PINNED : ee.Xmn.OVERLAY_UNLOCKED)),
                Z.default.track(ee.HAw.JOIN_VOICE_CHANNEL, {
                    location: d,
                    channel_id: t,
                    channel_type: i,
                    channel_bitrate: r,
                    guild_id: n,
                    game_name: l,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: s?.id,
                    guild_scheduled_event_id: o?.id,
                    was_moved: F.A.getWasMoved(),
                    join_voice_id: F.A.getJoinVoiceId(),
                    ...(0, h.dL)(n, t),
                    ...(0, h.JK)(n, t, a),
                });
        }
        let S =
                o?.distributor === e.runningGame?.distributor &&
                o?.sku === e.runningGame?.sku &&
                o?.name === e.runningGame?.name,
            x = null != e.runningGame && null != o && e.runningGame.isLauncher !== o.isLauncher;
        if (e.runningGame !== o && null != o && !o.isLauncher && (!S || x)) {
            let { gameId: e } = (0, N.wH)(o),
                a = void 0 !== e ? G.A.getDetectableGame(e) : null,
                l = T.Ay.getOverrideForGame(o),
                s = V.A.getGuildIds(),
                u = M.JG.getSetting(),
                A = s.filter((e) => !u.includes(e)).slice(0, 200),
                h = null;
            h = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let _ = P.default.getTrackedGameByPid(o.pid),
                m = (0, T.hw)(o),
                p = {
                    enabledOOP: _?.oopEnabled ?? m.enabledOOP,
                    enabledLegacy: _?.legacyEnabled ?? m.enabledLegacy,
                    overlayMethod: _?.overlayMethod ?? m.overlayMethod,
                    source: _?.source ?? m.source,
                    reason: "ChatAutoAnalytics",
                },
                g = P.default.getOverlayMethod(o.pid) ?? p.overlayMethod;
            if (
                (setTimeout(() => {
                    (o.distributor === ee.d3x.ROBLOX ? this.debouncedRobloxAnalytics : en)({
                        runningGame: o,
                        game: a,
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
                null != o.name && null != c && G.A.shouldReport(o))
            ) {
                let e = o.name;
                d.A.identifyGame(c, e)
                    .then((e) => d.A.reportUnverifiedGame(e))
                    .catch((e) => new f.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== u && u?.id != null && e.runningNonGame?.id !== u.id) {
            let e = C.A.getById(u.id);
            null != e &&
                Z.default.track(ee.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: et.S7.NON_GAME_DETECTABLE,
                    elevated: u.elevated,
                    game_platform: ee.yTV.DESKTOP,
                    distributor: u.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: q.A.getStatus(),
                    executable_path: (0, N.Ic)(u.exePath),
                    voice_channel_id: t,
                    voice_channel_type: i,
                    voice_channel_bitrate: r,
                    voice_channel_guild_id: n,
                    executable_fingerprint: u.executableFingerprint,
                });
        }
        if ((e.videoEnabled !== a || e.isScreenSharing !== l) && null != t) {
            let e = "none",
                n = [l ? "screen" : null, a ? "camera" : null].filter(J.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, g.p)())) : a && (e = "camera"),
                Z.default.track(ee.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: M.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, h.QS)(t),
                });
        }
        if (p && null != A && (!e.connected || A !== e.selectedChannelId || _ !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = U.A.getChannel(t),
                i = V.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = H.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, s.Lt)(e.flags, ee.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                Z.default.track(ee.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, h.dI)(n),
                    ...(0, h.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                E.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                Z.default.track(ee.HAw.TEXT_IN_VOICE_CLOSED, {
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
function er() {
    let [e, t] = (0, o.yK)([Y.A], () => [Y.A.getVoiceChannelId(), Y.A.getChannelId()], []),
        n = (0, o.bG)([U.A], () => U.A.getChannel(t), [t]),
        a = (0, o.bG)([I.A], () => n?.id != null && I.A.getChatOpen(n.id), [n]),
        l = n?.nsfw,
        s = (0, o.bG)([U.A], () => U.A.getChannel(e), [e]),
        d = (0, o.bG)([W.A], () => W.A.getGuildId(), []),
        c = (0, o.bG)([V.A], () => V.A.getGuild(d), [d]),
        u = (0, o.bG)([K.default], () => K.default.getCurrentUser(), []),
        g = (0, o.bG)([k.Ay], () => null != u && null != d && (k.Ay.getMember(d, u.id)?.isPending ?? !1), [u, d]),
        E = (0, o.bG)([Q.Ay], () => Q.Ay.getState().section, []),
        f = (0, o.bG)([$.A], () => $.A.getHomeLink(), []),
        C = (0, o.bG)([S.A], () => S.A.isConnected(), []),
        [N, b] = (0, o.yK)([B.Ay], () => [B.Ay.isVideoEnabled(), B.Ay.isScreenSharing()], []),
        O = (0, o.bG)([q.A], () => q.A.getPrimaryActivity(), []),
        { currentGame: R, currentNonGame: P } = (0, o.cf)(
            [T.Ay],
            () => ({
                currentGame: T.Ay.getCurrentGameForAnalytics(),
                currentNonGame: T.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        j = (0, x.A)(d),
        D = (0, o.bG)([L.A], () => L.A.getMessageRequestsCount(), []),
        w = {
            selectedChannelId: t,
            isNSFWChannel: l,
            selectedGuildId: d,
            friendsTabSection: E,
            homeLink: f,
            connected: C,
            videoEnabled: N,
            isScreenSharing: b,
            voiceChannelId: s?.id,
            voiceChannelGuildId: s?.getGuildId(),
            voiceChannelType: s?.type,
            voiceChannelBitrate: s?.bitrate,
            runningGame: R,
            runningGamePid: null != R ? R.pid : null,
            runningNonGame: P,
            gamePlatform: (0, A.A)(O),
            gameName: null != O ? O.name : null,
            gameId: null != O ? O.application_id : null,
            gameExeName: null != R ? R.exeName : null,
            hasPreviewEnabled: c?.features.has(ee.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: g,
            postableChannelCount: j,
            isTextInVoice: a,
            numMessageRequests: D,
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
                homeLink: a,
                isMemberPending: l,
                selectedChannelId: s,
                selectedGuildId: o,
            } = e;
            r.useEffect(() => {
                if (n && null != s) {
                    let e = (0, _.C)(U.A.getChannel(s), !0);
                    (0, h.zV)(ee.HAw.CHANNEL_OPENED, { ...e, ...(0, h.qL)(s) }),
                        (0, m.k)(ee.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: s }),
                        t.current.isTextInVoice &&
                            (0, h.zV)(ee.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel });
                }
            }, [n, s]),
                r.useEffect(() => {
                    n && null == o && a === ee.BVt.FRIENDS && (0, p.A)({ tab_opened: i });
                }, [n, i, a, o]),
                r.useEffect(() => {
                    if (n && null != o) {
                        let e = l ? { is_pending: l, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = V.A.getGuild(W.A.getGuildId()),
                            i = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: null != n && (0, v.$k)(n, { location: "guild-view" }),
                                viewing_all_channels: !z.Ay.isOptInEnabled(o),
                                num_recent_channels: y.A.recentsChannelCount(o),
                            };
                        (0, h.zV)(ee.HAw.GUILD_VIEWED, i), (0, m.k)(ee.HAw.GUILD_VIEWED_CLICKSTREAM, { guildId: o });
                    }
                }, [n, o, l]);
            let d = r.useRef(!1);
            r.useEffect(() => {
                n &&
                    null == o &&
                    a === ee.BVt.MESSAGE_REQUESTS &&
                    !d.current &&
                    ((d.current = !0),
                    Z.default.track(ee.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, a]);
        })(w),
        (0, i.jsx)(ei, { ...w })
    );
}
