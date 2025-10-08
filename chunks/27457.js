n.d(t, {
    BP: () => eo,
    ZP: () => ea,
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
    v = n(37091),
    j = n(6572),
    x = n(352978),
    C = n(936847),
    E = n(512384),
    S = n(210975),
    I = n(763296),
    P = n(695346),
    N = n(937995),
    Z = n(456631),
    w = n(274459),
    T = n(314897),
    A = n(857192),
    R = n(77498),
    D = n(131951),
    L = n(158776),
    M = n(979651),
    k = n(574254),
    U = n(374129),
    G = n(639351),
    B = n(584729),
    F = n(334374),
    V = n(849171),
    H = n(607187),
    z = n(833519),
    W = n(462061),
    K = n(623825),
    Y = n(839662),
    q = n(981631),
    X = n(354459),
    Q = n(524484),
    J = n(65154),
    $ = n(388032),
    ee = n(400872);
let et = [X.fO.ACTIVITY],
    en = i.memo((e) => {
        var t, n, l, s, c, u, _;
        let {
                participant: y,
                onDoubleClick: k,
                onContextMenu: U,
                onClick: G,
                onMouseDown: K,
                onKeyDown: en,
                className: er,
                style: ei,
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
                fit: e_ = x.L.CONTAIN,
                paused: ey = !1,
                pulseSpeakingIndicator: eO = !1,
                forceIdle: ev = !1,
                inOverlayPopout: ej = !1,
            } = e,
            ex = i.useContext(N.h9) || ev,
            [eC, eE] = i.useState(!1),
            eS = P.Sb.useSetting(),
            eI = (0, a.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled),
            [eP, eN] = i.useState(!1),
            eZ = (0, a.e7)([T.default], () => T.default.getId()),
            ew = y.type === X.fO.ACTIVITY ? null : y.user,
            eT = null != (l = null == ew ? void 0 : ew.id) ? l : null,
            [eA] = (0, g.Z)(y.type === X.fO.ACTIVITY ? [y.applicationId] : []),
            eR = (0, a.e7)([v.Z], () => v.Z.getEnabled()),
            eD = (0, a.e7)([D.Z], () => null != eT && D.Z.isLocalVideoDisabled(eT, (0, m.Z)(y.type)), [eT, y.type]),
            eL = (0, a.e7)([D.Z], () => (null != eT ? D.Z.getVideoToggleState(eT, (0, m.Z)(y.type)) : q.ZUi.NONE), [
                eT,
                y.type,
            ]),
            eM = eL === q.ZUi.AUTO_PROBING,
            { speaking: ek, ringing: eU, hasVideo: eG } = (0, Y.Z)(y, eZ),
            eB = (0, a.e7)([I.Z], () => null !== eT && I.Z.isUserPlayingSounds(eT), [eT]),
            eF = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== X.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([M.Z], () => {
                        var e, t, r;
                        let i = M.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([D.Z], () => {
                        let n = (0, m.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: D.Z.isLocalMute(s, n),
                                  localVideoDisabled: D.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === X.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === X.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eZ, y, ea.getGuildId()),
            eV = y.type === X.fO.STREAM && eT === eZ,
            eH = (0, a.e7)([Z.Z], () => (y.type === X.fO.USER && null != eT ? Z.Z.getEffectForUserId(eT) : null)),
            ez = (0, a.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ea.id, null != eT ? eT : q.lds)),
            { showGameIcon: eW } = O.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eK = (0, a.e7)(
                [L.Z],
                () =>
                    eW && null != eT
                        ? L.Z.findActivity(eT, (e) => null != e.application_id && e.type === q.IIU.PLAYING)
                        : null,
                [eW, eT],
            ),
            eY = (0, a.e7)([R.Z], () =>
                (null == eK ? void 0 : eK.application_id) != null ? R.Z.getDetectableGame(eK.application_id) : null,
            ),
            eq = (0, a.e7)([f.Z], () =>
                null != eY && (null == eK ? void 0 : eK.application_id) != null
                    ? f.Z.getApplication(null == eK ? void 0 : eK.application_id)
                    : void 0,
            ),
            eX = (0, S.wV)({
                userId: eT,
                channelId: ea.id,
            }),
            eQ = (0, S.zU)({
                streamKey: y.type === X.fO.STREAM ? y.id : null,
                channelId: ea.id,
            }),
            eJ = i.useMemo(
                () => (y.type === X.fO.STREAM ? null != eQ && eQ : y.type === X.fO.USER && null != eX && eX),
                [eQ, eX, y.type],
            );
        i.useEffect(() => {
            eE(eg);
        }, [eg]);
        let e$ = i.useCallback(() => {
                null != eT && p.Z.toggleLocalMute(eT, J.Yn.STREAM);
            }, [eT]),
            e0 = i.useCallback(
                (e) => {
                    null == G || G(y, e);
                },
                [G, y],
            ),
            e1 = i.useCallback(
                (e) => {
                    null == k || k(y, e);
                },
                [k, y],
            ),
            e4 = i.useCallback(
                (e, t, n) => {
                    null == U || U(y, e, t, n);
                },
                [U, y],
            ),
            e8 = null,
            e6 = null,
            e3 = "";
        switch (y.type) {
            case X.fO.STREAM:
                (e8 = (0, r.jsx)(z.Z, {
                    participant: y,
                    selected: ep,
                    width: es,
                    fit: e_,
                    onVideoResize: eu,
                    paused: ey,
                    inPopout: ec,
                    focused: eg,
                    inOverlayPopout: ej,
                })),
                    (e6 = (0, r.jsx)(z._, {
                        participant: y,
                        selected: ep,
                        width: es,
                        focused: eg,
                        idle: ex,
                        premiumIndicator: !1,
                    })),
                    (e3 = $.intl.formatToPlainString($.t.gHPz3d, { streamerName: y.user.username }));
                break;
            case X.fO.USER:
                (e8 = (0, r.jsx)(W.Z, {
                    channel: ea,
                    inCall: ed,
                    participant: y,
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
                    (e6 = (0, r.jsx)(W.T, {
                        participant: y,
                        channelId: ea.id,
                    })),
                    (e3 = $.intl.formatToPlainString($.t["iC/x/f"], { username: y.user.username }));
                break;
            case X.fO.ACTIVITY:
                (e8 = (0, r.jsx)(V.ZP, {
                    interactible: eg,
                    participant: y,
                    selected: ep,
                    channel: ea,
                    width: es,
                })),
                    (e3 = $.intl.formatToPlainString($.t.YCvOsL, { activityName: null == eA ? void 0 : eA.name }));
                break;
            case X.fO.HIDDEN_STREAM:
                e8 = (0, r.jsx)(z.Z, {
                    participant: y,
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
            e5 = y.type === X.fO.STREAM ? d.pzj : d.Odl;
        return (0, r.jsx)(h.Z, {
            section: q.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(ee.wrapper, { [ee.ringing]: eU }, er),
                style: eo,
                onMouseEnter: () => {
                    eN(!0);
                },
                onMouseLeave: () => {
                    eN(!1);
                },
                children: (0, r.jsxs)(E.Z, {
                    shakeLocation: Q.oZ.VOICE_USER,
                    isShaking: ek,
                    className: ee.tile,
                    children: [
                        (0, r.jsx)(H.Z, {
                            ref: e2,
                            className: o()(ee.tile, {
                                [ee.noBorder]: eh,
                                [ee.noInteraction]: null == G,
                                [ee.idle]: ex,
                            }),
                            noBorder: eh,
                            style: ei,
                            participantUserId: eT,
                            children: (0, r.jsxs)(d.kL8, {
                                "aria-label": e3,
                                className: ee.tileChild,
                                onDoubleClick: e1,
                                onContextMenu: (e) => e4(e, y.type === X.fO.STREAM),
                                onClick: e0,
                                onMouseDown: K,
                                onKeyDown: en,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eH && null != eT
                                        ? (0, r.jsx)(w.Z, {
                                              voiceChannelEffect: eH,
                                              onComplete: () => (0, Z.H)(eT),
                                              userId: eT,
                                          })
                                        : null,
                                    y.type === X.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: ee.voiceChannelEffectsContainer,
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
                                              className: ee.indicators,
                                              children: e6,
                                          }),
                                    ep
                                        ? (0, r.jsx)("div", {
                                              className: ee.selectedScreen,
                                              children: (0, r.jsx)(e5, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: ee.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    et.includes(y.type)
                                        ? null
                                        : (0, r.jsx)(
                                              el,
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
                                                      participantType: y.type,
                                                      hasVideo: null != eG && eG,
                                                  },
                                                  eF,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ex,
                                                      platform: ez,
                                                      title: (0, B.Z)(ea, y),
                                                      blocked: em,
                                                      ignored: eb,
                                                      localVideoDisabled: eD,
                                                      videoToggleState: eL,
                                                      hideAudioIcon: eV,
                                                      onContextMenu: e4,
                                                      onToggleMute: e$,
                                                      participantUserId: eT,
                                                      channel: ea,
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
                                    y.type === X.fO.USER && eR
                                        ? (0, r.jsx)(j.Z, {
                                              userId: y.id,
                                              channelId: ea.id,
                                          })
                                        : null,
                                    ed && !eh
                                        ? (0, r.jsx)("div", {
                                              className: o()(ee.border, {
                                                  [ee.voiceChannelEffect]: !eg && (eB || null != eH),
                                                  [ee.speaking]: ek && !eg && !eB,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eS &&
                            eI &&
                            eP &&
                            (0, r.jsx)(F.Z, {
                                currentUserId: eZ,
                                participant: y,
                            }),
                        (0, r.jsx)(C.Z, {
                            isFiring: eC,
                            callTileRef: e2.current,
                        }),
                    ],
                }),
            }),
        });
    });
function er(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === X.fO.STREAM)
        return n === X.wR.XBOX
            ? (0, r.jsx)(G.Z, { className: i })
            : (0, r.jsx)(d.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case X.wR.MOBILE:
            return (0, r.jsx)(d.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case X.wR.XBOX:
            return (0, r.jsx)(G.Z, { className: i });
        case X.wR.PLAYSTATION:
            return (0, r.jsx)(U.Z, { className: i });
        default:
            return null;
    }
}
function ei(e) {
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
            className: o()(ee.overlayButton, {
                [ee.hideWhenInactive]: i,
                [ee.compact]: a,
            }),
            innerClassName: ee.overlayButtonInner,
            children: (0, r.jsx)(t, {
                size: a ? "xs" : "refresh_sm",
                color: "currentColor",
            }),
        }),
    });
}
en.displayName = "CallTile";
let el = i.memo((e) => {
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
        T = (0, a.e7)([D.Z], () => null != b && D.Z.isLocalVideoAutoDisabled(b, (0, m.Z)(g)), [b, g]),
        A = (0, _.Z)({
            userId: b,
            guildId: O.getGuildId(),
        }),
        R = (0, y.j)({ displayNameStyles: A }),
        L = (0, K.N)(l),
        M = (0, K.K)(l),
        [U, G] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || G(!1));
            };
        return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t);
    }, []);
    let B = !Z && g === X.fO.STREAM && N && (!M || S),
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
        className: o()(ee.overlayContainer, { [ee.compact]: M }),
        children: [
            (0, r.jsx)("div", {
                className: o()(ee.overlayTop, { [ee.small]: l < 195 }),
                children:
                    T || p === q.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: ee.status,
                                  children: (0, r.jsx)(d.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(ee.overlayTitle, ee.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ee.status,
                                          children: (0, r.jsx)(d.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/normal",
                                          className: ee.overlayTitleText,
                                          children: $.intl.string($.t.m2Hyj4),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !L &&
                (0, r.jsxs)("div", {
                    className: o()(ee.overlayBottom, { [ee.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(d.Text, {
                            className: o()(ee.experimentOverlayTitle, { [ee.compact]: M }),
                            color: "none",
                            variant: M ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != F &&
                                    g === X.fO.USER &&
                                    (0, r.jsx)(F, {
                                        className: o()(ee.experimentTitleIcon, { [ee.compact]: M }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: ee.blocked,
                                          children: (0, r.jsx)(d.t6m, {
                                              size: "lg",
                                              className: ee.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                f
                                    ? (0, r.jsx)("div", {
                                          className: ee.ignored,
                                          children: (0, r.jsx)(d.kZF, {
                                              size: "lg",
                                              className: ee.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(er, {
                                          participantType: g,
                                          platform: v,
                                          className: o()(ee.experimentTitleIcon, { [ee.compact]: M }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(ee.overlayTitleText, R),
                                          children: n,
                                      }),
                                j &&
                                    (0, r.jsx)(c.u, {
                                        text: $.intl.string($.t.ZEem6O),
                                        children: (0, r.jsx)(d.tQf, {
                                            className: ee.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": $.intl.string($.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !u &&
                            (0, r.jsxs)("div", {
                                className: ee.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ei, {
                                        onClick: (e) => {
                                            e.stopPropagation(), G(!0), x(e, !0, X.A5.THREE_DOT);
                                        },
                                        tooltipText: $.intl.string($.t["+1H47u"]),
                                        icon: d.xhG,
                                        hideWhenInactive: !U,
                                        compact: M,
                                    }),
                                    B &&
                                        (0, r.jsx)(ei, {
                                            onClick: w,
                                            tooltipText: S ? $.intl.string($.t.YqAjX1) : $.intl.string($.t["w4m94+"]),
                                            icon: S ? d.OyP : d.gj8,
                                            hideWhenInactive: !S && !U,
                                            compact: M,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
el.displayName = "CallTileOverlay";
let eo = x.L,
    ea = en;
