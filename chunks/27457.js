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
    v = n(7284),
    j = n(649739),
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
                onDoubleClick: y,
                onContextMenu: v,
                onClick: S,
                onMouseDown: G,
                onKeyDown: U,
                className: B,
                style: Y,
                containerStyle: er,
                channel: ei,
                width: el,
                inPopout: ea,
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
                inOverlayPopout: ey = !1,
            } = e,
            ev = i.useContext(Z.h9) || eO,
            [ej, ex] = i.useState(!1),
            eC = N.Sb.useSetting(),
            eE = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eS, eI] = i.useState(!1),
            eP = (0, a.e7)([A.default], () => A.default.getId()),
            eN = b.type === Q.fO.ACTIVITY ? null : b.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [eT] = (0, g.Z)(b.type === Q.fO.ACTIVITY ? [b.applicationId] : []),
            ew = (0, a.e7)([L.Z], () => null != eZ && L.Z.isLocalVideoDisabled(eZ, (0, _.Z)(b.type)), [eZ, b.type]),
            eA = (0, a.e7)([L.Z], () => (null != eZ ? L.Z.getVideoToggleState(eZ, (0, _.Z)(b.type)) : X.ZUi.NONE), [
                eZ,
                b.type,
            ]),
            eR = eA === X.ZUi.AUTO_PROBING,
            { speaking: eD, ringing: eL, hasVideo: eM } = (0, q.Z)(b, eP),
            ek = (0, a.e7)([P.Z], () => null !== eZ && P.Z.isUserPlayingSounds(eZ), [eZ]),
            eG = (function (e, t, n) {
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
            })(eP, b, ei.getGuildId()),
            eU = b.type === Q.fO.STREAM && eZ === eP,
            eB = (0, a.e7)([T.Z], () => (b.type === Q.fO.USER && null != eZ ? T.Z.getEffectForUserId(eZ) : null)),
            eF = (0, a.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(ei.id, null != eZ ? eZ : X.lds)),
            { showGameIcon: eV } = j.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eH = (0, a.e7)(
                [M.Z],
                () =>
                    eV && null != eZ
                        ? M.Z.findActivity(eZ, (e) => null != e.application_id && e.type === X.IIU.PLAYING)
                        : null,
                [eV, eZ],
            ),
            ez = (0, a.e7)([D.Z], () =>
                (null == eH ? void 0 : eH.application_id) != null ? D.Z.getDetectableGame(eH.application_id) : null,
            ),
            eW = (0, a.e7)([f.Z], () =>
                null != ez && (null == eH ? void 0 : eH.application_id) != null
                    ? f.Z.getApplication(null == eH ? void 0 : eH.application_id)
                    : void 0,
            ),
            eK = (0, I.wV)({
                userId: eZ,
                channelId: ei.id,
            }),
            eY = (0, I.zU)({
                streamKey: b.type === Q.fO.STREAM ? b.id : null,
                channelId: ei.id,
            }),
            eq = i.useMemo(
                () => (b.type === Q.fO.STREAM ? null != eY && eY : b.type === Q.fO.USER && null != eK && eK),
                [eY, eK, b.type],
            );
        i.useEffect(() => {
            ex(eh);
        }, [eh]);
        let eX = i.useCallback(() => {
                null != eZ && d.Z.toggleLocalMute(eZ, $.Yn.STREAM);
            }, [eZ]),
            eQ = i.useCallback(
                (e) => {
                    null == S || S(b, e);
                },
                [S, b],
            ),
            eJ = i.useCallback(
                (e) => {
                    null == y || y(b, e);
                },
                [y, b],
            ),
            e$ = i.useCallback(
                (e, t, n) => {
                    null == v || v(b, e, t, n);
                },
                [v, b],
            ),
            e0 = null,
            e1 = null,
            e4 = "";
        switch (b.type) {
            case Q.fO.STREAM:
                (e0 = (0, r.jsx)(W.Z, {
                    participant: b,
                    selected: eu,
                    width: el,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: ey,
                })),
                    (e1 = (0, r.jsx)(W._, {
                        participant: b,
                        selected: eu,
                        width: el,
                        focused: eh,
                        idle: ev,
                        premiumIndicator: !1,
                    })),
                    (e4 = ee.intl.formatToPlainString(ee.t.gHPz3Q, { streamerName: b.user.username }));
                break;
            case Q.fO.USER:
                (e0 = (0, r.jsx)(K.Z, {
                    channel: ei,
                    inCall: ec,
                    participant: b,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    selected: eu,
                    width: el,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eR,
                    pulseSpeakingIndicator: e_,
                    inOverlayPopout: ey,
                })),
                    (e1 = (0, r.jsx)(K.T, {
                        participant: b,
                        channelId: ei.id,
                    })),
                    (e4 = ee.intl.formatToPlainString(ee.t["iC/x/Q"], { username: b.user.username }));
                break;
            case Q.fO.ACTIVITY:
                (e0 = (0, r.jsx)(H.ZP, {
                    interactible: eh,
                    participant: b,
                    selected: eu,
                    channel: ei,
                    width: el,
                })),
                    (e4 = ee.intl.formatToPlainString(ee.t.YCvOsO, { activityName: null == eT ? void 0 : eT.name }));
                break;
            case Q.fO.HIDDEN_STREAM:
                e0 = (0, r.jsx)(W.Z, {
                    participant: b,
                    selected: eu,
                    width: el,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: ey,
                });
        }
        let e8 = i.useRef(null),
            e6 = b.type === Q.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: X.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(et.wrapper, { [et.ringing]: eL }, B),
                style: er,
                onMouseEnter: () => {
                    eI(!0);
                },
                onMouseLeave: () => {
                    eI(!1);
                },
                children: (0, r.jsxs)(E.Z, {
                    shakeLocation: J.oZ.VOICE_USER,
                    isShaking: eD,
                    className: et.tile,
                    children: [
                        (0, r.jsx)(z.Z, {
                            ref: e8,
                            className: o()(et.tile, {
                                [et.noBorder]: ed,
                                [et.noInteraction]: null == S,
                                [et.idle]: ev,
                            }),
                            noBorder: ed,
                            style: Y,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e4,
                                className: et.tileChild,
                                onDoubleClick: eJ,
                                onContextMenu: (e) => e$(e, b.type === Q.fO.STREAM),
                                onClick: eQ,
                                onMouseDown: G,
                                onKeyDown: U,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eB && null != eZ
                                        ? (0, r.jsx)(w.Z, {
                                              voiceChannelEffect: eB,
                                              onComplete: () => (0, T.H)(eZ),
                                              userId: eZ,
                                          })
                                        : null,
                                    b.type === Q.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: et.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(O.Z, {
                                                  userId: eZ,
                                                  channelId: ei.id,
                                                  guildId: ei.getGuildId(),
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
                                    e0,
                                    ed
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: et.indicators,
                                              children: e1,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: et.selectedScreen,
                                              children: (0, r.jsx)(e6, {
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
                                                      width: el,
                                                      inCall: ec,
                                                      participantType: b.type,
                                                      hasVideo: null != eM && eM,
                                                  },
                                                  eG,
                                              )),
                                              (m = m =
                                                  {
                                                      idle: ev,
                                                      platform: eF,
                                                      title: (0, F.Z)(ei, b),
                                                      blocked: ef,
                                                      ignored: eg,
                                                      localVideoDisabled: ew,
                                                      videoToggleState: eA,
                                                      hideAudioIcon: eU,
                                                      onContextMenu: e$,
                                                      onToggleMute: eX,
                                                      participantUserId: eZ,
                                                      channel: ei,
                                                      application: eW,
                                                      secureFramesVerified: eq,
                                                      isHovered: eS,
                                                      participant: b,
                                                      inPopout: ea,
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
                                                  [et.voiceChannelEffect]: !eh && (ek || null != eB),
                                                  [et.speaking]: eD && !eh && !ek,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eC &&
                            eE &&
                            eS &&
                            (0, r.jsx)(V.Z, {
                                currentUserId: eP,
                                participant: b,
                            }),
                        (0, r.jsx)(C.Z, {
                            isFiring: ej,
                            callTileRef: e8.current,
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
            participantType: O,
            participantUserId: j,
            channel: x,
            platform: C,
            secureFramesVerified: E,
            onContextMenu: I,
            muted: P,
            deafened: N,
            localMuted: Z,
            serverMuted: T,
            serverDeafened: w,
            hasVideo: A,
            hideAudioIcon: R,
            onToggleMute: D,
            participant: M,
            inPopout: k,
        } = e,
        U = (0, a.e7)([L.Z], () => null != j && L.Z.isLocalVideoAutoDisabled(j, (0, _.Z)(O)), [j, O]),
        B = (0, y.Z)({
            userId: j,
            guildId: x.getGuildId(),
        }),
        F = (0, v.j)({ displayNameStyles: B }),
        V = (0, Y.N)(l),
        H = (0, Y.K)(l),
        [z, W] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== G.Z.isOpen() && ((e = G.Z.isOpen()) || W(!1));
            };
        return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t);
    }, []);
    let { enabled: K } = (0, m.n)({ location: "CallTile" }),
        q = (0, a.e7)([b.Z], () => b.Z.isParticipantPoppedOut(x.id, M.id), [x.id, M.id]),
        J = !R && O === Q.fO.STREAM && A && (!H || Z),
        $ = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: Z,
            serverMuted: T,
            serverDeafened: w,
            deafened: N,
            muted: P,
        });
    return (0, r.jsxs)("div", {
        className: o()(et.overlayContainer, { [et.compact]: H }),
        children: [
            (0, r.jsx)("div", {
                className: o()(et.overlayTop, { [et.small]: l < 195 }),
                children:
                    U || h === X.ZUi.AUTO_PROBING
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
            !V &&
                (0, r.jsxs)("div", {
                    className: o()(et.overlayBottom, { [et.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: et.experimentOverlayTitle,
                            color: "none",
                            variant: H ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != $ &&
                                    O === Q.fO.USER &&
                                    (0, r.jsx)($, {
                                        className: o()(et.experimentTitleIcon, { [et.compact]: H }),
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
                                          participantType: O,
                                          platform: C,
                                          className: o()(et.experimentTitleIcon, { [et.compact]: H }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(et.overlayTitleText, F),
                                          children: n,
                                      }),
                                E &&
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
                                    K &&
                                        !q &&
                                        (0, r.jsx)(el, {
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    p.Z.popoutParticipant(x.id, M.id),
                                                    S.fT(x.id, M.id);
                                            },
                                            tooltipText: ee.intl.string(ee.t.EVNd8X),
                                            icon: u.rgF,
                                            hideWhenInactive: !z,
                                        }),
                                    (0, r.jsx)(el, {
                                        onClick: (e) => {
                                            e.stopPropagation(), W(!0), I(e, !0, Q.A5.THREE_DOT);
                                        },
                                        tooltipText: ee.intl.string(ee.t["+1H47t"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !z,
                                    }),
                                    J &&
                                        (0, r.jsx)(el, {
                                            onClick: D,
                                            tooltipText: Z ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
                                            icon: Z ? u.OyP : u.gj8,
                                            hideWhenInactive: !Z && !z,
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
