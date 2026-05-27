t.d(l, { Ay: () => e$, Yl: () => ew }), t(321073);
var i = t(627968),
    s = t(64700),
    n = t(503698),
    a = t.n(n),
    d = t(873174),
    r = t(738678),
    c = t(12470),
    o = t(17928),
    p = t(661531),
    u = t(990078),
    m = t(31300),
    A = t(428689),
    h = t(289020),
    x = t(890856),
    v = t(646270),
    g = t(615675),
    j = t(666654),
    y = t(990836),
    I = t(83107),
    N = t(408278),
    f = t(609731),
    T = t(788120),
    S = t(943812),
    E = t(834730),
    b = t(717421),
    C = t(365199),
    O = t(358618),
    _ = t(983851),
    G = t(428678),
    M = t(952270),
    U = t(254138),
    D = t(827343),
    R = t(820284),
    P = t(672979),
    V = t(793574),
    k = t(429913),
    L = t(520698),
    w = t(164617),
    $ = t(66004),
    W = t(958005),
    z = t(384059),
    H = t(556525),
    Q = t(609425),
    Y = t(252545),
    X = t(51092),
    J = t(40056),
    B = t(117029),
    F = t(612258),
    q = t(551826),
    K = t(567249),
    Z = t(574172),
    ee = t(665691),
    el = t(724759),
    et = t(635885),
    ei = t(209932),
    es = t(885386),
    en = t(461782),
    ea = t(614518),
    ed = t(706787),
    er = t(495544),
    ec = t(111162),
    eo = t(761853),
    ep = t(290863),
    eu = t(485296),
    em = t(977997),
    eA = t(712687),
    eh = t(790381),
    ex = t(266080),
    ev = t(723702),
    eg = t(19575),
    ej = t(141035),
    ey = t(654820),
    eI = t(804980),
    eN = t(272812),
    ef = t(304047),
    eT = t(434087),
    eS = t(83982),
    eE = t(345812),
    eb = t(110234),
    eC = t(652215),
    eO = t(806931),
    e_ = t(31408),
    eG = t(731854),
    eM = t(375708),
    eU = t(391308);
let eD = [eO.lp.ACTIVITY],
    eR = s.memo((e) => {
        var l, t, n;
        let d,
            r,
            c,
            {
                participant: p,
                popoutType: u,
                onDoubleClick: v,
                onContextMenu: g,
                onClick: j,
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
            el = (0, o.bG)([ec.default], () => ec.default.isStreamInfoOverlayEnabled),
            [et, ep] = s.useState(!1),
            eA = (0, o.bG)([er.default], () => er.default.getId()),
            eh = p.type === eO.lp.ACTIVITY ? null : p.user,
            ex = eh?.id ?? null,
            [ev] = (0, k.A)(p.type === eO.lp.ACTIVITY ? [p.applicationId] : []),
            eg = (0, o.bG)([eo.Ay], () => null != ex && eo.Ay.isLocalVideoDisabled(ex, (0, L.A)(p.type)), [ex, p.type]),
            ef = (0, o.bG)(
                [eo.Ay],
                () => (null != ex ? eo.Ay.getVideoToggleState(ex, (0, L.A)(p.type)) : eC.bb8.NONE),
                [ex, p.type],
            ),
            eE = ef === eC.bb8.AUTO_PROBING,
            { speaking: eR, ringing: eP, hasVideo: eV } = (0, eb.A)(p, eA),
            ek = (0, o.bG)([ei.A], () => null !== ex && ei.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((l = eA),
                (t = p),
                (n = S.getGuildId()),
                (d = t.type !== eO.lp.ACTIVITY ? t.user.id : t.applicationId),
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
                    let e = (0, L.A)(t.type);
                    return l === d
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: eo.Ay.isLocalMute(d, e),
                              localVideoDisabled: eo.Ay.isLocalVideoDisabled(d, e),
                              localVideoAutoDisabled: eo.Ay.isLocalVideoAutoDisabled(d, e),
                          };
                }, [l, t.type, d])),
                {
                    serverMuted: r.muted,
                    serverDeafened: r.deafened,
                    suppressed: r.suppressed,
                    localMuted: c.muted,
                    muted: (t.type === eO.lp.USER && t.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (t.type === eO.lp.USER && t.voiceState?.isVoiceDeafened()) ?? !1,
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
                    j?.(p, e);
                },
                [j, p],
            ),
            eB = s.useCallback(
                (e) => {
                    v?.(p, e);
                },
                [v, p],
            ),
            eF = s.useCallback(
                (e, l, t) => {
                    g?.(p, e, l, t);
                },
                [g, p],
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
            e7 = (0, H.v)({ isSpeaking: eR, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e5 = (0, eO.Ay)(p) ? m.k : eV ? A.n : h.E,
            e8 = p.type === eO.lp.STREAM && M;
        return (0, i.jsx)(R.A, {
            section: eC.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(J.Ay, {
                streamKey: p.id,
                enableZoom: e8,
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
                                className: a()(eU.Vs, { [eU.E7]: _, [eU.k_]: null == j, [eU.N7]: Y }),
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
                                                  children: (0, i.jsx)(e5, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eU.Dt,
                                                  }),
                                              })
                                            : null,
                                        eD.includes(p.type)
                                            ? null
                                            : (0, i.jsx)(eL, {
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
                                                  localVideoDisabled: eg,
                                                  videoToggleState: ef,
                                                  hideAudioIcon: e$,
                                                  onContextMenu: eF,
                                                  onToggleMute: eX,
                                                  participantUserId: ex,
                                                  channel: S,
                                                  secureFramesVerified: eY,
                                                  isHovered: et,
                                                  popoutType: u,
                                                  paused: w,
                                                  controlsBottom: Q,
                                                  streamId: p.type === eO.lp.STREAM ? p.streamId : null,
                                              }),
                                        C && !_
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eU.PQ, { [eU.pU]: !M && (ek || null != eW) }),
                                                  style: M || ek ? void 0 : e7,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            Z && el && et && (0, i.jsx)(ey.A, { currentUserId: eA, participant: p }),
                            (0, i.jsx)(F.A, { isFiring: B, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eP(e) {
    let { participantType: l, platform: t, className: s } = e;
    if (l === eO.lp.STREAM)
        return t === eO.J7.XBOX
            ? (0, i.jsx)(ex.A, { className: s })
            : (0, i.jsx)(m.k, { size: "md", color: "currentColor", className: s });
    switch (t) {
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
    let { icon: l, tooltipText: t, hideWhenInactive: s, idle: n, onClick: d } = e;
    return (0, i.jsx)(u.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: a()(eU.V7, { [eU.kl]: s, [eU.N7]: n }),
            children: (0, i.jsx)(N.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), d(e);
                },
                "aria-label": t,
                icon: l,
            }),
        }),
    });
}
function ek(e) {
    let { channelId: l, participantId: t, hideWhenInactive: n, idle: a } = e,
        d = s.useMemo(() => (0, W.A)(l, t), [l, t]),
        r = (0, o.bG)([K.A], () => K.A.getIsAlwaysOnTop(d)),
        c = s.useCallback(() => {
            (0, z.X)(V.A.CALL_TILE_POPOUT, z.O.STAY_ON_TOP, !r), Z.setAlwaysOnTop(d, !r);
        }, [d, r]);
    return ev.isPlatformEmbedded && eg.Ay.supportsFeature(eC.BYE.POPOUT_WINDOWS)
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
let eL = s.memo((e) => {
    let {
            idle: l,
            title: t,
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
            hasVideo: F,
            hideAudioIcon: q,
            onToggleMute: K,
            popoutType: ee,
            paused: ei,
            controlsBottom: es,
            streamId: en,
        } = e,
        ea = (0, o.bG)([er.default], () => er.default.getId()),
        ed = (0, el.B)({ location: "call_tile" }),
        ec = (0, o.bG)([ep.A], () =>
            v === eO.lp.USER && null != N ? ep.A.getActivities(N).find(P.A)?.application_id : null,
        ),
        eu = (0, et.V)(ed ? N : null),
        em = (0, o.bG)([eo.Ay], () => null != N && eo.Ay.isLocalVideoAutoDisabled(N, (0, L.A)(v)), [N, v]),
        eh = (0, Q.A)({ userId: N, guildId: f.getGuildId() }),
        ex = (0, Y.a)({ displayNameStyles: eh }),
        ev = (0, eE.Yb)(n),
        eg = (0, eE.VE)(n),
        ej = (0, eE.DO)(n),
        [ey, eI] = s.useState(!1);
    s.useEffect(() => {
        let e = !1,
            l = () => {
                e !== eA.A.isOpen() && ((e = eA.A.isOpen()) || eI(!1));
            };
        return eA.A.addChangeListener(l), () => eA.A.removeChangeListener(l);
    }, []);
    let eN = !q && v === eO.lp.STREAM && F && (!eg || H),
        eT = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: i, deafened: s, muted: n } = e;
            return i ? g.T : t ? j.O : s ? y.c : l ? j.O : n ? I.z : null;
        })({ localMuted: H, serverMuted: X, serverDeafened: J, deafened: $, muted: k }),
        eS = (0, b.z)({ value: null != es ? es : 0, config: { ...d.config.stiff, clamp: !0 } }, "animate-always"),
        eb = [];
    r && v === eO.lp.STREAM && eb.push((0, i.jsx)(B.A, { streamId: en, paused: ei }, "zoom-controls")),
        r
            ? ee === w.N.CALL_TILE &&
              (eb.push(
                  (0, i.jsx)(ek, { channelId: f.id, participantId: x, hideWhenInactive: !1, idle: l }, "stay-on-top"),
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
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ed &&
                  !ej &&
                  v === eO.lp.USER &&
                  null != N &&
                  N !== ea &&
                  null != eu &&
                  eb.push(
                      (0, i.jsx)(
                          ef.M,
                          { userId: N, channel: f, applicationId: eu, hideWhenInactive: !ey, idle: l },
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
                          idle: l,
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
                              idle: l,
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
        l || e_.push((0, i.jsx)(eP, { participantType: v, platform: T, className: eU.gr }, "title-icon")),
        null == t ||
            "" === t ||
            l ||
            e_.push((0, i.jsx)("span", { className: a()(eU.Wk, ex), children: t }, "title-text")),
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
            !ed || r || l || ej || v !== eO.lp.USER || null == N || null == eG
                ? null
                : (0, i.jsx)(ef.X, { applicationId: eG, hideApplicationName: eg });
    return (0, i.jsxs)("div", {
        className: a()(eU.MU, { [eU.oE]: eg, [eU.Ol]: r }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eU.Ik, { [eU.EX]: n < 195 }),
                children:
                    em || m === eC.bb8.AUTO_PROBING
                        ? l
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
                                        variant: eg ? "text-sm/normal" : "text-md/normal",
                                        children: e_,
                                    }),
                                eD,
                            ],
                        }),
                        eb.length > 0
                            ? (0, i.jsx)(d.animated.div, {
                                  className: a()(eU._v, { [eU.N7]: l, [eU.d5]: ed }),
                                  style: { marginBottom: eS.value },
                                  children: eb,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eL.displayName = "CallTileOverlay";
let ew = /^(14256|21552)$/.test(t.j) ? X.$ : null,
    e$ = eR;
