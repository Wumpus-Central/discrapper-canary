s(321073);
var i = s(477900),
    t = s(582128),
    n = s(503698),
    a = s.n(n),
    o = s(736819),
    d = s(738678),
    c = s(12470),
    r = s(855986),
    u = s(646514),
    p = s(31300),
    m = s(428689),
    A = s(289020),
    h = s(890856),
    x = s(646270),
    I = s(615675),
    y = s(666654),
    T = s(990836),
    j = s(83107),
    N = s(546861),
    f = s(866665),
    g = s(408278),
    E = s(609731),
    b = s(788120),
    C = s(943812),
    S = s(834730),
    v = s(717421),
    O = s(365199),
    R = s(358618),
    V = s(983851),
    M = s(428678),
    k = s(952270),
    P = s(254138),
    _ = s(827343),
    D = s(820284),
    L = s(765671),
    U = s(672979),
    G = s(793574),
    w = s(429913),
    z = s(520698),
    Y = s(164617),
    W = s(66004),
    X = s(958005),
    B = s(384059),
    H = s(556525),
    J = s(609425),
    Q = s(73392),
    F = s(259264),
    K = s(40056),
    Z = s(117029),
    q = s(612258),
    $ = s(551826),
    ee = s(293432),
    el = s(574172),
    es = s(986491),
    ei = s(665691),
    et = s(635885),
    en = s(421768),
    ea = s(209932),
    eo = s(58303),
    ed = s(253932),
    ec = s(461782),
    er = s(614518),
    eu = s(706787),
    ep = s(46653),
    em = s(111162),
    eA = s(718197),
    eh = s(290863),
    ex = s(485296),
    eI = s(977997),
    ey = s(712687),
    eT = s(790381),
    ej = s(266080),
    eN = s(723702),
    ef = s(253400),
    eg = s(141035),
    eE = s(541157),
    eb = s(654820),
    eC = s(804980),
    eS = s(272812),
    ev = s(304047),
    eO = s(555148),
    eR = s(83982),
    eV = s(345812),
    eM = s(110234),
    ek = s(652215),
    eP = s(806931),
    e_ = s(31408),
    eD = s(778712),
    eL = s(731854),
    eU = s(792996),
    eG = s(584841);
let ew = [eP.lp.ACTIVITY],
    ez = t.memo((e) => {
        var l, s, n;
        let o,
            d,
            c,
            u,
            {
                participant: x,
                popoutType: I,
                onDoubleClick: y,
                onContextMenu: T,
                onClick: j,
                onMouseDown: N,
                onKeyDown: f,
                className: g,
                style: E,
                containerStyle: b,
                channel: C,
                width: S,
                onVideoResize: v,
                inCall: O = !1,
                selected: R = !1,
                noBorder: V = !1,
                noVideoRender: M = !1,
                focused: k = !1,
                blocked: P = !1,
                ignored: U = !1,
                fit: G = F.$.CONTAIN,
                paused: Y = !1,
                pulseSpeakingIndicator: X = !1,
                forceIdle: B = !1,
                controlsBottom: J,
            } = e,
            Q = t.useContext(ec.vG) || B,
            [Z, ee] = t.useState(!1),
            el = ed.Q_.useSetting(),
            es = (0, r.bG)([em.default], () => em.default.isStreamInfoOverlayEnabled),
            [et, eh] = t.useState(!1),
            ey = (0, r.bG)([ep.default], () => ep.default.getId()),
            eT = x.type === eP.lp.ACTIVITY ? null : x.user,
            ej = eT?.id ?? null,
            [eN] = (0, w.A)(x.type === eP.lp.ACTIVITY ? [x.applicationId] : []),
            ef = (0, r.bG)([ea.A], () => null != ej && ea.A.isLocalSoundboardMuted(ej)),
            ev = (0, en.g)(ef ? "CallTile" : "Invalid - CallTile"),
            eV = (0, r.bG)([eA.Ay], () => null != ej && eA.Ay.isLocalVideoDisabled(ej, (0, z.A)(x.type)), [ej, x.type]),
            ez = (0, r.bG)(
                [eA.Ay],
                () => (null != ej ? eA.Ay.getVideoToggleState(ej, (0, z.A)(x.type)) : ek.bb8.NONE),
                [ej, x.type],
            ),
            eY = ez === ek.bb8.AUTO_PROBING,
            { speaking: eW, ringing: eX, hasVideo: eH } = (0, eM.A)(x, ey),
            eJ = (0, r.bG)([ea.A], () => null !== ej && ea.A.isUserPlayingSounds(ej), [ej]),
            eQ =
                ((l = ey),
                (s = x),
                (n = C.getGuildId()),
                (o = s.type !== eP.lp.ACTIVITY ? s.user.id : s.applicationId),
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
                (u = (0, eE.Nd)(s.type === eP.lp.USER ? s.voiceState : null, (0, eE.oN)())),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: c.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eF = x.type === eP.lp.STREAM && ej === ey,
            eK = (0, r.bG)([er.A], () => (x.type === eP.lp.USER && null != ej ? er.A.getEffectForUserId(ej) : null)),
            eZ = (0, r.bG)([eI.A], () => eI.A.getVoicePlatformForChannel(C.id, ej ?? "")),
            eq = (0, ei.UF)({ userId: ej, channelId: C.id }),
            e$ = (0, ei.DY)({ streamKey: x.type === eP.lp.STREAM ? x.id : null, channelId: C.id }),
            e0 = t.useMemo(
                () => (x.type === eP.lp.STREAM ? (e$ ?? !1) : x.type === eP.lp.USER && (eq ?? !1)),
                [e$, eq, x.type],
            );
        t.useEffect(() => {
            ee(k);
        }, [k]);
        let e1 = t.useCallback(() => {
                null != ej && _.default.toggleLocalMute(ej, eL.x.STREAM);
            }, [ej]),
            e8 = t.useCallback(
                (e) => {
                    j?.(x, e);
                },
                [j, x],
            ),
            e6 = t.useCallback(
                (e) => {
                    y?.(x, e);
                },
                [y, x],
            ),
            e7 = t.useCallback(
                (e, l, s) => {
                    T?.(x, e, l, s);
                },
                [T, x],
            ),
            e2 = null,
            e5 = null,
            e4 = "";
        switch (x.type) {
            case eP.lp.STREAM:
                ((e2 = (0, i.jsx)(eO.A, {
                    participant: x,
                    selected: R,
                    popoutType: I,
                    width: S,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                })),
                    (e5 = (0, i.jsx)(eO.D, {
                        participant: x,
                        selected: R,
                        width: S,
                        focused: k,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e4 = eU.intl.formatToPlainString(eU.t.gHPz3Q, { streamerName: x.user.username })));
                break;
            case eP.lp.USER:
                ((e2 = (0, i.jsx)(eR.A, {
                    channel: C,
                    inCall: O,
                    participant: x,
                    popoutType: I,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                    selected: R,
                    width: S,
                    blocked: P,
                    ignored: U,
                    noVideoRender: M || eY,
                    pulseSpeakingIndicator: X,
                })),
                    (e5 = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(eR.s, { participant: x, channelId: C.id }),
                            C.isGuildStageVoice() && !M ? (0, i.jsx)(eo.A, { channel: C, userId: x.user.id }) : null,
                        ],
                    })),
                    (e4 = eU.intl.formatToPlainString(eU.t["iC/x/Q"], { username: x.user.username })));
                break;
            case eP.lp.ACTIVITY:
                ((e2 = (0, i.jsx)(eC.Ay, { interactible: k, participant: x, selected: R, channel: C, width: S })),
                    (e4 = eU.intl.formatToPlainString(eU.t.YCvOsO, { activityName: eN?.name })));
                break;
            case eP.lp.HIDDEN_STREAM:
                e2 = (0, i.jsx)(eO.A, {
                    participant: x,
                    selected: R,
                    width: S,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                    popoutType: I,
                });
        }
        let { ref: e9, width: e3, height: le } = (0, L.Ay)(),
            ll = (0, r.bG)([ex.A], () => (x.type === eP.lp.USER ? ex.A.getVoiceVolume(x.id) : -1 / 0)),
            ls = (0, H.v)({
                voiceStatus: eJ ? eD.T2.PLAYING_SOUNDBOARD : eW ? eD.T2.SPEAKING : null,
                voiceDb: ll,
                spreadDirection: H.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            li = (0, eP.Ay)(x) ? p.k : eH ? m.VideoIcon : A.E,
            lt = x.type === eP.lp.STREAM && k;
        return (0, i.jsx)(D.A, {
            section: ek.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(K.Ay, {
                streamKey: x.id,
                enableZoom: lt,
                children: (0, i.jsx)("div", {
                    className: a()(eG.iE, { [eG.DF]: eX }, g),
                    style: b,
                    onMouseEnter: function () {
                        eh(!0);
                    },
                    onMouseLeave: function () {
                        eh(!1);
                    },
                    children: (0, i.jsxs)($.A, {
                        shakeLocation: e_.uD.VOICE_USER,
                        isShaking: eW,
                        className: eG.Vs,
                        children: [
                            (0, i.jsx)(eS.A, {
                                ref: e9,
                                className: a()(eG.Vs, { [eG.E7]: V, [eG.k_]: null == j, [eG.N7]: Q }),
                                noBorder: V,
                                style: E,
                                participantUserId: ej,
                                children: (0, i.jsxs)(h.s, {
                                    "aria-label": e4,
                                    className: eG.lG,
                                    onDoubleClick: e6,
                                    onContextMenu: (e) => e7(e, x.type === eP.lp.STREAM),
                                    onClick: e8,
                                    onMouseDown: N,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eK && null != ej
                                            ? (0, i.jsx)(eu.A, {
                                                  voiceChannelEffect: eK,
                                                  onComplete: () => (0, er.a)(ej),
                                                  userId: ej,
                                              })
                                            : null,
                                        x.type === eP.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eG.nl,
                                                  children: (0, i.jsx)(W.A, {
                                                      userId: ej,
                                                      channelId: C.id,
                                                      guildId: C.getGuildId(),
                                                      containerDimensions: { width: e3 ?? 0, height: le ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e2,
                                        V ? null : (0, i.jsx)("div", { className: eG.hD, children: e5 }),
                                        R
                                            ? (0, i.jsx)("div", {
                                                  className: eG._Q,
                                                  children: (0, i.jsx)(li, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eG.Dt,
                                                  }),
                                              })
                                            : null,
                                        ew.includes(x.type)
                                            ? null
                                            : (0, i.jsx)(eB, {
                                                  focused: k,
                                                  width: S,
                                                  inCall: O,
                                                  participantId: x.id,
                                                  participantType: x.type,
                                                  hasVideo: eH ?? !1,
                                                  ...eQ,
                                                  idle: Q,
                                                  platform: eZ,
                                                  title: (0, eg.A)(C, x),
                                                  blocked: P,
                                                  ignored: U,
                                                  localVideoDisabled: eV,
                                                  videoToggleState: ez,
                                                  hideAudioIcon: eF,
                                                  onContextMenu: e7,
                                                  onToggleMute: e1,
                                                  participantUserId: ej,
                                                  channel: C,
                                                  secureFramesVerified: e0,
                                                  isHovered: et,
                                                  popoutType: I,
                                                  paused: Y,
                                                  controlsBottom: J,
                                                  streamId: x.type === eP.lp.STREAM ? x.streamId : null,
                                                  soundboardMuted: ev && ef,
                                              }),
                                        O && !V
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eG.PQ, { [eG.pU]: !k && (eJ || null != eK) }),
                                                  style: k || eJ ? void 0 : ls,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            el && es && et && (0, i.jsx)(eb.A, { currentUserId: ey, participant: x }),
                            (0, i.jsx)(q.A, { isFiring: Z, callTileRef: e9 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eY(e) {
    let { participantType: l, platform: s, className: t } = e;
    if (l === eP.lp.STREAM)
        return s === eP.J7.XBOX
            ? (0, i.jsx)(ej.A, { className: t })
            : (0, i.jsx)(p.k, { size: "md", color: "currentColor", className: t });
    switch (s) {
        case eP.J7.MOBILE:
            return (0, i.jsx)(x.u, { size: "xs", color: "currentColor", className: t });
        case eP.J7.XBOX:
            return (0, i.jsx)(ej.A, { className: t });
        case eP.J7.PLAYSTATION:
            return (0, i.jsx)(eT.A, { className: t });
        case eP.J7.QUEST:
            return (0, i.jsx)(d.G, { size: "xs", color: "currentColor", className: t });
        default:
            return null;
    }
}
function eW(e) {
    let { icon: l, tooltipText: s, hideWhenInactive: t, idle: n, onClick: o } = e;
    return (0, i.jsx)(f.m, {
        text: s,
        children: (0, i.jsx)("div", {
            className: a()(eG.V7, { [eG.kl]: t, [eG.N7]: n }),
            children: (0, i.jsx)(g.K, {
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
        o = t.useMemo(() => (0, X.A)(l, s), [l, s]),
        d = (0, r.bG)([ee.A], () => ee.A.getIsAlwaysOnTop(o)),
        c = t.useCallback(() => {
            ((0, B.XJ)(G.A.CALL_TILE_POPOUT, B.OP.STAY_ON_TOP, !d), el.uR(o, !d));
        }, [o, d]);
    return eN.isPlatformEmbedded && ef.Ay.supportsFeature(ek.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eW, {
              onClick: c,
              tooltipText: d ? eU.intl.string(eU.t.YdyDM9) : eU.intl.string(eU.t.ZVGHwP),
              icon: d ? E.h : b.q,
              hideWhenInactive: n,
              idle: a,
          })
        : null;
}
ez.displayName = "CallTile";
let eB = t.memo((e) => {
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
            platform: b,
            secureFramesVerified: _,
            onContextMenu: D,
            muted: L,
            deafened: w,
            localMuted: W,
            serverMuted: H,
            serverDeafened: F,
            hasVideo: K,
            hideAudioIcon: q,
            onToggleMute: $,
            popoutType: ee,
            paused: ei,
            controlsBottom: en,
            streamId: ea,
            inCall: eo,
            soundboardMuted: ed,
        } = e,
        ec = (0, r.bG)([ep.default], () => ep.default.getId()),
        er = (0, r.bG)([eh.A], () =>
            x === eP.lp.USER && null != g ? eh.A.getActivities(g).find(U.A)?.application_id : null,
        ),
        eu = eo && x === eP.lp.STREAM && null != g && null != ec && g !== ec,
        em = (0, et.V)(g),
        ex = (0, r.bG)([eA.Ay], () => null != g && eA.Ay.isLocalVideoAutoDisabled(g, (0, z.A)(x)), [g, x]),
        eI = (0, J.A)({ userId: g, guildId: E.getGuildId() }),
        eT = (0, Q.a)({ displayNameStyles: eI }),
        ej = (0, eV.Yb)(n),
        eN = (0, eV.VE)(n),
        ef = (0, eV.DO)(n),
        [eg, eE] = t.useState(!1);
    t.useEffect(() => {
        let e = !1;
        function l() {
            e !== ey.A.isOpen() && ((e = ey.A.isOpen()) || eE(!1));
        }
        return (ey.A.addChangeListener(l), () => ey.A.removeChangeListener(l));
    }, []);
    let eb = !q && x === eP.lp.STREAM && K && (!eN || W),
        eC = (function (e) {
            let { localMuted: l, serverMuted: s, serverDeafened: i, deafened: t, muted: n, soundboardMuted: a } = e;
            return i ? I.T : s ? y.O : t ? T.c : l ? y.O : n ? j.z : a ? N.N : null;
        })({ localMuted: W, serverMuted: H, serverDeafened: F, deafened: w, muted: L, soundboardMuted: ed }),
        eS = (0, v.z)({ value: null != en ? en : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eO = [];
    (d && x === eP.lp.STREAM && eO.push((0, i.jsx)(Z.A, { streamId: ea, paused: ei }, "zoom-controls")),
        d
            ? ee === Y.N.CALL_TILE &&
              (eO.push(
                  (0, i.jsx)(eX, { channelId: E.id, participantId: h, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eO.push(
                  (0, i.jsx)(
                      eW,
                      {
                          onClick: () => {
                              ((0, B.XJ)(G.A.CALL_TILE_POPOUT, B.OP.POPOUT_RETURN), el.close((0, X.A)(E.id, h)));
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
                  x !== eP.lp.USER ||
                  null == g ||
                  g === ec ||
                  null == em ||
                  eO.push(
                      (0, i.jsx)(
                          ev.M,
                          { userId: g, channel: E, applicationId: em, hideWhenInactive: !eg, idle: l },
                          "gift",
                      ),
                  ),
              eO.push(
                  (0, i.jsx)(
                      eW,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eE(!0), D(e, !0, eP.GK.THREE_DOT));
                          },
                          tooltipText: eU.intl.string(eU.t["+1H47t"]),
                          icon: O.MoreHorizontalIcon,
                          hideWhenInactive: !eg,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eb &&
                  eO.push(
                      (0, i.jsx)(
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
    (null != eC &&
        x === eP.lp.USER &&
        eR.push((0, i.jsx)(eC, { className: eG.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        m &&
            eR.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eG.Z5,
                        children: (0, i.jsx)(M.K, {
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
                (0, i.jsx)(
                    "div",
                    { className: eG.PP, children: (0, i.jsx)(k.EyeSlashIcon, { size: "lg", className: eG.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eR.push((0, i.jsx)(eY, { participantType: x, platform: b, className: eG.gr }, "title-icon")),
        null == s ||
            "" === s ||
            l ||
            eR.push((0, i.jsx)("span", { className: a()(eG.Wk, eT), children: s }, "title-text")),
        _ &&
            eR.push(
                (0, i.jsx)(
                    f.m,
                    {
                        text: eU.intl.string(eU.t.ZEem6O),
                        children: (0, i.jsx)(P.m, {
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
        e_ =
            (d && ee !== Y.N.CALL_TILE) || l || ef || x !== eP.lp.USER || null == g || null == eM
                ? null
                : (0, i.jsx)(ev.X, { applicationId: eM, hideApplicationName: eN });
    return (0, i.jsxs)("div", {
        className: a()(eG.MU, { [eG.oE]: eN, [eG.Ol]: d }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eG.Ik, { [eG.EX]: n < 195 }),
                children:
                    ex || p === ek.bb8.AUTO_PROBING
                        ? l
                            ? (0, i.jsx)("div", {
                                  className: eG.h5,
                                  children: (0, i.jsx)(C.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(eG.ns, eG.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: eG.h5,
                                          children: (0, i.jsx)(C.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(S.E, {
                                          variant: "body-sm/normal",
                                          className: eG.Wk,
                                          children: eU.intl.string(eU.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ej &&
                (0, i.jsxs)("div", {
                    className: a()(eG.Qp, { [eG.EX]: n < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eG.qV,
                            children: [
                                eR.length > 0 &&
                                    (0, i.jsx)(S.E, {
                                        className: eG.ac,
                                        color: "none",
                                        variant: eN ? "body-sm/normal" : "body-md/normal",
                                        children: eR,
                                    }),
                                eu && null != g ? (0, i.jsx)(es.A, { streamerId: g, idle: l }) : null,
                                e_,
                            ],
                        }),
                        eO.length > 0
                            ? (0, i.jsx)(o.animated.div, {
                                  className: a()(eG._v, { [eG.N7]: l }),
                                  style: { marginBottom: eS.value },
                                  children: eO,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eB.displayName = "CallTileOverlay";
let eH = F.$;
s.d(l, {}, { Ay: ez, Yl: eH });
