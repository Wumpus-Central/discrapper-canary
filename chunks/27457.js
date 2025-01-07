n.d(t, {
    BP: function () {
        return ev;
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
    g = n(835473),
    h = n(414910),
    v = n(415635),
    S = n(578976),
    I = n(332487),
    _ = n(324085),
    x = n(925329),
    E = n(649739),
    C = n(574176),
    Z = n(833858),
    y = n(223135),
    b = n(37091),
    T = n(6572),
    A = n(352978),
    N = n(936847),
    w = n(512384),
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
    B = n(314897),
    G = n(857192),
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
    ea = n(623825),
    er = n(839662),
    es = n(981631),
    eo = n(354459),
    ec = n(37113),
    eu = n(524484),
    ed = n(65154),
    em = n(388032),
    ef = n(995544);
let ep = l.memo((e) => {
    var t, n, a, c, x;
    let { participant: Z, onDoubleClick: y, onContextMenu: X, onClick: K, onMouseDown: ea, onKeyDown: ep, className: eg, style: ev, containerStyle: eS, channel: eI, width: e_, inPopout: ex, onVideoResize: eE, inCall: eC = !1, selected: eZ = !1, noBorder: ey = !1, noVideoRender: eb = !1, focused: eT = !1, blocked: eA = !1, ignored: eN = !1, fit: ew = A.L.CONTAIN, paused: ej = !1, pulseSpeakingIndicator: eP = !1, forceIdle: eR = !1 } = e,
        eM = l.useContext(V.h9) || eR,
        [eO, eL] = l.useState(!1),
        ek = U.Sb.useSetting(),
        eD = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
        [eU, eV] = l.useState(!1),
        eF = (0, o.e7)([B.default], () => B.default.getId()),
        eW = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
        eB = Z.type === eo.fO.ACTIVITY ? null : null === (t = Z.user) || void 0 === t ? void 0 : t.id,
        [eG] = (0, g.Z)(Z.type === eo.fO.ACTIVITY ? [Z.id] : []),
        ez = (0, o.e7)([b.Z], () => b.Z.getEnabled()),
        eH = (0, o.e7)([H.Z], () => null != eB && H.Z.isLocalVideoDisabled(eB, (0, h.Z)(Z.type)), [eB, Z.type]),
        eY = (0, o.e7)([H.Z], () => (null != eB ? H.Z.getVideoToggleState(eB, (0, h.Z)(Z.type)) : es.ZUi.NONE), [eB, Z.type]),
        eJ = eY === es.ZUi.AUTO_PROBING,
        { speaking: eq, ringing: eX, hasVideo: eK } = (0, er.Z)(Z, eF),
        eQ = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([q.Z], () => {
                    var e, i, l;
                    let a = q.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [H.Z],
                    () => {
                        let n = (0, h.Z)(t.type),
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
                muted: null !== (a = t.type === eo.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (r = t.type === eo.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
            };
        })(eF, Z, eI.getGuildId()),
        e$ = Z.type === eo.fO.STREAM && eB === eF;
    l.useEffect(() => {
        if (e$ && !Q.ZP.isPremium(eW) && null != eI.hdStreamingUntil && new Date(eI.hdStreamingUntil) > new Date()) {
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
    let e0 = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: e1 } = (0, R.k)(s.q.STREAM_HIGH_QUALITY),
        e2 = (0, L.Z)(),
        e3 = e0 && e$ && null != e2,
        e9 = (0, P.o)(Z, eW),
        e4 = (0, j.lL)('CallTile', !0, eW, e9),
        e7 = (0, o.e7)([F.Z], () => (Z.type === eo.fO.USER && null != eB ? F.Z.getEffectForUserId(eB) : null)),
        e6 = (0, o.e7)([q.Z], () => q.Z.getVoicePlatformForChannel(eI.id, null != eB ? eB : es.lds)),
        { enableHangStatus: e8 } = C.n.useExperiment({
            guildId: eI.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e5 } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        te = e5 || e8,
        { hangStatusActivity: tt, gameActivity: tn } = (0, o.cj)(
            [Y.Z],
            () => ({
                hangStatusActivity: e8 && null != eB ? Y.Z.findActivity(eB, (e) => e.type === es.IIU.HANG_STATUS) : null,
                gameActivity: te && null != eB ? Y.Z.findActivity(eB, (e) => null != e.application_id && e.type === es.IIU.PLAYING) : null
            }),
            [e8, eB, te]
        ),
        ti = (0, o.e7)([z.Z], () => ((null == tn ? void 0 : tn.application_id) != null ? z.Z.getDetectableGame(tn.application_id) : null)),
        tl = (0, o.e7)([p.Z], () => (null != ti && (null == tn ? void 0 : tn.application_id) != null ? p.Z.getApplication(null == tn ? void 0 : tn.application_id) : void 0)),
        ta = (0, D.wV)({
            userId: eB,
            channelId: eI.id,
            location: 'CallTile'
        }),
        tr = (0, D.zU)({
            streamKey: Z.type === eo.fO.STREAM ? Z.id : null,
            channelId: eI.id,
            location: 'CallTile'
        }),
        ts = l.useMemo(() => (Z.type === eo.fO.STREAM ? null != tr && tr : Z.type === eo.fO.USER && null != ta && ta), [tr, ta, Z.type]);
    l.useEffect(() => {
        eL(eT);
    }, [eT]);
    let [to, tc] = l.useState(!1),
        tu = l.useCallback(() => {
            !f.Z.useReducedMotion && tc(!0);
        }, []);
    (0, _.J)(eI, tu);
    let td = l.useCallback(() => {
            null != eB && d.Z.toggleLocalMute(eB, ed.Yn.STREAM);
        }, [eB]),
        tm = l.useCallback(() => {
            (0, O.hP)();
        }, []),
        tf = l.useCallback(
            (e) => {
                null == K || K(Z, e);
            },
            [K, Z]
        ),
        tp = l.useCallback(
            (e) => {
                null == y || y(Z, e);
            },
            [y, Z]
        ),
        tg = l.useCallback(
            (e) => {
                null == X || X(Z, e);
            },
            [X, Z]
        ),
        th = eM;
    e3 && (th = !1);
    let tv = null,
        tS = null,
        tI = '';
    switch (Z.type) {
        case eo.fO.STREAM:
            (tv = (0, i.jsx)(ei.Z, {
                participant: Z,
                selected: eZ,
                width: e_,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                inPopout: ex,
                focused: eT
            })),
                (tS = (0, i.jsx)(ei._, {
                    participant: Z,
                    selected: eZ,
                    width: e_,
                    focused: eT,
                    idle: th,
                    premiumIndicator: e3 || e4.enabled
                })),
                (tI = em.intl.formatToPlainString(em.t.gHPz3d, { streamerName: Z.user.username }));
            break;
        case eo.fO.USER:
            (tv = (0, i.jsx)(el.Z, {
                channel: eI,
                inCall: eC,
                participant: Z,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                selected: eZ,
                width: e_,
                blocked: eA,
                ignored: eN,
                noVideoRender: eb || eJ,
                pulseSpeakingIndicator: eP
            })),
                (tS = (0, i.jsx)(el.T, {
                    userId: Z.user.id,
                    channelId: eI.id
                })),
                (tI = em.intl.formatToPlainString(em.t['iC/x/f'], { username: Z.user.username }));
            break;
        case eo.fO.ACTIVITY:
            (tv = (0, i.jsx)(et.ZP, {
                interactible: eT,
                participant: Z,
                selected: eZ,
                channel: eI,
                width: e_
            })),
                (tI = em.intl.formatToPlainString(em.t.YCvOsL, { activityName: null == eG ? void 0 : eG.name }));
            break;
        case eo.fO.HIDDEN_STREAM:
            tv = (0, i.jsx)(ei.Z, {
                participant: Z,
                selected: eZ,
                width: e_,
                fit: ew,
                onVideoResize: eE,
                paused: ej,
                inPopout: ex,
                focused: eT
            });
    }
    let t_ = l.useRef(null),
        tx = Z.type === eo.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(m.Z, {
        section: es.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: r()(ef.wrapper, { [ef.ringing]: eX }, eg),
            style: eS,
            onMouseEnter: () => {
                eV(!0);
            },
            onMouseLeave: () => {
                eV(!1);
            },
            children: [
                to &&
                    Z.type === eo.fO.STREAM &&
                    (0, i.jsx)(I.Z, {
                        baseTileRef: t_.current,
                        cleanup: () => tc(!1)
                    }),
                (0, i.jsxs)(w.Z, {
                    shakeLocation: eu.oZ.VOICE_USER,
                    isShaking: eq,
                    className: ef.tile,
                    children: [
                        (0, i.jsx)(en.Z, {
                            ref: t_,
                            className: r()(ef.tile, {
                                [ef.noBorder]: ey,
                                [ef.noInteraction]: null == K,
                                [ef.idle]: eM
                            }),
                            noBorder: ey,
                            style: ev,
                            participantUserId: eB,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tI,
                                className: ef.tileChild,
                                onDoubleClick: tp,
                                onContextMenu: tg,
                                onClick: tf,
                                onMouseDown: ea,
                                onKeyDown: ep,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e7 && null != eB
                                        ? (0, i.jsx)(W.Z, {
                                              voiceChannelEffect: e7,
                                              onComplete: () => (0, F.H)(eB),
                                              userId: eB
                                          })
                                        : null,
                                    Z.type === eo.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: ef.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(v.Z, {
                                                  userId: eB,
                                                  channelId: eI.id,
                                                  guildId: eI.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == t_ ? void 0 : null === (n = t_.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (x = null == t_ ? void 0 : null === (a = t_.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== x ? x : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tv,
                                    e3
                                        ? (0, i.jsx)(k.W, {
                                              onPlayed: tm,
                                              played: e1.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    ey
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: ef.indicators,
                                              children: tS
                                          }),
                                    eZ
                                        ? (0, i.jsx)('div', {
                                              className: ef.selectedScreen,
                                              children: (0, i.jsx)(tx, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: ef.selectedIcon
                                              })
                                          })
                                        : null,
                                    Z.type !== eo.fO.ACTIVITY
                                        ? (0, i.jsx)(eh, {
                                              focused: eT,
                                              width: e_,
                                              inCall: eC,
                                              participantType: Z.type,
                                              hasVideo: null != eK && eK,
                                              ...eQ,
                                              idle: eM,
                                              platform: e6,
                                              title: (0, $.Z)(eI, Z),
                                              blocked: eA,
                                              ignored: eN,
                                              localVideoDisabled: eH,
                                              videoToggleState: eY,
                                              hideAudioIcon: e$,
                                              onContextMenu: tg,
                                              onToggleMute: td,
                                              participantUserId: eB,
                                              hangStatusActivity: tt,
                                              application: tl,
                                              speaking: eq,
                                              secureFramesVerified: ts
                                          })
                                        : null,
                                    Z.type === eo.fO.USER && ez
                                        ? (0, i.jsx)(T.Z, {
                                              userId: Z.id,
                                              channelId: eI.id
                                          })
                                        : null,
                                    eC && !ey
                                        ? (0, i.jsx)('div', {
                                              className: r()(ef.border, {
                                                  [ef.voiceChannelEffect]: !eT && null != e7,
                                                  [ef.speaking]: eq && !eT
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        ek &&
                            eD &&
                            eU &&
                            (0, i.jsx)(ee.Z, {
                                currentUserId: eF,
                                participant: Z
                            }),
                        (0, i.jsx)(N.Z, {
                            isFiring: eO,
                            callTileRef: t_.current
                        })
                    ]
                })
            ]
        })
    });
});
function eg(e) {
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
let eh = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: g, localVideoDisabled: v, videoToggleState: S, focused: I, blocked: _, ignored: E, hideAudioIcon: C, participantType: b, participantUserId: T, onContextMenu: A, onToggleMute: N, platform: w, hangStatusActivity: j, application: P, speaking: R, secureFramesVerified: M } = e,
        O = null,
        L = null,
        k = null,
        D = null,
        U = (0, ea.K)(f),
        V = (0, ea.N)(f),
        F = (0, o.e7)([H.Z], () => null != T && H.Z.isLocalVideoAutoDisabled(T, (0, h.Z)(b)), [T, b]),
        W = (0, u.useRedesignIconContext)().enabled;
    if (!C) {
        if (l && b === eo.fO.STREAM && p && !I)
            O = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N();
                        },
                        className: r()(ef.interactive, ef.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || b !== eo.fO.STREAM || !p || U || I) {
            if (W) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (O = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                O = (0, i.jsx)(e, { color: 'currentColor' });
            }
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
                        className: r()(ef.interactive, ef.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (g && H.Z.supports(ed.AN.VIDEO)) || !p
            ? g &&
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
            !I &&
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
                        className: r()(ef.status, ef.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        b === eo.fO.USER && null != j
            ? (D = (0, i.jsx)(u.Tooltip, {
                  text: (0, Z.O8)(j),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(y.Z, {
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
                          className: r()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(x.Z, {
                              className: ef.hangStatusIcon,
                              game: P,
                              size: x.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: ef.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(ef.overlayTop, { [ef.small]: f < 195 }),
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
                                      className: r()(ef.overlayTitle, ef.videoDisabledTitle),
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
                    className: r()(ef.overlayBottom, { [ef.small]: f < 195 }),
                    children: [
                        V
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(ef.overlayTitle, { [ef.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      _
                                          ? (0, i.jsx)('div', {
                                                className: ef.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: ef.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      E
                                          ? (0, i.jsx)('div', {
                                                className: ef.ignored,
                                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                                    size: 'lg',
                                                    className: ef.blockedIcon
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eg, {
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
                                null != O &&
                                    (0, i.jsx)('div', {
                                        className: ef.status,
                                        children: O
                                    }),
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
eh.displayName = 'CallTileOverlay';
let ev = A.L;
t.ZP = ep;
