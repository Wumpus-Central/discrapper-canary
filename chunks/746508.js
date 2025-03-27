n.d(t, { Z: () => e$ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    N = n(911969),
    v = n(40851),
    y = n(456100),
    I = n(317381),
    C = n(596040),
    S = n(588580),
    T = n(374065),
    P = n(451576),
    j = n(119315),
    A = n(403404),
    Z = n(100527),
    x = n(906732),
    w = n(793865),
    L = n(522651),
    R = n(795318),
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
    Q = n(848543),
    X = n(565799),
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
    ew = n(226323),
    eL = n(981631),
    eR = n(354459),
    eD = n(190378),
    ek = n(388032),
    eM = n(963085),
    eU = n(802138);
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
function eW(e) {
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
    eT.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function ez() {
    let e = i.useRef(null);
    (0, g.Tbt)(e),
        i.useEffect(() => {
            eT.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eO.Z], () => eO.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eM.noiseCancellationPopout,
        children: [
            (0, r.jsx)(g.j7V, {
                hideBorder: !0,
                className: eU.marginBottom4,
                value: t,
                onChange: () => m.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                note: ek.NW.string(ek.t.uKdWn5),
                children: ek.NW.string(ek.t.WGWHv7)
            }),
            (0, r.jsx)(E.Z, {
                title: ek.NW.string(ek.t.JdUas7),
                notchBackground: E._.BLACK,
                buttonTest: ek.NW.string(ek.t['sG+MGh']),
                buttonStop: ek.NW.string(ek.t.Yp3SbG),
                buttonClassName: eM.micTestButton,
                buttonColor: g.zxk.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(g.vwX, {
                tag: g.RB0.H5,
                className: o()(eU.marginBottom8, eU.marginTop20),
                children: ek.NW.string(ek.t.k6h1Fx)
            }),
            (0, r.jsxs)(k.Z, {
                justify: k.Z.Justify.BETWEEN,
                className: eM.__invalid_footer,
                children: [
                    (0, r.jsx)(g.eee, {
                        href: eL.EYA.KRISP,
                        onClick: (e) => eF(e),
                        children: (0, r.jsx)('div', { className: eM.krispLogo })
                    }),
                    (0, r.jsx)(g.eee, {
                        href: eP.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                        className: eM.krispLink,
                        onClick: (e) => eF(e),
                        children: ek.NW.string(ek.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eY() {
    let { parentAnalyticsLocation: e } = (0, x.ZP)(),
        t = (0, u.e7)([en.Z], () => en.Z.isMuted()),
        n = t ? ek.NW.string(ek.t.ScHlfn) : ek.NW.string(ek.t.zqxfra);
    return (0, r.jsx)(eA.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? g.xjP : g.RZG,
        onClick: () => {
            (0, L.v)(e, L.d.STAGE_MUSIC, t), (0, ee.v)(!t);
        }
    });
}
function eK(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        a = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, x.ZP)(),
        c = (0, M.Q3)('ConnectedVideoButton'),
        { coloredIconsEnabled: d, simplifiedSettingsEnabled: p } = (0, el.Z)({ location: 'ConnectedVideoButton' }),
        f = (0, eo.Z)(),
        b = (0, es.Z)(t),
        _ = (0, u.e7)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation())),
        E = (0, q.Z)(t),
        { reachedLimit: O, limit: N } = (0, ea.Z)(t),
        y = i.useCallback(() => {
            (0, eu.Z)();
        }, []),
        C = (0, v.bp)(),
        S = i.useCallback(
            (e) => {
                if (eO.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    m.Z.setVideoEnabled(e), e && (0, Y.uL)(eL.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eL.ME, t.id));
                };
                (0, L.v)(s, L.d.CAMERA, e), e ? (0, eh.Z)(n, C) : n();
            },
            [t, C, s]
        ),
        T = _ || n || E,
        { Component: P, play: j, events: A } = (0, h.o)(f.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => j(), [f.enabled, j]),
        (0, r.jsx)(
            ef.Z,
            eV(
                eW(
                    {
                        onChange: S,
                        onCameraUnavailable: y,
                        hasPermission: b,
                        channelLimit: N,
                        channelLimitReached: O
                    },
                    f
                ),
                {
                    enabled: !l && f.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l } = e,
                            u = eB(e, ['unavailable', 'isActive', 'label', 'iconComponent']);
                        let h = (0, r.jsx)(P, {
                            size: c ? 'md' : 'sm',
                            className: o()(eM.buttonIcon, { [eM.withText]: !T }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(g.yRy, {
                            targetElementRef: a,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(w.Z, {
                                    onClose: t,
                                    simplified: p,
                                    onInteraction: (0, R.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: g.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    p = eB(e, ['onClick']),
                                    { isShown: f } = l;
                                return (0, r.jsx)(g.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zxk,
                                            eV(eW({ buttonRef: a }, u, e, p), {
                                                onClick: (t) => {
                                                    var n;
                                                    u.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), f && s(t);
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = p.onMouseEnter) || void 0 === n || n.call(p), A.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e), A.onMouseLeave();
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    s(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                                },
                                                size: c ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL,
                                                className: o()(d ? eM.experimentButton : eM.button, eM.buttonColor, {
                                                    [eM.buttonActive]: n,
                                                    [eM.fauxDisabled]: t,
                                                    [eM.disabled]: u.disabled
                                                }),
                                                innerClassName: eM.buttonContents,
                                                wrapperClassName: eM.button,
                                                fullWidth: !0,
                                                focusProps: eH,
                                                children: T
                                                    ? h
                                                    : (0, r.jsxs)(k.Z, {
                                                          align: k.Z.Align.CENTER,
                                                          children: [h, ek.NW.string(ek.t.FlNoSU)]
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
        { coloredIconsEnabled: l } = (0, el.Z)({ location: 'ConnectedActivityButton' }),
        a = (0, v.bp)(),
        { analyticsLocations: s, parentAnalyticsLocation: c } = (0, x.ZP)(),
        p = a === eL.IlC.POPOUT,
        h = (0, T.KF)(t.id),
        f = (0, T.g5)(h),
        { userInActivity: m } = (0, u.cj)([I.ZP], () => ({ userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        b = (0, S.a)(N.eR.VOICE_LAUNCHER),
        _ = h !== T.jy.CAN_LAUNCH,
        { enabled: E } = y.c.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: O, events: C, play: P } = (0, d.w)();
    return n
        ? (0, r.jsx)(g.ua7, {
              text: f,
              children: (e) =>
                  (0, r.jsxs)(
                      g.zxk,
                      eV(
                          eW(
                              eV(eW({}, e), {
                                  fullWidth: !0,
                                  size: i ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL
                              }),
                              C
                          ),
                          {
                              onClick: () => {
                                  var n;
                                  P(),
                                      (0, A.Z)({
                                          channel: t,
                                          openInPopout: p,
                                          analyticsLocations: s
                                      }),
                                      null === (n = e.onClick) || void 0 === n || n.call(e),
                                      (0, L.v)(c, L.d.ACTIVITY);
                              },
                              onMouseEnter: () => {
                                  var t;
                                  C.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                              },
                              onMouseLeave: () => {
                                  var t;
                                  C.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                              },
                              disabled: _,
                              className: o()(l && m ? eM.experimentButton : eM.button, eM.buttonColor, {
                                  [eM.buttonActive]: m,
                                  [eM.disabled]: _
                              }),
                              innerClassName: eM.buttonContents,
                              wrapperClassName: eM.button,
                              focusProps: eH,
                              children: [
                                  b
                                      ? (0, r.jsx)(j.r, {
                                            top: -1,
                                            right: -1
                                        })
                                      : null,
                                  E
                                      ? (0, r.jsx)(g.iWm, {
                                            size: i ? 'md' : 'sm',
                                            color: 'currentColor',
                                            className: eM.buttonIcon
                                        })
                                      : (0, r.jsx)(O, {
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
        { channel: n, canGoLive: l, enableActivities: a, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, x.ZP)(),
        d = (0, M.Q3)('ConnectedStreamButton'),
        { coloredIconsEnabled: h } = (0, el.Z)({ location: 'ConnectedStreamButton' }),
        f = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        m = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        b = (0, es.Z)(n),
        _ = n.getGuildId(),
        E = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, q.Z)(n),
        N = i.useCallback(() => {
            (0, ep.Z)(_, n.id, eL.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        v = m.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        y = (0, ec.E)(n, f, m);
    t = null == v ? (l ? N : ed.Z) : () => (0, B.Z)(v);
    let C = null != v || y.length > 0,
        S = b ? ek.NW.string(ek.t.fjBNo6) : ek.NW.string(ek.t.uQn9Bw),
        T = E || a || O,
        P = null != v,
        { Component: j, events: A, play: Z } = (0, p.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => Z(), [Z, P]);
    let w = (0, r.jsx)(j, {
        size: d ? 'md' : 'sm',
        color: 'currentColor',
        className: o()(eM.buttonIcon, { [eM.withText]: !T })
    });
    return (0, r.jsx)(g.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ec.Z, {
                channel: n,
                currentUser: f,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? N : ed.Z,
                onInteraction: (0, R.u)('ManageStreamsMenu', c, { entrypoint: eR.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: g.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eB(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(g.ua7, {
                text: S,
                children: (e) =>
                    (0, r.jsx)(
                        g.zxk,
                        eV(
                            eW(
                                eV(eW({}, e), {
                                    size: d ? g.zxk.Sizes.MEDIUM : g.zxk.Sizes.SMALL,
                                    onClick: (r) => {
                                        var i;
                                        (0, L.v)(c, L.d.STREAM, null == v), C ? n(r) : t(), null === (i = e.onClick) || void 0 === i || i.call(e);
                                    },
                                    disabled: !b || s,
                                    className: o()(h ? eM.experimentButton : eM.button, eM.buttonColor, {
                                        [eM.buttonActive]: null != v,
                                        [eM.disabled]: !b || s
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
                                innerClassName: eM.buttonContents,
                                wrapperClassName: eM.button,
                                focusProps: eH,
                                children: T
                                    ? w
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [w, ek.NW.string(ek.t['r0/+v7'])]
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
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: o, hasVideo: a } = this.props;
        if (null == t) return null;
        let s = (0, D.F6)(t, eI.default, ey.Z);
        return (
            null != n ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (s = ''.concat(s, ' / ').concat(n.name))) : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(K.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: o,
                hasVideo: a,
                children: (0, r.jsx)(g.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eZ.Z, {
                            className: eM.channel,
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
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: i, channel: l, voiceStates: o } = this.props;
        return null != i
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == o.find((e) => e.user.id === em.default.getId() && (0, er.gf)(e.voiceState) === er.xO.ON_STAGE) && (0, et.U5)(l.id)
              ? (0, r.jsx)(eY, {})
              : !n && t
                ? (0, r.jsx)(g.ua7, {
                      text: ek.NW.string(ek.t['i+SO/f']),
                      tooltipClassName: eM.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(eA.Z, {
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
                          renderPopout: () => (0, r.jsx)(ez, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(eJ, {
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
            ? (0, r.jsx)(ew.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eM.voiceUsers
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
            className: eM.actionButtons,
            children: [
                (0, r.jsx)(eK, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d
                }),
                (0, r.jsx)(eQ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d))
                }),
                u
                    ? (0, r.jsx)(eq, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, q.Z)(e)
                    ? (0, r.jsx)(Q.Z, {
                          className: o()(eM.button, eM.buttonColor),
                          innerClassName: eM.buttonContents,
                          iconClassName: eM.buttonIcon,
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
            : (0, r.jsx)(g.yRy, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: g.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
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
            eG(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), _.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eL.ME, r.id), (0, L.v)(Z.Z.RTC_PANEL, L.d.CHANNEL_LINK);
            }),
            eG(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, b.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eV(eW({}, n), {
                                    channel: t,
                                    onInteraction: (0, R.u)('RTCConnectionMenu', Z.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eG(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eD.v.VOICE_PANEL_INTRODUCTION);
            }),
            eG(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: o()(eM.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(g.X6q, {
                            className: eM.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: ek.NW.string(ek.t['ba/rLy'])
                        }),
                        (0, r.jsx)(g.Text, {
                            className: eM.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: ek.NW.string(ek.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(g.zxk, {
                            className: eM.voicePanelIntroductionButton,
                            color: g.zxk.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eH,
                            children: ek.NW.string(ek.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eJ(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { parentAnalyticsLocation: o } = (0, x.ZP)(),
        { play: a, Component: s, events: c } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => a(), [l, a]),
        (0, r.jsx)(
            eA.Z,
            eV(eW({}, t), {
                onClick: (e) => {
                    (0, L.v)(o, L.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null === (e = t.onMouseEnter) || void 0 === e || e.call(t), c.onMouseEnter();
                },
                onMouseLeave: () => {
                    c.onMouseLeave();
                },
                tooltipClassName: eM.noiseCancellationTooltip,
                tooltipText: n ? null : ek.NW.string(ek.t.vFiCS0),
                icon: (0, r.jsx)(s, { size: 'refresh_sm' })
            })
        )
    );
}
let e$ = (0, O.Z)(function (e) {
    let t = (0, M.Q3)('ConnectedRTCConnection'),
        { coloredIconsEnabled: n } = (0, el.Z)({ location: 'ConnectedRTCConnection' }),
        l = (0, G.Z)(),
        o = (0, u.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        a = (0, u.e7)([eI.default], () => eI.default.getCurrentUser()),
        s = (0, u.cj)([ev.Z], () =>
            null != l
                ? {
                      channelId: l.channelId,
                      rtcConnectionQuality: eL.IE4.FINE,
                      rtcConnectionState: eL.hes.RTC_CONNECTED,
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
        d = eB(s, ['channelId']),
        p = (0, u.e7)([eb.Z], () => eb.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)([e_.Z], () => e_.Z.getGuild(h), [h]),
        m = (0, u.cj)([eO.Z], () => ({
            noiseCancellationSupported: eO.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eO.Z.getNoiseCancellation(),
            noiseCancellationError: eO.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eO.Z)
        })),
        b = (0, u.e7)([eO.Z, F.Z], () => F.Z.hasHotspot(eD.v.VOICE_PANEL_INTRODUCTION) && (0, ej.EO)(a) && !eO.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        _ = (0, u.e7)([eC.Z], () => null != c && eC.Z.hasVideo(c), [c]),
        E = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        O = (0, u.e7)([eE.Z], () => eE.Z.hasLayers()),
        N = (0, u.e7)([z.Z], () => z.Z.isViewingRoles(h)),
        v = (0, u.e7)([eN.Z], () => N && !eN.Z.can(eL.Plq.VIEW_CHANNEL, p), [N, p]),
        y = ei.Fg.useSetting(),
        [I, S, T] = (0, u.Wu)([eS.ZP, X.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [X.Z.getMutableParticipants(p.id, J.pV.SPEAKER), X.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eS.ZP.getVoiceStatesForChannel(p) : null]), [p]),
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
        [A, w] = i.useState(!1);
    i.useEffect(() => {
        (N || v) && w(!1);
    }, [N, v, w]);
    let { analyticsLocations: L } = (0, x.ZP)(Z.Z.RTC_PANEL),
        R = (0, C.Z)(null != h ? h : eL.lds, null == p ? void 0 : p.id),
        D = (0, P.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(x.Gt, {
        value: L,
        children: (0, r.jsxs)('div', {
            className: eM.wrapper,
            children: [
                null != l || null != o
                    ? (0, r.jsx)(W.Z, {
                          voiceState: l,
                          awaitingRemoteSessionInfo: o
                      })
                    : null,
                (0, r.jsx)(
                    eX,
                    eV(eW({}, e, m, d), {
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
                        analyticsLocations: L,
                        isVisualRefreshEnabled: t,
                        coloredIconsEnabled: n
                    })
                ),
                !A && N && null != h
                    ? (0, r.jsxs)('div', {
                          className: eM.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  className: eM.viewAsRolesWarningText,
                                  children: v ? ek.NW.string(ek.t.efjuQE) : ek.NW.string(ek.t.br8H2N)
                              }),
                              (0, r.jsx)(g.zxk, {
                                  className: eM.viewAsRolesWarningButton,
                                  size: g.zxk.Sizes.MIN,
                                  onClick: () => {
                                      w(!0);
                                  },
                                  focusProps: eH,
                                  children: ek.NW.string(ek.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
