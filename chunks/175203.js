n.d(t, { Ay: () => ex, Yl: () => ef }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(382222),
    o = n(934551),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(397927),
    A = n(827343),
    _ = n(820284),
    m = n(793574),
    g = n(587895),
    p = n(429913),
    f = n(520698),
    x = n(164617),
    E = n(66004),
    I = n(958005),
    C = n(384059),
    N = n(556525),
    T = n(609425),
    S = n(73392),
    b = n(529020),
    y = n(401901),
    v = n(40056),
    j = n(117029),
    R = n(612258),
    O = n(551826),
    L = n(87001),
    M = n(574172),
    D = n(665691),
    U = n(209932),
    G = n(253932),
    P = n(461782),
    k = n(614518),
    w = n(706787),
    B = n(961350),
    V = n(760751),
    H = n(111162),
    F = n(430452),
    K = n(290863),
    W = n(485296),
    Y = n(977997),
    z = n(712687),
    q = n(790381),
    X = n(266080),
    J = n(723702),
    Q = n(837921),
    $ = n(141035),
    Z = n(654820),
    ee = n(804980),
    et = n(272812),
    en = n(203355),
    ei = n(83982),
    el = n(345812),
    es = n(110234),
    ea = n(652215),
    er = n(806931),
    eo = n(31408),
    ec = n(731854),
    ed = n(985018),
    eu = n(32685);
let eh = [er.lp.ACTIVITY],
    eA = l.memo((e) => {
        var t, n, s;
        let r,
            o,
            d,
            {
                participant: u,
                popoutType: m,
                onDoubleClick: x,
                onContextMenu: I,
                onClick: C,
                onMouseDown: T,
                onKeyDown: S,
                className: j,
                style: L,
                containerStyle: M,
                channel: z,
                width: q,
                onVideoResize: X,
                inCall: J = !1,
                selected: Q = !1,
                noBorder: el = !1,
                noVideoRender: eA = !1,
                focused: e_ = !1,
                blocked: em = !1,
                ignored: eg = !1,
                fit: ef = y.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: eE = !1,
                forceIdle: eI = !1,
                controlsBottom: eC,
            } = e,
            eN = l.useContext(P.vG) || eI,
            [eT, eS] = l.useState(!1),
            eb = G.Q_.useSetting(),
            ey = (0, c.bG)([H.default], () => H.default.isStreamInfoOverlayEnabled),
            [ev, ej] = l.useState(!1),
            eR = (0, c.bG)([B.default], () => B.default.getId()),
            eO = u.type === er.lp.ACTIVITY ? null : u.user,
            eL = eO?.id ?? null,
            [eM] = (0, p.A)(u.type === er.lp.ACTIVITY ? [u.applicationId] : []),
            eD = (0, c.bG)([F.Ay], () => null != eL && F.Ay.isLocalVideoDisabled(eL, (0, f.A)(u.type)), [eL, u.type]),
            eU = (0, c.bG)([F.Ay], () => (null != eL ? F.Ay.getVideoToggleState(eL, (0, f.A)(u.type)) : ea.bb8.NONE), [
                eL,
                u.type,
            ]),
            eG = eU === ea.bb8.AUTO_PROBING,
            { speaking: eP, ringing: ek, hasVideo: ew } = (0, es.A)(u, eR),
            eB = (0, c.bG)([U.A], () => null !== eL && U.A.isUserPlayingSounds(eL), [eL]),
            eV =
                ((t = eR),
                (n = u),
                (s = z.getGuildId()),
                (r = n.type !== er.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, c.cf)([Y.A], () => {
                    let e = Y.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, c.cf)([F.Ay], () => {
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
                    localMuted: d.muted,
                    muted: (n.type === er.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === er.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eH = u.type === er.lp.STREAM && eL === eR,
            eF = (0, c.bG)([k.A], () => (u.type === er.lp.USER && null != eL ? k.A.getEffectForUserId(eL) : null)),
            eK = (0, c.bG)([Y.A], () => Y.A.getVoicePlatformForChannel(z.id, eL ?? ea.dJq)),
            { showGameIcon: eW } = b.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eY = (0, c.bG)(
                [K.A],
                () =>
                    eW && null != eL
                        ? K.A.findActivity(eL, (e) => null != e.application_id && e.type === ea.$pd.PLAYING)
                        : null,
                [eW, eL],
            ),
            ez = (0, c.bG)([V.A], () => (eY?.application_id != null ? V.A.getDetectableGame(eY.application_id) : null)),
            eq = (0, c.bG)([g.A], () =>
                null != ez && eY?.application_id != null ? g.A.getApplication(eY?.application_id) : void 0,
            ),
            eX = (0, D.UF)({ userId: eL, channelId: z.id }),
            eJ = (0, D.DY)({ streamKey: u.type === er.lp.STREAM ? u.id : null, channelId: z.id }),
            eQ = l.useMemo(
                () => (u.type === er.lp.STREAM ? (eJ ?? !1) : u.type === er.lp.USER && (eX ?? !1)),
                [eJ, eX, u.type],
            );
        l.useEffect(() => {
            eS(e_);
        }, [e_]);
        let e$ = l.useCallback(() => {
                null != eL && A.A.toggleLocalMute(eL, ec.x.STREAM);
            }, [eL]),
            eZ = l.useCallback(
                (e) => {
                    C?.(u, e);
                },
                [C, u],
            ),
            e0 = l.useCallback(
                (e) => {
                    x?.(u, e);
                },
                [x, u],
            ),
            e1 = l.useCallback(
                (e, t, n) => {
                    I?.(u, e, t, n);
                },
                [I, u],
            ),
            e9 = null,
            e7 = null,
            e6 = "";
        switch (u.type) {
            case er.lp.STREAM:
                (e9 = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Q,
                    popoutType: m,
                    width: q,
                    fit: ef,
                    onVideoResize: X,
                    paused: ex,
                })),
                    (e7 = (0, i.jsx)(en.D, {
                        participant: u,
                        selected: Q,
                        width: q,
                        focused: e_,
                        idle: eN,
                        premiumIndicator: !1,
                    })),
                    (e6 = ed.intl.formatToPlainString(ed.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case er.lp.USER:
                (e9 = (0, i.jsx)(ei.A, {
                    channel: z,
                    inCall: J,
                    participant: u,
                    popoutType: m,
                    fit: ef,
                    onVideoResize: X,
                    paused: ex,
                    selected: Q,
                    width: q,
                    blocked: em,
                    ignored: eg,
                    noVideoRender: eA || eG,
                    pulseSpeakingIndicator: eE,
                })),
                    (e7 = (0, i.jsx)(ei.s, { participant: u, channelId: z.id })),
                    (e6 = ed.intl.formatToPlainString(ed.t["iC/x/Q"], { username: u.user.username }));
                break;
            case er.lp.ACTIVITY:
                (e9 = (0, i.jsx)(ee.Ay, { interactible: e_, participant: u, selected: Q, channel: z, width: q })),
                    (e6 = ed.intl.formatToPlainString(ed.t.YCvOsO, { activityName: eM?.name }));
                break;
            case er.lp.HIDDEN_STREAM:
                e9 = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Q,
                    width: q,
                    fit: ef,
                    onVideoResize: X,
                    paused: ex,
                    popoutType: m,
                });
        }
        let e2 = l.useRef(null),
            e5 = (0, c.bG)([W.A], () => (u.type === er.lp.USER ? W.A.getVoiceVolume(u.id) : -1 / 0)),
            e3 = (0, N.v)({ isSpeaking: eP, voiceDb: e5, spreadDirection: N.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, er.Ay)(u) ? h.kN9 : ew ? h.npA : h.EsG,
            e4 = u.type === er.lp.STREAM && e_;
        return (0, i.jsx)(_.A, {
            section: ea.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(v.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, i.jsx)("div", {
                    className: a()(eu.iE, { [eu.DF]: ek }, j),
                    style: M,
                    onMouseEnter: () => {
                        ej(!0);
                    },
                    onMouseLeave: () => {
                        ej(!1);
                    },
                    children: (0, i.jsxs)(O.A, {
                        shakeLocation: eo.uD.VOICE_USER,
                        isShaking: eP,
                        className: eu.Vs,
                        children: [
                            (0, i.jsx)(et.A, {
                                ref: e2,
                                className: a()(eu.Vs, { [eu.E7]: el, [eu.k_]: null == C, [eu.N7]: eN }),
                                noBorder: el,
                                style: L,
                                participantUserId: eL,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e6,
                                    className: eu.lG,
                                    onDoubleClick: e0,
                                    onContextMenu: (e) => e1(e, u.type === er.lp.STREAM),
                                    onClick: eZ,
                                    onMouseDown: T,
                                    onKeyDown: S,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eF && null != eL
                                            ? (0, i.jsx)(w.A, {
                                                  voiceChannelEffect: eF,
                                                  onComplete: () => (0, k.a)(eL),
                                                  userId: eL,
                                              })
                                            : null,
                                        u.type === er.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eu.nl,
                                                  children: (0, i.jsx)(E.A, {
                                                      userId: eL,
                                                      channelId: z.id,
                                                      guildId: z.getGuildId(),
                                                      containerDimensions: {
                                                          width: e2?.current?.clientWidth ?? 0,
                                                          height: e2?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        e9,
                                        el ? null : (0, i.jsx)("div", { className: eu.hD, children: e7 }),
                                        Q
                                            ? (0, i.jsx)("div", {
                                                  className: eu._Q,
                                                  children: (0, i.jsx)(e8, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eu.Dt,
                                                  }),
                                              })
                                            : null,
                                        eh.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(ep, {
                                                  focused: e_,
                                                  width: q,
                                                  inCall: J,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: ew ?? !1,
                                                  ...eV,
                                                  idle: eN,
                                                  platform: eK,
                                                  title: (0, $.A)(z, u),
                                                  blocked: em,
                                                  ignored: eg,
                                                  localVideoDisabled: eD,
                                                  videoToggleState: eU,
                                                  hideAudioIcon: eH,
                                                  onContextMenu: e1,
                                                  onToggleMute: e$,
                                                  participantUserId: eL,
                                                  channel: z,
                                                  application: eq,
                                                  secureFramesVerified: eQ,
                                                  isHovered: ev,
                                                  popoutType: m,
                                                  paused: ex,
                                                  controlsBottom: eC,
                                                  streamId: u.type === er.lp.STREAM ? u.streamId : null,
                                              }),
                                        J && !el
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eu.PQ, { [eu.pU]: !e_ && (eB || null != eF) }),
                                                  style: e_ || eB ? void 0 : e3,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eb && ey && ev && (0, i.jsx)(Z.A, { currentUserId: eR, participant: u }),
                            (0, i.jsx)(R.A, { isFiring: eT, callTileRef: e2.current }),
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
            return (0, i.jsx)(q.A, { className: l });
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
function eg(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s, idle: a } = e,
        r = l.useMemo(() => (0, I.A)(t, n), [t, n]),
        o = (0, c.bG)([L.A], () => L.A.getIsAlwaysOnTop(r)),
        d = l.useCallback(() => {
            (0, C.X)(m.A.CALL_TILE_POPOUT, C.O.STAY_ON_TOP, !o), M.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return J.isPlatformEmbedded && Q.Ay.supportsFeature(ea.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(em, {
              onClick: d,
              tooltipText: o ? ed.intl.string(ed.t.YdyDM9) : ed.intl.string(ed.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: s,
              idle: a,
          })
        : null;
}
eA.displayName = "CallTile";
let ep = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: A,
            videoToggleState: _,
            blocked: g,
            ignored: p,
            participantId: E,
            participantType: N,
            participantUserId: b,
            channel: y,
            platform: v,
            secureFramesVerified: R,
            onContextMenu: O,
            muted: L,
            deafened: D,
            localMuted: U,
            serverMuted: G,
            serverDeafened: P,
            hasVideo: k,
            hideAudioIcon: w,
            onToggleMute: B,
            popoutType: V,
            paused: H,
            controlsBottom: K,
            streamId: W,
        } = e,
        Y = (0, c.bG)([F.Ay], () => null != b && F.Ay.isLocalVideoAutoDisabled(b, (0, f.A)(N)), [b, N]),
        q = (0, T.A)({ userId: b, guildId: y.getGuildId() }),
        X = (0, S.a)({ displayNameStyles: q }),
        J = (0, el.Y)(s),
        Q = (0, el.V)(s),
        [$, Z] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== z.A.isOpen() && ((e = z.A.isOpen()) || Z(!1));
            };
        return z.A.addChangeListener(t), () => z.A.removeChangeListener(t);
    }, []);
    let ee = !w && N === er.lp.STREAM && k && (!Q || U),
        et = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: U, serverMuted: G, serverDeafened: P, deafened: D, muted: L }),
        en = (0, h.zhh)({ value: null != K ? K : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        ei = [];
    return (
        A && N === er.lp.STREAM && ei.push((0, i.jsx)(j.A, { streamId: W, paused: H }, "zoom-controls")),
        A
            ? V === x.N.CALL_TILE &&
              (ei.push(
                  (0, i.jsx)(eg, { channelId: y.id, participantId: E, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              ei.push(
                  (0, i.jsx)(
                      em,
                      {
                          onClick: () => {
                              (0, C.X)(m.A.CALL_TILE_POPOUT, C.O.POPOUT_RETURN), M.close((0, I.A)(y.id, E));
                          },
                          tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (ei.push(
                  (0, i.jsx)(
                      em,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), Z(!0), O(e, !0, er.GK.THREE_DOT);
                          },
                          tooltipText: ed.intl.string(ed.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !$,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              ee &&
                  ei.push(
                      (0, i.jsx)(
                          em,
                          {
                              onClick: B,
                              tooltipText: U ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
                              icon: U ? h._RO : h.HKD,
                              hideWhenInactive: !U && !$,
                              idle: t,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: a()(eu.MU, { [eu.oE]: Q, [eu.Ol]: A }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(eu.Ik, { [eu.EX]: s < 195 }),
                    children:
                        Y || _ === ea.bb8.AUTO_PROBING
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
                                              children: ed.intl.string(ed.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !J &&
                    (0, i.jsxs)("div", {
                        className: a()(eu.Qp, { [eu.EX]: s < 195 }),
                        children: [
                            (0, i.jsxs)(h.Text, {
                                className: eu.ac,
                                color: "none",
                                variant: Q ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != et &&
                                        N === er.lp.USER &&
                                        (0, i.jsx)(et, { className: eu.gr, size: "xs", color: "currentColor" }),
                                    g
                                        ? (0, i.jsx)("div", {
                                              className: eu.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: eu.Q6,
                                                  color: d.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    p
                                        ? (0, i.jsx)("div", {
                                              className: eu.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: eu.Q6 }),
                                          })
                                        : null,
                                    t ? null : (0, i.jsx)(e_, { participantType: N, platform: v, className: eu.gr }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: a()(eu.Wk, X), children: n }),
                                    R &&
                                        (0, i.jsx)(u.m, {
                                            text: ed.intl.string(ed.t.ZEem6O),
                                            children: (0, i.jsx)(h.m5V, {
                                                className: eu.vW,
                                                size: "xs",
                                                color: d.A.colors.TEXT_STRONG,
                                                "aria-label": ed.intl.string(ed.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            ei.length > 0
                                ? (0, i.jsx)(r.animated.div, {
                                      className: a()(eu._v, { [eu.N7]: t }),
                                      style: { marginBottom: en.value },
                                      children: ei,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ep.displayName = "CallTileOverlay";
let ef = y.$,
    ex = eA;
