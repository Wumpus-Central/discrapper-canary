n.d(t, {
    BP: function () {
        return eI;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    m = n(410575),
    f = n(607070),
    p = n(812206),
    h = n(835473),
    g = n(682901),
    v = n(414910),
    S = n(415635),
    I = n(578976),
    _ = n(925329),
    x = n(649739),
    E = n(574176),
    C = n(833858),
    y = n(223135),
    Z = n(37091),
    b = n(6572),
    T = n(352978),
    N = n(936847),
    A = n(512384),
    j = n(33316),
    w = n(576645),
    P = n(6242),
    R = n(757692),
    M = n(386542),
    O = n(933843),
    L = n(746599),
    k = n(231664),
    D = n(614011),
    U = n(210975),
    V = n(695346),
    F = n(937995),
    B = n(456631),
    W = n(274459),
    z = n(314897),
    G = n(857192),
    H = n(77498),
    Y = n(131951),
    J = n(158776),
    q = n(594174),
    X = n(979651),
    K = n(374129),
    Q = n(639351),
    $ = n(74538),
    ee = n(584729),
    et = n(334374),
    en = n(849171),
    ei = n(607187),
    el = n(833519),
    ea = n(462061),
    er = n(623825),
    es = n(839662),
    eo = n(981631),
    ec = n(354459),
    eu = n(37113),
    ed = n(524484),
    em = n(65154),
    ef = n(388032),
    ep = n(995544);
let eh = l.memo((e) => {
    var t, n, a, c, _;
    let { participant: C, onDoubleClick: y, onContextMenu: K, onClick: Q, onMouseDown: er, onKeyDown: eh, className: eg, style: eI, containerStyle: e_, channel: ex, width: eE, inPopout: eC, onVideoResize: ey, inCall: eZ = !1, selected: eb = !1, noBorder: eT = !1, noVideoRender: eN = !1, focused: eA = !1, blocked: ej = !1, ignored: ew = !1, fit: eP = T.L.CONTAIN, paused: eR = !1, pulseSpeakingIndicator: eM = !1, forceIdle: eO = !1, inOverlayPopout: eL = !1 } = e,
        ek = l.useContext(F.h9) || eO,
        [eD, eU] = l.useState(!1),
        eV = V.Sb.useSetting(),
        eF = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
        [eB, eW] = l.useState(!1),
        ez = (0, o.e7)([z.default], () => z.default.getId()),
        eG = (0, o.e7)([q.default], () => q.default.getCurrentUser()),
        eH = C.type === ec.fO.ACTIVITY ? null : null === (t = C.user) || void 0 === t ? void 0 : t.id,
        [eY] = (0, h.Z)(C.type === ec.fO.ACTIVITY ? [C.id] : []),
        eJ = (0, o.e7)([Z.Z], () => Z.Z.getEnabled()),
        eq = (0, o.e7)([Y.Z], () => null != eH && Y.Z.isLocalVideoDisabled(eH, (0, v.Z)(C.type)), [eH, C.type]),
        eX = (0, o.e7)([Y.Z], () => (null != eH ? Y.Z.getVideoToggleState(eH, (0, v.Z)(C.type)) : eo.ZUi.NONE), [eH, C.type]),
        eK = eX === eo.ZUi.AUTO_PROBING,
        { speaking: eQ, ringing: e$, hasVideo: e0 } = (0, es.Z)(C, ez),
        e1 = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([X.Z], () => {
                    var e, i, l;
                    let a = X.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [Y.Z],
                    () => {
                        let n = (0, v.Z)(t.type),
                            i = t.type !== ec.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: Y.Z.isLocalMute(i, n),
                                  localVideoDisabled: Y.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: Y.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: s.muted,
                serverDeafened: s.deafened,
                suppressed: s.suppressed,
                localMuted: c.muted,
                muted: null !== (a = t.type === ec.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (r = t.type === ec.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
            };
        })(ez, C, ex.getGuildId()),
        e2 = C.type === ec.fO.STREAM && eH === ez;
    l.useEffect(() => {
        if (e2 && !$.ZP.isPremium(eG) && null != ex.hdStreamingUntil && new Date(ex.hdStreamingUntil) > new Date()) {
            let e = setTimeout(
                () => {
                    let e = Y.Z.getGoLiveSource(),
                        t = (0, I.s)(eu.LY.RESOLUTION_720, eu.ws.FPS_30, e);
                    d.Z.setGoLiveSource(t);
                },
                new Date(ex.hdStreamingUntil).getTime() - Date.now()
            );
            return () => clearTimeout(e);
        }
    });
    let e3 = (0, O.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: e9 } = (0, M.k)(s.q.STREAM_HIGH_QUALITY),
        e4 = (0, k.Z)(),
        e7 = e3 && e2 && null != e4,
        e6 = (0, R.o)(C, eG),
        e8 = (0, P.lL)('CallTile', !0, eG, e6),
        e5 = (0, o.e7)([B.Z], () => (C.type === ec.fO.USER && null != eH ? B.Z.getEffectForUserId(eH) : null)),
        te = (0, o.e7)([X.Z], () => X.Z.getVoicePlatformForChannel(ex.id, null != eH ? eH : eo.lds)),
        { enabled: tt } = (0, g.Z)({ location: 'CallTile' }),
        { enableHangStatus: tn } = E.n.useExperiment({
            guildId: ex.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: ti } = x.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        tl = ti || tn,
        { hangStatusActivity: ta, gameActivity: tr } = (0, o.cj)(
            [J.Z],
            () => ({
                hangStatusActivity: tn && null != eH ? J.Z.findActivity(eH, (e) => e.type === eo.IIU.HANG_STATUS) : null,
                gameActivity: tl && null != eH ? J.Z.findActivity(eH, (e) => null != e.application_id && e.type === eo.IIU.PLAYING) : null
            }),
            [tn, eH, tl]
        ),
        ts = (0, o.e7)([H.Z], () => ((null == tr ? void 0 : tr.application_id) != null ? H.Z.getDetectableGame(tr.application_id) : null)),
        to = (0, o.e7)([p.Z], () => (null != ts && (null == tr ? void 0 : tr.application_id) != null ? p.Z.getApplication(null == tr ? void 0 : tr.application_id) : void 0)),
        tc = (0, U.wV)({
            userId: eH,
            channelId: ex.id,
            location: 'CallTile'
        }),
        tu = (0, U.zU)({
            streamKey: C.type === ec.fO.STREAM ? C.id : null,
            channelId: ex.id,
            location: 'CallTile'
        }),
        td = l.useMemo(() => (C.type === ec.fO.STREAM ? null != tu && tu : C.type === ec.fO.USER && null != tc && tc), [tu, tc, C.type]);
    l.useEffect(() => {
        eU(eA);
    }, [eA]);
    let [tm, tf] = l.useState(!1),
        tp = l.useCallback(() => {
            !f.Z.useReducedMotion && tf(!0);
        }, []);
    (0, w.J)(ex, tp);
    let th = l.useCallback(() => {
            null != eH && d.Z.toggleLocalMute(eH, em.Yn.STREAM);
        }, [eH]),
        tg = l.useCallback(() => {
            (0, L.hP)();
        }, []),
        tv = l.useCallback(
            (e) => {
                null == Q || Q(C, e);
            },
            [Q, C]
        ),
        tS = l.useCallback(
            (e) => {
                null == y || y(C, e);
            },
            [y, C]
        ),
        tI = l.useCallback(
            (e) => {
                null == K || K(C, e);
            },
            [K, C]
        ),
        t_ = ek;
    e7 && (t_ = !1);
    let tx = null,
        tE = null,
        tC = '';
    switch (C.type) {
        case ec.fO.STREAM:
            (tx = (0, i.jsx)(el.Z, {
                participant: C,
                selected: eb,
                width: eE,
                fit: eP,
                onVideoResize: ey,
                paused: eR,
                inPopout: eC,
                focused: eA,
                inOverlayPopout: eL
            })),
                (tE = (0, i.jsx)(el._, {
                    participant: C,
                    selected: eb,
                    width: eE,
                    focused: eA,
                    idle: t_,
                    premiumIndicator: e7 || e8.enabled
                })),
                (tC = ef.intl.formatToPlainString(ef.t.gHPz3d, { streamerName: C.user.username }));
            break;
        case ec.fO.USER:
            (tx = (0, i.jsx)(ea.Z, {
                channel: ex,
                inCall: eZ,
                participant: C,
                fit: eP,
                onVideoResize: ey,
                paused: eR,
                selected: eb,
                width: eE,
                blocked: ej,
                ignored: ew,
                noVideoRender: eN || eK,
                pulseSpeakingIndicator: eM,
                inOverlayPopout: eL
            })),
                (tE = (0, i.jsx)(ea.T, {
                    userId: C.user.id,
                    channelId: ex.id
                })),
                (tC = ef.intl.formatToPlainString(ef.t['iC/x/f'], { username: C.user.username }));
            break;
        case ec.fO.ACTIVITY:
            (tx = (0, i.jsx)(en.ZP, {
                interactible: eA,
                participant: C,
                selected: eb,
                channel: ex,
                width: eE
            })),
                (tC = ef.intl.formatToPlainString(ef.t.YCvOsL, { activityName: null == eY ? void 0 : eY.name }));
            break;
        case ec.fO.HIDDEN_STREAM:
            tx = (0, i.jsx)(el.Z, {
                participant: C,
                selected: eb,
                width: eE,
                fit: eP,
                onVideoResize: ey,
                paused: eR,
                inPopout: eC,
                focused: eA,
                inOverlayPopout: eL
            });
    }
    let ty = l.useRef(null),
        tZ = C.type === ec.fO.STREAM ? u.ScreenIcon : u.VideoIcon,
        tb = tt ? ev : eS;
    return (0, i.jsx)(m.Z, {
        section: eo.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: r()(ep.wrapper, { [ep.ringing]: e$ }, eg),
            style: e_,
            onMouseEnter: () => {
                eW(!0);
            },
            onMouseLeave: () => {
                eW(!1);
            },
            children: [
                tm &&
                    C.type === ec.fO.STREAM &&
                    (0, i.jsx)(j.Z, {
                        baseTileRef: ty.current,
                        cleanup: () => tf(!1)
                    }),
                (0, i.jsxs)(A.Z, {
                    shakeLocation: ed.oZ.VOICE_USER,
                    isShaking: eQ,
                    className: ep.tile,
                    children: [
                        (0, i.jsx)(ei.Z, {
                            ref: ty,
                            className: r()(ep.tile, {
                                [ep.noBorder]: eT,
                                [ep.noInteraction]: null == Q,
                                [ep.idle]: ek
                            }),
                            noBorder: eT,
                            style: eI,
                            participantUserId: eH,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tC,
                                className: ep.tileChild,
                                onDoubleClick: tS,
                                onContextMenu: tI,
                                onClick: tv,
                                onMouseDown: er,
                                onKeyDown: eh,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e5 && null != eH
                                        ? (0, i.jsx)(W.Z, {
                                              voiceChannelEffect: e5,
                                              onComplete: () => (0, B.H)(eH),
                                              userId: eH
                                          })
                                        : null,
                                    C.type === ec.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: ep.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(S.Z, {
                                                  userId: eH,
                                                  channelId: ex.id,
                                                  guildId: ex.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == ty ? void 0 : null === (n = ty.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (_ = null == ty ? void 0 : null === (a = ty.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== _ ? _ : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tx,
                                    e7
                                        ? (0, i.jsx)(D.W, {
                                              onPlayed: tg,
                                              played: e9.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    eT
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: ep.indicators,
                                              children: tE
                                          }),
                                    eb
                                        ? (0, i.jsx)('div', {
                                              className: ep.selectedScreen,
                                              children: (0, i.jsx)(tZ, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: ep.selectedIcon
                                              })
                                          })
                                        : null,
                                    C.type !== ec.fO.ACTIVITY
                                        ? (0, i.jsx)(tb, {
                                              focused: eA,
                                              width: eE,
                                              inCall: eZ,
                                              participantType: C.type,
                                              hasVideo: null != e0 && e0,
                                              ...e1,
                                              idle: ek,
                                              platform: te,
                                              title: (0, ee.Z)(ex, C),
                                              blocked: ej,
                                              ignored: ew,
                                              localVideoDisabled: eq,
                                              videoToggleState: eX,
                                              hideAudioIcon: e2,
                                              onContextMenu: tI,
                                              onToggleMute: th,
                                              participantUserId: eH,
                                              hangStatusActivity: ta,
                                              application: to,
                                              speaking: eQ,
                                              secureFramesVerified: td
                                          })
                                        : null,
                                    C.type === ec.fO.USER && eJ
                                        ? (0, i.jsx)(b.Z, {
                                              userId: C.id,
                                              channelId: ex.id
                                          })
                                        : null,
                                    eZ && !eT
                                        ? (0, i.jsx)('div', {
                                              className: r()(ep.border, {
                                                  [ep.voiceChannelEffect]: !eA && null != e5,
                                                  [ep.speaking]: eQ && !eA
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eV &&
                            eF &&
                            eB &&
                            (0, i.jsx)(et.Z, {
                                currentUserId: ez,
                                participant: C
                            }),
                        (0, i.jsx)(N.Z, {
                            isFiring: eD,
                            callTileRef: ty.current
                        })
                    ]
                })
            ]
        })
    });
});
function eg(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === ec.fO.STREAM)
        return n === ec.wR.XBOX
            ? (0, i.jsx)(Q.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case ec.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case ec.wR.XBOX:
            return (0, i.jsx)(Q.Z, { className: l });
        case ec.wR.PLAYSTATION:
            return (0, i.jsx)(K.Z, { className: l });
        default:
            return null;
    }
}
eh.displayName = 'CallTile';
let ev = l.memo((e) => {
    let { idle: t, title: n, width: l, videoToggleState: a, blocked: s, ignored: d, participantType: m, participantUserId: f, platform: p, secureFramesVerified: h } = e,
        g = (0, o.e7)([Y.Z], () => null != f && Y.Z.isLocalVideoAutoDisabled(f, (0, v.Z)(m)), [f, m]);
    return (0, i.jsxs)('div', {
        className: ep.overlayContainer,
        children: [
            (0, i.jsx)('div', {
                className: r()(ep.overlayTop, { [ep.small]: l < 195 }),
                children:
                    g || a === eo.ZUi.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)('div', {
                                  className: ep.status,
                                  children: (0, i.jsx)(u.VideoSlashIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, i.jsxs)('div', {
                                  className: r()(ep.overlayTitle, ep.videoDisabledTitle),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: ep.status,
                                          children: (0, i.jsx)(u.VideoSlashIcon, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, i.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          className: ep.overlayTitleText,
                                          children: ef.intl.string(ef.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: r()(ep.overlayBottom, { [ep.small]: l < 195 }),
                children: [
                    (0, i.jsxs)(u.Text, {
                        className: r()(ep.overlayTitle, { [ep.idle]: t && !1 }),
                        color: 'none',
                        variant: 'text-md/normal',
                        children: [
                            s
                                ? (0, i.jsx)('div', {
                                      className: ep.blocked,
                                      children: (0, i.jsx)(u.DenyIcon, {
                                          size: 'lg',
                                          className: ep.blockedIcon,
                                          color: c.Z.unsafe_rawColors.RED_400.css
                                      })
                                  })
                                : null,
                            d
                                ? (0, i.jsx)('div', {
                                      className: ep.ignored,
                                      children: (0, i.jsx)(u.EyeSlashIcon, {
                                          size: 'lg',
                                          className: ep.blockedIcon
                                      })
                                  })
                                : null,
                            (0, i.jsx)(eg, {
                                participantType: m,
                                platform: p,
                                className: ep.titleIcon
                            }),
                            null != n && '' !== n
                                ? (0, i.jsx)('span', {
                                      className: ep.overlayTitleText,
                                      children: n
                                  })
                                : null,
                            h &&
                                (0, i.jsx)(u.Tooltip, {
                                    text: ef.intl.string(ef.t.ZEem6O),
                                    children: (e) =>
                                        (0, i.jsx)(u.ShieldLockIcon, {
                                            ...e,
                                            className: ep.secureFramesIcon,
                                            size: 'xs',
                                            color: c.Z.colors.HEADER_PRIMARY,
                                            'aria-label': ef.intl.string(ef.t.mR9cf3)
                                        })
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(ep.overlayButtonContainer, { [ep.idle]: t && !1 }),
                        children: (0, i.jsx)(u.Clickable, {
                            className: ep.overlayButton,
                            children: (0, i.jsx)(u.MoreHorizontalIcon, {})
                        })
                    })
                ]
            })
        ]
    });
});
ev.displayName = 'CallTileOverlayV2';
let eS = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: g, videoToggleState: S, focused: I, blocked: x, ignored: E, hideAudioIcon: Z, participantType: b, participantUserId: T, onContextMenu: N, onToggleMute: A, platform: j, hangStatusActivity: w, application: P, speaking: R, secureFramesVerified: M } = e,
        O = null,
        L = null,
        k = null,
        D = null,
        U = (0, er.K)(f),
        V = (0, er.N)(f),
        F = (0, o.e7)([Y.Z], () => null != T && Y.Z.isLocalVideoAutoDisabled(T, (0, v.Z)(b)), [T, b]),
        B = (0, u.useRedesignIconContext)().enabled;
    if (!Z) {
        if (l && b === ec.fO.STREAM && p && !I)
            O = (0, i.jsx)(u.Tooltip, {
                text: ef.intl.string(ef.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(ep.interactive, ep.toggleMute, ep.status),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || b !== ec.fO.STREAM || !p || U || I) {
            if (B) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (O = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                O = (0, i.jsx)(e, { color: 'currentColor' });
            }
            O =
                null != O
                    ? (0, i.jsx)('div', {
                          className: ep.status,
                          children: O
                      })
                    : null;
        } else
            O = (0, i.jsx)(u.Tooltip, {
                text: ef.intl.string(ef.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(ep.interactive, ep.toggleMute, ep.status),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && Y.Z.supports(em.AN.VIDEO)) || !p
            ? h &&
              p &&
              g &&
              !F &&
              (L = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: ep.localMuteStrikethrough
              }))
            : (L = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        b === ec.fO.STREAM &&
            !I &&
            p &&
            (k = (0, i.jsx)(u.Tooltip, {
                text: ef.intl.string(ef.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N(e);
                        },
                        className: r()(ep.status, ep.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        b === ec.fO.USER && null != w
            ? (D = (0, i.jsx)(u.Tooltip, {
                  text: (0, C.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(ep.hangStatusContainer, { [ep.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(y.Z, {
                              hangStatusActivity: w,
                              className: ep.hangStatusIcon,
                              animate: R
                          })
                      })
              }))
            : b === ec.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                  text: ef.intl.formatToPlainString(ef.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(ep.hangStatusContainer, { [ep.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(_.Z, {
                              className: ep.hangStatusIcon,
                              game: P,
                              size: _.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: ep.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(ep.overlayTop, { [ep.small]: f < 195 }),
                    children:
                        F || S === eo.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: ep.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: r()(ep.overlayTitle, ep.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: ep.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: ep.overlayTitleText,
                                              children: ef.intl.string(ef.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: r()(ep.overlayBottom, { [ep.small]: f < 195 }),
                    children: [
                        V
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(ep.overlayTitle, { [ep.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      x
                                          ? (0, i.jsx)('div', {
                                                className: ep.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: ep.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      E
                                          ? (0, i.jsx)('div', {
                                                className: ep.ignored,
                                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                                    size: 'lg',
                                                    className: ep.blockedIcon
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eg, {
                                          participantType: b,
                                          platform: j,
                                          className: ep.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: ep.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      M &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: ef.intl.string(ef.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: ep.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ef.intl.string(ef.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: ep.statusContainer,
                            children: [
                                null != L &&
                                    (0, i.jsx)('div', {
                                        className: ep.status,
                                        children: L
                                    }),
                                O,
                                k,
                                D
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
eS.displayName = 'CallTileOverlay';
let eI = T.L;
t.ZP = eh;
