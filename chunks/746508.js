(n.d(t, { Z: () => e3 }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(688642),
    u = n(442837),
    d = n(704215),
    p = n(864094),
    h = n(75735),
    f = n(382600),
    g = n(755721),
    m = n(481060),
    b = n(846027),
    _ = n(239091),
    E = n(925549),
    O = n(284056),
    y = n(730749),
    I = n(911969),
    v = n(40851),
    C = n(317381),
    S = n(596040),
    N = n(314490),
    T = n(374065),
    P = n(451576),
    j = n(119315),
    A = n(403404),
    Z = n(100527),
    x = n(906732),
    w = n(562129),
    L = n(793865),
    R = n(522651),
    D = n(795318),
    k = n(933557),
    M = n(338390),
    U = n(600164),
    G = n(243778),
    B = n(258609),
    V = n(446226),
    H = n(935261),
    F = n(74299),
    z = n(803647),
    W = n(142497),
    Y = n(810788),
    K = n(160404),
    q = n(703656),
    X = n(917405),
    Q = n(641015),
    J = n(848543),
    $ = n(565799),
    ee = n(501655),
    et = n(368442),
    en = n(600518),
    er = n(485287),
    ei = n(754277),
    el = n(590415),
    ea = n(695346),
    eo = n(923973),
    es = n(829750),
    ec = n(189771),
    eu = n(544384),
    ed = n(560688),
    ep = n(127608),
    eh = n(76021),
    ef = n(173507),
    eg = n(25827),
    em = n(199902),
    eb = n(314897),
    e_ = n(592125),
    eE = n(430824),
    eO = n(819640),
    ey = n(131951),
    eI = n(496675),
    ev = n(19780),
    eC = n(699516),
    eS = n(594174),
    eN = n(979651),
    eT = n(938475),
    eP = n(626135),
    ej = n(63063),
    eA = n(51144),
    eZ = n(351763),
    ex = n(870569),
    ew = n(345243),
    eL = n(594117),
    eR = n(226323),
    eD = n(981631),
    ek = n(354459),
    eM = n(921944),
    eU = n(190378),
    eG = n(388032),
    eB = n(566177),
    eV = n(20493);
function eH(e, t, n) {
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
function eF(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eH(e, t, n[t]);
            }));
    }
    return e;
}
function ez(e, t) {
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
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let eY = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};
function eK(e) {
    let t = e.currentTarget;
    eP.default.track(eD.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eD.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eq() {
    let e = i.useRef(null);
    ((0, m.Tbt)(e),
        i.useEffect(() => {
            eP.default.track(eD.rMx.OPEN_POPOUT, { type: eD.jXE.NOISE_CANCELLATION_POPOUT });
        }, []));
    let t = (0, u.e7)([ey.Z], () => ey.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eB.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.j7V, {
                hideBorder: !0,
                className: eV.marginBottom4,
                value: t,
                onChange: () => b.Z.setNoiseCancellation(!t, { section: eD.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eG.intl.string(eG.t.uKdWn5),
                children: eG.intl.string(eG.t.WGWHv7)
            }),
            (0, r.jsx)(O.Z, {
                title: eG.intl.string(eG.t.JdUas7),
                notchBackground: O._.BLACK,
                buttonTest: eG.intl.string(eG.t['sG+MGh']),
                buttonStop: eG.intl.string(eG.t.Yp3SbG),
                buttonClassName: eB.micTestButton,
                buttonColor: g.zx.Colors.PRIMARY,
                location: { section: eD.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(m.vwX, {
                tag: m.RB0.H5,
                className: a()(eV.marginBottom8, eV.marginTop20),
                children: eG.intl.string(eG.t.k6h1Fx)
            }),
            (0, r.jsxs)(U.Z, {
                justify: U.Z.Justify.BETWEEN,
                className: eB.__invalid_footer,
                children: [
                    (0, r.jsx)(m.eee, {
                        href: eD.EYA.KRISP,
                        onClick: (e) => eK(e),
                        children: (0, r.jsx)('div', { className: eB.krispLogo })
                    }),
                    (0, r.jsx)(m.eee, {
                        href: ej.Z.getArticleURL(eD.BhN.NOISE_SUPPRESSION),
                        className: eB.krispLink,
                        onClick: (e) => eK(e),
                        children: eG.intl.string(eG.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eX() {
    let { parentAnalyticsLocation: e } = (0, x.ZP)(),
        t = (0, u.e7)([ei.Z], () => ei.Z.isMuted()),
        n = t ? eG.intl.string(eG.t.ScHlfn) : eG.intl.string(eG.t.zqxfra);
    return (0, r.jsx)(ex.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? m.xjP : m.RZG,
        onClick: () => {
            ((0, R.v)(e, R.d.STAGE_MUSIC, t), (0, en.v)(!t));
        }
    });
}
function eQ(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, x.ZP)(),
        c = (0, eo.Z)(),
        d = (0, ec.Z)(t),
        p = (0, u.e7)([C.ZP], () => null != C.ZP.getSelfEmbeddedActivityForLocation(C.ZP.getConnectedActivityLocation())),
        f = (0, Q.Z)(t),
        { reachedLimit: _, limit: E } = (0, es.Z)(t),
        O = i.useCallback(() => {
            (0, ed.Z)();
        }, []),
        y = (0, v.bp)(),
        I = i.useCallback(
            (e) => {
                if (ey.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    (b.Z.setVideoEnabled(e), e && (0, q.uL)(eD.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eD.ME, t.id)));
                };
                ((0, R.v)(s, R.d.CAMERA, e), e ? (0, ef.Z)(n, y) : n());
            },
            [t, y, s]
        ),
        S = p || n || f,
        { Component: N, play: T, events: P } = (0, h.o)(c.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => T(), [c.enabled, T]),
        (0, r.jsx)(
            eg.Z,
            ez(
                eF(
                    {
                        onChange: I,
                        onCameraUnavailable: O,
                        hasPermission: d,
                        channelLimit: E,
                        channelLimitReached: _
                    },
                    c
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = eW(e, ['unavailable', 'isActive', 'label', 'iconComponent', 'iconColor']);
                        let d = (0, r.jsx)(N, {
                            size: 'md',
                            className: a()(eB.buttonIcon, { [eB.withText]: !S }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(m.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(L.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, D.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: m.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    c = eW(e, ['onClick']),
                                    { isShown: p } = l;
                                return (0, r.jsx)(m.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zx,
                                            ez(eF({ buttonRef: o }, u, e, c), {
                                                onClick: (t) => {
                                                    var n;
                                                    (u.onClick(t), null == (n = e.onClick) || n.call(e), p && s(t));
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    (null == (t = e.onMouseEnter) || t.call(e), null == (n = c.onMouseEnter) || n.call(c), P.onMouseEnter());
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    (null == (t = e.onMouseLeave) || t.call(e), P.onMouseLeave());
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    (s(t), null == (n = e.onContextMenu) || n.call(e));
                                                },
                                                size: g.zx.Sizes.MEDIUM,
                                                className: a()(eB.button, eB.buttonColor, {
                                                    [eB.buttonActive]: n,
                                                    [eB.fauxDisabled]: t,
                                                    [eB.disabled]: u.disabled
                                                }),
                                                innerClassName: eB.buttonContents,
                                                wrapperClassName: eB.button,
                                                fullWidth: !0,
                                                focusProps: eY,
                                                children: S
                                                    ? d
                                                    : (0, r.jsxs)(U.Z, {
                                                          align: U.Z.Align.CENTER,
                                                          children: [d, eG.intl.string(eG.t.FlNoSU)]
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
function eJ(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, v.bp)(),
        { analyticsLocations: l, parentAnalyticsLocation: o } = (0, x.ZP)(),
        s = i === eD.IlC.POPOUT,
        c = (0, T.KF)(t.id),
        p = (0, T.g5)(c),
        { userInActivity: h } = (0, u.cj)([C.ZP], () => ({ userInActivity: null != C.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        f = (0, N.p)({
            surface: I.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0
        }),
        b = c !== T.jy.CAN_LAUNCH,
        { Component: _, events: E, play: O } = (0, w.Z)('RTCConnection');
    return n
        ? (0, r.jsx)(m.ua7, {
              text: p,
              children: (e) =>
                  (0, r.jsx)(G.Xf, {
                      contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                      latestVersion: f,
                      children: (n) => {
                          let { visibleContent: i, markAsDismissed: c } = n;
                          return (0, r.jsxs)(
                              g.zx,
                              ez(
                                  eF(
                                      ez(eF({}, e), {
                                          fullWidth: !0,
                                          size: g.zx.Sizes.MEDIUM
                                      }),
                                      E
                                  ),
                                  {
                                      onClick: () => {
                                          var n;
                                          (O(),
                                              (0, A.Z)({
                                                  channel: t,
                                                  openInPopout: s,
                                                  analyticsLocations: l
                                              }),
                                              null == (n = e.onClick) || n.call(e),
                                              (0, R.v)(o, R.d.ACTIVITY),
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(eM.L.TAKE_ACTION));
                                      },
                                      onMouseEnter: () => {
                                          var t;
                                          (E.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e));
                                      },
                                      onMouseLeave: () => {
                                          var t;
                                          (E.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e));
                                      },
                                      disabled: b,
                                      className: a()(eB.button, eB.buttonColor, {
                                          [eB.buttonActive]: h,
                                          [eB.disabled]: b
                                      }),
                                      innerClassName: eB.buttonContents,
                                      wrapperClassName: eB.button,
                                      focusProps: eY,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(j.r, {
                                                  top: -1,
                                                  right: -1
                                              }),
                                          (0, r.jsx)(_, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: eB.buttonIcon
                                          })
                                      ]
                                  }
                              )
                          );
                      }
                  })
          })
        : null;
}
function e$(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d } = (0, x.ZP)(),
        h = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
        f = (0, u.Wu)([em.Z], () => em.Z.getAllActiveStreams()),
        b = (0, ec.Z)(n),
        _ = n.getGuildId(),
        E = (0, u.cj)([C.ZP], () => null != C.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, Q.Z)(n),
        y = i.useCallback(() => {
            (0, eh.Z)(_, n.id, eD.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        I = f.find((e) => e.ownerId === (null == h ? void 0 : h.id)),
        v = (0, eu.E)(n, h, f);
    t = null == I ? (l ? y : ep.Z) : () => (0, z.Z)(I);
    let S = null != I || v.length > 0,
        N = b ? eG.intl.string(eG.t.fjBNo6) : eG.intl.string(eG.t.uQn9Bw),
        T = E || o || O,
        P = null != I,
        { Component: j, events: A, play: Z } = (0, p.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => Z(), [Z, P]);
    let w = (0, r.jsx)(j, {
        size: 'md',
        color: 'currentColor',
        className: a()(eB.buttonIcon, { [eB.withText]: !T })
    });
    return (0, r.jsx)(m.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eu.Z, {
                channel: n,
                currentUser: h,
                activeStreams: f,
                onClose: t,
                handleGoLive: l ? y : ep.Z,
                onInteraction: (0, D.u)('ManageStreamsMenu', d, { entrypoint: ek.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eW(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(m.ua7, {
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        g.zx,
                        ez(
                            eF(
                                ez(eF({}, e), {
                                    buttonRef: c,
                                    size: g.zx.Sizes.MEDIUM,
                                    onClick: (r) => {
                                        var i;
                                        ((0, R.v)(d, R.d.STREAM, null == I), S ? n(r) : t(), null == (i = e.onClick) || i.call(e));
                                    },
                                    disabled: !b || s,
                                    className: a()(eB.button, eB.buttonColor, {
                                        [eB.buttonActive]: null != I,
                                        [eB.disabled]: !b || s
                                    })
                                }),
                                S ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    (null == i || i(), null == (t = e.onMouseEnter) || t.call(e), A.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    var t;
                                    (null == (t = e.onMouseLeave) || t.call(e), A.onMouseLeave());
                                },
                                innerClassName: eB.buttonContents,
                                wrapperClassName: eB.button,
                                focusProps: eY,
                                children: T
                                    ? w
                                    : (0, r.jsxs)(U.Z, {
                                          align: U.Z.Align.CENTER,
                                          children: [w, eG.intl.string(eG.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class e0 extends i.PureComponent {
    renderConnectionStatus() {
        let e,
            { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o, matchAccountText: s } = this.props;
        if (null == t) return null;
        let u = (0, k.F6)(t, eS.default, eC.Z);
        return (
            null != n ? ((e = eD.Z5c.CHANNEL(n.id, t.id)), (u = ''.concat(u, ' / ').concat(n.name))) : (e = eD.Z5c.CHANNEL(eD.ME, t.id)),
            (0, r.jsx)(X.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                connectionStatusTextVariant: s ? 'text-md/medium' : void 0,
                childrenAsSubtitle: s,
                children: (0, r.jsx)(m.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(ew.Z, {
                            className: eB.channel,
                            children: (0, r.jsx)(m.Text, {
                                variant: s ? 'text-xs/medium' : 'text-sm/medium',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: u
                            })
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
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == a.find((e) => e.user.id === eb.default.getId() && (0, el.gf)(e.voiceState) === el.xO.ON_STAGE) && (0, er.U5)(l.id)
              ? (0, r.jsx)(eX, {})
              : !n && t
                ? (0, r.jsx)(m.ua7, {
                      text: eG.intl.string(eG.t['i+SO/f']),
                      tooltipClassName: eB.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(ex.Z, {
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
                          targetElementRef: this.krispButtonRef,
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, r.jsx)(eq, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(e1, {
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
            ? (0, r.jsx)(eR.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eB.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o, isSoundboardButtonHidden: s, isActivityButtonHidden: c } = this.props;
        if (null == e || null != n) return null;
        let u = eb.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, et.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === u);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && i,
            { reachedLimit: p } = (0, es.t)(e),
            h = (0, et.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: eB.actionButtons,
            children: [
                (0, r.jsx)(eQ, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && p
                }),
                (0, r.jsx)(e$, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == a) || (!h && p))
                }),
                d && !c
                    ? (0, r.jsx)(eJ, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, Q.Z)(e) && !s
                    ? (0, r.jsx)(J.Z, {
                          channel: e,
                          focusProps: eY
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
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: m.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
                          ref: this.ref,
                          className: eB.container,
                          children: [
                              (0, r.jsxs)(U.Z, {
                                  className: eB.connection,
                                  align: U.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eB.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(U.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eB.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, r.jsx)(eL.Z, { channel: e })]
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
        (super(...e),
            eH(this, 'ref', i.createRef()),
            eH(this, 'krispButtonRef', i.createRef()),
            eH(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                (s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), E.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eD.ME, r.id), (0, R.v)(Z.Z.RTC_PANEL, R.d.CHANNEL_LINK));
            }),
            eH(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                ez(eF({}, n), {
                                    channel: t,
                                    onInteraction: (0, D.u)('RTCConnectionMenu', Z.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eH(this, 'handleCloseVoicePanelIntroduction', () => {
                W.Kw(eU.v.VOICE_PANEL_INTRODUCTION);
            }),
            eH(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(eB.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(m.X6q, {
                            className: eB.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eG.intl.string(eG.t['ba/rLy'])
                        }),
                        (0, r.jsx)(m.Text, {
                            className: eB.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eG.intl.string(eG.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(g.zx, {
                            className: eB.voicePanelIntroductionButton,
                            color: g.zx.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eY,
                            children: eG.intl.string(eG.t.shaBeH)
                        })
                    ]
                })
            ));
    }
}
function e1(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, x.ZP)(),
        { play: s, Component: c, events: u } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            ex.Z,
            ez(eF({}, t), {
                ref: a,
                onClick: (e) => {
                    ((0, R.v)(o, R.d.KRISP, !l), t.onClick(e));
                },
                onMouseEnter: () => {
                    var e;
                    (null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter());
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipClassName: eB.noiseCancellationTooltip,
                tooltipText: n ? null : eG.intl.string(eG.t.vFiCS0),
                icon: (0, r.jsx)(c, { size: 'refresh_sm' })
            })
        )
    );
}
let e3 = (0, y.Z)(function (e) {
    let { isActivityButtonHidden: t, isSoundboardButtonHidden: n } = (0, eZ.S)({ location: 'RTCConnection' }),
        l = (0, V.Z)(),
        a = (0, u.e7)([B.Z], () => B.Z.getAwaitingRemoteSessionInfo()),
        o = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
        s = (0, u.cj)([ev.Z], () =>
            null != l
                ? {
                      channelId: l.channelId,
                      rtcConnectionQuality: eD.IE4.FINE,
                      rtcConnectionState: eD.hes.RTC_CONNECTED,
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
        d = eW(s, ['channelId']),
        p = (0, u.e7)([e_.Z], () => e_.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)([eE.Z], () => eE.Z.getGuild(h), [h]),
        b = (0, u.cj)([ey.Z], () => ({
            noiseCancellationSupported: ey.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: ey.Z.getNoiseCancellation(),
            noiseCancellationError: ey.Z.isNoiseCancellationError(),
            canGoLive: (0, F.Z)(ey.Z)
        })),
        _ = (0, u.e7)([ey.Z, Y.Z], () => Y.Z.hasHotspot(eU.v.VOICE_PANEL_INTRODUCTION) && (0, eA.EO)(o) && !ey.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        E = (0, u.e7)([eN.Z], () => null != c && eN.Z.hasVideo(c), [c]),
        O = (0, u.e7)([em.Z], () => em.Z.getCurrentUserActiveStream()),
        y = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
        I = (0, u.e7)([K.Z], () => K.Z.isViewingRoles(h)),
        v = (0, u.e7)([eI.Z], () => I && !eI.Z.can(eD.Plq.VIEW_CHANNEL, p), [I, p]),
        C = ea.Fg.useSetting(),
        [N, T, j] = (0, u.Wu)([eT.ZP, $.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [$.Z.getMutableParticipants(p.id, ee.pV.SPEAKER), $.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eT.ZP.getVoiceStatesForChannel(p) : null]), [p]),
        A = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == N
                            ? void 0
                            : N.map((e) => {
                                  let { user: t, userNick: n, voiceState: r } = e;
                                  return {
                                      user: t,
                                      nick: n,
                                      voiceState: r
                                  };
                              }))
                        ? e
                        : j)
                ? t
                : [];
        }, [N, T, j]),
        [w, L] = i.useState(!1),
        R = (0, M.Z)('RTCConnection');
    i.useEffect(() => {
        (I || v) && L(!1);
    }, [I, v, L]);
    let { analyticsLocations: D } = (0, x.ZP)(Z.Z.RTC_PANEL),
        k = (0, S.Z)(null != h ? h : eD.lds, null == p ? void 0 : p.id),
        U = (0, P.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(x.Gt, {
        value: D,
        children: (0, r.jsxs)('div', {
            className: eB.wrapper,
            children: [
                null != l || null != a
                    ? (0, r.jsx)(H.Z, {
                          voiceState: l,
                          awaitingRemoteSessionInfo: a
                      })
                    : null,
                (0, r.jsx)(
                    e0,
                    ez(eF({}, e, b, d), {
                        enableActivities: k,
                        remoteVoiceState: l,
                        guild: f,
                        channel: p,
                        hasVideo: E,
                        selfStream: O,
                        hasLayers: y,
                        voiceStates: A,
                        showVoiceStates: C,
                        shouldShowVoicePanelIntroduction: _,
                        isPrivateChannelWithEnabledActivities: U,
                        analyticsLocations: D,
                        isSoundboardButtonHidden: n,
                        isActivityButtonHidden: t,
                        matchAccountText: R
                    })
                ),
                !w && I && null != h
                    ? (0, r.jsxs)('div', {
                          className: eB.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: eB.viewAsRolesWarningText,
                                  children: v ? eG.intl.string(eG.t.efjuQE) : eG.intl.string(eG.t.br8H2N)
                              }),
                              (0, r.jsx)(g.zx, {
                                  className: eB.viewAsRolesWarningButton,
                                  size: g.zx.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  focusProps: eY,
                                  children: eG.intl.string(eG.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
