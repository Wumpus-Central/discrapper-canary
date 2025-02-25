t.d(l, {
    BP: () => eg,
    ZP: () => eh
}),
    t(47120);
var n = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(442837),
    o = t(692547),
    c = t(481060),
    u = t(846027),
    d = t(410575),
    m = t(607070),
    p = t(812206),
    f = t(835473),
    v = t(682901),
    x = t(414910),
    g = t(415635),
    h = t(578976),
    j = t(925329),
    O = t(649739),
    N = t(37091),
    E = t(6572),
    T = t(352978),
    y = t(936847),
    C = t(512384),
    I = t(33316),
    Z = t(576645),
    b = t(6242),
    S = t(757692),
    _ = t(210975),
    R = t(695346),
    A = t(937995),
    P = t(456631),
    k = t(274459),
    D = t(314897),
    V = t(857192),
    w = t(77498),
    M = t(131951),
    z = t(158776),
    U = t(594174),
    L = t(979651),
    G = t(574254),
    W = t(374129),
    Y = t(639351),
    B = t(74538),
    H = t(584729),
    F = t(334374),
    X = t(849171),
    K = t(607187),
    q = t(624834),
    J = t(833519),
    Q = t(462061),
    $ = t(623825),
    ee = t(839662),
    el = t(981631),
    et = t(354459),
    en = t(37113),
    ei = t(524484),
    er = t(65154),
    es = t(388032),
    ea = t(668595);
function eo(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[l] = n);
            });
    }
    return e;
}
function ec(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
function eu(e, l) {
    if (null == e) return {};
    var t,
        n,
        i = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                i = {},
                r = Object.keys(e);
            for (n = 0; n < r.length; n++) (t = r[n]), l.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, l);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (n = 0; n < r.length; n++) (t = r[n]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    }
    return i;
}
let ed = [et.fO.ACTIVITY, et.fO.PRESENCE_EMBEDDED_ACTIVITY],
    em = i.memo((e) => {
        var l, t, r, o, j;
        let { participant: G, onDoubleClick: W, onContextMenu: Y, onClick: $, onMouseDown: eu, onKeyDown: em, className: ep, style: ef, containerStyle: eg, channel: eh, width: ej, inPopout: eO, onVideoResize: eN, inCall: eE = !1, selected: eT = !1, noBorder: ey = !1, noVideoRender: eC = !1, focused: eI = !1, blocked: eZ = !1, ignored: eb = !1, fit: eS = T.L.CONTAIN, paused: e_ = !1, pulseSpeakingIndicator: eR = !1, forceIdle: eA = !1, inOverlayPopout: eP = !1 } = e,
            ek = i.useContext(A.h9) || eA,
            [eD, eV] = i.useState(!1),
            ew = R.Sb.useSetting(),
            eM = (0, a.e7)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [ez, eU] = i.useState(!1),
            eL = (0, a.e7)([D.default], () => D.default.getId()),
            eG = (0, a.e7)([U.default], () => U.default.getCurrentUser()),
            eW = G.type === et.fO.ACTIVITY ? null : null === (l = G.user) || void 0 === l ? void 0 : l.id,
            [eY] = (0, f.Z)(G.type === et.fO.ACTIVITY ? [G.applicationId] : []),
            eB = (0, a.e7)([N.Z], () => N.Z.getEnabled()),
            eH = (0, a.e7)([M.Z], () => null != eW && M.Z.isLocalVideoDisabled(eW, (0, x.Z)(G.type)), [eW, G.type]),
            eF = (0, a.e7)([M.Z], () => (null != eW ? M.Z.getVideoToggleState(eW, (0, x.Z)(G.type)) : el.ZUi.NONE), [eW, G.type]),
            eX = eF === el.ZUi.AUTO_PROBING,
            { speaking: eK, ringing: eq, hasVideo: eJ } = (0, ee.Z)(G, eL),
            eQ = (function (e, l, t) {
                var n, i, r, s;
                let o = l.type !== et.fO.ACTIVITY ? l.user.id : l.applicationId,
                    c = (0, a.cj)([L.Z], () => {
                        var e, l, n;
                        let i = L.Z.getVoiceState(t, o);
                        return {
                            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
                            deafened: null !== (l = null == i ? void 0 : i.deaf) && void 0 !== l && l,
                            suppressed: null !== (n = null == i ? void 0 : i.suppress) && void 0 !== n && n,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, a.cj)(
                        [M.Z],
                        () => {
                            let t = (0, x.Z)(l.type);
                            return e === o
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: M.Z.isLocalMute(o, t),
                                      localVideoDisabled: M.Z.isLocalVideoDisabled(o, t),
                                      localVideoAutoDisabled: M.Z.isLocalVideoAutoDisabled(o, t)
                                  };
                        },
                        [e, l.type, o]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null !== (r = l.type === et.fO.USER && (null === (n = l.voiceState) || void 0 === n ? void 0 : n.isVoiceMuted())) && void 0 !== r && r,
                    deafened: null !== (s = l.type === et.fO.USER && (null === (i = l.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== s && s
                };
            })(eL, G, eh.getGuildId()),
            e$ = G.type === et.fO.STREAM && eW === eL,
            e0 = B.ZP.isPremium(eG);
        i.useEffect(() => {
            if (e$ && !e0 && null != eh.hdStreamingUntil && new Date(eh.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = M.Z.getGoLiveSource(),
                            l = (0, h.s)(en.LY.RESOLUTION_720, en.ws.FPS_30, e);
                        u.Z.setGoLiveSource(l);
                    },
                    new Date(eh.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, eh.hdStreamingUntil]);
        let e1 = (0, S.o)(G, eG),
            e7 = (0, b.lL)('CallTile', !0, eG, e1),
            e4 = (0, a.e7)([P.Z], () => (G.type === et.fO.USER && null != eW ? P.Z.getEffectForUserId(eW) : null)),
            e9 = (0, a.e7)([L.Z], () => L.Z.getVoicePlatformForChannel(eh.id, null != eW ? eW : el.lds)),
            { enabled: e5 } = (0, v.Z)({ location: 'CallTile' }),
            { showGameIcon: e3 } = O.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e6 = (0, a.e7)([z.Z], () => (e3 && null != eW ? z.Z.findActivity(eW, (e) => null != e.application_id && e.type === el.IIU.PLAYING) : null), [e3, eW]),
            e2 = (0, a.e7)([w.Z], () => ((null == e6 ? void 0 : e6.application_id) != null ? w.Z.getDetectableGame(e6.application_id) : null)),
            e8 = (0, a.e7)([p.Z], () => (null != e2 && (null == e6 ? void 0 : e6.application_id) != null ? p.Z.getApplication(null == e6 ? void 0 : e6.application_id) : void 0)),
            le = (0, _.wV)({
                userId: eW,
                channelId: eh.id,
                location: 'CallTile'
            }),
            ll = (0, _.zU)({
                streamKey: G.type === et.fO.STREAM ? G.id : null,
                channelId: eh.id,
                location: 'CallTile'
            }),
            lt = i.useMemo(() => (G.type === et.fO.STREAM ? null != ll && ll : G.type === et.fO.USER && null != le && le), [ll, le, G.type]);
        i.useEffect(() => {
            eV(eI);
        }, [eI]);
        let [ln, li] = i.useState(!1),
            lr = i.useCallback(() => {
                m.Z.useReducedMotion || li(!0);
            }, []);
        (0, Z.J)(eh, lr);
        let ls = i.useCallback(() => {
                null != eW && u.Z.toggleLocalMute(eW, er.Yn.STREAM);
            }, [eW]),
            la = i.useCallback(
                (e) => {
                    null == $ || $(G, e);
                },
                [$, G]
            ),
            lo = i.useCallback(
                (e) => {
                    null == W || W(G, e);
                },
                [W, G]
            ),
            lc = i.useCallback(
                (e, l, t) => {
                    null == Y || Y(G, e, l, t);
                },
                [Y, G]
            ),
            lu = null,
            ld = null,
            lm = '';
        switch (G.type) {
            case et.fO.STREAM:
                (lu = (0, n.jsx)(J.Z, {
                    participant: G,
                    selected: eT,
                    width: ej,
                    fit: eS,
                    onVideoResize: eN,
                    paused: e_,
                    inPopout: eO,
                    focused: eI,
                    inOverlayPopout: eP
                })),
                    (ld = (0, n.jsx)(J._, {
                        participant: G,
                        selected: eT,
                        width: ej,
                        focused: eI,
                        idle: ek,
                        premiumIndicator: e7.enabled
                    })),
                    (lm = es.NW.formatToPlainString(es.t.gHPz3d, { streamerName: G.user.username }));
                break;
            case et.fO.USER:
                (lu = (0, n.jsx)(Q.Z, {
                    channel: eh,
                    inCall: eE,
                    participant: G,
                    fit: eS,
                    onVideoResize: eN,
                    paused: e_,
                    selected: eT,
                    width: ej,
                    blocked: eZ,
                    ignored: eb,
                    noVideoRender: eC || eX,
                    pulseSpeakingIndicator: eR,
                    inOverlayPopout: eP
                })),
                    (ld = (0, n.jsx)(Q.T, {
                        userId: G.user.id,
                        channelId: eh.id
                    })),
                    (lm = es.NW.formatToPlainString(es.t['iC/x/f'], { username: G.user.username }));
                break;
            case et.fO.ACTIVITY:
                (lu = (0, n.jsx)(X.ZP, {
                    interactible: eI,
                    participant: G,
                    selected: eT,
                    channel: eh,
                    width: ej
                })),
                    (lm = es.NW.formatToPlainString(es.t.YCvOsL, { activityName: null == eY ? void 0 : eY.name }));
                break;
            case et.fO.PRESENCE_EMBEDDED_ACTIVITY:
                lu = (0, n.jsx)(q.Z, {
                    participant: G,
                    width: ej,
                    channelId: eh.id
                });
                break;
            case et.fO.HIDDEN_STREAM:
                lu = (0, n.jsx)(J.Z, {
                    participant: G,
                    selected: eT,
                    width: ej,
                    fit: eS,
                    onVideoResize: eN,
                    paused: e_,
                    inPopout: eO,
                    focused: eI,
                    inOverlayPopout: eP
                });
        }
        let lp = i.useRef(null),
            lf = G.type === et.fO.STREAM ? c.pzj : c.Odl,
            lv = e5 ? ev : ex;
        return (0, n.jsx)(d.Z, {
            section: el.jXE.VOICE_CHANNEL_TILE,
            children: (0, n.jsxs)('div', {
                className: s()(ea.wrapper, { [ea.ringing]: eq }, ep),
                style: eg,
                onMouseEnter: () => {
                    eU(!0);
                },
                onMouseLeave: () => {
                    eU(!1);
                },
                children: [
                    ln &&
                        G.type === et.fO.STREAM &&
                        (0, n.jsx)(I.Z, {
                            baseTileRef: lp.current,
                            cleanup: () => li(!1)
                        }),
                    (0, n.jsxs)(C.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eK,
                        className: ea.tile,
                        children: [
                            (0, n.jsx)(K.Z, {
                                ref: lp,
                                className: s()(ea.tile, {
                                    [ea.noBorder]: ey,
                                    [ea.noInteraction]: null == $,
                                    [ea.idle]: ek
                                }),
                                noBorder: ey,
                                style: ef,
                                participantUserId: eW,
                                children: (0, n.jsxs)(c.kL8, {
                                    'aria-label': lm,
                                    className: ea.tileChild,
                                    onDoubleClick: lo,
                                    onContextMenu: (e) => lc(e, e5 && G.type === et.fO.STREAM),
                                    onClick: la,
                                    onMouseDown: eu,
                                    onKeyDown: em,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e4 && null != eW
                                            ? (0, n.jsx)(k.Z, {
                                                  voiceChannelEffect: e4,
                                                  onComplete: () => (0, P.H)(eW),
                                                  userId: eW
                                              })
                                            : null,
                                        G.type === et.fO.USER
                                            ? (0, n.jsx)('div', {
                                                  className: ea.voiceChannelEffectsContainer,
                                                  children: (0, n.jsx)(g.Z, {
                                                      userId: eW,
                                                      channelId: eh.id,
                                                      guildId: eh.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (o = null == lp ? void 0 : null === (t = lp.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== o ? o : 0,
                                                          height: null !== (j = null == lp ? void 0 : null === (r = lp.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== j ? j : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        lu,
                                        ey
                                            ? null
                                            : (0, n.jsx)('div', {
                                                  className: ea.indicators,
                                                  children: ld
                                              }),
                                        eT
                                            ? (0, n.jsx)('div', {
                                                  className: ea.selectedScreen,
                                                  children: (0, n.jsx)(lf, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ea.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ed.includes(G.type)
                                            ? null
                                            : (0, n.jsx)(
                                                  lv,
                                                  ec(
                                                      eo(
                                                          {
                                                              focused: eI,
                                                              width: ej,
                                                              inCall: eE,
                                                              participantType: G.type,
                                                              hasVideo: null != eJ && eJ
                                                          },
                                                          eQ
                                                      ),
                                                      {
                                                          idle: ek,
                                                          platform: e9,
                                                          title: (0, H.Z)(eh, G),
                                                          blocked: eZ,
                                                          ignored: eb,
                                                          localVideoDisabled: eH,
                                                          videoToggleState: eF,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: lc,
                                                          onToggleMute: ls,
                                                          participantUserId: eW,
                                                          application: e8,
                                                          secureFramesVerified: lt,
                                                          isHovered: ez
                                                      }
                                                  )
                                              ),
                                        G.type === et.fO.USER && eB
                                            ? (0, n.jsx)(E.Z, {
                                                  userId: G.id,
                                                  channelId: eh.id
                                              })
                                            : null,
                                        eE && !ey
                                            ? (0, n.jsx)('div', {
                                                  className: s()(ea.border, {
                                                      [ea.voiceChannelEffect]: !eI && null != e4,
                                                      [ea.speaking]: eK && !eI
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            ew &&
                                eM &&
                                ez &&
                                (0, n.jsx)(F.Z, {
                                    currentUserId: eL,
                                    participant: G
                                }),
                            (0, n.jsx)(y.Z, {
                                isFiring: eD,
                                callTileRef: lp.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ep(e) {
    let { participantType: l, platform: t, className: i } = e;
    if (l === et.fO.STREAM)
        return t === et.wR.XBOX
            ? (0, n.jsx)(Y.Z, { className: i })
            : (0, n.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (t) {
        case et.wR.MOBILE:
            return (0, n.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case et.wR.XBOX:
            return (0, n.jsx)(Y.Z, { className: i });
        case et.wR.PLAYSTATION:
            return (0, n.jsx)(W.Z, { className: i });
        default:
            return null;
    }
}
function ef(e) {
    let { icon: l, tooltipText: t, hidden: i = !1, onClick: r } = e;
    return (0, n.jsx)(c.ua7, {
        text: t,
        children: (e) => {
            var { onClick: t } = e,
                a = eu(e, ['onClick']);
            return (0, n.jsx)(
                c.zxk,
                ec(eo({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == t || t(), r(e);
                    },
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: s()(ea.overlayButton, { [ea.idle]: i }),
                    innerClassName: ea.overlayButtonInner,
                    children: (0, n.jsx)(l, {
                        size: 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
em.displayName = 'CallTile';
let ev = i.memo((e) => {
    let { idle: l, title: t, width: r, videoToggleState: u, blocked: d, ignored: m, participantType: p, participantUserId: f, platform: v, secureFramesVerified: g, onContextMenu: h, isHovered: j, muted: O, deafened: N, localMuted: E, serverMuted: T, serverDeafened: y, hasVideo: C, hideAudioIcon: I, onToggleMute: Z } = e,
        b = (0, a.e7)([M.Z], () => null != f && M.Z.isLocalVideoAutoDisabled(f, (0, x.Z)(p)), [f, p]),
        S = (0, $.N)(r),
        _ = (0, $.K)(r),
        [R, A] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            l = () => {
                e === G.Z.isOpen() || (e = G.Z.isOpen()) || A(!1);
            };
        return G.Z.addChangeListener(l), () => G.Z.removeChangeListener(l);
    }, []);
    let P = !I && p === et.fO.STREAM && C && (!_ || E),
        k = !j && !E,
        D = (function (e) {
            let { localMuted: l, serverMuted: t, serverDeafened: n, deafened: i, muted: r } = e;
            return n ? c.Vm4 : t ? c.v0G : i ? c.wE8 : l ? c.v0G : r ? c.nRN : null;
        })({
            localMuted: E,
            serverMuted: T,
            serverDeafened: y,
            deafened: N,
            muted: O
        });
    return (0, n.jsxs)('div', {
        className: ea.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: s()(ea.overlayTop, { [ea.small]: r < 195 }),
                children:
                    b || u === el.ZUi.AUTO_PROBING
                        ? l
                            ? (0, n.jsx)('div', {
                                  className: ea.status,
                                  children: (0, n.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: s()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: ea.status,
                                          children: (0, n.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ea.overlayTitleText,
                                          children: es.NW.string(es.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !S &&
                (0, n.jsxs)('div', {
                    className: s()(ea.overlayBottom, { [ea.small]: r < 195 }),
                    children: [
                        (0, n.jsxs)(c.Text, {
                            className: s()(ea.experimentOverlayTitle, { [ea.idle]: l && !1 }),
                            color: 'none',
                            variant: 'text-md/normal',
                            children: [
                                null != D &&
                                    p === et.fO.USER &&
                                    (0, n.jsx)(D, {
                                        className: ea.experimentTitleIcon,
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                d
                                    ? (0, n.jsx)('div', {
                                          className: ea.blocked,
                                          children: (0, n.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: ea.blockedIcon,
                                              color: o.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                m
                                    ? (0, n.jsx)('div', {
                                          className: ea.ignored,
                                          children: (0, n.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: ea.blockedIcon
                                          })
                                      })
                                    : null,
                                l
                                    ? null
                                    : (0, n.jsx)(ep, {
                                          participantType: p,
                                          platform: v,
                                          className: ea.experimentTitleIcon
                                      }),
                                null == t || '' === t || l
                                    ? null
                                    : (0, n.jsx)('span', {
                                          className: ea.experimentOverlayTitleText,
                                          children: t
                                      }),
                                g &&
                                    (0, n.jsx)(c.ua7, {
                                        text: es.NW.string(es.t.ZEem6O),
                                        children: (e) =>
                                            (0, n.jsx)(
                                                c.tQf,
                                                ec(eo({}, e), {
                                                    className: ea.secureFramesIcon,
                                                    size: 'xs',
                                                    color: o.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': es.NW.string(es.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: ea.overlayButtonContainer,
                            children: [
                                P &&
                                    (0, n.jsx)(ef, {
                                        onClick: Z,
                                        tooltipText: E ? es.NW.string(es.t.YqAjX1) : es.NW.string(es.t['w4m94+']),
                                        icon: E ? c.OyP : c.gj8,
                                        hidden: k
                                    }),
                                (0, n.jsx)(ef, {
                                    onClick: (e) => {
                                        e.stopPropagation(), A(!0), h(e, !0, et.A5.THREE_DOT);
                                    },
                                    tooltipText: es.NW.string(es.t['+1H47u']),
                                    icon: c.xhG,
                                    hidden: !(j || R)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
ev.displayName = 'CallTileOverlayV2';
let ex = i.memo((e) => {
    let { muted: l, deafened: t, localMuted: i, serverMuted: r, serverDeafened: u, idle: d, title: m, width: p, hasVideo: f, inCall: v, localVideoDisabled: g, videoToggleState: h, focused: O, blocked: N, ignored: E, hideAudioIcon: T, participantType: y, participantUserId: C, onContextMenu: I, onToggleMute: Z, platform: b, application: S, secureFramesVerified: _ } = e,
        R = null,
        A = null,
        P = null,
        k = (0, $.K)(p),
        D = (0, $.N)(p),
        V = (0, a.e7)([M.Z], () => null != C && M.Z.isLocalVideoAutoDisabled(C, (0, x.Z)(y)), [C, y]),
        w = (0, c.bWb)().enabled;
    if (!T) {
        if (i && y === et.fO.STREAM && f && !O)
            R = (0, n.jsx)(c.ua7, {
                text: es.NW.string(es.t.YqAjX1),
                children: (e) => {
                    var { onClick: l } = e,
                        t = eu(e, ['onClick']);
                    return (0, n.jsx)(
                        c.P3F,
                        ec(eo({}, t), {
                            onClick: (e) => {
                                e.stopPropagation(), null == l || l(), Z();
                            },
                            className: s()(ea.interactive, ea.toggleMute, ea.status),
                            children: (0, n.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || y !== et.fO.STREAM || !f || k || O) {
            if (w) {
                let e;
                u ? (e = c.Vm4) : r ? (e = c.v0G) : t ? (e = c.wE8) : i ? (e = c.v0G) : l && (e = c.nRN), (R = null != e ? (0, n.jsx)(e, { color: o.Z.colors.WHITE }) : null);
            } else if (t || l || i) {
                let e = t ? c.wE8 : c.nRN;
                R = (0, n.jsx)(e, { color: 'currentColor' });
            }
            R =
                null != R
                    ? (0, n.jsx)('div', {
                          className: ea.status,
                          children: R
                      })
                    : null;
        } else
            R = (0, n.jsx)(c.ua7, {
                text: es.NW.string(es.t['w4m94+']),
                children: (e) => {
                    var { onClick: l } = e,
                        t = eu(e, ['onClick']);
                    return (0, n.jsx)(
                        c.P3F,
                        ec(eo({}, t), {
                            onClick: (e) => {
                                e.stopPropagation(), null == l || l(), Z();
                            },
                            className: s()(ea.interactive, ea.toggleMute, ea.status),
                            children: (0, n.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    }
    (v && M.Z.supports(er.AN.VIDEO)) || !f
        ? v &&
          f &&
          g &&
          !V &&
          (A = (0, n.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: ea.localMuteStrikethrough
          }))
        : (A = (0, n.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        y === et.fO.STREAM &&
            !O &&
            f &&
            (P = (0, n.jsx)(c.ua7, {
                text: es.NW.string(es.t['+1H47u']),
                children: (e) => {
                    var { onClick: l } = e,
                        t = eu(e, ['onClick']);
                    return (0, n.jsx)(
                        c.P3F,
                        ec(eo({}, t), {
                            onClick: (e) => {
                                e.stopPropagation(), null == l || l(), I(e);
                            },
                            className: s()(ea.status, ea.interactive),
                            children: (0, n.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let z =
        y === et.fO.USER && null != S
            ? (0, n.jsx)(c.ua7, {
                  text: es.NW.formatToPlainString(es.t.Sq9xJy, { game: S.name }),
                  children: (e) =>
                      (0, n.jsx)(
                          'div',
                          ec(eo({}, e), {
                              className: s()(ea.gameIconContainer, { [ea.gameIconSmall]: p < 500 }),
                              children: (0, n.jsx)(j.Z, {
                                  className: ea.gameIcon,
                                  game: S,
                                  size: j.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, n.jsxs)('div', {
        className: ea.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: s()(ea.overlayTop, { [ea.small]: p < 195 }),
                children:
                    V || h === el.ZUi.AUTO_PROBING
                        ? d
                            ? (0, n.jsx)('div', {
                                  className: ea.status,
                                  children: (0, n.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: s()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: ea.status,
                                          children: (0, n.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ea.overlayTitleText,
                                          children: es.NW.string(es.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, n.jsxs)('div', {
                className: s()(ea.overlayBottom, { [ea.small]: p < 195 }),
                children: [
                    D
                        ? (0, n.jsx)('div', {})
                        : (0, n.jsxs)(c.Text, {
                              className: s()(ea.overlayTitle, { [ea.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  N
                                      ? (0, n.jsx)('div', {
                                            className: ea.blocked,
                                            children: (0, n.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: ea.blockedIcon,
                                                color: o.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  E
                                      ? (0, n.jsx)('div', {
                                            className: ea.ignored,
                                            children: (0, n.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: ea.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, n.jsx)(ep, {
                                      participantType: y,
                                      platform: b,
                                      className: ea.titleIcon
                                  }),
                                  null != m && '' !== m
                                      ? (0, n.jsx)('span', {
                                            className: ea.overlayTitleText,
                                            children: m
                                        })
                                      : null,
                                  _ &&
                                      (0, n.jsx)(c.ua7, {
                                          text: es.NW.string(es.t.ZEem6O),
                                          children: (e) =>
                                              (0, n.jsx)(
                                                  c.tQf,
                                                  ec(eo({}, e), {
                                                      className: ea.secureFramesIcon,
                                                      size: 'xs',
                                                      color: o.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': es.NW.string(es.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, n.jsxs)('div', {
                        className: ea.statusContainer,
                        children: [
                            null != A &&
                                (0, n.jsx)('div', {
                                    className: ea.status,
                                    children: A
                                }),
                            R,
                            P,
                            z
                        ]
                    })
                ]
            })
        ]
    });
});
ex.displayName = 'CallTileOverlay';
let eg = T.L,
    eh = em;
