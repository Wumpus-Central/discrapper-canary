n.d(t, { Z: () => eQ }), n(47120);
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
    f = n(75735),
    g = n(382600),
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
    el = n(221241),
    eo = n(923973),
    ea = n(829750),
    es = n(189771),
    ec = n(544384),
    eu = n(560688),
    ed = n(127608),
    ep = n(76021),
    eh = n(173507),
    ef = n(25827),
    eg = n(199902),
    em = n(314897),
    eb = n(592125),
    e_ = n(430824),
    eE = n(819640),
    eO = n(131951),
    eN = n(496675),
    ev = n(19780),
    ey = n(699516),
    eI = n(594174),
    eC = n(979651),
    eS = n(938475),
    eT = n(626135),
    eP = n(63063),
    ej = n(51144),
    eA = n(870569),
    eZ = n(345243),
    ex = n(594117),
    eL = n(226323),
    ew = n(981631),
    eR = n(190378),
    eD = n(388032),
    ek = n(347363),
    eM = n(455812);
function eU(e, t, n) {
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
function eG(e) {
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
                eU(e, t, n[t]);
            });
    }
    return e;
}
function eW(e, t) {
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
function eV(e, t) {
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
function eB(e) {
    let t = e.currentTarget;
    eT.default.track(ew.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ew.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eH() {
    let e = i.useRef(null);
    (0, m.Tbt)(e),
        i.useEffect(() => {
            eT.default.track(ew.rMx.OPEN_POPOUT, { type: ew.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eO.Z], () => eO.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: ek.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.j7V, {
                hideBorder: !0,
                className: eM.marginBottom4,
                value: t,
                onChange: () => b.Z.setNoiseCancellation(!t, { section: ew.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eD.NW.string(eD.t.uKdWn5),
                children: eD.NW.string(eD.t.WGWHv7)
            }),
            (0, r.jsx)(O.Z, {
                title: eD.NW.string(eD.t.JdUas7),
                notchBackground: O._.BLACK,
                buttonTest: eD.NW.string(eD.t['sG+MGh']),
                buttonStop: eD.NW.string(eD.t.Yp3SbG),
                buttonClassName: ek.micTestButton,
                buttonColor: m.zxk.Colors.PRIMARY,
                location: { section: ew.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(m.vwX, {
                tag: m.RB0.H5,
                className: o()(eM.marginBottom8, eM.marginTop20),
                children: eD.NW.string(eD.t.k6h1Fx)
            }),
            (0, r.jsxs)(k.Z, {
                justify: k.Z.Justify.BETWEEN,
                className: ek.__invalid_footer,
                children: [
                    (0, r.jsx)(m.eee, {
                        href: ew.EYA.KRISP,
                        onClick: (e) => eB(e),
                        children: (0, r.jsx)('div', { className: ek.krispLogo })
                    }),
                    (0, r.jsx)(m.eee, {
                        href: eP.Z.getArticleURL(ew.BhN.NOISE_SUPPRESSION),
                        className: ek.krispLink,
                        onClick: (e) => eB(e),
                        children: eD.NW.string(eD.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eF() {
    let e = (0, u.e7)([en.Z], () => en.Z.isMuted()),
        t = e ? eD.NW.string(eD.t.ScHlfn) : eD.NW.string(eD.t.zqxfra);
    return (0, r.jsx)(eA.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? m.xjP : m.RZG,
        onClick: () => (0, ee.v)(!e)
    });
}
function ez(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        a = (0, M.Q3)('ConnectedVideoButton'),
        { enabled: s } = (0, w.Z)({ location: 'ConnectedVideoButton' }),
        { coloredIcons: c } = (0, el.Z)({ location: 'ConnectedVideoButton' }),
        d = (0, eo.Z)(),
        p = (0, es.Z)(t),
        h = (0, u.e7)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation())),
        g = (0, q.Z)(t),
        { reachedLimit: _, limit: E } = (0, ea.Z)(t),
        O = i.useCallback(() => {
            (0, eu.Z)();
        }, []),
        N = (0, y.bp)(),
        v = i.useCallback(
            (e) => {
                if (eO.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    b.Z.setVideoEnabled(e), e && (0, Y.uL)(ew.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ew.ME, t.id));
                };
                e ? (0, eh.Z)(n, N) : n();
            },
            [t, N]
        ),
        C = h || n || g,
        { Component: S, play: T, events: P } = (0, f.o)(d.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => T(), [d.enabled, T]),
        (0, r.jsx)(
            ef.Z,
            eW(
                eG(
                    {
                        onChange: v,
                        onCameraUnavailable: O,
                        hasPermission: p,
                        channelLimit: E,
                        channelLimitReached: _
                    },
                    d
                ),
                {
                    enabled: !l && d.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l } = e,
                            u = eV(e, ['unavailable', 'isActive', 'label', 'iconComponent']);
                        let d = (0, r.jsx)(S, {
                            size: a ? 'md' : 'sm',
                            className: o()(ek.buttonIcon, { [ek.withText]: !C }),
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
                                    p = eV(e, ['onClick']),
                                    { isShown: h } = l;
                                return (0, r.jsx)(m.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            m.zxk,
                                            eW(eG({}, u, e, p), {
                                                onClick: (t) => {
                                                    var n;
                                                    u.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && s(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = p.onMouseEnter) || void 0 === n || n.call(p), P.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), P.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    s(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                                },
                                                size: a ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
                                                className: o()(c ? ek.experimentButton : ek.button, ek.buttonColor, {
                                                    [ek.buttonActive]: n,
                                                    [ek.fauxDisabled]: t,
                                                    [ek.disabled]: u.disabled
                                                }),
                                                innerClassName: ek.buttonContents,
                                                wrapperClassName: ek.button,
                                                fullWidth: !0,
                                                children: C
                                                    ? d
                                                    : (0, r.jsxs)(k.Z, {
                                                          align: k.Z.Align.CENTER,
                                                          children: [d, eD.NW.string(eD.t.FlNoSU)]
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
function eY(e) {
    let t,
        n,
        { channel: i, enableActivities: l } = e,
        a = (0, M.Q3)('ConnectedVideoButton'),
        { coloredIcons: s } = (0, el.Z)({ location: 'ConnectedVideoButton' }),
        c = (0, y.bp)(),
        { analyticsLocations: h } = (0, x.ZP)(),
        f = c === ew.IlC.POPOUT,
        g = (0, T.KF)(i.id),
        b = (0, T.g5)(g),
        { userInActivity: _ } = (0, u.cj)([I.ZP], () => ({ userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(i.id) })),
        E = (0, v.O)(),
        O = (0, S.a)(),
        N = g !== T.jy.CAN_LAUNCH,
        { enabled: C } = L.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: P, events: Z, play: w } = (0, d.s)(),
        { Component: R, events: D, play: k } = (0, p.w)();
    return (C ? ((t = D), (n = k)) : ((t = Z), (n = w)), l)
        ? (0, r.jsx)(m.ua7, {
              text: b,
              children: (e) =>
                  (0, r.jsxs)(
                      m.zxk,
                      eW(
                          eG(
                              eW(eG({}, e), {
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
                                          locationObject: E.location,
                                          openInPopout: f,
                                          analyticsLocations: h,
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
                              disabled: N,
                              className: o()(s && _ ? ek.experimentButton : ek.button, ek.buttonColor, {
                                  [ek.buttonActive]: _,
                                  [ek.disabled]: N
                              }),
                              innerClassName: ek.buttonContents,
                              wrapperClassName: ek.button,
                              children: [
                                  O
                                      ? (0, r.jsx)(j.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  C
                                      ? (0, r.jsx)(R, {
                                            size: a ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: ek.buttonIcon
                                        })
                                      : (0, r.jsx)(P, {
                                            size: a ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: ek.buttonIcon
                                        })
                              ]
                          }
                      )
                  )
          })
        : null;
}
function eK(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: a, disabled: s } = e,
        c = (0, M.Q3)('ConnectedStreamButton'),
        { coloredIcons: d } = (0, el.Z)({ location: 'ConnectedStreamButton' }),
        p = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        f = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        g = (0, es.Z)(n),
        b = n.getGuildId(),
        _ = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        E = (0, q.Z)(n),
        O = i.useCallback(() => {
            (0, ep.Z)(b, n.id, ew.jXE.ACTIVITY_PANEL);
        }, [b, n.id]),
        N = f.find((e) => e.ownerId === (null == p ? void 0 : p.id)),
        v = (0, ec.E)(n, p, f);
    t = null == N ? (l ? O : ed.Z) : () => (0, B.Z)(N);
    let y = null != N || v.length > 0,
        C = g ? eD.NW.string(eD.t.fjBNo6) : eD.NW.string(eD.t.uQn9Bw),
        S = _ || a || E,
        T = null != N,
        { Component: P, events: j, play: A } = (0, h.P)(T ? 'disable' : 'enable');
    i.useEffect(() => () => A(), [A, T]);
    let Z = (0, r.jsx)(P, {
        size: c ? 'md' : 'sm',
        color: 'currentColor',
        className: o()(ek.buttonIcon, { [ek.withText]: !S })
    });
    return (0, r.jsx)(m.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ec.Z, {
                channel: n,
                currentUser: p,
                activeStreams: f,
                onClose: t,
                handleGoLive: l ? O : ed.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eV(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(m.ua7, {
                text: C,
                children: (e) =>
                    (0, r.jsx)(
                        m.zxk,
                        eW(
                            eG(
                                eW(eG({}, e), {
                                    size: c ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        y ? n(r) : t(), null === (i = e.onClick) || void 0 === i || i.call(e);
                                    },
                                    disabled: !g || s,
                                    className: o()(d ? ek.experimentButton : ek.button, ek.buttonColor, {
                                        [ek.buttonActive]: null != N,
                                        [ek.disabled]: !g || s
                                    })
                                }),
                                y ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    null == i || i(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), j.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    var t;
                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), j.onMouseLeave();
                                },
                                innerClassName: ek.buttonContents,
                                wrapperClassName: ek.button,
                                children: S
                                    ? Z
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [Z, eD.NW.string(eD.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class eq extends i.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: o, hasVideo: a } = this.props;
        if (null == t) return null;
        let s = (0, D.F6)(t, eI.default, ey.Z);
        return (
            null != n ? ((e = ew.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = ew.Z5c.CHANNEL(ew.ME, t.id)),
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
                        children: (0, r.jsx)(eZ.Z, {
                            className: ek.channel,
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
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == o.find((e) => e.user.id === em.default.getId() && (0, er.gf)(e.voiceState) === er.xO.ON_STAGE) && (0, et.U5)(l.id)
              ? (0, r.jsx)(eF, {})
              : !n && t
                ? (0, r.jsx)(m.ua7, {
                      text: eD.NW.string(eD.t['i+SO/f']),
                      tooltipClassName: ek.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(eA.Z, {
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
                          renderPopout: () => (0, r.jsx)(eH, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eX, {
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
            ? (0, r.jsx)(eL.Z, {
                  voiceStates: t,
                  channel: e,
                  className: ek.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: s } = this.props;
        if (null == e || null != n) return null;
        let c = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, $.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || s) && i,
            { reachedLimit: d } = (0, ea.t)(e),
            p = (0, $.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: ek.actionButtons,
            children: [
                (0, r.jsx)(ez, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d
                }),
                (0, r.jsx)(eK, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d))
                }),
                u
                    ? (0, r.jsx)(eY, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, q.Z)(e)
                    ? (0, r.jsx)(X.Z, {
                          className: o()(ek.button, ek.buttonColor),
                          innerClassName: ek.buttonContents,
                          iconClassName: ek.buttonIcon,
                          channel: e
                      })
                    : null
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
                          className: ek.container,
                          children: [
                              (0, r.jsxs)(k.Z, {
                                  className: ek.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ek.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ek.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, r.jsx)(ex.Z, { channel: e })]
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
            eU(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            eU(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                b.Z.setNoiseCancellation(!e, { section: ew.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            eU(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                null != n && (0, ep.Z)(n, t.id, ew.Sbl.VOICE_PANEL);
            }),
            eU(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), E.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ew.ME, r.id);
            }),
            eU(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(e, eW(eG({}, n), { channel: t }))
                        });
                });
            }),
            eU(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            eU(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: o()(ek.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(m.X6q, {
                            className: ek.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eD.NW.string(eD.t['ba/rLy'])
                        }),
                        (0, r.jsx)(m.Text, {
                            className: ek.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eD.NW.string(eD.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(m.zxk, {
                            className: ek.voicePanelIntroductionButton,
                            color: m.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eD.NW.string(eD.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eX(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { play: o, Component: a, events: s } = (0, g.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            eA.Z,
            eW(eG({}, t), {
                onMouseEnter: () => {
                    var e;
                    null === (e = t.onMouseEnter) || void 0 === e || e.call(t), s.onMouseEnter();
                },
                onMouseLeave: () => {
                    s.onMouseLeave();
                },
                tooltipClassName: ek.noiseCancellationTooltip,
                tooltipText: n ? null : eD.NW.string(eD.t.vFiCS0),
                icon: (0, r.jsx)(a, { size: 'refresh_sm' })
            })
        )
    );
}
let eQ = (0, N.Z)(function (e) {
    let t = (0, M.Q3)('ConnectedRTCConnection'),
        { coloredIcons: n } = (0, el.Z)({ location: 'ConnectedRTCConnection' }),
        l = (0, G.Z)(),
        o = (0, u.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        a = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        s = (0, u.cj)([ev.Z], () =>
            null != l
                ? {
                      channelId: l.channelId,
                      rtcConnectionQuality: ew.IE4.FINE,
                      rtcConnectionState: ew.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: ev.Z.getChannelId(),
                      rtcConnectionQuality: ev.Z.getQuality(),
                      rtcConnectionState: ev.Z.getState(),
                      rtcConnectionLastPing: ev.Z.getLastPing()
                  }
        ),
        { channelId: c } = s,
        d = eV(s, ['channelId']),
        p = (0, u.e7)([eb.Z], () => eb.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)([e_.Z], () => e_.Z.getGuild(h), [h]),
        g = (0, u.cj)([eO.Z], () => ({
            noiseCancellationSupported: eO.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eO.Z.getNoiseCancellation(),
            noiseCancellationError: eO.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eO.Z)
        })),
        b = (0, u.e7)([eO.Z, F.Z], () => F.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, ej.EO)(a) && !eO.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        _ = (0, u.e7)([eC.Z], () => null != c && eC.Z.hasVideo(c), [c]),
        E = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        O = (0, u.e7)([eE.Z], () => eE.Z.hasLayers()),
        N = (0, u.e7)([z.Z], () => z.Z.isViewingRoles(h)),
        v = (0, u.e7)([eN.Z], () => N && !eN.Z.can(ew.Plq.VIEW_CHANNEL, p), [N, p]),
        y = ei.Fg.useSetting(),
        [I, S, T] = (0, u.Wu)([eS.ZP, Q.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [Q.Z.getMutableParticipants(p.id, J.pV.SPEAKER), Q.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eS.ZP.getVoiceStatesForChannel(p) : null]), [p]),
        j = i.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == I
                                ? void 0
                                : I.map((e) => {
                                      let { user: t, userNick: n, voiceState: r } = e;
                                      return {
                                          user: t,
                                          nick: n,
                                          voiceState: r
                                      };
                                  })) && void 0 !== e
                        ? e
                        : T) && void 0 !== t
                ? t
                : [];
        }, [I, S, T]),
        [A, L] = i.useState(!1);
    i.useEffect(() => {
        (N || v) && L(!1);
    }, [N, v, L]);
    let { analyticsLocations: w } = (0, x.ZP)(Z.Z.RTC_PANEL),
        R = (0, C.Z)(null != h ? h : ew.lds, null == p ? void 0 : p.id),
        D = (0, P.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(x.Gt, {
        value: w,
        children: (0, r.jsxs)('div', {
            className: ek.wrapper,
            children: [
                null != l || null != o
                    ? (0, r.jsx)(W.Z, {
                          voiceState: l,
                          awaitingRemoteSessionInfo: o
                      })
                    : null,
                (0, r.jsx)(
                    eq,
                    eW(eG({}, e, g, d), {
                        enableActivities: R,
                        remoteVoiceState: l,
                        guild: f,
                        channel: p,
                        hasVideo: _,
                        selfStream: E,
                        hasLayers: O,
                        voiceStates: j,
                        showVoiceStates: y,
                        shouldShowVoicePanelIntroduction: b,
                        isPrivateChannelWithEnabledActivities: D,
                        analyticsLocations: w,
                        isVisualRefreshEnabled: t,
                        coloredIcons: n
                    })
                ),
                !A && N && null != h
                    ? (0, r.jsxs)('div', {
                          className: ek.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: ek.viewAsRolesWarningText,
                                  children: v ? eD.NW.string(eD.t.efjuQE) : eD.NW.string(eD.t.br8H2N)
                              }),
                              (0, r.jsx)(m.zxk, {
                                  className: ek.viewAsRolesWarningButton,
                                  size: m.zxk.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  children: eD.NW.string(eD.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
