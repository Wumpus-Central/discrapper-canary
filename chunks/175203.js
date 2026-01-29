n.d(t, {
    Ay: () => ef,
    Yl: () => eh,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(934551),
    o = n(311907),
    c = n(827734),
    u = n(990078),
    d = n(397927),
    p = n(827343),
    h = n(820284),
    f = n(587895),
    g = n(429913),
    m = n(520698),
    b = n(659974),
    A = n(164617),
    y = n(66004),
    _ = n(958005),
    O = n(609425),
    j = n(73392),
    v = n(529020),
    x = n(401901),
    E = n(612258),
    C = n(551826),
    S = n(87001),
    I = n(574172),
    N = n(665691),
    T = n(209932),
    P = n(253932),
    w = n(461782),
    R = n(614518),
    D = n(706787),
    M = n(961350),
    L = n(760751),
    k = n(111162),
    U = n(430452),
    G = n(290863),
    B = n(485296),
    V = n(977997),
    F = n(712687),
    H = n(790381),
    K = n(266080),
    W = n(723702),
    z = n(837921),
    Y = n(141035),
    q = n(654820),
    X = n(804980),
    J = n(272812),
    Q = n(203355),
    Z = n(83982),
    $ = n(345812),
    ee = n(110234),
    et = n(652215),
    en = n(806931),
    er = n(31408),
    el = n(731854),
    ei = n(985018),
    es = n(707511);
let ea = [en.lp.ACTIVITY],
    eo = l.memo((e) => {
        var t, n, i, a, c, u, A, _, O, j, S, I, F, H;
        let K,
            W,
            z,
            {
                participant: $,
                popoutType: eo,
                onDoubleClick: ec,
                onContextMenu: eu,
                onClick: ed,
                onMouseDown: eh,
                onKeyDown: ef,
                className: eg,
                style: em,
                containerStyle: eb,
                channel: eA,
                width: ey,
                onVideoResize: e_,
                inCall: eO = !1,
                selected: ej = !1,
                noBorder: ev = !1,
                noVideoRender: ex = !1,
                focused: eE = !1,
                blocked: eC = !1,
                ignored: eS = !1,
                fit: eI = x.$.CONTAIN,
                paused: eN = !1,
                pulseSpeakingIndicator: eT = !1,
                forceIdle: eP = !1,
                controlsBottom: ew,
            } = e,
            eR = l.useContext(w.vG) || eP,
            [eD, eM] = l.useState(!1),
            eL = P.Q_.useSetting(),
            ek = (0, o.bG)([k.default], () => k.default.isStreamInfoOverlayEnabled),
            [eU, eG] = l.useState(!1),
            eB = (0, o.bG)([M.default], () => M.default.getId()),
            eV = $.type === en.lp.ACTIVITY ? null : $.user,
            eF = null != (t = null == eV ? void 0 : eV.id) ? t : null,
            [eH] = (0, g.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
            eK = (0, o.bG)([U.A], () => null != eF && U.A.isLocalVideoDisabled(eF, (0, m.A)($.type)), [eF, $.type]),
            eW = (0, o.bG)([U.A], () => (null != eF ? U.A.getVideoToggleState(eF, (0, m.A)($.type)) : et.bb8.NONE), [
                eF,
                $.type,
            ]),
            ez = eW === et.bb8.AUTO_PROBING,
            { speaking: eY, latched: eq, ringing: eX, hasVideo: eJ } = (0, ee.A)($, eB),
            eQ = (0, o.bG)([T.A], () => null !== eF && T.A.isUserPlayingSounds(eF), [eF]),
            eZ =
                ((_ = eB),
                (O = $),
                (j = eA.getGuildId()),
                (K = O.type !== en.lp.ACTIVITY ? O.user.id : O.applicationId),
                (W = (0, o.cf)([V.A], () => {
                    var e, t, n;
                    let r = V.A.getVoiceState(j, K);
                    return {
                        muted: null != (e = null == r ? void 0 : r.mute) && e,
                        deafened: null != (t = null == r ? void 0 : r.deaf) && t,
                        suppressed: null != (n = null == r ? void 0 : r.suppress) && n,
                        voiceChannelId: null == r ? void 0 : r.channelId,
                    };
                })),
                (z = (0, o.cf)([U.A], () => {
                    let e = (0, m.A)(O.type);
                    return _ === K
                        ? {
                              muted: !1,
                              deafened: !1,
                          }
                        : {
                              muted: U.A.isLocalMute(K, e),
                              localVideoDisabled: U.A.isLocalVideoDisabled(K, e),
                              localVideoAutoDisabled: U.A.isLocalVideoAutoDisabled(K, e),
                          };
                }, [_, O.type, K])),
                {
                    serverMuted: W.muted,
                    serverDeafened: W.deafened,
                    suppressed: W.suppressed,
                    localMuted: z.muted,
                    muted:
                        null !=
                            (S = O.type === en.lp.USER && (null == (F = O.voiceState) ? void 0 : F.isVoiceMuted())) &&
                        S,
                    deafened:
                        null !=
                            (I =
                                O.type === en.lp.USER && (null == (H = O.voiceState) ? void 0 : H.isVoiceDeafened())) &&
                        I,
                }),
            e$ = $.type === en.lp.STREAM && eF === eB,
            e0 = (0, o.bG)([R.A], () => ($.type === en.lp.USER && null != eF ? R.A.getEffectForUserId(eF) : null)),
            e1 = (0, o.bG)([V.A], () => V.A.getVoicePlatformForChannel(eA.id, null != eF ? eF : et.dJq)),
            { showGameIcon: e9 } = v.Ay.useExperiment(
                {
                    location: "voice_users",
                },
                {
                    autoTrackExposure: !1,
                },
            ),
            e7 = (0, o.bG)(
                [G.A],
                () =>
                    e9 && null != eF
                        ? G.A.findActivity(eF, (e) => null != e.application_id && e.type === et.$pd.PLAYING)
                        : null,
                [e9, eF],
            ),
            e2 = (0, o.bG)([L.A], () =>
                (null == e7 ? void 0 : e7.application_id) != null ? L.A.getDetectableGame(e7.application_id) : null,
            ),
            e6 = (0, o.bG)([f.A], () =>
                null != e2 && (null == e7 ? void 0 : e7.application_id) != null
                    ? f.A.getApplication(null == e7 ? void 0 : e7.application_id)
                    : void 0,
            ),
            e3 = (0, N.UF)({
                userId: eF,
                channelId: eA.id,
            }),
            e5 = (0, N.DY)({
                streamKey: $.type === en.lp.STREAM ? $.id : null,
                channelId: eA.id,
            }),
            e8 = l.useMemo(
                () => ($.type === en.lp.STREAM ? null != e5 && e5 : $.type === en.lp.USER && null != e3 && e3),
                [e5, e3, $.type],
            );
        l.useEffect(() => {
            eM(eE);
        }, [eE]);
        let e4 = l.useCallback(() => {
                null != eF && p.A.toggleLocalMute(eF, el.x.STREAM);
            }, [eF]),
            te = l.useCallback(
                (e) => {
                    null == ed || ed($, e);
                },
                [ed, $],
            ),
            tt = l.useCallback(
                (e) => {
                    null == ec || ec($, e);
                },
                [ec, $],
            ),
            tn = l.useCallback(
                (e, t, n) => {
                    null == eu || eu($, e, t, n);
                },
                [eu, $],
            ),
            tr = null,
            tl = null,
            ti = "";
        switch ($.type) {
            case en.lp.STREAM:
                (tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: ej,
                    popoutType: eo,
                    width: ey,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eN,
                    focused: eE,
                    idle: eR,
                    controlsBottom: ew,
                })),
                    (tl = (0, r.jsx)(Q.D, {
                        participant: $,
                        selected: ej,
                        width: ey,
                        focused: eE,
                        idle: eR,
                        premiumIndicator: !1,
                    })),
                    (ti = ei.intl.formatToPlainString(ei.t.gHPz3Q, {
                        streamerName: $.user.username,
                    }));
                break;
            case en.lp.USER:
                (tr = (0, r.jsx)(Z.A, {
                    channel: eA,
                    inCall: eO,
                    participant: $,
                    popoutType: eo,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eN,
                    selected: ej,
                    width: ey,
                    blocked: eC,
                    ignored: eS,
                    noVideoRender: ex || ez,
                    pulseSpeakingIndicator: eT,
                })),
                    (tl = (0, r.jsx)(Z.s, {
                        participant: $,
                        channelId: eA.id,
                    })),
                    (ti = ei.intl.formatToPlainString(ei.t["iC/x/Q"], {
                        username: $.user.username,
                    }));
                break;
            case en.lp.ACTIVITY:
                (tr = (0, r.jsx)(X.Ay, {
                    interactible: eE,
                    participant: $,
                    selected: ej,
                    channel: eA,
                    width: ey,
                })),
                    (ti = ei.intl.formatToPlainString(ei.t.YCvOsO, {
                        activityName: null == eH ? void 0 : eH.name,
                    }));
                break;
            case en.lp.HIDDEN_STREAM:
                tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: ej,
                    width: ey,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eN,
                    popoutType: eo,
                    focused: eE,
                    idle: eR,
                });
        }
        let ts = l.useRef(null),
            ta = (0, o.bG)([B.A], () => ($.type === en.lp.USER ? B.A.getVoiceVolume($.id) : -1 / 0)),
            to = (0, b.v)({
                isSpeaking: eY,
                voiceDb: ta,
                spreadDirection: b.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            tc = $.type === en.lp.STREAM ? d.kN9 : d.npA;
        return (0, r.jsx)(h.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: s()(
                    es.iE,
                    {
                        [es.DF]: eX,
                    },
                    eg,
                ),
                style: eb,
                onMouseEnter: () => {
                    eG(!0);
                },
                onMouseLeave: () => {
                    eG(!1);
                },
                children: (0, r.jsxs)(C.A, {
                    shakeLocation: er.uD.VOICE_USER,
                    isShaking: eY,
                    className: es.Vs,
                    children: [
                        (0, r.jsx)(J.A, {
                            ref: ts,
                            className: s()(es.Vs, {
                                [es.E7]: ev,
                                [es.k_]: null == ed,
                                [es.N7]: eR,
                            }),
                            noBorder: ev,
                            style: em,
                            participantUserId: eF,
                            children: (0, r.jsxs)(d.sqX, {
                                "aria-label": ti,
                                className: es.lG,
                                onDoubleClick: tt,
                                onContextMenu: (e) => tn(e, $.type === en.lp.STREAM),
                                onClick: te,
                                onMouseDown: eh,
                                onKeyDown: ef,
                                focusProps: {
                                    offset: 1,
                                },
                                children: [
                                    null != e0 && null != eF
                                        ? (0, r.jsx)(D.A, {
                                              voiceChannelEffect: e0,
                                              onComplete: () => (0, R.a)(eF),
                                              userId: eF,
                                          })
                                        : null,
                                    $.type === en.lp.USER
                                        ? (0, r.jsx)("div", {
                                              className: es.nl,
                                              children: (0, r.jsx)(y.A, {
                                                  userId: eF,
                                                  channelId: eA.id,
                                                  guildId: eA.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (n =
                                                              null == ts || null == (a = ts.current)
                                                                  ? void 0
                                                                  : a.clientWidth)
                                                              ? n
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (i =
                                                              null == ts || null == (c = ts.current)
                                                                  ? void 0
                                                                  : c.clientHeight)
                                                              ? i
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    tr,
                                    ev
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: es.hD,
                                              children: tl,
                                          }),
                                    ej
                                        ? (0, r.jsx)("div", {
                                              className: es._Q,
                                              children: (0, r.jsx)(tc, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: es.Dt,
                                              }),
                                          })
                                        : null,
                                    ea.includes($.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ep,
                                              ((u = (function (e) {
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
                                                      focused: eE,
                                                      width: ey,
                                                      inCall: eO,
                                                      participantId: $.id,
                                                      participantType: $.type,
                                                      hasVideo: null != eJ && eJ,
                                                  },
                                                  eZ,
                                              )),
                                              (A = A =
                                                  {
                                                      idle: eR,
                                                      platform: e1,
                                                      title: (0, Y.A)(eA, $),
                                                      blocked: eC,
                                                      ignored: eS,
                                                      localVideoDisabled: eK,
                                                      videoToggleState: eW,
                                                      hideAudioIcon: e$,
                                                      onContextMenu: tn,
                                                      onToggleMute: e4,
                                                      participantUserId: eF,
                                                      channel: eA,
                                                      application: e6,
                                                      secureFramesVerified: e8,
                                                      isHovered: eU,
                                                      popoutType: eo,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(A))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(A)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            u,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(A, e),
                                                        );
                                                    }),
                                              u),
                                          ),
                                    eO && !ev
                                        ? (0, r.jsx)("div", {
                                              className: s()(es.PQ, {
                                                  [es.pU]: !eE && (eQ || null != e0),
                                                  [es.JB]: eq && !eY && !eE && !eQ,
                                              }),
                                              style: eE || eQ ? void 0 : to,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eL &&
                            ek &&
                            eU &&
                            (0, r.jsx)(q.A, {
                                currentUserId: eB,
                                participant: $,
                            }),
                        (0, r.jsx)(E.A, {
                            isFiring: eD,
                            callTileRef: ts.current,
                        }),
                    ],
                }),
            }),
        });
    });

function ec(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === en.lp.STREAM)
        return n === en.J7.XBOX
            ? (0, r.jsx)(K.A, {
                  className: l,
              })
            : (0, r.jsx)(d.kN9, {
                  size: "md",
                  color: "currentColor",
                  className: l,
              });
    switch (n) {
        case en.J7.MOBILE:
            return (0, r.jsx)(d.u6o, {
                size: "xs",
                color: "currentColor",
                className: l,
            });
        case en.J7.XBOX:
            return (0, r.jsx)(K.A, {
                className: l,
            });
        case en.J7.PLAYSTATION:
            return (0, r.jsx)(H.A, {
                className: l,
            });
        case en.J7.QUEST:
            return (0, r.jsx)(a.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: l,
            });
        default:
            return null;
    }
}

function eu(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, onClick: i } = e;
    return (0, r.jsx)(u.m, {
        text: n,
        children: (0, r.jsx)("div", {
            className: s()(es.V7, {
                [es.kl]: l,
            }),
            children: (0, r.jsx)(d.K0, {
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

function ed(e) {
    let { channelId: t, participantId: n, hideWhenInactive: i } = e,
        s = l.useMemo(() => (0, _.A)(t, n), [t, n]),
        a = (0, o.bG)([S.A], () => S.A.getIsAlwaysOnTop(s)),
        c = l.useCallback(() => {
            I.setAlwaysOnTop(s, !a);
        }, [s, a]);
    return W.isPlatformEmbedded && z.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS)
        ? (0, r.jsx)(eu, {
              onClick: c,
              tooltipText: a ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
              icon: a ? d.hl9 : d.qgw,
              hideWhenInactive: i,
          })
        : null;
}
eo.displayName = "CallTile";
let ep = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: i,
            focused: a,
            videoToggleState: p,
            blocked: h,
            ignored: f,
            participantId: g,
            participantType: b,
            participantUserId: y,
            channel: _,
            platform: v,
            secureFramesVerified: x,
            onContextMenu: E,
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
        M = (0, o.bG)([U.A], () => null != y && U.A.isLocalVideoAutoDisabled(y, (0, m.A)(b)), [y, b]),
        L = (0, O.A)({
            userId: y,
            guildId: _.getGuildId(),
        }),
        k = (0, j.a)({
            displayNameStyles: L,
        }),
        G = (0, $.Y)(i),
        B = (0, $.V)(i),
        [V, H] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== F.A.isOpen() && ((e = F.A.isOpen()) || H(!1));
            };
        return F.A.addChangeListener(t), () => F.A.removeChangeListener(t);
    }, []);
    let K = !w && b === en.lp.STREAM && P && (!B || I),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: l, muted: i } = e;
            return r ? d.TJE : n ? d.O1p : l ? d.cQT : t ? d.O1p : i ? d.z0P : null;
        })({
            localMuted: I,
            serverMuted: N,
            serverDeafened: T,
            deafened: S,
            muted: C,
        }),
        z = [];
    return (
        a
            ? D === A.N.CALL_TILE &&
              z.push(
                  (0, r.jsx)(
                      ed,
                      {
                          channelId: _.id,
                          participantId: g,
                          hideWhenInactive: !V,
                      },
                      "stay-on-top",
                  ),
              )
            : (z.push(
                  (0, r.jsx)(
                      eu,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), H(!0), E(e, !0, en.GK.THREE_DOT);
                          },
                          tooltipText: ei.intl.string(ei.t["+1H47t"]),
                          icon: d.jNK,
                          hideWhenInactive: !V,
                      },
                      "options",
                  ),
              ),
              K &&
                  z.push(
                      (0, r.jsx)(
                          eu,
                          {
                              onClick: R,
                              tooltipText: I ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
                              icon: I ? d._RO : d.HKD,
                              hideWhenInactive: !I && !V,
                          },
                          "mute",
                      ),
                  )),
        (0, r.jsxs)("div", {
            className: s()(es.MU, {
                [es.oE]: B,
                [es.Ol]: a,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(es.Ik, {
                        [es.EX]: i < 195,
                    }),
                    children:
                        M || p === et.bb8.AUTO_PROBING
                            ? t
                                ? (0, r.jsx)("div", {
                                      className: es.h5,
                                      children: (0, r.jsx)(d.OCo, {
                                          size: "md",
                                          color: "currentColor",
                                      }),
                                  })
                                : (0, r.jsxs)("div", {
                                      className: s()(es.ns, es.WP),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: es.h5,
                                              children: (0, r.jsx)(d.OCo, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              variant: "text-sm/normal",
                                              className: es.Wk,
                                              children: ei.intl.string(ei.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !G &&
                    (0, r.jsxs)("div", {
                        className: s()(es.Qp, {
                            [es.EX]: i < 195,
                        }),
                        children: [
                            (0, r.jsxs)(d.Text, {
                                className: es.ac,
                                color: "none",
                                variant: B ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != W &&
                                        b === en.lp.USER &&
                                        (0, r.jsx)(W, {
                                            className: s()(es.fh, {
                                                [es.oE]: B,
                                            }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    h
                                        ? (0, r.jsx)("div", {
                                              className: es.Z5,
                                              children: (0, r.jsx)(d.KTN, {
                                                  size: "lg",
                                                  className: es.Q6,
                                                  color: c.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    f
                                        ? (0, r.jsx)("div", {
                                              className: es.PP,
                                              children: (0, r.jsx)(d.G3N, {
                                                  size: "lg",
                                                  className: es.Q6,
                                              }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, r.jsx)(ec, {
                                              participantType: b,
                                              platform: v,
                                              className: s()(es.fh, {
                                                  [es.oE]: B,
                                              }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, r.jsx)("span", {
                                              className: s()(es.Wk, k),
                                              children: n,
                                          }),
                                    x &&
                                        (0, r.jsx)(u.m, {
                                            text: ei.intl.string(ei.t.ZEem6O),
                                            children: (0, r.jsx)(d.m5V, {
                                                className: es.vW,
                                                size: "xs",
                                                color: c.A.colors.TEXT_STRONG,
                                                "aria-label": ei.intl.string(ei.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            z.length > 0
                                ? (0, r.jsx)("div", {
                                      className: es._v,
                                      children: z,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ep.displayName = "CallTileOverlay";
let eh = x.$,
    ef = eo;
