n.d(t, {
    BP: function () {
        return ev;
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
    g = n(414910),
    v = n(415635),
    S = n(578976),
    I = n(925329),
    _ = n(649739),
    x = n(574176),
    E = n(833858),
    C = n(223135),
    Z = n(37091),
    y = n(6572),
    b = n(352978),
    T = n(936847),
    A = n(512384),
    N = n(33316),
    w = n(576645),
    j = n(6242),
    P = n(757692),
    R = n(386542),
    M = n(933843),
    O = n(746599),
    L = n(231664),
    k = n(614011),
    D = n(210975),
    U = n(695346),
    V = n(937995),
    F = n(456631),
    W = n(274459),
    G = n(314897),
    B = n(857192),
    z = n(77498),
    H = n(131951),
    Y = n(158776),
    J = n(594174),
    q = n(979651),
    X = n(374129),
    K = n(639351),
    Q = n(74538),
    $ = n(584729),
    ee = n(334374),
    et = n(849171),
    en = n(607187),
    ei = n(833519),
    el = n(462061),
    er = n(623825),
    ea = n(839662),
    es = n(981631),
    eo = n(354459),
    ec = n(37113),
    eu = n(524484),
    ed = n(65154),
    em = n(388032),
    ef = n(474316);
let ep = l.memo((e) => {
    var t, n, r, c, I;
    let { participant: E, onDoubleClick: C, onContextMenu: X, onClick: K, onMouseDown: er, onKeyDown: ep, className: eh, style: ev, containerStyle: eS, channel: eI, width: e_, inPopout: ex, onVideoResize: eE, inCall: eC = !1, selected: eZ = !1, noBorder: ey = !1, noVideoRender: eb = !1, focused: eT = !1, blocked: eA = !1, ignored: eN = !1, fit: ew = b.L.CONTAIN, paused: ej = !1, pulseSpeakingIndicator: eP = !1, forceIdle: eR = !1, inOverlayPopout: eM = !1 } = e,
        eO = l.useContext(V.h9) || eR,
        [eL, ek] = l.useState(!1),
        eD = U.Sb.useSetting(),
        eU = (0, o.e7)([B.default], () => B.default.isStreamInfoOverlayEnabled),
        [eV, eF] = l.useState(!1),
        eW = (0, o.e7)([G.default], () => G.default.getId()),
        eG = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
        eB = E.type === eo.fO.ACTIVITY ? null : null === (t = E.user) || void 0 === t ? void 0 : t.id,
        [ez] = (0, h.Z)(E.type === eo.fO.ACTIVITY ? [E.id] : []),
        eH = (0, o.e7)([Z.Z], () => Z.Z.getEnabled()),
        eY = (0, o.e7)([H.Z], () => null != eB && H.Z.isLocalVideoDisabled(eB, (0, g.Z)(E.type)), [eB, E.type]),
        eJ = (0, o.e7)([H.Z], () => (null != eB ? H.Z.getVideoToggleState(eB, (0, g.Z)(E.type)) : es.ZUi.NONE), [eB, E.type]),
        eq = eJ === es.ZUi.AUTO_PROBING,
        { speaking: eX, ringing: eK, hasVideo: eQ } = (0, ea.Z)(E, eW),
        e$ = (function (e, t, n) {
            var i, l, r, a;
            let s = (0, o.cj)([q.Z], () => {
                    var e, i, l;
                    let r = q.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == r ? void 0 : r.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == r ? void 0 : r.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == r ? void 0 : r.suppress) && void 0 !== l && l,
                        voiceChannelId: null == r ? void 0 : r.channelId
                    };
                }),
                c = (0, o.cj)(
                    [H.Z],
                    () => {
                        let n = (0, g.Z)(t.type),
                            i = t.type !== eo.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: H.Z.isLocalMute(i, n),
                                  localVideoDisabled: H.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: H.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: s.muted,
                serverDeafened: s.deafened,
                suppressed: s.suppressed,
                localMuted: c.muted,
                muted: null !== (r = t.type === eo.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== r && r,
                deafened: null !== (a = t.type === eo.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== a && a
            };
        })(eW, E, eI.getGuildId()),
        e0 = E.type === eo.fO.STREAM && eB === eW;
    l.useEffect(() => {
        if (e0 && !Q.ZP.isPremium(eG) && null != eI.hdStreamingUntil && new Date(eI.hdStreamingUntil) > new Date()) {
            let e = setTimeout(
                () => {
                    let e = H.Z.getGoLiveSource(),
                        t = (0, S.s)(ec.LY.RESOLUTION_720, ec.ws.FPS_30, e);
                    d.Z.setGoLiveSource(t);
                },
                new Date(eI.hdStreamingUntil).getTime() - Date.now()
            );
            return () => clearTimeout(e);
        }
    });
    let e1 = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: e2 } = (0, R.k)(s.q.STREAM_HIGH_QUALITY),
        e3 = (0, L.Z)(),
        e4 = e1 && e0 && null != e3,
        e9 = (0, P.o)(E, eG),
        e7 = (0, j.lL)('CallTile', !0, eG, e9),
        e6 = (0, o.e7)([F.Z], () => (E.type === eo.fO.USER && null != eB ? F.Z.getEffectForUserId(eB) : null)),
        e8 = (0, o.e7)([q.Z], () => q.Z.getVoicePlatformForChannel(eI.id, null != eB ? eB : es.lds)),
        { enableHangStatus: e5 } = x.n.useExperiment({
            guildId: eI.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: te } = _.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        tt = te || e5,
        { hangStatusActivity: tn, gameActivity: ti } = (0, o.cj)(
            [Y.Z],
            () => ({
                hangStatusActivity: e5 && null != eB ? Y.Z.findActivity(eB, (e) => e.type === es.IIU.HANG_STATUS) : null,
                gameActivity: tt && null != eB ? Y.Z.findActivity(eB, (e) => null != e.application_id && e.type === es.IIU.PLAYING) : null
            }),
            [e5, eB, tt]
        ),
        tl = (0, o.e7)([z.Z], () => ((null == ti ? void 0 : ti.application_id) != null ? z.Z.getDetectableGame(ti.application_id) : null)),
        tr = (0, o.e7)([p.Z], () => (null != tl && (null == ti ? void 0 : ti.application_id) != null ? p.Z.getApplication(null == ti ? void 0 : ti.application_id) : void 0)),
        ta = (0, D.wV)({
            userId: eB,
            channelId: eI.id,
            location: 'CallTile'
        }),
        ts = (0, D.zU)({
            streamKey: E.type === eo.fO.STREAM ? E.id : null,
            channelId: eI.id,
            location: 'CallTile'
        }),
        to = l.useMemo(() => (E.type === eo.fO.STREAM ? null != ts && ts : E.type === eo.fO.USER && null != ta && ta), [ts, ta, E.type]);
    l.useEffect(() => {
        ek(eT);
    }, [eT]);
    let [tc, tu] = l.useState(!1),
        td = l.useCallback(() => {
            !f.Z.useReducedMotion && tu(!0);
        }, []);
    (0, w.J)(eI, td);
    let tm = l.useCallback(() => {
            null != eB && d.Z.toggleLocalMute(eB, ed.Yn.STREAM);
        }, [eB]),
        tf = l.useCallback(() => {
            (0, O.hP)();
        }, []),
        tp = l.useCallback(
            (e) => {
                null == K || K(E, e);
            },
            [K, E]
        ),
        th = l.useCallback(
            (e) => {
                null == C || C(E, e);
            },
            [C, E]
        ),
        tg = l.useCallback(
            (e) => {
                null == X || X(E, e);
            },
            [X, E]
        ),
        tv = eO;
    e4 && (tv = !1);
    let tS = null,
        tI = null,
        t_ = '';
    switch (E.type) {
        case eo.fO.STREAM:
            (tS = (0, i.jsx)(ei.Z, {
                participant: E,
                selected: eZ,
                width: e_,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                inPopout: ex,
                focused: eT,
                inOverlayPopout: eM
            })),
                (tI = (0, i.jsx)(ei._, {
                    participant: E,
                    selected: eZ,
                    width: e_,
                    focused: eT,
                    idle: tv,
                    premiumIndicator: e4 || e7.enabled
                })),
                (t_ = em.intl.formatToPlainString(em.t.gHPz3d, { streamerName: E.user.username }));
            break;
        case eo.fO.USER:
            (tS = (0, i.jsx)(el.Z, {
                channel: eI,
                inCall: eC,
                participant: E,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                selected: eZ,
                width: e_,
                blocked: eA,
                ignored: eN,
                noVideoRender: eb || eq,
                pulseSpeakingIndicator: eP,
                inOverlayPopout: eM
            })),
                (tI = (0, i.jsx)(el.T, {
                    userId: E.user.id,
                    channelId: eI.id
                })),
                (t_ = em.intl.formatToPlainString(em.t['iC/x/f'], { username: E.user.username }));
            break;
        case eo.fO.ACTIVITY:
            (tS = (0, i.jsx)(et.ZP, {
                interactible: eT,
                participant: E,
                selected: eZ,
                channel: eI,
                width: e_
            })),
                (t_ = em.intl.formatToPlainString(em.t.YCvOsL, { activityName: null == ez ? void 0 : ez.name }));
            break;
        case eo.fO.HIDDEN_STREAM:
            tS = (0, i.jsx)(ei.Z, {
                participant: E,
                selected: eZ,
                width: e_,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                inPopout: ex,
                focused: eT,
                inOverlayPopout: eM
            });
    }
    let tx = l.useRef(null),
        tE = E.type === eo.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(m.Z, {
        section: es.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: a()(ef.wrapper, { [ef.ringing]: eK }, eh),
            style: eS,
            onMouseEnter: () => {
                eF(!0);
            },
            onMouseLeave: () => {
                eF(!1);
            },
            children: [
                tc &&
                    E.type === eo.fO.STREAM &&
                    (0, i.jsx)(N.Z, {
                        baseTileRef: tx.current,
                        cleanup: () => tu(!1)
                    }),
                (0, i.jsxs)(A.Z, {
                    shakeLocation: eu.oZ.VOICE_USER,
                    isShaking: eX,
                    className: ef.tile,
                    children: [
                        (0, i.jsx)(en.Z, {
                            ref: tx,
                            className: a()(ef.tile, {
                                [ef.noBorder]: ey,
                                [ef.noInteraction]: null == K,
                                [ef.idle]: eO
                            }),
                            noBorder: ey,
                            style: ev,
                            participantUserId: eB,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': t_,
                                className: ef.tileChild,
                                onDoubleClick: th,
                                onContextMenu: tg,
                                onClick: tp,
                                onMouseDown: er,
                                onKeyDown: ep,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e6 && null != eB
                                        ? (0, i.jsx)(W.Z, {
                                              voiceChannelEffect: e6,
                                              onComplete: () => (0, F.H)(eB),
                                              userId: eB
                                          })
                                        : null,
                                    E.type === eo.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: ef.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(v.Z, {
                                                  userId: eB,
                                                  channelId: eI.id,
                                                  guildId: eI.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tx ? void 0 : null === (n = tx.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (I = null == tx ? void 0 : null === (r = tx.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== I ? I : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tS,
                                    e4
                                        ? (0, i.jsx)(k.W, {
                                              onPlayed: tf,
                                              played: e2.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    ey
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: ef.indicators,
                                              children: tI
                                          }),
                                    eZ
                                        ? (0, i.jsx)('div', {
                                              className: ef.selectedScreen,
                                              children: (0, i.jsx)(tE, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: ef.selectedIcon
                                              })
                                          })
                                        : null,
                                    E.type !== eo.fO.ACTIVITY
                                        ? (0, i.jsx)(eg, {
                                              focused: eT,
                                              width: e_,
                                              inCall: eC,
                                              participantType: E.type,
                                              hasVideo: null != eQ && eQ,
                                              ...e$,
                                              idle: eO,
                                              platform: e8,
                                              title: (0, $.Z)(eI, E),
                                              blocked: eA,
                                              ignored: eN,
                                              localVideoDisabled: eY,
                                              videoToggleState: eJ,
                                              hideAudioIcon: e0,
                                              onContextMenu: tg,
                                              onToggleMute: tm,
                                              participantUserId: eB,
                                              hangStatusActivity: tn,
                                              application: tr,
                                              speaking: eX,
                                              secureFramesVerified: to
                                          })
                                        : null,
                                    E.type === eo.fO.USER && eH
                                        ? (0, i.jsx)(y.Z, {
                                              userId: E.id,
                                              channelId: eI.id
                                          })
                                        : null,
                                    eC && !ey
                                        ? (0, i.jsx)('div', {
                                              className: a()(ef.border, {
                                                  [ef.voiceChannelEffect]: !eT && null != e6,
                                                  [ef.speaking]: eX && !eT
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eD &&
                            eU &&
                            eV &&
                            (0, i.jsx)(ee.Z, {
                                currentUserId: eW,
                                participant: E
                            }),
                        (0, i.jsx)(T.Z, {
                            isFiring: eL,
                            callTileRef: tx.current
                        })
                    ]
                })
            ]
        })
    });
});
function eh(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === eo.fO.STREAM)
        return n === eo.wR.XBOX
            ? (0, i.jsx)(K.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case eo.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case eo.wR.XBOX:
            return (0, i.jsx)(K.Z, { className: l });
        case eo.wR.PLAYSTATION:
            return (0, i.jsx)(X.Z, { className: l });
        default:
            return null;
    }
}
ep.displayName = 'CallTile';
let eg = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: r, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: v, videoToggleState: S, focused: _, blocked: x, ignored: Z, hideAudioIcon: y, participantType: b, participantUserId: T, onContextMenu: A, onToggleMute: N, platform: w, hangStatusActivity: j, application: P, speaking: R, secureFramesVerified: M } = e,
        O = null,
        L = null,
        k = null,
        D = null,
        U = (0, er.K)(f),
        V = (0, er.N)(f),
        F = (0, o.e7)([H.Z], () => null != T && H.Z.isLocalVideoAutoDisabled(T, (0, g.Z)(b)), [T, b]),
        W = (0, u.useRedesignIconContext)().enabled;
    if (!y) {
        if (l && b === eo.fO.STREAM && p && !_)
            O = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N();
                        },
                        className: a()(ef.interactive, ef.toggleMute, ef.status),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || b !== eo.fO.STREAM || !p || U || _) {
            if (W) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : r ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (O = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                O = (0, i.jsx)(e, { color: 'currentColor' });
            }
            O =
                null != O
                    ? (0, i.jsx)('div', {
                          className: ef.status,
                          children: O
                      })
                    : null;
        } else
            O = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N();
                        },
                        className: a()(ef.interactive, ef.toggleMute, ef.status),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && H.Z.supports(ed.AN.VIDEO)) || !p
            ? h &&
              p &&
              v &&
              !F &&
              (L = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: ef.localMuteStrikethrough
              }))
            : (L = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        b === eo.fO.STREAM &&
            !_ &&
            p &&
            (k = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A(e);
                        },
                        className: a()(ef.status, ef.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        b === eo.fO.USER && null != j
            ? (D = (0, i.jsx)(u.Tooltip, {
                  text: (0, E.O8)(j),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(C.Z, {
                              hangStatusActivity: j,
                              className: ef.hangStatusIcon,
                              animate: R
                          })
                      })
              }))
            : b === eo.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                  text: em.intl.formatToPlainString(em.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(I.Z, {
                              className: ef.hangStatusIcon,
                              game: P,
                              size: I.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: ef.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: a()(ef.overlayTop, { [ef.small]: f < 195 }),
                    children:
                        F || S === es.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: ef.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: a()(ef.overlayTitle, ef.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: ef.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: ef.overlayTitleText,
                                              children: em.intl.string(em.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: a()(ef.overlayBottom, { [ef.small]: f < 195 }),
                    children: [
                        V
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: a()(ef.overlayTitle, { [ef.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      x
                                          ? (0, i.jsx)('div', {
                                                className: ef.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: ef.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      Z
                                          ? (0, i.jsx)('div', {
                                                className: ef.ignored,
                                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                                    size: 'lg',
                                                    className: ef.blockedIcon
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eh, {
                                          participantType: b,
                                          platform: w,
                                          className: ef.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: ef.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      M &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: em.intl.string(em.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: ef.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': em.intl.string(em.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: ef.statusContainer,
                            children: [
                                null != L &&
                                    (0, i.jsx)('div', {
                                        className: ef.status,
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
eg.displayName = 'CallTileOverlay';
let ev = b.L;
t.ZP = ep;
