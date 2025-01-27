n.d(t, {
    BP: function () {
        return e_;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    x = n(925329),
    _ = n(649739),
    C = n(574176),
    b = n(833858),
    E = n(223135),
    y = n(37091),
    Z = n(6572),
    T = n(352978),
    N = n(936847),
    A = n(512384),
    j = n(33316),
    w = n(576645),
    P = n(6242),
    R = n(757692),
    O = n(386542),
    M = n(933843),
    k = n(746599),
    L = n(231664),
    D = n(614011),
    U = n(210975),
    V = n(695346),
    F = n(937995),
    z = n(456631),
    B = n(274459),
    W = n(314897),
    G = n(857192),
    H = n(77498),
    Y = n(131951),
    q = n(158776),
    J = n(594174),
    X = n(979651),
    K = n(374129),
    Q = n(639351),
    $ = n(74538),
    ee = n(584729),
    et = n(334374),
    en = n(849171),
    ei = n(607187),
    el = n(624834),
    er = n(833519),
    ea = n(462061),
    es = n(623825),
    eo = n(839662),
    ec = n(981631),
    eu = n(354459),
    ed = n(37113),
    em = n(524484),
    ef = n(65154),
    ep = n(388032),
    eh = n(995544);
let eg = [eu.fO.ACTIVITY, eu.fO.PRESENCE_EMBEDDED_ACTIVITY],
    ev = l.memo((e) => {
        var t, n, r, c, x;
        let { participant: b, onDoubleClick: E, onContextMenu: K, onClick: Q, onMouseDown: es, onKeyDown: ev, className: eS, style: e_, containerStyle: eC, channel: eb, width: eE, inPopout: ey, onVideoResize: eZ, inCall: eT = !1, selected: eN = !1, noBorder: eA = !1, noVideoRender: ej = !1, focused: ew = !1, blocked: eP = !1, ignored: eR = !1, fit: eO = T.L.CONTAIN, paused: eM = !1, pulseSpeakingIndicator: ek = !1, forceIdle: eL = !1, inOverlayPopout: eD = !1 } = e,
            eU = l.useContext(F.h9) || eL,
            [eV, eF] = l.useState(!1),
            ez = V.Sb.useSetting(),
            eB = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
            [eW, eG] = l.useState(!1),
            eH = (0, o.e7)([W.default], () => W.default.getId()),
            eY = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
            eq = b.type === eu.fO.ACTIVITY ? null : null === (t = b.user) || void 0 === t ? void 0 : t.id,
            [eJ] = (0, h.Z)(b.type === eu.fO.ACTIVITY ? [b.applicationId] : []),
            eX = (0, o.e7)([y.Z], () => y.Z.getEnabled()),
            eK = (0, o.e7)([Y.Z], () => null != eq && Y.Z.isLocalVideoDisabled(eq, (0, v.Z)(b.type)), [eq, b.type]),
            eQ = (0, o.e7)([Y.Z], () => (null != eq ? Y.Z.getVideoToggleState(eq, (0, v.Z)(b.type)) : ec.ZUi.NONE), [eq, b.type]),
            e$ = eQ === ec.ZUi.AUTO_PROBING,
            { speaking: e0, ringing: e1, hasVideo: e2 } = (0, eo.Z)(b, eH),
            e3 = (function (e, t, n) {
                var i, l, r, a;
                let s = t.type !== eu.fO.ACTIVITY ? t.user.id : t.applicationId,
                    c = (0, o.cj)([X.Z], () => {
                        var e, t, i;
                        let l = X.Z.getVoiceState(n, s);
                        return {
                            muted: null !== (e = null == l ? void 0 : l.mute) && void 0 !== e && e,
                            deafened: null !== (t = null == l ? void 0 : l.deaf) && void 0 !== t && t,
                            suppressed: null !== (i = null == l ? void 0 : l.suppress) && void 0 !== i && i,
                            voiceChannelId: null == l ? void 0 : l.channelId
                        };
                    }),
                    u = (0, o.cj)(
                        [Y.Z],
                        () => {
                            let n = (0, v.Z)(t.type);
                            return e === s
                                ? {
                                      muted: !1,
                                      deafened: !1
                                  }
                                : {
                                      muted: Y.Z.isLocalMute(s, n),
                                      localVideoDisabled: Y.Z.isLocalVideoDisabled(s, n),
                                      localVideoAutoDisabled: Y.Z.isLocalVideoAutoDisabled(s, n)
                                  };
                        },
                        [e, t.type, s]
                    );
                return {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: u.muted,
                    muted: null !== (r = t.type === eu.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== r && r,
                    deafened: null !== (a = t.type === eu.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== a && a
                };
            })(eH, b, eb.getGuildId()),
            e4 = b.type === eu.fO.STREAM && eq === eH;
        l.useEffect(() => {
            if (e4 && !$.ZP.isPremium(eY) && null != eb.hdStreamingUntil && new Date(eb.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = Y.Z.getGoLiveSource(),
                            t = (0, I.s)(ed.LY.RESOLUTION_720, ed.ws.FPS_30, e);
                        d.Z.setGoLiveSource(t);
                    },
                    new Date(eb.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        });
        let e7 = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
            { hqStreamingState: e9 } = (0, O.k)(s.q.STREAM_HIGH_QUALITY),
            e6 = (0, L.Z)(),
            e8 = e7 && e4 && null != e6,
            e5 = (0, R.o)(b, eY),
            te = (0, P.lL)('CallTile', !0, eY, e5),
            tt = (0, o.e7)([z.Z], () => (b.type === eu.fO.USER && null != eq ? z.Z.getEffectForUserId(eq) : null)),
            tn = (0, o.e7)([X.Z], () => X.Z.getVoicePlatformForChannel(eb.id, null != eq ? eq : ec.lds)),
            { enabled: ti } = (0, g.Z)({ location: 'CallTile' }),
            { enableHangStatus: tl } = C.n.useExperiment({
                guildId: eb.guild_id,
                location: 'VoiceUsers'
            }),
            { showGameIcon: tr } = _.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            ta = tr || tl,
            { hangStatusActivity: ts, gameActivity: to } = (0, o.cj)(
                [q.Z],
                () => ({
                    hangStatusActivity: tl && null != eq ? q.Z.findActivity(eq, (e) => e.type === ec.IIU.HANG_STATUS) : null,
                    gameActivity: ta && null != eq ? q.Z.findActivity(eq, (e) => null != e.application_id && e.type === ec.IIU.PLAYING) : null
                }),
                [tl, eq, ta]
            ),
            tc = (0, o.e7)([H.Z], () => ((null == to ? void 0 : to.application_id) != null ? H.Z.getDetectableGame(to.application_id) : null)),
            tu = (0, o.e7)([p.Z], () => (null != tc && (null == to ? void 0 : to.application_id) != null ? p.Z.getApplication(null == to ? void 0 : to.application_id) : void 0)),
            td = (0, U.wV)({
                userId: eq,
                channelId: eb.id,
                location: 'CallTile'
            }),
            tm = (0, U.zU)({
                streamKey: b.type === eu.fO.STREAM ? b.id : null,
                channelId: eb.id,
                location: 'CallTile'
            }),
            tf = l.useMemo(() => (b.type === eu.fO.STREAM ? null != tm && tm : b.type === eu.fO.USER && null != td && td), [tm, td, b.type]);
        l.useEffect(() => {
            eF(ew);
        }, [ew]);
        let [tp, th] = l.useState(!1),
            tg = l.useCallback(() => {
                !f.Z.useReducedMotion && th(!0);
            }, []);
        (0, w.J)(eb, tg);
        let tv = l.useCallback(() => {
                null != eq && d.Z.toggleLocalMute(eq, ef.Yn.STREAM);
            }, [eq]),
            tS = l.useCallback(() => {
                (0, k.hP)();
            }, []),
            tI = l.useCallback(
                (e) => {
                    null == Q || Q(b, e);
                },
                [Q, b]
            ),
            tx = l.useCallback(
                (e) => {
                    null == E || E(b, e);
                },
                [E, b]
            ),
            t_ = l.useCallback(
                (e) => {
                    null == K || K(b, e);
                },
                [K, b]
            ),
            tC = eU;
        e8 && (tC = !1);
        let tb = null,
            tE = null,
            ty = '';
        switch (b.type) {
            case eu.fO.STREAM:
                (tb = (0, i.jsx)(er.Z, {
                    participant: b,
                    selected: eN,
                    width: eE,
                    fit: eO,
                    onVideoResize: eZ,
                    paused: eM,
                    inPopout: ey,
                    focused: ew,
                    inOverlayPopout: eD
                })),
                    (tE = (0, i.jsx)(er._, {
                        participant: b,
                        selected: eN,
                        width: eE,
                        focused: ew,
                        idle: tC,
                        premiumIndicator: e8 || te.enabled
                    })),
                    (ty = ep.intl.formatToPlainString(ep.t.gHPz3d, { streamerName: b.user.username }));
                break;
            case eu.fO.USER:
                (tb = (0, i.jsx)(ea.Z, {
                    channel: eb,
                    inCall: eT,
                    participant: b,
                    fit: eO,
                    onVideoResize: eZ,
                    paused: eM,
                    selected: eN,
                    width: eE,
                    blocked: eP,
                    ignored: eR,
                    noVideoRender: ej || e$,
                    pulseSpeakingIndicator: ek,
                    inOverlayPopout: eD
                })),
                    (tE = (0, i.jsx)(ea.T, {
                        userId: b.user.id,
                        channelId: eb.id
                    })),
                    (ty = ep.intl.formatToPlainString(ep.t['iC/x/f'], { username: b.user.username }));
                break;
            case eu.fO.ACTIVITY:
                (tb = (0, i.jsx)(en.ZP, {
                    interactible: ew,
                    participant: b,
                    selected: eN,
                    channel: eb,
                    width: eE
                })),
                    (ty = ep.intl.formatToPlainString(ep.t.YCvOsL, { activityName: null == eJ ? void 0 : eJ.name }));
                break;
            case eu.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tb = (0, i.jsx)(el.Z, {
                    participant: b,
                    width: eE,
                    channelId: eb.id
                });
                break;
            case eu.fO.HIDDEN_STREAM:
                tb = (0, i.jsx)(er.Z, {
                    participant: b,
                    selected: eN,
                    width: eE,
                    fit: eO,
                    onVideoResize: eZ,
                    paused: eM,
                    inPopout: ey,
                    focused: ew,
                    inOverlayPopout: eD
                });
        }
        let tZ = l.useRef(null),
            tT = b.type === eu.fO.STREAM ? u.ScreenIcon : u.VideoIcon,
            tN = ti ? eI : ex;
        return (0, i.jsx)(m.Z, {
            section: ec.jXE.VOICE_CHANNEL_TILE,
            children: (0, i.jsxs)('div', {
                className: a()(eh.wrapper, { [eh.ringing]: e1 }, eS),
                style: eC,
                onMouseEnter: () => {
                    eG(!0);
                },
                onMouseLeave: () => {
                    eG(!1);
                },
                children: [
                    tp &&
                        b.type === eu.fO.STREAM &&
                        (0, i.jsx)(j.Z, {
                            baseTileRef: tZ.current,
                            cleanup: () => th(!1)
                        }),
                    (0, i.jsxs)(A.Z, {
                        shakeLocation: em.oZ.VOICE_USER,
                        isShaking: e0,
                        className: eh.tile,
                        children: [
                            (0, i.jsx)(ei.Z, {
                                ref: tZ,
                                className: a()(eh.tile, {
                                    [eh.noBorder]: eA,
                                    [eh.noInteraction]: null == Q,
                                    [eh.idle]: eU
                                }),
                                noBorder: eA,
                                style: e_,
                                participantUserId: eq,
                                children: (0, i.jsxs)(u.ClickableContainer, {
                                    'aria-label': ty,
                                    className: eh.tileChild,
                                    onDoubleClick: tx,
                                    onContextMenu: t_,
                                    onClick: tI,
                                    onMouseDown: es,
                                    onKeyDown: ev,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != tt && null != eq
                                            ? (0, i.jsx)(B.Z, {
                                                  voiceChannelEffect: tt,
                                                  onComplete: () => (0, z.H)(eq),
                                                  userId: eq
                                              })
                                            : null,
                                        b.type === eu.fO.USER
                                            ? (0, i.jsx)('div', {
                                                  className: eh.voiceChannelEffectsContainer,
                                                  children: (0, i.jsx)(S.Z, {
                                                      userId: eq,
                                                      channelId: eb.id,
                                                      guildId: eb.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (c = null == tZ ? void 0 : null === (n = tZ.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                          height: null !== (x = null == tZ ? void 0 : null === (r = tZ.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== x ? x : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tb,
                                        e8
                                            ? (0, i.jsx)(D.W, {
                                                  onPlayed: tS,
                                                  played: e9.hqStreamingFrameAnimationPlayed
                                              })
                                            : null,
                                        eA
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: eh.indicators,
                                                  children: tE
                                              }),
                                        eN
                                            ? (0, i.jsx)('div', {
                                                  className: eh.selectedScreen,
                                                  children: (0, i.jsx)(tT, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: eh.selectedIcon
                                                  })
                                              })
                                            : null,
                                        eg.includes(b.type)
                                            ? null
                                            : (0, i.jsx)(tN, {
                                                  focused: ew,
                                                  width: eE,
                                                  inCall: eT,
                                                  participantType: b.type,
                                                  hasVideo: null != e2 && e2,
                                                  ...e3,
                                                  idle: eU,
                                                  platform: tn,
                                                  title: (0, ee.Z)(eb, b),
                                                  blocked: eP,
                                                  ignored: eR,
                                                  localVideoDisabled: eK,
                                                  videoToggleState: eQ,
                                                  hideAudioIcon: e4,
                                                  onContextMenu: t_,
                                                  onToggleMute: tv,
                                                  participantUserId: eq,
                                                  hangStatusActivity: ts,
                                                  application: tu,
                                                  speaking: e0,
                                                  secureFramesVerified: tf
                                              }),
                                        b.type === eu.fO.USER && eX
                                            ? (0, i.jsx)(Z.Z, {
                                                  userId: b.id,
                                                  channelId: eb.id
                                              })
                                            : null,
                                        eT && !eA
                                            ? (0, i.jsx)('div', {
                                                  className: a()(eh.border, {
                                                      [eh.voiceChannelEffect]: !ew && null != tt,
                                                      [eh.speaking]: e0 && !ew
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            ez &&
                                eB &&
                                eW &&
                                (0, i.jsx)(et.Z, {
                                    currentUserId: eH,
                                    participant: b
                                }),
                            (0, i.jsx)(N.Z, {
                                isFiring: eV,
                                callTileRef: tZ.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function eS(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === eu.fO.STREAM)
        return n === eu.wR.XBOX
            ? (0, i.jsx)(Q.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case eu.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case eu.wR.XBOX:
            return (0, i.jsx)(Q.Z, { className: l });
        case eu.wR.PLAYSTATION:
            return (0, i.jsx)(K.Z, { className: l });
        default:
            return null;
    }
}
ev.displayName = 'CallTile';
let eI = l.memo((e) => {
    let { idle: t, title: n, width: l, videoToggleState: r, blocked: s, ignored: d, participantType: m, participantUserId: f, platform: p, secureFramesVerified: h } = e,
        g = (0, o.e7)([Y.Z], () => null != f && Y.Z.isLocalVideoAutoDisabled(f, (0, v.Z)(m)), [f, m]);
    return (0, i.jsxs)('div', {
        className: eh.overlayContainer,
        children: [
            (0, i.jsx)('div', {
                className: a()(eh.overlayTop, { [eh.small]: l < 195 }),
                children:
                    g || r === ec.ZUi.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)('div', {
                                  className: eh.status,
                                  children: (0, i.jsx)(u.VideoSlashIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, i.jsxs)('div', {
                                  className: a()(eh.overlayTitle, eh.videoDisabledTitle),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: eh.status,
                                          children: (0, i.jsx)(u.VideoSlashIcon, {
                                              size: 'md',
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, i.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          className: eh.overlayTitleText,
                                          children: ep.intl.string(ep.t.m2Hyj4)
                                      })
                                  ]
                              })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: a()(eh.overlayBottom, { [eh.small]: l < 195 }),
                children: [
                    (0, i.jsxs)(u.Text, {
                        className: a()(eh.overlayTitle, { [eh.idle]: t && !1 }),
                        color: 'none',
                        variant: 'text-md/normal',
                        children: [
                            s
                                ? (0, i.jsx)('div', {
                                      className: eh.blocked,
                                      children: (0, i.jsx)(u.DenyIcon, {
                                          size: 'lg',
                                          className: eh.blockedIcon,
                                          color: c.Z.unsafe_rawColors.RED_400.css
                                      })
                                  })
                                : null,
                            d
                                ? (0, i.jsx)('div', {
                                      className: eh.ignored,
                                      children: (0, i.jsx)(u.EyeSlashIcon, {
                                          size: 'lg',
                                          className: eh.blockedIcon
                                      })
                                  })
                                : null,
                            (0, i.jsx)(eS, {
                                participantType: m,
                                platform: p,
                                className: eh.titleIcon
                            }),
                            null != n && '' !== n
                                ? (0, i.jsx)('span', {
                                      className: eh.overlayTitleText,
                                      children: n
                                  })
                                : null,
                            h &&
                                (0, i.jsx)(u.Tooltip, {
                                    text: ep.intl.string(ep.t.ZEem6O),
                                    children: (e) =>
                                        (0, i.jsx)(u.ShieldLockIcon, {
                                            ...e,
                                            className: eh.secureFramesIcon,
                                            size: 'xs',
                                            color: c.Z.colors.HEADER_PRIMARY,
                                            'aria-label': ep.intl.string(ep.t.mR9cf3)
                                        })
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: a()(eh.overlayButtonContainer, { [eh.idle]: t && !1 }),
                        children: (0, i.jsx)(u.Clickable, {
                            className: eh.overlayButton,
                            children: (0, i.jsx)(u.MoreHorizontalIcon, {})
                        })
                    })
                ]
            })
        ]
    });
});
eI.displayName = 'CallTileOverlayV2';
let ex = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: r, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: g, videoToggleState: S, focused: I, blocked: _, ignored: C, hideAudioIcon: y, participantType: Z, participantUserId: T, onContextMenu: N, onToggleMute: A, platform: j, hangStatusActivity: w, application: P, speaking: R, secureFramesVerified: O } = e,
        M = null,
        k = null,
        L = null,
        D = null,
        U = (0, es.K)(f),
        V = (0, es.N)(f),
        F = (0, o.e7)([Y.Z], () => null != T && Y.Z.isLocalVideoAutoDisabled(T, (0, v.Z)(Z)), [T, Z]),
        z = (0, u.useRedesignIconContext)().enabled;
    if (!y) {
        if (l && Z === eu.fO.STREAM && p && !I)
            M = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: a()(eh.interactive, eh.toggleMute, eh.status),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || Z !== eu.fO.STREAM || !p || U || I) {
            if (z) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : r ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (M = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                M = (0, i.jsx)(e, { color: 'currentColor' });
            }
            M =
                null != M
                    ? (0, i.jsx)('div', {
                          className: eh.status,
                          children: M
                      })
                    : null;
        } else
            M = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: a()(eh.interactive, eh.toggleMute, eh.status),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && Y.Z.supports(ef.AN.VIDEO)) || !p
            ? h &&
              p &&
              g &&
              !F &&
              (k = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eh.localMuteStrikethrough
              }))
            : (k = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        Z === eu.fO.STREAM &&
            !I &&
            p &&
            (L = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N(e);
                        },
                        className: a()(eh.status, eh.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        Z === eu.fO.USER && null != w
            ? (D = (0, i.jsx)(u.Tooltip, {
                  text: (0, b.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(eh.hangStatusContainer, { [eh.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(E.Z, {
                              hangStatusActivity: w,
                              className: eh.hangStatusIcon,
                              animate: R
                          })
                      })
              }))
            : Z === eu.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                  text: ep.intl.formatToPlainString(ep.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(eh.hangStatusContainer, { [eh.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(x.Z, {
                              className: eh.hangStatusIcon,
                              game: P,
                              size: x.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eh.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: a()(eh.overlayTop, { [eh.small]: f < 195 }),
                    children:
                        F || S === ec.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eh.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: a()(eh.overlayTitle, eh.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: eh.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: eh.overlayTitleText,
                                              children: ep.intl.string(ep.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: a()(eh.overlayBottom, { [eh.small]: f < 195 }),
                    children: [
                        V
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: a()(eh.overlayTitle, { [eh.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      _
                                          ? (0, i.jsx)('div', {
                                                className: eh.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: eh.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      C
                                          ? (0, i.jsx)('div', {
                                                className: eh.ignored,
                                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                                    size: 'lg',
                                                    className: eh.blockedIcon
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eS, {
                                          participantType: Z,
                                          platform: j,
                                          className: eh.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: eh.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      O &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: ep.intl.string(ep.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: eh.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ep.intl.string(ep.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eh.statusContainer,
                            children: [
                                null != k &&
                                    (0, i.jsx)('div', {
                                        className: eh.status,
                                        children: k
                                    }),
                                M,
                                L,
                                D
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
ex.displayName = 'CallTileOverlay';
let e_ = T.L;
t.ZP = ev;
