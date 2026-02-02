n.d(t, {
    A: () => el,
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
    C = n(698441),
    N = n(960755),
    T = n(380335),
    j = n(211753),
    x = n(41984),
    P = n(833551),
    w = n(515183),
    L = n(847521),
    R = n(446600),
    D = n(253932),
    M = n(734057),
    k = n(760751),
    U = n(696451),
    G = n(71393),
    V = n(430452),
    B = n(320501),
    H = n(383501),
    F = n(309010),
    Y = n(967198),
    K = n(461213),
    W = n(543465),
    q = n(287809),
    z = n(619921),
    Q = n(595623),
    X = n(256415),
    Z = n(954571),
    J = n(403362),
    $ = n(652215),
    ee = n(705751);

function et(e, t, n) {
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

function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
async function er(e) {
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
        _ = await (0, w.E1)(a.pid),
        { gameName: b, gameId: E, exe: O, distributor: v, rawExePath: S } = (0, y.wH)(a),
        C = c.enabledLegacy || c.enabledOOP,
        N = j.x.legacyEnabled || j.x.oopEnabled,
        T = c.source;
    Z.default.track($.HAw.LAUNCH_GAME, {
        game: b,
        game_id: E,
        verified: null != s && (0, y.PQ)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (t = null == a ? void 0 : a.isLauncher) && t,
        game_platform: $.yTV.DESKTOP,
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
        overlay_method: null != (r = x.Ue[p]) ? r : __OVERLAY__ ? x.Ue[x.Ue.Hook] : null,
        activity_status_enabled: D.tz.getSetting(),
        activity_status_shared_guilds: h,
        current_user_status: K.A.getStatus(),
        game_detection_enabled: (0, I.Xr)(a),
        executable_path: O,
        voice_channel_id: g,
        voice_channel_type: m,
        voice_channel_bitrate: f,
        voice_channel_guild_id: A,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, L.MT)(a),
    }),
        null != O && I.Ay.addExecutableTrackedByAnalytics(O);
}
class ei extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a, o, u, d, p, g;
        let {
            voiceChannelId: f,
            voiceChannelGuildId: v,
            voiceChannelType: S,
            voiceChannelBitrate: N,
            videoEnabled: T,
            isScreenSharing: j,
            runningGame: w,
            runningGamePid: L,
            runningNonGame: U,
            selectedChannelId: V,
            selectedGuildId: F,
            connected: Y,
        } = this.props;
        if (e.voiceChannelId !== f && null != e.voiceChannelId) {
            let t = I.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = R.A.getStageInstanceByChannel(e.voiceChannelId),
                i = C.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = H.A.getLastRTCConnectionState();
            (null == a ? void 0 : a.channelId) !== e.voiceChannelId && (a = null),
                Z.default.track(
                    $.HAw.LEAVE_VOICE_CHANNEL,
                    en(
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
                n = R.A.getStageInstanceByChannel(f),
                r = C.Ay.getActiveEventByChannel(f);
            (0, h.zV)($.HAw.CHANNEL_OPENED, en({}, (0, h.qL)(f))),
                (0, m.k)($.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                    channelId: f,
                });
            let i = null,
                l = X.default.getFocusedPID();
            null != l &&
                P.default.getOverlayMethod(l) !== x.Ue.Disabled &&
                (X.default.isInstanceLocked()
                    ? (i = $.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : X.default.isInstanceLocked() ||
                      (i = X.default.isPinned($.uss.TEXT) ? $.Xmn.OVERLAY_UNLOCKED_PINNED : $.Xmn.OVERLAY_UNLOCKED)),
                Z.default.track(
                    $.HAw.JOIN_VOICE_CHANNEL,
                    en(
                        {
                            location: i,
                            channel_id: f,
                            channel_type: S,
                            channel_bitrate: N,
                            guild_id: v,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: H.A.getWasMoved(),
                            join_voice_id: H.A.getJoinVoiceId(),
                        },
                        (0, h.dL)(v, f),
                        (0, h.JK)(v, f, T),
                    ),
                );
        }
        let W =
                (null == w ? void 0 : w.distributor) === (null == (t = e.runningGame) ? void 0 : t.distributor) &&
                (null == w ? void 0 : w.sku) === (null == (n = e.runningGame) ? void 0 : n.sku) &&
                (null == w ? void 0 : w.name) === (null == (r = e.runningGame) ? void 0 : r.name),
            q = null != e.runningGame && null != w && e.runningGame.isLauncher !== w.isLauncher;
        if (e.runningGame !== w && null != w && !w.isLauncher && (!W || q)) {
            let { gameId: e } = (0, y.wH)(w),
                t = void 0 !== e ? k.A.getDetectableGame(e) : null,
                n = I.Ay.getOverrideForGame(w),
                r = G.A.getGuildIds(),
                i = D.JG.getSetting(),
                l = r.filter((e) => !i.includes(e)).slice(0, 200),
                s = null;
            s = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
            let h = P.default.getTrackedGameByPid(w.pid),
                g = (0, I.hw)(w),
                m = {
                    enabledOOP: null != (a = null == h ? void 0 : h.oopEnabled) ? a : g.enabledOOP,
                    enabledLegacy: null != (o = null == h ? void 0 : h.legacyEnabled) ? o : g.enabledLegacy,
                    overlayMethod: null != (u = null == h ? void 0 : h.overlayMethod) ? u : g.overlayMethod,
                    source: null != (d = null == h ? void 0 : h.source) ? d : g.source,
                    reason: "ChatAutoAnalytics",
                },
                A = null != (p = P.default.getOverlayMethod(w.pid)) ? p : m.overlayMethod;
            if (
                (setTimeout(() => {
                    (w.distributor === $.d3x.ROBLOX ? this.debouncedRobloxAnalytics : er)({
                        runningGame: w,
                        game: t,
                        detectionMethod: s,
                        overlayStatus: m,
                        overlayMethod: A,
                        sharedGuildIds: l,
                        voiceChannelId: f,
                        voiceChannelType: S,
                        voiceChannelBitrate: N,
                        voiceChannelGuildId: v,
                    });
                }, 1e4),
                null != w.name && null != L && k.A.shouldReport(w))
            ) {
                let e = w.name;
                c.A.identifyGame(L, e)
                    .then((e) => c.A.reportUnverifiedGame(e))
                    .catch((e) => new E.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (
            e.runningNonGame !== U &&
            (null == U ? void 0 : U.id) != null &&
            (null == (i = e.runningNonGame) ? void 0 : i.id) !== U.id
        ) {
            let e = O.A.getById(U.id);
            null != e &&
                Z.default.track($.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: ee.S7.NON_GAME_DETECTABLE,
                    elevated: U.elevated,
                    game_platform: $.yTV.DESKTOP,
                    distributor: U.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: K.A.getStatus(),
                    executable_path: (0, y.Ic)(U.exePath),
                    voice_channel_id: f,
                    voice_channel_type: S,
                    voice_channel_bitrate: N,
                    voice_channel_guild_id: v,
                });
        }
        if ((e.videoEnabled !== T || e.isScreenSharing !== j) && null != f) {
            let e = "none",
                t = [j ? "screen" : null, T ? "camera" : null].filter(J.Vq),
                n = null;
            j ? ((e = "screen"), (n = (0, A.p)())) : T && (e = "camera"),
                Z.default.track(
                    $.HAw.VIDEO_INPUT_TOGGLED,
                    en(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: D.bm.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, h.QS)(f),
                    ),
                );
        }
        if (Y && null != V && (!e.connected || V !== e.selectedChannelId || F !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = M.A.getChannel(t),
                r = G.A.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = B.A.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, s.Lt)(e.flags, $.pr7.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                Z.default.track(
                    $.HAw.ACK_COMMUNITY_MESSAGES,
                    en(
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
                Z.default.track($.HAw.TEXT_IN_VOICE_CLOSED, {
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
            et(this, "isMessageRequestsInitialized", !1),
            et(this, "debouncedRobloxAnalytics", a().debounce(er, 5e3));
    }
}

function el() {
    let [e, t] = (0, o.yK)([F.A], () => [F.A.getVoiceChannelId(), F.A.getChannelId()], []),
        n = (0, o.bG)([M.A], () => M.A.getChannel(t), [t]),
        l = (0, o.bG)([b.A], () => (null == n ? void 0 : n.id) != null && b.A.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.bG)([M.A], () => M.A.getChannel(e), [e]),
        c = (0, o.bG)([Y.A], () => Y.A.getGuildId(), []),
        u = (0, o.bG)([G.A], () => G.A.getGuild(c), [c]),
        d = (0, o.bG)([q.default], () => q.default.getCurrentUser(), []),
        A = (0, o.bG)([U.Ay], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (e = null == (t = U.Ay.getMember(c, d.id)) ? void 0 : t.isPending) &&
                e
            );
        }, [d, c]),
        _ = (0, o.bG)([Q.Ay], () => Q.Ay.getState().section, []),
        E = (0, o.bG)([z.A], () => z.A.getHomeLink(), []),
        O = (0, o.bG)([v.A], () => v.A.isConnected(), []),
        [y, C] = (0, o.yK)([V.A], () => [V.A.isVideoEnabled(), V.A.isScreenSharing()], []),
        j = (0, o.bG)([K.A], () => K.A.getPrimaryActivity(), []),
        { currentGame: x, currentNonGame: P } = (0, o.cf)(
            [I.Ay],
            () => ({
                currentGame: I.Ay.getCurrentGameForAnalytics(),
                currentNonGame: I.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        w = (0, S.A)(c),
        L = (0, o.bG)([T.A], () => T.A.getMessageRequestsCount(), []),
        R = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: _,
            homeLink: E,
            connected: O,
            videoEnabled: y,
            isScreenSharing: C,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            runningNonGame: P,
            gamePlatform: (0, p.A)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == u ? void 0 : u.features.has($.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: A,
            postableChannelCount: w,
            isTextInVoice: l,
            numMessageRequests: L,
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
                    let e = (0, g.C)(M.A.getChannel(s), !0);
                    (0, h.zV)($.HAw.CHANNEL_OPENED, en({}, e, (0, h.qL)(s))),
                        (0, m.k)($.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                            channelId: s,
                        }),
                        t.current.isTextInVoice &&
                            (0, h.zV)($.HAw.TEXT_IN_VOICE_OPENED, {
                                channel_is_nsfw: t.current.isNSFWChannel,
                            });
                }
            }, [n, s]),
                i.useEffect(() => {
                    n &&
                        null == o &&
                        l === $.BVt.FRIENDS &&
                        (0, f.A)({
                            tab_opened: r,
                        });
                }, [n, r, l, o]),
                i.useEffect(() => {
                    if (n && null != o) {
                        var e, r, i, l;
                        let n =
                            ((i = en(
                                {},
                                a
                                    ? {
                                          is_pending: a,
                                          preview_enabled: t.current.hasPreviewEnabled,
                                      }
                                    : {},
                            )),
                            (l = l =
                                {
                                    postable_channels: t.current.postableChannelCount,
                                    premium_progress_bar_enabled:
                                        null !=
                                            (e =
                                                null == (r = G.A.getGuild(Y.A.getGuildId()))
                                                    ? void 0
                                                    : r.premiumProgressBarEnabled) && e,
                                    viewing_all_channels: !W.Ay.isOptInEnabled(o),
                                    num_recent_channels: N.A.recentsChannelCount(o),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i);
                        (0, h.zV)($.HAw.GUILD_VIEWED, n),
                            (0, m.k)($.HAw.GUILD_VIEWED_CLICKSTREAM, {
                                guildId: o,
                            });
                    }
                }, [n, o, a]);
            let c = i.useRef(!1);
            i.useEffect(() => {
                n &&
                    null == o &&
                    l === $.BVt.MESSAGE_REQUESTS &&
                    !c.current &&
                    ((c.current = !0),
                    Z.default.track($.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, l]);
        })(R),
        (0, r.jsx)(ei, en({}, R))
    );
}
