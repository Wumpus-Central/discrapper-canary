n.d(t, {
    BP: () => eg,
    ZP: () => em
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(692547),
    c = n(481060),
    u = n(846027),
    d = n(410575),
    h = n(607070),
    p = n(812206),
    f = n(835473),
    g = n(414910),
    m = n(415635),
    b = n(578976),
    y = n(925329),
    _ = n(649739),
    O = n(37091),
    v = n(6572),
    C = n(352978),
    S = n(936847),
    j = n(512384),
    E = n(33316),
    x = n(576645),
    I = n(210975),
    P = n(695346),
    w = n(937995),
    N = n(456631),
    Z = n(274459),
    T = n(314897),
    A = n(857192),
    R = n(77498),
    D = n(131951),
    L = n(158776),
    k = n(594174),
    M = n(979651),
    U = n(574254),
    G = n(374129),
    B = n(639351),
    V = n(74538),
    H = n(221241),
    F = n(584729),
    z = n(334374),
    W = n(849171),
    Y = n(607187),
    K = n(624834),
    q = n(833519),
    Q = n(462061),
    X = n(623825),
    J = n(839662),
    $ = n(981631),
    ee = n(354459),
    et = n(37113),
    en = n(524484),
    er = n(65154),
    ei = n(388032),
    el = n(519417);
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ea(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let ec = [ee.fO.ACTIVITY, ee.fO.PRESENCE_EMBEDDED_ACTIVITY],
    eu = i.memo((e) => {
        var t, n, l, a, y;
        let { participant: U, onDoubleClick: G, onContextMenu: B, onClick: X, onMouseDown: ea, onKeyDown: eu, className: ed, style: eh, containerStyle: eg, channel: em, width: eb, inPopout: ey, onVideoResize: e_, inCall: eO = !1, selected: ev = !1, noBorder: eC = !1, noVideoRender: eS = !1, focused: ej = !1, blocked: eE = !1, ignored: ex = !1, fit: eI = C.L.CONTAIN, paused: eP = !1, pulseSpeakingIndicator: ew = !1, forceIdle: eN = !1, inOverlayPopout: eZ = !1 } = e,
            eT = i.useContext(w.h9) || eN,
            [eA, eR] = i.useState(!1),
            eD = P.Sb.useSetting(),
            eL = (0, s.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled),
            [ek, eM] = i.useState(!1),
            eU = (0, s.e7)([T.default], () => T.default.getId()),
            eG = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
            eB = U.type === ee.fO.ACTIVITY ? null : null == (t = U.user) ? void 0 : t.id,
            [eV] = (0, f.Z)(U.type === ee.fO.ACTIVITY ? [U.applicationId] : []),
            eH = (0, s.e7)([O.Z], () => O.Z.getEnabled()),
            eF = (0, s.e7)([D.Z], () => null != eB && D.Z.isLocalVideoDisabled(eB, (0, g.Z)(U.type)), [eB, U.type]),
            ez = (0, s.e7)([D.Z], () => (null != eB ? D.Z.getVideoToggleState(eB, (0, g.Z)(U.type)) : $.ZUi.NONE), [eB, U.type]),
            eW = ez === $.ZUi.AUTO_PROBING,
            { speaking: eY, ringing: eK, hasVideo: eq } = (0, J.Z)(U, eU),
            eQ = (function (e, t, n) {
                var r, i, l, o;
                let a = t.type !== ee.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, s.cj)([M.Z], () => {
                        var e, t, r;
                        let i = M.Z.getVoiceState(n, a);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, s.cj)(
                        [D.Z],
                        () => {
                            let n = (0, g.Z)(t.type);
                            return e === a
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: D.Z.isLocalMute(a, n),
                                      localVideoDisabled: D.Z.isLocalVideoDisabled(a, n),
                                      localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(a, n)
                                  };
                        },
                        [e, t.type, a]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null != (l = t.type === ee.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === ee.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eU, U, em.getGuildId()),
            eX = U.type === ee.fO.STREAM && eB === eU,
            eJ = V.ZP.isPremium(eG);
        i.useEffect(() => {
            if (eX && !eJ && null != em.hdStreamingUntil && new Date(em.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = D.Z.getGoLiveSource(),
                            t = (0, b.s_)(et.LY.RESOLUTION_720, et.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(em.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [eX, eJ, em.hdStreamingUntil]);
        let e$ = (0, s.e7)([N.Z], () => (U.type === ee.fO.USER && null != eB ? N.Z.getEffectForUserId(eB) : null)),
            e0 = (0, s.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(em.id, null != eB ? eB : $.lds)),
            { simplifiedSettingsEnabled: e1 } = (0, H.Z)({ location: 'CallTile' }),
            { showGameIcon: e4 } = _.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e3 = (0, s.e7)([L.Z], () => (e4 && null != eB ? L.Z.findActivity(eB, (e) => null != e.application_id && e.type === $.IIU.PLAYING) : null), [e4, eB]),
            e6 = (0, s.e7)([R.Z], () => ((null == e3 ? void 0 : e3.application_id) != null ? R.Z.getDetectableGame(e3.application_id) : null)),
            e2 = (0, s.e7)([p.Z], () => (null != e6 && (null == e3 ? void 0 : e3.application_id) != null ? p.Z.getApplication(null == e3 ? void 0 : e3.application_id) : void 0)),
            e9 = (0, I.wV)({
                userId: eB,
                channelId: em.id
            }),
            e5 = (0, I.zU)({
                streamKey: U.type === ee.fO.STREAM ? U.id : null,
                channelId: em.id
            }),
            e7 = i.useMemo(() => (U.type === ee.fO.STREAM ? null != e5 && e5 : U.type === ee.fO.USER && null != e9 && e9), [e5, e9, U.type]);
        i.useEffect(() => {
            eR(ej);
        }, [ej]);
        let [e8, te] = i.useState(!1),
            tt = i.useCallback(() => {
                h.Z.useReducedMotion || te(!0);
            }, []);
        (0, x.J)(em, tt);
        let tn = i.useCallback(() => {
                null != eB && u.Z.toggleLocalMute(eB, er.Yn.STREAM);
            }, [eB]),
            tr = i.useCallback(
                (e) => {
                    null == X || X(U, e);
                },
                [X, U]
            ),
            ti = i.useCallback(
                (e) => {
                    null == G || G(U, e);
                },
                [G, U]
            ),
            tl = i.useCallback(
                (e, t, n) => {
                    null == B || B(U, e, t, n);
                },
                [B, U]
            ),
            to = null,
            ts = null,
            ta = '';
        switch (U.type) {
            case ee.fO.STREAM:
                (to = (0, r.jsx)(q.Z, {
                    participant: U,
                    selected: ev,
                    width: eb,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eP,
                    inPopout: ey,
                    focused: ej,
                    inOverlayPopout: eZ
                })),
                    (ts = (0, r.jsx)(q._, {
                        participant: U,
                        selected: ev,
                        width: eb,
                        focused: ej,
                        idle: eT,
                        premiumIndicator: !1
                    })),
                    (ta = ei.intl.formatToPlainString(ei.t.gHPz3d, { streamerName: U.user.username }));
                break;
            case ee.fO.USER:
                (to = (0, r.jsx)(Q.Z, {
                    channel: em,
                    inCall: eO,
                    participant: U,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eP,
                    selected: ev,
                    width: eb,
                    blocked: eE,
                    ignored: ex,
                    noVideoRender: eS || eW,
                    pulseSpeakingIndicator: ew,
                    inOverlayPopout: eZ
                })),
                    (ts = (0, r.jsx)(Q.T, {
                        participant: U,
                        channelId: em.id
                    })),
                    (ta = ei.intl.formatToPlainString(ei.t['iC/x/f'], { username: U.user.username }));
                break;
            case ee.fO.ACTIVITY:
                (to = (0, r.jsx)(W.ZP, {
                    interactible: ej,
                    participant: U,
                    selected: ev,
                    channel: em,
                    width: eb
                })),
                    (ta = ei.intl.formatToPlainString(ei.t.YCvOsL, { activityName: null == eV ? void 0 : eV.name }));
                break;
            case ee.fO.PRESENCE_EMBEDDED_ACTIVITY:
                to = (0, r.jsx)(K.Z, {
                    participant: U,
                    width: eb,
                    channelId: em.id
                });
                break;
            case ee.fO.HIDDEN_STREAM:
                to = (0, r.jsx)(q.Z, {
                    participant: U,
                    selected: ev,
                    width: eb,
                    fit: eI,
                    onVideoResize: e_,
                    paused: eP,
                    inPopout: ey,
                    focused: ej,
                    inOverlayPopout: eZ
                });
        }
        let tc = i.useRef(null),
            tu = U.type === ee.fO.STREAM ? c.pzj : c.Odl,
            td = e1 ? ep : ef;
        return (0, r.jsx)(d.Z, {
            section: $.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: o()(el.wrapper, { [el.ringing]: eK }, ed),
                style: eg,
                onMouseEnter: () => {
                    eM(!0);
                },
                onMouseLeave: () => {
                    eM(!1);
                },
                children: [
                    e8 &&
                        U.type === ee.fO.STREAM &&
                        (0, r.jsx)(E.Z, {
                            baseTileRef: tc.current,
                            cleanup: () => te(!1)
                        }),
                    (0, r.jsxs)(j.Z, {
                        shakeLocation: en.oZ.VOICE_USER,
                        isShaking: eY,
                        className: el.tile,
                        children: [
                            (0, r.jsx)(Y.Z, {
                                ref: tc,
                                className: o()(el.tile, {
                                    [el.noBorder]: eC,
                                    [el.noInteraction]: null == X,
                                    [el.idle]: eT
                                }),
                                noBorder: eC,
                                style: eh,
                                participantUserId: eB,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': ta,
                                    className: el.tileChild,
                                    onDoubleClick: ti,
                                    onContextMenu: (e) => tl(e, e1 && U.type === ee.fO.STREAM),
                                    onClick: tr,
                                    onMouseDown: ea,
                                    onKeyDown: eu,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e$ && null != eB
                                            ? (0, r.jsx)(Z.Z, {
                                                  voiceChannelEffect: e$,
                                                  onComplete: () => (0, N.H)(eB),
                                                  userId: eB
                                              })
                                            : null,
                                        U.type === ee.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: el.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eB,
                                                      channelId: em.id,
                                                      guildId: em.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == tc || null == (n = tc.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (y = null == tc || null == (l = tc.current) ? void 0 : l.clientHeight) ? y : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        to,
                                        eC
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: el.indicators,
                                                  children: ts
                                              }),
                                        ev
                                            ? (0, r.jsx)('div', {
                                                  className: el.selectedScreen,
                                                  children: (0, r.jsx)(tu, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: el.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ec.includes(U.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  td,
                                                  es(
                                                      eo(
                                                          {
                                                              focused: ej,
                                                              width: eb,
                                                              inCall: eO,
                                                              participantType: U.type,
                                                              hasVideo: null != eq && eq
                                                          },
                                                          eQ
                                                      ),
                                                      {
                                                          idle: eT,
                                                          platform: e0,
                                                          title: (0, F.Z)(em, U),
                                                          blocked: eE,
                                                          ignored: ex,
                                                          localVideoDisabled: eF,
                                                          videoToggleState: ez,
                                                          hideAudioIcon: eX,
                                                          onContextMenu: tl,
                                                          onToggleMute: tn,
                                                          participantUserId: eB,
                                                          application: e2,
                                                          secureFramesVerified: e7,
                                                          isHovered: ek
                                                      }
                                                  )
                                              ),
                                        U.type === ee.fO.USER && eH
                                            ? (0, r.jsx)(v.Z, {
                                                  userId: U.id,
                                                  channelId: em.id
                                              })
                                            : null,
                                        eO && !eC
                                            ? (0, r.jsx)('div', {
                                                  className: o()(el.border, {
                                                      [el.voiceChannelEffect]: !ej && null != e$,
                                                      [el.speaking]: eY && !ej
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eD &&
                                eL &&
                                ek &&
                                (0, r.jsx)(z.Z, {
                                    currentUserId: eU,
                                    participant: U
                                }),
                            (0, r.jsx)(S.Z, {
                                isFiring: eA,
                                callTileRef: tc.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ed(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === ee.fO.STREAM)
        return n === ee.wR.XBOX
            ? (0, r.jsx)(B.Z, { className: i })
            : (0, r.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case ee.wR.MOBILE:
            return (0, r.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case ee.wR.XBOX:
            return (0, r.jsx)(B.Z, { className: i });
        case ee.wR.PLAYSTATION:
            return (0, r.jsx)(G.Z, { className: i });
        default:
            return null;
    }
}
function eh(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = ea(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                es(eo({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), l(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: o()(el.overlayButton, {
                        [el.hideWhenInactive]: i,
                        [el.compact]: s
                    }),
                    innerClassName: el.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: s ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
eu.displayName = 'CallTile';
let ep = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: u, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: y, onContextMenu: _, muted: O, deafened: v, localMuted: C, serverMuted: S, serverDeafened: j, hasVideo: E, hideAudioIcon: x, onToggleMute: I } = e,
        P = (0, s.e7)([D.Z], () => null != m && D.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        w = (0, X.N)(l),
        N = (0, X.K)(l),
        [Z, T] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || T(!1));
            };
        return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t);
    }, []);
    let A = !x && f === ee.fO.STREAM && E && (!N || C),
        R = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null;
        })({
            localMuted: C,
            serverMuted: S,
            serverDeafened: j,
            deafened: v,
            muted: O
        });
    return (0, r.jsxs)('div', {
        className: o()(el.overlayContainer, { [el.compact]: N }),
        children: [
            (0, r.jsx)('div', {
                className: o()(el.overlayTop, { [el.small]: l < 195 }),
                children:
                    P || d === $.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: el.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(el.overlayTitle, el.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: el.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: el.overlayTitleText,
                                          children: ei.intl.string(ei.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !w &&
                (0, r.jsxs)('div', {
                    className: o()(el.overlayBottom, { [el.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: o()(el.experimentOverlayTitle, { [el.compact]: N }),
                            color: 'none',
                            variant: N ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != R &&
                                    f === ee.fO.USER &&
                                    (0, r.jsx)(R, {
                                        className: o()(el.experimentTitleIcon, { [el.compact]: N }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: el.blocked,
                                          children: (0, r.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: el.blockedIcon,
                                              color: a.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: el.ignored,
                                          children: (0, r.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: el.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(ed, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(el.experimentTitleIcon, { [el.compact]: N })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: el.overlayTitleText,
                                          children: n
                                      }),
                                y &&
                                    (0, r.jsx)(c.ua7, {
                                        text: ei.intl.string(ei.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                es(eo({}, e), {
                                                    className: el.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': ei.intl.string(ei.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !u &&
                            (0, r.jsxs)('div', {
                                className: el.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(eh, {
                                        onClick: (e) => {
                                            e.stopPropagation(), T(!0), _(e, !0, ee.A5.THREE_DOT);
                                        },
                                        tooltipText: ei.intl.string(ei.t['+1H47u']),
                                        icon: c.xhG,
                                        hideWhenInactive: !Z,
                                        compact: N
                                    }),
                                    A &&
                                        (0, r.jsx)(eh, {
                                            onClick: I,
                                            tooltipText: C ? ei.intl.string(ei.t.YqAjX1) : ei.intl.string(ei.t['w4m94+']),
                                            icon: C ? c.OyP : c.gj8,
                                            hideWhenInactive: !C && !Z,
                                            compact: N
                                        })
                                ]
                            })
                    ]
                })
        ]
    });
});
ep.displayName = 'CallTileOverlayV2';
let ef = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: l, serverDeafened: u, idle: d, title: h, width: p, hasVideo: f, inCall: m, localVideoDisabled: b, videoToggleState: _, focused: O, blocked: v, ignored: C, hideAudioIcon: S, participantType: j, participantUserId: E, onContextMenu: x, onToggleMute: I, platform: P, application: w, secureFramesVerified: N } = e,
        Z = null,
        T = null,
        A = null,
        R = (0, X.K)(p),
        L = (0, X.N)(p),
        k = (0, s.e7)([D.Z], () => null != E && D.Z.isLocalVideoAutoDisabled(E, (0, g.Z)(j)), [E, j]);
    if (!S)
        if (i && j === ee.fO.STREAM && f && !O)
            Z = (0, r.jsx)(c.ua7, {
                text: ei.intl.string(ei.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = ea(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        es(eo({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: o()(el.interactive, el.toggleMute, el.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || j !== ee.fO.STREAM || !f || R || O) {
            let e;
            u ? (e = c.Vm4) : l ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (Z =
                    null != (Z = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: el.status,
                              children: Z
                          })
                        : null);
        } else
            Z = (0, r.jsx)(c.ua7, {
                text: ei.intl.string(ei.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = ea(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        es(eo({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: o()(el.interactive, el.toggleMute, el.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    (m && D.Z.supports(er.AN.VIDEO)) || !f
        ? m &&
          f &&
          b &&
          !k &&
          (T = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor'
          }))
        : (T = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        j === ee.fO.STREAM &&
            !O &&
            f &&
            (A = (0, r.jsx)(c.ua7, {
                text: ei.intl.string(ei.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = ea(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        es(eo({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), x(e);
                            },
                            className: o()(el.status, el.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let M =
        j === ee.fO.USER && null != w
            ? (0, r.jsx)(c.ua7, {
                  text: ei.intl.formatToPlainString(ei.t.Sq9xJy, { game: w.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          es(eo({}, e), {
                              className: o()(el.gameIconContainer, { [el.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(y.Z, {
                                  className: el.gameIcon,
                                  game: w,
                                  size: y.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: el.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: o()(el.overlayTop, { [el.small]: p < 195 }),
                children:
                    k || _ === $.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: el.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(el.overlayTitle, el.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: el.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: el.overlayTitleText,
                                          children: ei.intl.string(ei.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: o()(el.overlayBottom, { [el.small]: p < 195 }),
                children: [
                    L
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: o()(el.overlayTitle, { [el.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  v
                                      ? (0, r.jsx)('div', {
                                            className: el.blocked,
                                            children: (0, r.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: el.blockedIcon,
                                                color: a.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  C
                                      ? (0, r.jsx)('div', {
                                            className: el.ignored,
                                            children: (0, r.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: el.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, r.jsx)(ed, {
                                      participantType: j,
                                      platform: P,
                                      className: el.titleIcon
                                  }),
                                  null != h && '' !== h
                                      ? (0, r.jsx)('span', {
                                            className: el.overlayTitleText,
                                            children: h
                                        })
                                      : null,
                                  N &&
                                      (0, r.jsx)(c.ua7, {
                                          text: ei.intl.string(ei.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  es(eo({}, e), {
                                                      className: el.secureFramesIcon,
                                                      size: 'xs',
                                                      color: a.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ei.intl.string(ei.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: el.statusContainer,
                        children: [
                            null != T &&
                                (0, r.jsx)('div', {
                                    className: el.status,
                                    children: T
                                }),
                            Z,
                            A,
                            M
                        ]
                    })
                ]
            })
        ]
    });
});
ef.displayName = 'CallTileOverlay';
let eg = C.L,
    em = eu;
