n.d(t, { Z: () => e1 }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(799899),
    u = n(442837),
    d = n(704215),
    p = n(864094),
    f = n(75735),
    h = n(382600),
    g = n(755721),
    m = n(481060),
    b = n(846027),
    _ = n(239091),
    O = n(925549),
    E = n(284056),
    y = n(730749),
    v = n(911969),
    I = n(317381),
    S = n(596040),
    C = n(314490),
    T = n(374065),
    N = n(451576),
    j = n(119315),
    P = n(100527),
    x = n(906732),
    A = n(397698),
    Z = n(562129),
    w = n(793865),
    L = n(522651),
    R = n(795318),
    D = n(933557),
    k = n(600164),
    M = n(243778),
    U = n(258609),
    G = n(446226),
    B = n(935261),
    H = n(74299),
    V = n(803647),
    F = n(142497),
    z = n(810788),
    W = n(160404),
    q = n(728285),
    Y = n(703656),
    K = n(917405),
    Q = n(641015),
    X = n(848543),
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
    ef = n(173507),
    eh = n(25827),
    eg = n(199902),
    em = n(314897),
    eb = n(592125),
    e_ = n(430824),
    eO = n(819640),
    eE = n(131951),
    ey = n(496675),
    ev = n(19780),
    eI = n(699516),
    eS = n(594174),
    eC = n(979651),
    eT = n(938475),
    eN = n(626135),
    ej = n(63063),
    eP = n(51144),
    ex = n(870569),
    eA = n(345243),
    eZ = n(594117),
    ew = n(226323),
    eL = n(981631),
    eR = n(354459),
    eD = n(921944),
    ek = n(190378),
    eM = n(345655),
    eU = n(388032),
    eG = n(890332),
    eB = n(197571);
function eH(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eV(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eH(e, t, n[t]);
            });
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
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eW = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1,
    },
};
function eq(e) {
    let t = e.currentTarget;
    eN.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT },
    });
}
function eY() {
    let e = i.useRef(null);
    (0, m.Tbt)(e),
        i.useEffect(() => {
            eN.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eE.Z], () => eE.Z.getNoiseCancellation()),
        n = (0, u.e7)([eE.Z], () => eE.Z.getActiveInputProfile()),
        l = n !== eM._.CUSTOM;
    return (0, r.jsxs)("div", {
        ref: e,
        className: eG.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.ua7, {
                "data-migration-pending": !0,
                text: eU.intl.formatToPlainString(eU.t["/tqmfH"], {
                    enabled: t ? "true" : "false",
                    inputProfile: n,
                }),
                shouldShow: l,
                align: "right",
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        eF(eV({}, e), {
                            children: (0, r.jsx)(m.rsf, {
                                label: eU.intl.string(eU.t.WGWHv7),
                                checked: t,
                                disabled: l,
                                onChange: () =>
                                    b.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                            }),
                        }),
                    ),
            }),
            (0, r.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: eU.intl.string(eU.t.uKdWn5),
            }),
            (0, r.jsx)(E.Z, {
                title: eU.intl.string(eU.t.JdUas7),
                notchBackground: E._.BLACK,
                buttonTest: eU.intl.string(eU.t["sG+MGh"]),
                buttonStop: eU.intl.string(eU.t.Yp3SbG),
                buttonClassName: eG.micTestButton,
                buttonColor: g.zx.Colors.PRIMARY,
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT },
            }),
            (0, r.jsx)("div", {
                className: a()(eB.marginBottom8, eB.marginTop20),
                children: (0, r.jsx)(m.gNt, {
                    label: eU.intl.string(eU.t.k6h1Fx),
                    children: (0, r.jsxs)(k.Z, {
                        justify: k.Z.Justify.BETWEEN,
                        className: eG.__invalid_footer,
                        children: [
                            (0, r.jsx)(m.eee, {
                                href: eL.EYA.KRISP,
                                onClick: (e) => eq(e),
                                children: (0, r.jsx)("div", { className: eG.krispLogo }),
                            }),
                            (0, r.jsx)(m.eee, {
                                href: ej.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                                className: eG.krispLink,
                                onClick: (e) => eq(e),
                                children: eU.intl.string(eU.t.hvVgAQ),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eK() {
    let { parentAnalyticsLocation: e } = (0, x.ZP)(),
        t = (0, u.e7)([er.Z], () => er.Z.isMuted()),
        n = t ? eU.intl.string(eU.t.ScHlfn) : eU.intl.string(eU.t.zqxfra);
    return (0, r.jsx)(ex.Z, {
        "aria-label": n,
        tooltipText: n,
        icon: t ? m.xjP : m.RZG,
        onClick: () => {
            (0, L.v)(e, L.d.STAGE_MUSIC, t), (0, et.v)(!t);
        },
    });
}
function eQ(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, x.ZP)(),
        c = (0, ea.Z)(),
        d = (0, es.Z)(t),
        p = (0, u.e7)(
            [I.ZP],
            () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation()),
        ),
        h = (0, Q.Z)(t),
        { reachedLimit: _, limit: O } = (0, eo.Z)(t),
        E = i.useCallback(() => {
            (0, eu.Z)();
        }, []),
        y = (0, q.bp)(),
        v = i.useCallback(
            (e) => {
                if (eE.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    b.Z.setVideoEnabled(e),
                        e && (0, Y.uL)(eL.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eL.ME, t.id));
                };
                (0, L.v)(s, L.d.CAMERA, e), e ? (0, ef.Z)(n, y) : n();
            },
            [t, y, s],
        ),
        S = p || n || h,
        { Component: C, play: T, events: N } = (0, f.o)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => T(), [c.enabled, T]),
        (0, r.jsx)(
            eh.Z,
            eF(
                eV(
                    {
                        onChange: v,
                        onCameraUnavailable: E,
                        hasPermission: d,
                        channelLimit: O,
                        channelLimitReached: _,
                    },
                    c,
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = ez(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]);
                        let d = (0, r.jsx)(C, {
                            size: "md",
                            className: a()(eG.buttonIcon, { [eG.withText]: !S }),
                            color: "currentColor",
                        });
                        return (0, r.jsx)(m.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(w.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, R.u)("VideoDeviceMenu", s),
                                });
                            },
                            position: "top",
                            align: "center",
                            animation: m.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    c = ez(e, ["onClick"]),
                                    { isShown: p } = l;
                                return (0, r.jsx)(m.ua7, {
                                    "data-migration-pending": !0,
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zx,
                                            eF(
                                                eV(
                                                    {
                                                        "data-migration-pending": !0,
                                                        buttonRef: o,
                                                    },
                                                    u,
                                                    e,
                                                    c,
                                                ),
                                                {
                                                    onClick: (t) => {
                                                        var n;
                                                        u.onClick(t), null == (n = e.onClick) || n.call(e), p && s(t);
                                                    },
                                                    onMouseEnter: () => {
                                                        var t, n;
                                                        null == (t = e.onMouseEnter) || t.call(e),
                                                            null == (n = c.onMouseEnter) || n.call(c),
                                                            N.onMouseEnter();
                                                    },
                                                    onMouseLeave: () => {
                                                        var t;
                                                        null == (t = e.onMouseLeave) || t.call(e), N.onMouseLeave();
                                                    },
                                                    onContextMenu: (t) => {
                                                        var n;
                                                        s(t), null == (n = e.onContextMenu) || n.call(e);
                                                    },
                                                    size: g.zx.Sizes.MEDIUM,
                                                    className: a()(eG.button, eG.buttonColor, {
                                                        [eG.buttonActive]: n,
                                                        [eG.fauxDisabled]: t,
                                                        [eG.disabled]: u.disabled,
                                                    }),
                                                    innerClassName: eG.buttonContents,
                                                    wrapperClassName: eG.button,
                                                    fullWidth: !0,
                                                    focusProps: eW,
                                                    children: S
                                                        ? d
                                                        : (0, r.jsxs)(k.Z, {
                                                              align: k.Z.Align.CENTER,
                                                              children: [d, eU.intl.string(eU.t.FlNoSU)],
                                                          }),
                                                },
                                            ),
                                        ),
                                });
                            },
                        });
                    },
                },
            ),
        )
    );
}
function eX(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, q.bp)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: o } = (0, x.ZP)(),
        s = i === eL.IlC.POPOUT,
        c = (0, T.KF)(t.id),
        p = (0, T.g5)(c),
        { userInActivity: f } = (0, u.cj)([I.ZP], () => ({
            userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(t.id),
        })),
        h = (0, C.p)({
            surface: v.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0,
        }),
        b = c !== T.jy.CAN_LAUNCH,
        { Component: _, events: O, play: E } = (0, Z.Z)("RTCConnection");
    return n
        ? (0, r.jsx)(m.ua7, {
              "data-migration-pending": !0,
              text: p,
              children: (e) =>
                  (0, r.jsx)(M.Xf, {
                      contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                      latestVersion: h,
                      children: (n) => {
                          let { visibleContent: i, markAsDismissed: c } = n;
                          return (0, r.jsxs)(
                              g.zx,
                              eF(
                                  eV(
                                      eF(eV({ "data-migration-pending": !0 }, e), {
                                          fullWidth: !0,
                                          size: g.zx.Sizes.MEDIUM,
                                      }),
                                      O,
                                  ),
                                  {
                                      onClick: () => {
                                          var n;
                                          E(),
                                              (0, A.Z)({
                                                  context:
                                                      null != t
                                                          ? {
                                                                type: "channel",
                                                                channel: t,
                                                            }
                                                          : { type: "contextless" },
                                                  openInPopout: s,
                                                  analyticsLocation: o,
                                              }),
                                              null == (n = e.onClick) || n.call(e),
                                              (0, L.v)(l, L.d.ACTIVITY),
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(eD.L.TAKE_ACTION);
                                      },
                                      onMouseEnter: () => {
                                          var t;
                                          O.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                                      },
                                      onMouseLeave: () => {
                                          var t;
                                          O.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e);
                                      },
                                      disabled: b,
                                      className: a()(eG.button, eG.buttonColor, {
                                          [eG.buttonActive]: f,
                                          [eG.disabled]: b,
                                      }),
                                      innerClassName: eG.buttonContents,
                                      wrapperClassName: eG.button,
                                      focusProps: eW,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(j.r, {
                                                  top: -1,
                                                  right: -1,
                                              }),
                                          (0, r.jsx)(_, {
                                              size: "md",
                                              color: "currentColor",
                                              className: eG.buttonIcon,
                                          }),
                                      ],
                                  },
                              ),
                          );
                      },
                  }),
          })
        : null;
}
function eJ(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: f } = (0, x.ZP)(),
        h = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
        b = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        _ = (0, es.Z)(n),
        O = n.getGuildId(),
        E = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        y = (0, Q.Z)(n),
        v = i.useCallback(() => {
            (0, ep.Z)(O, n.id, f);
        }, [O, n.id, f]),
        S = b.find((e) => e.ownerId === (null == h ? void 0 : h.id)),
        C = (0, ec.E)(n, h, b);
    t = null == S ? (l ? v : ed.Z) : () => (0, V.Z)(S);
    let T = null != S || C.length > 0,
        N = _ ? eU.intl.string(eU.t.fjBNo6) : eU.intl.string(eU.t.uQn9Bw),
        j = E || o || y,
        P = null != S,
        { Component: A, events: Z, play: w } = (0, p.P)(P ? "disable" : "enable");
    i.useEffect(() => () => w(), [w, P]);
    let D = (0, r.jsx)(A, {
        size: "md",
        color: "currentColor",
        className: a()(eG.buttonIcon, { [eG.withText]: !j }),
    });
    return (0, r.jsx)(m.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ec.Z, {
                channel: n,
                currentUser: h,
                activeStreams: b,
                onClose: t,
                handleGoLive: l ? v : ed.Z,
                onInteraction: (0, R.u)("ManageStreamsMenu", d, { entrypoint: eR.A5.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = ez(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(m.ua7, {
                "data-migration-pending": !0,
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        g.zx,
                        eF(
                            eV(
                                eF(eV({ "data-migration-pending": !0 }, e), {
                                    buttonRef: c,
                                    size: g.zx.Sizes.MEDIUM,
                                    onClick: (r) => {
                                        var i;
                                        (0, L.v)(d, L.d.STREAM, null == S),
                                            T ? n(r) : t(),
                                            null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !_ || s,
                                    className: a()(eG.button, eG.buttonColor, {
                                        [eG.buttonActive]: null != S,
                                        [eG.disabled]: !_ || s,
                                    }),
                                }),
                                T ? l : null,
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
                                innerClassName: eG.buttonContents,
                                wrapperClassName: eG.button,
                                focusProps: eW,
                                children: j
                                    ? D
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [D, eU.intl.string(eU.t["r0/+v7"])],
                                      }),
                            },
                        ),
                    ),
            });
        },
    });
}
class e$ extends i.PureComponent {
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: i,
                rtcConnectionState: l,
                rtcConnectionLastPing: a,
                hasVideo: o,
            } = this.props;
        if (null == t) return null;
        let s = (0, D.F6)(t, eS.default, eI.Z);
        return (
            null != n
                ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (s = "".concat(s, " / ").concat(n.name)))
                : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(K.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, r.jsx)(m.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eA.Z, {
                            className: eG.channel,
                            children: (0, r.jsx)(m.Text, {
                                variant: "text-xs/medium",
                                color: "text-secondary",
                                lineClamp: 1,
                                children: s,
                            }),
                        }),
                    }),
                }),
            })
        );
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: i,
            channel: l,
            voiceStates: a,
        } = this.props;
        return null != i
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) &&
                null ==
                    a.find((e) => e.user.id === em.default.getId() && (0, ei.gf)(e.voiceState) === ei.xO.ON_STAGE) &&
                (0, en.U5)(l.id)
              ? (0, r.jsx)(eK, {})
              : !n && t
                ? (0, r.jsx)(m.ua7, {
                      "data-migration-pending": !0,
                      text: eU.intl.string(eU.t["i+SO/f"]),
                      tooltipClassName: eG.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { "aria-label": t } = e;
                          return (0, r.jsx)(ex.Z, {
                              "aria-label": t,
                              tooltipText: null,
                              disabled: !0,
                              icon: m.oIc,
                          });
                      },
                  })
                : (0, r.jsx)(
                      m.yRy,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, r.jsx)(eY, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(e0, {
                                  popoutProps: t,
                                  isShown: i,
                                  noiseCancellationActive: e,
                                  ref: this.krispButtonRef,
                              });
                          },
                      },
                      "krisp-popout",
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, r.jsx)(ew.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eG.voiceUsers,
              })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: i,
            voiceStates: l,
            selfStream: a,
            isPrivateChannelWithEnabledActivities: o,
        } = this.props;
        if (null == e || null != n) return null;
        let s = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ee.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || o) && i,
            { reachedLimit: u } = (0, eo.t)(e),
            d = (0, ee.xJ)(e.id);
        return (0, r.jsxs)("div", {
            className: eG.actionButtons,
            children: [
                (0, r.jsx)(eQ, {
                    channel: e,
                    enableActivities: c,
                    disabled: !d && u,
                }),
                (0, r.jsx)(eJ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((d && null == a) || (!d && u)),
                }),
                c
                    ? (0, r.jsx)(eX, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                (0, Q.Z)(e)
                    ? (0, r.jsx)(X.Z, {
                          channel: e,
                          focusProps: eW,
                      })
                    : null,
            ],
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(m.yRy, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: m.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)("div", {
                          ref: this.ref,
                          className: eG.container,
                          children: [
                              (0, r.jsxs)(k.Z, {
                                  className: eG.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eG.inner,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eG.voiceButtonsContainer,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, r.jsx)(eZ.Z, { channel: e }),
                                          ],
                                      }),
                                  ],
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons(),
                          ],
                      }),
              });
    }
    constructor(...e) {
        super(...e),
            eH(this, "ref", i.createRef()),
            eH(this, "krispButtonRef", i.createRef()),
            eH(this, "handleChannelLinkClick", (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    O.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eL.ME, r.id),
                    (0, L.v)(P.Z.RTC_PANEL, L.d.CHANNEL_LINK);
            }),
            eH(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e("56944").then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(x.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eF(eV({}, n), {
                                    channel: t,
                                    onInteraction: (0, R.u)("RTCConnectionMenu", P.Z.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eH(this, "handleCloseVoicePanelIntroduction", () => {
                F.Kw(ek.v.VOICE_PANEL_INTRODUCTION);
            }),
            eH(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(eG.voicePanelIntroductionWrapper, "theme-light"),
                    children: [
                        (0, r.jsx)(m.X6q, {
                            className: eG.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: eU.intl.string(eU.t["ba/rLy"]),
                        }),
                        (0, r.jsx)(m.Text, {
                            className: eG.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: eU.intl.string(eU.t.Ne1Ee3),
                        }),
                        (0, r.jsx)(g.zx, {
                            className: eG.voicePanelIntroductionButton,
                            color: g.zx.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            focusProps: eW,
                            children: eU.intl.string(eU.t.shaBeH),
                        }),
                    ],
                }),
            );
    }
}
function e0(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, x.ZP)(),
        { play: s, Component: c, events: u } = (0, h.P)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            ex.Z,
            eF(eV({}, t), {
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
                tooltipClassName: eG.noiseCancellationTooltip,
                tooltipText: n ? null : eU.intl.string(eU.t.vFiCS0),
                icon: (0, r.jsx)(c, { size: "refresh_sm" }),
            }),
        )
    );
}
let e1 = (0, y.Z)(function (e) {
    let t = (0, G.Z)(),
        n = (0, u.e7)([U.default], () => U.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
        a = (0, u.cj)([ev.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eL.IE4.FINE,
                      rtcConnectionState: eL.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ev.Z.getChannelId(),
                      rtcConnectionQuality: ev.Z.getQuality(),
                      rtcConnectionState: ev.Z.getState(),
                      rtcConnectionLastPing: ev.Z.getLastPing(),
                  },
        ),
        { channelId: o } = a,
        s = ez(a, ["channelId"]),
        c = (0, u.e7)([eb.Z], () => eb.Z.getChannel(o), [o]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([e_.Z], () => e_.Z.getGuild(d), [d]),
        f = (0, u.cj)([eE.Z], () => ({
            noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eE.Z.getNoiseCancellation(),
            noiseCancellationError: eE.Z.isNoiseCancellationError(),
            canGoLive: (0, H.Z)(eE.Z),
        })),
        h = (0, u.e7)(
            [eE.Z, z.Z],
            () =>
                z.Z.hasHotspot(ek.v.VOICE_PANEL_INTRODUCTION) &&
                (0, eP.EO)(l) &&
                !eE.Z.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        b = (0, u.e7)([eC.Z], () => null != o && eC.Z.hasVideo(o), [o]),
        _ = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        O = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
        E = (0, u.e7)([W.Z], () => W.Z.isViewingRoles(d)),
        y = (0, u.e7)([ey.Z], () => E && !ey.Z.can(eL.Plq.VIEW_CHANNEL, c), [E, c]),
        v = el.Fg.useSetting(),
        [I, C, T] = (0, u.Wu)(
            [eT.ZP, J.Z],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [J.Z.getMutableParticipants(c.id, $.pV.SPEAKER), J.Z.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? eT.ZP.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        j = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == I
                            ? void 0
                            : I.map((e) => {
                                  let { user: t, userNick: n, voiceState: r } = e;
                                  return {
                                      user: t,
                                      nick: n,
                                      voiceState: r,
                                  };
                              }))
                        ? e
                        : T)
                ? t
                : [];
        }, [I, C, T]),
        [A, Z] = i.useState(!1);
    i.useEffect(() => {
        (E || y) && Z(!1);
    }, [E, y, Z]);
    let { analyticsLocations: w } = (0, x.ZP)(P.Z.RTC_PANEL),
        L = (0, S.Z)(null != d ? d : eL.lds, null == c ? void 0 : c.id),
        R = (0, N.Z)(null == c ? void 0 : c.id);
    return (0, r.jsx)(x.Gt, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: eG.wrapper,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(B.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n,
                      })
                    : null,
                (0, r.jsx)(
                    e$,
                    eF(eV({}, e, f, s), {
                        enableActivities: L,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: b,
                        selfStream: _,
                        hasLayers: O,
                        voiceStates: j,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: h,
                        isPrivateChannelWithEnabledActivities: R,
                        analyticsLocations: w,
                    }),
                ),
                !A && E && null != d
                    ? (0, r.jsxs)("div", {
                          className: eG.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  className: eG.viewAsRolesWarningText,
                                  children: y ? eU.intl.string(eU.t.efjuQE) : eU.intl.string(eU.t.br8H2N),
                              }),
                              (0, r.jsx)(g.zx, {
                                  className: eG.viewAsRolesWarningButton,
                                  size: g.zx.Sizes.MIN,
                                  onClick: () => {
                                      Z(!0);
                                  },
                                  focusProps: eW,
                                  children: eU.intl.string(eU.t.WAI6xs),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
