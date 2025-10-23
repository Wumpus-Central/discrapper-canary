n.d(t, {
    BP: () => es,
    ZP: () => ec,
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
    h = n(872810),
    f = n(410575),
    g = n(812206),
    m = n(835473),
    b = n(629049),
    _ = n(358221),
    O = n(414910),
    y = n(415635),
    j = n(386725),
    v = n(7284),
    x = n(649739),
    C = n(352978),
    E = n(936847),
    S = n(512384),
    I = n(788983),
    P = n(210975),
    N = n(763296),
    Z = n(695346),
    T = n(937995),
    w = n(456631),
    A = n(274459),
    R = n(314897),
    D = n(857192),
    L = n(77498),
    M = n(131951),
    k = n(158776),
    G = n(979651),
    U = n(574254),
    B = n(374129),
    F = n(639351),
    V = n(584729),
    H = n(334374),
    z = n(849171),
    W = n(607187),
    K = n(833519),
    Y = n(462061),
    q = n(623825),
    X = n(839662),
    Q = n(981631),
    J = n(354459),
    $ = n(524484),
    ee = n(65154),
    et = n(388032),
    en = n(7504);
let er = [J.fO.ACTIVITY],
    ei = i.memo((e) => {
        var t, n, l, s, c, p, h;
        let {
                participant: b,
                popoutType: _,
                onDoubleClick: j,
                onContextMenu: v,
                onClick: I,
                onMouseDown: U,
                onKeyDown: B,
                className: F,
                style: q,
                containerStyle: ei,
                channel: el,
                width: eo,
                onVideoResize: es,
                inCall: ec = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ep = !1,
                focused: eh = !1,
                blocked: ef = !1,
                ignored: eg = !1,
                fit: em = C.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eO = !1,
            } = e,
            ey = i.useContext(T.h9) || eO,
            [ej, ev] = i.useState(!1),
            ex = Z.Sb.useSetting(),
            eC = (0, a.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled),
            [eE, eS] = i.useState(!1),
            eI = (0, a.e7)([R.default], () => R.default.getId()),
            eP = b.type === J.fO.ACTIVITY ? null : b.user,
            eN = null != (l = null == eP ? void 0 : eP.id) ? l : null,
            [eZ] = (0, m.Z)(b.type === J.fO.ACTIVITY ? [b.applicationId] : []),
            eT = (0, a.e7)([M.Z], () => null != eN && M.Z.isLocalVideoDisabled(eN, (0, O.Z)(b.type)), [eN, b.type]),
            ew = (0, a.e7)([M.Z], () => (null != eN ? M.Z.getVideoToggleState(eN, (0, O.Z)(b.type)) : Q.ZUi.NONE), [
                eN,
                b.type,
            ]),
            eA = ew === Q.ZUi.AUTO_PROBING,
            { speaking: eR, ringing: eD, hasVideo: eL } = (0, X.Z)(b, eI),
            eM = (0, a.e7)([N.Z], () => null !== eN && N.Z.isUserPlayingSounds(eN), [eN]),
            ek = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== J.fO.ACTIVITY ? t.user.id : t.applicationId,
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
                    u = (0, a.cj)([M.Z], () => {
                        let n = (0, O.Z)(t.type);
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
                            (l = t.type === J.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === J.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eI, b, el.getGuildId()),
            eG = b.type === J.fO.STREAM && eN === eI,
            eU = (0, a.e7)([w.Z], () => (b.type === J.fO.USER && null != eN ? w.Z.getEffectForUserId(eN) : null)),
            eB = (0, a.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(el.id, null != eN ? eN : Q.lds)),
            { showGameIcon: eF } = x.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eV = (0, a.e7)(
                [k.Z],
                () =>
                    eF && null != eN
                        ? k.Z.findActivity(eN, (e) => null != e.application_id && e.type === Q.IIU.PLAYING)
                        : null,
                [eF, eN],
            ),
            eH = (0, a.e7)([L.Z], () =>
                (null == eV ? void 0 : eV.application_id) != null ? L.Z.getDetectableGame(eV.application_id) : null,
            ),
            ez = (0, a.e7)([g.Z], () =>
                null != eH && (null == eV ? void 0 : eV.application_id) != null
                    ? g.Z.getApplication(null == eV ? void 0 : eV.application_id)
                    : void 0,
            ),
            eW = (0, P.wV)({
                userId: eN,
                channelId: el.id,
            }),
            eK = (0, P.zU)({
                streamKey: b.type === J.fO.STREAM ? b.id : null,
                channelId: el.id,
            }),
            eY = i.useMemo(
                () => (b.type === J.fO.STREAM ? null != eK && eK : b.type === J.fO.USER && null != eW && eW),
                [eK, eW, b.type],
            );
        i.useEffect(() => {
            ev(eh);
        }, [eh]);
        let eq = i.useCallback(() => {
                null != eN && d.Z.toggleLocalMute(eN, ee.Yn.STREAM);
            }, [eN]),
            eX = i.useCallback(
                (e) => {
                    null == I || I(b, e);
                },
                [I, b],
            ),
            eQ = i.useCallback(
                (e) => {
                    null == j || j(b, e);
                },
                [j, b],
            ),
            eJ = i.useCallback(
                (e, t, n) => {
                    null == v || v(b, e, t, n);
                },
                [v, b],
            ),
            e$ = null,
            e0 = null,
            e1 = "";
        switch (b.type) {
            case J.fO.STREAM:
                (e$ = (0, r.jsx)(K.Z, {
                    participant: b,
                    selected: eu,
                    popoutType: _,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    focused: eh,
                })),
                    (e0 = (0, r.jsx)(K._, {
                        participant: b,
                        selected: eu,
                        width: eo,
                        focused: eh,
                        idle: ey,
                        premiumIndicator: !1,
                    })),
                    (e1 = et.intl.formatToPlainString(et.t.gHPz3Q, { streamerName: b.user.username }));
                break;
            case J.fO.USER:
                (e$ = (0, r.jsx)(Y.Z, {
                    channel: el,
                    inCall: ec,
                    participant: b,
                    popoutType: _,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    selected: eu,
                    width: eo,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eA,
                    pulseSpeakingIndicator: e_,
                })),
                    (e0 = (0, r.jsx)(Y.T, {
                        participant: b,
                        channelId: el.id,
                    })),
                    (e1 = et.intl.formatToPlainString(et.t["iC/x/Q"], { username: b.user.username }));
                break;
            case J.fO.ACTIVITY:
                (e$ = (0, r.jsx)(z.ZP, {
                    interactible: eh,
                    participant: b,
                    selected: eu,
                    channel: el,
                    width: eo,
                })),
                    (e1 = et.intl.formatToPlainString(et.t.YCvOsO, { activityName: null == eZ ? void 0 : eZ.name }));
                break;
            case J.fO.HIDDEN_STREAM:
                e$ = (0, r.jsx)(K.Z, {
                    participant: b,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    popoutType: _,
                    focused: eh,
                });
        }
        let e4 = i.useRef(null),
            e8 = b.type === J.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: Q.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(en.wrapper, { [en.ringing]: eD }, F),
                style: ei,
                onMouseEnter: () => {
                    eS(!0);
                },
                onMouseLeave: () => {
                    eS(!1);
                },
                children: (0, r.jsxs)(S.Z, {
                    shakeLocation: $.oZ.VOICE_USER,
                    isShaking: eR,
                    className: en.tile,
                    children: [
                        (0, r.jsx)(W.Z, {
                            ref: e4,
                            className: o()(en.tile, {
                                [en.noBorder]: ed,
                                [en.noInteraction]: null == I,
                                [en.idle]: ey,
                            }),
                            noBorder: ed,
                            style: q,
                            participantUserId: eN,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e1,
                                className: en.tileChild,
                                onDoubleClick: eQ,
                                onContextMenu: (e) => eJ(e, b.type === J.fO.STREAM),
                                onClick: eX,
                                onMouseDown: U,
                                onKeyDown: B,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eU && null != eN
                                        ? (0, r.jsx)(A.Z, {
                                              voiceChannelEffect: eU,
                                              onComplete: () => (0, w.H)(eN),
                                              userId: eN,
                                          })
                                        : null,
                                    b.type === J.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: en.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(y.Z, {
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
                                              className: en.indicators,
                                              children: e0,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: en.selectedScreen,
                                              children: (0, r.jsx)(e8, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: en.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    er.includes(b.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ea,
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
                                                      width: eo,
                                                      inCall: ec,
                                                      participantId: b.id,
                                                      participantType: b.type,
                                                      hasVideo: null != eL && eL,
                                                  },
                                                  ek,
                                              )),
                                              (h = h =
                                                  {
                                                      idle: ey,
                                                      platform: eB,
                                                      title: (0, V.Z)(el, b),
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
                                                  ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(h)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            p,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(h, e),
                                                        );
                                                    }),
                                              p),
                                          ),
                                    ec && !ed
                                        ? (0, r.jsx)("div", {
                                              className: o()(en.border, {
                                                  [en.voiceChannelEffect]: !eh && (eM || null != eU),
                                                  [en.speaking]: eR && !eh && !eM,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        ex &&
                            eC &&
                            eE &&
                            (0, r.jsx)(H.Z, {
                                currentUserId: eI,
                                participant: b,
                            }),
                        (0, r.jsx)(E.Z, {
                            isFiring: ej,
                            callTileRef: e4.current,
                        }),
                    ],
                }),
            }),
        });
    });
function el(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === J.fO.STREAM)
        return n === J.wR.XBOX
            ? (0, r.jsx)(F.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case J.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case J.wR.XBOX:
            return (0, r.jsx)(F.Z, { className: i });
        case J.wR.PLAYSTATION:
            return (0, r.jsx)(B.Z, { className: i });
        default:
            return null;
    }
}
function eo(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(en.overlayButton, { [en.hideWhenInactive]: i }),
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
ei.displayName = "CallTile";
let ea = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: f,
            blocked: g,
            ignored: m,
            participantId: y,
            participantType: x,
            participantUserId: C,
            channel: E,
            platform: S,
            secureFramesVerified: P,
            onContextMenu: N,
            muted: Z,
            deafened: T,
            localMuted: w,
            serverMuted: A,
            serverDeafened: R,
            hasVideo: D,
            hideAudioIcon: L,
            onToggleMute: k,
        } = e,
        G = (0, a.e7)([M.Z], () => null != C && M.Z.isLocalVideoAutoDisabled(C, (0, O.Z)(x)), [C, x]),
        B = (0, j.Z)({
            userId: C,
            guildId: E.getGuildId(),
        }),
        F = (0, v.j)({ displayNameStyles: B }),
        V = (0, q.N)(l),
        H = (0, q.K)(l),
        [z, W] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || W(!1));
            };
        return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t);
    }, []);
    let { enabled: K } = (0, b.n)({ location: "CallTile" }),
        Y = (0, a.e7)([_.Z], () => _.Z.isParticipantPoppedOut(E.id, y), [E.id, y]),
        X = K && !Y && x !== J.fO.ACTIVITY,
        $ = !L && x === J.fO.STREAM && D && (!H || w),
        ee = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: w,
            serverMuted: A,
            serverDeafened: R,
            deafened: T,
            muted: Z,
        });
    return (0, r.jsxs)("div", {
        className: o()(en.overlayContainer, { [en.compact]: H }),
        children: [
            (0, r.jsx)("div", {
                className: o()(en.overlayTop, { [en.small]: l < 195 }),
                children:
                    G || f === Q.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: en.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(en.overlayTitle, en.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: en.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: en.overlayTitleText,
                                          children: et.intl.string(et.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !V &&
                (0, r.jsxs)("div", {
                    className: o()(en.overlayBottom, { [en.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: en.experimentOverlayTitle,
                            color: "none",
                            variant: H ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != ee &&
                                    x === J.fO.USER &&
                                    (0, r.jsx)(ee, {
                                        className: o()(en.experimentTitleIcon, { [en.compact]: H }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                g
                                    ? (0, r.jsx)("div", {
                                          className: en.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: en.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                m
                                    ? (0, r.jsx)("div", {
                                          className: en.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: en.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(el, {
                                          participantType: x,
                                          platform: S,
                                          className: o()(en.experimentTitleIcon, { [en.compact]: H }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(en.overlayTitleText, F),
                                          children: n,
                                      }),
                                P &&
                                    (0, r.jsx)(c.u, {
                                        text: et.intl.string(et.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: en.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": et.intl.string(et.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !d &&
                            (0, r.jsxs)("div", {
                                className: en.overlayButtonContainer,
                                children: [
                                    X &&
                                        (0, r.jsx)(eo, {
                                            onClick: (e) => {
                                                e.stopPropagation();
                                                let t = _.Z.getParticipant(E.id, y);
                                                null != t &&
                                                    ((0, J._5)(t) && (0, h.rn)(t.stream, { forceMultiple: !0 }),
                                                    p.Z.popoutParticipant(E.id, y),
                                                    I.fT(E.id, y));
                                            },
                                            tooltipText: et.intl.string(et.t.EVNd8X),
                                            icon: u.rgF,
                                            hideWhenInactive: !z,
                                        }),
                                    (0, r.jsx)(eo, {
                                        onClick: (e) => {
                                            e.stopPropagation(), W(!0), N(e, !0, J.A5.THREE_DOT);
                                        },
                                        tooltipText: et.intl.string(et.t["+1H47t"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !z,
                                    }),
                                    $ &&
                                        (0, r.jsx)(eo, {
                                            onClick: k,
                                            tooltipText: w ? et.intl.string(et.t.YqAjXy) : et.intl.string(et.t.w4m945),
                                            icon: w ? u.OyP : u.gj8,
                                            hideWhenInactive: !w && !z,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
ea.displayName = "CallTileOverlay";
let es = C.L,
    ec = ei;
