n.d(t, {
    BP: () => eu,
    ZP: () => ed,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(846027),
    f = n(410575),
    h = n(812206),
    p = n(835473),
    g = n(414910),
    m = n(598006),
    b = n(415635),
    _ = n(7291),
    y = n(386725),
    O = n(7284),
    v = n(649739),
    j = n(352978),
    x = n(936847),
    C = n(512384),
    E = n(522474),
    S = n(788983),
    I = n(210975),
    P = n(763296),
    N = n(695346),
    Z = n(937995),
    w = n(456631),
    T = n(274459),
    A = n(314897),
    R = n(857192),
    D = n(77498),
    L = n(131951),
    M = n(158776),
    k = n(979651),
    G = n(574254),
    U = n(374129),
    B = n(639351),
    F = n(358085),
    V = n(998502),
    H = n(584729),
    W = n(334374),
    z = n(849171),
    K = n(607187),
    Y = n(833519),
    q = n(462061),
    Q = n(623825),
    X = n(839662),
    J = n(981631),
    $ = n(354459),
    ee = n(524484),
    et = n(65154),
    en = n(388032),
    er = n(7504);
let ei = [$.fO.ACTIVITY],
    el = i.memo((e) => {
        var t, n, l, s, c, m, _;
        let {
                participant: y,
                popoutType: O,
                onDoubleClick: E,
                onContextMenu: S,
                onClick: G,
                onMouseDown: U,
                onKeyDown: B,
                className: F,
                style: V,
                containerStyle: Q,
                channel: el,
                width: eo,
                onVideoResize: ea,
                inCall: es = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ef = !1,
                focused: eh = !1,
                blocked: ep = !1,
                ignored: eg = !1,
                fit: em = j.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: ey = !1,
                controlsBottom: eO,
            } = e,
            ev = i.useContext(Z.h9) || ey,
            [ej, ex] = i.useState(!1),
            eC = N.Sb.useSetting(),
            eE = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eS, eI] = i.useState(!1),
            eP = (0, a.e7)([A.default], () => A.default.getId()),
            eN = y.type === $.fO.ACTIVITY ? null : y.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [ew] = (0, p.Z)(y.type === $.fO.ACTIVITY ? [y.applicationId] : []),
            eT = (0, a.e7)([L.Z], () => null != eZ && L.Z.isLocalVideoDisabled(eZ, (0, g.Z)(y.type)), [eZ, y.type]),
            eA = (0, a.e7)([L.Z], () => (null != eZ ? L.Z.getVideoToggleState(eZ, (0, g.Z)(y.type)) : J.ZUi.NONE), [
                eZ,
                y.type,
            ]),
            eR = eA === J.ZUi.AUTO_PROBING,
            { speaking: eD, latched: eL, ringing: eM, hasVideo: ek } = (0, X.Z)(y, eP),
            eG = (0, a.e7)([P.Z], () => null !== eZ && P.Z.isUserPlayingSounds(eZ), [eZ]),
            eU = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([k.Z], () => {
                        var e, t, r;
                        let i = k.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([L.Z], () => {
                        let n = (0, g.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: L.Z.isLocalMute(s, n),
                                  localVideoDisabled: L.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === $.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === $.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eP, y, el.getGuildId()),
            eB = y.type === $.fO.STREAM && eZ === eP,
            eF = (0, a.e7)([w.Z], () => (y.type === $.fO.USER && null != eZ ? w.Z.getEffectForUserId(eZ) : null)),
            eV = (0, a.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(el.id, null != eZ ? eZ : J.lds)),
            { showGameIcon: eH } = v.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eW = (0, a.e7)(
                [M.Z],
                () =>
                    eH && null != eZ
                        ? M.Z.findActivity(eZ, (e) => null != e.application_id && e.type === J.IIU.PLAYING)
                        : null,
                [eH, eZ],
            ),
            ez = (0, a.e7)([D.Z], () =>
                (null == eW ? void 0 : eW.application_id) != null ? D.Z.getDetectableGame(eW.application_id) : null,
            ),
            eK = (0, a.e7)([h.Z], () =>
                null != ez && (null == eW ? void 0 : eW.application_id) != null
                    ? h.Z.getApplication(null == eW ? void 0 : eW.application_id)
                    : void 0,
            ),
            eY = (0, I.wV)({
                userId: eZ,
                channelId: el.id,
            }),
            eq = (0, I.zU)({
                streamKey: y.type === $.fO.STREAM ? y.id : null,
                channelId: el.id,
            }),
            eQ = i.useMemo(
                () => (y.type === $.fO.STREAM ? null != eq && eq : y.type === $.fO.USER && null != eY && eY),
                [eq, eY, y.type],
            );
        i.useEffect(() => {
            ex(eh);
        }, [eh]);
        let eX = i.useCallback(() => {
                null != eZ && d.Z.toggleLocalMute(eZ, et.Yn.STREAM);
            }, [eZ]),
            eJ = i.useCallback(
                (e) => {
                    null == G || G(y, e);
                },
                [G, y],
            ),
            e$ = i.useCallback(
                (e) => {
                    null == E || E(y, e);
                },
                [E, y],
            ),
            e0 = i.useCallback(
                (e, t, n) => {
                    null == S || S(y, e, t, n);
                },
                [S, y],
            ),
            e1 = null,
            e4 = null,
            e3 = "";
        switch (y.type) {
            case $.fO.STREAM:
                (e1 = (0, r.jsx)(Y.Z, {
                    participant: y,
                    selected: eu,
                    popoutType: O,
                    width: eo,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    focused: eh,
                    idle: ev,
                    controlsBottom: eO,
                })),
                    (e4 = (0, r.jsx)(Y._, {
                        participant: y,
                        selected: eu,
                        width: eo,
                        focused: eh,
                        idle: ev,
                        premiumIndicator: !1,
                    })),
                    (e3 = en.intl.formatToPlainString(en.t.gHPz3Q, { streamerName: y.user.username }));
                break;
            case $.fO.USER:
                (e1 = (0, r.jsx)(q.Z, {
                    channel: el,
                    inCall: es,
                    participant: y,
                    popoutType: O,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    selected: eu,
                    width: eo,
                    blocked: ep,
                    ignored: eg,
                    noVideoRender: ef || eR,
                    pulseSpeakingIndicator: e_,
                })),
                    (e4 = (0, r.jsx)(q.T, {
                        participant: y,
                        channelId: el.id,
                    })),
                    (e3 = en.intl.formatToPlainString(en.t["iC/x/Q"], { username: y.user.username }));
                break;
            case $.fO.ACTIVITY:
                (e1 = (0, r.jsx)(z.ZP, {
                    interactible: eh,
                    participant: y,
                    selected: eu,
                    channel: el,
                    width: eo,
                })),
                    (e3 = en.intl.formatToPlainString(en.t.YCvOsO, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case $.fO.HIDDEN_STREAM:
                e1 = (0, r.jsx)(Y.Z, {
                    participant: y,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    popoutType: O,
                    focused: eh,
                    idle: ev,
                });
        }
        let e8 = i.useRef(null),
            e6 = y.type === $.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: J.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(er.wrapper, { [er.ringing]: eM }, F),
                style: Q,
                onMouseEnter: () => {
                    eI(!0);
                },
                onMouseLeave: () => {
                    eI(!1);
                },
                children: (0, r.jsxs)(C.Z, {
                    shakeLocation: ee.oZ.VOICE_USER,
                    isShaking: eD,
                    className: er.tile,
                    children: [
                        (0, r.jsx)(K.Z, {
                            ref: e8,
                            className: o()(er.tile, {
                                [er.noBorder]: ed,
                                [er.noInteraction]: null == G,
                                [er.idle]: ev,
                            }),
                            noBorder: ed,
                            style: V,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e3,
                                className: er.tileChild,
                                onDoubleClick: e$,
                                onContextMenu: (e) => e0(e, y.type === $.fO.STREAM),
                                onClick: eJ,
                                onMouseDown: U,
                                onKeyDown: B,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eF && null != eZ
                                        ? (0, r.jsx)(T.Z, {
                                              voiceChannelEffect: eF,
                                              onComplete: () => (0, w.H)(eZ),
                                              userId: eZ,
                                          })
                                        : null,
                                    y.type === $.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: er.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(b.Z, {
                                                  userId: eZ,
                                                  channelId: el.id,
                                                  guildId: el.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (s =
                                                              null == e8 || null == (t = e8.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? s
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e8 || null == (n = e8.current)
                                                                  ? void 0
                                                                  : n.clientHeight)
                                                              ? c
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e1,
                                    ed
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: er.indicators,
                                              children: e4,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: er.selectedScreen,
                                              children: (0, r.jsx)(e6, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: er.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    ei.includes(y.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ec,
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
                                                      focused: eh,
                                                      width: eo,
                                                      inCall: es,
                                                      participantId: y.id,
                                                      participantType: y.type,
                                                      hasVideo: null != ek && ek,
                                                  },
                                                  eU,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ev,
                                                      platform: eV,
                                                      title: (0, H.Z)(el, y),
                                                      blocked: ep,
                                                      ignored: eg,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: eA,
                                                      hideAudioIcon: eB,
                                                      onContextMenu: e0,
                                                      onToggleMute: eX,
                                                      participantUserId: eZ,
                                                      channel: el,
                                                      application: eK,
                                                      secureFramesVerified: eQ,
                                                      isHovered: eS,
                                                      popoutType: O,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(_))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(_)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            m,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(_, e),
                                                        );
                                                    }),
                                              m),
                                          ),
                                    es && !ed
                                        ? (0, r.jsx)("div", {
                                              className: o()(er.border, {
                                                  [er.voiceChannelEffect]: !eh && (eG || null != eF),
                                                  [er.speaking]: eD && !eh && !eG,
                                                  [er.latchedNotSpeaking]: eL && !eD && !eh && !eG,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eC &&
                            eE &&
                            eS &&
                            (0, r.jsx)(W.Z, {
                                currentUserId: eP,
                                participant: y,
                            }),
                        (0, r.jsx)(x.Z, {
                            isFiring: ej,
                            callTileRef: e8.current,
                        }),
                    ],
                }),
            }),
        });
    });
function eo(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === $.fO.STREAM)
        return n === $.wR.XBOX
            ? (0, r.jsx)(B.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case $.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case $.wR.XBOX:
            return (0, r.jsx)(B.Z, { className: i });
        case $.wR.PLAYSTATION:
            return (0, r.jsx)(U.Z, { className: i });
        default:
            return null;
    }
}
function ea(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(er.overlayButton, { [er.hideWhenInactive]: i }),
            children: (0, r.jsx)(u.hU, {
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
function es(e) {
    let { channelId: t, participantId: n, isContextMenuOpen: l } = e,
        o = i.useMemo(() => (0, _.Z)(t, n), [t, n]),
        s = (0, a.e7)([E.Z], () => E.Z.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            S.setAlwaysOnTop(o, !s);
        }, [o, s]);
    return F.isPlatformEmbedded && V.ZP.supportsFeature(J.eRX.POPOUT_WINDOWS)
        ? (0, r.jsx)(ea, {
              onClick: c,
              tooltipText: s ? en.intl.string(en.t.YdyDM9) : en.intl.string(en.t.ZVGHwP),
              icon: s ? u.QVc : u.k5M,
              hideWhenInactive: !l,
          })
        : null;
}
el.displayName = "CallTile";
let ec = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: f,
            blocked: h,
            ignored: p,
            participantId: b,
            participantType: _,
            participantUserId: v,
            channel: j,
            platform: x,
            secureFramesVerified: C,
            onContextMenu: E,
            muted: S,
            deafened: I,
            localMuted: P,
            serverMuted: N,
            serverDeafened: Z,
            hasVideo: w,
            hideAudioIcon: T,
            onToggleMute: A,
            popoutType: R,
        } = e,
        D = (0, a.e7)([L.Z], () => null != v && L.Z.isLocalVideoAutoDisabled(v, (0, g.Z)(_)), [v, _]),
        M = (0, y.Z)({
            userId: v,
            guildId: j.getGuildId(),
        }),
        k = (0, O.j)({ displayNameStyles: M }),
        U = (0, Q.N)(l),
        B = (0, Q.K)(l),
        [F, V] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== G.Z.isOpen() && ((e = G.Z.isOpen()) || V(!1));
            };
        return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t);
    }, []);
    let H = !T && _ === $.fO.STREAM && w && (!B || P),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: P,
            serverMuted: N,
            serverDeafened: Z,
            deafened: I,
            muted: S,
        });
    return (0, r.jsxs)("div", {
        className: o()(er.overlayContainer, {
            [er.compact]: B,
            [er.noPointerEvents]: d,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(er.overlayTop, { [er.small]: l < 195 }),
                children:
                    D || f === J.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: er.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(er.overlayTitle, er.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: er.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: er.overlayTitleText,
                                          children: en.intl.string(en.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !U &&
                (0, r.jsxs)("div", {
                    className: o()(er.overlayBottom, { [er.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: er.experimentOverlayTitle,
                            color: "none",
                            variant: B ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != W &&
                                    _ === $.fO.USER &&
                                    (0, r.jsx)(W, {
                                        className: o()(er.experimentTitleIcon, { [er.compact]: B }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: er.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: er.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)("div", {
                                          className: er.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: er.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(eo, {
                                          participantType: _,
                                          platform: x,
                                          className: o()(er.experimentTitleIcon, { [er.compact]: B }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(er.overlayTitleText, k),
                                          children: n,
                                      }),
                                C &&
                                    (0, r.jsx)(c.u, {
                                        text: en.intl.string(en.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: er.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": en.intl.string(en.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        d
                            ? R === m.P.CALL_TILE
                                ? (0, r.jsx)(es, {
                                      channelId: j.id,
                                      participantId: b,
                                      isContextMenuOpen: F,
                                  })
                                : null
                            : (0, r.jsxs)("div", {
                                  className: er.overlayButtonContainer,
                                  children: [
                                      (0, r.jsx)(ea, {
                                          onClick: (e) => {
                                              e.stopPropagation(), V(!0), E(e, !0, $.A5.THREE_DOT);
                                          },
                                          tooltipText: en.intl.string(en.t["+1H47t"]),
                                          icon: u.xhG,
                                          hideWhenInactive: !F,
                                      }),
                                      H &&
                                          (0, r.jsx)(ea, {
                                              onClick: A,
                                              tooltipText: P
                                                  ? en.intl.string(en.t.YqAjXy)
                                                  : en.intl.string(en.t.w4m945),
                                              icon: P ? u.OyP : u.gj8,
                                              hideWhenInactive: !P && !F,
                                          }),
                                  ],
                              }),
                    ],
                }),
        ],
    });
});
ec.displayName = "CallTileOverlay";
let eu = j.L,
    ed = el;
