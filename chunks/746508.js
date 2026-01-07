n.d(t, { Z: () => e2 }), n(388685);
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
    y = n(925549),
    I = n(730749),
    C = n(911969),
    S = n(317381),
    T = n(596040),
    N = n(314490),
    j = n(374065),
    P = n(451576),
    x = n(119315),
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
    q = n(160404),
    K = n(728285),
    Q = n(703656),
    J = n(917405),
    X = n(813405),
    $ = n(675547),
    ee = n(621586),
    et = n(641015),
    en = n(848543),
    er = n(565799),
    ei = n(501655),
    el = n(368442),
    ea = n(255726),
    eo = n(485287),
    es = n(754277),
    ec = n(590415),
    eu = n(695346),
    ed = n(923973),
    ep = n(829750),
    ef = n(189771),
    eg = n(544384),
    eh = n(560688),
    em = n(127608),
    eb = n(76021),
    e_ = n(173507),
    eE = n(25827),
    eO = n(199902),
    ev = n(314897),
    ey = n(592125),
    eI = n(430824),
    eC = n(819640),
    eS = n(131951),
    eT = n(496675),
    eN = n(19780),
    ej = n(699516),
    eP = n(594174),
    ex = n(979651),
    eA = n(938475),
    eZ = n(626135),
    ew = n(63063),
    eL = n(51144),
    eR = n(870569),
    eD = n(345243),
    eM = n(594117),
    ek = n(226323),
    eU = n(981631),
    eG = n(354459),
    eH = n(921944),
    eB = n(190378),
    eV = n(345655),
    eF = n(388032),
    ez = n(424126);
function eY(e, t, n) {
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
function eW(e) {
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
                eY(e, t, n[t]);
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
function eK(e, t) {
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
let eQ = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1,
    },
};
function eJ(e) {
    let t = e.currentTarget;
    eZ.default.track(eU.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eU.jXE.NOISE_CANCELLATION_POPOUT },
    });
}
function eX() {
    let e = i.useRef(null);
    (0, E.Tbt)(e),
        i.useEffect(() => {
            eZ.default.track(eU.rMx.OPEN_POPOUT, { type: eU.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eS.Z], () => eS.Z.getNoiseCancellation()),
        n = (0, u.e7)([eS.Z], () => eS.Z.getActiveInputProfile()),
        l = null != n && n !== eV._.CUSTOM;
    return (0, r.jsxs)("div", {
        ref: e,
        className: ez.noiseCancellationPopout,
        children: [
            (0, r.jsx)(b.u, {
                text: eF.intl.formatToPlainString(eF.t["/tqmfM"], {
                    enabled: t ? "true" : "false",
                    inputProfile: n,
                }),
                shouldShow: l,
                align: "right",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(E.rsf, {
                        label: eF.intl.string(eF.t["WGWHv/"]),
                        checked: t,
                        disabled: l,
                        onChange: () => O.Z.setNoiseCancellation(!t, { section: eU.jXE.NOISE_CANCELLATION_POPOUT }),
                    }),
                }),
            }),
            (0, r.jsx)(E.Text, {
                variant: "text-sm/normal",
                children: eF.intl.string(eF.t.uKdWn6),
            }),
            (0, r.jsx)(L.Z, {
                title: eF.intl.string(eF.t.JdUas1),
                notchBackground: L._.BLACK,
                buttonTest: eF.intl.string(eF.t["sG+MGg"]),
                buttonStop: eF.intl.string(eF.t.Yp3SbJ),
                location: { section: eU.jXE.NOISE_CANCELLATION_POPOUT },
            }),
            (0, r.jsx)(E.gNt, {
                label: eF.intl.string(eF.t.k6h1F4),
                children: (0, r.jsxs)(U.Z, {
                    justify: U.Z.Justify.BETWEEN,
                    className: ez.__invalid_footer,
                    children: [
                        (0, r.jsx)(E.eee, {
                            href: eU.EYA.KRISP,
                            onClick: (e) => eJ(e),
                            children: (0, r.jsx)("div", { className: ez.krispLogo }),
                        }),
                        (0, r.jsx)(E.eee, {
                            href: ew.Z.getArticleURL(eU.BhN.NOISE_SUPPRESSION),
                            className: ez.krispLink,
                            onClick: (e) => eJ(e),
                            children: eF.intl.string(eF.t.hvVgAZ),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function e$() {
    let { parentAnalyticsLocation: e } = (0, Z.ZP)(),
        t = (0, u.e7)([es.Z], () => es.Z.isMuted()),
        n = t ? eF.intl.string(eF.t.ScHlfl) : eF.intl.string(eF.t.zqxfrf);
    return (0, r.jsx)(eR.Z, {
        tooltipText: n,
        icon: t ? E.xjP : E.RZG,
        onClick: () => {
            (0, D.v)(e, D.d.STAGE_MUSIC, t), (0, ea.v)(!t);
        },
    });
}
function e0(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        o = i.useRef(null),
        { parentAnalyticsLocation: s } = (0, Z.ZP)(),
        c = (0, ed.Z)(),
        d = (0, ef.Z)(t),
        p = (0, u.e7)(
            [S.ZP],
            () => null != S.ZP.getSelfEmbeddedActivityForLocation(S.ZP.getConnectedActivityLocation()),
        ),
        f = (0, et.Z)(t),
        { reachedLimit: g, limit: m } = (0, ep.Z)(t),
        v = i.useCallback(() => {
            (0, eh.Z)();
        }, []),
        y = (0, K.bp)(),
        I = i.useCallback(
            (e) => {
                if (eS.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    O.Z.setVideoEnabled(e),
                        e && (0, Q.uL)(eU.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eU.ME, t.id));
                };
                (0, D.v)(s, D.d.CAMERA, e), e ? (0, e_.Z)(n, y) : n();
            },
            [t, y, s],
        ),
        C = p || n || f,
        { Component: T, play: N, events: j } = (0, h.o)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => N(), [c.enabled, N]),
        (0, r.jsx)(
            eE.Z,
            eq(
                eW(
                    {
                        onChange: I,
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
                            u = eK(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]);
                        let d = (0, r.jsx)(T, {
                            size: "md",
                            className: a()(ez.buttonIcon, { [ez.withText]: !C }),
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
                                    c = eK(e, ["onClick"]),
                                    { isShown: p } = l;
                                return (0, r.jsx)(b.u, {
                                    text: i,
                                    children: (0, r.jsx)(
                                        _.zx,
                                        eq(
                                            eW(
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
                                                className: a()(ez.button, ez.buttonColor, {
                                                    [ez.buttonActive]: n,
                                                    [ez.fauxDisabled]: t,
                                                    [ez.disabled]: u.disabled,
                                                }),
                                                innerClassName: ez.buttonContents,
                                                wrapperClassName: ez.button,
                                                fullWidth: !0,
                                                focusProps: eQ,
                                                children: C
                                                    ? d
                                                    : (0, r.jsxs)(U.Z, {
                                                          align: U.Z.Align.CENTER,
                                                          children: [d, eF.intl.string(eF.t.FlNoSV)],
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
function e1(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, K.bp)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: o } = (0, Z.ZP)(),
        s = i === eU.IlC.POPOUT,
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
                              eW(
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
                                          n === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(eH.L.TAKE_ACTION);
                                  },
                                  onMouseEnter: () => {
                                      O.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      O.onMouseLeave();
                                  },
                                  disabled: m,
                                  className: a()(ez.button, ez.buttonColor, {
                                      [ez.buttonActive]: g,
                                      [ez.disabled]: m,
                                  }),
                                  innerClassName: ez.buttonContents,
                                  wrapperClassName: ez.button,
                                  focusProps: eQ,
                                  children: [
                                      n === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                          (0, r.jsx)(x.r, {
                                              top: -1,
                                              right: -1,
                                          }),
                                      (0, r.jsx)(E, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ez.buttonIcon,
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
function e4(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        { parentAnalyticsLocation: l } = (0, Z.ZP)(),
        o = (0, f.$)(),
        {
            Component: s,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: p },
        } = o,
        g = eK(o.events, ["onMouseEnter", "onMouseLeave"]),
        [h, m] = i.useState(!1),
        [O, v] = (0, G.US)([d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        y = i.useCallback(() => {
            m(!1);
        }, []),
        I = i.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(ee.Z, {
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
                O === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE && v(eH.L.TAKE_ACTION);
        }, [l, c, h, O, v]);
    return (0, r.jsx)(E.yRy, {
        targetElementRef: n,
        shouldShow: h,
        animation: E.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: y,
        renderPopout: I,
        children: () =>
            (0, r.jsx)(b.u, {
                text: eF.intl.string(eF.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !h,
                onTooltipShow: u,
                onTooltipHide: p,
                children: (0, r.jsxs)(
                    _.zx,
                    eq(
                        eW(
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
                            className: a()(ez.button, ez.buttonColor),
                            innerClassName: ez.buttonContents,
                            wrapperClassName: ez.button,
                            focusProps: eQ,
                            children: [
                                O === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE &&
                                    (0, r.jsx)(x.r, {
                                        top: -4,
                                        right: -4,
                                        alert: !0,
                                    }),
                                (0, r.jsx)(s, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ez.buttonIcon,
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
function e3(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: o, disabled: s } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: p } = (0, Z.ZP)(),
        f = (0, u.e7)([eP.default], () => eP.default.getCurrentUser()),
        h = (0, u.Wu)([eO.Z], () => eO.Z.getAllActiveStreams()),
        m = (0, ef.Z)(n),
        O = n.getGuildId(),
        v = (0, u.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        y = (0, et.Z)(n),
        I = i.useCallback(() => {
            (0, eb.Z)(O, n.id, p);
        }, [O, n.id, p]),
        C = h.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        T = (0, eg.E)(n, f, h);
    t = null == C ? (l ? I : em.Z) : () => (0, z.Z)(C);
    let N = null != C || T.length > 0,
        j = m ? eF.intl.string(eF.t.fjBNo1) : eF.intl.string(eF.t.uQn9B8),
        P = v || o || y,
        x = null != C,
        { Component: A, events: w, play: L } = (0, g.P)(x ? "disable" : "enable");
    i.useEffect(() => () => L(), [L, x]);
    let R = (0, r.jsx)(A, {
        size: "md",
        color: "currentColor",
        className: a()(ez.buttonIcon, { [ez.withText]: !P }),
    });
    return (0, r.jsx)(E.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eg.Z, {
                channel: n,
                currentUser: f,
                activeStreams: h,
                onClose: t,
                handleGoLive: l ? I : em.Z,
                onInteraction: (0, M.u)("ManageStreamsMenu", d, { entrypoint: eG.A5.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: E.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eK(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(b.u, {
                text: j,
                children: (0, r.jsx)(
                    _.zx,
                    eq(
                        eW(
                            {
                                "data-migration-pending": !0,
                                buttonRef: c,
                                size: _.zx.Sizes.MEDIUM,
                                onClick: (e) => {
                                    (0, D.v)(d, D.d.STREAM, null == C), N ? n(e) : t();
                                },
                                disabled: !m || s,
                                className: a()(ez.button, ez.buttonColor, {
                                    [ez.buttonActive]: null != C,
                                    [ez.disabled]: !m || s,
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
                            innerClassName: ez.buttonContents,
                            wrapperClassName: ez.button,
                            focusProps: eQ,
                            children: P
                                ? R
                                : (0, r.jsxs)(U.Z, {
                                      align: U.Z.Align.CENTER,
                                      children: [R, eF.intl.string(eF.t["r0/+v7"])],
                                  }),
                        },
                    ),
                ),
            });
        },
    });
}
class e8 extends i.PureComponent {
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
        let s = (0, k.F6)(t, eP.default, ej.Z);
        return (
            null != n
                ? ((e = eU.Z5c.CHANNEL(n.id, t.id)), (s = "".concat(s, " / ").concat(n.name)))
                : (e = eU.Z5c.CHANNEL(eU.ME, t.id)),
            (0, r.jsx)(J.Z, {
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
                        children: (0, r.jsx)(eD.Z, {
                            className: ez.channel,
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
                    a.find((e) => e.user.id === ev.default.getId() && (0, ec.gf)(e.voiceState) === ec.xO.ON_STAGE) &&
                (0, eo.U5)(l.id)
              ? (0, r.jsx)(e$, {})
              : !n && t
                ? (0, r.jsx)(b.u, {
                      text: eF.intl.string(eF.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, r.jsx)(eR.Z, {
                          tooltipText: null,
                          disabled: !0,
                          icon: E.oIc,
                          "aria-label": eF.intl.string(eF.t["i+SO/U"]),
                      }),
                  })
                : (0, r.jsx)(
                      E.yRy,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, r.jsx)(eX, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, r.jsx)(e5, {
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
            ? (0, r.jsx)(ek.Z, {
                  voiceStates: t,
                  channel: e,
                  className: ez.voiceUsers,
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
        let c = ev.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, el.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || o) && i,
            { reachedLimit: d } = (0, ep.t)(e),
            p = (0, el.xJ)(e.id);
        return (0, r.jsxs)("div", {
            className: ez.actionButtons,
            children: [
                (0, r.jsx)(e0, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d,
                }),
                (0, r.jsx)(e3, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d)),
                }),
                u && !s
                    ? (0, r.jsx)(e1, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                s ? (0, r.jsx)(e4, { channel: e }) : null,
                (0, et.Z)(e)
                    ? (0, r.jsx)(en.Z, {
                          channel: e,
                          focusProps: eQ,
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
                          className: ez.container,
                          children: [
                              (0, r.jsxs)(U.Z, {
                                  className: ez.connection,
                                  align: U.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ez.inner,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(U.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ez.voiceButtonsContainer,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, r.jsx)(eM.Z, { channel: e }),
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
            eY(this, "ref", i.createRef()),
            eY(this, "krispButtonRef", i.createRef()),
            eY(this, "handleChannelLinkClick", (e) => {
                var t;
                let { guild: n, channel: r } = this.props;
                s()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    y.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eU.ME, r.id),
                    (0, D.v)(A.Z.RTC_PANEL, D.d.CHANNEL_LINK);
            }),
            eY(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, v.jW)(e, async () => {
                    let { default: e } = await n.e("56944").then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(Z.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eq(eW({}, n), {
                                    channel: t,
                                    onInteraction: (0, M.u)("RTCConnectionMenu", A.Z.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eY(this, "handleCloseVoicePanelIntroduction", () => {
                Y.Kw(eB.v.VOICE_PANEL_INTRODUCTION);
            }),
            eY(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(ez.voicePanelIntroductionWrapper, "theme-light"),
                    children: [
                        (0, r.jsx)(E.Heading, {
                            className: ez.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: eF.intl.string(eF.t["ba/rL2"]),
                        }),
                        (0, r.jsx)(E.Text, {
                            className: ez.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: eF.intl.string(eF.t.Ne1Eew),
                        }),
                        (0, r.jsx)(E.Button, {
                            fullWidth: !0,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            text: eF.intl.string(eF.t.shaBeH),
                            focusProps: eQ,
                        }),
                    ],
                }),
            );
    }
}
function e5(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: o } = (0, Z.ZP)(),
        { play: s, Component: c, events: u } = (0, m.P)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => s(), [l, s]),
        (0, r.jsx)(
            eR.Z,
            eq(eW({}, t), {
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
                tooltipText: n ? null : eF.intl.string(eF.t.vFiCSx),
                icon: (0, r.jsx)(c, { size: "refresh_sm" }),
            }),
        )
    );
}
let e2 = (0, I.Z)(function (e) {
    let t = (0, B.Z)(),
        n = (0, u.e7)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([eP.default], () => eP.default.getCurrentUser()),
        a = (0, u.cj)([eN.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eU.IE4.FINE,
                      rtcConnectionState: eU.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eN.Z.getChannelId(),
                      rtcConnectionQuality: eN.Z.getQuality(),
                      rtcConnectionState: eN.Z.getState(),
                      rtcConnectionLastPing: eN.Z.getLastPing(),
                  },
        ),
        { channelId: o } = a,
        s = eK(a, ["channelId"]),
        c = (0, u.e7)([ey.Z], () => ey.Z.getChannel(o), [o]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([eI.Z], () => eI.Z.getGuild(d), [d]),
        f = (0, u.cj)([eS.Z], () => ({
            noiseCancellationSupported: eS.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eS.Z.getNoiseCancellation(),
            noiseCancellationError: eS.Z.isNoiseCancellationError(),
            canGoLive: (0, F.Z)(eS.Z),
        })),
        g = (0, u.e7)(
            [eS.Z, W.Z],
            () =>
                W.Z.hasHotspot(eB.v.VOICE_PANEL_INTRODUCTION) &&
                (0, eL.EO)(l) &&
                !eS.Z.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        h = (0, u.e7)([ex.Z], () => null != o && ex.Z.hasVideo(o), [o]),
        m = (0, u.e7)([eO.Z], () => eO.Z.getCurrentUserActiveStream()),
        b = (0, u.e7)([eC.Z], () => eC.Z.hasLayers()),
        _ = (0, u.e7)([q.Z], () => q.Z.isViewingRoles(d)),
        O = (0, u.e7)([eT.Z], () => _ && !eT.Z.can(eU.Plq.VIEW_CHANNEL, c), [_, c]),
        v = eu.Fg.useSetting(),
        [y, I, C] = (0, u.Wu)(
            [eA.ZP, er.Z],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [er.Z.getMutableParticipants(c.id, ei.pV.SPEAKER), er.Z.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? eA.ZP.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        S = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null !=
                    (e =
                        null == y
                            ? void 0
                            : y.map((e) => {
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
        }, [y, I, C]),
        [N, j] = i.useState(!1);
    i.useEffect(() => {
        (_ || O) && j(!1);
    }, [_, O, j]);
    let { analyticsLocations: x } = (0, Z.ZP)(A.Z.RTC_PANEL),
        w = (0, T.Z)(null != d ? d : eU.lds, null == c ? void 0 : c.id),
        L = (0, P.Z)(null == c ? void 0 : c.id),
        R = (0, X.A)({ location: "RTCConnection" }),
        D = (0, $.Z)({
            channelId: null == c ? void 0 : c.id,
            location: "RTCConnection",
        });
    return (0, r.jsx)(Z.Gt, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: ez.wrapper,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(V.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n,
                      })
                    : null,
                (0, r.jsx)(
                    e8,
                    eq(eW({}, e, f, s), {
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
                        analyticsLocations: x,
                    }),
                ),
                !N && _ && null != d
                    ? (0, r.jsxs)("div", {
                          className: ez.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(E.Text, {
                                  variant: "text-sm/normal",
                                  className: ez.viewAsRolesWarningText,
                                  children: O ? eF.intl.string(eF.t.efjuQJ) : eF.intl.string(eF.t.br8H2N),
                              }),
                              (0, r.jsx)(E.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      j(!0);
                                  },
                                  text: eF.intl.string(eF.t.WAI6xu),
                                  focusProps: eQ,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
