(s.d(l, { Ay: () => eH, Yl: () => eB }), s(321073));
var t = s(477900),
    i = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(399513),
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
    T = s(666654),
    y = s(990836),
    j = s(83107),
    N = s(546861),
    f = s(866665),
    E = s(408278),
    g = s(609731),
    S = s(788120),
    v = s(943812),
    C = s(834730),
    b = s(717421),
    O = s(365199),
    R = s(358618),
    V = s(983851),
    M = s(428678),
    k = s(952270),
    _ = s(254138),
    D = s(827343),
    L = s(820284),
    P = s(765671),
    U = s(672979),
    G = s(793574),
    w = s(429913),
    z = s(520698),
    Y = s(164617),
    W = s(66004),
    X = s(958005),
    B = s(384059),
    H = s(556525),
    Q = s(609425),
    F = s(73392),
    J = s(51092),
    K = s(40056),
    q = s(117029),
    Z = s(612258),
    $ = s(551826),
    ee = s(567249),
    el = s(574172),
    es = s(264378),
    et = s(665691),
    ei = s(635885),
    en = s(421768),
    ea = s(209932),
    eo = s(58303),
    ed = s(885386),
    ec = s(461782),
    er = s(614518),
    eu = s(706787),
    ep = s(280450),
    em = s(111162),
    eA = s(360906),
    eh = s(290863),
    ex = s(485296),
    eI = s(977997),
    eT = s(712687),
    ey = s(790381),
    ej = s(266080),
    eN = s(723702),
    ef = s(19575),
    eE = s(141035),
    eg = s(654820),
    eS = s(804980),
    ev = s(272812),
    eC = s(304047),
    eb = s(802867),
    eO = s(83982),
    eR = s(345812),
    eV = s(110234),
    eM = s(652215),
    ek = s(806931),
    e_ = s(31408),
    eD = s(778712),
    eL = s(731854),
    eP = s(105292),
    eU = s(584841);
let eG = [ek.lp.ACTIVITY],
    ew = i.memo((e) => {
        var l, s, n;
        let o,
            d,
            c,
            {
                participant: u,
                popoutType: x,
                onDoubleClick: I,
                onContextMenu: T,
                onClick: y,
                onMouseDown: j,
                onKeyDown: N,
                className: f,
                style: E,
                containerStyle: g,
                channel: S,
                width: v,
                onVideoResize: C,
                inCall: b = !1,
                selected: O = !1,
                noBorder: R = !1,
                noVideoRender: V = !1,
                focused: M = !1,
                blocked: k = !1,
                ignored: _ = !1,
                fit: U = J.$.CONTAIN,
                paused: G = !1,
                pulseSpeakingIndicator: Y = !1,
                forceIdle: X = !1,
                controlsBottom: B,
            } = e,
            Q = i.useContext(ec.vG) || X,
            [F, q] = i.useState(!1),
            ee = ed.Q_.useSetting(),
            el = (0, r.bG)([em.default], () => em.default.isStreamInfoOverlayEnabled),
            [es, ei] = i.useState(!1),
            eh = (0, r.bG)([ep.default], () => ep.default.getId()),
            eT = u.type === ek.lp.ACTIVITY ? null : u.user,
            ey = eT?.id ?? null,
            [ej] = (0, w.A)(u.type === ek.lp.ACTIVITY ? [u.applicationId] : []),
            eN = (0, r.bG)([ea.A], () => null != ey && ea.A.isLocalSoundboardMuted(ey)),
            ef = (0, en.g)("CallTile"),
            eC = (0, r.bG)([eA.Ay], () => null != ey && eA.Ay.isLocalVideoDisabled(ey, (0, z.A)(u.type)), [ey, u.type]),
            eR = (0, r.bG)(
                [eA.Ay],
                () => (null != ey ? eA.Ay.getVideoToggleState(ey, (0, z.A)(u.type)) : eM.bb8.NONE),
                [ey, u.type],
            ),
            ew = eR === eM.bb8.AUTO_PROBING,
            { speaking: ez, ringing: eY, hasVideo: eW } = (0, eV.A)(u, eh),
            eB = (0, r.bG)([ea.A], () => null !== ey && ea.A.isUserPlayingSounds(ey), [ey]),
            eH =
                ((l = eh),
                (s = u),
                (n = S.getGuildId()),
                (o = s.type !== ek.lp.ACTIVITY ? s.user.id : s.applicationId),
                (d = (0, r.cf)([eI.A], () => {
                    let e = eI.A.getVoiceState(n, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, r.cf)(
                    [eA.Ay],
                    () => {
                        let e = (0, z.A)(s.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: eA.Ay.isLocalMute(o, e),
                                  localVideoDisabled: eA.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: eA.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, s.type, o],
                )),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: c.muted,
                    muted: (s.type === ek.lp.USER && s.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (s.type === ek.lp.USER && s.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eQ = u.type === ek.lp.STREAM && ey === eh,
            eF = (0, r.bG)([er.A], () => (u.type === ek.lp.USER && null != ey ? er.A.getEffectForUserId(ey) : null)),
            eJ = (0, r.bG)([eI.A], () => eI.A.getVoicePlatformForChannel(S.id, ey ?? eM.dJq)),
            eK = (0, et.UF)({ userId: ey, channelId: S.id }),
            eq = (0, et.DY)({ streamKey: u.type === ek.lp.STREAM ? u.id : null, channelId: S.id }),
            eZ = i.useMemo(
                () => (u.type === ek.lp.STREAM ? (eq ?? !1) : u.type === ek.lp.USER && (eK ?? !1)),
                [eq, eK, u.type],
            );
        i.useEffect(() => {
            q(M);
        }, [M]);
        let e$ = i.useCallback(() => {
                null != ey && D.default.toggleLocalMute(ey, eL.x.STREAM);
            }, [ey]),
            e0 = i.useCallback(
                (e) => {
                    y?.(u, e);
                },
                [y, u],
            ),
            e1 = i.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            e8 = i.useCallback(
                (e, l, s) => {
                    T?.(u, e, l, s);
                },
                [T, u],
            ),
            e6 = null,
            e7 = null,
            e2 = "";
        switch (u.type) {
            case ek.lp.STREAM:
                ((e6 = (0, t.jsx)(eb.A, {
                    participant: u,
                    selected: O,
                    popoutType: x,
                    width: v,
                    fit: U,
                    onVideoResize: C,
                    paused: G,
                })),
                    (e7 = (0, t.jsx)(eb.D, {
                        participant: u,
                        selected: O,
                        width: v,
                        focused: M,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e2 = eP.intl.formatToPlainString(eP.t.gHPz3Q, { streamerName: u.user.username })));
                break;
            case ek.lp.USER:
                ((e6 = (0, t.jsx)(eO.A, {
                    channel: S,
                    inCall: b,
                    participant: u,
                    popoutType: x,
                    fit: U,
                    onVideoResize: C,
                    paused: G,
                    selected: O,
                    width: v,
                    blocked: k,
                    ignored: _,
                    noVideoRender: V || ew,
                    pulseSpeakingIndicator: Y,
                })),
                    (e7 = (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eO.s, { participant: u, channelId: S.id }),
                            S.isGuildStageVoice() && !V ? (0, t.jsx)(eo.A, { channel: S, userId: u.user.id }) : null,
                        ],
                    })),
                    (e2 = eP.intl.formatToPlainString(eP.t["iC/x/Q"], { username: u.user.username })));
                break;
            case ek.lp.ACTIVITY:
                ((e6 = (0, t.jsx)(eS.Ay, { interactible: M, participant: u, selected: O, channel: S, width: v })),
                    (e2 = eP.intl.formatToPlainString(eP.t.YCvOsO, { activityName: ej?.name })));
                break;
            case ek.lp.HIDDEN_STREAM:
                e6 = (0, t.jsx)(eb.A, {
                    participant: u,
                    selected: O,
                    width: v,
                    fit: U,
                    onVideoResize: C,
                    paused: G,
                    popoutType: x,
                });
        }
        let { ref: e5, width: e9, height: e3 } = (0, P.Ay)(),
            e4 = (0, r.bG)([ex.A], () => (u.type === ek.lp.USER ? ex.A.getVoiceVolume(u.id) : -1 / 0)),
            le = (0, H.v)({
                voiceStatus: eB ? eD.T2.PLAYING_SOUNDBOARD : ez ? eD.T2.SPEAKING : null,
                voiceDb: e4,
                spreadDirection: H.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            ll = (0, ek.Ay)(u) ? p.k : eW ? m.VideoIcon : A.E,
            ls = u.type === ek.lp.STREAM && M;
        return (0, t.jsx)(L.A, {
            section: eM.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(K.Ay, {
                streamKey: u.id,
                enableZoom: ls,
                children: (0, t.jsx)("div", {
                    className: a()(eU.iE, { [eU.DF]: eY }, f),
                    style: g,
                    onMouseEnter: function () {
                        ei(!0);
                    },
                    onMouseLeave: function () {
                        ei(!1);
                    },
                    children: (0, t.jsxs)($.A, {
                        shakeLocation: e_.uD.VOICE_USER,
                        isShaking: ez,
                        className: eU.Vs,
                        children: [
                            (0, t.jsx)(ev.A, {
                                ref: e5,
                                className: a()(eU.Vs, { [eU.E7]: R, [eU.k_]: null == y, [eU.N7]: Q }),
                                noBorder: R,
                                style: E,
                                participantUserId: ey,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e2,
                                    className: eU.lG,
                                    onDoubleClick: e1,
                                    onContextMenu: (e) => e8(e, u.type === ek.lp.STREAM),
                                    onClick: e0,
                                    onMouseDown: j,
                                    onKeyDown: N,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eF && null != ey
                                            ? (0, t.jsx)(eu.A, {
                                                  voiceChannelEffect: eF,
                                                  onComplete: () => (0, er.a)(ey),
                                                  userId: ey,
                                              })
                                            : null,
                                        u.type === ek.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: eU.nl,
                                                  children: (0, t.jsx)(W.A, {
                                                      userId: ey,
                                                      channelId: S.id,
                                                      guildId: S.getGuildId(),
                                                      containerDimensions: { width: e9 ?? 0, height: e3 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e6,
                                        R ? null : (0, t.jsx)("div", { className: eU.hD, children: e7 }),
                                        O
                                            ? (0, t.jsx)("div", {
                                                  className: eU._Q,
                                                  children: (0, t.jsx)(ll, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eU.Dt,
                                                  }),
                                              })
                                            : null,
                                        eG.includes(u.type)
                                            ? null
                                            : (0, t.jsx)(eX, {
                                                  focused: M,
                                                  width: v,
                                                  inCall: b,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eW ?? !1,
                                                  ...eH,
                                                  idle: Q,
                                                  platform: eJ,
                                                  title: (0, eE.A)(S, u),
                                                  blocked: k,
                                                  ignored: _,
                                                  localVideoDisabled: eC,
                                                  videoToggleState: eR,
                                                  hideAudioIcon: eQ,
                                                  onContextMenu: e8,
                                                  onToggleMute: e$,
                                                  participantUserId: ey,
                                                  channel: S,
                                                  secureFramesVerified: eZ,
                                                  isHovered: es,
                                                  popoutType: x,
                                                  paused: G,
                                                  controlsBottom: B,
                                                  streamId: u.type === ek.lp.STREAM ? u.streamId : null,
                                                  soundboardMuted: ef && eN,
                                              }),
                                        b && !R
                                            ? (0, t.jsx)("div", {
                                                  className: a()(eU.PQ, { [eU.pU]: !M && (eB || null != eF) }),
                                                  style: M || eB ? void 0 : le,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            ee && el && es && (0, t.jsx)(eg.A, { currentUserId: eh, participant: u }),
                            (0, t.jsx)(Z.A, { isFiring: F, callTileRef: e5 }),
                        ],
                    }),
                }),
            }),
        });
    });
function ez(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === ek.lp.STREAM)
        return s === ek.J7.XBOX
            ? (0, t.jsx)(ej.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case ek.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case ek.J7.XBOX:
            return (0, t.jsx)(ej.A, { className: i });
        case ek.J7.PLAYSTATION:
            return (0, t.jsx)(ey.A, { className: i });
        case ek.J7.QUEST:
            return (0, t.jsx)(d.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eY(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(eU.V7, { [eU.kl]: i, [eU.N7]: n }),
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
function eW(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, X.A)(l, s), [l, s]),
        d = (0, r.bG)([ee.A], () => ee.A.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            ((0, B.X)(G.A.CALL_TILE_POPOUT, B.O.STAY_ON_TOP, !d), el.setAlwaysOnTop(o, !d));
        }, [o, d]);
    return eN.isPlatformEmbedded && ef.Ay.supportsFeature(eM.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eY, {
              onClick: c,
              tooltipText: d ? eP.intl.string(eP.t.YdyDM9) : eP.intl.string(eP.t.ZVGHwP),
              icon: d ? g.h : S.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
ew.displayName = "CallTile";
let eX = i.memo((e) => {
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
            channel: g,
            platform: S,
            secureFramesVerified: D,
            onContextMenu: L,
            muted: P,
            deafened: w,
            localMuted: W,
            serverMuted: H,
            serverDeafened: J,
            hasVideo: K,
            hideAudioIcon: Z,
            onToggleMute: $,
            popoutType: ee,
            paused: et,
            controlsBottom: en,
            streamId: ea,
            inCall: eo,
            soundboardMuted: ed,
        } = e,
        ec = (0, r.bG)([ep.default], () => ep.default.getId()),
        er = (0, r.bG)([eh.A], () =>
            x === ek.lp.USER && null != E ? eh.A.getActivities(E).find(U.A)?.application_id : null,
        ),
        eu = eo && x === ek.lp.STREAM && null != E && null != ec && E !== ec,
        em = (0, ei.V)(E),
        ex = (0, r.bG)([eA.Ay], () => null != E && eA.Ay.isLocalVideoAutoDisabled(E, (0, z.A)(x)), [E, x]),
        eI = (0, Q.A)({ userId: E, guildId: g.getGuildId() }),
        ey = (0, F.a)({ displayNameStyles: eI }),
        ej = (0, eR.Yb)(n),
        eN = (0, eR.VE)(n),
        ef = (0, eR.DO)(n),
        [eE, eg] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== eT.A.isOpen() && ((e = eT.A.isOpen()) || eg(!1));
        }
        return (eT.A.addChangeListener(l), () => eT.A.removeChangeListener(l));
    }, []);
    let eS = !Z && x === ek.lp.STREAM && K && (!eN || W),
        ev = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n, soundboardMuted: a } = e;
            return t ? I.T : s ? T.O : i ? y.c : l ? T.O : n ? j.z : a ? N.N : null;
        })({ localMuted: W, serverMuted: H, serverDeafened: J, deafened: w, muted: P, soundboardMuted: ed }),
        eb = (0, b.z)({ value: null != en ? en : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eO = [];
    (d && x === ek.lp.STREAM && eO.push((0, t.jsx)(q.A, { streamId: ea, paused: et }, "zoom-controls")),
        d
            ? ee === Y.N.CALL_TILE &&
              (eO.push(
                  (0, t.jsx)(eW, { channelId: g.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eO.push(
                  (0, t.jsx)(
                      eY,
                      {
                          onClick: () => {
                              ((0, B.X)(G.A.CALL_TILE_POPOUT, B.O.POPOUT_RETURN), el.close((0, X.A)(g.id, h)));
                          },
                          tooltipText: eP.intl.string(eP.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ef ||
                  x !== ek.lp.USER ||
                  null == E ||
                  E === ec ||
                  null == em ||
                  eO.push(
                      (0, t.jsx)(
                          eC.M,
                          { userId: E, channel: g, applicationId: em, hideWhenInactive: !eE, idle: l },
                          "gift",
                      ),
                  ),
              eO.push(
                  (0, t.jsx)(
                      eY,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eg(!0), L(e, !0, ek.GK.THREE_DOT));
                          },
                          tooltipText: eP.intl.string(eP.t["+1H47t"]),
                          icon: O.MoreHorizontalIcon,
                          hideWhenInactive: !eE,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eS &&
                  eO.push(
                      (0, t.jsx)(
                          eY,
                          {
                              onClick: $,
                              tooltipText: W ? eP.intl.string(eP.t.YqAjXy) : eP.intl.string(eP.t.w4m945),
                              icon: W ? R._ : V.H,
                              hideWhenInactive: !W && !eE,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eV = [];
    (null != ev &&
        x === ek.lp.USER &&
        eV.push((0, t.jsx)(ev, { className: eU.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eV.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: eU.Z5,
                        children: (0, t.jsx)(M.K, {
                            size: "lg",
                            className: eU.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eV.push(
                (0, t.jsx)(
                    "div",
                    { className: eU.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: eU.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eV.push((0, t.jsx)(ez, { participantType: x, platform: S, className: eU.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eV.push((0, t.jsx)("span", { className: a()(eU.Wk, ey), children: s }, "title-text")),
        D &&
            eV.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: eP.intl.string(eP.t.ZEem6O),
                        children: (0, t.jsx)(_.m, {
                            className: eU.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eP.intl.string(eP.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let e_ = em ?? er,
        eD =
            (d && ee !== Y.N.CALL_TILE) || l || ef || x !== ek.lp.USER || null == E || null == e_
                ? null
                : (0, t.jsx)(eC.X, { applicationId: e_, hideApplicationName: eN });
    return (0, t.jsxs)("div", {
        className: a()(eU.MU, { [eU.oE]: eN, [eU.Ol]: d }),
        children: [
            (0, t.jsx)("div", {
                className: a()(eU.Ik, { [eU.EX]: n < 195 }),
                children:
                    ex || p === eM.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: eU.h5,
                                  children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(eU.ns, eU.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eU.h5,
                                          children: (0, t.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: eU.Wk,
                                          children: eP.intl.string(eP.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ej &&
                (0, t.jsxs)("div", {
                    className: a()(eU.Qp, { [eU.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: eU.qV,
                            children: [
                                eV.length > 0 &&
                                    (0, t.jsx)(C.E, {
                                        className: eU.ac,
                                        color: "none",
                                        variant: eN ? "text-sm/normal" : "text-md/normal",
                                        children: eV,
                                    }),
                                eu && null != E ? (0, t.jsx)(es.A, { streamerId: E, idle: l }) : null,
                                eD,
                            ],
                        }),
                        eO.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(eU._v, { [eU.N7]: l }),
                                  style: { marginBottom: eb.value },
                                  children: eO,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eX.displayName = "CallTileOverlay";
let eB = J.$,
    eH = ew;
