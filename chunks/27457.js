n.d(t, {
    BP: () => er,
    ZP: () => ei,
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
    m = n(415635),
    b = n(386725),
    _ = n(7284),
    O = n(649739),
    y = n(352978),
    v = n(936847),
    j = n(512384),
    x = n(210975),
    C = n(763296),
    E = n(695346),
    S = n(937995),
    I = n(456631),
    P = n(274459),
    N = n(314897),
    Z = n(857192),
    w = n(77498),
    T = n(131951),
    A = n(158776),
    R = n(979651),
    D = n(574254),
    L = n(374129),
    M = n(639351),
    k = n(584729),
    G = n(334374),
    U = n(849171),
    B = n(607187),
    F = n(833519),
    V = n(462061),
    H = n(623825),
    z = n(839662),
    W = n(981631),
    K = n(354459),
    Y = n(524484),
    q = n(65154),
    X = n(388032),
    Q = n(7504);
let J = [K.fO.ACTIVITY],
    $ = i.memo((e) => {
        var t, n, l, s, c, b, _;
        let {
                participant: D,
                onDoubleClick: L,
                onContextMenu: M,
                onClick: H,
                onMouseDown: $,
                onKeyDown: ee,
                className: et,
                style: er,
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
                fit: em = y.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eO = !1,
                inOverlayPopout: ey = !1,
            } = e,
            ev = i.useContext(S.h9) || eO,
            [ej, ex] = i.useState(!1),
            eC = E.Sb.useSetting(),
            eE = (0, a.e7)([Z.default], () => Z.default.isStreamInfoOverlayEnabled),
            [eS, eI] = i.useState(!1),
            eP = (0, a.e7)([N.default], () => N.default.getId()),
            eN = D.type === K.fO.ACTIVITY ? null : D.user,
            eZ = null != (l = null == eN ? void 0 : eN.id) ? l : null,
            [ew] = (0, f.Z)(D.type === K.fO.ACTIVITY ? [D.applicationId] : []),
            eT = (0, a.e7)([T.Z], () => null != eZ && T.Z.isLocalVideoDisabled(eZ, (0, g.Z)(D.type)), [eZ, D.type]),
            eA = (0, a.e7)([T.Z], () => (null != eZ ? T.Z.getVideoToggleState(eZ, (0, g.Z)(D.type)) : W.ZUi.NONE), [
                eZ,
                D.type,
            ]),
            eR = eA === W.ZUi.AUTO_PROBING,
            { speaking: eD, ringing: eL, hasVideo: eM } = (0, z.Z)(D, eP),
            ek = (0, a.e7)([C.Z], () => null !== eZ && C.Z.isUserPlayingSounds(eZ), [eZ]),
            eG = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([R.Z], () => {
                        var e, t, r;
                        let i = R.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([T.Z], () => {
                        let n = (0, g.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: T.Z.isLocalMute(s, n),
                                  localVideoDisabled: T.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: T.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === K.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened:
                        null !=
                            (o = t.type === K.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eP, D, el.getGuildId()),
            eU = D.type === K.fO.STREAM && eZ === eP,
            eB = (0, a.e7)([I.Z], () => (D.type === K.fO.USER && null != eZ ? I.Z.getEffectForUserId(eZ) : null)),
            eF = (0, a.e7)([R.Z], () => R.Z.getVoicePlatformForChannel(el.id, null != eZ ? eZ : W.lds)),
            { showGameIcon: eV } = O.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eH = (0, a.e7)(
                [A.Z],
                () =>
                    eV && null != eZ
                        ? A.Z.findActivity(eZ, (e) => null != e.application_id && e.type === W.IIU.PLAYING)
                        : null,
                [eV, eZ],
            ),
            ez = (0, a.e7)([w.Z], () =>
                (null == eH ? void 0 : eH.application_id) != null ? w.Z.getDetectableGame(eH.application_id) : null,
            ),
            eW = (0, a.e7)([h.Z], () =>
                null != ez && (null == eH ? void 0 : eH.application_id) != null
                    ? h.Z.getApplication(null == eH ? void 0 : eH.application_id)
                    : void 0,
            ),
            eK = (0, x.wV)({
                userId: eZ,
                channelId: el.id,
            }),
            eY = (0, x.zU)({
                streamKey: D.type === K.fO.STREAM ? D.id : null,
                channelId: el.id,
            }),
            eq = i.useMemo(
                () => (D.type === K.fO.STREAM ? null != eY && eY : D.type === K.fO.USER && null != eK && eK),
                [eY, eK, D.type],
            );
        i.useEffect(() => {
            ex(eh);
        }, [eh]);
        let eX = i.useCallback(() => {
                null != eZ && d.Z.toggleLocalMute(eZ, q.Yn.STREAM);
            }, [eZ]),
            eQ = i.useCallback(
                (e) => {
                    null == H || H(D, e);
                },
                [H, D],
            ),
            eJ = i.useCallback(
                (e) => {
                    null == L || L(D, e);
                },
                [L, D],
            ),
            e$ = i.useCallback(
                (e, t, n) => {
                    null == M || M(D, e, t, n);
                },
                [M, D],
            ),
            e0 = null,
            e1 = null,
            e4 = "";
        switch (D.type) {
            case K.fO.STREAM:
                (e0 = (0, r.jsx)(F.Z, {
                    participant: D,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: ey,
                })),
                    (e1 = (0, r.jsx)(F._, {
                        participant: D,
                        selected: eu,
                        width: eo,
                        focused: eh,
                        idle: ev,
                        premiumIndicator: !1,
                    })),
                    (e4 = X.intl.formatToPlainString(X.t.gHPz3Q, { streamerName: D.user.username }));
                break;
            case K.fO.USER:
                (e0 = (0, r.jsx)(V.Z, {
                    channel: el,
                    inCall: ec,
                    participant: D,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    selected: eu,
                    width: eo,
                    blocked: ef,
                    ignored: eg,
                    noVideoRender: ep || eR,
                    pulseSpeakingIndicator: e_,
                    inOverlayPopout: ey,
                })),
                    (e1 = (0, r.jsx)(V.T, {
                        participant: D,
                        channelId: el.id,
                    })),
                    (e4 = X.intl.formatToPlainString(X.t["iC/x/Q"], { username: D.user.username }));
                break;
            case K.fO.ACTIVITY:
                (e0 = (0, r.jsx)(U.ZP, {
                    interactible: eh,
                    participant: D,
                    selected: eu,
                    channel: el,
                    width: eo,
                })),
                    (e4 = X.intl.formatToPlainString(X.t.YCvOsO, { activityName: null == ew ? void 0 : ew.name }));
                break;
            case K.fO.HIDDEN_STREAM:
                e0 = (0, r.jsx)(F.Z, {
                    participant: D,
                    selected: eu,
                    width: eo,
                    fit: em,
                    onVideoResize: es,
                    paused: eb,
                    inPopout: ea,
                    focused: eh,
                    inOverlayPopout: ey,
                });
        }
        let e8 = i.useRef(null),
            e6 = D.type === K.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(p.Z, {
            section: W.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(Q.wrapper, { [Q.ringing]: eL }, et),
                style: ei,
                onMouseEnter: () => {
                    eI(!0);
                },
                onMouseLeave: () => {
                    eI(!1);
                },
                children: (0, r.jsxs)(j.Z, {
                    shakeLocation: Y.oZ.VOICE_USER,
                    isShaking: eD,
                    className: Q.tile,
                    children: [
                        (0, r.jsx)(B.Z, {
                            ref: e8,
                            className: o()(Q.tile, {
                                [Q.noBorder]: ed,
                                [Q.noInteraction]: null == H,
                                [Q.idle]: ev,
                            }),
                            noBorder: ed,
                            style: er,
                            participantUserId: eZ,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e4,
                                className: Q.tileChild,
                                onDoubleClick: eJ,
                                onContextMenu: (e) => e$(e, D.type === K.fO.STREAM),
                                onClick: eQ,
                                onMouseDown: $,
                                onKeyDown: ee,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eB && null != eZ
                                        ? (0, r.jsx)(P.Z, {
                                              voiceChannelEffect: eB,
                                              onComplete: () => (0, I.H)(eZ),
                                              userId: eZ,
                                          })
                                        : null,
                                    D.type === K.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: Q.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
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
                                              className: Q.indicators,
                                              children: e1,
                                          }),
                                    eu
                                        ? (0, r.jsx)("div", {
                                              className: Q.selectedScreen,
                                              children: (0, r.jsx)(e6, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: Q.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    J.includes(D.type)
                                        ? null
                                        : (0, r.jsx)(
                                              en,
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
                                                      width: eo,
                                                      inCall: ec,
                                                      participantType: D.type,
                                                      hasVideo: null != eM && eM,
                                                  },
                                                  eG,
                                              )),
                                              (_ = _ =
                                                  {
                                                      idle: ev,
                                                      platform: eF,
                                                      title: (0, k.Z)(el, D),
                                                      blocked: ef,
                                                      ignored: eg,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: eA,
                                                      hideAudioIcon: eU,
                                                      onContextMenu: e$,
                                                      onToggleMute: eX,
                                                      participantUserId: eZ,
                                                      channel: el,
                                                      application: eW,
                                                      secureFramesVerified: eq,
                                                      isHovered: eS,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(_))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(_)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            b,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(_, e),
                                                        );
                                                    }),
                                              b),
                                          ),
                                    ec && !ed
                                        ? (0, r.jsx)("div", {
                                              className: o()(Q.border, {
                                                  [Q.voiceChannelEffect]: !eh && (ek || null != eB),
                                                  [Q.speaking]: eD && !eh && !ek,
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
                                participant: D,
                            }),
                        (0, r.jsx)(v.Z, {
                            isFiring: ej,
                            callTileRef: e8.current,
                        }),
                    ],
                }),
            }),
        });
    });
function ee(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === K.fO.STREAM)
        return n === K.wR.XBOX
            ? (0, r.jsx)(M.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case K.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case K.wR.XBOX:
            return (0, r.jsx)(M.Z, { className: i });
        case K.wR.PLAYSTATION:
            return (0, r.jsx)(L.Z, { className: i });
        default:
            return null;
    }
}
function et(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(Q.overlayButton, { [Q.hideWhenInactive]: i }),
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
$.displayName = "CallTile";
let en = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: p,
            blocked: h,
            ignored: f,
            participantType: m,
            participantUserId: O,
            channel: y,
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
        A = (0, a.e7)([T.Z], () => null != O && T.Z.isLocalVideoAutoDisabled(O, (0, g.Z)(m)), [O, m]),
        R = (0, b.Z)({
            userId: O,
            guildId: y.getGuildId(),
        }),
        L = (0, _.j)({ displayNameStyles: R }),
        M = (0, H.N)(l),
        k = (0, H.K)(l),
        [G, U] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== D.Z.isOpen() && ((e = D.Z.isOpen()) || U(!1));
            };
        return D.Z.addChangeListener(t), () => D.Z.removeChangeListener(t);
    }, []);
    let B = !Z && m === K.fO.STREAM && N && (!k || S),
        F = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: S,
            serverMuted: I,
            serverDeafened: P,
            deafened: E,
            muted: C,
        });
    return (0, r.jsxs)("div", {
        className: o()(Q.overlayContainer, { [Q.compact]: k }),
        children: [
            (0, r.jsx)("div", {
                className: o()(Q.overlayTop, { [Q.small]: l < 195 }),
                children:
                    A || p === W.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: Q.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(Q.overlayTitle, Q.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: Q.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: Q.overlayTitleText,
                                          children: X.intl.string(X.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !M &&
                (0, r.jsxs)("div", {
                    className: o()(Q.overlayBottom, { [Q.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: Q.experimentOverlayTitle,
                            color: "none",
                            variant: k ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != F &&
                                    m === K.fO.USER &&
                                    (0, r.jsx)(F, {
                                        className: o()(Q.experimentTitleIcon, { [Q.compact]: k }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                h
                                    ? (0, r.jsx)("div", {
                                          className: Q.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: Q.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                f
                                    ? (0, r.jsx)("div", {
                                          className: Q.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: Q.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(ee, {
                                          participantType: m,
                                          platform: v,
                                          className: o()(Q.experimentTitleIcon, { [Q.compact]: k }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(Q.overlayTitleText, L),
                                          children: n,
                                      }),
                                j &&
                                    (0, r.jsx)(c.u, {
                                        text: X.intl.string(X.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: Q.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": X.intl.string(X.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        !d &&
                            (0, r.jsxs)("div", {
                                className: Q.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(et, {
                                        onClick: (e) => {
                                            e.stopPropagation(), U(!0), x(e, !0, K.A5.THREE_DOT);
                                        },
                                        tooltipText: X.intl.string(X.t["+1H47t"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !G,
                                    }),
                                    B &&
                                        (0, r.jsx)(et, {
                                            onClick: w,
                                            tooltipText: S ? X.intl.string(X.t.YqAjXy) : X.intl.string(X.t.w4m945),
                                            icon: S ? u.OyP : u.gj8,
                                            hideWhenInactive: !S && !G,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
en.displayName = "CallTileOverlay";
let er = y.L,
    ei = $;
