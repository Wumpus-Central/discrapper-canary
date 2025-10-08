n.d(t, {
    BP: () => ei,
    ZP: () => el,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    p = n(846027),
    h = n(410575),
    f = n(812206),
    g = n(835473),
    m = n(414910),
    b = n(415635),
    _ = n(386725),
    y = n(7284),
    O = n(649739),
    v = n(352978),
    j = n(936847),
    x = n(512384),
    C = n(210975),
    E = n(763296),
    S = n(695346),
    I = n(937995),
    P = n(456631),
    N = n(274459),
    Z = n(314897),
    w = n(857192),
    T = n(77498),
    A = n(131951),
    R = n(158776),
    D = n(979651),
    L = n(574254),
    M = n(374129),
    k = n(639351),
    U = n(584729),
    G = n(334374),
    B = n(849171),
    F = n(607187),
    V = n(833519),
    H = n(462061),
    z = n(623825),
    W = n(839662),
    K = n(981631),
    Y = n(354459),
    q = n(524484),
    X = n(65154),
    Q = n(388032),
    J = n(7504);
let $ = [Y.fO.ACTIVITY],
    ee = i.memo((e) => {
        var t, n, l, s, c, u, _;
        let {
                participant: y,
                onDoubleClick: L,
                onContextMenu: M,
                onClick: k,
                onMouseDown: z,
                onKeyDown: ee,
                className: et,
                style: en,
                containerStyle: ei,
                channel: el,
                width: eo,
                inPopout: ea,
                onVideoResize: es,
                inCall: ec = !1,
                selected: eu = !1,
                noBorder: ed = !1,
                noVideoRender: ep = !1,
                focused: eh = !1,
                blocked: ef = !1,
                ignored: eg = !1,
                fit: em = v.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: ey = !1,
                inOverlayPopout: eO = !1,
            } = e,
            ev = i.useContext(I.h9) || ey,
            [ej, ex] = i.useState(!1),
            eC = S.Sb.useSetting(),
            eE = (0, a.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled),
            [eS, eI] = i.useState(!1),
            eP = (0, a.e7)([Z.default], () => Z.default.getId()),
            eN = y.type === Y.fO.ACTIVITY ? null : y.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [ew] = (0, g.Z)(y.type === Y.fO.ACTIVITY ? [y.applicationId] : []),
            eT = (0, a.e7)([A.Z], () => null != eZ && A.Z.isLocalVideoDisabled(eZ, (0, m.Z)(y.type)), [eZ, y.type]),
            eA = (0, a.e7)([A.Z], () => (null != eZ ? A.Z.getVideoToggleState(eZ, (0, m.Z)(y.type)) : K.ZUi.NONE), [
                eZ,
                y.type,
            ]),
            eR = eA === K.ZUi.AUTO_PROBING,
            { speaking: eD, ringing: eL, hasVideo: eM } = (0, W.Z)(y, eP),
            ek = (0, a.e7)([E.Z], () => null !== eZ && E.Z.isUserPlayingSounds(eZ), [eZ]),
            eU = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== Y.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([D.Z], () => {
                        var e, t, r;
                        let i = D.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([A.Z], () => {
                        let n = (0, m.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: A.Z.isLocalMute(s, n),
                                  localVideoDisabled: A.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: A.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === Y.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === Y.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eP, y, el.getGuildId()),
            eG = y.type === Y.fO.STREAM && eZ === eP,
            eB = (0, a.e7)([P.Z], () => (y.type === Y.fO.USER && null != eZ ? P.Z.getEffectForUserId(eZ) : null)),
            eF = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(el.id, null != eZ ? eZ : K.lds)),
            { showGameIcon: eV } = O.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eH = (0, a.e7)(
                [R.Z],
                () =>
                    eV && null != eZ
                        ? R.Z.findActivity(eZ, (e) => null != e.application_id && e.type === K.IIU.PLAYING)
                        : null,
                [eV, eZ],
            ),
            ez = (0, a.e7)([T.Z], () =>
                (null == eH ? void 0 : eH.application_id) != null ? T.Z.getDetectableGame(eH.application_id) : null,
            ),
            eW = (0, a.e7)([f.Z], () =>
                null != ez && (null == eH ? void 0 : eH.application_id) != null
                    ? f.Z.getApplication(null == eH ? void 0 : eH.application_id)
                    : void 0,
            ),
            eK = (0, C.wV)({
                userId: eZ,
                channelId: el.id,
            }),
            eY = (0, C.zU)({
                streamKey: y.type === Y.fO.STREAM ? y.id : null,
                channelId: el.id,
            }),
            eq = i.useMemo(
                () => (y.type === Y.fO.STREAM ? null != eY && eY : y.type === Y.fO.USER && null != eK && eK),
                [eY, eK, y.type],
            );
        i.useEffect(() => {
            ex(eh);
        }, [eh]);
        let eX = i.useCallback(() => {
                null != eZ && p.Z.toggleLocalMute(eZ, X.Yn.STREAM);
            }, [eZ]),
            eQ = i.useCallback(
                (e) => {
                    null == k || k(y, e);
                },
                [k, y],
            ),
            eJ = i.useCallback(
                (e) => {
                    null == L || L(y, e);
                },
                [L, y],
            ),
            e$ = i.useCallback(
                (e, t, n) => {
                    null == M || M(y, e, t, n);
                },
                [M, y],
            ),
            e0 = null,
            e1 = null,
            e4 = "";
        switch (y.type) {
            case Y.fO.STREAM:
                (e0 = (0, r.jsx)(V.Z, {
                    participant: y,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: eO,
                })),
                    (e1 = (0, r.jsx)(V._, {
                        participant: y,
                        selected: eu,
                        width: eo,
                        focused: eh,
                        idle: ev,
                        premiumIndicator: !1,
                    })),
                    (e4 = Q.intl.formatToPlainString(Q.t.gHPz3d, { streamerName: y.user.username }));
                break;
            case Y.fO.USER:
                (e0 = (0, r.jsx)(H.Z, {
                    channel: el,
                    inCall: ec,
                    participant: y,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    selected: eu,
                    width: eo,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eR,
                    pulseSpeakingIndicator: e_,
                    inOverlayPopout: eO,
                })),
                    (e1 = (0, r.jsx)(H.T, {
                        participant: y,
                        channelId: el.id,
                    })),
                    (e4 = Q.intl.formatToPlainString(Q.t["iC/x/f"], { username: y.user.username }));
                break;
            case Y.fO.ACTIVITY:
                (e0 = (0, r.jsx)(B.ZP, {
                    interactible: eh,
                    participant: y,
                    selected: eu,
                    channel: el,
                    width: eo,
                })),
                    (e4 = Q.intl.formatToPlainString(Q.t.YCvOsL, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case Y.fO.HIDDEN_STREAM:
                e0 = (0, r.jsx)(V.Z, {
                    participant: y,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: eO,
                });
        }
        let e8 = i.useRef(null),
            e6 = y.type === Y.fO.STREAM ? d.pzj : d.Odl;
        return (0, r.jsx)(h.Z, {
            section: K.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(J.wrapper, { [J.ringing]: eL }, et),
                style: ei,
                onMouseEnter: () => {
                    eI(!0);
                },
                onMouseLeave: () => {
                    eI(!1);
                },
                children: (0, r.jsxs)(x.Z, {
                    shakeLocation: q.oZ.VOICE_USER,
                    isShaking: eD,
                    className: J.tile,
                    children: [
                        (0, r.jsx)(F.Z, {
                            ref: e8,
                            className: o()(J.tile, {
                                [J.noBorder]: ed,
                                [J.noInteraction]: null == k,
                                [J.idle]: ev,
                            }),
                            noBorder: ed,
                            style: en,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(d.kL8, {
                                "aria-label": e4,
                                className: J.tileChild,
                                onDoubleClick: eJ,
                                onContextMenu: (e) => e$(e, y.type === Y.fO.STREAM),
                                onClick: eQ,
                                onMouseDown: z,
                                onKeyDown: ee,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eB && null != eZ
                                        ? (0, r.jsx)(N.Z, {
                                              voiceChannelEffect: eB,
                                              onComplete: () => (0, P.H)(eZ),
                                              userId: eZ,
                                          })
                                        : null,
                                    y.type === Y.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: J.voiceChannelEffectsContainer,
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
                                    e0,
                                    ed
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: J.indicators,
                                              children: e1,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: J.selectedScreen,
                                              children: (0, r.jsx)(e6, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: J.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    $.includes(y.type)
                                        ? null
                                        : (0, r.jsx)(
                                              er,
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
                                                      focused: eh,
                                                      width: eo,
                                                      inCall: ec,
                                                      participantType: y.type,
                                                      hasVideo: null != eM && eM,
                                                  },
                                                  eU,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ev,
                                                      platform: eF,
                                                      title: (0, U.Z)(el, y),
                                                      blocked: ef,
                                                      ignored: eg,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: eA,
                                                      hideAudioIcon: eG,
                                                      onContextMenu: e$,
                                                      onToggleMute: eX,
                                                      participantUserId: eZ,
                                                      channel: el,
                                                      application: eW,
                                                      secureFramesVerified: eq,
                                                      isHovered: eS,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(_))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(_)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            u,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(_, e),
                                                        );
                                                    }),
                                              u),
                                          ),
                                    ec && !ed
                                        ? (0, r.jsx)("div", {
                                              className: o()(J.border, {
                                                  [J.voiceChannelEffect]: !eh && (ek || null != eB),
                                                  [J.speaking]: eD && !eh && !ek,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eC &&
                            eE &&
                            eS &&
                            (0, r.jsx)(G.Z, {
                                currentUserId: eP,
                                participant: y,
                            }),
                        (0, r.jsx)(j.Z, {
                            isFiring: ej,
                            callTileRef: e8.current,
                        }),
                    ],
                }),
            }),
        });
    });
function et(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === Y.fO.STREAM)
        return n === Y.wR.XBOX
            ? (0, r.jsx)(k.Z, { className: i })
            : (0, r.jsx)(d.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case Y.wR.MOBILE:
            return (0, r.jsx)(d.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case Y.wR.XBOX:
            return (0, r.jsx)(k.Z, { className: i });
        case Y.wR.PLAYSTATION:
            return (0, r.jsx)(M.Z, { className: i });
        default:
            return null;
    }
}
function en(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: a } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)(u.zx, {
            onClick: (e) => {
                e.stopPropagation(), l(e);
            },
            onMouseDown: (e) => e.preventDefault(),
            color: u.Tt.CUSTOM,
            size: u.Ph.ICON,
            className: o()(J.overlayButton, {
                [J.hideWhenInactive]: i,
                [J.compact]: a,
            }),
            innerClassName: J.overlayButtonInner,
            children: (0, r.jsx)(t, {
                size: a ? "xs" : "refresh_sm",
                color: "currentColor",
            }),
        }),
    });
}
ee.displayName = "CallTile";
let er = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: u,
            videoToggleState: p,
            blocked: h,
            ignored: f,
            participantType: g,
            participantUserId: b,
            channel: O,
            platform: v,
            secureFramesVerified: j,
            onContextMenu: x,
            muted: C,
            deafened: E,
            localMuted: S,
            serverMuted: I,
            serverDeafened: P,
            hasVideo: N,
            hideAudioIcon: Z,
            onToggleMute: w,
        } = e,
        T = (0, a.e7)([A.Z], () => null != b && A.Z.isLocalVideoAutoDisabled(b, (0, m.Z)(g)), [b, g]),
        R = (0, _.Z)({
            userId: b,
            guildId: O.getGuildId(),
        }),
        D = (0, y.j)({ displayNameStyles: R }),
        M = (0, z.N)(l),
        k = (0, z.K)(l),
        [U, G] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== L.Z.isOpen() && ((e = L.Z.isOpen()) || G(!1));
            };
        return L.Z.addChangeListener(t), () => L.Z.removeChangeListener(t);
    }, []);
    let B = !Z && g === Y.fO.STREAM && N && (!k || S),
        F = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? d.Vm4 : n ? d.v0G : i ? d.wE8 : t ? d.v0G : l ? d.nRN : null;
        })({
            localMuted: S,
            serverMuted: I,
            serverDeafened: P,
            deafened: E,
            muted: C,
        });
    return (0, r.jsxs)("div", {
        className: o()(J.overlayContainer, { [J.compact]: k }),
        children: [
            (0, r.jsx)("div", {
                className: o()(J.overlayTop, { [J.small]: l < 195 }),
                children:
                    T || p === K.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: J.status,
                                  children: (0, r.jsx)(d.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(J.overlayTitle, J.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: J.status,
                                          children: (0, r.jsx)(d.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/normal",
                                          className: J.overlayTitleText,
                                          children: Q.intl.string(Q.t.m2Hyj4),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !M &&
                (0, r.jsxs)("div", {
                    className: o()(J.overlayBottom, { [J.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(d.Text, {
                            className: o()(J.experimentOverlayTitle, { [J.compact]: k }),
                            color: "none",
                            variant: k ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != F &&
                                    g === Y.fO.USER &&
                                    (0, r.jsx)(F, {
                                        className: o()(J.experimentTitleIcon, { [J.compact]: k }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: J.blocked,
                                          children: (0, r.jsx)(d.t6m, {
                                              size: "lg",
                                              className: J.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                f
                                    ? (0, r.jsx)("div", {
                                          className: J.ignored,
                                          children: (0, r.jsx)(d.kZF, {
                                              size: "lg",
                                              className: J.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(et, {
                                          participantType: g,
                                          platform: v,
                                          className: o()(J.experimentTitleIcon, { [J.compact]: k }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(J.overlayTitleText, D),
                                          children: n,
                                      }),
                                j &&
                                    (0, r.jsx)(c.u, {
                                        text: Q.intl.string(Q.t.ZEem6O),
                                        children: (0, r.jsx)(d.tQf, {
                                            className: J.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": Q.intl.string(Q.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !u &&
                            (0, r.jsxs)("div", {
                                className: J.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(en, {
                                        onClick: (e) => {
                                            e.stopPropagation(), G(!0), x(e, !0, Y.A5.THREE_DOT);
                                        },
                                        tooltipText: Q.intl.string(Q.t["+1H47u"]),
                                        icon: d.xhG,
                                        hideWhenInactive: !U,
                                        compact: k,
                                    }),
                                    B &&
                                        (0, r.jsx)(en, {
                                            onClick: w,
                                            tooltipText: S ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
                                            icon: S ? d.OyP : d.gj8,
                                            hideWhenInactive: !S && !U,
                                            compact: k,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
er.displayName = "CallTileOverlay";
let ei = v.L,
    el = ee;
