(s.d(l, { Ay: () => ez, Yl: () => ew }), s(321073));
var t = s(477900),
    i = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(128954),
    c = s(738678),
    d = s(12470),
    r = s(17928),
    u = s(661531),
    p = s(31300),
    m = s(428689),
    A = s(289020),
    h = s(890856),
    x = s(646270),
    I = s(615675),
    y = s(666654),
    T = s(990836),
    j = s(83107),
    f = s(866665),
    E = s(408278),
    g = s(609731),
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
    U = s(765671),
    L = s(672979),
    P = s(793574),
    G = s(429913),
    w = s(520698),
    z = s(164617),
    Y = s(66004),
    W = s(958005),
    X = s(384059),
    H = s(556525),
    B = s(609425),
    Q = s(73392),
    J = s(51092),
    F = s(40056),
    K = s(117029),
    q = s(612258),
    Z = s(551826),
    $ = s(567249),
    ee = s(574172),
    el = s(665691),
    es = s(635885),
    et = s(209932),
    ei = s(885386),
    en = s(461782),
    ea = s(614518),
    eo = s(706787),
    ec = s(280450),
    ed = s(111162),
    er = s(544576),
    eu = s(290863),
    ep = s(485296),
    em = s(977997),
    eA = s(712687),
    eh = s(790381),
    ex = s(266080),
    eI = s(723702),
    ey = s(19575),
    eT = s(141035),
    ej = s(654820),
    ef = s(804980),
    eE = s(272812),
    eg = s(304047),
    eN = s(802867),
    ev = s(83982),
    eC = s(345812),
    eS = s(110234),
    eb = s(652215),
    eO = s(806931),
    eR = s(31408),
    eV = s(731854),
    ek = s(375708),
    eM = s(584841);
let e_ = [eO.lp.ACTIVITY],
    eD = i.memo((e) => {
        var l, s, n;
        let o,
            c,
            d,
            {
                participant: u,
                popoutType: x,
                onDoubleClick: I,
                onContextMenu: y,
                onClick: T,
                onMouseDown: j,
                onKeyDown: f,
                className: E,
                style: g,
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
                ignored: L = !1,
                fit: P = J.$.CONTAIN,
                paused: z = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: X = !1,
                controlsBottom: B,
            } = e,
            Q = i.useContext(en.vG) || X,
            [K, $] = i.useState(!1),
            ee = ei.Q_.useSetting(),
            es = (0, r.bG)([ed.default], () => ed.default.isStreamInfoOverlayEnabled),
            [eu, eA] = i.useState(!1),
            eh = (0, r.bG)([ec.default], () => ec.default.getId()),
            ex = u.type === eO.lp.ACTIVITY ? null : u.user,
            eI = ex?.id ?? null,
            [ey] = (0, G.A)(u.type === eO.lp.ACTIVITY ? [u.applicationId] : []),
            eg = (0, r.bG)([er.Ay], () => null != eI && er.Ay.isLocalVideoDisabled(eI, (0, w.A)(u.type)), [eI, u.type]),
            eC = (0, r.bG)(
                [er.Ay],
                () => (null != eI ? er.Ay.getVideoToggleState(eI, (0, w.A)(u.type)) : eb.bb8.NONE),
                [eI, u.type],
            ),
            eD = eC === eb.bb8.AUTO_PROBING,
            { speaking: eU, ringing: eL, hasVideo: eP } = (0, eS.A)(u, eh),
            ew = (0, r.bG)([et.A], () => null !== eI && et.A.isUserPlayingSounds(eI), [eI]),
            ez =
                ((l = eh),
                (s = u),
                (n = v.getGuildId()),
                (o = s.type !== eO.lp.ACTIVITY ? s.user.id : s.applicationId),
                (c = (0, r.cf)([em.A], () => {
                    let e = em.A.getVoiceState(n, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [er.Ay],
                    () => {
                        let e = (0, w.A)(s.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: er.Ay.isLocalMute(o, e),
                                  localVideoDisabled: er.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: er.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, s.type, o],
                )),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: (s.type === eO.lp.USER && s.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (s.type === eO.lp.USER && s.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eY = u.type === eO.lp.STREAM && eI === eh,
            eW = (0, r.bG)([ea.A], () => (u.type === eO.lp.USER && null != eI ? ea.A.getEffectForUserId(eI) : null)),
            eX = (0, r.bG)([em.A], () => em.A.getVoicePlatformForChannel(v.id, eI ?? eb.dJq)),
            eH = (0, el.UF)({ userId: eI, channelId: v.id }),
            eB = (0, el.DY)({ streamKey: u.type === eO.lp.STREAM ? u.id : null, channelId: v.id }),
            eQ = i.useMemo(
                () => (u.type === eO.lp.STREAM ? (eB ?? !1) : u.type === eO.lp.USER && (eH ?? !1)),
                [eB, eH, u.type],
            );
        i.useEffect(() => {
            $(k);
        }, [k]);
        let eJ = i.useCallback(() => {
                null != eI && _.A.toggleLocalMute(eI, eV.x.STREAM);
            }, [eI]),
            eF = i.useCallback(
                (e) => {
                    T?.(u, e);
                },
                [T, u],
            ),
            eK = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eq = i.useCallback(
                (e, l, s) => {
                    y?.(u, e, l, s);
                },
                [y, u],
            ),
            eZ = null,
            e$ = null,
            e0 = "";
        switch (u.type) {
            case eO.lp.STREAM:
                ((eZ = (0, t.jsx)(eN.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: z,
                })),
                    (e$ = (0, t.jsx)(eN.D, {
                        participant: u,
                        selected: O,
                        width: C,
                        focused: k,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e0 = ek.intl.formatToPlainString(ek.t.gHPz3Q, { streamerName: u.user.username })));
                break;
            case eO.lp.USER:
                ((eZ = (0, t.jsx)(ev.A, {
                    channel: v,
                    inCall: b,
                    participant: u,
                    popoutType: x,
                    fit: P,
                    onVideoResize: S,
                    paused: z,
                    selected: O,
                    width: C,
                    blocked: M,
                    ignored: L,
                    noVideoRender: V || eD,
                    pulseSpeakingIndicator: W,
                })),
                    (e$ = (0, t.jsx)(ev.s, { participant: u, channelId: v.id })),
                    (e0 = ek.intl.formatToPlainString(ek.t["iC/x/Q"], { username: u.user.username })));
                break;
            case eO.lp.ACTIVITY:
                ((eZ = (0, t.jsx)(ef.Ay, { interactible: k, participant: u, selected: O, channel: v, width: C })),
                    (e0 = ek.intl.formatToPlainString(ek.t.YCvOsO, { activityName: ey?.name })));
                break;
            case eO.lp.HIDDEN_STREAM:
                eZ = (0, t.jsx)(eN.A, {
                    participant: u,
                    selected: O,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: z,
                    popoutType: x,
                });
        }
        let { ref: e1, width: e8, height: e7 } = (0, U.Ay)(),
            e6 = (0, r.bG)([ep.A], () => (u.type === eO.lp.USER ? ep.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, H.v)({ isSpeaking: eU, voiceDb: e6, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e2 = (0, eO.Ay)(u) ? p.k : eP ? m.VideoIcon : A.E,
            e4 = u.type === eO.lp.STREAM && k;
        return (0, t.jsx)(D.A, {
            section: eb.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(F.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, t.jsx)("div", {
                    className: a()(eM.iE, { [eM.DF]: eL }, E),
                    style: N,
                    onMouseEnter: function () {
                        eA(!0);
                    },
                    onMouseLeave: function () {
                        eA(!1);
                    },
                    children: (0, t.jsxs)(Z.A, {
                        shakeLocation: eR.uD.VOICE_USER,
                        isShaking: eU,
                        className: eM.Vs,
                        children: [
                            (0, t.jsx)(eE.A, {
                                ref: e1,
                                className: a()(eM.Vs, { [eM.E7]: R, [eM.k_]: null == T, [eM.N7]: Q }),
                                noBorder: R,
                                style: g,
                                participantUserId: eI,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e0,
                                    className: eM.lG,
                                    onDoubleClick: eK,
                                    onContextMenu: (e) => eq(e, u.type === eO.lp.STREAM),
                                    onClick: eF,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != eI
                                            ? (0, t.jsx)(eo.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, ea.a)(eI),
                                                  userId: eI,
                                              })
                                            : null,
                                        u.type === eO.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: eM.nl,
                                                  children: (0, t.jsx)(Y.A, {
                                                      userId: eI,
                                                      channelId: v.id,
                                                      guildId: v.getGuildId(),
                                                      containerDimensions: { width: e8 ?? 0, height: e7 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        eZ,
                                        R ? null : (0, t.jsx)("div", { className: eM.hD, children: e$ }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: eM._Q,
                                                  children: (0, t.jsx)(e2, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eM.Dt,
                                                  }),
                                              })
                                            : null,
                                        e_.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(eG, {
                                                  focused: k,
                                                  width: C,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eP ?? !1,
                                                  ...ez,
                                                  idle: Q,
                                                  platform: eX,
                                                  title: (0, eT.A)(v, u),
                                                  blocked: M,
                                                  ignored: L,
                                                  localVideoDisabled: eg,
                                                  videoToggleState: eC,
                                                  hideAudioIcon: eY,
                                                  onContextMenu: eq,
                                                  onToggleMute: eJ,
                                                  participantUserId: eI,
                                                  channel: v,
                                                  secureFramesVerified: eQ,
                                                  isHovered: eu,
                                                  popoutType: x,
                                                  paused: z,
                                                  controlsBottom: B,
                                                  streamId: u.type === eO.lp.STREAM ? u.streamId : null,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(eM.PQ, { [eM.pU]: !k && (ew || null != eW) }),
                                                  style: k || ew ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            ee && es && eu && (0, t.jsx)(ej.A, { currentUserId: eh, participant: u }),
                            (0, t.jsx)(q.A, { isFiring: K, callTileRef: e1 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eU(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === eO.lp.STREAM)
        return s === eO.J7.XBOX
            ? (0, t.jsx)(ex.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case eO.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case eO.J7.XBOX:
            return (0, t.jsx)(ex.A, { className: i });
        case eO.J7.PLAYSTATION:
            return (0, t.jsx)(eh.A, { className: i });
        case eO.J7.QUEST:
            return (0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eL(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(eM.V7, { [eM.kl]: i, [eM.N7]: n }),
            children: (0, t.jsx)(E.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    (e.stopPropagation(), o(e));
                },
                "aria-label": s,
                icon: l,
            }),
        }),
    });
}
function eP(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, W.A)(l, s), [l, s]),
        c = (0, r.bG)([$.A], () => $.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.STAY_ON_TOP, !c), ee.setAlwaysOnTop(o, !c));
        }, [o, c]);
    return eI.isPlatformEmbedded && ey.Ay.supportsFeature(eb.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eL, {
              onClick: d,
              tooltipText: c ? ek.intl.string(ek.t.YdyDM9) : ek.intl.string(ek.t.ZVGHwP),
              icon: c ? g.h : N.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eD.displayName = "CallTile";
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
            participantUserId: E,
            channel: g,
            platform: N,
            secureFramesVerified: _,
            onContextMenu: D,
            muted: U,
            deafened: G,
            localMuted: Y,
            serverMuted: H,
            serverDeafened: J,
            hasVideo: F,
            hideAudioIcon: q,
            onToggleMute: Z,
            popoutType: $,
            paused: el,
            controlsBottom: et,
            streamId: ei,
        } = e,
        en = (0, r.bG)([ec.default], () => ec.default.getId()),
        ea = (0, r.bG)([eu.A], () =>
            x === eO.lp.USER && null != E ? eu.A.getActivities(E).find(L.A)?.application_id : null,
        ),
        eo = (0, es.V)(E),
        ed = (0, r.bG)([er.Ay], () => null != E && er.Ay.isLocalVideoAutoDisabled(E, (0, w.A)(x)), [E, x]),
        ep = (0, B.A)({ userId: E, guildId: g.getGuildId() }),
        em = (0, Q.a)({ displayNameStyles: ep }),
        eh = (0, eC.Yb)(n),
        ex = (0, eC.VE)(n),
        eI = (0, eC.DO)(n),
        [ey, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== eA.A.isOpen() && ((e = eA.A.isOpen()) || eT(!1));
        }
        return (eA.A.addChangeListener(l), () => eA.A.removeChangeListener(l));
    }, []);
    let ej = !q && x === eO.lp.STREAM && F && (!ex || Y),
        ef = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n } = e;
            return t ? I.T : s ? y.O : i ? T.c : l ? y.O : n ? j.z : null;
        })({ localMuted: Y, serverMuted: H, serverDeafened: J, deafened: G, muted: U }),
        eE = (0, S.z)({ value: null != et ? et : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eN = [];
    (c && x === eO.lp.STREAM && eN.push((0, t.jsx)(K.A, { streamId: ei, paused: el }, "zoom-controls")),
        c
            ? $ === z.N.CALL_TILE &&
              (eN.push(
                  (0, t.jsx)(eP, { channelId: g.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eN.push(
                  (0, t.jsx)(
                      eL,
                      {
                          onClick: () => {
                              ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.POPOUT_RETURN), ee.close((0, W.A)(g.id, h)));
                          },
                          tooltipText: ek.intl.string(ek.t["7Dwcnj"]),
                          icon: d._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eI ||
                  x !== eO.lp.USER ||
                  null == E ||
                  E === en ||
                  null == eo ||
                  eN.push(
                      (0, t.jsx)(
                          eg.M,
                          { userId: E, channel: g, applicationId: eo, hideWhenInactive: !ey, idle: l },
                          "gift",
                      ),
                  ),
              eN.push(
                  (0, t.jsx)(
                      eL,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eT(!0), D(e, !0, eO.GK.THREE_DOT));
                          },
                          tooltipText: ek.intl.string(ek.t["+1H47t"]),
                          icon: b.MoreHorizontalIcon,
                          hideWhenInactive: !ey,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ej &&
                  eN.push(
                      (0, t.jsx)(
                          eL,
                          {
                              onClick: Z,
                              tooltipText: Y ? ek.intl.string(ek.t.YqAjXy) : ek.intl.string(ek.t.w4m945),
                              icon: Y ? O._ : R.H,
                              hideWhenInactive: !Y && !ey,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let ev = [];
    (null != ef &&
        x === eO.lp.USER &&
        ev.push((0, t.jsx)(ef, { className: eM.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            ev.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: eM.Z5,
                        children: (0, t.jsx)(V.K, {
                            size: "lg",
                            className: eM.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            ev.push(
                (0, t.jsx)(
                    "div",
                    { className: eM.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: eM.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || ev.push((0, t.jsx)(eU, { participantType: x, platform: N, className: eM.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            ev.push((0, t.jsx)("span", { className: a()(eM.Wk, em), children: s }, "title-text")),
        _ &&
            ev.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: ek.intl.string(ek.t.ZEem6O),
                        children: (0, t.jsx)(M.m, {
                            className: eM.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": ek.intl.string(ek.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eS = eo ?? ea,
        eR =
            (c && $ !== z.N.CALL_TILE) || l || eI || x !== eO.lp.USER || null == E || null == eS
                ? null
                : (0, t.jsx)(eg.X, { applicationId: eS, hideApplicationName: ex });
    return (0, t.jsxs)("div", {
        className: a()(eM.MU, { [eM.oE]: ex, [eM.Ol]: c }),
        children: [
            (0, t.jsx)("div", {
                className: a()(eM.Ik, { [eM.EX]: n < 195 }),
                children:
                    ed || p === eb.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: eM.h5,
                                  children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(eM.ns, eM.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eM.h5,
                                          children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: eM.Wk,
                                          children: ek.intl.string(ek.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eh &&
                (0, t.jsxs)("div", {
                    className: a()(eM.Qp, { [eM.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: eM.qV,
                            children: [
                                ev.length > 0 &&
                                    (0, t.jsx)(C.E, {
                                        className: eM.ac,
                                        color: "none",
                                        variant: ex ? "text-sm/normal" : "text-md/normal",
                                        children: ev,
                                    }),
                                eR,
                            ],
                        }),
                        eN.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(eM._v, { [eM.N7]: l }),
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
let ew = J.$,
    ez = eD;
