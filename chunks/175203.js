"use strict";
n.d(t, { Ay: () => ex, Yl: () => ef }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(475539),
    o = n(934551),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(397927),
    A = n(827343),
    p = n(820284),
    g = n(793574),
    m = n(587895),
    _ = n(429913),
    f = n(520698),
    x = n(659974),
    C = n(164617),
    E = n(66004),
    I = n(958005),
    b = n(384059),
    N = n(609425),
    S = n(73392),
    T = n(529020),
    y = n(401901),
    v = n(40056),
    j = n(117029),
    R = n(612258),
    O = n(551826),
    L = n(87001),
    M = n(574172),
    D = n(665691),
    G = n(209932),
    U = n(253932),
    P = n(461782),
    w = n(614518),
    k = n(706787),
    V = n(961350),
    B = n(760751),
    H = n(111162),
    F = n(430452),
    K = n(290863),
    W = n(485296),
    Y = n(977997),
    z = n(712687),
    X = n(790381),
    q = n(266080),
    J = n(723702),
    Q = n(837921),
    $ = n(141035),
    Z = n(654820),
    ee = n(804980),
    et = n(272812),
    en = n(203355),
    ei = n(83982),
    es = n(345812),
    el = n(110234),
    er = n(652215),
    ea = n(806931),
    eo = n(31408),
    ec = n(731854),
    ed = n(985018),
    eu = n(707511);
let eh = [ea.lp.ACTIVITY],
    eA = s.memo((e) => {
        var t, n, l;
        let a,
            o,
            d,
            {
                participant: u,
                popoutType: g,
                onDoubleClick: C,
                onContextMenu: I,
                onClick: b,
                onMouseDown: N,
                onKeyDown: S,
                className: j,
                style: L,
                containerStyle: M,
                channel: z,
                width: X,
                onVideoResize: q,
                inCall: J = !1,
                selected: Q = !1,
                noBorder: es = !1,
                noVideoRender: eA = !1,
                focused: ep = !1,
                blocked: eg = !1,
                ignored: em = !1,
                fit: ef = y.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: eC = !1,
                forceIdle: eE = !1,
                controlsBottom: eI,
            } = e,
            eb = s.useContext(P.vG) || eE,
            [eN, eS] = s.useState(!1),
            eT = U.Q_.useSetting(),
            ey = (0, c.bG)([H.default], () => H.default.isStreamInfoOverlayEnabled),
            [ev, ej] = s.useState(!1),
            eR = (0, c.bG)([V.default], () => V.default.getId()),
            eO = u.type === ea.lp.ACTIVITY ? null : u.user,
            eL = eO?.id ?? null,
            [eM] = (0, _.A)(u.type === ea.lp.ACTIVITY ? [u.applicationId] : []),
            eD = (0, c.bG)([F.Ay], () => null != eL && F.Ay.isLocalVideoDisabled(eL, (0, f.A)(u.type)), [eL, u.type]),
            eG = (0, c.bG)([F.Ay], () => (null != eL ? F.Ay.getVideoToggleState(eL, (0, f.A)(u.type)) : er.bb8.NONE), [
                eL,
                u.type,
            ]),
            eU = eG === er.bb8.AUTO_PROBING,
            { speaking: eP, ringing: ew, hasVideo: ek } = (0, el.A)(u, eR),
            eV = (0, c.bG)([G.A], () => null !== eL && G.A.isUserPlayingSounds(eL), [eL]),
            eB =
                ((t = eR),
                (n = u),
                (l = z.getGuildId()),
                (a = n.type !== ea.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, c.cf)([Y.A], () => {
                    let e = Y.A.getVoiceState(l, a);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, c.cf)([F.Ay], () => {
                    let e = (0, f.A)(n.type);
                    return t === a
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: F.Ay.isLocalMute(a, e),
                              localVideoDisabled: F.Ay.isLocalVideoDisabled(a, e),
                              localVideoAutoDisabled: F.Ay.isLocalVideoAutoDisabled(a, e),
                          };
                }, [t, n.type, a])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: d.muted,
                    muted: (n.type === ea.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === ea.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eH = u.type === ea.lp.STREAM && eL === eR,
            eF = (0, c.bG)([w.A], () => (u.type === ea.lp.USER && null != eL ? w.A.getEffectForUserId(eL) : null)),
            eK = (0, c.bG)([Y.A], () => Y.A.getVoicePlatformForChannel(z.id, eL ?? er.dJq)),
            { showGameIcon: eW } = T.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eY = (0, c.bG)(
                [K.A],
                () =>
                    eW && null != eL
                        ? K.A.findActivity(eL, (e) => null != e.application_id && e.type === er.$pd.PLAYING)
                        : null,
                [eW, eL],
            ),
            ez = (0, c.bG)([B.A], () => (eY?.application_id != null ? B.A.getDetectableGame(eY.application_id) : null)),
            eX = (0, c.bG)([m.A], () =>
                null != ez && eY?.application_id != null ? m.A.getApplication(eY?.application_id) : void 0,
            ),
            eq = (0, D.UF)({ userId: eL, channelId: z.id }),
            eJ = (0, D.DY)({ streamKey: u.type === ea.lp.STREAM ? u.id : null, channelId: z.id }),
            eQ = s.useMemo(
                () => (u.type === ea.lp.STREAM ? (eJ ?? !1) : u.type === ea.lp.USER && (eq ?? !1)),
                [eJ, eq, u.type],
            );
        s.useEffect(() => {
            eS(ep);
        }, [ep]);
        let e$ = s.useCallback(() => {
                null != eL && A.A.toggleLocalMute(eL, ec.x.STREAM);
            }, [eL]),
            eZ = s.useCallback(
                (e) => {
                    b?.(u, e);
                },
                [b, u],
            ),
            e0 = s.useCallback(
                (e) => {
                    C?.(u, e);
                },
                [C, u],
            ),
            e1 = s.useCallback(
                (e, t, n) => {
                    I?.(u, e, t, n);
                },
                [I, u],
            ),
            e9 = null,
            e7 = null,
            e6 = "";
        switch (u.type) {
            case ea.lp.STREAM:
                (e9 = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Q,
                    popoutType: g,
                    width: X,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                })),
                    (e7 = (0, i.jsx)(en.D, {
                        participant: u,
                        selected: Q,
                        width: X,
                        focused: ep,
                        idle: eb,
                        premiumIndicator: !1,
                    })),
                    (e6 = ed.intl.formatToPlainString(ed.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case ea.lp.USER:
                (e9 = (0, i.jsx)(ei.A, {
                    channel: z,
                    inCall: J,
                    participant: u,
                    popoutType: g,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                    selected: Q,
                    width: X,
                    blocked: eg,
                    ignored: em,
                    noVideoRender: eA || eU,
                    pulseSpeakingIndicator: eC,
                })),
                    (e7 = (0, i.jsx)(ei.s, { participant: u, channelId: z.id })),
                    (e6 = ed.intl.formatToPlainString(ed.t["iC/x/Q"], { username: u.user.username }));
                break;
            case ea.lp.ACTIVITY:
                (e9 = (0, i.jsx)(ee.Ay, { interactible: ep, participant: u, selected: Q, channel: z, width: X })),
                    (e6 = ed.intl.formatToPlainString(ed.t.YCvOsO, { activityName: eM?.name }));
                break;
            case ea.lp.HIDDEN_STREAM:
                e9 = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Q,
                    width: X,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                    popoutType: g,
                });
        }
        let e2 = s.useRef(null),
            e3 = (0, c.bG)([W.A], () => (u.type === ea.lp.USER ? W.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, x.v)({ isSpeaking: eP, voiceDb: e3, spreadDirection: x.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, ea.Ay)(u) ? h.kN9 : ek ? h.npA : h.EsG,
            e4 = u.type === ea.lp.STREAM && ep;
        return (0, i.jsx)(p.A, {
            section: er.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(v.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, i.jsx)("div", {
                    className: r()(eu.iE, { [eu.DF]: ew }, j),
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
                                className: r()(eu.Vs, { [eu.E7]: es, [eu.k_]: null == b, [eu.N7]: eb }),
                                noBorder: es,
                                style: L,
                                participantUserId: eL,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e6,
                                    className: eu.lG,
                                    onDoubleClick: e0,
                                    onContextMenu: (e) => e1(e, u.type === ea.lp.STREAM),
                                    onClick: eZ,
                                    onMouseDown: N,
                                    onKeyDown: S,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eF && null != eL
                                            ? (0, i.jsx)(k.A, {
                                                  voiceChannelEffect: eF,
                                                  onComplete: () => (0, w.a)(eL),
                                                  userId: eL,
                                              })
                                            : null,
                                        u.type === ea.lp.USER
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
                                        es ? null : (0, i.jsx)("div", { className: eu.hD, children: e7 }),
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
                                            : (0, i.jsx)(e_, {
                                                  focused: ep,
                                                  width: X,
                                                  inCall: J,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: ek ?? !1,
                                                  ...eB,
                                                  idle: eb,
                                                  platform: eK,
                                                  title: (0, $.A)(z, u),
                                                  blocked: eg,
                                                  ignored: em,
                                                  localVideoDisabled: eD,
                                                  videoToggleState: eG,
                                                  hideAudioIcon: eH,
                                                  onContextMenu: e1,
                                                  onToggleMute: e$,
                                                  participantUserId: eL,
                                                  channel: z,
                                                  application: eX,
                                                  secureFramesVerified: eQ,
                                                  isHovered: ev,
                                                  popoutType: g,
                                                  paused: ex,
                                                  controlsBottom: eI,
                                                  streamId: u.type === ea.lp.STREAM ? u.streamId : null,
                                              }),
                                        J && !es
                                            ? (0, i.jsx)("div", {
                                                  className: r()(eu.PQ, { [eu.pU]: !ep && (eV || null != eF) }),
                                                  style: ep || eV ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eT && ey && ev && (0, i.jsx)(Z.A, { currentUserId: eR, participant: u }),
                            (0, i.jsx)(R.A, { isFiring: eN, callTileRef: e2.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function ep(e) {
    let { participantType: t, platform: n, className: s } = e;
    if (t === ea.lp.STREAM)
        return n === ea.J7.XBOX
            ? (0, i.jsx)(q.A, { className: s })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: s });
    switch (n) {
        case ea.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: s });
        case ea.J7.XBOX:
            return (0, i.jsx)(q.A, { className: s });
        case ea.J7.PLAYSTATION:
            return (0, i.jsx)(X.A, { className: s });
        case ea.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: s });
        default:
            return null;
    }
}
function eg(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: s, idle: l, onClick: a } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: r()(eu.V7, { [eu.kl]: s, [eu.N7]: l }),
            children: (0, i.jsx)(h.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), a(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function em(e) {
    let { channelId: t, participantId: n, hideWhenInactive: l, idle: r } = e,
        a = s.useMemo(() => (0, I.A)(t, n), [t, n]),
        o = (0, c.bG)([L.A], () => L.A.getIsAlwaysOnTop(a)),
        d = s.useCallback(() => {
            (0, b.X)(g.A.CALL_TILE_POPOUT, b.O.STAY_ON_TOP, !o), M.setAlwaysOnTop(a, !o);
        }, [a, o]);
    return J.isPlatformEmbedded && Q.Ay.supportsFeature(er.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eg, {
              onClick: d,
              tooltipText: o ? ed.intl.string(ed.t.YdyDM9) : ed.intl.string(ed.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: l,
              idle: r,
          })
        : null;
}
eA.displayName = "CallTile";
let e_ = s.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: A,
            videoToggleState: p,
            blocked: m,
            ignored: _,
            participantId: x,
            participantType: E,
            participantUserId: T,
            channel: y,
            platform: v,
            secureFramesVerified: R,
            onContextMenu: O,
            muted: L,
            deafened: D,
            localMuted: G,
            serverMuted: U,
            serverDeafened: P,
            hasVideo: w,
            hideAudioIcon: k,
            onToggleMute: V,
            popoutType: B,
            paused: H,
            controlsBottom: K,
            streamId: W,
        } = e,
        Y = (0, c.bG)([F.Ay], () => null != T && F.Ay.isLocalVideoAutoDisabled(T, (0, f.A)(E)), [T, E]),
        X = (0, N.A)({ userId: T, guildId: y.getGuildId() }),
        q = (0, S.a)({ displayNameStyles: X }),
        J = (0, es.Y)(l),
        Q = (0, es.V)(l),
        [$, Z] = s.useState(!1);
    s.useEffect(() => {
        let e = !1,
            t = () => {
                e !== z.A.isOpen() && ((e = z.A.isOpen()) || Z(!1));
            };
        return z.A.addChangeListener(t), () => z.A.removeChangeListener(t);
    }, []);
    let ee = !k && E === ea.lp.STREAM && w && (!Q || G),
        et = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: s, muted: l } = e;
            return i ? h.TJE : n ? h.O1p : s ? h.cQT : t ? h.O1p : l ? h.z0P : null;
        })({ localMuted: G, serverMuted: U, serverDeafened: P, deafened: D, muted: L }),
        en = (0, h.zhh)({ value: null != K ? K : 0, config: { ...a.config.stiff, clamp: !0 } }, "animate-always"),
        ei = [];
    return (
        A && E === ea.lp.STREAM && ei.push((0, i.jsx)(j.A, { streamId: W, paused: H }, "zoom-controls")),
        A
            ? B === C.N.CALL_TILE &&
              (ei.push(
                  (0, i.jsx)(em, { channelId: y.id, participantId: x, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              ei.push(
                  (0, i.jsx)(
                      eg,
                      {
                          onClick: () => {
                              (0, b.X)(g.A.CALL_TILE_POPOUT, b.O.POPOUT_RETURN), M.close((0, I.A)(y.id, x));
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
                      eg,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), Z(!0), O(e, !0, ea.GK.THREE_DOT);
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
                          eg,
                          {
                              onClick: V,
                              tooltipText: G ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
                              icon: G ? h._RO : h.HKD,
                              hideWhenInactive: !G && !$,
                              idle: t,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: r()(eu.MU, { [eu.oE]: Q, [eu.Ol]: A }),
            children: [
                (0, i.jsx)("div", {
                    className: r()(eu.Ik, { [eu.EX]: l < 195 }),
                    children:
                        Y || p === er.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: eu.h5,
                                      children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: r()(eu.ns, eu.WP),
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
                        className: r()(eu.Qp, { [eu.EX]: l < 195 }),
                        children: [
                            (0, i.jsxs)(h.Text, {
                                className: eu.ac,
                                color: "none",
                                variant: Q ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != et &&
                                        E === ea.lp.USER &&
                                        (0, i.jsx)(et, { className: eu.gr, size: "xs", color: "currentColor" }),
                                    m
                                        ? (0, i.jsx)("div", {
                                              className: eu.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: eu.Q6,
                                                  color: d.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    _
                                        ? (0, i.jsx)("div", {
                                              className: eu.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: eu.Q6 }),
                                          })
                                        : null,
                                    t ? null : (0, i.jsx)(ep, { participantType: E, platform: v, className: eu.gr }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: r()(eu.Wk, q), children: n }),
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
                                ? (0, i.jsx)(a.animated.div, {
                                      className: r()(eu._v, { [eu.N7]: t }),
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
e_.displayName = "CallTileOverlay";
let ef = y.$,
    ex = eA;
