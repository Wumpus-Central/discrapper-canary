n.d(t, { Z: () => ei }), n(583741), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(95015),
    s = n(442837),
    c = n(224706),
    u = n(593472),
    d = n(579806),
    p = n(603113),
    f = n(367907),
    g = n(731429),
    m = n(188471),
    h = n(176881),
    b = n(318885),
    _ = n(358221),
    E = n(710845),
    O = n(581567),
    v = n(569675),
    y = n(594190),
    I = n(38618),
    C = n(501640),
    S = n(924301),
    T = n(734307),
    N = n(355298),
    j = n(454991),
    P = n(837268),
    x = n(371651),
    A = n(829907),
    Z = n(509003),
    w = n(427679),
    L = n(695346),
    R = n(592125),
    D = n(77498),
    M = n(271383),
    k = n(430824),
    U = n(131951),
    G = n(375954),
    B = n(19780),
    H = n(944486),
    V = n(914010),
    F = n(885110),
    z = n(9156),
    Y = n(594174),
    W = n(774343),
    q = n(974042),
    K = n(237997),
    Q = n(626135),
    J = n(823379),
    X = n(981631),
    $ = n(674563);
function ee(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ee(e, t, n[t]);
            });
    }
    return e;
}
async function en(e) {
    var t, n, r, i, l;
    let {
            runningGame: a,
            game: o,
            detectionMethod: s,
            overlayStatus: c,
            overlayMethod: p,
            sharedGuildIds: f,
            voiceChannelId: g,
            voiceChannelType: m,
            voiceChannelBitrate: h,
            voiceChannelGuildId: b,
        } = e,
        _ = await (0, A.hj)(a.pid),
        { gameName: E, gameId: v, exe: I, distributor: C, rawExePath: S } = (0, O.G8)(a),
        T = c.enabledLegacy || c.enabledOOP,
        N = j.v.legacyEnabled || j.v.oopEnabled,
        x = c.source;
    Q.default.track(X.rMx.LAUNCH_GAME, {
        game: E,
        game_id: v,
        verified: null != o && (0, O.vp)(S, null == o ? void 0 : o.executables),
        elevated: a.elevated,
        is_launcher: null != (r = null == a ? void 0 : a.isLauncher) && r,
        game_platform: X.M7m.DESKTOP,
        detection_method: s,
        distributor: C,
        is_overlay_enabled: N,
        is_overlay_game_enabled: T,
        is_overlay_game_source: x,
        fullscreen_type: null != _ ? u.Jx[_] : u.Jx.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (i = await (null === d.Z || void 0 === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount)
                ? void 0
                : t.call(n)))
                ? i
                : null,
        overlay_method: null != (l = P.gl[p]) ? l : __OVERLAY__ ? P.gl[P.gl.Hook] : null,
        activity_status_enabled: L.G6.getSetting(),
        activity_status_shared_guilds: f,
        current_user_status: F.Z.getStatus(),
        game_detection_enabled: (0, y.ik)(a),
        executable_path: I,
        voice_channel_id: g,
        voice_channel_type: m,
        voice_channel_bitrate: h,
        voice_channel_guild_id: b,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, Z.sD)(a),
    }),
        null != I && y.ZP.addExecutableTrackedByAnalytics(I);
}
class er extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a, s, u, d, p, g;
        let {
            voiceChannelId: h,
            voiceChannelGuildId: I,
            voiceChannelType: C,
            voiceChannelBitrate: T,
            videoEnabled: N,
            isScreenSharing: j,
            runningGame: A,
            runningGamePid: Z,
            runningNonGame: M,
            selectedChannelId: U,
            selectedGuildId: H,
            connected: V,
        } = this.props;
        if (e.voiceChannelId !== h && null != e.voiceChannelId) {
            let t = y.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = w.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = S.ZP.getActiveEventByChannel(e.voiceChannelId),
                a = B.Z.getLastRTCConnectionState();
            (null == a ? void 0 : a.channelId) !== e.voiceChannelId && (a = null),
                Q.default.track(
                    X.rMx.LEAVE_VOICE_CHANNEL,
                    et(
                        {
                            channel_id: e.voiceChannelId,
                            channel_type: e.voiceChannelType,
                            channel_bitrate: e.voiceChannelBitrate,
                            guild_id: e.voiceChannelGuildId,
                            rtc_connection_id: null == a ? void 0 : a.rtcConnectionId,
                            game_name: n,
                            duration: null == a ? void 0 : a.duration,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            media_session_id: null == a ? void 0 : a.mediaSessionId,
                            stage_instance_id: null == r ? void 0 : r.id,
                            guild_scheduled_event_id: null == i ? void 0 : i.id,
                        },
                        (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                        null == a || null == (l = a.voiceStateAnalytics) ? void 0 : l.getStats(),
                        _.Z.getSelectedParticipantStats(e.voiceChannelId),
                    ),
                );
        }
        if (e.voiceChannelId !== h && null != h) {
            let e = y.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = w.Z.getStageInstanceByChannel(h),
                r = S.ZP.getActiveEventByChannel(h);
            (0, f.yw)(X.rMx.CHANNEL_OPENED, et({}, (0, f.$H)(h))),
                (0, m.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: h });
            let i = null,
                l = K.default.getFocusedPID();
            null != l &&
                x.default.getOverlayMethod(l) !== P.gl.Disabled &&
                (K.default.isInstanceLocked()
                    ? (i = X.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : K.default.isInstanceLocked() ||
                      (i = K.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)),
                Q.default.track(
                    X.rMx.JOIN_VOICE_CHANNEL,
                    et(
                        {
                            location: i,
                            channel_id: h,
                            channel_type: C,
                            channel_bitrate: T,
                            guild_id: I,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: B.Z.getWasMoved(),
                            join_voice_id: B.Z.getJoinVoiceId(),
                        },
                        (0, f.oG)(I, h),
                        (0, f.kO)(I, h, N),
                    ),
                );
        }
        let z =
                (null == A ? void 0 : A.distributor) === (null == (t = e.runningGame) ? void 0 : t.distributor) &&
                (null == A ? void 0 : A.sku) === (null == (n = e.runningGame) ? void 0 : n.sku) &&
                (null == A ? void 0 : A.name) === (null == (r = e.runningGame) ? void 0 : r.name),
            Y = null != e.runningGame && null != A && e.runningGame.isLauncher !== A.isLauncher;
        if (e.runningGame !== A && null != A && !A.isLauncher && (!z || Y)) {
            let { gameId: e } = (0, O.G8)(A),
                t = void 0 !== e ? D.Z.getDetectableGame(e) : null,
                n = y.ZP.getOverrideForGame(A),
                r = k.Z.getGuildIds(),
                i = L.SE.getSetting(),
                l = r.filter((e) => !i.includes(e)).slice(0, 200),
                o = null;
            o = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
            let f = x.default.getTrackedGameByPid(A.pid),
                g = (0, y.b6)(A),
                m = {
                    enabledOOP: null != (a = null == f ? void 0 : f.oopEnabled) ? a : g.enabledOOP,
                    enabledLegacy: null != (s = null == f ? void 0 : f.legacyEnabled) ? s : g.enabledLegacy,
                    overlayMethod: null != (u = null == f ? void 0 : f.overlayMethod) ? u : g.overlayMethod,
                    source: null != (d = null == f ? void 0 : f.source) ? d : g.source,
                    reason: "ChatAutoAnalytics",
                },
                b = null != (p = x.default.getOverlayMethod(A.pid)) ? p : m.overlayMethod;
            if (
                (setTimeout(() => {
                    (A.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : en)({
                        runningGame: A,
                        game: t,
                        detectionMethod: o,
                        overlayStatus: m,
                        overlayMethod: b,
                        sharedGuildIds: l,
                        voiceChannelId: h,
                        voiceChannelType: C,
                        voiceChannelBitrate: T,
                        voiceChannelGuildId: I,
                    });
                }, 10000),
                null != A.name && null != Z && D.Z.shouldReport(A.name))
            ) {
                let e = A.name;
                c.Z.identifyGame(Z, e)
                    .then((e) => c.Z.reportUnverifiedGame(e))
                    .catch((e) => new E.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (
            e.runningNonGame !== M &&
            (null == M ? void 0 : M.id) != null &&
            (null == (i = e.runningNonGame) ? void 0 : i.id) !== M.id
        ) {
            let e = v.Z.getById(M.id);
            null != e &&
                Q.default.track(X.rMx.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: $.wW.NON_GAME_DETECTABLE,
                    elevated: M.elevated,
                    game_platform: X.M7m.DESKTOP,
                    distributor: M.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: F.Z.getStatus(),
                    executable_path: (0, O.N6)(M.exePath),
                    voice_channel_id: h,
                    voice_channel_type: C,
                    voice_channel_bitrate: T,
                    voice_channel_guild_id: I,
                });
        }
        if ((e.videoEnabled !== N || e.isScreenSharing !== j) && null != h) {
            let e = "none",
                t = [j ? "screen" : null, N ? "camera" : null].filter(J.lm),
                n = null;
            j ? ((e = "screen"), (n = (0, b.t)())) : N && (e = "camera"),
                Q.default.track(
                    X.rMx.VIDEO_INPUT_TOGGLED,
                    et(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: L.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, f.AB)(h),
                    ),
                );
        }
        if (V && null != U && (!e.connected || U !== e.selectedChannelId || H !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = R.Z.getChannel(t),
                r = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = G.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, o.yE)(e.flags, X.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                Q.default.track(
                    X.rMx.ACK_COMMUNITY_MESSAGES,
                    et(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (g = i.messageReference) ? void 0 : g.message_id,
                            messages_loaded: e.hasFetched,
                        },
                        (0, f.v_)(n),
                        (0, f.hH)(r.id),
                    ),
                );
            }
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
    constructor(...e) {
        super(...e),
            ee(this, "isMessageRequestsInitialized", !1),
            ee(this, "debouncedRobloxAnalytics", a().debounce(en, 5000));
    }
}
function ei() {
    let [e, t] = (0, s.Wu)([H.Z], () => [H.Z.getVoiceChannelId(), H.Z.getChannelId()], []),
        n = (0, s.e7)([R.Z], () => R.Z.getChannel(t), [t]),
        l = (0, s.e7)([_.Z], () => (null == n ? void 0 : n.id) != null && _.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        o = (0, s.e7)([R.Z], () => R.Z.getChannel(e), [e]),
        c = (0, s.e7)([V.Z], () => V.Z.getGuildId(), []),
        u = (0, s.e7)([k.Z], () => k.Z.getGuild(c), [c]),
        d = (0, s.e7)([Y.default], () => Y.default.getCurrentUser(), []),
        b = (0, s.e7)([M.ZP], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (t = null == (e = M.ZP.getMember(c, d.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [d, c]),
        E = (0, s.e7)([q.ZP], () => q.ZP.getState().section, []),
        O = (0, s.e7)([W.Z], () => W.Z.getHomeLink(), []),
        v = (0, s.e7)([I.Z], () => I.Z.isConnected(), []),
        [S, j] = (0, s.Wu)([U.Z], () => [U.Z.isVideoEnabled(), U.Z.isScreenSharing()], []),
        P = (0, s.e7)([F.Z], () => F.Z.getPrimaryActivity(), []),
        { currentGame: x, currentNonGame: A } = (0, s.cj)(
            [y.ZP],
            () => ({
                currentGame: y.ZP.getCurrentGameForAnalytics(),
                currentNonGame: y.ZP.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        Z = (0, C.Z)(c),
        w = (0, s.e7)([N.Z], () => N.Z.getMessageRequestsCount(), []),
        L = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: E,
            homeLink: O,
            connected: v,
            videoEnabled: S,
            isScreenSharing: j,
            voiceChannelId: null == o ? void 0 : o.id,
            voiceChannelGuildId: null == o ? void 0 : o.getGuildId(),
            voiceChannelType: null == o ? void 0 : o.type,
            voiceChannelBitrate: null == o ? void 0 : o.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            runningNonGame: A,
            gamePlatform: (0, p.Z)(P),
            gameName: null != P ? P.name : null,
            gameId: null != P ? P.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(X.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: b,
            postableChannelCount: Z,
            isTextInVoice: l,
            numMessageRequests: w,
        },
        D = i.useRef(L);
    i.useEffect(() => {
        D.current = L;
    }, [L]);
    let {
        connected: G,
        friendsTabSection: B,
        homeLink: K,
        isMemberPending: J,
        selectedChannelId: $,
        selectedGuildId: ee,
    } = L;
    i.useEffect(() => {
        if (G && null != $) {
            let e = (0, g.K)(R.Z.getChannel($), !0);
            (0, f.yw)(X.rMx.CHANNEL_OPENED, et({}, e, (0, f.$H)($))),
                (0, m.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: $ }),
                D.current.isTextInVoice &&
                    (0, f.yw)(X.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: D.current.isNSFWChannel });
        }
    }, [G, $]),
        i.useEffect(() => {
            G && null == ee && K === X.Z5c.FRIENDS && (0, h.Z)({ tab_opened: B });
        }, [G, B, K, ee]),
        i.useEffect(() => {
            if (G && null != ee) {
                var e, t, n, r;
                let i =
                    ((n = et(
                        {},
                        J
                            ? {
                                  is_pending: J,
                                  preview_enabled: D.current.hasPreviewEnabled,
                              }
                            : {},
                    )),
                    (r = r =
                        {
                            postable_channels: D.current.postableChannelCount,
                            premium_progress_bar_enabled:
                                null !=
                                    (t =
                                        null == (e = k.Z.getGuild(V.Z.getGuildId()))
                                            ? void 0
                                            : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !z.ZP.isOptInEnabled(ee),
                            num_recent_channels: T.Z.recentsChannelCount(ee),
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
                (0, f.yw)(X.rMx.GUILD_VIEWED, i), (0, m.a)(X.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: ee });
            }
        }, [G, ee, J]);
    let en = i.useRef(!1);
    return (
        i.useEffect(() => {
            G &&
                null == ee &&
                K === X.Z5c.MESSAGE_REQUESTS &&
                !en.current &&
                ((en.current = !0),
                Q.default.track(X.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: D.current.numMessageRequests,
                }));
        }, [G, ee, K]),
        (0, r.jsx)(er, et({}, L))
    );
}
