n.d(t, { Ay: () => em, Yl: () => e_ }), n(321073);
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
    y = n(117029),
    v = n(612258),
    j = n(551826),
    R = n(87001),
    O = n(574172),
    L = n(665691),
    M = n(209932),
    D = n(253932),
    U = n(461782),
    G = n(614518),
    P = n(706787),
    k = n(961350),
    w = n(111162),
    B = n(430452),
    V = n(485296),
    H = n(977997),
    F = n(712687),
    K = n(790381),
    W = n(266080),
    Y = n(723702),
    z = n(837921),
    q = n(141035),
    X = n(654820),
    J = n(804980),
    Q = n(272812),
    $ = n(203355),
    Z = n(83982),
    ee = n(345812),
    et = n(110234),
    en = n(652215),
    ei = n(806931),
    el = n(31408),
    es = n(731854),
    ea = n(985018),
    er = n(32685);
let eo = [ei.lp.ACTIVITY],
    ed = l.memo((e) => {
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
                className: y,
                style: R,
                containerStyle: O,
                channel: F,
                width: K,
                onVideoResize: W,
                inCall: Y = !1,
                selected: z = !1,
                noBorder: ee = !1,
                noVideoRender: ed = !1,
                focused: ec = !1,
                blocked: eu = !1,
                ignored: eh = !1,
                fit: e_ = S.$.CONTAIN,
                paused: em = !1,
                pulseSpeakingIndicator: eg = !1,
                forceIdle: ep = !1,
                controlsBottom: ef,
            } = e,
            ex = l.useContext(U.vG) || ep,
            [eE, eI] = l.useState(!1),
            eC = D.Q_.useSetting(),
            eN = (0, d.bG)([w.default], () => w.default.isStreamInfoOverlayEnabled),
            [eT, eS] = l.useState(!1),
            eb = (0, d.bG)([k.default], () => k.default.getId()),
            ey = u.type === ei.lp.ACTIVITY ? null : u.user,
            ev = ey?.id ?? null,
            [ej] = (0, g.A)(u.type === ei.lp.ACTIVITY ? [u.applicationId] : []),
            eR = (0, d.bG)([B.Ay], () => null != ev && B.Ay.isLocalVideoDisabled(ev, (0, p.A)(u.type)), [ev, u.type]),
            eO = (0, d.bG)([B.Ay], () => (null != ev ? B.Ay.getVideoToggleState(ev, (0, p.A)(u.type)) : en.bb8.NONE), [
                ev,
                u.type,
            ]),
            eL = eO === en.bb8.AUTO_PROBING,
            { speaking: eM, ringing: eD, hasVideo: eU } = (0, et.A)(u, eb),
            eG = (0, d.bG)([M.A], () => null !== ev && M.A.isUserPlayingSounds(ev), [ev]),
            eP =
                ((t = eb),
                (n = u),
                (s = F.getGuildId()),
                (r = n.type !== ei.lp.ACTIVITY ? n.user.id : n.applicationId),
                (o = (0, d.cf)([H.A], () => {
                    let e = H.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, d.cf)([B.Ay], () => {
                    let e = (0, p.A)(n.type);
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
                    muted: (n.type === ei.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === ei.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            ek = u.type === ei.lp.STREAM && ev === eb,
            ew = (0, d.bG)([G.A], () => (u.type === ei.lp.USER && null != ev ? G.A.getEffectForUserId(ev) : null)),
            eB = (0, d.bG)([H.A], () => H.A.getVoicePlatformForChannel(F.id, ev ?? en.dJq)),
            eV = (0, L.UF)({ userId: ev, channelId: F.id }),
            eH = (0, L.DY)({ streamKey: u.type === ei.lp.STREAM ? u.id : null, channelId: F.id }),
            eF = l.useMemo(
                () => (u.type === ei.lp.STREAM ? (eH ?? !1) : u.type === ei.lp.USER && (eV ?? !1)),
                [eH, eV, u.type],
            );
        l.useEffect(() => {
            eI(ec);
        }, [ec]);
        let eK = l.useCallback(() => {
                null != ev && A.A.toggleLocalMute(ev, es.x.STREAM);
            }, [ev]),
            eW = l.useCallback(
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
            eJ = "";
        switch (u.type) {
            case ei.lp.STREAM:
                (eq = (0, i.jsx)($.A, {
                    participant: u,
                    selected: z,
                    popoutType: m,
                    width: K,
                    fit: e_,
                    onVideoResize: W,
                    paused: em,
                })),
                    (eX = (0, i.jsx)($.D, {
                        participant: u,
                        selected: z,
                        width: K,
                        focused: ec,
                        idle: ex,
                        premiumIndicator: !1,
                    })),
                    (eJ = ea.intl.formatToPlainString(ea.t.gHPz3Q, { streamerName: u.user.username }));
                break;
            case ei.lp.USER:
                (eq = (0, i.jsx)(Z.A, {
                    channel: F,
                    inCall: Y,
                    participant: u,
                    popoutType: m,
                    fit: e_,
                    onVideoResize: W,
                    paused: em,
                    selected: z,
                    width: K,
                    blocked: eu,
                    ignored: eh,
                    noVideoRender: ed || eL,
                    pulseSpeakingIndicator: eg,
                })),
                    (eX = (0, i.jsx)(Z.s, { participant: u, channelId: F.id })),
                    (eJ = ea.intl.formatToPlainString(ea.t["iC/x/Q"], { username: u.user.username }));
                break;
            case ei.lp.ACTIVITY:
                (eq = (0, i.jsx)(J.Ay, { interactible: ec, participant: u, selected: z, channel: F, width: K })),
                    (eJ = ea.intl.formatToPlainString(ea.t.YCvOsO, { activityName: ej?.name }));
                break;
            case ei.lp.HIDDEN_STREAM:
                eq = (0, i.jsx)($.A, {
                    participant: u,
                    selected: z,
                    width: K,
                    fit: e_,
                    onVideoResize: W,
                    paused: em,
                    popoutType: m,
                });
        }
        let eQ = l.useRef(null),
            e$ = (0, d.bG)([V.A], () => (u.type === ei.lp.USER ? V.A.getVoiceVolume(u.id) : -1 / 0)),
            eZ = (0, C.v)({ isSpeaking: eM, voiceDb: e$, spreadDirection: C.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e0 = (0, ei.Ay)(u) ? h.kN9 : eU ? h.npA : h.EsG,
            e1 = u.type === ei.lp.STREAM && ec;
        return (0, i.jsx)(_.A, {
            section: en.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(b.Ay, {
                streamKey: u.id,
                enableZoom: e1,
                children: (0, i.jsx)("div", {
                    className: a()(er.iE, { [er.DF]: eD }, y),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0);
                    },
                    onMouseLeave: () => {
                        eS(!1);
                    },
                    children: (0, i.jsxs)(j.A, {
                        shakeLocation: el.uD.VOICE_USER,
                        isShaking: eM,
                        className: er.Vs,
                        children: [
                            (0, i.jsx)(Q.A, {
                                ref: eQ,
                                className: a()(er.Vs, { [er.E7]: ee, [er.k_]: null == I, [er.N7]: ex }),
                                noBorder: ee,
                                style: R,
                                participantUserId: ev,
                                children: (0, i.jsxs)(h.sqX, {
                                    "aria-label": eJ,
                                    className: er.lG,
                                    onDoubleClick: eY,
                                    onContextMenu: (e) => ez(e, u.type === ei.lp.STREAM),
                                    onClick: eW,
                                    onMouseDown: N,
                                    onKeyDown: T,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != ew && null != ev
                                            ? (0, i.jsx)(P.A, {
                                                  voiceChannelEffect: ew,
                                                  onComplete: () => (0, G.a)(ev),
                                                  userId: ev,
                                              })
                                            : null,
                                        u.type === ei.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: er.nl,
                                                  children: (0, i.jsx)(x.A, {
                                                      userId: ev,
                                                      channelId: F.id,
                                                      guildId: F.getGuildId(),
                                                      containerDimensions: {
                                                          width: eQ?.current?.clientWidth ?? 0,
                                                          height: eQ?.current?.clientHeight ?? 0,
                                                      },
                                                  }),
                                              })
                                            : null,
                                        eq,
                                        ee ? null : (0, i.jsx)("div", { className: er.hD, children: eX }),
                                        z
                                            ? (0, i.jsx)("div", {
                                                  className: er._Q,
                                                  children: (0, i.jsx)(e0, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: er.Dt,
                                                  }),
                                              })
                                            : null,
                                        eo.includes(u.type)
                                            ? null
                                            : (0, i.jsx)(eA, {
                                                  focused: ec,
                                                  width: K,
                                                  inCall: Y,
                                                  participantId: u.id,
                                                  participantType: u.type,
                                                  hasVideo: eU ?? !1,
                                                  ...eP,
                                                  idle: ex,
                                                  platform: eB,
                                                  title: (0, q.A)(F, u),
                                                  blocked: eu,
                                                  ignored: eh,
                                                  localVideoDisabled: eR,
                                                  videoToggleState: eO,
                                                  hideAudioIcon: ek,
                                                  onContextMenu: ez,
                                                  onToggleMute: eK,
                                                  participantUserId: ev,
                                                  channel: F,
                                                  secureFramesVerified: eF,
                                                  isHovered: eT,
                                                  popoutType: m,
                                                  paused: em,
                                                  controlsBottom: ef,
                                                  streamId: u.type === ei.lp.STREAM ? u.streamId : null,
                                              }),
                                        Y && !ee
                                            ? (0, i.jsx)("div", {
                                                  className: a()(er.PQ, { [er.pU]: !ec && (eG || null != ew) }),
                                                  style: ec || eG ? void 0 : eZ,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            eC && eN && eT && (0, i.jsx)(X.A, { currentUserId: eb, participant: u }),
                            (0, i.jsx)(v.A, { isFiring: eE, callTileRef: eQ.current }),
                        ],
                    }),
                }),
            }),
        });
    });
function ec(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === ei.lp.STREAM)
        return n === ei.J7.XBOX
            ? (0, i.jsx)(W.A, { className: l })
            : (0, i.jsx)(h.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case ei.J7.MOBILE:
            return (0, i.jsx)(h.u6o, { size: "xs", color: "currentColor", className: l });
        case ei.J7.XBOX:
            return (0, i.jsx)(W.A, { className: l });
        case ei.J7.PLAYSTATION:
            return (0, i.jsx)(K.A, { className: l });
        case ei.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function eu(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, idle: s, onClick: r } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(er.V7, { [er.kl]: l, [er.N7]: s }),
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
function eh(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s, idle: a } = e,
        r = l.useMemo(() => (0, E.A)(t, n), [t, n]),
        o = (0, d.bG)([R.A], () => R.A.getIsAlwaysOnTop(r)),
        c = l.useCallback(() => {
            (0, I.X)(m.A.CALL_TILE_POPOUT, I.O.STAY_ON_TOP, !o), O.setAlwaysOnTop(r, !o);
        }, [r, o]);
    return Y.isPlatformEmbedded && z.Ay.supportsFeature(en.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eu, {
              onClick: c,
              tooltipText: o ? ea.intl.string(ea.t.YdyDM9) : ea.intl.string(ea.t.ZVGHwP),
              icon: o ? h.hl9 : h.qgw,
              hideWhenInactive: s,
              idle: a,
          })
        : null;
}
ed.displayName = "CallTile";
let eA = l.memo((e) => {
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
            channel: v,
            platform: j,
            secureFramesVerified: R,
            onContextMenu: L,
            muted: M,
            deafened: D,
            localMuted: U,
            serverMuted: G,
            serverDeafened: P,
            hasVideo: k,
            hideAudioIcon: w,
            onToggleMute: V,
            popoutType: H,
            paused: K,
            controlsBottom: W,
            streamId: Y,
        } = e,
        z = (0, d.bG)([B.Ay], () => null != b && B.Ay.isLocalVideoAutoDisabled(b, (0, p.A)(S)), [b, S]),
        q = (0, N.A)({ userId: b, guildId: v.getGuildId() }),
        X = (0, T.a)({ displayNameStyles: q }),
        J = (0, ee.Y)(s),
        Q = (0, ee.V)(s),
        [$, Z] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== F.A.isOpen() && ((e = F.A.isOpen()) || Z(!1));
            };
        return F.A.addChangeListener(t), () => F.A.removeChangeListener(t);
    }, []);
    let et = !w && S === ei.lp.STREAM && k && (!Q || U),
        el = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? h.TJE : n ? h.O1p : l ? h.cQT : t ? h.O1p : s ? h.z0P : null;
        })({ localMuted: U, serverMuted: G, serverDeafened: P, deafened: D, muted: M }),
        es = (0, h.zhh)({ value: null != W ? W : 0, config: { ...r.config.stiff, clamp: !0 } }, "animate-always"),
        eo = [];
    return (
        A && S === ei.lp.STREAM && eo.push((0, i.jsx)(y.A, { streamId: Y, paused: K }, "zoom-controls")),
        A
            ? H === f.N.CALL_TILE &&
              (eo.push(
                  (0, i.jsx)(eh, { channelId: v.id, participantId: C, hideWhenInactive: !1, idle: t }, "stay-on-top"),
              ),
              eo.push(
                  (0, i.jsx)(
                      eu,
                      {
                          onClick: () => {
                              (0, I.X)(m.A.CALL_TILE_POPOUT, I.O.POPOUT_RETURN), O.close((0, E.A)(v.id, C));
                          },
                          tooltipText: ea.intl.string(ea.t["7Dwcnj"]),
                          icon: o.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: t,
                      },
                      "close",
                  ),
              ))
            : (eo.push(
                  (0, i.jsx)(
                      eu,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), Z(!0), L(e, !0, ei.GK.THREE_DOT);
                          },
                          tooltipText: ea.intl.string(ea.t["+1H47t"]),
                          icon: h.jNK,
                          hideWhenInactive: !$,
                          idle: t,
                      },
                      "options",
                  ),
              ),
              et &&
                  eo.push(
                      (0, i.jsx)(
                          eu,
                          {
                              onClick: V,
                              tooltipText: U ? ea.intl.string(ea.t.YqAjXy) : ea.intl.string(ea.t.w4m945),
                              icon: U ? h._RO : h.HKD,
                              hideWhenInactive: !U && !$,
                              idle: t,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: a()(er.MU, { [er.oE]: Q, [er.Ol]: A }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(er.Ik, { [er.EX]: s < 195 }),
                    children:
                        z || _ === en.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: er.h5,
                                      children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: a()(er.ns, er.WP),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: er.h5,
                                              children: (0, i.jsx)(h.OCo, { size: "md", color: "currentColor" }),
                                          }),
                                          (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: er.Wk,
                                              children: ea.intl.string(ea.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !J &&
                    (0, i.jsxs)("div", {
                        className: a()(er.Qp, { [er.EX]: s < 195 }),
                        children: [
                            (0, i.jsxs)(h.Text, {
                                className: er.ac,
                                color: "none",
                                variant: Q ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != el &&
                                        S === ei.lp.USER &&
                                        (0, i.jsx)(el, { className: er.gr, size: "xs", color: "currentColor" }),
                                    g
                                        ? (0, i.jsx)("div", {
                                              className: er.Z5,
                                              children: (0, i.jsx)(h.KTN, {
                                                  size: "lg",
                                                  className: er.Q6,
                                                  color: c.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    x
                                        ? (0, i.jsx)("div", {
                                              className: er.PP,
                                              children: (0, i.jsx)(h.G3N, { size: "lg", className: er.Q6 }),
                                          })
                                        : null,
                                    t ? null : (0, i.jsx)(ec, { participantType: S, platform: j, className: er.gr }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: a()(er.Wk, X), children: n }),
                                    R &&
                                        (0, i.jsx)(u.m, {
                                            text: ea.intl.string(ea.t.ZEem6O),
                                            children: (0, i.jsx)(h.m5V, {
                                                className: er.vW,
                                                size: "xs",
                                                color: c.A.colors.TEXT_STRONG,
                                                "aria-label": ea.intl.string(ea.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            eo.length > 0
                                ? (0, i.jsx)(r.animated.div, {
                                      className: a()(er._v, { [er.N7]: t }),
                                      style: { marginBottom: es.value },
                                      children: eo,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
eA.displayName = "CallTileOverlay";
let e_ = S.$,
    em = ed;
