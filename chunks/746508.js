n.d(t, { Z: () => e$ }), n(388685);
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
    I = n(40851),
    y = n(317381),
    v = n(596040),
    C = n(588580),
    S = n(374065),
    N = n(451576),
    T = n(119315),
    P = n(403404),
    j = n(100527),
    A = n(906732),
    x = n(562129),
    Z = n(793865),
    w = n(522651),
    L = n(795318),
    R = n(933557),
    D = n(338390),
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
    Q = n(848543),
    X = n(565799),
    J = n(501655),
    $ = n(368442),
    ee = n(600518),
    et = n(485287),
    en = n(754277),
    er = n(590415),
    ei = n(695346),
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
    eI = n(19780),
    ey = n(699516),
    ev = n(594174),
    eC = n(979651),
    eS = n(938475),
    eN = n(626135),
    eT = n(63063),
    eP = n(51144),
    ej = n(351763),
    eA = n(870569),
    ex = n(345243),
    eZ = n(594117),
    ew = n(226323),
    eL = n(981631),
    eR = n(354459),
    eD = n(190378),
    ek = n(388032),
    eM = n(566177),
    eU = n(20493);
function eG(e, t, n) {
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
function eB(e) {
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
                eG(e, t, n[t]);
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
function eH(e, t) {
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
let eF = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};
function ez(e) {
    let t = e.currentTarget;
    eN.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eW() {
    let e = i.useRef(null);
    (0, f.Tbt)(e),
        i.useEffect(() => {
            eN.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eM.noiseCancellationPopout,
        children: [
            (0, r.jsx)(f.j7V, {
                hideBorder: !0,
                className: eU.marginBottom4,
                value: t,
                onChange: () => g.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                note: ek.intl.string(ek.t.uKdWn5),
                children: ek.intl.string(ek.t.WGWHv7)
            }),
            (0, r.jsx)(_.Z, {
                title: ek.intl.string(ek.t.JdUas7),
                notchBackground: _._.BLACK,
                buttonTest: ek.intl.string(ek.t['sG+MGh']),
                buttonStop: ek.intl.string(ek.t.Yp3SbG),
                buttonClassName: eM.micTestButton,
                buttonColor: f.zxk.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(f.vwX, {
                tag: f.RB0.H5,
                className: a()(eU.marginBottom8, eU.marginTop20),
                children: ek.intl.string(ek.t.k6h1Fx)
            }),
            (0, r.jsxs)(k.Z, {
                justify: k.Z.Justify.BETWEEN,
                className: eM.__invalid_footer,
                children: [
                    (0, r.jsx)(f.eee, {
                        href: eL.EYA.KRISP,
                        onClick: (e) => ez(e),
                        children: (0, r.jsx)('div', { className: eM.krispLogo })
                    }),
                    (0, r.jsx)(f.eee, {
                        href: eT.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                        className: eM.krispLink,
                        onClick: (e) => ez(e),
                        children: ek.intl.string(ek.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eY() {
    let { parentAnalyticsLocation: e } = (0, A.ZP)(),
        t = (0, u.e7)([en.Z], () => en.Z.isMuted()),
        n = t ? ek.intl.string(ek.t.ScHlfn) : ek.intl.string(ek.t.zqxfra);
    return (0, r.jsx)(eA.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? f.xjP : f.RZG,
        onClick: () => {
            (0, w.v)(e, w.d.STAGE_MUSIC, t), (0, ee.v)(!t);
        }
    });
}
function eK(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, A.ZP)(),
        c = (0, M.Q3)('ConnectedVideoButton'),
        d = (0, el.Z)(),
        h = (0, eo.Z)(t),
        m = (0, u.e7)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForLocation(y.ZP.getConnectedActivityLocation())),
        b = (0, q.Z)(t),
        { reachedLimit: _, limit: E } = (0, ea.Z)(t),
        O = i.useCallback(() => {
            (0, ec.Z)();
        }, []),
        v = (0, I.bp)(),
        C = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    g.Z.setVideoEnabled(e), e && (0, Y.uL)(eL.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eL.ME, t.id));
                };
                (0, w.v)(s, w.d.CAMERA, e), e ? (0, ep.Z)(n, v) : n();
            },
            [t, v, s]
        ),
        S = m || n || b,
        { Component: N, play: T, events: P } = (0, p.o)(d.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => T(), [d.enabled, T]),
        (0, r.jsx)(
            eh.Z,
            eV(
                eB(
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
                            d = eH(e, ['unavailable', 'isActive', 'label', 'iconComponent', 'iconColor']);
                        let p = (0, r.jsx)(N, {
                            size: c ? 'md' : 'sm',
                            className: a()(eM.buttonIcon, { [eM.withText]: !S }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(f.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(Z.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, L.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    u = eH(e, ['onClick']),
                                    { isShown: h } = l;
                                return (0, r.jsx)(f.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            eV(eB({ buttonRef: o }, d, e, u), {
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
                                                className: a()(eM.button, eM.buttonColor, {
                                                    [eM.buttonActive]: n,
                                                    [eM.fauxDisabled]: t,
                                                    [eM.disabled]: d.disabled
                                                }),
                                                innerClassName: eM.buttonContents,
                                                wrapperClassName: eM.button,
                                                fullWidth: !0,
                                                focusProps: eF,
                                                children: S
                                                    ? p
                                                    : (0, r.jsxs)(k.Z, {
                                                          align: k.Z.Align.CENTER,
                                                          children: [p, ek.intl.string(ek.t.FlNoSU)]
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
function eq(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, M.Q3)('ConnectedActivityButton'),
        l = (0, I.bp)(),
        { analyticsLocations: o, parentAnalyticsLocation: s } = (0, A.ZP)(),
        c = l === eL.IlC.POPOUT,
        d = (0, S.KF)(t.id),
        p = (0, S.g5)(d),
        { userInActivity: h } = (0, u.cj)([y.ZP], () => ({ userInActivity: null != y.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        g = (0, C.a)({ surface: O.eR.VOICE_LAUNCHER }),
        m = d !== S.jy.CAN_LAUNCH,
        { Component: b, events: _, play: E } = (0, x.Z)('RTCConnection');
    return n
        ? (0, r.jsx)(f.ua7, {
              text: p,
              children: (e) =>
                  (0, r.jsxs)(
                      f.zxk,
                      eV(
                          eB(
                              eV(eB({}, e), {
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
                                      (0, w.v)(s, w.d.ACTIVITY);
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
                              className: a()(eM.button, eM.buttonColor, {
                                  [eM.buttonActive]: h,
                                  [eM.disabled]: m
                              }),
                              innerClassName: eM.buttonContents,
                              wrapperClassName: eM.button,
                              focusProps: eF,
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
                                      className: eM.buttonIcon
                                  })
                              ]
                          }
                      )
                  )
          })
        : null;
}
function eQ(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: p } = (0, A.ZP)(),
        h = (0, M.Q3)('ConnectedStreamButton'),
        g = (0, u.e7)([ev.default], () => ev.default.getCurrentUser()),
        m = (0, u.Wu)([ef.Z], () => ef.Z.getAllActiveStreams()),
        b = (0, eo.Z)(n),
        _ = n.getGuildId(),
        E = (0, u.cj)([y.ZP], () => null != y.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, q.Z)(n),
        I = i.useCallback(() => {
            (0, ed.Z)(_, n.id, eL.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        v = m.find((e) => e.ownerId === (null == g ? void 0 : g.id)),
        C = (0, es.E)(n, g, m);
    t = null == v ? (l ? I : eu.Z) : () => (0, H.Z)(v);
    let S = null != v || C.length > 0,
        N = b ? ek.intl.string(ek.t.fjBNo6) : ek.intl.string(ek.t.uQn9Bw),
        T = E || o || O,
        P = null != v,
        { Component: j, events: x, play: Z } = (0, d.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => Z(), [Z, P]);
    let R = (0, r.jsx)(j, {
        size: h ? 'md' : 'sm',
        color: 'currentColor',
        className: a()(eM.buttonIcon, { [eM.withText]: !T })
    });
    return (0, r.jsx)(f.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(es.Z, {
                channel: n,
                currentUser: g,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? I : eu.Z,
                onInteraction: (0, L.u)('ManageStreamsMenu', p, { entrypoint: eR.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: f.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eH(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(f.ua7, {
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        f.zxk,
                        eV(
                            eB(
                                eV(eB({}, e), {
                                    buttonRef: c,
                                    size: h ? f.zxk.Sizes.MEDIUM : f.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        (0, w.v)(p, w.d.STREAM, null == v), S ? n(r) : t(), null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !b || s,
                                    className: a()(eM.button, eM.buttonColor, {
                                        [eM.buttonActive]: null != v,
                                        [eM.disabled]: !b || s
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
                                innerClassName: eM.buttonContents,
                                wrapperClassName: eM.button,
                                focusProps: eF,
                                children: T
                                    ? R
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [R, ek.intl.string(ek.t['r0/+v7'])]
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
            { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o, matchAccountText: s } = this.props;
        if (null == t) return null;
        let u = (0, R.F6)(t, ev.default, ey.Z);
        return (
            null != n ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (u = ''.concat(u, ' / ').concat(n.name))) : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(K.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                connectionStatusTextVariant: s ? 'text-md/medium' : void 0,
                childrenAsSubtitle: s,
                children: (0, r.jsx)(f.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(ex.Z, {
                            className: eM.channel,
                            children: this.props.isVisualRefreshEnabled
                                ? (0, r.jsx)(f.Text, {
                                      variant: s ? 'text-xs/medium' : 'text-sm/medium',
                                      color: 'text-secondary',
                                      lineClamp: 1,
                                      children: u
                                  })
                                : u
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
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == a.find((e) => e.user.id === eg.default.getId() && (0, er.gf)(e.voiceState) === er.xO.ON_STAGE) && (0, et.U5)(l.id)
              ? (0, r.jsx)(eY, {})
              : !n && t
                ? (0, r.jsx)(f.ua7, {
                      text: ek.intl.string(ek.t['i+SO/f']),
                      tooltipClassName: eM.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(eA.Z, {
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
                          renderPopout: () => (0, r.jsx)(eW, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eJ, {
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
            ? (0, r.jsx)(ew.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eM.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o, isSoundboardButtonHidden: s, isActivityButtonHidden: c } = this.props;
        if (null == e || null != n) return null;
        let u = eg.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, $.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === u);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && i,
            { reachedLimit: p } = (0, ea.t)(e),
            h = (0, $.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: eM.actionButtons,
            children: [
                (0, r.jsx)(eK, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && p
                }),
                (0, r.jsx)(eQ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == a) || (!h && p))
                }),
                d && !c
                    ? (0, r.jsx)(eq, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, q.Z)(e) && !s
                    ? (0, r.jsx)(Q.Z, {
                          channel: e,
                          focusProps: eF
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
                          className: eM.container,
                          children: [
                              (0, r.jsxs)(k.Z, {
                                  className: eM.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eM.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eM.voiceButtonsContainer,
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
            eG(this, 'ref', i.createRef()),
            eG(this, 'krispButtonRef', i.createRef()),
            eG(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), b.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eL.ME, r.id), (0, w.v)(j.Z.RTC_PANEL, w.d.CHANNEL_LINK);
            }),
            eG(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, m.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(A.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eV(eB({}, n), {
                                    channel: t,
                                    onInteraction: (0, L.u)('RTCConnectionMenu', j.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eG(this, 'handleCloseVoicePanelIntroduction', () => {
                F.Kw(eD.v.VOICE_PANEL_INTRODUCTION);
            }),
            eG(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(eM.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(f.X6q, {
                            className: eM.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: ek.intl.string(ek.t['ba/rLy'])
                        }),
                        (0, r.jsx)(f.Text, {
                            className: eM.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: ek.intl.string(ek.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(f.zxk, {
                            className: eM.voicePanelIntroductionButton,
                            color: f.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eF,
                            children: ek.intl.string(ek.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eJ(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, A.ZP)(),
        { play: s, Component: c, events: u } = (0, h.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            eA.Z,
            eV(eB({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, w.v)(o, w.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipClassName: eM.noiseCancellationTooltip,
                tooltipText: n ? null : ek.intl.string(ek.t.vFiCS0),
                icon: (0, r.jsx)(c, { size: 'refresh_sm' })
            })
        )
    );
}
let e$ = (0, E.Z)(function (e) {
    let t = (0, M.Q3)('ConnectedRTCConnection'),
        { isActivityButtonHidden: n, isSoundboardButtonHidden: l } = (0, ej.S)({ location: 'RTCConnection' }),
        a = (0, G.Z)(),
        o = (0, u.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        s = (0, u.e7)([ev.default], () => ev.default.getCurrentUser()),
        c = (0, u.cj)([eI.Z], () =>
            null != a
                ? {
                      channelId: a.channelId,
                      rtcConnectionQuality: eL.IE4.FINE,
                      rtcConnectionState: eL.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eI.Z.getChannelId(),
                      rtcConnectionQuality: eI.Z.getQuality(),
                      rtcConnectionState: eI.Z.getState(),
                      rtcConnectionLastPing: eI.Z.getLastPing()
                  }
        ),
        { channelId: d } = c,
        p = eH(c, ['channelId']),
        h = (0, u.e7)([em.Z], () => em.Z.getChannel(d), [d]),
        g = null == h ? void 0 : h.getGuildId(),
        m = (0, u.e7)([eb.Z], () => eb.Z.getGuild(g), [g]),
        b = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eE.Z)
        })),
        _ = (0, u.e7)([eE.Z, z.Z], () => z.Z.hasHotspot(eD.v.VOICE_PANEL_INTRODUCTION) && (0, eP.EO)(s) && !eE.Z.isInteractionRequired() && !(null == h ? void 0 : h.isGuildStageVoice())),
        E = (0, u.e7)([eC.Z], () => null != d && eC.Z.hasVideo(d), [d]),
        O = (0, u.e7)([ef.Z], () => ef.Z.getCurrentUserActiveStream()),
        I = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
        y = (0, u.e7)([W.Z], () => W.Z.isViewingRoles(g)),
        C = (0, u.e7)([eO.Z], () => y && !eO.Z.can(eL.Plq.VIEW_CHANNEL, h), [y, h]),
        S = ei.Fg.useSetting(),
        [T, P, x] = (0, u.Wu)([eS.ZP, X.Z], () => ((null == h ? void 0 : h.isGuildStageVoice()) ? [X.Z.getMutableParticipants(h.id, J.pV.SPEAKER), X.Z.getParticipantsVersion(h.id), null] : [null, null, null != h ? eS.ZP.getVoiceStatesForChannel(h) : null]), [h]),
        Z = i.useMemo(() => {
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
                        : x)
                ? t
                : [];
        }, [T, P, x]),
        [w, L] = i.useState(!1),
        R = (0, D.Z)('RTCConnection');
    i.useEffect(() => {
        (y || C) && L(!1);
    }, [y, C, L]);
    let { analyticsLocations: k } = (0, A.ZP)(j.Z.RTC_PANEL),
        H = (0, v.Z)(null != g ? g : eL.lds, null == h ? void 0 : h.id),
        F = (0, N.Z)(null == h ? void 0 : h.id);
    return (0, r.jsx)(A.Gt, {
        value: k,
        children: (0, r.jsxs)('div', {
            className: eM.wrapper,
            children: [
                null != a || null != o
                    ? (0, r.jsx)(B.Z, {
                          voiceState: a,
                          awaitingRemoteSessionInfo: o
                      })
                    : null,
                (0, r.jsx)(
                    eX,
                    eV(eB({}, e, b, p), {
                        enableActivities: H,
                        remoteVoiceState: a,
                        guild: m,
                        channel: h,
                        hasVideo: E,
                        selfStream: O,
                        hasLayers: I,
                        voiceStates: Z,
                        showVoiceStates: S,
                        shouldShowVoicePanelIntroduction: _,
                        isPrivateChannelWithEnabledActivities: F,
                        analyticsLocations: k,
                        isVisualRefreshEnabled: t,
                        isSoundboardButtonHidden: l,
                        isActivityButtonHidden: n,
                        matchAccountText: R
                    })
                ),
                !w && y && null != g
                    ? (0, r.jsxs)('div', {
                          className: eM.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: eM.viewAsRolesWarningText,
                                  children: C ? ek.intl.string(ek.t.efjuQE) : ek.intl.string(ek.t.br8H2N)
                              }),
                              (0, r.jsx)(f.zxk, {
                                  className: eM.viewAsRolesWarningButton,
                                  size: f.zxk.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  focusProps: eF,
                                  children: ek.intl.string(ek.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
