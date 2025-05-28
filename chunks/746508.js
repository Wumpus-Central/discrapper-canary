n.d(t, { Z: () => eJ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(688642),
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
    y = n(40851),
    I = n(317381),
    v = n(596040),
    C = n(588580),
    S = n(374065),
    N = n(451576),
    T = n(119315),
    P = n(403404),
    j = n(100527),
    A = n(906732),
    Z = n(562129),
    x = n(793865),
    L = n(522651),
    w = n(795318),
    R = n(933557),
    D = n(600164),
    k = n(540059),
    M = n(258609),
    U = n(446226),
    G = n(935261),
    V = n(74299),
    B = n(803647),
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
    er = n(695346),
    ei = n(923973),
    el = n(829750),
    ea = n(189771),
    eo = n(544384),
    es = n(560688),
    ec = n(127608),
    eu = n(76021),
    ed = n(173507),
    ep = n(25827),
    eh = n(199902),
    ef = n(314897),
    eg = n(592125),
    em = n(430824),
    eb = n(819640),
    e_ = n(131951),
    eE = n(496675),
    eO = n(19780),
    ey = n(699516),
    eI = n(594174),
    ev = n(979651),
    eC = n(938475),
    eS = n(626135),
    eN = n(63063),
    eT = n(51144),
    eP = n(351763),
    ej = n(870569),
    eA = n(345243),
    eZ = n(594117),
    ex = n(226323),
    eL = n(981631),
    ew = n(354459),
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
function eV(e, t) {
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
function eB(e, t) {
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
let eH = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};
function eF(e) {
    let t = e.currentTarget;
    eS.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function ez() {
    let e = i.useRef(null);
    (0, f.Tbt)(e),
        i.useEffect(() => {
            eS.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([e_.Z], () => e_.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: ek.noiseCancellationPopout,
        children: [
            (0, r.jsx)(f.j7V, {
                hideBorder: !0,
                className: eM.marginBottom4,
                value: t,
                onChange: () => g.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eD.intl.string(eD.t.uKdWn5),
                children: eD.intl.string(eD.t.WGWHv7)
            }),
            (0, r.jsx)(_.Z, {
                title: eD.intl.string(eD.t.JdUas7),
                notchBackground: _._.BLACK,
                buttonTest: eD.intl.string(eD.t['sG+MGh']),
                buttonStop: eD.intl.string(eD.t.Yp3SbG),
                buttonClassName: ek.micTestButton,
                buttonColor: f.zxk.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(f.vwX, {
                tag: f.RB0.H5,
                className: a()(eM.marginBottom8, eM.marginTop20),
                children: eD.intl.string(eD.t.k6h1Fx)
            }),
            (0, r.jsxs)(D.Z, {
                justify: D.Z.Justify.BETWEEN,
                className: ek.__invalid_footer,
                children: [
                    (0, r.jsx)(f.eee, {
                        href: eL.EYA.KRISP,
                        onClick: (e) => eF(e),
                        children: (0, r.jsx)('div', { className: ek.krispLogo })
                    }),
                    (0, r.jsx)(f.eee, {
                        href: eN.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                        className: ek.krispLink,
                        onClick: (e) => eF(e),
                        children: eD.intl.string(eD.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eW() {
    let { parentAnalyticsLocation: e } = (0, A.ZP)(),
        t = (0, u.e7)([et.Z], () => et.Z.isMuted()),
        n = t ? eD.intl.string(eD.t.ScHlfn) : eD.intl.string(eD.t.zqxfra);
    return (0, r.jsx)(ej.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? f.xjP : f.RZG,
        onClick: () => {
            (0, L.v)(e, L.d.STAGE_MUSIC, t), (0, $.v)(!t);
        }
    });
}
function eY(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, A.ZP)(),
        c = (0, k.Q3)('ConnectedVideoButton'),
        d = (0, ei.Z)(),
        h = (0, ea.Z)(t),
        m = (0, u.e7)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation())),
        b = (0, K.Z)(t),
        { reachedLimit: _, limit: E } = (0, el.Z)(t),
        O = i.useCallback(() => {
            (0, es.Z)();
        }, []),
        v = (0, y.bp)(),
        C = i.useCallback(
            (e) => {
                if (e_.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    g.Z.setVideoEnabled(e), e && (0, W.uL)(eL.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eL.ME, t.id));
                };
                (0, L.v)(s, L.d.CAMERA, e), e ? (0, ed.Z)(n, v) : n();
            },
            [t, v, s]
        ),
        S = m || n || b,
        { Component: N, play: T, events: P } = (0, p.o)(d.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => T(), [d.enabled, T]),
        (0, r.jsx)(
            ep.Z,
            eV(
                eG(
                    {
                        onChange: C,
                        onCameraUnavailable: O,
                        hasPermission: h,
                        channelLimit: E,
                        channelLimitReached: _
                    },
                    d
                ),
                {
                    enabled: !l && d.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: u } = e,
                            d = eB(e, ['unavailable', 'isActive', 'label', 'iconComponent', 'iconColor']);
                        let p = (0, r.jsx)(N, {
                            size: c ? 'md' : 'sm',
                            className: a()(ek.buttonIcon, { [ek.withText]: !S }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(f.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(x.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, w.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    u = eB(e, ['onClick']),
                                    { isShown: h } = l;
                                return (0, r.jsx)(f.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            eV(eG({ buttonRef: o }, d, e, u), {
                                                onClick: (t) => {
                                                    var n;
                                                    d.onClick(t), null == (n = e.onClick) || n.call(e), h && s(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null == (t = e.onMouseEnter) || t.call(e), null == (n = u.onMouseEnter) || n.call(u), P.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null == (t = e.onMouseLeave) || t.call(e), P.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    s(t), null == (n = e.onContextMenu) || n.call(e);
                                                },
                                                size: c ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL,
                                                className: a()(ek.button, ek.buttonColor, {
                                                    [ek.buttonActive]: n,
                                                    [ek.fauxDisabled]: t,
                                                    [ek.disabled]: d.disabled
                                                }),
                                                innerClassName: ek.buttonContents,
                                                wrapperClassName: ek.button,
                                                fullWidth: !0,
                                                focusProps: eH,
                                                children: S
                                                    ? p
                                                    : (0, r.jsxs)(D.Z, {
                                                          align: D.Z.Align.CENTER,
                                                          children: [p, eD.intl.string(eD.t.FlNoSU)]
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
        l = (0, y.bp)(),
        { analyticsLocations: o, parentAnalyticsLocation: s } = (0, A.ZP)(),
        c = l === eL.IlC.POPOUT,
        d = (0, S.KF)(t.id),
        p = (0, S.g5)(d),
        { userInActivity: h } = (0, u.cj)([I.ZP], () => ({ userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        g = (0, C.a)({ surface: O.eR.VOICE_LAUNCHER }),
        m = d !== S.jy.CAN_LAUNCH,
        { Component: b, events: _, play: E } = (0, Z.Z)('RTCConnection');
    return n
        ? (0, r.jsx)(f.ua7, {
              text: p,
              children: (e) =>
                  (0, r.jsxs)(
                      f.zxk,
                      eV(
                          eG(
                              eV(eG({}, e), {
                                  fullWidth: !0,
                                  size: i ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL
                              }),
                              _
                          ),
                          {
                              onClick: () => {
                                  var n;
                                  E(),
                                      (0, P.Z)({
                                          channel: t,
                                          openInPopout: c,
                                          analyticsLocations: o
                                      }),
                                      null == (n = e.onClick) || n.call(e),
                                      (0, L.v)(s, L.d.ACTIVITY);
                              },
                              onMouseEnter: () => {
                                  var t;
                                  _.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                              },
                              onMouseLeave: () => {
                                  var t;
                                  _.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e);
                              },
                              disabled: m,
                              className: a()(ek.button, ek.buttonColor, {
                                  [ek.buttonActive]: h,
                                  [ek.disabled]: m
                              }),
                              innerClassName: ek.buttonContents,
                              wrapperClassName: ek.button,
                              focusProps: eH,
                              children: [
                                  g
                                      ? (0, r.jsx)(T.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  (0, r.jsx)(b, {
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
        g = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        m = (0, u.Wu)([eh.Z], () => eh.Z.getAllActiveStreams()),
        b = (0, ea.Z)(n),
        _ = n.getGuildId(),
        E = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, K.Z)(n),
        y = i.useCallback(() => {
            (0, eu.Z)(_, n.id, eL.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        v = m.find((e) => e.ownerId === (null == g ? void 0 : g.id)),
        C = (0, eo.E)(n, g, m);
    t = null == v ? (l ? y : ec.Z) : () => (0, B.Z)(v);
    let S = null != v || C.length > 0,
        N = b ? eD.intl.string(eD.t.fjBNo6) : eD.intl.string(eD.t.uQn9Bw),
        T = E || o || O,
        P = null != v,
        { Component: j, events: Z, play: x } = (0, d.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => x(), [x, P]);
    let R = (0, r.jsx)(j, {
        size: h ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(ek.buttonIcon, { [ek.withText]: !T })
    });
    return (0, r.jsx)(f.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eo.Z, {
                channel: n,
                currentUser: g,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? y : ec.Z,
                onInteraction: (0, w.u)('ManageStreamsMenu', p, { entrypoint: ew.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: f.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eB(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(f.ua7, {
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        f.zxk,
                        eV(
                            eG(
                                eV(eG({}, e), {
                                    buttonRef: c,
                                    size: h ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        (0, L.v)(p, L.d.STREAM, null == v), S ? n(r) : t(), null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !b || s,
                                    className: a()(ek.button, ek.buttonColor, {
                                        [ek.buttonActive]: null != v,
                                        [ek.disabled]: !b || s
                                    })
                                }),
                                S ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    null == i || i(), null == (t = e.onMouseEnter) || t.call(e), Z.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    var t;
                                    null == (t = e.onMouseLeave) || t.call(e), Z.onMouseLeave();
                                },
                                innerClassName: ek.buttonContents,
                                wrapperClassName: ek.button,
                                focusProps: eH,
                                children: T
                                    ? R
                                    : (0, r.jsxs)(D.Z, {
                                          align: D.Z.Align.CENTER,
                                          children: [R, eD.intl.string(eD.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class eX extends i.PureComponent {
    renderConnectionStatus() {
        let e,
            { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o } = this.props;
        if (null == t) return null;
        let s = (0, R.F6)(t, eI.default, ey.Z);
        return (
            null != n ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
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
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == a.find((e) => e.user.id === ef.default.getId() && (0, en.gf)(e.voiceState) === en.xO.ON_STAGE) && (0, ee.U5)(l.id)
              ? (0, r.jsx)(eW, {})
              : !n && t
                ? (0, r.jsx)(f.ua7, {
                      text: eD.intl.string(eD.t['i+SO/f']),
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
                          targetElementRef: this.krispButtonRef,
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, r.jsx)(ez, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eQ, {
                                  popoutProps: t,
                                  isShown: i,
                                  noiseCancellationActive: e,
                                  ref: this.krispButtonRef
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
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o, isSoundboardButtonHidden: s, isActivityButtonHidden: c } = this.props;
        if (null == e || null != n) return null;
        let u = ef.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === u);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && i,
            { reachedLimit: p } = (0, el.t)(e),
            h = (0, J.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: ek.actionButtons,
            children: [
                (0, r.jsx)(eY, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && p
                }),
                (0, r.jsx)(eq, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == a) || (!h && p))
                }),
                d && !c
                    ? (0, r.jsx)(eK, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, K.Z)(e) && !s
                    ? (0, r.jsx)(q.Z, {
                          channel: e,
                          focusProps: eH
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
            eU(this, 'krispButtonRef', i.createRef()),
            eU(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), b.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eL.ME, r.id), (0, L.v)(j.Z.RTC_PANEL, L.d.CHANNEL_LINK);
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
                                eV(eG({}, n), {
                                    channel: t,
                                    onInteraction: (0, w.u)('RTCConnectionMenu', j.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eU(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            eU(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(ek.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(f.X6q, {
                            className: ek.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eD.intl.string(eD.t['ba/rLy'])
                        }),
                        (0, r.jsx)(f.Text, {
                            className: ek.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eD.intl.string(eD.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(f.zxk, {
                            className: ek.voicePanelIntroductionButton,
                            color: f.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eH,
                            children: eD.intl.string(eD.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eQ(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, A.ZP)(),
        { play: s, Component: c, events: u } = (0, h.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            ej.Z,
            eV(eG({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, L.v)(o, L.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipClassName: ek.noiseCancellationTooltip,
                tooltipText: n ? null : eD.intl.string(eD.t.vFiCS0),
                icon: (0, r.jsx)(c, { size: 'refresh_sm' })
            })
        )
    );
}
let eJ = (0, E.Z)(function (e) {
    let t = (0, k.Q3)('ConnectedRTCConnection'),
        { isActivityButtonHidden: n, isSoundboardButtonHidden: l } = (0, eP.S)({ location: 'RTCConnection' }),
        a = (0, U.Z)(),
        o = (0, u.e7)([M.Z], () => M.Z.getAwaitingRemoteSessionInfo()),
        s = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        c = (0, u.cj)([eO.Z], () =>
            null != a
                ? {
                      channelId: a.channelId,
                      rtcConnectionQuality: eL.IE4.FINE,
                      rtcConnectionState: eL.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eO.Z.getChannelId(),
                      rtcConnectionQuality: eO.Z.getQuality(),
                      rtcConnectionState: eO.Z.getState(),
                      rtcConnectionLastPing: eO.Z.getLastPing()
                  }
        ),
        { channelId: d } = c,
        p = eB(c, ['channelId']),
        h = (0, u.e7)([eg.Z], () => eg.Z.getChannel(d), [d]),
        g = null == h ? void 0 : h.getGuildId(),
        m = (0, u.e7)([em.Z], () => em.Z.getGuild(g), [g]),
        b = (0, u.cj)([e_.Z], () => ({
            noiseCancellationSupported: e_.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: e_.Z.getNoiseCancellation(),
            noiseCancellationError: e_.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(e_.Z)
        })),
        _ = (0, u.e7)([e_.Z, F.Z], () => F.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eT.EO)(s) && !e_.Z.isInteractionRequired() && !(null == h ? void 0 : h.isGuildStageVoice())),
        E = (0, u.e7)([ev.Z], () => null != d && ev.Z.hasVideo(d), [d]),
        O = (0, u.e7)([eh.Z], () => eh.Z.getCurrentUserActiveStream()),
        y = (0, u.e7)([eb.Z], () => eb.Z.hasLayers()),
        I = (0, u.e7)([z.Z], () => z.Z.isViewingRoles(g)),
        C = (0, u.e7)([eE.Z], () => I && !eE.Z.can(eL.Plq.VIEW_CHANNEL, h), [I, h]),
        S = er.Fg.useSetting(),
        [T, P, Z] = (0, u.Wu)([eC.ZP, X.Z], () => ((null == h ? void 0 : h.isGuildStageVoice()) ? [X.Z.getMutableParticipants(h.id, Q.pV.SPEAKER), X.Z.getParticipantsVersion(h.id), null] : [null, null, null != h ? eC.ZP.getVoiceStatesForChannel(h) : null]), [h]),
        x = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == T
                            ? void 0
                            : T.map((e) => {
                                  let { user: t, userNick: n, voiceState: r } = e;
                                  return {
                                      user: t,
                                      nick: n,
                                      voiceState: r
                                  };
                              }))
                        ? e
                        : Z)
                ? t
                : [];
        }, [T, P, Z]),
        [L, w] = i.useState(!1);
    i.useEffect(() => {
        (I || C) && w(!1);
    }, [I, C, w]);
    let { analyticsLocations: R } = (0, A.ZP)(j.Z.RTC_PANEL),
        D = (0, v.Z)(null != g ? g : eL.lds, null == h ? void 0 : h.id),
        B = (0, N.Z)(null == h ? void 0 : h.id);
    return (0, r.jsx)(A.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            className: ek.wrapper,
            children: [
                null != a || null != o
                    ? (0, r.jsx)(G.Z, {
                          voiceState: a,
                          awaitingRemoteSessionInfo: o
                      })
                    : null,
                (0, r.jsx)(
                    eX,
                    eV(eG({}, e, b, p), {
                        enableActivities: D,
                        remoteVoiceState: a,
                        guild: m,
                        channel: h,
                        hasVideo: E,
                        selfStream: O,
                        hasLayers: y,
                        voiceStates: x,
                        showVoiceStates: S,
                        shouldShowVoicePanelIntroduction: _,
                        isPrivateChannelWithEnabledActivities: B,
                        analyticsLocations: R,
                        isVisualRefreshEnabled: t,
                        isSoundboardButtonHidden: l,
                        isActivityButtonHidden: n
                    })
                ),
                !L && I && null != g
                    ? (0, r.jsxs)('div', {
                          className: ek.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: ek.viewAsRolesWarningText,
                                  children: C ? eD.intl.string(eD.t.efjuQE) : eD.intl.string(eD.t.br8H2N)
                              }),
                              (0, r.jsx)(f.zxk, {
                                  className: ek.viewAsRolesWarningButton,
                                  size: f.zxk.Sizes.MIN,
                                  onClick: () => {
                                      w(!0);
                                  },
                                  focusProps: eH,
                                  children: eD.intl.string(eD.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
