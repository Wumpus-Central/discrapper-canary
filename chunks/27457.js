n.d(t, {
    BP: () => eb,
    ZP: () => ey
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
    j = n(936847),
    S = n(512384),
    x = n(33316),
    E = n(576645),
    I = n(6242),
    N = n(757692),
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
    F = n(74538),
    H = n(221241),
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
        var t, n, l, a, y;
        let { participant: B, onDoubleClick: W, onContextMenu: V, onClick: $, onMouseDown: eu, onKeyDown: eh, className: ep, style: ef, containerStyle: eb, channel: ey, width: e_, inPopout: eO, onVideoResize: ev, inCall: eC = !1, selected: ej = !1, noBorder: eS = !1, noVideoRender: ex = !1, focused: eE = !1, blocked: eI = !1, ignored: eN = !1, fit: eP = C.L.CONTAIN, paused: ew = !1, pulseSpeakingIndicator: eZ = !1, forceIdle: eT = !1, inOverlayPopout: eA = !1 } = e,
            eR = i.useContext(Z.h9) || eT,
            [eD, eL] = i.useState(!1),
            ek = w.Sb.useSetting(),
            eM = (0, s.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled),
            [eU, eG] = i.useState(!1),
            eB = (0, s.e7)([R.default], () => R.default.getId()),
            eW = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
            eV = B.type === en.fO.ACTIVITY ? null : null == (t = B.user) ? void 0 : t.id,
            [eF] = (0, f.Z)(B.type === en.fO.ACTIVITY ? [B.applicationId] : []),
            eH = (0, s.e7)([O.Z], () => O.Z.getEnabled()),
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
            })(eB, B, ey.getGuildId()),
            e$ = B.type === en.fO.STREAM && eV === eB,
            e0 = F.ZP.isPremium(eW);
        i.useEffect(() => {
            if (e$ && !e0 && null != ey.hdStreamingUntil && new Date(ey.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = k.Z.getGoLiveSource(),
                            t = (0, b.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(ey.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, ey.hdStreamingUntil]);
        let e1 = (0, N.o)(B, eW),
            e3 = (0, I.lL)('CallTile', !0, eW, e1),
            e4 = (0, s.e7)([T.Z], () => (B.type === en.fO.USER && null != eV ? T.Z.getEffectForUserId(eV) : null)),
            e2 = (0, s.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(ey.id, null != eV ? eV : et.lds)),
            { simplifiedSettingsEnabled: e6 } = (0, H.Z)({ location: 'CallTile' }),
            { showGameIcon: e5 } = _.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e7 = (0, s.e7)([M.Z], () => (e5 && null != eV ? M.Z.findActivity(eV, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e5, eV]),
            e8 = (0, s.e7)([L.Z], () => ((null == e7 ? void 0 : e7.application_id) != null ? L.Z.getDetectableGame(e7.application_id) : null)),
            e9 = (0, s.e7)([p.Z], () => (null != e8 && (null == e7 ? void 0 : e7.application_id) != null ? p.Z.getApplication(null == e7 ? void 0 : e7.application_id) : void 0)),
            te = (0, P.wV)({
                userId: eV,
                channelId: ey.id
            }),
            tt = (0, P.zU)({
                streamKey: B.type === en.fO.STREAM ? B.id : null,
                channelId: ey.id
            }),
            tn = i.useMemo(() => (B.type === en.fO.STREAM ? null != tt && tt : B.type === en.fO.USER && null != te && te), [tt, te, B.type]);
        i.useEffect(() => {
            eL(eE);
        }, [eE]);
        let [tr, ti] = i.useState(!1),
            tl = i.useCallback(() => {
                h.Z.useReducedMotion || ti(!0);
            }, []);
        (0, E.J)(ey, tl);
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
                    selected: ej,
                    width: e_,
                    fit: eP,
                    onVideoResize: ev,
                    paused: ew,
                    inPopout: eO,
                    focused: eE,
                    inOverlayPopout: eA
                })),
                    (td = (0, r.jsx)(X._, {
                        participant: B,
                        selected: ej,
                        width: e_,
                        focused: eE,
                        idle: eR,
                        premiumIndicator: e3.enabled
                    })),
                    (th = eo.NW.formatToPlainString(eo.t.gHPz3d, { streamerName: B.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: ey,
                    inCall: eC,
                    participant: B,
                    fit: eP,
                    onVideoResize: ev,
                    paused: ew,
                    selected: ej,
                    width: e_,
                    blocked: eI,
                    ignored: eN,
                    noVideoRender: ex || eK,
                    pulseSpeakingIndicator: eZ,
                    inOverlayPopout: eA
                })),
                    (td = (0, r.jsx)(J.T, {
                        participant: B,
                        channelId: ey.id
                    })),
                    (th = eo.NW.formatToPlainString(eo.t['iC/x/f'], { username: B.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: eE,
                    participant: B,
                    selected: ej,
                    channel: ey,
                    width: e_
                })),
                    (th = eo.NW.formatToPlainString(eo.t.YCvOsL, { activityName: null == eF ? void 0 : eF.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(Q.Z, {
                    participant: B,
                    width: e_,
                    channelId: ey.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(X.Z, {
                    participant: B,
                    selected: ej,
                    width: e_,
                    fit: eP,
                    onVideoResize: ev,
                    paused: ew,
                    inPopout: eO,
                    focused: eE,
                    inOverlayPopout: eA
                });
        }
        let tp = i.useRef(null),
            tf = B.type === en.fO.STREAM ? c.pzj : c.Odl,
            tg = e6 ? eg : em;
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
                        (0, r.jsx)(x.Z, {
                            baseTileRef: tp.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(S.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eq,
                        className: es.tile,
                        children: [
                            (0, r.jsx)(q.Z, {
                                ref: tp,
                                className: o()(es.tile, {
                                    [es.noBorder]: eS,
                                    [es.noInteraction]: null == $,
                                    [es.idle]: eR
                                }),
                                noBorder: eS,
                                style: ef,
                                participantUserId: eV,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': th,
                                    className: es.tileChild,
                                    onDoubleClick: ta,
                                    onContextMenu: (e) => tc(e, e6 && B.type === en.fO.STREAM),
                                    onClick: ts,
                                    onMouseDown: eu,
                                    onKeyDown: eh,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e4 && null != eV
                                            ? (0, r.jsx)(A.Z, {
                                                  voiceChannelEffect: e4,
                                                  onComplete: () => (0, T.H)(eV),
                                                  userId: eV
                                              })
                                            : null,
                                        B.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: es.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eV,
                                                      channelId: ey.id,
                                                      guildId: ey.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == tp || null == (n = tp.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (y = null == tp || null == (l = tp.current) ? void 0 : l.clientHeight) ? y : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        eS
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: es.indicators,
                                                  children: td
                                              }),
                                        ej
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
                                                              focused: eE,
                                                              width: e_,
                                                              inCall: eC,
                                                              participantType: B.type,
                                                              hasVideo: null != eX && eX
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: eR,
                                                          platform: e2,
                                                          title: (0, z.Z)(ey, B),
                                                          blocked: eI,
                                                          ignored: eN,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: to,
                                                          participantUserId: eV,
                                                          application: e9,
                                                          secureFramesVerified: tn,
                                                          isHovered: eU
                                                      }
                                                  )
                                              ),
                                        B.type === en.fO.USER && eH
                                            ? (0, r.jsx)(v.Z, {
                                                  userId: B.id,
                                                  channelId: ey.id
                                              })
                                            : null,
                                        eC && !eS
                                            ? (0, r.jsx)('div', {
                                                  className: o()(es.border, {
                                                      [es.voiceChannelEffect]: !eE && null != e4,
                                                      [es.speaking]: eq && !eE
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
                            (0, r.jsx)(j.Z, {
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
    let { idle: t, title: n, width: l, focused: u, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: y, onContextMenu: _, muted: O, deafened: v, localMuted: C, serverMuted: j, serverDeafened: S, hasVideo: x, hideAudioIcon: E, onToggleMute: I } = e,
        N = (0, s.e7)([k.Z], () => null != m && k.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        P = (0, $.N)(l),
        w = (0, $.K)(l),
        [Z, T] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== B.Z.isOpen() && ((e = B.Z.isOpen()) || T(!1));
            };
        return B.Z.addChangeListener(t), () => B.Z.removeChangeListener(t);
    }, []);
    let A = !E && f === en.fO.STREAM && x && (!w || C),
        R = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null;
        })({
            localMuted: C,
            serverMuted: j,
            serverDeafened: S,
            deafened: v,
            muted: O
        });
    return (0, r.jsxs)('div', {
        className: o()(es.overlayContainer, { [es.compact]: w }),
        children: [
            (0, r.jsx)('div', {
                className: o()(es.overlayTop, { [es.small]: l < 195 }),
                children:
                    N || d === et.ZUi.AUTO_PROBING
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
            !P &&
                (0, r.jsxs)('div', {
                    className: o()(es.overlayBottom, { [es.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: o()(es.experimentOverlayTitle, { [es.compact]: w }),
                            color: 'none',
                            variant: w ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != R &&
                                    f === en.fO.USER &&
                                    (0, r.jsx)(R, {
                                        className: o()(es.experimentTitleIcon, { [es.compact]: w }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
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
                                    : (0, r.jsx)(ep, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(es.experimentTitleIcon, { [es.compact]: w })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: es.overlayTitleText,
                                          children: n
                                      }),
                                y &&
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
                        !u &&
                            (0, r.jsxs)('div', {
                                className: es.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ef, {
                                        onClick: (e) => {
                                            e.stopPropagation(), T(!0), _(e, !0, en.A5.THREE_DOT);
                                        },
                                        tooltipText: eo.NW.string(eo.t['+1H47u']),
                                        icon: c.xhG,
                                        hideWhenInactive: !Z,
                                        compact: w
                                    }),
                                    A &&
                                        (0, r.jsx)(ef, {
                                            onClick: I,
                                            tooltipText: C ? eo.NW.string(eo.t.YqAjX1) : eo.NW.string(eo.t['w4m94+']),
                                            icon: C ? c.OyP : c.gj8,
                                            hideWhenInactive: !C && !Z,
                                            compact: w
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
    let { muted: t, deafened: n, localMuted: i, serverMuted: l, serverDeafened: u, idle: d, title: h, width: p, hasVideo: f, inCall: m, localVideoDisabled: b, videoToggleState: _, focused: O, blocked: v, ignored: C, hideAudioIcon: j, participantType: S, participantUserId: x, onContextMenu: E, onToggleMute: I, platform: N, application: P, secureFramesVerified: w } = e,
        Z = null,
        T = null,
        A = null,
        R = (0, $.K)(p),
        D = (0, $.N)(p),
        L = (0, s.e7)([k.Z], () => null != x && k.Z.isLocalVideoAutoDisabled(x, (0, g.Z)(S)), [x, S]);
    if (!j)
        if (i && S === en.fO.STREAM && f && !O)
            Z = (0, r.jsx)(c.ua7, {
                text: eo.NW.string(eo.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
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
        else if (i || S !== en.fO.STREAM || !f || R || O) {
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
                                e.stopPropagation(), null == t || t(), I();
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
        S === en.fO.STREAM &&
            !O &&
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
                                e.stopPropagation(), null == t || t(), E(e);
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
        S === en.fO.USER && null != P
            ? (0, r.jsx)(c.ua7, {
                  text: eo.NW.formatToPlainString(eo.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(ea({}, e), {
                              className: o()(es.gameIconContainer, { [es.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(y.Z, {
                                  className: es.gameIcon,
                                  game: P,
                                  size: y.Z.Sizes.SMALL
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
                    L || _ === et.ZUi.AUTO_PROBING
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
                                  v
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
                                      participantType: S,
                                      platform: N,
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
    ey = eh;
