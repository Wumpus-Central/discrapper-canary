t.d(l, { Ay: () => ew, Yl: () => ez }), t(321073);
var s = t(627968),
    i = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(873174),
    d = t(738678),
    o = t(12470),
    c = t(17928),
    u = t(661531),
    p = t(990078),
    m = t(31300),
    h = t(428689),
    A = t(289020),
    x = t(890856),
    g = t(646270),
    f = t(615675),
    I = t(666654),
    y = t(990836),
    j = t(83107),
    E = t(408278),
    T = t(609731),
    C = t(788120),
    N = t(943812),
    b = t(834730),
    v = t(717421),
    S = t(365199),
    k = t(358618),
    O = t(983851),
    R = t(428678),
    M = t(952270),
    V = t(254138),
    _ = t(827343),
    D = t(820284),
    U = t(672979),
    G = t(793574),
    L = t(429913),
    P = t(520698),
    z = t(164617),
    w = t(66004),
    W = t(958005),
    B = t(384059),
    H = t(556525),
    Y = t(609425),
    F = t(252545),
    X = t(51092),
    Q = t(40056),
    J = t(117029),
    q = t(612258),
    K = t(551826),
    Z = t(567249),
    $ = t(574172),
    ee = t(665691),
    el = t(724759),
    et = t(635885),
    es = t(209932),
    ei = t(885386),
    en = t(461782),
    ea = t(614518),
    er = t(706787),
    ed = t(495544),
    eo = t(111162),
    ec = t(761853),
    eu = t(290863),
    ep = t(485296),
    em = t(977997),
    eh = t(712687),
    eA = t(790381),
    ex = t(266080),
    eg = t(723702),
    ef = t(19575),
    eI = t(141035),
    ey = t(654820),
    ej = t(804980),
    eE = t(272812),
    eT = t(304047),
    eC = t(434087),
    eN = t(83982),
    eb = t(345812),
    ev = t(110234),
    eS = t(652215),
    ek = t(806931),
    eO = t(31408),
    eR = t(731854),
    eM = t(375708),
    eV = t(391308);
let e_ = [ek.lp.ACTIVITY],
    eD = i.memo((e) => {
        var l, t, n;
        let r,
            d,
            o,
            {
                participant: u,
                popoutType: p,
                onDoubleClick: g,
                onContextMenu: f,
                onClick: I,
                onMouseDown: y,
                onKeyDown: j,
                className: E,
                style: T,
                containerStyle: C,
                channel: N,
                width: b,
                onVideoResize: v,
                inCall: S = !1,
                selected: k = !1,
                noBorder: O = !1,
                noVideoRender: R = !1,
                focused: M = !1,
                blocked: V = !1,
                ignored: U = !1,
                fit: G = X.$.CONTAIN,
                paused: z = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: B = !1,
                controlsBottom: Y,
            } = e,
            F = i.useContext(en.vG) || B,
            [J, Z] = i.useState(!1),
            $ = ei.Q_.useSetting(),
            el = (0, c.bG)([eo.default], () => eo.default.isStreamInfoOverlayEnabled),
            [et, eu] = i.useState(!1),
            eh = (0, c.bG)([ed.default], () => ed.default.getId()),
            eA = u.type === ek.lp.ACTIVITY ? null : u.user,
            ex = eA?.id ?? null,
            [eg] = (0, L.A)(u.type === ek.lp.ACTIVITY ? [u.applicationId] : []),
            ef = (0, c.bG)([ec.Ay], () => null != ex && ec.Ay.isLocalVideoDisabled(ex, (0, P.A)(u.type)), [ex, u.type]),
            eT = (0, c.bG)(
                [ec.Ay],
                () => (null != ex ? ec.Ay.getVideoToggleState(ex, (0, P.A)(u.type)) : eS.bb8.NONE),
                [ex, u.type],
            ),
            eb = eT === eS.bb8.AUTO_PROBING,
            { speaking: eD, ringing: eU, hasVideo: eG } = (0, ev.A)(u, eh),
            eL = (0, c.bG)([es.A], () => null !== ex && es.A.isUserPlayingSounds(ex), [ex]),
            ez =
                ((l = eh),
                (t = u),
                (n = N.getGuildId()),
                (r = t.type !== ek.lp.ACTIVITY ? t.user.id : t.applicationId),
                (d = (0, c.cf)([em.A], () => {
                    let e = em.A.getVoiceState(n, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (o = (0, c.cf)([ec.Ay], () => {
                    let e = (0, P.A)(t.type);
                    return l === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: ec.Ay.isLocalMute(r, e),
                              localVideoDisabled: ec.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: ec.Ay.isLocalVideoAutoDisabled(r, e),
                          };
                }, [l, t.type, r])),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: o.muted,
                    muted: (t.type === ek.lp.USER && t.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (t.type === ek.lp.USER && t.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ew = u.type === ek.lp.STREAM && ex === eh,
            eW = (0, c.bG)([ea.A], () => (u.type === ek.lp.USER && null != ex ? ea.A.getEffectForUserId(ex) : null)),
            eB = (0, c.bG)([em.A], () => em.A.getVoicePlatformForChannel(N.id, ex ?? eS.dJq)),
            eH = (0, ee.UF)({ userId: ex, channelId: N.id }),
            eY = (0, ee.DY)({ streamKey: u.type === ek.lp.STREAM ? u.id : null, channelId: N.id }),
            eF = i.useMemo(
                () => (u.type === ek.lp.STREAM ? (eY ?? !1) : u.type === ek.lp.USER && (eH ?? !1)),
                [eY, eH, u.type],
            );
        i.useEffect(() => {
            Z(M);
        }, [M]);
        let eX = i.useCallback(() => {
                null != ex && _.A.toggleLocalMute(ex, eR.x.STREAM);
            }, [ex]),
            eQ = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eJ = i.useCallback(
                (e) => {
                    g?.(u, e);
                },
                [g, u],
            ),
            eq = i.useCallback(
                (e, l, t) => {
                    f?.(u, e, l, t);
                },
                [f, u],
            ),
            eK = null,
            eZ = null,
            e$ = "";
        switch (u.type) {
            case ek.lp.STREAM:
                (eK = (0, s.jsx)(eC.A, {
                    participant: u,
                    selected: k,
                    popoutType: p,
                    width: b,
                    fit: G,
                    onVideoResize: v,
                    paused: z,
                })),
                    (eZ = (0, s.jsx)(eC.D, {
                        participant: u,
                        selected: k,
                        width: b,
                        focused: M,
                        idle: F,
                        premiumIndicator: !1,
                    })),
                    (e$ = eM.intl.formatToPlainString(eM.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case ek.lp.USER:
                (eK = (0, s.jsx)(eN.A, {
                    channel: N,
                    inCall: S,
                    participant: u,
                    popoutType: p,
                    fit: G,
                    onVideoResize: v,
                    paused: z,
                    selected: k,
                    width: b,
                    blocked: V,
                    ignored: U,
                    noVideoRender: R || eb,
                    pulseSpeakingIndicator: W,
                })),
                    (eZ = (0, s.jsx)(eN.s, { participant: u, channelId: N.id })),
                    (e$ = eM.intl.formatToPlainString(eM.t["iC/x/Q"], { username: u.user.username }));
                break;
            case ek.lp.ACTIVITY:
                (eK = (0, s.jsx)(ej.Ay, { interactible: M, participant: u, selected: k, channel: N, width: b })),
                    (e$ = eM.intl.formatToPlainString(eM.t.YCvOsO, { activityName: eg?.name }));
                break;
            case ek.lp.HIDDEN_STREAM:
                eK = (0, s.jsx)(eC.A, {
                    participant: u,
                    selected: k,
                    width: b,
                    fit: G,
                    onVideoResize: v,
                    paused: z,
                    popoutType: p,
                });
        }
        let e0 = i.useRef(null),
            e1 = (0, c.bG)([ep.A], () => (u.type === ek.lp.USER ? ep.A.getVoiceVolume(u.id) : -1 / 0)),
            e7 = (0, H.v)({ isSpeaking: eD, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, ek.Ay)(u) ? m.k : eG ? h.n : A.E,
            e2 = u.type === ek.lp.STREAM && M;
        return (0, s.jsx)(D.A, {
            section: eS.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)(Q.Ay, {
                streamKey: u.id,
                enableZoom: e2,
                children: (0, s.jsx)("div", {
                    className: a()(eV.iE, { [eV.DF]: eU }, E),
                    style: C,
                    onMouseEnter: () => {
                        eu(!0);
                    },
                    onMouseLeave: () => {
                        eu(!1);
                    },
                    children: (0, s.jsxs)(K.A, {
                        shakeLocation: eO.uD.VOICE_USER,
                        isShaking: eD,
                        className: eV.Vs,
                        children: [
                            (0, s.jsx)(eE.A, {
                                ref: e0,
                                className: a()(eV.Vs, { [eV.E7]: O, [eV.k_]: null == I, [eV.N7]: F }),
                                noBorder: O,
                                style: T,
                                participantUserId: ex,
                                children: (0, s.jsxs)(x.s, {
                                    "aria-label": e$,
                                    className: eV.lG,
                                    onDoubleClick: eJ,
                                    onContextMenu: (e) => eq(e, u.type === ek.lp.STREAM),
                                    onClick: eQ,
                                    onMouseDown: y,
                                    onKeyDown: j,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != ex
                                            ? (0, s.jsx)(er.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, ea.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        u.type === ek.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eV.nl,
                                                  children: (0, s.jsx)(w.A, {
                                                      userId: ex,
                                                      channelId: N.id,
                                                      guildId: N.getGuildId(),
                                                      containerDimensions: {
                                                          width: e0?.current?.clientWidth ?? 0,
                                                          height: e0?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eK,
                                        O ? null : (0, s.jsx)("div", { className: eV.hD, children: eZ }),
                                        k
                                            ? (0, s.jsx)("div", {
                                                  className: eV._Q,
                                                  children: (0, s.jsx)(e8, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eV.Dt,
                                                  }),
                                              })
                                            : null,
                                        e_.includes(u.type)
                                            ? null
                                            : (0, s.jsx)(eP, {
                                                  focused: M,
                                                  width: b,
                                                  inCall: S,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eG ?? !1,
                                                  ...ez,
                                                  idle: F,
                                                  platform: eB,
                                                  title: (0, eI.A)(N, u),
                                                  blocked: V,
                                                  ignored: U,
                                                  localVideoDisabled: ef,
                                                  videoToggleState: eT,
                                                  hideAudioIcon: ew,
                                                  onContextMenu: eq,
                                                  onToggleMute: eX,
                                                  participantUserId: ex,
                                                  channel: N,
                                                  secureFramesVerified: eF,
                                                  isHovered: et,
                                                  popoutType: p,
                                                  paused: z,
                                                  controlsBottom: Y,
                                                  streamId: u.type === ek.lp.STREAM ? u.streamId : null,
                                              }),
                                        S && !O
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eV.PQ, { [eV.pU]: !M && (eL || null != eW) }),
                                                  style: M || eL ? void 0 : e7,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            $ && el && et && (0, s.jsx)(ey.A, { currentUserId: eh, participant: u }),
                            (0, s.jsx)(q.A, { isFiring: J, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eU(e) {
    let { participantType: l, platform: t, className: i } = e;
    if (l === ek.lp.STREAM)
        return t === ek.J7.XBOX
            ? (0, s.jsx)(ex.A, { className: i })
            : (0, s.jsx)(m.k, { size: "md", color: "currentColor", className: i });
    switch (t) {
        case ek.J7.MOBILE:
            return (0, s.jsx)(g.u, { size: "xs", color: "currentColor", className: i });
        case ek.J7.XBOX:
            return (0, s.jsx)(ex.A, { className: i });
        case ek.J7.PLAYSTATION:
            return (0, s.jsx)(eA.A, { className: i });
        case ek.J7.QUEST:
            return (0, s.jsx)(d.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eG(e) {
    let { icon: l, tooltipText: t, hideWhenInactive: i, idle: n, onClick: r } = e;
    return (0, s.jsx)(p.m, {
        text: t,
        children: (0, s.jsx)("div", {
            className: a()(eV.V7, { [eV.kl]: i, [eV.N7]: n }),
            children: (0, s.jsx)(E.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), r(e);
                },
                "aria-label": t,
                icon: l,
            }),
        }),
    });
}
function eL(e) {
    let { channelId: l, participantId: t, hideWhenInactive: n, idle: a } = e,
        r = i.useMemo(() => (0, W.A)(l, t), [l, t]),
        d = (0, c.bG)([Z.A], () => Z.A.getIsAlwaysOnTop(r)),
        o = i.useCallback(() => {
            (0, B.X)(G.A.CALL_TILE_POPOUT, B.O.STAY_ON_TOP, !d), $.setAlwaysOnTop(r, !d);
        }, [r, d]);
    return eg.isPlatformEmbedded && ef.Ay.supportsFeature(eS.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eG, {
              onClick: o,
              tooltipText: d ? eM.intl.string(eM.t.YdyDM9) : eM.intl.string(eM.t.ZVGHwP),
              icon: d ? T.h : C.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eD.displayName = "CallTile";
let eP = i.memo((e) => {
    let {
            idle: l,
            title: t,
            width: n,
            focused: d,
            videoToggleState: m,
            blocked: h,
            ignored: A,
            participantId: x,
            participantType: g,
            participantUserId: E,
            channel: T,
            platform: C,
            secureFramesVerified: _,
            onContextMenu: D,
            muted: L,
            deafened: w,
            localMuted: H,
            serverMuted: X,
            serverDeafened: Q,
            hasVideo: q,
            hideAudioIcon: K,
            onToggleMute: Z,
            popoutType: ee,
            paused: es,
            controlsBottom: ei,
            streamId: en,
        } = e,
        ea = (0, c.bG)([ed.default], () => ed.default.getId()),
        er = (0, el.B)({ location: "call_tile" }),
        eo = (0, c.bG)([eu.A], () =>
            g === ek.lp.USER && null != E ? eu.A.getActivities(E).find(U.A)?.application_id : null,
        ),
        ep = (0, et.V)(er ? E : null),
        em = (0, c.bG)([ec.Ay], () => null != E && ec.Ay.isLocalVideoAutoDisabled(E, (0, P.A)(g)), [E, g]),
        eA = (0, Y.A)({ userId: E, guildId: T.getGuildId() }),
        ex = (0, F.a)({ displayNameStyles: eA }),
        eg = (0, eb.Yb)(n),
        ef = (0, eb.VE)(n),
        eI = (0, eb.DO)(n),
        [ey, ej] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            l = () => {
                e !== eh.A.isOpen() && ((e = eh.A.isOpen()) || ej(!1));
            };
        return eh.A.addChangeListener(l), () => eh.A.removeChangeListener(l);
    }, []);
    let eE = !K && g === ek.lp.STREAM && q && (!ef || H),
        eC = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: s, deafened: i, muted: n } = e;
            return s ? f.T : t ? I.O : i ? y.c : l ? I.O : n ? j.z : null;
        })({ localMuted: H, serverMuted: X, serverDeafened: Q, deafened: w, muted: L }),
        eN = (0, v.z)({ value: null != ei ? ei : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        ev = [];
    d && g === ek.lp.STREAM && ev.push((0, s.jsx)(J.A, { streamId: en, paused: es }, "zoom-controls")),
        d
            ? ee === z.N.CALL_TILE &&
              (ev.push(
                  (0, s.jsx)(eL, { channelId: T.id, participantId: x, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              ev.push(
                  (0, s.jsx)(
                      eG,
                      {
                          onClick: () => {
                              (0, B.X)(G.A.CALL_TILE_POPOUT, B.O.POPOUT_RETURN), $.close((0, W.A)(T.id, x));
                          },
                          tooltipText: eM.intl.string(eM.t["7Dwcnj"]),
                          icon: o._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (er &&
                  !eI &&
                  g === ek.lp.USER &&
                  null != E &&
                  E !== ea &&
                  null != ep &&
                  ev.push(
                      (0, s.jsx)(
                          eT.M,
                          { userId: E, channel: T, applicationId: ep, hideWhenInactive: !ey, idle: l },
                          "gift",
                      ),
                  ),
              ev.push(
                  (0, s.jsx)(
                      eG,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), ej(!0), D(e, !0, ek.GK.THREE_DOT);
                          },
                          tooltipText: eM.intl.string(eM.t["+1H47t"]),
                          icon: S.j,
                          hideWhenInactive: !ey,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eE &&
                  ev.push(
                      (0, s.jsx)(
                          eG,
                          {
                              onClick: Z,
                              tooltipText: H ? eM.intl.string(eM.t.YqAjXy) : eM.intl.string(eM.t.w4m945),
                              icon: H ? k._ : O.H,
                              hideWhenInactive: !H && !ey,
                              idle: l,
                          },
                          "mute",
                      ),
                  ));
    let eO = [];
    null != eC &&
        g === ek.lp.USER &&
        eO.push((0, s.jsx)(eC, { className: eV.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eV.Z5,
                        children: (0, s.jsx)(R.K, {
                            size: "lg",
                            className: eV.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    { className: eV.PP, children: (0, s.jsx)(M.G, { size: "lg", className: eV.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, s.jsx)(eU, { participantType: g, platform: C, className: eV.gr }, "title-icon")),
        null == t ||
            "" === t ||
            l ||
            eO.push((0, s.jsx)("span", { className: a()(eV.Wk, ex), children: t }, "title-text")),
        _ &&
            eO.push(
                (0, s.jsx)(
                    p.m,
                    {
                        text: eM.intl.string(eM.t.ZEem6O),
                        children: (0, s.jsx)(V.m, {
                            className: eV.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eM.intl.string(eM.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eR = ep ?? eo,
        e_ =
            !er || d || l || eI || g !== ek.lp.USER || null == E || null == eR
                ? null
                : (0, s.jsx)(eT.X, { applicationId: eR, hideApplicationName: ef });
    return (0, s.jsxs)("div", {
        className: a()(eV.MU, { [eV.oE]: ef, [eV.Ol]: d }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eV.Ik, { [eV.EX]: n < 195 }),
                children:
                    em || m === eS.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eV.h5,
                                  children: (0, s.jsx)(N.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eV.ns, eV.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eV.h5,
                                          children: (0, s.jsx)(N.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(b.E, {
                                          variant: "text-sm/normal",
                                          className: eV.Wk,
                                          children: eM.intl.string(eM.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eg &&
                (0, s.jsxs)("div", {
                    className: a()(eV.Qp, { [eV.EX]: n < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eV.qV, { [eV.d5]: er }),
                            children: [
                                eO.length > 0 &&
                                    (0, s.jsx)(b.E, {
                                        className: eV.ac,
                                        color: "none",
                                        variant: ef ? "text-sm/normal" : "text-md/normal",
                                        children: eO,
                                    }),
                                e_,
                            ],
                        }),
                        ev.length > 0
                            ? (0, s.jsx)(r.animated.div, {
                                  className: a()(eV._v, { [eV.N7]: l, [eV.d5]: er }),
                                  style: { marginBottom: eN.value },
                                  children: ev,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eP.displayName = "CallTileOverlay";
let ez = X.$,
    ew = eD;
