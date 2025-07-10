(n.d(t, {
    BP: () => ed,
    ZP: () => eh
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(846027),
    h = n(410575),
    p = n(607070),
    f = n(812206),
    g = n(835473),
    m = n(414910),
    b = n(415635),
    _ = n(578976),
    O = n(649739),
    y = n(37091),
    v = n(6572),
    C = n(352978),
    j = n(936847),
    E = n(512384),
    S = n(33316),
    x = n(576645),
    I = n(210975),
    P = n(695346),
    N = n(937995),
    w = n(456631),
    Z = n(274459),
    T = n(314897),
    A = n(857192),
    R = n(77498),
    D = n(131951),
    L = n(158776),
    M = n(594174),
    k = n(979651),
    U = n(574254),
    G = n(374129),
    B = n(639351),
    V = n(74538),
    F = n(584729),
    H = n(334374),
    z = n(849171),
    W = n(607187),
    K = n(833519),
    Y = n(462061),
    q = n(623825),
    X = n(839662),
    Q = n(981631),
    J = n(354459),
    $ = n(37113),
    ee = n(524484),
    et = n(65154),
    en = n(388032),
    er = n(519417);
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function el(e, t) {
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
let eo = [J.fO.ACTIVITY],
    ea = i.memo((e) => {
        var t, n, l, s, c;
        let { participant: U, onDoubleClick: G, onContextMenu: B, onClick: q, onMouseDown: ea, onKeyDown: es, className: ec, style: ed, containerStyle: eh, channel: ep, width: ef, inPopout: eg, onVideoResize: em, inCall: eb = !1, selected: e_ = !1, noBorder: eO = !1, noVideoRender: ey = !1, focused: ev = !1, blocked: eC = !1, ignored: ej = !1, fit: eE = C.L.CONTAIN, paused: eS = !1, pulseSpeakingIndicator: ex = !1, forceIdle: eI = !1, inOverlayPopout: eP = !1 } = e,
            eN = i.useContext(N.h9) || eI,
            [ew, eZ] = i.useState(!1),
            eT = P.Sb.useSetting(),
            eA = (0, a.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled),
            [eR, eD] = i.useState(!1),
            eL = (0, a.e7)([T.default], () => T.default.getId()),
            eM = (0, a.e7)([M.default], () => M.default.getCurrentUser()),
            ek = U.type === J.fO.ACTIVITY ? null : null == (t = U.user) ? void 0 : t.id,
            [eU] = (0, g.Z)(U.type === J.fO.ACTIVITY ? [U.applicationId] : []),
            eG = (0, a.e7)([y.Z], () => y.Z.getEnabled()),
            eB = (0, a.e7)([D.Z], () => null != ek && D.Z.isLocalVideoDisabled(ek, (0, m.Z)(U.type)), [ek, U.type]),
            eV = (0, a.e7)([D.Z], () => (null != ek ? D.Z.getVideoToggleState(ek, (0, m.Z)(U.type)) : Q.ZUi.NONE), [ek, U.type]),
            eF = eV === Q.ZUi.AUTO_PROBING,
            { speaking: eH, ringing: ez, hasVideo: eW } = (0, X.Z)(U, eL),
            eK = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== J.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([k.Z], () => {
                        var e, t, r;
                        let i = k.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, a.cj)(
                        [D.Z],
                        () => {
                            let n = (0, m.Z)(t.type);
                            return e === s
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: D.Z.isLocalMute(s, n),
                                      localVideoDisabled: D.Z.isLocalVideoDisabled(s, n),
                                      localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(s, n)
                                  };
                        },
                        [e, t.type, s]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null != (l = t.type === J.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === J.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eL, U, ep.getGuildId()),
            eY = U.type === J.fO.STREAM && ek === eL,
            eq = V.ZP.isPremium(eM);
        i.useEffect(() => {
            if (eY && !eq && null != ep.hdStreamingUntil && new Date(ep.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = D.Z.getGoLiveSource(),
                            t = (0, _.s_)($.LY.RESOLUTION_720, $.ws.FPS_30, e);
                        d.Z.setGoLiveSource(t);
                    },
                    new Date(ep.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [eY, eq, ep.hdStreamingUntil]);
        let eX = (0, a.e7)([w.Z], () => (U.type === J.fO.USER && null != ek ? w.Z.getEffectForUserId(ek) : null)),
            eQ = (0, a.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(ep.id, null != ek ? ek : Q.lds)),
            { showGameIcon: eJ } = O.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e$ = (0, a.e7)([L.Z], () => (eJ && null != ek ? L.Z.findActivity(ek, (e) => null != e.application_id && e.type === Q.IIU.PLAYING) : null), [eJ, ek]),
            e0 = (0, a.e7)([R.Z], () => ((null == e$ ? void 0 : e$.application_id) != null ? R.Z.getDetectableGame(e$.application_id) : null)),
            e1 = (0, a.e7)([f.Z], () => (null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? f.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0)),
            e3 = (0, I.wV)({
                userId: ek,
                channelId: ep.id
            }),
            e4 = (0, I.zU)({
                streamKey: U.type === J.fO.STREAM ? U.id : null,
                channelId: ep.id
            }),
            e6 = i.useMemo(() => (U.type === J.fO.STREAM ? null != e4 && e4 : U.type === J.fO.USER && null != e3 && e3), [e4, e3, U.type]);
        i.useEffect(() => {
            eZ(ev);
        }, [ev]);
        let [e8, e5] = i.useState(!1),
            e7 = i.useCallback(() => {
                p.Z.useReducedMotion || e5(!0);
            }, []);
        (0, x.J)(ep, e7);
        let e2 = i.useCallback(() => {
                null != ek && d.Z.toggleLocalMute(ek, et.Yn.STREAM);
            }, [ek]),
            e9 = i.useCallback(
                (e) => {
                    null == q || q(U, e);
                },
                [q, U]
            ),
            te = i.useCallback(
                (e) => {
                    null == G || G(U, e);
                },
                [G, U]
            ),
            tt = i.useCallback(
                (e, t, n) => {
                    null == B || B(U, e, t, n);
                },
                [B, U]
            ),
            tn = null,
            tr = null,
            ti = '';
        switch (U.type) {
            case J.fO.STREAM:
                ((tn = (0, r.jsx)(K.Z, {
                    participant: U,
                    selected: e_,
                    width: ef,
                    fit: eE,
                    onVideoResize: em,
                    paused: eS,
                    inPopout: eg,
                    focused: ev,
                    inOverlayPopout: eP
                })),
                    (tr = (0, r.jsx)(K._, {
                        participant: U,
                        selected: e_,
                        width: ef,
                        focused: ev,
                        idle: eN,
                        premiumIndicator: !1
                    })),
                    (ti = en.intl.formatToPlainString(en.t.gHPz3d, { streamerName: U.user.username })));
                break;
            case J.fO.USER:
                ((tn = (0, r.jsx)(Y.Z, {
                    channel: ep,
                    inCall: eb,
                    participant: U,
                    fit: eE,
                    onVideoResize: em,
                    paused: eS,
                    selected: e_,
                    width: ef,
                    blocked: eC,
                    ignored: ej,
                    noVideoRender: ey || eF,
                    pulseSpeakingIndicator: ex,
                    inOverlayPopout: eP
                })),
                    (tr = (0, r.jsx)(Y.T, {
                        participant: U,
                        channelId: ep.id
                    })),
                    (ti = en.intl.formatToPlainString(en.t['iC/x/f'], { username: U.user.username })));
                break;
            case J.fO.ACTIVITY:
                ((tn = (0, r.jsx)(z.ZP, {
                    interactible: ev,
                    participant: U,
                    selected: e_,
                    channel: ep,
                    width: ef
                })),
                    (ti = en.intl.formatToPlainString(en.t.YCvOsL, { activityName: null == eU ? void 0 : eU.name })));
                break;
            case J.fO.HIDDEN_STREAM:
                tn = (0, r.jsx)(K.Z, {
                    participant: U,
                    selected: e_,
                    width: ef,
                    fit: eE,
                    onVideoResize: em,
                    paused: eS,
                    inPopout: eg,
                    focused: ev,
                    inOverlayPopout: eP
                });
        }
        let tl = i.useRef(null),
            to = U.type === J.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: Q.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: o()(er.wrapper, { [er.ringing]: ez }, ec),
                style: eh,
                onMouseEnter: () => {
                    eD(!0);
                },
                onMouseLeave: () => {
                    eD(!1);
                },
                children: [
                    e8 &&
                        U.type === J.fO.STREAM &&
                        (0, r.jsx)(S.Z, {
                            baseTileRef: tl.current,
                            cleanup: () => e5(!1)
                        }),
                    (0, r.jsxs)(E.Z, {
                        shakeLocation: ee.oZ.VOICE_USER,
                        isShaking: eH,
                        className: er.tile,
                        children: [
                            (0, r.jsx)(W.Z, {
                                ref: tl,
                                className: o()(er.tile, {
                                    [er.noBorder]: eO,
                                    [er.noInteraction]: null == q,
                                    [er.idle]: eN
                                }),
                                noBorder: eO,
                                style: ed,
                                participantUserId: ek,
                                children: (0, r.jsxs)(u.kL8, {
                                    'aria-label': ti,
                                    className: er.tileChild,
                                    onDoubleClick: te,
                                    onContextMenu: (e) => tt(e, U.type === J.fO.STREAM),
                                    onClick: e9,
                                    onMouseDown: ea,
                                    onKeyDown: es,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eX && null != ek
                                            ? (0, r.jsx)(Z.Z, {
                                                  voiceChannelEffect: eX,
                                                  onComplete: () => (0, w.H)(ek),
                                                  userId: ek
                                              })
                                            : null,
                                        U.type === J.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: er.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(b.Z, {
                                                      userId: ek,
                                                      channelId: ep.id,
                                                      guildId: ep.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (s = null == tl || null == (n = tl.current) ? void 0 : n.clientWidth) ? s : 0,
                                                          height: null != (c = null == tl || null == (l = tl.current) ? void 0 : l.clientHeight) ? c : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tn,
                                        eO
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: er.indicators,
                                                  children: tr
                                              }),
                                        e_
                                            ? (0, r.jsx)('div', {
                                                  className: er.selectedScreen,
                                                  children: (0, r.jsx)(to, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: er.selectedIcon
                                                  })
                                              })
                                            : null,
                                        eo.includes(U.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  eu,
                                                  el(
                                                      ei(
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
                                                          platform: eQ,
                                                          title: (0, F.Z)(ep, U),
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
                                        U.type === J.fO.USER && eG
                                            ? (0, r.jsx)(v.Z, {
                                                  userId: U.id,
                                                  channelId: ep.id
                                              })
                                            : null,
                                        eb && !eO
                                            ? (0, r.jsx)('div', {
                                                  className: o()(er.border, {
                                                      [er.voiceChannelEffect]: !ev && null != eX,
                                                      [er.speaking]: eH && !ev
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
                            (0, r.jsx)(j.Z, {
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
    if (t === J.fO.STREAM)
        return n === J.wR.XBOX
            ? (0, r.jsx)(B.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case J.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case J.wR.XBOX:
            return (0, r.jsx)(B.Z, { className: i });
        case J.wR.PLAYSTATION:
            return (0, r.jsx)(G.Z, { className: i });
        default:
            return null;
    }
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: l, compact: a } = e;
    return (0, r.jsx)(u.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                    }
                    return i;
                })(e, ['onClick']);
            return (0, r.jsx)(
                c.zx,
                el(ei({}, s), {
                    onClick: (e) => {
                        (e.stopPropagation(), null == n || n(), l(e));
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Tt.CUSTOM,
                    size: c.Ph.ICON,
                    className: o()(er.overlayButton, {
                        [er.hideWhenInactive]: i,
                        [er.compact]: a
                    }),
                    innerClassName: er.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: a ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
ea.displayName = 'CallTile';
let eu = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: c, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: g, platform: b, secureFramesVerified: _, onContextMenu: O, muted: y, deafened: v, localMuted: C, serverMuted: j, serverDeafened: E, hasVideo: S, hideAudioIcon: x, onToggleMute: I } = e,
        P = (0, a.e7)([D.Z], () => null != g && D.Z.isLocalVideoAutoDisabled(g, (0, m.Z)(f)), [g, f]),
        N = (0, q.N)(l),
        w = (0, q.K)(l),
        [Z, T] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || T(!1));
            };
        return (U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t));
    }, []);
    let A = !x && f === J.fO.STREAM && S && (!w || C),
        R = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: C,
            serverMuted: j,
            serverDeafened: E,
            deafened: v,
            muted: y
        });
    return (0, r.jsxs)('div', {
        className: o()(er.overlayContainer, { [er.compact]: w }),
        children: [
            (0, r.jsx)('div', {
                className: o()(er.overlayTop, { [er.small]: l < 195 }),
                children:
                    P || d === Q.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: er.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(er.overlayTitle, er.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: er.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          className: er.overlayTitleText,
                                          children: en.intl.string(en.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !N &&
                (0, r.jsxs)('div', {
                    className: o()(er.overlayBottom, { [er.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: o()(er.experimentOverlayTitle, { [er.compact]: w }),
                            color: 'none',
                            variant: w ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != R &&
                                    f === J.fO.USER &&
                                    (0, r.jsx)(R, {
                                        className: o()(er.experimentTitleIcon, { [er.compact]: w }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: er.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: 'lg',
                                              className: er.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: er.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: 'lg',
                                              className: er.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(es, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(er.experimentTitleIcon, { [er.compact]: w })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: er.overlayTitleText,
                                          children: n
                                      }),
                                _ &&
                                    (0, r.jsx)(u.ua7, {
                                        text: en.intl.string(en.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.tQf,
                                                el(ei({}, e), {
                                                    className: er.secureFramesIcon,
                                                    size: 'xs',
                                                    color: s.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': en.intl.string(en.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !c &&
                            (0, r.jsxs)('div', {
                                className: er.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(ec, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), T(!0), O(e, !0, J.A5.THREE_DOT));
                                        },
                                        tooltipText: en.intl.string(en.t['+1H47u']),
                                        icon: u.xhG,
                                        hideWhenInactive: !Z,
                                        compact: w
                                    }),
                                    A &&
                                        (0, r.jsx)(ec, {
                                            onClick: I,
                                            tooltipText: C ? en.intl.string(en.t.YqAjX1) : en.intl.string(en.t['w4m94+']),
                                            icon: C ? u.OyP : u.gj8,
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
eu.displayName = 'CallTileOverlay';
let ed = C.L,
    eh = ea;
