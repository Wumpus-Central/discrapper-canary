n.d(t, { A: () => eu }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(665260),
    o = n(311907),
    d = n(544420),
    c = n(56562),
    u = n(77729),
    A = n(855511),
    h = n(58149),
    _ = n(332456),
    m = n(237774),
    g = n(973854),
    p = n(504982),
    E = n(815706),
    I = n(134047),
    f = n(313961),
    C = n(626584),
    T = n(181079),
    N = n(668267),
    S = n(379587),
    x = n(5180),
    v = n(953384),
    y = n(973522),
    b = n(15285),
    O = n(142120),
    L = n(442187),
    R = n(903223),
    P = n(698441),
    D = n(960755),
    M = n(380335),
    j = n(211753),
    w = n(41984),
    U = n(833551),
    G = n(515183),
    k = n(847521),
    V = n(446600),
    B = n(253932),
    H = n(734057),
    F = n(760751),
    Y = n(696451),
    W = n(71393),
    K = n(430452),
    q = n(320501),
    z = n(383501),
    $ = n(309010),
    Q = n(967198),
    X = n(461213),
    Z = n(543465),
    J = n(287809),
    ee = n(619921),
    et = n(595623),
    en = n(256415),
    ei = n(954571),
    ea = n(403362),
    er = n(474090),
    el = n(652215),
    es = n(705751),
    eo = n(788868);
async function ed(e) {
    let {
            runningGame: t,
            game: n,
            detectionMethod: i,
            overlayStatus: a,
            overlayMethod: r,
            sharedGuildIds: l,
            voiceChannelId: s,
            voiceChannelType: o,
            voiceChannelBitrate: d,
            voiceChannelGuildId: A,
        } = e,
        h = await (0, G.E1)(t.pid),
        { gameName: _, gameId: m, exe: g, distributor: p, rawExePath: E } = (0, y.wH)(t),
        I = a.enabledLegacy || a.enabledOOP,
        f = j.x.legacyEnabled || j.x.oopEnabled,
        C = a.source;
    ei.default.track(el.HAw.LAUNCH_GAME, {
        game: _,
        game_id: m,
        verified: null != n && (0, y.PQ)(E, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: el.yTV.DESKTOP,
        detection_method: i,
        distributor: p,
        is_overlay_enabled: f,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != h ? c.aI[h] : c.aI.UNKNOWN.toString(),
        hardware_display_count: (await u.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: w.Ue[r] ?? (__OVERLAY__ ? w.Ue[w.Ue.Hook] : null),
        activity_status_enabled: B.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: X.A.getStatus(),
        game_detection_enabled: (0, b.Xr)(t),
        executable_path: g,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: A,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, k.MT)(t),
        executable_fingerprint: t.executableFingerprint,
    }),
        null != g && b.Ay.addExecutableTrackedByAnalytics(g);
}
class ec extends a.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = l().debounce(ed, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: a,
            videoEnabled: r,
            isScreenSharing: l,
            runningGame: o,
            runningGamePid: c,
            runningNonGame: u,
            selectedChannelId: A,
            selectedGuildId: _,
            connected: m,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = b.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = V.A.getStageInstanceByChannel(e.voiceChannelId),
                a = P.Ay.getActiveEventByChannel(e.voiceChannelId),
                r = z.A.getLastRTCConnectionState();
            r?.channelId !== e.voiceChannelId && (r = null),
                ei.default.track(el.HAw.LEAVE_VOICE_CHANNEL, {
                    channel_id: e.voiceChannelId,
                    channel_type: e.voiceChannelType,
                    channel_bitrate: e.voiceChannelBitrate,
                    guild_id: e.voiceChannelGuildId,
                    rtc_connection_id: r?.rtcConnectionId,
                    game_name: n,
                    duration: r?.duration,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    media_session_id: r?.mediaSessionId,
                    stage_instance_id: i?.id,
                    guild_scheduled_event_id: a?.id,
                    ...(0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...r?.voiceStateAnalytics?.getStats(),
                    ...f.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = b.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = V.A.getStageInstanceByChannel(t),
                o = P.Ay.getActiveEventByChannel(t);
            (0, h.zV)(el.HAw.CHANNEL_OPENED, { ...(0, h.qL)(t) }), (0, g.A)({ channelId: t });
            let d = null,
                c = en.default.getFocusedPID();
            null != c &&
                U.default.getOverlayMethod(c) !== w.Ue.Disabled &&
                (en.default.isInstanceLocked()
                    ? (d = el.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : en.default.isInstanceLocked() ||
                      (d = en.default.isPinned(el.uss.TEXT)
                          ? el.Xmn.OVERLAY_UNLOCKED_PINNED
                          : el.Xmn.OVERLAY_UNLOCKED)),
                ei.default.track(el.HAw.JOIN_VOICE_CHANNEL, {
                    location: d,
                    channel_id: t,
                    channel_type: i,
                    channel_bitrate: a,
                    guild_id: n,
                    game_name: l,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: s?.id,
                    guild_scheduled_event_id: o?.id,
                    was_moved: z.A.getWasMoved(),
                    join_voice_id: z.A.getJoinVoiceId(),
                    ...(0, h.dL)(n, t),
                    ...(0, h.JK)(n, t, r),
                });
        }
        let p =
                o?.distributor === e.runningGame?.distributor &&
                o?.sku === e.runningGame?.sku &&
                o?.name === e.runningGame?.name,
            T = null != e.runningGame && null != o && e.runningGame.isLauncher !== o.isLauncher;
        if (e.runningGame !== o && null != o && !o.isLauncher && (!p || T)) {
            let { gameId: e } = (0, y.wH)(o),
                r = void 0 !== e ? F.A.getDetectableGame(e) : null,
                l = b.Ay.getOverrideForGame(o),
                s = W.A.getGuildIds(),
                u = B.JG.getSetting(),
                A = s.filter((e) => !u.includes(e)).slice(0, 200),
                h = null;
            h = null != l ? "custom_override" : null != r ? "verified_game" : "launcher";
            let _ = U.default.getTrackedGameByPid(o.pid),
                m = (0, b.hw)(o),
                g = {
                    enabledOOP: _?.oopEnabled ?? m.enabledOOP,
                    enabledLegacy: _?.legacyEnabled ?? m.enabledLegacy,
                    overlayMethod: _?.overlayMethod ?? m.overlayMethod,
                    source: _?.source ?? m.source,
                    reason: "ChatAutoAnalytics",
                },
                p = U.default.getOverlayMethod(o.pid) ?? g.overlayMethod;
            if (
                (setTimeout(() => {
                    (o.distributor === el.d3x.ROBLOX ? this.debouncedRobloxAnalytics : ed)({
                        runningGame: o,
                        game: r,
                        detectionMethod: h,
                        overlayStatus: g,
                        overlayMethod: p,
                        sharedGuildIds: A,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: a,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != o.name && null != c && F.A.shouldReport(o))
            ) {
                let e = o.name;
                d.A.identifyGame(c, e)
                    .then((e) => d.A.reportUnverifiedGame(e))
                    .catch((e) => new C.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== u && u?.id != null && e.runningNonGame?.id !== u.id) {
            let e = v.A.getById(u.id);
            null != e &&
                ei.default.track(el.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: es.S7.NON_GAME_DETECTABLE,
                    elevated: u.elevated,
                    game_platform: el.yTV.DESKTOP,
                    distributor: u.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: X.A.getStatus(),
                    executable_path: (0, y.Ic)(u.exePath),
                    voice_channel_id: t,
                    voice_channel_type: i,
                    voice_channel_bitrate: a,
                    voice_channel_guild_id: n,
                    executable_fingerprint: u.executableFingerprint,
                });
        }
        if ((e.videoEnabled !== r || e.isScreenSharing !== l) && null != t) {
            let e = "none",
                n = [l ? "screen" : null, r ? "camera" : null].filter(ea.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, E.p)())) : r && (e = "camera"),
                ei.default.track(el.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: B.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, h.QS)(t),
                });
        }
        if (m && null != A && (!e.connected || A !== e.selectedChannelId || _ !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = H.A.getChannel(t),
                i = W.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = q.A.getMessages(t),
                    a = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, s.Lt)(e.flags, el.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                ei.default.track(el.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: a?.id,
                    last_message_reference_message_id: a?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, h.dI)(n),
                    ...(0, h.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                I.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                ei.default.track(el.HAw.TEXT_IN_VOICE_CLOSED, {
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
function eu() {
    let [e, t] = (0, o.yK)([$.A], () => [$.A.getVoiceChannelId(), $.A.getChannelId()], []),
        n = (0, o.bG)([H.A], () => H.A.getChannel(t), [t]),
        r = (0, o.bG)([f.A], () => n?.id != null && f.A.getChatOpen(n.id), [n]),
        l = n?.nsfw,
        s = (0, o.bG)([H.A], () => H.A.getChannel(e), [e]),
        d = (0, o.bG)([Q.A], () => Q.A.getGuildId(), []),
        c = (0, o.bG)([W.A], () => W.A.getGuild(d), [d]),
        u = (0, o.bG)([J.default], () => J.default.getCurrentUser(), []),
        E = (0, o.bG)([Y.Ay], () => null != u && null != d && (Y.Ay.getMember(d, u.id)?.isPending ?? !1), [u, d]),
        I = (0, o.bG)([et.Ay], () => et.Ay.getState().section, []),
        C = (0, o.bG)([ee.A], () => ee.A.getHomeLink(), []),
        v = (0, o.bG)([O.A], () => O.A.isConnected(), []),
        [y, P] = (0, o.yK)([K.Ay], () => [K.Ay.isVideoEnabled(), K.Ay.isScreenSharing()], []),
        j = (0, o.bG)([X.A], () => X.A.getPrimaryActivity(), []),
        { currentGame: w, currentNonGame: U } = (0, o.cf)(
            [b.Ay],
            () => ({
                currentGame: b.Ay.getCurrentGameForAnalytics(),
                currentNonGame: b.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        G = (0, L.A)(d),
        k = (0, o.bG)([M.A], () => M.A.getMessageRequestsCount(), []),
        V = {
            selectedChannelId: t,
            isNSFWChannel: l,
            selectedGuildId: d,
            friendsTabSection: I,
            homeLink: C,
            connected: v,
            videoEnabled: y,
            isScreenSharing: P,
            voiceChannelId: s?.id,
            voiceChannelGuildId: s?.getGuildId(),
            voiceChannelType: s?.type,
            voiceChannelBitrate: s?.bitrate,
            runningGame: w,
            runningGamePid: null != w ? w.pid : null,
            runningNonGame: U,
            gamePlatform: (0, A.A)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != w ? w.exeName : null,
            hasPreviewEnabled: c?.features.has(el.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: E,
            postableChannelCount: G,
            isTextInVoice: r,
            numMessageRequests: k,
        };
    return (
        !(function (e) {
            let t = a.useRef(e);
            a.useEffect(() => {
                t.current = e;
            }, [e]);
            let {
                connected: n,
                friendsTabSection: i,
                homeLink: r,
                isMemberPending: l,
                selectedChannelId: s,
                selectedGuildId: o,
            } = e;
            a.useEffect(() => {
                if (n && null != s) {
                    let e = (0, _.C)(H.A.getChannel(s), !0);
                    (0, h.zV)(el.HAw.CHANNEL_OPENED, { ...e, ...(0, h.qL)(s), selected_guild_id: o }),
                        (0, g.A)({ channelId: s }),
                        t.current.isTextInVoice &&
                            (0, h.zV)(el.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel });
                }
            }, [n, s, o]),
                a.useEffect(() => {
                    n && null == o && r === el.BVt.FRIENDS && (0, p.A)({ tab_opened: i });
                }, [n, i, r, o]),
                a.useEffect(() => {
                    if (n && null != o) {
                        let e = l ? { is_pending: l, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = W.A.getGuild(Q.A.getGuildId()),
                            i = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: null != n && (0, R.$k)(n, { location: "guild-view" }),
                                viewing_all_channels: !Z.Ay.isOptInEnabled(o),
                                num_recent_channels: D.A.recentsChannelCount(o),
                            };
                        if (
                            ((0, h.zV)(el.HAw.GUILD_VIEWED, i),
                            (0, m.k)(el.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: o }),
                            (0, x.ai)(o))
                        ) {
                            let e = S.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = er.Ay.isPremiumExactly(J.default.getCurrentUser(), eo.PremiumTypes.TIER_2),
                                n = (0, N.Kg)();
                            (0, N.U5)(n, T.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, o, l]);
            let d = a.useRef(!1);
            a.useEffect(() => {
                n &&
                    null == o &&
                    r === el.BVt.MESSAGE_REQUESTS &&
                    !d.current &&
                    ((d.current = !0),
                    ei.default.track(el.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, r]);
        })(V),
        (0, i.jsx)(ec, { ...V })
    );
}
