n.d(t, {
    BP: () => eu,
    ZP: () => ed,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(846027),
    f = n(410575),
    h = n(812206),
    p = n(835473),
    g = n(414910),
    b = n(598006),
    m = n(415635),
    y = n(7291),
    O = n(386725),
    v = n(7284),
    j = n(649739),
    C = n(352978),
    x = n(936847),
    E = n(512384),
    S = n(522474),
    I = n(788983),
    _ = n(210975),
    P = n(763296),
    N = n(695346),
    Z = n(937995),
    w = n(456631),
    T = n(274459),
    A = n(314897),
    R = n(857192),
    D = n(77498),
    M = n(131951),
    L = n(158776),
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
    er = n(858329);
let ei = [$.fO.ACTIVITY],
    el = i.memo((e) => {
        var t, n, l, s, c, b, y;
        let {
                participant: O,
                popoutType: v,
                onDoubleClick: S,
                onContextMenu: I,
                onClick: G,
                onMouseDown: U,
                onKeyDown: B,
                className: F,
                style: V,
                containerStyle: Q,
                channel: el,
                width: ea,
                onVideoResize: eo,
                inCall: es = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ef = !1,
                focused: eh = !1,
                blocked: ep = !1,
                ignored: eg = !1,
                fit: eb = C.L.CONTAIN,
                paused: em = !1,
                pulseSpeakingIndicator: ey = !1,
                forceIdle: eO = !1,
                controlsBottom: ev,
            } = e,
            ej = i.useContext(Z.h9) || eO,
            [eC, ex] = i.useState(!1),
            eE = N.Sb.useSetting(),
            eS = (0, o.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eI, e_] = i.useState(!1),
            eP = (0, o.e7)([A.default], () => A.default.getId()),
            eN = O.type === $.fO.ACTIVITY ? null : O.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [ew] = (0, p.Z)(O.type === $.fO.ACTIVITY ? [O.applicationId] : []),
            eT = (0, o.e7)([M.Z], () => null != eZ && M.Z.isLocalVideoDisabled(eZ, (0, g.Z)(O.type)), [eZ, O.type]),
            eA = (0, o.e7)([M.Z], () => (null != eZ ? M.Z.getVideoToggleState(eZ, (0, g.Z)(O.type)) : J.ZUi.NONE), [
                eZ,
                O.type,
            ]),
            eR = eA === J.ZUi.AUTO_PROBING,
            { speaking: eD, latched: eM, ringing: eL, hasVideo: ek } = (0, X.Z)(O, eP),
            eG = (0, o.e7)([P.Z], () => null !== eZ && P.Z.isUserPlayingSounds(eZ), [eZ]),
            eU = (function (e, t, n) {
                var r, i, l, a;
                let s = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, o.cj)([k.Z], () => {
                        var e, t, r;
                        let i = k.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, o.cj)([M.Z], () => {
                        let n = (0, g.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: M.Z.isLocalMute(s, n),
                                  localVideoDisabled: M.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: M.Z.isLocalVideoAutoDisabled(s, n),
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
                            (a = t.type === $.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        a,
                };
            })(eP, O, el.getGuildId()),
            eB = O.type === $.fO.STREAM && eZ === eP,
            eF = (0, o.e7)([w.Z], () => (O.type === $.fO.USER && null != eZ ? w.Z.getEffectForUserId(eZ) : null)),
            eV = (0, o.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(el.id, null != eZ ? eZ : J.lds)),
            { showGameIcon: eH } = j.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eW = (0, o.e7)(
                [L.Z],
                () =>
                    eH && null != eZ
                        ? L.Z.findActivity(eZ, (e) => null != e.application_id && e.type === J.IIU.PLAYING)
                        : null,
                [eH, eZ],
            ),
            ez = (0, o.e7)([D.Z], () =>
                (null == eW ? void 0 : eW.application_id) != null ? D.Z.getDetectableGame(eW.application_id) : null,
            ),
            eK = (0, o.e7)([h.Z], () =>
                null != ez && (null == eW ? void 0 : eW.application_id) != null
                    ? h.Z.getApplication(null == eW ? void 0 : eW.application_id)
                    : void 0,
            ),
            eY = (0, _.wV)({
                userId: eZ,
                channelId: el.id,
            }),
            eq = (0, _.zU)({
                streamKey: O.type === $.fO.STREAM ? O.id : null,
                channelId: el.id,
            }),
            eQ = i.useMemo(
                () => (O.type === $.fO.STREAM ? null != eq && eq : O.type === $.fO.USER && null != eY && eY),
                [eq, eY, O.type],
            );
        i.useEffect(() => {
            ex(eh);
        }, [eh]);
        let eX = i.useCallback(() => {
                null != eZ && d.Z.toggleLocalMute(eZ, et.Yn.STREAM);
            }, [eZ]),
            eJ = i.useCallback(
                (e) => {
                    null == G || G(O, e);
                },
                [G, O],
            ),
            e$ = i.useCallback(
                (e) => {
                    null == S || S(O, e);
                },
                [S, O],
            ),
            e0 = i.useCallback(
                (e, t, n) => {
                    null == I || I(O, e, t, n);
                },
                [I, O],
            ),
            e1 = null,
            e4 = null,
            e3 = "";
        switch (O.type) {
            case $.fO.STREAM:
                (e1 = (0, r.jsx)(Y.Z, {
                    participant: O,
                    selected: eu,
                    popoutType: v,
                    width: ea,
                    fit: eb,
                    onVideoResize: eo,
                    paused: em,
                    focused: eh,
                    idle: ej,
                    controlsBottom: ev,
                })),
                    (e4 = (0, r.jsx)(Y._, {
                        participant: O,
                        selected: eu,
                        width: ea,
                        focused: eh,
                        idle: ej,
                        premiumIndicator: !1,
                    })),
                    (e3 = en.intl.formatToPlainString(en.t.gHPz3Q, { streamerName: O.user.username }));
                break;
            case $.fO.USER:
                (e1 = (0, r.jsx)(q.Z, {
                    channel: el,
                    inCall: es,
                    participant: O,
                    popoutType: v,
                    fit: eb,
                    onVideoResize: eo,
                    paused: em,
                    selected: eu,
                    width: ea,
                    blocked: ep,
                    ignored: eg,
                    noVideoRender: ef || eR,
                    pulseSpeakingIndicator: ey,
                })),
                    (e4 = (0, r.jsx)(q.T, {
                        participant: O,
                        channelId: el.id,
                    })),
                    (e3 = en.intl.formatToPlainString(en.t["iC/x/Q"], { username: O.user.username }));
                break;
            case $.fO.ACTIVITY:
                (e1 = (0, r.jsx)(z.ZP, {
                    interactible: eh,
                    participant: O,
                    selected: eu,
                    channel: el,
                    width: ea,
                })),
                    (e3 = en.intl.formatToPlainString(en.t.YCvOsO, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case $.fO.HIDDEN_STREAM:
                e1 = (0, r.jsx)(Y.Z, {
                    participant: O,
                    selected: eu,
                    width: ea,
                    fit: eb,
                    onVideoResize: eo,
                    paused: em,
                    popoutType: v,
                    focused: eh,
                    idle: ej,
                });
        }
        let e6 = i.useRef(null),
            e7 = O.type === $.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: J.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: a()(er.wrapper, { [er.ringing]: eL }, F),
                style: Q,
                onMouseEnter: () => {
                    e_(!0);
                },
                onMouseLeave: () => {
                    e_(!1);
                },
                children: (0, r.jsxs)(E.Z, {
                    shakeLocation: ee.oZ.VOICE_USER,
                    isShaking: eD,
                    className: er.tile,
                    children: [
                        (0, r.jsx)(K.Z, {
                            ref: e6,
                            className: a()(er.tile, {
                                [er.noBorder]: ed,
                                [er.noInteraction]: null == G,
                                [er.idle]: ej,
                            }),
                            noBorder: ed,
                            style: V,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e3,
                                className: er.tileChild,
                                onDoubleClick: e$,
                                onContextMenu: (e) => e0(e, O.type === $.fO.STREAM),
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
                                    O.type === $.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: er.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
                                                  userId: eZ,
                                                  channelId: el.id,
                                                  guildId: el.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (s =
                                                              null == e6 || null == (t = e6.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? s
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e6 || null == (n = e6.current)
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
                                              children: (0, r.jsx)(e7, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: er.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    ei.includes(O.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ec,
                                              ((b = (function (e) {
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
                                                      width: ea,
                                                      inCall: es,
                                                      participantId: O.id,
                                                      participantType: O.type,
                                                      hasVideo: null != ek && ek,
                                                  },
                                                  eU,
                                              )),
                                              (y = y =
                                                  {
                                                      idle: ej,
                                                      platform: eV,
                                                      title: (0, H.Z)(el, O),
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
                                                      isHovered: eI,
                                                      popoutType: v,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(y))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(y)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            b,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(y, e),
                                                        );
                                                    }),
                                              b),
                                          ),
                                    es && !ed
                                        ? (0, r.jsx)("div", {
                                              className: a()(er.border, {
                                                  [er.voiceChannelEffect]: !eh && (eG || null != eF),
                                                  [er.speaking]: eD && !eh && !eG,
                                                  [er.latchedNotSpeaking]: eM && !eD && !eh && !eG,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eE &&
                            eS &&
                            eI &&
                            (0, r.jsx)(W.Z, {
                                currentUserId: eP,
                                participant: O,
                            }),
                        (0, r.jsx)(x.Z, {
                            isFiring: eC,
                            callTileRef: e6.current,
                        }),
                    ],
                }),
            }),
        });
    });
function ea(e) {
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
function eo(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: a()(er.overlayButton, { [er.hideWhenInactive]: i }),
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
    let { channelId: t, participantId: n, hideWhenInactive: l } = e,
        a = i.useMemo(() => (0, y.Z)(t, n), [t, n]),
        s = (0, o.e7)([S.Z], () => S.Z.getIsAlwaysOnTop(a)),
        c = i.useCallback(() => {
            I.setAlwaysOnTop(a, !s);
        }, [a, s]);
    return F.isPlatformEmbedded && V.ZP.supportsFeature(J.eRX.POPOUT_WINDOWS)
        ? (0, r.jsx)(eo, {
              onClick: c,
              tooltipText: s ? en.intl.string(en.t.YdyDM9) : en.intl.string(en.t.ZVGHwP),
              icon: s ? u.QVc : u.k5M,
              hideWhenInactive: l,
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
            participantId: m,
            participantType: y,
            participantUserId: j,
            channel: C,
            platform: x,
            secureFramesVerified: E,
            onContextMenu: S,
            muted: I,
            deafened: _,
            localMuted: P,
            serverMuted: N,
            serverDeafened: Z,
            hasVideo: w,
            hideAudioIcon: T,
            onToggleMute: A,
            popoutType: R,
        } = e,
        D = (0, o.e7)([M.Z], () => null != j && M.Z.isLocalVideoAutoDisabled(j, (0, g.Z)(y)), [j, y]),
        L = (0, O.Z)({
            userId: j,
            guildId: C.getGuildId(),
        }),
        k = (0, v.j)({ displayNameStyles: L }),
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
    let H = !T && y === $.fO.STREAM && w && (!B || P),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: P,
            serverMuted: N,
            serverDeafened: Z,
            deafened: _,
            muted: I,
        }),
        z = [];
    return (
        d
            ? R === b.P.CALL_TILE &&
              z.push(
                  (0, r.jsx)(
                      es,
                      {
                          channelId: C.id,
                          participantId: m,
                          hideWhenInactive: !F,
                      },
                      "stay-on-top",
                  ),
              )
            : (z.push(
                  (0, r.jsx)(
                      eo,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), V(!0), S(e, !0, $.A5.THREE_DOT);
                          },
                          tooltipText: en.intl.string(en.t["+1H47t"]),
                          icon: u.xhG,
                          hideWhenInactive: !F,
                      },
                      "options",
                  ),
              ),
              H &&
                  z.push(
                      (0, r.jsx)(
                          eo,
                          {
                              onClick: A,
                              tooltipText: P ? en.intl.string(en.t.YqAjXy) : en.intl.string(en.t.w4m945),
                              icon: P ? u.OyP : u.gj8,
                              hideWhenInactive: !P && !F,
                          },
                          "mute",
                      ),
                  )),
        (0, r.jsxs)("div", {
            className: a()(er.overlayContainer, {
                [er.compact]: B,
                [er.noPointerEvents]: d,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(er.overlayTop, { [er.small]: l < 195 }),
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
                                      className: a()(er.overlayTitle, er.videoDisabledTitle),
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
                        className: a()(er.overlayBottom, { [er.small]: l < 195 }),
                        children: [
                            (0, r.jsxs)(u.Text, {
                                className: er.experimentOverlayTitle,
                                color: "none",
                                variant: B ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != W &&
                                        y === $.fO.USER &&
                                        (0, r.jsx)(W, {
                                            className: a()(er.experimentTitleIcon, { [er.compact]: B }),
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
                                        : (0, r.jsx)(ea, {
                                              participantType: y,
                                              platform: x,
                                              className: a()(er.experimentTitleIcon, { [er.compact]: B }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, r.jsx)("span", {
                                              className: a()(er.overlayTitleText, k),
                                              children: n,
                                          }),
                                    E &&
                                        (0, r.jsx)(c.u, {
                                            text: en.intl.string(en.t.ZEem6O),
                                            children: (0, r.jsx)(u.tQf, {
                                                className: er.secureFramesIcon,
                                                size: "xs",
                                                color: s.Z.colors.TEXT_STRONG,
                                                "aria-label": en.intl.string(en.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            z.length > 0
                                ? (0, r.jsx)("div", {
                                      className: er.overlayButtonContainer,
                                      children: z,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ec.displayName = "CallTileOverlay";
let eu = C.L,
    ed = el;
