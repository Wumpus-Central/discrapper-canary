n.d(t, {
    BP: () => eu,
    ZP: () => ed
}),
    n(388685);
var r = n(255367),
    i = n(73800),
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
    O = n(649739),
    y = n(37091),
    _ = n(6572),
    v = n(352978),
    C = n(936847),
    j = n(512384),
    S = n(33316),
    x = n(576645),
    E = n(210975),
    P = n(695346),
    I = n(937995),
    N = n(456631),
    w = n(274459),
    Z = n(314897),
    T = n(857192),
    A = n(77498),
    R = n(131951),
    D = n(158776),
    L = n(594174),
    M = n(979651),
    k = n(574254),
    U = n(374129),
    G = n(639351),
    B = n(74538),
    V = n(584729),
    H = n(334374),
    F = n(849171),
    z = n(607187),
    W = n(833519),
    K = n(462061),
    Y = n(623825),
    q = n(839662),
    Q = n(981631),
    X = n(354459),
    J = n(37113),
    $ = n(524484),
    ee = n(65154),
    et = n(388032),
    en = n(519417);
function er(e) {
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
function ei(e, t) {
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
let el = [X.fO.ACTIVITY],
    eo = i.memo((e) => {
        var t, n, l, a, k;
        let { participant: U, onDoubleClick: G, onContextMenu: Y, onClick: eo, onMouseDown: es, onKeyDown: ea, className: eu, style: ed, containerStyle: eh, channel: ep, width: ef, inPopout: eg, onVideoResize: em, inCall: eb = !1, selected: eO = !1, noBorder: ey = !1, noVideoRender: e_ = !1, focused: ev = !1, blocked: eC = !1, ignored: ej = !1, fit: eS = v.L.CONTAIN, paused: ex = !1, pulseSpeakingIndicator: eE = !1, forceIdle: eP = !1, inOverlayPopout: eI = !1 } = e,
            eN = i.useContext(I.h9) || eP,
            [ew, eZ] = i.useState(!1),
            eT = P.Sb.useSetting(),
            eA = (0, s.e7)([T.default], () => T.default.isStreamInfoOverlayEnabled),
            [eR, eD] = i.useState(!1),
            eL = (0, s.e7)([Z.default], () => Z.default.getId()),
            eM = (0, s.e7)([L.default], () => L.default.getCurrentUser()),
            ek = U.type === X.fO.ACTIVITY ? null : null == (t = U.user) ? void 0 : t.id,
            [eU] = (0, f.Z)(U.type === X.fO.ACTIVITY ? [U.applicationId] : []),
            eG = (0, s.e7)([y.Z], () => y.Z.getEnabled()),
            eB = (0, s.e7)([R.Z], () => null != ek && R.Z.isLocalVideoDisabled(ek, (0, g.Z)(U.type)), [ek, U.type]),
            eV = (0, s.e7)([R.Z], () => (null != ek ? R.Z.getVideoToggleState(ek, (0, g.Z)(U.type)) : Q.ZUi.NONE), [ek, U.type]),
            eH = eV === Q.ZUi.AUTO_PROBING,
            { speaking: eF, ringing: ez, hasVideo: eW } = (0, q.Z)(U, eL),
            eK = (function (e, t, n) {
                var r, i, l, o;
                let a = t.type !== X.fO.ACTIVITY ? t.user.id : t.applicationId,
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
                        [R.Z],
                        () => {
                            let n = (0, g.Z)(t.type);
                            return e === a
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: R.Z.isLocalMute(a, n),
                                      localVideoDisabled: R.Z.isLocalVideoDisabled(a, n),
                                      localVideoAutoDisabled: R.Z.isLocalVideoAutoDisabled(a, n)
                                  };
                        },
                        [e, t.type, a]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null != (l = t.type === X.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === X.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eL, U, ep.getGuildId()),
            eY = U.type === X.fO.STREAM && ek === eL,
            eq = B.ZP.isPremium(eM);
        i.useEffect(() => {
            if (eY && !eq && null != ep.hdStreamingUntil && new Date(ep.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = R.Z.getGoLiveSource(),
                            t = (0, b.s_)(J.LY.RESOLUTION_720, J.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(ep.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [eY, eq, ep.hdStreamingUntil]);
        let eQ = (0, s.e7)([N.Z], () => (U.type === X.fO.USER && null != ek ? N.Z.getEffectForUserId(ek) : null)),
            eX = (0, s.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ep.id, null != ek ? ek : Q.lds)),
            { showGameIcon: eJ } = O.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e$ = (0, s.e7)([D.Z], () => (eJ && null != ek ? D.Z.findActivity(ek, (e) => null != e.application_id && e.type === Q.IIU.PLAYING) : null), [eJ, ek]),
            e0 = (0, s.e7)([A.Z], () => ((null == e$ ? void 0 : e$.application_id) != null ? A.Z.getDetectableGame(e$.application_id) : null)),
            e1 = (0, s.e7)([p.Z], () => (null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? p.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0)),
            e3 = (0, E.wV)({
                userId: ek,
                channelId: ep.id
            }),
            e4 = (0, E.zU)({
                streamKey: U.type === X.fO.STREAM ? U.id : null,
                channelId: ep.id
            }),
            e6 = i.useMemo(() => (U.type === X.fO.STREAM ? null != e4 && e4 : U.type === X.fO.USER && null != e3 && e3), [e4, e3, U.type]);
        i.useEffect(() => {
            eZ(ev);
        }, [ev]);
        let [e5, e8] = i.useState(!1),
            e7 = i.useCallback(() => {
                h.Z.useReducedMotion || e8(!0);
            }, []);
        (0, x.J)(ep, e7);
        let e2 = i.useCallback(() => {
                null != ek && u.Z.toggleLocalMute(ek, ee.Yn.STREAM);
            }, [ek]),
            e9 = i.useCallback(
                (e) => {
                    null == eo || eo(U, e);
                },
                [eo, U]
            ),
            te = i.useCallback(
                (e) => {
                    null == G || G(U, e);
                },
                [G, U]
            ),
            tt = i.useCallback(
                (e, t, n) => {
                    null == Y || Y(U, e, t, n);
                },
                [Y, U]
            ),
            tn = null,
            tr = null,
            ti = '';
        switch (U.type) {
            case X.fO.STREAM:
                (tn = (0, r.jsx)(W.Z, {
                    participant: U,
                    selected: eO,
                    width: ef,
                    fit: eS,
                    onVideoResize: em,
                    paused: ex,
                    inPopout: eg,
                    focused: ev,
                    inOverlayPopout: eI
                })),
                    (tr = (0, r.jsx)(W._, {
                        participant: U,
                        selected: eO,
                        width: ef,
                        focused: ev,
                        idle: eN,
                        premiumIndicator: !1
                    })),
                    (ti = et.intl.formatToPlainString(et.t.gHPz3d, { streamerName: U.user.username }));
                break;
            case X.fO.USER:
                (tn = (0, r.jsx)(K.Z, {
                    channel: ep,
                    inCall: eb,
                    participant: U,
                    fit: eS,
                    onVideoResize: em,
                    paused: ex,
                    selected: eO,
                    width: ef,
                    blocked: eC,
                    ignored: ej,
                    noVideoRender: e_ || eH,
                    pulseSpeakingIndicator: eE,
                    inOverlayPopout: eI
                })),
                    (tr = (0, r.jsx)(K.T, {
                        participant: U,
                        channelId: ep.id
                    })),
                    (ti = et.intl.formatToPlainString(et.t['iC/x/f'], { username: U.user.username }));
                break;
            case X.fO.ACTIVITY:
                (tn = (0, r.jsx)(F.ZP, {
                    interactible: ev,
                    participant: U,
                    selected: eO,
                    channel: ep,
                    width: ef
                })),
                    (ti = et.intl.formatToPlainString(et.t.YCvOsL, { activityName: null == eU ? void 0 : eU.name }));
                break;
            case X.fO.HIDDEN_STREAM:
                tn = (0, r.jsx)(W.Z, {
                    participant: U,
                    selected: eO,
                    width: ef,
                    fit: eS,
                    onVideoResize: em,
                    paused: ex,
                    inPopout: eg,
                    focused: ev,
                    inOverlayPopout: eI
                });
        }
        let tl = i.useRef(null),
            to = U.type === X.fO.STREAM ? c.pzj : c.Odl;
        return (0, r.jsx)(d.Z, {
            section: Q.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: o()(en.wrapper, { [en.ringing]: ez }, eu),
                style: eh,
                onMouseEnter: () => {
                    eD(!0);
                },
                onMouseLeave: () => {
                    eD(!1);
                },
                children: [
                    e5 &&
                        U.type === X.fO.STREAM &&
                        (0, r.jsx)(S.Z, {
                            baseTileRef: tl.current,
                            cleanup: () => e8(!1)
                        }),
                    (0, r.jsxs)(j.Z, {
                        shakeLocation: $.oZ.VOICE_USER,
                        isShaking: eF,
                        className: en.tile,
                        children: [
                            (0, r.jsx)(z.Z, {
                                ref: tl,
                                className: o()(en.tile, {
                                    [en.noBorder]: ey,
                                    [en.noInteraction]: null == eo,
                                    [en.idle]: eN
                                }),
                                noBorder: ey,
                                style: ed,
                                participantUserId: ek,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': ti,
                                    className: en.tileChild,
                                    onDoubleClick: te,
                                    onContextMenu: (e) => tt(e, U.type === X.fO.STREAM),
                                    onClick: e9,
                                    onMouseDown: es,
                                    onKeyDown: ea,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eQ && null != ek
                                            ? (0, r.jsx)(w.Z, {
                                                  voiceChannelEffect: eQ,
                                                  onComplete: () => (0, N.H)(ek),
                                                  userId: ek
                                              })
                                            : null,
                                        U.type === X.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: en.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: ek,
                                                      channelId: ep.id,
                                                      guildId: ep.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == tl || null == (n = tl.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (k = null == tl || null == (l = tl.current) ? void 0 : l.clientHeight) ? k : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tn,
                                        ey
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: en.indicators,
                                                  children: tr
                                              }),
                                        eO
                                            ? (0, r.jsx)('div', {
                                                  className: en.selectedScreen,
                                                  children: (0, r.jsx)(to, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: en.selectedIcon
                                                  })
                                              })
                                            : null,
                                        el.includes(U.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  ec,
                                                  ei(
                                                      er(
                                                          {
                                                              focused: ev,
                                                              width: ef,
                                                              inCall: eb,
                                                              participantType: U.type,
                                                              hasVideo: null != eW && eW
                                                          },
                                                          eK
                                                      ),
                                                      {
                                                          idle: eN,
                                                          platform: eX,
                                                          title: (0, V.Z)(ep, U),
                                                          blocked: eC,
                                                          ignored: ej,
                                                          localVideoDisabled: eB,
                                                          videoToggleState: eV,
                                                          hideAudioIcon: eY,
                                                          onContextMenu: tt,
                                                          onToggleMute: e2,
                                                          participantUserId: ek,
                                                          application: e1,
                                                          secureFramesVerified: e6,
                                                          isHovered: eR
                                                      }
                                                  )
                                              ),
                                        U.type === X.fO.USER && eG
                                            ? (0, r.jsx)(_.Z, {
                                                  userId: U.id,
                                                  channelId: ep.id
                                              })
                                            : null,
                                        eb && !ey
                                            ? (0, r.jsx)('div', {
                                                  className: o()(en.border, {
                                                      [en.voiceChannelEffect]: !ev && null != eQ,
                                                      [en.speaking]: eF && !ev && null == eQ
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eT &&
                                eA &&
                                eR &&
                                (0, r.jsx)(H.Z, {
                                    currentUserId: eL,
                                    participant: U
                                }),
                            (0, r.jsx)(C.Z, {
                                isFiring: ew,
                                callTileRef: tl.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function es(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === X.fO.STREAM)
        return n === X.wR.XBOX
            ? (0, r.jsx)(G.Z, { className: i })
            : (0, r.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case X.wR.MOBILE:
            return (0, r.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case X.wR.XBOX:
            return (0, r.jsx)(G.Z, { className: i });
        case X.wR.PLAYSTATION:
            return (0, r.jsx)(U.Z, { className: i });
        default:
            return null;
    }
}
function ea(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = (function (e, t) {
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
                })(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                ei(er({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), l(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: o()(en.overlayButton, {
                        [en.hideWhenInactive]: i,
                        [en.compact]: s
                    }),
                    innerClassName: en.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: s ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
eo.displayName = 'CallTile';
let ec = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: u, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: O, onContextMenu: y, muted: _, deafened: v, localMuted: C, serverMuted: j, serverDeafened: S, hasVideo: x, hideAudioIcon: E, onToggleMute: P } = e,
        I = (0, s.e7)([R.Z], () => null != m && R.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        N = (0, Y.N)(l),
        w = (0, Y.K)(l),
        [Z, T] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || T(!1));
            };
        return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t);
    }, []);
    let A = !E && f === X.fO.STREAM && x && (!w || C),
        D = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null;
        })({
            localMuted: C,
            serverMuted: j,
            serverDeafened: S,
            deafened: v,
            muted: _
        });
    return (0, r.jsxs)('div', {
        className: o()(en.overlayContainer, { [en.compact]: w }),
        children: [
            (0, r.jsx)('div', {
                className: o()(en.overlayTop, { [en.small]: l < 195 }),
                children:
                    I || d === Q.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: en.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(en.overlayTitle, en.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: en.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: en.overlayTitleText,
                                          children: et.intl.string(et.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !N &&
                (0, r.jsxs)('div', {
                    className: o()(en.overlayBottom, { [en.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: o()(en.experimentOverlayTitle, { [en.compact]: w }),
                            color: 'none',
                            variant: w ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != D &&
                                    f === X.fO.USER &&
                                    (0, r.jsx)(D, {
                                        className: o()(en.experimentTitleIcon, { [en.compact]: w }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: en.blocked,
                                          children: (0, r.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: en.blockedIcon,
                                              color: a.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: en.ignored,
                                          children: (0, r.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: en.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(es, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(en.experimentTitleIcon, { [en.compact]: w })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: en.overlayTitleText,
                                          children: n
                                      }),
                                O &&
                                    (0, r.jsx)(c.ua7, {
                                        text: et.intl.string(et.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                ei(er({}, e), {
                                                    className: en.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': et.intl.string(et.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !u &&
                            (0, r.jsxs)('div', {
                                className: en.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ea, {
                                        onClick: (e) => {
                                            e.stopPropagation(), T(!0), y(e, !0, X.A5.THREE_DOT);
                                        },
                                        tooltipText: et.intl.string(et.t['+1H47u']),
                                        icon: c.xhG,
                                        hideWhenInactive: !Z,
                                        compact: w
                                    }),
                                    A &&
                                        (0, r.jsx)(ea, {
                                            onClick: P,
                                            tooltipText: C ? et.intl.string(et.t.YqAjX1) : et.intl.string(et.t['w4m94+']),
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
ec.displayName = 'CallTileOverlay';
let eu = v.L,
    ed = eo;
