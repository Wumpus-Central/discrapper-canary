"use strict";
n.d(t, { Ay: () => e_, Yl: () => em }), n(321073);
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
    g = n(587895),
    m = n(429913),
    _ = n(520698),
    f = n(659974),
    x = n(164617),
    C = n(66004),
    E = n(958005),
    I = n(609425),
    b = n(73392),
    N = n(529020),
    S = n(401901),
    T = n(40056),
    v = n(117029),
    y = n(612258),
    j = n(551826),
    R = n(87001),
    O = n(574172),
    L = n(665691),
    M = n(209932),
    D = n(253932),
    G = n(461782),
    U = n(614518),
    P = n(706787),
    w = n(961350),
    k = n(760751),
    V = n(111162),
    B = n(430452),
    H = n(290863),
    F = n(485296),
    K = n(977997),
    W = n(712687),
    Y = n(790381),
    z = n(266080),
    X = n(723702),
    q = n(837921),
    J = n(141035),
    Q = n(654820),
    $ = n(804980),
    Z = n(272812),
    ee = n(203355),
    et = n(83982),
    en = n(345812),
    ei = n(110234),
    es = n(652215),
    el = n(806931),
    er = n(31408),
    ea = n(731854),
    eo = n(985018),
    ec = n(707511);
let ed = [el.lp.ACTIVITY],
    eu = s.memo((e) => {
        var t, n, l;
        let a,
            o,
            d,
            {
                participant: u,
                popoutType: x,
                onDoubleClick: E,
                onContextMenu: I,
                onClick: b,
                onMouseDown: v,
                onKeyDown: R,
                className: O,
                style: W,
                containerStyle: Y,
                channel: z,
                width: X,
                onVideoResize: q,
                inCall: en = !1,
                selected: eu = !1,
                noBorder: eh = !1,
                noVideoRender: eA = !1,
                focused: ep = !1,
                blocked: em = !1,
                ignored: e_ = !1,
                fit: ef = S.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: eC = !1,
                forceIdle: eE = !1,
                controlsBottom: eI,
            } = e,
            eb = s.useContext(G.vG) || eE,
            [eN, eS] = s.useState(!1),
            eT = D.Q_.useSetting(),
            ev = (0, c.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [ey, ej] = s.useState(!1),
            eR = (0, c.bG)([w.default], () => w.default.getId()),
            eO = u.type === el.lp.ACTIVITY ? null : u.user,
            eL = eO?.id ?? null,
            [eM] = (0, m.A)(u.type === el.lp.ACTIVITY ? [u.applicationId] : []),
            eD = (0, c.bG)([B.Ay], () => null != eL && B.Ay.isLocalVideoDisabled(eL, (0, _.A)(u.type)), [eL, u.type]),
            eG = (0, c.bG)([B.Ay], () => (null != eL ? B.Ay.getVideoToggleState(eL, (0, _.A)(u.type)) : es.bb8.NONE), [
                eL,
                u.type,
            ]),
            eU = eG === es.bb8.AUTO_PROBING,
            { speaking: eP, ringing: ew, hasVideo: ek } = (0, ei.A)(u, eR),
            eV = (0, c.bG)([M.A], () => null !== eL && M.A.isUserPlayingSounds(eL), [eL]),
            eB =
                ((t = eR),
                (n = u),
                (l = z.getGuildId()),
                (a = n.type !== el.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, c.cf)([K.A], () => {
                    let e = K.A.getVoiceState(l, a);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, c.cf)([B.Ay], () => {
                    let e = (0, _.A)(n.type);
                    return t === a
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: B.Ay.isLocalMute(a, e),
                              localVideoDisabled: B.Ay.isLocalVideoDisabled(a, e),
                              localVideoAutoDisabled: B.Ay.isLocalVideoAutoDisabled(a, e),
                          };
                }, [t, n.type, a])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: d.muted,
                    muted: (n.type === el.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === el.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eH = u.type === el.lp.STREAM && eL === eR,
            eF = (0, c.bG)([U.A], () => (u.type === el.lp.USER && null != eL ? U.A.getEffectForUserId(eL) : null)),
            eK = (0, c.bG)([K.A], () => K.A.getVoicePlatformForChannel(z.id, eL ?? es.dJq)),
            { showGameIcon: eW } = N.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eY = (0, c.bG)(
                [H.A],
                () =>
                    eW && null != eL
                        ? H.A.findActivity(eL, (e) => null != e.application_id && e.type === es.$pd.PLAYING)
                        : null,
                [eW, eL],
            ),
            ez = (0, c.bG)([k.A], () => (eY?.application_id != null ? k.A.getDetectableGame(eY.application_id) : null)),
            eX = (0, c.bG)([g.A], () =>
                null != ez && eY?.application_id != null ? g.A.getApplication(eY?.application_id) : void 0,
            ),
            eq = (0, L.UF)({ userId: eL, channelId: z.id }),
            eJ = (0, L.DY)({ streamKey: u.type === el.lp.STREAM ? u.id : null, channelId: z.id }),
            eQ = s.useMemo(
                () => (u.type === el.lp.STREAM ? (eJ ?? !1) : u.type === el.lp.USER && (eq ?? !1)),
                [eJ, eq, u.type],
            );
        s.useEffect(() => {
            eS(ep);
        }, [ep]);
        let e$ = s.useCallback(() => {
                null != eL && A.A.toggleLocalMute(eL, ea.x.STREAM);
            }, [eL]),
            eZ = s.useCallback(
                (e) => {
                    b?.(u, e);
                },
                [b, u],
            ),
            e0 = s.useCallback(
                (e) => {
                    E?.(u, e);
                },
                [E, u],
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
            case el.lp.STREAM:
                (e9 = (0, i.jsx)(ee.A, {
                    participant: u,
                    selected: eu,
                    popoutType: x,
                    width: X,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                })),
                    (e7 = (0, i.jsx)(ee.D, {
                        participant: u,
                        selected: eu,
                        width: X,
                        focused: ep,
                        idle: eb,
                        premiumIndicator: !1,
                    })),
                    (e6 = eo.intl.formatToPlainString(eo.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case el.lp.USER:
                (e9 = (0, i.jsx)(et.A, {
                    channel: z,
                    inCall: en,
                    participant: u,
                    popoutType: x,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                    selected: eu,
                    width: X,
                    blocked: em,
                    ignored: e_,
                    noVideoRender: eA || eU,
                    pulseSpeakingIndicator: eC,
                })),
                    (e7 = (0, i.jsx)(et.s, { participant: u, channelId: z.id })),
                    (e6 = eo.intl.formatToPlainString(eo.t["iC/x/Q"], { username: u.user.username }));
                break;
            case el.lp.ACTIVITY:
                (e9 = (0, i.jsx)($.Ay, { interactible: ep, participant: u, selected: eu, channel: z, width: X })),
                    (e6 = eo.intl.formatToPlainString(eo.t.YCvOsO, { activityName: eM?.name }));
                break;
            case el.lp.HIDDEN_STREAM:
                e9 = (0, i.jsx)(ee.A, {
                    participant: u,
                    selected: eu,
                    width: X,
                    fit: ef,
                    onVideoResize: q,
                    paused: ex,
                    popoutType: x,
                });
        }
        let e2 = s.useRef(null),
            e3 = (0, c.bG)([F.A], () => (u.type === el.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, f.v)({ isSpeaking: eP, voiceDb: e3, spreadDirection: f.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, el.Ay)(u) ? h.kN9 : ek ? h.npA : h.EsG,
            e4 = u.type === el.lp.STREAM && ep;
        return (0, i.jsx)(p.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(T.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, i.jsx)("div", {
                    className: r()(ec.iE, { [ec.DF]: ew }, O),
                    style: Y,
                    onMouseEnter: () => {
                        ej(!0);
                    },
                    onMouseLeave: () => {
                        ej(!1);
                    },
                    children: (0, i.jsxs)(j.A, {
                        shakeLocation: er.uD.VOICE_USER,
                        isShaking: eP,
                        className: ec.Vs,
                        children: [
                            (0, i.jsx)(Z.A, {
                                ref: e2,
                                className: r()(ec.Vs, { [ec.E7]: eh, [ec.k_]: null == b, [ec.N7]: eb }),
                                noBorder: eh,
                                style: W,
                                participantUserId: eL,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e6,
                                    className: ec.lG,
                                    onDoubleClick: e0,
                                    onContextMenu: (e) => e1(e, u.type === el.lp.STREAM),
                                    onClick: eZ,
                                    onMouseDown: v,
                                    onKeyDown: R,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eF && null != eL
                                            ? (0, i.jsx)(P.A, {
                                                  voiceChannelEffect: eF,
                                                  onComplete: () => (0, U.a)(eL),
                                                  userId: eL,
                                              })
                                            : null,
                                        u.type === el.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: ec.nl,
                                                  children: (0, i.jsx)(C.A, {
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
                                        eh ? null : (0, i.jsx)("div", { className: ec.hD, children: e7 }),
                                        eu
                                            ? (0, i.jsx)("div", {
                                                  className: ec._Q,
                                                  children: (0, i.jsx)(e8, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: ec.Dt,
                                                  }),
                                              })
                                            : null,
                                        ed.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(eg, {
                                                  focused: ep,
                                                  width: X,
                                                  inCall: en,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: ek ?? !1,
                                                  ...eB,
                                                  idle: eb,
                                                  platform: eK,
                                                  title: (0, J.A)(z, u),
                                                  blocked: em,
                                                  ignored: e_,
                                                  localVideoDisabled: eD,
                                                  videoToggleState: eG,
                                                  hideAudioIcon: eH,
                                                  onContextMenu: e1,
                                                  onToggleMute: e$,
                                                  participantUserId: eL,
                                                  channel: z,
                                                  application: eX,
                                                  secureFramesVerified: eQ,
                                                  isHovered: ey,
                                                  popoutType: x,
                                                  paused: ex,
                                                  controlsBottom: eI,
                                                  streamId: u.type === el.lp.STREAM ? u.streamId : null,
                                              }),
                                        en && !eh
                                            ? (0, i.jsx)("div", {
                                                  className: r()(ec.PQ, { [ec.pU]: !ep && (eV || null != eF) }),
                                                  style: ep || eV ? void 0 : e5,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eT && ev && ey && (0, i.jsx)(Q.A, { currentUserId: eR, participant: u }),
                            (0, i.jsx)(y.A, { isFiring: eN, callTileRef: e2.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function eh(e) {
    let { participantType: t, platform: n, className: s } = e;
    if (t === el.lp.STREAM)
        return n === el.J7.XBOX
            ? (0, i.jsx)(z.A, { className: s })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: s });
    switch (n) {
        case el.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: s });
        case el.J7.XBOX:
            return (0, i.jsx)(z.A, { className: s });
        case el.J7.PLAYSTATION:
            return (0, i.jsx)(Y.A, { className: s });
        case el.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: s });
        default:
            return null;
    }
}
function eA(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: s, onClick: l } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: r()(ec.V7, { [ec.kl]: s }),
            children: (0, i.jsx)(h.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), l(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function ep(e) {
    let { channelId: t, participantId: n, hideWhenInactive: l } = e,
        r = s.useMemo(() => (0, E.A)(t, n), [t, n]),
        a = (0, c.bG)([R.A], () => R.A.getIsAlwaysOnTop(r)),
        o = s.useCallback(() => {
            O.setAlwaysOnTop(r, !a);
        }, [r, a]);
    return X.isPlatformEmbedded && q.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eA, {
              onClick: o,
              tooltipText: a ? eo.intl.string(eo.t.YdyDM9) : eo.intl.string(eo.t.ZVGHwP),
              icon: a ? h.hl9 : h.qgw,
              hideWhenInactive: l,
          })
        : null;
}
eu.displayName = "CallTile";
let eg = s.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: A,
            videoToggleState: p,
            blocked: g,
            ignored: m,
            participantId: f,
            participantType: C,
            participantUserId: N,
            channel: S,
            platform: T,
            secureFramesVerified: y,
            onContextMenu: j,
            muted: R,
            deafened: L,
            localMuted: M,
            serverMuted: D,
            serverDeafened: G,
            hasVideo: U,
            hideAudioIcon: P,
            onToggleMute: w,
            popoutType: k,
            paused: V,
            controlsBottom: H,
            streamId: F,
        } = e,
        K = (0, c.bG)([B.Ay], () => null != N && B.Ay.isLocalVideoAutoDisabled(N, (0, _.A)(C)), [N, C]),
        Y = (0, I.A)({ userId: N, guildId: S.getGuildId() }),
        z = (0, b.a)({ displayNameStyles: Y }),
        X = (0, en.Y)(l),
        q = (0, en.V)(l),
        [J, Q] = s.useState(!1);
    s.useEffect(() => {
        let e = !1,
            t = () => {
                e !== W.A.isOpen() && ((e = W.A.isOpen()) || Q(!1));
            };
        return W.A.addChangeListener(t), () => W.A.removeChangeListener(t);
    }, []);
    let $ = !P && C === el.lp.STREAM && U && (!q || M),
        Z = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: s, muted: l } = e;
            return i ? h.TJE : n ? h.O1p : s ? h.cQT : t ? h.O1p : l ? h.z0P : null;
        })({ localMuted: M, serverMuted: D, serverDeafened: G, deafened: L, muted: R }),
        ee = (0, h.zhh)({ value: null != H ? H : 0, config: { ...a.config.stiff, clamp: !0 } }, "animate-always"),
        et = [];
    return (
        A && C === el.lp.STREAM && et.push((0, i.jsx)(v.A, { streamId: F, paused: V }, "zoom-controls")),
        A
            ? k === x.N.CALL_TILE &&
              (et.push((0, i.jsx)(ep, { channelId: S.id, participantId: f, hideWhenInactive: !1 }, "stay-on-top")),
              et.push(
                  (0, i.jsx)(
                      eA,
                      {
                          onClick: () => {
                              O.close((0, E.A)(S.id, f));
                          },
                          tooltipText: eo.intl.string(eo.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                      },
                      "close",
                  ),
              ))
            : (et.push(
                  (0, i.jsx)(
                      eA,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), Q(!0), j(e, !0, el.GK.THREE_DOT);
                          },
                          tooltipText: eo.intl.string(eo.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !J,
                      },
                      "options",
                  ),
              ),
              $ &&
                  et.push(
                      (0, i.jsx)(
                          eA,
                          {
                              onClick: w,
                              tooltipText: M ? eo.intl.string(eo.t.YqAjXy) : eo.intl.string(eo.t.w4m945),
                              icon: M ? h._RO : h.HKD,
                              hideWhenInactive: !M && !J,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: r()(ec.MU, { [ec.oE]: q, [ec.Ol]: A }),
            children: [
                (0, i.jsx)("div", {
                    className: r()(ec.Ik, { [ec.EX]: l < 195 }),
                    children:
                        K || p === es.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: ec.h5,
                                      children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: r()(ec.ns, ec.WP),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: ec.h5,
                                              children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                          }),
                                          (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: ec.Wk,
                                              children: eo.intl.string(eo.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !X &&
                    (0, i.jsxs)("div", {
                        className: r()(ec.Qp, { [ec.EX]: l < 195 }),
                        children: [
                            (0, i.jsxs)(h.Text, {
                                className: ec.ac,
                                color: "none",
                                variant: q ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != Z &&
                                        C === el.lp.USER &&
                                        (0, i.jsx)(Z, {
                                            className: r()(ec.fh, { [ec.oE]: q }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    g
                                        ? (0, i.jsx)("div", {
                                              className: ec.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: ec.Q6,
                                                  color: d.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    m
                                        ? (0, i.jsx)("div", {
                                              className: ec.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: ec.Q6 }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, i.jsx)(eh, {
                                              participantType: C,
                                              platform: T,
                                              className: r()(ec.fh, { [ec.oE]: q }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: r()(ec.Wk, z), children: n }),
                                    y &&
                                        (0, i.jsx)(u.m, {
                                            text: eo.intl.string(eo.t.ZEem6O),
                                            children: (0, i.jsx)(h.m5V, {
                                                className: ec.vW,
                                                size: "xs",
                                                color: d.A.colors.TEXT_STRONG,
                                                "aria-label": eo.intl.string(eo.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            !t && et.length > 0
                                ? (0, i.jsx)(a.animated.div, {
                                      className: ec._v,
                                      style: { marginBottom: ee.value },
                                      children: et,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
eg.displayName = "CallTileOverlay";
let em = S.$,
    e_ = eu;
