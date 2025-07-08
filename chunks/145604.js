(n.d(t, { Z: () => J }), n(583741), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(224706),
    o = n(615287),
    s = n(593472),
    c = n(603113),
    u = n(367907),
    d = n(731429),
    p = n(188471),
    h = n(176881),
    f = n(318885),
    g = n(358221),
    m = n(710845),
    b = n(581567),
    _ = n(594190),
    E = n(38618),
    O = n(501640),
    y = n(924301),
    I = n(734307),
    v = n(355298),
    C = n(454991),
    S = n(32300),
    N = n(371651),
    T = n(829907),
    P = n(427679),
    j = n(695346),
    A = n(592125),
    Z = n(77498),
    x = n(271383),
    L = n(430824),
    w = n(131951),
    R = n(375954),
    D = n(19780),
    k = n(944486),
    M = n(914010),
    U = n(885110),
    G = n(9156),
    B = n(594174),
    V = n(774343),
    H = n(974042),
    F = n(237997),
    z = n(626135),
    W = n(630388),
    Y = n(823379),
    K = n(981631);
function q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                q(e, t, n[t]);
            }));
    }
    return e;
}
class Q extends i.PureComponent {
    componentDidUpdate(e) {
        var t, n, r, i, l, c;
        let { voiceChannelId: d, voiceChannelGuildId: h, voiceChannelType: E, voiceChannelBitrate: O, videoEnabled: I, isScreenSharing: v, runningGame: x, runningGamePid: w, selectedChannelId: k, selectedGuildId: M, connected: G } = this.props;
        if (e.voiceChannelId !== d && null != e.voiceChannelId) {
            let t = _.ZP.getCurrentGameForAnalytics(),
                n = null != t ? t.name : '',
                r = P.Z.getStageInstanceByChannel(e.voiceChannelId),
                i = y.ZP.getActiveEventByChannel(e.voiceChannelId);
            z.default.track(
                K.rMx.LEAVE_VOICE_CHANNEL,
                X(
                    {
                        channel_id: e.voiceChannelId,
                        channel_type: e.voiceChannelType,
                        channel_bitrate: e.voiceChannelBitrate,
                        guild_id: e.voiceChannelGuildId,
                        rtc_connection_id: D.Z.getRTCConnectionId(),
                        game_name: n,
                        duration: D.Z.getDuration(),
                        game_platform: this.props.gamePlatform,
                        game_id: this.props.gameId,
                        media_session_id: D.Z.getMediaSessionId(),
                        stage_instance_id: null == r ? void 0 : r.id,
                        guild_scheduled_event_id: null == i ? void 0 : i.id
                    },
                    (0, u.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    D.Z.getVoiceStateStats(),
                    g.Z.getSelectedParticipantStats(e.voiceChannelId)
                )
            );
        }
        if (e.voiceChannelId !== d && null != d) {
            let e = _.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = P.Z.getStageInstanceByChannel(d),
                r = y.ZP.getActiveEventByChannel(d);
            ((0, u.yw)(K.rMx.CHANNEL_OPENED, X({}, (0, u.$H)(d))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: d }));
            let i = null,
                l = F.default.getFocusedPID();
            (null != l && N.default.getOverlayMethod(l) !== o.gl.Disabled && (F.default.isInstanceLocked() ? (i = K.ADE.OVERLAY_LOCKED_ACTIVATED) : F.default.isInstanceLocked() || (i = F.default.isPinned(K.Odu.TEXT) ? K.ADE.OVERLAY_UNLOCKED_PINNED : K.ADE.OVERLAY_UNLOCKED)),
                z.default.track(
                    K.rMx.JOIN_VOICE_CHANNEL,
                    X(
                        {
                            location: i,
                            channel_id: d,
                            channel_type: E,
                            channel_bitrate: O,
                            guild_id: h,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == r ? void 0 : r.id
                        },
                        (0, u.oG)(h, d),
                        (0, u.kO)(h, d, I)
                    )
                ));
        }
        if (e.runningGame !== x && null != x && !x.isLauncher) {
            let e = Z.Z.getGameByName(x.name),
                c = _.ZP.getOverrideForGame(x),
                u = L.Z.getGuildIds(),
                p = j.SE.getSetting(),
                f = u.filter((e) => !p.includes(e)).slice(0, 200),
                g = null;
            g = null != c ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let y = N.default.getTrackedGameByPid(x.pid),
                I = (0, _.b6)(x),
                v = {
                    enabledOOP: null != (t = null == y ? void 0 : y.oopEnabled) ? t : I.enabledOOP,
                    enabledLegacy: null != (n = null == y ? void 0 : y.legacyEnabled) ? n : I.enabledLegacy,
                    overlayMethod: null != (r = null == y ? void 0 : y.overlayMethod) ? r : I.overlayMethod,
                    source: null != (i = null == y ? void 0 : y.source) ? i : I.source
                },
                P = null != (l = N.default.getOverlayMethod(x.pid)) ? l : v.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, T.hj)(x.pid),
                        { gameName: r, gameId: i, exe: l, distributor: a } = (0, b.G8)(x),
                        c = (0, S.NW)('ChatAutoAnalytics', !1),
                        u = v.enabledLegacy || (c && v.enabledOOP),
                        p = C.v.legacyEnabled || (c && C.v.oopEnabled),
                        m = v.source;
                    (z.default.track(K.rMx.LAUNCH_GAME, {
                        game: r,
                        game_id: i,
                        verified: null != e && (0, b.vp)(l, null == e ? void 0 : e.executables),
                        elevated: x.elevated,
                        is_launcher: null != (t = null == x ? void 0 : x.isLauncher) && t,
                        game_platform: K.M7m.DESKTOP,
                        detection_method: g,
                        distributor: a,
                        is_overlay_enabled: p,
                        is_overlay_game_enabled: u,
                        is_overlay_game_source: m,
                        fullscreen_type: null != n ? s.Jx[n] : s.Jx.UNKNOWN.toString(),
                        overlay_method: o.gl[P],
                        activity_status_enabled: j.G6.getSetting(),
                        activity_status_shared_guilds: f,
                        current_user_status: U.Z.getStatus(),
                        game_detection_enabled: (0, _.ik)(x),
                        executable_path: l,
                        voice_channel_id: d,
                        voice_channel_type: E,
                        voice_channel_bitrate: O,
                        voice_channel_guild_id: h,
                        distributor_game_id: x.sku,
                        hidden_by_distributor: x.hidden
                    }),
                        null != l && _.ZP.addExecutableTrackedByAnalytics(l));
                }, 10000),
                null != x.name && null != w && Z.Z.shouldReport(x.name))
            ) {
                let e = x.name;
                a.Z.identifyGame(w, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new m.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== I || e.isScreenSharing !== v) && null != d) {
            let e = 'none',
                t = [v ? 'screen' : null, I ? 'camera' : null].filter(Y.lm),
                n = null;
            (v ? ((e = 'screen'), (n = (0, f.t)())) : I && (e = 'camera'),
                z.default.track(
                    K.rMx.VIDEO_INPUT_TOGGLED,
                    X(
                        {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
                            enabled_inputs: t,
                            preview_enabled: j.qF.getSetting()
                        },
                        n,
                        this.getGameMetadata(),
                        (0, u.AB)(d)
                    )
                ));
        }
        if (G && null != k && (!e.connected || k !== e.selectedChannelId || M !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = A.Z.getChannel(t),
                r = L.Z.getGuild(null == n ? void 0 : n.getGuildId());
            if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
                let e = R.Z.getMessages(t),
                    i = e
                        .toArray()
                        .reverse()
                        .find((e) => {
                            var t;
                            return (0, W.yE)(e.flags, K.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? void 0 : t.guild_id) === '667560445975986187';
                        });
                z.default.track(
                    K.rMx.ACK_COMMUNITY_MESSAGES,
                    X(
                        {
                            last_message_id: null == i ? void 0 : i.id,
                            last_message_reference_message_id: null == i || null == (c = i.messageReference) ? void 0 : c.message_id,
                            messages_loaded: e.hasFetched
                        },
                        (0, u.v_)(n),
                        (0, u.hH)(r.id)
                    )
                );
            }
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId
        };
    }
    render() {
        return null;
    }
    constructor(...e) {
        (super(...e), q(this, 'isMessageRequestsInitialized', !1));
    }
}
function J() {
    let [e, t] = (0, l.Wu)([k.Z], () => [k.Z.getVoiceChannelId(), k.Z.getChannelId()], []),
        n = (0, l.e7)([A.Z], () => A.Z.getChannel(t), [t]),
        a = (0, l.e7)([g.Z], () => (null == n ? void 0 : n.id) != null && g.Z.getChatOpen(n.id), [n]),
        o = null == n ? void 0 : n.nsfw,
        s = (0, l.e7)([A.Z], () => A.Z.getChannel(e), [e]),
        f = (0, l.e7)([M.Z], () => M.Z.getGuildId(), []),
        m = (0, l.e7)([L.Z], () => L.Z.getGuild(f), [f]),
        b = (0, l.e7)([B.default], () => B.default.getCurrentUser(), []),
        y = (0, l.e7)(
            [x.ZP],
            () => {
                var e, t;
                return null != b && null != f && null != (t = null == (e = x.ZP.getMember(f, b.id)) ? void 0 : e.isPending) && t;
            },
            [b, f]
        ),
        C = (0, l.e7)([H.ZP], () => H.ZP.getState().section, []),
        S = (0, l.e7)([V.Z], () => V.Z.getHomeLink(), []),
        N = (0, l.e7)([E.Z], () => E.Z.isConnected(), []),
        [T, P] = (0, l.Wu)([w.Z], () => [w.Z.isVideoEnabled(), w.Z.isScreenSharing()], []),
        j = (0, l.e7)([U.Z], () => U.Z.getPrimaryActivity(), []),
        Z = (0, l.e7)([_.ZP], () => _.ZP.getCurrentGameForAnalytics(), []),
        R = (0, O.Z)(f),
        D = (0, l.e7)([v.Z], () => v.Z.getMessageRequestsCount(), []),
        F = {
            selectedChannelId: t,
            isNSFWChannel: o,
            selectedGuildId: f,
            friendsTabSection: C,
            homeLink: S,
            connected: N,
            videoEnabled: T,
            isScreenSharing: P,
            voiceChannelId: null == s ? void 0 : s.id,
            voiceChannelGuildId: null == s ? void 0 : s.getGuildId(),
            voiceChannelType: null == s ? void 0 : s.type,
            voiceChannelBitrate: null == s ? void 0 : s.bitrate,
            runningGame: Z,
            runningGamePid: null != Z ? Z.pid : null,
            gamePlatform: (0, c.Z)(j),
            gameName: null != j ? j.name : null,
            gameId: null != j ? j.application_id : null,
            gameExeName: null != Z ? Z.exeName : null,
            hasPreviewEnabled: null == m ? void 0 : m.features.has(K.oNc.PREVIEW_ENABLED),
            isMemberPending: y,
            postableChannelCount: R,
            isTextInVoice: a,
            numMessageRequests: D
        },
        W = i.useRef(F);
    i.useEffect(() => {
        W.current = F;
    }, [F]);
    let { connected: Y, friendsTabSection: q, homeLink: J, isMemberPending: $, selectedChannelId: ee, selectedGuildId: et } = F;
    (i.useEffect(() => {
        if (Y && null != ee) {
            let e = (0, d.K)(A.Z.getChannel(ee), !0);
            ((0, u.yw)(K.rMx.CHANNEL_OPENED, X({}, e, (0, u.$H)(ee))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: ee }), W.current.isTextInVoice && (0, u.yw)(K.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: W.current.isNSFWChannel }));
        }
    }, [Y, ee]),
        i.useEffect(() => {
            Y && null == et && J === K.Z5c.FRIENDS && (0, h.Z)({ tab_opened: q });
        }, [Y, q, J, et]),
        i.useEffect(() => {
            if (Y && null != et) {
                var e, t, n, r;
                let i =
                    ((n = X(
                        {},
                        $
                            ? {
                                  is_pending: $,
                                  preview_enabled: W.current.hasPreviewEnabled
                              }
                            : {}
                    )),
                    (r = r =
                        {
                            postable_channels: W.current.postableChannelCount,
                            premium_progress_bar_enabled: null != (t = null == (e = L.Z.getGuild(M.Z.getGuildId())) ? void 0 : e.premiumProgressBarEnabled) && t,
                            viewing_all_channels: !G.ZP.isOptInEnabled(et),
                            num_recent_channels: I.Z.recentsChannelCount(et)
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
                ((0, u.yw)(K.rMx.GUILD_VIEWED, i), (0, p.a)(K.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: et }));
            }
        }, [Y, et, $]));
    let en = i.useRef(!1);
    return (
        i.useEffect(() => {
            Y && null == et && J === K.Z5c.MESSAGE_REQUESTS && !en.current && ((en.current = !0), z.default.track(K.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: W.current.numMessageRequests }));
        }, [Y, et, J]),
        (0, r.jsx)(Q, X({}, F))
    );
}
