n.d(t, {
    BP: () => eh,
    ZP: () => eg,
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
    f = n(872810),
    h = n(410575),
    g = n(812206),
    m = n(835473),
    b = n(629049),
    _ = n(358221),
    O = n(414910),
    y = n(598006),
    v = n(415635),
    j = n(7291),
    C = n(386725),
    E = n(7284),
    x = n(649739),
    S = n(352978),
    I = n(936847),
    P = n(512384),
    N = n(522474),
    Z = n(788983),
    T = n(210975),
    w = n(763296),
    A = n(695346),
    R = n(937995),
    D = n(456631),
    L = n(274459),
    M = n(314897),
    k = n(857192),
    G = n(77498),
    U = n(131951),
    B = n(158776),
    F = n(979651),
    V = n(574254),
    H = n(374129),
    z = n(639351),
    W = n(358085),
    K = n(998502),
    Y = n(584729),
    q = n(334374),
    X = n(849171),
    Q = n(607187),
    J = n(833519),
    $ = n(462061),
    ee = n(623825),
    et = n(839662),
    en = n(981631),
    er = n(354459),
    ei = n(524484),
    el = n(65154),
    eo = n(388032),
    ea = n(400872);
let es = [er.fO.ACTIVITY],
    ec = i.memo((e) => {
        var t, n, l, s, c, p, f;
        let {
                participant: b,
                popoutType: _,
                onDoubleClick: y,
                onContextMenu: j,
                onClick: C,
                onMouseDown: E,
                onKeyDown: N,
                className: Z,
                style: V,
                containerStyle: H,
                channel: z,
                width: W,
                onVideoResize: K,
                inCall: ee = !1,
                selected: ec = !1,
                noBorder: eu = !1,
                noVideoRender: ed = !1,
                focused: ep = !1,
                blocked: eh = !1,
                ignored: eg = !1,
                fit: em = S.L.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eO = !1,
            } = e,
            ey = i.useContext(R.h9) || eO,
            [ev, ej] = i.useState(!1),
            eC = A.Sb.useSetting(),
            eE = (0, a.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled),
            [ex, eS] = i.useState(!1),
            eI = (0, a.e7)([M.default], () => M.default.getId()),
            eP = b.type === er.fO.ACTIVITY ? null : b.user,
            eN = null != (l = null == eP ? void 0 : eP.id) ? l : null,
            [eZ] = (0, m.Z)(b.type === er.fO.ACTIVITY ? [b.applicationId] : []),
            eT = (0, a.e7)([U.Z], () => null != eN && U.Z.isLocalVideoDisabled(eN, (0, O.Z)(b.type)), [eN, b.type]),
            ew = (0, a.e7)([U.Z], () => (null != eN ? U.Z.getVideoToggleState(eN, (0, O.Z)(b.type)) : en.ZUi.NONE), [
                eN,
                b.type,
            ]),
            eA = ew === en.ZUi.AUTO_PROBING,
            { speaking: eR, ringing: eD, hasVideo: eL } = (0, et.Z)(b, eI),
            eM = (0, a.e7)([w.Z], () => null !== eN && w.Z.isUserPlayingSounds(eN), [eN]),
            ek = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== er.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([F.Z], () => {
                        var e, t, r;
                        let i = F.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId,
                        };
                    }),
                    u = (0, a.cj)([U.Z], () => {
                        let n = (0, O.Z)(t.type);
                        return e === s
                            ? {
                                  muted: !1,
                                  deafened: !1,
                              }
                            : {
                                  muted: U.Z.isLocalMute(s, n),
                                  localVideoDisabled: U.Z.isLocalVideoDisabled(s, n),
                                  localVideoAutoDisabled: U.Z.isLocalVideoAutoDisabled(s, n),
                              };
                    }, [e, t.type, s]);
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted:
                        null !=
                            (l = t.type === er.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) &&
                        l,
                    deafened:
                        null !=
                            (o =
                                t.type === er.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) &&
                        o,
                };
            })(eI, b, z.getGuildId()),
            eG = b.type === er.fO.STREAM && eN === eI,
            eU = (0, a.e7)([D.Z], () => (b.type === er.fO.USER && null != eN ? D.Z.getEffectForUserId(eN) : null)),
            eB = (0, a.e7)([F.Z], () => F.Z.getVoicePlatformForChannel(z.id, null != eN ? eN : en.lds)),
            { showGameIcon: eF } = x.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eV = (0, a.e7)(
                [B.Z],
                () =>
                    eF && null != eN
                        ? B.Z.findActivity(eN, (e) => null != e.application_id && e.type === en.IIU.PLAYING)
                        : null,
                [eF, eN],
            ),
            eH = (0, a.e7)([G.Z], () =>
                (null == eV ? void 0 : eV.application_id) != null ? G.Z.getDetectableGame(eV.application_id) : null,
            ),
            ez = (0, a.e7)([g.Z], () =>
                null != eH && (null == eV ? void 0 : eV.application_id) != null
                    ? g.Z.getApplication(null == eV ? void 0 : eV.application_id)
                    : void 0,
            ),
            eW = (0, T.wV)({
                userId: eN,
                channelId: z.id,
            }),
            eK = (0, T.zU)({
                streamKey: b.type === er.fO.STREAM ? b.id : null,
                channelId: z.id,
            }),
            eY = i.useMemo(
                () => (b.type === er.fO.STREAM ? null != eK && eK : b.type === er.fO.USER && null != eW && eW),
                [eK, eW, b.type],
            );
        i.useEffect(() => {
            ej(ep);
        }, [ep]);
        let eq = i.useCallback(() => {
                null != eN && d.Z.toggleLocalMute(eN, el.Yn.STREAM);
            }, [eN]),
            eX = i.useCallback(
                (e) => {
                    null == C || C(b, e);
                },
                [C, b],
            ),
            eQ = i.useCallback(
                (e) => {
                    null == y || y(b, e);
                },
                [y, b],
            ),
            eJ = i.useCallback(
                (e, t, n) => {
                    null == j || j(b, e, t, n);
                },
                [j, b],
            ),
            e$ = null,
            e0 = null,
            e1 = "";
        switch (b.type) {
            case er.fO.STREAM:
                (e$ = (0, r.jsx)(J.Z, {
                    participant: b,
                    selected: ec,
                    popoutType: _,
                    width: W,
                    fit: em,
                    onVideoResize: K,
                    paused: eb,
                    focused: ep,
                })),
                    (e0 = (0, r.jsx)(J._, {
                        participant: b,
                        selected: ec,
                        width: W,
                        focused: ep,
                        idle: ey,
                        premiumIndicator: !1,
                    })),
                    (e1 = eo.intl.formatToPlainString(eo.t.gHPz3Q, { streamerName: b.user.username }));
                break;
            case er.fO.USER:
                (e$ = (0, r.jsx)($.Z, {
                    channel: z,
                    inCall: ee,
                    participant: b,
                    popoutType: _,
                    fit: em,
                    onVideoResize: K,
                    paused: eb,
                    selected: ec,
                    width: W,
                    blocked: eh,
                    ignored: eg,
                    noVideoRender: ed || eA,
                    pulseSpeakingIndicator: e_,
                })),
                    (e0 = (0, r.jsx)($.T, {
                        participant: b,
                        channelId: z.id,
                    })),
                    (e1 = eo.intl.formatToPlainString(eo.t["iC/x/Q"], { username: b.user.username }));
                break;
            case er.fO.ACTIVITY:
                (e$ = (0, r.jsx)(X.ZP, {
                    interactible: ep,
                    participant: b,
                    selected: ec,
                    channel: z,
                    width: W,
                })),
                    (e1 = eo.intl.formatToPlainString(eo.t.YCvOsO, { activityName: null == eZ ? void 0 : eZ.name }));
                break;
            case er.fO.HIDDEN_STREAM:
                e$ = (0, r.jsx)(J.Z, {
                    participant: b,
                    selected: ec,
                    width: W,
                    fit: em,
                    onVideoResize: K,
                    paused: eb,
                    popoutType: _,
                    focused: ep,
                });
        }
        let e4 = i.useRef(null),
            e8 = b.type === er.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: en.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(ea.wrapper, { [ea.ringing]: eD }, Z),
                style: H,
                onMouseEnter: () => {
                    eS(!0);
                },
                onMouseLeave: () => {
                    eS(!1);
                },
                children: (0, r.jsxs)(P.Z, {
                    shakeLocation: ei.oZ.VOICE_USER,
                    isShaking: eR,
                    className: ea.tile,
                    children: [
                        (0, r.jsx)(Q.Z, {
                            ref: e4,
                            className: o()(ea.tile, {
                                [ea.noBorder]: eu,
                                [ea.noInteraction]: null == C,
                                [ea.idle]: ey,
                            }),
                            noBorder: eu,
                            style: V,
                            participantUserId: eN,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e1,
                                className: ea.tileChild,
                                onDoubleClick: eQ,
                                onContextMenu: (e) => eJ(e, b.type === er.fO.STREAM),
                                onClick: eX,
                                onMouseDown: E,
                                onKeyDown: N,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eU && null != eN
                                        ? (0, r.jsx)(L.Z, {
                                              voiceChannelEffect: eU,
                                              onComplete: () => (0, D.H)(eN),
                                              userId: eN,
                                          })
                                        : null,
                                    b.type === er.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: ea.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(v.Z, {
                                                  userId: eN,
                                                  channelId: z.id,
                                                  guildId: z.getGuildId(),
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
                                    eu
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: ea.indicators,
                                              children: e0,
                                          }),
                                    ec
                                        ? (0, r.jsx)("div", {
                                              className: ea.selectedScreen,
                                              children: (0, r.jsx)(e8, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: ea.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    es.includes(b.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ef,
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
                                                      focused: ep,
                                                      width: W,
                                                      inCall: ee,
                                                      participantId: b.id,
                                                      participantType: b.type,
                                                      hasVideo: null != eL && eL,
                                                  },
                                                  ek,
                                              )),
                                              (f = f =
                                                  {
                                                      idle: ey,
                                                      platform: eB,
                                                      title: (0, Y.Z)(z, b),
                                                      blocked: eh,
                                                      ignored: eg,
                                                      localVideoDisabled: eT,
                                                      videoToggleState: ew,
                                                      hideAudioIcon: eG,
                                                      onContextMenu: eJ,
                                                      onToggleMute: eq,
                                                      participantUserId: eN,
                                                      channel: z,
                                                      application: ez,
                                                      secureFramesVerified: eY,
                                                      isHovered: ex,
                                                      popoutType: _,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(f)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            p,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(f, e),
                                                        );
                                                    }),
                                              p),
                                          ),
                                    ee && !eu
                                        ? (0, r.jsx)("div", {
                                              className: o()(ea.border, {
                                                  [ea.voiceChannelEffect]: !ep && (eM || null != eU),
                                                  [ea.speaking]: eR && !ep && !eM,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eC &&
                            eE &&
                            ex &&
                            (0, r.jsx)(q.Z, {
                                currentUserId: eI,
                                participant: b,
                            }),
                        (0, r.jsx)(I.Z, {
                            isFiring: ev,
                            callTileRef: e4.current,
                        }),
                    ],
                }),
            }),
        });
    });
function eu(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === er.fO.STREAM)
        return n === er.wR.XBOX
            ? (0, r.jsx)(z.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case er.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case er.wR.XBOX:
            return (0, r.jsx)(z.Z, { className: i });
        case er.wR.PLAYSTATION:
            return (0, r.jsx)(H.Z, { className: i });
        default:
            return null;
    }
}
function ed(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l } = e;
    return (0, r.jsx)(c.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: o()(ea.overlayButton, { [ea.hideWhenInactive]: i }),
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
function ep(e) {
    let { channelId: t, participantId: n, isContextMenuOpen: l } = e,
        o = i.useMemo(() => (0, j.Z)(t, n), [t, n]),
        s = (0, a.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(o)),
        c = i.useCallback(() => {
            Z.hY(o, !s);
        }, [o, s]);
    return W.isPlatformEmbedded && K.ZP.supportsFeature(en.eRX.POPOUT_WINDOWS)
        ? (0, r.jsx)(ed, {
              onClick: c,
              tooltipText: s ? eo.intl.string(eo.t.YdyDM9) : eo.intl.string(eo.t.ZVGHwP),
              icon: s ? u.QVc : u.k5M,
              hideWhenInactive: !l,
          })
        : null;
}
ec.displayName = "CallTile";
let ef = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: l,
            focused: d,
            videoToggleState: h,
            blocked: g,
            ignored: m,
            participantId: v,
            participantType: j,
            participantUserId: x,
            channel: S,
            platform: I,
            secureFramesVerified: P,
            onContextMenu: N,
            muted: T,
            deafened: w,
            localMuted: A,
            serverMuted: R,
            serverDeafened: D,
            hasVideo: L,
            hideAudioIcon: M,
            onToggleMute: k,
            popoutType: G,
        } = e,
        B = (0, a.e7)([U.Z], () => null != x && U.Z.isLocalVideoAutoDisabled(x, (0, O.Z)(j)), [x, j]),
        F = (0, C.Z)({
            userId: x,
            guildId: S.getGuildId(),
        }),
        H = (0, E.j)({ displayNameStyles: F }),
        z = (0, ee.N)(l),
        W = (0, ee.K)(l),
        [K, Y] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== V.Z.isOpen() && ((e = V.Z.isOpen()) || Y(!1));
            };
        return V.Z.addChangeListener(t), () => V.Z.removeChangeListener(t);
    }, []);
    let { enabled: q } = (0, b.n)({ location: "CallTile" }),
        X = (0, a.e7)([_.Z], () => _.Z.isParticipantPoppedOut(S.id, v), [S.id, v]),
        Q = q && !X && G === y.P.NO_POPOUT && j !== er.fO.ACTIVITY,
        J = !M && j === er.fO.STREAM && L && (!W || A),
        $ = (function (e) {
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
        className: o()(ea.overlayContainer, {
            [ea.compact]: W,
            [ea.noPointerEvents]: d,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(ea.overlayTop, { [ea.small]: l < 195 }),
                children:
                    B || h === en.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)("div", {
                                  className: ea.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsxs)("div", {
                                  className: o()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ea.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: "md",
                                              color: "currentColor",
                                          }),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          className: ea.overlayTitleText,
                                          children: eo.intl.string(eo.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !z &&
                (0, r.jsxs)("div", {
                    className: o()(ea.overlayBottom, { [ea.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: ea.experimentOverlayTitle,
                            color: "none",
                            variant: W ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != $ &&
                                    j === er.fO.USER &&
                                    (0, r.jsx)($, {
                                        className: o()(ea.experimentTitleIcon, { [ea.compact]: W }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                g
                                    ? (0, r.jsx)("div", {
                                          className: ea.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: ea.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                m
                                    ? (0, r.jsx)("div", {
                                          className: ea.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: ea.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(eu, {
                                          participantType: j,
                                          platform: I,
                                          className: o()(ea.experimentTitleIcon, { [ea.compact]: W }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: o()(ea.overlayTitleText, H),
                                          children: n,
                                      }),
                                P &&
                                    (0, r.jsx)(c.u, {
                                        text: eo.intl.string(eo.t.ZEem6O),
                                        children: (0, r.jsx)(u.tQf, {
                                            className: ea.secureFramesIcon,
                                            size: "xs",
                                            color: s.Z.colors.HEADER_PRIMARY,
                                            "aria-label": eo.intl.string(eo.t.mR9cf3),
                                        }),
                                    }),
                            ],
                        }),
                        d
                            ? G === y.P.CALL_TILE
                                ? (0, r.jsx)(ep, {
                                      channelId: S.id,
                                      participantId: v,
                                      isContextMenuOpen: K,
                                  })
                                : null
                            : (0, r.jsxs)("div", {
                                  className: ea.overlayButtonContainer,
                                  children: [
                                      Q &&
                                          (0, r.jsx)(ed, {
                                              onClick: (e) => {
                                                  e.stopPropagation();
                                                  let t = _.Z.getParticipant(S.id, v);
                                                  null != t &&
                                                      ((0, er._5)(t) && (0, f.rn)(t.stream, { forceMultiple: !0 }),
                                                      p.Z.popoutParticipant(S.id, v),
                                                      Z.fT(S.id, v));
                                              },
                                              tooltipText: eo.intl.string(eo.t.EVNd8X),
                                              icon: u.rgF,
                                              hideWhenInactive: !K,
                                          }),
                                      (0, r.jsx)(ed, {
                                          onClick: (e) => {
                                              e.stopPropagation(), Y(!0), N(e, !0, er.A5.THREE_DOT);
                                          },
                                          tooltipText: eo.intl.string(eo.t["+1H47t"]),
                                          icon: u.xhG,
                                          hideWhenInactive: !K,
                                      }),
                                      J &&
                                          (0, r.jsx)(ed, {
                                              onClick: k,
                                              tooltipText: A
                                                  ? eo.intl.string(eo.t.YqAjXy)
                                                  : eo.intl.string(eo.t.w4m945),
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
ef.displayName = "CallTileOverlay";
let eh = S.L,
    eg = ec;
