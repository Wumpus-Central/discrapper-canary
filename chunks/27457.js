n.d(t, {
    BP: () => eE,
    ZP: () => eh
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(846027),
    u = n(410575),
    _ = n(607070),
    E = n(812206),
    h = n(835473),
    p = n(682901),
    I = n(414910),
    m = n(415635),
    C = n(578976),
    T = n(925329),
    N = n(649739),
    g = n(37091),
    S = n(6572),
    R = n(352978),
    f = n(936847),
    A = n(512384),
    O = n(33316),
    L = n(576645),
    b = n(6242),
    P = n(757692),
    x = n(210975),
    D = n(695346),
    M = n(937995),
    v = n(456631),
    U = n(274459),
    k = n(314897),
    y = n(857192),
    Z = n(77498),
    V = n(131951),
    j = n(158776),
    F = n(594174),
    w = n(979651),
    G = n(574254),
    B = n(374129),
    H = n(639351),
    W = n(74538),
    z = n(584729),
    Y = n(334374),
    K = n(849171),
    X = n(607187),
    q = n(624834),
    Q = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    ei = n(37113),
    el = n(524484),
    er = n(65154),
    es = n(388032),
    ea = n(995544);
let eo = [en.fO.ACTIVITY, en.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ec = l.memo((e) => {
        var t, n, r, o, T;
        let { participant: G, onDoubleClick: B, onContextMenu: H, onClick: $, onMouseDown: ec, onKeyDown: ed, className: eE, style: eh, containerStyle: ep, channel: eI, width: em, inPopout: eC, onVideoResize: eT, inCall: eN = !1, selected: eg = !1, noBorder: eS = !1, noVideoRender: eR = !1, focused: ef = !1, blocked: eA = !1, ignored: eO = !1, fit: eL = R.L.CONTAIN, paused: eb = !1, pulseSpeakingIndicator: eP = !1, forceIdle: ex = !1, inOverlayPopout: eD = !1 } = e,
            eM = l.useContext(M.h9) || ex,
            [ev, eU] = l.useState(!1),
            ek = D.Sb.useSetting(),
            ey = (0, a.e7)([y.default], () => y.default.isStreamInfoOverlayEnabled),
            [eZ, eV] = l.useState(!1),
            ej = (0, a.e7)([k.default], () => k.default.getId()),
            eF = (0, a.e7)([F.default], () => F.default.getCurrentUser()),
            ew = G.type === en.fO.ACTIVITY ? null : null === (t = G.user) || void 0 === t ? void 0 : t.id,
            [eG] = (0, h.Z)(G.type === en.fO.ACTIVITY ? [G.applicationId] : []),
            eB = (0, a.e7)([g.Z], () => g.Z.getEnabled()),
            eH = (0, a.e7)([V.Z], () => null != ew && V.Z.isLocalVideoDisabled(ew, (0, I.Z)(G.type)), [ew, G.type]),
            eW = (0, a.e7)([V.Z], () => (null != ew ? V.Z.getVideoToggleState(ew, (0, I.Z)(G.type)) : et.ZUi.NONE), [ew, G.type]),
            ez = eW === et.ZUi.AUTO_PROBING,
            { speaking: eY, ringing: eK, hasVideo: eX } = (0, ee.Z)(G, ej),
            eq = (function (e, t, n) {
                var i, l, r, s;
                let o = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, a.cj)([w.Z], () => {
                        var e, t, i;
                        let l = w.Z.getVoiceState(n, o);
                        return {
                            muted: null !== (e = null == l ? void 0 : l.mute) && void 0 !== e && e,
                            deafened: null !== (t = null == l ? void 0 : l.deaf) && void 0 !== t && t,
                            suppressed: null !== (i = null == l ? void 0 : l.suppress) && void 0 !== i && i,
                            voiceChannelId: null == l ? void 0 : l.channelId
                        };
                    }),
                    d = (0, a.cj)(
                        [V.Z],
                        () => {
                            let n = (0, I.Z)(t.type);
                            return e === o
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: V.Z.isLocalMute(o, n),
                                      localVideoDisabled: V.Z.isLocalVideoDisabled(o, n),
                                      localVideoAutoDisabled: V.Z.isLocalVideoAutoDisabled(o, n)
                                  };
                        },
                        [e, t.type, o]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: null !== (r = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== r && r,
                    deafened: null !== (s = t.type === en.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== s && s
                };
            })(ej, G, eI.getGuildId()),
            eQ = G.type === en.fO.STREAM && ew === ej;
        l.useEffect(() => {
            if (eQ && !W.ZP.isPremium(eF) && null != eI.hdStreamingUntil && new Date(eI.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = V.Z.getGoLiveSource(),
                            t = (0, C.s)(ei.LY.RESOLUTION_720, ei.ws.FPS_30, e);
                        d.Z.setGoLiveSource(t);
                    },
                    new Date(eI.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        });
        let eJ = (0, P.o)(G, eF),
            e$ = (0, b.lL)('CallTile', !0, eF, eJ),
            e0 = (0, a.e7)([v.Z], () => (G.type === en.fO.USER && null != ew ? v.Z.getEffectForUserId(ew) : null)),
            e4 = (0, a.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(eI.id, null != ew ? ew : et.lds)),
            { enabled: e1 } = (0, p.Z)({ location: 'CallTile' }),
            { showGameIcon: e6 } = N.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            e3 = (0, a.e7)([j.Z], () => (e6 && null != ew ? j.Z.findActivity(ew, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null), [e6, ew]),
            e2 = (0, a.e7)([Z.Z], () => ((null == e3 ? void 0 : e3.application_id) != null ? Z.Z.getDetectableGame(e3.application_id) : null)),
            e9 = (0, a.e7)([E.Z], () => (null != e2 && (null == e3 ? void 0 : e3.application_id) != null ? E.Z.getApplication(null == e3 ? void 0 : e3.application_id) : void 0)),
            e7 = (0, x.wV)({
                userId: ew,
                channelId: eI.id,
                location: 'CallTile'
            }),
            e8 = (0, x.zU)({
                streamKey: G.type === en.fO.STREAM ? G.id : null,
                channelId: eI.id,
                location: 'CallTile'
            }),
            e5 = l.useMemo(() => (G.type === en.fO.STREAM ? null != e8 && e8 : G.type === en.fO.USER && null != e7 && e7), [e8, e7, G.type]);
        l.useEffect(() => {
            eU(ef);
        }, [ef]);
        let [te, tt] = l.useState(!1),
            tn = l.useCallback(() => {
                _.Z.useReducedMotion || tt(!0);
            }, []);
        (0, L.J)(eI, tn);
        let ti = l.useCallback(() => {
                null != ew && d.Z.toggleLocalMute(ew, er.Yn.STREAM);
            }, [ew]),
            tl = l.useCallback(
                (e) => {
                    null == $ || $(G, e);
                },
                [$, G]
            ),
            tr = l.useCallback(
                (e) => {
                    null == B || B(G, e);
                },
                [B, G]
            ),
            ts = l.useCallback(
                (e, t) => {
                    null == H || H(G, e, t);
                },
                [H, G]
            ),
            ta = null,
            to = null,
            tc = '';
        switch (G.type) {
            case en.fO.STREAM:
                (ta = (0, i.jsx)(Q.Z, {
                    participant: G,
                    selected: eg,
                    width: em,
                    fit: eL,
                    onVideoResize: eT,
                    paused: eb,
                    inPopout: eC,
                    focused: ef,
                    inOverlayPopout: eD
                })),
                    (to = (0, i.jsx)(Q._, {
                        participant: G,
                        selected: eg,
                        width: em,
                        focused: ef,
                        idle: eM,
                        premiumIndicator: e$.enabled
                    })),
                    (tc = es.intl.formatToPlainString(es.t.gHPz3d, { streamerName: G.user.username }));
                break;
            case en.fO.USER:
                (ta = (0, i.jsx)(J.Z, {
                    channel: eI,
                    inCall: eN,
                    participant: G,
                    fit: eL,
                    onVideoResize: eT,
                    paused: eb,
                    selected: eg,
                    width: em,
                    blocked: eA,
                    ignored: eO,
                    noVideoRender: eR || ez,
                    pulseSpeakingIndicator: eP,
                    inOverlayPopout: eD
                })),
                    (to = (0, i.jsx)(J.T, {
                        userId: G.user.id,
                        channelId: eI.id
                    })),
                    (tc = es.intl.formatToPlainString(es.t['iC/x/f'], { username: G.user.username }));
                break;
            case en.fO.ACTIVITY:
                (ta = (0, i.jsx)(K.ZP, {
                    interactible: ef,
                    participant: G,
                    selected: eg,
                    channel: eI,
                    width: em
                })),
                    (tc = es.intl.formatToPlainString(es.t.YCvOsL, { activityName: null == eG ? void 0 : eG.name }));
                break;
            case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
                ta = (0, i.jsx)(q.Z, {
                    participant: G,
                    width: em,
                    channelId: eI.id
                });
                break;
            case en.fO.HIDDEN_STREAM:
                ta = (0, i.jsx)(Q.Z, {
                    participant: G,
                    selected: eg,
                    width: em,
                    fit: eL,
                    onVideoResize: eT,
                    paused: eb,
                    inPopout: eC,
                    focused: ef,
                    inOverlayPopout: eD
                });
        }
        let td = l.useRef(null),
            tu = G.type === en.fO.STREAM ? c.pzj : c.Odl,
            t_ = e1 ? eu : e_;
        return (0, i.jsx)(u.Z, {
            section: et.jXE.VOICE_CHANNEL_TILE,
            children: (0, i.jsxs)('div', {
                className: s()(ea.wrapper, { [ea.ringing]: eK }, eE),
                style: ep,
                onMouseEnter: () => {
                    eV(!0);
                },
                onMouseLeave: () => {
                    eV(!1);
                },
                children: [
                    te &&
                        G.type === en.fO.STREAM &&
                        (0, i.jsx)(O.Z, {
                            baseTileRef: td.current,
                            cleanup: () => tt(!1)
                        }),
                    (0, i.jsxs)(A.Z, {
                        shakeLocation: el.oZ.VOICE_USER,
                        isShaking: eY,
                        className: ea.tile,
                        children: [
                            (0, i.jsx)(X.Z, {
                                ref: td,
                                className: s()(ea.tile, {
                                    [ea.noBorder]: eS,
                                    [ea.noInteraction]: null == $,
                                    [ea.idle]: eM
                                }),
                                noBorder: eS,
                                style: eh,
                                participantUserId: ew,
                                children: (0, i.jsxs)(c.kL8, {
                                    'aria-label': tc,
                                    className: ea.tileChild,
                                    onDoubleClick: tr,
                                    onContextMenu: ts,
                                    onClick: tl,
                                    onMouseDown: ec,
                                    onKeyDown: ed,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != e0 && null != ew
                                            ? (0, i.jsx)(U.Z, {
                                                  voiceChannelEffect: e0,
                                                  onComplete: () => (0, v.H)(ew),
                                                  userId: ew
                                              })
                                            : null,
                                        G.type === en.fO.USER
                                            ? (0, i.jsx)('div', {
                                                  className: ea.voiceChannelEffectsContainer,
                                                  children: (0, i.jsx)(m.Z, {
                                                      userId: ew,
                                                      channelId: eI.id,
                                                      guildId: eI.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (o = null == td ? void 0 : null === (n = td.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== o ? o : 0,
                                                          height: null !== (T = null == td ? void 0 : null === (r = td.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== T ? T : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        ta,
                                        eS
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: ea.indicators,
                                                  children: to
                                              }),
                                        eg
                                            ? (0, i.jsx)('div', {
                                                  className: ea.selectedScreen,
                                                  children: (0, i.jsx)(tu, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: ea.selectedIcon
                                                  })
                                              })
                                            : null,
                                        eo.includes(G.type)
                                            ? null
                                            : (0, i.jsx)(t_, {
                                                  focused: ef,
                                                  width: em,
                                                  inCall: eN,
                                                  participantType: G.type,
                                                  hasVideo: null != eX && eX,
                                                  ...eq,
                                                  idle: eM,
                                                  platform: e4,
                                                  title: (0, z.Z)(eI, G),
                                                  blocked: eA,
                                                  ignored: eO,
                                                  localVideoDisabled: eH,
                                                  videoToggleState: eW,
                                                  hideAudioIcon: eQ,
                                                  onContextMenu: ts,
                                                  onToggleMute: ti,
                                                  participantUserId: ew,
                                                  application: e9,
                                                  secureFramesVerified: e5,
                                                  isHovered: eZ
                                              }),
                                        G.type === en.fO.USER && eB
                                            ? (0, i.jsx)(S.Z, {
                                                  userId: G.id,
                                                  channelId: eI.id
                                              })
                                            : null,
                                        eN && !eS
                                            ? (0, i.jsx)('div', {
                                                  className: s()(ea.border, {
                                                      [ea.voiceChannelEffect]: !ef && null != e0,
                                                      [ea.speaking]: eY && !ef
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            ek &&
                                ey &&
                                eZ &&
                                (0, i.jsx)(Y.Z, {
                                    currentUserId: ej,
                                    participant: G
                                }),
                            (0, i.jsx)(f.Z, {
                                isFiring: ev,
                                callTileRef: td.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function ed(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === en.fO.STREAM)
        return n === en.wR.XBOX
            ? (0, i.jsx)(H.Z, { className: l })
            : (0, i.jsx)(c.pzj, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case en.wR.MOBILE:
            return (0, i.jsx)(c.AtH, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case en.wR.XBOX:
            return (0, i.jsx)(H.Z, { className: l });
        case en.wR.PLAYSTATION:
            return (0, i.jsx)(B.Z, { className: l });
        default:
            return null;
    }
}
ec.displayName = 'CallTile';
let eu = l.memo((e) => {
    let { idle: t, title: n, width: r, videoToggleState: d, blocked: u, ignored: _, participantType: E, participantUserId: h, platform: p, secureFramesVerified: m, onContextMenu: C, isHovered: T } = e,
        N = (0, a.e7)([V.Z], () => null != h && V.Z.isLocalVideoAutoDisabled(h, (0, I.Z)(E)), [h, E]),
        g = (0, $.N)(r),
        [S, R] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e === G.Z.isOpen() || (e = G.Z.isOpen()) || R(!1);
                };
            return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t);
        }, []),
        (0, i.jsxs)('div', {
            className: ea.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: s()(ea.overlayTop, { [ea.small]: r < 195 }),
                    children:
                        N || d === et.ZUi.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)('div', {
                                      className: ea.status,
                                      children: (0, i.jsx)(c.Amn, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: s()(ea.overlayTitle, ea.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: ea.status,
                                              children: (0, i.jsx)(c.Amn, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-sm/normal',
                                              className: ea.overlayTitleText,
                                              children: es.intl.string(es.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                !g &&
                    (0, i.jsxs)('div', {
                        className: s()(ea.overlayBottom, { [ea.small]: r < 195 }),
                        children: [
                            (0, i.jsxs)(c.Text, {
                                className: s()(ea.overlayTitle, { [ea.idle]: t && !1 }),
                                color: 'none',
                                variant: 'text-md/normal',
                                children: [
                                    u
                                        ? (0, i.jsx)('div', {
                                              className: ea.blocked,
                                              children: (0, i.jsx)(c.t6m, {
                                                  size: 'lg',
                                                  className: ea.blockedIcon,
                                                  color: o.Z.unsafe_rawColors.RED_400.css
                                              })
                                          })
                                        : null,
                                    _
                                        ? (0, i.jsx)('div', {
                                              className: ea.ignored,
                                              children: (0, i.jsx)(c.kZF, {
                                                  size: 'lg',
                                                  className: ea.blockedIcon
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)(ed, {
                                        participantType: E,
                                        platform: p,
                                        className: ea.titleIcon
                                    }),
                                    null != n && '' !== n
                                        ? (0, i.jsx)('span', {
                                              className: ea.overlayTitleText,
                                              children: n
                                          })
                                        : null,
                                    m &&
                                        (0, i.jsx)(c.ua7, {
                                            text: es.intl.string(es.t.ZEem6O),
                                            children: (e) =>
                                                (0, i.jsx)(c.tQf, {
                                                    ...e,
                                                    className: ea.secureFramesIcon,
                                                    size: 'xs',
                                                    color: o.Z.colors.HEADER_PRIMARY,
                                                    'aria-label': es.intl.string(es.t.mR9cf3)
                                                })
                                        })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: s()(ea.overlayButtonContainer, { [ea.idle]: !T && !S }),
                                children: (0, i.jsx)(c.P3F, {
                                    className: ea.overlayButton,
                                    onClick: (e) => {
                                        e.stopPropagation(), R(!0), C(e, !0);
                                    },
                                    children: (0, i.jsx)(c.xhG, {})
                                })
                            })
                        ]
                    })
            ]
        })
    );
});
eu.displayName = 'CallTileOverlayV2';
let e_ = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: r, serverDeafened: d, idle: u, title: _, width: E, hasVideo: h, inCall: p, localVideoDisabled: m, videoToggleState: C, focused: N, blocked: g, ignored: S, hideAudioIcon: R, participantType: f, participantUserId: A, onContextMenu: O, onToggleMute: L, platform: b, application: P, secureFramesVerified: x } = e,
        D = null,
        M = null,
        v = null,
        U = (0, $.K)(E),
        k = (0, $.N)(E),
        y = (0, a.e7)([V.Z], () => null != A && V.Z.isLocalVideoAutoDisabled(A, (0, I.Z)(f)), [A, f]),
        Z = (0, c.bWb)().enabled;
    if (!R) {
        if (l && f === en.fO.STREAM && h && !N)
            D = (0, i.jsx)(c.ua7, {
                text: es.intl.string(es.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(c.P3F, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), L();
                        },
                        className: s()(ea.interactive, ea.toggleMute, ea.status),
                        children: (0, i.jsx)(c.OyP, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || f !== en.fO.STREAM || !h || U || N) {
            if (Z) {
                let e;
                d ? (e = c.Vm4) : r ? (e = c.v0G) : n ? (e = c.wE8) : l ? (e = c.v0G) : t && (e = c.nRN), (D = null != e ? (0, i.jsx)(e, { color: o.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? c.wE8 : c.nRN;
                D = (0, i.jsx)(e, { color: 'currentColor' });
            }
            D =
                null != D
                    ? (0, i.jsx)('div', {
                          className: ea.status,
                          children: D
                      })
                    : null;
        } else
            D = (0, i.jsx)(c.ua7, {
                text: es.intl.string(es.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(c.P3F, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), L();
                        },
                        className: s()(ea.interactive, ea.toggleMute, ea.status),
                        children: (0, i.jsx)(c.gj8, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    (p && V.Z.supports(er.AN.VIDEO)) || !h
        ? p &&
          h &&
          m &&
          !y &&
          (M = (0, i.jsx)(c.Amn, {
              size: 'md',
              color: 'currentColor',
              colorClass: ea.localMuteStrikethrough
          }))
        : (M = (0, i.jsx)(c.Odl, {
              size: 'md',
              color: 'currentColor'
          })),
        f === en.fO.STREAM &&
            !N &&
            h &&
            (v = (0, i.jsx)(c.ua7, {
                text: es.intl.string(es.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(c.P3F, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), O(e);
                        },
                        className: s()(ea.status, ea.interactive),
                        children: (0, i.jsx)(c.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            }));
    let j =
        f === en.fO.USER && null != P
            ? (0, i.jsx)(c.ua7, {
                  text: es.intl.formatToPlainString(es.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: s()(ea.gameIconContainer, { [ea.gameIconSmall]: E < 500 }),
                          children: (0, i.jsx)(T.Z, {
                              className: ea.gameIcon,
                              game: P,
                              size: T.Z.Sizes.SMALL
                          })
                      })
              })
            : null;
    return (0, i.jsxs)('div', {
        className: ea.overlayContainer,
        children: [
            (0, i.jsx)('div', {
                className: s()(ea.overlayTop, { [ea.small]: E < 195 }),
                children:
                    y || C === et.ZUi.AUTO_PROBING
                        ? u
                            ? (0, i.jsx)('div', {
                                  className: ea.status,
                                  children: (0, i.jsx)(c.Amn, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, i.jsxs)('div', {
                                  className: s()(ea.overlayTitle, ea.videoDisabledTitle),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: ea.status,
                                          children: (0, i.jsx)(c.Amn, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          className: ea.overlayTitleText,
                                          children: es.intl.string(es.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: s()(ea.overlayBottom, { [ea.small]: E < 195 }),
                children: [
                    k
                        ? (0, i.jsx)('div', {})
                        : (0, i.jsxs)(c.Text, {
                              className: s()(ea.overlayTitle, { [ea.idle]: u }),
                              color: 'none',
                              variant: 'text-md/normal',
                              children: [
                                  g
                                      ? (0, i.jsx)('div', {
                                            className: ea.blocked,
                                            children: (0, i.jsx)(c.t6m, {
                                                size: 'lg',
                                                className: ea.blockedIcon,
                                                color: o.Z.unsafe_rawColors.RED_400.css
                                            })
                                        })
                                      : null,
                                  S
                                      ? (0, i.jsx)('div', {
                                            className: ea.ignored,
                                            children: (0, i.jsx)(c.kZF, {
                                                size: 'lg',
                                                className: ea.blockedIcon
                                            })
                                        })
                                      : null,
                                  (0, i.jsx)(ed, {
                                      participantType: f,
                                      platform: b,
                                      className: ea.titleIcon
                                  }),
                                  null != _ && '' !== _
                                      ? (0, i.jsx)('span', {
                                            className: ea.overlayTitleText,
                                            children: _
                                        })
                                      : null,
                                  x &&
                                      (0, i.jsx)(c.ua7, {
                                          text: es.intl.string(es.t.ZEem6O),
                                          children: (e) =>
                                              (0, i.jsx)(c.tQf, {
                                                  ...e,
                                                  className: ea.secureFramesIcon,
                                                  size: 'xs',
                                                  color: o.Z.colors.HEADER_PRIMARY,
                                                  'aria-label': es.intl.string(es.t.mR9cf3)
                                              })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: ea.statusContainer,
                        children: [
                            null != M &&
                                (0, i.jsx)('div', {
                                    className: ea.status,
                                    children: M
                                }),
                            D,
                            v,
                            j
                        ]
                    })
                ]
            })
        ]
    });
});
e_.displayName = 'CallTileOverlay';
let eE = R.L,
    eh = ec;
