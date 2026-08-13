s.d(l, { Ay: () => ew, Yl: () => eL }), s(321073);
var t = s(477900),
    i = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(159265),
    c = s(738678),
    d = s(12470),
    r = s(17928),
    u = s(661531),
    p = s(31300),
    m = s(428689),
    A = s(289020),
    h = s(890856),
    x = s(646270),
    y = s(615675),
    I = s(666654),
    T = s(990836),
    j = s(83107),
    f = s(866665),
    g = s(408278),
    E = s(609731),
    N = s(788120),
    v = s(943812),
    C = s(834730),
    S = s(717421),
    b = s(365199),
    O = s(358618),
    R = s(983851),
    V = s(428678),
    k = s(952270),
    M = s(254138),
    _ = s(827343),
    D = s(820284),
    U = s(672979),
    P = s(793574),
    G = s(429913),
    L = s(520698),
    w = s(164617),
    z = s(66004),
    Y = s(958005),
    W = s(384059),
    X = s(556525),
    H = s(609425),
    B = s(73392),
    Q = s(51092),
    J = s(40056),
    F = s(117029),
    K = s(612258),
    q = s(551826),
    Z = s(567249),
    $ = s(574172),
    ee = s(665691),
    el = s(635885),
    es = s(209932),
    et = s(885386),
    ei = s(461782),
    en = s(614518),
    ea = s(706787),
    eo = s(280450),
    ec = s(111162),
    ed = s(626822),
    er = s(290863),
    eu = s(485296),
    ep = s(977997),
    em = s(712687),
    eA = s(790381),
    eh = s(266080),
    ex = s(723702),
    ey = s(19575),
    eI = s(141035),
    eT = s(654820),
    ej = s(804980),
    ef = s(272812),
    eg = s(304047),
    eE = s(816578),
    eN = s(83982),
    ev = s(345812),
    eC = s(110234),
    eS = s(652215),
    eb = s(806931),
    eO = s(31408),
    eR = s(731854),
    eV = s(375708),
    ek = s(837284);
let eM = [eb.lp.ACTIVITY],
    e_ = i.memo((e) => {
        var l, s, n;
        let o,
            c,
            d,
            {
                participant: u,
                popoutType: x,
                onDoubleClick: y,
                onContextMenu: I,
                onClick: T,
                onMouseDown: j,
                onKeyDown: f,
                className: g,
                style: E,
                containerStyle: N,
                channel: v,
                width: C,
                onVideoResize: S,
                inCall: b = !1,
                selected: O = !1,
                noBorder: R = !1,
                noVideoRender: V = !1,
                focused: k = !1,
                blocked: M = !1,
                ignored: U = !1,
                fit: P = Q.$.CONTAIN,
                paused: w = !1,
                pulseSpeakingIndicator: Y = !1,
                forceIdle: W = !1,
                controlsBottom: H,
            } = e,
            B = i.useContext(ei.vG) || W,
            [F, Z] = i.useState(!1),
            $ = et.Q_.useSetting(),
            el = (0, r.bG)([ec.default], () => ec.default.isStreamInfoOverlayEnabled),
            [er, em] = i.useState(!1),
            eA = (0, r.bG)([eo.default], () => eo.default.getId()),
            eh = u.type === eb.lp.ACTIVITY ? null : u.user,
            ex = eh?.id ?? null,
            [ey] = (0, G.A)(u.type === eb.lp.ACTIVITY ? [u.applicationId] : []),
            eg = (0, r.bG)([ed.Ay], () => null != ex && ed.Ay.isLocalVideoDisabled(ex, (0, L.A)(u.type)), [ex, u.type]),
            ev = (0, r.bG)(
                [ed.Ay],
                () => (null != ex ? ed.Ay.getVideoToggleState(ex, (0, L.A)(u.type)) : eS.bb8.NONE),
                [ex, u.type],
            ),
            e_ = ev === eS.bb8.AUTO_PROBING,
            { speaking: eD, ringing: eU, hasVideo: eP } = (0, eC.A)(u, eA),
            eL = (0, r.bG)([es.A], () => null !== ex && es.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((l = eA),
                (s = u),
                (n = v.getGuildId()),
                (o = s.type !== eb.lp.ACTIVITY ? s.user.id : s.applicationId),
                (c = (0, r.cf)([ep.A], () => {
                    let e = ep.A.getVoiceState(n, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)([ed.Ay], () => {
                    let e = (0, L.A)(s.type);
                    return l === o
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: ed.Ay.isLocalMute(o, e),
                              localVideoDisabled: ed.Ay.isLocalVideoDisabled(o, e),
                              localVideoAutoDisabled: ed.Ay.isLocalVideoAutoDisabled(o, e),
                          };
                }, [l, s.type, o])),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: (s.type === eb.lp.USER && s.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (s.type === eb.lp.USER && s.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ez = u.type === eb.lp.STREAM && ex === eA,
            eY = (0, r.bG)([en.A], () => (u.type === eb.lp.USER && null != ex ? en.A.getEffectForUserId(ex) : null)),
            eW = (0, r.bG)([ep.A], () => ep.A.getVoicePlatformForChannel(v.id, ex ?? eS.dJq)),
            eX = (0, ee.UF)({ userId: ex, channelId: v.id }),
            eH = (0, ee.DY)({ streamKey: u.type === eb.lp.STREAM ? u.id : null, channelId: v.id }),
            eB = i.useMemo(
                () => (u.type === eb.lp.STREAM ? (eH ?? !1) : u.type === eb.lp.USER && (eX ?? !1)),
                [eH, eX, u.type],
            );
        i.useEffect(() => {
            Z(k);
        }, [k]);
        let eQ = i.useCallback(() => {
                null != ex && _.A.toggleLocalMute(ex, eR.x.STREAM);
            }, [ex]),
            eJ = i.useCallback(
                (e) => {
                    T?.(u, e);
                },
                [T, u],
            ),
            eF = i.useCallback(
                (e) => {
                    y?.(u, e);
                },
                [y, u],
            ),
            eK = i.useCallback(
                (e, l, s) => {
                    I?.(u, e, l, s);
                },
                [I, u],
            ),
            eq = null,
            eZ = null,
            e$ = "";
        switch (u.type) {
            case eb.lp.STREAM:
                (eq = (0, t.jsx)(eE.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: w,
                })),
                    (eZ = (0, t.jsx)(eE.D, {
                        participant: u,
                        selected: O,
                        width: C,
                        focused: k,
                        idle: B,
                        premiumIndicator: !1,
                    })),
                    (e$ = eV.intl.formatToPlainString(eV.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case eb.lp.USER:
                (eq = (0, t.jsx)(eN.A, {
                    channel: v,
                    inCall: b,
                    participant: u,
                    popoutType: x,
                    fit: P,
                    onVideoResize: S,
                    paused: w,
                    selected: O,
                    width: C,
                    blocked: M,
                    ignored: U,
                    noVideoRender: V || e_,
                    pulseSpeakingIndicator: Y,
                })),
                    (eZ = (0, t.jsx)(eN.s, { participant: u, channelId: v.id })),
                    (e$ = eV.intl.formatToPlainString(eV.t["iC/x/Q"], { username: u.user.username }));
                break;
            case eb.lp.ACTIVITY:
                (eq = (0, t.jsx)(ej.Ay, { interactible: k, participant: u, selected: O, channel: v, width: C })),
                    (e$ = eV.intl.formatToPlainString(eV.t.YCvOsO, { activityName: ey?.name }));
                break;
            case eb.lp.HIDDEN_STREAM:
                eq = (0, t.jsx)(eE.A, {
                    participant: u,
                    selected: O,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: w,
                    popoutType: x,
                });
        }
        let e0 = i.useRef(null),
            e1 = (0, r.bG)([eu.A], () => (u.type === eb.lp.USER ? eu.A.getVoiceVolume(u.id) : -1 / 0)),
            e8 = (0, X.v)({ isSpeaking: eD, voiceDb: e1, spreadDirection: X.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e7 = (0, eb.Ay)(u) ? p.k : eP ? m.n : A.E,
            e2 = u.type === eb.lp.STREAM && k;
        return (0, t.jsx)(D.A, {
            section: eS.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(J.Ay, {
                streamKey: u.id,
                enableZoom: e2,
                children: (0, t.jsx)("div", {
                    className: a()(ek.iE, { [ek.DF]: eU }, g),
                    style: N,
                    onMouseEnter: function () {
                        em(!0);
                    },
                    onMouseLeave: function () {
                        em(!1);
                    },
                    children: (0, t.jsxs)(q.A, {
                        shakeLocation: eO.uD.VOICE_USER,
                        isShaking: eD,
                        className: ek.Vs,
                        children: [
                            (0, t.jsx)(ef.A, {
                                ref: e0,
                                className: a()(ek.Vs, { [ek.E7]: R, [ek.k_]: null == T, [ek.N7]: B }),
                                noBorder: R,
                                style: E,
                                participantUserId: ex,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e$,
                                    className: ek.lG,
                                    onDoubleClick: eF,
                                    onContextMenu: (e) => eK(e, u.type === eb.lp.STREAM),
                                    onClick: eJ,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eY && null != ex
                                            ? (0, t.jsx)(ea.A, {
                                                  voiceChannelEffect: eY,
                                                  onComplete: () => (0, en.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        u.type === eb.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: ek.nl,
                                                  children: (0, t.jsx)(z.A, {
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
                                        R ? null : (0, t.jsx)("div", { className: ek.hD, children: eZ }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: ek._Q,
                                                  children: (0, t.jsx)(e7, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: ek.Dt,
                                                  }),
                                              })
                                            : null,
                                        eM.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(eG, {
                                                  focused: k,
                                                  width: C,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eP ?? !1,
                                                  ...ew,
                                                  idle: B,
                                                  platform: eW,
                                                  title: (0, eI.A)(v, u),
                                                  blocked: M,
                                                  ignored: U,
                                                  localVideoDisabled: eg,
                                                  videoToggleState: ev,
                                                  hideAudioIcon: ez,
                                                  onContextMenu: eK,
                                                  onToggleMute: eQ,
                                                  participantUserId: ex,
                                                  channel: v,
                                                  secureFramesVerified: eB,
                                                  isHovered: er,
                                                  popoutType: x,
                                                  paused: w,
                                                  controlsBottom: H,
                                                  streamId: u.type === eb.lp.STREAM ? u.streamId : null,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(ek.PQ, { [ek.pU]: !k && (eL || null != eY) }),
                                                  style: k || eL ? void 0 : e8,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            $ && el && er && (0, t.jsx)(eT.A, { currentUserId: eA, participant: u }),
                            (0, t.jsx)(K.A, { isFiring: F, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eD(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === eb.lp.STREAM)
        return s === eb.J7.XBOX
            ? (0, t.jsx)(eh.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case eb.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case eb.J7.XBOX:
            return (0, t.jsx)(eh.A, { className: i });
        case eb.J7.PLAYSTATION:
            return (0, t.jsx)(eA.A, { className: i });
        case eb.J7.QUEST:
            return (0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eU(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(ek.V7, { [ek.kl]: i, [ek.N7]: n }),
            children: (0, t.jsx)(g.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), o(e);
                },
                "aria-label": s,
                icon: l,
            }),
        }),
    });
}
function eP(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, Y.A)(l, s), [l, s]),
        c = (0, r.bG)([Z.A], () => Z.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            (0, W.X)(P.A.CALL_TILE_POPOUT, W.O.STAY_ON_TOP, !c), $.setAlwaysOnTop(o, !c);
        }, [o, c]);
    return ex.isPlatformEmbedded && ey.Ay.supportsFeature(eS.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eU, {
              onClick: d,
              tooltipText: c ? eV.intl.string(eV.t.YdyDM9) : eV.intl.string(eV.t.ZVGHwP),
              icon: c ? E.h : N.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
e_.displayName = "CallTile";
let eG = i.memo((e) => {
    let {
            idle: l,
            title: s,
            width: n,
            focused: c,
            videoToggleState: p,
            blocked: m,
            ignored: A,
            participantId: h,
            participantType: x,
            participantUserId: g,
            channel: E,
            platform: N,
            secureFramesVerified: _,
            onContextMenu: D,
            muted: G,
            deafened: z,
            localMuted: X,
            serverMuted: Q,
            serverDeafened: J,
            hasVideo: K,
            hideAudioIcon: q,
            onToggleMute: Z,
            popoutType: ee,
            paused: es,
            controlsBottom: et,
            streamId: ei,
        } = e,
        en = (0, r.bG)([eo.default], () => eo.default.getId()),
        ea = (0, r.bG)([er.A], () =>
            x === eb.lp.USER && null != g ? er.A.getActivities(g).find(U.A)?.application_id : null,
        ),
        ec = (0, el.V)(g),
        eu = (0, r.bG)([ed.Ay], () => null != g && ed.Ay.isLocalVideoAutoDisabled(g, (0, L.A)(x)), [g, x]),
        ep = (0, H.A)({ userId: g, guildId: E.getGuildId() }),
        eA = (0, B.a)({ displayNameStyles: ep }),
        eh = (0, ev.Yb)(n),
        ex = (0, ev.VE)(n),
        ey = (0, ev.DO)(n),
        [eI, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== em.A.isOpen() && ((e = em.A.isOpen()) || eT(!1));
        }
        return em.A.addChangeListener(l), () => em.A.removeChangeListener(l);
    }, []);
    let ej = !q && x === eb.lp.STREAM && K && (!ex || X),
        ef = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n } = e;
            return t ? y.T : s ? I.O : i ? T.c : l ? I.O : n ? j.z : null;
        })({ localMuted: X, serverMuted: Q, serverDeafened: J, deafened: z, muted: G }),
        eE = (0, S.z)({ value: null != et ? et : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eN = [];
    c && x === eb.lp.STREAM && eN.push((0, t.jsx)(F.A, { streamId: ei, paused: es }, "zoom-controls")),
        c
            ? ee === w.N.CALL_TILE &&
              (eN.push(
                  (0, t.jsx)(eP, { channelId: E.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eN.push(
                  (0, t.jsx)(
                      eU,
                      {
                          onClick: () => {
                              (0, W.X)(P.A.CALL_TILE_POPOUT, W.O.POPOUT_RETURN), $.close((0, Y.A)(E.id, h));
                          },
                          tooltipText: eV.intl.string(eV.t["7Dwcnj"]),
                          icon: d._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ey ||
                  x !== eb.lp.USER ||
                  null == g ||
                  g === en ||
                  null == ec ||
                  eN.push(
                      (0, t.jsx)(
                          eg.M,
                          { userId: g, channel: E, applicationId: ec, hideWhenInactive: !eI, idle: l },
                          "gift",
                      ),
                  ),
              eN.push(
                  (0, t.jsx)(
                      eU,
                      {
                          onClick: function (e) {
                              e.stopPropagation(), eT(!0), D(e, !0, eb.GK.THREE_DOT);
                          },
                          tooltipText: eV.intl.string(eV.t["+1H47t"]),
                          icon: b.j,
                          hideWhenInactive: !eI,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ej &&
                  eN.push(
                      (0, t.jsx)(
                          eU,
                          {
                              onClick: Z,
                              tooltipText: X ? eV.intl.string(eV.t.YqAjXy) : eV.intl.string(eV.t.w4m945),
                              icon: X ? O._ : R.H,
                              hideWhenInactive: !X && !eI,
                              idle: l,
                          },
                          "mute",
                      ),
                  ));
    let eC = [];
    null != ef &&
        x === eb.lp.USER &&
        eC.push((0, t.jsx)(ef, { className: ek.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eC.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: ek.Z5,
                        children: (0, t.jsx)(V.K, {
                            size: "lg",
                            className: ek.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eC.push(
                (0, t.jsx)(
                    "div",
                    { className: ek.PP, children: (0, t.jsx)(k.G, { size: "lg", className: ek.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eC.push((0, t.jsx)(eD, { participantType: x, platform: N, className: ek.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eC.push((0, t.jsx)("span", { className: a()(ek.Wk, eA), children: s }, "title-text")),
        _ &&
            eC.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: eV.intl.string(eV.t.ZEem6O),
                        children: (0, t.jsx)(M.m, {
                            className: ek.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eV.intl.string(eV.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eO = ec ?? ea,
        eR =
            c || l || ey || x !== eb.lp.USER || null == g || null == eO
                ? null
                : (0, t.jsx)(eg.X, { applicationId: eO, hideApplicationName: ex });
    return (0, t.jsxs)("div", {
        className: a()(ek.MU, { [ek.oE]: ex, [ek.Ol]: c }),
        children: [
            (0, t.jsx)("div", {
                className: a()(ek.Ik, { [ek.EX]: n < 195 }),
                children:
                    eu || p === eS.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: ek.h5,
                                  children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(ek.ns, ek.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: ek.h5,
                                          children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: ek.Wk,
                                          children: eV.intl.string(eV.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eh &&
                (0, t.jsxs)("div", {
                    className: a()(ek.Qp, { [ek.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: ek.qV,
                            children: [
                                eC.length > 0 &&
                                    (0, t.jsx)(C.E, {
                                        className: ek.ac,
                                        color: "none",
                                        variant: ex ? "text-sm/normal" : "text-md/normal",
                                        children: eC,
                                    }),
                                eR,
                            ],
                        }),
                        eN.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(ek._v, { [ek.N7]: l }),
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
let eL = Q.$,
    ew = e_;
