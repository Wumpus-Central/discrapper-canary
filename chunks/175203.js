(s.d(l, { Ay: () => eQ, Yl: () => eH }), s(321073));
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
    T = s(666654),
    y = s(990836),
    j = s(83107),
    N = s(546861),
    f = s(866665),
    g = s(408278),
    E = s(609731),
    C = s(788120),
    S = s(943812),
    v = s(834730),
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
    ed = s(253932),
    ec = s(461782),
    er = s(614518),
    eu = s(706787),
    ep = s(280450),
    em = s(111162),
    eA = s(999926),
    eh = s(290863),
    ex = s(485296),
    eI = s(977997),
    eT = s(712687),
    ey = s(790381),
    ej = s(266080),
    eN = s(723702),
    ef = s(19575),
    eg = s(141035),
    eE = s(541157),
    eC = s(654820),
    eS = s(804980),
    ev = s(272812),
    eb = s(304047),
    eO = s(802867),
    eR = s(83982),
    eV = s(345812),
    eM = s(110234),
    ek = s(652215),
    e_ = s(806931),
    eD = s(31408),
    eL = s(778712),
    eP = s(731854),
    eU = s(105292),
    eG = s(584841);
let ew = [e_.lp.ACTIVITY],
    ez = i.memo((e) => {
        var l, s, n;
        let o,
            d,
            c,
            u,
            {
                participant: x,
                popoutType: I,
                onDoubleClick: T,
                onContextMenu: y,
                onClick: j,
                onMouseDown: N,
                onKeyDown: f,
                className: g,
                style: E,
                containerStyle: C,
                channel: S,
                width: v,
                onVideoResize: b,
                inCall: O = !1,
                selected: R = !1,
                noBorder: V = !1,
                noVideoRender: M = !1,
                focused: k = !1,
                blocked: _ = !1,
                ignored: U = !1,
                fit: G = J.$.CONTAIN,
                paused: Y = !1,
                pulseSpeakingIndicator: X = !1,
                forceIdle: B = !1,
                controlsBottom: Q,
            } = e,
            F = i.useContext(ec.vG) || B,
            [q, ee] = i.useState(!1),
            el = ed.Q_.useSetting(),
            es = (0, r.bG)([em.default], () => em.default.isStreamInfoOverlayEnabled),
            [ei, eh] = i.useState(!1),
            eT = (0, r.bG)([ep.default], () => ep.default.getId()),
            ey = x.type === e_.lp.ACTIVITY ? null : x.user,
            ej = ey?.id ?? null,
            [eN] = (0, w.A)(x.type === e_.lp.ACTIVITY ? [x.applicationId] : []),
            ef = (0, r.bG)([ea.A], () => null != ej && ea.A.isLocalSoundboardMuted(ej)),
            eb = (0, en.g)(ef ? "CallTile" : "Invalid - CallTile"),
            eV = (0, r.bG)([eA.Ay], () => null != ej && eA.Ay.isLocalVideoDisabled(ej, (0, z.A)(x.type)), [ej, x.type]),
            ez = (0, r.bG)(
                [eA.Ay],
                () => (null != ej ? eA.Ay.getVideoToggleState(ej, (0, z.A)(x.type)) : ek.bb8.NONE),
                [ej, x.type],
            ),
            eY = ez === ek.bb8.AUTO_PROBING,
            { speaking: eW, ringing: eX, hasVideo: eH } = (0, eM.A)(x, eT),
            eQ = (0, r.bG)([ea.A], () => null !== ej && ea.A.isUserPlayingSounds(ej), [ej]),
            eF =
                ((l = eT),
                (s = x),
                (n = S.getGuildId()),
                (o = s.type !== e_.lp.ACTIVITY ? s.user.id : s.applicationId),
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
                (u = (0, eE.Nd)(s.type === e_.lp.USER ? s.voiceState : null, (0, eE.oN)())),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: c.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eJ = x.type === e_.lp.STREAM && ej === eT,
            eK = (0, r.bG)([er.A], () => (x.type === e_.lp.USER && null != ej ? er.A.getEffectForUserId(ej) : null)),
            eq = (0, r.bG)([eI.A], () => eI.A.getVoicePlatformForChannel(S.id, ej ?? ek.dJq)),
            eZ = (0, et.UF)({ userId: ej, channelId: S.id }),
            e$ = (0, et.DY)({ streamKey: x.type === e_.lp.STREAM ? x.id : null, channelId: S.id }),
            e0 = i.useMemo(
                () => (x.type === e_.lp.STREAM ? (e$ ?? !1) : x.type === e_.lp.USER && (eZ ?? !1)),
                [e$, eZ, x.type],
            );
        i.useEffect(() => {
            ee(k);
        }, [k]);
        let e1 = i.useCallback(() => {
                null != ej && D.default.toggleLocalMute(ej, eP.x.STREAM);
            }, [ej]),
            e8 = i.useCallback(
                (e) => {
                    j?.(x, e);
                },
                [j, x],
            ),
            e2 = i.useCallback(
                (e) => {
                    T?.(x, e);
                },
                [T, x],
            ),
            e7 = i.useCallback(
                (e, l, s) => {
                    y?.(x, e, l, s);
                },
                [y, x],
            ),
            e6 = null,
            e5 = null,
            e9 = "";
        switch (x.type) {
            case e_.lp.STREAM:
                ((e6 = (0, t.jsx)(eO.A, {
                    participant: x,
                    selected: R,
                    popoutType: I,
                    width: v,
                    fit: G,
                    onVideoResize: b,
                    paused: Y,
                })),
                    (e5 = (0, t.jsx)(eO.D, {
                        participant: x,
                        selected: R,
                        width: v,
                        focused: k,
                        idle: F,
                        premiumIndicator: !1,
                    })),
                    (e9 = eU.intl.formatToPlainString(eU.t.gHPz3Q, { streamerName: x.user.username })));
                break;
            case e_.lp.USER:
                ((e6 = (0, t.jsx)(eR.A, {
                    channel: S,
                    inCall: O,
                    participant: x,
                    popoutType: I,
                    fit: G,
                    onVideoResize: b,
                    paused: Y,
                    selected: R,
                    width: v,
                    blocked: _,
                    ignored: U,
                    noVideoRender: M || eY,
                    pulseSpeakingIndicator: X,
                })),
                    (e5 = (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eR.s, { participant: x, channelId: S.id }),
                            S.isGuildStageVoice() && !M ? (0, t.jsx)(eo.A, { channel: S, userId: x.user.id }) : null,
                        ],
                    })),
                    (e9 = eU.intl.formatToPlainString(eU.t["iC/x/Q"], { username: x.user.username })));
                break;
            case e_.lp.ACTIVITY:
                ((e6 = (0, t.jsx)(eS.Ay, { interactible: k, participant: x, selected: R, channel: S, width: v })),
                    (e9 = eU.intl.formatToPlainString(eU.t.YCvOsO, { activityName: eN?.name })));
                break;
            case e_.lp.HIDDEN_STREAM:
                e6 = (0, t.jsx)(eO.A, {
                    participant: x,
                    selected: R,
                    width: v,
                    fit: G,
                    onVideoResize: b,
                    paused: Y,
                    popoutType: I,
                });
        }
        let { ref: e4, width: e3, height: le } = (0, P.Ay)(),
            ll = (0, r.bG)([ex.A], () => (x.type === e_.lp.USER ? ex.A.getVoiceVolume(x.id) : -1 / 0)),
            ls = (0, H.v)({
                voiceStatus: eQ ? eL.T2.PLAYING_SOUNDBOARD : eW ? eL.T2.SPEAKING : null,
                voiceDb: ll,
                spreadDirection: H.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            lt = (0, e_.Ay)(x) ? p.k : eH ? m.VideoIcon : A.E,
            li = x.type === e_.lp.STREAM && k;
        return (0, t.jsx)(L.A, {
            section: ek.JJy.VOICE_CHANNEL_TILE,
            children: (0, t.jsx)(K.Ay, {
                streamKey: x.id,
                enableZoom: li,
                children: (0, t.jsx)("div", {
                    className: a()(eG.iE, { [eG.DF]: eX }, g),
                    style: C,
                    onMouseEnter: function () {
                        eh(!0);
                    },
                    onMouseLeave: function () {
                        eh(!1);
                    },
                    children: (0, t.jsxs)($.A, {
                        shakeLocation: eD.uD.VOICE_USER,
                        isShaking: eW,
                        className: eG.Vs,
                        children: [
                            (0, t.jsx)(ev.A, {
                                ref: e4,
                                className: a()(eG.Vs, { [eG.E7]: V, [eG.k_]: null == j, [eG.N7]: F }),
                                noBorder: V,
                                style: E,
                                participantUserId: ej,
                                children: (0, t.jsxs)(h.s, {
                                    "aria-label": e9,
                                    className: eG.lG,
                                    onDoubleClick: e2,
                                    onContextMenu: (e) => e7(e, x.type === e_.lp.STREAM),
                                    onClick: e8,
                                    onMouseDown: N,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eK && null != ej
                                            ? (0, t.jsx)(eu.A, {
                                                  voiceChannelEffect: eK,
                                                  onComplete: () => (0, er.a)(ej),
                                                  userId: ej,
                                              })
                                            : null,
                                        x.type === e_.lp.USER
                                            ? (0, t.jsx)("div", {
                                                  className: eG.nl,
                                                  children: (0, t.jsx)(W.A, {
                                                      userId: ej,
                                                      channelId: S.id,
                                                      guildId: S.getGuildId(),
                                                      containerDimensions: { width: e3 ?? 0, height: le ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e6,
                                        V ? null : (0, t.jsx)("div", { className: eG.hD, children: e5 }),
                                        R
                                            ? (0, t.jsx)("div", {
                                                  className: eG._Q,
                                                  children: (0, t.jsx)(lt, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eG.Dt,
                                                  }),
                                              })
                                            : null,
                                        ew.includes(x.type)
                                            ? null
                                            : (0, t.jsx)(eB, {
                                                  focused: k,
                                                  width: v,
                                                  inCall: O,
                                                  participantId: x.id,
                                                  participantType: x.type,
                                                  hasVideo: eH ?? !1,
                                                  ...eF,
                                                  idle: F,
                                                  platform: eq,
                                                  title: (0, eg.A)(S, x),
                                                  blocked: _,
                                                  ignored: U,
                                                  localVideoDisabled: eV,
                                                  videoToggleState: ez,
                                                  hideAudioIcon: eJ,
                                                  onContextMenu: e7,
                                                  onToggleMute: e1,
                                                  participantUserId: ej,
                                                  channel: S,
                                                  secureFramesVerified: e0,
                                                  isHovered: ei,
                                                  popoutType: I,
                                                  paused: Y,
                                                  controlsBottom: Q,
                                                  streamId: x.type === e_.lp.STREAM ? x.streamId : null,
                                                  soundboardMuted: eb && ef,
                                              }),
                                        O && !V
                                            ? (0, t.jsx)("div", {
                                                  className: a()(eG.PQ, { [eG.pU]: !k && (eQ || null != eK) }),
                                                  style: k || eQ ? void 0 : ls,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            el && es && ei && (0, t.jsx)(eC.A, { currentUserId: eT, participant: x }),
                            (0, t.jsx)(Z.A, { isFiring: q, callTileRef: e4 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eY(e) {
    let { participantType: l, platform: s, className: i } = e;
    if (l === e_.lp.STREAM)
        return s === e_.J7.XBOX
            ? (0, t.jsx)(ej.A, { className: i })
            : (0, t.jsx)(p.k, { size: "md", color: "currentColor", className: i });
    switch (s) {
        case e_.J7.MOBILE:
            return (0, t.jsx)(x.u, { size: "xs", color: "currentColor", className: i });
        case e_.J7.XBOX:
            return (0, t.jsx)(ej.A, { className: i });
        case e_.J7.PLAYSTATION:
            return (0, t.jsx)(ey.A, { className: i });
        case e_.J7.QUEST:
            return (0, t.jsx)(d.G, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eW(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: i, idle: n, onClick: o } = e;
    return (0, t.jsx)(f.m, {
        text: s,
        children: (0, t.jsx)("div", {
            className: a()(eG.V7, { [eG.kl]: i, [eG.N7]: n }),
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
function eX(e) {
    let { channelId: l, participantId: s, hideWhenInactive: n, idle: a } = e,
        o = i.useMemo(() => (0, X.A)(l, s), [l, s]),
        d = (0, r.bG)([ee.A], () => ee.A.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            ((0, B.X)(G.A.CALL_TILE_POPOUT, B.O.STAY_ON_TOP, !d), el.setAlwaysOnTop(o, !d));
        }, [o, d]);
    return eN.isPlatformEmbedded && ef.Ay.supportsFeature(ek.BYE.POPOUT_WINDOWS)
        ? (0, t.jsx)(eW, {
              onClick: c,
              tooltipText: d ? eU.intl.string(eU.t.YdyDM9) : eU.intl.string(eU.t.ZVGHwP),
              icon: d ? E.h : C.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
ez.displayName = "CallTile";
let eB = i.memo((e) => {
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
            platform: C,
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
            x === e_.lp.USER && null != g ? eh.A.getActivities(g).find(U.A)?.application_id : null,
        ),
        eu = eo && x === e_.lp.STREAM && null != g && null != ec && g !== ec,
        em = (0, ei.V)(g),
        ex = (0, r.bG)([eA.Ay], () => null != g && eA.Ay.isLocalVideoAutoDisabled(g, (0, z.A)(x)), [g, x]),
        eI = (0, Q.A)({ userId: g, guildId: E.getGuildId() }),
        ey = (0, F.a)({ displayNameStyles: eI }),
        ej = (0, eV.Yb)(n),
        eN = (0, eV.VE)(n),
        ef = (0, eV.DO)(n),
        [eg, eE] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== eT.A.isOpen() && ((e = eT.A.isOpen()) || eE(!1));
        }
        return (eT.A.addChangeListener(l), () => eT.A.removeChangeListener(l));
    }, []);
    let eC = !Z && x === e_.lp.STREAM && K && (!eN || W),
        eS = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: t, deafened: i, muted: n, soundboardMuted: a } = e;
            return t ? I.T : s ? T.O : i ? y.c : l ? T.O : n ? j.z : a ? N.N : null;
        })({ localMuted: W, serverMuted: H, serverDeafened: J, deafened: w, muted: P, soundboardMuted: ed }),
        ev = (0, b.z)({ value: null != en ? en : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eO = [];
    (d && x === e_.lp.STREAM && eO.push((0, t.jsx)(q.A, { streamId: ea, paused: et }, "zoom-controls")),
        d
            ? ee === Y.N.CALL_TILE &&
              (eO.push(
                  (0, t.jsx)(eX, { channelId: E.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eO.push(
                  (0, t.jsx)(
                      eW,
                      {
                          onClick: () => {
                              ((0, B.X)(G.A.CALL_TILE_POPOUT, B.O.POPOUT_RETURN), el.close((0, X.A)(E.id, h)));
                          },
                          tooltipText: eU.intl.string(eU.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ef ||
                  x !== e_.lp.USER ||
                  null == g ||
                  g === ec ||
                  null == em ||
                  eO.push(
                      (0, t.jsx)(
                          eb.M,
                          { userId: g, channel: E, applicationId: em, hideWhenInactive: !eg, idle: l },
                          "gift",
                      ),
                  ),
              eO.push(
                  (0, t.jsx)(
                      eW,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eE(!0), L(e, !0, e_.GK.THREE_DOT));
                          },
                          tooltipText: eU.intl.string(eU.t["+1H47t"]),
                          icon: O.MoreHorizontalIcon,
                          hideWhenInactive: !eg,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eC &&
                  eO.push(
                      (0, t.jsx)(
                          eW,
                          {
                              onClick: $,
                              tooltipText: W ? eU.intl.string(eU.t.YqAjXy) : eU.intl.string(eU.t.w4m945),
                              icon: W ? R._ : V.H,
                              hideWhenInactive: !W && !eg,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eR = [];
    (null != eS &&
        x === e_.lp.USER &&
        eR.push((0, t.jsx)(eS, { className: eG.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eR.push(
                (0, t.jsx)(
                    "div",
                    {
                        className: eG.Z5,
                        children: (0, t.jsx)(M.K, {
                            size: "lg",
                            className: eG.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eR.push(
                (0, t.jsx)(
                    "div",
                    { className: eG.PP, children: (0, t.jsx)(k.EyeSlashIcon, { size: "lg", className: eG.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eR.push((0, t.jsx)(eY, { participantType: x, platform: C, className: eG.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eR.push((0, t.jsx)("span", { className: a()(eG.Wk, ey), children: s }, "title-text")),
        D &&
            eR.push(
                (0, t.jsx)(
                    f.m,
                    {
                        text: eU.intl.string(eU.t.ZEem6O),
                        children: (0, t.jsx)(_.m, {
                            className: eG.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eU.intl.string(eU.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eM = em ?? er,
        eD =
            (d && ee !== Y.N.CALL_TILE) || l || ef || x !== e_.lp.USER || null == g || null == eM
                ? null
                : (0, t.jsx)(eb.X, { applicationId: eM, hideApplicationName: eN });
    return (0, t.jsxs)("div", {
        className: a()(eG.MU, { [eG.oE]: eN, [eG.Ol]: d }),
        children: [
            (0, t.jsx)("div", {
                className: a()(eG.Ik, { [eG.EX]: n < 195 }),
                children:
                    ex || p === ek.bb8.AUTO_PROBING
                        ? l
                            ? (0, t.jsx)("div", {
                                  className: eG.h5,
                                  children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, t.jsxs)("div", {
                                  className: a()(eG.ns, eG.WP),
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eG.h5,
                                          children: (0, t.jsx)(S.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, t.jsx)(v.E, {
                                          variant: "text-sm/normal",
                                          className: eG.Wk,
                                          children: eU.intl.string(eU.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ej &&
                (0, t.jsxs)("div", {
                    className: a()(eG.Qp, { [eG.EX]: n < 195 }),
                    children: [
                        (0, t.jsxs)("div", {
                            className: eG.qV,
                            children: [
                                eR.length > 0 &&
                                    (0, t.jsx)(v.E, {
                                        className: eG.ac,
                                        color: "none",
                                        variant: eN ? "text-sm/normal" : "text-md/normal",
                                        children: eR,
                                    }),
                                eu && null != g ? (0, t.jsx)(es.A, { streamerId: g, idle: l }) : null,
                                eD,
                            ],
                        }),
                        eO.length > 0
                            ? (0, t.jsx)(o.animated.div, {
                                  className: a()(eG._v, { [eG.N7]: l }),
                                  style: { marginBottom: ev.value },
                                  children: eO,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eB.displayName = "CallTileOverlay";
let eH = J.$,
    eQ = ez;
