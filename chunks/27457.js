n.d(t, {
    BP: () => ep,
    ZP: () => ef,
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
    p = n(410575),
    f = n(812206),
    h = n(835473),
    g = n(414910),
    m = n(538870),
    b = n(598006),
    y = n(415635),
    v = n(7291),
    O = n(386725),
    j = n(7284),
    x = n(649739),
    C = n(352978),
    E = n(936847),
    S = n(512384),
    _ = n(522474),
    I = n(788983),
    P = n(210975),
    Z = n(763296),
    N = n(695346),
    T = n(937995),
    A = n(456631),
    w = n(274459),
    R = n(314897),
    D = n(404577),
    M = n(857192),
    k = n(131951),
    L = n(158776),
    U = n(606304),
    G = n(979651),
    B = n(574254),
    F = n(374129),
    H = n(639351),
    V = n(358085),
    z = n(998502),
    W = n(584729),
    K = n(334374),
    Y = n(849171),
    q = n(607187),
    X = n(833519),
    Q = n(462061),
    J = n(623825),
    $ = n(839662),
    ee = n(981631),
    et = n(354459),
    en = n(524484),
    er = n(65154),
    ei = n(388032),
    el = n(858329);
let ea = [et.fO.ACTIVITY],
    eo = i.memo((e) => {
        var t, n, l, s, c, b, v;
        let {
                participant: O,
                popoutType: j,
                onDoubleClick: _,
                onContextMenu: I,
                onClick: B,
                onMouseDown: F,
                onKeyDown: H,
                className: V,
                style: z,
                containerStyle: J,
                channel: eo,
                width: es,
                onVideoResize: ec,
                inCall: eu = !1,
                selected: ep = !1,
                noBorder: ef = !1,
                noVideoRender: eh = !1,
                focused: eg = !1,
                blocked: em = !1,
                ignored: eb = !1,
                fit: ey = C.L.CONTAIN,
                paused: ev = !1,
                pulseSpeakingIndicator: eO = !1,
                forceIdle: ej = !1,
                controlsBottom: ex,
            } = e,
            eC = i.useContext(T.h9) || ej,
            [eE, eS] = i.useState(!1),
            e_ = N.Sb.useSetting(),
            eI = (0, o.e7)([M.default], () => M.default.isStreamInfoOverlayEnabled),
            [eP, eZ] = i.useState(!1),
            eN = (0, o.e7)([R.default], () => R.default.getId()),
            eT = O.type === et.fO.ACTIVITY ? null : O.user,
            eA = null != (l = null == eT ? void 0 : eT.id) ? l : null,
            [ew] = (0, h.Z)(O.type === et.fO.ACTIVITY ? [O.applicationId] : []),
            eR = (0, o.e7)([k.Z], () => null != eA && k.Z.isLocalVideoDisabled(eA, (0, g.Z)(O.type)), [eA, O.type]),
            eD = (0, o.e7)([k.Z], () => (null != eA ? k.Z.getVideoToggleState(eA, (0, g.Z)(O.type)) : ee.ZUi.NONE), [
                eA,
                O.type,
            ]),
            eM = eD === ee.ZUi.AUTO_PROBING,
            { speaking: ek, latched: eL, ringing: eU, hasVideo: eG } = (0, $.Z)(O, eN),
            eB = (0, o.e7)([Z.Z], () => null !== eA && Z.Z.isUserPlayingSounds(eA), [eA]),
            eF = (function (e, t, n) {
                var r, i, l, a;
                let s = t.type !== et.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, o.cj)([G.Z], () => {
                        var e, t, r;
                        let i = G.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, o.cj)([k.Z], () => {
                        let n = (0, g.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: k.Z.isLocalMute(s, n),
                                  localVideoDisabled: k.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: k.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === et.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) &&
                        l,
                    deafened:
                        null !=
                            (a =
                                t.type === et.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        a,
                };
            })(eN, O, eo.getGuildId()),
            eH = O.type === et.fO.STREAM && eA === eN,
            eV = (0, o.e7)([A.Z], () => (O.type === et.fO.USER && null != eA ? A.Z.getEffectForUserId(eA) : null)),
            ez = (0, o.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(eo.id, null != eA ? eA : ee.lds)),
            { showGameIcon: eW } = x.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eK = (0, o.e7)(
                [L.Z],
                () =>
                    eW && null != eA
                        ? L.Z.findActivity(eA, (e) => null != e.application_id && e.type === ee.IIU.PLAYING)
                        : null,
                [eW, eA],
            ),
            eY = (0, o.e7)([D.Z], () =>
                (null == eK ? void 0 : eK.application_id) != null ? D.Z.getDetectableGame(eK.application_id) : null,
            ),
            eq = (0, o.e7)([f.Z], () =>
                null != eY && (null == eK ? void 0 : eK.application_id) != null
                    ? f.Z.getApplication(null == eK ? void 0 : eK.application_id)
                    : void 0,
            ),
            eX = (0, P.wV)({
                userId: eA,
                channelId: eo.id,
            }),
            eQ = (0, P.zU)({
                streamKey: O.type === et.fO.STREAM ? O.id : null,
                channelId: eo.id,
            }),
            eJ = i.useMemo(
                () => (O.type === et.fO.STREAM ? null != eQ && eQ : O.type === et.fO.USER && null != eX && eX),
                [eQ, eX, O.type],
            );
        i.useEffect(() => {
            eS(eg);
        }, [eg]);
        let e$ = i.useCallback(() => {
                null != eA && d.Z.toggleLocalMute(eA, er.Yn.STREAM);
            }, [eA]),
            e0 = i.useCallback(
                (e) => {
                    null == B || B(O, e);
                },
                [B, O],
            ),
            e1 = i.useCallback(
                (e) => {
                    null == _ || _(O, e);
                },
                [_, O],
            ),
            e4 = i.useCallback(
                (e, t, n) => {
                    null == I || I(O, e, t, n);
                },
                [I, O],
            ),
            e3 = null,
            e7 = null,
            e8 = "";
        switch (O.type) {
            case et.fO.STREAM:
                (e3 = (0, r.jsx)(X.Z, {
                    participant: O,
                    selected: ep,
                    popoutType: j,
                    width: es,
                    fit: ey,
                    onVideoResize: ec,
                    paused: ev,
                    focused: eg,
                    idle: eC,
                    controlsBottom: ex,
                })),
                    (e7 = (0, r.jsx)(X._, {
                        participant: O,
                        selected: ep,
                        width: es,
                        focused: eg,
                        idle: eC,
                        premiumIndicator: !1,
                    })),
                    (e8 = ei.intl.formatToPlainString(ei.t.gHPz3Q, { streamerName: O.user.username }));
                break;
            case et.fO.USER:
                (e3 = (0, r.jsx)(Q.Z, {
                    channel: eo,
                    inCall: eu,
                    participant: O,
                    popoutType: j,
                    fit: ey,
                    onVideoResize: ec,
                    paused: ev,
                    selected: ep,
                    width: es,
                    blocked: em,
                    ignored: eb,
                    noVideoRender: eh || eM,
                    pulseSpeakingIndicator: eO,
                })),
                    (e7 = (0, r.jsx)(Q.T, {
                        participant: O,
                        channelId: eo.id,
                    })),
                    (e8 = ei.intl.formatToPlainString(ei.t["iC/x/Q"], { username: O.user.username }));
                break;
            case et.fO.ACTIVITY:
                (e3 = (0, r.jsx)(Y.ZP, {
                    interactible: eg,
                    participant: O,
                    selected: ep,
                    channel: eo,
                    width: es,
                })),
                    (e8 = ei.intl.formatToPlainString(ei.t.YCvOsO, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case et.fO.HIDDEN_STREAM:
                e3 = (0, r.jsx)(X.Z, {
                    participant: O,
                    selected: ep,
                    width: es,
                    fit: ey,
                    onVideoResize: ec,
                    paused: ev,
                    popoutType: j,
                    focused: eg,
                    idle: eC,
                });
        }
        let e2 = i.useRef(null),
            e5 = (0, o.e7)([U.Z], () => (O.type === et.fO.USER ? U.Z.getVoiceVolume(O.id) : -1 / 0)),
            e6 = (0, m._)({
                isSpeaking: ek,
                voiceDb: e5,
                spreadDirection: m.h.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            e9 = O.type === et.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(p.Z, {
            section: ee.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: a()(el.wrapper, { [el.ringing]: eU }, V),
                style: J,
                onMouseEnter: () => {
                    eZ(!0);
                },
                onMouseLeave: () => {
                    eZ(!1);
                },
                children: (0, r.jsxs)(S.Z, {
                    shakeLocation: en.oZ.VOICE_USER,
                    isShaking: ek,
                    className: el.tile,
                    children: [
                        (0, r.jsx)(q.Z, {
                            ref: e2,
                            className: a()(el.tile, {
                                [el.noBorder]: ef,
                                [el.noInteraction]: null == B,
                                [el.idle]: eC,
                            }),
                            noBorder: ef,
                            style: z,
                            participantUserId: eA,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e8,
                                className: el.tileChild,
                                onDoubleClick: e1,
                                onContextMenu: (e) => e4(e, O.type === et.fO.STREAM),
                                onClick: e0,
                                onMouseDown: F,
                                onKeyDown: H,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eV && null != eA
                                        ? (0, r.jsx)(w.Z, {
                                              voiceChannelEffect: eV,
                                              onComplete: () => (0, A.H)(eA),
                                              userId: eA,
                                          })
                                        : null,
                                    O.type === et.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: el.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(y.Z, {
                                                  userId: eA,
                                                  channelId: eo.id,
                                                  guildId: eo.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (s =
                                                              null == e2 || null == (t = e2.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? s
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e2 || null == (n = e2.current)
                                                                  ? void 0
                                                                  : n.clientHeight)
                                                              ? c
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e3,
                                    ef
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: el.indicators,
                                              children: e7,
                                          }),
                                    ep
                                        ? (0, r.jsx)("div", {
                                              className: el.selectedScreen,
                                              children: (0, r.jsx)(e9, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: el.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    ea.includes(O.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ed,
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
                                                      focused: eg,
                                                      width: es,
                                                      inCall: eu,
                                                      participantId: O.id,
                                                      participantType: O.type,
                                                      hasVideo: null != eG && eG,
                                                  },
                                                  eF,
                                              )),
                                              (v = v =
                                                  {
                                                      idle: eC,
                                                      platform: ez,
                                                      title: (0, W.Z)(eo, O),
                                                      blocked: em,
                                                      ignored: eb,
                                                      localVideoDisabled: eR,
                                                      videoToggleState: eD,
                                                      hideAudioIcon: eH,
                                                      onContextMenu: e4,
                                                      onToggleMute: e$,
                                                      participantUserId: eA,
                                                      channel: eo,
                                                      application: eq,
                                                      secureFramesVerified: eJ,
                                                      isHovered: eP,
                                                      popoutType: j,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(v)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            b,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(v, e),
                                                        );
                                                    }),
                                              b),
                                          ),
                                    eu && !ef
                                        ? (0, r.jsx)("div", {
                                              className: a()(el.border, {
                                                  [el.voiceChannelEffect]: !eg && (eB || null != eV),
                                                  [el.latchedNotSpeaking]: eL && !ek && !eg && !eB,
                                              }),
                                              style: eg || eB ? void 0 : e6,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        e_ &&
                            eI &&
                            eP &&
                            (0, r.jsx)(K.Z, {
                                currentUserId: eN,
                                participant: O,
                            }),
                        (0, r.jsx)(E.Z, {
                            isFiring: eE,
                            callTileRef: e2.current,
                        }),
                    ],
                }),
            }),
        });
    });
function es(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === et.fO.STREAM)
        return n === et.wR.XBOX
            ? (0, r.jsx)(H.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case et.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case et.wR.XBOX:
            return (0, r.jsx)(H.Z, { className: i });
        case et.wR.PLAYSTATION:
            return (0, r.jsx)(F.Z, { className: i });
        default:
            return null;
    }
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: a()(el.overlayButton, { [el.hideWhenInactive]: i }),
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
function eu(e) {
    let { channelId: t, participantId: n, hideWhenInactive: l } = e,
        a = i.useMemo(() => (0, v.Z)(t, n), [t, n]),
        s = (0, o.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(a)),
        c = i.useCallback(() => {
            I.setAlwaysOnTop(a, !s);
        }, [a, s]);
    return V.isPlatformEmbedded && z.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS)
        ? (0, r.jsx)(ec, {
              onClick: c,
              tooltipText: s ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
              icon: s ? u.QVc : u.k5M,
              hideWhenInactive: l,
          })
        : null;
}
eo.displayName = "CallTile";
let ed = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: p,
            blocked: f,
            ignored: h,
            participantId: m,
            participantType: y,
            participantUserId: v,
            channel: x,
            platform: C,
            secureFramesVerified: E,
            onContextMenu: S,
            muted: _,
            deafened: I,
            localMuted: P,
            serverMuted: Z,
            serverDeafened: N,
            hasVideo: T,
            hideAudioIcon: A,
            onToggleMute: w,
            popoutType: R,
        } = e,
        D = (0, o.e7)([k.Z], () => null != v && k.Z.isLocalVideoAutoDisabled(v, (0, g.Z)(y)), [v, y]),
        M = (0, O.Z)({
            userId: v,
            guildId: x.getGuildId(),
        }),
        L = (0, j.j)({ displayNameStyles: M }),
        U = (0, J.N)(l),
        G = (0, J.K)(l),
        [F, H] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== B.Z.isOpen() && ((e = B.Z.isOpen()) || H(!1));
            };
        return B.Z.addChangeListener(t), () => B.Z.removeChangeListener(t);
    }, []);
    let V = !A && y === et.fO.STREAM && T && (!G || P),
        z = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: P,
            serverMuted: Z,
            serverDeafened: N,
            deafened: I,
            muted: _,
        }),
        W = [];
    return (
        d
            ? R === b.P.CALL_TILE &&
              W.push(
                  (0, r.jsx)(
                      eu,
                      {
                          channelId: x.id,
                          participantId: m,
                          hideWhenInactive: !F,
                      },
                      "stay-on-top",
                  ),
              )
            : (W.push(
                  (0, r.jsx)(
                      ec,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), H(!0), S(e, !0, et.A5.THREE_DOT);
                          },
                          tooltipText: ei.intl.string(ei.t["+1H47t"]),
                          icon: u.xhG,
                          hideWhenInactive: !F,
                      },
                      "options",
                  ),
              ),
              V &&
                  W.push(
                      (0, r.jsx)(
                          ec,
                          {
                              onClick: w,
                              tooltipText: P ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
                              icon: P ? u.OyP : u.gj8,
                              hideWhenInactive: !P && !F,
                          },
                          "mute",
                      ),
                  )),
        (0, r.jsxs)("div", {
            className: a()(el.overlayContainer, {
                [el.compact]: G,
                [el.noPointerEvents]: d,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(el.overlayTop, { [el.small]: l < 195 }),
                    children:
                        D || p === ee.ZUi.AUTO_PROBING
                            ? t
                                ? (0, r.jsx)("div", {
                                      className: el.status,
                                      children: (0, r.jsx)(u.Amn, {
                                          size: "md",
                                          color: "currentColor",
                                      }),
                                  })
                                : (0, r.jsxs)("div", {
                                      className: a()(el.overlayTitle, el.videoDisabledTitle),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: el.status,
                                              children: (0, r.jsx)(u.Amn, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                          }),
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-sm/normal",
                                              className: el.overlayTitleText,
                                              children: ei.intl.string(ei.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !U &&
                    (0, r.jsxs)("div", {
                        className: a()(el.overlayBottom, { [el.small]: l < 195 }),
                        children: [
                            (0, r.jsxs)(u.Text, {
                                className: el.experimentOverlayTitle,
                                color: "none",
                                variant: G ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != z &&
                                        y === et.fO.USER &&
                                        (0, r.jsx)(z, {
                                            className: a()(el.experimentTitleIcon, { [el.compact]: G }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    f
                                        ? (0, r.jsx)("div", {
                                              className: el.blocked,
                                              children: (0, r.jsx)(u.t6m, {
                                                  size: "lg",
                                                  className: el.blockedIcon,
                                                  color: s.Z.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    h
                                        ? (0, r.jsx)("div", {
                                              className: el.ignored,
                                              children: (0, r.jsx)(u.kZF, {
                                                  size: "lg",
                                                  className: el.blockedIcon,
                                              }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, r.jsx)(es, {
                                              participantType: y,
                                              platform: C,
                                              className: a()(el.experimentTitleIcon, { [el.compact]: G }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, r.jsx)("span", {
                                              className: a()(el.overlayTitleText, L),
                                              children: n,
                                          }),
                                    E &&
                                        (0, r.jsx)(c.u, {
                                            text: ei.intl.string(ei.t.ZEem6O),
                                            children: (0, r.jsx)(u.tQf, {
                                                className: el.secureFramesIcon,
                                                size: "xs",
                                                color: s.Z.colors.TEXT_STRONG,
                                                "aria-label": ei.intl.string(ei.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            W.length > 0
                                ? (0, r.jsx)("div", {
                                      className: el.overlayButtonContainer,
                                      children: W,
                                  })
                                : null,
                        ],
                    }),
            ],
        })
    );
});
ed.displayName = "CallTileOverlay";
let ep = C.L,
    ef = eo;
