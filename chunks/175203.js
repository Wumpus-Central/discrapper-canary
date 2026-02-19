n.d(t, { Ay: () => e_, Yl: () => eg }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(522160),
    o = n(934551),
    d = n(311907),
    c = n(827734),
    u = n(990078),
    h = n(397927),
    A = n(827343),
    p = n(820284),
    m = n(587895),
    g = n(429913),
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
    el = n(652215),
    es = n(806931),
    ea = n(31408),
    er = n(731854),
    eo = n(985018),
    ed = n(707511);
let ec = [es.lp.ACTIVITY],
    eu = l.memo((e) => {
        var t, n, s;
        let r,
            o,
            c,
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
                blocked: eg = !1,
                ignored: e_ = !1,
                fit: ef = S.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: eC = !1,
                forceIdle: eE = !1,
                controlsBottom: eI,
            } = e,
            eb = l.useContext(G.vG) || eE,
            [eN, eS] = l.useState(!1),
            eT = D.Q_.useSetting(),
            ev = (0, d.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [ey, ej] = l.useState(!1),
            eR = (0, d.bG)([w.default], () => w.default.getId()),
            eO = u.type === es.lp.ACTIVITY ? null : u.user,
            eL = eO?.id ?? null,
            [eM] = (0, g.A)(u.type === es.lp.ACTIVITY ? [u.applicationId] : []),
            eD = (0, d.bG)([B.Ay], () => null != eL && B.Ay.isLocalVideoDisabled(eL, (0, _.A)(u.type)), [eL, u.type]),
            eG = (0, d.bG)([B.Ay], () => (null != eL ? B.Ay.getVideoToggleState(eL, (0, _.A)(u.type)) : el.bb8.NONE), [
                eL,
                u.type,
            ]),
            eU = eG === el.bb8.AUTO_PROBING,
            { speaking: eP, ringing: ew, hasVideo: ek } = (0, ei.A)(u, eR),
            eV = (0, d.bG)([M.A], () => null !== eL && M.A.isUserPlayingSounds(eL), [eL]),
            eB =
                ((t = eR),
                (n = u),
                (s = z.getGuildId()),
                (r = n.type !== es.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, d.cf)([K.A], () => {
                    let e = K.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([B.Ay], () => {
                    let e = (0, _.A)(n.type);
                    return t === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: B.Ay.isLocalMute(r, e),
                              localVideoDisabled: B.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: B.Ay.isLocalVideoAutoDisabled(r, e),
                          };
                }, [t, n.type, r])),
                {
                    serverMuted: o.muted,
                    serverDeafened: o.deafened,
                    suppressed: o.suppressed,
                    localMuted: c.muted,
                    muted: (n.type === es.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === es.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eH = u.type === es.lp.STREAM && eL === eR,
            eF = (0, d.bG)([U.A], () => (u.type === es.lp.USER && null != eL ? U.A.getEffectForUserId(eL) : null)),
            eK = (0, d.bG)([K.A], () => K.A.getVoicePlatformForChannel(z.id, eL ?? el.dJq)),
            { showGameIcon: eW } = N.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eY = (0, d.bG)(
                [H.A],
                () =>
                    eW && null != eL
                        ? H.A.findActivity(eL, (e) => null != e.application_id && e.type === el.$pd.PLAYING)
                        : null,
                [eW, eL],
            ),
            ez = (0, d.bG)([k.A], () => (eY?.application_id != null ? k.A.getDetectableGame(eY.application_id) : null)),
            eX = (0, d.bG)([m.A], () =>
                null != ez && eY?.application_id != null ? m.A.getApplication(eY?.application_id) : void 0,
            ),
            eq = (0, L.UF)({ userId: eL, channelId: z.id }),
            eJ = (0, L.DY)({ streamKey: u.type === es.lp.STREAM ? u.id : null, channelId: z.id }),
            eQ = l.useMemo(
                () => (u.type === es.lp.STREAM ? (eJ ?? !1) : u.type === es.lp.USER && (eq ?? !1)),
                [eJ, eq, u.type],
            );
        l.useEffect(() => {
            eS(ep);
        }, [ep]);
        let e$ = l.useCallback(() => {
                null != eL && A.A.toggleLocalMute(eL, er.x.STREAM);
            }, [eL]),
            eZ = l.useCallback(
                (e) => {
                    b?.(u, e);
                },
                [b, u],
            ),
            e0 = l.useCallback(
                (e) => {
                    E?.(u, e);
                },
                [E, u],
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
            case es.lp.STREAM:
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
            case es.lp.USER:
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
                    blocked: eg,
                    ignored: e_,
                    noVideoRender: eA || eU,
                    pulseSpeakingIndicator: eC,
                })),
                    (e7 = (0, i.jsx)(et.s, { participant: u, channelId: z.id })),
                    (e6 = eo.intl.formatToPlainString(eo.t["iC/x/Q"], { username: u.user.username }));
                break;
            case es.lp.ACTIVITY:
                (e9 = (0, i.jsx)($.Ay, { interactible: ep, participant: u, selected: eu, channel: z, width: X })),
                    (e6 = eo.intl.formatToPlainString(eo.t.YCvOsO, { activityName: eM?.name }));
                break;
            case es.lp.HIDDEN_STREAM:
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
        let e2 = l.useRef(null),
            e3 = (0, d.bG)([F.A], () => (u.type === es.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0)),
            e5 = (0, f.v)({ isSpeaking: eP, voiceDb: e3, spreadDirection: f.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, es.Ay)(u) ? h.kN9 : ek ? h.npA : h.EsG,
            e4 = u.type === es.lp.STREAM && ep;
        return (0, i.jsx)(p.A, {
            section: el.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(T.Ay, {
                streamKey: u.id,
                enableZoom: e4,
                children: (0, i.jsx)("div", {
                    className: a()(ed.iE, { [ed.DF]: ew }, O),
                    style: Y,
                    onMouseEnter: () => {
                        ej(!0);
                    },
                    onMouseLeave: () => {
                        ej(!1);
                    },
                    children: (0, i.jsxs)(j.A, {
                        shakeLocation: ea.uD.VOICE_USER,
                        isShaking: eP,
                        className: ed.Vs,
                        children: [
                            (0, i.jsx)(Z.A, {
                                ref: e2,
                                className: a()(ed.Vs, { [ed.E7]: eh, [ed.k_]: null == b, [ed.N7]: eb }),
                                noBorder: eh,
                                style: W,
                                participantUserId: eL,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": e6,
                                    className: ed.lG,
                                    onDoubleClick: e0,
                                    onContextMenu: (e) => e1(e, u.type === es.lp.STREAM),
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
                                        u.type === es.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: ed.nl,
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
                                        eh ? null : (0, i.jsx)("div", { className: ed.hD, children: e7 }),
                                        eu
                                            ? (0, i.jsx)("div", {
                                                  className: ed._Q,
                                                  children: (0, i.jsx)(e8, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: ed.Dt,
                                                  }),
                                              })
                                            : null,
                                        ec.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(em, {
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
                                                  blocked: eg,
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
                                                  streamId: u.type === es.lp.STREAM ? u.streamId : null,
                                              }),
                                        en && !eh
                                            ? (0, i.jsx)("div", {
                                                  className: a()(ed.PQ, { [ed.pU]: !ep && (eV || null != eF) }),
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
    let { participantType: t, platform: n, className: l } = e;
    if (t === es.lp.STREAM)
        return n === es.J7.XBOX
            ? (0, i.jsx)(z.A, { className: l })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case es.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: l });
        case es.J7.XBOX:
            return (0, i.jsx)(z.A, { className: l });
        case es.J7.PLAYSTATION:
            return (0, i.jsx)(Y.A, { className: l });
        case es.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function eA(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, onClick: s } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(ed.V7, { [ed.kl]: l }),
            children: (0, i.jsx)(h.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), s(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function ep(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s } = e,
        a = l.useMemo(() => (0, E.A)(t, n), [t, n]),
        r = (0, d.bG)([R.A], () => R.A.getIsAlwaysOnTop(a)),
        o = l.useCallback(() => {
            O.setAlwaysOnTop(a, !r);
        }, [a, r]);
    return X.isPlatformEmbedded && q.Ay.supportsFeature(el.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eA, {
              onClick: o,
              tooltipText: r ? eo.intl.string(eo.t.YdyDM9) : eo.intl.string(eo.t.ZVGHwP),
              icon: r ? h.hl9 : h.qgw,
              hideWhenInactive: s,
          })
        : null;
}
eu.displayName = "CallTile";
let em = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: o,
            videoToggleState: A,
            blocked: p,
            ignored: m,
            participantId: g,
            participantType: f,
            participantUserId: C,
            channel: E,
            platform: N,
            secureFramesVerified: S,
            onContextMenu: T,
            muted: y,
            deafened: j,
            localMuted: R,
            serverMuted: O,
            serverDeafened: L,
            hasVideo: M,
            hideAudioIcon: D,
            onToggleMute: G,
            popoutType: U,
            paused: P,
            controlsBottom: w,
            streamId: k,
        } = e,
        V = (0, d.bG)([B.Ay], () => null != C && B.Ay.isLocalVideoAutoDisabled(C, (0, _.A)(f)), [C, f]),
        H = (0, I.A)({ userId: C, guildId: E.getGuildId() }),
        F = (0, b.a)({ displayNameStyles: H }),
        K = (0, en.Y)(s),
        Y = (0, en.V)(s),
        [z, X] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== W.A.isOpen() && ((e = W.A.isOpen()) || X(!1));
            };
        return W.A.addChangeListener(t), () => W.A.removeChangeListener(t);
    }, []);
    let q = !D && f === es.lp.STREAM && M && (!Y || R),
        J = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: R, serverMuted: O, serverDeafened: L, deafened: j, muted: y }),
        Q = (0, h.zhh)({ value: null != w ? w : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        $ = [];
    return (
        o && f === es.lp.STREAM && $.push((0, i.jsx)(v.A, { streamId: k, paused: P }, "zoom-controls")),
        o
            ? U === x.N.CALL_TILE &&
              $.push((0, i.jsx)(ep, { channelId: E.id, participantId: g, hideWhenInactive: !z }, "stay-on-top"))
            : ($.push(
                  (0, i.jsx)(
                      eA,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), X(!0), T(e, !0, es.GK.THREE_DOT);
                          },
                          tooltipText: eo.intl.string(eo.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !z,
                      },
                      "options",
                  ),
              ),
              q &&
                  $.push(
                      (0, i.jsx)(
                          eA,
                          {
                              onClick: G,
                              tooltipText: R ? eo.intl.string(eo.t.YqAjXy) : eo.intl.string(eo.t.w4m945),
                              icon: R ? h._RO : h.HKD,
                              hideWhenInactive: !R && !z,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: a()(ed.MU, { [ed.oE]: Y, [ed.Ol]: o }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(ed.Ik, { [ed.EX]: s < 195 }),
                    children:
                        V || A === el.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: ed.h5,
                                      children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: a()(ed.ns, ed.WP),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: ed.h5,
                                              children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                          }),
                                          (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: ed.Wk,
                                              children: eo.intl.string(eo.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !K &&
                    (0, i.jsxs)("div", {
                        className: a()(ed.Qp, { [ed.EX]: s < 195 }),
                        children: [
                            (0, i.jsxs)(h.Text, {
                                className: ed.ac,
                                color: "none",
                                variant: Y ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != J &&
                                        f === es.lp.USER &&
                                        (0, i.jsx)(J, {
                                            className: a()(ed.fh, { [ed.oE]: Y }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    p
                                        ? (0, i.jsx)("div", {
                                              className: ed.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: ed.Q6,
                                                  color: c.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    m
                                        ? (0, i.jsx)("div", {
                                              className: ed.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: ed.Q6 }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, i.jsx)(eh, {
                                              participantType: f,
                                              platform: N,
                                              className: a()(ed.fh, { [ed.oE]: Y }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: a()(ed.Wk, F), children: n }),
                                    S &&
                                        (0, i.jsx)(u.m, {
                                            text: eo.intl.string(eo.t.ZEem6O),
                                            children: (0, i.jsx)(h.m5V, {
                                                className: ed.vW,
                                                size: "xs",
                                                color: c.A.colors.TEXT_STRONG,
                                                "aria-label": eo.intl.string(eo.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            !t && $.length > 0
                                ? (0, i.jsx)(r.animated.div, {
                                      className: ed._v,
                                      style: { marginBottom: Q.value },
                                      children: $,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
em.displayName = "CallTileOverlay";
let eg = S.$,
    e_ = eu;
