n.d(t, {
    BP: function () {
        return ex;
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
    I = n(415635),
    S = n(578976),
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
    el = n(624834),
    ea = n(833519),
    er = n(462061),
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
        var t, n, a, c, _;
        let { participant: C, onDoubleClick: y, onContextMenu: K, onClick: Q, onMouseDown: es, onKeyDown: ev, className: eI, style: ex, containerStyle: eE, channel: eC, width: ey, inPopout: eZ, onVideoResize: eb, inCall: eT = !1, selected: eN = !1, noBorder: eA = !1, noVideoRender: ej = !1, focused: ew = !1, blocked: eP = !1, ignored: eR = !1, fit: eM = T.L.CONTAIN, paused: eO = !1, pulseSpeakingIndicator: eL = !1, forceIdle: ek = !1, inOverlayPopout: eD = !1 } = e,
            eU = l.useContext(F.h9) || ek,
            [eV, eF] = l.useState(!1),
            eB = V.Sb.useSetting(),
            eW = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
            [ez, eG] = l.useState(!1),
            eH = (0, o.e7)([z.default], () => z.default.getId()),
            eY = (0, o.e7)([q.default], () => q.default.getCurrentUser()),
            eJ = C.type === eu.fO.ACTIVITY ? null : null === (t = C.user) || void 0 === t ? void 0 : t.id,
            [eq] = (0, h.Z)(C.type === eu.fO.ACTIVITY ? [C.applicationId] : []),
            eX = (0, o.e7)([Z.Z], () => Z.Z.getEnabled()),
            eK = (0, o.e7)([Y.Z], () => null != eJ && Y.Z.isLocalVideoDisabled(eJ, (0, v.Z)(C.type)), [eJ, C.type]),
            eQ = (0, o.e7)([Y.Z], () => (null != eJ ? Y.Z.getVideoToggleState(eJ, (0, v.Z)(C.type)) : ec.ZUi.NONE), [eJ, C.type]),
            e$ = eQ === ec.ZUi.AUTO_PROBING,
            { speaking: e0, ringing: e1, hasVideo: e2 } = (0, eo.Z)(C, eH),
            e3 = (function (e, t, n) {
                var i, l, a, r;
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
                    muted: null !== (a = t.type === eu.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                    deafened: null !== (r = t.type === eu.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
                };
            })(eH, C, eC.getGuildId()),
            e4 = C.type === eu.fO.STREAM && eJ === eH;
        l.useEffect(() => {
            if (e4 && !$.ZP.isPremium(eY) && null != eC.hdStreamingUntil && new Date(eC.hdStreamingUntil) > new Date()) {
                let e = setTimeout(
                    () => {
                        let e = Y.Z.getGoLiveSource(),
                            t = (0, S.s)(ed.LY.RESOLUTION_720, ed.ws.FPS_30, e);
                        d.Z.setGoLiveSource(t);
                    },
                    new Date(eC.hdStreamingUntil).getTime() - Date.now()
                );
                return () => clearTimeout(e);
            }
        });
        let e9 = (0, O.So)(s.q.STREAM_HIGH_QUALITY),
            { hqStreamingState: e7 } = (0, M.k)(s.q.STREAM_HIGH_QUALITY),
            e6 = (0, k.Z)(),
            e8 = e9 && e4 && null != e6,
            e5 = (0, R.o)(C, eY),
            te = (0, P.lL)('CallTile', !0, eY, e5),
            tt = (0, o.e7)([B.Z], () => (C.type === eu.fO.USER && null != eJ ? B.Z.getEffectForUserId(eJ) : null)),
            tn = (0, o.e7)([X.Z], () => X.Z.getVoicePlatformForChannel(eC.id, null != eJ ? eJ : ec.lds)),
            { enabled: ti } = (0, g.Z)({ location: 'CallTile' }),
            { enableHangStatus: tl } = E.n.useExperiment({
                guildId: eC.guild_id,
                location: 'VoiceUsers'
            }),
            { showGameIcon: ta } = x.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
            tr = ta || tl,
            { hangStatusActivity: ts, gameActivity: to } = (0, o.cj)(
                [J.Z],
                () => ({
                    hangStatusActivity: tl && null != eJ ? J.Z.findActivity(eJ, (e) => e.type === ec.IIU.HANG_STATUS) : null,
                    gameActivity: tr && null != eJ ? J.Z.findActivity(eJ, (e) => null != e.application_id && e.type === ec.IIU.PLAYING) : null
                }),
                [tl, eJ, tr]
            ),
            tc = (0, o.e7)([H.Z], () => ((null == to ? void 0 : to.application_id) != null ? H.Z.getDetectableGame(to.application_id) : null)),
            tu = (0, o.e7)([p.Z], () => (null != tc && (null == to ? void 0 : to.application_id) != null ? p.Z.getApplication(null == to ? void 0 : to.application_id) : void 0)),
            td = (0, U.wV)({
                userId: eJ,
                channelId: eC.id,
                location: 'CallTile'
            }),
            tm = (0, U.zU)({
                streamKey: C.type === eu.fO.STREAM ? C.id : null,
                channelId: eC.id,
                location: 'CallTile'
            }),
            tf = l.useMemo(() => (C.type === eu.fO.STREAM ? null != tm && tm : C.type === eu.fO.USER && null != td && td), [tm, td, C.type]);
        l.useEffect(() => {
            eF(ew);
        }, [ew]);
        let [tp, th] = l.useState(!1),
            tg = l.useCallback(() => {
                !f.Z.useReducedMotion && th(!0);
            }, []);
        (0, w.J)(eC, tg);
        let tv = l.useCallback(() => {
                null != eJ && d.Z.toggleLocalMute(eJ, ef.Yn.STREAM);
            }, [eJ]),
            tI = l.useCallback(() => {
                (0, L.hP)();
            }, []),
            tS = l.useCallback(
                (e) => {
                    null == Q || Q(C, e);
                },
                [Q, C]
            ),
            t_ = l.useCallback(
                (e) => {
                    null == y || y(C, e);
                },
                [y, C]
            ),
            tx = l.useCallback(
                (e) => {
                    null == K || K(C, e);
                },
                [K, C]
            ),
            tE = eU;
        e8 && (tE = !1);
        let tC = null,
            ty = null,
            tZ = '';
        switch (C.type) {
            case eu.fO.STREAM:
                (tC = (0, i.jsx)(ea.Z, {
                    participant: C,
                    selected: eN,
                    width: ey,
                    fit: eM,
                    onVideoResize: eb,
                    paused: eO,
                    inPopout: eZ,
                    focused: ew,
                    inOverlayPopout: eD
                })),
                    (ty = (0, i.jsx)(ea._, {
                        participant: C,
                        selected: eN,
                        width: ey,
                        focused: ew,
                        idle: tE,
                        premiumIndicator: e8 || te.enabled
                    })),
                    (tZ = ep.intl.formatToPlainString(ep.t.gHPz3d, { streamerName: C.user.username }));
                break;
            case eu.fO.USER:
                (tC = (0, i.jsx)(er.Z, {
                    channel: eC,
                    inCall: eT,
                    participant: C,
                    fit: eM,
                    onVideoResize: eb,
                    paused: eO,
                    selected: eN,
                    width: ey,
                    blocked: eP,
                    ignored: eR,
                    noVideoRender: ej || e$,
                    pulseSpeakingIndicator: eL,
                    inOverlayPopout: eD
                })),
                    (ty = (0, i.jsx)(er.T, {
                        userId: C.user.id,
                        channelId: eC.id
                    })),
                    (tZ = ep.intl.formatToPlainString(ep.t['iC/x/f'], { username: C.user.username }));
                break;
            case eu.fO.ACTIVITY:
                (tC = (0, i.jsx)(en.ZP, {
                    interactible: ew,
                    participant: C,
                    selected: eN,
                    channel: eC,
                    width: ey
                })),
                    (tZ = ep.intl.formatToPlainString(ep.t.YCvOsL, { activityName: null == eq ? void 0 : eq.name }));
                break;
            case eu.fO.PRESENCE_EMBEDDED_ACTIVITY:
                tC = (0, i.jsx)(el.Z, {
                    participant: C,
                    width: ey,
                    channelId: eC.id
                });
                break;
            case eu.fO.HIDDEN_STREAM:
                tC = (0, i.jsx)(ea.Z, {
                    participant: C,
                    selected: eN,
                    width: ey,
                    fit: eM,
                    onVideoResize: eb,
                    paused: eO,
                    inPopout: eZ,
                    focused: ew,
                    inOverlayPopout: eD
                });
        }
        let tb = l.useRef(null),
            tT = C.type === eu.fO.STREAM ? u.ScreenIcon : u.VideoIcon,
            tN = ti ? eS : e_;
        return (0, i.jsx)(m.Z, {
            section: ec.jXE.VOICE_CHANNEL_TILE,
            children: (0, i.jsxs)('div', {
                className: r()(eh.wrapper, { [eh.ringing]: e1 }, eI),
                style: eE,
                onMouseEnter: () => {
                    eG(!0);
                },
                onMouseLeave: () => {
                    eG(!1);
                },
                children: [
                    tp &&
                        C.type === eu.fO.STREAM &&
                        (0, i.jsx)(j.Z, {
                            baseTileRef: tb.current,
                            cleanup: () => th(!1)
                        }),
                    (0, i.jsxs)(A.Z, {
                        shakeLocation: em.oZ.VOICE_USER,
                        isShaking: e0,
                        className: eh.tile,
                        children: [
                            (0, i.jsx)(ei.Z, {
                                ref: tb,
                                className: r()(eh.tile, {
                                    [eh.noBorder]: eA,
                                    [eh.noInteraction]: null == Q,
                                    [eh.idle]: eU
                                }),
                                noBorder: eA,
                                style: ex,
                                participantUserId: eJ,
                                children: (0, i.jsxs)(u.ClickableContainer, {
                                    'aria-label': tZ,
                                    className: eh.tileChild,
                                    onDoubleClick: t_,
                                    onContextMenu: tx,
                                    onClick: tS,
                                    onMouseDown: es,
                                    onKeyDown: ev,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != tt && null != eJ
                                            ? (0, i.jsx)(W.Z, {
                                                  voiceChannelEffect: tt,
                                                  onComplete: () => (0, B.H)(eJ),
                                                  userId: eJ
                                              })
                                            : null,
                                        C.type === eu.fO.USER
                                            ? (0, i.jsx)('div', {
                                                  className: eh.voiceChannelEffectsContainer,
                                                  children: (0, i.jsx)(I.Z, {
                                                      userId: eJ,
                                                      channelId: eC.id,
                                                      guildId: eC.getGuildId(),
                                                      containerDimensions: {
                                                          width: null !== (c = null == tb ? void 0 : null === (n = tb.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                          height: null !== (_ = null == tb ? void 0 : null === (a = tb.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== _ ? _ : 0
                                                      }
                                                  })
                                              })
                                            : null,
                                        tC,
                                        e8
                                            ? (0, i.jsx)(D.W, {
                                                  onPlayed: tI,
                                                  played: e7.hqStreamingFrameAnimationPlayed
                                              })
                                            : null,
                                        eA
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: eh.indicators,
                                                  children: ty
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
                                        eg.includes(C.type)
                                            ? null
                                            : (0, i.jsx)(tN, {
                                                  focused: ew,
                                                  width: ey,
                                                  inCall: eT,
                                                  participantType: C.type,
                                                  hasVideo: null != e2 && e2,
                                                  ...e3,
                                                  idle: eU,
                                                  platform: tn,
                                                  title: (0, ee.Z)(eC, C),
                                                  blocked: eP,
                                                  ignored: eR,
                                                  localVideoDisabled: eK,
                                                  videoToggleState: eQ,
                                                  hideAudioIcon: e4,
                                                  onContextMenu: tx,
                                                  onToggleMute: tv,
                                                  participantUserId: eJ,
                                                  hangStatusActivity: ts,
                                                  application: tu,
                                                  speaking: e0,
                                                  secureFramesVerified: tf
                                              }),
                                        C.type === eu.fO.USER && eX
                                            ? (0, i.jsx)(b.Z, {
                                                  userId: C.id,
                                                  channelId: eC.id
                                              })
                                            : null,
                                        eT && !eA
                                            ? (0, i.jsx)('div', {
                                                  className: r()(eh.border, {
                                                      [eh.voiceChannelEffect]: !ew && null != tt,
                                                      [eh.speaking]: e0 && !ew
                                                  })
                                              })
                                            : null
                                    ]
                                })
                            }),
                            eB &&
                                eW &&
                                ez &&
                                (0, i.jsx)(et.Z, {
                                    currentUserId: eH,
                                    participant: C
                                }),
                            (0, i.jsx)(N.Z, {
                                isFiring: eV,
                                callTileRef: tb.current
                            })
                        ]
                    })
                ]
            })
        });
    });
function eI(e) {
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
let eS = l.memo((e) => {
    let { idle: t, title: n, width: l, videoToggleState: a, blocked: s, ignored: d, participantType: m, participantUserId: f, platform: p, secureFramesVerified: h } = e,
        g = (0, o.e7)([Y.Z], () => null != f && Y.Z.isLocalVideoAutoDisabled(f, (0, v.Z)(m)), [f, m]);
    return (0, i.jsxs)('div', {
        className: eh.overlayContainer,
        children: [
            (0, i.jsx)('div', {
                className: r()(eh.overlayTop, { [eh.small]: l < 195 }),
                children:
                    g || a === ec.ZUi.AUTO_PROBING
                        ? t
                            ? (0, i.jsx)('div', {
                                  className: eh.status,
                                  children: (0, i.jsx)(u.VideoSlashIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                            : (0, i.jsxs)('div', {
                                  className: r()(eh.overlayTitle, eh.videoDisabledTitle),
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
                className: r()(eh.overlayBottom, { [eh.small]: l < 195 }),
                children: [
                    (0, i.jsxs)(u.Text, {
                        className: r()(eh.overlayTitle, { [eh.idle]: t && !1 }),
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
                            (0, i.jsx)(eI, {
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
                        className: r()(eh.overlayButtonContainer, { [eh.idle]: t && !1 }),
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
eS.displayName = 'CallTileOverlayV2';
let e_ = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: g, videoToggleState: I, focused: S, blocked: x, ignored: E, hideAudioIcon: Z, participantType: b, participantUserId: T, onContextMenu: N, onToggleMute: A, platform: j, hangStatusActivity: w, application: P, speaking: R, secureFramesVerified: M } = e,
        O = null,
        L = null,
        k = null,
        D = null,
        U = (0, es.K)(f),
        V = (0, es.N)(f),
        F = (0, o.e7)([Y.Z], () => null != T && Y.Z.isLocalVideoAutoDisabled(T, (0, v.Z)(b)), [T, b]),
        B = (0, u.useRedesignIconContext)().enabled;
    if (!Z) {
        if (l && b === eu.fO.STREAM && p && !S)
            O = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eh.interactive, eh.toggleMute, eh.status),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || b !== eu.fO.STREAM || !p || U || S) {
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
                          className: eh.status,
                          children: O
                      })
                    : null;
        } else
            O = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eh.interactive, eh.toggleMute, eh.status),
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
              (L = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eh.localMuteStrikethrough
              }))
            : (L = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        b === eu.fO.STREAM &&
            !S &&
            p &&
            (k = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.string(ep.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N(e);
                        },
                        className: r()(eh.status, eh.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        b === eu.fO.USER && null != w
            ? (D = (0, i.jsx)(u.Tooltip, {
                  text: (0, C.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eh.hangStatusContainer, { [eh.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(y.Z, {
                              hangStatusActivity: w,
                              className: eh.hangStatusIcon,
                              animate: R
                          })
                      })
              }))
            : b === eu.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                  text: ep.intl.formatToPlainString(ep.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eh.hangStatusContainer, { [eh.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(_.Z, {
                              className: eh.hangStatusIcon,
                              game: P,
                              size: _.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eh.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(eh.overlayTop, { [eh.small]: f < 195 }),
                    children:
                        F || I === ec.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eh.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: r()(eh.overlayTitle, eh.videoDisabledTitle),
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
                    className: r()(eh.overlayBottom, { [eh.small]: f < 195 }),
                    children: [
                        V
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(eh.overlayTitle, { [eh.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      x
                                          ? (0, i.jsx)('div', {
                                                className: eh.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: eh.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      E
                                          ? (0, i.jsx)('div', {
                                                className: eh.ignored,
                                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                                    size: 'lg',
                                                    className: eh.blockedIcon
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eI, {
                                          participantType: b,
                                          platform: j,
                                          className: eh.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: eh.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      M &&
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
                                null != L &&
                                    (0, i.jsx)('div', {
                                        className: eh.status,
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
e_.displayName = 'CallTileOverlay';
let ex = T.L;
t.ZP = ev;
