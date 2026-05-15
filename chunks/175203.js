l.d(t, { Ay: () => e$, Yl: () => ew }), l(321073);
var i = l(627968),
    s = l(64700),
    n = l(503698),
    a = l.n(n),
    d = l(873174),
    r = l(738678),
    c = l(12470),
    o = l(17928),
    p = l(661531),
    u = l(990078),
    m = l(31300),
    A = l(428689),
    h = l(289020),
    x = l(890856),
    v = l(646270),
    j = l(615675),
    g = l(666654),
    y = l(990836),
    I = l(83107),
    N = l(408278),
    f = l(609731),
    T = l(788120),
    S = l(943812),
    E = l(834730),
    b = l(717421),
    C = l(365199),
    O = l(358618),
    _ = l(983851),
    G = l(428678),
    M = l(952270),
    U = l(254138),
    D = l(827343),
    R = l(820284),
    P = l(672979),
    V = l(793574),
    L = l(429913),
    k = l(520698),
    w = l(164617),
    $ = l(66004),
    W = l(958005),
    z = l(384059),
    H = l(556525),
    Q = l(609425),
    Y = l(252545),
    X = l(51092),
    J = l(40056),
    B = l(117029),
    F = l(612258),
    q = l(551826),
    K = l(567249),
    Z = l(574172),
    ee = l(665691),
    et = l(724759),
    el = l(635885),
    ei = l(209932),
    es = l(885386),
    en = l(461782),
    ea = l(614518),
    ed = l(706787),
    er = l(495544),
    ec = l(111162),
    eo = l(761853),
    ep = l(290863),
    eu = l(485296),
    em = l(977997),
    eA = l(712687),
    eh = l(790381),
    ex = l(266080),
    ev = l(723702),
    ej = l(19575),
    eg = l(141035),
    ey = l(654820),
    eI = l(804980),
    eN = l(272812),
    ef = l(304047),
    eT = l(434087),
    eS = l(83982),
    eE = l(345812),
    eb = l(110234),
    eC = l(652215),
    eO = l(806931),
    e_ = l(31408),
    eG = l(731854),
    eM = l(375708),
    eU = l(391308);
let eD = [eO.lp.ACTIVITY],
    eR = s.memo((e) => {
        var t, l, n;
        let d,
            r,
            c,
            {
                participant: p,
                popoutType: u,
                onDoubleClick: v,
                onContextMenu: j,
                onClick: g,
                onMouseDown: y,
                onKeyDown: I,
                className: N,
                style: f,
                containerStyle: T,
                channel: S,
                width: E,
                onVideoResize: b,
                inCall: C = !1,
                selected: O = !1,
                noBorder: _ = !1,
                noVideoRender: G = !1,
                focused: M = !1,
                blocked: U = !1,
                ignored: P = !1,
                fit: V = X.$.CONTAIN,
                paused: w = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: z = !1,
                controlsBottom: Q,
            } = e,
            Y = s.useContext(en.vG) || z,
            [B, K] = s.useState(!1),
            Z = es.Q_.useSetting(),
            et = (0, o.bG)([ec.default], () => ec.default.isStreamInfoOverlayEnabled),
            [el, ep] = s.useState(!1),
            eA = (0, o.bG)([er.default], () => er.default.getId()),
            eh = p.type === eO.lp.ACTIVITY ? null : p.user,
            ex = eh?.id ?? null,
            [ev] = (0, L.A)(p.type === eO.lp.ACTIVITY ? [p.applicationId] : []),
            ej = (0, o.bG)([eo.Ay], () => null != ex && eo.Ay.isLocalVideoDisabled(ex, (0, k.A)(p.type)), [ex, p.type]),
            ef = (0, o.bG)(
                [eo.Ay],
                () => (null != ex ? eo.Ay.getVideoToggleState(ex, (0, k.A)(p.type)) : eC.bb8.NONE),
                [ex, p.type],
            ),
            eE = ef === eC.bb8.AUTO_PROBING,
            { speaking: eR, ringing: eP, hasVideo: eV } = (0, eb.A)(p, eA),
            eL = (0, o.bG)([ei.A], () => null !== ex && ei.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((t = eA),
                (l = p),
                (n = S.getGuildId()),
                (d = l.type !== eO.lp.ACTIVITY ? l.user.id : l.applicationId),
                (r = (0, o.cf)([em.A], () => {
                    let e = em.A.getVoiceState(n, d);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, o.cf)([eo.Ay], () => {
                    let e = (0, k.A)(l.type);
                    return t === d
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: eo.Ay.isLocalMute(d, e),
                              localVideoDisabled: eo.Ay.isLocalVideoDisabled(d, e),
                              localVideoAutoDisabled: eo.Ay.isLocalVideoAutoDisabled(d, e),
                          };
                }, [t, l.type, d])),
                {
                    serverMuted: r.muted,
                    serverDeafened: r.deafened,
                    suppressed: r.suppressed,
                    localMuted: c.muted,
                    muted: (l.type === eO.lp.USER && l.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (l.type === eO.lp.USER && l.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            e$ = p.type === eO.lp.STREAM && ex === eA,
            eW = (0, o.bG)([ea.A], () => (p.type === eO.lp.USER && null != ex ? ea.A.getEffectForUserId(ex) : null)),
            ez = (0, o.bG)([em.A], () => em.A.getVoicePlatformForChannel(S.id, ex ?? eC.dJq)),
            eH = (0, ee.UF)({ userId: ex, channelId: S.id }),
            eQ = (0, ee.DY)({ streamKey: p.type === eO.lp.STREAM ? p.id : null, channelId: S.id }),
            eY = s.useMemo(
                () => (p.type === eO.lp.STREAM ? (eQ ?? !1) : p.type === eO.lp.USER && (eH ?? !1)),
                [eQ, eH, p.type],
            );
        s.useEffect(() => {
            K(M);
        }, [M]);
        let eX = s.useCallback(() => {
                null != ex && D.A.toggleLocalMute(ex, eG.x.STREAM);
            }, [ex]),
            eJ = s.useCallback(
                (e) => {
                    g?.(p, e);
                },
                [g, p],
            ),
            eB = s.useCallback(
                (e) => {
                    v?.(p, e);
                },
                [v, p],
            ),
            eF = s.useCallback(
                (e, t, l) => {
                    j?.(p, e, t, l);
                },
                [j, p],
            ),
            eq = null,
            eK = null,
            eZ = "";
        switch (p.type) {
            case eO.lp.STREAM:
                (eq = (0, i.jsx)(eT.A, {
                    participant: p,
                    selected: O,
                    popoutType: u,
                    width: E,
                    fit: V,
                    onVideoResize: b,
                    paused: w,
                })),
                    (eK = (0, i.jsx)(eT.D, {
                        participant: p,
                        selected: O,
                        width: E,
                        focused: M,
                        idle: Y,
                        premiumIndicator: !1,
                    })),
                    (eZ = eM.intl.formatToPlainString(eM.t.gHPz3Q, { streamerName: p.user.username }));
                break;
            case eO.lp.USER:
                (eq = (0, i.jsx)(eS.A, {
                    channel: S,
                    inCall: C,
                    participant: p,
                    popoutType: u,
                    fit: V,
                    onVideoResize: b,
                    paused: w,
                    selected: O,
                    width: E,
                    blocked: U,
                    ignored: P,
                    noVideoRender: G || eE,
                    pulseSpeakingIndicator: W,
                })),
                    (eK = (0, i.jsx)(eS.s, { participant: p, channelId: S.id })),
                    (eZ = eM.intl.formatToPlainString(eM.t["iC/x/Q"], { username: p.user.username }));
                break;
            case eO.lp.ACTIVITY:
                (eq = (0, i.jsx)(eI.Ay, { interactible: M, participant: p, selected: O, channel: S, width: E })),
                    (eZ = eM.intl.formatToPlainString(eM.t.YCvOsO, { activityName: ev?.name }));
                break;
            case eO.lp.HIDDEN_STREAM:
                eq = (0, i.jsx)(eT.A, {
                    participant: p,
                    selected: O,
                    width: E,
                    fit: V,
                    onVideoResize: b,
                    paused: w,
                    popoutType: u,
                });
        }
        let e0 = s.useRef(null),
            e1 = (0, o.bG)([eu.A], () => (p.type === eO.lp.USER ? eu.A.getVoiceVolume(p.id) : -1 / 0)),
            e5 = (0, H.v)({ isSpeaking: eR, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e2 = (0, eO.Ay)(p) ? m.k : eV ? A.n : h.E,
            e7 = p.type === eO.lp.STREAM && M;
        return (0, i.jsx)(R.A, {
            section: eC.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(J.Ay, {
                streamKey: p.id,
                enableZoom: e7,
                children: (0, i.jsx)("div", {
                    className: a()(eU.iE, { [eU.DF]: eP }, N),
                    style: T,
                    onMouseEnter: () => {
                        ep(!0);
                    },
                    onMouseLeave: () => {
                        ep(!1);
                    },
                    children: (0, i.jsxs)(q.A, {
                        shakeLocation: e_.uD.VOICE_USER,
                        isShaking: eR,
                        className: eU.Vs,
                        children: [
                            (0, i.jsx)(eN.A, {
                                ref: e0,
                                className: a()(eU.Vs, { [eU.E7]: _, [eU.k_]: null == g, [eU.N7]: Y }),
                                noBorder: _,
                                style: f,
                                participantUserId: ex,
                                children: (0, i.jsxs)(x.s, {
                                    "aria-label": eZ,
                                    className: eU.lG,
                                    onDoubleClick: eB,
                                    onContextMenu: (e) => eF(e, p.type === eO.lp.STREAM),
                                    onClick: eJ,
                                    onMouseDown: y,
                                    onKeyDown: I,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != ex
                                            ? (0, i.jsx)(ed.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, ea.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        p.type === eO.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eU.nl,
                                                  children: (0, i.jsx)($.A, {
                                                      userId: ex,
                                                      channelId: S.id,
                                                      guildId: S.getGuildId(),
                                                      containerDimensions: {
                                                          width: e0?.current?.clientWidth ?? 0,
                                                          height: e0?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eq,
                                        _ ? null : (0, i.jsx)("div", { className: eU.hD, children: eK }),
                                        O
                                            ? (0, i.jsx)("div", {
                                                  className: eU._Q,
                                                  children: (0, i.jsx)(e2, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eU.Dt,
                                                  }),
                                              })
                                            : null,
                                        eD.includes(p.type)
                                            ? null
                                            : (0, i.jsx)(ek, {
                                                  focused: M,
                                                  width: E,
                                                  inCall: C,
                                                  participantId: p.id,
                                                  participantType: p.type,
                                                  hasVideo: eV ?? !1,
                                                  ...ew,
                                                  idle: Y,
                                                  platform: ez,
                                                  title: (0, eg.A)(S, p),
                                                  blocked: U,
                                                  ignored: P,
                                                  localVideoDisabled: ej,
                                                  videoToggleState: ef,
                                                  hideAudioIcon: e$,
                                                  onContextMenu: eF,
                                                  onToggleMute: eX,
                                                  participantUserId: ex,
                                                  channel: S,
                                                  secureFramesVerified: eY,
                                                  isHovered: el,
                                                  popoutType: u,
                                                  paused: w,
                                                  controlsBottom: Q,
                                                  streamId: p.type === eO.lp.STREAM ? p.streamId : null,
                                              }),
                                        C && !_
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eU.PQ, { [eU.pU]: !M && (eL || null != eW) }),
                                                  style: M || eL ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            Z && et && el && (0, i.jsx)(ey.A, { currentUserId: eA, participant: p }),
                            (0, i.jsx)(F.A, { isFiring: B, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eP(e) {
    let { participantType: t, platform: l, className: s } = e;
    if (t === eO.lp.STREAM)
        return l === eO.J7.XBOX
            ? (0, i.jsx)(ex.A, { className: s })
            : (0, i.jsx)(m.k, { size: "md", color: "currentColor", className: s });
    switch (l) {
        case eO.J7.MOBILE:
            return (0, i.jsx)(v.u, { size: "xs", color: "currentColor", className: s });
        case eO.J7.XBOX:
            return (0, i.jsx)(ex.A, { className: s });
        case eO.J7.PLAYSTATION:
            return (0, i.jsx)(eh.A, { className: s });
        case eO.J7.QUEST:
            return (0, i.jsx)(r.G, { size: "xs", color: "currentColor", className: s });
        default:
            return null;
    }
}
function eV(e) {
    let { icon: t, tooltipText: l, hideWhenInactive: s, idle: n, onClick: d } = e;
    return (0, i.jsx)(u.m, {
        text: l,
        children: (0, i.jsx)("div", {
            className: a()(eU.V7, { [eU.kl]: s, [eU.N7]: n }),
            children: (0, i.jsx)(N.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), d(e);
                },
                "aria-label": l,
                icon: t,
            }),
        }),
    });
}
function eL(e) {
    let { channelId: t, participantId: l, hideWhenInactive: n, idle: a } = e,
        d = s.useMemo(() => (0, W.A)(t, l), [t, l]),
        r = (0, o.bG)([K.A], () => K.A.getIsAlwaysOnTop(d)),
        c = s.useCallback(() => {
            (0, z.X)(V.A.CALL_TILE_POPOUT, z.O.STAY_ON_TOP, !r), Z.setAlwaysOnTop(d, !r);
        }, [d, r]);
    return ev.isPlatformEmbedded && ej.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eV, {
              onClick: c,
              tooltipText: r ? eM.intl.string(eM.t.YdyDM9) : eM.intl.string(eM.t.ZVGHwP),
              icon: r ? f.h : T.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eR.displayName = "CallTile";
let ek = s.memo((e) => {
    let {
            idle: t,
            title: l,
            width: n,
            focused: r,
            videoToggleState: m,
            blocked: A,
            ignored: h,
            participantId: x,
            participantType: v,
            participantUserId: N,
            channel: f,
            platform: T,
            secureFramesVerified: D,
            onContextMenu: R,
            muted: L,
            deafened: $,
            localMuted: H,
            serverMuted: X,
            serverDeafened: J,
            hasVideo: F,
            hideAudioIcon: q,
            onToggleMute: K,
            popoutType: ee,
            paused: ei,
            controlsBottom: es,
            streamId: en,
        } = e,
        ea = (0, o.bG)([er.default], () => er.default.getId()),
        ed = (0, et.B)({ location: "call_tile" }),
        ec = (0, o.bG)([ep.A], () =>
            v === eO.lp.USER && null != N ? ep.A.getActivities(N).find(P.A)?.application_id : null,
        ),
        eu = (0, el.V)(ed ? N : null),
        em = (0, o.bG)([eo.Ay], () => null != N && eo.Ay.isLocalVideoAutoDisabled(N, (0, k.A)(v)), [N, v]),
        eh = (0, Q.A)({ userId: N, guildId: f.getGuildId() }),
        ex = (0, Y.a)({ displayNameStyles: eh }),
        ev = (0, eE.Yb)(n),
        ej = (0, eE.VE)(n),
        eg = (0, eE.DO)(n),
        [ey, eI] = s.useState(!1);
    s.useEffect(() => {
        let e = !1,
            t = () => {
                e !== eA.A.isOpen() && ((e = eA.A.isOpen()) || eI(!1));
            };
        return eA.A.addChangeListener(t), () => eA.A.removeChangeListener(t);
    }, []);
    let eN = !q && v === eO.lp.STREAM && F && (!ej || H),
        eT = (function (e) {
            let { localMuted: t, serverMuted: l, serverDeafened: i, deafened: s, muted: n } = e;
            return i ? j.T : l ? g.O : s ? y.c : t ? g.O : n ? I.z : null;
        })({ localMuted: H, serverMuted: X, serverDeafened: J, deafened: $, muted: L }),
        eS = (0, b.z)({ value: null != es ? es : 0, config: { ...d.config.stiff, clamp: !0 } }, "animate-always"),
        eb = [];
    r && v === eO.lp.STREAM && eb.push((0, i.jsx)(B.A, { streamId: en, paused: ei }, "zoom-controls")),
        r
            ? ee === w.N.CALL_TILE &&
              (eb.push(
                  (0, i.jsx)(eL, { channelId: f.id, participantId: x, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eb.push(
                  (0, i.jsx)(
                      eV,
                      {
                          onClick: () => {
                              (0, z.X)(V.A.CALL_TILE_POPOUT, z.O.POPOUT_RETURN), Z.close((0, W.A)(f.id, x));
                          },
                          tooltipText: eM.intl.string(eM.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (ed &&
                  !eg &&
                  v === eO.lp.USER &&
                  null != N &&
                  N !== ea &&
                  null != eu &&
                  eb.push(
                      (0, i.jsx)(
                          ef.M,
                          { userId: N, channel: f, applicationId: eu, hideWhenInactive: !ey, idle: t },
                          "gift",
                      ),
                  ),
              eb.push(
                  (0, i.jsx)(
                      eV,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), eI(!0), R(e, !0, eO.GK.THREE_DOT);
                          },
                          tooltipText: eM.intl.string(eM.t["+1H47t"]),
                          icon: C.j,
                          hideWhenInactive: !ey,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              eN &&
                  eb.push(
                      (0, i.jsx)(
                          eV,
                          {
                              onClick: K,
                              tooltipText: H ? eM.intl.string(eM.t.YqAjXy) : eM.intl.string(eM.t.w4m945),
                              icon: H ? O._ : _.H,
                              hideWhenInactive: !H && !ey,
                              idle: t,
                          },
                          "mute",
                      ),
                  ));
    let e_ = [];
    null != eT &&
        v === eO.lp.USER &&
        e_.push((0, i.jsx)(eT, { className: eU.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        A &&
            e_.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eU.Z5,
                        children: (0, i.jsx)(G.K, {
                            size: "lg",
                            className: eU.Q6,
                            color: p.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        h &&
            e_.push(
                (0, i.jsx)(
                    "div",
                    { className: eU.PP, children: (0, i.jsx)(M.G, { size: "lg", className: eU.Q6 }) },
                    "ignored-icon",
                ),
            ),
        t || e_.push((0, i.jsx)(eP, { participantType: v, platform: T, className: eU.gr }, "title-icon")),
        null == l ||
            "" === l ||
            t ||
            e_.push((0, i.jsx)("span", { className: a()(eU.Wk, ex), children: l }, "title-text")),
        D &&
            e_.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: eM.intl.string(eM.t.ZEem6O),
                        children: (0, i.jsx)(U.m, {
                            className: eU.vW,
                            size: "xs",
                            color: p.A.colors.TEXT_STRONG,
                            "aria-label": eM.intl.string(eM.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eG = eu ?? ec,
        eD =
            !ed || r || t || eg || v !== eO.lp.USER || null == N || null == eG
                ? null
                : (0, i.jsx)(ef.X, { applicationId: eG, hideApplicationName: ej });
    return (0, i.jsxs)("div", {
        className: a()(eU.MU, { [eU.oE]: ej, [eU.Ol]: r }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eU.Ik, { [eU.EX]: n < 195 }),
                children:
                    em || m === eC.bb8.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)("div", {
                                  className: eU.h5,
                                  children: (0, i.jsx)(S.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(eU.ns, eU.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: eU.h5,
                                          children: (0, i.jsx)(S.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(E.E, {
                                          variant: "text-sm/normal",
                                          className: eU.Wk,
                                          children: eM.intl.string(eM.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ev &&
                (0, i.jsxs)("div", {
                    className: a()(eU.Qp, { [eU.EX]: n < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(eU.qV, { [eU.d5]: ed }),
                            children: [
                                e_.length > 0 &&
                                    (0, i.jsx)(E.E, {
                                        className: eU.ac,
                                        color: "none",
                                        variant: ej ? "text-sm/normal" : "text-md/normal",
                                        children: e_,
                                    }),
                                eD,
                            ],
                        }),
                        eb.length > 0
                            ? (0, i.jsx)(d.animated.div, {
                                  className: a()(eU._v, { [eU.N7]: t, [eU.d5]: ed }),
                                  style: { marginBottom: eS.value },
                                  children: eb,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ek.displayName = "CallTileOverlay";
let ew = /^(14256|21552)$/.test(l.j) ? X.$ : null,
    e$ = eR;
