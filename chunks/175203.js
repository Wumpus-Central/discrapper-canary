t.d(l, { Ay: () => ez, Yl: () => ew }), t(321073);
var s = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(419354),
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
    $ = t(567249),
    Z = t(574172),
    ee = t(665691),
    el = t(724759),
    et = t(635885),
    es = t(209932),
    en = t(253932),
    ei = t(461782),
    ea = t(614518),
    er = t(706787),
    eo = t(495544),
    ec = t(111162),
    ed = t(969341),
    eu = t(290863),
    ep = t(485296),
    em = t(977997),
    eh = t(712687),
    eA = t(790381),
    ex = t(266080),
    eg = t(723702),
    ef = t(19575),
    ey = t(141035),
    ej = t(654820),
    eI = t(804980),
    eT = t(272812),
    eE = t(304047),
    eN = t(434087),
    ev = t(83982),
    eC = t(345812),
    eb = t(110234),
    eS = t(652215),
    eO = t(806931),
    eR = t(31408),
    ek = t(731854),
    eD = t(985018),
    eV = t(391308);
let eM = [eO.lp.ACTIVITY],
    e_ = n.memo((e) => {
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
            X = n.useContext(ei.vG) || Y,
            [J, $] = n.useState(!1),
            Z = en.Q_.useSetting(),
            el = (0, d.bG)([ec.default], () => ec.default.isStreamInfoOverlayEnabled),
            [et, eu] = n.useState(!1),
            eh = (0, d.bG)([eo.default], () => eo.default.getId()),
            eA = u.type === eO.lp.ACTIVITY ? null : u.user,
            ex = eA?.id ?? null,
            [eg] = (0, G.A)(u.type === eO.lp.ACTIVITY ? [u.applicationId] : []),
            ef = (0, d.bG)([ed.Ay], () => null != ex && ed.Ay.isLocalVideoDisabled(ex, (0, L.A)(u.type)), [ex, u.type]),
            eE = (0, d.bG)(
                [ed.Ay],
                () => (null != ex ? ed.Ay.getVideoToggleState(ex, (0, L.A)(u.type)) : eS.bb8.NONE),
                [ex, u.type],
            ),
            eC = eE === eS.bb8.AUTO_PROBING,
            { speaking: e_, ringing: eP, hasVideo: eU } = (0, eb.A)(u, eh),
            eG = (0, d.bG)([es.A], () => null !== ex && es.A.isUserPlayingSounds(ex), [ex]),
            ew =
                ((l = eh),
                (t = u),
                (i = v.getGuildId()),
                (r = t.type !== eO.lp.ACTIVITY ? t.user.id : t.applicationId),
                (o = (0, d.cf)([em.A], () => {
                    let e = em.A.getVoiceState(i, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([ed.Ay], () => {
                    let e = (0, L.A)(t.type);
                    return l === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: ed.Ay.isLocalMute(r, e),
                              localVideoDisabled: ed.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: ed.Ay.isLocalVideoAutoDisabled(r, e),
                          };
                }, [l, t.type, r])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: c.muted,
                    muted: (t.type === eO.lp.USER && t.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (t.type === eO.lp.USER && t.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ez = u.type === eO.lp.STREAM && ex === eh,
            eW = (0, d.bG)([ea.A], () => (u.type === eO.lp.USER && null != ex ? ea.A.getEffectForUserId(ex) : null)),
            eY = (0, d.bG)([em.A], () => em.A.getVoicePlatformForChannel(v.id, ex ?? eS.dJq)),
            eH = (0, ee.UF)({ userId: ex, channelId: v.id }),
            eB = (0, ee.DY)({ streamKey: u.type === eO.lp.STREAM ? u.id : null, channelId: v.id }),
            eX = n.useMemo(
                () => (u.type === eO.lp.STREAM ? (eB ?? !1) : u.type === eO.lp.USER && (eH ?? !1)),
                [eB, eH, u.type],
            );
        n.useEffect(() => {
            $(D);
        }, [D]);
        let eF = n.useCallback(() => {
                null != ex && M.A.toggleLocalMute(ex, ek.x.STREAM);
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
            e$ = null,
            eZ = "";
        switch (u.type) {
            case eO.lp.STREAM:
                (eq = (0, s.jsx)(eN.A, {
                    participant: u,
                    selected: O,
                    popoutType: p,
                    width: C,
                    fit: U,
                    onVideoResize: b,
                    paused: w,
                })),
                    (e$ = (0, s.jsx)(eN.D, {
                        participant: u,
                        selected: O,
                        width: C,
                        focused: D,
                        idle: X,
                        premiumIndicator: !1,
                    })),
                    (eZ = eD.intl.formatToPlainString(eD.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case eO.lp.USER:
                (eq = (0, s.jsx)(ev.A, {
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
                    noVideoRender: k || eC,
                    pulseSpeakingIndicator: W,
                })),
                    (e$ = (0, s.jsx)(ev.s, { participant: u, channelId: v.id })),
                    (eZ = eD.intl.formatToPlainString(eD.t["iC/x/Q"], { username: u.user.username }));
                break;
            case eO.lp.ACTIVITY:
                (eq = (0, s.jsx)(eI.Ay, { interactible: D, participant: u, selected: O, channel: v, width: C })),
                    (eZ = eD.intl.formatToPlainString(eD.t.YCvOsO, { activityName: eg?.name }));
                break;
            case eO.lp.HIDDEN_STREAM:
                eq = (0, s.jsx)(eN.A, {
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
            e1 = (0, d.bG)([ep.A], () => (u.type === eO.lp.USER ? ep.A.getVoiceVolume(u.id) : -1 / 0)),
            e8 = (0, H.v)({ isSpeaking: e_, voiceDb: e1, spreadDirection: H.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e9 = (0, eO.Ay)(u) ? m.k : eU ? h.n : A.E,
            e2 = u.type === eO.lp.STREAM && D;
        return (0, s.jsx)(_.A, {
            section: eS.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)(Q.Ay, {
                streamKey: u.id,
                enableZoom: e2,
                children: (0, s.jsx)("div", {
                    className: a()(eV.iE, { [eV.DF]: eP }, T),
                    style: N,
                    onMouseEnter: () => {
                        eu(!0);
                    },
                    onMouseLeave: () => {
                        eu(!1);
                    },
                    children: (0, s.jsxs)(q.A, {
                        shakeLocation: eR.uD.VOICE_USER,
                        isShaking: e_,
                        className: eV.Vs,
                        children: [
                            (0, s.jsx)(eT.A, {
                                ref: e0,
                                className: a()(eV.Vs, { [eV.E7]: R, [eV.k_]: null == y, [eV.N7]: X }),
                                noBorder: R,
                                style: E,
                                participantUserId: ex,
                                children: (0, s.jsxs)(x.s, {
                                    "aria-label": eZ,
                                    className: eV.lG,
                                    onDoubleClick: eJ,
                                    onContextMenu: (e) => eK(e, u.type === eO.lp.STREAM),
                                    onClick: eQ,
                                    onMouseDown: j,
                                    onKeyDown: I,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eW && null != ex
                                            ? (0, s.jsx)(er.A, {
                                                  voiceChannelEffect: eW,
                                                  onComplete: () => (0, ea.a)(ex),
                                                  userId: ex,
                                              })
                                            : null,
                                        u.type === eO.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eV.nl,
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
                                        R ? null : (0, s.jsx)("div", { className: eV.hD, children: e$ }),
                                        O
                                            ? (0, s.jsx)("div", {
                                                  className: eV._Q,
                                                  children: (0, s.jsx)(e9, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eV.Dt,
                                                  }),
                                              })
                                            : null,
                                        eM.includes(u.type)
                                            ? null
                                            : (0, s.jsx)(eL, {
                                                  focused: D,
                                                  width: C,
                                                  inCall: S,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...ew,
                                                  idle: X,
                                                  platform: eY,
                                                  title: (0, ey.A)(v, u),
                                                  blocked: V,
                                                  ignored: P,
                                                  localVideoDisabled: ef,
                                                  videoToggleState: eE,
                                                  hideAudioIcon: ez,
                                                  onContextMenu: eK,
                                                  onToggleMute: eF,
                                                  participantUserId: ex,
                                                  channel: v,
                                                  secureFramesVerified: eX,
                                                  isHovered: et,
                                                  popoutType: p,
                                                  paused: w,
                                                  controlsBottom: B,
                                                  streamId: u.type === eO.lp.STREAM ? u.streamId : null,
                                              }),
                                        S && !R
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eV.PQ, { [eV.pU]: !D && (eG || null != eW) }),
                                                  style: D || eG ? void 0 : e8,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            Z && el && et && (0, s.jsx)(ej.A, { currentUserId: eh, participant: u }),
                            (0, s.jsx)(K.A, { isFiring: J, callTileRef: e0.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eP(e) {
    let { participantType: l, platform: t, className: n } = e;
    if (l === eO.lp.STREAM)
        return t === eO.J7.XBOX
            ? (0, s.jsx)(ex.A, { className: n })
            : (0, s.jsx)(m.k, { size: "md", color: "currentColor", className: n });
    switch (t) {
        case eO.J7.MOBILE:
            return (0, s.jsx)(g.u, { size: "xs", color: "currentColor", className: n });
        case eO.J7.XBOX:
            return (0, s.jsx)(ex.A, { className: n });
        case eO.J7.PLAYSTATION:
            return (0, s.jsx)(eA.A, { className: n });
        case eO.J7.QUEST:
            return (0, s.jsx)(o.G, { size: "xs", color: "currentColor", className: n });
        default:
            return null;
    }
}
function eU(e) {
    let { icon: l, tooltipText: t, hideWhenInactive: n, idle: i, onClick: r } = e;
    return (0, s.jsx)(p.m, {
        text: t,
        children: (0, s.jsx)("div", {
            className: a()(eV.V7, { [eV.kl]: n, [eV.N7]: i }),
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
function eG(e) {
    let { channelId: l, participantId: t, hideWhenInactive: i, idle: a } = e,
        r = n.useMemo(() => (0, W.A)(l, t), [l, t]),
        o = (0, d.bG)([$.A], () => $.A.getIsAlwaysOnTop(r)),
        c = n.useCallback(() => {
            (0, Y.X)(U.A.CALL_TILE_POPOUT, Y.O.STAY_ON_TOP, !o), Z.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return eg.isPlatformEmbedded && ef.Ay.supportsFeature(eS.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eU, {
              onClick: c,
              tooltipText: o ? eD.intl.string(eD.t.YdyDM9) : eD.intl.string(eD.t.ZVGHwP),
              icon: o ? E.h : N.q,
              hideWhenInactive: i,
              idle: a,
          })
        : null;
}
e_.displayName = "CallTile";
let eL = n.memo((e) => {
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
            onToggleMute: $,
            popoutType: ee,
            paused: es,
            controlsBottom: en,
            streamId: ei,
        } = e,
        ea = (0, d.bG)([eo.default], () => eo.default.getId()),
        er = (0, el.B)({ location: "call_tile" }),
        ec = (0, d.bG)([eu.A], () =>
            g === eO.lp.USER && null != T ? eu.A.getActivities(T).find(P.A)?.application_id : null,
        ),
        ep = (0, et.V)(er ? T : null),
        em = (0, d.bG)([ed.Ay], () => null != T && ed.Ay.isLocalVideoAutoDisabled(T, (0, L.A)(g)), [T, g]),
        eA = (0, B.A)({ userId: T, guildId: E.getGuildId() }),
        ex = (0, X.a)({ displayNameStyles: eA }),
        eg = (0, eC.Yb)(i),
        ef = (0, eC.VE)(i),
        ey = (0, eC.DO)(i),
        [ej, eI] = n.useState(!1);
    n.useEffect(() => {
        let e = !1,
            l = () => {
                e !== eh.A.isOpen() && ((e = eh.A.isOpen()) || eI(!1));
            };
        return eh.A.addChangeListener(l), () => eh.A.removeChangeListener(l);
    }, []);
    let eT = !q && g === eO.lp.STREAM && K && (!ef || H),
        eN = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: s, deafened: n, muted: i } = e;
            return s ? f.T : t ? y.O : n ? j.c : l ? y.O : i ? I.z : null;
        })({ localMuted: H, serverMuted: F, serverDeafened: Q, deafened: z, muted: G }),
        ev = (0, b.z)({ value: null != en ? en : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eb = [];
    o && g === eO.lp.STREAM && eb.push((0, s.jsx)(J.A, { streamId: ei, paused: es }, "zoom-controls")),
        o
            ? ee === w.N.CALL_TILE &&
              (eb.push(
                  (0, s.jsx)(eG, { channelId: E.id, participantId: x, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eb.push(
                  (0, s.jsx)(
                      eU,
                      {
                          onClick: () => {
                              (0, Y.X)(U.A.CALL_TILE_POPOUT, Y.O.POPOUT_RETURN), Z.close((0, W.A)(E.id, x));
                          },
                          tooltipText: eD.intl.string(eD.t["7Dwcnj"]),
                          icon: c._,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (er &&
                  !ey &&
                  g === eO.lp.USER &&
                  null != T &&
                  T !== ea &&
                  null != ep &&
                  eb.push(
                      (0, s.jsx)(
                          eE.M,
                          { userId: T, channel: E, applicationId: ep, hideWhenInactive: !ej, idle: l },
                          "gift",
                      ),
                  ),
              eb.push(
                  (0, s.jsx)(
                      eU,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), eI(!0), _(e, !0, eO.GK.THREE_DOT);
                          },
                          tooltipText: eD.intl.string(eD.t["+1H47t"]),
                          icon: S.j,
                          hideWhenInactive: !ej,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eT &&
                  eb.push(
                      (0, s.jsx)(
                          eU,
                          {
                              onClick: $,
                              tooltipText: H ? eD.intl.string(eD.t.YqAjXy) : eD.intl.string(eD.t.w4m945),
                              icon: H ? O._ : R.H,
                              hideWhenInactive: !H && !ej,
                              idle: l,
                          },
                          "mute",
                      ),
                  ));
    let eR = [];
    null != eN &&
        g === eO.lp.USER &&
        eR.push((0, s.jsx)(eN, { className: eV.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eR.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eV.Z5,
                        children: (0, s.jsx)(k.K, {
                            size: "lg",
                            className: eV.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        A &&
            eR.push(
                (0, s.jsx)(
                    "div",
                    { className: eV.PP, children: (0, s.jsx)(D.G, { size: "lg", className: eV.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eR.push((0, s.jsx)(eP, { participantType: g, platform: N, className: eV.gr }, "title-icon")),
        null == t ||
            "" === t ||
            l ||
            eR.push((0, s.jsx)("span", { className: a()(eV.Wk, ex), children: t }, "title-text")),
        M &&
            eR.push(
                (0, s.jsx)(
                    p.m,
                    {
                        text: eD.intl.string(eD.t.ZEem6O),
                        children: (0, s.jsx)(V.m, {
                            className: eV.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eD.intl.string(eD.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let ek = ep ?? ec,
        eM =
            !er || o || l || ey || g !== eO.lp.USER || null == T || null == ek
                ? null
                : (0, s.jsx)(eE.X, { applicationId: ek, hideApplicationName: ef });
    return (0, s.jsxs)("div", {
        className: a()(eV.MU, { [eV.oE]: ef, [eV.Ol]: o }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eV.Ik, { [eV.EX]: i < 195 }),
                children:
                    em || m === eS.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eV.h5,
                                  children: (0, s.jsx)(v.O, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eV.ns, eV.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eV.h5,
                                          children: (0, s.jsx)(v.O, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(C.E, {
                                          variant: "text-sm/normal",
                                          className: eV.Wk,
                                          children: eD.intl.string(eD.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eg &&
                (0, s.jsxs)("div", {
                    className: a()(eV.Qp, { [eV.EX]: i < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eV.qV, { [eV.d5]: er }),
                            children: [
                                eR.length > 0 &&
                                    (0, s.jsx)(C.E, {
                                        className: eV.ac,
                                        color: "none",
                                        variant: ef ? "text-sm/normal" : "text-md/normal",
                                        children: eR,
                                    }),
                                eM,
                            ],
                        }),
                        eb.length > 0
                            ? (0, s.jsx)(r.animated.div, {
                                  className: a()(eV._v, { [eV.N7]: l, [eV.d5]: er }),
                                  style: { marginBottom: ev.value },
                                  children: eb,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eL.displayName = "CallTileOverlay";
let ew = /^(14256|21552)$/.test(t.j) ? F.$ : null,
    ez = e_;
