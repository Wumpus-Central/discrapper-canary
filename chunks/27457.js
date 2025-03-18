n.d(t, {
    BP: () => em,
    ZP: () => eb
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(846027),
    d = n(410575),
    _ = n(607070),
    p = n(812206),
    E = n(835473),
    f = n(414910),
    h = n(415635),
    m = n(578976),
    b = n(925329),
    O = n(649739),
    g = n(37091),
    N = n(6572),
    I = n(352978),
    T = n(936847),
    C = n(512384),
    S = n(33316),
    y = n(576645),
    v = n(6242),
    P = n(757692),
    R = n(210975),
    A = n(695346),
    x = n(937995),
    j = n(456631),
    D = n(274459),
    L = n(314897),
    k = n(857192),
    M = n(77498),
    Z = n(131951),
    U = n(158776),
    w = n(594174),
    V = n(979651),
    F = n(574254),
    G = n(374129),
    W = n(639351),
    B = n(74538),
    H = n(221241),
    z = n(584729),
    Y = n(334374),
    K = n(849171),
    X = n(607187),
    q = n(624834),
    Q = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    er = n(37113),
    ei = n(524484),
    eo = n(65154),
    el = n(388032),
    ea = n(454698);
function es(e) {
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
    e_ = i.memo((e) => {
        var t, n, o, s, b;
        let { participant: F, onDoubleClick: G, onContextMenu: W, onClick: $, onMouseDown: eu, onKeyDown: e_, className: ep, style: eE, containerStyle: em, channel: eb, width: eO, inPopout: eg, onVideoResize: eN, inCall: eI = !1, selected: eT = !1, noBorder: eC = !1, noVideoRender: eS = !1, focused: ey = !1, blocked: ev = !1, ignored: eP = !1, fit: eR = I.L.CONTAIN, paused: eA = !1, pulseSpeakingIndicator: ex = !1, forceIdle: ej = !1, inOverlayPopout: eD = !1 } = e,
            eL = i.useContext(x.h9) || ej,
            [ek, eM] = i.useState(!1),
            eZ = A.Sb.useSetting(),
            eU = (0, a.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled),
            [ew, eV] = i.useState(!1),
            eF = (0, a.e7)([L.default], () => L.default.getId()),
            eG = (0, a.e7)([w.default], () => w.default.getCurrentUser()),
            eW = F.type === en.fO.ACTIVITY ? null : null === (t = F.user) || void 0 === t ? void 0 : t.id,
            [eB] = (0, E.Z)(F.type === en.fO.ACTIVITY ? [F.applicationId] : []),
            eH = (0, a.e7)([g.Z], () => g.Z.getEnabled()),
            ez = (0, a.e7)([Z.Z], () => null != eW && Z.Z.isLocalVideoDisabled(eW, (0, f.Z)(F.type)), [eW, F.type]),
            eY = (0, a.e7)([Z.Z], () => (null != eW ? Z.Z.getVideoToggleState(eW, (0, f.Z)(F.type)) : et.ZUi.NONE), [eW, F.type]),
            eK = eY === et.ZUi.AUTO_PROBING,
            { speaking: eX, ringing: eq, hasVideo: eQ } = (0, ee.Z)(F, eF),
            eJ = (function (e, t, n) {
                var r, i, o, l;
                let s = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([V.Z], () => {
                        var e, t, r;
                        let i = V.Z.getVoiceState(n, s);
                        return {
                            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
                            deafened: null !== (t = null == i ? void 0 : i.deaf) && void 0 !== t && t,
                            suppressed: null !== (r = null == i ? void 0 : i.suppress) && void 0 !== r && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, a.cj)(
                        [Z.Z],
                        () => {
                            let n = (0, f.Z)(t.type);
                            return e === s
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: Z.Z.isLocalMute(s, n),
                                      localVideoDisabled: Z.Z.isLocalVideoDisabled(s, n),
                                      localVideoAutoDisabled: Z.Z.isLocalVideoAutoDisabled(s, n)
                                  };
                        },
                        [e, t.type, s]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null !== (o = t.type === en.fO.USER && (null === (r = t.voiceState) || void 0 === r ? void 0 : r.isVoiceMuted())) && void 0 !== o && o,
                    deafened: null !== (l = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== l && l
                };
            })(eF, F, eb.getGuildId()),
            e$ = F.type === en.fO.STREAM && eW === eF,
            e0 = B.ZP.isPremium(eG);
        i.useEffect(() => {
            if (e$ && !e0 && null != eb.hdStreamingUntil && new Date(eb.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = Z.Z.getGoLiveSource(),
                            t = (0, m.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(eb.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, eb.hdStreamingUntil]);
        let e4 = (0, P.o)(F, eG),
            e1 = (0, v.lL)('CallTile', !0, eG, e4),
            e3 = (0, a.e7)([j.Z], () => (F.type === en.fO.USER && null != eW ? j.Z.getEffectForUserId(eW) : null)),
            e6 = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eb.id, null != eW ? eW : et.lds)),
            { simplifiedSettingsEnabled: e2 } = (0, H.Z)({ location: 'CallTile' }),
            { showGameIcon: e9 } = O.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e8 = (0, a.e7)([U.Z], () => (e9 && null != eW ? U.Z.findActivity(eW, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e9, eW]),
            e7 = (0, a.e7)([M.Z], () => ((null == e8 ? void 0 : e8.application_id) != null ? M.Z.getDetectableGame(e8.application_id) : null)),
            e5 = (0, a.e7)([p.Z], () => (null != e7 && (null == e8 ? void 0 : e8.application_id) != null ? p.Z.getApplication(null == e8 ? void 0 : e8.application_id) : void 0)),
            te = (0, R.wV)({
                userId: eW,
                channelId: eb.id
            }),
            tt = (0, R.zU)({
                streamKey: F.type === en.fO.STREAM ? F.id : null,
                channelId: eb.id
            }),
            tn = i.useMemo(() => (F.type === en.fO.STREAM ? null != tt && tt : F.type === en.fO.USER && null != te && te), [tt, te, F.type]);
        i.useEffect(() => {
            eM(ey);
        }, [ey]);
        let [tr, ti] = i.useState(!1),
            to = i.useCallback(() => {
                _.Z.useReducedMotion || ti(!0);
            }, []);
        (0, y.J)(eb, to);
        let tl = i.useCallback(() => {
                null != eW && u.Z.toggleLocalMute(eW, eo.Yn.STREAM);
            }, [eW]),
            ta = i.useCallback(
                (e) => {
                    null == $ || $(F, e);
                },
                [$, F]
            ),
            ts = i.useCallback(
                (e) => {
                    null == G || G(F, e);
                },
                [G, F]
            ),
            tc = i.useCallback(
                (e, t, n) => {
                    null == W || W(F, e, t, n);
                },
                [W, F]
            ),
            tu = null,
            td = null,
            t_ = '';
        switch (F.type) {
            case en.fO.STREAM:
                (tu = (0, r.jsx)(Q.Z, {
                    participant: F,
                    selected: eT,
                    width: eO,
                    fit: eR,
                    onVideoResize: eN,
                    paused: eA,
                    inPopout: eg,
                    focused: ey,
                    inOverlayPopout: eD
                })),
                    (td = (0, r.jsx)(Q._, {
                        participant: F,
                        selected: eT,
                        width: eO,
                        focused: ey,
                        idle: eL,
                        premiumIndicator: e1.enabled
                    })),
                    (t_ = el.NW.formatToPlainString(el.t.gHPz3d, { streamerName: F.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: eb,
                    inCall: eI,
                    participant: F,
                    fit: eR,
                    onVideoResize: eN,
                    paused: eA,
                    selected: eT,
                    width: eO,
                    blocked: ev,
                    ignored: eP,
                    noVideoRender: eS || eK,
                    pulseSpeakingIndicator: ex,
                    inOverlayPopout: eD
                })),
                    (td = (0, r.jsx)(J.T, {
                        userId: F.user.id,
                        channelId: eb.id
                    })),
                    (t_ = el.NW.formatToPlainString(el.t['iC/x/f'], { username: F.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: ey,
                    participant: F,
                    selected: eT,
                    channel: eb,
                    width: eO
                })),
                    (t_ = el.NW.formatToPlainString(el.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(q.Z, {
                    participant: F,
                    width: eO,
                    channelId: eb.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(Q.Z, {
                    participant: F,
                    selected: eT,
                    width: eO,
                    fit: eR,
                    onVideoResize: eN,
                    paused: eA,
                    inPopout: eg,
                    focused: ey,
                    inOverlayPopout: eD
                });
        }
        let tp = i.useRef(null),
            tE = F.type === en.fO.STREAM ? c.pzj : c.Odl,
            tf = e2 ? ef : eh;
        return (0, r.jsx)(d.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: l()(ea.wrapper, { [ea.ringing]: eq }, ep),
                style: em,
                onMouseEnter: () => {
                    eV(!0);
                },
                onMouseLeave: () => {
                    eV(!1);
                },
                children: [
                    tr &&
                        F.type === en.fO.STREAM &&
                        (0, r.jsx)(S.Z, {
                            baseTileRef: tp.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(C.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eX,
                        className: ea.tile,
                        children: [
                            (0, r.jsx)(X.Z, {
                                ref: tp,
                                className: l()(ea.tile, {
                                    [ea.noBorder]: eC,
                                    [ea.noInteraction]: null == $,
                                    [ea.idle]: eL
                                }),
                                noBorder: eC,
                                style: eE,
                                participantUserId: eW,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': t_,
                                    className: ea.tileChild,
                                    onDoubleClick: ts,
                                    onContextMenu: (e) => tc(e, e2 && F.type === en.fO.STREAM),
                                    onClick: ta,
                                    onMouseDown: eu,
                                    onKeyDown: e_,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e3 && null != eW
                                            ? (0, r.jsx)(D.Z, {
                                                  voiceChannelEffect: e3,
                                                  onComplete: () => (0, j.H)(eW),
                                                  userId: eW
                                              })
                                            : null,
                                        F.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: ea.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(h.Z, {
                                                      userId: eW,
                                                      channelId: eb.id,
                                                      guildId: eb.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (s = null == tp ? void 0 : null === (n = tp.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== s ? s : 0,
                                                          height: null !== (b = null == tp ? void 0 : null === (o = tp.current) || void 0 === o ? void 0 : o.clientHeight) && void 0 !== b ? b : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        eC
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: ea.indicators,
                                                  children: td
                                              }),
                                        eT
                                            ? (0, r.jsx)('div', {
                                                  className: ea.selectedScreen,
                                                  children: (0, r.jsx)(tE, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ea.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ed.includes(F.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  tf,
                                                  ec(
                                                      es(
                                                          {
                                                              focused: ey,
                                                              width: eO,
                                                              inCall: eI,
                                                              participantType: F.type,
                                                              hasVideo: null != eQ && eQ
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: eL,
                                                          platform: e6,
                                                          title: (0, z.Z)(eb, F),
                                                          blocked: ev,
                                                          ignored: eP,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: tl,
                                                          participantUserId: eW,
                                                          application: e5,
                                                          secureFramesVerified: tn,
                                                          isHovered: ew
                                                      }
                                                  )
                                              ),
                                        F.type === en.fO.USER && eH
                                            ? (0, r.jsx)(N.Z, {
                                                  userId: F.id,
                                                  channelId: eb.id
                                              })
                                            : null,
                                        eI && !eC
                                            ? (0, r.jsx)('div', {
                                                  className: l()(ea.border, {
                                                      [ea.voiceChannelEffect]: !ey && null != e3,
                                                      [ea.speaking]: eX && !ey
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eZ &&
                                eU &&
                                ew &&
                                (0, r.jsx)(Y.Z, {
                                    currentUserId: eF,
                                    participant: F
                                }),
                            (0, r.jsx)(T.Z, {
                                isFiring: ek,
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
            ? (0, r.jsx)(W.Z, { className: i })
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
            return (0, r.jsx)(W.Z, { className: i });
        case en.wR.PLAYSTATION:
            return (0, r.jsx)(G.Z, { className: i });
        default:
            return null;
    }
}
function eE(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: o, compact: a } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                s = eu(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                ec(es({}, s), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), o(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: l()(ea.overlayButton, {
                        [ea.hideWhenInactive]: i,
                        [ea.compact]: a
                    }),
                    innerClassName: ea.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: a ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
e_.displayName = 'CallTile';
let ef = i.memo((e) => {
    let { idle: t, title: n, width: o, videoToggleState: u, blocked: d, ignored: _, participantType: p, participantUserId: E, platform: h, secureFramesVerified: m, onContextMenu: b, muted: O, deafened: g, localMuted: N, serverMuted: I, serverDeafened: T, hasVideo: C, hideAudioIcon: S, onToggleMute: y } = e,
        v = (0, a.e7)([Z.Z], () => null != E && Z.Z.isLocalVideoAutoDisabled(E, (0, f.Z)(p)), [E, p]),
        P = (0, $.N)(o),
        R = (0, $.K)(o),
        [A, x] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e === F.Z.isOpen() || (e = F.Z.isOpen()) || x(!1);
            };
        return F.Z.addChangeListener(t), () => F.Z.removeChangeListener(t);
    }, []);
    let j = !S && p === en.fO.STREAM && C && (!R || N),
        D = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: o } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : o ? c.nRN : null;
        })({
            localMuted: N,
            serverMuted: I,
            serverDeafened: T,
            deafened: g,
            muted: O
        });
    return (0, r.jsxs)('div', {
        className: l()(ea.overlayContainer, { [ea.compact]: R }),
        children: [
            (0, r.jsx)('div', {
                className: l()(ea.overlayTop, { [ea.small]: o < 195 }),
                children:
                    v || u === et.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: ea.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ea.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ea.overlayTitleText,
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !P &&
                (0, r.jsxs)('div', {
                    className: l()(ea.overlayBottom, { [ea.small]: o < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: l()(ea.experimentOverlayTitle, { [ea.compact]: R }),
                            color: 'none',
                            variant: R ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != D &&
                                    p === en.fO.USER &&
                                    (0, r.jsx)(D, {
                                        className: l()(ea.experimentTitleIcon, { [ea.compact]: R }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                d
                                    ? (0, r.jsx)('div', {
                                          className: ea.blocked,
                                          children: (0, r.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: ea.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                _
                                    ? (0, r.jsx)('div', {
                                          className: ea.ignored,
                                          children: (0, r.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: ea.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(ep, {
                                          participantType: p,
                                          platform: h,
                                          className: l()(ea.experimentTitleIcon, { [ea.compact]: R })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: ea.overlayTitleText,
                                          children: n
                                      }),
                                m &&
                                    (0, r.jsx)(c.ua7, {
                                        text: el.NW.string(el.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                ec(es({}, e), {
                                                    className: ea.secureFramesIcon,
                                                    size: 'xs',
                                                    color: s.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': el.NW.string(el.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: ea.overlayButtonContainer,
                            children: [
                                j &&
                                    (0, r.jsx)(eE, {
                                        onClick: y,
                                        tooltipText: N ? el.NW.string(el.t.YqAjX1) : el.NW.string(el.t['w4m94+']),
                                        icon: N ? c.OyP : c.gj8,
                                        hideWhenInactive: !N,
                                        compact: R
                                    }),
                                (0, r.jsx)(eE, {
                                    onClick: (e) => {
                                        e.stopPropagation(), x(!0), b(e, !0, en.A5.THREE_DOT);
                                    },
                                    tooltipText: el.NW.string(el.t['+1H47u']),
                                    icon: c.xhG,
                                    hideWhenInactive: !A,
                                    compact: R
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
ef.displayName = 'CallTileOverlayV2';
let eh = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: o, serverDeafened: u, idle: d, title: _, width: p, hasVideo: E, inCall: h, localVideoDisabled: m, videoToggleState: O, focused: g, blocked: N, ignored: I, hideAudioIcon: T, participantType: C, participantUserId: S, onContextMenu: y, onToggleMute: v, platform: P, application: R, secureFramesVerified: A } = e,
        x = null,
        j = null,
        D = null,
        L = (0, $.K)(p),
        k = (0, $.N)(p),
        M = (0, a.e7)([Z.Z], () => null != S && Z.Z.isLocalVideoAutoDisabled(S, (0, f.Z)(C)), [S, C]),
        U = (0, c.bWb)().enabled;
    if (!T) {
        if (i && C === en.fO.STREAM && E && !g)
            x = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(es({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), v();
                            },
                            className: l()(ea.interactive, ea.toggleMute, ea.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || C !== en.fO.STREAM || !E || L || g) {
            if (U) {
                let e;
                u ? (e = c.Vm4) : o ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN), (x = null != e ? (0, r.jsx)(e, { color: s.Z.colors.WHITE }) : null);
            } else if (n || t || i) {
                let e = n ? c.wE8 : c.nRN;
                x = (0, r.jsx)(e, { color: 'currentColor' });
            }
            x =
                null != x
                    ? (0, r.jsx)('div', {
                          className: ea.status,
                          children: x
                      })
                    : null;
        } else
            x = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(es({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), v();
                            },
                            className: l()(ea.interactive, ea.toggleMute, ea.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    }
    (h && Z.Z.supports(eo.AN.VIDEO)) || !E
        ? h &&
          E &&
          m &&
          !M &&
          (j = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: ea.localMuteStrikethrough
          }))
        : (j = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        C === en.fO.STREAM &&
            !g &&
            E &&
            (D = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(es({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), y(e);
                            },
                            className: l()(ea.status, ea.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let w =
        C === en.fO.USER && null != R
            ? (0, r.jsx)(c.ua7, {
                  text: el.NW.formatToPlainString(el.t.Sq9xJy, { game: R.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(es({}, e), {
                              className: l()(ea.gameIconContainer, { [ea.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(b.Z, {
                                  className: ea.gameIcon,
                                  game: R,
                                  size: b.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: ea.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: l()(ea.overlayTop, { [ea.small]: p < 195 }),
                children:
                    M || O === et.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: ea.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ea.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ea.overlayTitleText,
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: l()(ea.overlayBottom, { [ea.small]: p < 195 }),
                children: [
                    k
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: l()(ea.overlayTitle, { [ea.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  N
                                      ? (0, r.jsx)('div', {
                                            className: ea.blocked,
                                            children: (0, r.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: ea.blockedIcon,
                                                color: s.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  I
                                      ? (0, r.jsx)('div', {
                                            className: ea.ignored,
                                            children: (0, r.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: ea.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, r.jsx)(ep, {
                                      participantType: C,
                                      platform: P,
                                      className: ea.titleIcon
                                  }),
                                  null != _ && '' !== _
                                      ? (0, r.jsx)('span', {
                                            className: ea.overlayTitleText,
                                            children: _
                                        })
                                      : null,
                                  A &&
                                      (0, r.jsx)(c.ua7, {
                                          text: el.NW.string(el.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  ec(es({}, e), {
                                                      className: ea.secureFramesIcon,
                                                      size: 'xs',
                                                      color: s.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': el.NW.string(el.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: ea.statusContainer,
                        children: [
                            null != j &&
                                (0, r.jsx)('div', {
                                    className: ea.status,
                                    children: j
                                }),
                            x,
                            D,
                            w
                        ]
                    })
                ]
            })
        ]
    });
});
eh.displayName = 'CallTileOverlay';
let em = I.L,
    eb = e_;
