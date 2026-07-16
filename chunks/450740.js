n.d(t, { DH: () => ew, Ay: () => eO }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(17928),
    o = n(834730),
    u = n(983851),
    d = n(717558),
    c = n(429913),
    h = n(478063),
    m = n(47167),
    g = n(22705),
    p = n(209932),
    f = n(63995),
    x = n(518769),
    A = n(530804),
    E = n(616356),
    S = n(280450),
    I = n(734057),
    v = n(309010),
    T = n(485296),
    C = n(287809),
    j = n(977997),
    y = n(607567),
    b = n(184809),
    N = n(403362),
    _ = n(996439),
    R = n(3451),
    w = n(810412),
    O = n(412477),
    M = n(489277),
    D = n(243612),
    k = n(580929),
    L = n(778712),
    P = n(604121),
    z = n(97808),
    V = n(939249),
    G = n(922016),
    U = n(442433),
    Z = n(391973),
    F = n(684013),
    H = n(401843),
    Y = n(765671),
    X = n(964486),
    W = n(775602),
    B = n(66004),
    q = n(556525),
    K = n(80682),
    Q = n(643501),
    J = n(71393),
    $ = n(576705),
    ee = n(290863),
    et = n(174459),
    en = n(279250),
    ei = n(834757),
    er = n(566668),
    el = n(652215),
    es = n(378219);
class ea extends r.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        et.default.track(el.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: r,
            onAction: l,
            hideTip: a,
            onWatch: o,
            activeStream: u,
            currentUserId: d,
            canWatch: c,
            unavailableReason: h,
            streamApplication: m,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(es.yt, { [es.P0]: r }),
                  children: (0, i.jsx)(er.Z, {
                      stream: n,
                      activeStream: u,
                      streamActivity: e,
                      streamApplication: m,
                      user: t,
                      currentUserId: d,
                      canWatch: c ?? !1,
                      unavailableReason: h,
                      onWatchStream: o,
                      onAction: l,
                      hideTip: a,
                  }),
              });
    }
}
function eo(e) {
    let { user: t, channel: n, ...l } = e,
        [s, o] = (0, a.yK)([j.A, J.A, $.A, Q.default], () => (0, en.eo)(n, j.A, J.A, $.A, Q.default)),
        u = (0, a.bG)([E.A], () => E.A.getStreamForUser(t.id, n.getGuildId())),
        d = (0, a.bG)([E.A], () => E.A.getActiveStreamForApplicationStream(u)),
        c = (0, a.bG)([S.default], () => S.default.getId()),
        h = (0, ei.AO)(u),
        m = (0, a.bG)([ee.A], () => (0, ei.nr)(u, ee.A)),
        g = r.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, K.Eq)(g, "StreamPreviewPopout"),
        (0, i.jsx)(ea, {
            ...l,
            canWatch: s,
            unavailableReason: o,
            user: t,
            streamApplication: h,
            stream: u,
            activeStream: d,
            currentUserId: c,
            activity: m,
            channel: n,
        })
    );
}
var eu = n(534400),
    ed = n(342296),
    ec = n(481947),
    eh = n(38502),
    em = n(186295),
    eg = n(427262),
    ep = n(375708),
    ef = n(458509);
function ex(e) {
    switch (e) {
        case el.OSZ.LARGE:
            return L._3.SIZE_32;
        case el.OSZ.SMALL:
            return L._3.SIZE_24;
        default:
            return L._3.SIZE_32;
    }
}
function eA(e) {
    return L.vC[e].size;
}
function eE() {
    return n
        .e("15423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let eS = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    eI = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function ev(e, t) {
    let [n, i] = r.useState(null != e && e > Date.now() - 1e4),
        [l, s] = r.useState(!1),
        [a, o] = r.useState(!0);
    return (
        (0, X.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    s(!0);
                }, 16));
        }),
        (0, X.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        s(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        r.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: o,
            }),
            [l, n, a, o],
        )
    );
}
let eT = r.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: c,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = ev(n, l),
            { ref: p, width: f } = (0, Y.Ay)(),
            x = (0, a.bG)([W.Ay], () => W.Ay.useReducedMotion),
            A = h ? "entering" : "exiting",
            { width: E } = (0, k.useSpring)({ ...eS[A], width: c ? f : u }),
            { opacity: S } = (0, k.useSpring)({
                ...eI[A],
                opacity: +!!c,
                onRest: () => {
                    c || g(!0);
                },
            }),
            I = r.useMemo(() => (m || x ? "none" : "block"), [m, x]);
        return (0, i.jsx)(k.animated.div, {
            className: s()(ef.rH, { [ef.pG]: d }),
            style: { width: E, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: p,
                className: s()(ef.LB, { [ef.RP]: "exiting" === A, [ef.kb]: !d, [ef.pG]: d }),
                children: [
                    d && (0, i.jsx)(P.a, { importData: eE, shouldAnimate: !x, className: ef.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: ep.intl.format(ep.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !d && (0, i.jsx)(P.a, { importData: eE, shouldAnimate: !x, className: ef.lY }),
                    (0, i.jsx)("div", { className: ef.k1 }),
                ],
            }),
        });
    }),
    eC = r.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
            s = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: ef.QZ,
            style: { top: a, left: a, width: s, height: s },
            children: (0, i.jsx)(B.A, {
                userId: n,
                channelId: r,
                guildId: l,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    ej = r.memo(z.eu),
    ey = r.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: l = !1,
                user: u,
                nick: c,
                displayNameMode: h,
                displayUserMode: m,
                size: g = el.OSZ.LARGE,
                onClick: p,
                onContextMenu: f,
                context: x,
                guildId: A,
                isSettingsPreview: I = !1,
                voiceState: v,
                showStreamPreview: C,
                onShowStreamPreview: y,
                onWatchStream: b,
                connectedOn: N,
                ref: R,
            } = e,
            O = (0, a.bG)([S.default], () => S.default.getId() === u.id, [u.id]),
            { ref: M, width: D } = (0, Y.Ay)(),
            { showConnectedAnimation: k } = ev(N, I),
            L = v?.sessionId,
            P = t.id,
            z = u.id,
            [U] = (0, a.bG)(
                [j.A],
                () => [
                    j.A.getVoiceStateForChannel(P, z) ?? j.A.getVoiceStateForSession(z, L),
                    j.A.getVoiceStateVersion(),
                ],
                [P, z, L],
                _.D,
            ),
            Z = I ? v : (U ?? v),
            [F, X, W] = (0, a.yK)(
                [em.Ay],
                () =>
                    O
                        ? [
                              !em.Ay.isSupported() || em.Ay.isSelfMute() || em.Ay.isSelfMutedTemporarily(),
                              em.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!em.Ay.isSupported() || em.Ay.isLocalMute(u.id), !1, em.Ay.isLocalVideoDisabled(u.id)],
                [O, u.id],
            ),
            B = (0, a.bG)([E.A], () => {
                let e = E.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== u.id && E.A.getViewerIds(e).filter((e) => e === u.id).length > 0;
            }, [u.id]),
            K = I && v?.discoverable,
            Q = (0, d.A)({ userId: u.id, context: x }) || K,
            J = (0, a.bG)([E.A], () => E.A.getStreamForUser(u.id, A)),
            $ = null != J,
            ee = r.useCallback(() => {
                (C || null != $) && y(null);
            }, [y, C, $]),
            et = r.useCallback(
                () =>
                    (0, i.jsx)(eo, {
                        user: u,
                        channel: t,
                        onWatch: () => {
                            null != J && ((0, H.A9)(J, { forceMultiple: !0, noFocus: !0 }), ee(), b(J ?? null));
                        },
                        onAction: () => b,
                        previewIsOpen: C,
                        location: el.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [u, t, J, C, ee, b],
            ),
            en = r.useCallback(
                (e) => {
                    l || f?.(e, u);
                },
                [l, f, u],
            ),
            ei = r.useCallback(() => {
                l || (null != $ && y(u.id));
            }, [l, y, $, u]),
            er = l || I,
            es = r.useMemo(() => ex(g), [g]),
            ea = r.useMemo(() => eA(es), [es]),
            ed = r.useMemo(() => u.getAvatarURL(A, ea), [u, A, ea]),
            eh = (0, a.bG)([T.A], () => T.A.getVoiceVolume(z));
        return (m === el.f5z.ONLY_WHILE_SPEAKING && er && !Q) || null == Z
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: R,
                    className: s()(ef.q7, { [ef.zY]: Q, [ef.bG]: !l, [ef.zq]: n, [ef.cU]: k }),
                    onClick: l ? void 0 : (e) => p?.(e, u),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        er && (h === el.pwA.NEVER || (!Q && h === el.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "left",
                                  renderPopout: et,
                                  shouldShow: C,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: ef.Xh,
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(ec.Kc, {
                                                  guildId: A,
                                                  user: u,
                                                  video: Z.selfVideo,
                                                  isStreaming: $,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: B,
                                                  localMute: F && !O,
                                                  localVideoDisabled: W,
                                                  mute: Z.isVoiceMuted(),
                                                  deaf: Z.isVoiceDeafened() || (X && !O),
                                                  serverMute: Z.mute || Z.suppress,
                                                  serverDeaf: Z.deaf,
                                                  disabled: !1,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(eu.Ay, {
                                                      primaryGuild: u.primaryGuild,
                                                      userId: u.id,
                                                      contextGuildId: A,
                                                      className: ef.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, w.YX)(el.uss.VOICE_V3, {
                                                              type: w.Z5.VOICE,
                                                              value: w.IP.PROFILE_OPENED,
                                                              userId: u.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                          ],
                                      }),
                              }),
                        !O &&
                            (0, i.jsx)(eT, {
                                nick: c,
                                connectedOn: N,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: D,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(ej, {
                            className: s()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: es,
                            src: ed,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(eC, { avatarSize: ea, userId: u.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: R,
                    className: s()(ef.q7, { [ef.zY]: Q, [ef.bG]: !l, [ef.zq]: n, [ef.cU]: k }),
                    onClick: l ? void 0 : (e) => p?.(e, u),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        (0, i.jsx)(ej, {
                            className: s()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: es,
                            src: ed,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !O &&
                            (0, i.jsx)(eT, { nick: c, connectedOn: N, isSettingsPreview: I, voiceBackgroundWidth: D }),
                        er && (h === el.pwA.NEVER || (!Q && h === el.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "right",
                                  renderPopout: et,
                                  shouldShow: C,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(ef.Xh, { [ef.$A]: $ }),
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(eu.Ay, {
                                                      primaryGuild: u.primaryGuild,
                                                      userId: u.id,
                                                      contextGuildId: A,
                                                      className: ef.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, w.YX)(el.uss.VOICE_V3, {
                                                              type: w.Z5.VOICE,
                                                              value: w.IP.PROFILE_OPENED,
                                                              userId: u.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(ec.Kc, {
                                                  guildId: A,
                                                  user: u,
                                                  video: Z.selfVideo,
                                                  isStreaming: $,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: B,
                                                  localMute: F && !O,
                                                  localVideoDisabled: W,
                                                  mute: Z.isVoiceMuted(),
                                                  deaf: Z.isVoiceDeafened() || (X && !O),
                                                  serverMute: Z.mute || Z.suppress,
                                                  serverDeaf: Z.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    eb = r.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
                sortedVoiceState: s,
                displayNameMode: a,
                displayUserMode: o,
                locked: u,
                flipped: d,
                size: c,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            p = r.useRef(null),
            { user: f, member: x, voiceState: A, connectedOn: E } = s,
            [S, I] = r.useState(null),
            [v, T] = r.useState(null);
        function C(e) {
            I(e);
        }
        function j(e, t) {
            m ||
                (0, U.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("8757"),
                        n.e("85968"),
                        n.e("89673"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("91994"),
                        n.e("49145"),
                        n.e("70314"),
                        n.e("4524"),
                        n.e("54148"),
                        n.e("58980"),
                    ]).then(n.bind(n, 535503));
                    return (
                        (0, w.YX)(el.uss.VOICE_V3, { type: w.Z5.VOICE, value: w.IP.SETTINGS_OPENED, userId: t.id }),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                channelId: l?.id,
                                guildId: l?.guild_id,
                                mediaEngineContext: g,
                                onShowProfile: () => T(t.id),
                                appContext: el.BRT.OVERLAY,
                                onWatchStream: () => {
                                    (0, w.YX)(el.uss.VOICE_V3, {
                                        type: w.Z5.GO_LIVE,
                                        value: w.IP.ENABLED,
                                        userId: t.id,
                                    });
                                },
                            })
                    );
                });
        }
        r.useEffect(() => {
            u && T(null);
        }, [u]),
            r.useEffect(() => {
                null != S && (0, w.YX)(el.uss.VOICE_V3, { type: w.Z5.GO_LIVE, value: w.IP.STREAM_PREVIEWED });
            }, [S]);
        let y = r.useCallback(
            (e) => {
                let n = eh.A.getWidget(t)?.layoutId,
                    i = null != n ? eh.A.getWidgetsForLayout(n)?.find((e) => e.type === el.uss.GO_LIVE) : null;
                null == i ||
                    i.pinned ||
                    ((0, Z.v0)(i.id),
                    F.A.track(el.HAw.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: l?.guild_id,
                        channel_id: l?.id,
                        channel_type: l?.type,
                        widget_type: el.uss.GO_LIVE,
                    })),
                    null != e &&
                        null != i &&
                        (0, w.YX)(el.uss.VOICE_V3, { type: w.Z5.GO_LIVE, value: w.IP.ENABLED, userId: e.ownerId });
            },
            [l, t],
        );
        if (null == f || null == l || null == A) return null;
        let b = u || h;
        return (0, i.jsx)(
            ed.A,
            {
                targetElementRef: p,
                user: f,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: el.BRT.OVERLAY,
                shouldShow: v === f.id,
                onRequestClose: () => T(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(ey, {
                        ref: p,
                        guildId: l?.guild_id,
                        user: f,
                        connectedOn: E,
                        nick: x?.nick ?? eg.Ay.getName(f),
                        flipped: d,
                        voiceState: A,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: c,
                        locked: b,
                        onContextMenu: j,
                        onClick: j,
                        context: g,
                        channel: l,
                        showStreamPreview: f.id === S,
                        onShowStreamPreview: C,
                        onWatchStream: y,
                        isSettingsPreview: m,
                    }),
            },
            f.id,
        );
    });
n(392164);
var eN = n(731854);
function e_(e) {
    let t = (e ?? 0) % R.A.DEFAULT_AVATARS.length;
    return R.A.DEFAULT_AVATARS[t];
}
function eR(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: r, locked: l, flipped: u } = e,
        d = eA(r),
        c = (0, a.yK)(
            [C.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = C.default.getUser(e);
                        if (null == t) return;
                        let i = I.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), d, !1);
                    })
                    .filter(N.Vq),
            [t, n, d],
        ),
        m = c[0] ?? e_(0),
        g = c[1] ?? e_(1);
    return (0, i.jsxs)("div", {
        className: s()(ef.ZR, l && ef.xt, u && ef.zq),
        children: [
            (0, i.jsx)("div", {
                className: ef.e5,
                children: (0, i.jsx)(h.A, { size: r, backSrc: m, frontSrc: g, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: ef.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let ew = r.memo(function (e) {
    let {
            id: t,
            context: n = eN.x.DEFAULT,
            channel: l,
            overlayVoiceStates: s,
            displayNameMode: o,
            displayUserMode: d,
            locked: c,
            pinned: h,
            guildId: m,
            showEmpty: g = !0,
            isPreviewingInGame: p,
            isSettingsPreview: f = !1,
            anchorLeft: x,
            avatarSizeMode: A,
            maxDisplayedVoiceStates: S = 8,
        } = e,
        I = (0, w.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(s),
            [s],
        ),
        [v, T] = s,
        C = T.length > 0 && null != n && null != l && (!c || h),
        j = (0, a.yK)(
            [E.A],
            () =>
                Array.from(I)
                    .map((e) => E.A.getStreamForUser(e, m))
                    .filter(N.Vq)
                    .map((e) => e.ownerId),
            [m, I],
        );
    r.useEffect(() => {
        C &&
            (0, w.Y)(el.uss.VOICE_V3, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: j,
                contentInventoryIds: [],
            });
    }, [I, j, C]);
    let y = -1 !== S ? T.slice(0, S) : T,
        _ = -1 !== S ? T.slice(S) : [],
        R = v.get(_[0]),
        M = d === el.f5z.ALWAYS && -1 !== S;
    return C
        ? (0, i.jsxs)("div", {
              className: ef.h8,
              children: [
                  y.map((e) => {
                      let r = v.get(e);
                      return null == r
                          ? null
                          : (0, i.jsx)(
                                eb,
                                {
                                    sortedVoiceState: r,
                                    channel: l,
                                    widgetId: t,
                                    flipped: !x,
                                    isPreviewingInGame: p,
                                    isSettingsPreview: f,
                                    context: n,
                                    size: A,
                                    displayNameMode: o,
                                    displayUserMode: d,
                                    locked: c,
                                },
                                e,
                            );
                  }),
                  M &&
                      1 === _.length &&
                      null != R &&
                      (0, i.jsx)(
                          eb,
                          {
                              sortedVoiceState: R,
                              channel: l,
                              widgetId: t,
                              flipped: !x,
                              isPreviewingInGame: p,
                              isSettingsPreview: f,
                              context: n,
                              size: A,
                              displayNameMode: o,
                              displayUserMode: d,
                              locked: c,
                          },
                          _[0],
                      ),
                  M &&
                      _.length > 1 &&
                      (0, i.jsx)(eR, { hiddenVoiceStates: _, voiceStateMap: v, size: ex(A), locked: c, flipped: !x }),
              ],
          })
        : c || !g
          ? null
          : (0, i.jsx)(O.g, { emptyText: ep.intl.string(ep.t.hEh0l1), icon: u.H });
});
function eO(e) {
    let { isSettingsPreview: t } = e,
        n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
        l = (0, m.Ay)(n),
        s = (function (e, t) {
            let n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
                [i] = (0, a.bG)(
                    [y.Ay, f.A, v.Ay, I.A],
                    () => {
                        let e = I.A.getChannel(v.Ay.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [f.A.getMutableParticipants(e.id, x.ip.SPEAKER), f.A.getParticipantsVersion(e.id)]
                              : [y.Ay.getVoiceStatesForChannel(e), y.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    _.D,
                ),
                l = (0, A.$n)(n?.id, i),
                s = r.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                o = (0, a.bG)([S.default], () => S.default.getId());
            return [
                s,
                (0, a.yK)([j.A, v.Ay, T.A, p.A], () => {
                    let n = Array.from(
                        new Set(
                            l.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            }),
                        ),
                    );
                    if (-1 === t || n.length <= t) return n;
                    let i = new Map();
                    for (let t of n) {
                        let n = (0, d.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [j.A, v.Ay, T.A, p.A],
                            ),
                            r = t === o;
                        (n || r) && i.set(t, { isSpeaking: n, isCurrentUser: r });
                    }
                    let r = [],
                        s = [],
                        a = [];
                    for (let e = 0; e < n.length; e++) {
                        let l = n[e],
                            o = i.get(l);
                        e < t ? r.push(l) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(l) : s.push(l);
                    }
                    if (a.length > 0) {
                        let e = r.slice(0, t - a.length),
                            n = r.slice(t - a.length);
                        return [...e, ...a, ...n, ...s];
                    }
                    return n;
                }, [l, e, o, t]),
            ];
        })(eN.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        u = (0, D.b4)(),
        h = (0, c.h)(u?.id),
        C = (0, a.cf)([E.A, b.default, M.A], () => {
            let e = E.A.getCurrentUserActiveStream();
            return {
                displayUserMode: b.default.getDisplayUserMode(),
                displayNameMode: b.default.getDisplayNameMode(),
                avatarSizeMode: b.default.getAvatarSizeMode(),
                streamApplication: o?.pid === M.A.getTargetPID() ? (0, g.A)(u) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(ew, {
        ...C,
        application: h,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: l ?? "",
        streamMetadata: o,
        streamApplication: C.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
