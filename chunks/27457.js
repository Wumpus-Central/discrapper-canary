(n.d(t, {
    BP: () => el,
    ZP: () => eo
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
    C = n(936847),
    v = n(512384),
    j = n(210975),
    E = n(763296),
    S = n(695346),
    x = n(937995),
    I = n(456631),
    P = n(274459),
    N = n(314897),
    w = n(857192),
    T = n(77498),
    Z = n(131951),
    A = n(158776),
    R = n(979651),
    D = n(574254),
    L = n(374129),
    M = n(639351),
    k = n(584729),
    U = n(334374),
    G = n(849171),
    B = n(607187),
    V = n(833519),
    F = n(462061),
    H = n(623825),
    z = n(839662),
    W = n(981631),
    K = n(354459),
    Y = n(524484),
    q = n(65154),
    X = n(388032),
    Q = n(519417);
function J(e) {
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
function $(e, t) {
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
let ee = [K.fO.ACTIVITY],
    et = i.memo((e) => {
        var t, n, l, s, c;
        let { participant: D, onDoubleClick: L, onContextMenu: M, onClick: H, onMouseDown: et, onKeyDown: en, className: er, style: el, containerStyle: eo, channel: ea, width: es, inPopout: ec, onVideoResize: eu, inCall: ed = !1, selected: eh = !1, noBorder: ep = !1, noVideoRender: ef = !1, focused: eg = !1, blocked: em = !1, ignored: eb = !1, fit: e_ = y.L.CONTAIN, paused: eO = !1, pulseSpeakingIndicator: ey = !1, forceIdle: eC = !1, inOverlayPopout: ev = !1 } = e,
            ej = i.useContext(x.h9) || eC,
            [eE, eS] = i.useState(!1),
            ex = S.Sb.useSetting(),
            eI = (0, a.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled),
            [eP, eN] = i.useState(!1),
            ew = (0, a.e7)([N.default], () => N.default.getId()),
            eT = D.type === K.fO.ACTIVITY ? null : null == (t = D.user) ? void 0 : t.id,
            [eZ] = (0, f.Z)(D.type === K.fO.ACTIVITY ? [D.applicationId] : []),
            eA = (0, a.e7)([_.Z], () => _.Z.getEnabled()),
            eR = (0, a.e7)([Z.Z], () => null != eT && Z.Z.isLocalVideoDisabled(eT, (0, g.Z)(D.type)), [eT, D.type]),
            eD = (0, a.e7)([Z.Z], () => (null != eT ? Z.Z.getVideoToggleState(eT, (0, g.Z)(D.type)) : W.ZUi.NONE), [eT, D.type]),
            eL = eD === W.ZUi.AUTO_PROBING,
            { speaking: eM, ringing: ek, hasVideo: eU } = (0, z.Z)(D, ew),
            eG = (0, a.e7)([E.Z], () => null !== eT && E.Z.isUserPlayingSounds(eT), [eT]),
            eB = (function (e, t, n) {
                var r, i, l, o;
                let s = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([R.Z], () => {
                        var e, t, r;
                        let i = R.Z.getVoiceState(n, s);
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
                    muted: null != (l = t.type === K.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
                    deafened: null != (o = t.type === K.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
                };
            })(ew, D, ea.getGuildId()),
            eV = D.type === K.fO.STREAM && eT === ew,
            eF = (0, a.e7)([I.Z], () => (D.type === K.fO.USER && null != eT ? I.Z.getEffectForUserId(eT) : null)),
            eH = (0, a.e7)([R.Z], () => R.Z.getVoicePlatformForChannel(ea.id, null != eT ? eT : W.lds)),
            { showGameIcon: ez } = b.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            eW = (0, a.e7)([A.Z], () => (ez && null != eT ? A.Z.findActivity(eT, (e) => null != e.application_id && e.type === W.IIU.PLAYING) : null), [ez, eT]),
            eK = (0, a.e7)([T.Z], () => ((null == eW ? void 0 : eW.application_id) != null ? T.Z.getDetectableGame(eW.application_id) : null)),
            eY = (0, a.e7)([p.Z], () => (null != eK && (null == eW ? void 0 : eW.application_id) != null ? p.Z.getApplication(null == eW ? void 0 : eW.application_id) : void 0)),
            eq = (0, j.wV)({
                userId: eT,
                channelId: ea.id
            }),
            eX = (0, j.zU)({
                streamKey: D.type === K.fO.STREAM ? D.id : null,
                channelId: ea.id
            }),
            eQ = i.useMemo(() => (D.type === K.fO.STREAM ? null != eX && eX : D.type === K.fO.USER && null != eq && eq), [eX, eq, D.type]);
        i.useEffect(() => {
            eS(eg);
        }, [eg]);
        let eJ = i.useCallback(() => {
                null != eT && d.Z.toggleLocalMute(eT, q.Yn.STREAM);
            }, [eT]),
            e$ = i.useCallback(
                (e) => {
                    null == H || H(D, e);
                },
                [H, D]
            ),
            e0 = i.useCallback(
                (e) => {
                    null == L || L(D, e);
                },
                [L, D]
            ),
            e1 = i.useCallback(
                (e, t, n) => {
                    null == M || M(D, e, t, n);
                },
                [M, D]
            ),
            e3 = null,
            e4 = null,
            e6 = '';
        switch (D.type) {
            case K.fO.STREAM:
                ((e3 = (0, r.jsx)(V.Z, {
                    participant: D,
                    selected: eh,
                    width: es,
                    fit: e_,
                    onVideoResize: eu,
                    paused: eO,
                    inPopout: ec,
                    focused: eg,
                    inOverlayPopout: ev
                })),
                    (e4 = (0, r.jsx)(V._, {
                        participant: D,
                        selected: eh,
                        width: es,
                        focused: eg,
                        idle: ej,
                        premiumIndicator: !1
                    })),
                    (e6 = X.intl.formatToPlainString(X.t.gHPz3d, { streamerName: D.user.username })));
                break;
            case K.fO.USER:
                ((e3 = (0, r.jsx)(F.Z, {
                    channel: ea,
                    inCall: ed,
                    participant: D,
                    fit: e_,
                    onVideoResize: eu,
                    paused: eO,
                    selected: eh,
                    width: es,
                    blocked: em,
                    ignored: eb,
                    noVideoRender: ef || eL,
                    pulseSpeakingIndicator: ey,
                    inOverlayPopout: ev
                })),
                    (e4 = (0, r.jsx)(F.T, {
                        participant: D,
                        channelId: ea.id
                    })),
                    (e6 = X.intl.formatToPlainString(X.t['iC/x/f'], { username: D.user.username })));
                break;
            case K.fO.ACTIVITY:
                ((e3 = (0, r.jsx)(G.ZP, {
                    interactible: eg,
                    participant: D,
                    selected: eh,
                    channel: ea,
                    width: es
                })),
                    (e6 = X.intl.formatToPlainString(X.t.YCvOsL, { activityName: null == eZ ? void 0 : eZ.name })));
                break;
            case K.fO.HIDDEN_STREAM:
                e3 = (0, r.jsx)(V.Z, {
                    participant: D,
                    selected: eh,
                    width: es,
                    fit: e_,
                    onVideoResize: eu,
                    paused: eO,
                    inPopout: ec,
                    focused: eg,
                    inOverlayPopout: ev
                });
        }
        let e8 = i.useRef(null),
            e5 = D.type === K.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(h.Z, {
            section: W.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)('div', {
                className: o()(Q.wrapper, { [Q.ringing]: ek }, er),
                style: eo,
                onMouseEnter: () => {
                    eN(!0);
                },
                onMouseLeave: () => {
                    eN(!1);
                },
                children: (0, r.jsxs)(v.Z, {
                    shakeLocation: Y.oZ.VOICE_USER,
                    isShaking: eM,
                    className: Q.tile,
                    children: [
                        (0, r.jsx)(B.Z, {
                            ref: e8,
                            className: o()(Q.tile, {
                                [Q.noBorder]: ep,
                                [Q.noInteraction]: null == H,
                                [Q.idle]: ej
                            }),
                            noBorder: ep,
                            style: el,
                            participantUserId: eT,
                            children: (0, r.jsxs)(u.kL8, {
                                'aria-label': e6,
                                className: Q.tileChild,
                                onDoubleClick: e0,
                                onContextMenu: (e) => e1(e, D.type === K.fO.STREAM),
                                onClick: e$,
                                onMouseDown: et,
                                onKeyDown: en,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eF && null != eT
                                        ? (0, r.jsx)(P.Z, {
                                              voiceChannelEffect: eF,
                                              onComplete: () => (0, I.H)(eT),
                                              userId: eT
                                          })
                                        : null,
                                    D.type === K.fO.USER
                                        ? (0, r.jsx)('div', {
                                              className: Q.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
                                                  userId: eT,
                                                  channelId: ea.id,
                                                  guildId: ea.getGuildId(),
                                                  containerDimensions: {
                                                      width: null != (s = null == e8 || null == (n = e8.current) ? void 0 : n.clientWidth) ? s : 0,
                                                      height: null != (c = null == e8 || null == (l = e8.current) ? void 0 : l.clientHeight) ? c : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    e3,
                                    ep
                                        ? null
                                        : (0, r.jsx)('div', {
                                              className: Q.indicators,
                                              children: e4
                                          }),
                                    eh
                                        ? (0, r.jsx)('div', {
                                              className: Q.selectedScreen,
                                              children: (0, r.jsx)(e5, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: Q.selectedIcon
                                              })
                                          })
                                        : null,
                                    ee.includes(D.type)
                                        ? null
                                        : (0, r.jsx)(
                                              ei,
                                              $(
                                                  J(
                                                      {
                                                          focused: eg,
                                                          width: es,
                                                          inCall: ed,
                                                          participantType: D.type,
                                                          hasVideo: null != eU && eU
                                                      },
                                                      eB
                                                  ),
                                                  {
                                                      idle: ej,
                                                      platform: eH,
                                                      title: (0, k.Z)(ea, D),
                                                      blocked: em,
                                                      ignored: eb,
                                                      localVideoDisabled: eR,
                                                      videoToggleState: eD,
                                                      hideAudioIcon: eV,
                                                      onContextMenu: e1,
                                                      onToggleMute: eJ,
                                                      participantUserId: eT,
                                                      application: eY,
                                                      secureFramesVerified: eQ,
                                                      isHovered: eP
                                                  }
                                              )
                                          ),
                                    D.type === K.fO.USER && eA
                                        ? (0, r.jsx)(O.Z, {
                                              userId: D.id,
                                              channelId: ea.id
                                          })
                                        : null,
                                    ed && !ep
                                        ? (0, r.jsx)('div', {
                                              className: o()(Q.border, {
                                                  [Q.voiceChannelEffect]: !eg && (eG || null != eF),
                                                  [Q.speaking]: eM && !eg && !eG
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        ex &&
                            eI &&
                            eP &&
                            (0, r.jsx)(U.Z, {
                                currentUserId: ew,
                                participant: D
                            }),
                        (0, r.jsx)(C.Z, {
                            isFiring: eE,
                            callTileRef: e8.current
                        })
                    ]
                })
            })
        });
    });
function en(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === K.fO.STREAM)
        return n === K.wR.XBOX
            ? (0, r.jsx)(M.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case K.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case K.wR.XBOX:
            return (0, r.jsx)(M.Z, { className: i });
        case K.wR.PLAYSTATION:
            return (0, r.jsx)(L.Z, { className: i });
        default:
            return null;
    }
}
function er(e) {
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
                $(J({}, s), {
                    onClick: (e) => {
                        (e.stopPropagation(), null == n || n(), l(e));
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Tt.CUSTOM,
                    size: c.Ph.ICON,
                    className: o()(Q.overlayButton, {
                        [Q.hideWhenInactive]: i,
                        [Q.compact]: a
                    }),
                    innerClassName: Q.overlayButtonInner,
                    children: (0, r.jsx)(t, {
                        size: a ? 'xs' : 'refresh_sm',
                        color: 'currentColor'
                    })
                })
            );
        }
    });
}
et.displayName = 'CallTile';
let ei = i.memo((e) => {
    let { idle: t, title: n, width: l, focused: c, videoToggleState: d, blocked: h, ignored: p, participantType: f, participantUserId: m, platform: b, secureFramesVerified: _, onContextMenu: O, muted: y, deafened: C, localMuted: v, serverMuted: j, serverDeafened: E, hasVideo: S, hideAudioIcon: x, onToggleMute: I } = e,
        P = (0, a.e7)([Z.Z], () => null != m && Z.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]),
        N = (0, H.N)(l),
        w = (0, H.K)(l),
        [T, A] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== D.Z.isOpen() && ((e = D.Z.isOpen()) || A(!1));
            };
        return (D.Z.addChangeListener(t), () => D.Z.removeChangeListener(t));
    }, []);
    let R = !x && f === K.fO.STREAM && S && (!w || v),
        L = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: l } = e;
            return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null;
        })({
            localMuted: v,
            serverMuted: j,
            serverDeafened: E,
            deafened: C,
            muted: y
        });
    return (0, r.jsxs)('div', {
        className: o()(Q.overlayContainer, { [Q.compact]: w }),
        children: [
            (0, r.jsx)('div', {
                className: o()(Q.overlayTop, { [Q.small]: l < 195 }),
                children:
                    P || d === W.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: Q.status,
                                  children: (0, r.jsx)(u.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: o()(Q.overlayTitle, Q.videoDisabledTitle),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: Q.status,
                                          children: (0, r.jsx)(u.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          className: Q.overlayTitleText,
                                          children: X.intl.string(X.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !N &&
                (0, r.jsxs)('div', {
                    className: o()(Q.overlayBottom, { [Q.small]: l < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: o()(Q.experimentOverlayTitle, { [Q.compact]: w }),
                            color: 'none',
                            variant: w ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != L &&
                                    f === K.fO.USER &&
                                    (0, r.jsx)(L, {
                                        className: o()(Q.experimentTitleIcon, { [Q.compact]: w }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                h
                                    ? (0, r.jsx)('div', {
                                          className: Q.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: 'lg',
                                              className: Q.blockedIcon,
                                              color: s.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                p
                                    ? (0, r.jsx)('div', {
                                          className: Q.ignored,
                                          children: (0, r.jsx)(u.kZF, {
                                              size: 'lg',
                                              className: Q.blockedIcon
                                          })
                                      })
                                    : null,
                                t
                                    ? null
                                    : (0, r.jsx)(en, {
                                          participantType: f,
                                          platform: b,
                                          className: o()(Q.experimentTitleIcon, { [Q.compact]: w })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: Q.overlayTitleText,
                                          children: n
                                      }),
                                _ &&
                                    (0, r.jsx)(u.ua7, {
                                        text: X.intl.string(X.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.tQf,
                                                $(J({}, e), {
                                                    className: Q.secureFramesIcon,
                                                    size: 'xs',
                                                    color: s.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': X.intl.string(X.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        !c &&
                            (0, r.jsxs)('div', {
                                className: Q.overlayButtonContainer,
                                children: [
                                    (0, r.jsx)(er, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), A(!0), O(e, !0, K.A5.THREE_DOT));
                                        },
                                        tooltipText: X.intl.string(X.t['+1H47u']),
                                        icon: u.xhG,
                                        hideWhenInactive: !T,
                                        compact: w
                                    }),
                                    R &&
                                        (0, r.jsx)(er, {
                                            onClick: I,
                                            tooltipText: v ? X.intl.string(X.t.YqAjX1) : X.intl.string(X.t['w4m94+']),
                                            icon: v ? u.OyP : u.gj8,
                                            hideWhenInactive: !v && !T,
                                            compact: w
                                        })
                                ]
                            })
                    ]
                })
        ]
    });
});
ei.displayName = 'CallTileOverlay';
let el = y.L,
    eo = et;
