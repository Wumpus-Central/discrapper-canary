(s.d(l, { Ay: () => eW, Yl: () => eY }), s(321073));
var t = s(477900),
    i = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(941143),
    d = s(738678),
    c = s(12470),
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
    S = s(943812),
    v = s(834730),
    C = s(717421),
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
    el = s(264378),
    es = s(665691),
    et = s(635885),
    ei = s(209932),
    en = s(58303),
    ea = s(885386),
    eo = s(461782),
    ed = s(614518),
    ec = s(706787),
    er = s(280450),
    eu = s(111162),
    ep = s(360906),
    em = s(290863),
    eA = s(485296),
    eh = s(977997),
    ex = s(712687),
    eI = s(790381),
    ey = s(266080),
    eT = s(723702),
    ej = s(19575),
    ef = s(141035),
    eg = s(654820),
    eE = s(804980),
    eN = s(272812),
    eS = s(304047),
    ev = s(802867),
    eC = s(83982),
    eb = s(345812),
    eO = s(110234),
    eR = s(652215),
    eV = s(806931),
    ek = s(31408),
    eM = s(731854),
    e_ = s(105292),
    eD = s(584841);
let eU = [eV.lp.ACTIVITY],
    eL = i.memo((e) => {
        var l, s, n;
        let o,
            d,
            c,
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
                channel: S,
                width: v,
                onVideoResize: C,
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
            Q = i.useContext(eo.vG) || X,
            [K, $] = i.useState(!1),
            ee = ea.Q_.useSetting(),
            el = (0, r.bG)([eu.default], () => eu.default.isStreamInfoOverlayEnabled),
            [et, em] = i.useState(!1),
            ex = (0, r.bG)([er.default], () => er.default.getId()),
            eI = u.type === eV.lp.ACTIVITY ? null : u.user,
            ey = eI?.id ?? null,
            [eT] = (0, G.A)(u.type === eV.lp.ACTIVITY ? [u.applicationId] : []),
            ej = (0, r.bG)([ep.Ay], () => null != ey && ep.Ay.isLocalVideoDisabled(ey, (0, w.A)(u.type)), [ey, u.type]),
            eS = (0, r.bG)(
                [ep.Ay],
                () => (null != ey ? ep.Ay.getVideoToggleState(ey, (0, w.A)(u.type)) : eR.bb8.NONE),
                [ey, u.type],
            ),
            eb = eS === eR.bb8.AUTO_PROBING,
            { speaking: eL, ringing: eP, hasVideo: eG } = (0, eO.A)(u, ex),
            ew = (0, r.bG)([ei.A], () => null !== ey && ei.A.isUserPlayingSounds(ey), [ey]),
            eY =
                ((l = ex),
                (s = u),
                (n = S.getGuildId()),
                (o = s.type !== eV.lp.ACTIVITY ? s.user.id : s.applicationId),
                (d = (0, r.cf)([eh.A], () => {
                    let e = eh.A.getVoiceState(n, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, r.cf)(
                    [ep.Ay],
                    () => {
                        let e = (0, w.A)(s.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: ep.Ay.isLocalMute(o, e),
                                  localVideoDisabled: ep.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: ep.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, s.type, o],
                )),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: c.muted,
                    muted: (s.type === eV.lp.USER && s.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (s.type === eV.lp.USER && s.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eW = u.type === eV.lp.STREAM && ey === ex,
            eX = (0, r.bG)([ed.A], () => (u.type === eV.lp.USER && null != ey ? ed.A.getEffectForUserId(ey) : null)),
            eH = (0, r.bG)([eh.A], () => eh.A.getVoicePlatformForChannel(S.id, ey ?? eR.dJq)),
            eB = (0, es.UF)({ userId: ey, channelId: S.id }),
            eQ = (0, es.DY)({ streamKey: u.type === eV.lp.STREAM ? u.id : null, channelId: S.id }),
            eF = i.useMemo(
                () => (u.type === eV.lp.STREAM ? (eQ ?? !1) : u.type === eV.lp.USER && (eB ?? !1)),
                [eQ, eB, u.type],
            );
        i.useEffect(() => {
            $(k);
        }, [k]);
        let eJ = i.useCallback(() => {
                null != ey && _.default.toggleLocalMute(ey, eM.x.STREAM);
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
            case eV.lp.STREAM:
                ((e$ = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: v,
                    fit: P,
                    onVideoResize: C,
                    paused: z,
                })),
                    (e0 = (0, t.jsx)(ev.D, {
                        participant: u,
                        selected: O,
                        width: v,
                        focused: k,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e1 = e_.intl.formatToPlainString(e_.t.gHPz3Q, { streamerName: u.user.username })));
                break;
            case eV.lp.USER:
                ((e$ = (0, t.jsx)(eC.A, {
                    channel: S,
                    inCall: b,
                    participant: u,
                    popoutType: x,
                    fit: P,
                    onVideoResize: C,
                    paused: z,
                    selected: O,
                    width: v,
                    blocked: M,
                    ignored: L,
                    noVideoRender: V || eb,
                    pulseSpeakingIndicator: W,
                })),
                    (e0 = (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eC.s, { participant: u, channelId: S.id }),
                            S.isGuildStageVoice() && !V ? (0, t.jsx)(en.A, { channel: S, userId: u.user.id }) : null,
                        ],
                    })),
                    (e1 = e_.intl.formatToPlainString(e_.t["iC/x/Q"], { username: u.user.username })));
                break;
            case eV.lp.ACTIVITY:
                ((e$ = (0, t.jsx)(eE.Ay, { interactible: k, participant: u, selected: O, channel: S, width: v })),
                    (e1 = e_.intl.formatToPlainString(e_.t.YCvOsO, { activityName: eT?.name })));
                break;
            case eV.lp.HIDDEN_STREAM:
                e$ = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    width: v,
                    fit: P,
                    onVideoResize: C,
                    paused: z,
                    popoutType: x,
                });
        }
        let { ref: e8, width: e6, height: e7 } = (0, U.Ay)(),
            e2 = (0, r.bG)([eA.A], () => (u.type === eV.lp.USER ? eA.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, H.v)({ isSpeaking: eL, voiceDb: e2, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e9 = (0, eV.Ay)(u) ? p.k : eG ? m.VideoIcon : A.E,
            e4 = u.type === eV.lp.STREAM && k;
        return (0, t.jsx)(D.A, {
            section: eR.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(J.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, t.jsx)("div", {
                    className: a()(eD.iE, { [eD.DF]: eP }, g),
                    style: N,
                    onMouseEnter: function () {
                        em(!0);
                    },
                    onMouseLeave: function () {
                        em(!1);
                    },
                    children: (0, t.jsxs)(Z.A, {
                        shakeLocation: ek.uD.VOICE_USER,
                        isShaking: eL,
                        className: eD.Vs,
                        children: [
                            (0, t.jsx)(eN.A, {
                                ref: e8,
                                className: a()(eD.Vs, { [eD.E7]: R, [eD.k_]: null == T, [eD.N7]: Q }),
                                noBorder: R,
                                style: E,
                                participantUserId: ey,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e1,
                                    className: eD.lG,
                                    onDoubleClick: eq,
                                    onContextMenu: (e) => eZ(e, u.type === eV.lp.STREAM),
                                    onClick: eK,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eX && null != ey
                                            ? (0, t.jsx)(ec.A, {
                                                  voiceChannelEffect: eX,
                                                  onComplete: () => (0, ed.a)(ey),
                                                  userId: ey,
                                              })
                                            : null,
                                        u.type === eV.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: eD.nl,
                                                  children: (0, t.jsx)(Y.A, {
                                                      userId: ey,
                                                      channelId: S.id,
                                                      guildId: S.getGuildId(),
                                                      containerDimensions: { width: e6 ?? 0, height: e7 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e$,
                                        R ? null : (0, t.jsx)("div", { className: eD.hD, children: e0 }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: eD._Q,
                                                  children: (0, t.jsx)(e9, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eD.Dt,
                                                  }),
                                              })
                                            : null,
                                        eU.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(ez, {
                                                  focused: k,
                                                  width: v,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eG ?? !1,
                                                  ...eY,
                                                  idle: Q,
                                                  platform: eH,
                                                  title: (0, ef.A)(S, u),
                                                  blocked: M,
                                                  ignored: L,
                                                  localVideoDisabled: ej,
                                                  videoToggleState: eS,
                                                  hideAudioIcon: eW,
                                                  onContextMenu: eZ,
                                                  onToggleMute: eJ,
                                                  participantUserId: ey,
                                                  channel: S,
                                                  secureFramesVerified: eF,
                                                  isHovered: et,
                                                  popoutType: x,
                                                  paused: z,
                                                  controlsBottom: B,
                                                  streamId: u.type === eV.lp.STREAM ? u.streamId : null,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(eD.PQ, { [eD.pU]: !k && (ew || null != eX) }),
                                                  style: k || ew ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            ee && el && et && (0, t.jsx)(eg.A, { currentUserId: ex, participant: u }),
                            (0, t.jsx)(q.A, { isFiring: K, callTileRef: e8 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eP(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === eV.lp.STREAM)
        return s === eV.J7.XBOX
            ? (0, t.jsx)(ey.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case eV.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case eV.J7.XBOX:
            return (0, t.jsx)(ey.A, { className: i });
        case eV.J7.PLAYSTATION:
            return (0, t.jsx)(eI.A, { className: i });
        case eV.J7.QUEST:
            return (0, t.jsx)(d.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eG(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(eD.V7, { [eD.kl]: i, [eD.N7]: n }),
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
function ew(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, W.A)(l, s), [l, s]),
        d = (0, r.bG)([$.A], () => $.A.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.STAY_ON_TOP, !d), ee.setAlwaysOnTop(o, !d));
        }, [o, d]);
    return eT.isPlatformEmbedded && ej.Ay.supportsFeature(eR.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eG, {
              onClick: c,
              tooltipText: d ? e_.intl.string(e_.t.YdyDM9) : e_.intl.string(e_.t.ZVGHwP),
              icon: d ? E.h : N.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eL.displayName = "CallTile";
let ez = i.memo((e) => {
    let {
            idle: l,
            title: s,
            width: n,
            focused: d,
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
            paused: es,
            controlsBottom: ei,
            streamId: en,
            inCall: ea,
        } = e,
        eo = (0, r.bG)([er.default], () => er.default.getId()),
        ed = (0, r.bG)([em.A], () =>
            x === eV.lp.USER && null != g ? em.A.getActivities(g).find(L.A)?.application_id : null,
        ),
        ec = ea && x === eV.lp.STREAM && null != g && null != eo && g !== eo,
        eu = (0, et.V)(g),
        eA = (0, r.bG)([ep.Ay], () => null != g && ep.Ay.isLocalVideoAutoDisabled(g, (0, w.A)(x)), [g, x]),
        eh = (0, B.A)({ userId: g, guildId: E.getGuildId() }),
        eI = (0, Q.a)({ displayNameStyles: eh }),
        ey = (0, eb.Yb)(n),
        eT = (0, eb.VE)(n),
        ej = (0, eb.DO)(n),
        [ef, eg] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== ex.A.isOpen() && ((e = ex.A.isOpen()) || eg(!1));
        }
        return (ex.A.addChangeListener(l), () => ex.A.removeChangeListener(l));
    }, []);
    let eE = !q && x === eV.lp.STREAM && J && (!eT || Y),
        eN = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n } = e;
            return t ? I.T : s ? y.O : i ? T.c : l ? y.O : n ? j.z : null;
        })({ localMuted: Y, serverMuted: H, serverDeafened: F, deafened: G, muted: U }),
        ev = (0, C.z)({ value: null != ei ? ei : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eC = [];
    (d && x === eV.lp.STREAM && eC.push((0, t.jsx)(K.A, { streamId: en, paused: es }, "zoom-controls")),
        d
            ? $ === z.N.CALL_TILE &&
              (eC.push(
                  (0, t.jsx)(ew, { channelId: E.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eC.push(
                  (0, t.jsx)(
                      eG,
                      {
                          onClick: () => {
                              ((0, X.X)(P.A.CALL_TILE_POPOUT, X.O.POPOUT_RETURN), ee.close((0, W.A)(E.id, h)));
                          },
                          tooltipText: e_.intl.string(e_.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ej ||
                  x !== eV.lp.USER ||
                  null == g ||
                  g === eo ||
                  null == eu ||
                  eC.push(
                      (0, t.jsx)(
                          eS.M,
                          { userId: g, channel: E, applicationId: eu, hideWhenInactive: !ef, idle: l },
                          "gift",
                      ),
                  ),
              eC.push(
                  (0, t.jsx)(
                      eG,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eg(!0), D(e, !0, eV.GK.THREE_DOT));
                          },
                          tooltipText: e_.intl.string(e_.t["+1H47t"]),
                          icon: b.MoreHorizontalIcon,
                          hideWhenInactive: !ef,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eE &&
                  eC.push(
                      (0, t.jsx)(
                          eG,
                          {
                              onClick: Z,
                              tooltipText: Y ? e_.intl.string(e_.t.YqAjXy) : e_.intl.string(e_.t.w4m945),
                              icon: Y ? O._ : R.H,
                              hideWhenInactive: !Y && !ef,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eO = [];
    (null != eN &&
        x === eV.lp.USER &&
        eO.push((0, t.jsx)(eN, { className: eD.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eO.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: eD.Z5,
                        children: (0, t.jsx)(V.K, {
                            size: "lg",
                            className: eD.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eO.push(
                (0, t.jsx)(
                    "div",
                    { className: eD.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: eD.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, t.jsx)(eP, { participantType: x, platform: N, className: eD.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eO.push((0, t.jsx)("span", { className: a()(eD.Wk, eI), children: s }, "title-text")),
        _ &&
            eO.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: e_.intl.string(e_.t.ZEem6O),
                        children: (0, t.jsx)(M.m, {
                            className: eD.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": e_.intl.string(e_.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let ek = eu ?? ed,
        eM =
            (d && $ !== z.N.CALL_TILE) || l || ej || x !== eV.lp.USER || null == g || null == ek
                ? null
                : (0, t.jsx)(eS.X, { applicationId: ek, hideApplicationName: eT });
    return (0, t.jsxs)("div", {
        className: a()(eD.MU, { [eD.oE]: eT, [eD.Ol]: d }),
        children: [
            (0, t.jsx)("div", {
                className: a()(eD.Ik, { [eD.EX]: n < 195 }),
                children:
                    eA || p === eR.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: eD.h5,
                                  children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(eD.ns, eD.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eD.h5,
                                          children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(v.E, {
                                          variant: "text-sm/normal",
                                          className: eD.Wk,
                                          children: e_.intl.string(e_.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ey &&
                (0, t.jsxs)("div", {
                    className: a()(eD.Qp, { [eD.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: eD.qV,
                            children: [
                                eO.length > 0 &&
                                    (0, t.jsx)(v.E, {
                                        className: eD.ac,
                                        color: "none",
                                        variant: eT ? "text-sm/normal" : "text-md/normal",
                                        children: eO,
                                    }),
                                ec && null != g ? (0, t.jsx)(el.A, { streamerId: g, idle: l }) : null,
                                eM,
                            ],
                        }),
                        eC.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(eD._v, { [eD.N7]: l }),
                                  style: { marginBottom: ev.value },
                                  children: eC,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ez.displayName = "CallTileOverlay";
let eY = F.$,
    eW = eL;
