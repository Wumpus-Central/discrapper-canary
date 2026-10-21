(s.d(l, { Ay: () => eX, Yl: () => eW }), s(321073));
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
    E = s(408278),
    N = s(609731),
    g = s(788120),
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
    P = s(765671),
    U = s(672979),
    L = s(793574),
    G = s(429913),
    w = s(520698),
    z = s(164617),
    Y = s(66004),
    W = s(958005),
    X = s(384059),
    B = s(556525),
    H = s(609425),
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
    eE = s(654820),
    eN = s(804980),
    eg = s(272812),
    eS = s(304047),
    ev = s(802867),
    eC = s(83982),
    eb = s(345812),
    eO = s(110234),
    eR = s(652215),
    eV = s(806931),
    ek = s(31408),
    eM = s(778712),
    e_ = s(731854),
    eD = s(105292),
    eP = s(584841);
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
                className: E,
                style: N,
                containerStyle: g,
                channel: S,
                width: v,
                onVideoResize: C,
                inCall: b = !1,
                selected: O = !1,
                noBorder: R = !1,
                noVideoRender: V = !1,
                focused: k = !1,
                blocked: M = !1,
                ignored: U = !1,
                fit: L = F.$.CONTAIN,
                paused: z = !1,
                pulseSpeakingIndicator: W = !1,
                forceIdle: X = !1,
                controlsBottom: H,
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
            { speaking: eL, ringing: eG, hasVideo: ew } = (0, eO.A)(u, ex),
            ez = (0, r.bG)([ei.A], () => null !== ey && ei.A.isUserPlayingSounds(ey), [ey]),
            eW =
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
            eX = u.type === eV.lp.STREAM && ey === ex,
            eB = (0, r.bG)([ed.A], () => (u.type === eV.lp.USER && null != ey ? ed.A.getEffectForUserId(ey) : null)),
            eH = (0, r.bG)([eh.A], () => eh.A.getVoicePlatformForChannel(S.id, ey ?? eR.dJq)),
            eQ = (0, es.UF)({ userId: ey, channelId: S.id }),
            eF = (0, es.DY)({ streamKey: u.type === eV.lp.STREAM ? u.id : null, channelId: S.id }),
            eJ = i.useMemo(
                () => (u.type === eV.lp.STREAM ? (eF ?? !1) : u.type === eV.lp.USER && (eQ ?? !1)),
                [eF, eQ, u.type],
            );
        i.useEffect(() => {
            $(k);
        }, [k]);
        let eK = i.useCallback(() => {
                null != ey && _.default.toggleLocalMute(ey, e_.x.STREAM);
            }, [ey]),
            eq = i.useCallback(
                (e) => {
                    T?.(u, e);
                },
                [T, u],
            ),
            eZ = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            e$ = i.useCallback(
                (e, l, s) => {
                    y?.(u, e, l, s);
                },
                [y, u],
            ),
            e0 = null,
            e1 = null,
            e8 = "";
        switch (u.type) {
            case eV.lp.STREAM:
                ((e0 = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: v,
                    fit: L,
                    onVideoResize: C,
                    paused: z,
                })),
                    (e1 = (0, t.jsx)(ev.D, {
                        participant: u,
                        selected: O,
                        width: v,
                        focused: k,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e8 = eD.intl.formatToPlainString(eD.t.gHPz3Q, { streamerName: u.user.username })));
                break;
            case eV.lp.USER:
                ((e0 = (0, t.jsx)(eC.A, {
                    channel: S,
                    inCall: b,
                    participant: u,
                    popoutType: x,
                    fit: L,
                    onVideoResize: C,
                    paused: z,
                    selected: O,
                    width: v,
                    blocked: M,
                    ignored: U,
                    noVideoRender: V || eb,
                    pulseSpeakingIndicator: W,
                })),
                    (e1 = (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eC.s, { participant: u, channelId: S.id }),
                            S.isGuildStageVoice() && !V ? (0, t.jsx)(en.A, { channel: S, userId: u.user.id }) : null,
                        ],
                    })),
                    (e8 = eD.intl.formatToPlainString(eD.t["iC/x/Q"], { username: u.user.username })));
                break;
            case eV.lp.ACTIVITY:
                ((e0 = (0, t.jsx)(eN.Ay, { interactible: k, participant: u, selected: O, channel: S, width: v })),
                    (e8 = eD.intl.formatToPlainString(eD.t.YCvOsO, { activityName: eT?.name })));
                break;
            case eV.lp.HIDDEN_STREAM:
                e0 = (0, t.jsx)(ev.A, {
                    participant: u,
                    selected: O,
                    width: v,
                    fit: L,
                    onVideoResize: C,
                    paused: z,
                    popoutType: x,
                });
        }
        let { ref: e7, width: e2, height: e6 } = (0, P.Ay)(),
            e5 = (0, r.bG)([eA.A], () => (u.type === eV.lp.USER ? eA.A.getVoiceVolume(u.id) : -1 / 0)),
            e9 = (0, B.v)({
                voiceStatus: ez ? eM.T2.PLAYING_SOUNDBOARD : eL ? eM.T2.SPEAKING : null,
                voiceDb: e5,
                spreadDirection: B.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            e4 = (0, eV.Ay)(u) ? p.k : ew ? m.VideoIcon : A.E,
            e3 = u.type === eV.lp.STREAM && k;
        return (0, t.jsx)(D.A, {
            section: eR.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(J.Ay, {
                streamKey: u.id,
                enableZoom: e3,
                children: (0, t.jsx)("div", {
                    className: a()(eP.iE, { [eP.DF]: eG }, E),
                    style: g,
                    onMouseEnter: function () {
                        em(!0);
                    },
                    onMouseLeave: function () {
                        em(!1);
                    },
                    children: (0, t.jsxs)(Z.A, {
                        shakeLocation: ek.uD.VOICE_USER,
                        isShaking: eL,
                        className: eP.Vs,
                        children: [
                            (0, t.jsx)(eg.A, {
                                ref: e7,
                                className: a()(eP.Vs, { [eP.E7]: R, [eP.k_]: null == T, [eP.N7]: Q }),
                                noBorder: R,
                                style: N,
                                participantUserId: ey,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e8,
                                    className: eP.lG,
                                    onDoubleClick: eZ,
                                    onContextMenu: (e) => e$(e, u.type === eV.lp.STREAM),
                                    onClick: eq,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eB && null != ey
                                            ? (0, t.jsx)(ec.A, {
                                                  voiceChannelEffect: eB,
                                                  onComplete: () => (0, ed.a)(ey),
                                                  userId: ey,
                                              })
                                            : null,
                                        u.type === eV.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: eP.nl,
                                                  children: (0, t.jsx)(Y.A, {
                                                      userId: ey,
                                                      channelId: S.id,
                                                      guildId: S.getGuildId(),
                                                      containerDimensions: { width: e2 ?? 0, height: e6 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e0,
                                        R ? null : (0, t.jsx)("div", { className: eP.hD, children: e1 }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: eP._Q,
                                                  children: (0, t.jsx)(e4, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eP.Dt,
                                                  }),
                                              })
                                            : null,
                                        eU.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(eY, {
                                                  focused: k,
                                                  width: v,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: ew ?? !1,
                                                  ...eW,
                                                  idle: Q,
                                                  platform: eH,
                                                  title: (0, ef.A)(S, u),
                                                  blocked: M,
                                                  ignored: U,
                                                  localVideoDisabled: ej,
                                                  videoToggleState: eS,
                                                  hideAudioIcon: eX,
                                                  onContextMenu: e$,
                                                  onToggleMute: eK,
                                                  participantUserId: ey,
                                                  channel: S,
                                                  secureFramesVerified: eJ,
                                                  isHovered: et,
                                                  popoutType: x,
                                                  paused: z,
                                                  controlsBottom: H,
                                                  streamId: u.type === eV.lp.STREAM ? u.streamId : null,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(eP.PQ, { [eP.pU]: !k && (ez || null != eB) }),
                                                  style: k || ez ? void 0 : e9,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            ee && el && et && (0, t.jsx)(eE.A, { currentUserId: ex, participant: u }),
                            (0, t.jsx)(q.A, { isFiring: K, callTileRef: e7 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eG(e) {
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
function ew(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(eP.V7, { [eP.kl]: i, [eP.N7]: n }),
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
function ez(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, W.A)(l, s), [l, s]),
        d = (0, r.bG)([$.A], () => $.A.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            ((0, X.X)(L.A.CALL_TILE_POPOUT, X.O.STAY_ON_TOP, !d), ee.setAlwaysOnTop(o, !d));
        }, [o, d]);
    return eT.isPlatformEmbedded && ej.Ay.supportsFeature(eR.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(ew, {
              onClick: c,
              tooltipText: d ? eD.intl.string(eD.t.YdyDM9) : eD.intl.string(eD.t.ZVGHwP),
              icon: d ? N.h : g.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
eL.displayName = "CallTile";
let eY = i.memo((e) => {
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
            participantUserId: E,
            channel: N,
            platform: g,
            secureFramesVerified: _,
            onContextMenu: D,
            muted: P,
            deafened: G,
            localMuted: Y,
            serverMuted: B,
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
            x === eV.lp.USER && null != E ? em.A.getActivities(E).find(U.A)?.application_id : null,
        ),
        ec = ea && x === eV.lp.STREAM && null != E && null != eo && E !== eo,
        eu = (0, et.V)(E),
        eA = (0, r.bG)([ep.Ay], () => null != E && ep.Ay.isLocalVideoAutoDisabled(E, (0, w.A)(x)), [E, x]),
        eh = (0, H.A)({ userId: E, guildId: N.getGuildId() }),
        eI = (0, Q.a)({ displayNameStyles: eh }),
        ey = (0, eb.Yb)(n),
        eT = (0, eb.VE)(n),
        ej = (0, eb.DO)(n),
        [ef, eE] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== ex.A.isOpen() && ((e = ex.A.isOpen()) || eE(!1));
        }
        return (ex.A.addChangeListener(l), () => ex.A.removeChangeListener(l));
    }, []);
    let eN = !q && x === eV.lp.STREAM && J && (!eT || Y),
        eg = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n } = e;
            return t ? I.T : s ? y.O : i ? T.c : l ? y.O : n ? j.z : null;
        })({ localMuted: Y, serverMuted: B, serverDeafened: F, deafened: G, muted: P }),
        ev = (0, C.z)({ value: null != ei ? ei : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eC = [];
    (d && x === eV.lp.STREAM && eC.push((0, t.jsx)(K.A, { streamId: en, paused: es }, "zoom-controls")),
        d
            ? $ === z.N.CALL_TILE &&
              (eC.push(
                  (0, t.jsx)(ez, { channelId: N.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eC.push(
                  (0, t.jsx)(
                      ew,
                      {
                          onClick: () => {
                              ((0, X.X)(L.A.CALL_TILE_POPOUT, X.O.POPOUT_RETURN), ee.close((0, W.A)(N.id, h)));
                          },
                          tooltipText: eD.intl.string(eD.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ej ||
                  x !== eV.lp.USER ||
                  null == E ||
                  E === eo ||
                  null == eu ||
                  eC.push(
                      (0, t.jsx)(
                          eS.M,
                          { userId: E, channel: N, applicationId: eu, hideWhenInactive: !ef, idle: l },
                          "gift",
                      ),
                  ),
              eC.push(
                  (0, t.jsx)(
                      ew,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eE(!0), D(e, !0, eV.GK.THREE_DOT));
                          },
                          tooltipText: eD.intl.string(eD.t["+1H47t"]),
                          icon: b.MoreHorizontalIcon,
                          hideWhenInactive: !ef,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eN &&
                  eC.push(
                      (0, t.jsx)(
                          ew,
                          {
                              onClick: Z,
                              tooltipText: Y ? eD.intl.string(eD.t.YqAjXy) : eD.intl.string(eD.t.w4m945),
                              icon: Y ? O._ : R.H,
                              hideWhenInactive: !Y && !ef,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eO = [];
    (null != eg &&
        x === eV.lp.USER &&
        eO.push((0, t.jsx)(eg, { className: eP.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eO.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: eP.Z5,
                        children: (0, t.jsx)(V.K, {
                            size: "lg",
                            className: eP.Q6,
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
                    { className: eP.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: eP.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, t.jsx)(eG, { participantType: x, platform: g, className: eP.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eO.push((0, t.jsx)("span", { className: a()(eP.Wk, eI), children: s }, "title-text")),
        _ &&
            eO.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: eD.intl.string(eD.t.ZEem6O),
                        children: (0, t.jsx)(M.m, {
                            className: eP.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eD.intl.string(eD.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let ek = eu ?? ed,
        eM =
            (d && $ !== z.N.CALL_TILE) || l || ej || x !== eV.lp.USER || null == E || null == ek
                ? null
                : (0, t.jsx)(eS.X, { applicationId: ek, hideApplicationName: eT });
    return (0, t.jsxs)("div", {
        className: a()(eP.MU, { [eP.oE]: eT, [eP.Ol]: d }),
        children: [
            (0, t.jsx)("div", {
                className: a()(eP.Ik, { [eP.EX]: n < 195 }),
                children:
                    eA || p === eR.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: eP.h5,
                                  children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(eP.ns, eP.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eP.h5,
                                          children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(v.E, {
                                          variant: "text-sm/normal",
                                          className: eP.Wk,
                                          children: eD.intl.string(eD.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ey &&
                (0, t.jsxs)("div", {
                    className: a()(eP.Qp, { [eP.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: eP.qV,
                            children: [
                                eO.length > 0 &&
                                    (0, t.jsx)(v.E, {
                                        className: eP.ac,
                                        color: "none",
                                        variant: eT ? "text-sm/normal" : "text-md/normal",
                                        children: eO,
                                    }),
                                ec && null != E ? (0, t.jsx)(el.A, { streamerId: E, idle: l }) : null,
                                eM,
                            ],
                        }),
                        eC.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(eP._v, { [eP.N7]: l }),
                                  style: { marginBottom: ev.value },
                                  children: eC,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eY.displayName = "CallTileOverlay";
let eW = F.$,
    eX = eL;
