n.d(t, { Z: () => eX }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(442837),
    d = n(749280),
    p = n(864094),
    h = n(75735),
    f = n(382600),
    g = n(481060),
    m = n(846027),
    b = n(239091),
    _ = n(925549),
    E = n(284056),
    O = n(730749),
    N = n(40851),
    v = n(456100),
    y = n(317381),
    I = n(596040),
    C = n(588580),
    S = n(374065),
    T = n(451576),
    P = n(119315),
    j = n(403404),
    A = n(100527),
    Z = n(906732),
    x = n(793865),
    L = n(522651),
    w = n(795318),
    R = n(933557),
    D = n(600164),
    k = n(540059),
    M = n(258609),
    U = n(446226),
    G = n(935261),
    W = n(74299),
    V = n(803647),
    B = n(142497),
    H = n(810788),
    F = n(160404),
    z = n(703656),
    Y = n(917405),
    K = n(641015),
    q = n(848543),
    Q = n(565799),
    X = n(501655),
    J = n(368442),
    $ = n(600518),
    ee = n(485287),
    et = n(754277),
    en = n(590415),
    er = n(695346),
    ei = n(221241),
    el = n(923973),
    ea = n(829750),
    eo = n(189771),
    es = n(544384),
    ec = n(560688),
    eu = n(127608),
    ed = n(76021),
    ep = n(173507),
    eh = n(25827),
    ef = n(199902),
    eg = n(314897),
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
    ew = n(354459),
    eR = n(190378),
    eD = n(388032),
    ek = n(963085),
    eM = n(802138);
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
    eS.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eH() {
    let e = i.useRef(null);
    (0, g.Tbt)(e),
        i.useEffect(() => {
            eS.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: ek.noiseCancellationPopout,
        children: [
            (0, r.jsx)(g.j7V, {
                hideBorder: !0,
                className: eM.marginBottom4,
                value: t,
                onChange: () => m.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eD.NW.string(eD.t.uKdWn5),
                children: eD.NW.string(eD.t.WGWHv7)
            }),
            (0, r.jsx)(E.Z, {
                title: eD.NW.string(eD.t.JdUas7),
                notchBackground: E._.BLACK,
                buttonTest: eD.NW.string(eD.t['sG+MGh']),
                buttonStop: eD.NW.string(eD.t.Yp3SbG),
                buttonClassName: ek.micTestButton,
                buttonColor: g.zxk.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(g.vwX, {
                tag: g.RB0.H5,
                className: a()(eM.marginBottom8, eM.marginTop20),
                children: eD.NW.string(eD.t.k6h1Fx)
            }),
            (0, r.jsxs)(D.Z, {
                justify: D.Z.Justify.BETWEEN,
                className: ek.__invalid_footer,
                children: [
                    (0, r.jsx)(g.eee, {
                        href: eL.EYA.KRISP,
                        onClick: (e) => eB(e),
                        children: (0, r.jsx)('div', { className: ek.krispLogo })
                    }),
                    (0, r.jsx)(g.eee, {
                        href: eT.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
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
    let { parentAnalyticsLocation: e } = (0, Z.ZP)(),
        t = (0, u.e7)([et.Z], () => et.Z.isMuted()),
        n = t ? eD.NW.string(eD.t.ScHlfn) : eD.NW.string(eD.t.zqxfra);
    return (0, r.jsx)(ej.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? g.xjP : g.RZG,
        onClick: () => {
            (0, L.v)(e, L.d.STAGE_MUSIC, t), (0, $.v)(!t);
        }
    });
}
function ez(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        { parentAnalyticsLocation: o } = (0, Z.ZP)(),
        s = (0, k.Q3)('ConnectedVideoButton'),
        { coloredIconsEnabled: c, simplifiedSettingsEnabled: d } = (0, ei.Z)({ location: 'ConnectedVideoButton' }),
        p = (0, el.Z)(),
        f = (0, eo.Z)(t),
        b = (0, u.e7)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForLocation(y.ZP.getConnectedActivityLocation())),
        _ = (0, K.Z)(t),
        { reachedLimit: E, limit: O } = (0, ea.Z)(t),
        v = i.useCallback(() => {
            (0, ec.Z)();
        }, []),
        I = (0, N.bp)(),
        C = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    m.Z.setVideoEnabled(e), e && (0, z.uL)(eL.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eL.ME, t.id));
                };
                (0, L.v)(o, L.d.CAMERA, e), e ? (0, ep.Z)(n, I) : n();
            },
            [t, I, o]
        ),
        S = b || n || _,
        { Component: T, play: P, events: j } = (0, h.o)(p.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => P(), [p.enabled, P]),
        (0, r.jsx)(
            eh.Z,
            eW(
                eG(
                    {
                        onChange: C,
                        onCameraUnavailable: v,
                        hasPermission: f,
                        channelLimit: O,
                        channelLimitReached: E
                    },
                    p
                ),
                {
                    enabled: !l && p.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l } = e,
                            u = eV(e, ['unavailable', 'isActive', 'label', 'iconComponent']);
                        let p = (0, r.jsx)(T, {
                            size: s ? 'md' : 'sm',
                            className: a()(ek.buttonIcon, { [ek.withText]: !S }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(g.yRy, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(x.Z, {
                                    onClose: t,
                                    simplified: d,
                                    onInteraction: (0, w.u)('VideoDeviceMenu', o)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: g.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: o } = e,
                                    d = eV(e, ['onClick']),
                                    { isShown: h } = l;
                                return (0, r.jsx)(g.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zxk,
                                            eW(eG({}, u, e, d), {
                                                onClick: (t) => {
                                                    var n;
                                                    u.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && o(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), j.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), j.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    o(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                                },
                                                size: s ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL,
                                                className: a()(c ? ek.experimentButton : ek.button, ek.buttonColor, {
                                                    [ek.buttonActive]: n,
                                                    [ek.fauxDisabled]: t,
                                                    [ek.disabled]: u.disabled
                                                }),
                                                innerClassName: ek.buttonContents,
                                                wrapperClassName: ek.button,
                                                fullWidth: !0,
                                                children: S
                                                    ? p
                                                    : (0, r.jsxs)(D.Z, {
                                                          align: D.Z.Align.CENTER,
                                                          children: [p, eD.NW.string(eD.t.FlNoSU)]
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
    let { channel: t, enableActivities: n } = e,
        i = (0, k.Q3)('ConnectedActivityButton'),
        { coloredIconsEnabled: l } = (0, ei.Z)({ location: 'ConnectedActivityButton' }),
        o = (0, N.bp)(),
        { analyticsLocations: s, parentAnalyticsLocation: c } = (0, Z.ZP)(),
        p = o === eL.IlC.POPOUT,
        h = (0, S.KF)(t.id),
        f = (0, S.g5)(h),
        { userInActivity: m } = (0, u.cj)([y.ZP], () => ({ userInActivity: null != y.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        b = (0, C.a)(),
        _ = h !== S.jy.CAN_LAUNCH,
        { enabled: E } = v.c.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: O, events: I, play: T } = (0, d.w)();
    return n
        ? (0, r.jsx)(g.ua7, {
              text: f,
              children: (e) =>
                  (0, r.jsxs)(
                      g.zxk,
                      eW(
                          eG(
                              eW(eG({}, e), {
                                  fullWidth: !0,
                                  size: i ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL
                              }),
                              I
                          ),
                          {
                              onClick: () => {
                                  var n;
                                  T(),
                                      (0, j.Z)({
                                          channel: t,
                                          openInPopout: p,
                                          analyticsLocations: s
                                      }),
                                      null === (n = e.onClick) || void 0 === n || n.call(e),
                                      (0, L.v)(c, L.d.ACTIVITY);
                              },
                              onMouseEnter: () => {
                                  var t;
                                  I.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                              },
                              onMouseLeave: () => {
                                  var t;
                                  I.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                              },
                              disabled: _,
                              className: a()(l && m ? ek.experimentButton : ek.button, ek.buttonColor, {
                                  [ek.buttonActive]: m,
                                  [ek.disabled]: _
                              }),
                              innerClassName: ek.buttonContents,
                              wrapperClassName: ek.button,
                              children: [
                                  b
                                      ? (0, r.jsx)(P.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  E
                                      ? (0, r.jsx)(g.iWm, {
                                            size: i ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: ek.buttonIcon
                                        })
                                      : (0, r.jsx)(O, {
                                            size: i ? 'md' : 'sm',
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
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, Z.ZP)(),
        d = (0, k.Q3)('ConnectedStreamButton'),
        { coloredIconsEnabled: h } = (0, ei.Z)({ location: 'ConnectedStreamButton' }),
        f = (0, u.e7)([ey.default], () => ey.default.getCurrentUser()),
        m = (0, u.Wu)([ef.Z], () => ef.Z.getAllActiveStreams()),
        b = (0, eo.Z)(n),
        _ = n.getGuildId(),
        E = (0, u.cj)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, K.Z)(n),
        N = i.useCallback(() => {
            (0, ed.Z)(_, n.id, eL.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        v = m.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        I = (0, es.E)(n, f, m);
    t = null == v ? (l ? N : eu.Z) : () => (0, V.Z)(v);
    let C = null != v || I.length > 0,
        S = b ? eD.NW.string(eD.t.fjBNo6) : eD.NW.string(eD.t.uQn9Bw),
        T = E || o || O,
        P = null != v,
        { Component: j, events: A, play: x } = (0, p.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => x(), [x, P]);
    let R = (0, r.jsx)(j, {
        size: d ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(ek.buttonIcon, { [ek.withText]: !T })
    });
    return (0, r.jsx)(g.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(es.Z, {
                channel: n,
                currentUser: f,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? N : eu.Z,
                onInteraction: (0, w.u)('ManageStreamsMenu', c, { entrypoint: ew.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: g.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eV(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(g.ua7, {
                text: S,
                children: (e) =>
                    (0, r.jsx)(
                        g.zxk,
                        eW(
                            eG(
                                eW(eG({}, e), {
                                    size: d ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        (0, L.v)(c, L.d.STREAM, null == v), C ? n(r) : t(), null === (i = e.onClick) || void 0 === i || i.call(e);
                                    },
                                    disabled: !b || s,
                                    className: a()(h ? ek.experimentButton : ek.button, ek.buttonColor, {
                                        [ek.buttonActive]: null != v,
                                        [ek.disabled]: !b || s
                                    })
                                }),
                                C ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    null == i || i(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), A.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    var t;
                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), A.onMouseLeave();
                                },
                                innerClassName: ek.buttonContents,
                                wrapperClassName: ek.button,
                                children: T
                                    ? R
                                    : (0, r.jsxs)(D.Z, {
                                          align: D.Z.Align.CENTER,
                                          children: [R, eD.NW.string(eD.t['r0/+v7'])]
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
        let { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o } = this.props;
        if (null == t) return null;
        let s = (0, R.F6)(t, ey.default, ev.Z);
        return (
            null != n ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(Y.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                children: (0, r.jsx)(g.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eA.Z, {
                            className: ek.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, r.jsx)(g.Text, {
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
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: i, channel: l, voiceStates: a } = this.props;
        return null != i
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == a.find((e) => e.user.id === eg.default.getId() && (0, en.gf)(e.voiceState) === en.xO.ON_STAGE) && (0, ee.U5)(l.id)
              ? (0, r.jsx)(eF, {})
              : !n && t
                ? (0, r.jsx)(g.ua7, {
                      text: eD.NW.string(eD.t['i+SO/f']),
                      tooltipClassName: ek.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(ej.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: g.oIc
                          });
                      }
                  })
                : (0, r.jsx)(
                      g.yRy,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, r.jsx)(eH, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eQ, {
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
                  className: ek.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: o, isPrivateChannelWithEnabledActivities: s } = this.props;
        if (null == e || null != n) return null;
        let c = eg.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || s) && i,
            { reachedLimit: d } = (0, ea.t)(e),
            p = (0, J.xJ)(e.id);
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
                    disabled: e.isGuildStageVoice() && ((p && null == o) || (!p && d))
                }),
                u
                    ? (0, r.jsx)(eY, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, K.Z)(e)
                    ? (0, r.jsx)(q.Z, {
                          className: a()(ek.button, ek.buttonColor),
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
            : (0, r.jsx)(g.yRy, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: g.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
                          className: ek.container,
                          children: [
                              (0, r.jsxs)(D.Z, {
                                  className: ek.connection,
                                  align: D.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ek.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(D.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ek.voiceButtonsContainer,
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
            eU(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), _.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eL.ME, r.id), (0, L.v)(A.Z.RTC_PANEL, L.d.CHANNEL_LINK);
            }),
            eU(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, b.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(Z.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eW(eG({}, n), {
                                    channel: t,
                                    onInteraction: (0, w.u)('RTCConnectionMenu', A.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eU(this, 'handleCloseVoicePanelIntroduction', () => {
                B.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            eU(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(ek.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(g.X6q, {
                            className: ek.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eD.NW.string(eD.t['ba/rLy'])
                        }),
                        (0, r.jsx)(g.Text, {
                            className: ek.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eD.NW.string(eD.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(g.zxk, {
                            className: ek.voicePanelIntroductionButton,
                            color: g.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eD.NW.string(eD.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eQ(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { parentAnalyticsLocation: a } = (0, Z.ZP)(),
        { play: o, Component: s, events: c } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            ej.Z,
            eW(eG({}, t), {
                onClick: (e) => {
                    (0, L.v)(a, L.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null === (e = t.onMouseEnter) || void 0 === e || e.call(t), c.onMouseEnter();
                },
                onMouseLeave: () => {
                    c.onMouseLeave();
                },
                tooltipClassName: ek.noiseCancellationTooltip,
                tooltipText: n ? null : eD.NW.string(eD.t.vFiCS0),
                icon: (0, r.jsx)(s, { size: 'refresh_sm' })
            })
        )
    );
}
let eX = (0, O.Z)(function (e) {
    let t = (0, k.Q3)('ConnectedRTCConnection'),
        { coloredIconsEnabled: n } = (0, ei.Z)({ location: 'ConnectedRTCConnection' }),
        l = (0, U.Z)(),
        a = (0, u.e7)([M.Z], () => M.Z.getAwaitingRemoteSessionInfo()),
        o = (0, u.e7)([ey.default], () => ey.default.getCurrentUser()),
        s = (0, u.cj)([eN.Z], () =>
            null != l
                ? {
                      channelId: l.channelId,
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
        { channelId: c } = s,
        d = eV(s, ['channelId']),
        p = (0, u.e7)([em.Z], () => em.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)([eb.Z], () => eb.Z.getGuild(h), [h]),
        m = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, W.Z)(eE.Z)
        })),
        b = (0, u.e7)([eE.Z, H.Z], () => H.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eP.EO)(o) && !eE.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        _ = (0, u.e7)([eI.Z], () => null != c && eI.Z.hasVideo(c), [c]),
        E = (0, u.e7)([ef.Z], () => ef.Z.getCurrentUserActiveStream()),
        O = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
        N = (0, u.e7)([F.Z], () => F.Z.isViewingRoles(h)),
        v = (0, u.e7)([eO.Z], () => N && !eO.Z.can(eL.Plq.VIEW_CHANNEL, p), [N, p]),
        y = er.Fg.useSetting(),
        [C, S, P] = (0, u.Wu)([eC.ZP, Q.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [Q.Z.getMutableParticipants(p.id, X.pV.SPEAKER), Q.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eC.ZP.getVoiceStatesForChannel(p) : null]), [p]),
        j = i.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == C
                                ? void 0
                                : C.map((e) => {
                                      let { user: t, userNick: n, voiceState: r } = e;
                                      return {
                                          user: t,
                                          nick: n,
                                          voiceState: r
                                      };
                                  })) && void 0 !== e
                        ? e
                        : P) && void 0 !== t
                ? t
                : [];
        }, [C, S, P]),
        [x, L] = i.useState(!1);
    i.useEffect(() => {
        (N || v) && L(!1);
    }, [N, v, L]);
    let { analyticsLocations: w } = (0, Z.ZP)(A.Z.RTC_PANEL),
        R = (0, I.Z)(null != h ? h : eL.lds, null == p ? void 0 : p.id),
        D = (0, T.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(Z.Gt, {
        value: w,
        children: (0, r.jsxs)('div', {
            className: ek.wrapper,
            children: [
                null != l || null != a
                    ? (0, r.jsx)(G.Z, {
                          voiceState: l,
                          awaitingRemoteSessionInfo: a
                      })
                    : null,
                (0, r.jsx)(
                    eq,
                    eW(eG({}, e, m, d), {
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
                        coloredIconsEnabled: n
                    })
                ),
                !x && N && null != h
                    ? (0, r.jsxs)('div', {
                          className: ek.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  className: ek.viewAsRolesWarningText,
                                  children: v ? eD.NW.string(eD.t.efjuQE) : eD.NW.string(eD.t.br8H2N)
                              }),
                              (0, r.jsx)(g.zxk, {
                                  className: ek.viewAsRolesWarningButton,
                                  size: g.zxk.Sizes.MIN,
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
