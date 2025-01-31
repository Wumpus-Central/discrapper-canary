t.d(l, {
    BP: () => eg,
    ZP: () => ej
}),
    t(47120);
var n = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(848246),
    o = t(442837),
    c = t(692547),
    d = t(481060),
    u = t(846027),
    m = t(410575),
    p = t(607070),
    f = t(812206),
    v = t(835473),
    x = t(682901),
    h = t(414910),
    g = t(415635),
    j = t(578976),
    I = t(925329),
    T = t(649739),
    E = t(37091),
    Z = t(6572),
    C = t(352978),
    N = t(936847),
    _ = t(512384),
    S = t(33316),
    y = t(576645),
    O = t(6242),
    R = t(757692),
    b = t(386542),
    A = t(933843),
    V = t(746599),
    k = t(231664),
    M = t(614011),
    D = t(210975),
    P = t(695346),
    w = t(937995),
    U = t(456631),
    z = t(274459),
    L = t(314897),
    G = t(857192),
    Y = t(77498),
    H = t(131951),
    F = t(158776),
    B = t(594174),
    X = t(979651),
    q = t(374129),
    W = t(639351),
    K = t(74538),
    Q = t(584729),
    J = t(334374),
    $ = t(849171),
    ee = t(607187),
    el = t(624834),
    et = t(833519),
    en = t(462061),
    ei = t(623825),
    es = t(839662),
    ea = t(981631),
    er = t(354459),
    eo = t(37113),
    ec = t(524484),
    ed = t(65154),
    eu = t(388032),
    em = t(995544);
let ep = [er.fO.ACTIVITY, er.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ef = i.memo((e) => {
        var l, t, s, c, I;
        let { participant: q, onDoubleClick: W, onContextMenu: ei, onClick: ef, onMouseDown: ev, onKeyDown: eg, className: ej, style: eI, containerStyle: eT, channel: eE, width: eZ, inPopout: eC, onVideoResize: eN, inCall: e_ = !1, selected: eS = !1, noBorder: ey = !1, noVideoRender: eO = !1, focused: eR = !1, blocked: eb = !1, ignored: eA = !1, fit: eV = C.L.CONTAIN, paused: ek = !1, pulseSpeakingIndicator: eM = !1, forceIdle: eD = !1, inOverlayPopout: eP = !1 } = e,
            ew = i.useContext(w.h9) || eD,
            [eU, ez] = i.useState(!1),
            eL = P.Sb.useSetting(),
            eG = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
            [eY, eH] = i.useState(!1),
            eF = (0, o.e7)([L.default], () => L.default.getId()),
            eB = (0, o.e7)([B.default], () => B.default.getCurrentUser()),
            eX = q.type === er.fO.ACTIVITY ? null : null === (l = q.user) || void 0 === l ? void 0 : l.id,
            [eq] = (0, v.Z)(q.type === er.fO.ACTIVITY ? [q.applicationId] : []),
            eW = (0, o.e7)([E.Z], () => E.Z.getEnabled()),
            eK = (0, o.e7)([H.Z], () => null != eX && H.Z.isLocalVideoDisabled(eX, (0, h.Z)(q.type)), [eX, q.type]),
            eQ = (0, o.e7)([H.Z], () => (null != eX ? H.Z.getVideoToggleState(eX, (0, h.Z)(q.type)) : ea.ZUi.NONE), [eX, q.type]),
            eJ = eQ === ea.ZUi.AUTO_PROBING,
            { speaking: e$, ringing: e0, hasVideo: e1 } = (0, es.Z)(q, eF),
            e7 = (function (e, l, t) {
                var n, i, s, a;
                let r = l.type !== er.fO.ACTIVITY ? l.user.id : l.applicationId,
                    c = (0, o.cj)([X.Z], () => {
                        var e, l, n;
                        let i = X.Z.getVoiceState(t, r);
                        return {
                            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
                            deafened: null !== (l = null == i ? void 0 : i.deaf) && void 0 !== l && l,
                            suppressed: null !== (n = null == i ? void 0 : i.suppress) && void 0 !== n && n,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    d = (0, o.cj)(
                        [H.Z],
                        () => {
                            let t = (0, h.Z)(l.type);
                            return e === r
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: H.Z.isLocalMute(r, t),
                                      localVideoDisabled: H.Z.isLocalVideoDisabled(r, t),
                                      localVideoAutoDisabled: H.Z.isLocalVideoAutoDisabled(r, t)
                                  };
                        },
                        [e, l.type, r]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: null !== (s = l.type === er.fO.USER && (null === (n = l.voiceState) || void 0 === n ? void 0 : n.isVoiceMuted())) && void 0 !== s && s,
                    deafened: null !== (a = l.type === er.fO.USER && (null === (i = l.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== a && a
                };
            })(eF, q, eE.getGuildId()),
            e4 = q.type === er.fO.STREAM && eX === eF;
        i.useEffect(() => {
            if (e4 && !K.ZP.isPremium(eB) && null != eE.hdStreamingUntil && new Date(eE.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = H.Z.getGoLiveSource(),
                            l = (0, j.s)(eo.LY.RESOLUTION_720, eo.ws.FPS_30, e);
                        u.Z.setGoLiveSource(l);
                    },
                    new Date(eE.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        });
        let e9 = (0, A.So)(r.q.STREAM_HIGH_QUALITY),
            { hqStreamingState: e3 } = (0, b.k)(r.q.STREAM_HIGH_QUALITY),
            e5 = (0, k.Z)(),
            e6 = e9 && e4 && null != e5,
            e2 = (0, R.o)(q, eB),
            e8 = (0, O.lL)('CallTile', !0, eB, e2),
            le = (0, o.e7)([U.Z], () => (q.type === er.fO.USER && null != eX ? U.Z.getEffectForUserId(eX) : null)),
            ll = (0, o.e7)([X.Z], () => X.Z.getVoicePlatformForChannel(eE.id, null != eX ? eX : ea.lds)),
            { enabled: lt } = (0, x.Z)({ location: 'CallTile' }),
            { showGameIcon: ln } = T.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            li = (0, o.e7)([F.Z], () => (ln && null != eX ? F.Z.findActivity(eX, (e) => null != e.application_id && e.type === ea.IIU.PLAYING) : null), [ln, eX]),
            ls = (0, o.e7)([Y.Z], () => ((null == li ? void 0 : li.application_id) != null ? Y.Z.getDetectableGame(li.application_id) : null)),
            la = (0, o.e7)([f.Z], () => (null != ls && (null == li ? void 0 : li.application_id) != null ? f.Z.getApplication(null == li ? void 0 : li.application_id) : void 0)),
            lr = (0, D.wV)({
                userId: eX,
                channelId: eE.id,
                location: 'CallTile'
            }),
            lo = (0, D.zU)({
                streamKey: q.type === er.fO.STREAM ? q.id : null,
                channelId: eE.id,
                location: 'CallTile'
            }),
            lc = i.useMemo(() => (q.type === er.fO.STREAM ? null != lo && lo : q.type === er.fO.USER && null != lr && lr), [lo, lr, q.type]);
        i.useEffect(() => {
            ez(eR);
        }, [eR]);
        let [ld, lu] = i.useState(!1),
            lm = i.useCallback(() => {
                p.Z.useReducedMotion || lu(!0);
            }, []);
        (0, y.J)(eE, lm);
        let lp = i.useCallback(() => {
                null != eX && u.Z.toggleLocalMute(eX, ed.Yn.STREAM);
            }, [eX]),
            lf = i.useCallback(() => {
                (0, V.hP)();
            }, []),
            lv = i.useCallback(
                (e) => {
                    null == ef || ef(q, e);
                },
                [ef, q]
            ),
            lx = i.useCallback(
                (e) => {
                    null == W || W(q, e);
                },
                [W, q]
            ),
            lh = i.useCallback(
                (e) => {
                    null == ei || ei(q, e);
                },
                [ei, q]
            ),
            lg = ew;
        e6 && (lg = !1);
        let lj = null,
            lI = null,
            lT = '';
        switch (q.type) {
            case er.fO.STREAM:
                (lj = (0, n.jsx)(et.Z, {
                    participant: q,
                    selected: eS,
                    width: eZ,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    inPopout: eC,
                    focused: eR,
                    inOverlayPopout: eP
                })),
                    (lI = (0, n.jsx)(et._, {
                        participant: q,
                        selected: eS,
                        width: eZ,
                        focused: eR,
                        idle: lg,
                        premiumIndicator: e6 || e8.enabled
                    })),
                    (lT = eu.intl.formatToPlainString(eu.t.gHPz3d, { streamerName: q.user.username }));
                break;
            case er.fO.USER:
                (lj = (0, n.jsx)(en.Z, {
                    channel: eE,
                    inCall: e_,
                    participant: q,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    selected: eS,
                    width: eZ,
                    blocked: eb,
                    ignored: eA,
                    noVideoRender: eO || eJ,
                    pulseSpeakingIndicator: eM,
                    inOverlayPopout: eP
                })),
                    (lI = (0, n.jsx)(en.T, {
                        userId: q.user.id,
                        channelId: eE.id
                    })),
                    (lT = eu.intl.formatToPlainString(eu.t['iC/x/f'], { username: q.user.username }));
                break;
            case er.fO.ACTIVITY:
                (lj = (0, n.jsx)($.ZP, {
                    interactible: eR,
                    participant: q,
                    selected: eS,
                    channel: eE,
                    width: eZ
                })),
                    (lT = eu.intl.formatToPlainString(eu.t.YCvOsL, { activityName: null == eq ? void 0 : eq.name }));
                break;
            case er.fO.PRESENCE_EMBEDDED_ACTIVITY:
                lj = (0, n.jsx)(el.Z, {
                    participant: q,
                    width: eZ,
                    channelId: eE.id
                });
                break;
            case er.fO.HIDDEN_STREAM:
                lj = (0, n.jsx)(et.Z, {
                    participant: q,
                    selected: eS,
                    width: eZ,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    inPopout: eC,
                    focused: eR,
                    inOverlayPopout: eP
                });
        }
        let lE = i.useRef(null),
            lZ = q.type === er.fO.STREAM ? d.pzj : d.Odl,
            lC = lt ? ex : eh;
        return (0, n.jsx)(m.Z, {
            section: ea.jXE.VOICE_CHANNEL_TILE,
            children: (0, n.jsxs)('div', {
                className: a()(em.wrapper, { [em.ringing]: e0 }, ej),
                style: eT,
                onMouseEnter: () => {
                    eH(!0);
                },
                onMouseLeave: () => {
                    eH(!1);
                },
                children: [
                    ld &&
                        q.type === er.fO.STREAM &&
                        (0, n.jsx)(S.Z, {
                            baseTileRef: lE.current,
                            cleanup: () => lu(!1)
                        }),
                    (0, n.jsxs)(_.Z, {
                        shakeLocation: ec.oZ.VOICE_USER,
                        isShaking: e$,
                        className: em.tile,
                        children: [
                            (0, n.jsx)(ee.Z, {
                                ref: lE,
                                className: a()(em.tile, {
                                    [em.noBorder]: ey,
                                    [em.noInteraction]: null == ef,
                                    [em.idle]: ew
                                }),
                                noBorder: ey,
                                style: eI,
                                participantUserId: eX,
                                children: (0, n.jsxs)(d.kL8, {
                                    'aria-label': lT,
                                    className: em.tileChild,
                                    onDoubleClick: lx,
                                    onContextMenu: lh,
                                    onClick: lv,
                                    onMouseDown: ev,
                                    onKeyDown: eg,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != le && null != eX
                                            ? (0, n.jsx)(z.Z, {
                                                  voiceChannelEffect: le,
                                                  onComplete: () => (0, U.H)(eX),
                                                  userId: eX
                                              })
                                            : null,
                                        q.type === er.fO.USER
                                            ? (0, n.jsx)('div', {
                                                  className: em.voiceChannelEffectsContainer,
                                                  children: (0, n.jsx)(g.Z, {
                                                      userId: eX,
                                                      channelId: eE.id,
                                                      guildId: eE.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (c = null == lE ? void 0 : null === (t = lE.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== c ? c : 0,
                                                          height: null !== (I = null == lE ? void 0 : null === (s = lE.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== I ? I : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        lj,
                                        e6
                                            ? (0, n.jsx)(M.W, {
                                                  onPlayed: lf,
                                                  played: e3.hqStreamingFrameAnimationPlayed
                                              })
                                            : null,
                                        ey
                                            ? null
                                            : (0, n.jsx)('div', {
                                                  className: em.indicators,
                                                  children: lI
                                              }),
                                        eS
                                            ? (0, n.jsx)('div', {
                                                  className: em.selectedScreen,
                                                  children: (0, n.jsx)(lZ, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: em.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ep.includes(q.type)
                                            ? null
                                            : (0, n.jsx)(lC, {
                                                  focused: eR,
                                                  width: eZ,
                                                  inCall: e_,
                                                  participantType: q.type,
                                                  hasVideo: null != e1 && e1,
                                                  ...e7,
                                                  idle: ew,
                                                  platform: ll,
                                                  title: (0, Q.Z)(eE, q),
                                                  blocked: eb,
                                                  ignored: eA,
                                                  localVideoDisabled: eK,
                                                  videoToggleState: eQ,
                                                  hideAudioIcon: e4,
                                                  onContextMenu: lh,
                                                  onToggleMute: lp,
                                                  participantUserId: eX,
                                                  application: la,
                                                  secureFramesVerified: lc
                                              }),
                                        q.type === er.fO.USER && eW
                                            ? (0, n.jsx)(Z.Z, {
                                                  userId: q.id,
                                                  channelId: eE.id
                                              })
                                            : null,
                                        e_ && !ey
                                            ? (0, n.jsx)('div', {
                                                  className: a()(em.border, {
                                                      [em.voiceChannelEffect]: !eR && null != le,
                                                      [em.speaking]: e$ && !eR
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eL &&
                                eG &&
                                eY &&
                                (0, n.jsx)(J.Z, {
                                    currentUserId: eF,
                                    participant: q
                                }),
                            (0, n.jsx)(N.Z, {
                                isFiring: eU,
                                callTileRef: lE.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ev(e) {
    let { participantType: l, platform: t, className: i } = e;
    if (l === er.fO.STREAM)
        return t === er.wR.XBOX
            ? (0, n.jsx)(W.Z, { className: i })
            : (0, n.jsx)(d.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (t) {
        case er.wR.MOBILE:
            return (0, n.jsx)(d.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case er.wR.XBOX:
            return (0, n.jsx)(W.Z, { className: i });
        case er.wR.PLAYSTATION:
            return (0, n.jsx)(q.Z, { className: i });
        default:
            return null;
    }
}
ef.displayName = 'CallTile';
let ex = i.memo((e) => {
    let { idle: l, title: t, width: i, videoToggleState: s, blocked: r, ignored: u, participantType: m, participantUserId: p, platform: f, secureFramesVerified: v } = e,
        x = (0, o.e7)([H.Z], () => null != p && H.Z.isLocalVideoAutoDisabled(p, (0, h.Z)(m)), [p, m]);
    return (0, n.jsxs)('div', {
        className: em.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: a()(em.overlayTop, { [em.small]: i < 195 }),
                children:
                    x || s === ea.ZUi.AUTO_PROBING
                        ? l
                            ? (0, n.jsx)('div', {
                                  className: em.status,
                                  children: (0, n.jsx)(d.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: a()(em.overlayTitle, em.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: em.status,
                                          children: (0, n.jsx)(d.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          className: em.overlayTitleText,
                                          children: eu.intl.string(eu.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, n.jsxs)('div', {
                className: a()(em.overlayBottom, { [em.small]: i < 195 }),
                children: [
                    (0, n.jsxs)(d.Text, {
                        className: a()(em.overlayTitle, { [em.idle]: l && !1 }),
                        color: 'none',
                        variant: 'text-md/normal',
                        children: [
                            r
                                ? (0, n.jsx)('div', {
                                      className: em.blocked,
                                      children: (0, n.jsx)(d.t6m, {
                                          size: 'lg',
                                          className: em.blockedIcon,
                                          color: c.Z.unsafe_rawColors.RED_400.css
                                      })
                                  })
                                : null,
                            u
                                ? (0, n.jsx)('div', {
                                      className: em.ignored,
                                      children: (0, n.jsx)(d.kZF, {
                                          size: 'lg',
                                          className: em.blockedIcon
                                      })
                                  })
                                : null,
                            (0, n.jsx)(ev, {
                                participantType: m,
                                platform: f,
                                className: em.titleIcon
                            }),
                            null != t && '' !== t
                                ? (0, n.jsx)('span', {
                                      className: em.overlayTitleText,
                                      children: t
                                  })
                                : null,
                            v &&
                                (0, n.jsx)(d.ua7, {
                                    text: eu.intl.string(eu.t.ZEem6O),
                                    children: (e) =>
                                        (0, n.jsx)(d.tQf, {
                                            ...e,
                                            className: em.secureFramesIcon,
                                            size: 'xs',
                                            color: c.Z.colors.HEADER_PRIMARY,
                                            'aria-label': eu.intl.string(eu.t.mR9cf3)
                                        })
                                })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: a()(em.overlayButtonContainer, { [em.idle]: l && !1 }),
                        children: (0, n.jsx)(d.P3F, {
                            className: em.overlayButton,
                            children: (0, n.jsx)(d.xhG, {})
                        })
                    })
                ]
            })
        ]
    });
});
ex.displayName = 'CallTileOverlayV2';
let eh = i.memo((e) => {
    let { muted: l, deafened: t, localMuted: i, serverMuted: s, serverDeafened: r, idle: u, title: m, width: p, hasVideo: f, inCall: v, localVideoDisabled: x, videoToggleState: g, focused: j, blocked: T, ignored: E, hideAudioIcon: Z, participantType: C, participantUserId: N, onContextMenu: _, onToggleMute: S, platform: y, application: O, secureFramesVerified: R } = e,
        b = null,
        A = null,
        V = null,
        k = (0, ei.K)(p),
        M = (0, ei.N)(p),
        D = (0, o.e7)([H.Z], () => null != N && H.Z.isLocalVideoAutoDisabled(N, (0, h.Z)(C)), [N, C]),
        P = (0, d.bWb)().enabled;
    if (!Z) {
        if (i && C === er.fO.STREAM && f && !j)
            b = (0, n.jsx)(d.ua7, {
                text: eu.intl.string(eu.t.YqAjX1),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(em.interactive, em.toggleMute, em.status),
                        children: (0, n.jsx)(d.OyP, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (i || C !== er.fO.STREAM || !f || k || j) {
            if (P) {
                let e;
                r ? (e = d.Vm4) : s ? (e = d.v0G) : t ? (e = d.wE8) : i ? (e = d.v0G) : l && (e = d.nRN), (b = null != e ? (0, n.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (t || l || i) {
                let e = t ? d.wE8 : d.nRN;
                b = (0, n.jsx)(e, { color: 'currentColor' });
            }
            b =
                null != b
                    ? (0, n.jsx)('div', {
                          className: em.status,
                          children: b
                      })
                    : null;
        } else
            b = (0, n.jsx)(d.ua7, {
                text: eu.intl.string(eu.t['w4m94+']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(em.interactive, em.toggleMute, em.status),
                        children: (0, n.jsx)(d.gj8, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    (v && H.Z.supports(ed.AN.VIDEO)) || !f
        ? v &&
          f &&
          x &&
          !D &&
          (A = (0, n.jsx)(d.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: em.localMuteStrikethrough
          }))
        : (A = (0, n.jsx)(d.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        C === er.fO.STREAM &&
            !j &&
            f &&
            (V = (0, n.jsx)(d.ua7, {
                text: eu.intl.string(eu.t['+1H47u']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), _(e);
                        },
                        className: a()(em.status, em.interactive),
                        children: (0, n.jsx)(d.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            }));
    let w =
        C === er.fO.USER && null != O
            ? (0, n.jsx)(d.ua7, {
                  text: eu.intl.formatToPlainString(eu.t.Sq9xJy, { game: O.name }),
                  children: (e) =>
                      (0, n.jsx)('div', {
                          ...e,
                          className: a()(em.gameIconContainer, { [em.gameIconSmall]: p < 500 }),
                          children: (0, n.jsx)(I.Z, {
                              className: em.gameIcon,
                              game: O,
                              size: I.Z.Sizes.SMALL
                          })
                      })
              })
            : null;
    return (0, n.jsxs)('div', {
        className: em.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: a()(em.overlayTop, { [em.small]: p < 195 }),
                children:
                    D || g === ea.ZUi.AUTO_PROBING
                        ? u
                            ? (0, n.jsx)('div', {
                                  className: em.status,
                                  children: (0, n.jsx)(d.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: a()(em.overlayTitle, em.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: em.status,
                                          children: (0, n.jsx)(d.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          className: em.overlayTitleText,
                                          children: eu.intl.string(eu.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, n.jsxs)('div', {
                className: a()(em.overlayBottom, { [em.small]: p < 195 }),
                children: [
                    M
                        ? (0, n.jsx)('div', {})
                        : (0, n.jsxs)(d.Text, {
                              className: a()(em.overlayTitle, { [em.idle]: u }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  T
                                      ? (0, n.jsx)('div', {
                                            className: em.blocked,
                                            children: (0, n.jsx)(d.t6m, {
                                                size: 'lg',
                                                className: em.blockedIcon,
                                                color: c.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  E
                                      ? (0, n.jsx)('div', {
                                            className: em.ignored,
                                            children: (0, n.jsx)(d.kZF, {
                                                size: 'lg',
                                                className: em.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, n.jsx)(ev, {
                                      participantType: C,
                                      platform: y,
                                      className: em.titleIcon
                                  }),
                                  null != m && '' !== m
                                      ? (0, n.jsx)('span', {
                                            className: em.overlayTitleText,
                                            children: m
                                        })
                                      : null,
                                  R &&
                                      (0, n.jsx)(d.ua7, {
                                          text: eu.intl.string(eu.t.ZEem6O),
                                          children: (e) =>
                                              (0, n.jsx)(d.tQf, {
                                                  ...e,
                                                  className: em.secureFramesIcon,
                                                  size: 'xs',
                                                  color: c.Z.colors.HEADER_PRIMARY,
                                                  'aria-label': eu.intl.string(eu.t.mR9cf3)
                                              })
                                      })
                              ]
                          }),
                    (0, n.jsxs)('div', {
                        className: em.statusContainer,
                        children: [
                            null != A &&
                                (0, n.jsx)('div', {
                                    className: em.status,
                                    children: A
                                }),
                            b,
                            V,
                            w
                        ]
                    })
                ]
            })
        ]
    });
});
eh.displayName = 'CallTileOverlay';
let eg = C.L,
    ej = ef;
