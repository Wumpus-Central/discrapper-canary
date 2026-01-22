n.d(t, {
    A: () => e2,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(758879),
    u = n(311907),
    d = n(554146),
    p = n(697744),
    f = n(533781),
    h = n(416696),
    A = n(446080),
    g = n(385278),
    m = n(435371),
    b = n(421380),
    _ = n(397927),
    E = n(827343),
    O = n(442433),
    y = n(951001),
    I = n(707606),
    v = n(155718),
    S = n(933958),
    C = n(967812),
    N = n(404522),
    T = n(782091),
    j = n(641703),
    x = n(521588),
    P = n(793574),
    w = n(688810),
    L = n(975412),
    R = n(17143),
    D = n(750765),
    M = n(384059),
    k = n(480890),
    U = n(47167),
    G = n(235986),
    V = n(379848),
    B = n(643501),
    H = n(857253),
    F = n(41261),
    Y = n(880144),
    K = n(338771),
    z = n(421838),
    W = n(891540),
    q = n(164956),
    Q = n(267102),
    X = n(3527),
    Z = n(976860),
    J = n(178442),
    $ = n(104357),
    ee = n(478564),
    et = n(729081),
    en = n(123973),
    er = n(477835),
    ei = n(63995),
    el = n(69407),
    ea = n(96566),
    es = n(302884),
    eo = n(30108),
    ec = n(39938),
    eu = n(105530),
    ed = n(253932),
    ep = n(151476),
    ef = n(405018),
    eh = n(927258),
    eA = n(848362),
    eg = n(222692),
    em = n(702904),
    eb = n(471993),
    e_ = n(442353),
    eE = n(970636),
    eO = n(616356),
    ey = n(961350),
    eI = n(734057),
    ev = n(71393),
    eS = n(186111),
    eC = n(430452),
    eN = n(576705),
    eT = n(383501),
    ej = n(994500),
    ex = n(287809),
    eP = n(977997),
    ew = n(607567),
    eL = n(954571),
    eR = n(975571),
    eD = n(427262),
    eM = n(42473),
    ek = n(994314),
    eU = n(40234),
    eG = n(253742),
    eV = n(652215),
    eB = n(806931),
    eH = n(49999),
    eF = n(897513),
    eY = n(509381),
    eK = n(985018),
    ez = n(255259);

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

function eq(e) {
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

function eQ(e, t) {
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

function eX(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let eZ = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1,
    },
};

function eJ(e) {
    let t = e.currentTarget;
    eL.default.track(eV.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            section: eV.JJy.NOISE_CANCELLATION_POPOUT,
        },
    });
}

function e$() {
    let e = i.useRef(null);
    (0, _.tjt)(e),
        i.useEffect(() => {
            eL.default.track(eV.HAw.OPEN_POPOUT, {
                type: eV.JJy.NOISE_CANCELLATION_POPOUT,
            });
        }, []);
    let { noiseCancellationActive: t, systemMicrophoneMode: n } = (0, u.cf)([eC.A], () => ({
            noiseCancellationActive: eC.A.getNoiseCancellation(),
            systemMicrophoneMode: eC.A.getSystemMicrophoneMode(),
        })),
        l = !(0, X.A)(!0, n, {
            location: "NoiseCancellationPopout",
        }),
        a = (0, u.bG)([eC.A], () => eC.A.getActiveInputProfile()),
        s = null != a && a !== eY.my.CUSTOM,
        o = eK.intl.string(eK.t.uKdWn6),
        c = eK.intl.string(eK.t.uKdWn6);
    return (
        l
            ? ((o = eK.intl.string(eK.t.mXZgC9)),
              (c = eK.intl.format(eK.t.F6lrb4, {
                  onSettingsClick: () => {
                      eC.A.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : s &&
              (o = eK.intl.formatToPlainString(eK.t["/tqmfM"], {
                  enabled: t ? "true" : "false",
                  inputProfile: a,
              })),
        (0, r.jsxs)("div", {
            ref: e,
            className: ez.dD,
            children: [
                (0, r.jsx)(m.m_, {
                    text: o,
                    shouldShow: s || l,
                    align: "right",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(_.dOG, {
                            label: eK.intl.string(eK.t["WGWHv/"]),
                            checked: t && !l,
                            disabled: s || l,
                            onChange: () =>
                                E.A.setNoiseCancellation(!t, {
                                    section: eV.JJy.NOISE_CANCELLATION_POPOUT,
                                }),
                        }),
                    }),
                }),
                (0, r.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    children: c,
                }),
                (0, r.jsx)(R.A, {
                    title: eK.intl.string(eK.t.JdUas1),
                    notchBackground: R.V.BLACK,
                    buttonTest: eK.intl.string(eK.t["sG+MGg"]),
                    buttonStop: eK.intl.string(eK.t.Yp3SbJ),
                    location: {
                        section: eV.JJy.NOISE_CANCELLATION_POPOUT,
                    },
                }),
                (0, r.jsx)(_.D0$, {
                    label: eK.intl.string(eK.t.k6h1F4),
                    children: (0, r.jsxs)(G.A, {
                        justify: G.A.Justify.BETWEEN,
                        className: ez.__invalid_footer,
                        children: [
                            (0, r.jsx)(_.MzZ, {
                                href: eV.X7G.KRISP,
                                onClick: (e) => eJ(e),
                                children: (0, r.jsx)("div", {
                                    className: ez.zQ,
                                }),
                            }),
                            (0, r.jsx)(_.MzZ, {
                                href: eR.A.getArticleURL(eV.MVz.NOISE_SUPPRESSION),
                                className: ez.W,
                                onClick: (e) => eJ(e),
                                children: eK.intl.string(eK.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}

function e0() {
    let { parentAnalyticsLocation: e } = (0, w.Ay)(),
        t = (0, u.bG)([ec.A], () => ec.A.isMuted()),
        n = t ? eK.intl.string(eK.t.ScHlfl) : eK.intl.string(eK.t.zqxfrf);
    return (0, r.jsx)(eM.A, {
        tooltipText: n,
        icon: t ? _.CIB : _.T7G,
        onClick: () => {
            (0, M.X)(e, M.O.STAGE_MUSIC, t), (0, es.k)(!t);
        },
    });
}

function e1(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = i.useRef(null),
        { parentAnalyticsLocation: o } = (0, w.Ay)(),
        c = (0, ep.A)(),
        d = (0, eh.A)(t),
        p = (0, u.bG)(
            [S.Ay],
            () => null != S.Ay.getSelfEmbeddedActivityForLocation(S.Ay.getConnectedActivityLocation()),
        ),
        f = (0, en.A)(t),
        { reachedLimit: h, limit: g } = (0, ef.A)(t),
        O = i.useCallback(() => {
            (0, eg.A)();
        }, []),
        y = (0, Q.Us)(),
        I = i.useCallback(
            (e) => {
                if (eC.A.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    E.A.setVideoEnabled(e),
                        e && (0, Z.pX)(eV.BVt.CHANNEL(null != (n = t.getGuildId()) ? n : eV.ME, t.id));
                };
                (0, M.X)(o, M.O.CAMERA, e), e ? (0, e_.A)(n, y) : n();
            },
            [t, y, o],
        ),
        v = p || n || f,
        { Component: C, play: N, events: T } = (0, A.K)(c.enabled ? "disable" : "enable");
    return (
        i.useEffect(() => () => N(), [c.enabled, N]),
        (0, r.jsx)(
            eE.r,
            eQ(
                eq(
                    {
                        onChange: I,
                        onCameraUnavailable: O,
                        hasPermission: d,
                        channelLimit: g,
                        channelLimitReached: h,
                    },
                    c,
                ),
                {
                    enabled: !l && c.enabled,
                    children: (e) => {
                        let { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: c } = e,
                            u = eX(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]),
                            d = (0, r.jsx)(C, {
                                size: "md",
                                className: a()(ez.iA, {
                                    [ez.ij]: !v,
                                }),
                                color: "currentColor",
                            });
                        return (0, r.jsx)(_.YNO, {
                            targetElementRef: s,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(D.A, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: (0, k.s)("VideoDeviceMenu", o),
                                });
                            },
                            position: "top",
                            align: "center",
                            animation: _.YNO.Animation.FADE,
                            children: (e, l) => {
                                let [o, ...c] = [e, l],
                                    { onClick: p } = o,
                                    f = eX(o, ["onClick"]),
                                    [{ isShown: h }] = c;
                                return (0, r.jsx)(m.m_, {
                                    text: i,
                                    children: (0, r.jsx)(
                                        b.$n,
                                        eQ(
                                            eq(
                                                {
                                                    "data-migration-pending": !0,
                                                    buttonRef: s,
                                                },
                                                u,
                                                f,
                                            ),
                                            {
                                                onClick: (e) => {
                                                    u.onClick(e), h && p(e);
                                                },
                                                onMouseEnter: () => {
                                                    var e;
                                                    null == (e = f.onMouseEnter) || e.call(f), T.onMouseEnter();
                                                },
                                                onMouseLeave: () => {
                                                    T.onMouseLeave();
                                                },
                                                onContextMenu: (e) => {
                                                    p(e);
                                                },
                                                size: b.$n.Sizes.MEDIUM,
                                                className: a()(ez.x6, ez.Sq, {
                                                    [ez.rK]: n,
                                                    [ez.tU]: t,
                                                    [ez.r9]: u.disabled,
                                                }),
                                                innerClassName: ez.bk,
                                                wrapperClassName: ez.x6,
                                                fullWidth: !0,
                                                focusProps: eZ,
                                                children: v
                                                    ? d
                                                    : (0, r.jsxs)(G.A, {
                                                          align: G.A.Align.CENTER,
                                                          children: [d, eK.intl.string(eK.t.FlNoSV)],
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

function e6(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, Q.Us)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, w.Ay)(),
        o = i === eV.BRT.POPOUT,
        c = (0, T.et)(t.id),
        f = (0, T.dL)(c),
        { userInActivity: h } = (0, u.cf)([S.Ay], () => ({
            userInActivity: null != S.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        A = (0, N.b)({
            surface: v.YI.VOICE_LAUNCHER,
            skipFetchingShelf: !0,
        }),
        g = c !== T.xy.CAN_LAUNCH,
        { Component: _, events: E, play: O } = (0, p.c)();
    return n
        ? (0, r.jsx)(V.GY, {
              contentType: d.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: A,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, r.jsx)(m.m_, {
                      text: f,
                      children: (0, r.jsxs)(
                          b.$n,
                          eQ(
                              eq(
                                  {
                                      "data-migration-pending": !0,
                                      fullWidth: !0,
                                      size: b.$n.Sizes.MEDIUM,
                                  },
                                  E,
                              ),
                              {
                                  onClick: () => {
                                      O(),
                                          (0, L.A)({
                                              context:
                                                  null != t
                                                      ? {
                                                            type: "channel",
                                                            channel: t,
                                                        }
                                                      : {
                                                            type: "contextless",
                                                        },
                                              openInPopout: o,
                                              analyticsLocation: s,
                                          }),
                                          (0, M.X)(l, M.O.ACTIVITY),
                                          n === d.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(eH.i.TAKE_ACTION);
                                  },
                                  onMouseEnter: () => {
                                      E.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      E.onMouseLeave();
                                  },
                                  disabled: g,
                                  className: a()(ez.x6, ez.Sq, {
                                      [ez.rK]: h,
                                      [ez.r9]: g,
                                  }),
                                  innerClassName: ez.bk,
                                  wrapperClassName: ez.x6,
                                  focusProps: eZ,
                                  children: [
                                      n === d.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                          (0, r.jsx)(x.a, {
                                              top: -1,
                                              right: -1,
                                          }),
                                      (0, r.jsx)(_, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ez.iA,
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

function e9(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        { parentAnalyticsLocation: l } = (0, w.Ay)(),
        { Component: s, play: o, events: c } = (0, f.T)(),
        { onMouseEnter: u, onMouseLeave: p } = c,
        h = eX(c, ["onMouseEnter", "onMouseLeave"]),
        [A, g] = i.useState(!1),
        [E, O] = (0, V.kn)([d.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        y = i.useCallback(() => {
            g(!1);
        }, []),
        I = i.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(et.A, {
                    channel: t,
                    closePopout: n,
                    isHovered: A,
                });
            },
            [t, A],
        ),
        v = i.useCallback(() => {
            o(),
                A ? g(!1) : g(!0),
                (0, M.X)(l, M.O.GIFTING),
                E === d.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && O(eH.i.TAKE_ACTION);
        }, [l, o, A, E, O]);
    return (0, r.jsx)(_.YNO, {
        targetElementRef: n,
        shouldShow: A,
        animation: _.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: y,
        renderPopout: I,
        children: () =>
            (0, r.jsx)(m.m_, {
                text: eK.intl.string(eK.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !A,
                onTooltipShow: u,
                onTooltipHide: p,
                children: (0, r.jsxs)(
                    b.$n,
                    eQ(
                        eq(
                            {
                                "data-migration-pending": !0,
                                fullWidth: !0,
                                size: b.$n.Sizes.MEDIUM,
                                buttonRef: n,
                            },
                            h,
                        ),
                        {
                            onClick: v,
                            className: a()(ez.x6, ez.Sq),
                            innerClassName: ez.bk,
                            wrapperClassName: ez.x6,
                            focusProps: eZ,
                            children: [
                                E === d.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE &&
                                    (0, r.jsx)(x.a, {
                                        top: -4,
                                        right: -4,
                                        alert: !0,
                                    }),
                                (0, r.jsx)(s, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ez.iA,
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}

function e7(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        c = i.useRef(null),
        { parentAnalyticsLocation: d, analyticsLocations: p } = (0, w.Ay)(),
        f = (0, u.bG)([ex.default], () => ex.default.getCurrentUser()),
        A = (0, u.yK)([eO.A], () => eO.A.getAllActiveStreams()),
        g = (0, eh.A)(n),
        E = n.getGuildId(),
        O = (0, u.cf)([S.Ay], () => null != S.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        y = (0, en.A)(n),
        I = i.useCallback(() => {
            (0, eb.A)(E, n.id, p);
        }, [E, n.id, p]),
        v = A.find((e) => e.ownerId === (null == f ? void 0 : f.id)),
        C = (0, eA.T)(n, f, A);
    t = null == v ? (l ? I : em.A) : () => (0, K.A)(v);
    let N = null != v || C.length > 0,
        T = g ? eK.intl.string(eK.t.fjBNo1) : eK.intl.string(eK.t.uQn9B8),
        j = O || s || y,
        x = null != v,
        { Component: P, events: L, play: R } = (0, h.c)(x ? "disable" : "enable");
    i.useEffect(() => () => R(), [R, x]);
    let D = (0, r.jsx)(P, {
        size: "md",
        color: "currentColor",
        className: a()(ez.iA, {
            [ez.ij]: !j,
        }),
    });
    return (0, r.jsx)(_.YNO, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eA.A, {
                channel: n,
                currentUser: f,
                activeStreams: A,
                onClose: t,
                handleGoLive: l ? I : em.A,
                onInteraction: (0, k.s)("ManageStreamsMenu", d, {
                    entrypoint: eB.GK.OTHER_BUTTON,
                }),
            });
        },
        position: "top",
        align: "center",
        animation: _.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: i } = e,
                l = eX(e, ["onClick", "onMouseEnter"]);
            return (0, r.jsx)(m.m_, {
                text: T,
                children: (0, r.jsx)(
                    b.$n,
                    eQ(
                        eq(
                            {
                                "data-migration-pending": !0,
                                buttonRef: c,
                                size: b.$n.Sizes.MEDIUM,
                                onClick: (e) => {
                                    (0, M.X)(d, M.O.STREAM, null == v), N ? n(e) : t();
                                },
                                disabled: !g || o,
                                className: a()(ez.x6, ez.Sq, {
                                    [ez.rK]: null != v,
                                    [ez.r9]: !g || o,
                                }),
                            },
                            N ? l : null,
                        ),
                        {
                            onMouseEnter: () => {
                                null == i || i(), L.onMouseEnter();
                            },
                            onMouseLeave: () => {
                                L.onMouseLeave();
                            },
                            innerClassName: ez.bk,
                            wrapperClassName: ez.x6,
                            focusProps: eZ,
                            children: j
                                ? D
                                : (0, r.jsxs)(G.A, {
                                      align: G.A.Align.CENTER,
                                      children: [D, eK.intl.string(eK.t["r0/+v7"])],
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
        let o = (0, U.m1)(t, ex.default, ej.A);
        return (
            null != n
                ? ((e = eV.BVt.CHANNEL(n.id, t.id)), (o = "".concat(o, " / ").concat(n.name)))
                : (e = eV.BVt.CHANNEL(eV.ME, t.id)),
            (0, r.jsx)(J.A, {
                channelId: t.id,
                quality: i,
                state: l,
                lastPing: a,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, r.jsx)(_.vN3, {
                    children: (0, r.jsx)(c.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, r.jsx)(ek.A, {
                            className: ez.Ix,
                            children: (0, r.jsx)(_.Text, {
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
                    a.find((e) => e.user.id === ey.default.getId() && (0, eu.eY)(e.voiceState) === eu.zF.ON_STAGE) &&
                (0, eo.Zl)(l.id)
              ? (0, r.jsx)(e0, {})
              : !n && t
                ? (0, r.jsx)(m.m_, {
                      text: eK.intl.string(eK.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, r.jsx)(eM.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: _.mXj,
                          "aria-label": eK.intl.string(eK.t["i+SO/U"]),
                      }),
                  })
                : (0, r.jsx)(
                      _.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, r.jsx)(e$, {}),
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
            ? (0, r.jsx)(eG.A, {
                  voiceStates: t,
                  channel: e,
                  className: ez.Xk,
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
        let c = ey.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ea.Bw)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let u = (e.isGuildVoice() || s) && i,
            { reachedLimit: d } = (0, ef.M)(e),
            p = (0, ea.xn)(e.id);
        return (0, r.jsxs)("div", {
            className: ez.uu,
            children: [
                (0, r.jsx)(e1, {
                    channel: e,
                    enableActivities: u,
                    disabled: !p && d,
                }),
                (0, r.jsx)(e7, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: u,
                    disabled: e.isGuildStageVoice() && ((p && null == a) || (!p && d)),
                }),
                u && !o
                    ? (0, r.jsx)(e6, {
                          channel: e,
                          enableActivities: i,
                      })
                    : null,
                o
                    ? (0, r.jsx)(e9, {
                          channel: e,
                      })
                    : null,
                (0, en.A)(e)
                    ? (0, r.jsx)(er.A, {
                          channel: e,
                          focusProps: eZ,
                      })
                    : null,
            ],
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(_.YNO, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: _.YNO.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, r.jsxs)("div", {
                          ref: this.ref,
                          className: ez.kL,
                          children: [
                              (0, r.jsxs)(G.A, {
                                  className: ez.FI,
                                  align: G.A.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ez.vW,
                                          children: this.renderConnectionStatus(),
                                      }),
                                      (0, r.jsxs)(G.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ez.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, r.jsx)(eU.A, {
                                                  channel: e,
                                              }),
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
                o()(null != r, "Channel is null during navigation click"),
                    e.stopPropagation(),
                    y.A.channelListScrollTo(null != (t = null == n ? void 0 : n.id) ? t : eV.ME, r.id),
                    (0, M.X)(P.A.RTC_PANEL, M.O.CHANNEL_LINK);
            }),
            eW(this, "handleChannelLinkContextMenu", (e) => {
                let { channel: t, analyticsLocations: i } = this.props;
                (0, O.L3)(e, async () => {
                    let { default: e } = await n.e("57550").then(n.bind(n, 576701));
                    return (n) =>
                        (0, r.jsx)(w.f5, {
                            value: i,
                            children: (0, r.jsx)(
                                e,
                                eQ(eq({}, n), {
                                    channel: t,
                                    onInteraction: (0, k.s)("RTCConnectionMenu", P.A.RTC_PANEL),
                                }),
                            ),
                        });
                });
            }),
            eW(this, "handleCloseVoicePanelIntroduction", () => {
                z.sF(eF._.VOICE_PANEL_INTRODUCTION);
            }),
            eW(this, "renderVoicePanelIntroduction", () =>
                (0, r.jsxs)("div", {
                    className: a()(ez.SC, "theme-light"),
                    children: [
                        (0, r.jsx)(_.Heading, {
                            className: ez.oN,
                            variant: "heading-md/semibold",
                            children: eK.intl.string(eK.t["ba/rL2"]),
                        }),
                        (0, r.jsx)(_.Text, {
                            className: ez.uf,
                            variant: "text-sm/normal",
                            children: eK.intl.string(eK.t.Ne1Eew),
                        }),
                        (0, r.jsx)(_.Button, {
                            fullWidth: !0,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            text: eK.intl.string(eK.t.shaBeH),
                            focusProps: eZ,
                        }),
                    ],
                }),
            );
    }
}

function e5(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, w.Ay)(),
        { play: o, Component: c, events: u } = (0, g.G)(l ? "disable" : "enable");
    return (
        i.useEffect(() => () => o(), [l, o]),
        (0, r.jsx)(
            eM.A,
            eQ(eq({}, t), {
                ref: a,
                onClick: (e) => {
                    (0, M.X)(s, M.O.KRISP, !l), t.onClick(e);
                },
                onMouseEnter: () => {
                    var e;
                    null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter();
                },
                onMouseLeave: () => {
                    u.onMouseLeave();
                },
                tooltipText: n ? null : eK.intl.string(eK.t.vFiCSx),
                icon: (0, r.jsx)(c, {
                    size: "refresh_sm",
                }),
            }),
        )
    );
}
let e2 = (0, I.A)(function (e) {
    let t = (0, H.A)(),
        n = (0, u.bG)([B.default], () => B.default.getAwaitingRemoteSessionInfo()),
        l = (0, u.bG)([ex.default], () => ex.default.getCurrentUser()),
        a = (0, u.cf)([eT.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eV.bFR.FINE,
                      rtcConnectionState: eV.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eT.A.getChannelId(),
                      rtcConnectionQuality: eT.A.getQuality(),
                      rtcConnectionState: eT.A.getState(),
                      rtcConnectionLastPing: eT.A.getLastPing(),
                  },
        ),
        { channelId: s } = a,
        o = eX(a, ["channelId"]),
        c = (0, u.bG)([eI.A], () => eI.A.getChannel(s), [s]),
        d = null == c ? void 0 : c.getGuildId(),
        p = (0, u.bG)([ev.A], () => ev.A.getGuild(d), [d]),
        f = (0, u.cf)([eC.A], () => ({
            noiseCancellationSupported: eC.A.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, X.A)(eC.A.getNoiseCancellation(), eC.A.getSystemMicrophoneMode(), {
                location: "RTCConnection",
            }),
            noiseCancellationError: eC.A.isNoiseCancellationError(),
            canGoLive: (0, Y.A)(eC.A),
        })),
        h = (0, u.bG)(
            [eC.A, W.A],
            () =>
                W.A.hasHotspot(eF._.VOICE_PANEL_INTRODUCTION) &&
                (0, eD.mv)(l) &&
                !eC.A.isInteractionRequired() &&
                !(null == c ? void 0 : c.isGuildStageVoice()),
        ),
        A = (0, u.bG)([eP.A], () => null != s && eP.A.hasVideo(s), [s]),
        g = (0, u.bG)([eO.A], () => eO.A.getCurrentUserActiveStream()),
        m = (0, u.bG)([eS.A], () => eS.A.hasLayers()),
        b = (0, u.bG)([q.A], () => q.A.isViewingRoles(d)),
        E = (0, u.bG)([eN.A], () => b && !eN.A.can(eV.xBc.VIEW_CHANNEL, c), [b, c]),
        O = ed.vL.useSetting(),
        [y, I, v] = (0, u.yK)(
            [ew.Ay, ei.A],
            () =>
                (null == c ? void 0 : c.isGuildStageVoice())
                    ? [ei.A.getMutableParticipants(c.id, el.ip.SPEAKER), ei.A.getParticipantsVersion(c.id), null]
                    : [null, null, null != c ? ew.Ay.getVoiceStatesForChannel(c) : null],
            [c],
        ),
        S = i.useMemo(() => {
            var e, t;
            return null !=
                (e =
                    null !=
                    (t =
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
                        ? t
                        : v)
                ? e
                : [];
        }, [y, I, v]),
        [N, T] = i.useState(!1);
    i.useEffect(() => {
        (b || E) && T(!1);
    }, [b, E, T]);
    let { analyticsLocations: x } = (0, w.Ay)(P.A.RTC_PANEL),
        L = (0, C.A)(null != d ? d : eV.dJq, null == c ? void 0 : c.id),
        R = (0, j.A)(null == c ? void 0 : c.id),
        D = (0, $.T)({
            location: "RTCConnection",
        }),
        M = (0, ee.A)({
            channelId: null == c ? void 0 : c.id,
            location: "RTCConnection",
        });
    return (0, r.jsx)(w.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: ez.iE,
            children: [
                null != t || null != n
                    ? (0, r.jsx)(F.A, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n,
                      })
                    : null,
                (0, r.jsx)(
                    e8,
                    eQ(eq({}, e, f, o), {
                        enableActivities: L,
                        remoteVoiceState: t,
                        guild: p,
                        channel: c,
                        hasVideo: A,
                        selfStream: g,
                        hasLayers: m,
                        voiceStates: S,
                        showVoiceStates: O,
                        shouldShowVoicePanelIntroduction: h,
                        showSocialLayerStorefrontGiftingButton: D && M,
                        isPrivateChannelWithEnabledActivities: R,
                        analyticsLocations: x,
                    }),
                ),
                !N && b && null != d
                    ? (0, r.jsxs)("div", {
                          className: ez.BT,
                          children: [
                              (0, r.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  className: ez.u0,
                                  children: E ? eK.intl.string(eK.t.efjuQJ) : eK.intl.string(eK.t.br8H2N),
                              }),
                              (0, r.jsx)(_.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      T(!0);
                                  },
                                  text: eK.intl.string(eK.t.WAI6xu),
                                  focusProps: eZ,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
