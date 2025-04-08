n.d(t, { Z: () => eJ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(442837),
    d = n(864094),
    p = n(75735),
    h = n(382600),
    f = n(481060),
    g = n(846027),
    m = n(239091),
    b = n(925549),
    _ = n(284056),
    E = n(730749),
    O = n(911969),
    N = n(40851),
    y = n(317381),
    I = n(596040),
    v = n(588580),
    C = n(374065),
    S = n(451576),
    T = n(119315),
    P = n(403404),
    j = n(100527),
    A = n(906732),
    Z = n(562129),
    x = n(793865),
    w = n(522651),
    L = n(795318),
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
    ey = n(699516),
    eI = n(594174),
    ev = n(979651),
    eC = n(938475),
    eS = n(626135),
    eT = n(63063),
    eP = n(51144),
    ej = n(870569),
    eA = n(345243),
    eZ = n(594117),
    ex = n(226323),
    ew = n(981631),
    eL = n(354459),
    eR = n(190378),
    eD = n(388032),
    ek = n(566177),
    eM = n(20493);
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
let eB = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};
function eH(e) {
    let t = e.currentTarget;
    eS.default.track(ew.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ew.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eF() {
    let e = i.useRef(null);
    (0, f.Tbt)(e),
        i.useEffect(() => {
            eS.default.track(ew.rMx.OPEN_POPOUT, { type: ew.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: ek.noiseCancellationPopout,
        children: [
            (0, r.jsx)(f.j7V, {
                hideBorder: !0,
                className: eM.marginBottom4,
                value: t,
                onChange: () => g.Z.setNoiseCancellation(!t, { section: ew.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eD.NW.string(eD.t.uKdWn5),
                children: eD.NW.string(eD.t.WGWHv7)
            }),
            (0, r.jsx)(_.Z, {
                title: eD.NW.string(eD.t.JdUas7),
                notchBackground: _._.BLACK,
                buttonTest: eD.NW.string(eD.t['sG+MGh']),
                buttonStop: eD.NW.string(eD.t.Yp3SbG),
                buttonClassName: ek.micTestButton,
                buttonColor: f.zxk.Colors.PRIMARY,
                location: { section: ew.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(f.vwX, {
                tag: f.RB0.H5,
                className: a()(eM.marginBottom8, eM.marginTop20),
                children: eD.NW.string(eD.t.k6h1Fx)
            }),
            (0, r.jsxs)(D.Z, {
                justify: D.Z.Justify.BETWEEN,
                className: ek.__invalid_footer,
                children: [
                    (0, r.jsx)(f.eee, {
                        href: ew.EYA.KRISP,
                        onClick: (e) => eH(e),
                        children: (0, r.jsx)('div', { className: ek.krispLogo })
                    }),
                    (0, r.jsx)(f.eee, {
                        href: eT.Z.getArticleURL(ew.BhN.NOISE_SUPPRESSION),
                        className: ek.krispLink,
                        onClick: (e) => eH(e),
                        children: eD.NW.string(eD.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function ez() {
    let { parentAnalyticsLocation: e } = (0, A.ZP)(),
        t = (0, u.e7)([et.Z], () => et.Z.isMuted()),
        n = t ? eD.NW.string(eD.t.ScHlfn) : eD.NW.string(eD.t.zqxfra);
    return (0, r.jsx)(ej.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? f.xjP : f.RZG,
        onClick: () => {
            (0, w.v)(e, w.d.STAGE_MUSIC, t), (0, $.v)(!t);
        }
    });
}
function eY(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, A.ZP)(),
        c = (0, k.Q3)('ConnectedVideoButton'),
        { coloredIconsEnabled: d, simplifiedSettingsEnabled: h } = (0, ei.Z)({ location: 'ConnectedVideoButton' }),
        m = (0, el.Z)(),
        b = (0, eo.Z)(t),
        _ = (0, u.e7)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForLocation(y.ZP.getConnectedActivityLocation())),
        E = (0, K.Z)(t),
        { reachedLimit: O, limit: I } = (0, ea.Z)(t),
        v = i.useCallback(() => {
            (0, ec.Z)();
        }, []),
        C = (0, N.bp)(),
        S = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    g.Z.setVideoEnabled(e), e && (0, z.uL)(ew.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : ew.ME, t.id));
                };
                (0, w.v)(s, w.d.CAMERA, e), e ? (0, ep.Z)(n, C) : n();
            },
            [t, C, s]
        ),
        T = _ || n || E,
        { Component: P, play: j, events: Z } = (0, p.o)(m.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => j(), [m.enabled, j]),
        (0, r.jsx)(
            eh.Z,
            eW(
                eG(
                    {
                        onChange: S,
                        onCameraUnavailable: v,
                        hasPermission: b,
                        channelLimit: I,
                        channelLimitReached: O
                    },
                    m
                ),
                {
                    enabled: !l && m.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l } = e,
                            u = eV(e, ['unavailable', 'isActive', 'label', 'iconComponent']);
                        let p = (0, r.jsx)(P, {
                            size: c ? 'md' : 'sm',
                            className: a()(ek.buttonIcon, { [ek.withText]: !T }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(f.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(x.Z, {
                                    onClose: t,
                                    simplified: h,
                                    onInteraction: (0, L.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    h = eV(e, ['onClick']),
                                    { isShown: g } = l;
                                return (0, r.jsx)(f.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            eW(eG({ buttonRef: o }, u, e, h), {
                                                onClick: (t) => {
                                                    var n;
                                                    u.onClick(t), null == (n = e.onClick) || n.call(e), g && s(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null == (t = e.onMouseEnter) || t.call(e), null == (n = h.onMouseEnter) || n.call(h), Z.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null == (t = e.onMouseLeave) || t.call(e), Z.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    s(t), null == (n = e.onContextMenu) || n.call(e);
                                                },
                                                size: c ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL,
                                                className: a()(d ? ek.experimentButton : ek.button, ek.buttonColor, {
                                                    [ek.buttonActive]: n,
                                                    [ek.fauxDisabled]: t,
                                                    [ek.disabled]: u.disabled
                                                }),
                                                innerClassName: ek.buttonContents,
                                                wrapperClassName: ek.button,
                                                fullWidth: !0,
                                                focusProps: eB,
                                                children: T
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
function eK(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, k.Q3)('ConnectedActivityButton'),
        { coloredIconsEnabled: l } = (0, ei.Z)({ location: 'ConnectedActivityButton' }),
        o = (0, N.bp)(),
        { analyticsLocations: s, parentAnalyticsLocation: c } = (0, A.ZP)(),
        d = o === ew.IlC.POPOUT,
        p = (0, C.KF)(t.id),
        h = (0, C.g5)(p),
        { userInActivity: g } = (0, u.cj)([y.ZP], () => ({ userInActivity: null != y.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        m = (0, v.a)(O.eR.VOICE_LAUNCHER),
        b = p !== C.jy.CAN_LAUNCH,
        { Component: _, events: E, play: I } = (0, Z.Z)('RTCConnection');
    return n
        ? (0, r.jsx)(f.ua7, {
              text: h,
              children: (e) =>
                  (0, r.jsxs)(
                      f.zxk,
                      eW(
                          eG(
                              eW(eG({}, e), {
                                  fullWidth: !0,
                                  size: i ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL
                              }),
                              E
                          ),
                          {
                              onClick: () => {
                                  var n;
                                  I(),
                                      (0, P.Z)({
                                          channel: t,
                                          openInPopout: d,
                                          analyticsLocations: s
                                      }),
                                      null == (n = e.onClick) || n.call(e),
                                      (0, w.v)(c, w.d.ACTIVITY);
                              },
                              onMouseEnter: () => {
                                  var t;
                                  E.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                              },
                              onMouseLeave: () => {
                                  var t;
                                  E.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e);
                              },
                              disabled: b,
                              className: a()(l && g ? ek.experimentButton : ek.button, ek.buttonColor, {
                                  [ek.buttonActive]: g,
                                  [ek.disabled]: b
                              }),
                              innerClassName: ek.buttonContents,
                              wrapperClassName: ek.button,
                              focusProps: eB,
                              children: [
                                  m
                                      ? (0, r.jsx)(T.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  (0, r.jsx)(_, {
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
function eq(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: p } = (0, A.ZP)(),
        h = (0, k.Q3)('ConnectedStreamButton'),
        { coloredIconsEnabled: g } = (0, ei.Z)({ location: 'ConnectedStreamButton' }),
        m = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        b = (0, u.Wu)([ef.Z], () => ef.Z.getAllActiveStreams()),
        _ = (0, eo.Z)(n),
        E = n.getGuildId(),
        O = (0, u.cj)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        N = (0, K.Z)(n),
        I = i.useCallback(() => {
            (0, ed.Z)(E, n.id, ew.jXE.ACTIVITY_PANEL);
        }, [E, n.id]),
        v = b.find((e) => e.ownerId === (null == m ? void 0 : m.id)),
        C = (0, es.E)(n, m, b);
    t = null == v ? (l ? I : eu.Z) : () => (0, V.Z)(v);
    let S = null != v || C.length > 0,
        T = _ ? eD.NW.string(eD.t.fjBNo6) : eD.NW.string(eD.t.uQn9Bw),
        P = O || o || N,
        j = null != v,
        { Component: Z, events: x, play: R } = (0, d.P)(j ? 'disable' : 'enable');
    i.useEffect(() => () => R(), [R, j]);
    let M = (0, r.jsx)(Z, {
        size: h ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(ek.buttonIcon, { [ek.withText]: !P })
    });
    return (0, r.jsx)(f.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(es.Z, {
                channel: n,
                currentUser: m,
                activeStreams: b,
                onClose: t,
                handleGoLive: l ? I : eu.Z,
                onInteraction: (0, L.u)('ManageStreamsMenu', p, { entrypoint: eL.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: f.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eV(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(f.ua7, {
                text: T,
                children: (e) =>
                    (0, r.jsx)(
                        f.zxk,
                        eW(
                            eG(
                                eW(eG({}, e), {
                                    buttonRef: c,
                                    size: h ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        (0, w.v)(p, w.d.STREAM, null == v), S ? n(r) : t(), null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !_ || s,
                                    className: a()(g ? ek.experimentButton : ek.button, ek.buttonColor, {
                                        [ek.buttonActive]: null != v,
                                        [ek.disabled]: !_ || s
                                    })
                                }),
                                S ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    null == i || i(), null == (t = e.onMouseEnter) || t.call(e), x.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    var t;
                                    null == (t = e.onMouseLeave) || t.call(e), x.onMouseLeave();
                                },
                                innerClassName: ek.buttonContents,
                                wrapperClassName: ek.button,
                                focusProps: eB,
                                children: P
                                    ? M
                                    : (0, r.jsxs)(D.Z, {
                                          align: D.Z.Align.CENTER,
                                          children: [M, eD.NW.string(eD.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class eQ extends i.PureComponent {
    renderConnectionStatus() {
        let e,
            { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o } = this.props;
        if (null == t) return null;
        let s = (0, R.F6)(t, eI.default, ey.Z);
        return (
            null != n ? ((e = ew.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = ew.Z5c.CHANNEL(ew.ME, t.id)),
            (0, r.jsx)(Y.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                children: (0, r.jsx)(f.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eA.Z, {
                            className: ek.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, r.jsx)(f.Text, {
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
              ? (0, r.jsx)(ez, {})
              : !n && t
                ? (0, r.jsx)(f.ua7, {
                      text: eD.NW.string(eD.t['i+SO/f']),
                      tooltipClassName: ek.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(ej.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: f.oIc
                          });
                      }
                  })
                : (0, r.jsx)(
                      f.yRy,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, r.jsx)(eF, {}),
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
            ? (0, r.jsx)(ex.Z, {
                  voiceStates: t,
                  channel: e,
                  className: ek.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let s = eg.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || o) && i,
            { reachedLimit: u } = (0, ea.t)(e),
            d = (0, J.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: ek.actionButtons,
            children: [
                (0, r.jsx)(eY, {
                    channel: e,
                    enableActivities: c,
                    disabled: !d && u
                }),
                (0, r.jsx)(eq, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((d && null == a) || (!d && u))
                }),
                c
                    ? (0, r.jsx)(eK, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, K.Z)(e)
                    ? (0, r.jsx)(q.Z, {
                          channel: e,
                          focusProps: eB
                      })
                    : null
            ]
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(f.yRy, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: f.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
                          ref: this.ref,
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
            eU(this, 'ref', i.createRef()),
            eU(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), b.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : ew.ME, r.id), (0, w.v)(j.Z.RTC_PANEL, w.d.CHANNEL_LINK);
            }),
            eU(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, m.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(A.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eW(eG({}, n), {
                                    channel: t,
                                    onInteraction: (0, L.u)('RTCConnectionMenu', j.Z.RTC_PANEL)
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
                        (0, r.jsx)(f.X6q, {
                            className: ek.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eD.NW.string(eD.t['ba/rLy'])
                        }),
                        (0, r.jsx)(f.Text, {
                            className: ek.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eD.NW.string(eD.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(f.zxk, {
                            className: ek.voicePanelIntroductionButton,
                            color: f.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eB,
                            children: eD.NW.string(eD.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eX(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { parentAnalyticsLocation: a } = (0, A.ZP)(),
        { play: o, Component: s, events: c } = (0, h.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            ej.Z,
            eW(eG({}, t), {
                onClick: (e) => {
                    (0, w.v)(a, w.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), c.onMouseEnter();
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
let eJ = (0, E.Z)(function (e) {
    let t = (0, k.Q3)('ConnectedRTCConnection'),
        { coloredIconsEnabled: n } = (0, ei.Z)({ location: 'ConnectedRTCConnection' }),
        l = (0, U.Z)(),
        a = (0, u.e7)([M.Z], () => M.Z.getAwaitingRemoteSessionInfo()),
        o = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        s = (0, u.cj)([eN.ZP], () =>
            null != l
                ? {
                      channelId: l.channelId,
                      rtcConnectionQuality: ew.IE4.FINE,
                      rtcConnectionState: ew.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eN.ZP.getChannelId(),
                      rtcConnectionQuality: eN.ZP.getQuality(),
                      rtcConnectionState: eN.ZP.getState(),
                      rtcConnectionLastPing: eN.ZP.getLastPing()
                  }
        ),
        { channelId: c } = s,
        d = eV(s, ['channelId']),
        p = (0, u.e7)([em.Z], () => em.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        g = (0, u.e7)([eb.Z], () => eb.Z.getGuild(h), [h]),
        m = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, W.Z)(eE.Z)
        })),
        b = (0, u.e7)([eE.Z, H.Z], () => H.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eP.EO)(o) && !eE.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        _ = (0, u.e7)([ev.Z], () => null != c && ev.Z.hasVideo(c), [c]),
        E = (0, u.e7)([ef.Z], () => ef.Z.getCurrentUserActiveStream()),
        O = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
        N = (0, u.e7)([F.Z], () => F.Z.isViewingRoles(h)),
        y = (0, u.e7)([eO.Z], () => N && !eO.Z.can(ew.Plq.VIEW_CHANNEL, p), [N, p]),
        v = er.Fg.useSetting(),
        [C, T, P] = (0, u.Wu)([eC.ZP, Q.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [Q.Z.getMutableParticipants(p.id, X.pV.SPEAKER), Q.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eC.ZP.getVoiceStatesForChannel(p) : null]), [p]),
        Z = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
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
                              }))
                        ? e
                        : P)
                ? t
                : [];
        }, [C, T, P]),
        [x, w] = i.useState(!1);
    i.useEffect(() => {
        (N || y) && w(!1);
    }, [N, y, w]);
    let { analyticsLocations: L } = (0, A.ZP)(j.Z.RTC_PANEL),
        R = (0, I.Z)(null != h ? h : ew.lds, null == p ? void 0 : p.id),
        D = (0, S.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(A.Gt, {
        value: L,
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
                    eQ,
                    eW(eG({}, e, m, d), {
                        enableActivities: R,
                        remoteVoiceState: l,
                        guild: g,
                        channel: p,
                        hasVideo: _,
                        selfStream: E,
                        hasLayers: O,
                        voiceStates: Z,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: b,
                        isPrivateChannelWithEnabledActivities: D,
                        analyticsLocations: L,
                        isVisualRefreshEnabled: t,
                        coloredIconsEnabled: n
                    })
                ),
                !x && N && null != h
                    ? (0, r.jsxs)('div', {
                          className: ek.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: ek.viewAsRolesWarningText,
                                  children: y ? eD.NW.string(eD.t.efjuQE) : eD.NW.string(eD.t.br8H2N)
                              }),
                              (0, r.jsx)(f.zxk, {
                                  className: ek.viewAsRolesWarningButton,
                                  size: f.zxk.Sizes.MIN,
                                  onClick: () => {
                                      w(!0);
                                  },
                                  focusProps: eB,
                                  children: eD.NW.string(eD.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
