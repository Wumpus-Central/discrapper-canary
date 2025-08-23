n.d(t, { Z: () => en }), n(583741), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(224706),
    c = n(593472),
    u = n(941033),
    d = n(367907),
    p = n(731429),
    f = n(188471),
    h = n(176881),
    g = n(318885),
    m = n(358221),
    b = n(710845),
    _ = n(581567),
    O = n(594190),
    E = n(38618),
    y = n(489745),
    v = n(924301),
    I = n(734307),
    C = n(355298),
    S = n(454991),
    N = n(837268),
    T = n(32300),
    P = n(371651),
    j = n(829907),
    x = n(509003),
    A = n(427679),
    Z = n(695346),
    w = n(592125),
    L = n(77498),
    R = n(271383),
    D = n(430824),
    k = n(131951),
    M = n(375954),
    U = n(19780),
    G = n(944486),
    B = n(914010),
    V = n(885110),
    H = n(9156),
    F = n(594174),
    z = n(774343),
    W = n(974042),
    Y = n(237997),
    K = n(626135),
    q = n(630388),
    Q = n(823379),
    X = n(981631);
function J(e, t, n) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
async function ee(e) {
    var t;
    let {
            runningGame: n,
            game: r,
            detectionMethod: i,
            overlayStatus: l,
            overlayMethod: a,
            sharedGuildIds: o,
            voiceChannelId: s,
            voiceChannelType: u,
            voiceChannelBitrate: d,
            voiceChannelGuildId: p,
        } = e,
        f = await (0, j.hj)(n.pid),
        { gameName: h, gameId: g, exe: m, distributor: b } = (0, _.G8)(n),
        E = (0, T.NW)("ChatAutoAnalytics", !1),
        y = l.enabledLegacy || (E && l.enabledOOP),
        v = S.v.legacyEnabled || (E && S.v.oopEnabled),
        I = l.source;
    K.default.track(X.rMx.LAUNCH_GAME, {
        game: h,
        game_id: g,
        verified: null != r && (0, _.vp)(m, null == r ? void 0 : r.executables),
        elevated: n.elevated,
        is_launcher: null != (t = null == n ? void 0 : n.isLauncher) && t,
        game_platform: X.M7m.DESKTOP,
        detection_method: i,
        distributor: b,
        is_overlay_enabled: v,
        is_overlay_game_enabled: y,
        is_overlay_game_source: I,
        fullscreen_type: null != f ? c.Jx[f] : c.Jx.UNKNOWN.toString(),
        overlay_method: N.gl[a],
        activity_status_enabled: Z.G6.getSetting(),
        activity_status_shared_guilds: o,
        current_user_status: V.Z.getStatus(),
        game_detection_enabled: (0, O.ik)(n),
        executable_path: m,
        voice_channel_id: s,
        voice_channel_type: u,
        voice_channel_bitrate: d,
        voice_channel_guild_id: p,
        distributor_game_id: n.sku,
        hidden_by_distributor: n.hidden,
        game_metadata: (0, x.sD)(n),
    }),
        null != m && O.ZP.addExecutableTrackedByAnalytics(m);
}
class et extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, a;
        let {
            voiceChannelId: o,
            voiceChannelGuildId: c,
            voiceChannelType: u,
            voiceChannelBitrate: p,
            videoEnabled: h,
            isScreenSharing: _,
            runningGame: E,
            runningGamePid: y,
            selectedChannelId: I,
            selectedGuildId: C,
            connected: S,
        } = this.props;
        if (e.voiceChannelId !== o && null != e.voiceChannelId) {
            let t = O.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                r = A.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = v.ZP.getActiveEventByChannel(e.voiceChannelId);
            K.default.track(
                X.rMx.LEAVE_VOICE_CHANNEL,
                $(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: U.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: U.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: U.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id,
                    },
                    (0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    U.Z.getVoiceStateStats(),
                    m.Z.getSelectedParticipantStats(e.voiceChannelId),
                ),
            );
        }
        if (e.voiceChannelId !== o && null != o) {
            let e = O.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : "",
                n = A.Z.getStageInstanceByChannel(o),
                r = v.ZP.getActiveEventByChannel(o);
            (0, d.yw)(X.rMx.CHANNEL_OPENED, $({}, (0, d.$H)(o))),
                (0, f.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: o });
            let i = null,
                l = Y.default.getFocusedPID();
            null != l &&
                P.default.getOverlayMethod(l) !== N.gl.Disabled &&
                (Y.default.isInstanceLocked()
                    ? (i = X.ADE.OVERLAY_LOCKED_ACTIVATED)
                    : Y.default.isInstanceLocked() ||
                      (i = Y.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)),
                K.default.track(
                    X.rMx.JOIN_VOICE_CHANNEL,
                    $(
                        {
                            location: i,
                            channel_id: o,
                            channel_type: u,
                            channel_bitrate: p,
                            guild_id: c,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id,
                            was_moved: U.Z.getWasMoved(),
                            join_voice_id: U.Z.getJoinVoiceId(),
                        },
                        (0, d.oG)(c, o),
                        (0, d.kO)(c, o, h),
                    ),
                );
        }
        let T =
                null != E &&
                null != E.distributor &&
                null != E.sku &&
                null != e.runningGame &&
                e.runningGame.distributor === E.distributor &&
                E.sku === e.runningGame.sku &&
                E.name === e.runningGame.name,
            j = null != e.runningGame && null != E && e.runningGame.isLauncher !== E.isLauncher;
        if (e.runningGame !== E && null != E && !E.isLauncher && (!T || j)) {
            let e = L.Z.getGameByName(E.name),
                a = O.ZP.getOverrideForGame(E),
                d = D.Z.getGuildIds(),
                f = Z.SE.getSetting(),
                h = d.filter((e) => !f.includes(e)).slice(0, 200),
                g = null;
            g = null != a ? "custom_override" : null != e ? "verified_game" : "launcher";
            let m = P.default.getTrackedGameByPid(E.pid),
                _ = (0, O.b6)(E),
                v = {
                    enabledOOP: null != (t = null == m ? void 0 : m.oopEnabled) ? t : _.enabledOOP,
                    enabledLegacy: null != (n = null == m ? void 0 : m.legacyEnabled) ? n : _.enabledLegacy,
                    overlayMethod: null != (r = null == m ? void 0 : m.overlayMethod) ? r : _.overlayMethod,
                    source: null != (i = null == m ? void 0 : m.source) ? i : _.source,
                },
                I = null != (l = P.default.getOverlayMethod(E.pid)) ? l : v.overlayMethod;
            if (
                (setTimeout(() => {
                    (E.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : ee)({
                        runningGame: E,
                        game: e,
                        detectionMethod: g,
                        overlayStatus: v,
                        overlayMethod: I,
                        sharedGuildIds: h,
                        voiceChannelId: o,
                        voiceChannelType: u,
                        voiceChannelBitrate: p,
                        voiceChannelGuildId: c,
                    });
                }, 10000),
                null != E.name && null != y && L.Z.shouldReport(E.name))
            ) {
                let e = E.name;
                s.Z.identifyGame(y, e)
                    .then((e) => s.Z.reportUnverifiedGame(e))
                    .catch((e) => new b.Z("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if ((e.videoEnabled !== h || e.isScreenSharing !== _) && null != o) {
            let e = "none",
                t = [_ ? "screen" : null, h ? "camera" : null].filter(Q.lm),
                n = null;
            _ ? ((e = "screen"), (n = (0, g.t)())) : h && (e = "camera"),
                K.default.track(
                    X.rMx.VIDEO_INPUT_TOGGLED,
                    $(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: Z.qF.getSetting(),
                        },
                        n,
                        this.getGameMetadata(),
                        (0, d.AB)(o),
                    ),
                );
        }
        if (S && null != I && (!e.connected || I !== e.selectedChannelId || C !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = w.Z.getChannel(t),
                r = D.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = M.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (
                                (0, q.yE)(e.flags, X.iLy.IS_CROSSPOST) &&
                                (null == (t = e.messageReference) ? void 0 : t.guild_id) === "667560445975986187"
                            );
                        });
                K.default.track(
                    X.rMx.ACK_COMMUNITY_MESSAGES,
                    $(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id:
                                null == i || null == (a = i.messageReference) ? void 0 : a.message_id,
                            messages_loaded: e.hasFetched,
                        },
                        (0, d.v_)(n),
                        (0, d.hH)(r.id),
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
            J(this, "isMessageRequestsInitialized", !1),
            J(this, "debouncedRobloxAnalytics", a().debounce(ee, 5000));
    }
}
function en() {
    let [e, t] = (0, o.Wu)([G.Z], () => [G.Z.getVoiceChannelId(), G.Z.getChannelId()], []),
        n = (0, o.e7)([w.Z], () => w.Z.getChannel(t), [t]),
        l = (0, o.e7)([m.Z], () => (null == n ? void 0 : n.id) != null && m.Z.getChatOpen(n.id), [n]),
        a = null == n ? void 0 : n.nsfw,
        s = (0, o.e7)([w.Z], () => w.Z.getChannel(e), [e]),
        c = (0, o.e7)([B.Z], () => B.Z.getGuildId(), []),
        g = (0, o.e7)([D.Z], () => D.Z.getGuild(c), [c]),
        b = (0, o.e7)([F.default], () => F.default.getCurrentUser(), []),
        _ = (0, o.e7)([R.ZP], () => {
            var e, t;
            return (
                null != b &&
                null != c &&
                null != (t = null == (e = R.ZP.getMember(c, b.id)) ? void 0 : e.isPending) &&
                t
            );
        }, [b, c]),
        v = (0, o.e7)([W.ZP], () => W.ZP.getState().section, []),
        S = (0, o.e7)([z.Z], () => z.Z.getHomeLink(), []),
        N = (0, o.e7)([E.Z], () => E.Z.isConnected(), []),
        [T, P] = (0, o.Wu)([k.Z], () => [k.Z.isVideoEnabled(), k.Z.isScreenSharing()], []),
        j = (0, o.e7)([V.Z], () => V.Z.getPrimaryActivity(), []),
        x = (0, o.e7)([O.ZP], () => O.ZP.getCurrentGameForAnalytics(), []),
        A = (0, y.Z)(c),
        Z = (0, o.e7)([C.Z], () => C.Z.getMessageRequestsCount(), []),
        L = {
            selectedChannelId: t,
            isNSFWChannel: a,
            selectedGuildId: c,
            friendsTabSection: v,
            homeLink: S,
            connected: N,
            videoEnabled: T,
            isScreenSharing: P,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: x,
            runningGamePid: null != x ? x.pid : null,
            gamePlatform: (0, u.Z)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != x ? x.exeName : null,
            hasPreviewEnabled: null == g ? void 0 : g.features.has(X.oNc.PREVIEW_ENABLED),
            isMemberPending: _,
            postableChannelCount: A,
            isTextInVoice: l,
            numMessageRequests: Z,
        },
        M = i.useRef(L);
    i.useEffect(() => {
        M.current = L;
    }, [L]);
    let {
        connected: U,
        friendsTabSection: Y,
        homeLink: q,
        isMemberPending: Q,
        selectedChannelId: J,
        selectedGuildId: ee,
    } = L;
    i.useEffect(() => {
        if (U && null != J) {
            let e = (0, p.K)(w.Z.getChannel(J), !0);
            (0, d.yw)(X.rMx.CHANNEL_OPENED, $({}, e, (0, d.$H)(J))),
                (0, f.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: J }),
                M.current.isTextInVoice &&
                    (0, d.yw)(X.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: M.current.isNSFWChannel });
        }
    }, [U, J]),
        i.useEffect(() => {
            U && null == ee && q === X.Z5c.FRIENDS && (0, h.Z)({ tab_opened: Y });
        }, [U, Y, q, ee]),
        i.useEffect(() => {
            if (U && null != ee) {
                var e, t, n, r;
                let i =
                    ((n = $(
                        {},
                        Q
                            ? {
                                  is_pending: Q,
                                  preview_enabled: M.current.hasPreviewEnabled,
                              }
                            : {},
                    )),
                    (r = r =
                        {
                            postable_channels: M.current.postableChannelCount,
                            premium_progress_bar_enabled:
                                null !=
                                    (t =
                                        null == (e = D.Z.getGuild(B.Z.getGuildId()))
                                            ? void 0
                                            : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !H.ZP.isOptInEnabled(ee),
                            num_recent_channels: I.Z.recentsChannelCount(ee),
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
                (0, d.yw)(X.rMx.GUILD_VIEWED, i), (0, f.a)(X.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: ee });
            }
        }, [U, ee, Q]);
    let en = i.useRef(!1);
    return (
        i.useEffect(() => {
            U &&
                null == ee &&
                q === X.Z5c.MESSAGE_REQUESTS &&
                !en.current &&
                ((en.current = !0),
                K.default.track(X.rMx.MESSAGE_REQUESTS_INITIALIZED, {
                    num_message_requests: M.current.numMessageRequests,
                }));
        }, [U, ee, q]),
        (0, r.jsx)(et, $({}, L))
    );
}
