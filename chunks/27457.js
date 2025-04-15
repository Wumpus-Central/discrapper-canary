n.d(t, {
    BP: () => eb,
    ZP: () => e_
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
    _ = n(925329),
    y = n(649739),
    v = n(37091),
    O = n(6572),
    C = n(352978),
    S = n(936847),
    j = n(512384),
    E = n(33316),
    x = n(576645),
    N = n(6242),
    I = n(757692),
    P = n(210975),
    w = n(695346),
    Z = n(937995),
    T = n(456631),
    A = n(274459),
    R = n(314897),
    D = n(857192),
    L = n(77498),
    k = n(131951),
    M = n(158776),
    U = n(594174),
    G = n(979651),
    B = n(574254),
    W = n(374129),
    V = n(639351),
    H = n(74538),
    F = n(221241),
    z = n(584729),
    Y = n(334374),
    K = n(849171),
    q = n(607187),
    Q = n(624834),
    X = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    er = n(37113),
    ei = n(524484),
    el = n(65154),
    eo = n(388032),
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
let ed = [en.fO.ACTIVITY, en.fO.PRESENCE_EMBEDDED_ACTIVITY],
    eh = i.memo((e) => {
        var t, n, l, a, _;
        let { participant: B, onDoubleClick: W, onContextMenu: V, onClick: $, onMouseDown: eu, onKeyDown: eh, className: ep, style: ef, containerStyle: eb, channel: e_, width: ey, inPopout: ev, onVideoResize: eO, inCall: eC = !1, selected: eS = !1, noBorder: ej = !1, noVideoRender: eE = !1, focused: ex = !1, blocked: eN = !1, ignored: eI = !1, fit: eP = C.L.CONTAIN, paused: ew = !1, pulseSpeakingIndicator: eZ = !1, forceIdle: eT = !1, inOverlayPopout: eA = !1 } = e,
            eR = i.useContext(Z.h9) || eT,
            [eD, eL] = i.useState(!1),
            ek = w.Sb.useSetting(),
            eM = (0, s.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled),
            [eU, eG] = i.useState(!1),
            eB = (0, s.e7)([R.default], () => R.default.getId()),
            eW = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
            eV = B.type === en.fO.ACTIVITY ? null : null == (t = B.user) ? void 0 : t.id,
            [eH] = (0, f.Z)(B.type === en.fO.ACTIVITY ? [B.applicationId] : []),
            eF = (0, s.e7)([v.Z], () => v.Z.getEnabled()),
            ez = (0, s.e7)([k.Z], () => null != eV && k.Z.isLocalVideoDisabled(eV, (0, g.Z)(B.type)), [eV, B.type]),
            eY = (0, s.e7)([k.Z], () => (null != eV ? k.Z.getVideoToggleState(eV, (0, g.Z)(B.type)) : et.ZUi.NONE), [eV, B.type]),
            eK = eY === et.ZUi.AUTO_PROBING,
            { speaking: eq, ringing: eQ, hasVideo: eX } = (0, ee.Z)(B, eB),
            eJ = (function (e, t, n) {
                var r, i, l, o;
                let a = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, s.cj)([G.Z], () => {
                        var e, t, r;
                        let i = G.Z.getVoiceState(n, a);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, s.cj)(
                        [k.Z],
                        () => {
                            let n = (0, g.Z)(t.type);
                            return e === a
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: k.Z.isLocalMute(a, n),
                                      localVideoDisabled: k.Z.isLocalVideoDisabled(a, n),
                                      localVideoAutoDisabled: k.Z.isLocalVideoAutoDisabled(a, n)
                                  };
                        },
                        [e, t.type, a]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null != (l = t.type === en.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === en.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eB, B, e_.getGuildId()),
            e$ = B.type === en.fO.STREAM && eV === eB,
            e0 = H.ZP.isPremium(eW);
        i.useEffect(() => {
            if (e$ && !e0 && null != e_.hdStreamingUntil && new Date(e_.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = k.Z.getGoLiveSource(),
                            t = (0, b.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(e_.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, e_.hdStreamingUntil]);
        let e1 = (0, I.o)(B, eW),
            e4 = (0, N.lL)('CallTile', !0, eW, e1),
            e3 = (0, s.e7)([T.Z], () => (B.type === en.fO.USER && null != eV ? T.Z.getEffectForUserId(eV) : null)),
            e6 = (0, s.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(e_.id, null != eV ? eV : et.lds)),
            { simplifiedSettingsEnabled: e2 } = (0, F.Z)({ location: 'CallTile' }),
            { showGameIcon: e9 } = y.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e5 = (0, s.e7)([M.Z], () => (e9 && null != eV ? M.Z.findActivity(eV, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e9, eV]),
            e7 = (0, s.e7)([L.Z], () => ((null == e5 ? void 0 : e5.application_id) != null ? L.Z.getDetectableGame(e5.application_id) : null)),
            e8 = (0, s.e7)([p.Z], () => (null != e7 && (null == e5 ? void 0 : e5.application_id) != null ? p.Z.getApplication(null == e5 ? void 0 : e5.application_id) : void 0)),
            te = (0, P.wV)({
                userId: eV,
                channelId: e_.id
            }),
            tt = (0, P.zU)({
                streamKey: B.type === en.fO.STREAM ? B.id : null,
                channelId: e_.id
            }),
            tn = i.useMemo(() => (B.type === en.fO.STREAM ? null != tt && tt : B.type === en.fO.USER && null != te && te), [tt, te, B.type]);
        i.useEffect(() => {
            eL(ex);
        }, [ex]);
        let [tr, ti] = i.useState(!1),
            tl = i.useCallback(() => {
                h.Z.useReducedMotion || ti(!0);
            }, []);
        (0, x.J)(e_, tl);
        let to = i.useCallback(() => {
                null != eV && u.Z.toggleLocalMute(eV, el.Yn.STREAM);
            }, [eV]),
            ts = i.useCallback(
                (e) => {
                    null == $ || $(B, e);
                },
                [$, B]
            ),
            ta = i.useCallback(
                (e) => {
                    null == W || W(B, e);
                },
                [W, B]
            ),
            tc = i.useCallback(
                (e, t, n) => {
                    null == V || V(B, e, t, n);
                },
                [V, B]
            ),
            tu = null,
            td = null,
            th = '';
        switch (B.type) {
            case en.fO.STREAM:
                (tu = (0, r.jsx)(X.Z, {
                    participant: B,
                    selected: eS,
                    width: ey,
                    fit: eP,
                    onVideoResize: eO,
                    paused: ew,
                    inPopout: ev,
                    focused: ex,
                    inOverlayPopout: eA
                })),
                    (td = (0, r.jsx)(X._, {
                        participant: B,
                        selected: eS,
                        width: ey,
                        focused: ex,
                        idle: eR,
                        premiumIndicator: e4.enabled
                    })),
                    (th = eo.NW.formatToPlainString(eo.t.gHPz3d, { streamerName: B.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: e_,
                    inCall: eC,
                    participant: B,
                    fit: eP,
                    onVideoResize: eO,
                    paused: ew,
                    selected: eS,
                    width: ey,
                    blocked: eN,
                    ignored: eI,
                    noVideoRender: eE || eK,
                    pulseSpeakingIndicator: eZ,
                    inOverlayPopout: eA
                })),
                    (td = (0, r.jsx)(J.T, {
                        participant: B,
                        channelId: e_.id
                    })),
                    (th = eo.NW.formatToPlainString(eo.t['iC/x/f'], { username: B.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: ex,
                    participant: B,
                    selected: eS,
                    channel: e_,
                    width: ey
                })),
                    (th = eo.NW.formatToPlainString(eo.t.YCvOsL, { activityName: null == eH ? void 0 : eH.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(Q.Z, {
                    participant: B,
                    width: ey,
                    channelId: e_.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(X.Z, {
                    participant: B,
                    selected: eS,
                    width: ey,
                    fit: eP,
                    onVideoResize: eO,
                    paused: ew,
                    inPopout: ev,
                    focused: ex,
                    inOverlayPopout: eA
                });
        }
        let tp = i.useRef(null),
            tf = B.type === en.fO.STREAM ? c.pzj : c.Odl,
            tg = e2 ? eg : em;
        return (0, r.jsx)(d.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: o()(es.wrapper, { [es.ringing]: eQ }, ep),
                style: eb,
                onMouseEnter: () => {
                    eG(!0);
                },
                onMouseLeave: () => {
                    eG(!1);
                },
                children: [
                    tr &&
                        B.type === en.fO.STREAM &&
                        (0, r.jsx)(E.Z, {
                            baseTileRef: tp.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(j.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eq,
                        className: es.tile,
                        children: [
                            (0, r.jsx)(q.Z, {
                                ref: tp,
                                className: o()(es.tile, {
                                    [es.noBorder]: ej,
                                    [es.noInteraction]: null == $,
                                    [es.idle]: eR
                                }),
                                noBorder: ej,
                                style: ef,
                                participantUserId: eV,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': th,
                                    className: es.tileChild,
                                    onDoubleClick: ta,
                                    onContextMenu: (e) => tc(e, e2 && B.type === en.fO.STREAM),
                                    onClick: ts,
                                    onMouseDown: eu,
                                    onKeyDown: eh,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e3 && null != eV
                                            ? (0, r.jsx)(A.Z, {
                                                  voiceChannelEffect: e3,
                                                  onComplete: () => (0, T.H)(eV),
                                                  userId: eV
                                              })
                                            : null,
                                        B.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: es.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eV,
                                                      channelId: e_.id,
                                                      guildId: e_.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == tp || null == (n = tp.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (_ = null == tp || null == (l = tp.current) ? void 0 : l.clientHeight) ? _ : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        ej
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
                                        ed.includes(B.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  tg,
                                                  ec(
                                                      ea(
                                                          {
                                                              focused: ex,
                                                              width: ey,
                                                              inCall: eC,
                                                              participantType: B.type,
                                                              hasVideo: null != eX && eX
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: eR,
                                                          platform: e6,
                                                          title: (0, z.Z)(e_, B),
                                                          blocked: eN,
                                                          ignored: eI,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: to,
                                                          participantUserId: eV,
                                                          application: e8,
                                                          secureFramesVerified: tn,
                                                          isHovered: eU
                                                      }
                                                  )
                                              ),
                                        B.type === en.fO.USER && eF
                                            ? (0, r.jsx)(O.Z, {
                                                  userId: B.id,
                                                  channelId: e_.id
                                              })
                                            : null,
                                        eC && !ej
                                            ? (0, r.jsx)('div', {
                                                  className: o()(es.border, {
                                                      [es.voiceChannelEffect]: !ex && null != e3,
                                                      [es.speaking]: eq && !ex
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            ek &&
                                eM &&
                                eU &&
                                (0, r.jsx)(Y.Z, {
                                    currentUserId: eB,
                                    participant: B
                                }),
                            (0, r.jsx)(S.Z, {
                                isFiring: eD,
                                callTileRef: tp.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ep(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === en.fO.STREAM)
        return n === en.wR.XBOX
            ? (0, r.jsx)(V.Z, { className: i })
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
            return (0, r.jsx)(V.Z, { className: i });
        case en.wR.PLAYSTATION:
            return (0, r.jsx)(W.Z, { className: i });
        default:
            return null;
    }
}
function ef(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = eu(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                ec(ea({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), l(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: o()(es.overlayButton, {
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
eh.displayName = 'CallTile';
let eg = i.memo((e) => {
    let { idle: t, title: n, width: l, videoToggleState: u, blocked: d, ignored: h, participantType: p, participantUserId: f, platform: m, secureFramesVerified: b, onContextMenu: _, muted: y, deafened: v, localMuted: O, serverMuted: C, serverDeafened: S, hasVideo: j, hideAudioIcon: E, onToggleMute: x } = e,
        N = (0, s.e7)([k.Z], () => null != f && k.Z.isLocalVideoAutoDisabled(f, (0, g.Z)(p)), [f, p]),
        I = (0, $.N)(l),
        P = (0, $.K)(l),
        [w, Z] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== B.Z.isOpen() && ((e = B.Z.isOpen()) || Z(!1));
            };
        return B.Z.addChangeListener(t), () => B.Z.removeChangeListener(t);
    }, []);
    let T = !E && p === en.fO.STREAM && j && (!P || O),
        A = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null;
        })({
            localMuted: O,
            serverMuted: C,
            serverDeafened: S,
            deafened: v,
            muted: y
        });
    return (0, r.jsxs)('div', {
        className: o()(es.overlayContainer, { [es.compact]: P }),
        children: [
            (0, r.jsx)('div', {
                className: o()(es.overlayTop, { [es.small]: l < 195 }),
                children:
                    N || u === et.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(es.overlayTitle, es.videoDisabledTitle),
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
                                          children: eo.NW.string(eo.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !I &&
                (0, r.jsxs)('div', {
                    className: o()(es.overlayBottom, { [es.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: o()(es.experimentOverlayTitle, { [es.compact]: P }),
                            color: 'none',
                            variant: P ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != A &&
                                    p === en.fO.USER &&
                                    (0, r.jsx)(A, {
                                        className: o()(es.experimentTitleIcon, { [es.compact]: P }),
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
                                h
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
                                    : (0, r.jsx)(ep, {
                                          participantType: p,
                                          platform: m,
                                          className: o()(es.experimentTitleIcon, { [es.compact]: P })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: es.overlayTitleText,
                                          children: n
                                      }),
                                b &&
                                    (0, r.jsx)(c.ua7, {
                                        text: eo.NW.string(eo.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                ec(ea({}, e), {
                                                    className: es.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': eo.NW.string(eo.t.mR9cf3)
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
                                        e.stopPropagation(), Z(!0), _(e, !0, en.A5.THREE_DOT);
                                    },
                                    tooltipText: eo.NW.string(eo.t['+1H47u']),
                                    icon: c.xhG,
                                    hideWhenInactive: !w,
                                    compact: P
                                }),
                                T &&
                                    (0, r.jsx)(ef, {
                                        onClick: x,
                                        tooltipText: O ? eo.NW.string(eo.t.YqAjX1) : eo.NW.string(eo.t['w4m94+']),
                                        icon: O ? c.OyP : c.gj8,
                                        hideWhenInactive: !O && !w,
                                        compact: P
                                    })
                            ]
                        })
                    ]
                })
        ]
    });
});
eg.displayName = 'CallTileOverlayV2';
let em = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: l, serverDeafened: u, idle: d, title: h, width: p, hasVideo: f, inCall: m, localVideoDisabled: b, videoToggleState: y, focused: v, blocked: O, ignored: C, hideAudioIcon: S, participantType: j, participantUserId: E, onContextMenu: x, onToggleMute: N, platform: I, application: P, secureFramesVerified: w } = e,
        Z = null,
        T = null,
        A = null,
        R = (0, $.K)(p),
        D = (0, $.N)(p),
        L = (0, s.e7)([k.Z], () => null != E && k.Z.isLocalVideoAutoDisabled(E, (0, g.Z)(j)), [E, j]);
    if (!S)
        if (i && j === en.fO.STREAM && f && !v)
            Z = (0, r.jsx)(c.ua7, {
                text: eo.NW.string(eo.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), N();
                            },
                            className: o()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || j !== en.fO.STREAM || !f || R || v) {
            let e;
            u ? (e = c.Vm4) : l ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (Z =
                    null != (Z = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: es.status,
                              children: Z
                          })
                        : null);
        } else
            Z = (0, r.jsx)(c.ua7, {
                text: eo.NW.string(eo.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), N();
                            },
                            className: o()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    (m && k.Z.supports(el.AN.VIDEO)) || !f
        ? m &&
          f &&
          b &&
          !L &&
          (T = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor'
          }))
        : (T = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        j === en.fO.STREAM &&
            !v &&
            f &&
            (A = (0, r.jsx)(c.ua7, {
                text: eo.NW.string(eo.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), x(e);
                            },
                            className: o()(es.status, es.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let M =
        j === en.fO.USER && null != P
            ? (0, r.jsx)(c.ua7, {
                  text: eo.NW.formatToPlainString(eo.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(ea({}, e), {
                              className: o()(es.gameIconContainer, { [es.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(_.Z, {
                                  className: es.gameIcon,
                                  game: P,
                                  size: _.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: es.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: o()(es.overlayTop, { [es.small]: p < 195 }),
                children:
                    L || y === et.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(es.overlayTitle, es.videoDisabledTitle),
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
                                          children: eo.NW.string(eo.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: o()(es.overlayBottom, { [es.small]: p < 195 }),
                children: [
                    D
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: o()(es.overlayTitle, { [es.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  O
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
                                  (0, r.jsx)(ep, {
                                      participantType: j,
                                      platform: I,
                                      className: es.titleIcon
                                  }),
                                  null != h && '' !== h
                                      ? (0, r.jsx)('span', {
                                            className: es.overlayTitleText,
                                            children: h
                                        })
                                      : null,
                                  w &&
                                      (0, r.jsx)(c.ua7, {
                                          text: eo.NW.string(eo.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  ec(ea({}, e), {
                                                      className: es.secureFramesIcon,
                                                      size: 'xs',
                                                      color: a.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': eo.NW.string(eo.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: es.statusContainer,
                        children: [
                            null != T &&
                                (0, r.jsx)('div', {
                                    className: es.status,
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
em.displayName = 'CallTileOverlay';
let eb = C.L,
    e_ = eh;
