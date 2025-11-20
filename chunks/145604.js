n.d(t, { Z: () => er }), n(583741), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(95015),
    o = n(442837),
    c = n(224706),
    u = n(593472),
    d = n(579806),
    p = n(603113),
    f = n(367907),
    h = n(731429),
    g = n(188471),
    m = n(176881),
    _ = n(318885),
    b = n(358221),
    E = n(710845),
    O = n(581567),
    y = n(594190),
    v = n(38618),
    I = n(489745),
    C = n(924301),
    S = n(734307),
    T = n(355298),
    N = n(454991),
    j = n(837268),
    P = n(32300),
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
    X = n(981631);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
async function et(e) {
    var t, n, r, i, l;
    let {
            runningGame: a,
            game: s,
            detectionMethod: o,
            overlayStatus: c,
            overlayMethod: p,
            sharedGuildIds: f,
            voiceChannelId: h,
            voiceChannelType: g,
            voiceChannelBitrate: m,
            voiceChannelGuildId: _,
        } = e,
        b = await (0, A.hj)(a.pid),
        { gameName: E, gameId: v, exe: I, distributor: C, rawExePath: S } = (0, O.G8)(a),
        T = (0, P.NW)("ChatAutoAnalytics", !1),
        x = c.enabledLegacy || (T && c.enabledOOP),
        w = N.v.legacyEnabled || (T && N.v.oopEnabled),
        R = c.source;
    Q.default.track(X.rMx.LAUNCH_GAME, {
        game: E,
        game_id: v,
        verified: null != s && (0, O.vp)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (r = null == a ? void 0 : a.isLauncher) && r,
        game_platform: X.M7m.DESKTOP,
        detection_method: o,
        distributor: C,
        is_overlay_enabled: w,
        is_overlay_game_enabled: x,
        is_overlay_game_source: R,
        fullscreen_type: null != b ? u.Jx[b] : u.Jx.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (i = await (null === d.Z || void 0 === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount)
                ? void 0
                : t.call(n)))
                ? i
                : null,
        overlay_method: null != (l = j.gl[p]) ? l : __OVERLAY__ ? j.gl[j.gl.Hook] : null,
        activity_status_enabled: L.G6.getSetting(),
        activity_status_shared_guilds: f,
        current_user_status: F.Z.getStatus(),
        game_detection_enabled: (0, y.ik)(a),
        executable_path: I,
        voice_channel_id: h,
        voice_channel_type: g,
        voice_channel_bitrate: m,
        voice_channel_guild_id: _,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, Z.sD)(a),
    }),
        null != I && y.ZP.addExecutableTrackedByAnalytics(I);
}
class en extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a;
        let {
            voiceChannelId: o,
            voiceChannelGuildId: u,
            voiceChannelType: d,
            voiceChannelBitrate: p,
            videoEnabled: h,
            isScreenSharing: m,
            runningGame: v,
            runningGamePid: I,
            selectedChannelId: S,
            selectedGuildId: T,
            connected: N,
        } = this.props;
        if (e.voiceChannelId !== o && null != e.voiceChannelId) {
            let t = y.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = w.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = C.ZP.getActiveEventByChannel(e.voiceChannelId);
            Q.default.track(
                X.rMx.LEAVE_VOICE_CHANNEL,
                ee(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: B.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: B.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: B.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id,
                    },
                    (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    B.Z.getVoiceStateStats(),
                    b.Z.getSelectedParticipantStats(e.voiceChannelId),
                ),
            );
        }
        if (e.voiceChannelId !== o && null != o) {
            let e = y.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = w.Z.getStageInstanceByChannel(o),
                r = C.ZP.getActiveEventByChannel(o);
            (0, f.yw)(X.rMx.CHANNEL_OPENED, ee({}, (0, f.$H)(o))),
                (0, g.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: o });
            let i = null,
                l = K.default.getFocusedPID();
            null != l &&
                x.default.getOverlayMethod(l) !== j.gl.Disabled &&
                (K.default.isInstanceLocked()
                    ? (i = X.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : K.default.isInstanceLocked() ||
                      (i = K.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)),
                Q.default.track(
                    X.rMx.JOIN_VOICE_CHANNEL,
                    ee(
                        {
                            location: i,
                            channel_id: o,
                            channel_type: d,
                            channel_bitrate: p,
                            guild_id: u,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: B.Z.getWasMoved(),
                            join_voice_id: B.Z.getJoinVoiceId(),
                        },
                        (0, f.oG)(u, o),
                        (0, f.kO)(u, o, h),
                    ),
                );
        }
        let P =
                null != v &&
                null != v.distributor &&
                null != v.sku &&
                null != e.runningGame &&
                e.runningGame.distributor === v.distributor &&
                v.sku === e.runningGame.sku &&
                v.name === e.runningGame.name,
            A = null != e.runningGame && null != v && e.runningGame.isLauncher !== v.isLauncher;
        if (e.runningGame !== v && null != v && !v.isLauncher && (!P || A)) {
            let { gameId: e } = (0, O.G8)(v),
                a = void 0 !== e ? D.Z.getDetectableGame(e) : null,
                s = y.ZP.getOverrideForGame(v),
                f = k.Z.getGuildIds(),
                h = L.SE.getSetting(),
                g = f.filter((e) => !h.includes(e)).slice(0, 200),
                m = null;
            m = null != s ? "custom_override" : null != a ? "verified_game" : "launcher";
            let _ = x.default.getTrackedGameByPid(v.pid),
                b = (0, y.b6)(v),
                C = {
                    enabledOOP: null != (t = null == _ ? void 0 : _.oopEnabled) ? t : b.enabledOOP,
                    enabledLegacy: null != (n = null == _ ? void 0 : _.legacyEnabled) ? n : b.enabledLegacy,
                    overlayMethod: null != (r = null == _ ? void 0 : _.overlayMethod) ? r : b.overlayMethod,
                    source: null != (i = null == _ ? void 0 : _.source) ? i : b.source,
                    reason: "ChatAutoAnalytics",
                },
                S = null != (l = x.default.getOverlayMethod(v.pid)) ? l : C.overlayMethod;
            if (
                (setTimeout(() => {
                    (v.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : et)({
                        runningGame: v,
                        game: a,
                        detectionMethod: m,
                        overlayStatus: C,
                        overlayMethod: S,
                        sharedGuildIds: g,
                        voiceChannelId: o,
                        voiceChannelType: d,
                        voiceChannelBitrate: p,
                        voiceChannelGuildId: u,
                    });
                }, 10000),
                null != v.name && null != I && D.Z.shouldReport(v.name))
            ) {
                let e = v.name;
                c.Z.identifyGame(I, e)
                    .then((e) => c.Z.reportUnverifiedGame(e))
                    .catch((e) => new E.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if ((e.videoEnabled !== h || e.isScreenSharing !== m) && null != o) {
            let e = "none",
                t = [m ? "screen" : null, h ? "camera" : null].filter(J.lm),
                n = null;
            m ? ((e = "screen"), (n = (0, _.t)())) : h && (e = "camera"),
                Q.default.track(
                    X.rMx.VIDEO_INPUT_TOGGLED,
                    ee(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: L.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, f.AB)(o),
                    ),
                );
        }
        if (N && null != S && (!e.connected || S !== e.selectedChannelId || T !== e.selectedGuildId)) {
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
                                (0, s.yE)(e.flags, X.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                Q.default.track(
                    X.rMx.ACK_COMMUNITY_MESSAGES,
                    ee(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (a = i.messageReference) ? void 0 : a.message_id,
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
            $(this, "isMessageRequestsInitialized", !1),
            $(this, "debouncedRobloxAnalytics", a().debounce(et, 5000));
    }
}
function er() {
    let [e, t] = (0, o.Wu)([H.Z], () => [H.Z.getVoiceChannelId(), H.Z.getChannelId()], []),
        n = (0, o.e7)([R.Z], () => R.Z.getChannel(t), [t]),
        l = (0, o.e7)([b.Z], () => (null == n ? void 0 : n.id) != null && b.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.e7)([R.Z], () => R.Z.getChannel(e), [e]),
        c = (0, o.e7)([V.Z], () => V.Z.getGuildId(), []),
        u = (0, o.e7)([k.Z], () => k.Z.getGuild(c), [c]),
        d = (0, o.e7)([Y.default], () => Y.default.getCurrentUser(), []),
        _ = (0, o.e7)([M.ZP], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (t = null == (e = M.ZP.getMember(c, d.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [d, c]),
        E = (0, o.e7)([q.ZP], () => q.ZP.getState().section, []),
        O = (0, o.e7)([W.Z], () => W.Z.getHomeLink(), []),
        C = (0, o.e7)([v.Z], () => v.Z.isConnected(), []),
        [N, j] = (0, o.Wu)([U.Z], () => [U.Z.isVideoEnabled(), U.Z.isScreenSharing()], []),
        P = (0, o.e7)([F.Z], () => F.Z.getPrimaryActivity(), []),
        x = (0, o.e7)([y.ZP], () => y.ZP.getCurrentGameForAnalytics(), []),
        A = (0, I.Z)(c),
        Z = (0, o.e7)([T.Z], () => T.Z.getMessageRequestsCount(), []),
        w = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: E,
            homeLink: O,
            connected: C,
            videoEnabled: N,
            isScreenSharing: j,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            gamePlatform: (0, p.Z)(P),
            gameName: null != P ? P.name : null,
            gameId: null != P ? P.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(X.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: _,
            postableChannelCount: A,
            isTextInVoice: l,
            numMessageRequests: Z,
        },
        L = i.useRef(w);
    i.useEffect(() => {
        L.current = w;
    }, [w]);
    let {
        connected: D,
        friendsTabSection: G,
        homeLink: B,
        isMemberPending: K,
        selectedChannelId: J,
        selectedGuildId: $,
    } = w;
    i.useEffect(() => {
        if (D && null != J) {
            let e = (0, h.K)(R.Z.getChannel(J), !0);
            (0, f.yw)(X.rMx.CHANNEL_OPENED, ee({}, e, (0, f.$H)(J))),
                (0, g.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: J }),
                L.current.isTextInVoice &&
                    (0, f.yw)(X.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: L.current.isNSFWChannel });
        }
    }, [D, J]),
        i.useEffect(() => {
            D && null == $ && (B === X.Z5c.FRIENDS || B === X.Z5c.ME_ACTIVITY) && (0, m.Z)({ tab_opened: G });
        }, [D, G, B, $]),
        i.useEffect(() => {
            if (D && null != $) {
                var e, t, n, r;
                let i =
                    ((n = ee(
                        {},
                        K
                            ? {
                                  is_pending: K,
                                  preview_enabled: L.current.hasPreviewEnabled,
                              }
                            : {},
                    )),
                    (r = r =
                        {
                            postable_channels: L.current.postableChannelCount,
                            premium_progress_bar_enabled:
                                null !=
                                    (t =
                                        null == (e = k.Z.getGuild(V.Z.getGuildId()))
                                            ? void 0
                                            : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !z.ZP.isOptInEnabled($),
                            num_recent_channels: S.Z.recentsChannelCount($),
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
                (0, f.yw)(X.rMx.GUILD_VIEWED, i), (0, g.a)(X.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: $ });
            }
        }, [D, $, K]);
    let et = i.useRef(!1);
    return (
        i.useEffect(() => {
            D &&
                null == $ &&
                B === X.Z5c.MESSAGE_REQUESTS &&
                !et.current &&
                ((et.current = !0),
                Q.default.track(X.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: L.current.numMessageRequests,
                }));
        }, [D, $, B]),
        (0, r.jsx)(en, ee({}, w))
    );
}
