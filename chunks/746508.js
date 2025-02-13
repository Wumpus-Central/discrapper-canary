n.d(t, { Z: () => eY }), n(47120);
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
    O = n(100527),
    P = n(906732),
    R = n(424602),
    j = n(682901),
    D = n(793865),
    w = n(933557),
    k = n(600164),
    M = n(540059),
    U = n(258609),
    G = n(446226),
    B = n(935261),
    V = n(74299),
    H = n(803647),
    F = n(142497),
    z = n(810788),
    W = n(160404),
    Y = n(703656),
    K = n(917405),
    q = n(641015),
    X = n(848543),
    Q = n(565799),
    J = n(501655),
    $ = n(368442),
    ee = n(600518),
    et = n(485287),
    en = n(754277),
    ei = n(590415),
    el = n(695346),
    er = n(923973),
    ea = n(829750),
    es = n(189771),
    eo = n(544384),
    ec = n(560688),
    ed = n(127608),
    eu = n(76021),
    eh = n(173507),
    em = n(25827),
    ep = n(199902),
    eg = n(314897),
    e_ = n(592125),
    ef = n(430824),
    eE = n(819640),
    eI = n(131951),
    eC = n(496675),
    eN = n(19780),
    ev = n(699516),
    eT = n(594174),
    eS = n(979651),
    eA = n(938475),
    eb = n(626135),
    eZ = n(63063),
    ex = n(51144),
    eL = n(870569),
    ey = n(345243),
    eO = n(594117),
    eP = n(226323),
    eR = n(981631),
    ej = n(190378),
    eD = n(388032),
    ew = n(110696),
    ek = n(814632);
function eM(e, t, n) {
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
function eU(e) {
    let t = e.currentTarget;
    eb.default.track(eR.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eG() {
    let e = l.useRef(null);
    (0, _.Tbt)(e),
        l.useEffect(() => {
            eb.default.track(eR.rMx.OPEN_POPOUT, { type: eR.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([eI.Z], () => eI.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: ew.noiseCancellationPopout,
        children: [
            (0, i.jsx)(_.j7V, {
                hideBorder: !0,
                className: ek.marginBottom4,
                value: t,
                onChange: () => f.Z.setNoiseCancellation(!t, { section: eR.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eD.intl.string(eD.t.uKdWn5),
                children: eD.intl.string(eD.t.WGWHv7)
            }),
            (0, i.jsx)(C.Z, {
                title: eD.intl.string(eD.t.JdUas7),
                notchBackground: C._.BLACK,
                buttonTest: eD.intl.string(eD.t['sG+MGh']),
                buttonStop: eD.intl.string(eD.t.Yp3SbG),
                buttonClassName: ew.micTestButton,
                buttonColor: _.zxk.Colors.PRIMARY,
                location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(_.vwX, {
                tag: _.RB0.H5,
                className: a()(ek.marginBottom8, ek.marginTop20),
                children: eD.intl.string(eD.t.k6h1Fx)
            }),
            (0, i.jsxs)(k.Z, {
                justify: k.Z.Justify.BETWEEN,
                className: ew.__invalid_footer,
                children: [
                    (0, i.jsx)(_.eee, {
                        href: eR.EYA.KRISP,
                        onClick: (e) => eU(e),
                        children: (0, i.jsx)('div', { className: ew.krispLogo })
                    }),
                    (0, i.jsx)(_.eee, {
                        href: eZ.Z.getArticleURL(eR.BhN.NOISE_SUPPRESSION),
                        className: ew.krispLink,
                        onClick: (e) => eU(e),
                        children: eD.intl.string(eD.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eB() {
    let e = (0, d.e7)([en.Z], () => en.Z.isMuted()),
        t = e ? eD.intl.string(eD.t.ScHlfn) : eD.intl.string(eD.t.zqxfra);
    return (0, i.jsx)(eL.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? _.xjP : _.RZG,
        onClick: () => (0, ee.v)(!e)
    });
}
function eV(e) {
    let { channel: t, enableActivities: n, disabled: r } = e,
        s = (0, M.Q3)('ConnectedVideoButton'),
        { enabled: o } = (0, j.Z)({ location: 'ConnectedVideoButton' }),
        c = (0, er.Z)(),
        u = (0, es.Z)(t),
        h = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        m = (0, q.Z)(t),
        { reachedLimit: g, limit: E } = (0, ea.Z)(t),
        I = l.useCallback(() => {
            (0, ec.Z)();
        }, []),
        C = (0, T.bp)(),
        N = l.useCallback(
            (e) => {
                if (eI.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    f.Z.setVideoEnabled(e), e && (0, Y.uL)(eR.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eR.ME, t.id));
                };
                e ? (0, eh.Z)(n, C) : n();
            },
            [t, C]
        ),
        v = h || n || m,
        { Component: A, play: b, events: Z } = (0, p.o)(c.enabled ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => b(), [c.enabled, b]),
        (0, i.jsx)(em.Z, {
            onChange: N,
            onCameraUnavailable: I,
            hasPermission: u,
            channelLimit: E,
            channelLimitReached: g,
            ...c,
            enabled: !r && c.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: l, iconComponent: r, ...c } = e,
                    d = (0, i.jsx)(A, {
                        size: s ? 'md' : 'sm',
                        className: a()(ew.buttonIcon, { [ew.withText]: !v }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(_.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(D.Z, {
                            onClose: t,
                            simplified: o
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: _.yRy.Animation.FADE,
                    children: (e, r) => {
                        let { onClick: o, ...u } = e,
                            { isShown: h } = r;
                        return (0, i.jsx)(_.ua7, {
                            text: l,
                            children: (e) =>
                                (0, i.jsx)(_.zxk, {
                                    ...c,
                                    ...e,
                                    ...u,
                                    onClick: (t) => {
                                        var n;
                                        c.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && o(t);
                                    },
                                    onMouseEnter: () => {
                                        var t, n;
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = u.onMouseEnter) || void 0 === n || n.call(u), Z.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), Z.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        o(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: s ? _.zxk.Sizes.MEDIUM : _.zxk.Sizes.SMALL,
                                    className: a()(ew.button, ew.buttonColor, {
                                        [ew.buttonActive]: n,
                                        [ew.fauxDisabled]: t,
                                        [ew.disabled]: c.disabled
                                    }),
                                    innerClassName: ew.buttonContents,
                                    wrapperClassName: ew.button,
                                    fullWidth: !0,
                                    children: v
                                        ? d
                                        : (0, i.jsxs)(k.Z, {
                                              align: k.Z.Align.CENTER,
                                              children: [d, eD.intl.string(eD.t.FlNoSU)]
                                          })
                                })
                        });
                    }
                });
            }
        })
    );
}
function eH(e) {
    let t,
        n,
        { channel: l, enableActivities: r } = e,
        s = (0, M.Q3)('ConnectedVideoButton'),
        o = (0, T.bp)(),
        { analyticsLocations: c } = (0, P.ZP)(),
        m = o === eR.IlC.POPOUT,
        p = (0, Z.KF)(l.id),
        g = (0, Z.g5)(p),
        { userInActivity: f } = (0, d.cj)([S.ZP], () => ({ userInActivity: null != S.ZP.getSelfEmbeddedActivityForChannel(l.id) })),
        E = (0, v.O)(),
        I = (0, b.a)(),
        C = p !== Z.jy.CAN_LAUNCH,
        { enabled: N } = R.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: A, events: x, play: O } = (0, u.s)(),
        { Component: j, events: D, play: w } = (0, h.w)();
    return (N ? ((t = D), (n = w)) : ((t = x), (n = O)), r)
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
                      className: a()(ew.button, ew.buttonColor, {
                          [ew.buttonActive]: f,
                          [ew.disabled]: C
                      }),
                      innerClassName: ew.buttonContents,
                      wrapperClassName: ew.button,
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
                                    className: ew.buttonIcon
                                })
                              : (0, i.jsx)(A, {
                                    size: s ? 'md' : 'sm',
                                    color: 'currentColor',
                                    className: ew.buttonIcon
                                })
                      ]
                  })
          })
        : null;
}
function eF(e) {
    let t,
        { channel: n, canGoLive: r, enableActivities: s, disabled: o } = e,
        c = (0, M.Q3)('ConnectedStreamButton'),
        u = (0, d.e7)([eT.default], () => eT.default.getCurrentUser()),
        h = (0, d.Wu)([ep.Z], () => ep.Z.getAllActiveStreams()),
        p = (0, es.Z)(n),
        g = n.getGuildId(),
        f = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        E = (0, q.Z)(n),
        I = l.useCallback(() => {
            (0, eu.Z)(g, n.id, eR.jXE.ACTIVITY_PANEL);
        }, [g, n.id]),
        C = h.find((e) => e.ownerId === (null == u ? void 0 : u.id)),
        N = (0, eo.E)(n, u, h);
    t = null == C ? (r ? I : ed.Z) : () => (0, H.Z)(C);
    let v = null != C || N.length > 0,
        T = p ? eD.intl.string(eD.t.fjBNo6) : eD.intl.string(eD.t.uQn9Bw),
        A = f || s || E,
        b = null != C,
        { Component: Z, events: x, play: L } = (0, m.P)(b ? 'disable' : 'enable');
    l.useEffect(() => () => L(), [L, b]);
    let y = (0, i.jsx)(Z, {
        size: c ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(ew.buttonIcon, { [ew.withText]: !A })
    });
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eo.Z, {
                channel: n,
                currentUser: u,
                activeStreams: h,
                onClose: t,
                handleGoLive: r ? I : ed.Z
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
                        className: a()(ew.button, ew.buttonColor, {
                            [ew.buttonActive]: null != C,
                            [ew.disabled]: !p || o
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
                        innerClassName: ew.buttonContents,
                        wrapperClassName: ew.button,
                        children: A
                            ? y
                            : (0, i.jsxs)(k.Z, {
                                  align: k.Z.Align.CENTER,
                                  children: [y, eD.intl.string(eD.t['r0/+v7'])]
                              })
                    })
            });
        }
    });
}
class ez extends l.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: l, rtcConnectionState: r, rtcConnectionLastPing: a, hasVideo: s } = this.props;
        if (null == t) return null;
        let o = (0, w.F6)(t, eT.default, ev.Z);
        return (
            null != n ? ((e = eR.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = eR.Z5c.CHANNEL(eR.ME, t.id)),
            (0, i.jsx)(K.Z, {
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
                        children: (0, i.jsx)(ey.Z, {
                            className: ew.channel,
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
            : (null == r ? void 0 : r.isGuildStageVoice()) && !(null != a.find((e) => e.user.id === eg.default.getId() && (0, ei.gf)(e.voiceState) === ei.xO.ON_STAGE)) && (0, et.U5)(r.id)
              ? (0, i.jsx)(eB, {})
              : !n && t
                ? (0, i.jsx)(_.ua7, {
                      text: eD.intl.string(eD.t['i+SO/f']),
                      tooltipClassName: ew.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, i.jsx)(eL.Z, {
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
                          renderPopout: () => (0, i.jsx)(eG, {}),
                          children: (t, n) => {
                              let { isShown: l } = n;
                              return (0, i.jsx)(eW, {
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
                  className: ew.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: l, voiceStates: r, selfStream: s, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let c = eg.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, $.tu)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && l,
            { reachedLimit: u } = (0, ea.t)(e),
            h = (0, $.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: ew.actionButtons,
            children: [
                (0, i.jsx)(eV, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && u
                }),
                (0, i.jsx)(eF, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == s) || (!h && u))
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d
                            ? (0, i.jsx)(eH, {
                                  channel: e,
                                  enableActivities: l
                              })
                            : null,
                        (0, q.Z)(e)
                            ? (0, i.jsx)(X.Z, {
                                  className: a()(ew.button, ew.buttonColor),
                                  innerClassName: ew.buttonContents,
                                  iconClassName: ew.buttonIcon,
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
                          className: ew.container,
                          children: [
                              (0, i.jsxs)(k.Z, {
                                  className: ew.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: ew.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ew.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eO.Z, { channel: e })]
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
            eM(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            eM(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                f.Z.setNoiseCancellation(!e, { section: eR.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            eM(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                null != n && (0, eu.Z)(n, t.id, eR.Sbl.VOICE_PANEL);
            }),
            eM(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), I.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eR.ME, i.id);
            }),
            eM(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: l } = this.props;
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(P.Gt, {
                            value: l,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            eM(this, 'handleCloseVoicePanelIntroduction', () => {
                F.Kw(ej.v.VOICE_PANEL_INTRODUCTION);
            }),
            eM(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: a()(ew.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(_.X6q, {
                            className: ew.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eD.intl.string(eD.t['ba/rLy'])
                        }),
                        (0, i.jsx)(_.Text, {
                            className: ew.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eD.intl.string(eD.t.Ne1Ee3)
                        }),
                        (0, i.jsx)(_.zxk, {
                            className: ew.voicePanelIntroductionButton,
                            color: _.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eD.intl.string(eD.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eW(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: r } = e,
        { play: a, Component: s, events: o } = (0, g.P)(r ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => a(), [r, a]),
        (0, i.jsx)(eL.Z, {
            ...t,
            onMouseEnter: () => {
                var e;
                null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
            },
            onMouseLeave: () => {
                o.onMouseLeave();
            },
            tooltipClassName: ew.noiseCancellationTooltip,
            tooltipText: n ? null : eD.intl.string(eD.t.vFiCS0),
            icon: (0, i.jsx)(s, { size: 'refresh_sm' })
        })
    );
}
let eY = (0, N.Z)(function (e) {
    let t = (0, M.Q3)('ConnectedRTCConnection'),
        n = (0, G.Z)(),
        r = (0, d.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        a = (0, d.e7)([eT.default], () => eT.default.getCurrentUser()),
        { channelId: s, ...o } = (0, d.cj)([eN.Z], () =>
            null != n
                ? {
                      channelId: n.channelId,
                      rtcConnectionQuality: eR.IE4.FINE,
                      rtcConnectionState: eR.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eN.Z.getChannelId(),
                      rtcConnectionQuality: eN.Z.getQuality(),
                      rtcConnectionState: eN.Z.getState(),
                      rtcConnectionLastPing: eN.Z.getLastPing()
                  }
        ),
        c = (0, d.e7)([e_.Z], () => e_.Z.getChannel(s), [s]),
        u = null == c ? void 0 : c.getGuildId(),
        h = (0, d.e7)([ef.Z], () => ef.Z.getGuild(u), [u]),
        m = (0, d.cj)([eI.Z], () => ({
            noiseCancellationSupported: eI.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eI.Z.getNoiseCancellation(),
            noiseCancellationError: eI.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eI.Z)
        })),
        p = (0, d.e7)([eI.Z, z.Z], () => z.Z.hasHotspot(ej.v.VOICE_PANEL_INTRODUCTION) && (0, ex.EO)(a) && !eI.Z.isInteractionRequired() && !(null == c ? void 0 : c.isGuildStageVoice())),
        g = (0, d.e7)([eS.Z], () => null != s && eS.Z.hasVideo(s), [s]),
        f = (0, d.e7)([ep.Z], () => ep.Z.getCurrentUserActiveStream()),
        E = (0, d.e7)([eE.Z], () => eE.Z.hasLayers()),
        I = (0, d.e7)([W.Z], () => W.Z.isViewingRoles(u)),
        C = (0, d.e7)([eC.Z], () => I && !eC.Z.can(eR.Plq.VIEW_CHANNEL, c), [I, c]),
        N = el.Fg.useSetting(),
        [v, T, S] = (0, d.Wu)([eA.ZP, Q.Z], () => ((null == c ? void 0 : c.isGuildStageVoice()) ? [Q.Z.getMutableParticipants(c.id, J.pV.SPEAKER), Q.Z.getParticipantsVersion(c.id), null] : [null, null, null != c ? eA.ZP.getVoiceStatesForChannel(c) : null]), [c]),
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
    let { analyticsLocations: y } = (0, P.ZP)(O.Z.RTC_PANEL),
        R = (0, A.Z)(null != u ? u : eR.lds, null == c ? void 0 : c.id),
        j = (0, x.Z)(null == c ? void 0 : c.id);
    return (0, i.jsx)(P.Gt, {
        value: y,
        children: (0, i.jsxs)('div', {
            className: ew.wrapper,
            children: [
                null != n || null != r
                    ? (0, i.jsx)(B.Z, {
                          voiceState: n,
                          awaitingRemoteSessionInfo: r
                      })
                    : null,
                (0, i.jsx)(ez, {
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
                          className: ew.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(_.Text, {
                                  variant: 'text-sm/normal',
                                  className: ew.viewAsRolesWarningText,
                                  children: C ? eD.intl.string(eD.t.efjuQE) : eD.intl.string(eD.t.br8H2N)
                              }),
                              (0, i.jsx)(_.zxk, {
                                  className: ew.viewAsRolesWarningButton,
                                  size: _.zxk.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  children: eD.intl.string(eD.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
