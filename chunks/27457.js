n.d(t, {
    BP: () => el,
    ZP: () => eo,
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
    _ = n(7284),
    y = n(649739),
    O = n(37091),
    v = n(6572),
    j = n(352978),
    x = n(936847),
    C = n(512384),
    E = n(210975),
    S = n(763296),
    I = n(695346),
    P = n(937995),
    N = n(456631),
    Z = n(274459),
    w = n(314897),
    T = n(857192),
    A = n(77498),
    R = n(131951),
    D = n(158776),
    L = n(979651),
    M = n(574254),
    k = n(374129),
    U = n(639351),
    G = n(584729),
    B = n(334374),
    F = n(849171),
    V = n(607187),
    H = n(833519),
    z = n(462061),
    W = n(623825),
    K = n(839662),
    Y = n(981631),
    q = n(354459),
    X = n(524484),
    Q = n(65154),
    J = n(388032),
    $ = n(400872);
let ee = [q.fO.ACTIVITY],
    et = i.memo((e) => {
        var t, n, l, s, c, u, _;
        let {
                participant: M,
                onDoubleClick: k,
                onContextMenu: U,
                onClick: W,
                onMouseDown: et,
                onKeyDown: en,
                className: er,
                style: el,
                containerStyle: eo,
                channel: ea,
                width: es,
                inPopout: ec,
                onVideoResize: eu,
                inCall: ed = !1,
                selected: ep = !1,
                noBorder: eh = !1,
                noVideoRender: ef = !1,
                focused: eg = !1,
                blocked: em = !1,
                ignored: eb = !1,
                fit: e_ = j.L.CONTAIN,
                paused: ey = !1,
                pulseSpeakingIndicator: eO = !1,
                forceIdle: ev = !1,
                inOverlayPopout: ej = !1,
            } = e,
            ex = i.useContext(P.h9) || ev,
            [eC, eE] = i.useState(!1),
            eS = I.Sb.useSetting(),
            eI = (0, a.e7)([T.default], () => T.default.isStreamInfoOverlayEnabled),
            [eP, eN] = i.useState(!1),
            eZ = (0, a.e7)([w.default], () => w.default.getId()),
            ew = M.type === q.fO.ACTIVITY ? null : M.user,
            eT = null != (l = null == ew ? void 0 : ew.id) ? l : null,
            [eA] = (0, g.Z)(M.type === q.fO.ACTIVITY ? [M.applicationId] : []),
            eR = (0, a.e7)([O.Z], () => O.Z.getEnabled()),
            eD = (0, a.e7)([R.Z], () => null != eT && R.Z.isLocalVideoDisabled(eT, (0, m.Z)(M.type)), [eT, M.type]),
            eL = (0, a.e7)([R.Z], () => (null != eT ? R.Z.getVideoToggleState(eT, (0, m.Z)(M.type)) : Y.ZUi.NONE), [
                eT,
                M.type,
            ]),
            eM = eL === Y.ZUi.AUTO_PROBING,
            { speaking: ek, ringing: eU, hasVideo: eG } = (0, K.Z)(M, eZ),
            eB = (0, a.e7)([S.Z], () => null !== eT && S.Z.isUserPlayingSounds(eT), [eT]),
            eF = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== q.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([L.Z], () => {
                        var e, t, r;
                        let i = L.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([R.Z], () => {
                        let n = (0, m.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: R.Z.isLocalMute(s, n),
                                  localVideoDisabled: R.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: R.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === q.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === q.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eZ, M, ea.getGuildId()),
            eV = M.type === q.fO.STREAM && eT === eZ,
            eH = (0, a.e7)([N.Z], () => (M.type === q.fO.USER && null != eT ? N.Z.getEffectForUserId(eT) : null)),
            ez = (0, a.e7)([L.Z], () => L.Z.getVoicePlatformForChannel(ea.id, null != eT ? eT : Y.lds)),
            { showGameIcon: eW } = y.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eK = (0, a.e7)(
                [D.Z],
                () =>
                    eW && null != eT
                        ? D.Z.findActivity(eT, (e) => null != e.application_id && e.type === Y.IIU.PLAYING)
                        : null,
                [eW, eT],
            ),
            eY = (0, a.e7)([A.Z], () =>
                (null == eK ? void 0 : eK.application_id) != null ? A.Z.getDetectableGame(eK.application_id) : null,
            ),
            eq = (0, a.e7)([f.Z], () =>
                null != eY && (null == eK ? void 0 : eK.application_id) != null
                    ? f.Z.getApplication(null == eK ? void 0 : eK.application_id)
                    : void 0,
            ),
            eX = (0, E.wV)({
                userId: eT,
                channelId: ea.id,
            }),
            eQ = (0, E.zU)({
                streamKey: M.type === q.fO.STREAM ? M.id : null,
                channelId: ea.id,
            }),
            eJ = i.useMemo(
                () => (M.type === q.fO.STREAM ? null != eQ && eQ : M.type === q.fO.USER && null != eX && eX),
                [eQ, eX, M.type],
            );
        i.useEffect(() => {
            eE(eg);
        }, [eg]);
        let e$ = i.useCallback(() => {
                null != eT && p.Z.toggleLocalMute(eT, Q.Yn.STREAM);
            }, [eT]),
            e0 = i.useCallback(
                (e) => {
                    null == W || W(M, e);
                },
                [W, M],
            ),
            e1 = i.useCallback(
                (e) => {
                    null == k || k(M, e);
                },
                [k, M],
            ),
            e4 = i.useCallback(
                (e, t, n) => {
                    null == U || U(M, e, t, n);
                },
                [U, M],
            ),
            e8 = null,
            e6 = null,
            e3 = "";
        switch (M.type) {
            case q.fO.STREAM:
                (e8 = (0, r.jsx)(H.Z, {
                    participant: M,
                    selected: ep,
                    width: es,
                    fit: e_,
                    onVideoResize: eu,
                    paused: ey,
                    inPopout: ec,
                    focused: eg,
                    inOverlayPopout: ej,
                })),
                    (e6 = (0, r.jsx)(H._, {
                        participant: M,
                        selected: ep,
                        width: es,
                        focused: eg,
                        idle: ex,
                        premiumIndicator: !1,
                    })),
                    (e3 = J.intl.formatToPlainString(J.t.gHPz3d, { streamerName: M.user.username }));
                break;
            case q.fO.USER:
                (e8 = (0, r.jsx)(z.Z, {
                    channel: ea,
                    inCall: ed,
                    participant: M,
                    fit: e_,
                    onVideoResize: eu,
                    paused: ey,
                    selected: ep,
                    width: es,
                    blocked: em,
                    ignored: eb,
                    noVideoRender: ef || eM,
                    pulseSpeakingIndicator: eO,
                    inOverlayPopout: ej,
                })),
                    (e6 = (0, r.jsx)(z.T, {
                        participant: M,
                        channelId: ea.id,
                    })),
                    (e3 = J.intl.formatToPlainString(J.t["iC/x/f"], { username: M.user.username }));
                break;
            case q.fO.ACTIVITY:
                (e8 = (0, r.jsx)(F.ZP, {
                    interactible: eg,
                    participant: M,
                    selected: ep,
                    channel: ea,
                    width: es,
                })),
                    (e3 = J.intl.formatToPlainString(J.t.YCvOsL, { activityName: null == eA ? void 0 : eA.name }));
                break;
            case q.fO.HIDDEN_STREAM:
                e8 = (0, r.jsx)(H.Z, {
                    participant: M,
                    selected: ep,
                    width: es,
                    fit: e_,
                    onVideoResize: eu,
                    paused: ey,
                    inPopout: ec,
                    focused: eg,
                    inOverlayPopout: ej,
                });
        }
        let e2 = i.useRef(null),
            e5 = M.type === q.fO.STREAM ? d.pzj : d.Odl;
        return (0, r.jsx)(h.Z, {
            section: Y.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()($.wrapper, { [$.ringing]: eU }, er),
                style: eo,
                onMouseEnter: () => {
                    eN(!0);
                },
                onMouseLeave: () => {
                    eN(!1);
                },
                children: (0, r.jsxs)(C.Z, {
                    shakeLocation: X.oZ.VOICE_USER,
                    isShaking: ek,
                    className: $.tile,
                    children: [
                        (0, r.jsx)(V.Z, {
                            ref: e2,
                            className: o()($.tile, {
                                [$.noBorder]: eh,
                                [$.noInteraction]: null == W,
                                [$.idle]: ex,
                            }),
                            noBorder: eh,
                            style: el,
                            participantUserId: eT,
                            children: (0, r.jsxs)(d.kL8, {
                                "aria-label": e3,
                                className: $.tileChild,
                                onDoubleClick: e1,
                                onContextMenu: (e) => e4(e, M.type === q.fO.STREAM),
                                onClick: e0,
                                onMouseDown: et,
                                onKeyDown: en,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eH && null != eT
                                        ? (0, r.jsx)(Z.Z, {
                                              voiceChannelEffect: eH,
                                              onComplete: () => (0, N.H)(eT),
                                              userId: eT,
                                          })
                                        : null,
                                    M.type === q.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: $.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(b.Z, {
                                                  userId: eT,
                                                  channelId: ea.id,
                                                  guildId: ea.getGuildId(),
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
                                    e8,
                                    eh
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: $.indicators,
                                              children: e6,
                                          }),
                                    ep
                                        ? (0, r.jsx)("div", {
                                              className: $.selectedScreen,
                                              children: (0, r.jsx)(e5, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: $.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    ee.includes(M.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ei,
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
                                                      focused: eg,
                                                      width: es,
                                                      inCall: ed,
                                                      participantType: M.type,
                                                      hasVideo: null != eG && eG,
                                                  },
                                                  eF,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ex,
                                                      platform: ez,
                                                      title: (0, G.Z)(ea, M),
                                                      blocked: em,
                                                      ignored: eb,
                                                      localVideoDisabled: eD,
                                                      videoToggleState: eL,
                                                      hideAudioIcon: eV,
                                                      onContextMenu: e4,
                                                      onToggleMute: e$,
                                                      participantUserId: eT,
                                                      participantDisplayNameStyles:
                                                          null == ew ? void 0 : ew.displayNameStyles,
                                                      application: eq,
                                                      secureFramesVerified: eJ,
                                                      isHovered: eP,
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
                                    M.type === q.fO.USER && eR
                                        ? (0, r.jsx)(v.Z, {
                                              userId: M.id,
                                              channelId: ea.id,
                                          })
                                        : null,
                                    ed && !eh
                                        ? (0, r.jsx)("div", {
                                              className: o()($.border, {
                                                  [$.voiceChannelEffect]: !eg && (eB || null != eH),
                                                  [$.speaking]: ek && !eg && !eB,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eS &&
                            eI &&
                            eP &&
                            (0, r.jsx)(B.Z, {
                                currentUserId: eZ,
                                participant: M,
                            }),
                        (0, r.jsx)(x.Z, {
                            isFiring: eC,
                            callTileRef: e2.current,
                        }),
                    ],
                }),
            }),
        });
    });
function en(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === q.fO.STREAM)
        return n === q.wR.XBOX
            ? (0, r.jsx)(U.Z, { className: i })
            : (0, r.jsx)(d.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case q.wR.MOBILE:
            return (0, r.jsx)(d.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case q.wR.XBOX:
            return (0, r.jsx)(U.Z, { className: i });
        case q.wR.PLAYSTATION:
            return (0, r.jsx)(k.Z, { className: i });
        default:
            return null;
    }
}
function er(e) {
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
            className: o()($.overlayButton, {
                [$.hideWhenInactive]: i,
                [$.compact]: a,
            }),
            innerClassName: $.overlayButtonInner,
            children: (0, r.jsx)(t, {
                size: a ? "xs" : "refresh_sm",
                color: "currentColor",
            }),
        }),
    });
}
et.displayName = "CallTile";
let ei = i.memo((e) => {
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
            participantDisplayNameStyles: y,
            platform: O,
            secureFramesVerified: v,
            onContextMenu: j,
            muted: x,
            deafened: C,
            localMuted: E,
            serverMuted: S,
            serverDeafened: I,
            hasVideo: P,
            hideAudioIcon: N,
            onToggleMute: Z,
        } = e,
        w = (0, a.e7)([R.Z], () => null != b && R.Z.isLocalVideoAutoDisabled(b, (0, m.Z)(g)), [b, g]),
        T = (0, _.j)({ displayNameStyles: y }),
        A = (0, W.N)(l),
        D = (0, W.K)(l),
        [L, k] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== M.Z.isOpen() && ((e = M.Z.isOpen()) || k(!1));
            };
        return M.Z.addChangeListener(t), () => M.Z.removeChangeListener(t);
    }, []);
    let U = !N && g === q.fO.STREAM && P && (!D || E),
        G = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? d.Vm4 : n ? d.v0G : i ? d.wE8 : t ? d.v0G : l ? d.nRN : null;
        })({
            localMuted: E,
            serverMuted: S,
            serverDeafened: I,
            deafened: C,
            muted: x,
        });
    return (0, r.jsxs)("div", {
        className: o()($.overlayContainer, { [$.compact]: D }),
        children: [
            (0, r.jsx)("div", {
                className: o()($.overlayTop, { [$.small]: l < 195 }),
                children:
                    w || p === Y.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: $.status,
                                  children: (0, r.jsx)(d.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()($.overlayTitle, $.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: $.status,
                                          children: (0, r.jsx)(d.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/normal",
                                          className: $.overlayTitleText,
                                          children: J.intl.string(J.t.m2Hyj4),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !A &&
                (0, r.jsxs)("div", {
                    className: o()($.overlayBottom, { [$.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(d.Text, {
                            className: o()($.experimentOverlayTitle, { [$.compact]: D }),
                            color: "none",
                            variant: D ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != G &&
                                    g === q.fO.USER &&
                                    (0, r.jsx)(G, {
                                        className: o()($.experimentTitleIcon, { [$.compact]: D }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: $.blocked,
                                          children: (0, r.jsx)(d.t6m, {
                                              size: "lg",
                                              className: $.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                f
                                    ? (0, r.jsx)("div", {
                                          className: $.ignored,
                                          children: (0, r.jsx)(d.kZF, {
                                              size: "lg",
                                              className: $.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(en, {
                                          participantType: g,
                                          platform: O,
                                          className: o()($.experimentTitleIcon, { [$.compact]: D }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()($.overlayTitleText, T),
                                          children: n,
                                      }),
                                v &&
                                    (0, r.jsx)(c.u, {
                                        text: J.intl.string(J.t.ZEem6O),
                                        children: (0, r.jsx)(d.tQf, {
                                            className: $.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": J.intl.string(J.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !u &&
                            (0, r.jsxs)("div", {
                                className: $.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(er, {
                                        onClick: (e) => {
                                            e.stopPropagation(), k(!0), j(e, !0, q.A5.THREE_DOT);
                                        },
                                        tooltipText: J.intl.string(J.t["+1H47u"]),
                                        icon: d.xhG,
                                        hideWhenInactive: !L,
                                        compact: D,
                                    }),
                                    U &&
                                        (0, r.jsx)(er, {
                                            onClick: Z,
                                            tooltipText: E ? J.intl.string(J.t.YqAjX1) : J.intl.string(J.t["w4m94+"]),
                                            icon: E ? d.OyP : d.gj8,
                                            hideWhenInactive: !E && !L,
                                            compact: D,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
ei.displayName = "CallTileOverlay";
let el = j.L,
    eo = et;
