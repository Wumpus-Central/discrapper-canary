n.d(t, {
    A: () => ea,
}),
    n(264879),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(665260),
    o = n(311907),
    c = n(544420),
    u = n(56562),
    d = n(77729),
    p = n(855511),
    h = n(58149),
    g = n(332456),
    m = n(237774),
    f = n(504982),
    A = n(815706),
    _ = n(134047),
    b = n(313961),
    E = n(626584),
    O = n(953384),
    y = n(973522),
    I = n(15285),
    v = n(142120),
    S = n(442187),
    C = n(903223),
    N = n(698441),
    T = n(960755),
    j = n(380335),
    x = n(211753),
    P = n(41984),
    w = n(833551),
    L = n(515183),
    R = n(847521),
    D = n(446600),
    M = n(253932),
    k = n(734057),
    U = n(760751),
    G = n(696451),
    V = n(71393),
    B = n(430452),
    H = n(320501),
    F = n(383501),
    Y = n(309010),
    K = n(967198),
    W = n(461213),
    q = n(543465),
    z = n(287809),
    Q = n(619921),
    X = n(595623),
    Z = n(256415),
    J = n(954571),
    $ = n(403362),
    ee = n(652215),
    et = n(705751);

function en(e, t, n) {
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

function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
async function ei(e) {
    var t, n, r, i, l;
    let {
            runningGame: a,
            game: s,
            detectionMethod: o,
            overlayStatus: c,
            overlayMethod: p,
            sharedGuildIds: h,
            voiceChannelId: g,
            voiceChannelType: m,
            voiceChannelBitrate: f,
            voiceChannelGuildId: A,
        } = e,
        _ = await (0, L.E1)(a.pid),
        { gameName: b, gameId: E, exe: O, distributor: v, rawExePath: S } = (0, y.wH)(a),
        C = c.enabledLegacy || c.enabledOOP,
        N = x.x.legacyEnabled || x.x.oopEnabled,
        T = c.source;
    J.default.track(ee.HAw.LAUNCH_GAME, {
        game: b,
        game_id: E,
        verified: null != s && (0, y.PQ)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (t = null == a ? void 0 : a.isLauncher) && t,
        game_platform: ee.yTV.DESKTOP,
        detection_method: o,
        distributor: v,
        is_overlay_enabled: N,
        is_overlay_game_enabled: C,
        is_overlay_game_source: T,
        fullscreen_type: null != _ ? u.aI[_] : u.aI.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (n = await (null === d.A || void 0 === d.A || null == (l = d.A.hardware) || null == (i = l.getDisplayCount)
                ? void 0
                : i.call(l)))
                ? n
                : null,
        overlay_method: null != (r = P.Ue[p]) ? r : __OVERLAY__ ? P.Ue[P.Ue.Hook] : null,
        activity_status_enabled: M.tz.getSetting(),
        activity_status_shared_guilds: h,
        current_user_status: W.A.getStatus(),
        game_detection_enabled: (0, I.Xr)(a),
        executable_path: O,
        voice_channel_id: g,
        voice_channel_type: m,
        voice_channel_bitrate: f,
        voice_channel_guild_id: A,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, R.MT)(a),
    }),
        null != O && I.Ay.addExecutableTrackedByAnalytics(O);
}
class el extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a, o, u, d, p, g;
        let {
            voiceChannelId: f,
            voiceChannelGuildId: v,
            voiceChannelType: S,
            voiceChannelBitrate: C,
            videoEnabled: T,
            isScreenSharing: j,
            runningGame: x,
            runningGamePid: L,
            runningNonGame: R,
            selectedChannelId: G,
            selectedGuildId: B,
            connected: Y,
        } = this.props;
        if (e.voiceChannelId !== f && null != e.voiceChannelId) {
            let t = I.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = D.A.getStageInstanceByChannel(e.voiceChannelId),
                i = N.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = F.A.getLastRTCConnectionState();
            (null == a ? void 0 : a.channelId) !== e.voiceChannelId && (a = null),
                J.default.track(
                    ee.HAw.LEAVE_VOICE_CHANNEL,
                    er(
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
                        (0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                        null == a || null == (l = a.voiceStateAnalytics) ? void 0 : l.getStats(),
                        b.A.getSelectedParticipantStats(e.voiceChannelId),
                    ),
                );
        }
        if (e.voiceChannelId !== f && null != f) {
            let e = I.Ay.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = D.A.getStageInstanceByChannel(f),
                r = N.Ay.getActiveEventByChannel(f);
            (0, h.zV)(ee.HAw.CHANNEL_OPENED, er({}, (0, h.qL)(f))),
                (0, m.k)(ee.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                    channelId: f,
                });
            let i = null,
                l = Z.default.getFocusedPID();
            null != l &&
                w.default.getOverlayMethod(l) !== P.Ue.Disabled &&
                (Z.default.isInstanceLocked()
                    ? (i = ee.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : Z.default.isInstanceLocked() ||
                      (i = Z.default.isPinned(ee.uss.TEXT) ? ee.Xmn.OVERLAY_UNLOCKED_PINNED : ee.Xmn.OVERLAY_UNLOCKED)),
                J.default.track(
                    ee.HAw.JOIN_VOICE_CHANNEL,
                    er(
                        {
                            location: i,
                            channel_id: f,
                            channel_type: S,
                            channel_bitrate: C,
                            guild_id: v,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: F.A.getWasMoved(),
                            join_voice_id: F.A.getJoinVoiceId(),
                        },
                        (0, h.dL)(v, f),
                        (0, h.JK)(v, f, T),
                    ),
                );
        }
        let K =
                (null == x ? void 0 : x.distributor) === (null == (t = e.runningGame) ? void 0 : t.distributor) &&
                (null == x ? void 0 : x.sku) === (null == (n = e.runningGame) ? void 0 : n.sku) &&
                (null == x ? void 0 : x.name) === (null == (r = e.runningGame) ? void 0 : r.name),
            q = null != e.runningGame && null != x && e.runningGame.isLauncher !== x.isLauncher;
        if (e.runningGame !== x && null != x && !x.isLauncher && (!K || q)) {
            let { gameId: e } = (0, y.wH)(x),
                t = void 0 !== e ? U.A.getDetectableGame(e) : null,
                n = I.Ay.getOverrideForGame(x),
                r = V.A.getGuildIds(),
                i = M.JG.getSetting(),
                l = r.filter((e) => !i.includes(e)).slice(0, 200),
                s = null;
            s = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
            let h = w.default.getTrackedGameByPid(x.pid),
                g = (0, I.hw)(x),
                m = {
                    enabledOOP: null != (a = null == h ? void 0 : h.oopEnabled) ? a : g.enabledOOP,
                    enabledLegacy: null != (o = null == h ? void 0 : h.legacyEnabled) ? o : g.enabledLegacy,
                    overlayMethod: null != (u = null == h ? void 0 : h.overlayMethod) ? u : g.overlayMethod,
                    source: null != (d = null == h ? void 0 : h.source) ? d : g.source,
                    reason: "ChatAutoAnalytics",
                },
                A = null != (p = w.default.getOverlayMethod(x.pid)) ? p : m.overlayMethod;
            if (
                (setTimeout(() => {
                    (x.distributor === ee.d3x.ROBLOX ? this.debouncedRobloxAnalytics : ei)({
                        runningGame: x,
                        game: t,
                        detectionMethod: s,
                        overlayStatus: m,
                        overlayMethod: A,
                        sharedGuildIds: l,
                        voiceChannelId: f,
                        voiceChannelType: S,
                        voiceChannelBitrate: C,
                        voiceChannelGuildId: v,
                    });
                }, 1e4),
                null != x.name && null != L && U.A.shouldReport(x))
            ) {
                let e = x.name;
                c.A.identifyGame(L, e)
                    .then((e) => c.A.reportUnverifiedGame(e))
                    .catch((e) => new E.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (
            e.runningNonGame !== R &&
            (null == R ? void 0 : R.id) != null &&
            (null == (i = e.runningNonGame) ? void 0 : i.id) !== R.id
        ) {
            let e = O.A.getById(R.id);
            null != e &&
                J.default.track(ee.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: et.S7.NON_GAME_DETECTABLE,
                    elevated: R.elevated,
                    game_platform: ee.yTV.DESKTOP,
                    distributor: R.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: W.A.getStatus(),
                    executable_path: (0, y.Ic)(R.exePath),
                    voice_channel_id: f,
                    voice_channel_type: S,
                    voice_channel_bitrate: C,
                    voice_channel_guild_id: v,
                });
        }
        if ((e.videoEnabled !== T || e.isScreenSharing !== j) && null != f) {
            let e = "none",
                t = [j ? "screen" : null, T ? "camera" : null].filter($.Vq),
                n = null;
            j ? ((e = "screen"), (n = (0, A.p)())) : T && (e = "camera"),
                J.default.track(
                    ee.HAw.VIDEO_INPUT_TOGGLED,
                    er(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: M.bm.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, h.QS)(f),
                    ),
                );
        }
        if (Y && null != G && (!e.connected || G !== e.selectedChannelId || B !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = k.A.getChannel(t),
                r = V.A.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = H.A.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, s.Lt)(e.flags, ee.pr7.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                J.default.track(
                    ee.HAw.ACK_COMMUNITY_MESSAGES,
                    er(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (g = i.messageReference) ? void 0 : g.message_id,
                            messages_loaded: e.hasFetched,
                        },
                        (0, h.dI)(n),
                        (0, h.H$)(r.id),
                    ),
                );
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                _.M.getConfig({
                    location: "ChatAutoAnalytics",
                }).collectAnalytics &&
                J.default.track(ee.HAw.TEXT_IN_VOICE_CLOSED, {
                    reason: "switched away",
                    channel_id: t,
                    guild_id: null == n ? void 0 : n.getGuildId(),
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
    constructor(...e) {
        super(...e),
            en(this, "isMessageRequestsInitialized", !1),
            en(this, "debouncedRobloxAnalytics", a().debounce(ei, 5e3));
    }
}

function ea() {
    let [e, t] = (0, o.yK)([Y.A], () => [Y.A.getVoiceChannelId(), Y.A.getChannelId()], []),
        n = (0, o.bG)([k.A], () => k.A.getChannel(t), [t]),
        l = (0, o.bG)([b.A], () => (null == n ? void 0 : n.id) != null && b.A.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.bG)([k.A], () => k.A.getChannel(e), [e]),
        c = (0, o.bG)([K.A], () => K.A.getGuildId(), []),
        u = (0, o.bG)([V.A], () => V.A.getGuild(c), [c]),
        d = (0, o.bG)([z.default], () => z.default.getCurrentUser(), []),
        A = (0, o.bG)([G.Ay], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (e = null == (t = G.Ay.getMember(c, d.id)) ? void 0 : t.isPending) &&
                e
            );
        }, [d, c]),
        _ = (0, o.bG)([X.Ay], () => X.Ay.getState().section, []),
        E = (0, o.bG)([Q.A], () => Q.A.getHomeLink(), []),
        O = (0, o.bG)([v.A], () => v.A.isConnected(), []),
        [y, N] = (0, o.yK)([B.A], () => [B.A.isVideoEnabled(), B.A.isScreenSharing()], []),
        x = (0, o.bG)([W.A], () => W.A.getPrimaryActivity(), []),
        { currentGame: P, currentNonGame: w } = (0, o.cf)(
            [I.Ay],
            () => ({
                currentGame: I.Ay.getCurrentGameForAnalytics(),
                currentNonGame: I.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        L = (0, S.A)(c),
        R = (0, o.bG)([j.A], () => j.A.getMessageRequestsCount(), []),
        D = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: _,
            homeLink: E,
            connected: O,
            videoEnabled: y,
            isScreenSharing: N,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: P,
            runningGamePid: null != P ? P.pid : null,
            runningNonGame: w,
            gamePlatform: (0, p.A)(x),
            gameName: null != x ? x.name : null,
            gameId: null != x ? x.application_id : null,
            gameExeName: null != P ? P.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has(ee.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: A,
            postableChannelCount: L,
            isTextInVoice: l,
            numMessageRequests: R,
        };
    return (
        !(function (e) {
            let t = i.useRef(e);
            i.useEffect(() => {
                t.current = e;
            }, [e]);
            let {
                connected: n,
                friendsTabSection: r,
                homeLink: l,
                isMemberPending: a,
                selectedChannelId: s,
                selectedGuildId: o,
            } = e;
            i.useEffect(() => {
                if (n && null != s) {
                    let e = (0, g.C)(k.A.getChannel(s), !0);
                    (0, h.zV)(ee.HAw.CHANNEL_OPENED, er({}, e, (0, h.qL)(s))),
                        (0, m.k)(ee.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                            channelId: s,
                        }),
                        t.current.isTextInVoice &&
                            (0, h.zV)(ee.HAw.TEXT_IN_VOICE_OPENED, {
                                channel_is_nsfw: t.current.isNSFWChannel,
                            });
                }
            }, [n, s]),
                i.useEffect(() => {
                    n &&
                        null == o &&
                        l === ee.BVt.FRIENDS &&
                        (0, f.A)({
                            tab_opened: r,
                        });
                }, [n, r, l, o]),
                i.useEffect(() => {
                    if (n && null != o) {
                        var e, r;
                        let n = a
                                ? {
                                      is_pending: a,
                                      preview_enabled: t.current.hasPreviewEnabled,
                                  }
                                : {},
                            i = V.A.getGuild(K.A.getGuildId()),
                            l =
                                ((e = er({}, n)),
                                (r = r =
                                    {
                                        postable_channels: t.current.postableChannelCount,
                                        premium_progress_bar_enabled:
                                            null != i &&
                                            (0, C.$k)(i, {
                                                location: "guild-view",
                                            }),
                                        viewing_all_channels: !q.Ay.isOptInEnabled(o),
                                        num_recent_channels: T.A.recentsChannelCount(o),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                      }),
                                e);
                        (0, h.zV)(ee.HAw.GUILD_VIEWED, l),
                            (0, m.k)(ee.HAw.GUILD_VIEWED_CLICKSTREAM, {
                                guildId: o,
                            });
                    }
                }, [n, o, a]);
            let c = i.useRef(!1);
            i.useEffect(() => {
                n &&
                    null == o &&
                    l === ee.BVt.MESSAGE_REQUESTS &&
                    !c.current &&
                    ((c.current = !0),
                    J.default.track(ee.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, l]);
        })(D),
        (0, r.jsx)(el, er({}, D))
    );
}
