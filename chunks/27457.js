t.d(l, {
    BP: () => ej,
    ZP: () => eZ
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
    Z = t(925329),
    I = t(649739),
    E = t(37091),
    T = t(6572),
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
    P = t(210975),
    D = t(695346),
    w = t(937995),
    L = t(456631),
    U = t(274459),
    z = t(314897),
    G = t(857192),
    Y = t(77498),
    H = t(131951),
    F = t(158776),
    B = t(594174),
    X = t(979651),
    q = t(574254),
    W = t(374129),
    K = t(639351),
    Q = t(74538),
    J = t(584729),
    $ = t(334374),
    ee = t(849171),
    el = t(607187),
    et = t(624834),
    en = t(833519),
    ei = t(462061),
    es = t(623825),
    ea = t(839662),
    er = t(981631),
    eo = t(354459),
    ec = t(37113),
    ed = t(524484),
    eu = t(65154),
    em = t(388032),
    ep = t(995544);
let ef = [eo.fO.ACTIVITY, eo.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ev = i.memo((e) => {
        var l, t, s, c, Z;
        let { participant: q, onDoubleClick: W, onContextMenu: K, onClick: es, onMouseDown: ev, onKeyDown: ex, className: ej, style: eZ, containerStyle: eI, channel: eE, width: eT, inPopout: eC, onVideoResize: eN, inCall: e_ = !1, selected: eS = !1, noBorder: ey = !1, noVideoRender: eO = !1, focused: eR = !1, blocked: eb = !1, ignored: eA = !1, fit: eV = C.L.CONTAIN, paused: ek = !1, pulseSpeakingIndicator: eM = !1, forceIdle: eP = !1, inOverlayPopout: eD = !1 } = e,
            ew = i.useContext(w.h9) || eP,
            [eL, eU] = i.useState(!1),
            ez = D.Sb.useSetting(),
            eG = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
            [eY, eH] = i.useState(!1),
            eF = (0, o.e7)([z.default], () => z.default.getId()),
            eB = (0, o.e7)([B.default], () => B.default.getCurrentUser()),
            eX = q.type === eo.fO.ACTIVITY ? null : null === (l = q.user) || void 0 === l ? void 0 : l.id,
            [eq] = (0, v.Z)(q.type === eo.fO.ACTIVITY ? [q.applicationId] : []),
            eW = (0, o.e7)([E.Z], () => E.Z.getEnabled()),
            eK = (0, o.e7)([H.Z], () => null != eX && H.Z.isLocalVideoDisabled(eX, (0, h.Z)(q.type)), [eX, q.type]),
            eQ = (0, o.e7)([H.Z], () => (null != eX ? H.Z.getVideoToggleState(eX, (0, h.Z)(q.type)) : er.ZUi.NONE), [eX, q.type]),
            eJ = eQ === er.ZUi.AUTO_PROBING,
            { speaking: e$, ringing: e0, hasVideo: e1 } = (0, ea.Z)(q, eF),
            e7 = (function (e, l, t) {
                var n, i, s, a;
                let r = l.type !== eo.fO.ACTIVITY ? l.user.id : l.applicationId,
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
                    muted: null !== (s = l.type === eo.fO.USER && (null === (n = l.voiceState) || void 0 === n ? void 0 : n.isVoiceMuted())) && void 0 !== s && s,
                    deafened: null !== (a = l.type === eo.fO.USER && (null === (i = l.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== a && a
                };
            })(eF, q, eE.getGuildId()),
            e4 = q.type === eo.fO.STREAM && eX === eF;
        i.useEffect(() => {
            if (e4 && !Q.ZP.isPremium(eB) && null != eE.hdStreamingUntil && new Date(eE.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = H.Z.getGoLiveSource(),
                            l = (0, j.s)(ec.LY.RESOLUTION_720, ec.ws.FPS_30, e);
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
            le = (0, o.e7)([L.Z], () => (q.type === eo.fO.USER && null != eX ? L.Z.getEffectForUserId(eX) : null)),
            ll = (0, o.e7)([X.Z], () => X.Z.getVoicePlatformForChannel(eE.id, null != eX ? eX : er.lds)),
            { enabled: lt } = (0, x.Z)({ location: 'CallTile' }),
            { showGameIcon: ln } = I.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            li = (0, o.e7)([F.Z], () => (ln && null != eX ? F.Z.findActivity(eX, (e) => null != e.application_id && e.type === er.IIU.PLAYING) : null), [ln, eX]),
            ls = (0, o.e7)([Y.Z], () => ((null == li ? void 0 : li.application_id) != null ? Y.Z.getDetectableGame(li.application_id) : null)),
            la = (0, o.e7)([f.Z], () => (null != ls && (null == li ? void 0 : li.application_id) != null ? f.Z.getApplication(null == li ? void 0 : li.application_id) : void 0)),
            lr = (0, P.wV)({
                userId: eX,
                channelId: eE.id,
                location: 'CallTile'
            }),
            lo = (0, P.zU)({
                streamKey: q.type === eo.fO.STREAM ? q.id : null,
                channelId: eE.id,
                location: 'CallTile'
            }),
            lc = i.useMemo(() => (q.type === eo.fO.STREAM ? null != lo && lo : q.type === eo.fO.USER && null != lr && lr), [lo, lr, q.type]);
        i.useEffect(() => {
            eU(eR);
        }, [eR]);
        let [ld, lu] = i.useState(!1),
            lm = i.useCallback(() => {
                p.Z.useReducedMotion || lu(!0);
            }, []);
        (0, y.J)(eE, lm);
        let lp = i.useCallback(() => {
                null != eX && u.Z.toggleLocalMute(eX, eu.Yn.STREAM);
            }, [eX]),
            lf = i.useCallback(() => {
                (0, V.hP)();
            }, []),
            lv = i.useCallback(
                (e) => {
                    null == es || es(q, e);
                },
                [es, q]
            ),
            lx = i.useCallback(
                (e) => {
                    null == W || W(q, e);
                },
                [W, q]
            ),
            lh = i.useCallback(
                (e, l) => {
                    null == K || K(q, e, l);
                },
                [K, q]
            ),
            lg = ew;
        e6 && (lg = !1);
        let lj = null,
            lZ = null,
            lI = '';
        switch (q.type) {
            case eo.fO.STREAM:
                (lj = (0, n.jsx)(en.Z, {
                    participant: q,
                    selected: eS,
                    width: eT,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    inPopout: eC,
                    focused: eR,
                    inOverlayPopout: eD
                })),
                    (lZ = (0, n.jsx)(en._, {
                        participant: q,
                        selected: eS,
                        width: eT,
                        focused: eR,
                        idle: lg,
                        premiumIndicator: e6 || e8.enabled
                    })),
                    (lI = em.intl.formatToPlainString(em.t.gHPz3d, { streamerName: q.user.username }));
                break;
            case eo.fO.USER:
                (lj = (0, n.jsx)(ei.Z, {
                    channel: eE,
                    inCall: e_,
                    participant: q,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    selected: eS,
                    width: eT,
                    blocked: eb,
                    ignored: eA,
                    noVideoRender: eO || eJ,
                    pulseSpeakingIndicator: eM,
                    inOverlayPopout: eD
                })),
                    (lZ = (0, n.jsx)(ei.T, {
                        userId: q.user.id,
                        channelId: eE.id
                    })),
                    (lI = em.intl.formatToPlainString(em.t['iC/x/f'], { username: q.user.username }));
                break;
            case eo.fO.ACTIVITY:
                (lj = (0, n.jsx)(ee.ZP, {
                    interactible: eR,
                    participant: q,
                    selected: eS,
                    channel: eE,
                    width: eT
                })),
                    (lI = em.intl.formatToPlainString(em.t.YCvOsL, { activityName: null == eq ? void 0 : eq.name }));
                break;
            case eo.fO.PRESENCE_EMBEDDED_ACTIVITY:
                lj = (0, n.jsx)(et.Z, {
                    participant: q,
                    width: eT,
                    channelId: eE.id
                });
                break;
            case eo.fO.HIDDEN_STREAM:
                lj = (0, n.jsx)(en.Z, {
                    participant: q,
                    selected: eS,
                    width: eT,
                    fit: eV,
                    onVideoResize: eN,
                    paused: ek,
                    inPopout: eC,
                    focused: eR,
                    inOverlayPopout: eD
                });
        }
        let lE = i.useRef(null),
            lT = q.type === eo.fO.STREAM ? d.pzj : d.Odl,
            lC = lt ? eh : eg;
        return (0, n.jsx)(m.Z, {
            section: er.jXE.VOICE_CHANNEL_TILE,
            children: (0, n.jsxs)('div', {
                className: a()(ep.wrapper, { [ep.ringing]: e0 }, ej),
                style: eI,
                onMouseEnter: () => {
                    eH(!0);
                },
                onMouseLeave: () => {
                    eH(!1);
                },
                children: [
                    ld &&
                        q.type === eo.fO.STREAM &&
                        (0, n.jsx)(S.Z, {
                            baseTileRef: lE.current,
                            cleanup: () => lu(!1)
                        }),
                    (0, n.jsxs)(_.Z, {
                        shakeLocation: ed.oZ.VOICE_USER,
                        isShaking: e$,
                        className: ep.tile,
                        children: [
                            (0, n.jsx)(el.Z, {
                                ref: lE,
                                className: a()(ep.tile, {
                                    [ep.noBorder]: ey,
                                    [ep.noInteraction]: null == es,
                                    [ep.idle]: ew
                                }),
                                noBorder: ey,
                                style: eZ,
                                participantUserId: eX,
                                children: (0, n.jsxs)(d.kL8, {
                                    'aria-label': lI,
                                    className: ep.tileChild,
                                    onDoubleClick: lx,
                                    onContextMenu: lh,
                                    onClick: lv,
                                    onMouseDown: ev,
                                    onKeyDown: ex,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != le && null != eX
                                            ? (0, n.jsx)(U.Z, {
                                                  voiceChannelEffect: le,
                                                  onComplete: () => (0, L.H)(eX),
                                                  userId: eX
                                              })
                                            : null,
                                        q.type === eo.fO.USER
                                            ? (0, n.jsx)('div', {
                                                  className: ep.voiceChannelEffectsContainer,
                                                  children: (0, n.jsx)(g.Z, {
                                                      userId: eX,
                                                      channelId: eE.id,
                                                      guildId: eE.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (c = null == lE ? void 0 : null === (t = lE.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== c ? c : 0,
                                                          height: null !== (Z = null == lE ? void 0 : null === (s = lE.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== Z ? Z : 0
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
                                                  className: ep.indicators,
                                                  children: lZ
                                              }),
                                        eS
                                            ? (0, n.jsx)('div', {
                                                  className: ep.selectedScreen,
                                                  children: (0, n.jsx)(lT, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ep.selectedIcon
                                                  })
                                              })
                                            : null,
                                        ef.includes(q.type)
                                            ? null
                                            : (0, n.jsx)(lC, {
                                                  focused: eR,
                                                  width: eT,
                                                  inCall: e_,
                                                  participantType: q.type,
                                                  hasVideo: null != e1 && e1,
                                                  ...e7,
                                                  idle: ew,
                                                  platform: ll,
                                                  title: (0, J.Z)(eE, q),
                                                  blocked: eb,
                                                  ignored: eA,
                                                  localVideoDisabled: eK,
                                                  videoToggleState: eQ,
                                                  hideAudioIcon: e4,
                                                  onContextMenu: lh,
                                                  onToggleMute: lp,
                                                  participantUserId: eX,
                                                  application: la,
                                                  secureFramesVerified: lc,
                                                  isHovered: eY
                                              }),
                                        q.type === eo.fO.USER && eW
                                            ? (0, n.jsx)(T.Z, {
                                                  userId: q.id,
                                                  channelId: eE.id
                                              })
                                            : null,
                                        e_ && !ey
                                            ? (0, n.jsx)('div', {
                                                  className: a()(ep.border, {
                                                      [ep.voiceChannelEffect]: !eR && null != le,
                                                      [ep.speaking]: e$ && !eR
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            ez &&
                                eG &&
                                eY &&
                                (0, n.jsx)($.Z, {
                                    currentUserId: eF,
                                    participant: q
                                }),
                            (0, n.jsx)(N.Z, {
                                isFiring: eL,
                                callTileRef: lE.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ex(e) {
    let { participantType: l, platform: t, className: i } = e;
    if (l === eo.fO.STREAM)
        return t === eo.wR.XBOX
            ? (0, n.jsx)(K.Z, { className: i })
            : (0, n.jsx)(d.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (t) {
        case eo.wR.MOBILE:
            return (0, n.jsx)(d.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case eo.wR.XBOX:
            return (0, n.jsx)(K.Z, { className: i });
        case eo.wR.PLAYSTATION:
            return (0, n.jsx)(W.Z, { className: i });
        default:
            return null;
    }
}
ev.displayName = 'CallTile';
let eh = i.memo((e) => {
    let { idle: l, title: t, width: s, videoToggleState: r, blocked: u, ignored: m, participantType: p, participantUserId: f, platform: v, secureFramesVerified: x, onContextMenu: g, isHovered: j } = e,
        Z = (0, o.e7)([H.Z], () => null != f && H.Z.isLocalVideoAutoDisabled(f, (0, h.Z)(p)), [f, p]),
        I = (0, es.N)(s),
        [E, T] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                l = () => {
                    e === q.Z.isOpen() || (e = q.Z.isOpen()) || T(!1);
                };
            return q.Z.addChangeListener(l), () => q.Z.removeChangeListener(l);
        }, []),
        (0, n.jsxs)('div', {
            className: ep.overlayContainer,
            children: [
                (0, n.jsx)('div', {
                    className: a()(ep.overlayTop, { [ep.small]: s < 195 }),
                    children:
                        Z || r === er.ZUi.AUTO_PROBING
                            ? l
                                ? (0, n.jsx)('div', {
                                      className: ep.status,
                                      children: (0, n.jsx)(d.Amn, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, n.jsxs)('div', {
                                      className: a()(ep.overlayTitle, ep.videoDisabledTitle),
                                      children: [
                                          (0, n.jsx)('div', {
                                              className: ep.status,
                                              children: (0, n.jsx)(d.Amn, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, n.jsx)(d.Text, {
                                              variant: 'text-sm/normal',
                                              className: ep.overlayTitleText,
                                              children: em.intl.string(em.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                !I &&
                    (0, n.jsxs)('div', {
                        className: a()(ep.overlayBottom, { [ep.small]: s < 195 }),
                        children: [
                            (0, n.jsxs)(d.Text, {
                                className: a()(ep.overlayTitle, { [ep.idle]: l && !1 }),
                                color: 'none',
                                variant: 'text-md/normal',
                                children: [
                                    u
                                        ? (0, n.jsx)('div', {
                                              className: ep.blocked,
                                              children: (0, n.jsx)(d.t6m, {
                                                  size: 'lg',
                                                  className: ep.blockedIcon,
                                                  color: c.Z.unsafe_rawColors.RED_400.css
                                              })
                                          })
                                        : null,
                                    m
                                        ? (0, n.jsx)('div', {
                                              className: ep.ignored,
                                              children: (0, n.jsx)(d.kZF, {
                                                  size: 'lg',
                                                  className: ep.blockedIcon
                                              })
                                          })
                                        : null,
                                    (0, n.jsx)(ex, {
                                        participantType: p,
                                        platform: v,
                                        className: ep.titleIcon
                                    }),
                                    null != t && '' !== t
                                        ? (0, n.jsx)('span', {
                                              className: ep.overlayTitleText,
                                              children: t
                                          })
                                        : null,
                                    x &&
                                        (0, n.jsx)(d.ua7, {
                                            text: em.intl.string(em.t.ZEem6O),
                                            children: (e) =>
                                                (0, n.jsx)(d.tQf, {
                                                    ...e,
                                                    className: ep.secureFramesIcon,
                                                    size: 'xs',
                                                    color: c.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': em.intl.string(em.t.mR9cf3)
                                                })
                                        })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: a()(ep.overlayButtonContainer, { [ep.idle]: !j && !E }),
                                children: (0, n.jsx)(d.P3F, {
                                    className: ep.overlayButton,
                                    onClick: (e) => {
                                        e.stopPropagation(), T(!0), g(e, !0);
                                    },
                                    children: (0, n.jsx)(d.xhG, {})
                                })
                            })
                        ]
                    })
            ]
        })
    );
});
eh.displayName = 'CallTileOverlayV2';
let eg = i.memo((e) => {
    let { muted: l, deafened: t, localMuted: i, serverMuted: s, serverDeafened: r, idle: u, title: m, width: p, hasVideo: f, inCall: v, localVideoDisabled: x, videoToggleState: g, focused: j, blocked: I, ignored: E, hideAudioIcon: T, participantType: C, participantUserId: N, onContextMenu: _, onToggleMute: S, platform: y, application: O, secureFramesVerified: R } = e,
        b = null,
        A = null,
        V = null,
        k = (0, es.K)(p),
        M = (0, es.N)(p),
        P = (0, o.e7)([H.Z], () => null != N && H.Z.isLocalVideoAutoDisabled(N, (0, h.Z)(C)), [N, C]),
        D = (0, d.bWb)().enabled;
    if (!T) {
        if (i && C === eo.fO.STREAM && f && !j)
            b = (0, n.jsx)(d.ua7, {
                text: em.intl.string(em.t.YqAjX1),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(ep.interactive, ep.toggleMute, ep.status),
                        children: (0, n.jsx)(d.OyP, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (i || C !== eo.fO.STREAM || !f || k || j) {
            if (D) {
                let e;
                r ? (e = d.Vm4) : s ? (e = d.v0G) : t ? (e = d.wE8) : i ? (e = d.v0G) : l && (e = d.nRN), (b = null != e ? (0, n.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (t || l || i) {
                let e = t ? d.wE8 : d.nRN;
                b = (0, n.jsx)(e, { color: 'currentColor' });
            }
            b =
                null != b
                    ? (0, n.jsx)('div', {
                          className: ep.status,
                          children: b
                      })
                    : null;
        } else
            b = (0, n.jsx)(d.ua7, {
                text: em.intl.string(em.t['w4m94+']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(ep.interactive, ep.toggleMute, ep.status),
                        children: (0, n.jsx)(d.gj8, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    (v && H.Z.supports(eu.AN.VIDEO)) || !f
        ? v &&
          f &&
          x &&
          !P &&
          (A = (0, n.jsx)(d.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: ep.localMuteStrikethrough
          }))
        : (A = (0, n.jsx)(d.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        C === eo.fO.STREAM &&
            !j &&
            f &&
            (V = (0, n.jsx)(d.ua7, {
                text: em.intl.string(em.t['+1H47u']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(d.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), _(e);
                        },
                        className: a()(ep.status, ep.interactive),
                        children: (0, n.jsx)(d.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            }));
    let w =
        C === eo.fO.USER && null != O
            ? (0, n.jsx)(d.ua7, {
                  text: em.intl.formatToPlainString(em.t.Sq9xJy, { game: O.name }),
                  children: (e) =>
                      (0, n.jsx)('div', {
                          ...e,
                          className: a()(ep.gameIconContainer, { [ep.gameIconSmall]: p < 500 }),
                          children: (0, n.jsx)(Z.Z, {
                              className: ep.gameIcon,
                              game: O,
                              size: Z.Z.Sizes.SMALL
                          })
                      })
              })
            : null;
    return (0, n.jsxs)('div', {
        className: ep.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: a()(ep.overlayTop, { [ep.small]: p < 195 }),
                children:
                    P || g === er.ZUi.AUTO_PROBING
                        ? u
                            ? (0, n.jsx)('div', {
                                  className: ep.status,
                                  children: (0, n.jsx)(d.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: a()(ep.overlayTitle, ep.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: ep.status,
                                          children: (0, n.jsx)(d.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          className: ep.overlayTitleText,
                                          children: em.intl.string(em.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, n.jsxs)('div', {
                className: a()(ep.overlayBottom, { [ep.small]: p < 195 }),
                children: [
                    M
                        ? (0, n.jsx)('div', {})
                        : (0, n.jsxs)(d.Text, {
                              className: a()(ep.overlayTitle, { [ep.idle]: u }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  I
                                      ? (0, n.jsx)('div', {
                                            className: ep.blocked,
                                            children: (0, n.jsx)(d.t6m, {
                                                size: 'lg',
                                                className: ep.blockedIcon,
                                                color: c.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  E
                                      ? (0, n.jsx)('div', {
                                            className: ep.ignored,
                                            children: (0, n.jsx)(d.kZF, {
                                                size: 'lg',
                                                className: ep.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, n.jsx)(ex, {
                                      participantType: C,
                                      platform: y,
                                      className: ep.titleIcon
                                  }),
                                  null != m && '' !== m
                                      ? (0, n.jsx)('span', {
                                            className: ep.overlayTitleText,
                                            children: m
                                        })
                                      : null,
                                  R &&
                                      (0, n.jsx)(d.ua7, {
                                          text: em.intl.string(em.t.ZEem6O),
                                          children: (e) =>
                                              (0, n.jsx)(d.tQf, {
                                                  ...e,
                                                  className: ep.secureFramesIcon,
                                                  size: 'xs',
                                                  color: c.Z.colors.HEADER_PRIMARY,
                                                  'aria-label': em.intl.string(em.t.mR9cf3)
                                              })
                                      })
                              ]
                          }),
                    (0, n.jsxs)('div', {
                        className: ep.statusContainer,
                        children: [
                            null != A &&
                                (0, n.jsx)('div', {
                                    className: ep.status,
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
eg.displayName = 'CallTileOverlay';
let ej = C.L,
    eZ = ev;
