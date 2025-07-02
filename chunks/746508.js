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
    g = n(481060),
    m = n(846027),
    b = n(239091),
    _ = n(925549),
    O = n(284056),
    E = n(730749),
    y = n(911969),
    I = n(40851),
    v = n(317381),
    C = n(596040),
    S = n(314490),
    N = n(374065),
    T = n(451576),
    P = n(119315),
    j = n(403404),
    A = n(100527),
    Z = n(906732),
    x = n(562129),
    L = n(793865),
    w = n(522651),
    R = n(795318),
    D = n(933557),
    k = n(338390),
    M = n(600164),
    U = n(243778),
    G = n(258609),
    B = n(446226),
    V = n(935261),
    H = n(74299),
    F = n(803647),
    z = n(142497),
    W = n(810788),
    Y = n(160404),
    K = n(703656),
    q = n(917405),
    X = n(641015),
    Q = n(848543),
    J = n(565799),
    $ = n(501655),
    ee = n(368442),
    et = n(600518),
    en = n(485287),
    er = n(754277),
    ei = n(590415),
    el = n(695346),
    ea = n(923973),
    eo = n(829750),
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
    eO = n(819640),
    eE = n(131951),
    ey = n(496675),
    eI = n(19780),
    ev = n(699516),
    eC = n(594174),
    eS = n(979651),
    eN = n(938475),
    eT = n(626135),
    eP = n(63063),
    ej = n(51144),
    eA = n(351763),
    eZ = n(870569),
    ex = n(345243),
    eL = n(594117),
    ew = n(226323),
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
    eT.default.track(eR.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eK() {
    let e = i.useRef(null);
    ((0, g.Tbt)(e),
        i.useEffect(() => {
            eT.default.track(eR.rMx.OPEN_POPOUT, { type: eR.jXE.NOISE_CANCELLATION_POPOUT });
        }, []));
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation());
    return (0, r.jsxs)('div', {
        ref: e,
        className: eG.noiseCancellationPopout,
        children: [
            (0, r.jsx)(g.j7V, {
                hideBorder: !0,
                className: eB.marginBottom4,
                value: t,
                onChange: () => m.Z.setNoiseCancellation(!t, { section: eR.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eU.intl.string(eU.t.uKdWn5),
                children: eU.intl.string(eU.t.WGWHv7)
            }),
            (0, r.jsx)(O.Z, {
                title: eU.intl.string(eU.t.JdUas7),
                notchBackground: O._.BLACK,
                buttonTest: eU.intl.string(eU.t['sG+MGh']),
                buttonStop: eU.intl.string(eU.t.Yp3SbG),
                buttonClassName: eG.micTestButton,
                buttonColor: g.zxk.Colors.PRIMARY,
                location: { section: eR.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, r.jsx)(g.vwX, {
                tag: g.RB0.H5,
                className: a()(eB.marginBottom8, eB.marginTop20),
                children: eU.intl.string(eU.t.k6h1Fx)
            }),
            (0, r.jsxs)(M.Z, {
                justify: M.Z.Justify.BETWEEN,
                className: eG.__invalid_footer,
                children: [
                    (0, r.jsx)(g.eee, {
                        href: eR.EYA.KRISP,
                        onClick: (e) => eY(e),
                        children: (0, r.jsx)('div', { className: eG.krispLogo })
                    }),
                    (0, r.jsx)(g.eee, {
                        href: eP.Z.getArticleURL(eR.BhN.NOISE_SUPPRESSION),
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
    let { parentAnalyticsLocation: e } = (0, Z.ZP)(),
        t = (0, u.e7)([er.Z], () => er.Z.isMuted()),
        n = t ? eU.intl.string(eU.t.ScHlfn) : eU.intl.string(eU.t.zqxfra);
    return (0, r.jsx)(eZ.Z, {
        'aria-label': n,
        tooltipText: n,
        icon: t ? g.xjP : g.RZG,
        onClick: () => {
            ((0, w.v)(e, w.d.STAGE_MUSIC, t), (0, et.v)(!t));
        }
    });
}
function eX(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, Z.ZP)(),
        c = (0, ea.Z)(),
        d = (0, es.Z)(t),
        p = (0, u.e7)([v.ZP], () => null != v.ZP.getSelfEmbeddedActivityForLocation(v.ZP.getConnectedActivityLocation())),
        f = (0, X.Z)(t),
        { reachedLimit: b, limit: _ } = (0, eo.Z)(t),
        O = i.useCallback(() => {
            (0, eu.Z)();
        }, []),
        E = (0, I.bp)(),
        y = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    (m.Z.setVideoEnabled(e), e && (0, K.uL)(eR.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eR.ME, t.id)));
                };
                ((0, w.v)(s, w.d.CAMERA, e), e ? (0, eh.Z)(n, E) : n());
            },
            [t, E, s]
        ),
        C = p || n || f,
        { Component: S, play: N, events: T } = (0, h.o)(c.enabled ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => N(), [c.enabled, N]),
        (0, r.jsx)(
            ef.Z,
            eF(
                eH(
                    {
                        onChange: y,
                        onCameraUnavailable: O,
                        hasPermission: d,
                        channelLimit: _,
                        channelLimitReached: b
                    },
                    c
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = ez(e, ['unavailable', 'isActive', 'label', 'iconComponent', 'iconColor']);
                        let d = (0, r.jsx)(S, {
                            size: 'md',
                            className: a()(eG.buttonIcon, { [eG.withText]: !C }),
                            color: 'currentColor'
                        });
                        return (0, r.jsx)(g.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(L.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, R.u)('VideoDeviceMenu', s)
                                });
                            },
                            position: 'top',
                            align: 'center',
                            animation: g.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    c = ez(e, ['onClick']),
                                    { isShown: p } = l;
                                return (0, r.jsx)(g.ua7, {
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zxk,
                                            eF(eH({ buttonRef: o }, u, e, c), {
                                                onClick: (t) => {
                                                    var n;
                                                    (u.onClick(t), null == (n = e.onClick) || n.call(e), p && s(t));
                                                },
                                                onMouseEnter: () => {
                                                    var t, n;
                                                    (null == (t = e.onMouseEnter) || t.call(e), null == (n = c.onMouseEnter) || n.call(c), T.onMouseEnter());
                                                },
                                                onMouseLeave: () => {
                                                    var t;
                                                    (null == (t = e.onMouseLeave) || t.call(e), T.onMouseLeave());
                                                },
                                                onContextMenu: (t) => {
                                                    var n;
                                                    (s(t), null == (n = e.onContextMenu) || n.call(e));
                                                },
                                                size: g.zxk.Sizes.MEDIUM,
                                                className: a()(eG.button, eG.buttonColor, {
                                                    [eG.buttonActive]: n,
                                                    [eG.fauxDisabled]: t,
                                                    [eG.disabled]: u.disabled
                                                }),
                                                innerClassName: eG.buttonContents,
                                                wrapperClassName: eG.button,
                                                fullWidth: !0,
                                                focusProps: eW,
                                                children: C
                                                    ? d
                                                    : (0, r.jsxs)(M.Z, {
                                                          align: M.Z.Align.CENTER,
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
        i = (0, I.bp)(),
        { analyticsLocations: l, parentAnalyticsLocation: o } = (0, Z.ZP)(),
        s = i === eR.IlC.POPOUT,
        c = (0, N.KF)(t.id),
        p = (0, N.g5)(c),
        { userInActivity: h } = (0, u.cj)([v.ZP], () => ({ userInActivity: null != v.ZP.getSelfEmbeddedActivityForChannel(t.id) })),
        f = (0, S.p)({
            surface: y.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0
        }),
        m = c !== N.jy.CAN_LAUNCH,
        { Component: b, events: _, play: O } = (0, x.Z)('RTCConnection');
    return n
        ? (0, r.jsx)(g.ua7, {
              text: p,
              children: (e) =>
                  (0, r.jsx)(U.Xf, {
                      contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                      latestVersion: f,
                      children: (n) => {
                          let { visibleContent: i, markAsDismissed: c } = n;
                          return (0, r.jsxs)(
                              g.zxk,
                              eF(
                                  eH(
                                      eF(eH({}, e), {
                                          fullWidth: !0,
                                          size: g.zxk.Sizes.MEDIUM
                                      }),
                                      _
                                  ),
                                  {
                                      onClick: () => {
                                          var n;
                                          (O(),
                                              (0, j.Z)({
                                                  channel: t,
                                                  openInPopout: s,
                                                  analyticsLocations: l
                                              }),
                                              null == (n = e.onClick) || n.call(e),
                                              (0, w.v)(o, w.d.ACTIVITY),
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(ek.L.TAKE_ACTION));
                                      },
                                      onMouseEnter: () => {
                                          var t;
                                          (_.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e));
                                      },
                                      onMouseLeave: () => {
                                          var t;
                                          (_.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e));
                                      },
                                      disabled: m,
                                      className: a()(eG.button, eG.buttonColor, {
                                          [eG.buttonActive]: h,
                                          [eG.disabled]: m
                                      }),
                                      innerClassName: eG.buttonContents,
                                      wrapperClassName: eG.button,
                                      focusProps: eW,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(P.r, {
                                                  top: -1,
                                                  right: -1
                                              }),
                                          (0, r.jsx)(b, {
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
        { parentAnalyticsLocation: d } = (0, Z.ZP)(),
        h = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
        f = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        m = (0, es.Z)(n),
        b = n.getGuildId(),
        _ = (0, u.cj)([v.ZP], () => null != v.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        O = (0, X.Z)(n),
        E = i.useCallback(() => {
            (0, ep.Z)(b, n.id, eR.jXE.ACTIVITY_PANEL);
        }, [b, n.id]),
        y = f.find((e) => e.ownerId === (null == h ? void 0 : h.id)),
        I = (0, ec.E)(n, h, f);
    t = null == y ? (l ? E : ed.Z) : () => (0, F.Z)(y);
    let C = null != y || I.length > 0,
        S = m ? eU.intl.string(eU.t.fjBNo6) : eU.intl.string(eU.t.uQn9Bw),
        N = _ || o || O,
        T = null != y,
        { Component: P, events: j, play: A } = (0, p.P)(T ? 'disable' : 'enable');
    i.useEffect(() => () => A(), [A, T]);
    let x = (0, r.jsx)(P, {
        size: 'md',
        color: 'currentColor',
        className: a()(eG.buttonIcon, { [eG.withText]: !N })
    });
    return (0, r.jsx)(g.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ec.Z, {
                channel: n,
                currentUser: h,
                activeStreams: f,
                onClose: t,
                handleGoLive: l ? E : ed.Z,
                onInteraction: (0, R.u)('ManageStreamsMenu', d, { entrypoint: eD.A5.OTHER_BUTTON })
            });
        },
        position: 'top',
        align: 'center',
        animation: g.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = ez(e, ['onClick', 'onMouseEnter']);
            return (0, r.jsx)(g.ua7, {
                text: S,
                children: (e) =>
                    (0, r.jsx)(
                        g.zxk,
                        eF(
                            eH(
                                eF(eH({}, e), {
                                    buttonRef: c,
                                    size: g.zxk.Sizes.MEDIUM,
                                    onClick: (r) => {
                                        var i;
                                        ((0, w.v)(d, w.d.STREAM, null == y), C ? n(r) : t(), null == (i = e.onClick) || i.call(e));
                                    },
                                    disabled: !m || s,
                                    className: a()(eG.button, eG.buttonColor, {
                                        [eG.buttonActive]: null != y,
                                        [eG.disabled]: !m || s
                                    })
                                }),
                                C ? l : null
                            ),
                            {
                                onMouseEnter: () => {
                                    var t;
                                    (null == i || i(), null == (t = e.onMouseEnter) || t.call(e), j.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    var t;
                                    (null == (t = e.onMouseLeave) || t.call(e), j.onMouseLeave());
                                },
                                innerClassName: eG.buttonContents,
                                wrapperClassName: eG.button,
                                focusProps: eW,
                                children: N
                                    ? x
                                    : (0, r.jsxs)(M.Z, {
                                          align: M.Z.Align.CENTER,
                                          children: [x, eU.intl.string(eU.t['r0/+v7'])]
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
        let u = (0, D.F6)(t, eC.default, ev.Z);
        return (
            null != n ? ((e = eR.Z5c.CHANNEL(n.id, t.id)), (u = ''.concat(u, ' / ').concat(n.name))) : (e = eR.Z5c.CHANNEL(eR.ME, t.id)),
            (0, r.jsx)(q.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                connectionStatusTextVariant: s ? 'text-md/medium' : void 0,
                childrenAsSubtitle: s,
                children: (0, r.jsx)(g.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(ex.Z, {
                            className: eG.channel,
                            children: (0, r.jsx)(g.Text, {
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
            : (null == l ? void 0 : l.isGuildStageVoice()) && null == a.find((e) => e.user.id === em.default.getId() && (0, ei.gf)(e.voiceState) === ei.xO.ON_STAGE) && (0, en.U5)(l.id)
              ? (0, r.jsx)(eq, {})
              : !n && t
                ? (0, r.jsx)(g.ua7, {
                      text: eU.intl.string(eU.t['i+SO/f']),
                      tooltipClassName: eG.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, r.jsx)(eZ.Z, {
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
            ? (0, r.jsx)(ew.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eG.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: i, voiceStates: l, selfStream: a, isPrivateChannelWithEnabledActivities: o, isSoundboardButtonHidden: s, isActivityButtonHidden: c } = this.props;
        if (null == e || null != n) return null;
        let u = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ee.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === u);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && i,
            { reachedLimit: p } = (0, eo.t)(e),
            h = (0, ee.xJ)(e.id);
        return (0, r.jsxs)('div', {
            className: eG.actionButtons,
            children: [
                (0, r.jsx)(eX, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && p
                }),
                (0, r.jsx)(eJ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == a) || (!h && p))
                }),
                d && !c
                    ? (0, r.jsx)(eQ, {
                          channel: e,
                          enableActivities: i
                      })
                    : null,
                (0, X.Z)(e) && !s
                    ? (0, r.jsx)(Q.Z, {
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
            : (0, r.jsx)(g.yRy, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: g.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)('div', {
                          ref: this.ref,
                          className: eG.container,
                          children: [
                              (0, r.jsxs)(M.Z, {
                                  className: eG.connection,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eG.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, r.jsxs)(M.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eG.voiceButtonsContainer,
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
            eV(this, 'ref', i.createRef()),
            eV(this, 'krispButtonRef', i.createRef()),
            eV(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                (s()(null != r, 'Channel is null during navigation click'), e.stopPropagation(), _.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eR.ME, r.id), (0, w.v)(A.Z.RTC_PANEL, w.d.CHANNEL_LINK));
            }),
            eV(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, b.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(Z.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eF(eH({}, n), {
                                    channel: t,
                                    onInteraction: (0, R.u)('RTCConnectionMenu', A.Z.RTC_PANEL)
                                })
                            )
                        });
                });
            }),
            eV(this, 'handleCloseVoicePanelIntroduction', () => {
                z.Kw(eM.v.VOICE_PANEL_INTRODUCTION);
            }),
            eV(this, 'renderVoicePanelIntroduction', () =>
                (0, r.jsxs)('div', {
                    className: a()(eG.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, r.jsx)(g.X6q, {
                            className: eG.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eU.intl.string(eU.t['ba/rLy'])
                        }),
                        (0, r.jsx)(g.Text, {
                            className: eG.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eU.intl.string(eU.t.Ne1Ee3)
                        }),
                        (0, r.jsx)(g.zxk, {
                            className: eG.voicePanelIntroductionButton,
                            color: g.zxk.Colors.BRAND,
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
        { parentAnalyticsLocation: o } = (0, Z.ZP)(),
        { play: s, Component: c, events: u } = (0, f.P)(l ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            eZ.Z,
            eF(eH({}, t), {
                ref: a,
                onClick: (e) => {
                    ((0, w.v)(o, w.d.KRISP, !l), t.onClick(e));
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
let e1 = (0, E.Z)(function (e) {
    let { isActivityButtonHidden: t, isSoundboardButtonHidden: n } = (0, eA.S)({ location: 'RTCConnection' }),
        l = (0, B.Z)(),
        a = (0, u.e7)([G.Z], () => G.Z.getAwaitingRemoteSessionInfo()),
        o = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
        s = (0, u.cj)([eI.Z], () =>
            null != l
                ? {
                      channelId: l.channelId,
                      rtcConnectionQuality: eR.IE4.FINE,
                      rtcConnectionState: eR.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eI.Z.getChannelId(),
                      rtcConnectionQuality: eI.Z.getQuality(),
                      rtcConnectionState: eI.Z.getState(),
                      rtcConnectionLastPing: eI.Z.getLastPing()
                  }
        ),
        { channelId: c } = s,
        d = ez(s, ['channelId']),
        p = (0, u.e7)([eb.Z], () => eb.Z.getChannel(c), [c]),
        h = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)([e_.Z], () => e_.Z.getGuild(h), [h]),
        m = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, H.Z)(eE.Z)
        })),
        b = (0, u.e7)([eE.Z, W.Z], () => W.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) && (0, ej.EO)(o) && !eE.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
        _ = (0, u.e7)([eS.Z], () => null != c && eS.Z.hasVideo(c), [c]),
        O = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        E = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
        y = (0, u.e7)([Y.Z], () => Y.Z.isViewingRoles(h)),
        I = (0, u.e7)([ey.Z], () => y && !ey.Z.can(eR.Plq.VIEW_CHANNEL, p), [y, p]),
        v = el.Fg.useSetting(),
        [S, N, P] = (0, u.Wu)([eN.ZP, J.Z], () => ((null == p ? void 0 : p.isGuildStageVoice()) ? [J.Z.getMutableParticipants(p.id, $.pV.SPEAKER), J.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eN.ZP.getVoiceStatesForChannel(p) : null]), [p]),
        j = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == S
                            ? void 0
                            : S.map((e) => {
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
        }, [S, N, P]),
        [x, L] = i.useState(!1),
        w = (0, k.Z)('RTCConnection');
    i.useEffect(() => {
        (y || I) && L(!1);
    }, [y, I, L]);
    let { analyticsLocations: R } = (0, Z.ZP)(A.Z.RTC_PANEL),
        D = (0, C.Z)(null != h ? h : eR.lds, null == p ? void 0 : p.id),
        M = (0, T.Z)(null == p ? void 0 : p.id);
    return (0, r.jsx)(Z.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            className: eG.wrapper,
            children: [
                null != l || null != a
                    ? (0, r.jsx)(V.Z, {
                          voiceState: l,
                          awaitingRemoteSessionInfo: a
                      })
                    : null,
                (0, r.jsx)(
                    e$,
                    eF(eH({}, e, m, d), {
                        enableActivities: D,
                        remoteVoiceState: l,
                        guild: f,
                        channel: p,
                        hasVideo: _,
                        selfStream: O,
                        hasLayers: E,
                        voiceStates: j,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: b,
                        isPrivateChannelWithEnabledActivities: M,
                        analyticsLocations: R,
                        isSoundboardButtonHidden: n,
                        isActivityButtonHidden: t,
                        matchAccountText: w
                    })
                ),
                !x && y && null != h
                    ? (0, r.jsxs)('div', {
                          className: eG.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  className: eG.viewAsRolesWarningText,
                                  children: I ? eU.intl.string(eU.t.efjuQE) : eU.intl.string(eU.t.br8H2N)
                              }),
                              (0, r.jsx)(g.zxk, {
                                  className: eG.viewAsRolesWarningButton,
                                  size: g.zxk.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
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
