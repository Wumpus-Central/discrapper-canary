t.d(l, {
    BP: () => ep,
    ZP: () => ef
}),
    t(47120);
var n = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(442837),
    o = t(692547),
    c = t(481060),
    d = t(846027),
    u = t(410575),
    m = t(607070),
    p = t(812206),
    f = t(835473),
    v = t(682901),
    x = t(414910),
    h = t(415635),
    g = t(578976),
    j = t(925329),
    Z = t(649739),
    E = t(37091),
    I = t(6572),
    T = t(352978),
    C = t(936847),
    N = t(512384),
    _ = t(33316),
    S = t(576645),
    O = t(6242),
    y = t(757692),
    b = t(210975),
    R = t(695346),
    A = t(937995),
    V = t(456631),
    k = t(274459),
    D = t(314897),
    M = t(857192),
    P = t(77498),
    w = t(131951),
    z = t(158776),
    L = t(594174),
    U = t(979651),
    G = t(574254),
    Y = t(374129),
    B = t(639351),
    F = t(74538),
    H = t(584729),
    X = t(334374),
    K = t(849171),
    W = t(607187),
    q = t(624834),
    J = t(833519),
    Q = t(462061),
    $ = t(623825),
    ee = t(839662),
    el = t(981631),
    et = t(354459),
    en = t(37113),
    ei = t(524484),
    es = t(65154),
    ea = t(388032),
    er = t(995544);
let eo = [et.fO.ACTIVITY, et.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ec = i.memo((e) => {
        var l, t, s, o, j;
        let { participant: G, onDoubleClick: Y, onContextMenu: B, onClick: $, onMouseDown: ec, onKeyDown: ed, className: ep, style: ef, containerStyle: ev, channel: ex, width: eh, inPopout: eg, onVideoResize: ej, inCall: eZ = !1, selected: eE = !1, noBorder: eI = !1, noVideoRender: eT = !1, focused: eC = !1, blocked: eN = !1, ignored: e_ = !1, fit: eS = T.L.CONTAIN, paused: eO = !1, pulseSpeakingIndicator: ey = !1, forceIdle: eb = !1, inOverlayPopout: eR = !1 } = e,
            eA = i.useContext(A.h9) || eb,
            [eV, ek] = i.useState(!1),
            eD = R.Sb.useSetting(),
            eM = (0, r.e7)([M.default], () => M.default.isStreamInfoOverlayEnabled),
            [eP, ew] = i.useState(!1),
            ez = (0, r.e7)([D.default], () => D.default.getId()),
            eL = (0, r.e7)([L.default], () => L.default.getCurrentUser()),
            eU = G.type === et.fO.ACTIVITY ? null : null === (l = G.user) || void 0 === l ? void 0 : l.id,
            [eG] = (0, f.Z)(G.type === et.fO.ACTIVITY ? [G.applicationId] : []),
            eY = (0, r.e7)([E.Z], () => E.Z.getEnabled()),
            eB = (0, r.e7)([w.Z], () => null != eU && w.Z.isLocalVideoDisabled(eU, (0, x.Z)(G.type)), [eU, G.type]),
            eF = (0, r.e7)([w.Z], () => (null != eU ? w.Z.getVideoToggleState(eU, (0, x.Z)(G.type)) : el.ZUi.NONE), [eU, G.type]),
            eH = eF === el.ZUi.AUTO_PROBING,
            { speaking: eX, ringing: eK, hasVideo: eW } = (0, ee.Z)(G, ez),
            eq = (function (e, l, t) {
                var n, i, s, a;
                let o = l.type !== et.fO.ACTIVITY ? l.user.id : l.applicationId,
                    c = (0, r.cj)([U.Z], () => {
                        var e, l, n;
                        let i = U.Z.getVoiceState(t, o);
                        return {
                            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
                            deafened: null !== (l = null == i ? void 0 : i.deaf) && void 0 !== l && l,
                            suppressed: null !== (n = null == i ? void 0 : i.suppress) && void 0 !== n && n,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        };
                    }),
                    d = (0, r.cj)(
                        [w.Z],
                        () => {
                            let t = (0, x.Z)(l.type);
                            return e === o
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: w.Z.isLocalMute(o, t),
                                      localVideoDisabled: w.Z.isLocalVideoDisabled(o, t),
                                      localVideoAutoDisabled: w.Z.isLocalVideoAutoDisabled(o, t)
                                  };
                        },
                        [e, l.type, o]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: null !== (s = l.type === et.fO.USER && (null === (n = l.voiceState) || void 0 === n ? void 0 : n.isVoiceMuted())) && void 0 !== s && s,
                    deafened: null !== (a = l.type === et.fO.USER && (null === (i = l.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== a && a
                };
            })(ez, G, ex.getGuildId()),
            eJ = G.type === et.fO.STREAM && eU === ez;
        i.useEffect(() => {
            if (eJ && !F.ZP.isPremium(eL) && null != ex.hdStreamingUntil && new Date(ex.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = w.Z.getGoLiveSource(),
                            l = (0, g.s)(en.LY.RESOLUTION_720, en.ws.FPS_30, e);
                        d.Z.setGoLiveSource(l);
                    },
                    new Date(ex.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        });
        let eQ = (0, y.o)(G, eL),
            e$ = (0, O.lL)('CallTile', !0, eL, eQ),
            e0 = (0, r.e7)([V.Z], () => (G.type === et.fO.USER && null != eU ? V.Z.getEffectForUserId(eU) : null)),
            e1 = (0, r.e7)([U.Z], () => U.Z.getVoicePlatformForChannel(ex.id, null != eU ? eU : el.lds)),
            { enabled: e7 } = (0, v.Z)({ location: 'CallTile' }),
            { showGameIcon: e4 } = Z.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e9 = (0, r.e7)([z.Z], () => (e4 && null != eU ? z.Z.findActivity(eU, (e) => null != e.application_id && e.type === el.IIU.PLAYING) : null), [e4, eU]),
            e5 = (0, r.e7)([P.Z], () => ((null == e9 ? void 0 : e9.application_id) != null ? P.Z.getDetectableGame(e9.application_id) : null)),
            e3 = (0, r.e7)([p.Z], () => (null != e5 && (null == e9 ? void 0 : e9.application_id) != null ? p.Z.getApplication(null == e9 ? void 0 : e9.application_id) : void 0)),
            e2 = (0, b.wV)({
                userId: eU,
                channelId: ex.id,
                location: 'CallTile'
            }),
            e6 = (0, b.zU)({
                streamKey: G.type === et.fO.STREAM ? G.id : null,
                channelId: ex.id,
                location: 'CallTile'
            }),
            e8 = i.useMemo(() => (G.type === et.fO.STREAM ? null != e6 && e6 : G.type === et.fO.USER && null != e2 && e2), [e6, e2, G.type]);
        i.useEffect(() => {
            ek(eC);
        }, [eC]);
        let [le, ll] = i.useState(!1),
            lt = i.useCallback(() => {
                m.Z.useReducedMotion || ll(!0);
            }, []);
        (0, S.J)(ex, lt);
        let ln = i.useCallback(() => {
                null != eU && d.Z.toggleLocalMute(eU, es.Yn.STREAM);
            }, [eU]),
            li = i.useCallback(
                (e) => {
                    null == $ || $(G, e);
                },
                [$, G]
            ),
            ls = i.useCallback(
                (e) => {
                    null == Y || Y(G, e);
                },
                [Y, G]
            ),
            la = i.useCallback(
                (e, l) => {
                    null == B || B(G, e, l);
                },
                [B, G]
            ),
            lr = null,
            lo = null,
            lc = '';
        switch (G.type) {
            case et.fO.STREAM:
                (lr = (0, n.jsx)(J.Z, {
                    participant: G,
                    selected: eE,
                    width: eh,
                    fit: eS,
                    onVideoResize: ej,
                    paused: eO,
                    inPopout: eg,
                    focused: eC,
                    inOverlayPopout: eR
                })),
                    (lo = (0, n.jsx)(J._, {
                        participant: G,
                        selected: eE,
                        width: eh,
                        focused: eC,
                        idle: eA,
                        premiumIndicator: e$.enabled
                    })),
                    (lc = ea.intl.formatToPlainString(ea.t.gHPz3d, { streamerName: G.user.username }));
                break;
            case et.fO.USER:
                (lr = (0, n.jsx)(Q.Z, {
                    channel: ex,
                    inCall: eZ,
                    participant: G,
                    fit: eS,
                    onVideoResize: ej,
                    paused: eO,
                    selected: eE,
                    width: eh,
                    blocked: eN,
                    ignored: e_,
                    noVideoRender: eT || eH,
                    pulseSpeakingIndicator: ey,
                    inOverlayPopout: eR
                })),
                    (lo = (0, n.jsx)(Q.T, {
                        userId: G.user.id,
                        channelId: ex.id
                    })),
                    (lc = ea.intl.formatToPlainString(ea.t['iC/x/f'], { username: G.user.username }));
                break;
            case et.fO.ACTIVITY:
                (lr = (0, n.jsx)(K.ZP, {
                    interactible: eC,
                    participant: G,
                    selected: eE,
                    channel: ex,
                    width: eh
                })),
                    (lc = ea.intl.formatToPlainString(ea.t.YCvOsL, { activityName: null == eG ? void 0 : eG.name }));
                break;
            case et.fO.PRESENCE_EMBEDDED_ACTIVITY:
                lr = (0, n.jsx)(q.Z, {
                    participant: G,
                    width: eh,
                    channelId: ex.id
                });
                break;
            case et.fO.HIDDEN_STREAM:
                lr = (0, n.jsx)(J.Z, {
                    participant: G,
                    selected: eE,
                    width: eh,
                    fit: eS,
                    onVideoResize: ej,
                    paused: eO,
                    inPopout: eg,
                    focused: eC,
                    inOverlayPopout: eR
                });
        }
        let ld = i.useRef(null),
            lu = G.type === et.fO.STREAM ? c.pzj : c.Odl,
            lm = e7 ? eu : em;
        return (0, n.jsx)(u.Z, {
            section: el.jXE.VOICE_CHANNEL_TILE,
            children: (0, n.jsxs)('div', {
                className: a()(er.wrapper, { [er.ringing]: eK }, ep),
                style: ev,
                onMouseEnter: () => {
                    ew(!0);
                },
                onMouseLeave: () => {
                    ew(!1);
                },
                children: [
                    le &&
                        G.type === et.fO.STREAM &&
                        (0, n.jsx)(_.Z, {
                            baseTileRef: ld.current,
                            cleanup: () => ll(!1)
                        }),
                    (0, n.jsxs)(N.Z, {
                        shakeLocation: ei.oZ.VOICE_USER,
                        isShaking: eX,
                        className: er.tile,
                        children: [
                            (0, n.jsx)(W.Z, {
                                ref: ld,
                                className: a()(er.tile, {
                                    [er.noBorder]: eI,
                                    [er.noInteraction]: null == $,
                                    [er.idle]: eA
                                }),
                                noBorder: eI,
                                style: ef,
                                participantUserId: eU,
                                children: (0, n.jsxs)(c.kL8, {
                                    'aria-label': lc,
                                    className: er.tileChild,
                                    onDoubleClick: ls,
                                    onContextMenu: la,
                                    onClick: li,
                                    onMouseDown: ec,
                                    onKeyDown: ed,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e0 && null != eU
                                            ? (0, n.jsx)(k.Z, {
                                                  voiceChannelEffect: e0,
                                                  onComplete: () => (0, V.H)(eU),
                                                  userId: eU
                                              })
                                            : null,
                                        G.type === et.fO.USER
                                            ? (0, n.jsx)('div', {
                                                  className: er.voiceChannelEffectsContainer,
                                                  children: (0, n.jsx)(h.Z, {
                                                      userId: eU,
                                                      channelId: ex.id,
                                                      guildId: ex.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (o = null == ld ? void 0 : null === (t = ld.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== o ? o : 0,
                                                          height: null !== (j = null == ld ? void 0 : null === (s = ld.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== j ? j : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        lr,
                                        eI
                                            ? null
                                            : (0, n.jsx)('div', {
                                                  className: er.indicators,
                                                  children: lo
                                              }),
                                        eE
                                            ? (0, n.jsx)('div', {
                                                  className: er.selectedScreen,
                                                  children: (0, n.jsx)(lu, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: er.selectedIcon
                                                  })
                                              })
                                            : null,
                                        eo.includes(G.type)
                                            ? null
                                            : (0, n.jsx)(lm, {
                                                  focused: eC,
                                                  width: eh,
                                                  inCall: eZ,
                                                  participantType: G.type,
                                                  hasVideo: null != eW && eW,
                                                  ...eq,
                                                  idle: eA,
                                                  platform: e1,
                                                  title: (0, H.Z)(ex, G),
                                                  blocked: eN,
                                                  ignored: e_,
                                                  localVideoDisabled: eB,
                                                  videoToggleState: eF,
                                                  hideAudioIcon: eJ,
                                                  onContextMenu: la,
                                                  onToggleMute: ln,
                                                  participantUserId: eU,
                                                  application: e3,
                                                  secureFramesVerified: e8,
                                                  isHovered: eP
                                              }),
                                        G.type === et.fO.USER && eY
                                            ? (0, n.jsx)(I.Z, {
                                                  userId: G.id,
                                                  channelId: ex.id
                                              })
                                            : null,
                                        eZ && !eI
                                            ? (0, n.jsx)('div', {
                                                  className: a()(er.border, {
                                                      [er.voiceChannelEffect]: !eC && null != e0,
                                                      [er.speaking]: eX && !eC
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eD &&
                                eM &&
                                eP &&
                                (0, n.jsx)(X.Z, {
                                    currentUserId: ez,
                                    participant: G
                                }),
                            (0, n.jsx)(C.Z, {
                                isFiring: eV,
                                callTileRef: ld.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ed(e) {
    let { participantType: l, platform: t, className: i } = e;
    if (l === et.fO.STREAM)
        return t === et.wR.XBOX
            ? (0, n.jsx)(B.Z, { className: i })
            : (0, n.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: i
              });
    switch (t) {
        case et.wR.MOBILE:
            return (0, n.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: i
            });
        case et.wR.XBOX:
            return (0, n.jsx)(B.Z, { className: i });
        case et.wR.PLAYSTATION:
            return (0, n.jsx)(Y.Z, { className: i });
        default:
            return null;
    }
}
ec.displayName = 'CallTile';
let eu = i.memo((e) => {
    let { idle: l, title: t, width: s, videoToggleState: d, blocked: u, ignored: m, participantType: p, participantUserId: f, platform: v, secureFramesVerified: h, onContextMenu: g, isHovered: j } = e,
        Z = (0, r.e7)([w.Z], () => null != f && w.Z.isLocalVideoAutoDisabled(f, (0, x.Z)(p)), [f, p]),
        E = (0, $.N)(s),
        [I, T] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                l = () => {
                    e === G.Z.isOpen() || (e = G.Z.isOpen()) || T(!1);
                };
            return G.Z.addChangeListener(l), () => G.Z.removeChangeListener(l);
        }, []),
        (0, n.jsxs)('div', {
            className: er.overlayContainer,
            children: [
                (0, n.jsx)('div', {
                    className: a()(er.overlayTop, { [er.small]: s < 195 }),
                    children:
                        Z || d === el.ZUi.AUTO_PROBING
                            ? l
                                ? (0, n.jsx)('div', {
                                      className: er.status,
                                      children: (0, n.jsx)(c.Amn, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, n.jsxs)('div', {
                                      className: a()(er.overlayTitle, er.videoDisabledTitle),
                                      children: [
                                          (0, n.jsx)('div', {
                                              className: er.status,
                                              children: (0, n.jsx)(c.Amn, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, n.jsx)(c.Text, {
                                              variant: 'text-sm/normal',
                                              className: er.overlayTitleText,
                                              children: ea.intl.string(ea.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                !E &&
                    (0, n.jsxs)('div', {
                        className: a()(er.overlayBottom, { [er.small]: s < 195 }),
                        children: [
                            (0, n.jsxs)(c.Text, {
                                className: a()(er.overlayTitle, { [er.idle]: l && !1 }),
                                color: 'none',
                                variant: 'text-md/normal',
                                children: [
                                    u
                                        ? (0, n.jsx)('div', {
                                              className: er.blocked,
                                              children: (0, n.jsx)(c.t6m, {
                                                  size: 'lg',
                                                  className: er.blockedIcon,
                                                  color: o.Z.unsafe_rawColors.RED_400.css
                                              })
                                          })
                                        : null,
                                    m
                                        ? (0, n.jsx)('div', {
                                              className: er.ignored,
                                              children: (0, n.jsx)(c.kZF, {
                                                  size: 'lg',
                                                  className: er.blockedIcon
                                              })
                                          })
                                        : null,
                                    (0, n.jsx)(ed, {
                                        participantType: p,
                                        platform: v,
                                        className: er.titleIcon
                                    }),
                                    null != t && '' !== t
                                        ? (0, n.jsx)('span', {
                                              className: er.overlayTitleText,
                                              children: t
                                          })
                                        : null,
                                    h &&
                                        (0, n.jsx)(c.ua7, {
                                            text: ea.intl.string(ea.t.ZEem6O),
                                            children: (e) =>
                                                (0, n.jsx)(c.tQf, {
                                                    ...e,
                                                    className: er.secureFramesIcon,
                                                    size: 'xs',
                                                    color: o.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': ea.intl.string(ea.t.mR9cf3)
                                                })
                                        })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: a()(er.overlayButtonContainer, { [er.idle]: !j && !I }),
                                children: (0, n.jsx)(c.P3F, {
                                    className: er.overlayButton,
                                    onClick: (e) => {
                                        e.stopPropagation(), T(!0), g(e, !0);
                                    },
                                    children: (0, n.jsx)(c.xhG, {})
                                })
                            })
                        ]
                    })
            ]
        })
    );
});
eu.displayName = 'CallTileOverlayV2';
let em = i.memo((e) => {
    let { muted: l, deafened: t, localMuted: i, serverMuted: s, serverDeafened: d, idle: u, title: m, width: p, hasVideo: f, inCall: v, localVideoDisabled: h, videoToggleState: g, focused: Z, blocked: E, ignored: I, hideAudioIcon: T, participantType: C, participantUserId: N, onContextMenu: _, onToggleMute: S, platform: O, application: y, secureFramesVerified: b } = e,
        R = null,
        A = null,
        V = null,
        k = (0, $.K)(p),
        D = (0, $.N)(p),
        M = (0, r.e7)([w.Z], () => null != N && w.Z.isLocalVideoAutoDisabled(N, (0, x.Z)(C)), [N, C]),
        P = (0, c.bWb)().enabled;
    if (!T) {
        if (i && C === et.fO.STREAM && f && !Z)
            R = (0, n.jsx)(c.ua7, {
                text: ea.intl.string(ea.t.YqAjX1),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(c.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(er.interactive, er.toggleMute, er.status),
                        children: (0, n.jsx)(c.OyP, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (i || C !== et.fO.STREAM || !f || k || Z) {
            if (P) {
                let e;
                d ? (e = c.Vm4) : s ? (e = c.v0G) : t ? (e = c.wE8) : i ? (e = c.v0G) : l && (e = c.nRN), (R = null != e ? (0, n.jsx)(e, { color: o.Z.colors.WHITE }) : null);
            } else if (t || l || i) {
                let e = t ? c.wE8 : c.nRN;
                R = (0, n.jsx)(e, { color: 'currentColor' });
            }
            R =
                null != R
                    ? (0, n.jsx)('div', {
                          className: er.status,
                          children: R
                      })
                    : null;
        } else
            R = (0, n.jsx)(c.ua7, {
                text: ea.intl.string(ea.t['w4m94+']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(c.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), S();
                        },
                        className: a()(er.interactive, er.toggleMute, er.status),
                        children: (0, n.jsx)(c.gj8, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    (v && w.Z.supports(es.AN.VIDEO)) || !f
        ? v &&
          f &&
          h &&
          !M &&
          (A = (0, n.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: er.localMuteStrikethrough
          }))
        : (A = (0, n.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        C === et.fO.STREAM &&
            !Z &&
            f &&
            (V = (0, n.jsx)(c.ua7, {
                text: ea.intl.string(ea.t['+1H47u']),
                children: (e) => {
                    let { onClick: l, ...t } = e;
                    return (0, n.jsx)(c.P3F, {
                        ...t,
                        onClick: (e) => {
                            e.stopPropagation(), null == l || l(), _(e);
                        },
                        className: a()(er.status, er.interactive),
                        children: (0, n.jsx)(c.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            }));
    let z =
        C === et.fO.USER && null != y
            ? (0, n.jsx)(c.ua7, {
                  text: ea.intl.formatToPlainString(ea.t.Sq9xJy, { game: y.name }),
                  children: (e) =>
                      (0, n.jsx)('div', {
                          ...e,
                          className: a()(er.gameIconContainer, { [er.gameIconSmall]: p < 500 }),
                          children: (0, n.jsx)(j.Z, {
                              className: er.gameIcon,
                              game: y,
                              size: j.Z.Sizes.SMALL
                          })
                      })
              })
            : null;
    return (0, n.jsxs)('div', {
        className: er.overlayContainer,
        children: [
            (0, n.jsx)('div', {
                className: a()(er.overlayTop, { [er.small]: p < 195 }),
                children:
                    M || g === el.ZUi.AUTO_PROBING
                        ? u
                            ? (0, n.jsx)('div', {
                                  className: er.status,
                                  children: (0, n.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, n.jsxs)('div', {
                                  className: a()(er.overlayTitle, er.videoDisabledTitle),
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: er.status,
                                          children: (0, n.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: er.overlayTitleText,
                                          children: ea.intl.string(ea.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, n.jsxs)('div', {
                className: a()(er.overlayBottom, { [er.small]: p < 195 }),
                children: [
                    D
                        ? (0, n.jsx)('div', {})
                        : (0, n.jsxs)(c.Text, {
                              className: a()(er.overlayTitle, { [er.idle]: u }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  E
                                      ? (0, n.jsx)('div', {
                                            className: er.blocked,
                                            children: (0, n.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: er.blockedIcon,
                                                color: o.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  I
                                      ? (0, n.jsx)('div', {
                                            className: er.ignored,
                                            children: (0, n.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: er.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, n.jsx)(ed, {
                                      participantType: C,
                                      platform: O,
                                      className: er.titleIcon
                                  }),
                                  null != m && '' !== m
                                      ? (0, n.jsx)('span', {
                                            className: er.overlayTitleText,
                                            children: m
                                        })
                                      : null,
                                  b &&
                                      (0, n.jsx)(c.ua7, {
                                          text: ea.intl.string(ea.t.ZEem6O),
                                          children: (e) =>
                                              (0, n.jsx)(c.tQf, {
                                                  ...e,
                                                  className: er.secureFramesIcon,
                                                  size: 'xs',
                                                  color: o.Z.colors.HEADER_PRIMARY,
                                                  'aria-label': ea.intl.string(ea.t.mR9cf3)
                                              })
                                      })
                              ]
                          }),
                    (0, n.jsxs)('div', {
                        className: er.statusContainer,
                        children: [
                            null != A &&
                                (0, n.jsx)('div', {
                                    className: er.status,
                                    children: A
                                }),
                            R,
                            V,
                            z
                        ]
                    })
                ]
            })
        ]
    });
});
em.displayName = 'CallTileOverlay';
let ep = T.L,
    ef = ec;
