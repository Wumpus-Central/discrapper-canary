n.d(t, { Z: () => eD }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(772848),
    d = n(442837),
    u = n(199849),
    m = n(681715),
    p = n(755721),
    h = n(481060),
    f = n(570140),
    x = n(765250),
    b = n(13245),
    g = n(593472),
    v = n(393238),
    j = n(600164),
    y = n(594190),
    C = n(984370),
    _ = n(837268),
    S = n(307149),
    E = n(991186),
    T = n(371651),
    O = n(829907),
    N = n(610394),
    w = n(338949),
    P = n(556809),
    I = n(886118),
    k = n(301801),
    R = n(352527),
    A = n(355863),
    Z = n(449224),
    D = n(556296),
    L = n(808506),
    M = n(572004),
    U = n(55935),
    B = n(70956),
    F = n(136015),
    G = n(13140),
    V = n(145597),
    H = n(246992),
    z = n(257785),
    W = n(975775),
    K = n(681619),
    q = n(621060),
    Y = n(981631),
    Q = n(757744),
    X = n(388032),
    J = n(622622),
    $ = n(663618);
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let en = {
        [Y.Odu.CLICK_ZONE_DEBUG]: (e) =>
            et(
                ee(
                    {
                        type: Y.Odu.CLICK_ZONE_DEBUG,
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
                    A.Z.getWidgetDefaultSettings(Y.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [Y.Odu.PERFORMANCE_DEBUG]: (e) =>
            et(
                ee(
                    {
                        type: Y.Odu.PERFORMANCE_DEBUG,
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
                    A.Z.getWidgetDefaultSettings(Y.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    ea = {};
function er(e) {
    let { id: t } = e,
        [n, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        l(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [n]),
        (0, a.jsxs)(p.zx, {
            look: p.zx.Looks.LINK,
            color: p.zx.Colors.LINK,
            size: p.zx.Sizes.MIN,
            onClick: function () {
                (0, M.JG)(t, () => l(!0));
            },
            className: J.copyId,
            children: ["Application Id: ", t, " ", n ? X.intl.string(X.t.t5VZ88) : null],
        })
    );
}
let el = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([y.ZP], () => y.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([Z.Z], () => Z.Z.getGameForPID(t.pid)),
            l = (0, d.e7)([y.ZP], () => (null == n ? null : y.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)(h.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    children: t.gameName,
                }),
                (0, a.jsx)(h.Text, {
                    variant: "text-sm/bold",
                    color: "text-subtle",
                    children: t.pid,
                }),
                (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: null == n ? void 0 : n.exeName,
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", (null == n ? void 0 : n.isLauncher) ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, a.jsx)(h.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, a.jsx)(er, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, O.sS)(t.fullscreenType)],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["state: ", t.state],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, a.jsxs)("div", {
                    className: J.panelGroup,
                    children: [
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, O.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, a.jsxs)("div", {
                        className: J.panelGroup,
                        children: [
                            (0, a.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, a.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, O.P_)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", (null == n ? void 0 : n.hidden) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", (null == r ? void 0 : r.hook) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", (null == r ? void 0 : r.overlay) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "overlayCompatibilityHook: ",
                        (null == r ? void 0 : r.overlayCompatibilityHook) ? "Yes" : "No",
                    ],
                }),
                (0, a.jsxs)(h.Text, {
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
    ei = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cj)([L.default], () => L.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([T.default], () => T.default.getTrackedGames()),
            l = (0, d.e7)([L.default], () => L.default.isInputLocked(t), [t]),
            i = (0, d.e7)([L.default], () => L.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([L.default], () => L.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([L.default], () => L.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)(h.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: "".concat(t),
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == n || null == n.screenTypeResolutionTimestamp) return "...";
                            let a = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
                            return "".concat(a.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (
                                null == n ||
                                null == n.moduleTrackingTimestamp ||
                                null == n.screenTypeResolutionTimestamp
                            )
                                return "...";
                            let a = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
                            return "".concat(a.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        ((e) => {
                            var t;
                            let n = null == (t = r[e]) ? void 0 : t.timer;
                            if (null == n || null == n.overlayRenderingTimestamp || null == n.moduleTrackingTimestamp)
                                return "...";
                            let a = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
                            return "".concat(a.toFixed(2), "ms");
                        })(t),
                    ],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", n.get(Number(t))],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLocked: ", l],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isReady: ", o],
                }),
            ],
        });
    });
function es(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([A.Z], () => A.Z.getWidgetsForLayout(Q.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, x.E9)(n.id);
            else {
                let t = en[e];
                if (null == t) return;
                let n = t(Q.$S);
                (0, x.A4)(n);
            }
        },
    ];
}
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, U.vc)(o()(e), "h:mm:ss.SSS");
}
let ec = r.memo(function (e) {
    var { pid: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++)
                    (n = l[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["pid"]);
    let r = (0, d.e7)([T.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = T.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((ea[t] = a), a) : null != (n = ea[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        h.Text,
        et(ee({}, n), {
            variant: "text-md/semibold",
            color: "text-strong",
            children: r,
        }),
    );
});
function ed() {
    let e = (0, d.e7)([w.Z], () => w.Z.hasRenderDebugMode(_.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([T.default], () => T.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: J.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: J.panelHeader,
                children: [
                    (0, a.jsx)(h.rsf, {
                        checked: e,
                        onChange: () =>
                            void b.Z.setRenderDebugMode(
                                !w.Z.hasRenderDebugMode(_.GO.TrackFocusPIDs),
                                _.GO.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, a.jsx)(h.P3F, {
                        className: J.panelButton,
                        onClick: () => b.Z.clearTrackedPids(),
                        children: (0, a.jsx)(h.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(h.zJl, {
                className: i()(J.panelGroup, J.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        var t;
                        let [n, l, i] = e;
                        return (0, a.jsx)(
                            r.Fragment,
                            {
                                children: (0, a.jsx)(m.u, {
                                    position: "left",
                                    text: i === _.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, a.jsx)("div", {
                                        children: (0, a.jsxs)(h.Text, {
                                            variant: "text-sm/medium",
                                            color: i === _.d5.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, a.jsx)(ec, {
                                                    pid: l,
                                                    tag: "span",
                                                }),
                                                " - ",
                                                null != (t = null == l ? void 0 : l.toString()) ? t : "null",
                                                " @ ",
                                                eo(n),
                                            ],
                                        }),
                                    }),
                                }),
                            },
                            "".concat(l, "-").concat(n),
                        );
                    }),
                ],
            }),
        ],
    });
}
let eu = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([T.default, y.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = T.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = y.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : g.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(h.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, O.sS)(n) : "Unknown"],
        });
    }),
    em = r.memo(function () {
        let e = (0, d.cj)([T.default], () => T.default.getTrackedGames()),
            [t, n] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = y.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, O.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
                        let r = await Promise.all(t);
                        n((e) =>
                            r.reduce(
                                (e, t) => {
                                    var n, a;
                                    let [r, l, i] = t;
                                    if (null == l || null == r) return e;
                                    let s = null != (a = e[r]) ? a : [],
                                        o = null == (n = s[s.length - 1]) ? void 0 : n.screenType;
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
                                ee({}, e),
                            ),
                        );
                    }, +B.Z.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, a.jsx)(m.u, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, a.jsx)("div", {
                    children: (0, a.jsxs)(h.zJl, {
                        className: i()(J.panelGroup, J.scroller),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, a.jsx)(ec, {
                                                tag: "div",
                                                pid: e.pid,
                                            }),
                                            (0, a.jsx)(eu, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: n, timestamp: r } = t;
                                                    return (0, a.jsx)(
                                                        h.Text,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: ""
                                                                .concat(n, ":")
                                                                .concat((0, O.sS)(n), " @ ")
                                                                .concat(eo(r)),
                                                        },
                                                        "".concat(e.pid, "-").concat(n, "-").concat(r),
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
            })
        );
    }),
    ep = r.memo(function () {
        var e, t;
        let n = (0, d.cj)([T.default], () => T.default.getTrackedGames()),
            r = (0, V.getPID)(),
            l = (0, d.e7)([T.default], () => T.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, d.Wu)([R.Z], () => [R.Z.enabled, R.Z.keepOpen]),
            o = (0, d.e7)([L.default], () => L.default.getFocusedPID()),
            c = (0, d.e7)([L.default], () => L.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(ei, { pid: e.pid }, e.pid)),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", null != (e = null == o ? void 0 : o.toString()) ? e : "null"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", c ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", null != (t = null == r ? void 0 : r.toString()) ? t : "unknown"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", l ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    eh = [
        {
            mode: _.GO.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: _.GO.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: _.GO.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: _.GO.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: _.GO.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: _.GO.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: _.GO.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    ef = r.memo(function () {
        let [e, t] = es(Y.Odu.CLICK_ZONE_DEBUG),
            [n, l] = es(Y.Odu.PERFORMANCE_DEBUG),
            i = (0, d.e7)([w.Z], () => w.Z.getRenderDebugModes()),
            [s, o] = r.useState({});
        return (
            r.useEffect(() => {
                let e = setInterval(() => {
                    o({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, a.jsx)("div", {
                className: J.panelGroup,
                children: eh.map((s) => {
                    let o =
                            s.mode === _.GO.OverlayRafManagerForceEnabled
                                ? "".concat(s.label, " (").concat(P.Z.getLastRAFCallbackReason(), ")")
                                : s.label,
                        c = () =>
                            s.mode === _.GO.ClickZones
                                ? null != e
                                : s.mode === _.GO.WidgetAreas
                                  ? null != n
                                  : i.has(s.mode);
                    return (0, a.jsx)(
                        r.Fragment,
                        {
                            children: (0, a.jsx)(h.rsf, {
                                checked: c(),
                                onChange: () => {
                                    var e;
                                    let n = c();
                                    s.mode === _.GO.ClickZones && t(),
                                        s.mode === _.GO.WidgetAreas && l(),
                                        (e = s.mode),
                                        b.Z.setRenderDebugMode(!n, e);
                                },
                                label: o,
                                description: s.tooltip,
                            }),
                        },
                        s.mode,
                    );
                }),
            })
        );
    }),
    ex = r.memo(function () {
        let e = (0, d.cj)([T.default], () => T.default.getTrackedGames()),
            t = (0, d.e7)([y.ZP], () => y.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(m.u, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: J.panelGroup,
                                children: [
                                    (0, a.jsx)(h.Text, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    h.Text,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: ""
                                                            .concat(e.pid, " - ")
                                                            .concat(e.name, " (")
                                                            .concat(e.exeName, ")"),
                                                    },
                                                    e.pid,
                                                ),
                                                (0, a.jsx)(eu, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, a.jsx)(m.u, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: J.panelGroup,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, a.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, a.jsx)(el, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    eb = r.memo(function () {
        let e = (0, d.e7)([T.default], () => T.default.getForcedRenderMode()),
            [t, n] = r.useState(e),
            l = [
                {
                    label: _.R5.UNSET,
                    value: _.R5.UNSET,
                },
                {
                    label: _.R5.IN_PROCESS_V2,
                    value: _.R5.IN_PROCESS_V2,
                },
                {
                    label: _.R5.OUT_OF_PROCESS_V3,
                    value: _.R5.OUT_OF_PROCESS_V3,
                },
                {
                    label: _.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: _.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => et(ee({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(m.u, {
            position: "left",
            text: "Override the overlay render mode",
            children: (0, a.jsx)("div", {
                className: J.panelGroup,
                children: (0, a.jsx)(u.B6, {
                    serialize: (e) => e,
                    isSelected: (e) => e === t,
                    options: l,
                    select: (e) => {
                        n(e), b.Z.forceRenderMode(e);
                    },
                    popoutLayerContext: H.O$,
                }),
            }),
        });
    });
function eg(e) {
    let { modalProps: t, onClose: n } = e,
        [l, i] = r.useState(null);
    function s() {
        n(null);
    }
    return (0, a.jsxs)(
        h.Y0X,
        et(
            ee(
                {
                    size: h.CgR.LARGE,
                    "aria-label": "Breadcrumb Import",
                },
                t,
            ),
            {
                transitionState: t.transitionState,
                parentComponent: "BreadcrumbImportPanel",
                children: [
                    (0, a.jsxs)(h.xBx, {
                        align: j.Z.Align.CENTER,
                        justify: j.Z.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(h.Text, {
                                variant: "text-md/bold",
                                color: "text-feedback-critical",
                                children: "Breadcrumb Import",
                            }),
                            (0, a.jsx)(h.olH, { onClick: s }),
                        ],
                    }),
                    (0, a.jsx)(h.hzk, {
                        children: (0, a.jsx)("div", {
                            className: J.panelGroup,
                            children: (0, a.jsx)(h.Kx8, {
                                label: "Paste JSON Here",
                                onChange: i,
                                value: null != l ? l : "",
                                rows: 12,
                            }),
                        }),
                    }),
                    (0, a.jsx)(h.mzw, {
                        children: (0, a.jsxs)(h.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(h.Button, {
                                    variant: "primary",
                                    text: "Import",
                                    onClick: function () {
                                        n(l);
                                    },
                                }),
                                (0, a.jsx)(h.Button, {
                                    variant: "secondary",
                                    text: "Clear",
                                    onClick: s,
                                }),
                            ],
                        }),
                    }),
                ],
            },
        ),
    );
}
let ev = {
    native: {
        label: "Native",
        filter: (e) => e.type === S.C7.NativeLegacy || e.type === S.C7.NativeOOP,
    },
    render: {
        label: "Render",
        filter: (e) => e.type === S.C7.Renderer,
    },
    flux: {
        label: "Flux",
        filter: (e) => e.type === S.C7.Flux,
    },
    client: {
        label: "Client",
        filter: (e) => e.type === S.C7.OOPModule || e.type === S.C7.LegacyModule,
    },
};
function ej(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.l6.Info;
    if (t === S.l6.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case S.C7.NativeLegacy:
            return "var(--yellow-500)";
        case S.C7.NativeOOP:
            return "var(--green-500)";
        case S.C7.Flux:
            return "var(--brand-400)";
        case S.C7.Renderer:
            return "var(--brand-500)";
        case S.C7.LegacyModule:
            return "var(--yellow-300)";
        case S.C7.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let ey = [
    {
        key: "type",
        cellClassName: J.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = eC(t);
            return (0, a.jsx)("div", {
                className: J.tableBar,
                style: { color: ej(t, n) },
                children: (0, a.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: J.nameColumn,
        render(e) {
            let { name: t, type: n, logType: r } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(h.Text, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case S.l6.Info:
                                    return "text-strong";
                                case S.l6.Warning:
                                    return "text-feedback-warning";
                                case S.l6.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(r),
                        children: t,
                    }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: ["(", n, ")"],
                    }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: J.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, U.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function eC(e) {
    switch (e) {
        case S.C7.NativeLegacy:
            return h.GON;
        case S.C7.NativeOOP:
            return h.ljO;
        case S.C7.Renderer:
        case S.C7.Flux:
            return h.n6r;
        case S.C7.LegacyModule:
            return h.pzj;
        case S.C7.OOPModule:
            return h.m3e;
        default:
            return h.pzj;
    }
}
function e_(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let eS = ["__webpack_require__", "fn"],
    eE = ["web.js", "web.js.map"],
    eT = [
        {
            id: "details",
            name: "Details",
            group: q.v0.NONE,
            render: (e) => {
                var t, n, r, l;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: m, nativeId: p, stack: f, data: x, timestamp: b, pid: g } = s,
                    v = o()(b),
                    j = eC(u);
                return (0, a.jsxs)(h.w0Z, {
                    className: J.subPanelScroller,
                    children: [
                        (0, a.jsxs)(C.Z, {
                            className: i()($.headerBar, J.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: ej(u, m) },
                                    className: J.headerIcon,
                                    children: (0, a.jsx)(j, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(C.Z.Title, {
                                    wrapperClassName: J.headerTitle,
                                    children: [
                                        d,
                                        " (",
                                        u,
                                        ")",
                                        (0, a.jsx)(h.P3F, {
                                            tag: "span",
                                            className: J.copyEventButton,
                                            onClick: () => (0, M.JG)(d),
                                            children: (0, a.jsx)(h.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(C.Z.Icon, {
                                    icon: h.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, M.JG)(e_(s));
                                    },
                                }),
                                (0, a.jsx)(C.Z.Icon, {
                                    icon: h.k$p,
                                    tooltip: "Close",
                                    onClick: c,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(z.E, {
                            className: J.commonProperties,
                            children: [
                                (0, a.jsx)(z.Z9, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, U.vc)(v, "LLLL"),
                                        children: (0, U.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Log Type",
                                    copyValue: m,
                                    children: (0, a.jsx)("code", { children: m }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "PID",
                                    copyValue: null != (t = null == g ? void 0 : g.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == g ? void 0 : g.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (r = null == p ? void 0 : p.toString()) ? r : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (l = null == p ? void 0 : p.toString()) ? l : "null",
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Data",
                                    copyValue: e_(x),
                                    children: (0, a.jsx)("code", { children: e_(x) }),
                                }),
                                null != f &&
                                    (0, a.jsx)(z.Z9, {
                                        name: "Stack Trace",
                                        copyValue: f,
                                        children: (0, a.jsx)("code", {
                                            children: f.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, r, l, i] = n,
                                                        s = r.split(/[\\/]/).pop();
                                                    return eS.includes(e.trim())
                                                        ? null
                                                        : (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, a.jsx)("span", {
                                                                          className: J.stackTraceFunction,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eE.includes(null != s ? s : "") &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, a.jsxs)("span", {
                                                                                      className: J.stackTraceLocation,
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
                                                return (0, a.jsx)("div", { children: e }, t);
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
    eO = {
        searchType: I.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e,
                l = [t, n, JSON.stringify(r)];
            return null != a && l.push(a), l;
        },
        throttleMs: 100,
    };
function eN() {
    let { ref: e, height: t } = (0, v.ZP)(),
        n = (0, d.e7)([w.Z], () => w.Z.isModuleLoggingEnabled()),
        [l, s] = r.useState(n),
        [o, c] = r.useState(!1),
        [u, m] = r.useState(null),
        [p, f] = r.useState(Object.keys(ev)),
        [x, g] = (0, d.e7)([w.Z], () => w.Z.getOverlayLoggingBreadcrumbs(), [], F.Q),
        [j, y] = r.useState(null),
        C = null != j ? j : x,
        _ = null != j ? -1 : g;
    r.useEffect(() => {
        0 !== _ &&
            (o
                ? m(C.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : m(null));
    }, [o, C, _]);
    let [S, E] = r.useState(""),
        T = r.useMemo(
            () =>
                0 === _
                    ? []
                    : C.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of p) {
                              let { filter: n } = ev[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [C, p, u, o, _],
        ),
        [O, N] = r.useState(T),
        [P, I] = r.useState(null),
        R = r.useMemo(() => C.find((e) => e.key === P), [C, P]),
        A = r.useCallback((e) => {
            N(e);
        }, []),
        { renderSelectedTab: Z } = (0, q.ZP)({ tabs: eT }, []);
    (0, k.BO)(S, T, A, eO, [C]);
    let D = r.useCallback((e) => {
            s(e), b.Z.setModuleLogging(e);
        }, []),
        [L, U] = r.useState(!1),
        B = r.useRef(null),
        G = r.useCallback(() => {
            (0, M.JG)(JSON.stringify(T)), U(!0);
        }, [T]);
    r.useEffect(() => {
        if (L)
            return (
                (B.current = setTimeout(() => {
                    U(!1);
                }, 4000)),
                () => {
                    null != B.current && clearTimeout(B.current);
                }
            );
    }, [L]);
    let V = r.useCallback((e) => {
            y(null != e ? JSON.parse(e) : null);
        }, []),
        H = r.useCallback(
            (e) => {
                if (e) return y(null);
                (0, h.h7j)(
                    (e) =>
                        (0, a.jsx)(eg, {
                            modalProps: e,
                            onClose: (t) => {
                                V(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    h.z1l,
                );
            },
            [V],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: J.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: J.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: i()(J.toolbar, J.filtersToolbar),
                        children: [
                            (0, a.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: J.pollBreadcrumbs,
                                children: (0, a.jsx)(h.Checkbox, {
                                    label: "Poll Native",
                                    checked: l,
                                    onChange: (e) => D(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: J.pollBreadcrumbs,
                                children: (0, a.jsx)(h.Checkbox, {
                                    label: "Only Active Games",
                                    checked: o,
                                    onChange: (e) => c(e),
                                }),
                            }),
                            (0, a.jsxs)(h.P3F, {
                                className: J.copyAll,
                                onClick: G,
                                children: [
                                    (0, a.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: L ? "Copied" : "Copy All",
                                    }),
                                    L
                                        ? (0, a.jsx)(h.dz2, {
                                              size: "sm",
                                              color: h.TVs.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, a.jsx)(h.TIy, {
                                              color: "currentColor",
                                              size: "sm",
                                          }),
                                ],
                            }),
                            (0, a.jsx)(h.P3F, {
                                className: J.copyAll,
                                onClick: () => H(null != j),
                                children: (0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i()(J.toolbar, J.filtersToolbar),
                        children: Object.entries(ev).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                h.P3F,
                                {
                                    className: i()(J.filter, p.includes(t) && J.activeFilter),
                                    onClick: () => {
                                        f((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, a.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "currentColor",
                                        children: n.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: J.toolbar,
                        children: (0, a.jsx)(h.E1j, {
                            query: S,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(J.panelGroup, J.tableContainer),
                children: (0, a.jsx)(K.Z, {
                    columns: ey,
                    data: O,
                    selectedRowKey: null != P ? P : void 0,
                    onClickRow: (e) => I(e.key),
                }),
            }),
            null != R &&
                (0, a.jsx)(W.Z, {
                    className: i()(J.panelGroup, J.subPanel),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: Z({
                        breadcrumb: R,
                        onClose: () => I(null),
                    }),
                }),
        ],
    });
}
let ew = r.memo(function () {
        let e = (0, d.e7)([N.Z], () => N.Z.getPopoutInitializationStages());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)("div", {
                    className: J.panelHeader,
                    children: (0, a.jsx)(h.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, a.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    eP = r.memo(function () {
        let e = (0, d.e7)([w.Z], () => w.Z.isStateDebuggingEnabled()),
            t = (0, d.e7)([w.Z], () => w.Z.getDebuggingState());
        return (
            r.useEffect(
                () => (
                    b.Z.setStateDebugging(!0),
                    () => {
                        b.Z.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, a.jsxs)("div", {
                className: J.panelGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: J.panelHeader,
                        children: (0, a.jsx)(h.rsf, {
                            checked: e,
                            onChange: () => b.Z.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, a.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function eI() {
    return (0, a.jsx)(h.w0Z, {
        children: (0, a.jsxs)("div", {
            className: i()($.panel, J.subPanel),
            children: [
                (0, a.jsx)(ef, {}),
                (0, a.jsx)(eb, {}),
                (0, a.jsx)(ex, {}),
                (0, a.jsx)(ep, {}),
                (0, a.jsx)(ed, {}),
                (0, a.jsx)(em, {}),
                (0, a.jsx)(ew, {}),
                (0, a.jsx)(eP, {}),
            ],
        }),
    });
}
let ek = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    eR = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    eA = r.memo(function () {
        let e = (0, E.xj)(),
            t = (0, d.e7)([D.ZP], () => D.ZP.getOverlayKeybind());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)(h.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Overlay Default Keybind Experiment",
                }),
                (0, a.jsx)(h.Heading, {
                    variant: "heading-md/semibold",
                    children: "Experiment State",
                }),
                (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, a.jsx)("pre", {
                        children: JSON.stringify(et(ee({}, e), { overlayKeybind: (0, G.BB)(t.shortcut) }), void 0, 2),
                    }),
                }),
                (0, a.jsx)(h.Heading, {
                    variant: "heading-md/semibold",
                    children: "Overrides",
                }),
                (0, a.jsx)(u.B6, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === eR(e.overrideIsNewOverlayUser),
                    options: [
                        {
                            label: "Disabled (no override)",
                            value: "Disabled",
                        },
                        {
                            label: "Existing user",
                            value: "False",
                        },
                        {
                            label: "New user",
                            value: "True",
                        },
                    ],
                    select: (e) => {
                        (0, E.jt)(ek(e));
                    },
                    popoutLayerContext: H.O$,
                }),
                (0, a.jsx)(u.B6, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === eR(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        {
                            label: "Disabled (no override)",
                            value: "Disabled",
                        },
                        {
                            label: "Using default keybind",
                            value: "True",
                        },
                        {
                            label: "Not using default keybind",
                            value: "False",
                        },
                    ],
                    select: (e) => {
                        (0, E.FM)(ek(e));
                    },
                    popoutLayerContext: H.O$,
                }),
                (0, a.jsx)(h.Heading, {
                    variant: "heading-md/semibold",
                    children: "Actions",
                }),
                (0, a.jsx)(h.Button, {
                    size: "sm",
                    text: "Reset isNewOverlayUser",
                    onClick: () => (0, E.Wx)(),
                }),
                (0, a.jsx)(h.Button, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, E.Zh)(),
                }),
            ],
        });
    });
function eZ() {
    return (0, a.jsx)(h.w0Z, {
        children: (0, a.jsx)("div", {
            className: i()($.panel, J.subPanel),
            children: (0, a.jsx)(eA, {}),
        }),
    });
}
function eD() {
    let [e, t] = r.useState("state");
    return (
        r.useEffect(
            () => (
                f.Z.dispatch({
                    type: "OVERLAY_SET_DETAILED_LOGGING",
                    enabled: !0,
                }),
                () => {
                    f.Z.dispatch({
                        type: "OVERLAY_SET_DETAILED_LOGGING",
                        enabled: !1,
                    });
                }
            ),
            [],
        ),
        (0, a.jsxs)("div", {
            className: i()($.panel, J.panel),
            children: [
                (0, a.jsxs)("div", {
                    className: J.toolbar,
                    children: [
                        (0, a.jsx)(h.P3F, {
                            className: i()(J.paneOption, "state" === e && J.activePaneOption),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(h.P3F, {
                            className: i()(J.paneOption, "logging" === e && J.activePaneOption),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, a.jsx)(h.P3F, {
                            className: i()(J.paneOption, "experiments" === e && J.activePaneOption),
                            onClick: () => t("experiments"),
                            children: (0, a.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(eI, {}),
                "logging" === e && (0, a.jsx)(eN, {}),
                "experiments" === e && (0, a.jsx)(eZ, {}),
            ],
        })
    );
}
