(n.d(t, {
    BP: () => ei,
    ZP: () => el
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
    p = n(812206),
    f = n(835473),
    g = n(414910),
    m = n(415635),
    b = n(649739),
    _ = n(37091),
    O = n(6572),
    y = n(352978),
    v = n(936847),
    C = n(512384),
    j = n(210975),
    E = n(695346),
    x = n(937995),
    S = n(456631),
    I = n(274459),
    P = n(314897),
    N = n(857192),
    w = n(77498),
    Z = n(131951),
    T = n(158776),
    A = n(979651),
    R = n(574254),
    D = n(374129),
    L = n(639351),
    M = n(584729),
    k = n(334374),
    U = n(849171),
    G = n(607187),
    B = n(833519),
    V = n(462061),
    F = n(623825),
    H = n(839662),
    z = n(981631),
    W = n(354459),
    K = n(524484),
    Y = n(65154),
    q = n(388032),
    X = n(519417);
function Q(e) {
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
function J(e, t) {
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
let $ = [W.fO.ACTIVITY],
    ee = i.memo((e) => {
        var t, n, l, s, c;
        let { participant: R, onDoubleClick: D, onContextMenu: L, onClick: F, onMouseDown: ee, onKeyDown: et, className: en, style: ei, containerStyle: el, channel: eo, width: ea, inPopout: es, onVideoResize: ec, inCall: eu = !1, selected: ed = !1, noBorder: eh = !1, noVideoRender: ep = !1, focused: ef = !1, blocked: eg = !1, ignored: em = !1, fit: eb = y.L.CONTAIN, paused: e_ = !1, pulseSpeakingIndicator: eO = !1, forceIdle: ey = !1, inOverlayPopout: ev = !1 } = e,
            eC = i.useContext(x.h9) || ey,
            [ej, eE] = i.useState(!1),
            ex = E.Sb.useSetting(),
            eS = (0, a.e7)([N.default], () => N.default.isStreamInfoOverlayEnabled),
            [eI, eP] = i.useState(!1),
            eN = (0, a.e7)([P.default], () => P.default.getId()),
            ew = R.type === W.fO.ACTIVITY ? null : null == (t = R.user) ? void 0 : t.id,
            [eZ] = (0, f.Z)(R.type === W.fO.ACTIVITY ? [R.applicationId] : []),
            eT = (0, a.e7)([_.Z], () => _.Z.getEnabled()),
            eA = (0, a.e7)([Z.Z], () => null != ew && Z.Z.isLocalVideoDisabled(ew, (0, g.Z)(R.type)), [ew, R.type]),
            eR = (0, a.e7)([Z.Z], () => (null != ew ? Z.Z.getVideoToggleState(ew, (0, g.Z)(R.type)) : z.ZUi.NONE), [ew, R.type]),
            eD = eR === z.ZUi.AUTO_PROBING,
            { speaking: eL, ringing: eM, hasVideo: ek } = (0, H.Z)(R, eN),
            eU = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== W.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([A.Z], () => {
                        var e, t, r;
                        let i = A.Z.getVoiceState(n, s);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, a.cj)(
                        [Z.Z],
                        () => {
                            let n = (0, g.Z)(t.type);
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
                    muted: null != (l = t.type === W.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === W.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(eN, R, eo.getGuildId()),
            eG = R.type === W.fO.STREAM && ew === eN,
            eB = (0, a.e7)([S.Z], () => (R.type === W.fO.USER && null != ew ? S.Z.getEffectForUserId(ew) : null)),
            eV = (0, a.e7)([A.Z], () => A.Z.getVoicePlatformForChannel(eo.id, null != ew ? ew : z.lds)),
            { showGameIcon: eF } = b.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            eH = (0, a.e7)([T.Z], () => (eF && null != ew ? T.Z.findActivity(ew, (e) => null != e.application_id && e.type === z.IIU.PLAYING) : null), [eF, ew]),
            ez = (0, a.e7)([w.Z], () => ((null == eH ? void 0 : eH.application_id) != null ? w.Z.getDetectableGame(eH.application_id) : null)),
            eW = (0, a.e7)([p.Z], () => (null != ez && (null == eH ? void 0 : eH.application_id) != null ? p.Z.getApplication(null == eH ? void 0 : eH.application_id) : void 0)),
            eK = (0, j.wV)({
                userId: ew,
                channelId: eo.id
            }),
            eY = (0, j.zU)({
                streamKey: R.type === W.fO.STREAM ? R.id : null,
                channelId: eo.id
            }),
            eq = i.useMemo(() => (R.type === W.fO.STREAM ? null != eY && eY : R.type === W.fO.USER && null != eK && eK), [eY, eK, R.type]);
        i.useEffect(() => {
            eE(ef);
        }, [ef]);
        let eX = i.useCallback(() => {
                null != ew && d.Z.toggleLocalMute(ew, Y.Yn.STREAM);
            }, [ew]),
            eQ = i.useCallback(
                (e) => {
                    null == F || F(R, e);
                },
                [F, R]
            ),
            eJ = i.useCallback(
                (e) => {
                    null == D || D(R, e);
                },
                [D, R]
            ),
            e$ = i.useCallback(
                (e, t, n) => {
                    null == L || L(R, e, t, n);
                },
                [L, R]
            ),
            e0 = null,
            e1 = null,
            e3 = '';
        switch (R.type) {
            case W.fO.STREAM:
                ((e0 = (0, r.jsx)(B.Z, {
                    participant: R,
                    selected: ed,
                    width: ea,
                    fit: eb,
                    onVideoResize: ec,
                    paused: e_,
                    inPopout: es,
                    focused: ef,
                    inOverlayPopout: ev
                })),
                    (e1 = (0, r.jsx)(B._, {
                        participant: R,
                        selected: ed,
                        width: ea,
                        focused: ef,
                        idle: eC,
                        premiumIndicator: !1
                    })),
                    (e3 = q.intl.formatToPlainString(q.t.gHPz3d, { streamerName: R.user.username })));
                break;
            case W.fO.USER:
                ((e0 = (0, r.jsx)(V.Z, {
                    channel: eo,
                    inCall: eu,
                    participant: R,
                    fit: eb,
                    onVideoResize: ec,
                    paused: e_,
                    selected: ed,
                    width: ea,
                    blocked: eg,
                    ignored: em,
                    noVideoRender: ep || eD,
                    pulseSpeakingIndicator: eO,
                    inOverlayPopout: ev
                })),
                    (e1 = (0, r.jsx)(V.T, {
                        participant: R,
                        channelId: eo.id
                    })),
                    (e3 = q.intl.formatToPlainString(q.t['iC/x/f'], { username: R.user.username })));
                break;
            case W.fO.ACTIVITY:
                ((e0 = (0, r.jsx)(U.ZP, {
                    interactible: ef,
                    participant: R,
                    selected: ed,
                    channel: eo,
                    width: ea
                })),
                    (e3 = q.intl.formatToPlainString(q.t.YCvOsL, { activityName: null == eZ ? void 0 : eZ.name })));
                break;
            case W.fO.HIDDEN_STREAM:
                e0 = (0, r.jsx)(B.Z, {
                    participant: R,
                    selected: ed,
                    width: ea,
                    fit: eb,
                    onVideoResize: ec,
                    paused: e_,
                    inPopout: es,
                    focused: ef,
                    inOverlayPopout: ev
                });
        }
        let e4 = i.useRef(null),
            e6 = R.type === W.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: z.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)('div', {
                className: o()(X.wrapper, { [X.ringing]: eM }, en),
                style: el,
                onMouseEnter: () => {
                    eP(!0);
                },
                onMouseLeave: () => {
                    eP(!1);
                },
                children: (0, r.jsxs)(C.Z, {
                    shakeLocation: K.oZ.VOICE_USER,
                    isShaking: eL,
                    className: X.tile,
                    children: [
                        (0, r.jsx)(G.Z, {
                            ref: e4,
                            className: o()(X.tile, {
                                [X.noBorder]: eh,
                                [X.noInteraction]: null == F,
                                [X.idle]: eC
                            }),
                            noBorder: eh,
                            style: ei,
                            participantUserId: ew,
                            children: (0, r.jsxs)(u.kL8, {
                                'aria-label': e3,
                                className: X.tileChild,
                                onDoubleClick: eJ,
                                onContextMenu: (e) => e$(e, R.type === W.fO.STREAM),
                                onClick: eQ,
                                onMouseDown: ee,
                                onKeyDown: et,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eB && null != ew
                                        ? (0, r.jsx)(I.Z, {
                                              voiceChannelEffect: eB,
                                              onComplete: () => (0, S.H)(ew),
                                              userId: ew
                                          })
                                        : null,
                                    R.type === W.fO.USER
                                        ? (0, r.jsx)('div', {
                                              className: X.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
                                                  userId: ew,
                                                  channelId: eo.id,
                                                  guildId: eo.getGuildId(),
                                                  containerDimensions: {
                                                      width: null != (s = null == e4 || null == (n = e4.current) ? void 0 : n.clientWidth) ? s : 0,
                                                      height: null != (c = null == e4 || null == (l = e4.current) ? void 0 : l.clientHeight) ? c : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    e0,
                                    eh
                                        ? null
                                        : (0, r.jsx)('div', {
                                              className: X.indicators,
                                              children: e1
                                          }),
                                    ed
                                        ? (0, r.jsx)('div', {
                                              className: X.selectedScreen,
                                              children: (0, r.jsx)(e6, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: X.selectedIcon
                                              })
                                          })
                                        : null,
                                    $.includes(R.type)
                                        ? null
                                        : (0, r.jsx)(
                                              er,
                                              J(
                                                  Q(
                                                      {
                                                          focused: ef,
                                                          width: ea,
                                                          inCall: eu,
                                                          participantType: R.type,
                                                          hasVideo: null != ek && ek
                                                      },
                                                      eU
                                                  ),
                                                  {
                                                      idle: eC,
                                                      platform: eV,
                                                      title: (0, M.Z)(eo, R),
                                                      blocked: eg,
                                                      ignored: em,
                                                      localVideoDisabled: eA,
                                                      videoToggleState: eR,
                                                      hideAudioIcon: eG,
                                                      onContextMenu: e$,
                                                      onToggleMute: eX,
                                                      participantUserId: ew,
                                                      application: eW,
                                                      secureFramesVerified: eq,
                                                      isHovered: eI
                                                  }
                                              )
                                          ),
                                    R.type === W.fO.USER && eT
                                        ? (0, r.jsx)(O.Z, {
                                              userId: R.id,
                                              channelId: eo.id
                                          })
                                        : null,
                                    eu && !eh
                                        ? (0, r.jsx)('div', {
                                              className: o()(X.border, {
                                                  [X.voiceChannelEffect]: !ef && null != eB,
                                                  [X.speaking]: eL && !ef
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        ex &&
                            eS &&
                            eI &&
                            (0, r.jsx)(k.Z, {
                                currentUserId: eN,
                                participant: R
                            }),
                        (0, r.jsx)(v.Z, {
                            isFiring: ej,
                            callTileRef: e4.current
                        })
                    ]
                })
            })
        });
    });
function et(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === W.fO.STREAM)
        return n === W.wR.XBOX
            ? (0, r.jsx)(L.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case W.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case W.wR.XBOX:
            return (0, r.jsx)(L.Z, { className: i });
        case W.wR.PLAYSTATION:
            return (0, r.jsx)(D.Z, { className: i });
        default:
            return null;
    }
}
function en(e) {
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
                J(Q({}, s), {
                    onClick: (e) => {
                        (e.stopPropagation(), null == n || n(), l(e));
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Tt.CUSTOM,
                    size: c.Ph.ICON,
                    className: o()(X.overlayButton, {
                        [X.hideWhenInactive]: i,
                        [X.compact]: a
                    }),
                    innerClassName: X.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: a ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
ee.displayName = 'CallTile';
let er = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: c, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: _, onContextMenu: O, muted: y, deafened: v, localMuted: C, serverMuted: j, serverDeafened: E, hasVideo: x, hideAudioIcon: S, onToggleMute: I } = e,
        P = (0, a.e7)([Z.Z], () => null != m && Z.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        N = (0, F.N)(l),
        w = (0, F.K)(l),
        [T, A] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== R.Z.isOpen() && ((e = R.Z.isOpen()) || A(!1));
            };
        return (R.Z.addChangeListener(t), () => R.Z.removeChangeListener(t));
    }, []);
    let D = !S && f === W.fO.STREAM && x && (!w || C),
        L = (function (e) {
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
        className: o()(X.overlayContainer, { [X.compact]: w }),
        children: [
            (0, r.jsx)('div', {
                className: o()(X.overlayTop, { [X.small]: l < 195 }),
                children:
                    P || d === z.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: X.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(X.overlayTitle, X.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: X.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          className: X.overlayTitleText,
                                          children: q.intl.string(q.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !N &&
                (0, r.jsxs)('div', {
                    className: o()(X.overlayBottom, { [X.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: o()(X.experimentOverlayTitle, { [X.compact]: w }),
                            color: 'none',
                            variant: w ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != L &&
                                    f === W.fO.USER &&
                                    (0, r.jsx)(L, {
                                        className: o()(X.experimentTitleIcon, { [X.compact]: w }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: X.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: 'lg',
                                              className: X.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: X.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: 'lg',
                                              className: X.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(et, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(X.experimentTitleIcon, { [X.compact]: w })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: X.overlayTitleText,
                                          children: n
                                      }),
                                _ &&
                                    (0, r.jsx)(u.ua7, {
                                        text: q.intl.string(q.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.tQf,
                                                J(Q({}, e), {
                                                    className: X.secureFramesIcon,
                                                    size: 'xs',
                                                    color: s.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': q.intl.string(q.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !c &&
                            (0, r.jsxs)('div', {
                                className: X.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(en, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), A(!0), O(e, !0, W.A5.THREE_DOT));
                                        },
                                        tooltipText: q.intl.string(q.t['+1H47u']),
                                        icon: u.xhG,
                                        hideWhenInactive: !T,
                                        compact: w
                                    }),
                                    D &&
                                        (0, r.jsx)(en, {
                                            onClick: I,
                                            tooltipText: C ? q.intl.string(q.t.YqAjX1) : q.intl.string(q.t['w4m94+']),
                                            icon: C ? u.OyP : u.gj8,
                                            hideWhenInactive: !C && !T,
                                            compact: w
                                        })
                                ]
                            })
                    ]
                })
        ]
    });
});
er.displayName = 'CallTileOverlay';
let ei = y.L,
    el = ee;
