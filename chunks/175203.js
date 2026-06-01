l.d(t, { Ay: () => ew, Yl: () => eL }), l(321073);
var i = l(627968),
    s = l(64700),
    n = l(503698),
    a = l.n(n),
    d = l(922139),
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
    k = l(429913),
    L = l(520698),
    w = l(164617),
    $ = l(66004),
    W = l(958005),
    z = l(384059),
    H = l(556525),
    Q = l(609425),
    Y = l(252545),
    X = l(51092),
    J = l(40056),
    F = l(117029),
    B = l(612258),
    q = l(551826),
    K = l(567249),
    Z = l(574172),
    ee = l(665691),
    et = l(635885),
    el = l(209932),
    ei = l(885386),
    es = l(461782),
    en = l(614518),
    ea = l(706787),
    ed = l(495544),
    er = l(111162),
    ec = l(761853),
    eo = l(290863),
    ep = l(485296),
    eu = l(977997),
    em = l(712687),
    eA = l(790381),
    eh = l(266080),
    ex = l(723702),
    ev = l(19575),
    ej = l(141035),
    eg = l(654820),
    ey = l(804980),
    eI = l(272812),
    eN = l(304047),
    ef = l(434087),
    eT = l(83982),
    eS = l(345812),
    eE = l(110234),
    eb = l(652215),
    eC = l(806931),
    eO = l(31408),
    e_ = l(731854),
    eG = l(375708),
    eM = l(391308);
let eU = [eC.lp.ACTIVITY],
    eD = s.memo((e) => {
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
            Y = s.useContext(es.vG) || z,
            [F, K] = s.useState(!1),
            Z = ei.Q_.useSetting(),
            et = (0, o.bG)([er.default], () => er.default.isStreamInfoOverlayEnabled),
            [eo, em] = s.useState(!1),
            eA = (0, o.bG)([ed.default], () => ed.default.getId()),
            eh = p.type === eC.lp.ACTIVITY ? null : p.user,
            ex = eh?.id ?? null,
            [ev] = (0, k.A)(p.type === eC.lp.ACTIVITY ? [p.applicationId] : []),
            eN = (0, o.bG)([ec.Ay], () => null != ex && ec.Ay.isLocalVideoDisabled(ex, (0, L.A)(p.type)), [ex, p.type]),
            eS = (0, o.bG)(
                [ec.Ay],
                () => (null != ex ? ec.Ay.getVideoToggleState(ex, (0, L.A)(p.type)) : eb.bb8.NONE),
                [ex, p.type],
            ),
            eD = eS === eb.bb8.AUTO_PROBING,
            { speaking: eR, ringing: eP, hasVideo: eV } = (0, eE.A)(p, eA),
            eL = (0, o.bG)([el.A], () => null !== ex && el.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((t = eA),
                (l = p),
                (n = S.getGuildId()),
                (d = l.type !== eC.lp.ACTIVITY ? l.user.id : l.applicationId),
                (r = (0, o.cf)([eu.A], () => {
                    let e = eu.A.getVoiceState(n, d);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, o.cf)([ec.Ay], () => {
                    let e = (0, L.A)(l.type);
                    return t === d
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: ec.Ay.isLocalMute(d, e),
                              localVideoDisabled: ec.Ay.isLocalVideoDisabled(d, e),
                              localVideoAutoDisabled: ec.Ay.isLocalVideoAutoDisabled(d, e),
                          };
                }, [t, l.type, d])),
                {
                    serverMuted: r.muted,
                    serverDeafened: r.deafened,
                    suppressed: r.suppressed,
                    localMuted: c.muted,
                    muted: (l.type === eC.lp.USER && l.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (l.type === eC.lp.USER && l.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            e$ = p.type === eC.lp.STREAM && ex === eA,
            eW = (0, o.bG)([en.A], () => (p.type === eC.lp.USER && null != ex ? en.A.getEffectForUserId(ex) : null)),
            ez = (0, o.bG)([eu.A], () => eu.A.getVoicePlatformForChannel(S.id, ex ?? eb.dJq)),
            eH = (0, ee.UF)({ userId: ex, channelId: S.id }),
            eQ = (0, ee.DY)({ streamKey: p.type === eC.lp.STREAM ? p.id : null, channelId: S.id }),
            eY = s.useMemo(
                () => (p.type === eC.lp.STREAM ? (eQ ?? !1) : p.type === eC.lp.USER && (eH ?? !1)),
                [eQ, eH, p.type],
            );
        s.useEffect(() => {
            K(M);
        }, [M]);
        let eX = s.useCallback(() => {
                null != ex && D.A.toggleLocalMute(ex, e_.x.STREAM);
            }, [ex]),
            eJ = s.useCallback(
                (e) => {
                    g?.(p, e);
                },
                [g, p],
            ),
            eF = s.useCallback(
                (e) => {
                    v?.(p, e);
                },
                [v, p],
            ),
            eB = s.useCallback(
                (e, t, l) => {
                    j?.(p, e, t, l);
                },
                [j, p],
            ),
            eq = null,
            eK = null,
            eZ = "";
        switch (p.type) {
            case eC.lp.STREAM:
                (eq = (0, i.jsx)(ef.A, {
                    participant: p,
                    selected: O,
                    popoutType: u,
                    width: E,
                    fit: V,
                    onVideoResize: b,
                    paused: w,
                })),
                    (eK = (0, i.jsx)(ef.D, {
                        participant: p,
                        selected: O,
                        width: E,
                        focused: M,
                        idle: Y,
                        premiumIndicator: !1,
                    })),
                    (eZ = eG.intl.formatToPlainString(eG.t.gHPz3Q, { streamerName: p.user.username }));
                break;
            case eC.lp.USER:
                (eq = (0, i.jsx)(eT.A, {
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
                    noVideoRender: G || eD,
                    pulseSpeakingIndicator: W,
                })),
                    (eK = (0, i.jsx)(eT.s, { participant: p, channelId: S.id })),
                    (eZ = eG.intl.formatToPlainString(eG.t["iC/x/Q"], { username: p.user.username }));
                break;
            case eC.lp.ACTIVITY:
                (eq = (0, i.jsx)(ey.Ay, { interactible: M, participant: p, selected: O, channel: S, width: E })),
                    (eZ = eG.intl.formatToPlainString(eG.t.YCvOsO, { activityName: ev?.name }));
                break;
            case eC.lp.HIDDEN_STREAM:
                eq = (0, i.jsx)(ef.A, {
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
            e1 = (0, o.bG)([ep.A], () => (p.type === eC.lp.USER ? ep.A.getVoiceVolume(p.id) : -1 / 0)),
            e2 = (0, H.v)({ isSpeaking: eR, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e5 = (0, eC.Ay)(p) ? m.k : eV ? A.n : h.E,
            e6 = p.type === eC.lp.STREAM && M;
        return (0, i.jsx)(R.A, {
            section: eb.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(J.Ay, {
                streamKey: p.id,
                enableZoom: e6,
                children: (0, i.jsx)("div", {
                    className: a()(eM.iE, { [eM.DF]: eP }, N),
                    style: T,
                    onMouseEnter: () => {
                        em(!0);
                    },
                    onMouseLeave: () => {
                        em(!1);
                    },
                    children: (0, i.jsxs)(q.A, {
                        shakeLocation: eO.uD.VOICE_USER,
                        isShaking: eR,
                        className: eM.Vs,
                        children: [
                            (0, i.jsx)(eI.A, {
                                ref: e0,
                                className: a()(eM.Vs, { [eM.E7]: _, [eM.k_]: null == g, [eM.N7]: Y }),
                                noBorder: _,
                                style: f,
                                participantUserId: ex,
                                children: (0, i.jsxs)(x.s, {
                                    "aria-label": eZ,
                                    className: eM.lG,
                                    onDoubleClick: eF,
                                    onContextMenu: (e) => eB(e, p.type === eC.lp.STREAM),
                                    onClick: eJ,
                                    onMouseDown: y,
                                    onKeyDown: I,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != ex
                                            ? (0, i.jsx)(ea.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, en.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        p.type === eC.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eM.nl,
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
                                        _ ? null : (0, i.jsx)("div", { className: eM.hD, children: eK }),
                                        O
                                            ? (0, i.jsx)("div", {
                                                  className: eM._Q,
                                                  children: (0, i.jsx)(e5, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eM.Dt,
                                                  }),
                                              })
                                            : null,
                                        eU.includes(p.type)
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
                                                  title: (0, ej.A)(S, p),
                                                  blocked: U,
                                                  ignored: P,
                                                  localVideoDisabled: eN,
                                                  videoToggleState: eS,
                                                  hideAudioIcon: e$,
                                                  onContextMenu: eB,
                                                  onToggleMute: eX,
                                                  participantUserId: ex,
                                                  channel: S,
                                                  secureFramesVerified: eY,
                                                  isHovered: eo,
                                                  popoutType: u,
                                                  paused: w,
                                                  controlsBottom: Q,
                                                  streamId: p.type === eC.lp.STREAM ? p.streamId : null,
                                              }),
                                        C && !_
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eM.PQ, { [eM.pU]: !M && (eL || null != eW) }),
                                                  style: M || eL ? void 0 : e2,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            Z && et && eo && (0, i.jsx)(eg.A, { currentUserId: eA, participant: p }),
                            (0, i.jsx)(B.A, { isFiring: F, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eR(e) {
    let { participantType: t, platform: l, className: s } = e;
    if (t === eC.lp.STREAM)
        return l === eC.J7.XBOX
            ? (0, i.jsx)(eh.A, { className: s })
            : (0, i.jsx)(m.k, { size: "md", color: "currentColor", className: s });
    switch (l) {
        case eC.J7.MOBILE:
            return (0, i.jsx)(v.u, { size: "xs", color: "currentColor", className: s });
        case eC.J7.XBOX:
            return (0, i.jsx)(eh.A, { className: s });
        case eC.J7.PLAYSTATION:
            return (0, i.jsx)(eA.A, { className: s });
        case eC.J7.QUEST:
            return (0, i.jsx)(r.G, { size: "xs", color: "currentColor", className: s });
        default:
            return null;
    }
}
function eP(e) {
    let { icon: t, tooltipText: l, hideWhenInactive: s, idle: n, onClick: d } = e;
    return (0, i.jsx)(u.m, {
        text: l,
        children: (0, i.jsx)("div", {
            className: a()(eM.V7, { [eM.kl]: s, [eM.N7]: n }),
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
function eV(e) {
    let { channelId: t, participantId: l, hideWhenInactive: n, idle: a } = e,
        d = s.useMemo(() => (0, W.A)(t, l), [t, l]),
        r = (0, o.bG)([K.A], () => K.A.getIsAlwaysOnTop(d)),
        c = s.useCallback(() => {
            (0, z.X)(V.A.CALL_TILE_POPOUT, z.O.STAY_ON_TOP, !r), Z.setAlwaysOnTop(d, !r);
        }, [d, r]);
    return ex.isPlatformEmbedded && ev.Ay.supportsFeature(eb.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eP, {
              onClick: c,
              tooltipText: r ? eG.intl.string(eG.t.YdyDM9) : eG.intl.string(eG.t.ZVGHwP),
              icon: r ? f.h : T.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eD.displayName = "CallTile";
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
            muted: k,
            deafened: $,
            localMuted: H,
            serverMuted: X,
            serverDeafened: J,
            hasVideo: B,
            hideAudioIcon: q,
            onToggleMute: K,
            popoutType: ee,
            paused: el,
            controlsBottom: ei,
            streamId: es,
        } = e,
        en = (0, o.bG)([ed.default], () => ed.default.getId()),
        ea = (0, o.bG)([eo.A], () =>
            v === eC.lp.USER && null != N ? eo.A.getActivities(N).find(P.A)?.application_id : null,
        ),
        er = (0, et.V)(N),
        ep = (0, o.bG)([ec.Ay], () => null != N && ec.Ay.isLocalVideoAutoDisabled(N, (0, L.A)(v)), [N, v]),
        eu = (0, Q.A)({ userId: N, guildId: f.getGuildId() }),
        eA = (0, Y.a)({ displayNameStyles: eu }),
        eh = (0, eS.Yb)(n),
        ex = (0, eS.VE)(n),
        ev = (0, eS.DO)(n),
        [ej, eg] = s.useState(!1);
    s.useEffect(() => {
        let e = !1,
            t = () => {
                e !== em.A.isOpen() && ((e = em.A.isOpen()) || eg(!1));
            };
        return em.A.addChangeListener(t), () => em.A.removeChangeListener(t);
    }, []);
    let ey = !q && v === eC.lp.STREAM && B && (!ex || H),
        eI = (function (e) {
            let { localMuted: t, serverMuted: l, serverDeafened: i, deafened: s, muted: n } = e;
            return i ? j.T : l ? g.O : s ? y.c : t ? g.O : n ? I.z : null;
        })({ localMuted: H, serverMuted: X, serverDeafened: J, deafened: $, muted: k }),
        ef = (0, b.z)({ value: null != ei ? ei : 0, config: { ...d.config.stiff, clamp: !0 } }, "animate-always"),
        eT = [];
    r && v === eC.lp.STREAM && eT.push((0, i.jsx)(F.A, { streamId: es, paused: el }, "zoom-controls")),
        r
            ? ee === w.N.CALL_TILE &&
              (eT.push(
                  (0, i.jsx)(eV, { channelId: f.id, participantId: x, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eT.push(
                  (0, i.jsx)(
                      eP,
                      {
                          onClick: () => {
                              (0, z.X)(V.A.CALL_TILE_POPOUT, z.O.POPOUT_RETURN), Z.close((0, W.A)(f.id, x));
                          },
                          tooltipText: eG.intl.string(eG.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (ev ||
                  v !== eC.lp.USER ||
                  null == N ||
                  N === en ||
                  null == er ||
                  eT.push(
                      (0, i.jsx)(
                          eN.M,
                          { userId: N, channel: f, applicationId: er, hideWhenInactive: !ej, idle: t },
                          "gift",
                      ),
                  ),
              eT.push(
                  (0, i.jsx)(
                      eP,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), eg(!0), R(e, !0, eC.GK.THREE_DOT);
                          },
                          tooltipText: eG.intl.string(eG.t["+1H47t"]),
                          icon: C.j,
                          hideWhenInactive: !ej,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              ey &&
                  eT.push(
                      (0, i.jsx)(
                          eP,
                          {
                              onClick: K,
                              tooltipText: H ? eG.intl.string(eG.t.YqAjXy) : eG.intl.string(eG.t.w4m945),
                              icon: H ? O._ : _.H,
                              hideWhenInactive: !H && !ej,
                              idle: t,
                          },
                          "mute",
                      ),
                  ));
    let eE = [];
    null != eI &&
        v === eC.lp.USER &&
        eE.push((0, i.jsx)(eI, { className: eM.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        A &&
            eE.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eM.Z5,
                        children: (0, i.jsx)(G.K, {
                            size: "lg",
                            className: eM.Q6,
                            color: p.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        h &&
            eE.push(
                (0, i.jsx)(
                    "div",
                    { className: eM.PP, children: (0, i.jsx)(M.G, { size: "lg", className: eM.Q6 }) },
                    "ignored-icon",
                ),
            ),
        t || eE.push((0, i.jsx)(eR, { participantType: v, platform: T, className: eM.gr }, "title-icon")),
        null == l ||
            "" === l ||
            t ||
            eE.push((0, i.jsx)("span", { className: a()(eM.Wk, eA), children: l }, "title-text")),
        D &&
            eE.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: eG.intl.string(eG.t.ZEem6O),
                        children: (0, i.jsx)(U.m, {
                            className: eM.vW,
                            size: "xs",
                            color: p.A.colors.TEXT_STRONG,
                            "aria-label": eG.intl.string(eG.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eO = er ?? ea,
        e_ =
            r || t || ev || v !== eC.lp.USER || null == N || null == eO
                ? null
                : (0, i.jsx)(eN.X, { applicationId: eO, hideApplicationName: ex });
    return (0, i.jsxs)("div", {
        className: a()(eM.MU, { [eM.oE]: ex, [eM.Ol]: r }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eM.Ik, { [eM.EX]: n < 195 }),
                children:
                    ep || m === eb.bb8.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)("div", {
                                  className: eM.h5,
                                  children: (0, i.jsx)(S.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(eM.ns, eM.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: eM.h5,
                                          children: (0, i.jsx)(S.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(E.E, {
                                          variant: "text-sm/normal",
                                          className: eM.Wk,
                                          children: eG.intl.string(eG.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eh &&
                (0, i.jsxs)("div", {
                    className: a()(eM.Qp, { [eM.EX]: n < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eM.qV,
                            children: [
                                eE.length > 0 &&
                                    (0, i.jsx)(E.E, {
                                        className: eM.ac,
                                        color: "none",
                                        variant: ex ? "text-sm/normal" : "text-md/normal",
                                        children: eE,
                                    }),
                                e_,
                            ],
                        }),
                        eT.length > 0
                            ? (0, i.jsx)(d.animated.div, {
                                  className: a()(eM._v, { [eM.N7]: t }),
                                  style: { marginBottom: ef.value },
                                  children: eT,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ek.displayName = "CallTileOverlay";
let eL = /^(14256|21552)$/.test(l.j) ? X.$ : null,
    ew = eD;
