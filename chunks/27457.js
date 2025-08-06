n.d(t, {
    BP: () => ed,
    ZP: () => ef,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(846027),
    f = n(410575),
    _ = n(812206),
    p = n(835473),
    h = n(414910),
    m = n(415635),
    g = n(7284),
    E = n(649739),
    b = n(37091),
    y = n(6572),
    O = n(352978),
    v = n(936847),
    I = n(512384),
    T = n(210975),
    S = n(763296),
    A = n(695346),
    N = n(937995),
    C = n(456631),
    R = n(274459),
    P = n(314897),
    w = n(857192),
    D = n(77498),
    L = n(131951),
    x = n(158776),
    M = n(979651),
    k = n(574254),
    j = n(374129),
    U = n(639351),
    G = n(584729),
    B = n(334374),
    Z = n(849171),
    F = n(607187),
    V = n(833519),
    H = n(462061),
    Y = n(623825),
    W = n(839662),
    K = n(981631),
    z = n(354459),
    q = n(524484),
    X = n(65154),
    Q = n(388032),
    J = n(519417);
function $(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function er(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ei(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eo = [z.fO.ACTIVITY],
    ea = i.memo((e) => {
        var t, n, o, l, c;
        let {
                participant: g,
                onDoubleClick: k,
                onContextMenu: j,
                onClick: U,
                onMouseDown: Y,
                onKeyDown: $,
                className: et,
                style: er,
                containerStyle: ei,
                channel: ea,
                width: es,
                inPopout: el,
                onVideoResize: ec,
                inCall: ed = !1,
                selected: ef = !1,
                noBorder: ep = !1,
                noVideoRender: eh = !1,
                focused: em = !1,
                blocked: eg = !1,
                ignored: eE = !1,
                fit: eb = O.L.CONTAIN,
                paused: ey = !1,
                pulseSpeakingIndicator: eO = !1,
                forceIdle: ev = !1,
                inOverlayPopout: eI = !1,
            } = e,
            eT = i.useContext(N.h9) || ev,
            [eS, eA] = i.useState(!1),
            eN = A.Sb.useSetting(),
            eC = (0, s.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled),
            [eR, eP] = i.useState(!1),
            ew = (0, s.e7)([P.default], () => P.default.getId()),
            eD = g.type === z.fO.ACTIVITY ? null : g.user,
            eL = null != (o = null == eD ? void 0 : eD.id) ? o : null,
            [ex] = (0, p.Z)(g.type === z.fO.ACTIVITY ? [g.applicationId] : []),
            eM = (0, s.e7)([b.Z], () => b.Z.getEnabled()),
            ek = (0, s.e7)([L.Z], () => null != eL && L.Z.isLocalVideoDisabled(eL, (0, h.Z)(g.type)), [eL, g.type]),
            ej = (0, s.e7)([L.Z], () => (null != eL ? L.Z.getVideoToggleState(eL, (0, h.Z)(g.type)) : K.ZUi.NONE), [
                eL,
                g.type,
            ]),
            eU = ej === K.ZUi.AUTO_PROBING,
            { speaking: eG, ringing: eB, hasVideo: eZ } = (0, W.Z)(g, ew),
            eF = (0, s.e7)([S.Z], () => null !== eL && S.Z.isUserPlayingSounds(eL), [eL]),
            eV = e_(ew, g, ea.getGuildId()),
            eH = g.type === z.fO.STREAM && eL === ew,
            eY = (0, s.e7)([C.Z], () => (g.type === z.fO.USER && null != eL ? C.Z.getEffectForUserId(eL) : null)),
            eW = (0, s.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ea.id, null != eL ? eL : K.lds)),
            { showGameIcon: eK } = E.ZP.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            ez = (0, s.e7)(
                [x.Z],
                () =>
                    eK && null != eL
                        ? x.Z.findActivity(eL, (e) => null != e.application_id && e.type === K.IIU.PLAYING)
                        : null,
                [eK, eL],
            ),
            eq = (0, s.e7)([D.Z], () =>
                (null == ez ? void 0 : ez.application_id) != null ? D.Z.getDetectableGame(ez.application_id) : null,
            ),
            eX = (0, s.e7)([_.Z], () =>
                null != eq && (null == ez ? void 0 : ez.application_id) != null
                    ? _.Z.getApplication(null == ez ? void 0 : ez.application_id)
                    : void 0,
            ),
            eQ = (0, T.wV)({
                userId: eL,
                channelId: ea.id,
            }),
            eJ = (0, T.zU)({
                streamKey: g.type === z.fO.STREAM ? g.id : null,
                channelId: ea.id,
            }),
            e$ = i.useMemo(
                () => (g.type === z.fO.STREAM ? null != eJ && eJ : g.type === z.fO.USER && null != eQ && eQ),
                [eJ, eQ, g.type],
            );
        i.useEffect(() => {
            eA(em);
        }, [em]);
        let e0 = i.useCallback(() => {
                null != eL && d.Z.toggleLocalMute(eL, X.Yn.STREAM);
            }, [eL]),
            e1 = i.useCallback(
                (e) => {
                    null == U || U(g, e);
                },
                [U, g],
            ),
            e2 = i.useCallback(
                (e) => {
                    null == k || k(g, e);
                },
                [k, g],
            ),
            e3 = i.useCallback(
                (e, t, n) => {
                    null == j || j(g, e, t, n);
                },
                [j, g],
            ),
            e5 = () => {
                eP(!0);
            },
            e4 = () => {
                eP(!1);
            },
            e6 = null,
            e8 = null,
            e7 = "";
        switch (g.type) {
            case z.fO.STREAM:
                (e6 = (0, r.jsx)(V.Z, {
                    participant: g,
                    selected: ef,
                    width: es,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    inPopout: el,
                    focused: em,
                    inOverlayPopout: eI,
                })),
                    (e8 = (0, r.jsx)(V._, {
                        participant: g,
                        selected: ef,
                        width: es,
                        focused: em,
                        idle: eT,
                        premiumIndicator: !1,
                    })),
                    (e7 = Q.intl.formatToPlainString(Q.t.gHPz3d, { streamerName: g.user.username }));
                break;
            case z.fO.USER:
                (e6 = (0, r.jsx)(H.Z, {
                    channel: ea,
                    inCall: ed,
                    participant: g,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    selected: ef,
                    width: es,
                    blocked: eg,
                    ignored: eE,
                    noVideoRender: eh || eU,
                    pulseSpeakingIndicator: eO,
                    inOverlayPopout: eI,
                })),
                    (e8 = (0, r.jsx)(H.T, {
                        participant: g,
                        channelId: ea.id,
                    })),
                    (e7 = Q.intl.formatToPlainString(Q.t["iC/x/f"], { username: g.user.username }));
                break;
            case z.fO.ACTIVITY:
                (e6 = (0, r.jsx)(Z.ZP, {
                    interactible: em,
                    participant: g,
                    selected: ef,
                    channel: ea,
                    width: es,
                })),
                    (e7 = Q.intl.formatToPlainString(Q.t.YCvOsL, { activityName: null == ex ? void 0 : ex.name }));
                break;
            case z.fO.HIDDEN_STREAM:
                e6 = (0, r.jsx)(V.Z, {
                    participant: g,
                    selected: ef,
                    width: es,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    inPopout: el,
                    focused: em,
                    inOverlayPopout: eI,
                });
        }
        let e9 = i.useRef(null),
            te = g.type === z.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: K.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: a()(J.wrapper, { [J.ringing]: eB }, et),
                style: ei,
                onMouseEnter: e5,
                onMouseLeave: e4,
                children: (0, r.jsxs)(I.Z, {
                    shakeLocation: q.oZ.VOICE_USER,
                    isShaking: eG,
                    className: J.tile,
                    children: [
                        (0, r.jsx)(F.Z, {
                            ref: e9,
                            className: a()(J.tile, {
                                [J.noBorder]: ep,
                                [J.noInteraction]: null == U,
                                [J.idle]: eT,
                            }),
                            noBorder: ep,
                            style: er,
                            participantUserId: eL,
                            children: (0, r.jsxs)(u.kL8, {
                                "aria-label": e7,
                                className: J.tileChild,
                                onDoubleClick: e2,
                                onContextMenu: (e) => e3(e, g.type === z.fO.STREAM),
                                onClick: e1,
                                onMouseDown: Y,
                                onKeyDown: $,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eY && null != eL
                                        ? (0, r.jsx)(R.Z, {
                                              voiceChannelEffect: eY,
                                              onComplete: () => (0, C.H)(eL),
                                              userId: eL,
                                          })
                                        : null,
                                    g.type === z.fO.USER
                                        ? (0, r.jsx)("div", {
                                              className: J.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
                                                  userId: eL,
                                                  channelId: ea.id,
                                                  guildId: ea.getGuildId(),
                                                  containerDimensions: {
                                                      width:
                                                          null !=
                                                          (l =
                                                              null == e9 || null == (t = e9.current)
                                                                  ? void 0
                                                                  : t.clientWidth)
                                                              ? l
                                                              : 0,
                                                      height:
                                                          null !=
                                                          (c =
                                                              null == e9 || null == (n = e9.current)
                                                                  ? void 0
                                                                  : n.clientHeight)
                                                              ? c
                                                              : 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e6,
                                    ep
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: J.indicators,
                                              children: e8,
                                          }),
                                    ef
                                        ? (0, r.jsx)("div", {
                                              className: J.selectedScreen,
                                              children: (0, r.jsx)(te, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: J.selectedIcon,
                                              }),
                                          })
                                        : null,
                                    eo.includes(g.type)
                                        ? null
                                        : (0, r.jsx)(
                                              eu,
                                              en(
                                                  ee(
                                                      {
                                                          focused: em,
                                                          width: es,
                                                          inCall: ed,
                                                          participantType: g.type,
                                                          hasVideo: null != eZ && eZ,
                                                      },
                                                      eV,
                                                  ),
                                                  {
                                                      idle: eT,
                                                      platform: eW,
                                                      title: (0, G.Z)(ea, g),
                                                      blocked: eg,
                                                      ignored: eE,
                                                      localVideoDisabled: ek,
                                                      videoToggleState: ej,
                                                      hideAudioIcon: eH,
                                                      onContextMenu: e3,
                                                      onToggleMute: e0,
                                                      participantUserId: eL,
                                                      participantDisplayNameStyles:
                                                          null == eD ? void 0 : eD.displayNameStyles,
                                                      application: eX,
                                                      secureFramesVerified: e$,
                                                      isHovered: eR,
                                                  },
                                              ),
                                          ),
                                    g.type === z.fO.USER && eM
                                        ? (0, r.jsx)(y.Z, {
                                              userId: g.id,
                                              channelId: ea.id,
                                          })
                                        : null,
                                    ed && !ep
                                        ? (0, r.jsx)("div", {
                                              className: a()(J.border, {
                                                  [J.voiceChannelEffect]: !em && (eF || null != eY),
                                                  [J.speaking]: eG && !em && !eF,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eN &&
                            eC &&
                            eR &&
                            (0, r.jsx)(B.Z, {
                                currentUserId: ew,
                                participant: g,
                            }),
                        (0, r.jsx)(v.Z, {
                            isFiring: eS,
                            callTileRef: e9.current,
                        }),
                    ],
                }),
            }),
        });
    });
function es(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === z.fO.STREAM)
        return n === z.wR.XBOX
            ? (0, r.jsx)(U.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: "md",
                  color: "currentColor",
                  className: i,
              });
    switch (n) {
        case z.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: "xs",
                color: "currentColor",
                className: i,
            });
        case z.wR.XBOX:
            return (0, r.jsx)(U.Z, { className: i });
        case z.wR.PLAYSTATION:
            return (0, r.jsx)(j.Z, { className: i });
        default:
            return null;
    }
}
function el(e) {
    let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: o } = e;
    return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : o ? u.nRN : null;
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: o, compact: s } = e;
    return (0, r.jsx)(u.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                l = er(e, ["onClick"]);
            return (0, r.jsx)(
                c.zx,
                en(ee({}, l), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), o(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Tt.CUSTOM,
                    size: c.Ph.ICON,
                    className: a()(J.overlayButton, {
                        [J.hideWhenInactive]: i,
                        [J.compact]: s,
                    }),
                    innerClassName: J.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: s ? "xs" : "refresh_sm",
                        color: "currentColor",
                    }),
                }),
            );
        },
    });
}
ea.displayName = "CallTile";
let eu = i.memo((e) => {
    let {
            idle: t,
            title: n,
            width: o,
            focused: c,
            videoToggleState: d,
            blocked: f,
            ignored: _,
            participantType: p,
            participantUserId: m,
            participantDisplayNameStyles: E,
            platform: b,
            secureFramesVerified: y,
            onContextMenu: O,
            muted: v,
            deafened: I,
            localMuted: T,
            serverMuted: S,
            serverDeafened: A,
            hasVideo: N,
            hideAudioIcon: C,
            onToggleMute: R,
        } = e,
        P = (0, s.e7)([L.Z], () => null != m && L.Z.isLocalVideoAutoDisabled(m, (0, h.Z)(p)), [m, p]),
        w = (0, g.j)({ displayNameStyles: E }),
        D = () =>
            P || d === K.ZUi.AUTO_PROBING
                ? t
                    ? (0, r.jsx)("div", {
                          className: J.status,
                          children: (0, r.jsx)(u.Amn, {
                              size: "md",
                              color: "currentColor",
                          }),
                      })
                    : (0, r.jsxs)("div", {
                          className: a()(J.overlayTitle, J.videoDisabledTitle),
                          children: [
                              (0, r.jsx)("div", {
                                  className: J.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: J.overlayTitleText,
                                  children: Q.intl.string(Q.t.m2Hyj4),
                              }),
                          ],
                      })
                : null,
        x = (0, Y.N)(o),
        M = (0, Y.K)(o),
        [j, U] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || U(!1));
            };
        return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t);
    }, []);
    let G = (e) => {
            e.stopPropagation(), U(!0), O(e, !0, z.A5.THREE_DOT);
        },
        B = !C && p === z.fO.STREAM && N && (!M || T),
        Z = el({
            localMuted: T,
            serverMuted: S,
            serverDeafened: A,
            deafened: I,
            muted: v,
        });
    return (0, r.jsxs)("div", {
        className: a()(J.overlayContainer, { [J.compact]: M }),
        children: [
            (0, r.jsx)("div", {
                className: a()(J.overlayTop, { [J.small]: o < 195 }),
                children: D(),
            }),
            !x &&
                (0, r.jsxs)("div", {
                    className: a()(J.overlayBottom, { [J.small]: o < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: a()(J.experimentOverlayTitle, { [J.compact]: M }),
                            color: "none",
                            variant: M ? "text-sm/normal" : "text-md/normal",
                            children: [
                                null != Z &&
                                    p === z.fO.USER &&
                                    (0, r.jsx)(Z, {
                                        className: a()(J.experimentTitleIcon, { [J.compact]: M }),
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                f
                                    ? (0, r.jsx)("div", {
                                          className: J.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: "lg",
                                              className: J.blockedIcon,
                                              color: l.Z.unsafe_rawColors.RED_400.css,
                                          }),
                                      })
                                    : null,
                                _
                                    ? (0, r.jsx)("div", {
                                          className: J.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: "lg",
                                              className: J.blockedIcon,
                                          }),
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(es, {
                                          participantType: p,
                                          platform: b,
                                          className: a()(J.experimentTitleIcon, { [J.compact]: M }),
                                      }),
                                null == n || "" === n || t
                                    ? null
                                    : (0, r.jsx)("span", {
                                          className: a()(J.overlayTitleText, w),
                                          children: n,
                                      }),
                                y &&
                                    (0, r.jsx)(u.ua7, {
                                        text: Q.intl.string(Q.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.tQf,
                                                en(ee({}, e), {
                                                    className: J.secureFramesIcon,
                                                    size: "xs",
                                                    color: l.Z.colors.HEADER_PRIMARY,
                                                    "aria-label": Q.intl.string(Q.t.mR9cf3),
                                                }),
                                            ),
                                    }),
                            ],
                        }),
                        !c &&
                            (0, r.jsxs)("div", {
                                className: J.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ec, {
                                        onClick: G,
                                        tooltipText: Q.intl.string(Q.t["+1H47u"]),
                                        icon: u.xhG,
                                        hideWhenInactive: !j,
                                        compact: M,
                                    }),
                                    B &&
                                        (0, r.jsx)(ec, {
                                            onClick: R,
                                            tooltipText: T ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
                                            icon: T ? u.OyP : u.gj8,
                                            hideWhenInactive: !T && !j,
                                            compact: M,
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
eu.displayName = "CallTileOverlay";
let ed = O.L,
    ef = ea;
function e_(e, t, n) {
    var r, i, o, a;
    let l = t.type !== z.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([M.Z], () => {
            var e, t, r;
            let i = M.Z.getVoiceState(n, l);
            return {
                muted: null != (e = null == i ? void 0 : i.mute) && e,
                deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId,
            };
        }),
        u = (0, s.cj)([L.Z], () => {
            let n = (0, h.Z)(t.type);
            return e === l
                ? {
                      muted: !1,
                      deafened: !1,
                  }
                : {
                      muted: L.Z.isLocalMute(l, n),
                      localVideoDisabled: L.Z.isLocalVideoDisabled(l, n),
                      localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(l, n),
                  };
        }, [e, t.type, l]);
    return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (o = t.type === z.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && o,
        deafened:
            null != (a = t.type === z.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && a,
    };
}
