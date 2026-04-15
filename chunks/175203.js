n.d(t, { Ay: () => ef, Yl: () => eg }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(407045),
    o = n(934551),
    d = n(311907),
    c = n(827734),
    u = n(990078),
    h = n(397927),
    A = n(827343),
    _ = n(820284),
    m = n(793574),
    p = n(429913),
    g = n(520698),
    f = n(164617),
    E = n(66004),
    x = n(958005),
    I = n(384059),
    C = n(556525),
    N = n(609425),
    T = n(73392),
    S = n(401901),
    b = n(40056),
    y = n(117029),
    v = n(612258),
    R = n(551826),
    j = n(87001),
    O = n(574172),
    L = n(665691),
    M = n(724759),
    D = n(635885),
    U = n(209932),
    G = n(253932),
    P = n(461782),
    k = n(614518),
    w = n(706787),
    B = n(961350),
    V = n(111162),
    H = n(430452),
    F = n(485296),
    W = n(977997),
    K = n(712687),
    Y = n(790381),
    z = n(266080),
    q = n(723702),
    X = n(837921),
    $ = n(141035),
    J = n(654820),
    Q = n(804980),
    Z = n(272812),
    ee = n(304047),
    et = n(203355),
    en = n(83982),
    ei = n(345812),
    el = n(110234),
    es = n(652215),
    ea = n(806931),
    er = n(31408),
    eo = n(731854),
    ed = n(985018),
    ec = n(633916);
let eu = [ea.lp.ACTIVITY],
    eh = l.memo((e) => {
        var t, n, s;
        let r,
            o,
            c,
            {
                participant: u,
                popoutType: m,
                onDoubleClick: f,
                onContextMenu: x,
                onClick: I,
                onMouseDown: N,
                onKeyDown: T,
                className: y,
                style: j,
                containerStyle: O,
                channel: M,
                width: D,
                onVideoResize: K,
                inCall: Y = !1,
                selected: z = !1,
                noBorder: q = !1,
                noVideoRender: X = !1,
                focused: ee = !1,
                blocked: ei = !1,
                ignored: eh = !1,
                fit: eA = S.$.CONTAIN,
                paused: e_ = !1,
                pulseSpeakingIndicator: em = !1,
                forceIdle: eg = !1,
                controlsBottom: ef,
            } = e,
            eE = l.useContext(P.vG) || eg,
            [ex, eI] = l.useState(!1),
            eC = G.Q_.useSetting(),
            eN = (0, d.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [eT, eS] = l.useState(!1),
            eb = (0, d.bG)([B.default], () => B.default.getId()),
            ey = u.type === ea.lp.ACTIVITY ? null : u.user,
            ev = ey?.id ?? null,
            [eR] = (0, p.A)(u.type === ea.lp.ACTIVITY ? [u.applicationId] : []),
            ej = (0, d.bG)([H.Ay], () => null != ev && H.Ay.isLocalVideoDisabled(ev, (0, g.A)(u.type)), [ev, u.type]),
            eO = (0, d.bG)([H.Ay], () => (null != ev ? H.Ay.getVideoToggleState(ev, (0, g.A)(u.type)) : es.bb8.NONE), [
                ev,
                u.type,
            ]),
            eL = eO === es.bb8.AUTO_PROBING,
            { speaking: eM, ringing: eD, hasVideo: eU } = (0, el.A)(u, eb),
            eG = (0, d.bG)([U.A], () => null !== ev && U.A.isUserPlayingSounds(ev), [ev]),
            eP =
                ((t = eb),
                (n = u),
                (s = M.getGuildId()),
                (r = n.type !== ea.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, d.cf)([W.A], () => {
                    let e = W.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([H.Ay], () => {
                    let e = (0, g.A)(n.type);
                    return t === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: H.Ay.isLocalMute(r, e),
                              localVideoDisabled: H.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: H.Ay.isLocalVideoAutoDisabled(r, e),
                          };
                }, [t, n.type, r])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: c.muted,
                    muted: (n.type === ea.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === ea.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ek = u.type === ea.lp.STREAM && ev === eb,
            ew = (0, d.bG)([k.A], () => (u.type === ea.lp.USER && null != ev ? k.A.getEffectForUserId(ev) : null)),
            eB = (0, d.bG)([W.A], () => W.A.getVoicePlatformForChannel(M.id, ev ?? es.dJq)),
            eV = (0, L.UF)({ userId: ev, channelId: M.id }),
            eH = (0, L.DY)({ streamKey: u.type === ea.lp.STREAM ? u.id : null, channelId: M.id }),
            eF = l.useMemo(
                () => (u.type === ea.lp.STREAM ? (eH ?? !1) : u.type === ea.lp.USER && (eV ?? !1)),
                [eH, eV, u.type],
            );
        l.useEffect(() => {
            eI(ee);
        }, [ee]);
        let eW = l.useCallback(() => {
                null != ev && A.A.toggleLocalMute(ev, eo.x.STREAM);
            }, [ev]),
            eK = l.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eY = l.useCallback(
                (e) => {
                    f?.(u, e);
                },
                [f, u],
            ),
            ez = l.useCallback(
                (e, t, n) => {
                    x?.(u, e, t, n);
                },
                [x, u],
            ),
            eq = null,
            eX = null,
            e$ = "";
        switch (u.type) {
            case ea.lp.STREAM:
                (eq = (0, i.jsx)(et.A, {
                    participant: u,
                    selected: z,
                    popoutType: m,
                    width: D,
                    fit: eA,
                    onVideoResize: K,
                    paused: e_,
                })),
                    (eX = (0, i.jsx)(et.D, {
                        participant: u,
                        selected: z,
                        width: D,
                        focused: ee,
                        idle: eE,
                        premiumIndicator: !1,
                    })),
                    (e$ = ed.intl.formatToPlainString(ed.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case ea.lp.USER:
                (eq = (0, i.jsx)(en.A, {
                    channel: M,
                    inCall: Y,
                    participant: u,
                    popoutType: m,
                    fit: eA,
                    onVideoResize: K,
                    paused: e_,
                    selected: z,
                    width: D,
                    blocked: ei,
                    ignored: eh,
                    noVideoRender: X || eL,
                    pulseSpeakingIndicator: em,
                })),
                    (eX = (0, i.jsx)(en.s, { participant: u, channelId: M.id })),
                    (e$ = ed.intl.formatToPlainString(ed.t["iC/x/Q"], { username: u.user.username }));
                break;
            case ea.lp.ACTIVITY:
                (eq = (0, i.jsx)(Q.Ay, { interactible: ee, participant: u, selected: z, channel: M, width: D })),
                    (e$ = ed.intl.formatToPlainString(ed.t.YCvOsO, { activityName: eR?.name }));
                break;
            case ea.lp.HIDDEN_STREAM:
                eq = (0, i.jsx)(et.A, {
                    participant: u,
                    selected: z,
                    width: D,
                    fit: eA,
                    onVideoResize: K,
                    paused: e_,
                    popoutType: m,
                });
        }
        let eJ = l.useRef(null),
            eQ = (0, d.bG)([F.A], () => (u.type === ea.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0)),
            eZ = (0, C.v)({ isSpeaking: eM, voiceDb: eQ, spreadDirection: C.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e0 = (0, ea.Ay)(u) ? h.kN9 : eU ? h.npA : h.EsG,
            e1 = u.type === ea.lp.STREAM && ee;
        return (0, i.jsx)(_.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(b.Ay, {
                streamKey: u.id,
                enableZoom: e1,
                children: (0, i.jsx)("div", {
                    className: a()(ec.iE, { [ec.DF]: eD }, y),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0);
                    },
                    onMouseLeave: () => {
                        eS(!1);
                    },
                    children: (0, i.jsxs)(R.A, {
                        shakeLocation: er.uD.VOICE_USER,
                        isShaking: eM,
                        className: ec.Vs,
                        children: [
                            (0, i.jsx)(Z.A, {
                                ref: eJ,
                                className: a()(ec.Vs, { [ec.E7]: q, [ec.k_]: null == I, [ec.N7]: eE }),
                                noBorder: q,
                                style: j,
                                participantUserId: ev,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e$,
                                    className: ec.lG,
                                    onDoubleClick: eY,
                                    onContextMenu: (e) => ez(e, u.type === ea.lp.STREAM),
                                    onClick: eK,
                                    onMouseDown: N,
                                    onKeyDown: T,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != ew && null != ev
                                            ? (0, i.jsx)(w.A, {
                                                  voiceChannelEffect: ew,
                                                  onComplete: () => (0, k.a)(ev),
                                                  userId: ev,
                                              })
                                            : null,
                                        u.type === ea.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: ec.nl,
                                                  children: (0, i.jsx)(E.A, {
                                                      userId: ev,
                                                      channelId: M.id,
                                                      guildId: M.getGuildId(),
                                                      containerDimensions: {
                                                          width: eJ?.current?.clientWidth ?? 0,
                                                          height: eJ?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eq,
                                        q ? null : (0, i.jsx)("div", { className: ec.hD, children: eX }),
                                        z
                                            ? (0, i.jsx)("div", {
                                                  className: ec._Q,
                                                  children: (0, i.jsx)(e0, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: ec.Dt,
                                                  }),
                                              })
                                            : null,
                                        eu.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(ep, {
                                                  focused: ee,
                                                  width: D,
                                                  inCall: Y,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...eP,
                                                  idle: eE,
                                                  platform: eB,
                                                  title: (0, $.A)(M, u),
                                                  blocked: ei,
                                                  ignored: eh,
                                                  localVideoDisabled: ej,
                                                  videoToggleState: eO,
                                                  hideAudioIcon: ek,
                                                  onContextMenu: ez,
                                                  onToggleMute: eW,
                                                  participantUserId: ev,
                                                  channel: M,
                                                  secureFramesVerified: eF,
                                                  isHovered: eT,
                                                  popoutType: m,
                                                  paused: e_,
                                                  controlsBottom: ef,
                                                  streamId: u.type === ea.lp.STREAM ? u.streamId : null,
                                              }),
                                        Y && !q
                                            ? (0, i.jsx)("div", {
                                                  className: a()(ec.PQ, { [ec.pU]: !ee && (eG || null != ew) }),
                                                  style: ee || eG ? void 0 : eZ,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eC && eN && eT && (0, i.jsx)(J.A, { currentUserId: eb, participant: u }),
                            (0, i.jsx)(v.A, { isFiring: ex, callTileRef: eJ.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eA(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === ea.lp.STREAM)
        return n === ea.J7.XBOX
            ? (0, i.jsx)(z.A, { className: l })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case ea.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: l });
        case ea.J7.XBOX:
            return (0, i.jsx)(z.A, { className: l });
        case ea.J7.PLAYSTATION:
            return (0, i.jsx)(Y.A, { className: l });
        case ea.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function e_(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, idle: s, onClick: r } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(ec.V7, { [ec.kl]: l, [ec.N7]: s }),
            children: (0, i.jsx)(h.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), r(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function em(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s, idle: a } = e,
        r = l.useMemo(() => (0, x.A)(t, n), [t, n]),
        o = (0, d.bG)([j.A], () => j.A.getIsAlwaysOnTop(r)),
        c = l.useCallback(() => {
            (0, I.X)(m.A.CALL_TILE_POPOUT, I.O.STAY_ON_TOP, !o), O.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return q.isPlatformEmbedded && X.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(e_, {
              onClick: c,
              tooltipText: o ? ed.intl.string(ed.t.YdyDM9) : ed.intl.string(ed.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: s,
              idle: a,
          })
        : null;
}
eh.displayName = "CallTile";
let ep = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: A,
            videoToggleState: _,
            blocked: p,
            ignored: E,
            participantId: C,
            participantType: S,
            participantUserId: b,
            channel: v,
            platform: R,
            secureFramesVerified: j,
            onContextMenu: L,
            muted: U,
            deafened: G,
            localMuted: P,
            serverMuted: k,
            serverDeafened: w,
            hasVideo: V,
            hideAudioIcon: F,
            onToggleMute: W,
            popoutType: Y,
            paused: z,
            controlsBottom: q,
            streamId: X,
        } = e,
        $ = (0, d.bG)([B.default], () => B.default.getId()),
        J = (0, M.B)({ location: "call_tile" }),
        Q = (0, D.V)(J ? b : null),
        Z = (0, d.bG)([H.Ay], () => null != b && H.Ay.isLocalVideoAutoDisabled(b, (0, g.A)(S)), [b, S]),
        et = (0, N.A)({ userId: b, guildId: v.getGuildId() }),
        en = (0, T.a)({ displayNameStyles: et }),
        el = (0, ei.Yb)(s),
        er = (0, ei.VE)(s),
        eo = (0, ei.DO)(s),
        [eu, eh] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== K.A.isOpen() && ((e = K.A.isOpen()) || eh(!1));
            };
        return K.A.addChangeListener(t), () => K.A.removeChangeListener(t);
    }, []);
    let ep = !F && S === ea.lp.STREAM && V && (!er || P),
        eg = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: P, serverMuted: k, serverDeafened: w, deafened: G, muted: U }),
        ef = (0, h.zhh)({ value: null != q ? q : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eE = [];
    A && S === ea.lp.STREAM && eE.push((0, i.jsx)(y.A, { streamId: X, paused: z }, "zoom-controls")),
        A
            ? Y === f.N.CALL_TILE &&
              (eE.push(
                  (0, i.jsx)(em, { channelId: v.id, participantId: C, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eE.push(
                  (0, i.jsx)(
                      e_,
                      {
                          onClick: () => {
                              (0, I.X)(m.A.CALL_TILE_POPOUT, I.O.POPOUT_RETURN), O.close((0, x.A)(v.id, C));
                          },
                          tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (J &&
                  !eo &&
                  S === ea.lp.USER &&
                  null != b &&
                  b !== $ &&
                  null != Q &&
                  eE.push(
                      (0, i.jsx)(
                          ee.M,
                          { userId: b, channel: v, applicationId: Q, hideWhenInactive: !eu, idle: t },
                          "gift",
                      ),
                  ),
              eE.push(
                  (0, i.jsx)(
                      e_,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), eh(!0), L(e, !0, ea.GK.THREE_DOT);
                          },
                          tooltipText: ed.intl.string(ed.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !eu,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              ep &&
                  eE.push(
                      (0, i.jsx)(
                          e_,
                          {
                              onClick: W,
                              tooltipText: P ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
                              icon: P ? h._RO : h.HKD,
                              hideWhenInactive: !P && !eu,
                              idle: t,
                          },
                          "mute",
                      ),
                  ));
    let ex = [];
    null != eg &&
        S === ea.lp.USER &&
        ex.push((0, i.jsx)(eg, { className: ec.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        p &&
            ex.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: ec.Z5,
                        children: (0, i.jsx)(h.KTN, {
                            size: "lg",
                            className: ec.Q6,
                            color: c.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        E &&
            ex.push(
                (0, i.jsx)(
                    "div",
                    { className: ec.PP, children: (0, i.jsx)(h.G3N, { size: "lg", className: ec.Q6 }) },
                    "ignored-icon",
                ),
            ),
        t || ex.push((0, i.jsx)(eA, { participantType: S, platform: R, className: ec.gr }, "title-icon")),
        null == n ||
            "" === n ||
            t ||
            ex.push((0, i.jsx)("span", { className: a()(ec.Wk, en), children: n }, "title-text")),
        j &&
            ex.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: ed.intl.string(ed.t.ZEem6O),
                        children: (0, i.jsx)(h.m5V, {
                            className: ec.vW,
                            size: "xs",
                            color: c.A.colors.TEXT_STRONG,
                            "aria-label": ed.intl.string(ed.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eI =
        !J || A || t || eo || S !== ea.lp.USER || null == b || null == Q
            ? null
            : (0, i.jsx)(ee.X, { applicationId: Q, hideApplicationName: er });
    return (0, i.jsxs)("div", {
        className: a()(ec.MU, { [ec.oE]: er, [ec.Ol]: A }),
        children: [
            (0, i.jsx)("div", {
                className: a()(ec.Ik, { [ec.EX]: s < 195 }),
                children:
                    Z || _ === es.bb8.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)("div", {
                                  className: ec.h5,
                                  children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(ec.ns, ec.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: ec.h5,
                                          children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(h.Text, {
                                          variant: "text-sm/normal",
                                          className: ec.Wk,
                                          children: ed.intl.string(ed.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !el &&
                (0, i.jsxs)("div", {
                    className: a()(ec.Qp, { [ec.EX]: s < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(ec.qV, { [ec.d5]: J }),
                            children: [
                                ex.length > 0 &&
                                    (0, i.jsx)(h.Text, {
                                        className: ec.ac,
                                        color: "none",
                                        variant: er ? "text-sm/normal" : "text-md/normal",
                                        children: ex,
                                    }),
                                eI,
                            ],
                        }),
                        eE.length > 0
                            ? (0, i.jsx)(r.animated.div, {
                                  className: a()(ec._v, { [ec.N7]: t, [ec.d5]: J }),
                                  style: { marginBottom: ef.value },
                                  children: eE,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ep.displayName = "CallTileOverlay";
let eg = S.$,
    ef = eh;
