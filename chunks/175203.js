n.d(t, { Ay: () => ex, Yl: () => eE }), n(321073);
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
    m = n(672979),
    p = n(793574),
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
    R = n(612258),
    j = n(551826),
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
    W = n(290863),
    K = n(485296),
    Y = n(977997),
    z = n(712687),
    q = n(790381),
    X = n(266080),
    $ = n(723702),
    J = n(837921),
    Q = n(141035),
    Z = n(654820),
    ee = n(804980),
    et = n(272812),
    en = n(304047),
    ei = n(203355),
    el = n(83982),
    es = n(345812),
    ea = n(110234),
    er = n(652215),
    eo = n(806931),
    ed = n(31408),
    ec = n(731854),
    eu = n(985018),
    eh = n(391308);
let eA = [eo.lp.ACTIVITY],
    e_ = l.memo((e) => {
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
                inCall: W = !1,
                selected: z = !1,
                noBorder: q = !1,
                noVideoRender: X = !1,
                focused: $ = !1,
                blocked: J = !1,
                ignored: en = !1,
                fit: es = b.$.CONTAIN,
                paused: e_ = !1,
                pulseSpeakingIndicator: em = !1,
                forceIdle: ep = !1,
                controlsBottom: eg,
            } = e,
            eE = l.useContext(k.vG) || ep,
            [ex, eI] = l.useState(!1),
            eC = P.Q_.useSetting(),
            eN = (0, d.bG)([H.default], () => H.default.isStreamInfoOverlayEnabled),
            [eT, eS] = l.useState(!1),
            eb = (0, d.bG)([V.default], () => V.default.getId()),
            ey = u.type === eo.lp.ACTIVITY ? null : u.user,
            ev = ey?.id ?? null,
            [eR] = (0, g.A)(u.type === eo.lp.ACTIVITY ? [u.applicationId] : []),
            ej = (0, d.bG)([F.Ay], () => null != ev && F.Ay.isLocalVideoDisabled(ev, (0, f.A)(u.type)), [ev, u.type]),
            eO = (0, d.bG)([F.Ay], () => (null != ev ? F.Ay.getVideoToggleState(ev, (0, f.A)(u.type)) : er.bb8.NONE), [
                ev,
                u.type,
            ]),
            eL = eO === er.bb8.AUTO_PROBING,
            { speaking: eM, ringing: eD, hasVideo: eU } = (0, ea.A)(u, eb),
            eG = (0, d.bG)([G.A], () => null !== ev && G.A.isUserPlayingSounds(ev), [ev]),
            eP =
                ((t = eb),
                (n = u),
                (s = L.getGuildId()),
                (r = n.type !== eo.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, d.cf)([Y.A], () => {
                    let e = Y.A.getVoiceState(s, r);
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
                    muted: (n.type === eo.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === eo.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ek = u.type === eo.lp.STREAM && ev === eb,
            ew = (0, d.bG)([w.A], () => (u.type === eo.lp.USER && null != ev ? w.A.getEffectForUserId(ev) : null)),
            eB = (0, d.bG)([Y.A], () => Y.A.getVoicePlatformForChannel(L.id, ev ?? er.dJq)),
            eV = (0, M.UF)({ userId: ev, channelId: L.id }),
            eH = (0, M.DY)({ streamKey: u.type === eo.lp.STREAM ? u.id : null, channelId: L.id }),
            eF = l.useMemo(
                () => (u.type === eo.lp.STREAM ? (eH ?? !1) : u.type === eo.lp.USER && (eV ?? !1)),
                [eH, eV, u.type],
            );
        l.useEffect(() => {
            eI($);
        }, [$]);
        let eW = l.useCallback(() => {
                null != ev && A.A.toggleLocalMute(ev, ec.x.STREAM);
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
            eq = null,
            eX = null,
            e$ = "";
        switch (u.type) {
            case eo.lp.STREAM:
                (eq = (0, i.jsx)(ei.A, {
                    participant: u,
                    selected: z,
                    popoutType: m,
                    width: D,
                    fit: es,
                    onVideoResize: U,
                    paused: e_,
                })),
                    (eX = (0, i.jsx)(ei.D, {
                        participant: u,
                        selected: z,
                        width: D,
                        focused: $,
                        idle: eE,
                        premiumIndicator: !1,
                    })),
                    (e$ = eu.intl.formatToPlainString(eu.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case eo.lp.USER:
                (eq = (0, i.jsx)(el.A, {
                    channel: L,
                    inCall: W,
                    participant: u,
                    popoutType: m,
                    fit: es,
                    onVideoResize: U,
                    paused: e_,
                    selected: z,
                    width: D,
                    blocked: J,
                    ignored: en,
                    noVideoRender: X || eL,
                    pulseSpeakingIndicator: em,
                })),
                    (eX = (0, i.jsx)(el.s, { participant: u, channelId: L.id })),
                    (e$ = eu.intl.formatToPlainString(eu.t["iC/x/Q"], { username: u.user.username }));
                break;
            case eo.lp.ACTIVITY:
                (eq = (0, i.jsx)(ee.Ay, { interactible: $, participant: u, selected: z, channel: L, width: D })),
                    (e$ = eu.intl.formatToPlainString(eu.t.YCvOsO, { activityName: eR?.name }));
                break;
            case eo.lp.HIDDEN_STREAM:
                eq = (0, i.jsx)(ei.A, {
                    participant: u,
                    selected: z,
                    width: D,
                    fit: es,
                    onVideoResize: U,
                    paused: e_,
                    popoutType: m,
                });
        }
        let eJ = l.useRef(null),
            eQ = (0, d.bG)([K.A], () => (u.type === eo.lp.USER ? K.A.getVoiceVolume(u.id) : -1 / 0)),
            eZ = (0, N.v)({ isSpeaking: eM, voiceDb: eQ, spreadDirection: N.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e0 = (0, eo.Ay)(u) ? h.kN9 : eU ? h.npA : h.EsG,
            e1 = u.type === eo.lp.STREAM && $;
        return (0, i.jsx)(_.A, {
            section: er.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(y.Ay, {
                streamKey: u.id,
                enableZoom: e1,
                children: (0, i.jsx)("div", {
                    className: a()(eh.iE, { [eh.DF]: eD }, S),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0);
                    },
                    onMouseLeave: () => {
                        eS(!1);
                    },
                    children: (0, i.jsxs)(j.A, {
                        shakeLocation: ed.uD.VOICE_USER,
                        isShaking: eM,
                        className: eh.Vs,
                        children: [
                            (0, i.jsx)(et.A, {
                                ref: eJ,
                                className: a()(eh.Vs, { [eh.E7]: q, [eh.k_]: null == I, [eh.N7]: eE }),
                                noBorder: q,
                                style: v,
                                participantUserId: ev,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e$,
                                    className: eh.lG,
                                    onDoubleClick: eY,
                                    onContextMenu: (e) => ez(e, u.type === eo.lp.STREAM),
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
                                        u.type === eo.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eh.nl,
                                                  children: (0, i.jsx)(x.A, {
                                                      userId: ev,
                                                      channelId: L.id,
                                                      guildId: L.getGuildId(),
                                                      containerDimensions: {
                                                          width: eJ?.current?.clientWidth ?? 0,
                                                          height: eJ?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eq,
                                        q ? null : (0, i.jsx)("div", { className: eh.hD, children: eX }),
                                        z
                                            ? (0, i.jsx)("div", {
                                                  className: eh._Q,
                                                  children: (0, i.jsx)(e0, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eh.Dt,
                                                  }),
                                              })
                                            : null,
                                        eA.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(ef, {
                                                  focused: $,
                                                  width: D,
                                                  inCall: W,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...eP,
                                                  idle: eE,
                                                  platform: eB,
                                                  title: (0, Q.A)(L, u),
                                                  blocked: J,
                                                  ignored: en,
                                                  localVideoDisabled: ej,
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
                                                  controlsBottom: eg,
                                                  streamId: u.type === eo.lp.STREAM ? u.streamId : null,
                                              }),
                                        W && !q
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eh.PQ, { [eh.pU]: !$ && (eG || null != ew) }),
                                                  style: $ || eG ? void 0 : eZ,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eC && eN && eT && (0, i.jsx)(Z.A, { currentUserId: eb, participant: u }),
                            (0, i.jsx)(R.A, { isFiring: ex, callTileRef: eJ.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function em(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === eo.lp.STREAM)
        return n === eo.J7.XBOX
            ? (0, i.jsx)(X.A, { className: l })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case eo.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: l });
        case eo.J7.XBOX:
            return (0, i.jsx)(X.A, { className: l });
        case eo.J7.PLAYSTATION:
            return (0, i.jsx)(q.A, { className: l });
        case eo.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function ep(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, idle: s, onClick: r } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(eh.V7, { [eh.kl]: l, [eh.N7]: s }),
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
        o = (0, d.bG)([O.A], () => O.A.getIsAlwaysOnTop(r)),
        c = l.useCallback(() => {
            (0, C.X)(p.A.CALL_TILE_POPOUT, C.O.STAY_ON_TOP, !o), L.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return $.isPlatformEmbedded && J.Ay.supportsFeature(er.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(ep, {
              onClick: c,
              tooltipText: o ? eu.intl.string(eu.t.YdyDM9) : eu.intl.string(eu.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: s,
              idle: a,
          })
        : null;
}
e_.displayName = "CallTile";
let ef = l.memo((e) => {
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
            channel: R,
            platform: j,
            secureFramesVerified: O,
            onContextMenu: M,
            muted: G,
            deafened: P,
            localMuted: k,
            serverMuted: w,
            serverDeafened: B,
            hasVideo: H,
            hideAudioIcon: K,
            onToggleMute: Y,
            popoutType: q,
            paused: X,
            controlsBottom: $,
            streamId: J,
        } = e,
        Q = (0, d.bG)([V.default], () => V.default.getId()),
        Z = (0, D.B)({ location: "call_tile" }),
        ee = (0, d.bG)([W.A], () =>
            b === eo.lp.USER && null != y ? W.A.getActivities(y).find(m.A)?.application_id : null,
        ),
        et = (0, U.V)(Z ? y : null),
        ei = (0, d.bG)([F.Ay], () => null != y && F.Ay.isLocalVideoAutoDisabled(y, (0, f.A)(b)), [y, b]),
        el = (0, T.A)({ userId: y, guildId: R.getGuildId() }),
        ea = (0, S.a)({ displayNameStyles: el }),
        ed = (0, es.Yb)(s),
        ec = (0, es.VE)(s),
        eA = (0, es.DO)(s),
        [e_, ef] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== z.A.isOpen() && ((e = z.A.isOpen()) || ef(!1));
            };
        return z.A.addChangeListener(t), () => z.A.removeChangeListener(t);
    }, []);
    let eE = !K && b === eo.lp.STREAM && H && (!ec || k),
        ex = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: k, serverMuted: w, serverDeafened: B, deafened: P, muted: G }),
        eI = (0, h.zhh)({ value: null != $ ? $ : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eC = [];
    A && b === eo.lp.STREAM && eC.push((0, i.jsx)(v.A, { streamId: J, paused: X }, "zoom-controls")),
        A
            ? q === E.N.CALL_TILE &&
              (eC.push(
                  (0, i.jsx)(eg, { channelId: R.id, participantId: N, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eC.push(
                  (0, i.jsx)(
                      ep,
                      {
                          onClick: () => {
                              (0, C.X)(p.A.CALL_TILE_POPOUT, C.O.POPOUT_RETURN), L.close((0, I.A)(R.id, N));
                          },
                          tooltipText: eu.intl.string(eu.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (Z &&
                  !eA &&
                  b === eo.lp.USER &&
                  null != y &&
                  y !== Q &&
                  null != et &&
                  eC.push(
                      (0, i.jsx)(
                          en.M,
                          { userId: y, channel: R, applicationId: et, hideWhenInactive: !e_, idle: t },
                          "gift",
                      ),
                  ),
              eC.push(
                  (0, i.jsx)(
                      ep,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), ef(!0), M(e, !0, eo.GK.THREE_DOT);
                          },
                          tooltipText: eu.intl.string(eu.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !e_,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              eE &&
                  eC.push(
                      (0, i.jsx)(
                          ep,
                          {
                              onClick: Y,
                              tooltipText: k ? eu.intl.string(eu.t.YqAjXy) : eu.intl.string(eu.t.w4m945),
                              icon: k ? h._RO : h.HKD,
                              hideWhenInactive: !k && !e_,
                              idle: t,
                          },
                          "mute",
                      ),
                  ));
    let eN = [];
    null != ex &&
        b === eo.lp.USER &&
        eN.push((0, i.jsx)(ex, { className: eh.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        g &&
            eN.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eh.Z5,
                        children: (0, i.jsx)(h.KTN, {
                            size: "lg",
                            className: eh.Q6,
                            color: c.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        x &&
            eN.push(
                (0, i.jsx)(
                    "div",
                    { className: eh.PP, children: (0, i.jsx)(h.G3N, { size: "lg", className: eh.Q6 }) },
                    "ignored-icon",
                ),
            ),
        t || eN.push((0, i.jsx)(em, { participantType: b, platform: j, className: eh.gr }, "title-icon")),
        null == n ||
            "" === n ||
            t ||
            eN.push((0, i.jsx)("span", { className: a()(eh.Wk, ea), children: n }, "title-text")),
        O &&
            eN.push(
                (0, i.jsx)(
                    u.m,
                    {
                        text: eu.intl.string(eu.t.ZEem6O),
                        children: (0, i.jsx)(h.m5V, {
                            className: eh.vW,
                            size: "xs",
                            color: c.A.colors.TEXT_STRONG,
                            "aria-label": eu.intl.string(eu.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            );
    let eT = et ?? ee,
        eS =
            !Z || A || t || eA || b !== eo.lp.USER || null == y || null == eT
                ? null
                : (0, i.jsx)(en.X, { applicationId: eT, hideApplicationName: ec });
    return (0, i.jsxs)("div", {
        className: a()(eh.MU, { [eh.oE]: ec, [eh.Ol]: A }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eh.Ik, { [eh.EX]: s < 195 }),
                children:
                    ei || _ === er.bb8.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)("div", {
                                  className: eh.h5,
                                  children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(eh.ns, eh.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: eh.h5,
                                          children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(h.Text, {
                                          variant: "text-sm/normal",
                                          className: eh.Wk,
                                          children: eu.intl.string(eu.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ed &&
                (0, i.jsxs)("div", {
                    className: a()(eh.Qp, { [eh.EX]: s < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(eh.qV, { [eh.d5]: Z }),
                            children: [
                                eN.length > 0 &&
                                    (0, i.jsx)(h.Text, {
                                        className: eh.ac,
                                        color: "none",
                                        variant: ec ? "text-sm/normal" : "text-md/normal",
                                        children: eN,
                                    }),
                                eS,
                            ],
                        }),
                        eC.length > 0
                            ? (0, i.jsx)(r.animated.div, {
                                  className: a()(eh._v, { [eh.N7]: t, [eh.d5]: Z }),
                                  style: { marginBottom: eI.value },
                                  children: eC,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
ef.displayName = "CallTileOverlay";
let eE = b.$,
    ex = e_;
