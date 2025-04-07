n.d(t, {
    BP: () => eg,
    ZP: () => eb
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(442837),
    a = n(692547),
    c = n(481060),
    u = n(846027),
    d = n(410575),
    _ = n(607070),
    p = n(812206),
    h = n(835473),
    f = n(414910),
    m = n(415635),
    g = n(578976),
    b = n(925329),
    E = n(649739),
    C = n(37091),
    O = n(6572),
    y = n(352978),
    v = n(936847),
    N = n(512384),
    S = n(33316),
    x = n(576645),
    I = n(6242),
    T = n(757692),
    L = n(210975),
    P = n(695346),
    A = n(937995),
    j = n(456631),
    R = n(274459),
    w = n(314897),
    k = n(857192),
    M = n(77498),
    Z = n(131951),
    D = n(158776),
    U = n(594174),
    V = n(979651),
    H = n(574254),
    G = n(374129),
    W = n(639351),
    B = n(74538),
    F = n(221241),
    z = n(584729),
    Y = n(334374),
    K = n(849171),
    X = n(607187),
    Q = n(624834),
    q = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    er = n(37113),
    ei = n(524484),
    eo = n(65154),
    el = n(388032),
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
        var t, n, o, a, b;
        let { participant: H, onDoubleClick: G, onContextMenu: W, onClick: $, onMouseDown: eu, onKeyDown: e_, className: ep, style: eh, containerStyle: eg, channel: eb, width: eE, inPopout: eC, onVideoResize: eO, inCall: ey = !1, selected: ev = !1, noBorder: eN = !1, noVideoRender: eS = !1, focused: ex = !1, blocked: eI = !1, ignored: eT = !1, fit: eL = y.L.CONTAIN, paused: eP = !1, pulseSpeakingIndicator: eA = !1, forceIdle: ej = !1, inOverlayPopout: eR = !1 } = e,
            ew = i.useContext(A.h9) || ej,
            [ek, eM] = i.useState(!1),
            eZ = P.Sb.useSetting(),
            eD = (0, s.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled),
            [eU, eV] = i.useState(!1),
            eH = (0, s.e7)([w.default], () => w.default.getId()),
            eG = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
            eW = H.type === en.fO.ACTIVITY ? null : null == (t = H.user) ? void 0 : t.id,
            [eB] = (0, h.Z)(H.type === en.fO.ACTIVITY ? [H.applicationId] : []),
            eF = (0, s.e7)([C.Z], () => C.Z.getEnabled()),
            ez = (0, s.e7)([Z.Z], () => null != eW && Z.Z.isLocalVideoDisabled(eW, (0, f.Z)(H.type)), [eW, H.type]),
            eY = (0, s.e7)([Z.Z], () => (null != eW ? Z.Z.getVideoToggleState(eW, (0, f.Z)(H.type)) : et.ZUi.NONE), [eW, H.type]),
            eK = eY === et.ZUi.AUTO_PROBING,
            { speaking: eX, ringing: eQ, hasVideo: eq } = (0, ee.Z)(H, eH),
            eJ = (function (e, t, n) {
                var r, i, o, l;
                let a = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, s.cj)([V.Z], () => {
                        var e, t, r;
                        let i = V.Z.getVoiceState(n, a);
                        return {
                            muted: null != (e = null == i ? void 0 : i.mute) && e,
                            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
                            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    u = (0, s.cj)(
                        [Z.Z],
                        () => {
                            let n = (0, f.Z)(t.type);
                            return e === a
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: Z.Z.isLocalMute(a, n),
                                      localVideoDisabled: Z.Z.isLocalVideoDisabled(a, n),
                                      localVideoAutoDisabled: Z.Z.isLocalVideoAutoDisabled(a, n)
                                  };
                        },
                        [e, t.type, a]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null != (o = t.type === en.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && o,
                    deafened: null != (l = t.type === en.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && l
                };
            })(eH, H, eb.getGuildId()),
            e$ = H.type === en.fO.STREAM && eW === eH,
            e0 = B.ZP.isPremium(eG);
        i.useEffect(() => {
            if (e$ && !e0 && null != eb.hdStreamingUntil && new Date(eb.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = Z.Z.getGoLiveSource(),
                            t = (0, g.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
                        u.Z.setGoLiveSource(t);
                    },
                    new Date(eb.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        }, [e$, e0, eb.hdStreamingUntil]);
        let e4 = (0, T.o)(H, eG),
            e1 = (0, I.lL)('CallTile', !0, eG, e4),
            e6 = (0, s.e7)([j.Z], () => (H.type === en.fO.USER && null != eW ? j.Z.getEffectForUserId(eW) : null)),
            e3 = (0, s.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eb.id, null != eW ? eW : et.lds)),
            { simplifiedSettingsEnabled: e8 } = (0, F.Z)({ location: 'CallTile' }),
            { showGameIcon: e9 } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e2 = (0, s.e7)([D.Z], () => (e9 && null != eW ? D.Z.findActivity(eW, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e9, eW]),
            e7 = (0, s.e7)([M.Z], () => ((null == e2 ? void 0 : e2.application_id) != null ? M.Z.getDetectableGame(e2.application_id) : null)),
            e5 = (0, s.e7)([p.Z], () => (null != e7 && (null == e2 ? void 0 : e2.application_id) != null ? p.Z.getApplication(null == e2 ? void 0 : e2.application_id) : void 0)),
            te = (0, L.wV)({
                userId: eW,
                channelId: eb.id
            }),
            tt = (0, L.zU)({
                streamKey: H.type === en.fO.STREAM ? H.id : null,
                channelId: eb.id
            }),
            tn = i.useMemo(() => (H.type === en.fO.STREAM ? null != tt && tt : H.type === en.fO.USER && null != te && te), [tt, te, H.type]);
        i.useEffect(() => {
            eM(ex);
        }, [ex]);
        let [tr, ti] = i.useState(!1),
            to = i.useCallback(() => {
                _.Z.useReducedMotion || ti(!0);
            }, []);
        (0, x.J)(eb, to);
        let tl = i.useCallback(() => {
                null != eW && u.Z.toggleLocalMute(eW, eo.Yn.STREAM);
            }, [eW]),
            ts = i.useCallback(
                (e) => {
                    null == $ || $(H, e);
                },
                [$, H]
            ),
            ta = i.useCallback(
                (e) => {
                    null == G || G(H, e);
                },
                [G, H]
            ),
            tc = i.useCallback(
                (e, t, n) => {
                    null == W || W(H, e, t, n);
                },
                [W, H]
            ),
            tu = null,
            td = null,
            t_ = '';
        switch (H.type) {
            case en.fO.STREAM:
                (tu = (0, r.jsx)(q.Z, {
                    participant: H,
                    selected: ev,
                    width: eE,
                    fit: eL,
                    onVideoResize: eO,
                    paused: eP,
                    inPopout: eC,
                    focused: ex,
                    inOverlayPopout: eR
                })),
                    (td = (0, r.jsx)(q._, {
                        participant: H,
                        selected: ev,
                        width: eE,
                        focused: ex,
                        idle: ew,
                        premiumIndicator: e1.enabled
                    })),
                    (t_ = el.NW.formatToPlainString(el.t.gHPz3d, { streamerName: H.user.username }));
                break;
            case en.fO.USER:
                (tu = (0, r.jsx)(J.Z, {
                    channel: eb,
                    inCall: ey,
                    participant: H,
                    fit: eL,
                    onVideoResize: eO,
                    paused: eP,
                    selected: ev,
                    width: eE,
                    blocked: eI,
                    ignored: eT,
                    noVideoRender: eS || eK,
                    pulseSpeakingIndicator: eA,
                    inOverlayPopout: eR
                })),
                    (td = (0, r.jsx)(J.T, {
                        participant: H,
                        channelId: eb.id
                    })),
                    (t_ = el.NW.formatToPlainString(el.t['iC/x/f'], { username: H.user.username }));
                break;
            case en.fO.ACTIVITY:
                (tu = (0, r.jsx)(K.ZP, {
                    interactible: ex,
                    participant: H,
                    selected: ev,
                    channel: eb,
                    width: eE
                })),
                    (t_ = el.NW.formatToPlainString(el.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tu = (0, r.jsx)(Q.Z, {
                    participant: H,
                    width: eE,
                    channelId: eb.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                tu = (0, r.jsx)(q.Z, {
                    participant: H,
                    selected: ev,
                    width: eE,
                    fit: eL,
                    onVideoResize: eO,
                    paused: eP,
                    inPopout: eC,
                    focused: ex,
                    inOverlayPopout: eR
                });
        }
        let tp = i.useRef(null),
            th = H.type === en.fO.STREAM ? c.pzj : c.Odl,
            tf = e8 ? ef : em;
        return (0, r.jsx)(d.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, r.jsxs)('div', {
                className: l()(es.wrapper, { [es.ringing]: eQ }, ep),
                style: eg,
                onMouseEnter: () => {
                    eV(!0);
                },
                onMouseLeave: () => {
                    eV(!1);
                },
                children: [
                    tr &&
                        H.type === en.fO.STREAM &&
                        (0, r.jsx)(S.Z, {
                            baseTileRef: tp.current,
                            cleanup: () => ti(!1)
                        }),
                    (0, r.jsxs)(N.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eX,
                        className: es.tile,
                        children: [
                            (0, r.jsx)(X.Z, {
                                ref: tp,
                                className: l()(es.tile, {
                                    [es.noBorder]: eN,
                                    [es.noInteraction]: null == $,
                                    [es.idle]: ew
                                }),
                                noBorder: eN,
                                style: eh,
                                participantUserId: eW,
                                children: (0, r.jsxs)(c.kL8, {
                                    'aria-label': t_,
                                    className: es.tileChild,
                                    onDoubleClick: ta,
                                    onContextMenu: (e) => tc(e, e8 && H.type === en.fO.STREAM),
                                    onClick: ts,
                                    onMouseDown: eu,
                                    onKeyDown: e_,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e6 && null != eW
                                            ? (0, r.jsx)(R.Z, {
                                                  voiceChannelEffect: e6,
                                                  onComplete: () => (0, j.H)(eW),
                                                  userId: eW
                                              })
                                            : null,
                                        H.type === en.fO.USER
                                            ? (0, r.jsx)('div', {
                                                  className: es.voiceChannelEffectsContainer,
                                                  children: (0, r.jsx)(m.Z, {
                                                      userId: eW,
                                                      channelId: eb.id,
                                                      guildId: eb.getGuildId(),
                                                      containerDimensions: {
                                                          width: null != (a = null == tp || null == (n = tp.current) ? void 0 : n.clientWidth) ? a : 0,
                                                          height: null != (b = null == tp || null == (o = tp.current) ? void 0 : o.clientHeight) ? b : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tu,
                                        eN
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: es.indicators,
                                                  children: td
                                              }),
                                        ev
                                            ? (0, r.jsx)('div', {
                                                  className: es.selectedScreen,
                                                  children: (0, r.jsx)(th, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: es.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ed.includes(H.type)
                                            ? null
                                            : (0, r.jsx)(
                                                  tf,
                                                  ec(
                                                      ea(
                                                          {
                                                              focused: ex,
                                                              width: eE,
                                                              inCall: ey,
                                                              participantType: H.type,
                                                              hasVideo: null != eq && eq
                                                          },
                                                          eJ
                                                      ),
                                                      {
                                                          idle: ew,
                                                          platform: e3,
                                                          title: (0, z.Z)(eb, H),
                                                          blocked: eI,
                                                          ignored: eT,
                                                          localVideoDisabled: ez,
                                                          videoToggleState: eY,
                                                          hideAudioIcon: e$,
                                                          onContextMenu: tc,
                                                          onToggleMute: tl,
                                                          participantUserId: eW,
                                                          application: e5,
                                                          secureFramesVerified: tn,
                                                          isHovered: eU
                                                      }
                                                  )
                                              ),
                                        H.type === en.fO.USER && eF
                                            ? (0, r.jsx)(O.Z, {
                                                  userId: H.id,
                                                  channelId: eb.id
                                              })
                                            : null,
                                        ey && !eN
                                            ? (0, r.jsx)('div', {
                                                  className: l()(es.border, {
                                                      [es.voiceChannelEffect]: !ex && null != e6,
                                                      [es.speaking]: eX && !ex
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eZ &&
                                eD &&
                                eU &&
                                (0, r.jsx)(Y.Z, {
                                    currentUserId: eH,
                                    participant: H
                                }),
                            (0, r.jsx)(v.Z, {
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
function eh(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: i, onClick: o, compact: s } = e;
    return (0, r.jsx)(c.ua7, {
        text: n,
        children: (e) => {
            var { onClick: n } = e,
                a = eu(e, ['onClick']);
            return (0, r.jsx)(
                c.zxk,
                ec(ea({}, a), {
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n(), o(e);
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    color: c.Ttl.CUSTOM,
                    size: c.PhG.ICON,
                    className: l()(es.overlayButton, {
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
e_.displayName = 'CallTile';
let ef = i.memo((e) => {
    let { idle: t, title: n, width: o, videoToggleState: u, blocked: d, ignored: _, participantType: p, participantUserId: h, platform: m, secureFramesVerified: g, onContextMenu: b, muted: E, deafened: C, localMuted: O, serverMuted: y, serverDeafened: v, hasVideo: N, hideAudioIcon: S, onToggleMute: x } = e,
        I = (0, s.e7)([Z.Z], () => null != h && Z.Z.isLocalVideoAutoDisabled(h, (0, f.Z)(p)), [h, p]),
        T = (0, $.N)(o),
        L = (0, $.K)(o),
        [P, A] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== H.Z.isOpen() && ((e = H.Z.isOpen()) || A(!1));
            };
        return H.Z.addChangeListener(t), () => H.Z.removeChangeListener(t);
    }, []);
    let j = !S && p === en.fO.STREAM && N && (!L || O),
        R = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: r, deafened: i, muted: o } = e;
            return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : o ? c.nRN : null;
        })({
            localMuted: O,
            serverMuted: y,
            serverDeafened: v,
            deafened: C,
            muted: E
        });
    return (0, r.jsxs)('div', {
        className: l()(es.overlayContainer, { [es.compact]: L }),
        children: [
            (0, r.jsx)('div', {
                className: l()(es.overlayTop, { [es.small]: o < 195 }),
                children:
                    I || u === et.ZUi.AUTO_PROBING
                        ? t
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(es.overlayTitle, es.videoDisabledTitle),
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
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            !T &&
                (0, r.jsxs)('div', {
                    className: l()(es.overlayBottom, { [es.small]: o < 195 }),
                    children: [
                        (0, r.jsxs)(c.Text, {
                            className: l()(es.experimentOverlayTitle, { [es.compact]: L }),
                            color: 'none',
                            variant: L ? 'text-sm/normal' : 'text-md/normal',
                            children: [
                                null != R &&
                                    p === en.fO.USER &&
                                    (0, r.jsx)(R, {
                                        className: l()(es.experimentTitleIcon, { [es.compact]: L }),
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
                                _
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
                                          className: l()(es.experimentTitleIcon, { [es.compact]: L })
                                      }),
                                null == n || '' === n || t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: es.overlayTitleText,
                                          children: n
                                      }),
                                g &&
                                    (0, r.jsx)(c.ua7, {
                                        text: el.NW.string(el.t.ZEem6O),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.tQf,
                                                ec(ea({}, e), {
                                                    className: es.secureFramesIcon,
                                                    size: 'xs',
                                                    color: a.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': el.NW.string(el.t.mR9cf3)
                                                })
                                            )
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: es.overlayButtonContainer,
                            children: [
                                (0, r.jsx)(eh, {
                                    onClick: (e) => {
                                        e.stopPropagation(), A(!0), b(e, !0, en.A5.THREE_DOT);
                                    },
                                    tooltipText: el.NW.string(el.t['+1H47u']),
                                    icon: c.xhG,
                                    hideWhenInactive: !P,
                                    compact: L
                                }),
                                j &&
                                    (0, r.jsx)(eh, {
                                        onClick: x,
                                        tooltipText: O ? el.NW.string(el.t.YqAjX1) : el.NW.string(el.t['w4m94+']),
                                        icon: O ? c.OyP : c.gj8,
                                        hideWhenInactive: !O && !P,
                                        compact: L
                                    })
                            ]
                        })
                    ]
                })
        ]
    });
});
ef.displayName = 'CallTileOverlayV2';
let em = i.memo((e) => {
    let { muted: t, deafened: n, localMuted: i, serverMuted: o, serverDeafened: u, idle: d, title: _, width: p, hasVideo: h, inCall: m, localVideoDisabled: g, videoToggleState: E, focused: C, blocked: O, ignored: y, hideAudioIcon: v, participantType: N, participantUserId: S, onContextMenu: x, onToggleMute: I, platform: T, application: L, secureFramesVerified: P } = e,
        A = null,
        j = null,
        R = null,
        w = (0, $.K)(p),
        k = (0, $.N)(p),
        M = (0, s.e7)([Z.Z], () => null != S && Z.Z.isLocalVideoAutoDisabled(S, (0, f.Z)(N)), [S, N]);
    if (!v)
        if (i && N === en.fO.STREAM && h && !C)
            A = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t.YqAjX1),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: l()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.OyP, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
        else if (i || N !== en.fO.STREAM || !h || w || C) {
            let e;
            u ? (e = c.Vm4) : o ? (e = c.v0G) : n ? (e = c.wE8) : i ? (e = c.v0G) : t && (e = c.nRN),
                (A =
                    null != (A = null != e ? (0, r.jsx)(e, { color: a.Z.colors.WHITE }) : null)
                        ? (0, r.jsx)('div', {
                              className: es.status,
                              children: A
                          })
                        : null);
        } else
            A = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['w4m94+']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), I();
                            },
                            className: l()(es.interactive, es.toggleMute, es.status),
                            children: (0, r.jsx)(c.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            });
    (m && Z.Z.supports(eo.AN.VIDEO)) || !h
        ? m &&
          h &&
          g &&
          !M &&
          (j = (0, r.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor'
          }))
        : (j = (0, r.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        N === en.fO.STREAM &&
            !C &&
            h &&
            (R = (0, r.jsx)(c.ua7, {
                text: el.NW.string(el.t['+1H47u']),
                children: (e) => {
                    var { onClick: t } = e,
                        n = eu(e, ['onClick']);
                    return (0, r.jsx)(
                        c.P3F,
                        ec(ea({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), null == t || t(), x(e);
                            },
                            className: l()(es.status, es.interactive),
                            children: (0, r.jsx)(c.xhG, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }));
    let D =
        N === en.fO.USER && null != L
            ? (0, r.jsx)(c.ua7, {
                  text: el.NW.formatToPlainString(el.t.Sq9xJy, { game: L.name }),
                  children: (e) =>
                      (0, r.jsx)(
                          'div',
                          ec(ea({}, e), {
                              className: l()(es.gameIconContainer, { [es.gameIconSmall]: p < 500 }),
                              children: (0, r.jsx)(b.Z, {
                                  className: es.gameIcon,
                                  game: L,
                                  size: b.Z.Sizes.SMALL
                              })
                          })
                      )
              })
            : null;
    return (0, r.jsxs)('div', {
        className: es.overlayContainer,
        children: [
            (0, r.jsx)('div', {
                className: l()(es.overlayTop, { [es.small]: p < 195 }),
                children:
                    M || E === et.ZUi.AUTO_PROBING
                        ? d
                            ? (0, r.jsx)('div', {
                                  className: es.status,
                                  children: (0, r.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, r.jsxs)('div', {
                                  className: l()(es.overlayTitle, es.videoDisabledTitle),
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
                                          children: el.NW.string(el.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: l()(es.overlayBottom, { [es.small]: p < 195 }),
                children: [
                    k
                        ? (0, r.jsx)('div', {})
                        : (0, r.jsxs)(c.Text, {
                              className: l()(es.overlayTitle, { [es.idle]: d }),
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
                                  y
                                      ? (0, r.jsx)('div', {
                                            className: es.ignored,
                                            children: (0, r.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: es.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, r.jsx)(ep, {
                                      participantType: N,
                                      platform: T,
                                      className: es.titleIcon
                                  }),
                                  null != _ && '' !== _
                                      ? (0, r.jsx)('span', {
                                            className: es.overlayTitleText,
                                            children: _
                                        })
                                      : null,
                                  P &&
                                      (0, r.jsx)(c.ua7, {
                                          text: el.NW.string(el.t.ZEem6O),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.tQf,
                                                  ec(ea({}, e), {
                                                      className: es.secureFramesIcon,
                                                      size: 'xs',
                                                      color: a.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': el.NW.string(el.t.mR9cf3)
                                                  })
                                              )
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: es.statusContainer,
                        children: [
                            null != j &&
                                (0, r.jsx)('div', {
                                    className: es.status,
                                    children: j
                                }),
                            A,
                            R,
                            D
                        ]
                    })
                ]
            })
        ]
    });
});
em.displayName = 'CallTileOverlay';
let eg = y.L,
    eb = e_;
