n.d(t, { A: () => eA }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(665260),
    o = n(311907),
    d = n(544420),
    u = n(56562),
    c = n(77729),
    A = n(855511),
    h = n(58149),
    _ = n(237774),
    E = n(885437),
    p = n(973854),
    m = n(504982),
    g = n(815706),
    I = n(134047),
    C = n(313961),
    f = n(626584),
    T = n(181079),
    S = n(668267),
    N = n(379587),
    O = n(5180),
    L = n(953384),
    y = n(973522),
    v = n(15285),
    b = n(142120),
    D = n(442187),
    R = n(698441),
    P = n(960755),
    w = n(380335),
    M = n(211753),
    U = n(41984),
    x = n(833551),
    G = n(515183),
    k = n(847521),
    j = n(446600),
    V = n(253932),
    H = n(734057),
    B = n(760751),
    F = n(696451),
    Y = n(71393),
    K = n(430452),
    z = n(320501),
    W = n(383501),
    $ = n(309010),
    q = n(967198),
    X = n(461213),
    Q = n(543465),
    Z = n(287809),
    J = n(619921),
    ee = n(595623),
    et = n(256415),
    en = n(954571),
    ei = n(403362),
    er = n(474090),
    ea = n(837921),
    el = n(652215),
    es = n(705751),
    eo = n(788868);
async function ed(e) {
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
        [h, _] = await Promise.all([
            (0, G.E1)(t.pid),
            v.Ay.canCollectExecutableFingerprintsForRunningGames()
                ? ea.Ay.getExecutableFingerprintForProcess(t.pid)
                : Promise.resolve(null),
        ]),
        { gameName: E, gameId: p, exe: m, distributor: g, rawExePath: I } = (0, y.wH)(t),
        C = r.enabledLegacy || r.enabledOOP,
        f = M.x.legacyEnabled || M.x.oopEnabled,
        T = r.source;
    en.default.track(el.HAw.LAUNCH_GAME, {
        game: E,
        game_id: p,
        verified: null != n && (0, y.PQ)(I, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: el.yTV.DESKTOP,
        detection_method: i,
        distributor: g,
        is_overlay_enabled: f,
        is_overlay_game_enabled: C,
        is_overlay_game_source: T,
        fullscreen_type: null != h ? u.aI[h] : u.aI.UNKNOWN.toString(),
        hardware_display_count: (await c.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: U.Ue[a] ?? (__OVERLAY__ ? U.Ue[U.Ue.Hook] : null),
        activity_status_enabled: V.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: X.A.getStatus(),
        game_detection_enabled: (0, v.Xr)(t),
        executable_path: m,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: A,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, k.MT)(t),
        executable_fingerprint: _ ?? t.executableFingerprint,
    }),
        null != m && v.Ay.addExecutableTrackedByAnalytics(m);
}
async function eu(e) {
    let {
            runningNonGame: t,
            nonGameApplication: n,
            voiceChannelId: i,
            voiceChannelType: r,
            voiceChannelBitrate: a,
            voiceChannelGuildId: l,
        } = e,
        s = v.Ay.canCollectExecutableFingerprintsForRunningGames()
            ? await ea.Ay.getExecutableFingerprintForProcess(t.pid)
            : null;
    en.default.track(el.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: n.name,
        application_id: n.id,
        application_type: es.S7.NON_GAME_DETECTABLE,
        elevated: t.elevated,
        game_platform: el.yTV.DESKTOP,
        distributor: t.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: X.A.getStatus(),
        executable_path: (0, y.Ic)(t.exePath),
        voice_channel_id: i,
        voice_channel_type: r,
        voice_channel_bitrate: a,
        voice_channel_guild_id: l,
        executable_fingerprint: s ?? t.executableFingerprint,
    });
}
class ec extends r.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = l().debounce(ed, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: r,
            videoEnabled: a,
            isScreenSharing: l,
            runningGame: o,
            runningGamePid: u,
            runningNonGame: c,
            selectedChannelId: A,
            selectedGuildId: _,
            connected: E,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = v.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = j.A.getStageInstanceByChannel(e.voiceChannelId),
                r = R.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = W.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                en.default.track(el.HAw.LEAVE_VOICE_CHANNEL, {
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
                    ...C.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = v.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = j.A.getStageInstanceByChannel(t),
                o = R.Ay.getActiveEventByChannel(t);
            (0, h.zV)(el.HAw.CHANNEL_OPENED, { ...(0, h.qL)(t) }), (0, p.A)({ channelId: t });
            let d = null,
                u = et.default.getFocusedPID();
            null != u &&
                x.default.getOverlayMethod(u) !== U.Ue.Disabled &&
                (et.default.isInstanceLocked()
                    ? (d = el.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : et.default.isInstanceLocked() ||
                      (d = et.default.isPinned(el.uss.TEXT)
                          ? el.Xmn.OVERLAY_UNLOCKED_PINNED
                          : el.Xmn.OVERLAY_UNLOCKED)),
                en.default.track(el.HAw.JOIN_VOICE_CHANNEL, {
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
                    was_moved: W.A.getWasMoved(),
                    join_voice_id: W.A.getJoinVoiceId(),
                    ...(0, h.dL)(n, t),
                    ...(0, h.JK)(n, t, a),
                });
        }
        let m =
                o?.distributor === e.runningGame?.distributor &&
                o?.sku === e.runningGame?.sku &&
                o?.name === e.runningGame?.name,
            T = null != e.runningGame && null != o && e.runningGame.isLauncher !== o.isLauncher;
        if (e.runningGame !== o && null != o && !o.isLauncher && (!m || T)) {
            let { gameId: e } = (0, y.wH)(o),
                a = void 0 !== e ? B.A.getDetectableGame(e) : null,
                l = v.Ay.getOverrideForGame(o),
                s = Y.A.getGuildIds(),
                c = V.JG.getSetting(),
                A = s.filter((e) => !c.includes(e)).slice(0, 200),
                h = null;
            h = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let _ = x.default.getTrackedGameByPid(o.pid),
                E = (0, v.hw)(o),
                p = {
                    enabledOOP: _?.oopEnabled ?? E.enabledOOP,
                    enabledLegacy: _?.legacyEnabled ?? E.enabledLegacy,
                    overlayMethod: _?.overlayMethod ?? E.overlayMethod,
                    source: _?.source ?? E.source,
                    reason: "ChatAutoAnalytics",
                },
                m = x.default.getOverlayMethod(o.pid) ?? p.overlayMethod;
            if (
                (setTimeout(() => {
                    (o.distributor === el.d3x.ROBLOX ? this.debouncedRobloxAnalytics : ed)({
                        runningGame: o,
                        game: a,
                        detectionMethod: h,
                        overlayStatus: p,
                        overlayMethod: m,
                        sharedGuildIds: A,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != o.name && null != u && B.A.shouldReport(o))
            ) {
                let e = o.name;
                d.Ay.identifyGame(u, e)
                    .then((e) => d.Ay.reportUnverifiedGame(e))
                    .catch((e) => new f.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== c && c?.id != null && e.runningNonGame?.id !== c.id) {
            let e = L.A.getById(c.id);
            null != e &&
                eu({
                    runningNonGame: c,
                    nonGameApplication: e,
                    voiceChannelId: t,
                    voiceChannelType: i,
                    voiceChannelBitrate: r,
                    voiceChannelGuildId: n,
                });
        }
        if ((e.videoEnabled !== a || e.isScreenSharing !== l) && null != t) {
            let e = "none",
                n = [l ? "screen" : null, a ? "camera" : null].filter(ei.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, g.p)())) : a && (e = "camera"),
                en.default.track(el.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: V.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, h.QS)(t),
                });
        }
        if (E && null != A && (!e.connected || A !== e.selectedChannelId || _ !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = H.A.getChannel(t),
                i = Y.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = z.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, s.Lt)(e.flags, el.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                en.default.track(el.HAw.ACK_COMMUNITY_MESSAGES, {
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
                en.default.track(el.HAw.TEXT_IN_VOICE_CLOSED, {
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
function eA() {
    let [e, t] = (0, o.yK)([$.A], () => [$.A.getVoiceChannelId(), $.A.getChannelId()], []),
        n = (0, o.bG)([H.A], () => H.A.getChannel(t), [t]),
        a = (0, o.bG)([C.A], () => n?.id != null && C.A.getChatOpen(n.id), [n]),
        l = n?.nsfw,
        s = (0, o.bG)([H.A], () => H.A.getChannel(e), [e]),
        d = (0, o.bG)([q.A], () => q.A.getGuildId(), []),
        u = (0, o.bG)([Y.A], () => Y.A.getGuild(d), [d]),
        c = (0, o.bG)([Z.default], () => Z.default.getCurrentUser(), []),
        g = (0, o.bG)([F.Ay], () => null != c && null != d && (F.Ay.getMember(d, c.id)?.isPending ?? !1), [c, d]),
        I = (0, o.bG)([ee.Ay], () => ee.Ay.getState().section, []),
        f = (0, o.bG)([J.A], () => J.A.getHomeLink(), []),
        L = (0, o.bG)([b.A], () => b.A.isConnected(), []),
        [y, R] = (0, o.yK)([K.Ay], () => [K.Ay.isVideoEnabled(), K.Ay.isScreenSharing()], []),
        M = (0, o.bG)([X.A], () => X.A.getPrimaryActivity(), []),
        { currentGame: U, currentNonGame: x } = (0, o.cf)(
            [v.Ay],
            () => ({
                currentGame: v.Ay.getCurrentGameForAnalytics(),
                currentNonGame: v.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        G = (0, D.A)(d),
        k = (0, o.bG)([w.A], () => w.A.getMessageRequestsCount(), []),
        j = {
            selectedChannelId: t,
            isNSFWChannel: l,
            selectedGuildId: d,
            friendsTabSection: I,
            homeLink: f,
            connected: L,
            videoEnabled: y,
            isScreenSharing: R,
            voiceChannelId: s?.id,
            voiceChannelGuildId: s?.getGuildId(),
            voiceChannelType: s?.type,
            voiceChannelBitrate: s?.bitrate,
            runningGame: U,
            runningGamePid: null != U ? U.pid : null,
            runningNonGame: x,
            gamePlatform: (0, A.A)(M),
            gameName: null != M ? M.name : null,
            gameId: null != M ? M.application_id : null,
            gameExeName: null != U ? U.exeName : null,
            hasPreviewEnabled: u?.features.has(el.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: g,
            postableChannelCount: G,
            isTextInVoice: a,
            numMessageRequests: k,
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
                n &&
                    null != s &&
                    ((0, h.zV)(el.HAw.CHANNEL_OPENED, { ...(0, E.p)(s), ...(0, h.qL)(s), selected_guild_id: o }),
                    (0, p.A)({ channelId: s }),
                    t.current.isTextInVoice &&
                        (0, h.zV)(el.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel }));
            }, [n, s, o]),
                r.useEffect(() => {
                    n && null == o && a === el.BVt.FRIENDS && (0, m.A)({ tab_opened: i });
                }, [n, i, a, o]),
                r.useEffect(() => {
                    if (n && null != o) {
                        let e = l ? { is_pending: l, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = Y.A.getGuild(q.A.getGuildId()),
                            i = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: n?.premiumProgressBarEnabled ?? !1,
                                viewing_all_channels: !Q.Ay.isOptInEnabled(o),
                                num_recent_channels: P.A.recentsChannelCount(o),
                            };
                        if (
                            ((0, h.zV)(el.HAw.GUILD_VIEWED, i),
                            (0, _.k)(el.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: o }),
                            (0, O.ai)(o))
                        ) {
                            let e = N.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = er.Ay.isPremiumExactly(Z.default.getCurrentUser(), eo.PremiumTypes.TIER_2),
                                n = (0, S.Kg)();
                            (0, S.U5)(n, T.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, o, l]);
            let d = r.useRef(!1);
            r.useEffect(() => {
                n &&
                    null == o &&
                    a === el.BVt.MESSAGE_REQUESTS &&
                    !d.current &&
                    ((d.current = !0),
                    en.default.track(el.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, a]);
        })(j),
        (0, i.jsx)(ec, { ...j })
    );
}
