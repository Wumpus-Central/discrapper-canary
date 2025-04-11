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
    _ = n(812206),
    h = n(835473),
    f = n(414910),
    m = n(415635),
    b = n(578976),
    g = n(925329),
    E = n(649739),
    O = n(37091),
    y = n(6572),
    C = n(352978),
    S = n(936847),
    N = n(512384),
    v = n(33316),
    T = n(576645),
    I = n(6242),
    x = n(757692),
    P = n(210975),
    A = n(695346),
    R = n(937995),
    w = n(456631),
    j = n(274459),
    k = n(314897),
    L = n(857192),
    M = n(77498),
    D = n(131951),
    Z = n(158776),
    U = n(594174),
    V = n(979651),
    W = n(574254),
    G = n(374129),
    H = n(639351),
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
        let { participant: W, onDoubleClick: G, onContextMenu: H, onClick: $, onMouseDown: eu, onKeyDown: ep, className: e_, style: eh, containerStyle: eb, channel: eg, width: eE, inPopout: eO, onVideoResize: ey, inCall: eC = !1, selected: eS = !1, noBorder: eN = !1, noVideoRender: ev = !1, focused: eT = !1, blocked: eI = !1, ignored: ex = !1, fit: eP = C.L.CONTAIN, paused: eA = !1, pulseSpeakingIndicator: eR = !1, forceIdle: ew = !1, inOverlayPopout: ej = !1 } = e,
            ek = i.useContext(R.h9) || ew,
            [eL, eM] = i.useState(!1),
            eD = A.Sb.useSetting(),
            eZ = (0, s.e7)([L.default], () => L.default.isStreamInfoOverlayEnabled),
            [eU, eV] = i.useState(!1),
            eW = (0, s.e7)([k.default], () => k.default.getId()),
            eG = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
            eH = W.type === en.fO.ACTIVITY ? null : null == (t = W.user) ? void 0 : t.id,
            [eB] = (0, h.Z)(W.type === en.fO.ACTIVITY ? [W.applicationId] : []),
            eF = (0, s.e7)([O.Z], () => O.Z.getEnabled()),
            ez = (0, s.e7)([D.Z], () => null != eH && D.Z.isLocalVideoDisabled(eH, (0, f.Z)(W.type)), [eH, W.type]),
            eY = (0, s.e7)([D.Z], () => (null != eH ? D.Z.getVideoToggleState(eH, (0, f.Z)(W.type)) : et.ZUi.NONE), [eH, W.type]),
            eK = eY === et.ZUi.AUTO_PROBING,
            { speaking: eX, ringing: eQ, hasVideo: eq } = (0, ee.Z)(W, eW),
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
                            let n = (0, f.Z)(t.type);
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
            })(eW, W, eg.getGuildId()),
            e$ = W.type === en.fO.STREAM && eH === eW,
            e0 = B.ZP.isPremium(eG);
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
        let e1 = (0, x.o)(W, eG),
            e4 = (0, I.lL)('CallTile', !0, eG, e1),
            e3 = (0, s.e7)([w.Z], () => (W.type === en.fO.USER && null != eH ? w.Z.getEffectForUserId(eH) : null)),
            e6 = (0, s.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eg.id, null != eH ? eH : et.lds)),
            { simplifiedSettingsEnabled: e8 } = (0, F.Z)({ location: 'CallTile' }),
            { showGameIcon: e2 } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e7 = (0, s.e7)([Z.Z], () => (e2 && null != eH ? Z.Z.findActivity(eH, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e2, eH]),
            e5 = (0, s.e7)([M.Z], () => ((null == e7 ? void 0 : e7.application_id) != null ? M.Z.getDetectableGame(e7.application_id) : null)),
            e9 = (0, s.e7)([_.Z], () => (null != e5 && (null == e7 ? void 0 : e7.application_id) != null ? _.Z.getApplication(null == e7 ? void 0 : e7.application_id) : void 0)),
            te = (0, P.wV)({
                userId: eH,
                channelId: eg.id
            }),
            tt = (0, P.zU)({
                streamKey: W.type === en.fO.STREAM ? W.id : null,
                channelId: eg.id
            }),
            tn = i.useMemo(() => (W.type === en.fO.STREAM ? null != tt && tt : W.type === en.fO.USER && null != te && te), [tt, te, W.type]);
        i.useEffect(() => {
            eM(eT);
        }, [eT]);
        let [tr, ti] = i.useState(!1),
            to = i.useCallback(() => {
                p.Z.useReducedMotion || ti(!0);
            }, []);
        (0, T.J)(eg, to);
        let tl = i.useCallback(() => {
                null != eH && u.Z.toggleLocalMute(eH, eo.Yn.STREAM);
            }, [eH]),
            ts = i.useCallback(
                (e) => {
                    null == $ || $(W, e);
                },
                [$, W]
            ),
            ta = i.useCallback(
                (e) => {
                    null == G || G(W, e);
                },
                [G, W]
            ),
            tc = i.useCallback(
                (e, t, n) => {
                    null == H || H(W, e, t, n);
                },
                [H, W]
            ),
            tu = null,
            td = null,
            tp = '';
        switch (W.type) {
            case en.fO.STREAM:
                (tu = (0, r.jsx)(q.Z, {
                    participant: W,
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
                        participant: W,
                        selected: eS,
                        width: eE,
                        focused: eT,
                        idle: ek,
                        premiumIndicator: e4.enabled
                    })),
                    (tp = el.NW.formatToPlainString(el.t.gHPz3d, { streamerName: W.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: eg,
                    inCall: eC,
                    participant: W,
                    fit: eP,
                    onVideoResize: ey,
                    paused: eA,
                    selected: eS,
                    width: eE,
                    blocked: eI,
                    ignored: ex,
                    noVideoRender: ev || eK,
                    pulseSpeakingIndicator: eR,
                    inOverlayPopout: ej
                })),
                    (td = (0, r.jsx)(J.T, {
                        participant: W,
                        channelId: eg.id
                    })),
                    (tp = el.NW.formatToPlainString(el.t['iC/x/f'], { username: W.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: eT,
                    participant: W,
                    selected: eS,
                    channel: eg,
                    width: eE
                })),
                    (tp = el.NW.formatToPlainString(el.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(Q.Z, {
                    participant: W,
                    width: eE,
                    channelId: eg.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(q.Z, {
                    participant: W,
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
        let t_ = i.useRef(null),
            th = W.type === en.fO.STREAM ? c.pzj : c.Odl,
            tf = e8 ? ef : em;
        return (0, r.jsx)(d.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: l()(es.wrapper, { [es.ringing]: eQ }, e_),
                style: eb,
                onMouseEnter: () => {
                    eV(!0);
                },
                onMouseLeave: () => {
                    eV(!1);
                },
                children: [
                    tr &&
                        W.type === en.fO.STREAM &&
                        (0, r.jsx)(v.Z, {
                            baseTileRef: t_.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(N.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eX,
                        className: es.tile,
                        children: [
                            (0, r.jsx)(X.Z, {
                                ref: t_,
                                className: l()(es.tile, {
                                    [es.noBorder]: eN,
                                    [es.noInteraction]: null == $,
                                    [es.idle]: ek
                                }),
                                noBorder: eN,
                                style: eh,
                                participantUserId: eH,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': tp,
                                    className: es.tileChild,
                                    onDoubleClick: ta,
                                    onContextMenu: (e) => tc(e, e8 && W.type === en.fO.STREAM),
                                    onClick: ts,
                                    onMouseDown: eu,
                                    onKeyDown: ep,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e3 && null != eH
                                            ? (0, r.jsx)(j.Z, {
                                                  voiceChannelEffect: e3,
                                                  onComplete: () => (0, w.H)(eH),
                                                  userId: eH
                                              })
                                            : null,
                                        W.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: es.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eH,
                                                      channelId: eg.id,
                                                      guildId: eg.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == t_ || null == (n = t_.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (g = null == t_ || null == (o = t_.current) ? void 0 : o.clientHeight) ? g : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        eN
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: es.indicators,
                                                  children: td
                                              }),
                                        eS
                                            ? (0, r.jsx)('div', {
                                                  className: es.selectedScreen,
                                                  children: (0, r.jsx)(th, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: es.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ed.includes(W.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  tf,
                                                  ec(
                                                      ea(
                                                          {
                                                              focused: eT,
                                                              width: eE,
                                                              inCall: eC,
                                                              participantType: W.type,
                                                              hasVideo: null != eq && eq
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: ek,
                                                          platform: e6,
                                                          title: (0, z.Z)(eg, W),
                                                          blocked: eI,
                                                          ignored: ex,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: tl,
                                                          participantUserId: eH,
                                                          application: e9,
                                                          secureFramesVerified: tn,
                                                          isHovered: eU
                                                      }
                                                  )
                                              ),
                                        W.type === en.fO.USER && eF
                                            ? (0, r.jsx)(y.Z, {
                                                  userId: W.id,
                                                  channelId: eg.id
                                              })
                                            : null,
                                        eC && !eN
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
                                    currentUserId: eW,
                                    participant: W
                                }),
                            (0, r.jsx)(S.Z, {
                                isFiring: eL,
                                callTileRef: t_.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function e_(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === en.fO.STREAM)
        return n === en.wR.XBOX
            ? (0, r.jsx)(H.Z, { className: i })
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
            return (0, r.jsx)(H.Z, { className: i });
        case en.wR.PLAYSTATION:
            return (0, r.jsx)(G.Z, { className: i });
        default:
            return null;
    }
}
function eh(e) {
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
let ef = i.memo((e) => {
    let { idle: t, title: n, width: o, videoToggleState: u, blocked: d, ignored: p, participantType: _, participantUserId: h, platform: m, secureFramesVerified: b, onContextMenu: g, muted: E, deafened: O, localMuted: y, serverMuted: C, serverDeafened: S, hasVideo: N, hideAudioIcon: v, onToggleMute: T } = e,
        I = (0, s.e7)([D.Z], () => null != h && D.Z.isLocalVideoAutoDisabled(h, (0, f.Z)(_)), [h, _]),
        x = (0, $.N)(o),
        P = (0, $.K)(o),
        [A, R] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== W.Z.isOpen() && ((e = W.Z.isOpen()) || R(!1));
            };
        return W.Z.addChangeListener(t), () => W.Z.removeChangeListener(t);
    }, []);
    let w = !v && _ === en.fO.STREAM && N && (!P || y),
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
                                    _ === en.fO.USER &&
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
                                    : (0, r.jsx)(e_, {
                                          participantType: _,
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
                                (0, r.jsx)(eh, {
                                    onClick: (e) => {
                                        e.stopPropagation(), R(!0), g(e, !0, en.A5.THREE_DOT);
                                    },
                                    tooltipText: el.NW.string(el.t['+1H47u']),
                                    icon: c.xhG,
                                    hideWhenInactive: !A,
                                    compact: P
                                }),
                                w &&
                                    (0, r.jsx)(eh, {
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
ef.displayName = 'CallTileOverlayV2';
let em = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: o, serverDeafened: u, idle: d, title: p, width: _, hasVideo: h, inCall: m, localVideoDisabled: b, videoToggleState: E, focused: O, blocked: y, ignored: C, hideAudioIcon: S, participantType: N, participantUserId: v, onContextMenu: T, onToggleMute: I, platform: x, application: P, secureFramesVerified: A } = e,
        R = null,
        w = null,
        j = null,
        k = (0, $.K)(_),
        L = (0, $.N)(_),
        M = (0, s.e7)([D.Z], () => null != v && D.Z.isLocalVideoAutoDisabled(v, (0, f.Z)(N)), [v, N]);
    if (!S)
        if (i && N === en.fO.STREAM && h && !O)
            R = (0, r.jsx)(c.ua7, {
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
        else if (i || N !== en.fO.STREAM || !h || k || O) {
            let e;
            u ? (e = c.Vm4) : o ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (R =
                    null != (R = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: es.status,
                              children: R
                          })
                        : null);
        } else
            R = (0, r.jsx)(c.ua7, {
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
    (m && D.Z.supports(eo.AN.VIDEO)) || !h
        ? m &&
          h &&
          b &&
          !M &&
          (w = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor'
          }))
        : (w = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        N === en.fO.STREAM &&
            !O &&
            h &&
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
        N === en.fO.USER && null != P
            ? (0, r.jsx)(c.ua7, {
                  text: el.NW.formatToPlainString(el.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(ea({}, e), {
                              className: l()(es.gameIconContainer, { [es.gameIconSmall]: _ < 500 }),
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
                className: l()(es.overlayTop, { [es.small]: _ < 195 }),
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
                className: l()(es.overlayBottom, { [es.small]: _ < 195 }),
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
                                  (0, r.jsx)(e_, {
                                      participantType: N,
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
                            null != w &&
                                (0, r.jsx)('div', {
                                    className: es.status,
                                    children: w
                                }),
                            R,
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
