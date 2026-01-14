n.d(t, { Z: () => e7 }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(319498),
    u = n(442837),
    d = n(704215),
    p = n(749280),
    f = n(996146),
    g = n(864094),
    h = n(75735),
    m = n(382600),
    b = n(681715),
    _ = n(755721),
    E = n(481060),
    O = n(846027),
    v = n(239091),
    I = n(925549),
    y = n(730749),
    C = n(911969),
    S = n(317381),
    T = n(596040),
    N = n(314490),
    j = n(374065),
    x = n(451576),
    P = n(119315),
    A = n(100527),
    Z = n(906732),
    w = n(397698),
    L = n(130067),
    R = n(793865),
    D = n(522651),
    M = n(795318),
    k = n(933557),
    U = n(600164),
    G = n(243778),
    H = n(258609),
    B = n(446226),
    V = n(935261),
    F = n(74299),
    z = n(803647),
    Y = n(142497),
    W = n(810788),
    K = n(160404),
    q = n(728285),
    Q = n(64267),
    J = n(703656),
    X = n(917405),
    $ = n(813405),
    ee = n(675547),
    et = n(621586),
    en = n(641015),
    er = n(848543),
    ei = n(565799),
    el = n(501655),
    ea = n(368442),
    eo = n(255726),
    es = n(485287),
    ec = n(754277),
    eu = n(590415),
    ed = n(695346),
    ep = n(923973),
    ef = n(829750),
    eg = n(189771),
    eh = n(544384),
    em = n(560688),
    eb = n(127608),
    e_ = n(76021),
    eE = n(173507),
    eO = n(25827),
    ev = n(199902),
    eI = n(314897),
    ey = n(592125),
    eC = n(430824),
    eS = n(819640),
    eT = n(131951),
    eN = n(496675),
    ej = n(19780),
    ex = n(699516),
    eP = n(594174),
    eA = n(979651),
    eZ = n(938475),
    ew = n(626135),
    eL = n(63063),
    eR = n(51144),
    eD = n(870569),
    eM = n(345243),
    ek = n(594117),
    eU = n(226323),
    eG = n(981631),
    eH = n(354459),
    eB = n(921944),
    eV = n(190378),
    eF = n(345655),
    ez = n(388032),
    eY = n(424126);
function eW(e, t, n) {
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
function eK(e) {
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
                eW(e, t, n[t]);
            });
    }
    return e;
}
function eq(e, t) {
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
function eQ(e, t) {
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
let eJ = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1,
    },
};
function eX(e) {
    let t = e.currentTarget;
    ew.default.track(eG.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eG.jXE.NOISE_CANCELLATION_POPOUT },
    });
}
function e$() {
    let e = i.useRef(null);
    (0, E.Tbt)(e),
        i.useEffect(() => {
            ew.default.track(eG.rMx.OPEN_POPOUT, { type: eG.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let { noiseCancellationActive: t, systemMicrophoneMode: n } = (0, u.cj)([eT.Z], () => ({
            noiseCancellationActive: eT.Z.getNoiseCancellation(),
            systemMicrophoneMode: eT.Z.getSystemMicrophoneMode(),
        })),
        l = !(0, Q.Z)(!0, n, { location: "NoiseCancellationPopout" }),
        a = (0, u.e7)([eT.Z], () => eT.Z.getActiveInputProfile()),
        o = null != a && a !== eF._.CUSTOM,
        s = ez.intl.string(ez.t.uKdWn6),
        c = ez.intl.string(ez.t.uKdWn6);
    return (
        l
            ? ((s = ez.intl.string(ez.t.mXZgC9)),
              (c = ez.intl.format(ez.t.F6lrb4, {
                  onSettingsClick: () => {
                      eT.Z.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : o &&
              (s = ez.intl.formatToPlainString(ez.t["/tqmfM"], {
                  enabled: t ? "true" : "false",
                  inputProfile: a,
              })),
        (0, r.jsxs)("div", {
            ref: e,
            className: eY.noiseCancellationPopout,
            children: [
                (0, r.jsx)(b.u, {
                    text: s,
                    shouldShow: o || l,
                    align: "right",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(E.rsf, {
                            label: ez.intl.string(ez.t["WGWHv/"]),
                            checked: t && !l,
                            disabled: o || l,
                            onChange: () => O.Z.setNoiseCancellation(!t, { section: eG.jXE.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, r.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    children: c,
                }),
                (0, r.jsx)(L.Z, {
                    title: ez.intl.string(ez.t.JdUas1),
                    notchBackground: L._.BLACK,
                    buttonTest: ez.intl.string(ez.t["sG+MGg"]),
                    buttonStop: ez.intl.string(ez.t.Yp3SbJ),
                    location: { section: eG.jXE.NOISE_CANCELLATION_POPOUT },
                }),
                (0, r.jsx)(E.gNt, {
                    label: ez.intl.string(ez.t.k6h1F4),
                    children: (0, r.jsxs)(U.Z, {
                        justify: U.Z.Justify.BETWEEN,
                        className: eY.__invalid_footer,
                        children: [
                            (0, r.jsx)(E.eee, {
                                href: eG.EYA.KRISP,
                                onClick: (e) => eX(e),
                                children: (0, r.jsx)("div", { className: eY.krispLogo }),
                            }),
                            (0, r.jsx)(E.eee, {
                                href: eL.Z.getArticleURL(eG.BhN.NOISE_SUPPRESSION),
                                className: eY.krispLink,
                                onClick: (e) => eX(e),
                                children: ez.intl.string(ez.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function e0() {
    let { parentAnalyticsLocation: e } = (0, Z.ZP)(),
        t = (0, u.e7)([ec.Z], () => ec.Z.isMuted()),
        n = t ? ez.intl.string(ez.t.ScHlfl) : ez.intl.string(ez.t.zqxfrf);
    return (0, r.jsx)(eD.Z, {
        tooltipText: n,
        icon: t ? E.xjP : E.RZG,
        onClick: () => {
            (0, D.v)(e, D.d.STAGE_MUSIC, t), (0, eo.v)(!t);
        },
    });
}
function e1(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, Z.ZP)(),
        c = (0, ep.Z)(),
        d = (0, eg.Z)(t),
        p = (0, u.e7)(
            [S.ZP],
            () => null != S.ZP.getSelfEmbeddedActivityForLocation(S.ZP.getConnectedActivityLocation()),
        ),
        f = (0, en.Z)(t),
        { reachedLimit: g, limit: m } = (0, ef.Z)(t),
        v = i.useCallback(() => {
            (0, em.Z)();
        }, []),
        I = (0, q.bp)(),
        y = i.useCallback(
            (e) => {
                if (eT.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    O.Z.setVideoEnabled(e),
                        e && (0, J.uL)(eG.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eG.ME, t.id));
                };
                (0, D.v)(s, D.d.CAMERA, e), e ? (0, eE.Z)(n, I) : n();
            },
            [t, I, s],
        ),
        C = p || n || f,
        { Component: T, play: N, events: j } = (0, h.o)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => N(), [c.enabled, N]),
        (0, r.jsx)(
            eO.Z,
            eq(
                eK(
                    {
                        onChange: y,
                        onCameraUnavailable: v,
                        hasPermission: d,
                        channelLimit: m,
                        channelLimitReached: g,
                    },
                    c,
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        var { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = eQ(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]);
                        let d = (0, r.jsx)(T, {
                            size: "md",
                            className: a()(eY.buttonIcon, { [eY.withText]: !C }),
                            color: "currentColor",
                        });
                        return (0, r.jsx)(E.yRy, {
                            targetElementRef: o,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(R.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, M.u)("VideoDeviceMenu", s),
                                });
                            },
                            position: "top",
                            align: "center",
                            animation: E.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: s } = e,
                                    c = eQ(e, ["onClick"]),
                                    { isShown: p } = l;
                                return (0, r.jsx)(b.u, {
                                    text: i,
                                    children: (0, r.jsx)(
                                        _.zx,
                                        eq(
                                            eK(
                                                {
                                                    "data-migration-pending": !0,
                                                    buttonRef: o,
                                                },
                                                u,
                                                c,
                                            ),
                                            {
                                                onClick: (e) => {
                                                    u.onClick(e), p && s(e);
                                                },
                                                onMouseEnter: () => {
                                                    var e;
                                                    null == (e = c.onMouseEnter) || e.call(c), j.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    j.onMouseLeave();
                                                },
                                                onContextMenu: (e) => {
                                                    s(e);
                                                },
                                                size: _.zx.Sizes.MEDIUM,
                                                className: a()(eY.button, eY.buttonColor, {
                                                    [eY.buttonActive]: n,
                                                    [eY.fauxDisabled]: t,
                                                    [eY.disabled]: u.disabled,
                                                }),
                                                innerClassName: eY.buttonContents,
                                                wrapperClassName: eY.button,
                                                fullWidth: !0,
                                                focusProps: eJ,
                                                children: C
                                                    ? d
                                                    : (0, r.jsxs)(U.Z, {
                                                          align: U.Z.Align.CENTER,
                                                          children: [d, ez.intl.string(ez.t.FlNoSV)],
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
function e4(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, q.bp)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: o } = (0, Z.ZP)(),
        s = i === eG.IlC.POPOUT,
        c = (0, j.KF)(t.id),
        f = (0, j.g5)(c),
        { userInActivity: g } = (0, u.cj)([S.ZP], () => ({
            userInActivity: null != S.ZP.getSelfEmbeddedActivityForChannel(t.id),
        })),
        h = (0, N.p)({
            surface: C.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0,
        }),
        m = c !== j.jy.CAN_LAUNCH,
        { Component: E, events: O, play: v } = (0, p.w)();
    return n
        ? (0, r.jsx)(G.Xf, {
              contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: h,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, r.jsx)(b.u, {
                      text: f,
                      children: (0, r.jsxs)(
                          _.zx,
                          eq(
                              eK(
                                  {
                                      "data-migration-pending": !0,
                                      fullWidth: !0,
                                      size: _.zx.Sizes.MEDIUM,
                                  },
                                  O,
                              ),
                              {
                                  onClick: () => {
                                      v(),
                                          (0, w.Z)({
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
                                          (0, D.v)(l, D.d.ACTIVITY),
                                          n === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(eB.L.TAKE_ACTION);
                                  },
                                  onMouseEnter: () => {
                                      O.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      O.onMouseLeave();
                                  },
                                  disabled: m,
                                  className: a()(eY.button, eY.buttonColor, {
                                      [eY.buttonActive]: g,
                                      [eY.disabled]: m,
                                  }),
                                  innerClassName: eY.buttonContents,
                                  wrapperClassName: eY.button,
                                  focusProps: eJ,
                                  children: [
                                      n === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                          (0, r.jsx)(P.r, {
                                              top: -1,
                                              right: -1,
                                          }),
                                      (0, r.jsx)(E, {
                                          size: "md",
                                          color: "currentColor",
                                          className: eY.buttonIcon,
                                      }),
                                  ],
                              },
                          ),
                      ),
                  });
              },
          })
        : null;
}
function e3(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        { parentAnalyticsLocation: l } = (0, Z.ZP)(),
        o = (0, f.$)(),
        {
            Component: s,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: p },
        } = o,
        g = eQ(o.events, ["onMouseEnter", "onMouseLeave"]),
        [h, m] = i.useState(!1),
        [O, v] = (0, G.US)([d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        I = i.useCallback(() => {
            m(!1);
        }, []),
        y = i.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(et.Z, {
                    channel: t,
                    closePopout: n,
                    isHovered: h,
                });
            },
            [t, h],
        ),
        C = i.useCallback(() => {
            c(),
                h ? m(!1) : m(!0),
                (0, D.v)(l, D.d.GIFTING),
                O === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE && v(eB.L.TAKE_ACTION);
        }, [l, c, h, O, v]);
    return (0, r.jsx)(E.yRy, {
        targetElementRef: n,
        shouldShow: h,
        animation: E.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: I,
        renderPopout: y,
        children: () =>
            (0, r.jsx)(b.u, {
                text: ez.intl.string(ez.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !h,
                onTooltipShow: u,
                onTooltipHide: p,
                children: (0, r.jsxs)(
                    _.zx,
                    eq(
                        eK(
                            {
                                "data-migration-pending": !0,
                                fullWidth: !0,
                                size: _.zx.Sizes.MEDIUM,
                                buttonRef: n,
                            },
                            g,
                        ),
                        {
                            onClick: C,
                            className: a()(eY.button, eY.buttonColor),
                            innerClassName: eY.buttonContents,
                            wrapperClassName: eY.button,
                            focusProps: eJ,
                            children: [
                                O === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE &&
                                    (0, r.jsx)(P.r, {
                                        top: -4,
                                        right: -4,
                                        alert: !0,
                                    }),
                                (0, r.jsx)(s, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eY.buttonIcon,
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
function e8(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: p } = (0, Z.ZP)(),
        f = (0, u.e7)([eP.default], () => eP.default.getCurrentUser()),
        h = (0, u.Wu)([ev.Z], () => ev.Z.getAllActiveStreams()),
        m = (0, eg.Z)(n),
        O = n.getGuildId(),
        v = (0, u.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        I = (0, en.Z)(n),
        y = i.useCallback(() => {
            (0, e_.Z)(O, n.id, p);
        }, [O, n.id, p]),
        C = h.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        T = (0, eh.E)(n, f, h);
    t = null == C ? (l ? y : eb.Z) : () => (0, z.Z)(C);
    let N = null != C || T.length > 0,
        j = m ? ez.intl.string(ez.t.fjBNo1) : ez.intl.string(ez.t.uQn9B8),
        x = v || o || I,
        P = null != C,
        { Component: A, events: w, play: L } = (0, g.P)(P ? "disable" : "enable");
    i.useEffect(() => () => L(), [L, P]);
    let R = (0, r.jsx)(A, {
        size: "md",
        color: "currentColor",
        className: a()(eY.buttonIcon, { [eY.withText]: !x }),
    });
    return (0, r.jsx)(E.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eh.Z, {
                channel: n,
                currentUser: f,
                activeStreams: h,
                onClose: t,
                handleGoLive: l ? y : eb.Z,
                onInteraction: (0, M.u)("ManageStreamsMenu", d, { entrypoint: eH.A5.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: E.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eQ(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(b.u, {
                text: j,
                children: (0, r.jsx)(
                    _.zx,
                    eq(
                        eK(
                            {
                                "data-migration-pending": !0,
                                buttonRef: c,
                                size: _.zx.Sizes.MEDIUM,
                                onClick: (e) => {
                                    (0, D.v)(d, D.d.STREAM, null == C), N ? n(e) : t();
                                },
                                disabled: !m || s,
                                className: a()(eY.button, eY.buttonColor, {
                                    [eY.buttonActive]: null != C,
                                    [eY.disabled]: !m || s,
                                }),
                            },
                            N ? l : null,
                        ),
                        {
                            onMouseEnter: () => {
                                null == i || i(), w.onMouseEnter();
                            },
                            onMouseLeave: () => {
                                w.onMouseLeave();
                            },
                            innerClassName: eY.buttonContents,
                            wrapperClassName: eY.button,
                            focusProps: eJ,
                            children: x
                                ? R
                                : (0, r.jsxs)(U.Z, {
                                      align: U.Z.Align.CENTER,
                                      children: [R, ez.intl.string(ez.t["r0/+v7"])],
                                  }),
                        },
                    ),
                ),
            });
        },
    });
}
class e5 extends i.PureComponent {
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
        let s = (0, k.F6)(t, eP.default, ex.Z);
        return (
            null != n
                ? ((e = eG.Z5c.CHANNEL(n.id, t.id)), (s = "".concat(s, " / ").concat(n.name)))
                : (e = eG.Z5c.CHANNEL(eG.ME, t.id)),
            (0, r.jsx)(X.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: o,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, r.jsx)(E.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eM.Z, {
                            className: eY.channel,
                            children: (0, r.jsx)(E.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
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
                    a.find((e) => e.user.id === eI.default.getId() && (0, eu.gf)(e.voiceState) === eu.xO.ON_STAGE) &&
                (0, es.U5)(l.id)
              ? (0, r.jsx)(e0, {})
              : !n && t
                ? (0, r.jsx)(b.u, {
                      text: ez.intl.string(ez.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, r.jsx)(eD.Z, {
                          tooltipText: null,
                          disabled: !0,
                          icon: E.oIc,
                          "aria-label": ez.intl.string(ez.t["i+SO/U"]),
                      }),
                  })
                : (0, r.jsx)(
                      E.yRy,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, r.jsx)(e$, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(e2, {
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
            ? (0, r.jsx)(eU.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eY.voiceUsers,
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
            showSocialLayerStorefrontGiftingButton: s,
        } = this.props;
        if (null == e || null != n) return null;
        let c = eI.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ea.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || o) && i,
            { reachedLimit: d } = (0, ef.t)(e),
            p = (0, ea.xJ)(e.id);
        return (0, r.jsxs)("div", {
            className: eY.actionButtons,
            children: [
                (0, r.jsx)(e1, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d,
                }),
                (0, r.jsx)(e8, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d)),
                }),
                u && !s
                    ? (0, r.jsx)(e4, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                s ? (0, r.jsx)(e3, { channel: e }) : null,
                (0, en.Z)(e)
                    ? (0, r.jsx)(er.Z, {
                          channel: e,
                          focusProps: eJ,
                      })
                    : null,
            ],
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(E.yRy, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: E.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)("div", {
                          ref: this.ref,
                          className: eY.container,
                          children: [
                              (0, r.jsxs)(U.Z, {
                                  className: eY.connection,
                                  align: U.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eY.inner,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(U.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eY.voiceButtonsContainer,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, r.jsx)(ek.Z, { channel: e }),
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
            eW(this, "ref", i.createRef()),
            eW(this, "krispButtonRef", i.createRef()),
            eW(this, "handleChannelLinkClick", (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    I.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eG.ME, r.id),
                    (0, D.v)(A.Z.RTC_PANEL, D.d.CHANNEL_LINK);
            }),
            eW(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, v.jW)(e, async () => {
                    let { default: e } = await n.e("56944").then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(Z.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eq(eK({}, n), {
                                    channel: t,
                                    onInteraction: (0, M.u)("RTCConnectionMenu", A.Z.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eW(this, "handleCloseVoicePanelIntroduction", () => {
                Y.Kw(eV.v.VOICE_PANEL_INTRODUCTION);
            }),
            eW(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(eY.voicePanelIntroductionWrapper, "theme-light"),
                    children: [
                        (0, r.jsx)(E.Heading, {
                            className: eY.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: ez.intl.string(ez.t["ba/rL2"]),
                        }),
                        (0, r.jsx)(E.Text, {
                            className: eY.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: ez.intl.string(ez.t.Ne1Eew),
                        }),
                        (0, r.jsx)(E.Button, {
                            fullWidth: !0,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            text: ez.intl.string(ez.t.shaBeH),
                            focusProps: eJ,
                        }),
                    ],
                }),
            );
    }
}
function e2(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, Z.ZP)(),
        { play: s, Component: c, events: u } = (0, m.P)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            eD.Z,
            eq(eK({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, D.v)(o, D.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipText: n ? null : ez.intl.string(ez.t.vFiCSx),
                icon: (0, r.jsx)(c, { size: "refresh_sm" }),
            }),
        )
    );
}
let e7 = (0, y.Z)(function (e) {
    let t = (0, B.Z)(),
        n = (0, u.e7)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([eP.default], () => eP.default.getCurrentUser()),
        a = (0, u.cj)([ej.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eG.IE4.FINE,
                      rtcConnectionState: eG.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ej.Z.getChannelId(),
                      rtcConnectionQuality: ej.Z.getQuality(),
                      rtcConnectionState: ej.Z.getState(),
                      rtcConnectionLastPing: ej.Z.getLastPing(),
                  },
        ),
        { channelId: o } = a,
        s = eQ(a, ["channelId"]),
        c = (0, u.e7)([ey.Z], () => ey.Z.getChannel(o), [o]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([eC.Z], () => eC.Z.getGuild(d), [d]),
        f = (0, u.cj)([eT.Z], () => ({
            noiseCancellationSupported: eT.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, Q.Z)(eT.Z.getNoiseCancellation(), eT.Z.getSystemMicrophoneMode(), {
                location: "RTCConnection",
            }),
            noiseCancellationError: eT.Z.isNoiseCancellationError(),
            canGoLive: (0, F.Z)(eT.Z),
        })),
        g = (0, u.e7)(
            [eT.Z, W.Z],
            () =>
                W.Z.hasHotspot(eV.v.VOICE_PANEL_INTRODUCTION) &&
                (0, eR.EO)(l) &&
                !eT.Z.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        h = (0, u.e7)([eA.Z], () => null != o && eA.Z.hasVideo(o), [o]),
        m = (0, u.e7)([ev.Z], () => ev.Z.getCurrentUserActiveStream()),
        b = (0, u.e7)([eS.Z], () => eS.Z.hasLayers()),
        _ = (0, u.e7)([K.Z], () => K.Z.isViewingRoles(d)),
        O = (0, u.e7)([eN.Z], () => _ && !eN.Z.can(eG.Plq.VIEW_CHANNEL, c), [_, c]),
        v = ed.Fg.useSetting(),
        [I, y, C] = (0, u.Wu)(
            [eZ.ZP, ei.Z],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [ei.Z.getMutableParticipants(c.id, el.pV.SPEAKER), ei.Z.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? eZ.ZP.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        S = i.useMemo(() => {
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
                        : C)
                ? t
                : [];
        }, [I, y, C]),
        [N, j] = i.useState(!1);
    i.useEffect(() => {
        (_ || O) && j(!1);
    }, [_, O, j]);
    let { analyticsLocations: P } = (0, Z.ZP)(A.Z.RTC_PANEL),
        w = (0, T.Z)(null != d ? d : eG.lds, null == c ? void 0 : c.id),
        L = (0, x.Z)(null == c ? void 0 : c.id),
        R = (0, $.A)({ location: "RTCConnection" }),
        D = (0, ee.Z)({
            channelId: null == c ? void 0 : c.id,
            location: "RTCConnection",
        });
    return (0, r.jsx)(Z.Gt, {
        value: P,
        children: (0, r.jsxs)("div", {
            className: eY.wrapper,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(V.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n,
                      })
                    : null,
                (0, r.jsx)(
                    e5,
                    eq(eK({}, e, f, s), {
                        enableActivities: w,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: h,
                        selfStream: m,
                        hasLayers: b,
                        voiceStates: S,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: g,
                        showSocialLayerStorefrontGiftingButton: R && D,
                        isPrivateChannelWithEnabledActivities: L,
                        analyticsLocations: P,
                    }),
                ),
                !N && _ && null != d
                    ? (0, r.jsxs)("div", {
                          className: eY.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(E.Text, {
                                  variant: "text-sm/normal",
                                  className: eY.viewAsRolesWarningText,
                                  children: O ? ez.intl.string(ez.t.efjuQJ) : ez.intl.string(ez.t.br8H2N),
                              }),
                              (0, r.jsx)(E.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      j(!0);
                                  },
                                  text: ez.intl.string(ez.t.WAI6xu),
                                  focusProps: eJ,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
