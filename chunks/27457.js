n.d(t, {
    BP: () => eb,
    ZP: () => eg
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(442837),
    a = n(692547),
    c = n(481060),
    u = n(846027),
    d = n(410575),
    p = n(607070),
    h = n(812206),
    f = n(835473),
    _ = n(414910),
    m = n(415635),
    b = n(578976),
    g = n(925329),
    E = n(649739),
    O = n(37091),
    y = n(6572),
    C = n(352978),
    S = n(936847),
    v = n(512384),
    N = n(33316),
    T = n(576645),
    I = n(6242),
    x = n(757692),
    P = n(210975),
    A = n(695346),
    w = n(937995),
    R = n(456631),
    j = n(274459),
    k = n(314897),
    L = n(857192),
    M = n(77498),
    D = n(131951),
    Z = n(158776),
    U = n(594174),
    V = n(979651),
    H = n(574254),
    W = n(374129),
    G = n(639351),
    B = n(74538),
    F = n(221241),
    z = n(584729),
    Y = n(334374),
    K = n(849171),
    X = n(607187),
    Q = n(624834),
    q = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    er = n(37113),
    ei = n(524484),
    eo = n(65154),
    el = n(388032),
    es = n(519417);
function ea(e) {
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
function ec(e, t) {
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
function eu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let ed = [en.fO.ACTIVITY, en.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ep = i.memo((e) => {
        var t, n, o, a, g;
        let { participant: H, onDoubleClick: W, onContextMenu: G, onClick: $, onMouseDown: eu, onKeyDown: ep, className: eh, style: ef, containerStyle: eb, channel: eg, width: eE, inPopout: eO, onVideoResize: ey, inCall: eC = !1, selected: eS = !1, noBorder: ev = !1, noVideoRender: eN = !1, focused: eT = !1, blocked: eI = !1, ignored: ex = !1, fit: eP = C.L.CONTAIN, paused: eA = !1, pulseSpeakingIndicator: ew = !1, forceIdle: eR = !1, inOverlayPopout: ej = !1 } = e,
            ek = i.useContext(w.h9) || eR,
            [eL, eM] = i.useState(!1),
            eD = A.Sb.useSetting(),
            eZ = (0, s.e7)([L.default], () => L.default.isStreamInfoOverlayEnabled),
            [eU, eV] = i.useState(!1),
            eH = (0, s.e7)([k.default], () => k.default.getId()),
            eW = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
            eG = H.type === en.fO.ACTIVITY ? null : null == (t = H.user) ? void 0 : t.id,
            [eB] = (0, f.Z)(H.type === en.fO.ACTIVITY ? [H.applicationId] : []),
            eF = (0, s.e7)([O.Z], () => O.Z.getEnabled()),
            ez = (0, s.e7)([D.Z], () => null != eG && D.Z.isLocalVideoDisabled(eG, (0, _.Z)(H.type)), [eG, H.type]),
            eY = (0, s.e7)([D.Z], () => (null != eG ? D.Z.getVideoToggleState(eG, (0, _.Z)(H.type)) : et.ZUi.NONE), [eG, H.type]),
            eK = eY === et.ZUi.AUTO_PROBING,
            { speaking: eX, ringing: eQ, hasVideo: eq } = (0, ee.Z)(H, eH),
            eJ = (function (e, t, n) {
                var r, i, o, l;
                let a = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, s.cj)([V.Z], () => {
                        var e, t, r;
                        let i = V.Z.getVoiceState(n, a);
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
                            let n = (0, _.Z)(t.type);
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
                    muted: null != (o = t.type === en.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && o,
                    deafened: null != (l = t.type === en.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && l
                };
            })(eH, H, eg.getGuildId()),
            e$ = H.type === en.fO.STREAM && eG === eH,
            e0 = B.ZP.isPremium(eW);
        i.useEffect(() => {
            if (e$ && !e0 && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = D.Z.getGoLiveSource(),
                            t = (0, b.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(eg.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, eg.hdStreamingUntil]);
        let e1 = (0, x.o)(H, eW),
            e4 = (0, I.lL)('CallTile', !0, eW, e1),
            e3 = (0, s.e7)([R.Z], () => (H.type === en.fO.USER && null != eG ? R.Z.getEffectForUserId(eG) : null)),
            e6 = (0, s.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eg.id, null != eG ? eG : et.lds)),
            { simplifiedSettingsEnabled: e8 } = (0, F.Z)({ location: 'CallTile' }),
            { showGameIcon: e2 } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e7 = (0, s.e7)([Z.Z], () => (e2 && null != eG ? Z.Z.findActivity(eG, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e2, eG]),
            e5 = (0, s.e7)([M.Z], () => ((null == e7 ? void 0 : e7.application_id) != null ? M.Z.getDetectableGame(e7.application_id) : null)),
            e9 = (0, s.e7)([h.Z], () => (null != e5 && (null == e7 ? void 0 : e7.application_id) != null ? h.Z.getApplication(null == e7 ? void 0 : e7.application_id) : void 0)),
            te = (0, P.wV)({
                userId: eG,
                channelId: eg.id
            }),
            tt = (0, P.zU)({
                streamKey: H.type === en.fO.STREAM ? H.id : null,
                channelId: eg.id
            }),
            tn = i.useMemo(() => (H.type === en.fO.STREAM ? null != tt && tt : H.type === en.fO.USER && null != te && te), [tt, te, H.type]);
        i.useEffect(() => {
            eM(eT);
        }, [eT]);
        let [tr, ti] = i.useState(!1),
            to = i.useCallback(() => {
                p.Z.useReducedMotion || ti(!0);
            }, []);
        (0, T.J)(eg, to);
        let tl = i.useCallback(() => {
                null != eG && u.Z.toggleLocalMute(eG, eo.Yn.STREAM);
            }, [eG]),
            ts = i.useCallback(
                (e) => {
                    null == $ || $(H, e);
                },
                [$, H]
            ),
            ta = i.useCallback(
                (e) => {
                    null == W || W(H, e);
                },
                [W, H]
            ),
            tc = i.useCallback(
                (e, t, n) => {
                    null == G || G(H, e, t, n);
                },
                [G, H]
            ),
            tu = null,
            td = null,
            tp = '';
        switch (H.type) {
            case en.fO.STREAM:
                (tu = (0, r.jsx)(q.Z, {
                    participant: H,
                    selected: eS,
                    width: eE,
                    fit: eP,
                    onVideoResize: ey,
                    paused: eA,
                    inPopout: eO,
                    focused: eT,
                    inOverlayPopout: ej
                })),
                    (td = (0, r.jsx)(q._, {
                        participant: H,
                        selected: eS,
                        width: eE,
                        focused: eT,
                        idle: ek,
                        premiumIndicator: e4.enabled
                    })),
                    (tp = el.NW.formatToPlainString(el.t.gHPz3d, { streamerName: H.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: eg,
                    inCall: eC,
                    participant: H,
                    fit: eP,
                    onVideoResize: ey,
                    paused: eA,
                    selected: eS,
                    width: eE,
                    blocked: eI,
                    ignored: ex,
                    noVideoRender: eN || eK,
                    pulseSpeakingIndicator: ew,
                    inOverlayPopout: ej
                })),
                    (td = (0, r.jsx)(J.T, {
                        participant: H,
                        channelId: eg.id
                    })),
                    (tp = el.NW.formatToPlainString(el.t['iC/x/f'], { username: H.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: eT,
                    participant: H,
                    selected: eS,
                    channel: eg,
                    width: eE
                })),
                    (tp = el.NW.formatToPlainString(el.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(Q.Z, {
                    participant: H,
                    width: eE,
                    channelId: eg.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(q.Z, {
                    participant: H,
                    selected: eS,
                    width: eE,
                    fit: eP,
                    onVideoResize: ey,
                    paused: eA,
                    inPopout: eO,
                    focused: eT,
                    inOverlayPopout: ej
                });
        }
        let th = i.useRef(null),
            tf = H.type === en.fO.STREAM ? c.pzj : c.Odl,
            t_ = e8 ? e_ : em;
        return (0, r.jsx)(d.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: l()(es.wrapper, { [es.ringing]: eQ }, eh),
                style: eb,
                onMouseEnter: () => {
                    eV(!0);
                },
                onMouseLeave: () => {
                    eV(!1);
                },
                children: [
                    tr &&
                        H.type === en.fO.STREAM &&
                        (0, r.jsx)(N.Z, {
                            baseTileRef: th.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(v.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eX,
                        className: es.tile,
                        children: [
                            (0, r.jsx)(X.Z, {
                                ref: th,
                                className: l()(es.tile, {
                                    [es.noBorder]: ev,
                                    [es.noInteraction]: null == $,
                                    [es.idle]: ek
                                }),
                                noBorder: ev,
                                style: ef,
                                participantUserId: eG,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': tp,
                                    className: es.tileChild,
                                    onDoubleClick: ta,
                                    onContextMenu: (e) => tc(e, e8 && H.type === en.fO.STREAM),
                                    onClick: ts,
                                    onMouseDown: eu,
                                    onKeyDown: ep,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e3 && null != eG
                                            ? (0, r.jsx)(j.Z, {
                                                  voiceChannelEffect: e3,
                                                  onComplete: () => (0, R.H)(eG),
                                                  userId: eG
                                              })
                                            : null,
                                        H.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: es.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eG,
                                                      channelId: eg.id,
                                                      guildId: eg.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == th || null == (n = th.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (g = null == th || null == (o = th.current) ? void 0 : o.clientHeight) ? g : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        ev
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: es.indicators,
                                                  children: td
                                              }),
                                        eS
                                            ? (0, r.jsx)('div', {
                                                  className: es.selectedScreen,
                                                  children: (0, r.jsx)(tf, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: es.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ed.includes(H.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  t_,
                                                  ec(
                                                      ea(
                                                          {
                                                              focused: eT,
                                                              width: eE,
                                                              inCall: eC,
                                                              participantType: H.type,
                                                              hasVideo: null != eq && eq
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: ek,
                                                          platform: e6,
                                                          title: (0, z.Z)(eg, H),
                                                          blocked: eI,
                                                          ignored: ex,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: tl,
                                                          participantUserId: eG,
                                                          application: e9,
                                                          secureFramesVerified: tn,
                                                          isHovered: eU
                                                      }
                                                  )
                                              ),
                                        H.type === en.fO.USER && eF
                                            ? (0, r.jsx)(y.Z, {
                                                  userId: H.id,
                                                  channelId: eg.id
                                              })
                                            : null,
                                        eC && !ev
                                            ? (0, r.jsx)('div', {
                                                  className: l()(es.border, {
                                                      [es.voiceChannelEffect]: !eT && null != e3,
                                                      [es.speaking]: eX && !eT
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eD &&
                                eZ &&
                                eU &&
                                (0, r.jsx)(Y.Z, {
                                    currentUserId: eH,
                                    participant: H
                                }),
                            (0, r.jsx)(S.Z, {
                                isFiring: eL,
                                callTileRef: th.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function eh(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === en.fO.STREAM)
        return n === en.wR.XBOX
            ? (0, r.jsx)(G.Z, { className: i })
            : (0, r.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case en.wR.MOBILE:
            return (0, r.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case en.wR.XBOX:
            return (0, r.jsx)(G.Z, { className: i });
        case en.wR.PLAYSTATION:
            return (0, r.jsx)(W.Z, { className: i });
        default:
            return null;
    }
}
function ef(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: o, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = eu(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                ec(ea({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), o(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: l()(es.overlayButton, {
                        [es.hideWhenInactive]: i,
                        [es.compact]: s
                    }),
                    innerClassName: es.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: s ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
ep.displayName = 'CallTile';
let e_ = i.memo((e) => {
    let { idle: t, title: n, width: o, videoToggleState: u, blocked: d, ignored: p, participantType: h, participantUserId: f, platform: m, secureFramesVerified: b, onContextMenu: g, muted: E, deafened: O, localMuted: y, serverMuted: C, serverDeafened: S, hasVideo: v, hideAudioIcon: N, onToggleMute: T } = e,
        I = (0, s.e7)([D.Z], () => null != f && D.Z.isLocalVideoAutoDisabled(f, (0, _.Z)(h)), [f, h]),
        x = (0, $.N)(o),
        P = (0, $.K)(o),
        [A, w] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== H.Z.isOpen() && ((e = H.Z.isOpen()) || w(!1));
            };
        return H.Z.addChangeListener(t), () => H.Z.removeChangeListener(t);
    }, []);
    let R = !N && h === en.fO.STREAM && v && (!P || y),
        j = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: o } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : o ? c.nRN : null;
        })({
            localMuted: y,
            serverMuted: C,
            serverDeafened: S,
            deafened: O,
            muted: E
        });
    return (0, r.jsxs)('div', {
        className: l()(es.overlayContainer, { [es.compact]: P }),
        children: [
            (0, r.jsx)('div', {
                className: l()(es.overlayTop, { [es.small]: o < 195 }),
                children:
                    I || u === et.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(es.overlayTitle, es.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: es.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: es.overlayTitleText,
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !x &&
                (0, r.jsxs)('div', {
                    className: l()(es.overlayBottom, { [es.small]: o < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: l()(es.experimentOverlayTitle, { [es.compact]: P }),
                            color: 'none',
                            variant: P ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != j &&
                                    h === en.fO.USER &&
                                    (0, r.jsx)(j, {
                                        className: l()(es.experimentTitleIcon, { [es.compact]: P }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                d
                                    ? (0, r.jsx)('div', {
                                          className: es.blocked,
                                          children: (0, r.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: es.blockedIcon,
                                              color: a.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: es.ignored,
                                          children: (0, r.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: es.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(eh, {
                                          participantType: h,
                                          platform: m,
                                          className: l()(es.experimentTitleIcon, { [es.compact]: P })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: es.overlayTitleText,
                                          children: n
                                      }),
                                b &&
                                    (0, r.jsx)(c.ua7, {
                                        text: el.NW.string(el.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                ec(ea({}, e), {
                                                    className: es.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': el.NW.string(el.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: es.overlayButtonContainer,
                            children: [
                                (0, r.jsx)(ef, {
                                    onClick: (e) => {
                                        e.stopPropagation(), w(!0), g(e, !0, en.A5.THREE_DOT);
                                    },
                                    tooltipText: el.NW.string(el.t['+1H47u']),
                                    icon: c.xhG,
                                    hideWhenInactive: !A,
                                    compact: P
                                }),
                                R &&
                                    (0, r.jsx)(ef, {
                                        onClick: T,
                                        tooltipText: y ? el.NW.string(el.t.YqAjX1) : el.NW.string(el.t['w4m94+']),
                                        icon: y ? c.OyP : c.gj8,
                                        hideWhenInactive: !y && !A,
                                        compact: P
                                    })
                            ]
                        })
                    ]
                })
        ]
    });
});
e_.displayName = 'CallTileOverlayV2';
let em = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: o, serverDeafened: u, idle: d, title: p, width: h, hasVideo: f, inCall: m, localVideoDisabled: b, videoToggleState: E, focused: O, blocked: y, ignored: C, hideAudioIcon: S, participantType: v, participantUserId: N, onContextMenu: T, onToggleMute: I, platform: x, application: P, secureFramesVerified: A } = e,
        w = null,
        R = null,
        j = null,
        k = (0, $.K)(h),
        L = (0, $.N)(h),
        M = (0, s.e7)([D.Z], () => null != N && D.Z.isLocalVideoAutoDisabled(N, (0, _.Z)(v)), [N, v]);
    if (!S)
        if (i && v === en.fO.STREAM && f && !O)
            w = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: l()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || v !== en.fO.STREAM || !f || k || O) {
            let e;
            u ? (e = c.Vm4) : o ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (w =
                    null != (w = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: es.status,
                              children: w
                          })
                        : null);
        } else
            w = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: l()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    (m && D.Z.supports(eo.AN.VIDEO)) || !f
        ? m &&
          f &&
          b &&
          !M &&
          (R = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor'
          }))
        : (R = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        v === en.fO.STREAM &&
            !O &&
            f &&
            (j = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), T(e);
                            },
                            className: l()(es.status, es.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let Z =
        v === en.fO.USER && null != P
            ? (0, r.jsx)(c.ua7, {
                  text: el.NW.formatToPlainString(el.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(ea({}, e), {
                              className: l()(es.gameIconContainer, { [es.gameIconSmall]: h < 500 }),
                              children: (0, r.jsx)(g.Z, {
                                  className: es.gameIcon,
                                  game: P,
                                  size: g.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: es.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: l()(es.overlayTop, { [es.small]: h < 195 }),
                children:
                    M || E === et.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(es.overlayTitle, es.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: es.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: es.overlayTitleText,
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: l()(es.overlayBottom, { [es.small]: h < 195 }),
                children: [
                    L
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: l()(es.overlayTitle, { [es.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  y
                                      ? (0, r.jsx)('div', {
                                            className: es.blocked,
                                            children: (0, r.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: es.blockedIcon,
                                                color: a.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  C
                                      ? (0, r.jsx)('div', {
                                            className: es.ignored,
                                            children: (0, r.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: es.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, r.jsx)(eh, {
                                      participantType: v,
                                      platform: x,
                                      className: es.titleIcon
                                  }),
                                  null != p && '' !== p
                                      ? (0, r.jsx)('span', {
                                            className: es.overlayTitleText,
                                            children: p
                                        })
                                      : null,
                                  A &&
                                      (0, r.jsx)(c.ua7, {
                                          text: el.NW.string(el.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  ec(ea({}, e), {
                                                      className: es.secureFramesIcon,
                                                      size: 'xs',
                                                      color: a.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': el.NW.string(el.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: es.statusContainer,
                        children: [
                            null != R &&
                                (0, r.jsx)('div', {
                                    className: es.status,
                                    children: R
                                }),
                            w,
                            j,
                            Z
                        ]
                    })
                ]
            })
        ]
    });
});
em.displayName = 'CallTileOverlay';
let eb = C.L,
    eg = ep;
