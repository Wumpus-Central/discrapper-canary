n.d(t, { Z: () => e1 }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(799899),
    u = n(442837),
    d = n(704215),
    p = n(864094),
    f = n(75735),
    h = n(382600),
    g = n(755721),
    m = n(481060),
    _ = n(846027),
    b = n(239091),
    E = n(925549),
    O = n(730749),
    y = n(911969),
    v = n(317381),
    I = n(596040),
    C = n(314490),
    S = n(374065),
    T = n(451576),
    N = n(119315),
    j = n(100527),
    P = n(906732),
    x = n(397698),
    A = n(562129),
    Z = n(130067),
    w = n(793865),
    L = n(522651),
    R = n(795318),
    D = n(933557),
    M = n(600164),
    k = n(243778),
    U = n(258609),
    G = n(446226),
    B = n(935261),
    H = n(74299),
    V = n(803647),
    F = n(142497),
    z = n(810788),
    Y = n(160404),
    W = n(728285),
    q = n(703656),
    K = n(917405),
    Q = n(641015),
    J = n(848543),
    X = n(565799),
    $ = n(501655),
    ee = n(368442),
    et = n(600518),
    en = n(485287),
    er = n(754277),
    ei = n(590415),
    el = n(695346),
    ea = n(923973),
    es = n(829750),
    eo = n(189771),
    ec = n(544384),
    eu = n(560688),
    ed = n(127608),
    ep = n(76021),
    ef = n(173507),
    eh = n(25827),
    eg = n(199902),
    em = n(314897),
    e_ = n(592125),
    eb = n(430824),
    eE = n(819640),
    eO = n(131951),
    ey = n(496675),
    ev = n(19780),
    eI = n(699516),
    eC = n(594174),
    eS = n(979651),
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
    eM = n(190378),
    ek = n(345655),
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
let eY = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1,
    },
};
function eW(e) {
    let t = e.currentTarget;
    eN.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT },
    });
}
function eq() {
    let e = i.useRef(null);
    (0, m.Tbt)(e),
        i.useEffect(() => {
            eN.default.track(eL.rMx.OPEN_POPOUT, { type: eL.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eO.Z], () => eO.Z.getNoiseCancellation()),
        n = (0, u.e7)([eO.Z], () => eO.Z.getActiveInputProfile()),
        l = null != n && n !== ek._.CUSTOM;
    return (0, r.jsxs)("div", {
        ref: e,
        className: eG.noiseCancellationPopout,
        children: [
            (0, r.jsx)(m.aML, {
                "data-migration-pending": !0,
                text: eU.intl.formatToPlainString(eU.t["/tqmfM"], {
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
                                label: eU.intl.string(eU.t["WGWHv/"]),
                                checked: t,
                                disabled: l,
                                onChange: () =>
                                    _.Z.setNoiseCancellation(!t, { section: eL.jXE.NOISE_CANCELLATION_POPOUT }),
                            }),
                        }),
                    ),
            }),
            (0, r.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: eU.intl.string(eU.t.uKdWn6),
            }),
            (0, r.jsx)(Z.Z, {
                title: eU.intl.string(eU.t.JdUas1),
                notchBackground: Z._.BLACK,
                buttonTest: eU.intl.string(eU.t["sG+MGg"]),
                buttonStop: eU.intl.string(eU.t.Yp3SbJ),
                location: { section: eL.jXE.NOISE_CANCELLATION_POPOUT },
            }),
            (0, r.jsx)("div", {
                className: a()(eB.marginBottom8, eB.marginTop20),
                children: (0, r.jsx)(m.gNt, {
                    label: eU.intl.string(eU.t.k6h1F4),
                    children: (0, r.jsxs)(M.Z, {
                        justify: M.Z.Justify.BETWEEN,
                        className: eG.__invalid_footer,
                        children: [
                            (0, r.jsx)(m.Anchor, {
                                href: eL.EYA.KRISP,
                                onClick: (e) => eW(e),
                                children: (0, r.jsx)("div", { className: eG.krispLogo }),
                            }),
                            (0, r.jsx)(m.Anchor, {
                                href: ej.Z.getArticleURL(eL.BhN.NOISE_SUPPRESSION),
                                className: eG.krispLink,
                                onClick: (e) => eW(e),
                                children: eU.intl.string(eU.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eK() {
    let { parentAnalyticsLocation: e } = (0, P.ZP)(),
        t = (0, u.e7)([er.Z], () => er.Z.isMuted()),
        n = t ? eU.intl.string(eU.t.ScHlfl) : eU.intl.string(eU.t.zqxfrf);
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
        s = i.useRef(null),
        { parentAnalyticsLocation: o } = (0, P.ZP)(),
        c = (0, ea.Z)(),
        d = (0, eo.Z)(t),
        p = (0, u.e7)(
            [v.ZP],
            () => null != v.ZP.getSelfEmbeddedActivityForLocation(v.ZP.getConnectedActivityLocation()),
        ),
        h = (0, Q.Z)(t),
        { reachedLimit: b, limit: E } = (0, es.Z)(t),
        O = i.useCallback(() => {
            (0, eu.Z)();
        }, []),
        y = (0, W.bp)(),
        I = i.useCallback(
            (e) => {
                if (eO.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    _.Z.setVideoEnabled(e),
                        e && (0, q.uL)(eL.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eL.ME, t.id));
                };
                (0, L.v)(o, L.d.CAMERA, e), e ? (0, ef.Z)(n, y) : n();
            },
            [t, y, o],
        ),
        C = p || n || h,
        { Component: S, play: T, events: N } = (0, f.o)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => T(), [c.enabled, T]),
        (0, r.jsx)(
            eh.Z,
            eF(
                eV(
                    {
                        onChange: I,
                        onCameraUnavailable: O,
                        hasPermission: d,
                        channelLimit: E,
                        channelLimitReached: b,
                    },
                    c,
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = ez(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]);
                        let d = (0, r.jsx)(S, {
                            size: "md",
                            className: a()(eG.buttonIcon, { [eG.withText]: !C }),
                            color: "currentColor",
                        });
                        return (0, r.jsx)(m.yRy, {
                            targetElementRef: s,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(w.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, R.u)("VideoDeviceMenu", o),
                                });
                            },
                            position: "top",
                            align: "center",
                            animation: m.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: o } = e,
                                    c = ez(e, ["onClick"]),
                                    { isShown: p } = l;
                                return (0, r.jsx)(m.aML, {
                                    "data-migration-pending": !0,
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g.zx,
                                            eF(
                                                eV(
                                                    {
                                                        "data-migration-pending": !0,
                                                        buttonRef: s,
                                                    },
                                                    u,
                                                    e,
                                                    c,
                                                ),
                                                {
                                                    onClick: (t) => {
                                                        var n;
                                                        u.onClick(t), null == (n = e.onClick) || n.call(e), p && o(t);
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
                                                        o(t), null == (n = e.onContextMenu) || n.call(e);
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
                                                    focusProps: eY,
                                                    children: C
                                                        ? d
                                                        : (0, r.jsxs)(M.Z, {
                                                              align: M.Z.Align.CENTER,
                                                              children: [d, eU.intl.string(eU.t.FlNoSV)],
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
function eJ(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, W.bp)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, P.ZP)(),
        o = i === eL.IlC.POPOUT,
        c = (0, S.KF)(t.id),
        p = (0, S.g5)(c),
        { userInActivity: f } = (0, u.cj)([v.ZP], () => ({
            userInActivity: null != v.ZP.getSelfEmbeddedActivityForChannel(t.id),
        })),
        h = (0, C.p)({
            surface: y.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0,
        }),
        _ = c !== S.jy.CAN_LAUNCH,
        { Component: b, events: E, play: O } = (0, A.Z)("RTCConnection");
    return n
        ? (0, r.jsx)(m.aML, {
              "data-migration-pending": !0,
              text: p,
              children: (e) =>
                  (0, r.jsx)(k.Xf, {
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
                                      E,
                                  ),
                                  {
                                      onClick: () => {
                                          var n;
                                          O(),
                                              (0, x.Z)({
                                                  context:
                                                      null != t
                                                          ? {
                                                                type: "channel",
                                                                channel: t,
                                                            }
                                                          : { type: "contextless" },
                                                  openInPopout: o,
                                                  analyticsLocation: s,
                                              }),
                                              null == (n = e.onClick) || n.call(e),
                                              (0, L.v)(l, L.d.ACTIVITY),
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(eD.L.TAKE_ACTION);
                                      },
                                      onMouseEnter: () => {
                                          var t;
                                          E.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                                      },
                                      onMouseLeave: () => {
                                          var t;
                                          E.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e);
                                      },
                                      disabled: _,
                                      className: a()(eG.button, eG.buttonColor, {
                                          [eG.buttonActive]: f,
                                          [eG.disabled]: _,
                                      }),
                                      innerClassName: eG.buttonContents,
                                      wrapperClassName: eG.button,
                                      focusProps: eY,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(N.r, {
                                                  top: -1,
                                                  right: -1,
                                              }),
                                          (0, r.jsx)(b, {
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
function eX(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: f } = (0, P.ZP)(),
        h = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
        _ = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
        b = (0, eo.Z)(n),
        E = n.getGuildId(),
        O = (0, u.cj)([v.ZP], () => null != v.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        y = (0, Q.Z)(n),
        I = i.useCallback(() => {
            (0, ep.Z)(E, n.id, f);
        }, [E, n.id, f]),
        C = _.find((e) => e.ownerId === (null == h ? void 0 : h.id)),
        S = (0, ec.E)(n, h, _);
    t = null == C ? (l ? I : ed.Z) : () => (0, V.Z)(C);
    let T = null != C || S.length > 0,
        N = b ? eU.intl.string(eU.t.fjBNo1) : eU.intl.string(eU.t.uQn9B8),
        j = O || s || y,
        x = null != C,
        { Component: A, events: Z, play: w } = (0, p.P)(x ? "disable" : "enable");
    i.useEffect(() => () => w(), [w, x]);
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
                activeStreams: _,
                onClose: t,
                handleGoLive: l ? I : ed.Z,
                onInteraction: (0, R.u)("ManageStreamsMenu", d, { entrypoint: eR.A5.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: m.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = ez(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(m.aML, {
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
                                        (0, L.v)(d, L.d.STREAM, null == C),
                                            T ? n(r) : t(),
                                            null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !b || o,
                                    className: a()(eG.button, eG.buttonColor, {
                                        [eG.buttonActive]: null != C,
                                        [eG.disabled]: !b || o,
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
                                focusProps: eY,
                                children: j
                                    ? D
                                    : (0, r.jsxs)(M.Z, {
                                          align: M.Z.Align.CENTER,
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
                hasVideo: s,
            } = this.props;
        if (null == t) return null;
        let o = (0, D.F6)(t, eC.default, eI.Z);
        return (
            null != n
                ? ((e = eL.Z5c.CHANNEL(n.id, t.id)), (o = "".concat(o, " / ").concat(n.name)))
                : (e = eL.Z5c.CHANNEL(eL.ME, t.id)),
            (0, r.jsx)(K.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: s,
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
                                children: o,
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
                ? (0, r.jsx)(m.aML, {
                      "data-migration-pending": !0,
                      text: eU.intl.string(eU.t["i+SO/U"]),
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
                          renderPopout: () => (0, r.jsx)(eq, {}),
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
            isPrivateChannelWithEnabledActivities: s,
        } = this.props;
        if (null == e || null != n) return null;
        let o = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ee.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === o);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && i,
            { reachedLimit: u } = (0, es.t)(e),
            d = (0, ee.xJ)(e.id);
        return (0, r.jsxs)("div", {
            className: eG.actionButtons,
            children: [
                (0, r.jsx)(eQ, {
                    channel: e,
                    enableActivities: c,
                    disabled: !d && u,
                }),
                (0, r.jsx)(eX, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((d && null == a) || (!d && u)),
                }),
                c
                    ? (0, r.jsx)(eJ, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                (0, Q.Z)(e)
                    ? (0, r.jsx)(J.Z, {
                          channel: e,
                          focusProps: eY,
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
                              (0, r.jsxs)(M.Z, {
                                  className: eG.connection,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eG.inner,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(M.Z, {
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
                o()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    E.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eL.ME, r.id),
                    (0, L.v)(j.Z.RTC_PANEL, L.d.CHANNEL_LINK);
            }),
            eH(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, b.jW)(e, async () => {
                    let { default: e } = await n.e("56944").then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(P.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eF(eV({}, n), {
                                    channel: t,
                                    onInteraction: (0, R.u)("RTCConnectionMenu", j.Z.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eH(this, "handleCloseVoicePanelIntroduction", () => {
                F.Kw(eM.v.VOICE_PANEL_INTRODUCTION);
            }),
            eH(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(eG.voicePanelIntroductionWrapper, "theme-light"),
                    children: [
                        (0, r.jsx)(m.Heading, {
                            className: eG.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: eU.intl.string(eU.t["ba/rL2"]),
                        }),
                        (0, r.jsx)(m.Text, {
                            className: eG.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: eU.intl.string(eU.t.Ne1Eew),
                        }),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            text: eU.intl.string(eU.t.shaBeH),
                            focusProps: eY,
                        }),
                    ],
                }),
            );
    }
}
function e0(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, P.ZP)(),
        { play: o, Component: c, events: u } = (0, h.P)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            ex.Z,
            eF(eV({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, L.v)(s, L.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipClassName: eG.noiseCancellationTooltip,
                tooltipText: n ? null : eU.intl.string(eU.t.vFiCSx),
                icon: (0, r.jsx)(c, { size: "refresh_sm" }),
            }),
        )
    );
}
let e1 = (0, O.Z)(function (e) {
    let t = (0, G.Z)(),
        n = (0, u.e7)([U.default], () => U.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
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
        { channelId: s } = a,
        o = ez(a, ["channelId"]),
        c = (0, u.e7)([e_.Z], () => e_.Z.getChannel(s), [s]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([eb.Z], () => eb.Z.getGuild(d), [d]),
        f = (0, u.cj)([eO.Z], () => ({
            noiseCancellationSupported: eO.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eO.Z.getNoiseCancellation(),
            noiseCancellationError: eO.Z.isNoiseCancellationError(),
            canGoLive: (0, H.Z)(eO.Z),
        })),
        h = (0, u.e7)(
            [eO.Z, z.Z],
            () =>
                z.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) &&
                (0, eP.EO)(l) &&
                !eO.Z.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        g = (0, u.e7)([eS.Z], () => null != s && eS.Z.hasVideo(s), [s]),
        _ = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
        b = (0, u.e7)([eE.Z], () => eE.Z.hasLayers()),
        E = (0, u.e7)([Y.Z], () => Y.Z.isViewingRoles(d)),
        O = (0, u.e7)([ey.Z], () => E && !ey.Z.can(eL.Plq.VIEW_CHANNEL, c), [E, c]),
        y = el.Fg.useSetting(),
        [v, C, S] = (0, u.Wu)(
            [eT.ZP, X.Z],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [X.Z.getMutableParticipants(c.id, $.pV.SPEAKER), X.Z.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? eT.ZP.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        N = i.useMemo(() => {
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
                                      voiceState: r,
                                  };
                              }))
                        ? e
                        : S)
                ? t
                : [];
        }, [v, C, S]),
        [x, A] = i.useState(!1);
    i.useEffect(() => {
        (E || O) && A(!1);
    }, [E, O, A]);
    let { analyticsLocations: Z } = (0, P.ZP)(j.Z.RTC_PANEL),
        w = (0, I.Z)(null != d ? d : eL.lds, null == c ? void 0 : c.id),
        L = (0, T.Z)(null == c ? void 0 : c.id);
    return (0, r.jsx)(P.Gt, {
        value: Z,
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
                    eF(eV({}, e, f, o), {
                        enableActivities: w,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: g,
                        selfStream: _,
                        hasLayers: b,
                        voiceStates: N,
                        showVoiceStates: y,
                        shouldShowVoicePanelIntroduction: h,
                        isPrivateChannelWithEnabledActivities: L,
                        analyticsLocations: Z,
                    }),
                ),
                !x && E && null != d
                    ? (0, r.jsxs)("div", {
                          className: eG.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  className: eG.viewAsRolesWarningText,
                                  children: O ? eU.intl.string(eU.t.efjuQJ) : eU.intl.string(eU.t.br8H2N),
                              }),
                              (0, r.jsx)(m.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      A(!0);
                                  },
                                  text: eU.intl.string(eU.t.WAI6xu),
                                  focusProps: eY,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
