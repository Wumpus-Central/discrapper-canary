n.d(t, {
    BP: () => ea,
    ZP: () => es,
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
    p = n(475179),
    h = n(410575),
    f = n(812206),
    g = n(835473),
    m = n(629049),
    b = n(358221),
    _ = n(414910),
    O = n(415635),
    y = n(386725),
    j = n(7284),
    v = n(649739),
    x = n(352978),
    C = n(936847),
    E = n(512384),
    S = n(788983),
    I = n(210975),
    P = n(763296),
    N = n(695346),
    Z = n(937995),
    T = n(456631),
    w = n(274459),
    A = n(314897),
    R = n(857192),
    D = n(77498),
    L = n(131951),
    M = n(158776),
    k = n(979651),
    G = n(574254),
    U = n(374129),
    B = n(639351),
    F = n(584729),
    V = n(334374),
    H = n(849171),
    z = n(607187),
    W = n(833519),
    K = n(462061),
    Y = n(623825),
    q = n(839662),
    X = n(981631),
    Q = n(354459),
    J = n(524484),
    $ = n(65154),
    ee = n(388032),
    et = n(400872);
let en = [Q.fO.ACTIVITY],
    er = i.memo((e) => {
        var t, n, l, s, c, p, m;
        let {
                participant: b,
                popoutType: y,
                onDoubleClick: j,
                onContextMenu: S,
                onClick: G,
                onMouseDown: U,
                onKeyDown: B,
                className: Y,
                style: er,
                containerStyle: ei,
                channel: el,
                width: ea,
                onVideoResize: es,
                inCall: ec = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ep = !1,
                focused: eh = !1,
                blocked: ef = !1,
                ignored: eg = !1,
                fit: em = x.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eO = !1,
            } = e,
            ey = i.useContext(Z.h9) || eO,
            [ej, ev] = i.useState(!1),
            ex = N.Sb.useSetting(),
            eC = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eE, eS] = i.useState(!1),
            eI = (0, a.e7)([A.default], () => A.default.getId()),
            eP = b.type === Q.fO.ACTIVITY ? null : b.user,
            eN = null != (l = null == eP ? void 0 : eP.id) ? l : null,
            [eZ] = (0, g.Z)(b.type === Q.fO.ACTIVITY ? [b.applicationId] : []),
            eT = (0, a.e7)([L.Z], () => null != eN && L.Z.isLocalVideoDisabled(eN, (0, _.Z)(b.type)), [eN, b.type]),
            ew = (0, a.e7)([L.Z], () => (null != eN ? L.Z.getVideoToggleState(eN, (0, _.Z)(b.type)) : X.ZUi.NONE), [
                eN,
                b.type,
            ]),
            eA = ew === X.ZUi.AUTO_PROBING,
            { speaking: eR, ringing: eD, hasVideo: eL } = (0, q.Z)(b, eI),
            eM = (0, a.e7)([P.Z], () => null !== eN && P.Z.isUserPlayingSounds(eN), [eN]),
            ek = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== Q.fO.ACTIVITY ? t.user.id : t.applicationId,
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
                        let n = (0, _.Z)(t.type);
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
                            (l = t.type === Q.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === Q.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eI, b, el.getGuildId()),
            eG = b.type === Q.fO.STREAM && eN === eI,
            eU = (0, a.e7)([T.Z], () => (b.type === Q.fO.USER && null != eN ? T.Z.getEffectForUserId(eN) : null)),
            eB = (0, a.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(el.id, null != eN ? eN : X.lds)),
            { showGameIcon: eF } = v.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eV = (0, a.e7)(
                [M.Z],
                () =>
                    eF && null != eN
                        ? M.Z.findActivity(eN, (e) => null != e.application_id && e.type === X.IIU.PLAYING)
                        : null,
                [eF, eN],
            ),
            eH = (0, a.e7)([D.Z], () =>
                (null == eV ? void 0 : eV.application_id) != null ? D.Z.getDetectableGame(eV.application_id) : null,
            ),
            ez = (0, a.e7)([f.Z], () =>
                null != eH && (null == eV ? void 0 : eV.application_id) != null
                    ? f.Z.getApplication(null == eV ? void 0 : eV.application_id)
                    : void 0,
            ),
            eW = (0, I.wV)({
                userId: eN,
                channelId: el.id,
            }),
            eK = (0, I.zU)({
                streamKey: b.type === Q.fO.STREAM ? b.id : null,
                channelId: el.id,
            }),
            eY = i.useMemo(
                () => (b.type === Q.fO.STREAM ? null != eK && eK : b.type === Q.fO.USER && null != eW && eW),
                [eK, eW, b.type],
            );
        i.useEffect(() => {
            ev(eh);
        }, [eh]);
        let eq = i.useCallback(() => {
                null != eN && d.Z.toggleLocalMute(eN, $.Yn.STREAM);
            }, [eN]),
            eX = i.useCallback(
                (e) => {
                    null == G || G(b, e);
                },
                [G, b],
            ),
            eQ = i.useCallback(
                (e) => {
                    null == j || j(b, e);
                },
                [j, b],
            ),
            eJ = i.useCallback(
                (e, t, n) => {
                    null == S || S(b, e, t, n);
                },
                [S, b],
            ),
            e$ = null,
            e0 = null,
            e1 = "";
        switch (b.type) {
            case Q.fO.STREAM:
                (e$ = (0, r.jsx)(W.Z, {
                    participant: b,
                    selected: eu,
                    popoutType: y,
                    width: ea,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    focused: eh,
                })),
                    (e0 = (0, r.jsx)(W._, {
                        participant: b,
                        selected: eu,
                        width: ea,
                        focused: eh,
                        idle: ey,
                        premiumIndicator: !1,
                    })),
                    (e1 = ee.intl.formatToPlainString(ee.t.gHPz3Q, { streamerName: b.user.username }));
                break;
            case Q.fO.USER:
                (e$ = (0, r.jsx)(K.Z, {
                    channel: el,
                    inCall: ec,
                    participant: b,
                    popoutType: y,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    selected: eu,
                    width: ea,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eA,
                    pulseSpeakingIndicator: e_,
                })),
                    (e0 = (0, r.jsx)(K.T, {
                        participant: b,
                        channelId: el.id,
                    })),
                    (e1 = ee.intl.formatToPlainString(ee.t["iC/x/Q"], { username: b.user.username }));
                break;
            case Q.fO.ACTIVITY:
                (e$ = (0, r.jsx)(H.ZP, {
                    interactible: eh,
                    participant: b,
                    selected: eu,
                    channel: el,
                    width: ea,
                })),
                    (e1 = ee.intl.formatToPlainString(ee.t.YCvOsO, { activityName: null == eZ ? void 0 : eZ.name }));
                break;
            case Q.fO.HIDDEN_STREAM:
                e$ = (0, r.jsx)(W.Z, {
                    participant: b,
                    selected: eu,
                    width: ea,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    popoutType: y,
                    focused: eh,
                });
        }
        let e4 = i.useRef(null),
            e8 = b.type === Q.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: X.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(et.wrapper, { [et.ringing]: eD }, Y),
                style: ei,
                onMouseEnter: () => {
                    eS(!0);
                },
                onMouseLeave: () => {
                    eS(!1);
                },
                children: (0, r.jsxs)(E.Z, {
                    shakeLocation: J.oZ.VOICE_USER,
                    isShaking: eR,
                    className: et.tile,
                    children: [
                        (0, r.jsx)(z.Z, {
                            ref: e4,
                            className: o()(et.tile, {
                                [et.noBorder]: ed,
                                [et.noInteraction]: null == G,
                                [et.idle]: ey,
                            }),
                            noBorder: ed,
                            style: er,
                            participantUserId: eN,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e1,
                                className: et.tileChild,
                                onDoubleClick: eQ,
                                onContextMenu: (e) => eJ(e, b.type === Q.fO.STREAM),
                                onClick: eX,
                                onMouseDown: U,
                                onKeyDown: B,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eU && null != eN
                                        ? (0, r.jsx)(w.Z, {
                                              voiceChannelEffect: eU,
                                              onComplete: () => (0, T.H)(eN),
                                              userId: eN,
                                          })
                                        : null,
                                    b.type === Q.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: et.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(O.Z, {
                                                  userId: eN,
                                                  channelId: el.id,
                                                  guildId: el.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (s =
                                                              null == e4 || null == (t = e4.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? s
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e4 || null == (n = e4.current)
                                                                  ? void 0
                                                                  : n.clientHeight)
                                                              ? c
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e$,
                                    ed
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: et.indicators,
                                              children: e0,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: et.selectedScreen,
                                              children: (0, r.jsx)(e8, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: et.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    en.includes(b.type)
                                        ? null
                                        : (0, r.jsx)(
                                              eo,
                                              ((p = (function (e) {
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
                                                      inCall: ec,
                                                      participantId: b.id,
                                                      participantType: b.type,
                                                      hasVideo: null != eL && eL,
                                                  },
                                                  ek,
                                              )),
                                              (m = m =
                                                  {
                                                      idle: ey,
                                                      platform: eB,
                                                      title: (0, F.Z)(el, b),
                                                      blocked: ef,
                                                      ignored: eg,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: ew,
                                                      hideAudioIcon: eG,
                                                      onContextMenu: eJ,
                                                      onToggleMute: eq,
                                                      participantUserId: eN,
                                                      channel: el,
                                                      application: ez,
                                                      secureFramesVerified: eY,
                                                      isHovered: eE,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(m)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            p,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(m, e),
                                                        );
                                                    }),
                                              p),
                                          ),
                                    ec && !ed
                                        ? (0, r.jsx)("div", {
                                              className: o()(et.border, {
                                                  [et.voiceChannelEffect]: !eh && (eM || null != eU),
                                                  [et.speaking]: eR && !eh && !eM,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        ex &&
                            eC &&
                            eE &&
                            (0, r.jsx)(V.Z, {
                                currentUserId: eI,
                                participant: b,
                            }),
                        (0, r.jsx)(C.Z, {
                            isFiring: ej,
                            callTileRef: e4.current,
                        }),
                    ],
                }),
            }),
        });
    });
function ei(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === Q.fO.STREAM)
        return n === Q.wR.XBOX
            ? (0, r.jsx)(B.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case Q.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case Q.wR.XBOX:
            return (0, r.jsx)(B.Z, { className: i });
        case Q.wR.PLAYSTATION:
            return (0, r.jsx)(U.Z, { className: i });
        default:
            return null;
    }
}
function el(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(et.overlayButton, { [et.hideWhenInactive]: i }),
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
er.displayName = "CallTile";
let eo = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: h,
            blocked: f,
            ignored: g,
            participantId: O,
            participantType: v,
            participantUserId: x,
            channel: C,
            platform: E,
            secureFramesVerified: I,
            onContextMenu: P,
            muted: N,
            deafened: Z,
            localMuted: T,
            serverMuted: w,
            serverDeafened: A,
            hasVideo: R,
            hideAudioIcon: D,
            onToggleMute: M,
        } = e,
        k = (0, a.e7)([L.Z], () => null != x && L.Z.isLocalVideoAutoDisabled(x, (0, _.Z)(v)), [x, v]),
        U = (0, y.Z)({
            userId: x,
            guildId: C.getGuildId(),
        }),
        B = (0, j.j)({ displayNameStyles: U }),
        F = (0, Y.N)(l),
        V = (0, Y.K)(l),
        [H, z] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== G.Z.isOpen() && ((e = G.Z.isOpen()) || z(!1));
            };
        return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t);
    }, []);
    let { enabled: W } = (0, m.n)({ location: "CallTile" }),
        K = (0, a.e7)([b.Z], () => b.Z.isParticipantPoppedOut(C.id, O), [C.id, O]),
        q = !D && v === Q.fO.STREAM && R && (!V || T),
        J = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: T,
            serverMuted: w,
            serverDeafened: A,
            deafened: Z,
            muted: N,
        });
    return (0, r.jsxs)("div", {
        className: o()(et.overlayContainer, { [et.compact]: V }),
        children: [
            (0, r.jsx)("div", {
                className: o()(et.overlayTop, { [et.small]: l < 195 }),
                children:
                    k || h === X.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: et.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(et.overlayTitle, et.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: et.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: et.overlayTitleText,
                                          children: ee.intl.string(ee.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !F &&
                (0, r.jsxs)("div", {
                    className: o()(et.overlayBottom, { [et.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: et.experimentOverlayTitle,
                            color: "none",
                            variant: V ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != J &&
                                    v === Q.fO.USER &&
                                    (0, r.jsx)(J, {
                                        className: o()(et.experimentTitleIcon, { [et.compact]: V }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                f
                                    ? (0, r.jsx)("div", {
                                          className: et.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: et.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                g
                                    ? (0, r.jsx)("div", {
                                          className: et.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: et.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(ei, {
                                          participantType: v,
                                          platform: E,
                                          className: o()(et.experimentTitleIcon, { [et.compact]: V }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(et.overlayTitleText, B),
                                          children: n,
                                      }),
                                I &&
                                    (0, r.jsx)(c.u, {
                                        text: ee.intl.string(ee.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: et.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": ee.intl.string(ee.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !d &&
                            (0, r.jsxs)("div", {
                                className: et.overlayButtonContainer,
                                children: [
                                    W &&
                                        !K &&
                                        (0, r.jsx)(el, {
                                            onClick: (e) => {
                                                e.stopPropagation(), p.Z.popoutParticipant(C.id, O), S.fT(C.id, O);
                                            },
                                            tooltipText: ee.intl.string(ee.t.EVNd8X),
                                            icon: u.rgF,
                                            hideWhenInactive: !H,
                                        }),
                                    (0, r.jsx)(el, {
                                        onClick: (e) => {
                                            e.stopPropagation(), z(!0), P(e, !0, Q.A5.THREE_DOT);
                                        },
                                        tooltipText: ee.intl.string(ee.t["+1H47t"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !H,
                                    }),
                                    q &&
                                        (0, r.jsx)(el, {
                                            onClick: M,
                                            tooltipText: T ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
                                            icon: T ? u.OyP : u.gj8,
                                            hideWhenInactive: !T && !H,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
eo.displayName = "CallTileOverlay";
let ea = x.L,
    es = er;
