(s.d(l, { Ay: () => eY, Yl: () => ez }), s(321073));
var t = s(477900),
    i = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(202091),
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
    F = s(51092),
    J = s(40056),
    K = s(117029),
    q = s(612258),
    Z = s(551826),
    $ = s(567249),
    ee = s(574172),
    el = s(665691),
    es = s(635885),
    et = s(209932),
    ei = s(58303),
    en = s(885386),
    ea = s(461782),
    eo = s(614518),
    ec = s(706787),
    ed = s(280450),
    er = s(111162),
    eu = s(192820),
    ep = s(290863),
    em = s(485296),
    eA = s(977997),
    eh = s(712687),
    ex = s(790381),
    eI = s(266080),
    ey = s(723702),
    eT = s(19575),
    ej = s(141035),
    ef = s(654820),
    eg = s(804980),
    eE = s(272812),
    eN = s(304047),
    ev = s(802867),
    eC = s(83982),
    eS = s(345812),
    eb = s(110234),
    eO = s(652215),
    eR = s(806931),
    eV = s(31408),
    ek = s(731854),
    eM = s(660183),
    e_ = s(584841);
let eD = [eR.lp.ACTIVITY],
    eU = i.memo((e) => {
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
                ignored: L = !1,
                fit: P = F.$.CONTAIN,
                paused: z = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: X = !1,
                controlsBottom: B,
            } = e,
            Q = i.useContext(ea.vG) || X,
            [K, $] = i.useState(!1),
            ee = en.Q_.useSetting(),
            es = (0, r.bG)([er.default], () => er.default.isStreamInfoOverlayEnabled),
            [ep, eh] = i.useState(!1),
            ex = (0, r.bG)([ed.default], () => ed.default.getId()),
            eI = u.type === eR.lp.ACTIVITY ? null : u.user,
            ey = eI?.id ?? null,
            [eT] = (0, G.A)(u.type === eR.lp.ACTIVITY ? [u.applicationId] : []),
            eN = (0, r.bG)([eu.Ay], () => null != ey && eu.Ay.isLocalVideoDisabled(ey, (0, w.A)(u.type)), [ey, u.type]),
            eS = (0, r.bG)(
                [eu.Ay],
                () => (null != ey ? eu.Ay.getVideoToggleState(ey, (0, w.A)(u.type)) : eO.bb8.NONE),
                [ey, u.type],
            ),
            eU = eS === eO.bb8.AUTO_PROBING,
            { speaking: eL, ringing: eP, hasVideo: eG } = (0, eb.A)(u, ex),
            ez = (0, r.bG)([et.A], () => null !== ey && et.A.isUserPlayingSounds(ey), [ey]),
            eY =
                ((l = ex),
                (s = u),
                (n = v.getGuildId()),
                (o = s.type !== eR.lp.ACTIVITY ? s.user.id : s.applicationId),
                (c = (0, r.cf)([eA.A], () => {
                    let e = eA.A.getVoiceState(n, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [eu.Ay],
                    () => {
                        let e = (0, w.A)(s.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: eu.Ay.isLocalMute(o, e),
                                  localVideoDisabled: eu.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: eu.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, s.type, o],
                )),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: (s.type === eR.lp.USER && s.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (s.type === eR.lp.USER && s.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eW = u.type === eR.lp.STREAM && ey === ex,
            eX = (0, r.bG)([eo.A], () => (u.type === eR.lp.USER && null != ey ? eo.A.getEffectForUserId(ey) : null)),
            eH = (0, r.bG)([eA.A], () => eA.A.getVoicePlatformForChannel(v.id, ey ?? eO.dJq)),
            eB = (0, el.UF)({ userId: ey, channelId: v.id }),
            eQ = (0, el.DY)({ streamKey: u.type === eR.lp.STREAM ? u.id : null, channelId: v.id }),
            eF = i.useMemo(
                () => (u.type === eR.lp.STREAM ? (eQ ?? !1) : u.type === eR.lp.USER && (eB ?? !1)),
                [eQ, eB, u.type],
            );
        i.useEffect(() => {
            $(k);
        }, [k]);
        let eJ = i.useCallback(() => {
                null != ey && _.default.toggleLocalMute(ey, ek.x.STREAM);
            }, [ey]),
            eK = i.useCallback(
                (e) => {
                    T?.(u, e);
                },
                [T, u],
            ),
            eq = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eZ = i.useCallback(
                (e, l, s) => {
                    y?.(u, e, l, s);
                },
                [y, u],
            ),
            e$ = null,
            e0 = null,
            e1 = "";
        switch (u.type) {
            case eR.lp.STREAM:
                ((e$ = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: z,
                })),
                    (e0 = (0, t.jsx)(ev.D, {
                        participant: u,
                        selected: O,
                        width: C,
                        focused: k,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e1 = eM.intl.formatToPlainString(eM.t.gHPz3Q, { streamerName: u.user.username })));
                break;
            case eR.lp.USER:
                ((e$ = (0, t.jsx)(eC.A, {
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
                    noVideoRender: V || eU,
                    pulseSpeakingIndicator: W,
                })),
                    (e0 = (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eC.s, { participant: u, channelId: v.id }),
                            v.isGuildStageVoice() && !V ? (0, t.jsx)(ei.A, { channel: v, userId: u.user.id }) : null,
                        ],
                    })),
                    (e1 = eM.intl.formatToPlainString(eM.t["iC/x/Q"], { username: u.user.username })));
                break;
            case eR.lp.ACTIVITY:
                ((e$ = (0, t.jsx)(eg.Ay, { interactible: k, participant: u, selected: O, channel: v, width: C })),
                    (e1 = eM.intl.formatToPlainString(eM.t.YCvOsO, { activityName: eT?.name })));
                break;
            case eR.lp.HIDDEN_STREAM:
                e$ = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    width: C,
                    fit: P,
                    onVideoResize: S,
                    paused: z,
                    popoutType: x,
                });
        }
        let { ref: e8, width: e6, height: e2 } = (0, U.Ay)(),
            e7 = (0, r.bG)([em.A], () => (u.type === eR.lp.USER ? em.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, H.v)({ isSpeaking: eL, voiceDb: e7, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e9 = (0, eR.Ay)(u) ? p.k : eG ? m.VideoIcon : A.E,
            e3 = u.type === eR.lp.STREAM && k;
        return (0, t.jsx)(D.A, {
            section: eO.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(J.Ay, {
                streamKey: u.id,
                enableZoom: e3,
                children: (0, t.jsx)("div", {
                    className: a()(e_.iE, { [e_.DF]: eP }, g),
                    style: N,
                    onMouseEnter: function () {
                        eh(!0);
                    },
                    onMouseLeave: function () {
                        eh(!1);
                    },
                    children: (0, t.jsxs)(Z.A, {
                        shakeLocation: eV.uD.VOICE_USER,
                        isShaking: eL,
                        className: e_.Vs,
                        children: [
                            (0, t.jsx)(eE.A, {
                                ref: e8,
                                className: a()(e_.Vs, { [e_.E7]: R, [e_.k_]: null == T, [e_.N7]: Q }),
                                noBorder: R,
                                style: E,
                                participantUserId: ey,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e1,
                                    className: e_.lG,
                                    onDoubleClick: eq,
                                    onContextMenu: (e) => eZ(e, u.type === eR.lp.STREAM),
                                    onClick: eK,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eX && null != ey
                                            ? (0, t.jsx)(ec.A, {
                                                  voiceChannelEffect: eX,
                                                  onComplete: () => (0, eo.a)(ey),
                                                  userId: ey,
                                              })
                                            : null,
                                        u.type === eR.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: e_.nl,
                                                  children: (0, t.jsx)(Y.A, {
                                                      userId: ey,
                                                      channelId: v.id,
                                                      guildId: v.getGuildId(),
                                                      containerDimensions: { width: e6 ?? 0, height: e2 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e$,
                                        R ? null : (0, t.jsx)("div", { className: e_.hD, children: e0 }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: e_._Q,
                                                  children: (0, t.jsx)(e9, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: e_.Dt,
                                                  }),
                                              })
                                            : null,
                                        eD.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(ew, {
                                                  focused: k,
                                                  width: C,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eG ?? !1,
                                                  ...eY,
                                                  idle: Q,
                                                  platform: eH,
                                                  title: (0, ej.A)(v, u),
                                                  blocked: M,
                                                  ignored: L,
                                                  localVideoDisabled: eN,
                                                  videoToggleState: eS,
                                                  hideAudioIcon: eW,
                                                  onContextMenu: eZ,
                                                  onToggleMute: eJ,
                                                  participantUserId: ey,
                                                  channel: v,
                                                  secureFramesVerified: eF,
                                                  isHovered: ep,
                                                  popoutType: x,
                                                  paused: z,
                                                  controlsBottom: B,
                                                  streamId: u.type === eR.lp.STREAM ? u.streamId : null,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(e_.PQ, { [e_.pU]: !k && (ez || null != eX) }),
                                                  style: k || ez ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            ee && es && ep && (0, t.jsx)(ef.A, { currentUserId: ex, participant: u }),
                            (0, t.jsx)(q.A, { isFiring: K, callTileRef: e8 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eL(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === eR.lp.STREAM)
        return s === eR.J7.XBOX
            ? (0, t.jsx)(eI.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case eR.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case eR.J7.XBOX:
            return (0, t.jsx)(eI.A, { className: i });
        case eR.J7.PLAYSTATION:
            return (0, t.jsx)(ex.A, { className: i });
        case eR.J7.QUEST:
            return (0, t.jsx)(c.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eP(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(e_.V7, { [e_.kl]: i, [e_.N7]: n }),
            children: (0, t.jsx)(g.K, {
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
function eG(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, W.A)(l, s), [l, s]),
        c = (0, r.bG)([$.A], () => $.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.STAY_ON_TOP, !c), ee.setAlwaysOnTop(o, !c));
        }, [o, c]);
    return ey.isPlatformEmbedded && eT.Ay.supportsFeature(eO.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eP, {
              onClick: d,
              tooltipText: c ? eM.intl.string(eM.t.YdyDM9) : eM.intl.string(eM.t.ZVGHwP),
              icon: c ? E.h : N.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eU.displayName = "CallTile";
let ew = i.memo((e) => {
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
            muted: U,
            deafened: G,
            localMuted: Y,
            serverMuted: H,
            serverDeafened: F,
            hasVideo: J,
            hideAudioIcon: q,
            onToggleMute: Z,
            popoutType: $,
            paused: el,
            controlsBottom: et,
            streamId: ei,
        } = e,
        en = (0, r.bG)([ed.default], () => ed.default.getId()),
        ea = (0, r.bG)([ep.A], () =>
            x === eR.lp.USER && null != g ? ep.A.getActivities(g).find(L.A)?.application_id : null,
        ),
        eo = (0, es.V)(g),
        ec = (0, r.bG)([eu.Ay], () => null != g && eu.Ay.isLocalVideoAutoDisabled(g, (0, w.A)(x)), [g, x]),
        er = (0, B.A)({ userId: g, guildId: E.getGuildId() }),
        em = (0, Q.a)({ displayNameStyles: er }),
        eA = (0, eS.Yb)(n),
        ex = (0, eS.VE)(n),
        eI = (0, eS.DO)(n),
        [ey, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== eh.A.isOpen() && ((e = eh.A.isOpen()) || eT(!1));
        }
        return (eh.A.addChangeListener(l), () => eh.A.removeChangeListener(l));
    }, []);
    let ej = !q && x === eR.lp.STREAM && J && (!ex || Y),
        ef = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n } = e;
            return t ? I.T : s ? y.O : i ? T.c : l ? y.O : n ? j.z : null;
        })({ localMuted: Y, serverMuted: H, serverDeafened: F, deafened: G, muted: U }),
        eg = (0, S.z)({ value: null != et ? et : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eE = [];
    (c && x === eR.lp.STREAM && eE.push((0, t.jsx)(K.A, { streamId: ei, paused: el }, "zoom-controls")),
        c
            ? $ === z.N.CALL_TILE &&
              (eE.push(
                  (0, t.jsx)(eG, { channelId: E.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eE.push(
                  (0, t.jsx)(
                      eP,
                      {
                          onClick: () => {
                              ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.POPOUT_RETURN), ee.close((0, W.A)(E.id, h)));
                          },
                          tooltipText: eM.intl.string(eM.t["7Dwcnj"]),
                          icon: d._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eI ||
                  x !== eR.lp.USER ||
                  null == g ||
                  g === en ||
                  null == eo ||
                  eE.push(
                      (0, t.jsx)(
                          eN.M,
                          { userId: g, channel: E, applicationId: eo, hideWhenInactive: !ey, idle: l },
                          "gift",
                      ),
                  ),
              eE.push(
                  (0, t.jsx)(
                      eP,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eT(!0), D(e, !0, eR.GK.THREE_DOT));
                          },
                          tooltipText: eM.intl.string(eM.t["+1H47t"]),
                          icon: b.MoreHorizontalIcon,
                          hideWhenInactive: !ey,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ej &&
                  eE.push(
                      (0, t.jsx)(
                          eP,
                          {
                              onClick: Z,
                              tooltipText: Y ? eM.intl.string(eM.t.YqAjXy) : eM.intl.string(eM.t.w4m945),
                              icon: Y ? O._ : R.H,
                              hideWhenInactive: !Y && !ey,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let ev = [];
    (null != ef &&
        x === eR.lp.USER &&
        ev.push((0, t.jsx)(ef, { className: e_.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            ev.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: e_.Z5,
                        children: (0, t.jsx)(V.K, {
                            size: "lg",
                            className: e_.Q6,
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
                    { className: e_.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: e_.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || ev.push((0, t.jsx)(eL, { participantType: x, platform: N, className: e_.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            ev.push((0, t.jsx)("span", { className: a()(e_.Wk, em), children: s }, "title-text")),
        _ &&
            ev.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: eM.intl.string(eM.t.ZEem6O),
                        children: (0, t.jsx)(M.m, {
                            className: e_.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eM.intl.string(eM.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eC = eo ?? ea,
        eb =
            (c && $ !== z.N.CALL_TILE) || l || eI || x !== eR.lp.USER || null == g || null == eC
                ? null
                : (0, t.jsx)(eN.X, { applicationId: eC, hideApplicationName: ex });
    return (0, t.jsxs)("div", {
        className: a()(e_.MU, { [e_.oE]: ex, [e_.Ol]: c }),
        children: [
            (0, t.jsx)("div", {
                className: a()(e_.Ik, { [e_.EX]: n < 195 }),
                children:
                    ec || p === eO.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: e_.h5,
                                  children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(e_.ns, e_.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: e_.h5,
                                          children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: e_.Wk,
                                          children: eM.intl.string(eM.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eA &&
                (0, t.jsxs)("div", {
                    className: a()(e_.Qp, { [e_.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: e_.qV,
                            children: [
                                ev.length > 0 &&
                                    (0, t.jsx)(C.E, {
                                        className: e_.ac,
                                        color: "none",
                                        variant: ex ? "text-sm/normal" : "text-md/normal",
                                        children: ev,
                                    }),
                                eb,
                            ],
                        }),
                        eE.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(e_._v, { [e_.N7]: l }),
                                  style: { marginBottom: eg.value },
                                  children: eE,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ew.displayName = "CallTileOverlay";
let ez = F.$,
    eY = eU;
