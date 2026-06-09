t.d(l, { Ay: () => ew, Yl: () => eL }), t(321073);
var s = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(922139),
    o = t(738678),
    c = t(12470),
    d = t(17928),
    u = t(661531),
    p = t(990078),
    m = t(31300),
    h = t(428689),
    A = t(289020),
    x = t(890856),
    g = t(646270),
    f = t(615675),
    y = t(666654),
    j = t(990836),
    I = t(83107),
    T = t(408278),
    E = t(609731),
    N = t(788120),
    v = t(943812),
    C = t(834730),
    b = t(717421),
    S = t(365199),
    O = t(358618),
    R = t(983851),
    k = t(428678),
    D = t(952270),
    V = t(254138),
    M = t(827343),
    _ = t(820284),
    P = t(672979),
    U = t(793574),
    G = t(429913),
    L = t(520698),
    w = t(164617),
    z = t(66004),
    W = t(958005),
    Y = t(384059),
    H = t(556525),
    B = t(609425),
    X = t(73392),
    F = t(51092),
    Q = t(40056),
    J = t(117029),
    K = t(612258),
    q = t(551826),
    Z = t(567249),
    $ = t(574172),
    ee = t(665691),
    el = t(635885),
    et = t(209932),
    es = t(885386),
    en = t(461782),
    ei = t(614518),
    ea = t(706787),
    er = t(495544),
    eo = t(111162),
    ec = t(555975),
    ed = t(290863),
    eu = t(485296),
    ep = t(977997),
    em = t(712687),
    eh = t(790381),
    eA = t(266080),
    ex = t(723702),
    eg = t(19575),
    ef = t(141035),
    ey = t(654820),
    ej = t(804980),
    eI = t(272812),
    eT = t(304047),
    eE = t(434087),
    eN = t(83982),
    ev = t(345812),
    eC = t(110234),
    eb = t(652215),
    eS = t(806931),
    eO = t(31408),
    eR = t(731854),
    ek = t(375708),
    eD = t(391308);
let eV = [eS.lp.ACTIVITY],
    eM = n.memo((e) => {
        var l, t, i;
        let r,
            o,
            c,
            {
                participant: u,
                popoutType: p,
                onDoubleClick: g,
                onContextMenu: f,
                onClick: y,
                onMouseDown: j,
                onKeyDown: I,
                className: T,
                style: E,
                containerStyle: N,
                channel: v,
                width: C,
                onVideoResize: b,
                inCall: S = !1,
                selected: O = !1,
                noBorder: R = !1,
                noVideoRender: k = !1,
                focused: D = !1,
                blocked: V = !1,
                ignored: P = !1,
                fit: U = F.$.CONTAIN,
                paused: w = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: Y = !1,
                controlsBottom: B,
            } = e,
            X = n.useContext(en.vG) || Y,
            [J, Z] = n.useState(!1),
            $ = es.Q_.useSetting(),
            el = (0, d.bG)([eo.default], () => eo.default.isStreamInfoOverlayEnabled),
            [ed, em] = n.useState(!1),
            eh = (0, d.bG)([er.default], () => er.default.getId()),
            eA = u.type === eS.lp.ACTIVITY ? null : u.user,
            ex = eA?.id ?? null,
            [eg] = (0, G.A)(u.type === eS.lp.ACTIVITY ? [u.applicationId] : []),
            eT = (0, d.bG)([ec.Ay], () => null != ex && ec.Ay.isLocalVideoDisabled(ex, (0, L.A)(u.type)), [ex, u.type]),
            ev = (0, d.bG)(
                [ec.Ay],
                () => (null != ex ? ec.Ay.getVideoToggleState(ex, (0, L.A)(u.type)) : eb.bb8.NONE),
                [ex, u.type],
            ),
            eM = ev === eb.bb8.AUTO_PROBING,
            { speaking: e_, ringing: eP, hasVideo: eU } = (0, eC.A)(u, eh),
            eL = (0, d.bG)([et.A], () => null !== ex && et.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((l = eh),
                (t = u),
                (i = v.getGuildId()),
                (r = t.type !== eS.lp.ACTIVITY ? t.user.id : t.applicationId),
                (o = (0, d.cf)([ep.A], () => {
                    let e = ep.A.getVoiceState(i, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([ec.Ay], () => {
                    let e = (0, L.A)(t.type);
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
                    localMuted: c.muted,
                    muted: (t.type === eS.lp.USER && t.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (t.type === eS.lp.USER && t.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ez = u.type === eS.lp.STREAM && ex === eh,
            eW = (0, d.bG)([ei.A], () => (u.type === eS.lp.USER && null != ex ? ei.A.getEffectForUserId(ex) : null)),
            eY = (0, d.bG)([ep.A], () => ep.A.getVoicePlatformForChannel(v.id, ex ?? eb.dJq)),
            eH = (0, ee.UF)({ userId: ex, channelId: v.id }),
            eB = (0, ee.DY)({ streamKey: u.type === eS.lp.STREAM ? u.id : null, channelId: v.id }),
            eX = n.useMemo(
                () => (u.type === eS.lp.STREAM ? (eB ?? !1) : u.type === eS.lp.USER && (eH ?? !1)),
                [eB, eH, u.type],
            );
        n.useEffect(() => {
            Z(D);
        }, [D]);
        let eF = n.useCallback(() => {
                null != ex && M.A.toggleLocalMute(ex, eR.x.STREAM);
            }, [ex]),
            eQ = n.useCallback(
                (e) => {
                    y?.(u, e);
                },
                [y, u],
            ),
            eJ = n.useCallback(
                (e) => {
                    g?.(u, e);
                },
                [g, u],
            ),
            eK = n.useCallback(
                (e, l, t) => {
                    f?.(u, e, l, t);
                },
                [f, u],
            ),
            eq = null,
            eZ = null,
            e$ = "";
        switch (u.type) {
            case eS.lp.STREAM:
                (eq = (0, s.jsx)(eE.A, {
                    participant: u,
                    selected: O,
                    popoutType: p,
                    width: C,
                    fit: U,
                    onVideoResize: b,
                    paused: w,
                })),
                    (eZ = (0, s.jsx)(eE.D, {
                        participant: u,
                        selected: O,
                        width: C,
                        focused: D,
                        idle: X,
                        premiumIndicator: !1,
                    })),
                    (e$ = ek.intl.formatToPlainString(ek.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case eS.lp.USER:
                (eq = (0, s.jsx)(eN.A, {
                    channel: v,
                    inCall: S,
                    participant: u,
                    popoutType: p,
                    fit: U,
                    onVideoResize: b,
                    paused: w,
                    selected: O,
                    width: C,
                    blocked: V,
                    ignored: P,
                    noVideoRender: k || eM,
                    pulseSpeakingIndicator: W,
                })),
                    (eZ = (0, s.jsx)(eN.s, { participant: u, channelId: v.id })),
                    (e$ = ek.intl.formatToPlainString(ek.t["iC/x/Q"], { username: u.user.username }));
                break;
            case eS.lp.ACTIVITY:
                (eq = (0, s.jsx)(ej.Ay, { interactible: D, participant: u, selected: O, channel: v, width: C })),
                    (e$ = ek.intl.formatToPlainString(ek.t.YCvOsO, { activityName: eg?.name }));
                break;
            case eS.lp.HIDDEN_STREAM:
                eq = (0, s.jsx)(eE.A, {
                    participant: u,
                    selected: O,
                    width: C,
                    fit: U,
                    onVideoResize: b,
                    paused: w,
                    popoutType: p,
                });
        }
        let e0 = n.useRef(null),
            e1 = (0, d.bG)([eu.A], () => (u.type === eS.lp.USER ? eu.A.getVoiceVolume(u.id) : -1 / 0)),
            e8 = (0, H.v)({ isSpeaking: e_, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e7 = (0, eS.Ay)(u) ? m.k : eU ? h.n : A.E,
            e9 = u.type === eS.lp.STREAM && D;
        return (0, s.jsx)(_.A, {
            section: eb.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)(Q.Ay, {
                streamKey: u.id,
                enableZoom: e9,
                children: (0, s.jsx)("div", {
                    className: a()(eD.iE, { [eD.DF]: eP }, T),
                    style: N,
                    onMouseEnter: () => {
                        em(!0);
                    },
                    onMouseLeave: () => {
                        em(!1);
                    },
                    children: (0, s.jsxs)(q.A, {
                        shakeLocation: eO.uD.VOICE_USER,
                        isShaking: e_,
                        className: eD.Vs,
                        children: [
                            (0, s.jsx)(eI.A, {
                                ref: e0,
                                className: a()(eD.Vs, { [eD.E7]: R, [eD.k_]: null == y, [eD.N7]: X }),
                                noBorder: R,
                                style: E,
                                participantUserId: ex,
                                children: (0, s.jsxs)(x.s, {
                                    "aria-label": e$,
                                    className: eD.lG,
                                    onDoubleClick: eJ,
                                    onContextMenu: (e) => eK(e, u.type === eS.lp.STREAM),
                                    onClick: eQ,
                                    onMouseDown: j,
                                    onKeyDown: I,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != ex
                                            ? (0, s.jsx)(ea.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, ei.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        u.type === eS.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eD.nl,
                                                  children: (0, s.jsx)(z.A, {
                                                      userId: ex,
                                                      channelId: v.id,
                                                      guildId: v.getGuildId(),
                                                      containerDimensions: {
                                                          width: e0?.current?.clientWidth ?? 0,
                                                          height: e0?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eq,
                                        R ? null : (0, s.jsx)("div", { className: eD.hD, children: eZ }),
                                        O
                                            ? (0, s.jsx)("div", {
                                                  className: eD._Q,
                                                  children: (0, s.jsx)(e7, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eD.Dt,
                                                  }),
                                              })
                                            : null,
                                        eV.includes(u.type)
                                            ? null
                                            : (0, s.jsx)(eG, {
                                                  focused: D,
                                                  width: C,
                                                  inCall: S,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...ew,
                                                  idle: X,
                                                  platform: eY,
                                                  title: (0, ef.A)(v, u),
                                                  blocked: V,
                                                  ignored: P,
                                                  localVideoDisabled: eT,
                                                  videoToggleState: ev,
                                                  hideAudioIcon: ez,
                                                  onContextMenu: eK,
                                                  onToggleMute: eF,
                                                  participantUserId: ex,
                                                  channel: v,
                                                  secureFramesVerified: eX,
                                                  isHovered: ed,
                                                  popoutType: p,
                                                  paused: w,
                                                  controlsBottom: B,
                                                  streamId: u.type === eS.lp.STREAM ? u.streamId : null,
                                              }),
                                        S && !R
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eD.PQ, { [eD.pU]: !D && (eL || null != eW) }),
                                                  style: D || eL ? void 0 : e8,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            $ && el && ed && (0, s.jsx)(ey.A, { currentUserId: eh, participant: u }),
                            (0, s.jsx)(K.A, { isFiring: J, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function e_(e) {
    let { participantType: l, platform: t, className: n } = e;
    if (l === eS.lp.STREAM)
        return t === eS.J7.XBOX
            ? (0, s.jsx)(eA.A, { className: n })
            : (0, s.jsx)(m.k, { size: "md", color: "currentColor", className: n });
    switch (t) {
        case eS.J7.MOBILE:
            return (0, s.jsx)(g.u, { size: "xs", color: "currentColor", className: n });
        case eS.J7.XBOX:
            return (0, s.jsx)(eA.A, { className: n });
        case eS.J7.PLAYSTATION:
            return (0, s.jsx)(eh.A, { className: n });
        case eS.J7.QUEST:
            return (0, s.jsx)(o.G, { size: "xs", color: "currentColor", className: n });
        default:
            return null;
    }
}
function eP(e) {
    let { icon: l, tooltipText: t, hideWhenInactive: n, idle: i, onClick: r } = e;
    return (0, s.jsx)(p.m, {
        text: t,
        children: (0, s.jsx)("div", {
            className: a()(eD.V7, { [eD.kl]: n, [eD.N7]: i }),
            children: (0, s.jsx)(T.K, {
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
function eU(e) {
    let { channelId: l, participantId: t, hideWhenInactive: i, idle: a } = e,
        r = n.useMemo(() => (0, W.A)(l, t), [l, t]),
        o = (0, d.bG)([Z.A], () => Z.A.getIsAlwaysOnTop(r)),
        c = n.useCallback(() => {
            (0, Y.X)(U.A.CALL_TILE_POPOUT, Y.O.STAY_ON_TOP, !o), $.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return ex.isPlatformEmbedded && eg.Ay.supportsFeature(eb.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eP, {
              onClick: c,
              tooltipText: o ? ek.intl.string(ek.t.YdyDM9) : ek.intl.string(ek.t.ZVGHwP),
              icon: o ? E.h : N.q,
              hideWhenInactive: i,
              idle: a,
          })
        : null;
}
eM.displayName = "CallTile";
let eG = n.memo((e) => {
    let {
            idle: l,
            title: t,
            width: i,
            focused: o,
            videoToggleState: m,
            blocked: h,
            ignored: A,
            participantId: x,
            participantType: g,
            participantUserId: T,
            channel: E,
            platform: N,
            secureFramesVerified: M,
            onContextMenu: _,
            muted: G,
            deafened: z,
            localMuted: H,
            serverMuted: F,
            serverDeafened: Q,
            hasVideo: K,
            hideAudioIcon: q,
            onToggleMute: Z,
            popoutType: ee,
            paused: et,
            controlsBottom: es,
            streamId: en,
        } = e,
        ei = (0, d.bG)([er.default], () => er.default.getId()),
        ea = (0, d.bG)([ed.A], () =>
            g === eS.lp.USER && null != T ? ed.A.getActivities(T).find(P.A)?.application_id : null,
        ),
        eo = (0, el.V)(T),
        eu = (0, d.bG)([ec.Ay], () => null != T && ec.Ay.isLocalVideoAutoDisabled(T, (0, L.A)(g)), [T, g]),
        ep = (0, B.A)({ userId: T, guildId: E.getGuildId() }),
        eh = (0, X.a)({ displayNameStyles: ep }),
        eA = (0, ev.Yb)(i),
        ex = (0, ev.VE)(i),
        eg = (0, ev.DO)(i),
        [ef, ey] = n.useState(!1);
    n.useEffect(() => {
        let e = !1,
            l = () => {
                e !== em.A.isOpen() && ((e = em.A.isOpen()) || ey(!1));
            };
        return em.A.addChangeListener(l), () => em.A.removeChangeListener(l);
    }, []);
    let ej = !q && g === eS.lp.STREAM && K && (!ex || H),
        eI = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: s, deafened: n, muted: i } = e;
            return s ? f.T : t ? y.O : n ? j.c : l ? y.O : i ? I.z : null;
        })({ localMuted: H, serverMuted: F, serverDeafened: Q, deafened: z, muted: G }),
        eE = (0, b.z)({ value: null != es ? es : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eN = [];
    o && g === eS.lp.STREAM && eN.push((0, s.jsx)(J.A, { streamId: en, paused: et }, "zoom-controls")),
        o
            ? ee === w.N.CALL_TILE &&
              (eN.push(
                  (0, s.jsx)(eU, { channelId: E.id, participantId: x, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eN.push(
                  (0, s.jsx)(
                      eP,
                      {
                          onClick: () => {
                              (0, Y.X)(U.A.CALL_TILE_POPOUT, Y.O.POPOUT_RETURN), $.close((0, W.A)(E.id, x));
                          },
                          tooltipText: ek.intl.string(ek.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eg ||
                  g !== eS.lp.USER ||
                  null == T ||
                  T === ei ||
                  null == eo ||
                  eN.push(
                      (0, s.jsx)(
                          eT.M,
                          { userId: T, channel: E, applicationId: eo, hideWhenInactive: !ef, idle: l },
                          "gift",
                      ),
                  ),
              eN.push(
                  (0, s.jsx)(
                      eP,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), ey(!0), _(e, !0, eS.GK.THREE_DOT);
                          },
                          tooltipText: ek.intl.string(ek.t["+1H47t"]),
                          icon: S.j,
                          hideWhenInactive: !ef,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ej &&
                  eN.push(
                      (0, s.jsx)(
                          eP,
                          {
                              onClick: Z,
                              tooltipText: H ? ek.intl.string(ek.t.YqAjXy) : ek.intl.string(ek.t.w4m945),
                              icon: H ? O._ : R.H,
                              hideWhenInactive: !H && !ef,
                              idle: l,
                          },
                          "mute",
                      ),
                  ));
    let eC = [];
    null != eI &&
        g === eS.lp.USER &&
        eC.push((0, s.jsx)(eI, { className: eD.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eC.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eD.Z5,
                        children: (0, s.jsx)(k.K, {
                            size: "lg",
                            className: eD.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eC.push(
                (0, s.jsx)(
                    "div",
                    { className: eD.PP, children: (0, s.jsx)(D.G, { size: "lg", className: eD.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eC.push((0, s.jsx)(e_, { participantType: g, platform: N, className: eD.gr }, "title-icon")),
        null == t ||
            "" === t ||
            l ||
            eC.push((0, s.jsx)("span", { className: a()(eD.Wk, eh), children: t }, "title-text")),
        M &&
            eC.push(
                (0, s.jsx)(
                    p.m,
                    {
                        text: ek.intl.string(ek.t.ZEem6O),
                        children: (0, s.jsx)(V.m, {
                            className: eD.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": ek.intl.string(ek.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eO = eo ?? ea,
        eR =
            o || l || eg || g !== eS.lp.USER || null == T || null == eO
                ? null
                : (0, s.jsx)(eT.X, { applicationId: eO, hideApplicationName: ex });
    return (0, s.jsxs)("div", {
        className: a()(eD.MU, { [eD.oE]: ex, [eD.Ol]: o }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eD.Ik, { [eD.EX]: i < 195 }),
                children:
                    eu || m === eb.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eD.h5,
                                  children: (0, s.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eD.ns, eD.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eD.h5,
                                          children: (0, s.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: eD.Wk,
                                          children: ek.intl.string(ek.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eA &&
                (0, s.jsxs)("div", {
                    className: a()(eD.Qp, { [eD.EX]: i < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eD.qV,
                            children: [
                                eC.length > 0 &&
                                    (0, s.jsx)(C.E, {
                                        className: eD.ac,
                                        color: "none",
                                        variant: ex ? "text-sm/normal" : "text-md/normal",
                                        children: eC,
                                    }),
                                eR,
                            ],
                        }),
                        eN.length > 0
                            ? (0, s.jsx)(r.animated.div, {
                                  className: a()(eD._v, { [eD.N7]: l }),
                                  style: { marginBottom: eE.value },
                                  children: eN,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eG.displayName = "CallTileOverlay";
let eL = F.$,
    ew = eM;
