n.d(t, { Z: () => er }), n(583741), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(224706),
    c = n(593472),
    u = n(579806),
    d = n(603113),
    p = n(367907),
    f = n(731429),
    h = n(188471),
    g = n(176881),
    m = n(318885),
    _ = n(358221),
    b = n(710845),
    E = n(581567),
    O = n(594190),
    y = n(38618),
    v = n(501640),
    I = n(924301),
    C = n(734307),
    S = n(355298),
    T = n(454991),
    N = n(837268),
    j = n(32300),
    P = n(371651),
    x = n(829907),
    A = n(509003),
    Z = n(427679),
    w = n(695346),
    L = n(592125),
    R = n(77498),
    D = n(271383),
    M = n(430824),
    k = n(131951),
    U = n(375954),
    G = n(19780),
    B = n(944486),
    H = n(914010),
    V = n(885110),
    F = n(9156),
    z = n(594174),
    Y = n(774343),
    W = n(974042),
    q = n(237997),
    K = n(626135),
    Q = n(630388),
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
            overlayStatus: d,
            overlayMethod: p,
            sharedGuildIds: f,
            voiceChannelId: h,
            voiceChannelType: g,
            voiceChannelBitrate: m,
            voiceChannelGuildId: _,
        } = e,
        b = await (0, x.hj)(a.pid),
        { gameName: y, gameId: v, exe: I, distributor: C, rawExePath: S } = (0, E.G8)(a),
        P = (0, j.NW)("ChatAutoAnalytics", !1),
        Z = d.enabledLegacy || (P && d.enabledOOP),
        L = T.v.legacyEnabled || (P && T.v.oopEnabled),
        R = d.source;
    K.default.track(X.rMx.LAUNCH_GAME, {
        game: y,
        game_id: v,
        verified: null != s && (0, E.vp)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (r = null == a ? void 0 : a.isLauncher) && r,
        game_platform: X.M7m.DESKTOP,
        detection_method: o,
        distributor: C,
        is_overlay_enabled: L,
        is_overlay_game_enabled: Z,
        is_overlay_game_source: R,
        fullscreen_type: null != b ? c.Jx[b] : c.Jx.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (i = await (null === u.Z || void 0 === u.Z || null == (n = u.Z.hardware) || null == (t = n.getDisplayCount)
                ? void 0
                : t.call(n)))
                ? i
                : null,
        overlay_method: null != (l = N.gl[p]) ? l : __OVERLAY__ ? N.gl[N.gl.Hook] : null,
        activity_status_enabled: w.G6.getSetting(),
        activity_status_shared_guilds: f,
        current_user_status: V.Z.getStatus(),
        game_detection_enabled: (0, O.ik)(a),
        executable_path: I,
        voice_channel_id: h,
        voice_channel_type: g,
        voice_channel_bitrate: m,
        voice_channel_guild_id: _,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, A.sD)(a),
    }),
        null != I && O.ZP.addExecutableTrackedByAnalytics(I);
}
class en extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a;
        let {
            voiceChannelId: s,
            voiceChannelGuildId: c,
            voiceChannelType: u,
            voiceChannelBitrate: d,
            videoEnabled: f,
            isScreenSharing: g,
            runningGame: y,
            runningGamePid: v,
            selectedChannelId: C,
            selectedGuildId: S,
            connected: T,
        } = this.props;
        if (e.voiceChannelId !== s && null != e.voiceChannelId) {
            let t = O.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = Z.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = I.ZP.getActiveEventByChannel(e.voiceChannelId);
            K.default.track(
                X.rMx.LEAVE_VOICE_CHANNEL,
                ee(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: G.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: G.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: G.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id,
                    },
                    (0, p.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    G.Z.getVoiceStateStats(),
                    _.Z.getSelectedParticipantStats(e.voiceChannelId),
                ),
            );
        }
        if (e.voiceChannelId !== s && null != s) {
            let e = O.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = Z.Z.getStageInstanceByChannel(s),
                r = I.ZP.getActiveEventByChannel(s);
            (0, p.yw)(X.rMx.CHANNEL_OPENED, ee({}, (0, p.$H)(s))),
                (0, h.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: s });
            let i = null,
                l = q.default.getFocusedPID();
            null != l &&
                P.default.getOverlayMethod(l) !== N.gl.Disabled &&
                (q.default.isInstanceLocked()
                    ? (i = X.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : q.default.isInstanceLocked() ||
                      (i = q.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)),
                K.default.track(
                    X.rMx.JOIN_VOICE_CHANNEL,
                    ee(
                        {
                            location: i,
                            channel_id: s,
                            channel_type: u,
                            channel_bitrate: d,
                            guild_id: c,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: G.Z.getWasMoved(),
                            join_voice_id: G.Z.getJoinVoiceId(),
                        },
                        (0, p.oG)(c, s),
                        (0, p.kO)(c, s, f),
                    ),
                );
        }
        let j =
                null != y &&
                null != y.distributor &&
                null != y.sku &&
                null != e.runningGame &&
                e.runningGame.distributor === y.distributor &&
                y.sku === e.runningGame.sku &&
                y.name === e.runningGame.name,
            x = null != e.runningGame && null != y && e.runningGame.isLauncher !== y.isLauncher;
        if (e.runningGame !== y && null != y && !y.isLauncher && (!j || x)) {
            let { gameId: e } = (0, E.G8)(y),
                a = void 0 !== e ? R.Z.getDetectableGame(e) : null,
                p = O.ZP.getOverrideForGame(y),
                f = M.Z.getGuildIds(),
                h = w.SE.getSetting(),
                g = f.filter((e) => !h.includes(e)).slice(0, 200),
                m = null;
            m = null != p ? "custom_override" : null != a ? "verified_game" : "launcher";
            let _ = P.default.getTrackedGameByPid(y.pid),
                I = (0, O.b6)(y),
                C = {
                    enabledOOP: null != (t = null == _ ? void 0 : _.oopEnabled) ? t : I.enabledOOP,
                    enabledLegacy: null != (n = null == _ ? void 0 : _.legacyEnabled) ? n : I.enabledLegacy,
                    overlayMethod: null != (r = null == _ ? void 0 : _.overlayMethod) ? r : I.overlayMethod,
                    source: null != (i = null == _ ? void 0 : _.source) ? i : I.source,
                    reason: "ChatAutoAnalytics",
                },
                S = null != (l = P.default.getOverlayMethod(y.pid)) ? l : C.overlayMethod;
            if (
                (setTimeout(() => {
                    (y.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : et)({
                        runningGame: y,
                        game: a,
                        detectionMethod: m,
                        overlayStatus: C,
                        overlayMethod: S,
                        sharedGuildIds: g,
                        voiceChannelId: s,
                        voiceChannelType: u,
                        voiceChannelBitrate: d,
                        voiceChannelGuildId: c,
                    });
                }, 10000),
                null != y.name && null != v && R.Z.shouldReport(y.name))
            ) {
                let e = y.name;
                o.Z.identifyGame(v, e)
                    .then((e) => o.Z.reportUnverifiedGame(e))
                    .catch((e) => new b.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if ((e.videoEnabled !== f || e.isScreenSharing !== g) && null != s) {
            let e = "none",
                t = [g ? "screen" : null, f ? "camera" : null].filter(J.lm),
                n = null;
            g ? ((e = "screen"), (n = (0, m.t)())) : f && (e = "camera"),
                K.default.track(
                    X.rMx.VIDEO_INPUT_TOGGLED,
                    ee(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: w.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, p.AB)(s),
                    ),
                );
        }
        if (T && null != C && (!e.connected || C !== e.selectedChannelId || S !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = L.Z.getChannel(t),
                r = M.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = U.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, Q.yE)(e.flags, X.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                K.default.track(
                    X.rMx.ACK_COMMUNITY_MESSAGES,
                    ee(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (a = i.messageReference) ? void 0 : a.message_id,
                            messages_loaded: e.hasFetched,
                        },
                        (0, p.v_)(n),
                        (0, p.hH)(r.id),
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
    let [e, t] = (0, s.Wu)([B.Z], () => [B.Z.getVoiceChannelId(), B.Z.getChannelId()], []),
        n = (0, s.e7)([L.Z], () => L.Z.getChannel(t), [t]),
        l = (0, s.e7)([_.Z], () => (null == n ? void 0 : n.id) != null && _.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        o = (0, s.e7)([L.Z], () => L.Z.getChannel(e), [e]),
        c = (0, s.e7)([H.Z], () => H.Z.getGuildId(), []),
        u = (0, s.e7)([M.Z], () => M.Z.getGuild(c), [c]),
        m = (0, s.e7)([z.default], () => z.default.getCurrentUser(), []),
        b = (0, s.e7)([D.ZP], () => {
            var e, t;
            return (
                null != m &&
                null != c &&
                null != (t = null == (e = D.ZP.getMember(c, m.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [m, c]),
        E = (0, s.e7)([W.ZP], () => W.ZP.getState().section, []),
        I = (0, s.e7)([Y.Z], () => Y.Z.getHomeLink(), []),
        T = (0, s.e7)([y.Z], () => y.Z.isConnected(), []),
        [N, j] = (0, s.Wu)([k.Z], () => [k.Z.isVideoEnabled(), k.Z.isScreenSharing()], []),
        P = (0, s.e7)([V.Z], () => V.Z.getPrimaryActivity(), []),
        x = (0, s.e7)([O.ZP], () => O.ZP.getCurrentGameForAnalytics(), []),
        A = (0, v.Z)(c),
        Z = (0, s.e7)([S.Z], () => S.Z.getMessageRequestsCount(), []),
        w = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: E,
            homeLink: I,
            connected: T,
            videoEnabled: N,
            isScreenSharing: j,
            voiceChannelId: null == o ? void 0 : o.id,
            voiceChannelGuildId: null == o ? void 0 : o.getGuildId(),
            voiceChannelType: null == o ? void 0 : o.type,
            voiceChannelBitrate: null == o ? void 0 : o.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            gamePlatform: (0, d.Z)(P),
            gameName: null != P ? P.name : null,
            gameId: null != P ? P.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(X.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: b,
            postableChannelCount: A,
            isTextInVoice: l,
            numMessageRequests: Z,
        },
        R = i.useRef(w);
    i.useEffect(() => {
        R.current = w;
    }, [w]);
    let {
        connected: U,
        friendsTabSection: G,
        homeLink: q,
        isMemberPending: Q,
        selectedChannelId: J,
        selectedGuildId: $,
    } = w;
    i.useEffect(() => {
        if (U && null != J) {
            let e = (0, f.K)(L.Z.getChannel(J), !0);
            (0, p.yw)(X.rMx.CHANNEL_OPENED, ee({}, e, (0, p.$H)(J))),
                (0, h.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: J }),
                R.current.isTextInVoice &&
                    (0, p.yw)(X.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: R.current.isNSFWChannel });
        }
    }, [U, J]),
        i.useEffect(() => {
            U && null == $ && (q === X.Z5c.FRIENDS || q === X.Z5c.ME_ACTIVITY) && (0, g.Z)({ tab_opened: G });
        }, [U, G, q, $]),
        i.useEffect(() => {
            if (U && null != $) {
                var e, t, n, r;
                let i =
                    ((n = ee(
                        {},
                        Q
                            ? {
                                  is_pending: Q,
                                  preview_enabled: R.current.hasPreviewEnabled,
                              }
                            : {},
                    )),
                    (r = r =
                        {
                            postable_channels: R.current.postableChannelCount,
                            premium_progress_bar_enabled:
                                null !=
                                    (t =
                                        null == (e = M.Z.getGuild(H.Z.getGuildId()))
                                            ? void 0
                                            : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !F.ZP.isOptInEnabled($),
                            num_recent_channels: C.Z.recentsChannelCount($),
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
                (0, p.yw)(X.rMx.GUILD_VIEWED, i), (0, h.a)(X.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: $ });
            }
        }, [U, $, Q]);
    let et = i.useRef(!1);
    return (
        i.useEffect(() => {
            U &&
                null == $ &&
                q === X.Z5c.MESSAGE_REQUESTS &&
                !et.current &&
                ((et.current = !0),
                K.default.track(X.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: R.current.numMessageRequests,
                }));
        }, [U, $, q]),
        (0, r.jsx)(en, ee({}, w))
    );
}
