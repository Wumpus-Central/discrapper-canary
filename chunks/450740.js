n.d(t, { DH: () => eR, Ay: () => eO }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(17928),
    o = n(834730),
    d = n(983851),
    u = n(717558),
    c = n(429913),
    h = n(478063),
    m = n(47167),
    g = n(22705),
    p = n(209932),
    x = n(63995),
    f = n(518769),
    A = n(530804),
    E = n(616356),
    S = n(495544),
    I = n(734057),
    v = n(309010),
    T = n(485296),
    j = n(287809),
    C = n(977997),
    y = n(607567),
    w = n(184809),
    b = n(403362),
    N = n(996439),
    _ = n(3451),
    R = n(810412),
    O = n(412477),
    M = n(489277),
    k = n(243612),
    D = n(873174),
    z = n(778712),
    P = n(604121),
    L = n(97808),
    V = n(939249),
    G = n(922016),
    U = n(442433),
    F = n(391973),
    H = n(684013),
    Z = n(401843),
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
    es = n(566668),
    er = n(652215),
    el = n(378219);
class ea extends s.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        et.default.track(er.HAw.OPEN_POPOUT, {
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
            previewIsOpen: s,
            onAction: r,
            hideTip: a,
            onWatch: o,
            activeStream: d,
            currentUserId: u,
            canWatch: c,
            unavailableReason: h,
            streamApplication: m,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: l()(el.yt, { [el.P0]: s }),
                  children: (0, i.jsx)(es.Z, {
                      stream: n,
                      activeStream: d,
                      streamActivity: e,
                      streamApplication: m,
                      user: t,
                      currentUserId: u,
                      canWatch: c ?? !1,
                      unavailableReason: h,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: a,
                  }),
              });
    }
}
function eo(e) {
    let { user: t, channel: n, ...r } = e,
        [l, o] = (0, a.yK)([C.A, J.A, $.A, Q.default], () => (0, en.eo)(n, C.A, J.A, $.A, Q.default)),
        d = (0, a.bG)([E.A], () => E.A.getStreamForUser(t.id, n.getGuildId())),
        u = (0, a.bG)([E.A], () => E.A.getActiveStreamForApplicationStream(d)),
        c = (0, a.bG)([S.default], () => S.default.getId()),
        h = (0, ei.AO)(d),
        m = (0, a.bG)([ee.A], () => (0, ei.nr)(d, ee.A)),
        g = s.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, K.Eq)(g, "StreamPreviewPopout"),
        (0, i.jsx)(ea, {
            ...r,
            canWatch: l,
            unavailableReason: o,
            user: t,
            streamApplication: h,
            stream: d,
            activeStream: u,
            currentUserId: c,
            activity: m,
            channel: n,
        })
    );
}
var ed = n(534400),
    eu = n(342296),
    ec = n(481947),
    eh = n(38502),
    em = n(761853),
    eg = n(427262),
    ep = n(375708),
    ex = n(458509);
function ef(e) {
    switch (e) {
        case er.OSZ.LARGE:
            return z._3.SIZE_32;
        case er.OSZ.SMALL:
            return z._3.SIZE_24;
        default:
            return z._3.SIZE_32;
    }
}
function eA(e) {
    return z.vC[e].size;
}
let eE = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    eS = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    eI = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function ev(e, t) {
    let [n, i] = s.useState(null != e && e > Date.now() - 1e4),
        [r, l] = s.useState(!1),
        [a, o] = s.useState(!0);
    return (
        (0, X.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    l(!0);
                }, 16));
        }),
        (0, X.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        l(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        s.useMemo(
            () => ({
                showConnectedAnimation: r,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: o,
            }),
            [r, n, a, o],
        )
    );
}
let eT = s.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: c,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = ev(n, r),
            { ref: p, width: x } = (0, Y.Ay)(),
            f = (0, a.bG)([W.A], () => W.A.useReducedMotion),
            A = h ? "entering" : "exiting",
            { width: E } = (0, D.useSpring)({ ...eS[A], width: c ? x : d }),
            { opacity: S } = (0, D.useSpring)({
                ...eI[A],
                opacity: +!!c,
                onRest: () => {
                    c || g(!0);
                },
            }),
            I = s.useMemo(() => (m || f ? "none" : "block"), [m, f]);
        return (0, i.jsx)(D.animated.div, {
            className: l()(ex.rH, { [ex.pG]: u }),
            style: { width: E, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: p,
                className: l()(ex.LB, { [ex.RP]: "exiting" === A, [ex.kb]: !u, [ex.pG]: u }),
                children: [
                    u && (0, i.jsx)(P.a, { importData: eE, shouldAnimate: !f, className: ex.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: ep.intl.format(ep.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !u && (0, i.jsx)(P.a, { importData: eE, shouldAnimate: !f, className: ex.lY }),
                    (0, i.jsx)("div", { className: ex.k1 }),
                ],
            }),
        });
    }),
    ej = s.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: s, guildId: r } = e,
            l = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: ex.QZ,
            style: { top: a, left: a, width: l, height: l },
            children: (0, i.jsx)(B.A, {
                userId: n,
                channelId: s,
                guildId: r,
                containerDimensions: { width: l, height: l },
            }),
        });
    }),
    eC = s.memo(L.eu),
    ey = s.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: d,
                nick: c,
                displayNameMode: h,
                displayUserMode: m,
                size: g = er.OSZ.LARGE,
                onClick: p,
                onContextMenu: x,
                context: f,
                guildId: A,
                isSettingsPreview: I = !1,
                voiceState: v,
                showStreamPreview: j,
                onShowStreamPreview: y,
                onWatchStream: w,
                connectedOn: b,
                ref: _,
            } = e,
            O = (0, a.bG)([S.default], () => S.default.getId() === d.id, [d.id]),
            { ref: M, width: k } = (0, Y.Ay)(),
            { showConnectedAnimation: D } = ev(b, I),
            z = v?.sessionId,
            P = t.id,
            L = d.id,
            [U] = (0, a.bG)(
                [C.A],
                () => [
                    C.A.getVoiceStateForChannel(P, L) ?? C.A.getVoiceStateForSession(L, z),
                    C.A.getVoiceStateVersion(),
                ],
                [P, L, z],
                N.D,
            ),
            F = I ? v : (U ?? v),
            [H, X, W] = (0, a.yK)(
                [em.Ay],
                () =>
                    O
                        ? [
                              !em.Ay.isSupported() || em.Ay.isSelfMute() || em.Ay.isSelfMutedTemporarily(),
                              em.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!em.Ay.isSupported() || em.Ay.isLocalMute(d.id), !1, em.Ay.isLocalVideoDisabled(d.id)],
                [O, d.id],
            ),
            B = (0, a.bG)([E.A], () => {
                let e = E.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== d.id && E.A.getViewerIds(e).filter((e) => e === d.id).length > 0;
            }, [d.id]),
            K = I && v?.discoverable,
            Q = (0, u.A)({ userId: d.id, context: f }) || K,
            J = (0, a.bG)([E.A], () => E.A.getStreamForUser(d.id, A)),
            $ = null != J,
            ee = s.useCallback(() => {
                (j || null != $) && y(null);
            }, [y, j, $]),
            et = s.useCallback(
                () =>
                    (0, i.jsx)(eo, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != J && ((0, Z.A9)(J, { forceMultiple: !0, noFocus: !0 }), ee(), w(J ?? null));
                        },
                        onAction: () => w,
                        previewIsOpen: j,
                        location: er.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, J, j, ee, w],
            ),
            en = s.useCallback(
                (e) => {
                    r || x?.(e, d);
                },
                [r, x, d],
            ),
            ei = s.useCallback(() => {
                r || (null != $ && y(d.id));
            }, [r, y, $, d]),
            es = r || I,
            el = s.useMemo(() => ef(g), [g]),
            ea = s.useMemo(() => eA(el), [el]),
            eu = s.useMemo(() => d.getAvatarURL(A, ea), [d, A, ea]),
            eh = (0, a.bG)([T.A], () => T.A.getVoiceVolume(L));
        return (m === er.f5z.ONLY_WHILE_SPEAKING && es && !Q) || null == F
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: _,
                    className: l()(ex.q7, { [ex.zY]: Q, [ex.bG]: !r, [ex.zq]: n, [ex.cU]: D }),
                    onClick: r ? void 0 : (e) => p?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        es && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "left",
                                  renderPopout: et,
                                  shouldShow: j,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: ex.Xh,
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(ec.Kc, {
                                                  guildId: A,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: $,
                                                  className: ex.ZA,
                                                  iconClassName: ex.Ow,
                                                  isWatching: B,
                                                  localMute: H && !O,
                                                  localVideoDisabled: W,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (X && !O),
                                                  serverMute: F.mute || F.suppress,
                                                  serverDeaf: F.deaf,
                                                  disabled: !1,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(ed.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: A,
                                                      className: ex.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(er.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
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
                                connectedOn: b,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: k,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(eC, {
                            className: l()(ex.my, { [ex.yS]: eh === -1 / 0 }),
                            size: el,
                            src: eu,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(ej, { avatarSize: ea, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: _,
                    className: l()(ex.q7, { [ex.zY]: Q, [ex.bG]: !r, [ex.zq]: n, [ex.cU]: D }),
                    onClick: r ? void 0 : (e) => p?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        (0, i.jsx)(eC, {
                            className: l()(ex.my, { [ex.yS]: eh === -1 / 0 }),
                            size: el,
                            src: eu,
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
                            (0, i.jsx)(eT, { nick: c, connectedOn: b, isSettingsPreview: I, voiceBackgroundWidth: k }),
                        es && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "right",
                                  renderPopout: et,
                                  shouldShow: j,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: l()(ex.Xh, { [ex.$A]: $ }),
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(ed.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: A,
                                                      className: ex.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(er.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(ec.Kc, {
                                                  guildId: A,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: $,
                                                  className: ex.ZA,
                                                  iconClassName: ex.Ow,
                                                  isWatching: B,
                                                  localMute: H && !O,
                                                  localVideoDisabled: W,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (X && !O),
                                                  serverMute: F.mute || F.suppress,
                                                  serverDeaf: F.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    ew = s.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: l,
                displayNameMode: a,
                displayUserMode: o,
                locked: d,
                flipped: u,
                size: c,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            p = s.useRef(null),
            { user: x, member: f, voiceState: A, connectedOn: E } = l,
            [S, I] = s.useState(null),
            [v, T] = s.useState(null);
        s.useEffect(() => {
            d && T(null);
        }, [d]),
            s.useEffect(() => {
                null != S && (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.STREAM_PREVIEWED });
            }, [S]);
        let j = (e) => {
                I(e);
            },
            C = (e, t) => {
                m ||
                    (0, U.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("94881"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("93190"),
                            n.e("8757"),
                            n.e("89673"),
                            n.e("85968"),
                            n.e("60195"),
                            n.e("97558"),
                            n.e("94000"),
                            n.e("91994"),
                            n.e("49145"),
                            n.e("70314"),
                            n.e("27435"),
                            n.e("58980"),
                        ]).then(n.bind(n, 535503));
                        return (
                            (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.VOICE, value: R.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: r?.id,
                                    guildId: r?.guild_id,
                                    mediaEngineContext: g,
                                    onShowProfile: () => T(t.id),
                                    appContext: er.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, R.YX)(er.uss.VOICE_V3, {
                                            type: R.Z5.GO_LIVE,
                                            value: R.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            y = s.useCallback(
                (e) => {
                    let n = eh.A.getWidget(t)?.layoutId,
                        i = null != n ? eh.A.getWidgetsForLayout(n)?.find((e) => e.type === er.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, F.v0)(i.id),
                        H.A.track(er.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: r?.guild_id,
                            channel_id: r?.id,
                            channel_type: r?.type,
                            widget_type: er.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != i &&
                            (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.ENABLED, userId: e.ownerId });
                },
                [r, t],
            );
        if (null == x || null == r || null == A) return null;
        let w = d || h;
        return (0, i.jsx)(
            eu.A,
            {
                targetElementRef: p,
                user: x,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: er.BRT.OVERLAY,
                shouldShow: v === x.id,
                onRequestClose: () => T(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(ey, {
                        ref: p,
                        guildId: r?.guild_id,
                        user: x,
                        connectedOn: E,
                        nick: f?.nick ?? eg.Ay.getName(x),
                        flipped: u,
                        voiceState: A,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: c,
                        locked: w,
                        onContextMenu: C,
                        onClick: C,
                        context: g,
                        channel: r,
                        showStreamPreview: x.id === S,
                        onShowStreamPreview: j,
                        onWatchStream: y,
                        isSettingsPreview: m,
                    }),
            },
            x.id,
        );
    });
n(392164);
var eb = n(731854);
let eN = (e) => {
    let t = (e ?? 0) % _.A.DEFAULT_AVATARS.length;
    return _.A.DEFAULT_AVATARS[t];
};
function e_(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: s, locked: r, flipped: d } = e,
        u = eA(s),
        c = (0, a.yK)(
            [j.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = j.default.getUser(e);
                        if (null == t) return;
                        let i = I.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), u, !1);
                    })
                    .filter(b.Vq),
            [t, n, u],
        ),
        m = c[0] ?? eN(0),
        g = c[1] ?? eN(1);
    return (0, i.jsxs)("div", {
        className: l()(ex.ZR, r && ex.xt, d && ex.zq),
        children: [
            (0, i.jsx)("div", {
                className: ex.e5,
                children: (0, i.jsx)(h.A, { size: s, backSrc: m, frontSrc: g, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: ex.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let eR = s.memo(function (e) {
    let {
            id: t,
            context: n = eb.x.DEFAULT,
            channel: r,
            overlayVoiceStates: l,
            displayNameMode: o,
            displayUserMode: u,
            locked: c,
            pinned: h,
            guildId: m,
            showEmpty: g = !0,
            isPreviewingInGame: p,
            isSettingsPreview: x = !1,
            anchorLeft: f,
            avatarSizeMode: A,
            maxDisplayedVoiceStates: S = 8,
        } = e,
        I = (0, R.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(l),
            [l],
        ),
        [v, T] = l,
        j = T.length > 0 && null != n && null != r && (!c || h),
        C = (0, a.yK)(
            [E.A],
            () =>
                Array.from(I)
                    .map((e) => E.A.getStreamForUser(e, m))
                    .filter(b.Vq)
                    .map((e) => e.ownerId),
            [m, I],
        );
    s.useEffect(() => {
        j &&
            (0, R.Y)(er.uss.VOICE_V3, {
                locked: w.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: C,
                contentInventoryIds: [],
            });
    }, [I, C, j]);
    let y = -1 !== S ? T.slice(0, S) : T,
        N = -1 !== S ? T.slice(S) : [],
        _ = v.get(N[0]),
        M = u === er.f5z.ALWAYS && -1 !== S;
    return j
        ? (0, i.jsxs)("div", {
              className: ex.h8,
              children: [
                  y.map((e) => {
                      let s = v.get(e);
                      return null == s
                          ? null
                          : (0, i.jsx)(
                                ew,
                                {
                                    sortedVoiceState: s,
                                    channel: r,
                                    widgetId: t,
                                    flipped: !f,
                                    isPreviewingInGame: p,
                                    isSettingsPreview: x,
                                    context: n,
                                    size: A,
                                    displayNameMode: o,
                                    displayUserMode: u,
                                    locked: c,
                                },
                                e,
                            );
                  }),
                  M &&
                      1 === N.length &&
                      null != _ &&
                      (0, i.jsx)(
                          ew,
                          {
                              sortedVoiceState: _,
                              channel: r,
                              widgetId: t,
                              flipped: !f,
                              isPreviewingInGame: p,
                              isSettingsPreview: x,
                              context: n,
                              size: A,
                              displayNameMode: o,
                              displayUserMode: u,
                              locked: c,
                          },
                          N[0],
                      ),
                  M &&
                      N.length > 1 &&
                      (0, i.jsx)(e_, { hiddenVoiceStates: N, voiceStateMap: v, size: ef(A), locked: c, flipped: !f }),
              ],
          })
        : c || !g
          ? null
          : (0, i.jsx)(O.g, { emptyText: ep.intl.string(ep.t.hEh0l1), icon: d.H });
});
function eO(e) {
    let { isSettingsPreview: t } = e,
        n = (0, a.bG)([v.A, I.A], () => I.A.getChannel(v.A.getVoiceChannelId())),
        r = (0, m.Ay)(n),
        l = (function (e, t) {
            let n = (0, a.bG)([v.A, I.A], () => I.A.getChannel(v.A.getVoiceChannelId())),
                [i] = (0, a.bG)(
                    [y.Ay, x.A, v.A, I.A],
                    () => {
                        let e = I.A.getChannel(v.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [x.A.getMutableParticipants(e.id, f.ip.SPEAKER), x.A.getParticipantsVersion(e.id)]
                              : [y.Ay.getVoiceStatesForChannel(e), y.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    N.D,
                ),
                r = (0, A.$n)(n?.id, i),
                l = s.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                o = (0, a.bG)([S.default], () => S.default.getId());
            return [
                l,
                (0, a.yK)([C.A, v.A, T.A, p.A], () => {
                    let n = Array.from(
                        new Set(
                            r.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            }),
                        ),
                    );
                    if (-1 === t || n.length <= t) return n;
                    let i = new Map();
                    for (let t of n) {
                        let n = (0, u.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [C.A, v.A, T.A, p.A],
                            ),
                            s = t === o;
                        (n || s) && i.set(t, { isSpeaking: n, isCurrentUser: s });
                    }
                    let s = [],
                        l = [],
                        a = [];
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            o = i.get(r);
                        e < t ? s.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(r) : l.push(r);
                    }
                    if (a.length > 0) {
                        let e = s.slice(0, t - a.length),
                            n = s.slice(t - a.length);
                        return [...e, ...a, ...n, ...l];
                    }
                    return n;
                }, [r, e, o, t]),
            ];
        })(eb.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        d = (0, k.b4)(),
        h = (0, c.h)(d?.id),
        j = (0, a.cf)([E.A, w.default, M.A], () => {
            let e = E.A.getCurrentUserActiveStream();
            return {
                displayUserMode: w.default.getDisplayUserMode(),
                displayNameMode: w.default.getDisplayNameMode(),
                avatarSizeMode: w.default.getAvatarSizeMode(),
                streamApplication: o?.pid === M.A.getTargetPID() ? (0, g.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(eR, {
        ...j,
        application: h,
        ...e,
        overlayVoiceStates: l,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: j.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
