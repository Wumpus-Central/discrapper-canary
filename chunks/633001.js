a.d(t, { Z: () => ej }), a(388685), a(583741), a(539854), a(49124), a(35282), a(781311);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(913527),
    o = a.n(s),
    c = a(772848),
    d = a(442837),
    u = a(755721),
    m = a(481060),
    x = a(765250),
    h = a(13245),
    p = a(593472),
    v = a(393238),
    b = a(594190),
    f = a(984370),
    j = a(427860),
    g = a(837268),
    _ = a(371651),
    y = a(829907),
    C = a(610394),
    N = a(886118),
    O = a(301801),
    E = a(352527),
    T = a(355863),
    S = a(449224),
    P = a(808506),
    w = a(572004),
    I = a(55935),
    k = a(70956),
    R = a(136015),
    Z = a(145597),
    A = a(246992),
    D = a(257785),
    L = a(484036),
    M = a(681619),
    F = a(621060),
    U = a(981631),
    z = a(757744),
    B = a(388032),
    G = a(454741),
    V = a(451429);
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
        [U.Odu.CLICK_ZONE_DEBUG]: (e) =>
            W(
                H(
                    {
                        type: U.Odu.CLICK_ZONE_DEBUG,
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
                    T.Z.getWidgetDefaultSettings(U.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [U.Odu.PERFORMANCE_DEBUG]: (e) =>
            W(
                H(
                    {
                        type: U.Odu.PERFORMANCE_DEBUG,
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
                    T.Z.getWidgetDefaultSettings(U.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    X = {};
function Y(e) {
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
            className: G.copyId,
            children: ["Application Id: ", t, " ", a ? B.intl.string(B.t["t5VZ8/"]) : null],
        })
    );
}
let J = r.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.e7)([b.ZP], () => b.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([S.Z], () => S.Z.getGameForPID(t.pid)),
            l = (0, d.e7)([b.ZP], () => (null == a ? null : b.ZP.getGameOverlayStatus(a)));
        return (0, n.jsxs)("div", {
            className: G.panelGroup,
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
                        children: (0, n.jsx)(Y, { id: t.applicationId }),
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
                    className: G.panelGroup,
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
                        className: G.panelGroup,
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
    q = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cj)([P.default], () => P.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            l = (0, d.e7)([P.default], () => P.default.isInputLocked(t), [t]),
            i = (0, d.e7)([P.default], () => P.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([P.default], () => P.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([P.default], () => P.default.isReady(t), [t]);
        return (0, n.jsxs)("div", {
            className: G.panelGroup,
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
function $(e) {
    let t,
        a = ((t = Object.values((0, d.Wu)([T.Z], () => T.Z.getWidgetsForLayout(z.$S)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, x.E9)(a.id);
            else {
                let t = K[e];
                if (null == t) return;
                let a = t(z.$S);
                (0, x.A4)(a);
            }
        },
    ];
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString();
}
let ee = r.memo(function (e) {
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
function et() {
    let e = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([_.default], () => _.default.getDevToolsFocusedPidsWithTimestamp(), []);
    return (0, n.jsxs)("div", {
        className: G.panelGroup,
        children: [
            (0, n.jsxs)("div", {
                className: G.panelHeader,
                children: [
                    (0, n.jsx)(m.XZJ, {
                        value: e,
                        onChange: () =>
                            void h.Z.setRenderDebugMode(
                                !C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs),
                                g.GO.TrackFocusPIDs,
                            ),
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
                        className: G.panelButton,
                        onClick: () => h.Z.clearTrackedPids(),
                        children: (0, n.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)(m.zJl, {
                className: i()(G.panelGroup, G.scroller),
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
                                                        (0, n.jsx)(ee, {
                                                            pid: a,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == a ? void 0 : a.toString()) ? r : "null",
                                                        " @ ",
                                                        Q(t, !0),
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
let ea = r.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.e7)([_.default, b.ZP], () => {
                var e, a;
                if (null == t) return null;
                let n = null == (e = _.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != n) return n;
                let r = b.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (a = null == r ? void 0 : r.fullscreenType) ? a : p.Jx.UNKNOWN;
            }, [t]);
        return (0, n.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, y.sS)(a) : "Unknown"],
        });
    }),
    en = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            [t, a] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = b.ZP.getRunningGames(),
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
                    }, +k.Z.Millis.SECOND)),
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
                                className: i()(G.panelGroup, G.scroller),
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
                                                    (0, n.jsx)(ee, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, n.jsx)(ea, { pid: e.pid }),
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
                                                                        .concat(Q(r)),
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
    er = r.memo(function () {
        var e, t;
        let a = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            r = (0, Z.getPID)(),
            l = (0, d.e7)([_.default], () => _.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, d.Wu)([E.Z], () => [E.Z.enabled, E.Z.keepOpen]),
            o = (0, d.e7)([P.default], () => P.default.getFocusedPID()),
            c = (0, d.e7)([P.default], () => P.default.isFocusedPidOutOfProcess());
        return (0, n.jsxs)("div", {
            className: G.panelGroup,
            children: [
                0 === Object.keys(a).length &&
                    (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(a).map((e) => (0, n.jsx)(q, { pid: e.pid }, e.pid)),
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
    el = r.memo(function () {
        let [e, t] = $(U.Odu.CLICK_ZONE_DEBUG),
            [a, r] = $(U.Odu.PERFORMANCE_DEBUG),
            l = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ClickZones)),
            i = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.WidgetAreas)),
            s = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.DisabledGPUBoost)),
            o = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ForceGPUBoost)),
            c = (e) => {
                h.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e);
            };
        return (0, n.jsxs)("div", {
            className: G.panelGroup,
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
                                    onChange: () => void c(g.GO.ClickZones),
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
                                    onChange: () => void c(g.GO.WidgetAreas),
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
                                    onChange: () => void c(g.GO.DisabledGPUBoost),
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
                                    onChange: () => void c(g.GO.ForceGPUBoost),
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
    ei = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            t = (0, d.e7)([b.ZP], () => b.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
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
                                        className: G.panelGroup,
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
                                                        (0, n.jsx)(ea, { pid: e.pid }),
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
                                    className: G.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, n.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, n.jsx)(J, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    es = r.memo(function () {
        let e = (0, d.e7)([_.default], () => _.default.getForcedRenderMode()),
            [t, a] = r.useState(e),
            l = (e) => {
                a(e), h.Z.forceRenderMode(e);
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
                        className: G.panelGroup,
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
    eo = {
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
function ec(e) {
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
let ed = [
    {
        key: "type",
        cellClassName: G.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                r = eu(t);
            return (0, n.jsx)("div", {
                className: G.tableBar,
                style: { color: ec(t, a) },
                children: (0, n.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: G.nameColumn,
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
        cellClassName: G.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, I.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function eu(e) {
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
function em(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let ex = ["__webpack_require__", "fn"],
    eh = ["web.js", "web.js.map"],
    ep = [
        {
            id: "details",
            name: "Details",
            group: F.v0.NONE,
            render: (e) => {
                var t, a;
                let { breadcrumb: r, onClose: l } = e,
                    { name: s, type: c, logType: d, nativeId: u, stack: x, data: h, timestamp: p } = r,
                    v = o()(p),
                    b = eu(c);
                return (0, n.jsxs)(m.w0Z, {
                    className: G.subPanelScroller,
                    children: [
                        (0, n.jsxs)(f.Z, {
                            className: i()(V.headerBar, G.subPanelHeaderBar),
                            children: [
                                (0, n.jsx)("div", {
                                    style: { color: ec(c, d) },
                                    className: G.headerIcon,
                                    children: (0, n.jsx)(b, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsxs)(f.Z.Title, {
                                    wrapperClassName: G.headerTitle,
                                    children: [
                                        s,
                                        " (",
                                        c,
                                        ")",
                                        (0, n.jsx)(m.P3F, {
                                            tag: "span",
                                            className: G.copyEventButton,
                                            onClick: () => (0, w.JG)(s),
                                            children: (0, n.jsx)(m.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(f.Z.Icon, {
                                    icon: m.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, w.JG)(em(r));
                                    },
                                }),
                                (0, n.jsx)(f.Z.Icon, {
                                    icon: m.k$p,
                                    tooltip: "Close",
                                    onClick: l,
                                }),
                            ],
                        }),
                        (0, n.jsxs)(D.E, {
                            className: G.commonProperties,
                            children: [
                                (0, n.jsx)(D.Z9, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, n.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, I.vc)(v, "LLLL"),
                                        children: (0, I.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, n.jsx)(D.Z9, {
                                    name: "Log Type",
                                    copyValue: d,
                                    children: (0, n.jsx)("code", { children: d }),
                                }),
                                (0, n.jsx)(D.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (t = null == u ? void 0 : u.toString()) ? t : "null",
                                    children: (0, n.jsx)("code", {
                                        children: null != (a = null == u ? void 0 : u.toString()) ? a : "null",
                                    }),
                                }),
                                (0, n.jsx)(D.Z9, {
                                    name: "Data",
                                    copyValue: em(h),
                                    children: (0, n.jsx)("code", { children: em(h) }),
                                }),
                                (0, n.jsx)(D.Z9, {
                                    name: "Stack Trace",
                                    copyValue: x,
                                    children: (0, n.jsx)("code", {
                                        children: x.split("\n").map((e, t) => {
                                            let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                            if (null != a) {
                                                let [, e, r, l, i] = a,
                                                    s = r.split(/[\\/]/).pop();
                                                return ex.includes(e.trim())
                                                    ? null
                                                    : (0, n.jsxs)(
                                                          "div",
                                                          {
                                                              children: [
                                                                  (0, n.jsx)("span", {
                                                                      className: G.stackTraceFunction,
                                                                      children: e.trim(),
                                                                  }),
                                                                  !eh.includes(null != s ? s : "") &&
                                                                      (0, n.jsxs)(n.Fragment, {
                                                                          children: [
                                                                              " (",
                                                                              (0, n.jsxs)("span", {
                                                                                  className: G.stackTraceLocation,
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
    ev = {
        searchType: N.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: r } = e;
            return [t, a, n, JSON.stringify(r)];
        },
        throttleMs: 100,
    };
function eb() {
    let [e, t] = (0, d.e7)([C.ZP], () => C.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], R.Q),
        { ref: a, height: l } = (0, v.ZP)(),
        s = (0, d.e7)([C.ZP], () => C.ZP.DEV_isOverlayModuleLoggingEnabled()),
        [o, c] = r.useState(s),
        [u, x] = r.useState(Object.keys(eo)),
        [p, b] = r.useState(""),
        f = r.useMemo(
            () =>
                0 === t
                    ? []
                    : e.filter((e) => {
                          for (let t of u) {
                              let { filter: a } = eo[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [e, u, t],
        ),
        [j, g] = r.useState(f),
        [_, y] = r.useState(null),
        N = r.useMemo(() => e.find((e) => e.key === _), [e, _]),
        E = r.useCallback((e) => {
            g(e);
        }, []),
        { renderSelectedTab: T } = (0, F.ZP)({ tabs: ep }, []);
    (0, O.BO)(p, f, E, ev, [e]);
    let S = r.useCallback((e) => {
        c(e), h.Z.setModuleLogging(e);
    }, []);
    r.useEffect(() => {
        if (C.ZP.DEV_isOverlayModuleLoggingEnabled()) return;
        let e = setTimeout(() => {
            c(!0), h.Z.setModuleLogging(!0);
        }, 3000);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let [P, I] = r.useState(!1),
        k = r.useRef(null),
        Z = r.useCallback(() => {
            (0, w.JG)(JSON.stringify(e)), I(!0);
        }, [e]);
    return (
        r.useEffect(() => {
            if (P)
                return (
                    (k.current = setTimeout(() => {
                        I(!1);
                    }, 4000)),
                    () => {
                        null != k.current && clearTimeout(k.current);
                    }
                );
        }, [P]),
        (0, n.jsxs)("div", {
            ref: a,
            className: G.panelContainer,
            children: [
                (0, n.jsxs)("div", {
                    className: G.panelGroup,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(G.toolbar, G.filtersToolbar),
                            children: [
                                (0, n.jsxs)("div", {
                                    title: "Toggles the Polling of Native",
                                    className: G.pollBreadcrumbs,
                                    children: [
                                        (0, n.jsx)(m.rsf, {
                                            checked: o,
                                            onChange: (e) => S(e),
                                        }),
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-md/normal",
                                            color: "currentColor",
                                            children: "Poll Native",
                                        }),
                                    ],
                                }),
                                Object.entries(eo).map((e) => {
                                    let [t, a] = e;
                                    return (0, n.jsx)(
                                        m.P3F,
                                        {
                                            className: i()(G.filter, u.includes(t) && G.activeFilter),
                                            onClick: () => {
                                                x((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                            },
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
                                    className: G.copyAll,
                                    onClick: Z,
                                    children: [
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: P ? "Copied" : "Copy All",
                                        }),
                                        P
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
                            className: G.toolbar,
                            children: (0, n.jsx)(m.E1j, {
                                className: G.searchBar,
                                query: p,
                                onChange: b,
                                onClear: () => b(""),
                                placeholder: "Regex search by breadcrumb name and data",
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: i()(G.panelGroup, G.tableContainer),
                    children: (0, n.jsx)(M.Z, {
                        columns: ed,
                        data: j,
                        selectedRowKey: null != _ ? _ : void 0,
                        onClickRow: (e) => y(e.key),
                    }),
                }),
                null != N &&
                    (0, n.jsx)(L.Z, {
                        className: i()(G.panelGroup, G.subPanel),
                        minHeight: 100,
                        initialHeight: null != l ? l / 3 : 300,
                        children: T({
                            breadcrumb: N,
                            onClose: () => y(null),
                        }),
                    }),
            ],
        })
    );
}
function ef() {
    return (0, n.jsx)(m.w0Z, {
        children: (0, n.jsxs)("div", {
            className: i()(V.panel, G.subPanel),
            children: [
                (0, n.jsx)(el, {}),
                (0, n.jsx)(es, {}),
                (0, n.jsx)(ei, {}),
                (0, n.jsx)(er, {}),
                (0, n.jsx)(et, {}),
                (0, n.jsx)(en, {}),
            ],
        }),
    });
}
function ej() {
    let [e, t] = r.useState("state");
    return (0, n.jsxs)("div", {
        className: i()(V.panel, G.panel),
        children: [
            (0, n.jsxs)("div", {
                className: G.toolbar,
                children: [
                    (0, n.jsx)(m.P3F, {
                        className: i()(G.paneOption, "state" === e && G.activePaneOption),
                        onClick: () => t("state"),
                        children: (0, n.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Client State",
                        }),
                    }),
                    (0, n.jsx)(m.P3F, {
                        className: i()(G.paneOption, "logging" === e && G.activePaneOption),
                        onClick: () => t("logging"),
                        children: (0, n.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Logging",
                        }),
                    }),
                ],
            }),
            "state" === e && (0, n.jsx)(ef, {}),
            "logging" === e && (0, n.jsx)(eb, {}),
        ],
    });
}
