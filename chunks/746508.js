n.d(t, { Z: () => e7 }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(319498),
    u = n(442837),
    d = n(704215),
    p = n(749280),
    f = n(996146),
    g = n(864094),
    h = n(75735),
    m = n(382600),
    _ = n(755721),
    b = n(481060),
    E = n(846027),
    O = n(239091),
    v = n(925549),
    y = n(730749),
    I = n(911969),
    C = n(317381),
    S = n(596040),
    T = n(314490),
    N = n(374065),
    j = n(451576),
    P = n(119315),
    x = n(100527),
    A = n(906732),
    Z = n(397698),
    w = n(130067),
    L = n(793865),
    R = n(522651),
    D = n(795318),
    M = n(933557),
    k = n(600164),
    U = n(243778),
    G = n(258609),
    B = n(446226),
    H = n(935261),
    V = n(74299),
    F = n(803647),
    z = n(142497),
    Y = n(810788),
    W = n(160404),
    q = n(728285),
    K = n(703656),
    Q = n(917405),
    J = n(813405),
    X = n(675547),
    $ = n(621586),
    ee = n(641015),
    et = n(848543),
    en = n(565799),
    er = n(501655),
    ei = n(368442),
    el = n(255726),
    ea = n(485287),
    es = n(754277),
    eo = n(590415),
    ec = n(695346),
    eu = n(923973),
    ed = n(829750),
    ep = n(189771),
    ef = n(544384),
    eg = n(560688),
    eh = n(127608),
    em = n(76021),
    e_ = n(173507),
    eb = n(25827),
    eE = n(199902),
    eO = n(314897),
    ev = n(592125),
    ey = n(430824),
    eI = n(819640),
    eC = n(131951),
    eS = n(496675),
    eT = n(19780),
    eN = n(699516),
    ej = n(594174),
    eP = n(979651),
    ex = n(938475),
    eA = n(626135),
    eZ = n(63063),
    ew = n(51144),
    eL = n(870569),
    eR = n(345243),
    eD = n(594117),
    eM = n(226323),
    ek = n(981631),
    eU = n(354459),
    eG = n(921944),
    eB = n(190378),
    eH = n(345655),
    eV = n(388032),
    eF = n(890332),
    ez = n(197571);
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
    eA.default.track(ek.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ek.jXE.NOISE_CANCELLATION_POPOUT },
    });
}
function eX() {
    let e = i.useRef(null);
    (0, b.Tbt)(e),
        i.useEffect(() => {
            eA.default.track(ek.rMx.OPEN_POPOUT, { type: ek.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.e7)([eC.Z], () => eC.Z.getNoiseCancellation()),
        n = (0, u.e7)([eC.Z], () => eC.Z.getActiveInputProfile()),
        l = null != n && n !== eH._.CUSTOM;
    return (0, r.jsxs)("div", {
        ref: e,
        className: eF.noiseCancellationPopout,
        children: [
            (0, r.jsx)(b.aML, {
                "data-migration-pending": !0,
                text: eV.intl.formatToPlainString(eV.t["/tqmfM"], {
                    enabled: t ? "true" : "false",
                    inputProfile: n,
                }),
                shouldShow: l,
                align: "right",
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        eq(eW({}, e), {
                            children: (0, r.jsx)(b.rsf, {
                                label: eV.intl.string(eV.t["WGWHv/"]),
                                checked: t,
                                disabled: l,
                                onChange: () =>
                                    E.Z.setNoiseCancellation(!t, { section: ek.jXE.NOISE_CANCELLATION_POPOUT }),
                            }),
                        }),
                    ),
            }),
            (0, r.jsx)(b.Text, {
                variant: "text-sm/normal",
                children: eV.intl.string(eV.t.uKdWn6),
            }),
            (0, r.jsx)(w.Z, {
                title: eV.intl.string(eV.t.JdUas1),
                notchBackground: w._.BLACK,
                buttonTest: eV.intl.string(eV.t["sG+MGg"]),
                buttonStop: eV.intl.string(eV.t.Yp3SbJ),
                location: { section: ek.jXE.NOISE_CANCELLATION_POPOUT },
            }),
            (0, r.jsx)("div", {
                className: a()(ez.marginBottom8, ez.marginTop20),
                children: (0, r.jsx)(b.gNt, {
                    label: eV.intl.string(eV.t.k6h1F4),
                    children: (0, r.jsxs)(k.Z, {
                        justify: k.Z.Justify.BETWEEN,
                        className: eF.__invalid_footer,
                        children: [
                            (0, r.jsx)(b.Anchor, {
                                href: ek.EYA.KRISP,
                                onClick: (e) => eJ(e),
                                children: (0, r.jsx)("div", { className: eF.krispLogo }),
                            }),
                            (0, r.jsx)(b.Anchor, {
                                href: eZ.Z.getArticleURL(ek.BhN.NOISE_SUPPRESSION),
                                className: eF.krispLink,
                                onClick: (e) => eJ(e),
                                children: eV.intl.string(eV.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function e$() {
    let { parentAnalyticsLocation: e } = (0, A.ZP)(),
        t = (0, u.e7)([es.Z], () => es.Z.isMuted()),
        n = t ? eV.intl.string(eV.t.ScHlfl) : eV.intl.string(eV.t.zqxfrf);
    return (0, r.jsx)(eL.Z, {
        "aria-label": n,
        tooltipText: n,
        icon: t ? b.xjP : b.RZG,
        onClick: () => {
            (0, R.v)(e, R.d.STAGE_MUSIC, t), (0, el.v)(!t);
        },
    });
}
function e0(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = i.useRef(null),
        { parentAnalyticsLocation: o } = (0, A.ZP)(),
        c = (0, eu.Z)(),
        d = (0, ep.Z)(t),
        p = (0, u.e7)(
            [C.ZP],
            () => null != C.ZP.getSelfEmbeddedActivityForLocation(C.ZP.getConnectedActivityLocation()),
        ),
        f = (0, ee.Z)(t),
        { reachedLimit: g, limit: m } = (0, ed.Z)(t),
        O = i.useCallback(() => {
            (0, eg.Z)();
        }, []),
        v = (0, q.bp)(),
        y = i.useCallback(
            (e) => {
                if (eC.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    E.Z.setVideoEnabled(e),
                        e && (0, K.uL)(ek.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : ek.ME, t.id));
                };
                (0, R.v)(o, R.d.CAMERA, e), e ? (0, e_.Z)(n, v) : n();
            },
            [t, v, o],
        ),
        I = p || n || f,
        { Component: S, play: T, events: N } = (0, h.o)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => T(), [c.enabled, T]),
        (0, r.jsx)(
            eb.Z,
            eq(
                eW(
                    {
                        onChange: y,
                        onCameraUnavailable: O,
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
                        let d = (0, r.jsx)(S, {
                            size: "md",
                            className: a()(eF.buttonIcon, { [eF.withText]: !I }),
                            color: "currentColor",
                        });
                        return (0, r.jsx)(b.yRy, {
                            targetElementRef: s,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(L.Z, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, D.u)("VideoDeviceMenu", o),
                                });
                            },
                            position: "top",
                            align: "center",
                            animation: b.yRy.Animation.FADE,
                            children: (e, l) => {
                                var { onClick: o } = e,
                                    c = eK(e, ["onClick"]),
                                    { isShown: p } = l;
                                return (0, r.jsx)(b.aML, {
                                    "data-migration-pending": !0,
                                    text: i,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            _.zx,
                                            eq(
                                                eW(
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
                                                    size: _.zx.Sizes.MEDIUM,
                                                    className: a()(eF.button, eF.buttonColor, {
                                                        [eF.buttonActive]: n,
                                                        [eF.fauxDisabled]: t,
                                                        [eF.disabled]: u.disabled,
                                                    }),
                                                    innerClassName: eF.buttonContents,
                                                    wrapperClassName: eF.button,
                                                    fullWidth: !0,
                                                    focusProps: eQ,
                                                    children: I
                                                        ? d
                                                        : (0, r.jsxs)(k.Z, {
                                                              align: k.Z.Align.CENTER,
                                                              children: [d, eV.intl.string(eV.t.FlNoSV)],
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
        i = (0, q.bp)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, A.ZP)(),
        o = i === ek.IlC.POPOUT,
        c = (0, N.KF)(t.id),
        f = (0, N.g5)(c),
        { userInActivity: g } = (0, u.cj)([C.ZP], () => ({
            userInActivity: null != C.ZP.getSelfEmbeddedActivityForChannel(t.id),
        })),
        h = (0, T.p)({
            surface: I.eR.VOICE_LAUNCHER,
            skipFetchingShelf: !0,
        }),
        m = c !== N.jy.CAN_LAUNCH,
        { Component: E, events: O, play: v } = (0, p.w)();
    return n
        ? (0, r.jsx)(b.aML, {
              "data-migration-pending": !0,
              text: f,
              children: (e) =>
                  (0, r.jsx)(U.Xf, {
                      contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                      latestVersion: h,
                      children: (n) => {
                          let { visibleContent: i, markAsDismissed: c } = n;
                          return (0, r.jsxs)(
                              _.zx,
                              eq(
                                  eW(
                                      eq(eW({ "data-migration-pending": !0 }, e), {
                                          fullWidth: !0,
                                          size: _.zx.Sizes.MEDIUM,
                                      }),
                                      O,
                                  ),
                                  {
                                      onClick: () => {
                                          var n;
                                          v(),
                                              (0, Z.Z)({
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
                                              (0, R.v)(l, R.d.ACTIVITY),
                                              i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(eG.L.TAKE_ACTION);
                                      },
                                      onMouseEnter: () => {
                                          var t;
                                          O.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                                      },
                                      onMouseLeave: () => {
                                          var t;
                                          O.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e);
                                      },
                                      disabled: m,
                                      className: a()(eF.button, eF.buttonColor, {
                                          [eF.buttonActive]: g,
                                          [eF.disabled]: m,
                                      }),
                                      innerClassName: eF.buttonContents,
                                      wrapperClassName: eF.button,
                                      focusProps: eQ,
                                      children: [
                                          i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                              (0, r.jsx)(P.r, {
                                                  top: -1,
                                                  right: -1,
                                              }),
                                          (0, r.jsx)(E, {
                                              size: "md",
                                              color: "currentColor",
                                              className: eF.buttonIcon,
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
function e4(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        { parentAnalyticsLocation: l } = (0, A.ZP)(),
        s = (0, f.$)(),
        {
            Component: o,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: p },
        } = s,
        g = eK(s.events, ["onMouseEnter", "onMouseLeave"]),
        [h, m] = i.useState(!1),
        [E, O] = (0, U.US)([d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        v = i.useCallback(() => {
            m(!1);
        }, []),
        y = i.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)($.Z, {
                    channel: t,
                    closePopout: n,
                    isHovered: h,
                });
            },
            [t, h],
        ),
        I = i.useCallback(() => {
            c(),
                h ? m(!1) : m(!0),
                (0, R.v)(l, R.d.GIFTING),
                E === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE && O(eG.L.TAKE_ACTION);
        }, [l, c, h, E, O]);
    return (0, r.jsx)(b.aML, {
        "data-migration-pending": !0,
        text: eV.intl.string(eV.t.PEjaCx),
        shouldShow: !h,
        onTooltipShow: u,
        onTooltipHide: p,
        children: (e) =>
            (0, r.jsx)(b.yRy, {
                targetElementRef: n,
                shouldShow: h,
                animation: b.yRy.Animation.FADE,
                animationPosition: "top",
                position: "top",
                align: "left",
                onRequestClose: v,
                renderPopout: y,
                children: () =>
                    (0, r.jsxs)(
                        _.zx,
                        eq(
                            eW(
                                eq(eW({ "data-migration-pending": !0 }, e), {
                                    fullWidth: !0,
                                    size: _.zx.Sizes.MEDIUM,
                                    buttonRef: n,
                                }),
                                g,
                            ),
                            {
                                onClick: I,
                                className: a()(eF.button, eF.buttonColor),
                                innerClassName: eF.buttonContents,
                                wrapperClassName: eF.button,
                                focusProps: eQ,
                                children: [
                                    E === d.z.GAME_SHOP_RTC_GIFTING_NEW_BADGE &&
                                        (0, r.jsx)(P.r, {
                                            top: -4,
                                            right: -4,
                                            alert: !0,
                                        }),
                                    (0, r.jsx)(o, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eF.buttonIcon,
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
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: p } = (0, A.ZP)(),
        f = (0, u.e7)([ej.default], () => ej.default.getCurrentUser()),
        h = (0, u.Wu)([eE.Z], () => eE.Z.getAllActiveStreams()),
        m = (0, ep.Z)(n),
        E = n.getGuildId(),
        O = (0, u.cj)([C.ZP], () => null != C.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        v = (0, ee.Z)(n),
        y = i.useCallback(() => {
            (0, em.Z)(E, n.id, p);
        }, [E, n.id, p]),
        I = h.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        S = (0, ef.E)(n, f, h);
    t = null == I ? (l ? y : eh.Z) : () => (0, F.Z)(I);
    let T = null != I || S.length > 0,
        N = m ? eV.intl.string(eV.t.fjBNo1) : eV.intl.string(eV.t.uQn9B8),
        j = O || s || v,
        P = null != I,
        { Component: x, events: Z, play: w } = (0, g.P)(P ? "disable" : "enable");
    i.useEffect(() => () => w(), [w, P]);
    let L = (0, r.jsx)(x, {
        size: "md",
        color: "currentColor",
        className: a()(eF.buttonIcon, { [eF.withText]: !j }),
    });
    return (0, r.jsx)(b.yRy, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ef.Z, {
                channel: n,
                currentUser: f,
                activeStreams: h,
                onClose: t,
                handleGoLive: l ? y : eh.Z,
                onInteraction: (0, D.u)("ManageStreamsMenu", d, { entrypoint: eU.A5.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: b.yRy.Animation.FADE,
        children: (e) => {
            var { onClick: n, onMouseEnter: i } = e,
                l = eK(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(b.aML, {
                "data-migration-pending": !0,
                text: N,
                children: (e) =>
                    (0, r.jsx)(
                        _.zx,
                        eq(
                            eW(
                                eq(eW({ "data-migration-pending": !0 }, e), {
                                    buttonRef: c,
                                    size: _.zx.Sizes.MEDIUM,
                                    onClick: (r) => {
                                        var i;
                                        (0, R.v)(d, R.d.STREAM, null == I),
                                            T ? n(r) : t(),
                                            null == (i = e.onClick) || i.call(e);
                                    },
                                    disabled: !m || o,
                                    className: a()(eF.button, eF.buttonColor, {
                                        [eF.buttonActive]: null != I,
                                        [eF.disabled]: !m || o,
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
                                innerClassName: eF.buttonContents,
                                wrapperClassName: eF.button,
                                focusProps: eQ,
                                children: j
                                    ? L
                                    : (0, r.jsxs)(k.Z, {
                                          align: k.Z.Align.CENTER,
                                          children: [L, eV.intl.string(eV.t["r0/+v7"])],
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
                hasVideo: s,
            } = this.props;
        if (null == t) return null;
        let o = (0, M.F6)(t, ej.default, eN.Z);
        return (
            null != n
                ? ((e = ek.Z5c.CHANNEL(n.id, t.id)), (o = "".concat(o, " / ").concat(n.name)))
                : (e = ek.Z5c.CHANNEL(ek.ME, t.id)),
            (0, r.jsx)(Q.Z, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, r.jsx)(b.tEY, {
                    children: (0, r.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(eR.Z, {
                            className: eF.channel,
                            children: (0, r.jsx)(b.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
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
                    a.find((e) => e.user.id === eO.default.getId() && (0, eo.gf)(e.voiceState) === eo.xO.ON_STAGE) &&
                (0, ea.U5)(l.id)
              ? (0, r.jsx)(e$, {})
              : !n && t
                ? (0, r.jsx)(b.aML, {
                      "data-migration-pending": !0,
                      text: eV.intl.string(eV.t["i+SO/U"]),
                      tooltipClassName: eF.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { "aria-label": t } = e;
                          return (0, r.jsx)(eL.Z, {
                              "aria-label": t,
                              tooltipText: null,
                              disabled: !0,
                              icon: b.oIc,
                          });
                      },
                  })
                : (0, r.jsx)(
                      b.yRy,
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
            ? (0, r.jsx)(eM.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eF.voiceUsers,
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
            showSocialLayerStorefrontGiftingButton: o,
        } = this.props;
        if (null == e || null != n) return null;
        let c = eO.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ei.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || s) && i,
            { reachedLimit: d } = (0, ed.t)(e),
            p = (0, ei.xJ)(e.id);
        return (0, r.jsxs)("div", {
            className: eF.actionButtons,
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
                u && !o
                    ? (0, r.jsx)(e1, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                o ? (0, r.jsx)(e4, { channel: e }) : null,
                (0, ee.Z)(e)
                    ? (0, r.jsx)(et.Z, {
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
            : (0, r.jsx)(b.yRy, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: b.yRy.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)("div", {
                          ref: this.ref,
                          className: eF.container,
                          children: [
                              (0, r.jsxs)(k.Z, {
                                  className: eF.connection,
                                  align: k.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eF.inner,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(k.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eF.voiceButtonsContainer,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, r.jsx)(eD.Z, { channel: e }),
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
                o()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    v.Z.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : ek.ME, r.id),
                    (0, R.v)(x.Z.RTC_PANEL, R.d.CHANNEL_LINK);
            }),
            eY(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, O.jW)(e, async () => {
                    let { default: e } = await n.e("56944").then(n.bind(n, 600830));
                    return (n) =>
                        (0, r.jsx)(A.Gt, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eq(eW({}, n), {
                                    channel: t,
                                    onInteraction: (0, D.u)("RTCConnectionMenu", x.Z.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eY(this, "handleCloseVoicePanelIntroduction", () => {
                z.Kw(eB.v.VOICE_PANEL_INTRODUCTION);
            }),
            eY(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(eF.voicePanelIntroductionWrapper, "theme-light"),
                    children: [
                        (0, r.jsx)(b.Heading, {
                            className: eF.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: eV.intl.string(eV.t["ba/rL2"]),
                        }),
                        (0, r.jsx)(b.Text, {
                            className: eF.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: eV.intl.string(eV.t.Ne1Eew),
                        }),
                        (0, r.jsx)(b.Button, {
                            fullWidth: !0,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            text: eV.intl.string(eV.t.shaBeH),
                            focusProps: eQ,
                        }),
                    ],
                }),
            );
    }
}
function e5(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, A.ZP)(),
        { play: o, Component: c, events: u } = (0, m.P)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            eL.Z,
            eq(eW({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, R.v)(s, R.d.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipClassName: eF.noiseCancellationTooltip,
                tooltipText: n ? null : eV.intl.string(eV.t.vFiCSx),
                icon: (0, r.jsx)(c, { size: "refresh_sm" }),
            }),
        )
    );
}
let e7 = (0, y.Z)(function (e) {
    let t = (0, B.Z)(),
        n = (0, u.e7)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.e7)([ej.default], () => ej.default.getCurrentUser()),
        a = (0, u.cj)([eT.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: ek.IE4.FINE,
                      rtcConnectionState: ek.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eT.Z.getChannelId(),
                      rtcConnectionQuality: eT.Z.getQuality(),
                      rtcConnectionState: eT.Z.getState(),
                      rtcConnectionLastPing: eT.Z.getLastPing(),
                  },
        ),
        { channelId: s } = a,
        o = eK(a, ["channelId"]),
        c = (0, u.e7)([ev.Z], () => ev.Z.getChannel(s), [s]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.e7)([ey.Z], () => ey.Z.getGuild(d), [d]),
        f = (0, u.cj)([eC.Z], () => ({
            noiseCancellationSupported: eC.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eC.Z.getNoiseCancellation(),
            noiseCancellationError: eC.Z.isNoiseCancellationError(),
            canGoLive: (0, V.Z)(eC.Z),
        })),
        g = (0, u.e7)(
            [eC.Z, Y.Z],
            () =>
                Y.Z.hasHotspot(eB.v.VOICE_PANEL_INTRODUCTION) &&
                (0, ew.EO)(l) &&
                !eC.Z.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        h = (0, u.e7)([eP.Z], () => null != s && eP.Z.hasVideo(s), [s]),
        m = (0, u.e7)([eE.Z], () => eE.Z.getCurrentUserActiveStream()),
        _ = (0, u.e7)([eI.Z], () => eI.Z.hasLayers()),
        E = (0, u.e7)([W.Z], () => W.Z.isViewingRoles(d)),
        O = (0, u.e7)([eS.Z], () => E && !eS.Z.can(ek.Plq.VIEW_CHANNEL, c), [E, c]),
        v = ec.Fg.useSetting(),
        [y, I, C] = (0, u.Wu)(
            [ex.ZP, en.Z],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [en.Z.getMutableParticipants(c.id, er.pV.SPEAKER), en.Z.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? ex.ZP.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        T = i.useMemo(() => {
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
        [N, P] = i.useState(!1);
    i.useEffect(() => {
        (E || O) && P(!1);
    }, [E, O, P]);
    let { analyticsLocations: Z } = (0, A.ZP)(x.Z.RTC_PANEL),
        w = (0, S.Z)(null != d ? d : ek.lds, null == c ? void 0 : c.id),
        L = (0, j.Z)(null == c ? void 0 : c.id),
        R = (0, J.A)({ location: "RTCConnection" }),
        D = (0, X.Z)({
            channelId: null == c ? void 0 : c.id,
            location: "RTCConnection",
        });
    return (0, r.jsx)(A.Gt, {
        value: Z,
        children: (0, r.jsxs)("div", {
            className: eF.wrapper,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(H.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n,
                      })
                    : null,
                (0, r.jsx)(
                    e8,
                    eq(eW({}, e, f, o), {
                        enableActivities: w,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: h,
                        selfStream: m,
                        hasLayers: _,
                        voiceStates: T,
                        showVoiceStates: v,
                        shouldShowVoicePanelIntroduction: g,
                        showSocialLayerStorefrontGiftingButton: (R && D) || !0,
                        isPrivateChannelWithEnabledActivities: L,
                        analyticsLocations: Z,
                    }),
                ),
                !N && E && null != d
                    ? (0, r.jsxs)("div", {
                          className: eF.viewAsRolesWarning,
                          children: [
                              (0, r.jsx)(b.Text, {
                                  variant: "text-sm/normal",
                                  className: eF.viewAsRolesWarningText,
                                  children: O ? eV.intl.string(eV.t.efjuQJ) : eV.intl.string(eV.t.br8H2N),
                              }),
                              (0, r.jsx)(b.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      P(!0);
                                  },
                                  text: eV.intl.string(eV.t.WAI6xu),
                                  focusProps: eQ,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
