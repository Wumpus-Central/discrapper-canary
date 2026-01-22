n.d(t, {
    A: () => ei,
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
    f = n(58149),
    h = n(332456),
    A = n(237774),
    g = n(504982),
    m = n(815706),
    b = n(313961),
    _ = n(626584),
    E = n(953384),
    O = n(973522),
    y = n(15285),
    I = n(142120),
    v = n(442187),
    S = n(698441),
    C = n(960755),
    N = n(380335),
    T = n(211753),
    j = n(41984),
    x = n(833551),
    P = n(515183),
    w = n(847521),
    L = n(446600),
    R = n(253932),
    D = n(734057),
    M = n(760751),
    k = n(696451),
    U = n(71393),
    G = n(430452),
    V = n(320501),
    B = n(383501),
    H = n(309010),
    F = n(967198),
    Y = n(461213),
    K = n(543465),
    z = n(287809),
    W = n(619921),
    q = n(595623),
    Q = n(256415),
    X = n(954571),
    Z = n(403362),
    J = n(652215),
    $ = n(705751);

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
            game: s,
            detectionMethod: o,
            overlayStatus: c,
            overlayMethod: p,
            sharedGuildIds: f,
            voiceChannelId: h,
            voiceChannelType: A,
            voiceChannelBitrate: g,
            voiceChannelGuildId: m,
        } = e,
        b = await (0, P.E1)(a.pid),
        { gameName: _, gameId: E, exe: I, distributor: v, rawExePath: S } = (0, O.wH)(a),
        C = c.enabledLegacy || c.enabledOOP,
        N = T.x.legacyEnabled || T.x.oopEnabled,
        x = c.source;
    X.default.track(J.HAw.LAUNCH_GAME, {
        game: _,
        game_id: E,
        verified: null != s && (0, O.PQ)(S, null == s ? void 0 : s.executables),
        elevated: a.elevated,
        is_launcher: null != (t = null == a ? void 0 : a.isLauncher) && t,
        game_platform: J.yTV.DESKTOP,
        detection_method: o,
        distributor: v,
        is_overlay_enabled: N,
        is_overlay_game_enabled: C,
        is_overlay_game_source: x,
        fullscreen_type: null != b ? u.aI[b] : u.aI.UNKNOWN.toString(),
        hardware_display_count:
            null !=
            (n = await (null === d.A || void 0 === d.A || null == (l = d.A.hardware) || null == (i = l.getDisplayCount)
                ? void 0
                : i.call(l)))
                ? n
                : null,
        overlay_method: null != (r = j.Ue[p]) ? r : __OVERLAY__ ? j.Ue[j.Ue.Hook] : null,
        activity_status_enabled: R.tz.getSetting(),
        activity_status_shared_guilds: f,
        current_user_status: Y.A.getStatus(),
        game_detection_enabled: (0, y.Xr)(a),
        executable_path: I,
        voice_channel_id: h,
        voice_channel_type: A,
        voice_channel_bitrate: g,
        voice_channel_guild_id: m,
        distributor_game_id: a.sku,
        hidden_by_distributor: a.hidden,
        game_metadata: (0, w.MT)(a),
    }),
        null != I && y.Ay.addExecutableTrackedByAnalytics(I);
}
class er extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a, o, u, d, p, h;
        let {
            voiceChannelId: g,
            voiceChannelGuildId: I,
            voiceChannelType: v,
            voiceChannelBitrate: C,
            videoEnabled: N,
            isScreenSharing: T,
            runningGame: P,
            runningGamePid: w,
            runningNonGame: k,
            selectedChannelId: G,
            selectedGuildId: H,
            connected: F,
        } = this.props;
        if (e.voiceChannelId !== g && null != e.voiceChannelId) {
            let t = y.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = L.A.getStageInstanceByChannel(e.voiceChannelId),
                i = S.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = B.A.getLastRTCConnectionState();
            (null == a ? void 0 : a.channelId) !== e.voiceChannelId && (a = null),
                X.default.track(
                    J.HAw.LEAVE_VOICE_CHANNEL,
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
                        (0, f.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                        null == a || null == (l = a.voiceStateAnalytics) ? void 0 : l.getStats(),
                        b.A.getSelectedParticipantStats(e.voiceChannelId),
                    ),
                );
        }
        if (e.voiceChannelId !== g && null != g) {
            let e = y.Ay.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = L.A.getStageInstanceByChannel(g),
                r = S.Ay.getActiveEventByChannel(g);
            (0, f.zV)(J.HAw.CHANNEL_OPENED, et({}, (0, f.qL)(g))),
                (0, A.k)(J.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                    channelId: g,
                });
            let i = null,
                l = Q.default.getFocusedPID();
            null != l &&
                x.default.getOverlayMethod(l) !== j.Ue.Disabled &&
                (Q.default.isInstanceLocked()
                    ? (i = J.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : Q.default.isInstanceLocked() ||
                      (i = Q.default.isPinned(J.uss.TEXT) ? J.Xmn.OVERLAY_UNLOCKED_PINNED : J.Xmn.OVERLAY_UNLOCKED)),
                X.default.track(
                    J.HAw.JOIN_VOICE_CHANNEL,
                    et(
                        {
                            location: i,
                            channel_id: g,
                            channel_type: v,
                            channel_bitrate: C,
                            guild_id: I,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: B.A.getWasMoved(),
                            join_voice_id: B.A.getJoinVoiceId(),
                        },
                        (0, f.dL)(I, g),
                        (0, f.JK)(I, g, N),
                    ),
                );
        }
        let K =
                (null == P ? void 0 : P.distributor) === (null == (t = e.runningGame) ? void 0 : t.distributor) &&
                (null == P ? void 0 : P.sku) === (null == (n = e.runningGame) ? void 0 : n.sku) &&
                (null == P ? void 0 : P.name) === (null == (r = e.runningGame) ? void 0 : r.name),
            z = null != e.runningGame && null != P && e.runningGame.isLauncher !== P.isLauncher;
        if (e.runningGame !== P && null != P && !P.isLauncher && (!K || z)) {
            let { gameId: e } = (0, O.wH)(P),
                t = void 0 !== e ? M.A.getDetectableGame(e) : null,
                n = y.Ay.getOverrideForGame(P),
                r = U.A.getGuildIds(),
                i = R.JG.getSetting(),
                l = r.filter((e) => !i.includes(e)).slice(0, 200),
                s = null;
            s = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
            let f = x.default.getTrackedGameByPid(P.pid),
                h = (0, y.hw)(P),
                A = {
                    enabledOOP: null != (a = null == f ? void 0 : f.oopEnabled) ? a : h.enabledOOP,
                    enabledLegacy: null != (o = null == f ? void 0 : f.legacyEnabled) ? o : h.enabledLegacy,
                    overlayMethod: null != (u = null == f ? void 0 : f.overlayMethod) ? u : h.overlayMethod,
                    source: null != (d = null == f ? void 0 : f.source) ? d : h.source,
                    reason: "ChatAutoAnalytics",
                },
                m = null != (p = x.default.getOverlayMethod(P.pid)) ? p : A.overlayMethod;
            if (
                (setTimeout(() => {
                    (P.distributor === J.d3x.ROBLOX ? this.debouncedRobloxAnalytics : en)({
                        runningGame: P,
                        game: t,
                        detectionMethod: s,
                        overlayStatus: A,
                        overlayMethod: m,
                        sharedGuildIds: l,
                        voiceChannelId: g,
                        voiceChannelType: v,
                        voiceChannelBitrate: C,
                        voiceChannelGuildId: I,
                    });
                }, 1e4),
                null != P.name && null != w && M.A.shouldReport(P))
            ) {
                let e = P.name;
                c.A.identifyGame(w, e)
                    .then((e) => c.A.reportUnverifiedGame(e))
                    .catch((e) => new _.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (
            e.runningNonGame !== k &&
            (null == k ? void 0 : k.id) != null &&
            (null == (i = e.runningNonGame) ? void 0 : i.id) !== k.id
        ) {
            let e = E.A.getById(k.id);
            null != e &&
                X.default.track(J.HAw.LAUNCH_NON_GAME_APPLICATION, {
                    name: e.name,
                    application_id: e.id,
                    application_type: $.S7.NON_GAME_DETECTABLE,
                    elevated: k.elevated,
                    game_platform: J.yTV.DESKTOP,
                    distributor: k.distributor,
                    detection_method: "verified_non_game_application",
                    current_user_status: Y.A.getStatus(),
                    executable_path: (0, O.Ic)(k.exePath),
                    voice_channel_id: g,
                    voice_channel_type: v,
                    voice_channel_bitrate: C,
                    voice_channel_guild_id: I,
                });
        }
        if ((e.videoEnabled !== N || e.isScreenSharing !== T) && null != g) {
            let e = "none",
                t = [T ? "screen" : null, N ? "camera" : null].filter(Z.Vq),
                n = null;
            T ? ((e = "screen"), (n = (0, m.p)())) : N && (e = "camera"),
                X.default.track(
                    J.HAw.VIDEO_INPUT_TOGGLED,
                    et(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: R.bm.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, f.QS)(g),
                    ),
                );
        }
        if (F && null != G && (!e.connected || G !== e.selectedChannelId || H !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = D.A.getChannel(t),
                r = U.A.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = V.A.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, s.Lt)(e.flags, J.pr7.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                X.default.track(
                    J.HAw.ACK_COMMUNITY_MESSAGES,
                    et(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (h = i.messageReference) ? void 0 : h.message_id,
                            messages_loaded: e.hasFetched,
                        },
                        (0, f.dI)(n),
                        (0, f.H$)(r.id),
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
            ee(this, "debouncedRobloxAnalytics", a().debounce(en, 5e3));
    }
}

function ei() {
    let [e, t] = (0, o.yK)([H.A], () => [H.A.getVoiceChannelId(), H.A.getChannelId()], []),
        n = (0, o.bG)([D.A], () => D.A.getChannel(t), [t]),
        l = (0, o.bG)([b.A], () => (null == n ? void 0 : n.id) != null && b.A.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.bG)([D.A], () => D.A.getChannel(e), [e]),
        c = (0, o.bG)([F.A], () => F.A.getGuildId(), []),
        u = (0, o.bG)([U.A], () => U.A.getGuild(c), [c]),
        d = (0, o.bG)([z.default], () => z.default.getCurrentUser(), []),
        m = (0, o.bG)([k.Ay], () => {
            var e, t;
            return (
                null != d &&
                null != c &&
                null != (e = null == (t = k.Ay.getMember(c, d.id)) ? void 0 : t.isPending) &&
                e
            );
        }, [d, c]),
        _ = (0, o.bG)([q.Ay], () => q.Ay.getState().section, []),
        E = (0, o.bG)([W.A], () => W.A.getHomeLink(), []),
        O = (0, o.bG)([I.A], () => I.A.isConnected(), []),
        [S, T] = (0, o.yK)([G.A], () => [G.A.isVideoEnabled(), G.A.isScreenSharing()], []),
        j = (0, o.bG)([Y.A], () => Y.A.getPrimaryActivity(), []),
        { currentGame: x, currentNonGame: P } = (0, o.cf)(
            [y.Ay],
            () => ({
                currentGame: y.Ay.getCurrentGameForAnalytics(),
                currentNonGame: y.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        w = (0, v.A)(c),
        L = (0, o.bG)([N.A], () => N.A.getMessageRequestsCount(), []),
        R = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: _,
            homeLink: E,
            connected: O,
            videoEnabled: S,
            isScreenSharing: T,
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
            hasPreviewEnabled: null == u ? void 0 : u.features.has(J.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: m,
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
                    let e = (0, h.C)(D.A.getChannel(s), !0);
                    (0, f.zV)(J.HAw.CHANNEL_OPENED, et({}, e, (0, f.qL)(s))),
                        (0, A.k)(J.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                            channelId: s,
                        }),
                        t.current.isTextInVoice &&
                            (0, f.zV)(J.HAw.TEXT_IN_VOICE_OPENED, {
                                channel_is_nsfw: t.current.isNSFWChannel,
                            });
                }
            }, [n, s]),
                i.useEffect(() => {
                    n &&
                        null == o &&
                        l === J.BVt.FRIENDS &&
                        (0, g.A)({
                            tab_opened: r,
                        });
                }, [n, r, l, o]),
                i.useEffect(() => {
                    if (n && null != o) {
                        var e, r, i, l;
                        let n =
                            ((i = et(
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
                                                null == (r = U.A.getGuild(F.A.getGuildId()))
                                                    ? void 0
                                                    : r.premiumProgressBarEnabled) && e,
                                    viewing_all_channels: !K.Ay.isOptInEnabled(o),
                                    num_recent_channels: C.A.recentsChannelCount(o),
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
                        (0, f.zV)(J.HAw.GUILD_VIEWED, n),
                            (0, A.k)(J.HAw.GUILD_VIEWED_CLICKSTREAM, {
                                guildId: o,
                            });
                    }
                }, [n, o, a]);
            let c = i.useRef(!1);
            i.useEffect(() => {
                n &&
                    null == o &&
                    l === J.BVt.MESSAGE_REQUESTS &&
                    !c.current &&
                    ((c.current = !0),
                    X.default.track(J.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, o, l]);
        })(R),
        (0, r.jsx)(er, et({}, R))
    );
}
