(n.d(t, {
    BP: () => ed,
    ZP: () => ef
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(846027),
    f = n(410575),
    _ = n(812206),
    p = n(835473),
    h = n(414910),
    m = n(415635),
    g = n(7284),
    E = n(649739),
    b = n(37091),
    y = n(6572),
    O = n(352978),
    v = n(936847),
    I = n(512384),
    T = n(210975),
    S = n(763296),
    A = n(695346),
    N = n(937995),
    C = n(456631),
    w = n(274459),
    R = n(314897),
    P = n(857192),
    D = n(77498),
    L = n(131951),
    x = n(158776),
    k = n(979651),
    j = n(574254),
    M = n(374129),
    U = n(639351),
    G = n(584729),
    B = n(334374),
    Z = n(849171),
    F = n(607187),
    V = n(833519),
    H = n(462061),
    Y = n(623825),
    W = n(839662),
    K = n(981631),
    z = n(354459),
    q = n(524484),
    $ = n(65154),
    X = n(388032),
    Q = n(519417);
function J(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ee(e) {
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
                J(e, t, n[t]);
            }));
    }
    return e;
}
function et(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function er(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ei(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let ea = [z.fO.ACTIVITY],
    eo = i.memo((e) => {
        var t, n, a, l, c;
        let { participant: g, onDoubleClick: j, onContextMenu: M, onClick: U, onMouseDown: Y, onKeyDown: J, className: et, style: er, containerStyle: ei, channel: eo, width: es, inPopout: el, onVideoResize: ec, inCall: ed = !1, selected: ef = !1, noBorder: ep = !1, noVideoRender: eh = !1, focused: em = !1, blocked: eg = !1, ignored: eE = !1, fit: eb = O.L.CONTAIN, paused: ey = !1, pulseSpeakingIndicator: eO = !1, forceIdle: ev = !1, inOverlayPopout: eI = !1 } = e,
            eT = i.useContext(N.h9) || ev,
            [eS, eA] = i.useState(!1),
            eN = A.Sb.useSetting(),
            eC = (0, s.e7)([P.default], () => P.default.isStreamInfoOverlayEnabled),
            [ew, eR] = i.useState(!1),
            eP = (0, s.e7)([R.default], () => R.default.getId()),
            eD = g.type === z.fO.ACTIVITY ? null : g.user,
            eL = null != (a = null == eD ? void 0 : eD.id) ? a : null,
            [ex] = (0, p.Z)(g.type === z.fO.ACTIVITY ? [g.applicationId] : []),
            ek = (0, s.e7)([b.Z], () => b.Z.getEnabled()),
            ej = (0, s.e7)([L.Z], () => null != eL && L.Z.isLocalVideoDisabled(eL, (0, h.Z)(g.type)), [eL, g.type]),
            eM = (0, s.e7)([L.Z], () => (null != eL ? L.Z.getVideoToggleState(eL, (0, h.Z)(g.type)) : K.ZUi.NONE), [eL, g.type]),
            eU = eM === K.ZUi.AUTO_PROBING,
            { speaking: eG, ringing: eB, hasVideo: eZ } = (0, W.Z)(g, eP),
            eF = (0, s.e7)([S.Z], () => null !== eL && S.Z.isUserPlayingSounds(eL), [eL]),
            eV = e_(eP, g, eo.getGuildId()),
            eH = g.type === z.fO.STREAM && eL === eP,
            eY = (0, s.e7)([C.Z], () => (g.type === z.fO.USER && null != eL ? C.Z.getEffectForUserId(eL) : null)),
            eW = (0, s.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(eo.id, null != eL ? eL : K.lds)),
            { showGameIcon: eK } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            ez = (0, s.e7)([x.Z], () => (eK && null != eL ? x.Z.findActivity(eL, (e) => null != e.application_id && e.type === K.IIU.PLAYING) : null), [eK, eL]),
            eq = (0, s.e7)([D.Z], () => ((null == ez ? void 0 : ez.application_id) != null ? D.Z.getDetectableGame(ez.application_id) : null)),
            e$ = (0, s.e7)([_.Z], () => (null != eq && (null == ez ? void 0 : ez.application_id) != null ? _.Z.getApplication(null == ez ? void 0 : ez.application_id) : void 0)),
            eX = (0, T.wV)({
                userId: eL,
                channelId: eo.id
            }),
            eQ = (0, T.zU)({
                streamKey: g.type === z.fO.STREAM ? g.id : null,
                channelId: eo.id
            }),
            eJ = i.useMemo(() => (g.type === z.fO.STREAM ? null != eQ && eQ : g.type === z.fO.USER && null != eX && eX), [eQ, eX, g.type]);
        i.useEffect(() => {
            eA(em);
        }, [em]);
        let e0 = i.useCallback(() => {
                null != eL && d.Z.toggleLocalMute(eL, $.Yn.STREAM);
            }, [eL]),
            e1 = i.useCallback(
                (e) => {
                    null == U || U(g, e);
                },
                [U, g]
            ),
            e2 = i.useCallback(
                (e) => {
                    null == j || j(g, e);
                },
                [j, g]
            ),
            e3 = i.useCallback(
                (e, t, n) => {
                    null == M || M(g, e, t, n);
                },
                [M, g]
            ),
            e5 = () => {
                eR(!0);
            },
            e4 = () => {
                eR(!1);
            },
            e6 = null,
            e8 = null,
            e7 = '';
        switch (g.type) {
            case z.fO.STREAM:
                ((e6 = (0, r.jsx)(V.Z, {
                    participant: g,
                    selected: ef,
                    width: es,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    inPopout: el,
                    focused: em,
                    inOverlayPopout: eI
                })),
                    (e8 = (0, r.jsx)(V._, {
                        participant: g,
                        selected: ef,
                        width: es,
                        focused: em,
                        idle: eT,
                        premiumIndicator: !1
                    })),
                    (e7 = X.intl.formatToPlainString(X.t.gHPz3d, { streamerName: g.user.username })));
                break;
            case z.fO.USER:
                ((e6 = (0, r.jsx)(H.Z, {
                    channel: eo,
                    inCall: ed,
                    participant: g,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    selected: ef,
                    width: es,
                    blocked: eg,
                    ignored: eE,
                    noVideoRender: eh || eU,
                    pulseSpeakingIndicator: eO,
                    inOverlayPopout: eI
                })),
                    (e8 = (0, r.jsx)(H.T, {
                        participant: g,
                        channelId: eo.id
                    })),
                    (e7 = X.intl.formatToPlainString(X.t['iC/x/f'], { username: g.user.username })));
                break;
            case z.fO.ACTIVITY:
                ((e6 = (0, r.jsx)(Z.ZP, {
                    interactible: em,
                    participant: g,
                    selected: ef,
                    channel: eo,
                    width: es
                })),
                    (e7 = X.intl.formatToPlainString(X.t.YCvOsL, { activityName: null == ex ? void 0 : ex.name })));
                break;
            case z.fO.HIDDEN_STREAM:
                e6 = (0, r.jsx)(V.Z, {
                    participant: g,
                    selected: ef,
                    width: es,
                    fit: eb,
                    onVideoResize: ec,
                    paused: ey,
                    inPopout: el,
                    focused: em,
                    inOverlayPopout: eI
                });
        }
        let e9 = i.useRef(null),
            te = g.type === z.fO.STREAM ? u.pzj : u.Odl;
        return (0, r.jsx)(f.Z, {
            section: K.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)('div', {
                className: o()(Q.wrapper, { [Q.ringing]: eB }, et),
                style: ei,
                onMouseEnter: e5,
                onMouseLeave: e4,
                children: (0, r.jsxs)(I.Z, {
                    shakeLocation: q.oZ.VOICE_USER,
                    isShaking: eG,
                    className: Q.tile,
                    children: [
                        (0, r.jsx)(F.Z, {
                            ref: e9,
                            className: o()(Q.tile, {
                                [Q.noBorder]: ep,
                                [Q.noInteraction]: null == U,
                                [Q.idle]: eT
                            }),
                            noBorder: ep,
                            style: er,
                            participantUserId: eL,
                            children: (0, r.jsxs)(u.kL8, {
                                'aria-label': e7,
                                className: Q.tileChild,
                                onDoubleClick: e2,
                                onContextMenu: (e) => e3(e, g.type === z.fO.STREAM),
                                onClick: e1,
                                onMouseDown: Y,
                                onKeyDown: J,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eY && null != eL
                                        ? (0, r.jsx)(w.Z, {
                                              voiceChannelEffect: eY,
                                              onComplete: () => (0, C.H)(eL),
                                              userId: eL
                                          })
                                        : null,
                                    g.type === z.fO.USER
                                        ? (0, r.jsx)('div', {
                                              className: Q.voiceChannelEffectsContainer,
                                              children: (0, r.jsx)(m.Z, {
                                                  userId: eL,
                                                  channelId: eo.id,
                                                  guildId: eo.getGuildId(),
                                                  containerDimensions: {
                                                      width: null != (l = null == e9 || null == (t = e9.current) ? void 0 : t.clientWidth) ? l : 0,
                                                      height: null != (c = null == e9 || null == (n = e9.current) ? void 0 : n.clientHeight) ? c : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    e6,
                                    ep
                                        ? null
                                        : (0, r.jsx)('div', {
                                              className: Q.indicators,
                                              children: e8
                                          }),
                                    ef
                                        ? (0, r.jsx)('div', {
                                              className: Q.selectedScreen,
                                              children: (0, r.jsx)(te, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: Q.selectedIcon
                                              })
                                          })
                                        : null,
                                    ea.includes(g.type)
                                        ? null
                                        : (0, r.jsx)(
                                              eu,
                                              en(
                                                  ee(
                                                      {
                                                          focused: em,
                                                          width: es,
                                                          inCall: ed,
                                                          participantType: g.type,
                                                          hasVideo: null != eZ && eZ
                                                      },
                                                      eV
                                                  ),
                                                  {
                                                      idle: eT,
                                                      platform: eW,
                                                      title: (0, G.Z)(eo, g),
                                                      blocked: eg,
                                                      ignored: eE,
                                                      localVideoDisabled: ej,
                                                      videoToggleState: eM,
                                                      hideAudioIcon: eH,
                                                      onContextMenu: e3,
                                                      onToggleMute: e0,
                                                      participantUserId: eL,
                                                      participantDisplayNameStyles: null == eD ? void 0 : eD.displayNameStyles,
                                                      application: e$,
                                                      secureFramesVerified: eJ,
                                                      isHovered: ew
                                                  }
                                              )
                                          ),
                                    g.type === z.fO.USER && ek
                                        ? (0, r.jsx)(y.Z, {
                                              userId: g.id,
                                              channelId: eo.id
                                          })
                                        : null,
                                    ed && !ep
                                        ? (0, r.jsx)('div', {
                                              className: o()(Q.border, {
                                                  [Q.voiceChannelEffect]: !em && (eF || null != eY),
                                                  [Q.speaking]: eG && !em && !eF
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eN &&
                            eC &&
                            ew &&
                            (0, r.jsx)(B.Z, {
                                currentUserId: eP,
                                participant: g
                            }),
                        (0, r.jsx)(v.Z, {
                            isFiring: eS,
                            callTileRef: e9.current
                        })
                    ]
                })
            })
        });
    });
function es(e) {
    let { participantType: t, platform: n, className: i } = e;
    if (t === z.fO.STREAM)
        return n === z.wR.XBOX
            ? (0, r.jsx)(U.Z, { className: i })
            : (0, r.jsx)(u.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (n) {
        case z.wR.MOBILE:
            return (0, r.jsx)(u.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case z.wR.XBOX:
            return (0, r.jsx)(U.Z, { className: i });
        case z.wR.PLAYSTATION:
            return (0, r.jsx)(M.Z, { className: i });
        default:
            return null;
    }
}
function el(e) {
    let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: a } = e;
    return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : a ? u.nRN : null;
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: a, compact: s } = e;
    return (0, r.jsx)(u.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                l = er(e, ['onClick']);
            return (0, r.jsx)(
                c.zx,
                en(ee({}, l), {
                    onClick: (e) => {
                        (e.stopPropagation(), null == n || n(), a(e));
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Tt.CUSTOM,
                    size: c.Ph.ICON,
                    className: o()(Q.overlayButton, {
                        [Q.hideWhenInactive]: i,
                        [Q.compact]: s
                    }),
                    innerClassName: Q.overlayButtonInner,
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
let eu = i.memo((e) => {
    let { idle: t, title: n, width: a, focused: c, videoToggleState: d, blocked: f, ignored: _, participantType: p, participantUserId: m, participantDisplayNameStyles: E, platform: b, secureFramesVerified: y, onContextMenu: O, muted: v, deafened: I, localMuted: T, serverMuted: S, serverDeafened: A, hasVideo: N, hideAudioIcon: C, onToggleMute: w } = e,
        R = (0, s.e7)([L.Z], () => null != m && L.Z.isLocalVideoAutoDisabled(m, (0, h.Z)(p)), [m, p]),
        P = (0, g.j)({ displayNameStyles: E }),
        D = () =>
            R || d === K.ZUi.AUTO_PROBING
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
                : null,
        x = (0, Y.N)(a),
        k = (0, Y.K)(a),
        [M, U] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== j.Z.isOpen() && ((e = j.Z.isOpen()) || U(!1));
            };
        return (j.Z.addChangeListener(t), () => j.Z.removeChangeListener(t));
    }, []);
    let G = (e) => {
            (e.stopPropagation(), U(!0), O(e, !0, z.A5.THREE_DOT));
        },
        B = !C && p === z.fO.STREAM && N && (!k || T),
        Z = el({
            localMuted: T,
            serverMuted: S,
            serverDeafened: A,
            deafened: I,
            muted: v
        });
    return (0, r.jsxs)('div', {
        className: o()(Q.overlayContainer, { [Q.compact]: k }),
        children: [
            (0, r.jsx)('div', {
                className: o()(Q.overlayTop, { [Q.small]: a < 195 }),
                children: D()
            }),
            !x &&
                (0, r.jsxs)('div', {
                    className: o()(Q.overlayBottom, { [Q.small]: a < 195 }),
                    children: [
                        (0, r.jsxs)(u.Text, {
                            className: o()(Q.experimentOverlayTitle, { [Q.compact]: k }),
                            color: 'none',
                            variant: k ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != Z &&
                                    p === z.fO.USER &&
                                    (0, r.jsx)(Z, {
                                        className: o()(Q.experimentTitleIcon, { [Q.compact]: k }),
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                f
                                    ? (0, r.jsx)('div', {
                                          className: Q.blocked,
                                          children: (0, r.jsx)(u.t6m, {
                                              size: 'lg',
                                              className: Q.blockedIcon,
                                              color: l.Z.unsafe_rawColors.RED_400.css
                                          })
                                      })
                                    : null,
                                _
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
                                    : (0, r.jsx)(es, {
                                          participantType: p,
                                          platform: b,
                                          className: o()(Q.experimentTitleIcon, { [Q.compact]: k })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: o()(Q.overlayTitleText, P),
                                          children: n
                                      }),
                                y &&
                                    (0, r.jsx)(u.ua7, {
                                        text: X.intl.string(X.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.tQf,
                                                en(ee({}, e), {
                                                    className: Q.secureFramesIcon,
                                                    size: 'xs',
                                                    color: l.Z.colors.HEADER_PRIMARY,
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
                                    (0, r.jsx)(ec, {
                                        onClick: G,
                                        tooltipText: X.intl.string(X.t['+1H47u']),
                                        icon: u.xhG,
                                        hideWhenInactive: !M,
                                        compact: k
                                    }),
                                    B &&
                                        (0, r.jsx)(ec, {
                                            onClick: w,
                                            tooltipText: T ? X.intl.string(X.t.YqAjX1) : X.intl.string(X.t['w4m94+']),
                                            icon: T ? u.OyP : u.gj8,
                                            hideWhenInactive: !T && !M,
                                            compact: k
                                        })
                                ]
                            })
                    ]
                })
        ]
    });
});
eu.displayName = 'CallTileOverlay';
let ed = O.L,
    ef = eo;
function e_(e, t, n) {
    var r, i, a, o;
    let l = t.type !== z.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([k.Z], () => {
            var e, t, r;
            let i = k.Z.getVoiceState(n, l);
            return {
                muted: null != (e = null == i ? void 0 : i.mute) && e,
                deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        u = (0, s.cj)(
            [L.Z],
            () => {
                let n = (0, h.Z)(t.type);
                return e === l
                    ? {
                          muted: !1,
                          deafened: !1
                      }
                    : {
                          muted: L.Z.isLocalMute(l, n),
                          localVideoDisabled: L.Z.isLocalVideoDisabled(l, n),
                          localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(l, n)
                      };
            },
            [e, t.type, l]
        );
    return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (a = t.type === z.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && a,
        deafened: null != (o = t.type === z.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
    };
}
