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
    O = n(38618),
    E = n(501640),
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
        var t, n;
        let { voiceChannelId: r, voiceChannelGuildId: i, voiceChannelType: l, voiceChannelBitrate: c, videoEnabled: d, isScreenSharing: h, runningGame: O, runningGamePid: E, selectedChannelId: I, selectedGuildId: v, connected: x } = this.props;
        if (e.voiceChannelId !== r && null != e.voiceChannelId) {
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
        if (e.voiceChannelId !== r && null != r) {
            let e = _.ZP.getCurrentGameForAnalytics(),
                t = null != e ? e.name : '',
                n = P.Z.getStageInstanceByChannel(r),
                a = y.ZP.getActiveEventByChannel(r);
            ((0, u.yw)(K.rMx.CHANNEL_OPENED, X({}, (0, u.$H)(r))), (0, p.a)(K.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: r }));
            let s = null,
                h = F.default.getFocusedPID();
            (null != h && N.default.getOverlayMethod(h) !== o.gl.Disabled && (F.default.isInstanceLocked() ? (s = K.ADE.OVERLAY_LOCKED_ACTIVATED) : F.default.isInstanceLocked() || (s = F.default.isPinned(K.Odu.TEXT) ? K.ADE.OVERLAY_UNLOCKED_PINNED : K.ADE.OVERLAY_UNLOCKED)),
                z.default.track(
                    K.rMx.JOIN_VOICE_CHANNEL,
                    X(
                        {
                            location: s,
                            channel_id: r,
                            channel_type: l,
                            channel_bitrate: c,
                            guild_id: i,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == a ? void 0 : a.id
                        },
                        (0, u.oG)(i, r),
                        (0, u.kO)(i, r, d)
                    )
                ));
        }
        if (e.runningGame !== O && null != O && !O.isLauncher) {
            let e = Z.Z.getGameByName(O.name),
                n = _.ZP.getOverrideForGame(O),
                u = L.Z.getGuildIds(),
                d = j.SE.getSetting(),
                p = u.filter((e) => !d.includes(e)).slice(0, 200),
                h = null;
            h = null != n ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
            let f = (0, _.b6)(O),
                g = null != (t = N.default.getOverlayMethod(O.pid)) ? t : f.overlayMethod;
            if (
                (setTimeout(async () => {
                    var t;
                    let n = await (0, T.hj)(O.pid),
                        { gameName: a, gameId: u, exe: d, distributor: m } = (0, b.G8)(O),
                        E = (0, S.NW)('ChatAutoAnalytics', !1),
                        y = f.enabledLegacy || (E && f.enabledOOP),
                        I = C.v.legacyEnabled || (E && C.v.oopEnabled),
                        v = f.source;
                    (z.default.track(K.rMx.LAUNCH_GAME, {
                        game: a,
                        game_id: u,
                        verified: null != e && (0, b.vp)(d, null == e ? void 0 : e.executables),
                        elevated: O.elevated,
                        is_launcher: null != (t = null == O ? void 0 : O.isLauncher) && t,
                        game_platform: K.M7m.DESKTOP,
                        detection_method: h,
                        distributor: m,
                        is_overlay_enabled: I,
                        is_overlay_game_enabled: y,
                        is_overlay_game_source: v,
                        fullscreen_type: null != n ? s.Jx[n] : s.Jx.UNKNOWN.toString(),
                        overlay_method: o.gl[g],
                        activity_status_enabled: j.G6.getSetting(),
                        activity_status_shared_guilds: p,
                        current_user_status: U.Z.getStatus(),
                        game_detection_enabled: (0, _.ik)(O),
                        executable_path: d,
                        voice_channel_id: r,
                        voice_channel_type: l,
                        voice_channel_bitrate: c,
                        voice_channel_guild_id: i,
                        distributor_game_id: O.sku,
                        hidden_by_distributor: O.hidden
                    }),
                        null != d && _.ZP.addExecutableTrackedByAnalytics(d));
                }, 10000),
                null != O.name && null != E && Z.Z.shouldReport(O.name))
            ) {
                let e = O.name;
                a.Z.identifyGame(E, e)
                    .then((e) => a.Z.reportUnverifiedGame(e))
                    .catch((e) => new m.Z('AutoAnalytics').error('Cannot identify game', e));
            }
        }
        if ((e.videoEnabled !== d || e.isScreenSharing !== h) && null != r) {
            let e = 'none',
                t = [h ? 'screen' : null, d ? 'camera' : null].filter(Y.lm),
                n = null;
            (h ? ((e = 'screen'), (n = (0, f.t)())) : d && (e = 'camera'),
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
                        (0, u.AB)(r)
                    )
                ));
        }
        if (x && null != I && (!e.connected || I !== e.selectedChannelId || v !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                r = A.Z.getChannel(t),
                i = L.Z.getGuild(null == r ? void 0 : r.getGuildId());
            if (null != t && null != r && null != i && i.publicUpdatesChannelId === t) {
                let e = R.Z.getMessages(t),
                    l = e
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
                            last_message_id: null == l ? void 0 : l.id,
                            last_message_reference_message_id: null == l || null == (n = l.messageReference) ? void 0 : n.message_id,
                            messages_loaded: e.hasFetched
                        },
                        (0, u.v_)(r),
                        (0, u.hH)(i.id)
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
        N = (0, l.e7)([O.Z], () => O.Z.isConnected(), []),
        [T, P] = (0, l.Wu)([w.Z], () => [w.Z.isVideoEnabled(), w.Z.isScreenSharing()], []),
        j = (0, l.e7)([U.Z], () => U.Z.getPrimaryActivity(), []),
        Z = (0, l.e7)([_.ZP], () => _.ZP.getCurrentGameForAnalytics(), []),
        R = (0, E.Z)(f),
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
