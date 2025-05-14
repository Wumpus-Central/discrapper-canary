n.d(t, {
    BP: () => ef,
    ZP: () => eg
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
    _ = n(925329),
    y = n(649739),
    O = n(37091),
    v = n(6572),
    C = n(352978),
    S = n(936847),
    j = n(512384),
    E = n(33316),
    x = n(576645),
    P = n(210975),
    I = n(695346),
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
    K = n(833519),
    q = n(462061),
    Q = n(623825),
    X = n(839662),
    J = n(981631),
    $ = n(354459),
    ee = n(37113),
    et = n(524484),
    en = n(65154),
    er = n(388032),
    ei = n(519417);
function el(e) {
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
function eo(e, t) {
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
function es(e, t) {
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
let ea = [$.fO.ACTIVITY],
    ec = i.memo((e) => {
        var t, n, l, a, _;
        let { participant: U, onDoubleClick: G, onContextMenu: B, onClick: Q, onMouseDown: es, onKeyDown: ec, className: eu, style: ed, containerStyle: ef, channel: eg, width: em, inPopout: eb, onVideoResize: e_, inCall: ey = !1, selected: eO = !1, noBorder: ev = !1, noVideoRender: eC = !1, focused: eS = !1, blocked: ej = !1, ignored: eE = !1, fit: ex = C.L.CONTAIN, paused: eP = !1, pulseSpeakingIndicator: eI = !1, forceIdle: ew = !1, inOverlayPopout: eN = !1 } = e,
            eZ = i.useContext(w.h9) || ew,
            [eT, eA] = i.useState(!1),
            eR = I.Sb.useSetting(),
            eD = (0, s.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled),
            [eL, ek] = i.useState(!1),
            eM = (0, s.e7)([T.default], () => T.default.getId()),
            eU = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
            eG = U.type === $.fO.ACTIVITY ? null : null == (t = U.user) ? void 0 : t.id,
            [eB] = (0, f.Z)(U.type === $.fO.ACTIVITY ? [U.applicationId] : []),
            eV = (0, s.e7)([O.Z], () => O.Z.getEnabled()),
            eH = (0, s.e7)([D.Z], () => null != eG && D.Z.isLocalVideoDisabled(eG, (0, g.Z)(U.type)), [eG, U.type]),
            eF = (0, s.e7)([D.Z], () => (null != eG ? D.Z.getVideoToggleState(eG, (0, g.Z)(U.type)) : J.ZUi.NONE), [eG, U.type]),
            ez = eF === J.ZUi.AUTO_PROBING,
            { speaking: eW, ringing: eY, hasVideo: eK } = (0, X.Z)(U, eM),
            eq = (function (e, t, n) {
                var r, i, l, o;
                let a = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
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
                    muted: null != (l = t.type === $.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === $.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eM, U, eg.getGuildId()),
            eQ = U.type === $.fO.STREAM && eG === eM,
            eX = V.ZP.isPremium(eU);
        i.useEffect(() => {
            if (eQ && !eX && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = D.Z.getGoLiveSource(),
                            t = (0, b.s_)(ee.LY.RESOLUTION_720, ee.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(eg.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [eQ, eX, eg.hdStreamingUntil]);
        let eJ = (0, s.e7)([N.Z], () => (U.type === $.fO.USER && null != eG ? N.Z.getEffectForUserId(eG) : null)),
            e$ = (0, s.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(eg.id, null != eG ? eG : J.lds)),
            { simplifiedSettingsEnabled: e0 } = (0, H.Z)({ location: 'CallTile' }),
            { showGameIcon: e1 } = y.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e3 = (0, s.e7)([L.Z], () => (e1 && null != eG ? L.Z.findActivity(eG, (e) => null != e.application_id && e.type === J.IIU.PLAYING) : null), [e1, eG]),
            e4 = (0, s.e7)([R.Z], () => ((null == e3 ? void 0 : e3.application_id) != null ? R.Z.getDetectableGame(e3.application_id) : null)),
            e6 = (0, s.e7)([p.Z], () => (null != e4 && (null == e3 ? void 0 : e3.application_id) != null ? p.Z.getApplication(null == e3 ? void 0 : e3.application_id) : void 0)),
            e5 = (0, P.wV)({
                userId: eG,
                channelId: eg.id
            }),
            e7 = (0, P.zU)({
                streamKey: U.type === $.fO.STREAM ? U.id : null,
                channelId: eg.id
            }),
            e8 = i.useMemo(() => (U.type === $.fO.STREAM ? null != e7 && e7 : U.type === $.fO.USER && null != e5 && e5), [e7, e5, U.type]);
        i.useEffect(() => {
            eA(eS);
        }, [eS]);
        let [e2, e9] = i.useState(!1),
            te = i.useCallback(() => {
                h.Z.useReducedMotion || e9(!0);
            }, []);
        (0, x.J)(eg, te);
        let tt = i.useCallback(() => {
                null != eG && u.Z.toggleLocalMute(eG, en.Yn.STREAM);
            }, [eG]),
            tn = i.useCallback(
                (e) => {
                    null == Q || Q(U, e);
                },
                [Q, U]
            ),
            tr = i.useCallback(
                (e) => {
                    null == G || G(U, e);
                },
                [G, U]
            ),
            ti = i.useCallback(
                (e, t, n) => {
                    null == B || B(U, e, t, n);
                },
                [B, U]
            ),
            tl = null,
            to = null,
            ts = '';
        switch (U.type) {
            case $.fO.STREAM:
                (tl = (0, r.jsx)(K.Z, {
                    participant: U,
                    selected: eO,
                    width: em,
                    fit: ex,
                    onVideoResize: e_,
                    paused: eP,
                    inPopout: eb,
                    focused: eS,
                    inOverlayPopout: eN
                })),
                    (to = (0, r.jsx)(K._, {
                        participant: U,
                        selected: eO,
                        width: em,
                        focused: eS,
                        idle: eZ,
                        premiumIndicator: !1
                    })),
                    (ts = er.intl.formatToPlainString(er.t.gHPz3d, { streamerName: U.user.username }));
                break;
            case $.fO.USER:
                (tl = (0, r.jsx)(q.Z, {
                    channel: eg,
                    inCall: ey,
                    participant: U,
                    fit: ex,
                    onVideoResize: e_,
                    paused: eP,
                    selected: eO,
                    width: em,
                    blocked: ej,
                    ignored: eE,
                    noVideoRender: eC || ez,
                    pulseSpeakingIndicator: eI,
                    inOverlayPopout: eN
                })),
                    (to = (0, r.jsx)(q.T, {
                        participant: U,
                        channelId: eg.id
                    })),
                    (ts = er.intl.formatToPlainString(er.t['iC/x/f'], { username: U.user.username }));
                break;
            case $.fO.ACTIVITY:
                (tl = (0, r.jsx)(W.ZP, {
                    interactible: eS,
                    participant: U,
                    selected: eO,
                    channel: eg,
                    width: em
                })),
                    (ts = er.intl.formatToPlainString(er.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case $.fO.HIDDEN_STREAM:
                tl = (0, r.jsx)(K.Z, {
                    participant: U,
                    selected: eO,
                    width: em,
                    fit: ex,
                    onVideoResize: e_,
                    paused: eP,
                    inPopout: eb,
                    focused: eS,
                    inOverlayPopout: eN
                });
        }
        let ta = i.useRef(null),
            tc = U.type === $.fO.STREAM ? c.pzj : c.Odl,
            tu = e0 ? eh : ep;
        return (0, r.jsx)(d.Z, {
            section: J.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: o()(ei.wrapper, { [ei.ringing]: eY }, eu),
                style: ef,
                onMouseEnter: () => {
                    ek(!0);
                },
                onMouseLeave: () => {
                    ek(!1);
                },
                children: [
                    e2 &&
                        U.type === $.fO.STREAM &&
                        (0, r.jsx)(E.Z, {
                            baseTileRef: ta.current,
                            cleanup: () => e9(!1)
                        }),
                    (0, r.jsxs)(j.Z, {
                        shakeLocation: et.oZ.VOICE_USER,
                        isShaking: eW,
                        className: ei.tile,
                        children: [
                            (0, r.jsx)(Y.Z, {
                                ref: ta,
                                className: o()(ei.tile, {
                                    [ei.noBorder]: ev,
                                    [ei.noInteraction]: null == Q,
                                    [ei.idle]: eZ
                                }),
                                noBorder: ev,
                                style: ed,
                                participantUserId: eG,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': ts,
                                    className: ei.tileChild,
                                    onDoubleClick: tr,
                                    onContextMenu: (e) => ti(e, e0 && U.type === $.fO.STREAM),
                                    onClick: tn,
                                    onMouseDown: es,
                                    onKeyDown: ec,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eJ && null != eG
                                            ? (0, r.jsx)(Z.Z, {
                                                  voiceChannelEffect: eJ,
                                                  onComplete: () => (0, N.H)(eG),
                                                  userId: eG
                                              })
                                            : null,
                                        U.type === $.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: ei.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eG,
                                                      channelId: eg.id,
                                                      guildId: eg.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == ta || null == (n = ta.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (_ = null == ta || null == (l = ta.current) ? void 0 : l.clientHeight) ? _ : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tl,
                                        ev
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: ei.indicators,
                                                  children: to
                                              }),
                                        eO
                                            ? (0, r.jsx)('div', {
                                                  className: ei.selectedScreen,
                                                  children: (0, r.jsx)(tc, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ei.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ea.includes(U.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  tu,
                                                  eo(
                                                      el(
                                                          {
                                                              focused: eS,
                                                              width: em,
                                                              inCall: ey,
                                                              participantType: U.type,
                                                              hasVideo: null != eK && eK
                                                          },
                                                          eq
                                                      ),
                                                      {
                                                          idle: eZ,
                                                          platform: e$,
                                                          title: (0, F.Z)(eg, U),
                                                          blocked: ej,
                                                          ignored: eE,
                                                          localVideoDisabled: eH,
                                                          videoToggleState: eF,
                                                          hideAudioIcon: eQ,
                                                          onContextMenu: ti,
                                                          onToggleMute: tt,
                                                          participantUserId: eG,
                                                          application: e6,
                                                          secureFramesVerified: e8,
                                                          isHovered: eL
                                                      }
                                                  )
                                              ),
                                        U.type === $.fO.USER && eV
                                            ? (0, r.jsx)(v.Z, {
                                                  userId: U.id,
                                                  channelId: eg.id
                                              })
                                            : null,
                                        ey && !ev
                                            ? (0, r.jsx)('div', {
                                                  className: o()(ei.border, {
                                                      [ei.voiceChannelEffect]: !eS && null != eJ,
                                                      [ei.speaking]: eW && !eS
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eR &&
                                eD &&
                                eL &&
                                (0, r.jsx)(z.Z, {
                                    currentUserId: eM,
                                    participant: U
                                }),
                            (0, r.jsx)(S.Z, {
                                isFiring: eT,
                                callTileRef: ta.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function eu(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === $.fO.STREAM)
        return n === $.wR.XBOX
            ? (0, r.jsx)(B.Z, { className: i })
            : (0, r.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case $.wR.MOBILE:
            return (0, r.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case $.wR.XBOX:
            return (0, r.jsx)(B.Z, { className: i });
        case $.wR.PLAYSTATION:
            return (0, r.jsx)(G.Z, { className: i });
        default:
            return null;
    }
}
function ed(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = es(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                eo(el({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), l(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: o()(ei.overlayButton, {
                        [ei.hideWhenInactive]: i,
                        [ei.compact]: s
                    }),
                    innerClassName: ei.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: s ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
ec.displayName = 'CallTile';
let eh = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: u, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: _, onContextMenu: y, muted: O, deafened: v, localMuted: C, serverMuted: S, serverDeafened: j, hasVideo: E, hideAudioIcon: x, onToggleMute: P } = e,
        I = (0, s.e7)([D.Z], () => null != m && D.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        w = (0, Q.N)(l),
        N = (0, Q.K)(l),
        [Z, T] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || T(!1));
            };
        return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t);
    }, []);
    let A = !x && f === $.fO.STREAM && E && (!N || C),
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
        className: o()(ei.overlayContainer, { [ei.compact]: N }),
        children: [
            (0, r.jsx)('div', {
                className: o()(ei.overlayTop, { [ei.small]: l < 195 }),
                children:
                    I || d === J.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: ei.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(ei.overlayTitle, ei.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ei.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ei.overlayTitleText,
                                          children: er.intl.string(er.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !w &&
                (0, r.jsxs)('div', {
                    className: o()(ei.overlayBottom, { [ei.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: o()(ei.experimentOverlayTitle, { [ei.compact]: N }),
                            color: 'none',
                            variant: N ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != R &&
                                    f === $.fO.USER &&
                                    (0, r.jsx)(R, {
                                        className: o()(ei.experimentTitleIcon, { [ei.compact]: N }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: ei.blocked,
                                          children: (0, r.jsx)(c.t6m, {
                                              size: 'lg',
                                              className: ei.blockedIcon,
                                              color: a.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: ei.ignored,
                                          children: (0, r.jsx)(c.kZF, {
                                              size: 'lg',
                                              className: ei.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(eu, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(ei.experimentTitleIcon, { [ei.compact]: N })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: ei.overlayTitleText,
                                          children: n
                                      }),
                                _ &&
                                    (0, r.jsx)(c.ua7, {
                                        text: er.intl.string(er.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                eo(el({}, e), {
                                                    className: ei.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': er.intl.string(er.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !u &&
                            (0, r.jsxs)('div', {
                                className: ei.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ed, {
                                        onClick: (e) => {
                                            e.stopPropagation(), T(!0), y(e, !0, $.A5.THREE_DOT);
                                        },
                                        tooltipText: er.intl.string(er.t['+1H47u']),
                                        icon: c.xhG,
                                        hideWhenInactive: !Z,
                                        compact: N
                                    }),
                                    A &&
                                        (0, r.jsx)(ed, {
                                            onClick: P,
                                            tooltipText: C ? er.intl.string(er.t.YqAjX1) : er.intl.string(er.t['w4m94+']),
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
eh.displayName = 'CallTileOverlayV2';
let ep = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: l, serverDeafened: u, idle: d, title: h, width: p, hasVideo: f, inCall: m, localVideoDisabled: b, videoToggleState: y, focused: O, blocked: v, ignored: C, hideAudioIcon: S, participantType: j, participantUserId: E, onContextMenu: x, onToggleMute: P, platform: I, application: w, secureFramesVerified: N } = e,
        Z = null,
        T = null,
        A = null,
        R = (0, Q.K)(p),
        L = (0, Q.N)(p),
        k = (0, s.e7)([D.Z], () => null != E && D.Z.isLocalVideoAutoDisabled(E, (0, g.Z)(j)), [E, j]);
    if (!S)
        if (i && j === $.fO.STREAM && f && !O)
            Z = (0, r.jsx)(c.ua7, {
                text: er.intl.string(er.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = es(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        eo(el({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), P();
                            },
                            className: o()(ei.interactive, ei.toggleMute, ei.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || j !== $.fO.STREAM || !f || R || O) {
            let e;
            u ? (e = c.Vm4) : l ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (Z =
                    null != (Z = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: ei.status,
                              children: Z
                          })
                        : null);
        } else
            Z = (0, r.jsx)(c.ua7, {
                text: er.intl.string(er.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = es(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        eo(el({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), P();
                            },
                            className: o()(ei.interactive, ei.toggleMute, ei.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    (m && D.Z.supports(en.AN.VIDEO)) || !f
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
        j === $.fO.STREAM &&
            !O &&
            f &&
            (A = (0, r.jsx)(c.ua7, {
                text: er.intl.string(er.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = es(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        eo(el({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), x(e);
                            },
                            className: o()(ei.status, ei.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let M =
        j === $.fO.USER && null != w
            ? (0, r.jsx)(c.ua7, {
                  text: er.intl.formatToPlainString(er.t.Sq9xJy, { game: w.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          eo(el({}, e), {
                              className: o()(ei.gameIconContainer, { [ei.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(_.Z, {
                                  className: ei.gameIcon,
                                  game: w,
                                  size: _.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: ei.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: o()(ei.overlayTop, { [ei.small]: p < 195 }),
                children:
                    k || y === J.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: ei.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(ei.overlayTitle, ei.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ei.status,
                                          children: (0, r.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ei.overlayTitleText,
                                          children: er.intl.string(er.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: o()(ei.overlayBottom, { [ei.small]: p < 195 }),
                children: [
                    L
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: o()(ei.overlayTitle, { [ei.idle]: d }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  v
                                      ? (0, r.jsx)('div', {
                                            className: ei.blocked,
                                            children: (0, r.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: ei.blockedIcon,
                                                color: a.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  C
                                      ? (0, r.jsx)('div', {
                                            className: ei.ignored,
                                            children: (0, r.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: ei.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, r.jsx)(eu, {
                                      participantType: j,
                                      platform: I,
                                      className: ei.titleIcon
                                  }),
                                  null != h && '' !== h
                                      ? (0, r.jsx)('span', {
                                            className: ei.overlayTitleText,
                                            children: h
                                        })
                                      : null,
                                  N &&
                                      (0, r.jsx)(c.ua7, {
                                          text: er.intl.string(er.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  eo(el({}, e), {
                                                      className: ei.secureFramesIcon,
                                                      size: 'xs',
                                                      color: a.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': er.intl.string(er.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: ei.statusContainer,
                        children: [
                            null != T &&
                                (0, r.jsx)('div', {
                                    className: ei.status,
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
ep.displayName = 'CallTileOverlay';
let ef = C.L,
    eg = ec;
