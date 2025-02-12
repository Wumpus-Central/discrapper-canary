n.d(t, { Z: () => eW }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(568611),
    d = n(442837),
    u = n(592471),
    h = n(749280),
    m = n(864094),
    p = n(75735),
    g = n(382600),
    _ = n(481060),
    f = n(846027),
    E = n(239091),
    I = n(925549),
    C = n(284056),
    N = n(730749),
    v = n(2052),
    T = n(40851),
    S = n(317381),
    A = n(596040),
    b = n(588580),
    Z = n(374065),
    x = n(451576),
    L = n(119315),
    y = n(403404),
    P = n(100527),
    O = n(906732),
    R = n(424602),
    j = n(793865),
    D = n(933557),
    w = n(600164),
    k = n(540059),
    M = n(258609),
    U = n(446226),
    G = n(935261),
    B = n(74299),
    V = n(803647),
    H = n(142497),
    F = n(810788),
    z = n(160404),
    W = n(703656),
    Y = n(917405),
    K = n(641015),
    q = n(848543),
    X = n(565799),
    Q = n(501655),
    J = n(368442),
    $ = n(600518),
    ee = n(485287),
    et = n(754277),
    en = n(590415),
    ei = n(695346),
    el = n(923973),
    er = n(829750),
    ea = n(189771),
    es = n(544384),
    eo = n(560688),
    ec = n(127608),
    ed = n(76021),
    eu = n(173507),
    eh = n(25827),
    em = n(199902),
    ep = n(314897),
    eg = n(592125),
    e_ = n(430824),
    ef = n(819640),
    eE = n(131951),
    eI = n(496675),
    eC = n(19780),
    eN = n(699516),
    ev = n(594174),
    eT = n(979651),
    eS = n(938475),
    eA = n(626135),
    eb = n(63063),
    eZ = n(51144),
    ex = n(870569),
    eL = n(345243),
    ey = n(594117),
    eP = n(226323),
    eO = n(981631),
    eR = n(190378),
    ej = n(388032),
    eD = n(74671),
    ew = n(483938);
function ek(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eM(e) {
    let t = e.currentTarget;
    eA.default.track(eO.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eO.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eU() {
    let e = l.useRef(null);
    (0, _.Tbt)(e),
        l.useEffect(() => {
            eA.default.track(eO.rMx.OPEN_POPOUT, { type: eO.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: eD.noiseCancellationPopout,
        children: [
            (0, i.jsx)(_.j7V, {
                hideBorder: !0,
                className: ew.marginBottom4,
                value: t,
                onChange: () => f.Z.setNoiseCancellation(!t, { section: eO.jXE.NOISE_CANCELLATION_POPOUT }),
                note: ej.intl.string(ej.t.uKdWn5),
                children: ej.intl.string(ej.t.WGWHv7)
            }),
            (0, i.jsx)(C.Z, {
                title: ej.intl.string(ej.t.JdUas7),
                notchBackground: C._.BLACK,
                buttonTest: ej.intl.string(ej.t['sG+MGh']),
                buttonStop: ej.intl.string(ej.t.Yp3SbG),
                buttonClassName: eD.micTestButton,
                buttonColor: _.zxk.Colors.PRIMARY,
                location: { section: eO.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(_.vwX, {
                tag: _.RB0.H5,
                className: a()(ew.marginBottom8, ew.marginTop20),
                children: ej.intl.string(ej.t.k6h1Fx)
            }),
            (0, i.jsxs)(w.Z, {
                justify: w.Z.Justify.BETWEEN,
                className: eD.__invalid_footer,
                children: [
                    (0, i.jsx)(_.eee, {
                        href: eO.EYA.KRISP,
                        onClick: (e) => eM(e),
                        children: (0, i.jsx)('div', { className: eD.krispLogo })
                    }),
                    (0, i.jsx)(_.eee, {
                        href: eb.Z.getArticleURL(eO.BhN.NOISE_SUPPRESSION),
                        className: eD.krispLink,
                        onClick: (e) => eM(e),
                        children: ej.intl.string(ej.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eG() {
    let e = (0, d.e7)([et.Z], () => et.Z.isMuted()),
        t = e ? ej.intl.string(ej.t.ScHlfn) : ej.intl.string(ej.t.zqxfra);
    return (0, i.jsx)(ex.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? _.xjP : _.RZG,
        onClick: () => (0, $.v)(!e)
    });
}
function eB(e) {
    let { channel: t, enableActivities: n, disabled: r } = e,
        s = (0, k.Q3)('ConnectedVideoButton'),
        o = (0, el.Z)(),
        c = (0, ea.Z)(t),
        u = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        h = (0, K.Z)(t),
        { reachedLimit: m, limit: g } = (0, er.Z)(t),
        E = l.useCallback(() => {
            (0, eo.Z)();
        }, []),
        I = (0, T.bp)(),
        C = l.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    f.Z.setVideoEnabled(e), e && (0, W.uL)(eO.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eO.ME, t.id));
                };
                e ? (0, eu.Z)(n, I) : n();
            },
            [t, I]
        ),
        N = u || n || h,
        { Component: v, play: A, events: b } = (0, p.o)(o.enabled ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => A(), [o.enabled, A]),
        (0, i.jsx)(eh.Z, {
            onChange: C,
            onCameraUnavailable: E,
            hasPermission: c,
            channelLimit: g,
            channelLimitReached: m,
            ...o,
            enabled: !r && o.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: l, iconComponent: r, ...o } = e,
                    c = (0, i.jsx)(v, {
                        size: s ? 'md' : 'sm',
                        className: a()(eD.buttonIcon, { [eD.withText]: !N }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(_.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: _.yRy.Animation.FADE,
                    children: (e, r) => {
                        let { onClick: d, ...u } = e,
                            { isShown: h } = r;
                        return (0, i.jsx)(_.ua7, {
                            text: l,
                            children: (e) =>
                                (0, i.jsx)(_.zxk, {
                                    ...o,
                                    ...e,
                                    ...u,
                                    onClick: (t) => {
                                        var n;
                                        o.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && d(t);
                                    },
                                    onMouseEnter: () => {
                                        var t, n;
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = u.onMouseEnter) || void 0 === n || n.call(u), b.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), b.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        d(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: s ? _.zxk.Sizes.MEDIUM : _.zxk.Sizes.SMALL,
                                    className: a()(eD.button, eD.buttonColor, {
                                        [eD.buttonActive]: n,
                                        [eD.fauxDisabled]: t,
                                        [eD.disabled]: o.disabled
                                    }),
                                    innerClassName: eD.buttonContents,
                                    wrapperClassName: eD.button,
                                    fullWidth: !0,
                                    children: N
                                        ? c
                                        : (0, i.jsxs)(w.Z, {
                                              align: w.Z.Align.CENTER,
                                              children: [c, ej.intl.string(ej.t.FlNoSU)]
                                          })
                                })
                        });
                    }
                });
            }
        })
    );
}
function eV(e) {
    let t,
        n,
        { channel: l, enableActivities: r } = e,
        s = (0, k.Q3)('ConnectedVideoButton'),
        o = (0, T.bp)(),
        { analyticsLocations: c } = (0, O.ZP)(),
        m = o === eO.IlC.POPOUT,
        p = (0, Z.KF)(l.id),
        g = (0, Z.g5)(p),
        { userInActivity: f } = (0, d.cj)([S.ZP], () => ({ userInActivity: null != S.ZP.getSelfEmbeddedActivityForChannel(l.id) })),
        E = (0, v.O)(),
        I = (0, b.a)(),
        C = p !== Z.jy.CAN_LAUNCH,
        { enabled: N } = R.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: A, events: x, play: P } = (0, u.s)(),
        { Component: j, events: D, play: w } = (0, h.w)();
    return (N ? ((t = D), (n = w)) : ((t = x), (n = P)), r)
        ? (0, i.jsx)(_.ua7, {
              text: g,
              children: (e) =>
                  (0, i.jsxs)(_.zxk, {
                      ...e,
                      fullWidth: !0,
                      size: s ? _.zxk.Sizes.MEDIUM : _.zxk.Sizes.SMALL,
                      ...t,
                      onClick: () => {
                          var t;
                          n(),
                              (0, y.Z)({
                                  channel: l,
                                  guildId: l.guild_id,
                                  locationObject: E.location,
                                  openInPopout: m,
                                  analyticsLocations: c,
                                  opensAppLauncherModal: !0
                              }),
                              null === (t = e.onClick) || void 0 === t || t.call(e);
                      },
                      onMouseEnter: () => {
                          var n;
                          t.onMouseEnter(), null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
                      },
                      onMouseLeave: () => {
                          var n;
                          t.onMouseLeave(), null == e || null === (n = e.onMouseLeave) || void 0 === n || n.call(e);
                      },
                      disabled: C,
                      className: a()(eD.button, eD.buttonColor, {
                          [eD.buttonActive]: f,
                          [eD.disabled]: C
                      }),
                      innerClassName: eD.buttonContents,
                      wrapperClassName: eD.button,
                      children: [
                          I
                              ? (0, i.jsx)(L.r, {
                                    top: -1,
                                    right: -1
                                })
                              : null,
                          N
                              ? (0, i.jsx)(j, {
                                    size: s ? 'md' : 'sm',
                                    color: 'currentColor',
                                    className: eD.buttonIcon
                                })
                              : (0, i.jsx)(A, {
                                    size: s ? 'md' : 'sm',
                                    color: 'currentColor',
                                    className: eD.buttonIcon
                                })
                      ]
                  })
          })
        : null;
}
function eH(e) {
    let t,
        { channel: n, canGoLive: r, enableActivities: s, disabled: o } = e,
        c = (0, k.Q3)('ConnectedStreamButton'),
        u = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        h = (0, d.Wu)([em.Z], () => em.Z.getAllActiveStreams()),
        p = (0, ea.Z)(n),
        g = n.getGuildId(),
        f = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        E = (0, K.Z)(n),
        I = l.useCallback(() => {
            (0, ed.Z)(g, n.id, eO.jXE.ACTIVITY_PANEL);
        }, [g, n.id]),
        C = h.find((e) => e.ownerId === (null == u ? void 0 : u.id)),
        N = (0, es.E)(n, u, h);
    t = null == C ? (r ? I : ec.Z) : () => (0, V.Z)(C);
    let v = null != C || N.length > 0,
        T = p ? ej.intl.string(ej.t.fjBNo6) : ej.intl.string(ej.t.uQn9Bw),
        A = f || s || E,
        b = null != C,
        { Component: Z, events: x, play: L } = (0, m.P)(b ? 'disable' : 'enable');
    l.useEffect(() => () => L(), [L, b]);
    let y = (0, i.jsx)(Z, {
        size: c ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(eD.buttonIcon, { [eD.withText]: !A })
    });
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(es.Z, {
                channel: n,
                currentUser: u,
                activeStreams: h,
                onClose: t,
                handleGoLive: r ? I : ec.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: _.yRy.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: l, ...r } = e;
            return (0, i.jsx)(_.ua7, {
                text: T,
                children: (e) =>
                    (0, i.jsx)(_.zxk, {
                        ...e,
                        size: c ? _.zxk.Sizes.MEDIUM : _.zxk.Sizes.SMALL,
                        onClick: (i) => {
                            var l;
                            v ? n(i) : t(), null === (l = e.onClick) || void 0 === l || l.call(e);
                        },
                        disabled: !p || o,
                        className: a()(eD.button, eD.buttonColor, {
                            [eD.buttonActive]: null != C,
                            [eD.disabled]: !p || o
                        }),
                        ...(v ? r : null),
                        onMouseEnter: () => {
                            var t;
                            null == l || l(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), x.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            var t;
                            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), x.onMouseLeave();
                        },
                        innerClassName: eD.buttonContents,
                        wrapperClassName: eD.button,
                        children: A
                            ? y
                            : (0, i.jsxs)(w.Z, {
                                  align: w.Z.Align.CENTER,
                                  children: [y, ej.intl.string(ej.t['r0/+v7'])]
                              })
                    })
            });
        }
    });
}
class eF extends l.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: l, rtcConnectionState: r, rtcConnectionLastPing: a, hasVideo: s } = this.props;
        if (null == t) return null;
        let o = (0, D.F6)(t, ev.default, eN.Z);
        return (
            null != n ? ((e = eO.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = eO.Z5c.CHANNEL(eO.ME, t.id)),
            (0, i.jsx)(Y.Z, {
                channelId: t.id,
                quality: l,
                state: r,
                lastPing: a,
                hasVideo: s,
                children: (0, i.jsx)(_.tEY, {
                    children: (0, i.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eL.Z, {
                            className: eD.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, i.jsx)(_.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      lineClamp: 1,
                                      children: o
                                  })
                                : o
                        })
                    })
                })
            })
        );
    }
    renderNoiseCancellation() {
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: l, channel: r, voiceStates: a } = this.props;
        return null != l
            ? null
            : (null == r ? void 0 : r.isGuildStageVoice()) && !(null != a.find((e) => e.user.id === ep.default.getId() && (0, en.gf)(e.voiceState) === en.xO.ON_STAGE)) && (0, ee.U5)(r.id)
              ? (0, i.jsx)(eG, {})
              : !n && t
                ? (0, i.jsx)(_.ua7, {
                      text: ej.intl.string(ej.t['i+SO/f']),
                      tooltipClassName: eD.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, i.jsx)(ex.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: _.oIc
                          });
                      }
                  })
                : (0, i.jsx)(
                      _.yRy,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, i.jsx)(eU, {}),
                          children: (t, n) => {
                              let { isShown: l } = n;
                              return (0, i.jsx)(ez, {
                                  popoutProps: t,
                                  isShown: l,
                                  noiseCancellationActive: e
                              });
                          }
                      },
                      'krisp-popout'
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, i.jsx)(eP.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eD.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: l, voiceStates: r, selfStream: s, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let c = ep.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.tu)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && l,
            { reachedLimit: u } = (0, er.t)(e),
            h = (0, J.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: eD.actionButtons,
            children: [
                (0, i.jsx)(eB, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && u
                }),
                (0, i.jsx)(eH, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == s) || (!h && u))
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d
                            ? (0, i.jsx)(eV, {
                                  channel: e,
                                  enableActivities: l
                              })
                            : null,
                        (0, K.Z)(e)
                            ? (0, i.jsx)(q.Z, {
                                  className: a()(eD.button, eD.buttonColor),
                                  innerClassName: eD.buttonContents,
                                  iconClassName: eD.buttonIcon,
                                  channel: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(_.yRy, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: _.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)('div', {
                          className: eD.container,
                          children: [
                              (0, i.jsxs)(w.Z, {
                                  className: eD.connection,
                                  align: w.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: eD.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(w.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eD.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(ey.Z, { channel: e })]
                                      })
                                  ]
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons()
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            ek(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            ek(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                f.Z.setNoiseCancellation(!e, { section: eO.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            ek(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                null != n && (0, ed.Z)(n, t.id, eO.Sbl.VOICE_PANEL);
            }),
            ek(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), I.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eO.ME, i.id);
            }),
            ek(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: l } = this.props;
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(O.Gt, {
                            value: l,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            ek(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            ek(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: a()(eD.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(_.X6q, {
                            className: eD.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: ej.intl.string(ej.t['ba/rLy'])
                        }),
                        (0, i.jsx)(_.Text, {
                            className: eD.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: ej.intl.string(ej.t.Ne1Ee3)
                        }),
                        (0, i.jsx)(_.zxk, {
                            className: eD.voicePanelIntroductionButton,
                            color: _.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: ej.intl.string(ej.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function ez(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: r } = e,
        { play: a, Component: s, events: o } = (0, g.P)(r ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => a(), [r, a]),
        (0, i.jsx)(ex.Z, {
            ...t,
            onMouseEnter: () => {
                var e;
                null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
            },
            onMouseLeave: () => {
                o.onMouseLeave();
            },
            tooltipClassName: eD.noiseCancellationTooltip,
            tooltipText: n ? null : ej.intl.string(ej.t.vFiCS0),
            icon: (0, i.jsx)(s, { size: 'refresh_sm' })
        })
    );
}
let eW = (0, N.Z)(function (e) {
    let t = (0, k.Q3)('ConnectedRTCConnection'),
        n = (0, U.Z)(),
        r = (0, d.e7)([M.Z], () => M.Z.getAwaitingRemoteSessionInfo()),
        a = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        { channelId: s, ...o } = (0, d.cj)([eC.Z], () =>
            null != n
                ? {
                      channelId: n.channelId,
                      rtcConnectionQuality: eO.IE4.FINE,
                      rtcConnectionState: eO.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eC.Z.getChannelId(),
                      rtcConnectionQuality: eC.Z.getQuality(),
                      rtcConnectionState: eC.Z.getState(),
                      rtcConnectionLastPing: eC.Z.getLastPing()
                  }
        ),
        c = (0, d.e7)([eg.Z], () => eg.Z.getChannel(s), [s]),
        u = null == c ? void 0 : c.getGuildId(),
        h = (0, d.e7)([e_.Z], () => e_.Z.getGuild(u), [u]),
        m = (0, d.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, B.Z)(eE.Z)
        })),
        p = (0, d.e7)([eE.Z, F.Z], () => F.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eZ.EO)(a) && !eE.Z.isInteractionRequired() && !(null == c ? void 0 : c.isGuildStageVoice())),
        g = (0, d.e7)([eT.Z], () => null != s && eT.Z.hasVideo(s), [s]),
        f = (0, d.e7)([em.Z], () => em.Z.getCurrentUserActiveStream()),
        E = (0, d.e7)([ef.Z], () => ef.Z.hasLayers()),
        I = (0, d.e7)([z.Z], () => z.Z.isViewingRoles(u)),
        C = (0, d.e7)([eI.Z], () => I && !eI.Z.can(eO.Plq.VIEW_CHANNEL, c), [I, c]),
        N = ei.Fg.useSetting(),
        [v, T, S] = (0, d.Wu)([eS.ZP, X.Z], () => ((null == c ? void 0 : c.isGuildStageVoice()) ? [X.Z.getMutableParticipants(c.id, Q.pV.SPEAKER), X.Z.getParticipantsVersion(c.id), null] : [null, null, null != c ? eS.ZP.getVoiceStatesForChannel(c) : null]), [c]),
        b = l.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == v
                                ? void 0
                                : v.map((e) => {
                                      let { user: t, userNick: n, voiceState: i } = e;
                                      return {
                                          user: t,
                                          nick: n,
                                          voiceState: i
                                      };
                                  })) && void 0 !== e
                        ? e
                        : S) && void 0 !== t
                ? t
                : [];
        }, [v, T, S]),
        [Z, L] = l.useState(!1);
    l.useEffect(() => {
        (I || C) && L(!1);
    }, [I, C, L]);
    let { analyticsLocations: y } = (0, O.ZP)(P.Z.RTC_PANEL),
        R = (0, A.Z)(null != u ? u : eO.lds, null == c ? void 0 : c.id),
        j = (0, x.Z)(null == c ? void 0 : c.id);
    return (0, i.jsx)(O.Gt, {
        value: y,
        children: (0, i.jsxs)('div', {
            className: eD.wrapper,
            children: [
                null != n || null != r
                    ? (0, i.jsx)(G.Z, {
                          voiceState: n,
                          awaitingRemoteSessionInfo: r
                      })
                    : null,
                (0, i.jsx)(eF, {
                    ...e,
                    ...m,
                    ...o,
                    enableActivities: R,
                    remoteVoiceState: n,
                    guild: h,
                    channel: c,
                    hasVideo: g,
                    selfStream: f,
                    hasLayers: E,
                    voiceStates: b,
                    showVoiceStates: N,
                    shouldShowVoicePanelIntroduction: p,
                    isPrivateChannelWithEnabledActivities: j,
                    analyticsLocations: y,
                    isVisualRefreshEnabled: t
                }),
                !Z && I && null != u
                    ? (0, i.jsxs)('div', {
                          className: eD.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(_.Text, {
                                  variant: 'text-sm/normal',
                                  className: eD.viewAsRolesWarningText,
                                  children: C ? ej.intl.string(ej.t.efjuQE) : ej.intl.string(ej.t.br8H2N)
                              }),
                              (0, i.jsx)(_.zxk, {
                                  className: eD.viewAsRolesWarningButton,
                                  size: _.zxk.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  children: ej.intl.string(ej.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
