n.d(t, { Z: () => er }), n(583741), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(224706),
    c = n(593472),
    u = n(579806),
    d = n(941033),
    p = n(367907),
    f = n(731429),
    h = n(188471),
    g = n(176881),
    m = n(318885),
    b = n(358221),
    _ = n(710845),
    O = n(581567),
    E = n(594190),
    y = n(38618),
    v = n(489745),
    I = n(924301),
    S = n(734307),
    C = n(355298),
    T = n(454991),
    N = n(837268),
    P = n(32300),
    j = n(371651),
    x = n(829907),
    A = n(509003),
    Z = n(427679),
    w = n(695346),
    L = n(592125),
    R = n(77498),
    D = n(271383),
    k = n(430824),
    M = n(131951),
    U = n(375954),
    G = n(19780),
    B = n(944486),
    V = n(914010),
    H = n(885110),
    F = n(9156),
    z = n(594174),
    W = n(774343),
    Y = n(974042),
    K = n(237997),
    q = n(626135),
    Q = n(630388),
    X = n(823379),
    J = n(981631);
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
            game: o,
            detectionMethod: s,
            overlayStatus: d,
            overlayMethod: p,
            sharedGuildIds: f,
            voiceChannelId: h,
            voiceChannelType: g,
            voiceChannelBitrate: m,
            voiceChannelGuildId: b,
        } = e,
        _ = await (0, x.hj)(a.pid),
        { gameName: y, gameId: v, exe: I, distributor: S } = (0, O.G8)(a),
        C = (0, P.NW)("ChatAutoAnalytics", !1),
        j = d.enabledLegacy || (C && d.enabledOOP),
        Z = T.v.legacyEnabled || (C && T.v.oopEnabled),
        L = d.source;
    q.default.track(J.rMx.LAUNCH_GAME, {
        game: y,
        game_id: v,
        verified: null != o && (0, O.vp)(I, null == o ? void 0 : o.executables),
        elevated: a.elevated,
        is_launcher: null != (r = null == a ? void 0 : a.isLauncher) && r,
        game_platform: J.M7m.DESKTOP,
        detection_method: s,
        distributor: S,
        is_overlay_enabled: Z,
        is_overlay_game_enabled: j,
        is_overlay_game_source: L,
        fullscreen_type: null != _ ? c.Jx[_] : c.Jx.UNKNOWN.toString(),
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
        current_user_status: H.Z.getStatus(),
        game_detection_enabled: (0, E.ik)(a),
        executable_path: I,
        voice_channel_id: h,
        voice_channel_type: g,
        voice_channel_bitrate: m,
        voice_channel_guild_id: b,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, A.sD)(a),
    }),
        null != I && E.ZP.addExecutableTrackedByAnalytics(I);
}
class en extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a;
        let {
            voiceChannelId: o,
            voiceChannelGuildId: c,
            voiceChannelType: u,
            voiceChannelBitrate: d,
            videoEnabled: f,
            isScreenSharing: g,
            runningGame: y,
            runningGamePid: v,
            selectedChannelId: S,
            selectedGuildId: C,
            connected: T,
        } = this.props;
        if (e.voiceChannelId !== o && null != e.voiceChannelId) {
            let t = E.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = Z.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = I.ZP.getActiveEventByChannel(e.voiceChannelId);
            q.default.track(
                J.rMx.LEAVE_VOICE_CHANNEL,
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
                    b.Z.getSelectedParticipantStats(e.voiceChannelId),
                ),
            );
        }
        if (e.voiceChannelId !== o && null != o) {
            let e = E.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = Z.Z.getStageInstanceByChannel(o),
                r = I.ZP.getActiveEventByChannel(o);
            (0, p.yw)(J.rMx.CHANNEL_OPENED, ee({}, (0, p.$H)(o))),
                (0, h.a)(J.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: o });
            let i = null,
                l = K.default.getFocusedPID();
            null != l &&
                j.default.getOverlayMethod(l) !== N.gl.Disabled &&
                (K.default.isInstanceLocked()
                    ? (i = J.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : K.default.isInstanceLocked() ||
                      (i = K.default.isPinned(J.Odu.TEXT) ? J.ADE.OVERLAY_UNLOCKED_PINNED : J.ADE.OVERLAY_UNLOCKED)),
                q.default.track(
                    J.rMx.JOIN_VOICE_CHANNEL,
                    ee(
                        {
                            location: i,
                            channel_id: o,
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
                        (0, p.oG)(c, o),
                        (0, p.kO)(c, o, f),
                    ),
                );
        }
        let P =
                null != y &&
                null != y.distributor &&
                null != y.sku &&
                null != e.runningGame &&
                e.runningGame.distributor === y.distributor &&
                y.sku === e.runningGame.sku &&
                y.name === e.runningGame.name,
            x = null != e.runningGame && null != y && e.runningGame.isLauncher !== y.isLauncher;
        if (e.runningGame !== y && null != y && !y.isLauncher && (!P || x)) {
            let { gameId: e } = (0, O.G8)(y),
                a = void 0 !== e ? R.Z.getDetectableGame(e) : null,
                p = E.ZP.getOverrideForGame(y),
                f = k.Z.getGuildIds(),
                h = w.SE.getSetting(),
                g = f.filter((e) => !h.includes(e)).slice(0, 200),
                m = null;
            m = null != p ? "custom_override" : null != a ? "verified_game" : "launcher";
            let b = j.default.getTrackedGameByPid(y.pid),
                I = (0, E.b6)(y),
                S = {
                    enabledOOP: null != (t = null == b ? void 0 : b.oopEnabled) ? t : I.enabledOOP,
                    enabledLegacy: null != (n = null == b ? void 0 : b.legacyEnabled) ? n : I.enabledLegacy,
                    overlayMethod: null != (r = null == b ? void 0 : b.overlayMethod) ? r : I.overlayMethod,
                    source: null != (i = null == b ? void 0 : b.source) ? i : I.source,
                },
                C = null != (l = j.default.getOverlayMethod(y.pid)) ? l : S.overlayMethod;
            if (
                (setTimeout(() => {
                    (y.distributor === J.GQo.ROBLOX ? this.debouncedRobloxAnalytics : et)({
                        runningGame: y,
                        game: a,
                        detectionMethod: m,
                        overlayStatus: S,
                        overlayMethod: C,
                        sharedGuildIds: g,
                        voiceChannelId: o,
                        voiceChannelType: u,
                        voiceChannelBitrate: d,
                        voiceChannelGuildId: c,
                    });
                }, 10000),
                null != y.name && null != v && R.Z.shouldReport(y.name))
            ) {
                let e = y.name;
                s.Z.identifyGame(v, e)
                    .then((e) => s.Z.reportUnverifiedGame(e))
                    .catch((e) => new _.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if ((e.videoEnabled !== f || e.isScreenSharing !== g) && null != o) {
            let e = "none",
                t = [g ? "screen" : null, f ? "camera" : null].filter(X.lm),
                n = null;
            g ? ((e = "screen"), (n = (0, m.t)())) : f && (e = "camera"),
                q.default.track(
                    J.rMx.VIDEO_INPUT_TOGGLED,
                    ee(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: w.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, p.AB)(o),
                    ),
                );
        }
        if (T && null != S && (!e.connected || S !== e.selectedChannelId || C !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = L.Z.getChannel(t),
                r = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = U.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, Q.yE)(e.flags, J.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                q.default.track(
                    J.rMx.ACK_COMMUNITY_MESSAGES,
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
    let [e, t] = (0, o.Wu)([B.Z], () => [B.Z.getVoiceChannelId(), B.Z.getChannelId()], []),
        n = (0, o.e7)([L.Z], () => L.Z.getChannel(t), [t]),
        l = (0, o.e7)([b.Z], () => (null == n ? void 0 : n.id) != null && b.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.e7)([L.Z], () => L.Z.getChannel(e), [e]),
        c = (0, o.e7)([V.Z], () => V.Z.getGuildId(), []),
        u = (0, o.e7)([k.Z], () => k.Z.getGuild(c), [c]),
        m = (0, o.e7)([z.default], () => z.default.getCurrentUser(), []),
        _ = (0, o.e7)([D.ZP], () => {
            var e, t;
            return (
                null != m &&
                null != c &&
                null != (t = null == (e = D.ZP.getMember(c, m.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [m, c]),
        O = (0, o.e7)([Y.ZP], () => Y.ZP.getState().section, []),
        I = (0, o.e7)([W.Z], () => W.Z.getHomeLink(), []),
        T = (0, o.e7)([y.Z], () => y.Z.isConnected(), []),
        [N, P] = (0, o.Wu)([M.Z], () => [M.Z.isVideoEnabled(), M.Z.isScreenSharing()], []),
        j = (0, o.e7)([H.Z], () => H.Z.getPrimaryActivity(), []),
        x = (0, o.e7)([E.ZP], () => E.ZP.getCurrentGameForAnalytics(), []),
        A = (0, v.Z)(c),
        Z = (0, o.e7)([C.Z], () => C.Z.getMessageRequestsCount(), []),
        w = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: O,
            homeLink: I,
            connected: T,
            videoEnabled: N,
            isScreenSharing: P,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            gamePlatform: (0, d.Z)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(J.oNc.PREVIEW_ENABLED),
            isMemberPending: _,
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
        homeLink: K,
        isMemberPending: Q,
        selectedChannelId: X,
        selectedGuildId: $,
    } = w;
    i.useEffect(() => {
        if (U && null != X) {
            let e = (0, f.K)(L.Z.getChannel(X), !0);
            (0, p.yw)(J.rMx.CHANNEL_OPENED, ee({}, e, (0, p.$H)(X))),
                (0, h.a)(J.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: X }),
                R.current.isTextInVoice &&
                    (0, p.yw)(J.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: R.current.isNSFWChannel });
        }
    }, [U, X]),
        i.useEffect(() => {
            U && null == $ && K === J.Z5c.FRIENDS && (0, g.Z)({ tab_opened: G });
        }, [U, G, K, $]),
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
                                        null == (e = k.Z.getGuild(V.Z.getGuildId()))
                                            ? void 0
                                            : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !F.ZP.isOptInEnabled($),
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
                (0, p.yw)(J.rMx.GUILD_VIEWED, i), (0, h.a)(J.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: $ });
            }
        }, [U, $, Q]);
    let et = i.useRef(!1);
    return (
        i.useEffect(() => {
            U &&
                null == $ &&
                K === J.Z5c.MESSAGE_REQUESTS &&
                !et.current &&
                ((et.current = !0),
                q.default.track(J.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: R.current.numMessageRequests,
                }));
        }, [U, $, K]),
        (0, r.jsx)(en, ee({}, w))
    );
}
