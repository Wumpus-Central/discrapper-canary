n.d(t, {
    BP: () => ed,
    ZP: () => ep,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(846027),
    p = n(410575),
    h = n(812206),
    f = n(835473),
    g = n(414910),
    m = n(598006),
    b = n(415635),
    _ = n(7291),
    y = n(386725),
    O = n(7284),
    v = n(649739),
    j = n(352978),
    C = n(936847),
    E = n(512384),
    x = n(522474),
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
    k = n(606304),
    G = n(979651),
    U = n(574254),
    B = n(374129),
    F = n(639351),
    V = n(358085),
    H = n(998502),
    z = n(584729),
    W = n(334374),
    K = n(849171),
    Y = n(607187),
    q = n(833519),
    X = n(462061),
    Q = n(623825),
    J = n(839662),
    $ = n(981631),
    ee = n(354459),
    et = n(524484),
    en = n(65154),
    er = n(388032),
    ei = n(7504);
let el = [ee.fO.ACTIVITY],
    eo = i.memo((e) => {
        var t, n, l, s, c, m, _;
        let {
                participant: y,
                popoutType: O,
                onDoubleClick: x,
                onContextMenu: S,
                onClick: U,
                onMouseDown: B,
                onKeyDown: F,
                className: V,
                style: H,
                containerStyle: Q,
                channel: eo,
                width: ea,
                onVideoResize: es,
                inCall: ec = !1,
                selected: ed = !1,
                noBorder: ep = !1,
                noVideoRender: eh = !1,
                focused: ef = !1,
                blocked: eg = !1,
                ignored: em = !1,
                fit: eb = j.L.CONTAIN,
                paused: e_ = !1,
                pulseSpeakingIndicator: ey = !1,
                forceIdle: eO = !1,
            } = e,
            ev = i.useContext(Z.h9) || eO,
            [ej, eC] = i.useState(!1),
            eE = N.Sb.useSetting(),
            ex = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eS, eI] = i.useState(!1),
            eP = (0, a.e7)([A.default], () => A.default.getId()),
            eN = y.type === ee.fO.ACTIVITY ? null : y.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [ew] = (0, f.Z)(y.type === ee.fO.ACTIVITY ? [y.applicationId] : []),
            eT = (0, a.e7)([L.Z], () => null != eZ && L.Z.isLocalVideoDisabled(eZ, (0, g.Z)(y.type)), [eZ, y.type]),
            eA = (0, a.e7)([L.Z], () => (null != eZ ? L.Z.getVideoToggleState(eZ, (0, g.Z)(y.type)) : $.ZUi.NONE), [
                eZ,
                y.type,
            ]),
            eR = (0, a.e7)([k.Z], () => k.Z.isCurrentUserPTTLatched()),
            eD = eZ === eP && y.type === ee.fO.USER,
            eL = eA === $.ZUi.AUTO_PROBING,
            { speaking: eM, ringing: ek, hasVideo: eG } = (0, J.Z)(y, eP),
            eU = (0, a.e7)([P.Z], () => null !== eZ && P.Z.isUserPlayingSounds(eZ), [eZ]),
            eB = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== ee.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([G.Z], () => {
                        var e, t, r;
                        let i = G.Z.getVoiceState(n, s);
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
                            (l = t.type === ee.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) &&
                        l,
                    deafened:
                        null !=
                            (o =
                                t.type === ee.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eP, y, eo.getGuildId()),
            eF = y.type === ee.fO.STREAM && eZ === eP,
            eV = (0, a.e7)([w.Z], () => (y.type === ee.fO.USER && null != eZ ? w.Z.getEffectForUserId(eZ) : null)),
            eH = (0, a.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(eo.id, null != eZ ? eZ : $.lds)),
            { showGameIcon: ez } = v.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eW = (0, a.e7)(
                [M.Z],
                () =>
                    ez && null != eZ
                        ? M.Z.findActivity(eZ, (e) => null != e.application_id && e.type === $.IIU.PLAYING)
                        : null,
                [ez, eZ],
            ),
            eK = (0, a.e7)([D.Z], () =>
                (null == eW ? void 0 : eW.application_id) != null ? D.Z.getDetectableGame(eW.application_id) : null,
            ),
            eY = (0, a.e7)([h.Z], () =>
                null != eK && (null == eW ? void 0 : eW.application_id) != null
                    ? h.Z.getApplication(null == eW ? void 0 : eW.application_id)
                    : void 0,
            ),
            eq = (0, I.wV)({
                userId: eZ,
                channelId: eo.id,
            }),
            eX = (0, I.zU)({
                streamKey: y.type === ee.fO.STREAM ? y.id : null,
                channelId: eo.id,
            }),
            eQ = i.useMemo(
                () => (y.type === ee.fO.STREAM ? null != eX && eX : y.type === ee.fO.USER && null != eq && eq),
                [eX, eq, y.type],
            );
        i.useEffect(() => {
            eC(ef);
        }, [ef]);
        let eJ = i.useCallback(() => {
                null != eZ && d.Z.toggleLocalMute(eZ, en.Yn.STREAM);
            }, [eZ]),
            e$ = i.useCallback(
                (e) => {
                    null == U || U(y, e);
                },
                [U, y],
            ),
            e0 = i.useCallback(
                (e) => {
                    null == x || x(y, e);
                },
                [x, y],
            ),
            e1 = i.useCallback(
                (e, t, n) => {
                    null == S || S(y, e, t, n);
                },
                [S, y],
            ),
            e4 = null,
            e8 = null,
            e6 = "";
        switch (y.type) {
            case ee.fO.STREAM:
                (e4 = (0, r.jsx)(q.Z, {
                    participant: y,
                    selected: ed,
                    popoutType: O,
                    width: ea,
                    fit: eb,
                    onVideoResize: es,
                    paused: e_,
                    focused: ef,
                })),
                    (e8 = (0, r.jsx)(q._, {
                        participant: y,
                        selected: ed,
                        width: ea,
                        focused: ef,
                        idle: ev,
                        premiumIndicator: !1,
                    })),
                    (e6 = er.intl.formatToPlainString(er.t.gHPz3Q, { streamerName: y.user.username }));
                break;
            case ee.fO.USER:
                (e4 = (0, r.jsx)(X.Z, {
                    channel: eo,
                    inCall: ec,
                    participant: y,
                    popoutType: O,
                    fit: eb,
                    onVideoResize: es,
                    paused: e_,
                    selected: ed,
                    width: ea,
                    blocked: eg,
                    ignored: em,
                    noVideoRender: eh || eL,
                    pulseSpeakingIndicator: ey,
                })),
                    (e8 = (0, r.jsx)(X.T, {
                        participant: y,
                        channelId: eo.id,
                    })),
                    (e6 = er.intl.formatToPlainString(er.t["iC/x/Q"], { username: y.user.username }));
                break;
            case ee.fO.ACTIVITY:
                (e4 = (0, r.jsx)(K.ZP, {
                    interactible: ef,
                    participant: y,
                    selected: ed,
                    channel: eo,
                    width: ea,
                })),
                    (e6 = er.intl.formatToPlainString(er.t.YCvOsO, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case ee.fO.HIDDEN_STREAM:
                e4 = (0, r.jsx)(q.Z, {
                    participant: y,
                    selected: ed,
                    width: ea,
                    fit: eb,
                    onVideoResize: es,
                    paused: e_,
                    popoutType: O,
                    focused: ef,
                });
        }
        let e3 = i.useRef(null),
            e2 = y.type === ee.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(p.Z, {
            section: $.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(ei.wrapper, { [ei.ringing]: ek }, V),
                style: Q,
                onMouseEnter: () => {
                    eI(!0);
                },
                onMouseLeave: () => {
                    eI(!1);
                },
                children: (0, r.jsxs)(E.Z, {
                    shakeLocation: et.oZ.VOICE_USER,
                    isShaking: eM,
                    className: ei.tile,
                    children: [
                        (0, r.jsx)(Y.Z, {
                            ref: e3,
                            className: o()(ei.tile, {
                                [ei.noBorder]: ep,
                                [ei.noInteraction]: null == U,
                                [ei.idle]: ev,
                            }),
                            noBorder: ep,
                            style: H,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e6,
                                className: ei.tileChild,
                                onDoubleClick: e0,
                                onContextMenu: (e) => e1(e, y.type === ee.fO.STREAM),
                                onClick: e$,
                                onMouseDown: B,
                                onKeyDown: F,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eV && null != eZ
                                        ? (0, r.jsx)(T.Z, {
                                              voiceChannelEffect: eV,
                                              onComplete: () => (0, w.H)(eZ),
                                              userId: eZ,
                                          })
                                        : null,
                                    y.type === ee.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: ei.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(b.Z, {
                                                  userId: eZ,
                                                  channelId: eo.id,
                                                  guildId: eo.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (s =
                                                              null == e3 || null == (t = e3.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? s
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e3 || null == (n = e3.current)
                                                                  ? void 0
                                                                  : n.clientHeight)
                                                              ? c
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e4,
                                    ep
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: ei.indicators,
                                              children: e8,
                                          }),
                                    ed
                                        ? (0, r.jsx)("div", {
                                              className: ei.selectedScreen,
                                              children: (0, r.jsx)(e2, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: ei.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    el.includes(y.type)
                                        ? null
                                        : (0, r.jsx)(
                                              eu,
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
                                                      focused: ef,
                                                      width: ea,
                                                      inCall: ec,
                                                      participantId: y.id,
                                                      participantType: y.type,
                                                      hasVideo: null != eG && eG,
                                                  },
                                                  eB,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ev,
                                                      platform: eH,
                                                      title: (0, z.Z)(eo, y),
                                                      blocked: eg,
                                                      ignored: em,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: eA,
                                                      hideAudioIcon: eF,
                                                      onContextMenu: e1,
                                                      onToggleMute: eJ,
                                                      participantUserId: eZ,
                                                      channel: eo,
                                                      application: eY,
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
                                    ec && !ep
                                        ? (0, r.jsx)("div", {
                                              className: o()(ei.border, {
                                                  [ei.voiceChannelEffect]: !ef && (eU || null != eV),
                                                  [ei.speaking]: eM && !ef && !eU,
                                                  [ei.latchedNotSpeaking]: eD && eR && !eM && !ef && !eU,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eE &&
                            ex &&
                            eS &&
                            (0, r.jsx)(W.Z, {
                                currentUserId: eP,
                                participant: y,
                            }),
                        (0, r.jsx)(C.Z, {
                            isFiring: ej,
                            callTileRef: e3.current,
                        }),
                    ],
                }),
            }),
        });
    });
function ea(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === ee.fO.STREAM)
        return n === ee.wR.XBOX
            ? (0, r.jsx)(F.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case ee.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case ee.wR.XBOX:
            return (0, r.jsx)(F.Z, { className: i });
        case ee.wR.PLAYSTATION:
            return (0, r.jsx)(B.Z, { className: i });
        default:
            return null;
    }
}
function es(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(ei.overlayButton, { [ei.hideWhenInactive]: i }),
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
function ec(e) {
    let { channelId: t, participantId: n, isContextMenuOpen: l } = e,
        o = i.useMemo(() => (0, _.Z)(t, n), [t, n]),
        s = (0, a.e7)([x.Z], () => x.Z.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            S.hY(o, !s);
        }, [o, s]);
    return V.isPlatformEmbedded && H.ZP.supportsFeature($.eRX.POPOUT_WINDOWS)
        ? (0, r.jsx)(es, {
              onClick: c,
              tooltipText: s ? er.intl.string(er.t.YdyDM9) : er.intl.string(er.t.ZVGHwP),
              icon: s ? u.QVc : u.k5M,
              hideWhenInactive: !l,
          })
        : null;
}
eo.displayName = "CallTile";
let eu = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: p,
            blocked: h,
            ignored: f,
            participantId: b,
            participantType: _,
            participantUserId: v,
            channel: j,
            platform: C,
            secureFramesVerified: E,
            onContextMenu: x,
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
        G = (0, Q.N)(l),
        B = (0, Q.K)(l),
        [F, V] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || V(!1));
            };
        return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t);
    }, []);
    let H = !T && _ === ee.fO.STREAM && w && (!B || P),
        z = (function (e) {
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
        className: o()(ei.overlayContainer, {
            [ei.compact]: B,
            [ei.noPointerEvents]: d,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(ei.overlayTop, { [ei.small]: l < 195 }),
                children:
                    D || p === $.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: ei.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(ei.overlayTitle, ei.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ei.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: ei.overlayTitleText,
                                          children: er.intl.string(er.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !G &&
                (0, r.jsxs)("div", {
                    className: o()(ei.overlayBottom, { [ei.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: ei.experimentOverlayTitle,
                            color: "none",
                            variant: B ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != z &&
                                    _ === ee.fO.USER &&
                                    (0, r.jsx)(z, {
                                        className: o()(ei.experimentTitleIcon, { [ei.compact]: B }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: ei.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: ei.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                f
                                    ? (0, r.jsx)("div", {
                                          className: ei.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: ei.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(ea, {
                                          participantType: _,
                                          platform: C,
                                          className: o()(ei.experimentTitleIcon, { [ei.compact]: B }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(ei.overlayTitleText, k),
                                          children: n,
                                      }),
                                E &&
                                    (0, r.jsx)(c.u, {
                                        text: er.intl.string(er.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: ei.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": er.intl.string(er.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        d
                            ? R === m.P.CALL_TILE
                                ? (0, r.jsx)(ec, {
                                      channelId: j.id,
                                      participantId: b,
                                      isContextMenuOpen: F,
                                  })
                                : null
                            : (0, r.jsxs)("div", {
                                  className: ei.overlayButtonContainer,
                                  children: [
                                      (0, r.jsx)(es, {
                                          onClick: (e) => {
                                              e.stopPropagation(), V(!0), x(e, !0, ee.A5.THREE_DOT);
                                          },
                                          tooltipText: er.intl.string(er.t["+1H47t"]),
                                          icon: u.xhG,
                                          hideWhenInactive: !F,
                                      }),
                                      H &&
                                          (0, r.jsx)(es, {
                                              onClick: A,
                                              tooltipText: P
                                                  ? er.intl.string(er.t.YqAjXy)
                                                  : er.intl.string(er.t.w4m945),
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
eu.displayName = "CallTileOverlay";
let ed = j.L,
    ep = eo;
