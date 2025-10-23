n.d(t, {
    BP: () => ec,
    ZP: () => eu,
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
    y = n(598006),
    j = n(415635),
    v = n(386725),
    x = n(7284),
    C = n(649739),
    E = n(352978),
    S = n(936847),
    I = n(512384),
    P = n(788983),
    N = n(210975),
    Z = n(763296),
    T = n(695346),
    w = n(937995),
    A = n(456631),
    R = n(274459),
    D = n(314897),
    L = n(857192),
    M = n(77498),
    k = n(131951),
    G = n(158776),
    U = n(979651),
    B = n(574254),
    F = n(374129),
    V = n(639351),
    H = n(584729),
    z = n(334374),
    W = n(849171),
    K = n(607187),
    Y = n(833519),
    q = n(462061),
    X = n(623825),
    Q = n(839662),
    J = n(981631),
    $ = n(354459),
    ee = n(524484),
    et = n(65154),
    en = n(388032),
    er = n(7504);
let ei = [$.fO.ACTIVITY],
    el = i.memo((e) => {
        var t, n, l, s, c, p, h;
        let {
                participant: b,
                popoutType: _,
                onDoubleClick: y,
                onContextMenu: v,
                onClick: x,
                onMouseDown: P,
                onKeyDown: B,
                className: F,
                style: V,
                containerStyle: X,
                channel: el,
                width: eo,
                onVideoResize: ea,
                inCall: ec = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ep = !1,
                focused: eh = !1,
                blocked: ef = !1,
                ignored: eg = !1,
                fit: em = E.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eO = !1,
            } = e,
            ey = i.useContext(w.h9) || eO,
            [ej, ev] = i.useState(!1),
            ex = T.Sb.useSetting(),
            eC = (0, a.e7)([L.default], () => L.default.isStreamInfoOverlayEnabled),
            [eE, eS] = i.useState(!1),
            eI = (0, a.e7)([D.default], () => D.default.getId()),
            eP = b.type === $.fO.ACTIVITY ? null : b.user,
            eN = null != (l = null == eP ? void 0 : eP.id) ? l : null,
            [eZ] = (0, m.Z)(b.type === $.fO.ACTIVITY ? [b.applicationId] : []),
            eT = (0, a.e7)([k.Z], () => null != eN && k.Z.isLocalVideoDisabled(eN, (0, O.Z)(b.type)), [eN, b.type]),
            ew = (0, a.e7)([k.Z], () => (null != eN ? k.Z.getVideoToggleState(eN, (0, O.Z)(b.type)) : J.ZUi.NONE), [
                eN,
                b.type,
            ]),
            eA = ew === J.ZUi.AUTO_PROBING,
            { speaking: eR, ringing: eD, hasVideo: eL } = (0, Q.Z)(b, eI),
            eM = (0, a.e7)([Z.Z], () => null !== eN && Z.Z.isUserPlayingSounds(eN), [eN]),
            ek = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([U.Z], () => {
                        var e, t, r;
                        let i = U.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([k.Z], () => {
                        let n = (0, O.Z)(t.type);
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
                            (l = t.type === $.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === $.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eI, b, el.getGuildId()),
            eG = b.type === $.fO.STREAM && eN === eI,
            eU = (0, a.e7)([A.Z], () => (b.type === $.fO.USER && null != eN ? A.Z.getEffectForUserId(eN) : null)),
            eB = (0, a.e7)([U.Z], () => U.Z.getVoicePlatformForChannel(el.id, null != eN ? eN : J.lds)),
            { showGameIcon: eF } = C.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eV = (0, a.e7)(
                [G.Z],
                () =>
                    eF && null != eN
                        ? G.Z.findActivity(eN, (e) => null != e.application_id && e.type === J.IIU.PLAYING)
                        : null,
                [eF, eN],
            ),
            eH = (0, a.e7)([M.Z], () =>
                (null == eV ? void 0 : eV.application_id) != null ? M.Z.getDetectableGame(eV.application_id) : null,
            ),
            ez = (0, a.e7)([g.Z], () =>
                null != eH && (null == eV ? void 0 : eV.application_id) != null
                    ? g.Z.getApplication(null == eV ? void 0 : eV.application_id)
                    : void 0,
            ),
            eW = (0, N.wV)({
                userId: eN,
                channelId: el.id,
            }),
            eK = (0, N.zU)({
                streamKey: b.type === $.fO.STREAM ? b.id : null,
                channelId: el.id,
            }),
            eY = i.useMemo(
                () => (b.type === $.fO.STREAM ? null != eK && eK : b.type === $.fO.USER && null != eW && eW),
                [eK, eW, b.type],
            );
        i.useEffect(() => {
            ev(eh);
        }, [eh]);
        let eq = i.useCallback(() => {
                null != eN && d.Z.toggleLocalMute(eN, et.Yn.STREAM);
            }, [eN]),
            eX = i.useCallback(
                (e) => {
                    null == x || x(b, e);
                },
                [x, b],
            ),
            eQ = i.useCallback(
                (e) => {
                    null == y || y(b, e);
                },
                [y, b],
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
            case $.fO.STREAM:
                (e$ = (0, r.jsx)(Y.Z, {
                    participant: b,
                    selected: eu,
                    popoutType: _,
                    width: eo,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    focused: eh,
                })),
                    (e0 = (0, r.jsx)(Y._, {
                        participant: b,
                        selected: eu,
                        width: eo,
                        focused: eh,
                        idle: ey,
                        premiumIndicator: !1,
                    })),
                    (e1 = en.intl.formatToPlainString(en.t.gHPz3Q, { streamerName: b.user.username }));
                break;
            case $.fO.USER:
                (e$ = (0, r.jsx)(q.Z, {
                    channel: el,
                    inCall: ec,
                    participant: b,
                    popoutType: _,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    selected: eu,
                    width: eo,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eA,
                    pulseSpeakingIndicator: e_,
                })),
                    (e0 = (0, r.jsx)(q.T, {
                        participant: b,
                        channelId: el.id,
                    })),
                    (e1 = en.intl.formatToPlainString(en.t["iC/x/Q"], { username: b.user.username }));
                break;
            case $.fO.ACTIVITY:
                (e$ = (0, r.jsx)(W.ZP, {
                    interactible: eh,
                    participant: b,
                    selected: eu,
                    channel: el,
                    width: eo,
                })),
                    (e1 = en.intl.formatToPlainString(en.t.YCvOsO, { activityName: null == eZ ? void 0 : eZ.name }));
                break;
            case $.fO.HIDDEN_STREAM:
                e$ = (0, r.jsx)(Y.Z, {
                    participant: b,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: ea,
                    paused: eb,
                    popoutType: _,
                    focused: eh,
                });
        }
        let e4 = i.useRef(null),
            e8 = b.type === $.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: J.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(er.wrapper, { [er.ringing]: eD }, F),
                style: X,
                onMouseEnter: () => {
                    eS(!0);
                },
                onMouseLeave: () => {
                    eS(!1);
                },
                children: (0, r.jsxs)(I.Z, {
                    shakeLocation: ee.oZ.VOICE_USER,
                    isShaking: eR,
                    className: er.tile,
                    children: [
                        (0, r.jsx)(K.Z, {
                            ref: e4,
                            className: o()(er.tile, {
                                [er.noBorder]: ed,
                                [er.noInteraction]: null == x,
                                [er.idle]: ey,
                            }),
                            noBorder: ed,
                            style: V,
                            participantUserId: eN,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e1,
                                className: er.tileChild,
                                onDoubleClick: eQ,
                                onContextMenu: (e) => eJ(e, b.type === $.fO.STREAM),
                                onClick: eX,
                                onMouseDown: P,
                                onKeyDown: B,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eU && null != eN
                                        ? (0, r.jsx)(R.Z, {
                                              voiceChannelEffect: eU,
                                              onComplete: () => (0, A.H)(eN),
                                              userId: eN,
                                          })
                                        : null,
                                    b.type === $.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: er.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(j.Z, {
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
                                              className: er.indicators,
                                              children: e0,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: er.selectedScreen,
                                              children: (0, r.jsx)(e8, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: er.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    ei.includes(b.type)
                                        ? null
                                        : (0, r.jsx)(
                                              es,
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
                                                      title: (0, H.Z)(el, b),
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
                                                      popoutType: _,
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
                                              className: o()(er.border, {
                                                  [er.voiceChannelEffect]: !eh && (eM || null != eU),
                                                  [er.speaking]: eR && !eh && !eM,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        ex &&
                            eC &&
                            eE &&
                            (0, r.jsx)(z.Z, {
                                currentUserId: eI,
                                participant: b,
                            }),
                        (0, r.jsx)(S.Z, {
                            isFiring: ej,
                            callTileRef: e4.current,
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
            ? (0, r.jsx)(V.Z, { className: i })
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
            return (0, r.jsx)(V.Z, { className: i });
        case $.wR.PLAYSTATION:
            return (0, r.jsx)(F.Z, { className: i });
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
el.displayName = "CallTile";
let es = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: f,
            blocked: g,
            ignored: m,
            participantId: j,
            participantType: C,
            participantUserId: E,
            channel: S,
            platform: I,
            secureFramesVerified: N,
            onContextMenu: Z,
            muted: T,
            deafened: w,
            localMuted: A,
            serverMuted: R,
            serverDeafened: D,
            hasVideo: L,
            hideAudioIcon: M,
            onToggleMute: G,
            popoutType: U,
        } = e,
        F = (0, a.e7)([k.Z], () => null != E && k.Z.isLocalVideoAutoDisabled(E, (0, O.Z)(C)), [E, C]),
        V = (0, v.Z)({
            userId: E,
            guildId: S.getGuildId(),
        }),
        H = (0, x.j)({ displayNameStyles: V }),
        z = (0, X.N)(l),
        W = (0, X.K)(l),
        [K, Y] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== B.Z.isOpen() && ((e = B.Z.isOpen()) || Y(!1));
            };
        return B.Z.addChangeListener(t), () => B.Z.removeChangeListener(t);
    }, []);
    let { enabled: q } = (0, b.n)({ location: "CallTile" }),
        Q = (0, a.e7)([_.Z], () => _.Z.isParticipantPoppedOut(S.id, j), [S.id, j]),
        ee = q && !Q && U === y.P.NO_POPOUT && C !== $.fO.ACTIVITY,
        et = !M && C === $.fO.STREAM && L && (!W || A),
        ei = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: A,
            serverMuted: R,
            serverDeafened: D,
            deafened: w,
            muted: T,
        });
    return (0, r.jsxs)("div", {
        className: o()(er.overlayContainer, { [er.compact]: W }),
        children: [
            (0, r.jsx)("div", {
                className: o()(er.overlayTop, { [er.small]: l < 195 }),
                children:
                    F || f === J.ZUi.AUTO_PROBING
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
            !z &&
                (0, r.jsxs)("div", {
                    className: o()(er.overlayBottom, { [er.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: er.experimentOverlayTitle,
                            color: "none",
                            variant: W ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != ei &&
                                    C === $.fO.USER &&
                                    (0, r.jsx)(ei, {
                                        className: o()(er.experimentTitleIcon, { [er.compact]: W }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                g
                                    ? (0, r.jsx)("div", {
                                          className: er.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: er.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                m
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
                                          participantType: C,
                                          platform: I,
                                          className: o()(er.experimentTitleIcon, { [er.compact]: W }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(er.overlayTitleText, H),
                                          children: n,
                                      }),
                                N &&
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
                        !d &&
                            (0, r.jsxs)("div", {
                                className: er.overlayButtonContainer,
                                children: [
                                    ee &&
                                        (0, r.jsx)(ea, {
                                            onClick: (e) => {
                                                e.stopPropagation();
                                                let t = _.Z.getParticipant(S.id, j);
                                                null != t &&
                                                    ((0, $._5)(t) && (0, h.rn)(t.stream, { forceMultiple: !0 }),
                                                    p.Z.popoutParticipant(S.id, j),
                                                    P.fT(S.id, j));
                                            },
                                            tooltipText: en.intl.string(en.t.EVNd8X),
                                            icon: u.rgF,
                                            hideWhenInactive: !K,
                                        }),
                                    (0, r.jsx)(ea, {
                                        onClick: (e) => {
                                            e.stopPropagation(), Y(!0), Z(e, !0, $.A5.THREE_DOT);
                                        },
                                        tooltipText: en.intl.string(en.t["+1H47t"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !K,
                                    }),
                                    et &&
                                        (0, r.jsx)(ea, {
                                            onClick: G,
                                            tooltipText: A ? en.intl.string(en.t.YqAjXy) : en.intl.string(en.t.w4m945),
                                            icon: A ? u.OyP : u.gj8,
                                            hideWhenInactive: !A && !K,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
es.displayName = "CallTileOverlay";
let ec = E.L,
    eu = el;
