n.d(t, { Z: () => eX }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(568611),
    u = n(442837),
    d = n(592471),
    p = n(749280),
    h = n(864094),
    g = n(75735),
    f = n(382600),
    m = n(481060),
    b = n(846027),
    _ = n(239091),
    E = n(925549),
    O = n(284056),
    N = n(730749),
    v = n(2052),
    y = n(40851),
    I = n(317381),
    C = n(596040),
    S = n(588580),
    T = n(374065),
    P = n(451576),
    j = n(119315),
    A = n(403404),
    Z = n(100527),
    x = n(906732),
    L = n(424602),
    w = n(682901),
    R = n(793865),
    D = n(933557),
    k = n(600164),
    M = n(540059),
    U = n(258609),
    G = n(446226),
    W = n(935261),
    V = n(74299),
    B = n(803647),
    H = n(142497),
    F = n(810788),
    z = n(160404),
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
    er = n(590415),
    ei = n(695346),
    el = n(923973),
    eo = n(829750),
    ea = n(189771),
    es = n(544384),
    ec = n(560688),
    eu = n(127608),
    ed = n(76021),
    ep = n(173507),
    eh = n(25827),
    eg = n(199902),
    ef = n(314897),
    em = n(592125),
    eb = n(430824),
    e_ = n(819640),
    eE = n(131951),
    eO = n(496675),
    eN = n(19780),
    ev = n(699516),
    ey = n(594174),
    eI = n(979651),
    eC = n(938475),
    eS = n(626135),
    eT = n(63063),
    eP = n(51144),
    ej = n(870569),
    eA = n(345243),
    eZ = n(594117),
    ex = n(226323),
    eL = n(981631),
    ew = n(190378),
    eR = n(388032),
    eD = n(347363),
    ek = n(455812);
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
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eM(e, t, n[t]);
            });
    }
    return e;
}
function eG(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eW(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eV(e) {
    let t = e.currentTarget;
    eS.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eB() {
    let e = i.useRef(null);
    (0, m.Tbt)(e),
        i.useEffect(() => {
            eS.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eD.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.j7V, {
                hideBorder: !0,
                className: ek.marginBottom4,
                value: t,
                onChange: () => b.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eR.NW.string(eR.t.uKdWn5),
                children: eR.NW.string(eR.t.WGWHv7)
            }),
            (0, r.jsx)(O.Z, {
                title: eR.NW.string(eR.t.JdUas7),
                notchBackground: O._.BLACK,
                buttonTest: eR.NW.string(eR.t['sG+MGh']),
                buttonStop: eR.NW.string(eR.t.Yp3SbG),
                buttonClassName: eD.micTestButton,
                buttonColor: m.zxk.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(m.vwX, {
                tag: m.RB0.H5,
                className: o()(ek.marginBottom8, ek.marginTop20),
                children: eR.NW.string(eR.t.k6h1Fx)
            }),
            (0, r.jsxs)(k.Z, {
                justify: k.Z.Justify.BETWEEN,
                className: eD.__invalid_footer,
                children: [
                    (0, r.jsx)(m.eee, {
                        href: eL.EYA.KRISP,
                        onClick: (e) => eV(e),
                        children: (0, r.jsx)('div', { className: eD.krispLogo })
                    }),
                    (0, r.jsx)(m.eee, {
                        href: eT.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                        className: eD.krispLink,
                        onClick: (e) => eV(e),
                        children: eR.NW.string(eR.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eH() {
    let e = (0, u.e7)([en.Z], () => en.Z.isMuted()),
        t = e ? eR.NW.string(eR.t.ScHlfn) : eR.NW.string(eR.t.zqxfra);
    return (0, r.jsx)(ej.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? m.xjP : m.RZG,
        onClick: () => (0, ee.v)(!e)
    });
}
function eF(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        a = (0, M.Q3)('ConnectedVideoButton'),
        { enabled: s } = (0, w.Z)({ location: 'ConnectedVideoButton' }),
        c = (0, el.Z)(),
        d = (0, ea.Z)(t),
        p = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        h = (0, q.Z)(t),
        { reachedLimit: f, limit: _ } = (0, eo.Z)(t),
        E = i.useCallback(() => {
            (0, ec.Z)();
        }, []),
        O = (0, y.bp)(),
        N = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    b.Z.setVideoEnabled(e), e && (0, Y.uL)(eL.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eL.ME, t.id));
                };
                e ? (0, ep.Z)(n, O) : n();
            },
            [t, O]
        ),
        v = p || n || h,
        { Component: C, play: S, events: T } = (0, g.o)(c.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => S(), [c.enabled, S]),
        (0, r.jsx)(
            eh.Z,
            eG(
                eU(
                    {
                        onChange: N,
                        onCameraUnavailable: E,
                        hasPermission: d,
                        channelLimit: _,
                        channelLimitReached: f
                    },
                    c
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l } = e,
                            c = eW(e, ['unavailable', 'isActive', 'label', 'iconComponent']);
                        let u = (0, r.jsx)(C, {
                            size: a ? 'md' : 'sm',
                            className: o()(eD.buttonIcon, { [eD.withText]: !v }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(m.yRy, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(R.Z, {
                                    onClose: t,
                                    simplified: s
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: m.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    d = eW(e, ['onClick']),
                                    { isShown: p } = l;
                                return (0, r.jsx)(m.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            m.zxk,
                                            eG(eU({}, c, e, d), {
                                                onClick: (t) => {
                                                    var n;
                                                    c.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), p && s(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), T.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), T.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    s(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                                },
                                                size: a ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
                                                className: o()(eD.button, eD.buttonColor, {
                                                    [eD.buttonActive]: n,
                                                    [eD.fauxDisabled]: t,
                                                    [eD.disabled]: c.disabled
                                                }),
                                                innerClassName: eD.buttonContents,
                                                wrapperClassName: eD.button,
                                                fullWidth: !0,
                                                children: v
                                                    ? u
                                                    : (0, r.jsxs)(k.Z, {
                                                          align: k.Z.Align.CENTER,
                                                          children: [u, eR.NW.string(eR.t.FlNoSU)]
                                                      })
                                            })
                                        )
                                });
                            }
                        });
                    }
                }
            )
        )
    );
}
function ez(e) {
    let t,
        n,
        { channel: i, enableActivities: l } = e,
        a = (0, M.Q3)('ConnectedVideoButton'),
        s = (0, y.bp)(),
        { analyticsLocations: c } = (0, x.ZP)(),
        h = s === eL.IlC.POPOUT,
        g = (0, T.KF)(i.id),
        f = (0, T.g5)(g),
        { userInActivity: b } = (0, u.cj)([I.ZP], () => ({ userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(i.id) })),
        _ = (0, v.O)(),
        E = (0, S.a)(),
        O = g !== T.jy.CAN_LAUNCH,
        { enabled: N } = L.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: C, events: P, play: Z } = (0, d.s)(),
        { Component: w, events: R, play: D } = (0, p.w)();
    return (N ? ((t = R), (n = D)) : ((t = P), (n = Z)), l)
        ? (0, r.jsx)(m.ua7, {
              text: f,
              children: (e) =>
                  (0, r.jsxs)(
                      m.zxk,
                      eG(
                          eU(
                              eG(eU({}, e), {
                                  fullWidth: !0,
                                  size: a ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL
                              }),
                              t
                          ),
                          {
                              onClick: () => {
                                  var t;
                                  n(),
                                      (0, A.Z)({
                                          channel: i,
                                          guildId: i.guild_id,
                                          locationObject: _.location,
                                          openInPopout: h,
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
                              disabled: O,
                              className: o()(eD.button, eD.buttonColor, {
                                  [eD.buttonActive]: b,
                                  [eD.disabled]: O
                              }),
                              innerClassName: eD.buttonContents,
                              wrapperClassName: eD.button,
                              children: [
                                  E
                                      ? (0, r.jsx)(j.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  N
                                      ? (0, r.jsx)(w, {
                                            size: a ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: eD.buttonIcon
                                        })
                                      : (0, r.jsx)(C, {
                                            size: a ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: eD.buttonIcon
                                        })
                              ]
                          }
                      )
                  )
          })
        : null;
}
function eY(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: a, disabled: s } = e,
        c = (0, M.Q3)('ConnectedStreamButton'),
        d = (0, u.e7)([ey.default], () => ey.default.getCurrentUser()),
        p = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        g = (0, ea.Z)(n),
        f = n.getGuildId(),
        b = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        _ = (0, q.Z)(n),
        E = i.useCallback(() => {
            (0, ed.Z)(f, n.id, eL.jXE.ACTIVITY_PANEL);
        }, [f, n.id]),
        O = p.find((e) => e.ownerId === (null == d ? void 0 : d.id)),
        N = (0, es.E)(n, d, p);
    t = null == O ? (l ? E : eu.Z) : () => (0, B.Z)(O);
    let v = null != O || N.length > 0,
        y = g ? eR.NW.string(eR.t.fjBNo6) : eR.NW.string(eR.t.uQn9Bw),
        C = b || a || _,
        S = null != O,
        { Component: T, events: P, play: j } = (0, h.P)(S ? 'disable' : 'enable');
    i.useEffect(() => () => j(), [j, S]);
    let A = (0, r.jsx)(T, {
        size: c ? 'md' : 'sm',
        color: 'currentColor',
        className: o()(eD.buttonIcon, { [eD.withText]: !C })
    });
    return (0, r.jsx)(m.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(es.Z, {
                channel: n,
                currentUser: d,
                activeStreams: p,
                onClose: t,
                handleGoLive: l ? E : eu.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eW(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(m.ua7, {
                text: y,
                children: (e) =>
                    (0, r.jsx)(
                        m.zxk,
                        eG(
                            eU(
                                eG(eU({}, e), {
                                    size: c ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        v ? n(r) : t(), null === (i = e.onClick) || void 0 === i || i.call(e);
                                    },
                                    disabled: !g || s,
                                    className: o()(eD.button, eD.buttonColor, {
                                        [eD.buttonActive]: null != O,
                                        [eD.disabled]: !g || s
                                    })
                                }),
                                v ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    null == i || i(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), P.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    var t;
                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), P.onMouseLeave();
                                },
                                innerClassName: eD.buttonContents,
                                wrapperClassName: eD.button,
                                children: C
                                    ? A
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [A, eR.NW.string(eR.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class eK extends i.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: o, hasVideo: a } = this.props;
        if (null == t) return null;
        let s = (0, D.F6)(t, ey.default, ev.Z);
        return (
            null != n ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(K.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: o,
                hasVideo: a,
                children: (0, r.jsx)(m.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eA.Z, {
                            className: eD.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      lineClamp: 1,
                                      children: s
                                  })
                                : s
                        })
                    })
                })
            })
        );
    }
    renderNoiseCancellation() {
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: i, channel: l, voiceStates: o } = this.props;
        return null != i
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == o.find((e) => e.user.id === ef.default.getId() && (0, er.gf)(e.voiceState) === er.xO.ON_STAGE) && (0, et.U5)(l.id)
              ? (0, r.jsx)(eH, {})
              : !n && t
                ? (0, r.jsx)(m.ua7, {
                      text: eR.NW.string(eR.t['i+SO/f']),
                      tooltipClassName: eD.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(ej.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: m.oIc
                          });
                      }
                  })
                : (0, r.jsx)(
                      m.yRy,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, r.jsx)(eB, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eq, {
                                  popoutProps: t,
                                  isShown: i,
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
            ? (0, r.jsx)(ex.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eD.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: s } = this.props;
        if (null == e || null != n) return null;
        let c = ef.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, $.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || s) && i,
            { reachedLimit: d } = (0, eo.t)(e),
            p = (0, $.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: eD.actionButtons,
            children: [
                (0, r.jsx)(eF, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d
                }),
                (0, r.jsx)(eY, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d))
                }),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u
                            ? (0, r.jsx)(ez, {
                                  channel: e,
                                  enableActivities: i
                              })
                            : null,
                        (0, q.Z)(e)
                            ? (0, r.jsx)(X.Z, {
                                  className: o()(eD.button, eD.buttonColor),
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
            : (0, r.jsx)(m.yRy, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: m.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
                          className: eD.container,
                          children: [
                              (0, r.jsxs)(k.Z, {
                                  className: eD.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eD.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eD.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, r.jsx)(eZ.Z, { channel: e })]
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
                b.Z.setNoiseCancellation(!e, { section: eL.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            eM(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                null != n && (0, ed.Z)(n, t.id, eL.Sbl.VOICE_PANEL);
            }),
            eM(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), E.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eL.ME, r.id);
            }),
            eM(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(e, eG(eU({}, n), { channel: t }))
                        });
                });
            }),
            eM(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(ew.v.VOICE_PANEL_INTRODUCTION);
            }),
            eM(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: o()(eD.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(m.X6q, {
                            className: eD.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eR.NW.string(eR.t['ba/rLy'])
                        }),
                        (0, r.jsx)(m.Text, {
                            className: eD.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eR.NW.string(eR.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(m.zxk, {
                            className: eD.voicePanelIntroductionButton,
                            color: m.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eR.NW.string(eR.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eq(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { play: o, Component: a, events: s } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            ej.Z,
            eG(eU({}, t), {
                onMouseEnter: () => {
                    var e;
                    null === (e = t.onMouseEnter) || void 0 === e || e.call(t), s.onMouseEnter();
                },
                onMouseLeave: () => {
                    s.onMouseLeave();
                },
                tooltipClassName: eD.noiseCancellationTooltip,
                tooltipText: n ? null : eR.NW.string(eR.t.vFiCS0),
                icon: (0, r.jsx)(a, { size: 'refresh_sm' })
            })
        )
    );
}
let eX = (0, N.Z)(function (e) {
    let t = (0, M.Q3)('ConnectedRTCConnection'),
        n = (0, G.Z)(),
        l = (0, u.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        o = (0, u.e7)([ey.default], () => ey.default.getCurrentUser()),
        a = (0, u.cj)([eN.Z], () =>
            null != n
                ? {
                      channelId: n.channelId,
                      rtcConnectionQuality: eL.IE4.FINE,
                      rtcConnectionState: eL.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eN.Z.getChannelId(),
                      rtcConnectionQuality: eN.Z.getQuality(),
                      rtcConnectionState: eN.Z.getState(),
                      rtcConnectionLastPing: eN.Z.getLastPing()
                  }
        ),
        { channelId: s } = a,
        c = eW(a, ['channelId']),
        d = (0, u.e7)([em.Z], () => em.Z.getChannel(s), [s]),
        p = null == d ? void 0 : d.getGuildId(),
        h = (0, u.e7)([eb.Z], () => eb.Z.getGuild(p), [p]),
        g = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eE.Z)
        })),
        f = (0, u.e7)([eE.Z, F.Z], () => F.Z.hasHotspot(ew.v.VOICE_PANEL_INTRODUCTION) && (0, eP.EO)(o) && !eE.Z.isInteractionRequired() && !(null == d ? void 0 : d.isGuildStageVoice())),
        b = (0, u.e7)([eI.Z], () => null != s && eI.Z.hasVideo(s), [s]),
        _ = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        E = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
        O = (0, u.e7)([z.Z], () => z.Z.isViewingRoles(p)),
        N = (0, u.e7)([eO.Z], () => O && !eO.Z.can(eL.Plq.VIEW_CHANNEL, d), [O, d]),
        v = ei.Fg.useSetting(),
        [y, I, S] = (0, u.Wu)([eC.ZP, Q.Z], () => ((null == d ? void 0 : d.isGuildStageVoice()) ? [Q.Z.getMutableParticipants(d.id, J.pV.SPEAKER), Q.Z.getParticipantsVersion(d.id), null] : [null, null, null != d ? eC.ZP.getVoiceStatesForChannel(d) : null]), [d]),
        T = i.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == y
                                ? void 0
                                : y.map((e) => {
                                      let { user: t, userNick: n, voiceState: r } = e;
                                      return {
                                          user: t,
                                          nick: n,
                                          voiceState: r
                                      };
                                  })) && void 0 !== e
                        ? e
                        : S) && void 0 !== t
                ? t
                : [];
        }, [y, I, S]),
        [j, A] = i.useState(!1);
    i.useEffect(() => {
        (O || N) && A(!1);
    }, [O, N, A]);
    let { analyticsLocations: L } = (0, x.ZP)(Z.Z.RTC_PANEL),
        w = (0, C.Z)(null != p ? p : eL.lds, null == d ? void 0 : d.id),
        R = (0, P.Z)(null == d ? void 0 : d.id);
    return (0, r.jsx)(x.Gt, {
        value: L,
        children: (0, r.jsxs)('div', {
            className: eD.wrapper,
            children: [
                null != n || null != l
                    ? (0, r.jsx)(W.Z, {
                          voiceState: n,
                          awaitingRemoteSessionInfo: l
                      })
                    : null,
                (0, r.jsx)(
                    eK,
                    eG(eU({}, e, g, c), {
                        enableActivities: w,
                        remoteVoiceState: n,
                        guild: h,
                        channel: d,
                        hasVideo: b,
                        selfStream: _,
                        hasLayers: E,
                        voiceStates: T,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: f,
                        isPrivateChannelWithEnabledActivities: R,
                        analyticsLocations: L,
                        isVisualRefreshEnabled: t
                    })
                ),
                !j && O && null != p
                    ? (0, r.jsxs)('div', {
                          className: eD.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: eD.viewAsRolesWarningText,
                                  children: N ? eR.NW.string(eR.t.efjuQE) : eR.NW.string(eR.t.br8H2N)
                              }),
                              (0, r.jsx)(m.zxk, {
                                  className: eD.viewAsRolesWarningButton,
                                  size: m.zxk.Sizes.MIN,
                                  onClick: () => {
                                      A(!0);
                                  },
                                  children: eR.NW.string(eR.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
