a.d(t, { Z: () => eg }), a(388685), a(583741), a(539854), a(49124), a(35282), a(781311);
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(913527),
    o = a.n(s),
    c = a(772848),
    d = a(442837),
    u = a(755721),
    m = a(481060),
    x = a(765250),
    p = a(13245),
    h = a(593472),
    b = a(393238),
    f = a(594190),
    v = a(984370),
    j = a(427860),
    g = a(837268),
    _ = a(371651),
    y = a(829907),
    C = a(610394),
    N = a(886118),
    O = a(301801),
    T = a(352527),
    E = a(355863),
    S = a(449224),
    P = a(808506),
    w = a(572004),
    I = a(55935),
    R = a(70956),
    k = a(136015),
    Z = a(145597),
    A = a(246992),
    L = a(257785),
    D = a(484036),
    B = a(681619),
    M = a(621060),
    F = a(981631),
    U = a(757744),
    G = a(388032),
    z = a(931207),
    V = a(616257);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let K = {
        [F.Odu.CLICK_ZONE_DEBUG]: (e) =>
            W(
                H(
                    {
                        type: F.Odu.CLICK_ZONE_DEBUG,
                        id: (0, c.Z)(),
                        layoutId: e,
                        anchor: {
                            top: 0.35,
                            right: 0.35,
                        },
                        size: {
                            width: 100,
                            height: 100,
                        },
                    },
                    E.Z.getWidgetDefaultSettings(F.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [F.Odu.PERFORMANCE_DEBUG]: (e) =>
            W(
                H(
                    {
                        type: F.Odu.PERFORMANCE_DEBUG,
                        id: (0, c.Z)(),
                        layoutId: e,
                        anchor: {
                            top: 0.1,
                            right: 0.1,
                        },
                        size: {
                            fixed: !1,
                            width: "auto",
                            height: "auto",
                        },
                    },
                    E.Z.getWidgetDefaultSettings(F.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    X = {},
    Y = (e, t) => e.find((e) => e.type === t);
function J(e) {
    let { id: t } = e,
        [a, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        l(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, n.jsxs)(u.zx, {
            look: u.zx.Looks.LINK,
            color: u.zx.Colors.LINK,
            size: u.zx.Sizes.MIN,
            onClick: function () {
                (0, w.JG)(t, () => l(!0));
            },
            className: z.copyId,
            children: ["Application Id: ", t, " ", a ? G.intl.string(G.t["t5VZ8/"]) : null],
        })
    );
}
let q = r.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.e7)([f.ZP], () => f.ZP.getGameForPID(t.pid)),
            r = (0, d.e7)([S.Z], () => S.Z.getGameForPID(t.pid)),
            l = (0, d.e7)([f.ZP], () => (null == a ? null : f.ZP.getGameOverlayStatus(a)));
        return (0, n.jsxs)("div", {
            className: z.panelGroup,
            children: [
                (0, n.jsx)(m.Text, {
                    variant: "text-md/bold",
                    color: "text-primary",
                    children: t.gameName,
                }),
                (0, n.jsx)(m.Text, {
                    variant: "text-sm/bold",
                    color: "text-secondary",
                    children: t.pid,
                }),
                (0, n.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: null == a ? void 0 : a.exeName,
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", (null == a ? void 0 : a.isLauncher) ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, n.jsx)(m.Text, {
                        variant: "text-md/bold",
                        color: "text-primary",
                        children: (0, n.jsx)(J, { id: t.applicationId }),
                    }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, y.sS)(t.fullscreenType)],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["state: ", t.state],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, n.jsxs)("div", {
                    className: z.panelGroup,
                    children: [
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, y.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, n.jsxs)("div", {
                        className: z.panelGroup,
                        children: [
                            (0, n.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, n.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, n.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, n.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, y.P_)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", (null == a ? void 0 : a.hidden) ? "Yes" : "No"],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", (null == r ? void 0 : r.hook) ? "Yes" : "No"],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", (null == r ? void 0 : r.overlay) ? "Yes" : "No"],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "overlayCompatibilityHook: ",
                        (null == r ? void 0 : r.overlayCompatibilityHook) ? "Yes" : "No",
                    ],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "supportsOutOfProcessOverlay: ",
                        (null == r ? void 0 : r.supportsOutOfProcessOverlay) ? "Yes" : "No",
                    ],
                }),
            ],
        });
    }),
    $ = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cj)([P.default], () => P.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            l = (0, d.e7)([P.default], () => P.default.isInputLocked(t), [t]),
            i = (0, d.e7)([P.default], () => P.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([P.default], () => P.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([P.default], () => P.default.isReady(t), [t]);
        return (0, n.jsxs)("div", {
            className: z.panelGroup,
            children: [
                (0, n.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-primary",
                    children: "".concat(t),
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == a || null == a.screenTypeResolutionTimestamp) return "...";
                            let n = a.screenTypeResolutionTimestamp - a.startTrackingTimestamp;
                            return "".concat(n.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: [
                        "Window Creation: ",
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (
                                null == a ||
                                null == a.moduleTrackingTimestamp ||
                                null == a.screenTypeResolutionTimestamp
                            )
                                return "...";
                            let n = a.moduleTrackingTimestamp - a.screenTypeResolutionTimestamp;
                            return "".concat(n.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: [
                        "Rendering: ",
                        ((e) => {
                            var t;
                            let a = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == a || null == a.overlayRenderingTimestamp || null == a.moduleTrackingTimestamp)
                                return "...";
                            let n = a.overlayRenderingTimestamp - a.moduleTrackingTimestamp;
                            return "".concat(n.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLocked: ", l],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, n.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isReady: ", o],
                }),
            ],
        });
    });
function Q(e) {
    let t = Y(Object.values((0, d.Wu)([E.Z], () => E.Z.getWidgetsForLayout(U.$S))), e);
    return [
        t,
        () => {
            if (null != t) (0, x.E9)(t.id);
            else {
                let t = K[e];
                if (null == t) return;
                let a = t(U.$S);
                (0, x.A4)(a);
            }
        },
    ];
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString();
}
let et = r.memo(function (e) {
    var { pid: t } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (a = l[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
            }
            return r;
        })(e, ["pid"]);
    let r = (0, d.e7)([_.default], () => {
        var e, a;
        if (null == t) return "Unknown";
        let n = null == (e = _.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != n ? ((X[t] = n), n) : null != (a = X[t]) ? a : "Unknown";
    }, [t]);
    return (0, n.jsx)(
        m.Text,
        W(H({}, a), {
            variant: "text-md/semibold",
            color: "text-primary",
            children: r,
        }),
    );
});
function ea() {
    let e = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([_.default], () => _.default.getDevToolsFocusedPidsWithTimestamp(), []),
        a = () => {
            p.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs), g.GO.TrackFocusPIDs);
        };
    return (0, n.jsxs)("div", {
        className: z.panelGroup,
        children: [
            (0, n.jsxs)("div", {
                className: z.panelHeader,
                children: [
                    (0, n.jsx)(m.XZJ, {
                        value: e,
                        onChange: () => a(),
                        size: 18,
                        type: m.XZJ.Types.INVERTED,
                        shape: m.XZJ.Shapes.BOX,
                        children: (0, n.jsx)(m.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "Track Focus Pids",
                        }),
                    }),
                    (0, n.jsx)(m.P3F, {
                        className: z.panelButton,
                        onClick: () => p.Z.clearTrackedPids(),
                        children: (0, n.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)(m.zJl, {
                className: i()(z.panelGroup, z.scroller),
                children: [
                    0 === t.length &&
                        (0, n.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, l] = e;
                        return (0, n.jsx)(
                            r.Fragment,
                            {
                                children: (0, n.jsx)(m.ua7, {
                                    position: "left",
                                    text: l === g.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, n.jsx)(
                                            "div",
                                            W(H({}, e), {
                                                children: (0, n.jsxs)(m.Text, {
                                                    variant: "text-sm/medium",
                                                    color: l === g.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                                                    children: [
                                                        (0, n.jsx)(et, {
                                                            pid: a,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == a ? void 0 : a.toString()) ? r : "null",
                                                        " @ ",
                                                        ee(t, !0),
                                                    ],
                                                }),
                                            }),
                                        );
                                    },
                                }),
                            },
                            "".concat(a, "-").concat(t),
                        );
                    }),
                ],
            }),
        ],
    });
}
let en = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.e7)([_.default, f.ZP], () => {
                var e, a, n;
                if (null == t) return null;
                let r = null == (e = _.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                return null != r
                    ? r
                    : null != (n = null == (a = f.ZP.getGameForPID(t)) ? void 0 : a.fullscreenType)
                      ? n
                      : h.Jx.UNKNOWN;
            }, [t]);
        return (0, n.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, y.sS)(a) : "Unknown"],
        });
    }),
    er = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            [t, a] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = f.ZP.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, y.hj)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let r = await Promise.all(t);
                        a((e) =>
                            r.reduce(
                                (e, t) => {
                                    var a, n;
                                    let [r, l, i] = t;
                                    if (null == l || null == r) return e;
                                    let s = null != (n = e[r]) ? n : [],
                                        o = null == (a = s[s.length - 1]) ? void 0 : a.screenType;
                                    return (
                                        (0 === s.length || o !== l) &&
                                            (e[r] = [
                                                ...s,
                                                {
                                                    pid: r,
                                                    screenType: l,
                                                    timestamp: i,
                                                },
                                            ]),
                                        e
                                    );
                                },
                                H({}, e),
                            ),
                        );
                    }, +R.Z.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, n.jsx)(m.ua7, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (a) =>
                    (0, n.jsx)(
                        "div",
                        W(H({}, a), {
                            children: (0, n.jsxs)(m.zJl, {
                                className: i()(z.panelGroup, z.scroller),
                                children: [
                                    0 === Object.keys(e).length &&
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "No recent screen types",
                                        }),
                                    Object.values(e).map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                children: [
                                                    (0, n.jsx)(et, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, n.jsx)(en, { pid: e.pid }),
                                                    null != t[e.pid] &&
                                                        [...t[e.pid]].reverse().map((t) => {
                                                            let { screenType: a, timestamp: r } = t;
                                                            return (0, n.jsx)(
                                                                m.Text,
                                                                {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-default",
                                                                    children: ""
                                                                        .concat(a, ":")
                                                                        .concat((0, y.sS)(a), " @ ")
                                                                        .concat(ee(r)),
                                                                },
                                                                "".concat(e.pid, "-").concat(a, "-").concat(r),
                                                            );
                                                        }),
                                                ],
                                            },
                                            e.pid,
                                        ),
                                    ),
                                ],
                            }),
                        }),
                    ),
            })
        );
    }),
    el = r.memo(function () {
        var e, t;
        let a = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            r = (0, Z.getPID)(),
            l = (0, d.e7)([_.default], () => _.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, d.Wu)([T.Z], () => [T.Z.enabled, T.Z.keepOpen]),
            o = (0, d.e7)([P.default], () => P.default.getFocusedPID()),
            c = (0, d.e7)([P.default], () => P.default.isFocusedPidOutOfProcess());
        return (0, n.jsxs)("div", {
            className: z.panelGroup,
            children: [
                0 === Object.keys(a).length &&
                    (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(a).map((e) => (0, n.jsx)($, { pid: e.pid }, e.pid)),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/medium",
                            color: "text-primary",
                            children: ["focusedPID: ", null != (e = null == o ? void 0 : o.toString()) ? e : "null"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["isFocusedPidOutOfProcess: ", c ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/medium",
                            color: "text-primary",
                            children: ["processPid: ", null != (t = null == r ? void 0 : r.toString()) ? t : "unknown"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["isOOPEnabledForPid: ", l ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    ei = r.memo(function () {
        let [e, t] = Q(F.Odu.CLICK_ZONE_DEBUG),
            [a, r] = Q(F.Odu.PERFORMANCE_DEBUG),
            l = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ClickZones)),
            i = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.WidgetAreas)),
            s = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.DisabledGPUBoost)),
            o = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ForceGPUBoost)),
            c = (e) => {
                p.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e);
            },
            u = () => {
                c(g.GO.ClickZones);
            },
            x = () => {
                c(g.GO.WidgetAreas);
            },
            h = () => {
                c(g.GO.DisabledGPUBoost);
            },
            b = () => {
                c(g.GO.ForceGPUBoost);
            };
        return (0, n.jsxs)("div", {
            className: z.panelGroup,
            children: [
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Enables a red border around click zones to help with debugging.",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, e), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: l,
                                    onChange: () => u(),
                                    size: 18,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Enable Click Zone Debug Mode",
                                    }),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, e), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: i,
                                    onChange: () => x(),
                                    size: 18,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Enable Render Debug Mode",
                                    }),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, e), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: s,
                                    onChange: () => h(),
                                    size: 18,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Disable GPU Boost",
                                    }),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, e), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: o,
                                    onChange: () => b(),
                                    size: 18,
                                    disabled: s,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Force GPU Boost",
                                    }),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
                    children: (a) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, a), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: null != e,
                                    onChange: () => t(),
                                    size: 18,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Click Zone Debug Widget",
                                    }),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "Creates a widget that shows the overlay's window performance metrics.",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, e), {
                                children: (0, n.jsx)(m.XZJ, {
                                    value: null != a,
                                    onChange: () => r(),
                                    size: 18,
                                    type: m.XZJ.Types.INVERTED,
                                    shape: m.XZJ.Shapes.BOX,
                                    children: (0, n.jsx)(m.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: "Overlay Performance Debug Widget",
                                    }),
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    es = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            t = (0, d.e7)([f.ZP], () => f.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                t.length > 0 &&
                    (0, n.jsx)(m.ua7, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (e) =>
                            (0, n.jsx)(
                                "div",
                                W(H({}, e), {
                                    children: (0, n.jsxs)("div", {
                                        className: z.panelGroup,
                                        children: [
                                            (0, n.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                color: "text-danger",
                                                children: "Untracked Running Games",
                                            }),
                                            t.map((e) =>
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(
                                                            m.Text,
                                                            {
                                                                variant: "text-sm/normal",
                                                                color: "text-danger",
                                                                children: ""
                                                                    .concat(e.pid, " - ")
                                                                    .concat(e.name, " (")
                                                                    .concat(e.exeName, ")"),
                                                            },
                                                            e.pid,
                                                        ),
                                                        (0, n.jsx)(en, { pid: e.pid }),
                                                    ],
                                                }),
                                            ),
                                        ],
                                    }),
                                }),
                            ),
                    }),
                (0, n.jsx)(m.ua7, {
                    position: "left",
                    text: "The current running games process information",
                    children: (t) =>
                        (0, n.jsx)(
                            "div",
                            W(H({}, t), {
                                children: (0, n.jsxs)("div", {
                                    className: z.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, n.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, n.jsx)(q, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    eo = r.memo(function () {
        let e = (0, d.e7)([_.default], () => _.default.getForcedRenderMode()),
            [t, a] = r.useState(e),
            l = (e) => {
                a(e), p.Z.forceRenderMode(e);
            },
            i = [
                {
                    label: g.R5.UNSET,
                    value: g.R5.UNSET,
                },
                {
                    label: g.R5.IN_PROCESS_V2,
                    value: g.R5.IN_PROCESS_V2,
                },
                {
                    label: g.R5.OUT_OF_PROCESS_V3,
                    value: g.R5.OUT_OF_PROCESS_V3,
                },
                {
                    label: g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => W(H({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, n.jsx)(m.ua7, {
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, n.jsx)(
                    "div",
                    W(H({}, e), {
                        className: z.panelGroup,
                        children: (0, n.jsx)(m.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: i,
                            select: l,
                            popoutLayerContext: A.O$,
                        }),
                    }),
                ),
        });
    }),
    ec = {
        native: {
            label: "Native",
            filter: (e) => e.type === j.C7.NativeLegacy || e.type === j.C7.NativeOOP,
        },
        render: {
            label: "Render",
            filter: (e) => e.type === j.C7.Renderer,
        },
        client: {
            label: "Client",
            filter: (e) => e.type === j.C7.OOPModule || e.type === j.C7.LegacyModule,
        },
    };
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.l6.Info;
    if (t === j.l6.Error) return "var(--text-danger)";
    switch (e) {
        case j.C7.NativeLegacy:
            return "var(--yellow-500)";
        case j.C7.NativeOOP:
            return "var(--green-500)";
        case j.C7.Renderer:
            return "var(--brand-500)";
        case j.C7.LegacyModule:
            return "var(--yellow-300)";
        case j.C7.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let eu = [
    {
        key: "type",
        cellClassName: z.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                r = em(t);
            return (0, n.jsx)("div", {
                className: z.tableBar,
                style: { color: ed(t, a) },
                children: (0, n.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: z.nameColumn,
        render(e) {
            let { name: t, type: a, logType: r } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case j.l6.Info:
                                    return "text-primary";
                                case j.l6.Warning:
                                    return "text-feedback-warning";
                                case j.l6.Error:
                                    return "text-danger";
                                default:
                                    return "text-secondary";
                            }
                        })(r),
                        children: t,
                    }),
                    (0, n.jsxs)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: ["(", a, ")"],
                    }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: z.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, I.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function em(e) {
    switch (e) {
        case j.C7.NativeLegacy:
            return m.GON;
        case j.C7.NativeOOP:
            return m.ljO;
        case j.C7.Renderer:
            return m.n6r;
        case j.C7.LegacyModule:
            return m.pzj;
        case j.C7.OOPModule:
            return m.m3e;
        default:
            return m.pzj;
    }
}
function ex(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let ep = ["__webpack_require__", "fn"],
    eh = ["web.js", "web.js.map"],
    eb = [
        {
            id: "details",
            name: "Details",
            group: M.v0.NONE,
            render: (e) => {
                var t, a;
                let { breadcrumb: r, onClose: l } = e,
                    { name: s, type: c, logType: d, nativeId: u, stack: x, data: p, timestamp: h } = r,
                    b = o()(h),
                    f = em(c);
                return (0, n.jsxs)(m.w0Z, {
                    className: z.subPanelScroller,
                    children: [
                        (0, n.jsxs)(v.Z, {
                            className: i()(V.headerBar, z.subPanelHeaderBar),
                            children: [
                                (0, n.jsx)("div", {
                                    style: { color: ed(c, d) },
                                    className: z.headerIcon,
                                    children: (0, n.jsx)(f, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsxs)(v.Z.Title, {
                                    wrapperClassName: z.headerTitle,
                                    children: [
                                        s,
                                        " (",
                                        c,
                                        ")",
                                        (0, n.jsx)(m.P3F, {
                                            tag: "span",
                                            className: z.copyEventButton,
                                            onClick: () => (0, w.JG)(s),
                                            children: (0, n.jsx)(m.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(v.Z.Icon, {
                                    icon: m.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, w.JG)(ex(r));
                                    },
                                }),
                                (0, n.jsx)(v.Z.Icon, {
                                    icon: m.k$p,
                                    tooltip: "Close",
                                    onClick: l,
                                }),
                            ],
                        }),
                        (0, n.jsxs)(L.E, {
                            className: z.commonProperties,
                            children: [
                                (0, n.jsx)(L.Z9, {
                                    name: "Timestamp",
                                    copyValue: b.toISOString(),
                                    children: (0, n.jsx)("time", {
                                        dateTime: b.toISOString(),
                                        title: (0, I.vc)(b, "LLLL"),
                                        children: (0, I.vc)(b, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, n.jsx)(L.Z9, {
                                    name: "Log Type",
                                    copyValue: d,
                                    children: (0, n.jsx)("code", { children: d }),
                                }),
                                (0, n.jsx)(L.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (t = null == u ? void 0 : u.toString()) ? t : "null",
                                    children: (0, n.jsx)("code", {
                                        children: null != (a = null == u ? void 0 : u.toString()) ? a : "null",
                                    }),
                                }),
                                (0, n.jsx)(L.Z9, {
                                    name: "Data",
                                    copyValue: ex(p),
                                    children: (0, n.jsx)("code", { children: ex(p) }),
                                }),
                                (0, n.jsx)(L.Z9, {
                                    name: "Stack Trace",
                                    copyValue: x,
                                    children: (0, n.jsx)("code", {
                                        children: x.split("\n").map((e, t) => {
                                            let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                            if (null != a) {
                                                let [, e, r, l, i] = a,
                                                    s = r.split(/[\\/]/).pop();
                                                return ep.includes(e.trim())
                                                    ? null
                                                    : (0, n.jsxs)(
                                                          "div",
                                                          {
                                                              children: [
                                                                  (0, n.jsx)("span", {
                                                                      className: z.stackTraceFunction,
                                                                      children: e.trim(),
                                                                  }),
                                                                  !eh.includes(null != s ? s : "") &&
                                                                      (0, n.jsxs)(n.Fragment, {
                                                                          children: [
                                                                              " (",
                                                                              (0, n.jsxs)("span", {
                                                                                  className: z.stackTraceLocation,
                                                                                  title: r,
                                                                                  children: [s, ":", l, ":", i],
                                                                              }),
                                                                              ")",
                                                                          ],
                                                                      }),
                                                              ],
                                                          },
                                                          t,
                                                      );
                                            }
                                            return (0, n.jsx)("div", { children: e }, t);
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    ef = {
        searchType: N.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: r } = e;
            return [t, a, n, JSON.stringify(r)];
        },
        throttleMs: 100,
    };
function ev() {
    let [e, t] = (0, d.e7)([C.ZP], () => C.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], k.Q),
        { ref: a, height: l } = (0, b.ZP)(),
        s = (0, d.e7)([C.ZP], () => C.ZP.DEV_isOverlayModuleLoggingEnabled()),
        [o, c] = r.useState(s),
        [u, x] = r.useState(Object.keys(ec)),
        h = (e) => {
            x((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        },
        [f, v] = r.useState(""),
        j = r.useMemo(
            () =>
                0 === t
                    ? []
                    : e.filter((e) => {
                          for (let t of u) {
                              let { filter: a } = ec[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [e, u, t],
        ),
        [g, _] = r.useState(j),
        [y, N] = r.useState(null),
        T = r.useMemo(() => e.find((e) => e.key === y), [e, y]),
        E = r.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: S } = (0, M.ZP)({ tabs: eb }, []);
    (0, O.BO)(f, j, E, ef, [e]);
    let P = r.useCallback((e) => {
        c(e), p.Z.setModuleLogging(e);
    }, []);
    r.useEffect(() => {
        if (C.ZP.DEV_isOverlayModuleLoggingEnabled()) return;
        let e = setTimeout(() => {
            c(!0), p.Z.setModuleLogging(!0);
        }, 3000);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let [I, R] = r.useState(!1),
        Z = r.useRef(null),
        A = r.useCallback(() => {
            (0, w.JG)(JSON.stringify(e)), R(!0);
        }, [e]);
    return (
        r.useEffect(() => {
            if (I)
                return (
                    (Z.current = setTimeout(() => {
                        R(!1);
                    }, 4000)),
                    () => {
                        null != Z.current && clearTimeout(Z.current);
                    }
                );
        }, [I]),
        (0, n.jsxs)("div", {
            ref: a,
            className: z.panelContainer,
            children: [
                (0, n.jsxs)("div", {
                    className: z.panelGroup,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(z.toolbar, z.filtersToolbar),
                            children: [
                                (0, n.jsxs)("div", {
                                    title: "Toggles the Polling of Native",
                                    className: z.pollBreadcrumbs,
                                    children: [
                                        (0, n.jsx)(m.rsf, {
                                            checked: o,
                                            onChange: (e) => P(e),
                                        }),
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-md/normal",
                                            color: "currentColor",
                                            children: "Poll Native",
                                        }),
                                    ],
                                }),
                                Object.entries(ec).map((e) => {
                                    let [t, a] = e;
                                    return (0, n.jsx)(
                                        m.P3F,
                                        {
                                            className: i()(z.filter, u.includes(t) && z.activeFilter),
                                            onClick: () => h(t),
                                            children: (0, n.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "currentColor",
                                                children: a.label,
                                            }),
                                        },
                                        t,
                                    );
                                }),
                                (0, n.jsxs)(m.P3F, {
                                    className: z.copyAll,
                                    onClick: A,
                                    children: [
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: I ? "Copied" : "Copy All",
                                        }),
                                        I
                                            ? (0, n.jsx)(m.dz2, {
                                                  size: "sm",
                                                  color: m.TVs.unsafe_rawColors.GREEN_330.css,
                                              })
                                            : (0, n.jsx)(m.TIy, {
                                                  color: "currentColor",
                                                  size: "sm",
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: z.toolbar,
                            children: (0, n.jsx)(m.E1j, {
                                className: z.searchBar,
                                query: f,
                                onChange: v,
                                onClear: () => v(""),
                                placeholder: "Regex search by breadcrumb name and data",
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: i()(z.panelGroup, z.tableContainer),
                    children: (0, n.jsx)(B.Z, {
                        columns: eu,
                        data: g,
                        selectedRowKey: null != y ? y : void 0,
                        onClickRow: (e) => N(e.key),
                    }),
                }),
                null != T &&
                    (0, n.jsx)(D.Z, {
                        className: i()(z.panelGroup, z.subPanel),
                        minHeight: 100,
                        initialHeight: null != l ? l / 3 : 300,
                        children: S({
                            breadcrumb: T,
                            onClose: () => N(null),
                        }),
                    }),
            ],
        })
    );
}
function ej() {
    return (0, n.jsx)(m.w0Z, {
        children: (0, n.jsxs)("div", {
            className: i()(V.panel, z.subPanel),
            children: [
                (0, n.jsx)(ei, {}),
                (0, n.jsx)(eo, {}),
                (0, n.jsx)(es, {}),
                (0, n.jsx)(el, {}),
                (0, n.jsx)(ea, {}),
                (0, n.jsx)(er, {}),
            ],
        }),
    });
}
function eg() {
    let [e, t] = r.useState("state");
    return (0, n.jsxs)("div", {
        className: i()(V.panel, z.panel),
        children: [
            (0, n.jsxs)("div", {
                className: z.toolbar,
                children: [
                    (0, n.jsx)(m.P3F, {
                        className: i()(z.paneOption, "state" === e && z.activePaneOption),
                        onClick: () => t("state"),
                        children: (0, n.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Client State",
                        }),
                    }),
                    (0, n.jsx)(m.P3F, {
                        className: i()(z.paneOption, "logging" === e && z.activePaneOption),
                        onClick: () => t("logging"),
                        children: (0, n.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Logging",
                        }),
                    }),
                ],
            }),
            "state" === e && (0, n.jsx)(ej, {}),
            "logging" === e && (0, n.jsx)(ev, {}),
        ],
    });
}
