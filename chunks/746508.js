(n.d(t, { Z: () => e1 }), n(388685));
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
    eZ = n(870569),
    ex = n(345243),
    ew = n(594117),
    eL = n(226323),
    eR = n(981631),
    eD = n(354459),
    ek = n(921944),
    eM = n(190378),
    eU = n(388032),
    eG = n(566177),
    eB = n(20493);
function eV(e, t, n) {
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
function eH(e) {
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
                eV(e, t, n[t]);
            }));
    }
    return e;
}
function eF(e, t) {
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
function ez(e, t) {
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
let eW = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};
function eY(e) {
    let t = e.currentTarget;
    eP.default.track(eR.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eK() {
    let e = i.useRef(null);
    ((0, m.Tbt)(e),
        i.useEffect(() => {
            eP.default.track(eR.rMx.OPEN_POPOUT, { type: eR.jXE.NOISE_CANCELLATION_POPOUT });
        }, []));
    let t = (0, u.e7)([ey.Z], () => ey.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eG.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.j7V, {
                hideBorder: !0,
                className: eB.marginBottom4,
                value: t,
                onChange: () => b.Z.setNoiseCancellation(!t, { section: eR.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eU.intl.string(eU.t.uKdWn5),
                children: eU.intl.string(eU.t.WGWHv7)
            }),
            (0, r.jsx)(O.Z, {
                title: eU.intl.string(eU.t.JdUas7),
                notchBackground: O._.BLACK,
                buttonTest: eU.intl.string(eU.t['sG+MGh']),
                buttonStop: eU.intl.string(eU.t.Yp3SbG),
                buttonClassName: eG.micTestButton,
                buttonColor: g.zx.Colors.PRIMARY,
                location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(m.vwX, {
                tag: m.RB0.H5,
                className: a()(eB.marginBottom8, eB.marginTop20),
                children: eU.intl.string(eU.t.k6h1Fx)
            }),
            (0, r.jsxs)(U.Z, {
                justify: U.Z.Justify.BETWEEN,
                className: eG.__invalid_footer,
                children: [
                    (0, r.jsx)(m.eee, {
                        href: eR.EYA.KRISP,
                        onClick: (e) => eY(e),
                        children: (0, r.jsx)('div', { className: eG.krispLogo })
                    }),
                    (0, r.jsx)(m.eee, {
                        href: ej.Z.getArticleURL(eR.BhN.NOISE_SUPPRESSION),
                        className: eG.krispLink,
                        onClick: (e) => eY(e),
                        children: eU.intl.string(eU.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eq() {
    let { parentAnalyticsLocation: e } = (0, x.ZP)(),
        t = (0, u.e7)([ei.Z], () => ei.Z.isMuted()),
        n = t ? eU.intl.string(eU.t.ScHlfn) : eU.intl.string(eU.t.zqxfra);
    return (0, r.jsx)(eZ.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? m.xjP : m.RZG,
        onClick: () => {
            ((0, R.v)(e, R.d.STAGE_MUSIC, t), (0, en.v)(!t));
        }
    });
}
function eX(e) {
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
                    (b.Z.setVideoEnabled(e), e && (0, q.uL)(eR.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eR.ME, t.id)));
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
            eF(
                eH(
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
                            u = ez(e, ['unavailable', 'isActive', 'label', 'iconComponent', 'iconColor']);
                        let d = (0, r.jsx)(N, {
                            size: 'md',
                            className: a()(eG.buttonIcon, { [eG.withText]: !S }),
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
                                    c = ez(e, ['onClick']),
                                    { isShown: p } = l;
                                return (0, r.jsx)(m.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zx,
                                            eF(eH({ buttonRef: o }, u, e, c), {
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
                                                className: a()(eG.button, eG.buttonColor, {
                                                    [eG.buttonActive]: n,
                                                    [eG.fauxDisabled]: t,
                                                    [eG.disabled]: u.disabled
                                                }),
                                                innerClassName: eG.buttonContents,
                                                wrapperClassName: eG.button,
                                                fullWidth: !0,
                                                focusProps: eW,
                                                children: S
                                                    ? d
                                                    : (0, r.jsxs)(U.Z, {
                                                          align: U.Z.Align.CENTER,
                                                          children: [d, eU.intl.string(eU.t.FlNoSU)]
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
function eQ(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, v.bp)(),
        { analyticsLocations: l, parentAnalyticsLocation: o } = (0, x.ZP)(),
        s = i === eR.IlC.POPOUT,
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
                              eF(
                                  eH(
                                      eF(eH({}, e), {
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
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(ek.L.TAKE_ACTION));
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
                                      className: a()(eG.button, eG.buttonColor, {
                                          [eG.buttonActive]: h,
                                          [eG.disabled]: b
                                      }),
                                      innerClassName: eG.buttonContents,
                                      wrapperClassName: eG.button,
                                      focusProps: eW,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(j.r, {
                                                  top: -1,
                                                  right: -1
                                              }),
                                          (0, r.jsx)(_, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: eG.buttonIcon
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
function eJ(e) {
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
            (0, eh.Z)(_, n.id, eR.jXE.ACTIVITY_PANEL);
        }, [_, n.id]),
        I = f.find((e) => e.ownerId === (null == h ? void 0 : h.id)),
        v = (0, eu.E)(n, h, f);
    t = null == I ? (l ? y : ep.Z) : () => (0, z.Z)(I);
    let S = null != I || v.length > 0,
        N = b ? eU.intl.string(eU.t.fjBNo6) : eU.intl.string(eU.t.uQn9Bw),
        T = E || o || O,
        P = null != I,
        { Component: j, events: A, play: Z } = (0, p.P)(P ? 'disable' : 'enable');
    i.useEffect(() => () => Z(), [Z, P]);
    let w = (0, r.jsx)(j, {
        size: 'md',
        color: 'currentColor',
        className: a()(eG.buttonIcon, { [eG.withText]: !T })
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
                onInteraction: (0, D.u)('ManageStreamsMenu', d, { entrypoint: eD.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = ez(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(m.ua7, {
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        g.zx,
                        eF(
                            eH(
                                eF(eH({}, e), {
                                    buttonRef: c,
                                    size: g.zx.Sizes.MEDIUM,
                                    onClick: (r) => {
                                        var i;
                                        ((0, R.v)(d, R.d.STREAM, null == I), S ? n(r) : t(), null == (i = e.onClick) || i.call(e));
                                    },
                                    disabled: !b || s,
                                    className: a()(eG.button, eG.buttonColor, {
                                        [eG.buttonActive]: null != I,
                                        [eG.disabled]: !b || s
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
                                innerClassName: eG.buttonContents,
                                wrapperClassName: eG.button,
                                focusProps: eW,
                                children: T
                                    ? w
                                    : (0, r.jsxs)(U.Z, {
                                          align: U.Z.Align.CENTER,
                                          children: [w, eU.intl.string(eU.t['r0/+v7'])]
                                      })
                            }
                        )
                    )
            });
        }
    });
}
class e$ extends i.PureComponent {
    renderConnectionStatus() {
        let e,
            { channel: t, guild: n, rtcConnectionQuality: i, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: o, matchAccountText: s } = this.props;
        if (null == t) return null;
        let u = (0, k.F6)(t, eS.default, eC.Z);
        return (
            null != n ? ((e = eR.Z5c.CHANNEL(n.id, t.id)), (u = ''.concat(u, ' / ').concat(n.name))) : (e = eR.Z5c.CHANNEL(eR.ME, t.id)),
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
                        children: (0, r.jsx)(ex.Z, {
                            className: eG.channel,
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
              ? (0, r.jsx)(eq, {})
              : !n && t
                ? (0, r.jsx)(m.ua7, {
                      text: eU.intl.string(eU.t['i+SO/f']),
                      tooltipClassName: eG.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(eZ.Z, {
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
                          renderPopout: () => (0, r.jsx)(eK, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(e0, {
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
            ? (0, r.jsx)(eL.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eG.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let s = eb.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, et.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || o) && i,
            { reachedLimit: u } = (0, es.t)(e),
            d = (0, et.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: eG.actionButtons,
            children: [
                (0, r.jsx)(eX, {
                    channel: e,
                    enableActivities: c,
                    disabled: !d && u
                }),
                (0, r.jsx)(eJ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((d && null == a) || (!d && u))
                }),
                c
                    ? (0, r.jsx)(eQ, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, Q.Z)(e)
                    ? (0, r.jsx)(J.Z, {
                          channel: e,
                          focusProps: eW
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
                          className: eG.container,
                          children: [
                              (0, r.jsxs)(U.Z, {
                                  className: eG.connection,
                                  align: U.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eG.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(U.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eG.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, r.jsx)(ew.Z, { channel: e })]
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
            eV(this, 'ref', i.createRef()),
            eV(this, 'krispButtonRef', i.createRef()),
            eV(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                (s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), E.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eR.ME, r.id), (0, R.v)(Z.Z.RTC_PANEL, R.d.CHANNEL_LINK));
            }),
            eV(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eF(eH({}, n), {
                                    channel: t,
                                    onInteraction: (0, D.u)('RTCConnectionMenu', Z.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eV(this, 'handleCloseVoicePanelIntroduction', () => {
                W.Kw(eM.v.VOICE_PANEL_INTRODUCTION);
            }),
            eV(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(eG.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(m.X6q, {
                            className: eG.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eU.intl.string(eU.t['ba/rLy'])
                        }),
                        (0, r.jsx)(m.Text, {
                            className: eG.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eU.intl.string(eU.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(g.zx, {
                            className: eG.voicePanelIntroductionButton,
                            color: g.zx.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eW,
                            children: eU.intl.string(eU.t.shaBeH)
                        })
                    ]
                })
            ));
    }
}
function e0(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, x.ZP)(),
        { play: s, Component: c, events: u } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            eZ.Z,
            eF(eH({}, t), {
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
                tooltipClassName: eG.noiseCancellationTooltip,
                tooltipText: n ? null : eU.intl.string(eU.t.vFiCS0),
                icon: (0, r.jsx)(c, { size: 'refresh_sm' })
            })
        )
    );
}
let e1 = (0, y.Z)(function (e) {
    let t = (0, V.Z)(),
        n = (0, u.e7)([B.Z], () => B.Z.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
        a = (0, u.cj)([ev.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eR.IE4.FINE,
                      rtcConnectionState: eR.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: ev.Z.getChannelId(),
                      rtcConnectionQuality: ev.Z.getQuality(),
                      rtcConnectionState: ev.Z.getState(),
                      rtcConnectionLastPing: ev.Z.getLastPing()
                  }
        ),
        { channelId: o } = a,
        s = ez(a, ['channelId']),
        c = (0, u.e7)([e_.Z], () => e_.Z.getChannel(o), [o]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([eE.Z], () => eE.Z.getGuild(d), [d]),
        h = (0, u.cj)([ey.Z], () => ({
            noiseCancellationSupported: ey.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: ey.Z.getNoiseCancellation(),
            noiseCancellationError: ey.Z.isNoiseCancellationError(),
            canGoLive: (0, F.Z)(ey.Z)
        })),
        f = (0, u.e7)([ey.Z, Y.Z], () => Y.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) && (0, eA.EO)(l) && !ey.Z.isInteractionRequired() && !(null == c ? void 0 : c.isGuildStageVoice())),
        b = (0, u.e7)([eN.Z], () => null != o && eN.Z.hasVideo(o), [o]),
        _ = (0, u.e7)([em.Z], () => em.Z.getCurrentUserActiveStream()),
        E = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
        O = (0, u.e7)([K.Z], () => K.Z.isViewingRoles(d)),
        y = (0, u.e7)([eI.Z], () => O && !eI.Z.can(eR.Plq.VIEW_CHANNEL, c), [O, c]),
        I = ea.Fg.useSetting(),
        [v, C, N] = (0, u.Wu)([eT.ZP, $.Z], () => ((null == c ? void 0 : c.isGuildStageVoice()) ? [$.Z.getMutableParticipants(c.id, ee.pV.SPEAKER), $.Z.getParticipantsVersion(c.id), null] : [null, null, null != c ? eT.ZP.getVoiceStatesForChannel(c) : null]), [c]),
        T = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == v
                            ? void 0
                            : v.map((e) => {
                                  let { user: t, userNick: n, voiceState: r } = e;
                                  return {
                                      user: t,
                                      nick: n,
                                      voiceState: r
                                  };
                              }))
                        ? e
                        : N)
                ? t
                : [];
        }, [v, C, N]),
        [j, A] = i.useState(!1),
        w = (0, M.Z)('RTCConnection');
    i.useEffect(() => {
        (O || y) && A(!1);
    }, [O, y, A]);
    let { analyticsLocations: L } = (0, x.ZP)(Z.Z.RTC_PANEL),
        R = (0, S.Z)(null != d ? d : eR.lds, null == c ? void 0 : c.id),
        D = (0, P.Z)(null == c ? void 0 : c.id);
    return (0, r.jsx)(x.Gt, {
        value: L,
        children: (0, r.jsxs)('div', {
            className: eG.wrapper,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(H.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n
                      })
                    : null,
                (0, r.jsx)(
                    e$,
                    eF(eH({}, e, h, s), {
                        enableActivities: R,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: b,
                        selfStream: _,
                        hasLayers: E,
                        voiceStates: T,
                        showVoiceStates: I,
                        shouldShowVoicePanelIntroduction: f,
                        isPrivateChannelWithEnabledActivities: D,
                        analyticsLocations: L,
                        matchAccountText: w
                    })
                ),
                !j && O && null != d
                    ? (0, r.jsxs)('div', {
                          className: eG.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: eG.viewAsRolesWarningText,
                                  children: y ? eU.intl.string(eU.t.efjuQE) : eU.intl.string(eU.t.br8H2N)
                              }),
                              (0, r.jsx)(g.zx, {
                                  className: eG.viewAsRolesWarningButton,
                                  size: g.zx.Sizes.MIN,
                                  onClick: () => {
                                      A(!0);
                                  },
                                  focusProps: eW,
                                  children: eU.intl.string(eU.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
