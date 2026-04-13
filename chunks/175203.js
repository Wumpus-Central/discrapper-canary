n.d(t, { Ay: () => eE, Yl: () => ef }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(934551),
    d = n(311907),
    c = n(827734),
    u = n(990078),
    h = n(397927),
    A = n(827343),
    _ = n(820284),
    m = n(793574),
    p = n(294323),
    g = n(429913),
    f = n(520698),
    E = n(164617),
    x = n(66004),
    I = n(958005),
    C = n(384059),
    N = n(556525),
    T = n(609425),
    S = n(73392),
    b = n(401901),
    y = n(40056),
    v = n(117029),
    j = n(612258),
    R = n(551826),
    O = n(87001),
    L = n(574172),
    M = n(665691),
    D = n(724759),
    U = n(635885),
    G = n(209932),
    P = n(253932),
    k = n(461782),
    w = n(614518),
    B = n(706787),
    V = n(961350),
    H = n(111162),
    F = n(430452),
    W = n(485296),
    K = n(977997),
    Y = n(712687),
    z = n(790381),
    X = n(266080),
    q = n(723702),
    $ = n(837921),
    Q = n(141035),
    J = n(654820),
    Z = n(804980),
    ee = n(272812),
    et = n(304047),
    en = n(203355),
    ei = n(83982),
    el = n(345812),
    es = n(110234),
    ea = n(652215),
    er = n(806931),
    eo = n(31408),
    ed = n(731854),
    ec = n(985018),
    eu = n(633916);
let eh = [er.lp.ACTIVITY],
    eA = l.memo((e) => {
        var t, n, s;
        let r,
            o,
            c,
            {
                participant: u,
                popoutType: m,
                onDoubleClick: p,
                onContextMenu: E,
                onClick: I,
                onMouseDown: C,
                onKeyDown: T,
                className: S,
                style: v,
                containerStyle: O,
                channel: L,
                width: D,
                onVideoResize: U,
                inCall: Y = !1,
                selected: z = !1,
                noBorder: X = !1,
                noVideoRender: q = !1,
                focused: $ = !1,
                blocked: et = !1,
                ignored: el = !1,
                fit: eA = b.$.CONTAIN,
                paused: e_ = !1,
                pulseSpeakingIndicator: em = !1,
                forceIdle: ep = !1,
                controlsBottom: ef,
            } = e,
            eE = l.useContext(k.vG) || ep,
            [ex, eI] = l.useState(!1),
            eC = P.Q_.useSetting(),
            eN = (0, d.bG)([H.default], () => H.default.isStreamInfoOverlayEnabled),
            [eT, eS] = l.useState(!1),
            eb = (0, d.bG)([V.default], () => V.default.getId()),
            ey = u.type === er.lp.ACTIVITY ? null : u.user,
            ev = ey?.id ?? null,
            [ej] = (0, g.A)(u.type === er.lp.ACTIVITY ? [u.applicationId] : []),
            eR = (0, d.bG)([F.Ay], () => null != ev && F.Ay.isLocalVideoDisabled(ev, (0, f.A)(u.type)), [ev, u.type]),
            eO = (0, d.bG)([F.Ay], () => (null != ev ? F.Ay.getVideoToggleState(ev, (0, f.A)(u.type)) : ea.bb8.NONE), [
                ev,
                u.type,
            ]),
            eL = eO === ea.bb8.AUTO_PROBING,
            { speaking: eM, ringing: eD, hasVideo: eU } = (0, es.A)(u, eb),
            eG = (0, d.bG)([G.A], () => null !== ev && G.A.isUserPlayingSounds(ev), [ev]),
            eP =
                ((t = eb),
                (n = u),
                (s = L.getGuildId()),
                (r = n.type !== er.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, d.cf)([K.A], () => {
                    let e = K.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([F.Ay], () => {
                    let e = (0, f.A)(n.type);
                    return t === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: F.Ay.isLocalMute(r, e),
                              localVideoDisabled: F.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: F.Ay.isLocalVideoAutoDisabled(r, e),
                          };
                }, [t, n.type, r])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: c.muted,
                    muted: (n.type === er.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === er.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ek = u.type === er.lp.STREAM && ev === eb,
            ew = (0, d.bG)([w.A], () => (u.type === er.lp.USER && null != ev ? w.A.getEffectForUserId(ev) : null)),
            eB = (0, d.bG)([K.A], () => K.A.getVoicePlatformForChannel(L.id, ev ?? ea.dJq)),
            eV = (0, M.UF)({ userId: ev, channelId: L.id }),
            eH = (0, M.DY)({ streamKey: u.type === er.lp.STREAM ? u.id : null, channelId: L.id }),
            eF = l.useMemo(
                () => (u.type === er.lp.STREAM ? (eH ?? !1) : u.type === er.lp.USER && (eV ?? !1)),
                [eH, eV, u.type],
            );
        l.useEffect(() => {
            eI($);
        }, [$]);
        let eW = l.useCallback(() => {
                null != ev && A.A.toggleLocalMute(ev, ed.x.STREAM);
            }, [ev]),
            eK = l.useCallback(
                (e) => {
                    I?.(u, e);
                },
                [I, u],
            ),
            eY = l.useCallback(
                (e) => {
                    p?.(u, e);
                },
                [p, u],
            ),
            ez = l.useCallback(
                (e, t, n) => {
                    E?.(u, e, t, n);
                },
                [E, u],
            ),
            eX = null,
            eq = null,
            e$ = "";
        switch (u.type) {
            case er.lp.STREAM:
                (eX = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: z,
                    popoutType: m,
                    width: D,
                    fit: eA,
                    onVideoResize: U,
                    paused: e_,
                })),
                    (eq = (0, i.jsx)(en.D, {
                        participant: u,
                        selected: z,
                        width: D,
                        focused: $,
                        idle: eE,
                        premiumIndicator: !1,
                    })),
                    (e$ = ec.intl.formatToPlainString(ec.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case er.lp.USER:
                (eX = (0, i.jsx)(ei.A, {
                    channel: L,
                    inCall: Y,
                    participant: u,
                    popoutType: m,
                    fit: eA,
                    onVideoResize: U,
                    paused: e_,
                    selected: z,
                    width: D,
                    blocked: et,
                    ignored: el,
                    noVideoRender: q || eL,
                    pulseSpeakingIndicator: em,
                })),
                    (eq = (0, i.jsx)(ei.s, { participant: u, channelId: L.id })),
                    (e$ = ec.intl.formatToPlainString(ec.t["iC/x/Q"], { username: u.user.username }));
                break;
            case er.lp.ACTIVITY:
                (eX = (0, i.jsx)(Z.Ay, { interactible: $, participant: u, selected: z, channel: L, width: D })),
                    (e$ = ec.intl.formatToPlainString(ec.t.YCvOsO, { activityName: ej?.name }));
                break;
            case er.lp.HIDDEN_STREAM:
                eX = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: z,
                    width: D,
                    fit: eA,
                    onVideoResize: U,
                    paused: e_,
                    popoutType: m,
                });
        }
        let eQ = l.useRef(null),
            eJ = (0, d.bG)([W.A], () => (u.type === er.lp.USER ? W.A.getVoiceVolume(u.id) : -1 / 0)),
            eZ = (0, N.v)({ isSpeaking: eM, voiceDb: eJ, spreadDirection: N.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e0 = (0, er.Ay)(u) ? h.kN9 : eU ? h.npA : h.EsG,
            e1 = u.type === er.lp.STREAM && $;
        return (0, i.jsx)(_.A, {
            section: ea.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(y.Ay, {
                streamKey: u.id,
                enableZoom: e1,
                children: (0, i.jsx)("div", {
                    className: a()(eu.iE, { [eu.DF]: eD }, S),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0);
                    },
                    onMouseLeave: () => {
                        eS(!1);
                    },
                    children: (0, i.jsxs)(R.A, {
                        shakeLocation: eo.uD.VOICE_USER,
                        isShaking: eM,
                        className: eu.Vs,
                        children: [
                            (0, i.jsx)(ee.A, {
                                ref: eQ,
                                className: a()(eu.Vs, { [eu.E7]: X, [eu.k_]: null == I, [eu.N7]: eE }),
                                noBorder: X,
                                style: v,
                                participantUserId: ev,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e$,
                                    className: eu.lG,
                                    onDoubleClick: eY,
                                    onContextMenu: (e) => ez(e, u.type === er.lp.STREAM),
                                    onClick: eK,
                                    onMouseDown: C,
                                    onKeyDown: T,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != ew && null != ev
                                            ? (0, i.jsx)(B.A, {
                                                  voiceChannelEffect: ew,
                                                  onComplete: () => (0, w.a)(ev),
                                                  userId: ev,
                                              })
                                            : null,
                                        u.type === er.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eu.nl,
                                                  children: (0, i.jsx)(x.A, {
                                                      userId: ev,
                                                      channelId: L.id,
                                                      guildId: L.getGuildId(),
                                                      containerDimensions: {
                                                          width: eQ?.current?.clientWidth ?? 0,
                                                          height: eQ?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eX,
                                        X ? null : (0, i.jsx)("div", { className: eu.hD, children: eq }),
                                        z
                                            ? (0, i.jsx)("div", {
                                                  className: eu._Q,
                                                  children: (0, i.jsx)(e0, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eu.Dt,
                                                  }),
                                              })
                                            : null,
                                        eh.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(eg, {
                                                  focused: $,
                                                  width: D,
                                                  inCall: Y,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...eP,
                                                  idle: eE,
                                                  platform: eB,
                                                  title: (0, Q.A)(L, u),
                                                  blocked: et,
                                                  ignored: el,
                                                  localVideoDisabled: eR,
                                                  videoToggleState: eO,
                                                  hideAudioIcon: ek,
                                                  onContextMenu: ez,
                                                  onToggleMute: eW,
                                                  participantUserId: ev,
                                                  channel: L,
                                                  secureFramesVerified: eF,
                                                  isHovered: eT,
                                                  popoutType: m,
                                                  paused: e_,
                                                  controlsBottom: ef,
                                                  streamId: u.type === er.lp.STREAM ? u.streamId : null,
                                              }),
                                        Y && !X
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eu.PQ, { [eu.pU]: !$ && (eG || null != ew) }),
                                                  style: $ || eG ? void 0 : eZ,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eC && eN && eT && (0, i.jsx)(J.A, { currentUserId: eb, participant: u }),
                            (0, i.jsx)(j.A, { isFiring: ex, callTileRef: eQ.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function e_(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === er.lp.STREAM)
        return n === er.J7.XBOX
            ? (0, i.jsx)(X.A, { className: l })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case er.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: l });
        case er.J7.XBOX:
            return (0, i.jsx)(X.A, { className: l });
        case er.J7.PLAYSTATION:
            return (0, i.jsx)(z.A, { className: l });
        case er.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function em(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, idle: s, onClick: r } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(eu.V7, { [eu.kl]: l, [eu.N7]: s }),
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
function ep(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s, idle: a } = e,
        r = l.useMemo(() => (0, I.A)(t, n), [t, n]),
        o = (0, d.bG)([O.A], () => O.A.getIsAlwaysOnTop(r)),
        c = l.useCallback(() => {
            (0, C.X)(m.A.CALL_TILE_POPOUT, C.O.STAY_ON_TOP, !o), L.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return q.isPlatformEmbedded && $.Ay.supportsFeature(ea.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(em, {
              onClick: c,
              tooltipText: o ? ec.intl.string(ec.t.YdyDM9) : ec.intl.string(ec.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: s,
              idle: a,
          })
        : null;
}
eA.displayName = "CallTile";
let eg = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: A,
            videoToggleState: _,
            blocked: g,
            ignored: x,
            participantId: N,
            participantType: b,
            participantUserId: y,
            channel: j,
            platform: R,
            secureFramesVerified: O,
            onContextMenu: M,
            muted: G,
            deafened: P,
            localMuted: k,
            serverMuted: w,
            serverDeafened: B,
            hasVideo: H,
            hideAudioIcon: W,
            onToggleMute: K,
            popoutType: z,
            paused: X,
            controlsBottom: q,
            streamId: $,
        } = e,
        Q = (0, d.bG)([V.default], () => V.default.getId()),
        { enabled: J, gameDetailsButtonMode: Z } = D.zK.useConfig({ location: "call_tile" }),
        ee = (0, U.V)(J ? y : null),
        [en, ei] = b === er.lp.USER && Z === D.HW.OPEN_APPLICATION_WIDGET ? [y, ee] : [null, null],
        es = (0, p.A)(en, ei, "call_tile"),
        eo = (0, d.bG)([F.Ay], () => null != y && F.Ay.isLocalVideoAutoDisabled(y, (0, f.A)(b)), [y, b]),
        ed = (0, T.A)({ userId: y, guildId: j.getGuildId() }),
        eh = (0, S.a)({ displayNameStyles: ed }),
        eA = (0, el.Yb)(s),
        eg = (0, el.VE)(s),
        ef = (0, el.DO)(s),
        [eE, ex] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== Y.A.isOpen() && ((e = Y.A.isOpen()) || ex(!1));
            };
        return Y.A.addChangeListener(t), () => Y.A.removeChangeListener(t);
    }, []);
    let eI = !W && b === er.lp.STREAM && H && (!eg || k),
        eC = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: k, serverMuted: w, serverDeafened: B, deafened: P, muted: G }),
        eN = (0, h.zhh)({ value: null != q ? q : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eT = [];
    A && b === er.lp.STREAM && eT.push((0, i.jsx)(v.A, { streamId: $, paused: X }, "zoom-controls")),
        A
            ? z === E.N.CALL_TILE &&
              (eT.push(
                  (0, i.jsx)(ep, { channelId: j.id, participantId: N, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eT.push(
                  (0, i.jsx)(
                      em,
                      {
                          onClick: () => {
                              (0, C.X)(m.A.CALL_TILE_POPOUT, C.O.POPOUT_RETURN), L.close((0, I.A)(j.id, N));
                          },
                          tooltipText: ec.intl.string(ec.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (J &&
                  !ef &&
                  b === er.lp.USER &&
                  null != y &&
                  y !== Q &&
                  null != ee &&
                  eT.push(
                      (0, i.jsx)(
                          et.MI,
                          { userId: y, channel: j, applicationId: ee, hideWhenInactive: !eE, idle: t },
                          "gift",
                      ),
                  ),
              eT.push(
                  (0, i.jsx)(
                      em,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), ex(!0), M(e, !0, er.GK.THREE_DOT);
                          },
                          tooltipText: ec.intl.string(ec.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !eE,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              eI &&
                  eT.push(
                      (0, i.jsx)(
                          em,
                          {
                              onClick: K,
                              tooltipText: k ? ec.intl.string(ec.t.YqAjXy) : ec.intl.string(ec.t.w4m945),
                              icon: k ? h._RO : h.HKD,
                              hideWhenInactive: !k && !eE,
                              idle: t,
                          },
                          "mute",
                      ),
                  ));
    let eS = [];
    null != eC &&
        b === er.lp.USER &&
        eS.push((0, i.jsx)(eC, { className: eu.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        g &&
            eS.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eu.Z5,
                        children: (0, i.jsx)(h.KTN, {
                            size: "lg",
                            className: eu.Q6,
                            color: c.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        x &&
            eS.push(
                (0, i.jsx)(
                    "div",
                    { className: eu.PP, children: (0, i.jsx)(h.G3N, { size: "lg", className: eu.Q6 }) },
                    "ignored-icon",
                ),
            ),
        t || eS.push((0, i.jsx)(e_, { participantType: b, platform: R, className: eu.gr }, "title-icon")),
        null == n ||
            "" === n ||
            t ||
            eS.push((0, i.jsx)("span", { className: a()(eu.Wk, eh), children: n }, "title-text")),
        O &&
            eS.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: ec.intl.string(ec.t.ZEem6O),
                        children: (0, i.jsx)(h.m5V, {
                            className: eu.vW,
                            size: "xs",
                            color: c.A.colors.TEXT_STRONG,
                            "aria-label": ec.intl.string(ec.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eb = null;
    return (
        !J ||
            A ||
            t ||
            ef ||
            b !== er.lp.USER ||
            null == y ||
            null == ee ||
            (Z === D.HW.OPEN_APPLICATION_WIDGET
                ? (eb = (0, i.jsx)(et.sU, {
                      userId: y,
                      applicationId: ee,
                      channel: j,
                      hasApplicationWidget: es.hasApplicationWidgetOnUserProfile,
                      hideApplicationName: eg,
                  }))
                : Z === D.HW.OPEN_GAME_PROFILE &&
                  (eb = (0, i.jsx)(et.X0, { applicationId: ee, hideApplicationName: eg }))),
        (0, i.jsxs)("div", {
            className: a()(eu.MU, { [eu.oE]: eg, [eu.Ol]: A }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(eu.Ik, { [eu.EX]: s < 195 }),
                    children:
                        eo || _ === ea.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: eu.h5,
                                      children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: a()(eu.ns, eu.WP),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: eu.h5,
                                              children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                          }),
                                          (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: eu.Wk,
                                              children: ec.intl.string(ec.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !eA &&
                    (0, i.jsxs)("div", {
                        className: a()(eu.Qp, { [eu.EX]: s < 195 }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(eu.qV, { [eu.d5]: J }),
                                children: [
                                    eS.length > 0 &&
                                        (0, i.jsx)(h.Text, {
                                            className: eu.ac,
                                            color: "none",
                                            variant: eg ? "text-sm/normal" : "text-md/normal",
                                            children: eS,
                                        }),
                                    eb,
                                ],
                            }),
                            eT.length > 0
                                ? (0, i.jsx)(r.animated.div, {
                                      className: a()(eu._v, { [eu.N7]: t, [eu.d5]: J }),
                                      style: { marginBottom: eN.value },
                                      children: eT,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
eg.displayName = "CallTileOverlay";
let ef = b.$,
    eE = eA;
