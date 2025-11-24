n.d(t, { Z: () => en }), n(583741), n(997841), n(388685);
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
    Q = n(823379),
    J = n(981631);
function X(e, t, n) {
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
function $(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
async function ee(e) {
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
        b = await (0, x.hj)(a.pid),
        { gameName: E, gameId: v, exe: I, distributor: C, rawExePath: S } = (0, O.G8)(a),
        T = c.enabledLegacy || c.enabledOOP,
        P = N.v.legacyEnabled || N.v.oopEnabled,
        Z = c.source;
    K.default.track(J.rMx.LAUNCH_GAME, {
        game: E,
        game_id: v,
        verified: null != s && (0, O.vp)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (r = null == a ? void 0 : a.isLauncher) && r,
        game_platform: J.M7m.DESKTOP,
        detection_method: o,
        distributor: C,
        is_overlay_enabled: P,
        is_overlay_game_enabled: T,
        is_overlay_game_source: Z,
        fullscreen_type: null != b ? u.Jx[b] : u.Jx.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (i = await (null === d.Z || void 0 === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount)
                ? void 0
                : t.call(n)))
                ? i
                : null,
        overlay_method: null != (l = j.gl[p]) ? l : __OVERLAY__ ? j.gl[j.gl.Hook] : null,
        activity_status_enabled: w.G6.getSetting(),
        activity_status_shared_guilds: f,
        current_user_status: V.Z.getStatus(),
        game_detection_enabled: (0, y.ik)(a),
        executable_path: I,
        voice_channel_id: h,
        voice_channel_type: g,
        voice_channel_bitrate: m,
        voice_channel_guild_id: _,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, A.sD)(a),
    }),
        null != I && y.ZP.addExecutableTrackedByAnalytics(I);
}
class et extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a, o;
        let {
            voiceChannelId: u,
            voiceChannelGuildId: d,
            voiceChannelType: p,
            voiceChannelBitrate: h,
            videoEnabled: m,
            isScreenSharing: v,
            runningGame: I,
            runningGamePid: S,
            selectedChannelId: T,
            selectedGuildId: N,
            connected: x,
        } = this.props;
        if (e.voiceChannelId !== u && null != e.voiceChannelId) {
            let n = y.ZP.getCurrentGameForAnalytics(),
                r = null != n ? n.name : "",
                i = Z.Z.getStageInstanceByChannel(e.voiceChannelId),
                l = C.ZP.getActiveEventByChannel(e.voiceChannelId),
                a = G.Z.getLastRTCConnectionState();
            (null == a ? void 0 : a.channelId) !== e.voiceChannelId && (a = null),
                K.default.track(
                    J.rMx.LEAVE_VOICE_CHANNEL,
                    $(
                        {
                            channel_id: e.voiceChannelId,
                            channel_type: e.voiceChannelType,
                            channel_bitrate: e.voiceChannelBitrate,
                            guild_id: e.voiceChannelGuildId,
                            rtc_connection_id: null == a ? void 0 : a.rtcConnectionId,
                            game_name: r,
                            duration: null == a ? void 0 : a.duration,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            media_session_id: null == a ? void 0 : a.mediaSessionId,
                            stage_instance_id: null == i ? void 0 : i.id,
                            guild_scheduled_event_id: null == l ? void 0 : l.id,
                        },
                        (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                        null == a || null == (t = a.voiceStateAnalytics) ? void 0 : t.getStats(),
                        b.Z.getSelectedParticipantStats(e.voiceChannelId),
                    ),
                );
        }
        if (e.voiceChannelId !== u && null != u) {
            let e = y.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = Z.Z.getStageInstanceByChannel(u),
                r = C.ZP.getActiveEventByChannel(u);
            (0, f.yw)(J.rMx.CHANNEL_OPENED, $({}, (0, f.$H)(u))),
                (0, g.a)(J.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: u });
            let i = null,
                l = q.default.getFocusedPID();
            null != l &&
                P.default.getOverlayMethod(l) !== j.gl.Disabled &&
                (q.default.isInstanceLocked()
                    ? (i = J.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : q.default.isInstanceLocked() ||
                      (i = q.default.isPinned(J.Odu.TEXT) ? J.ADE.OVERLAY_UNLOCKED_PINNED : J.ADE.OVERLAY_UNLOCKED)),
                K.default.track(
                    J.rMx.JOIN_VOICE_CHANNEL,
                    $(
                        {
                            location: i,
                            channel_id: u,
                            channel_type: p,
                            channel_bitrate: h,
                            guild_id: d,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: G.Z.getWasMoved(),
                            join_voice_id: G.Z.getJoinVoiceId(),
                        },
                        (0, f.oG)(d, u),
                        (0, f.kO)(d, u, m),
                    ),
                );
        }
        let A =
                null != I &&
                null != I.distributor &&
                null != I.sku &&
                null != e.runningGame &&
                e.runningGame.distributor === I.distributor &&
                I.sku === e.runningGame.sku &&
                I.name === e.runningGame.name,
            D = null != e.runningGame && null != I && e.runningGame.isLauncher !== I.isLauncher;
        if (e.runningGame !== I && null != I && !I.isLauncher && (!A || D)) {
            let { gameId: e } = (0, O.G8)(I),
                t = void 0 !== e ? R.Z.getDetectableGame(e) : null,
                s = y.ZP.getOverrideForGame(I),
                o = M.Z.getGuildIds(),
                f = w.SE.getSetting(),
                g = o.filter((e) => !f.includes(e)).slice(0, 200),
                m = null;
            m = null != s ? "custom_override" : null != t ? "verified_game" : "launcher";
            let _ = P.default.getTrackedGameByPid(I.pid),
                b = (0, y.b6)(I),
                v = {
                    enabledOOP: null != (n = null == _ ? void 0 : _.oopEnabled) ? n : b.enabledOOP,
                    enabledLegacy: null != (r = null == _ ? void 0 : _.legacyEnabled) ? r : b.enabledLegacy,
                    overlayMethod: null != (i = null == _ ? void 0 : _.overlayMethod) ? i : b.overlayMethod,
                    source: null != (l = null == _ ? void 0 : _.source) ? l : b.source,
                    reason: "ChatAutoAnalytics",
                },
                C = null != (a = P.default.getOverlayMethod(I.pid)) ? a : v.overlayMethod;
            if (
                (setTimeout(() => {
                    (I.distributor === J.GQo.ROBLOX ? this.debouncedRobloxAnalytics : ee)({
                        runningGame: I,
                        game: t,
                        detectionMethod: m,
                        overlayStatus: v,
                        overlayMethod: C,
                        sharedGuildIds: g,
                        voiceChannelId: u,
                        voiceChannelType: p,
                        voiceChannelBitrate: h,
                        voiceChannelGuildId: d,
                    });
                }, 10000),
                null != I.name && null != S && R.Z.shouldReport(I.name))
            ) {
                let e = I.name;
                c.Z.identifyGame(S, e)
                    .then((e) => c.Z.reportUnverifiedGame(e))
                    .catch((e) => new E.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if ((e.videoEnabled !== m || e.isScreenSharing !== v) && null != u) {
            let e = "none",
                t = [v ? "screen" : null, m ? "camera" : null].filter(Q.lm),
                n = null;
            v ? ((e = "screen"), (n = (0, _.t)())) : m && (e = "camera"),
                K.default.track(
                    J.rMx.VIDEO_INPUT_TOGGLED,
                    $(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: w.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, f.AB)(u),
                    ),
                );
        }
        if (x && null != T && (!e.connected || T !== e.selectedChannelId || N !== e.selectedGuildId)) {
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
                                (0, s.yE)(e.flags, J.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                K.default.track(
                    J.rMx.ACK_COMMUNITY_MESSAGES,
                    $(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (o = i.messageReference) ? void 0 : o.message_id,
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
            X(this, "isMessageRequestsInitialized", !1),
            X(this, "debouncedRobloxAnalytics", a().debounce(ee, 5000));
    }
}
function en() {
    let [e, t] = (0, o.Wu)([B.Z], () => [B.Z.getVoiceChannelId(), B.Z.getChannelId()], []),
        n = (0, o.e7)([L.Z], () => L.Z.getChannel(t), [t]),
        l = (0, o.e7)([b.Z], () => (null == n ? void 0 : n.id) != null && b.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.e7)([L.Z], () => L.Z.getChannel(e), [e]),
        c = (0, o.e7)([H.Z], () => H.Z.getGuildId(), []),
        u = (0, o.e7)([M.Z], () => M.Z.getGuild(c), [c]),
        d = (0, o.e7)([z.default], () => z.default.getCurrentUser(), []),
        _ = (0, o.e7)([D.ZP], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (t = null == (e = D.ZP.getMember(c, d.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [d, c]),
        E = (0, o.e7)([W.ZP], () => W.ZP.getState().section, []),
        O = (0, o.e7)([Y.Z], () => Y.Z.getHomeLink(), []),
        C = (0, o.e7)([v.Z], () => v.Z.isConnected(), []),
        [N, j] = (0, o.Wu)([k.Z], () => [k.Z.isVideoEnabled(), k.Z.isScreenSharing()], []),
        P = (0, o.e7)([V.Z], () => V.Z.getPrimaryActivity(), []),
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
            hasPreviewEnabled: null == u ? void 0 : u.features.has(J.GuildFeatures.PREVIEW_ENABLED),
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
        homeLink: q,
        isMemberPending: Q,
        selectedChannelId: X,
        selectedGuildId: ee,
    } = w;
    i.useEffect(() => {
        if (U && null != X) {
            let e = (0, h.K)(L.Z.getChannel(X), !0);
            (0, f.yw)(J.rMx.CHANNEL_OPENED, $({}, e, (0, f.$H)(X))),
                (0, g.a)(J.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: X }),
                R.current.isTextInVoice &&
                    (0, f.yw)(J.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: R.current.isNSFWChannel });
        }
    }, [U, X]),
        i.useEffect(() => {
            U && null == ee && (q === J.Z5c.FRIENDS || q === J.Z5c.ME_ACTIVITY) && (0, m.Z)({ tab_opened: G });
        }, [U, G, q, ee]),
        i.useEffect(() => {
            if (U && null != ee) {
                var e, t, n, r;
                let i =
                    ((n = $(
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
                            viewing_all_channels: !F.ZP.isOptInEnabled(ee),
                            num_recent_channels: S.Z.recentsChannelCount(ee),
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
                (0, f.yw)(J.rMx.GUILD_VIEWED, i), (0, g.a)(J.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: ee });
            }
        }, [U, ee, Q]);
    let en = i.useRef(!1);
    return (
        i.useEffect(() => {
            U &&
                null == ee &&
                q === J.Z5c.MESSAGE_REQUESTS &&
                !en.current &&
                ((en.current = !0),
                K.default.track(J.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: R.current.numMessageRequests,
                }));
        }, [U, ee, q]),
        (0, r.jsx)(et, $({}, w))
    );
}
