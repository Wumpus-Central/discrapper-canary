t.d(l, { Ay: () => ew, Yl: () => ez }), t(321073);
var s = t(627968),
    i = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(517738),
    o = t(738678),
    d = t(12470),
    c = t(311907),
    u = t(827734),
    p = t(990078),
    m = t(31300),
    h = t(428689),
    A = t(289020),
    x = t(890856),
    f = t(646270),
    g = t(615675),
    I = t(666654),
    j = t(990836),
    y = t(83107),
    E = t(408278),
    T = t(609731),
    C = t(788120),
    N = t(943812),
    v = t(834730),
    b = t(717421),
    S = t(365199),
    k = t(358618),
    O = t(983851),
    R = t(428678),
    M = t(952270),
    _ = t(254138),
    D = t(827343),
    V = t(820284),
    U = t(672979),
    G = t(793574),
    L = t(429913),
    P = t(520698),
    z = t(164617),
    w = t(66004),
    W = t(958005),
    B = t(384059),
    Y = t(556525),
    H = t(609425),
    F = t(73392),
    X = t(401901),
    Q = t(40056),
    J = t(117029),
    q = t(612258),
    K = t(551826),
    Z = t(87001),
    $ = t(574172),
    ee = t(665691),
    el = t(724759),
    et = t(635885),
    es = t(209932),
    ei = t(253932),
    en = t(461782),
    ea = t(614518),
    er = t(706787),
    eo = t(961350),
    ed = t(111162),
    ec = t(430452),
    eu = t(290863),
    ep = t(485296),
    em = t(977997),
    eh = t(712687),
    eA = t(790381),
    ex = t(266080),
    ef = t(723702),
    eg = t(837921),
    eI = t(141035),
    ej = t(654820),
    ey = t(804980),
    eE = t(272812),
    eT = t(304047),
    eC = t(203355),
    eN = t(83982),
    ev = t(345812),
    eb = t(110234),
    eS = t(652215),
    ek = t(806931),
    eO = t(31408),
    eR = t(731854),
    eM = t(985018),
    e_ = t(24908);
let eD = [ek.lp.ACTIVITY],
    eV = i.memo((e) => {
        var l, t, n;
        let r,
            o,
            d,
            {
                participant: u,
                popoutType: p,
                onDoubleClick: f,
                onContextMenu: g,
                onClick: I,
                onMouseDown: j,
                onKeyDown: y,
                className: E,
                style: T,
                containerStyle: C,
                channel: N,
                width: v,
                onVideoResize: b,
                inCall: S = !1,
                selected: k = !1,
                noBorder: O = !1,
                noVideoRender: R = !1,
                focused: M = !1,
                blocked: _ = !1,
                ignored: U = !1,
                fit: G = X.$.CONTAIN,
                paused: z = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: B = !1,
                controlsBottom: H,
            } = e,
            F = i.useContext(en.vG) || B,
            [J, Z] = i.useState(!1),
            $ = ei.Q_.useSetting(),
            el = (0, c.bG)([ed.default], () => ed.default.isStreamInfoOverlayEnabled),
            [et, eu] = i.useState(!1),
            eh = (0, c.bG)([eo.default], () => eo.default.getId()),
            eA = u.type === ek.lp.ACTIVITY ? null : u.user,
            ex = eA?.id ?? null,
            [ef] = (0, L.A)(u.type === ek.lp.ACTIVITY ? [u.applicationId] : []),
            eg = (0, c.bG)([ec.Ay], () => null != ex && ec.Ay.isLocalVideoDisabled(ex, (0, P.A)(u.type)), [ex, u.type]),
            eT = (0, c.bG)(
                [ec.Ay],
                () => (null != ex ? ec.Ay.getVideoToggleState(ex, (0, P.A)(u.type)) : eS.bb8.NONE),
                [ex, u.type],
            ),
            ev = eT === eS.bb8.AUTO_PROBING,
            { speaking: eV, ringing: eU, hasVideo: eG } = (0, eb.A)(u, eh),
            eL = (0, c.bG)([es.A], () => null !== ex && es.A.isUserPlayingSounds(ex), [ex]),
            ez =
                ((l = eh),
                (t = u),
                (n = N.getGuildId()),
                (r = t.type !== ek.lp.ACTIVITY ? t.user.id : t.applicationId),
                (o = (0, c.cf)([em.A], () => {
                    let e = em.A.getVoiceState(n, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, c.cf)([ec.Ay], () => {
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
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: d.muted,
                    muted: (t.type === ek.lp.USER && t.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (t.type === ek.lp.USER && t.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ew = u.type === ek.lp.STREAM && ex === eh,
            eW = (0, c.bG)([ea.A], () => (u.type === ek.lp.USER && null != ex ? ea.A.getEffectForUserId(ex) : null)),
            eB = (0, c.bG)([em.A], () => em.A.getVoicePlatformForChannel(N.id, ex ?? eS.dJq)),
            eY = (0, ee.UF)({ userId: ex, channelId: N.id }),
            eH = (0, ee.DY)({ streamKey: u.type === ek.lp.STREAM ? u.id : null, channelId: N.id }),
            eF = i.useMemo(
                () => (u.type === ek.lp.STREAM ? (eH ?? !1) : u.type === ek.lp.USER && (eY ?? !1)),
                [eH, eY, u.type],
            );
        i.useEffect(() => {
            Z(M);
        }, [M]);
        let eX = i.useCallback(() => {
                null != ex && D.A.toggleLocalMute(ex, eR.x.STREAM);
            }, [ex]),
            eQ = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eJ = i.useCallback(
                (e) => {
                    f?.(u, e);
                },
                [f, u],
            ),
            eq = i.useCallback(
                (e, l, t) => {
                    g?.(u, e, l, t);
                },
                [g, u],
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
                    width: v,
                    fit: G,
                    onVideoResize: b,
                    paused: z,
                })),
                    (eZ = (0, s.jsx)(eC.D, {
                        participant: u,
                        selected: k,
                        width: v,
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
                    onVideoResize: b,
                    paused: z,
                    selected: k,
                    width: v,
                    blocked: _,
                    ignored: U,
                    noVideoRender: R || ev,
                    pulseSpeakingIndicator: W,
                })),
                    (eZ = (0, s.jsx)(eN.s, { participant: u, channelId: N.id })),
                    (e$ = eM.intl.formatToPlainString(eM.t["iC/x/Q"], { username: u.user.username }));
                break;
            case ek.lp.ACTIVITY:
                (eK = (0, s.jsx)(ey.Ay, { interactible: M, participant: u, selected: k, channel: N, width: v })),
                    (e$ = eM.intl.formatToPlainString(eM.t.YCvOsO, { activityName: ef?.name }));
                break;
            case ek.lp.HIDDEN_STREAM:
                eK = (0, s.jsx)(eC.A, {
                    participant: u,
                    selected: k,
                    width: v,
                    fit: G,
                    onVideoResize: b,
                    paused: z,
                    popoutType: p,
                });
        }
        let e0 = i.useRef(null),
            e1 = (0, c.bG)([ep.A], () => (u.type === ek.lp.USER ? ep.A.getVoiceVolume(u.id) : -1 / 0)),
            e8 = (0, Y.v)({ isSpeaking: eV, voiceDb: e1, spreadDirection: Y.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e7 = (0, ek.Ay)(u) ? m.k : eG ? h.n : A.E,
            e9 = u.type === ek.lp.STREAM && M;
        return (0, s.jsx)(V.A, {
            section: eS.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)(Q.Ay, {
                streamKey: u.id,
                enableZoom: e9,
                children: (0, s.jsx)("div", {
                    className: a()(e_.iE, { [e_.DF]: eU }, E),
                    style: C,
                    onMouseEnter: () => {
                        eu(!0);
                    },
                    onMouseLeave: () => {
                        eu(!1);
                    },
                    children: (0, s.jsxs)(K.A, {
                        shakeLocation: eO.uD.VOICE_USER,
                        isShaking: eV,
                        className: e_.Vs,
                        children: [
                            (0, s.jsx)(eE.A, {
                                ref: e0,
                                className: a()(e_.Vs, { [e_.E7]: O, [e_.k_]: null == I, [e_.N7]: F }),
                                noBorder: O,
                                style: T,
                                participantUserId: ex,
                                children: (0, s.jsxs)(x.s, {
                                    "aria-label": e$,
                                    className: e_.lG,
                                    onDoubleClick: eJ,
                                    onContextMenu: (e) => eq(e, u.type === ek.lp.STREAM),
                                    onClick: eQ,
                                    onMouseDown: j,
                                    onKeyDown: y,
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
                                                  className: e_.nl,
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
                                        O ? null : (0, s.jsx)("div", { className: e_.hD, children: eZ }),
                                        k
                                            ? (0, s.jsx)("div", {
                                                  className: e_._Q,
                                                  children: (0, s.jsx)(e7, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: e_.Dt,
                                                  }),
                                              })
                                            : null,
                                        eD.includes(u.type)
                                            ? null
                                            : (0, s.jsx)(eP, {
                                                  focused: M,
                                                  width: v,
                                                  inCall: S,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eG ?? !1,
                                                  ...ez,
                                                  idle: F,
                                                  platform: eB,
                                                  title: (0, eI.A)(N, u),
                                                  blocked: _,
                                                  ignored: U,
                                                  localVideoDisabled: eg,
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
                                                  controlsBottom: H,
                                                  streamId: u.type === ek.lp.STREAM ? u.streamId : null,
                                              }),
                                        S && !O
                                            ? (0, s.jsx)("div", {
                                                  className: a()(e_.PQ, { [e_.pU]: !M && (eL || null != eW) }),
                                                  style: M || eL ? void 0 : e8,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            $ && el && et && (0, s.jsx)(ej.A, { currentUserId: eh, participant: u }),
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
            return (0, s.jsx)(f.u, { size: "xs", color: "currentColor", className: i });
        case ek.J7.XBOX:
            return (0, s.jsx)(ex.A, { className: i });
        case ek.J7.PLAYSTATION:
            return (0, s.jsx)(eA.A, { className: i });
        case ek.J7.QUEST:
            return (0, s.jsx)(o.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eG(e) {
    let { icon: l, tooltipText: t, hideWhenInactive: i, idle: n, onClick: r } = e;
    return (0, s.jsx)(p.m, {
        text: t,
        children: (0, s.jsx)("div", {
            className: a()(e_.V7, { [e_.kl]: i, [e_.N7]: n }),
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
        o = (0, c.bG)([Z.A], () => Z.A.getIsAlwaysOnTop(r)),
        d = i.useCallback(() => {
            (0, B.X)(G.A.CALL_TILE_POPOUT, B.O.STAY_ON_TOP, !o), $.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return ef.isPlatformEmbedded && eg.Ay.supportsFeature(eS.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eG, {
              onClick: d,
              tooltipText: o ? eM.intl.string(eM.t.YdyDM9) : eM.intl.string(eM.t.ZVGHwP),
              icon: o ? T.h : C.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eV.displayName = "CallTile";
let eP = i.memo((e) => {
    let {
            idle: l,
            title: t,
            width: n,
            focused: o,
            videoToggleState: m,
            blocked: h,
            ignored: A,
            participantId: x,
            participantType: f,
            participantUserId: E,
            channel: T,
            platform: C,
            secureFramesVerified: D,
            onContextMenu: V,
            muted: L,
            deafened: w,
            localMuted: Y,
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
        ea = (0, c.bG)([eo.default], () => eo.default.getId()),
        er = (0, el.B)({ location: "call_tile" }),
        ed = (0, c.bG)([eu.A], () =>
            f === ek.lp.USER && null != E ? eu.A.getActivities(E).find(U.A)?.application_id : null,
        ),
        ep = (0, et.V)(er ? E : null),
        em = (0, c.bG)([ec.Ay], () => null != E && ec.Ay.isLocalVideoAutoDisabled(E, (0, P.A)(f)), [E, f]),
        eA = (0, H.A)({ userId: E, guildId: T.getGuildId() }),
        ex = (0, F.a)({ displayNameStyles: eA }),
        ef = (0, ev.Yb)(n),
        eg = (0, ev.VE)(n),
        eI = (0, ev.DO)(n),
        [ej, ey] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            l = () => {
                e !== eh.A.isOpen() && ((e = eh.A.isOpen()) || ey(!1));
            };
        return eh.A.addChangeListener(l), () => eh.A.removeChangeListener(l);
    }, []);
    let eE = !K && f === ek.lp.STREAM && q && (!eg || Y),
        eC = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: s, deafened: i, muted: n } = e;
            return s ? g.T : t ? I.O : i ? j.c : l ? I.O : n ? y.z : null;
        })({ localMuted: Y, serverMuted: X, serverDeafened: Q, deafened: w, muted: L }),
        eN = (0, b.z)({ value: null != ei ? ei : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eb = [];
    o && f === ek.lp.STREAM && eb.push((0, s.jsx)(J.A, { streamId: en, paused: es }, "zoom-controls")),
        o
            ? ee === z.N.CALL_TILE &&
              (eb.push(
                  (0, s.jsx)(eL, { channelId: T.id, participantId: x, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eb.push(
                  (0, s.jsx)(
                      eG,
                      {
                          onClick: () => {
                              (0, B.X)(G.A.CALL_TILE_POPOUT, B.O.POPOUT_RETURN), $.close((0, W.A)(T.id, x));
                          },
                          tooltipText: eM.intl.string(eM.t["7Dwcnj"]),
                          icon: d._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (er &&
                  !eI &&
                  f === ek.lp.USER &&
                  null != E &&
                  E !== ea &&
                  null != ep &&
                  eb.push(
                      (0, s.jsx)(
                          eT.M,
                          { userId: E, channel: T, applicationId: ep, hideWhenInactive: !ej, idle: l },
                          "gift",
                      ),
                  ),
              eb.push(
                  (0, s.jsx)(
                      eG,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), ey(!0), V(e, !0, ek.GK.THREE_DOT);
                          },
                          tooltipText: eM.intl.string(eM.t["+1H47t"]),
                          icon: S.j,
                          hideWhenInactive: !ej,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eE &&
                  eb.push(
                      (0, s.jsx)(
                          eG,
                          {
                              onClick: Z,
                              tooltipText: Y ? eM.intl.string(eM.t.YqAjXy) : eM.intl.string(eM.t.w4m945),
                              icon: Y ? k._ : O.H,
                              hideWhenInactive: !Y && !ej,
                              idle: l,
                          },
                          "mute",
                      ),
                  ));
    let eO = [];
    null != eC &&
        f === ek.lp.USER &&
        eO.push((0, s.jsx)(eC, { className: e_.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: e_.Z5,
                        children: (0, s.jsx)(R.K, {
                            size: "lg",
                            className: e_.Q6,
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
                    { className: e_.PP, children: (0, s.jsx)(M.G, { size: "lg", className: e_.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, s.jsx)(eU, { participantType: f, platform: C, className: e_.gr }, "title-icon")),
        null == t ||
            "" === t ||
            l ||
            eO.push((0, s.jsx)("span", { className: a()(e_.Wk, ex), children: t }, "title-text")),
        D &&
            eO.push(
                (0, s.jsx)(
                    p.m,
                    {
                        text: eM.intl.string(eM.t.ZEem6O),
                        children: (0, s.jsx)(_.m, {
                            className: e_.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eM.intl.string(eM.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eR = ep ?? ed,
        eD =
            !er || o || l || eI || f !== ek.lp.USER || null == E || null == eR
                ? null
                : (0, s.jsx)(eT.X, { applicationId: eR, hideApplicationName: eg });
    return (0, s.jsxs)("div", {
        className: a()(e_.MU, { [e_.oE]: eg, [e_.Ol]: o }),
        children: [
            (0, s.jsx)("div", {
                className: a()(e_.Ik, { [e_.EX]: n < 195 }),
                children:
                    em || m === eS.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: e_.h5,
                                  children: (0, s.jsx)(N.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(e_.ns, e_.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: e_.h5,
                                          children: (0, s.jsx)(N.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(v.E, {
                                          variant: "text-sm/normal",
                                          className: e_.Wk,
                                          children: eM.intl.string(eM.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ef &&
                (0, s.jsxs)("div", {
                    className: a()(e_.Qp, { [e_.EX]: n < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(e_.qV, { [e_.d5]: er }),
                            children: [
                                eO.length > 0 &&
                                    (0, s.jsx)(v.E, {
                                        className: e_.ac,
                                        color: "none",
                                        variant: eg ? "text-sm/normal" : "text-md/normal",
                                        children: eO,
                                    }),
                                eD,
                            ],
                        }),
                        eb.length > 0
                            ? (0, s.jsx)(r.animated.div, {
                                  className: a()(e_._v, { [e_.N7]: l, [e_.d5]: er }),
                                  style: { marginBottom: eN.value },
                                  children: eb,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eP.displayName = "CallTileOverlay";
let ez = X.$,
    ew = eV;
