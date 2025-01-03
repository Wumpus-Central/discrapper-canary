n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(568611),
    d = n(442837),
    u = n(592471),
    h = n(749280),
    m = n(864094),
    p = n(75735),
    g = n(382600),
    f = n(481060),
    _ = n(846027),
    E = n(239091),
    I = n(925549),
    C = n(284056),
    N = n(730749),
    v = n(2052),
    S = n(40851),
    T = n(317381),
    b = n(596040),
    A = n(588580),
    Z = n(374065),
    x = n(451576),
    L = n(119315),
    P = n(403404),
    O = n(100527),
    y = n(906732),
    R = n(424602),
    j = n(793865),
    D = n(933557),
    M = n(600164),
    w = n(540059),
    k = n(258609),
    U = n(446226),
    G = n(935261),
    B = n(74299),
    H = n(803647),
    V = n(142497),
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
    er = n(923973),
    el = n(829750),
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
    ef = n(430824),
    e_ = n(819640),
    eE = n(131951),
    eI = n(496675),
    eC = n(19780),
    eN = n(699516),
    ev = n(594174),
    eS = n(979651),
    eT = n(938475),
    eb = n(626135),
    eA = n(63063),
    eZ = n(51144),
    ex = n(870569),
    eL = n(345243),
    eP = n(594117),
    eO = n(226323),
    ey = n(981631),
    eR = n(190378),
    ej = n(388032),
    eD = n(382290),
    eM = n(232186);
function ew(e, t, n) {
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
function ek(e) {
    let t = e.currentTarget;
    eb.default.track(ey.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ey.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eU() {
    let e = r.useRef(null);
    (0, f.useFocusLock)(e),
        r.useEffect(() => {
            eb.default.track(ey.rMx.OPEN_POPOUT, { type: ey.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: eD.noiseCancellationPopout,
        children: [
            (0, i.jsx)(f.FormSwitch, {
                hideBorder: !0,
                className: eM.marginBottom4,
                value: t,
                onChange: () => _.Z.setNoiseCancellation(!t, { section: ey.jXE.NOISE_CANCELLATION_POPOUT }),
                note: ej.intl.string(ej.t.uKdWn5),
                children: ej.intl.string(ej.t.WGWHv7)
            }),
            (0, i.jsx)(C.Z, {
                title: ej.intl.string(ej.t.JdUas7),
                notchBackground: C._.BLACK,
                buttonTest: ej.intl.string(ej.t['sG+MGh']),
                buttonStop: ej.intl.string(ej.t.Yp3SbG),
                buttonClassName: eD.micTestButton,
                buttonColor: f.Button.Colors.PRIMARY,
                location: { section: ey.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(f.FormTitle, {
                tag: f.FormTitleTags.H5,
                className: a()(eM.marginBottom8, eM.marginTop20),
                children: ej.intl.string(ej.t.k6h1Fx)
            }),
            (0, i.jsxs)(M.Z, {
                justify: M.Z.Justify.BETWEEN,
                className: eD.__invalid_footer,
                children: [
                    (0, i.jsx)(f.Anchor, {
                        href: ey.EYA.KRISP,
                        onClick: (e) => ek(e),
                        children: (0, i.jsx)('div', { className: eD.krispLogo })
                    }),
                    (0, i.jsx)(f.Anchor, {
                        href: eA.Z.getArticleURL(ey.BhN.NOISE_SUPPRESSION),
                        className: eD.krispLink,
                        onClick: (e) => ek(e),
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
        icon: e ? f.MusicSlashIcon : f.MusicIcon,
        onClick: () => (0, $.v)(!e)
    });
}
function eB(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = (0, w.Q3)('ConnectedVideoButton'),
        o = (0, er.Z)(),
        c = (0, ea.Z)(t),
        u = (0, d.cj)([T.ZP], () => null != T.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        h = (0, K.Z)(t),
        { reachedLimit: m, limit: g } = (0, el.Z)(t),
        E = r.useCallback(() => {
            (0, eo.Z)();
        }, []),
        I = (0, S.bp)(),
        C = r.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    _.Z.setVideoEnabled(e), e && (0, W.uL)(ey.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ey.ME, t.id));
                };
                e ? (0, eu.Z)(n, I) : n();
            },
            [t, I]
        ),
        N = u || n || h,
        { Component: v, play: b, events: A } = (0, p.o)(o.enabled ? 'disable' : 'enable');
    return (
        r.useEffect(() => () => b(), [o.enabled, b]),
        (0, i.jsx)(eh.Z, {
            onChange: C,
            onCameraUnavailable: E,
            hasPermission: c,
            channelLimit: g,
            channelLimitReached: m,
            ...o,
            enabled: !l && o.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: r, iconComponent: l, ...o } = e,
                    c = (0, i.jsx)(v, {
                        size: s ? 'md' : 'sm',
                        className: a()(eD.buttonIcon, { [eD.withText]: !N }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, l) => {
                        let { onClick: d, ...u } = e,
                            { isShown: h } = l;
                        return (0, i.jsx)(f.Tooltip, {
                            text: r,
                            children: (e) =>
                                (0, i.jsx)(f.Button, {
                                    ...o,
                                    ...e,
                                    ...u,
                                    onClick: (t) => {
                                        var n;
                                        o.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && d(t);
                                    },
                                    onMouseEnter: () => {
                                        var t, n;
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = u.onMouseEnter) || void 0 === n || n.call(u), A.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), A.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        d(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: s ? f.Button.Sizes.MEDIUM : f.Button.Sizes.SMALL,
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
                                        : (0, i.jsxs)(M.Z, {
                                              align: M.Z.Align.CENTER,
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
function eH(e) {
    let t,
        n,
        { channel: r, enableActivities: l } = e,
        s = (0, w.Q3)('ConnectedVideoButton'),
        o = (0, S.bp)(),
        { analyticsLocations: c } = (0, y.ZP)(),
        m = o === ey.IlC.POPOUT,
        p = (0, Z.KF)(r.id),
        g = (0, Z.g5)(p),
        { userInActivity: _ } = (0, d.cj)([T.ZP], () => ({ userInActivity: null != T.ZP.getSelfEmbeddedActivityForChannel(r.id) })),
        E = (0, v.O)(),
        I = (0, A.a)(),
        C = p !== Z.jy.CAN_LAUNCH,
        { enabled: N } = R.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: b, events: x, play: O } = (0, u.s)(),
        { Component: j, events: D, play: M } = (0, h.w)();
    return (N ? ((t = D), (n = M)) : ((t = x), (n = O)), l)
        ? (0, i.jsx)(f.Tooltip, {
              text: g,
              children: (e) =>
                  (0, i.jsxs)(f.Button, {
                      ...e,
                      fullWidth: !0,
                      size: s ? f.Button.Sizes.MEDIUM : f.Button.Sizes.SMALL,
                      ...t,
                      onClick: () => {
                          var t;
                          n(),
                              (0, P.Z)({
                                  channel: r,
                                  guildId: r.guild_id,
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
                          [eD.buttonActive]: _,
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
                              : (0, i.jsx)(b, {
                                    size: s ? 'md' : 'sm',
                                    color: 'currentColor',
                                    className: eD.buttonIcon
                                })
                      ]
                  })
          })
        : null;
}
function eV(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        c = (0, w.Q3)('ConnectedStreamButton'),
        u = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        h = (0, d.Wu)([em.Z], () => em.Z.getAllActiveStreams()),
        p = (0, ea.Z)(n),
        g = n.getGuildId(),
        _ = (0, d.cj)([T.ZP], () => null != T.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        E = (0, K.Z)(n),
        I = r.useCallback(() => {
            (0, ed.Z)(g, n.id, ey.jXE.ACTIVITY_PANEL);
        }, [g, n.id]),
        C = h.find((e) => e.ownerId === (null == u ? void 0 : u.id)),
        N = (0, es.E)(n, u, h);
    t = null == C ? (l ? I : ec.Z) : () => (0, H.Z)(C);
    let v = null != C || N.length > 0,
        S = p ? ej.intl.string(ej.t.fjBNo6) : ej.intl.string(ej.t.uQn9Bw),
        b = _ || s || E,
        A = null != C,
        { Component: Z, events: x, play: L } = (0, m.P)(A ? 'disable' : 'enable');
    r.useEffect(() => () => L(), [L, A]);
    let P = (0, i.jsx)(Z, {
        size: c ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(eD.buttonIcon, { [eD.withText]: !b })
    });
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(es.Z, {
                channel: n,
                currentUser: u,
                activeStreams: h,
                onClose: t,
                handleGoLive: l ? I : ec.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: f.Popout.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...l } = e;
            return (0, i.jsx)(f.Tooltip, {
                text: S,
                children: (e) =>
                    (0, i.jsx)(f.Button, {
                        ...e,
                        size: c ? f.Button.Sizes.MEDIUM : f.Button.Sizes.SMALL,
                        onClick: (i) => {
                            var r;
                            v ? n(i) : t(), null === (r = e.onClick) || void 0 === r || r.call(e);
                        },
                        disabled: !p || o,
                        className: a()(eD.button, eD.buttonColor, {
                            [eD.buttonActive]: null != C,
                            [eD.disabled]: !p || o
                        }),
                        ...(v ? l : null),
                        onMouseEnter: () => {
                            var t;
                            null == r || r(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), x.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            var t;
                            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), x.onMouseLeave();
                        },
                        innerClassName: eD.buttonContents,
                        wrapperClassName: eD.button,
                        children: b
                            ? P
                            : (0, i.jsxs)(M.Z, {
                                  align: M.Z.Align.CENTER,
                                  children: [P, ej.intl.string(ej.t['r0/+v7'])]
                              })
                    })
            });
        }
    });
}
class eF extends r.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: r, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: s } = this.props;
        if (null == t) return null;
        let o = (0, D.F6)(t, ev.default, eN.Z);
        return (
            null != n ? ((e = ey.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = ey.Z5c.CHANNEL(ey.ME, t.id)),
            (0, i.jsx)(Y.Z, {
                channelId: t.id,
                quality: r,
                state: l,
                lastPing: a,
                hasVideo: s,
                children: (0, i.jsx)(f.FocusRing, {
                    children: (0, i.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eL.Z, {
                            className: eD.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, i.jsx)(f.Text, {
                                      variant: 'text-sm/medium',
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
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: r, channel: l, voiceStates: a } = this.props;
        return null != r
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != a.find((e) => e.user.id === ep.default.getId() && (0, en.gf)(e.voiceState) === en.xO.ON_STAGE)) && (0, ee.U5)(l.id)
              ? (0, i.jsx)(eG, {})
              : !n && t
                ? (0, i.jsx)(f.Tooltip, {
                      text: ej.intl.string(ej.t['i+SO/f']),
                      tooltipClassName: eD.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, i.jsx)(ex.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: f.WaveformSlashIcon
                          });
                      }
                  })
                : (0, i.jsx)(
                      f.Popout,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, i.jsx)(eU, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(ez, {
                                  popoutProps: t,
                                  isShown: r,
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
            ? (0, i.jsx)(eO.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eD.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: r, voiceStates: l, selfStream: s, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let c = ep.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && r,
            { reachedLimit: u } = (0, el.t)(e),
            h = (0, J.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: eD.actionButtons,
            children: [
                (0, i.jsx)(eB, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && u
                }),
                (0, i.jsx)(eV, {
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
                                  enableActivities: r
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
            : (0, i.jsx)(f.Popout, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: f.Popout.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)('div', {
                          className: eD.container,
                          children: [
                              (0, i.jsxs)(M.Z, {
                                  className: eD.connection,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: eD.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(M.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eD.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eP.Z, { channel: e })]
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
            ew(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            ew(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                _.Z.setNoiseCancellation(!e, { section: ey.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            ew(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                if (null != n) (0, ed.Z)(n, t.id, ey.Sbl.VOICE_PANEL);
            }),
            ew(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), I.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ey.ME, i.id);
            }),
            ew(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: r } = this.props;
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(y.Gt, {
                            value: r,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            ew(this, 'handleCloseVoicePanelIntroduction', () => {
                V.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            ew(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: a()(eD.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(f.Heading, {
                            className: eD.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: ej.intl.string(ej.t['ba/rLy'])
                        }),
                        (0, i.jsx)(f.Text, {
                            className: eD.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: ej.intl.string(ej.t.Ne1Ee3)
                        }),
                        (0, i.jsx)(f.Button, {
                            className: eD.voicePanelIntroductionButton,
                            color: f.Button.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: ej.intl.string(ej.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function ez(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { play: a, Component: s, events: o } = (0, g.P)(l ? 'disable' : 'enable');
    return (
        r.useEffect(() => () => a(), [l, a]),
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
            icon: s
        })
    );
}
t.Z = (0, N.Z)(function (e) {
    let t = (0, w.Q3)('ConnectedRTCConnection'),
        n = (0, U.Z)(),
        l = (0, d.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        a = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        { channelId: s, ...o } = (0, d.cj)([eC.Z], () =>
            null != n
                ? {
                      channelId: n.channelId,
                      rtcConnectionQuality: ey.IE4.FINE,
                      rtcConnectionState: ey.hes.RTC_CONNECTED,
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
        h = (0, d.e7)([ef.Z], () => ef.Z.getGuild(u), [u]),
        m = (0, d.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, B.Z)(eE.Z)
        })),
        p = (0, d.e7)([eE.Z, F.Z], () => F.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eZ.EO)(a) && !eE.Z.isInteractionRequired() && !(null == c ? void 0 : c.isGuildStageVoice())),
        g = (0, d.e7)([eS.Z], () => null != s && eS.Z.hasVideo(s), [s]),
        _ = (0, d.e7)([em.Z], () => em.Z.getCurrentUserActiveStream()),
        E = (0, d.e7)([e_.Z], () => e_.Z.hasLayers()),
        I = (0, d.e7)([z.Z], () => z.Z.isViewingRoles(u)),
        C = (0, d.e7)([eI.Z], () => I && !eI.Z.can(ey.Plq.VIEW_CHANNEL, c), [I, c]),
        N = ei.Fg.useSetting(),
        [v, S, T] = (0, d.Wu)([eT.ZP, X.Z], () => ((null == c ? void 0 : c.isGuildStageVoice()) ? [X.Z.getMutableParticipants(c.id, Q.pV.SPEAKER), X.Z.getParticipantsVersion(c.id), null] : [null, null, null != c ? eT.ZP.getVoiceStatesForChannel(c) : null]), [c]),
        A = r.useMemo(() => {
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
                        : T) && void 0 !== t
                ? t
                : [];
        }, [v, S, T]),
        [Z, L] = r.useState(!1);
    r.useEffect(() => {
        (I || C) && L(!1);
    }, [I, C, L]);
    let { analyticsLocations: P } = (0, y.ZP)(O.Z.RTC_PANEL),
        R = (0, b.Z)(null != u ? u : ey.lds, null == c ? void 0 : c.id),
        j = (0, x.Z)(null == c ? void 0 : c.id);
    return (0, i.jsx)(y.Gt, {
        value: P,
        children: (0, i.jsxs)('div', {
            className: eD.wrapper,
            children: [
                null != n || null != l
                    ? (0, i.jsx)(G.Z, {
                          voiceState: n,
                          awaitingRemoteSessionInfo: l
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
                    selfStream: _,
                    hasLayers: E,
                    voiceStates: A,
                    showVoiceStates: N,
                    shouldShowVoicePanelIntroduction: p,
                    isPrivateChannelWithEnabledActivities: j,
                    analyticsLocations: P,
                    isVisualRefreshEnabled: t
                }),
                !Z && I && null != u
                    ? (0, i.jsxs)('div', {
                          className: eD.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: eD.viewAsRolesWarningText,
                                  children: C ? ej.intl.string(ej.t.efjuQE) : ej.intl.string(ej.t.br8H2N)
                              }),
                              (0, i.jsx)(f.Button, {
                                  className: eD.viewAsRolesWarningButton,
                                  size: f.Button.Sizes.MIN,
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
