n.d(t, {
    Ay: () => ep,
    Yl: () => ef,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(827343),
    f = n(820284),
    p = n(587895),
    h = n(429913),
    b = n(520698),
    g = n(659974),
    m = n(164617),
    A = n(66004),
    y = n(958005),
    O = n(609425),
    j = n(73392),
    v = n(529020),
    x = n(401901),
    E = n(612258),
    _ = n(551826),
    C = n(87001),
    S = n(574172),
    I = n(665691),
    N = n(209932),
    T = n(253932),
    P = n(461782),
    w = n(614518),
    R = n(706787),
    D = n(961350),
    M = n(760751),
    L = n(111162),
    G = n(430452),
    k = n(290863),
    U = n(485296),
    V = n(977997),
    F = n(712687),
    H = n(790381),
    B = n(266080),
    K = n(723702),
    W = n(837921),
    z = n(141035),
    Y = n(654820),
    q = n(804980),
    X = n(272812),
    J = n(203355),
    Q = n(83982),
    Z = n(345812),
    $ = n(110234),
    ee = n(652215),
    et = n(806931),
    en = n(31408),
    er = n(731854),
    el = n(985018),
    ei = n(707511);
let ea = [et.lp.ACTIVITY],
    es = l.memo((e) => {
        var t, n, i, o, c, m, y, O, j, C, S, F, H, B;
        let K,
            W,
            Z,
            {
                participant: es,
                popoutType: eo,
                onDoubleClick: ec,
                onContextMenu: eu,
                onClick: ef,
                onMouseDown: ep,
                onKeyDown: eh,
                className: eb,
                style: eg,
                containerStyle: em,
                channel: eA,
                width: ey,
                onVideoResize: eO,
                inCall: ej = !1,
                selected: ev = !1,
                noBorder: ex = !1,
                noVideoRender: eE = !1,
                focused: e_ = !1,
                blocked: eC = !1,
                ignored: eS = !1,
                fit: eI = x.$.CONTAIN,
                paused: eN = !1,
                pulseSpeakingIndicator: eT = !1,
                forceIdle: eP = !1,
                controlsBottom: ew,
            } = e,
            eR = l.useContext(P.vG) || eP,
            [eD, eM] = l.useState(!1),
            eL = T.Q_.useSetting(),
            eG = (0, s.bG)([L.default], () => L.default.isStreamInfoOverlayEnabled),
            [ek, eU] = l.useState(!1),
            eV = (0, s.bG)([D.default], () => D.default.getId()),
            eF = es.type === et.lp.ACTIVITY ? null : es.user,
            eH = null != (t = null == eF ? void 0 : eF.id) ? t : null,
            [eB] = (0, h.A)(es.type === et.lp.ACTIVITY ? [es.applicationId] : []),
            eK = (0, s.bG)([G.A], () => null != eH && G.A.isLocalVideoDisabled(eH, (0, b.A)(es.type)), [eH, es.type]),
            eW = (0, s.bG)([G.A], () => (null != eH ? G.A.getVideoToggleState(eH, (0, b.A)(es.type)) : ee.bb8.NONE), [
                eH,
                es.type,
            ]),
            ez = eW === ee.bb8.AUTO_PROBING,
            { speaking: eY, latched: eq, ringing: eX, hasVideo: eJ } = (0, $.A)(es, eV),
            eQ = (0, s.bG)([N.A], () => null !== eH && N.A.isUserPlayingSounds(eH), [eH]),
            eZ =
                ((O = eV),
                (j = es),
                (C = eA.getGuildId()),
                (K = j.type !== et.lp.ACTIVITY ? j.user.id : j.applicationId),
                (W = (0, s.cf)([V.A], () => {
                    var e, t, n;
                    let r = V.A.getVoiceState(C, K);
                    return {
                        muted: null != (e = null == r ? void 0 : r.mute) && e,
                        deafened: null != (t = null == r ? void 0 : r.deaf) && t,
                        suppressed: null != (n = null == r ? void 0 : r.suppress) && n,
                        voiceChannelId: null == r ? void 0 : r.channelId,
                    };
                })),
                (Z = (0, s.cf)([G.A], () => {
                    let e = (0, b.A)(j.type);
                    return O === K
                        ? {
                              muted: !1,
                              deafened: !1,
                          }
                        : {
                              muted: G.A.isLocalMute(K, e),
                              localVideoDisabled: G.A.isLocalVideoDisabled(K, e),
                              localVideoAutoDisabled: G.A.isLocalVideoAutoDisabled(K, e),
                          };
                }, [O, j.type, K])),
                {
                    serverMuted: W.muted,
                    serverDeafened: W.deafened,
                    suppressed: W.suppressed,
                    localMuted: Z.muted,
                    muted:
                        null !=
                            (S = j.type === et.lp.USER && (null == (H = j.voiceState) ? void 0 : H.isVoiceMuted())) &&
                        S,
                    deafened:
                        null !=
                            (F =
                                j.type === et.lp.USER && (null == (B = j.voiceState) ? void 0 : B.isVoiceDeafened())) &&
                        F,
                }),
            e$ = es.type === et.lp.STREAM && eH === eV,
            e0 = (0, s.bG)([w.A], () => (es.type === et.lp.USER && null != eH ? w.A.getEffectForUserId(eH) : null)),
            e1 = (0, s.bG)([V.A], () => V.A.getVoicePlatformForChannel(eA.id, null != eH ? eH : ee.dJq)),
            { showGameIcon: e2 } = v.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            e9 = (0, s.bG)(
                [k.A],
                () =>
                    e2 && null != eH
                        ? k.A.findActivity(eH, (e) => null != e.application_id && e.type === ee.$pd.PLAYING)
                        : null,
                [e2, eH],
            ),
            e7 = (0, s.bG)([M.A], () =>
                (null == e9 ? void 0 : e9.application_id) != null ? M.A.getDetectableGame(e9.application_id) : null,
            ),
            e3 = (0, s.bG)([p.A], () =>
                null != e7 && (null == e9 ? void 0 : e9.application_id) != null
                    ? p.A.getApplication(null == e9 ? void 0 : e9.application_id)
                    : void 0,
            ),
            e6 = (0, I.UF)({
                userId: eH,
                channelId: eA.id,
            }),
            e8 = (0, I.DY)({
                streamKey: es.type === et.lp.STREAM ? es.id : null,
                channelId: eA.id,
            }),
            e5 = l.useMemo(
                () => (es.type === et.lp.STREAM ? null != e8 && e8 : es.type === et.lp.USER && null != e6 && e6),
                [e8, e6, es.type],
            );
        l.useEffect(() => {
            eM(e_);
        }, [e_]);
        let e4 = l.useCallback(() => {
                null != eH && d.A.toggleLocalMute(eH, er.x.STREAM);
            }, [eH]),
            te = l.useCallback(
                (e) => {
                    null == ef || ef(es, e);
                },
                [ef, es],
            ),
            tt = l.useCallback(
                (e) => {
                    null == ec || ec(es, e);
                },
                [ec, es],
            ),
            tn = l.useCallback(
                (e, t, n) => {
                    null == eu || eu(es, e, t, n);
                },
                [eu, es],
            ),
            tr = null,
            tl = null,
            ti = "";
        switch (es.type) {
            case et.lp.STREAM:
                (tr = (0, r.jsx)(J.A, {
                    participant: es,
                    selected: ev,
                    popoutType: eo,
                    width: ey,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    focused: e_,
                    idle: eR,
                    controlsBottom: ew,
                })),
                    (tl = (0, r.jsx)(J.D, {
                        participant: es,
                        selected: ev,
                        width: ey,
                        focused: e_,
                        idle: eR,
                        premiumIndicator: !1,
                    })),
                    (ti = el.intl.formatToPlainString(el.t.gHPz3Q, { streamerName: es.user.username }));
                break;
            case et.lp.USER:
                (tr = (0, r.jsx)(Q.A, {
                    channel: eA,
                    inCall: ej,
                    participant: es,
                    popoutType: eo,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    selected: ev,
                    width: ey,
                    blocked: eC,
                    ignored: eS,
                    noVideoRender: eE || ez,
                    pulseSpeakingIndicator: eT,
                })),
                    (tl = (0, r.jsx)(Q.s, {
                        participant: es,
                        channelId: eA.id,
                    })),
                    (ti = el.intl.formatToPlainString(el.t["iC/x/Q"], { username: es.user.username }));
                break;
            case et.lp.ACTIVITY:
                (tr = (0, r.jsx)(q.Ay, {
                    interactible: e_,
                    participant: es,
                    selected: ev,
                    channel: eA,
                    width: ey,
                })),
                    (ti = el.intl.formatToPlainString(el.t.YCvOsO, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case et.lp.HIDDEN_STREAM:
                tr = (0, r.jsx)(J.A, {
                    participant: es,
                    selected: ev,
                    width: ey,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    popoutType: eo,
                    focused: e_,
                    idle: eR,
                });
        }
        let ta = l.useRef(null),
            ts = (0, s.bG)([U.A], () => (es.type === et.lp.USER ? U.A.getVoiceVolume(es.id) : -1 / 0)),
            to = (0, g.v)({
                isSpeaking: eY,
                voiceDb: ts,
                spreadDirection: g.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            tc = es.type === et.lp.STREAM ? u.kN9 : u.npA;
        return (0, r.jsx)(f.A, {
            section: ee.JJy.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: a()(ei.iE, { [ei.DF]: eX }, eb),
                style: em,
                onMouseEnter: () => {
                    eU(!0);
                },
                onMouseLeave: () => {
                    eU(!1);
                },
                children: (0, r.jsxs)(_.A, {
                    shakeLocation: en.uD.VOICE_USER,
                    isShaking: eY,
                    className: ei.Vs,
                    children: [
                        (0, r.jsx)(X.A, {
                            ref: ta,
                            className: a()(ei.Vs, {
                                [ei.E7]: ex,
                                [ei.k_]: null == ef,
                                [ei.N7]: eR,
                            }),
                            noBorder: ex,
                            style: eg,
                            participantUserId: eH,
                            children: (0, r.jsxs)(u.sqX, {
                                "aria-label": ti,
                                className: ei.lG,
                                onDoubleClick: tt,
                                onContextMenu: (e) => tn(e, es.type === et.lp.STREAM),
                                onClick: te,
                                onMouseDown: ep,
                                onKeyDown: eh,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e0 && null != eH
                                        ? (0, r.jsx)(R.A, {
                                              voiceChannelEffect: e0,
                                              onComplete: () => (0, w.a)(eH),
                                              userId: eH,
                                          })
                                        : null,
                                    es.type === et.lp.USER
                                        ? (0, r.jsx)("div", {
                                              className: ei.nl,
                                              children: (0, r.jsx)(A.A, {
                                                  userId: eH,
                                                  channelId: eA.id,
                                                  guildId: eA.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (n =
                                                              null == ta || null == (o = ta.current)
                                                                  ? void 0
                                                                  : o.clientWidth)
                                                              ? n
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (i =
                                                              null == ta || null == (c = ta.current)
                                                                  ? void 0
                                                                  : c.clientHeight)
                                                              ? i
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    tr,
                                    ex
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: ei.hD,
                                              children: tl,
                                          }),
                                    ev
                                        ? (0, r.jsx)("div", {
                                              className: ei._Q,
                                              children: (0, r.jsx)(tc, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: ei.Dt,
                                              }),
                                          })
                                        : null,
                                    ea.includes(es.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ed,
                                              ((m = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })(
                                                  {
                                                      focused: e_,
                                                      width: ey,
                                                      inCall: ej,
                                                      participantId: es.id,
                                                      participantType: es.type,
                                                      hasVideo: null != eJ && eJ,
                                                  },
                                                  eZ,
                                              )),
                                              (y = y =
                                                  {
                                                      idle: eR,
                                                      platform: e1,
                                                      title: (0, z.A)(eA, es),
                                                      blocked: eC,
                                                      ignored: eS,
                                                      localVideoDisabled: eK,
                                                      videoToggleState: eW,
                                                      hideAudioIcon: e$,
                                                      onContextMenu: tn,
                                                      onToggleMute: e4,
                                                      participantUserId: eH,
                                                      channel: eA,
                                                      application: e3,
                                                      secureFramesVerified: e5,
                                                      isHovered: ek,
                                                      popoutType: eo,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(y))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(y)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            m,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(y, e),
                                                        );
                                                    }),
                                              m),
                                          ),
                                    ej && !ex
                                        ? (0, r.jsx)("div", {
                                              className: a()(ei.PQ, {
                                                  [ei.pU]: !e_ && (eQ || null != e0),
                                                  [ei.JB]: eq && !eY && !e_ && !eQ,
                                              }),
                                              style: e_ || eQ ? void 0 : to,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eL &&
                            eG &&
                            ek &&
                            (0, r.jsx)(Y.A, {
                                currentUserId: eV,
                                participant: es,
                            }),
                        (0, r.jsx)(E.A, {
                            isFiring: eD,
                            callTileRef: ta.current,
                        }),
                    ],
                }),
            }),
        });
    });
function eo(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === et.lp.STREAM)
        return n === et.J7.XBOX
            ? (0, r.jsx)(B.A, { className: l })
            : (0, r.jsx)(u.kN9, {
                  size: "md",
                  color: "currentColor",
                  className: l,
              });
    switch (n) {
        case et.J7.MOBILE:
            return (0, r.jsx)(u.u6o, {
                size: "xs",
                color: "currentColor",
                className: l,
            });
        case et.J7.XBOX:
            return (0, r.jsx)(B.A, { className: l });
        case et.J7.PLAYSTATION:
            return (0, r.jsx)(H.A, { className: l });
        default:
            return null;
    }
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, onClick: i } = e;
    return (0, r.jsx)(c.m, {
        text: n,
        children: (0, r.jsx)("div", {
            className: a()(ei.V7, { [ei.kl]: l }),
            children: (0, r.jsx)(u.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), i(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function eu(e) {
    let { channelId: t, participantId: n, hideWhenInactive: i } = e,
        a = l.useMemo(() => (0, y.A)(t, n), [t, n]),
        o = (0, s.bG)([C.A], () => C.A.getIsAlwaysOnTop(a)),
        c = l.useCallback(() => {
            S.setAlwaysOnTop(a, !o);
        }, [a, o]);
    return K.isPlatformEmbedded && W.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS)
        ? (0, r.jsx)(ec, {
              onClick: c,
              tooltipText: o ? el.intl.string(el.t.YdyDM9) : el.intl.string(el.t.ZVGHwP),
              icon: o ? u.hl9 : u.qgw,
              hideWhenInactive: i,
          })
        : null;
}
es.displayName = "CallTile";
let ed = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: i,
            focused: d,
            videoToggleState: f,
            blocked: p,
            ignored: h,
            participantId: g,
            participantType: A,
            participantUserId: y,
            channel: v,
            platform: x,
            secureFramesVerified: E,
            onContextMenu: _,
            muted: C,
            deafened: S,
            localMuted: I,
            serverMuted: N,
            serverDeafened: T,
            hasVideo: P,
            hideAudioIcon: w,
            onToggleMute: R,
            popoutType: D,
        } = e,
        M = (0, s.bG)([G.A], () => null != y && G.A.isLocalVideoAutoDisabled(y, (0, b.A)(A)), [y, A]),
        L = (0, O.A)({
            userId: y,
            guildId: v.getGuildId(),
        }),
        k = (0, j.a)({ displayNameStyles: L }),
        U = (0, Z.Y)(i),
        V = (0, Z.V)(i),
        [H, B] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== F.A.isOpen() && ((e = F.A.isOpen()) || B(!1));
            };
        return F.A.addChangeListener(t), () => F.A.removeChangeListener(t);
    }, []);
    let K = !w && A === et.lp.STREAM && P && (!V || I),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: l, muted: i } = e;
            return r ? u.TJE : n ? u.O1p : l ? u.cQT : t ? u.O1p : i ? u.z0P : null;
        })({
            localMuted: I,
            serverMuted: N,
            serverDeafened: T,
            deafened: S,
            muted: C,
        }),
        z = [];
    return (
        d
            ? D === m.N.CALL_TILE &&
              z.push(
                  (0, r.jsx)(
                      eu,
                      {
                          channelId: v.id,
                          participantId: g,
                          hideWhenInactive: !H,
                      },
                      "stay-on-top",
                  ),
              )
            : (z.push(
                  (0, r.jsx)(
                      ec,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), B(!0), _(e, !0, et.GK.THREE_DOT);
                          },
                          tooltipText: el.intl.string(el.t["+1H47t"]),
                          icon: u.jNK,
                          hideWhenInactive: !H,
                      },
                      "options",
                  ),
              ),
              K &&
                  z.push(
                      (0, r.jsx)(
                          ec,
                          {
                              onClick: R,
                              tooltipText: I ? el.intl.string(el.t.YqAjXy) : el.intl.string(el.t.w4m945),
                              icon: I ? u._RO : u.HKD,
                              hideWhenInactive: !I && !H,
                          },
                          "mute",
                      ),
                  )),
        (0, r.jsxs)("div", {
            className: a()(ei.MU, {
                [ei.oE]: V,
                [ei.Ol]: d,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(ei.Ik, { [ei.EX]: i < 195 }),
                    children:
                        M || f === ee.bb8.AUTO_PROBING
                            ? t
                                ? (0, r.jsx)("div", {
                                      className: ei.h5,
                                      children: (0, r.jsx)(u.OCo, {
                                          size: "md",
                                          color: "currentColor",
                                      }),
                                  })
                                : (0, r.jsxs)("div", {
                                      className: a()(ei.ns, ei.WP),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: ei.h5,
                                              children: (0, r.jsx)(u.OCo, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                          }),
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-sm/normal",
                                              className: ei.Wk,
                                              children: el.intl.string(el.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !U &&
                    (0, r.jsxs)("div", {
                        className: a()(ei.Qp, { [ei.EX]: i < 195 }),
                        children: [
                            (0, r.jsxs)(u.Text, {
                                className: ei.ac,
                                color: "none",
                                variant: V ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != W &&
                                        A === et.lp.USER &&
                                        (0, r.jsx)(W, {
                                            className: a()(ei.fh, { [ei.oE]: V }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    p
                                        ? (0, r.jsx)("div", {
                                              className: ei.Z5,
                                              children: (0, r.jsx)(u.KTN, {
                                                  size: "lg",
                                                  className: ei.Q6,
                                                  color: o.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    h
                                        ? (0, r.jsx)("div", {
                                              className: ei.PP,
                                              children: (0, r.jsx)(u.G3N, {
                                                  size: "lg",
                                                  className: ei.Q6,
                                              }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, r.jsx)(eo, {
                                              participantType: A,
                                              platform: x,
                                              className: a()(ei.fh, { [ei.oE]: V }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, r.jsx)("span", {
                                              className: a()(ei.Wk, k),
                                              children: n,
                                          }),
                                    E &&
                                        (0, r.jsx)(c.m, {
                                            text: el.intl.string(el.t.ZEem6O),
                                            children: (0, r.jsx)(u.m5V, {
                                                className: ei.vW,
                                                size: "xs",
                                                color: o.A.colors.TEXT_STRONG,
                                                "aria-label": el.intl.string(el.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            z.length > 0
                                ? (0, r.jsx)("div", {
                                      className: ei._v,
                                      children: z,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ed.displayName = "CallTileOverlay";
let ef = x.$,
    ep = es;
