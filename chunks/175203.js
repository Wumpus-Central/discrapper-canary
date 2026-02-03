n.d(t, {
    Ay: () => eg,
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
    g = n(587895),
    f = n(429913),
    m = n(520698),
    b = n(659974),
    A = n(164617),
    y = n(66004),
    O = n(958005),
    j = n(609425),
    x = n(73392),
    _ = n(529020),
    v = n(401901),
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
    L = n(961350),
    M = n(760751),
    G = n(111162),
    k = n(430452),
    U = n(290863),
    V = n(485296),
    B = n(977997),
    H = n(712687),
    F = n(790381),
    Y = n(266080),
    K = n(723702),
    W = n(837921),
    z = n(141035),
    X = n(654820),
    q = n(804980),
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
        var t, n, i, a, c, u, A, O, j, x, S, I, H, F;
        let Y,
            K,
            W,
            {
                participant: $,
                popoutType: eo,
                onDoubleClick: ec,
                onContextMenu: eu,
                onClick: ed,
                onMouseDown: eh,
                onKeyDown: eg,
                className: ef,
                style: em,
                containerStyle: eb,
                channel: eA,
                width: ey,
                onVideoResize: eO,
                inCall: ej = !1,
                selected: ex = !1,
                noBorder: e_ = !1,
                noVideoRender: ev = !1,
                focused: eE = !1,
                blocked: eC = !1,
                ignored: eS = !1,
                fit: eI = v.$.CONTAIN,
                paused: eN = !1,
                pulseSpeakingIndicator: eT = !1,
                forceIdle: eP = !1,
                controlsBottom: ew,
            } = e,
            eR = l.useContext(w.vG) || eP,
            [eD, eL] = l.useState(!1),
            eM = P.Q_.useSetting(),
            eG = (0, o.bG)([G.default], () => G.default.isStreamInfoOverlayEnabled),
            [ek, eU] = l.useState(!1),
            eV = (0, o.bG)([L.default], () => L.default.getId()),
            eB = $.type === en.lp.ACTIVITY ? null : $.user,
            eH = null != (t = null == eB ? void 0 : eB.id) ? t : null,
            [eF] = (0, f.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
            eY = (0, o.bG)([k.A], () => null != eH && k.A.isLocalVideoDisabled(eH, (0, m.A)($.type)), [eH, $.type]),
            eK = (0, o.bG)([k.A], () => (null != eH ? k.A.getVideoToggleState(eH, (0, m.A)($.type)) : et.bb8.NONE), [
                eH,
                $.type,
            ]),
            eW = eK === et.bb8.AUTO_PROBING,
            { speaking: ez, latched: eX, ringing: eq, hasVideo: eJ } = (0, ee.A)($, eV),
            eQ = (0, o.bG)([T.A], () => null !== eH && T.A.isUserPlayingSounds(eH), [eH]),
            eZ =
                ((O = eV),
                (j = $),
                (x = eA.getGuildId()),
                (Y = j.type !== en.lp.ACTIVITY ? j.user.id : j.applicationId),
                (K = (0, o.cf)([B.A], () => {
                    var e, t, n;
                    let r = B.A.getVoiceState(x, Y);
                    return {
                        muted: null != (e = null == r ? void 0 : r.mute) && e,
                        deafened: null != (t = null == r ? void 0 : r.deaf) && t,
                        suppressed: null != (n = null == r ? void 0 : r.suppress) && n,
                        voiceChannelId: null == r ? void 0 : r.channelId,
                    };
                })),
                (W = (0, o.cf)([k.A], () => {
                    let e = (0, m.A)(j.type);
                    return O === Y
                        ? {
                              muted: !1,
                              deafened: !1,
                          }
                        : {
                              muted: k.A.isLocalMute(Y, e),
                              localVideoDisabled: k.A.isLocalVideoDisabled(Y, e),
                              localVideoAutoDisabled: k.A.isLocalVideoAutoDisabled(Y, e),
                          };
                }, [O, j.type, Y])),
                {
                    serverMuted: K.muted,
                    serverDeafened: K.deafened,
                    suppressed: K.suppressed,
                    localMuted: W.muted,
                    muted:
                        null !=
                            (S = j.type === en.lp.USER && (null == (H = j.voiceState) ? void 0 : H.isVoiceMuted())) &&
                        S,
                    deafened:
                        null !=
                            (I =
                                j.type === en.lp.USER && (null == (F = j.voiceState) ? void 0 : F.isVoiceDeafened())) &&
                        I,
                }),
            e$ = $.type === en.lp.STREAM && eH === eV,
            e0 = (0, o.bG)([R.A], () => ($.type === en.lp.USER && null != eH ? R.A.getEffectForUserId(eH) : null)),
            e1 = (0, o.bG)([B.A], () => B.A.getVoicePlatformForChannel(eA.id, null != eH ? eH : et.dJq)),
            { showGameIcon: e9 } = _.Ay.useExperiment(
                {
                    location: "voice_users",
                },
                {
                    autoTrackExposure: !1,
                },
            ),
            e7 = (0, o.bG)(
                [U.A],
                () =>
                    e9 && null != eH
                        ? U.A.findActivity(eH, (e) => null != e.application_id && e.type === et.$pd.PLAYING)
                        : null,
                [e9, eH],
            ),
            e6 = (0, o.bG)([M.A], () =>
                (null == e7 ? void 0 : e7.application_id) != null ? M.A.getDetectableGame(e7.application_id) : null,
            ),
            e2 = (0, o.bG)([g.A], () =>
                null != e6 && (null == e7 ? void 0 : e7.application_id) != null
                    ? g.A.getApplication(null == e7 ? void 0 : e7.application_id)
                    : void 0,
            ),
            e3 = (0, N.UF)({
                userId: eH,
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
            eL(eE);
        }, [eE]);
        let e4 = l.useCallback(() => {
                null != eH && p.A.toggleLocalMute(eH, el.x.STREAM);
            }, [eH]),
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
                    selected: ex,
                    popoutType: eo,
                    width: ey,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    focused: eE,
                    idle: eR,
                    controlsBottom: ew,
                })),
                    (tl = (0, r.jsx)(Q.D, {
                        participant: $,
                        selected: ex,
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
                    inCall: ej,
                    participant: $,
                    popoutType: eo,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    selected: ex,
                    width: ey,
                    blocked: eC,
                    ignored: eS,
                    noVideoRender: ev || eW,
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
                (tr = (0, r.jsx)(q.Ay, {
                    interactible: eE,
                    participant: $,
                    selected: ex,
                    channel: eA,
                    width: ey,
                })),
                    (ti = ei.intl.formatToPlainString(ei.t.YCvOsO, {
                        activityName: null == eF ? void 0 : eF.name,
                    }));
                break;
            case en.lp.HIDDEN_STREAM:
                tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: ex,
                    width: ey,
                    fit: eI,
                    onVideoResize: eO,
                    paused: eN,
                    popoutType: eo,
                    focused: eE,
                    idle: eR,
                });
        }
        let ts = l.useRef(null),
            ta = (0, o.bG)([V.A], () => ($.type === en.lp.USER ? V.A.getVoiceVolume($.id) : -1 / 0)),
            to = (0, b.v)({
                isSpeaking: ez,
                voiceDb: ta,
                spreadDirection: b.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            tc = (0, en.Ay)($) ? d.kN9 : eJ ? d.npA : d.EsG;
        return (0, r.jsx)(h.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: s()(
                    es.iE,
                    {
                        [es.DF]: eq,
                    },
                    ef,
                ),
                style: eb,
                onMouseEnter: () => {
                    eU(!0);
                },
                onMouseLeave: () => {
                    eU(!1);
                },
                children: (0, r.jsxs)(C.A, {
                    shakeLocation: er.uD.VOICE_USER,
                    isShaking: ez,
                    className: es.Vs,
                    children: [
                        (0, r.jsx)(J.A, {
                            ref: ts,
                            className: s()(es.Vs, {
                                [es.E7]: e_,
                                [es.k_]: null == ed,
                                [es.N7]: eR,
                            }),
                            noBorder: e_,
                            style: em,
                            participantUserId: eH,
                            children: (0, r.jsxs)(d.sqX, {
                                "aria-label": ti,
                                className: es.lG,
                                onDoubleClick: tt,
                                onContextMenu: (e) => tn(e, $.type === en.lp.STREAM),
                                onClick: te,
                                onMouseDown: eh,
                                onKeyDown: eg,
                                focusProps: {
                                    offset: 1,
                                },
                                children: [
                                    null != e0 && null != eH
                                        ? (0, r.jsx)(D.A, {
                                              voiceChannelEffect: e0,
                                              onComplete: () => (0, R.a)(eH),
                                              userId: eH,
                                          })
                                        : null,
                                    $.type === en.lp.USER
                                        ? (0, r.jsx)("div", {
                                              className: es.nl,
                                              children: (0, r.jsx)(y.A, {
                                                  userId: eH,
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
                                    e_
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: es.hD,
                                              children: tl,
                                          }),
                                    ex
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
                                                      inCall: ej,
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
                                                      title: (0, z.A)(eA, $),
                                                      blocked: eC,
                                                      ignored: eS,
                                                      localVideoDisabled: eY,
                                                      videoToggleState: eK,
                                                      hideAudioIcon: e$,
                                                      onContextMenu: tn,
                                                      onToggleMute: e4,
                                                      participantUserId: eH,
                                                      channel: eA,
                                                      application: e2,
                                                      secureFramesVerified: e8,
                                                      isHovered: ek,
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
                                    ej && !e_
                                        ? (0, r.jsx)("div", {
                                              className: s()(es.PQ, {
                                                  [es.pU]: !eE && (eQ || null != e0),
                                                  [es.JB]: eX && !ez && !eE && !eQ,
                                              }),
                                              style: eE || eQ ? void 0 : to,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eM &&
                            eG &&
                            ek &&
                            (0, r.jsx)(X.A, {
                                currentUserId: eV,
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
            ? (0, r.jsx)(Y.A, {
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
            return (0, r.jsx)(Y.A, {
                className: l,
            });
        case en.J7.PLAYSTATION:
            return (0, r.jsx)(F.A, {
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
        s = l.useMemo(() => (0, O.A)(t, n), [t, n]),
        a = (0, o.bG)([S.A], () => S.A.getIsAlwaysOnTop(s)),
        c = l.useCallback(() => {
            I.setAlwaysOnTop(s, !a);
        }, [s, a]);
    return K.isPlatformEmbedded && W.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS)
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
            ignored: g,
            participantId: f,
            participantType: b,
            participantUserId: y,
            channel: O,
            platform: _,
            secureFramesVerified: v,
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
        L = (0, o.bG)([k.A], () => null != y && k.A.isLocalVideoAutoDisabled(y, (0, m.A)(b)), [y, b]),
        M = (0, j.A)({
            userId: y,
            guildId: O.getGuildId(),
        }),
        G = (0, x.a)({
            displayNameStyles: M,
        }),
        U = (0, $.Y)(i),
        V = (0, $.V)(i),
        [B, F] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== H.A.isOpen() && ((e = H.A.isOpen()) || F(!1));
            };
        return H.A.addChangeListener(t), () => H.A.removeChangeListener(t);
    }, []);
    let Y = !w && b === en.lp.STREAM && P && (!V || I),
        K = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: l, muted: i } = e;
            return r ? d.TJE : n ? d.O1p : l ? d.cQT : t ? d.O1p : i ? d.z0P : null;
        })({
            localMuted: I,
            serverMuted: N,
            serverDeafened: T,
            deafened: S,
            muted: C,
        }),
        W = [];
    return (
        a
            ? D === A.N.CALL_TILE &&
              W.push(
                  (0, r.jsx)(
                      ed,
                      {
                          channelId: O.id,
                          participantId: f,
                          hideWhenInactive: !B,
                      },
                      "stay-on-top",
                  ),
              )
            : (W.push(
                  (0, r.jsx)(
                      eu,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), F(!0), E(e, !0, en.GK.THREE_DOT);
                          },
                          tooltipText: ei.intl.string(ei.t["+1H47t"]),
                          icon: d.jNK,
                          hideWhenInactive: !B,
                      },
                      "options",
                  ),
              ),
              Y &&
                  W.push(
                      (0, r.jsx)(
                          eu,
                          {
                              onClick: R,
                              tooltipText: I ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
                              icon: I ? d._RO : d.HKD,
                              hideWhenInactive: !I && !B,
                          },
                          "mute",
                      ),
                  )),
        (0, r.jsxs)("div", {
            className: s()(es.MU, {
                [es.oE]: V,
                [es.Ol]: a,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(es.Ik, {
                        [es.EX]: i < 195,
                    }),
                    children:
                        L || p === et.bb8.AUTO_PROBING
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
                !U &&
                    (0, r.jsxs)("div", {
                        className: s()(es.Qp, {
                            [es.EX]: i < 195,
                        }),
                        children: [
                            (0, r.jsxs)(d.Text, {
                                className: es.ac,
                                color: "none",
                                variant: V ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != K &&
                                        b === en.lp.USER &&
                                        (0, r.jsx)(K, {
                                            className: s()(es.fh, {
                                                [es.oE]: V,
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
                                    g
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
                                              platform: _,
                                              className: s()(es.fh, {
                                                  [es.oE]: V,
                                              }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, r.jsx)("span", {
                                              className: s()(es.Wk, G),
                                              children: n,
                                          }),
                                    v &&
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
                            W.length > 0
                                ? (0, r.jsx)("div", {
                                      className: es._v,
                                      children: W,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ep.displayName = "CallTileOverlay";
let eh = v.$,
    eg = eo;
