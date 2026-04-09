n.d(t, { Ay: () => ef, Yl: () => ep }), n(321073);
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
    g = n(429913),
    p = n(520698),
    f = n(164617),
    x = n(66004),
    E = n(958005),
    I = n(384059),
    C = n(556525),
    N = n(609425),
    T = n(73392),
    S = n(401901),
    b = n(40056),
    v = n(117029),
    y = n(612258),
    j = n(551826),
    R = n(87001),
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
    ec = n(32685);
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
                onContextMenu: E,
                onClick: I,
                onMouseDown: N,
                onKeyDown: T,
                className: v,
                style: R,
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
                forceIdle: ep = !1,
                controlsBottom: ef,
            } = e,
            ex = l.useContext(P.vG) || ep,
            [eE, eI] = l.useState(!1),
            eC = G.Q_.useSetting(),
            eN = (0, d.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [eT, eS] = l.useState(!1),
            eb = (0, d.bG)([B.default], () => B.default.getId()),
            ev = u.type === ea.lp.ACTIVITY ? null : u.user,
            ey = ev?.id ?? null,
            [ej] = (0, g.A)(u.type === ea.lp.ACTIVITY ? [u.applicationId] : []),
            eR = (0, d.bG)([H.Ay], () => null != ey && H.Ay.isLocalVideoDisabled(ey, (0, p.A)(u.type)), [ey, u.type]),
            eO = (0, d.bG)([H.Ay], () => (null != ey ? H.Ay.getVideoToggleState(ey, (0, p.A)(u.type)) : es.bb8.NONE), [
                ey,
                u.type,
            ]),
            eL = eO === es.bb8.AUTO_PROBING,
            { speaking: eM, ringing: eD, hasVideo: eU } = (0, el.A)(u, eb),
            eG = (0, d.bG)([U.A], () => null !== ey && U.A.isUserPlayingSounds(ey), [ey]),
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
                    let e = (0, p.A)(n.type);
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
            ek = u.type === ea.lp.STREAM && ey === eb,
            ew = (0, d.bG)([k.A], () => (u.type === ea.lp.USER && null != ey ? k.A.getEffectForUserId(ey) : null)),
            eB = (0, d.bG)([W.A], () => W.A.getVoicePlatformForChannel(M.id, ey ?? es.dJq)),
            eV = (0, L.UF)({ userId: ey, channelId: M.id }),
            eH = (0, L.DY)({ streamKey: u.type === ea.lp.STREAM ? u.id : null, channelId: M.id }),
            eF = l.useMemo(
                () => (u.type === ea.lp.STREAM ? (eH ?? !1) : u.type === ea.lp.USER && (eV ?? !1)),
                [eH, eV, u.type],
            );
        l.useEffect(() => {
            eI(ee);
        }, [ee]);
        let eW = l.useCallback(() => {
                null != ey && A.A.toggleLocalMute(ey, eo.x.STREAM);
            }, [ey]),
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
                    E?.(u, e, t, n);
                },
                [E, u],
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
                        idle: ex,
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
                    (e$ = ed.intl.formatToPlainString(ed.t.YCvOsO, { activityName: ej?.name }));
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
                    className: a()(ec.iE, { [ec.DF]: eD }, v),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0);
                    },
                    onMouseLeave: () => {
                        eS(!1);
                    },
                    children: (0, i.jsxs)(j.A, {
                        shakeLocation: er.uD.VOICE_USER,
                        isShaking: eM,
                        className: ec.Vs,
                        children: [
                            (0, i.jsx)(Z.A, {
                                ref: eJ,
                                className: a()(ec.Vs, { [ec.E7]: q, [ec.k_]: null == I, [ec.N7]: ex }),
                                noBorder: q,
                                style: R,
                                participantUserId: ey,
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
                                        null != ew && null != ey
                                            ? (0, i.jsx)(w.A, {
                                                  voiceChannelEffect: ew,
                                                  onComplete: () => (0, k.a)(ey),
                                                  userId: ey,
                                              })
                                            : null,
                                        u.type === ea.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: ec.nl,
                                                  children: (0, i.jsx)(x.A, {
                                                      userId: ey,
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
                                            : (0, i.jsx)(eg, {
                                                  focused: ee,
                                                  width: D,
                                                  inCall: Y,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...eP,
                                                  idle: ex,
                                                  platform: eB,
                                                  title: (0, $.A)(M, u),
                                                  blocked: ei,
                                                  ignored: eh,
                                                  localVideoDisabled: eR,
                                                  videoToggleState: eO,
                                                  hideAudioIcon: ek,
                                                  onContextMenu: ez,
                                                  onToggleMute: eW,
                                                  participantUserId: ey,
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
                            (0, i.jsx)(y.A, { isFiring: eE, callTileRef: eJ.current }),
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
        r = l.useMemo(() => (0, E.A)(t, n), [t, n]),
        o = (0, d.bG)([R.A], () => R.A.getIsAlwaysOnTop(r)),
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
let eg = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: A,
            videoToggleState: _,
            blocked: g,
            ignored: x,
            participantId: C,
            participantType: S,
            participantUserId: b,
            channel: y,
            platform: j,
            secureFramesVerified: R,
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
        $ = (0, M.B)({ location: "call_tile" }),
        J = (0, D.V)($ && S === ea.lp.USER ? b : null),
        Q = (0, d.bG)([B.default], () => B.default.getId()),
        Z = (0, d.bG)([H.Ay], () => null != b && H.Ay.isLocalVideoAutoDisabled(b, (0, p.A)(S)), [b, S]),
        et = (0, N.A)({ userId: b, guildId: y.getGuildId() }),
        en = (0, T.a)({ displayNameStyles: et }),
        el = (0, ei.Y)(s),
        er = (0, ei.V)(s),
        [eo, eu] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== K.A.isOpen() && ((e = K.A.isOpen()) || eu(!1));
            };
        return K.A.addChangeListener(t), () => K.A.removeChangeListener(t);
    }, []);
    let eh = !F && S === ea.lp.STREAM && V && (!er || P),
        eg = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: P, serverMuted: k, serverDeafened: w, deafened: G, muted: U }),
        ep = (0, h.zhh)({ value: null != q ? q : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        ef = [];
    return (
        A && S === ea.lp.STREAM && ef.push((0, i.jsx)(v.A, { streamId: X, paused: z }, "zoom-controls")),
        A
            ? Y === f.N.CALL_TILE &&
              (ef.push(
                  (0, i.jsx)(em, { channelId: y.id, participantId: C, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              ef.push(
                  (0, i.jsx)(
                      e_,
                      {
                          onClick: () => {
                              (0, I.X)(m.A.CALL_TILE_POPOUT, I.O.POPOUT_RETURN), O.close((0, E.A)(y.id, C));
                          },
                          tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : ($ &&
                  null != b &&
                  b !== Q &&
                  null != J &&
                  ef.push(
                      (0, i.jsx)(
                          ee.M,
                          { userId: b, channel: y, applicationId: J, hideWhenInactive: !eo, idle: t },
                          "gift",
                      ),
                  ),
              ef.push(
                  (0, i.jsx)(
                      e_,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), eu(!0), L(e, !0, ea.GK.THREE_DOT);
                          },
                          tooltipText: ed.intl.string(ed.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !eo,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              eh &&
                  ef.push(
                      (0, i.jsx)(
                          e_,
                          {
                              onClick: W,
                              tooltipText: P ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
                              icon: P ? h._RO : h.HKD,
                              hideWhenInactive: !P && !eo,
                              idle: t,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
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
                            (0, i.jsxs)(h.Text, {
                                className: ec.ac,
                                color: "none",
                                variant: er ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != eg &&
                                        S === ea.lp.USER &&
                                        (0, i.jsx)(eg, { className: ec.gr, size: "xs", color: "currentColor" }),
                                    g
                                        ? (0, i.jsx)("div", {
                                              className: ec.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: ec.Q6,
                                                  color: c.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    x
                                        ? (0, i.jsx)("div", {
                                              className: ec.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: ec.Q6 }),
                                          })
                                        : null,
                                    t ? null : (0, i.jsx)(eA, { participantType: S, platform: j, className: ec.gr }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: a()(ec.Wk, en), children: n }),
                                    R &&
                                        (0, i.jsx)(u.m, {
                                            text: ed.intl.string(ed.t.ZEem6O),
                                            children: (0, i.jsx)(h.m5V, {
                                                className: ec.vW,
                                                size: "xs",
                                                color: c.A.colors.TEXT_STRONG,
                                                "aria-label": ed.intl.string(ed.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            ef.length > 0
                                ? (0, i.jsx)(r.animated.div, {
                                      className: a()(ec._v, { [ec.N7]: t, [ec.d5]: $ }),
                                      style: { marginBottom: ep.value },
                                      children: ef,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
eg.displayName = "CallTileOverlay";
let ep = S.$,
    ef = eh;
