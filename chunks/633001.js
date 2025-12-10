n.d(t, { Z: () => eD }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(772848),
    d = n(442837),
    u = n(199849),
    m = n(755721),
    p = n(481060),
    h = n(570140),
    x = n(765250),
    f = n(13245),
    g = n(593472),
    b = n(393238),
    v = n(600164),
    j = n(594190),
    _ = n(984370),
    y = n(837268),
    C = n(307149),
    S = n(991186),
    E = n(371651),
    O = n(829907),
    T = n(610394),
    N = n(338949),
    P = n(556809),
    w = n(886118),
    I = n(301801),
    k = n(352527),
    R = n(355863),
    A = n(449224),
    D = n(556296),
    Z = n(808506),
    L = n(572004),
    M = n(55935),
    U = n(70956),
    B = n(136015),
    F = n(13140),
    G = n(145597),
    V = n(246992),
    H = n(257785),
    W = n(484036),
    z = n(681619),
    q = n(621060),
    K = n(981631),
    Q = n(757744),
    Y = n(388032),
    X = n(454741),
    J = n(451429);
function $(e) {
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
function ee(e, t) {
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
let et = {
        [K.Odu.CLICK_ZONE_DEBUG]: (e) =>
            ee(
                $(
                    {
                        type: K.Odu.CLICK_ZONE_DEBUG,
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
                    R.Z.getWidgetDefaultSettings(K.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [K.Odu.PERFORMANCE_DEBUG]: (e) =>
            ee(
                $(
                    {
                        type: K.Odu.PERFORMANCE_DEBUG,
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
                    R.Z.getWidgetDefaultSettings(K.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    en = {};
function ea(e) {
    let { id: t } = e,
        [n, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        i(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [n]),
        (0, a.jsxs)(m.zx, {
            look: m.zx.Looks.LINK,
            color: m.zx.Colors.LINK,
            size: m.zx.Sizes.MIN,
            onClick: function () {
                (0, L.JG)(t, () => i(!0));
            },
            className: X.copyId,
            children: ["Application Id: ", t, " ", n ? Y.intl.string(Y.t.t5VZ88) : null],
        })
    );
}
let er = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([j.ZP], () => j.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([A.Z], () => A.Z.getGameForPID(t.pid)),
            i = (0, d.e7)([j.ZP], () => (null == n ? null : j.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                (0, a.jsx)(p.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    children: t.gameName,
                }),
                (0, a.jsx)(p.Text, {
                    variant: "text-sm/bold",
                    color: "text-subtle",
                    children: t.pid,
                }),
                (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: null == n ? void 0 : n.exeName,
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", (null == n ? void 0 : n.isLauncher) ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, a.jsx)(p.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, a.jsx)(ea, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, O.sS)(t.fullscreenType)],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["state: ", t.state],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, a.jsxs)("div", {
                    className: X.panelGroup,
                    children: [
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, O.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsxs)("div", {
                        className: X.panelGroup,
                        children: [
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, O.P_)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", (null == n ? void 0 : n.hidden) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", (null == r ? void 0 : r.hook) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", (null == r ? void 0 : r.overlay) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "overlayCompatibilityHook: ",
                        (null == r ? void 0 : r.overlayCompatibilityHook) ? "Yes" : "No",
                    ],
                }),
                (0, a.jsxs)(p.Text, {
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
            n = (0, d.cj)([Z.default], () => Z.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            i = (0, d.e7)([Z.default], () => Z.default.isInputLocked(t), [t]),
            l = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([Z.default], () => Z.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                (0, a.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: "".concat(t),
                }),
                (0, a.jsxs)(p.Text, {
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
                (0, a.jsxs)(p.Text, {
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
                (0, a.jsxs)(p.Text, {
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
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", n.get(Number(t))],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLocked: ", i],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", l],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isReady: ", o],
                }),
            ],
        });
    });
function el(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([R.Z], () => R.Z.getWidgetsForLayout(Q.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, x.E9)(n.id);
            else {
                let t = et[e];
                if (null == t) return;
                let n = t(Q.$S);
                (0, x.A4)(n);
            }
        },
    ];
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, M.vc)(o()(e), "h:mm:ss.SSS");
}
let eo = r.memo(function (e) {
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
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["pid"]);
    let r = (0, d.e7)([E.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = E.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((en[t] = a), a) : null != (n = en[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        p.Text,
        ee($({}, n), {
            variant: "text-md/semibold",
            color: "text-strong",
            children: r,
        }),
    );
});
function ec() {
    let e = (0, d.e7)([N.Z], () => N.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([E.default], () => E.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: X.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: X.panelHeader,
                children: [
                    (0, a.jsx)(p.rsf, {
                        checked: e,
                        onChange: () =>
                            void f.Z.setRenderDebugMode(
                                !N.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs),
                                y.GO.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, a.jsx)(p.P3F, {
                        className: X.panelButton,
                        onClick: () => f.Z.clearTrackedPids(),
                        children: (0, a.jsx)(p.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(p.zJl, {
                className: l()(X.panelGroup, X.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, n, i] = e;
                        return (0, a.jsx)(
                            r.Fragment,
                            {
                                children: (0, a.jsx)(p.aML, {
                                    "data-migration-pending": !0,
                                    position: "left",
                                    text: i === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, a.jsx)(
                                            "div",
                                            ee($({}, e), {
                                                children: (0, a.jsxs)(p.Text, {
                                                    variant: "text-sm/medium",
                                                    color:
                                                        i === y.d5.TRACK_FOCUS
                                                            ? "text-default"
                                                            : "text-feedback-critical",
                                                    children: [
                                                        (0, a.jsx)(eo, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == n ? void 0 : n.toString()) ? r : "null",
                                                        " @ ",
                                                        es(t),
                                                    ],
                                                }),
                                            }),
                                        );
                                    },
                                }),
                            },
                            "".concat(n, "-").concat(t),
                        );
                    }),
                ],
            }),
        ],
    });
}
let ed = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([E.default, j.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = E.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = j.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : g.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, O.sS)(n) : "Unknown"],
        });
    }),
    eu = r.memo(function () {
        let e = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            [t, n] = r.useState({}),
            i = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (i.current = setInterval(async () => {
                        let e = j.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, O.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
                        let r = await Promise.all(t);
                        n((e) =>
                            r.reduce(
                                (e, t) => {
                                    var n, a;
                                    let [r, i, l] = t;
                                    if (null == i || null == r) return e;
                                    let s = null != (a = e[r]) ? a : [],
                                        o = null == (n = s[s.length - 1]) ? void 0 : n.screenType;
                                    return (
                                        (0 === s.length || o !== i) &&
                                            (e[r] = [
                                                ...s,
                                                {
                                                    pid: r,
                                                    screenType: i,
                                                    timestamp: l,
                                                },
                                            ]),
                                        e
                                    );
                                },
                                $({}, e),
                            ),
                        );
                    }, +U.Z.Millis.SECOND)),
                    () => clearInterval(i.current)
                ),
                [],
            ),
            (0, a.jsx)(p.aML, {
                "data-migration-pending": !0,
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (n) =>
                    (0, a.jsx)(
                        "div",
                        ee($({}, n), {
                            children: (0, a.jsxs)(p.zJl, {
                                className: l()(X.panelGroup, X.scroller),
                                children: [
                                    0 === Object.keys(e).length &&
                                        (0, a.jsx)(p.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "No recent screen types",
                                        }),
                                    Object.values(e).map((e) =>
                                        (0, a.jsxs)(
                                            "div",
                                            {
                                                children: [
                                                    (0, a.jsx)(eo, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, a.jsx)(ed, { pid: e.pid }),
                                                    null != t[e.pid] &&
                                                        [...t[e.pid]].reverse().map((t) => {
                                                            let { screenType: n, timestamp: r } = t;
                                                            return (0, a.jsx)(
                                                                p.Text,
                                                                {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-default",
                                                                    children: ""
                                                                        .concat(n, ":")
                                                                        .concat((0, O.sS)(n), " @ ")
                                                                        .concat(es(r)),
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
                    ),
            })
        );
    }),
    em = r.memo(function () {
        var e, t;
        let n = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            r = (0, G.getPID)(),
            i = (0, d.e7)([E.default], () => E.default.isOverlayOOPEnabledForPid(r), [r]),
            [l, s] = (0, d.Wu)([k.Z], () => [k.Z.enabled, k.Z.keepOpen]),
            o = (0, d.e7)([Z.default], () => Z.default.getFocusedPID()),
            c = (0, d.e7)([Z.default], () => Z.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(ei, { pid: e.pid }, e.pid)),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", null != (e = null == o ? void 0 : o.toString()) ? e : "null"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", c ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", null != (t = null == r ? void 0 : r.toString()) ? t : "unknown"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", i ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    ep = [
        {
            mode: y.GO.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: y.GO.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: y.GO.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: y.GO.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: y.GO.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: y.GO.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: y.GO.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    eh = r.memo(function () {
        let [e, t] = el(K.Odu.CLICK_ZONE_DEBUG),
            [n, i] = el(K.Odu.PERFORMANCE_DEBUG),
            l = (0, d.e7)([N.Z], () => N.Z.getRenderDebugModes()),
            [s, o] = r.useState({});
        return (
            r.useEffect(() => {
                let e = setInterval(() => {
                    o({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, a.jsx)("div", {
                className: X.panelGroup,
                children: ep.map((s) => {
                    let o =
                            s.mode === y.GO.OverlayRafManagerForceEnabled
                                ? "".concat(s.label, " (").concat(P.Z.getLastRAFCallbackReason(), ")")
                                : s.label,
                        c = () =>
                            s.mode === y.GO.ClickZones
                                ? null != e
                                : s.mode === y.GO.WidgetAreas
                                  ? null != n
                                  : l.has(s.mode);
                    return (0, a.jsx)(
                        r.Fragment,
                        {
                            children: (0, a.jsx)(p.rsf, {
                                checked: c(),
                                onChange: () => {
                                    var e;
                                    let n = c();
                                    s.mode === y.GO.ClickZones && t(),
                                        s.mode === y.GO.WidgetAreas && i(),
                                        (e = s.mode),
                                        f.Z.setRenderDebugMode(!n, e);
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
        let e = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            t = (0, d.e7)([j.ZP], () => j.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(p.aML, {
                        "data-migration-pending": !0,
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                ee($({}, e), {
                                    children: (0, a.jsxs)("div", {
                                        className: X.panelGroup,
                                        children: [
                                            (0, a.jsx)(p.Text, {
                                                variant: "text-md/bold",
                                                color: "text-feedback-critical",
                                                children: "Untracked Running Games",
                                            }),
                                            t.map((e) =>
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(
                                                            p.Text,
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
                                                        (0, a.jsx)(ed, { pid: e.pid }),
                                                    ],
                                                }),
                                            ),
                                        ],
                                    }),
                                }),
                            ),
                    }),
                (0, a.jsx)(p.aML, {
                    "data-migration-pending": !0,
                    position: "left",
                    text: "The current running games process information",
                    children: (t) =>
                        (0, a.jsx)(
                            "div",
                            ee($({}, t), {
                                children: (0, a.jsxs)("div", {
                                    className: X.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, a.jsx)(p.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, a.jsx)(er, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    ef = r.memo(function () {
        let e = (0, d.e7)([E.default], () => E.default.getForcedRenderMode()),
            [t, n] = r.useState(e),
            i = (e) => {
                n(e), f.Z.forceRenderMode(e);
            },
            l = [
                {
                    label: y.R5.UNSET,
                    value: y.R5.UNSET,
                },
                {
                    label: y.R5.IN_PROCESS_V2,
                    value: y.R5.IN_PROCESS_V2,
                },
                {
                    label: y.R5.OUT_OF_PROCESS_V3,
                    value: y.R5.OUT_OF_PROCESS_V3,
                },
                {
                    label: y.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: y.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ee($({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(p.aML, {
            "data-migration-pending": !0,
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, a.jsx)(
                    "div",
                    ee($({}, e), {
                        className: X.panelGroup,
                        children: (0, a.jsx)(u.B6, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: l,
                            select: i,
                            popoutLayerContext: V.O$,
                        }),
                    }),
                ),
        });
    });
function eg(e) {
    let { modalProps: t, onClose: n } = e,
        [i, l] = r.useState(null);
    function s() {
        n(null);
    }
    return (0, a.jsxs)(
        p.Y0X,
        ee(
            $(
                {
                    size: p.CgR.LARGE,
                    "aria-label": "Breadcrumb Import",
                },
                t,
            ),
            {
                transitionState: t.transitionState,
                parentComponent: "BreadcrumbImportPanel",
                children: [
                    (0, a.jsxs)(p.xBx, {
                        align: v.Z.Align.CENTER,
                        justify: v.Z.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(p.Text, {
                                variant: "text-md/bold",
                                color: "text-feedback-critical",
                                children: "Breadcrumb Import",
                            }),
                            (0, a.jsx)(p.olH, { onClick: s }),
                        ],
                    }),
                    (0, a.jsx)(p.hzk, {
                        children: (0, a.jsx)("div", {
                            className: X.panelGroup,
                            children: (0, a.jsx)(p.Kx8, {
                                label: "Paste JSON Here",
                                onChange: l,
                                value: null != i ? i : "",
                                rows: 12,
                            }),
                        }),
                    }),
                    (0, a.jsx)(p.mzw, {
                        children: (0, a.jsxs)(p.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(p.Button, {
                                    variant: "primary",
                                    text: "Import",
                                    onClick: function () {
                                        n(i);
                                    },
                                }),
                                (0, a.jsx)(p.Button, {
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
let eb = {
    native: {
        label: "Native",
        filter: (e) => e.type === C.C7.NativeLegacy || e.type === C.C7.NativeOOP,
    },
    render: {
        label: "Render",
        filter: (e) => e.type === C.C7.Renderer,
    },
    flux: {
        label: "Flux",
        filter: (e) => e.type === C.C7.Flux,
    },
    client: {
        label: "Client",
        filter: (e) => e.type === C.C7.OOPModule || e.type === C.C7.LegacyModule,
    },
};
function ev(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.l6.Info;
    if (t === C.l6.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case C.C7.NativeLegacy:
            return "var(--yellow-500)";
        case C.C7.NativeOOP:
            return "var(--green-500)";
        case C.C7.Flux:
            return "var(--brand-400)";
        case C.C7.Renderer:
            return "var(--brand-500)";
        case C.C7.LegacyModule:
            return "var(--yellow-300)";
        case C.C7.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let ej = [
    {
        key: "type",
        cellClassName: X.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = e_(t);
            return (0, a.jsx)("div", {
                className: X.tableBar,
                style: { color: ev(t, n) },
                children: (0, a.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: X.nameColumn,
        render(e) {
            let { name: t, type: n, logType: r } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(p.Text, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case C.l6.Info:
                                    return "text-strong";
                                case C.l6.Warning:
                                    return "text-feedback-warning";
                                case C.l6.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(r),
                        children: t,
                    }),
                    (0, a.jsxs)(p.Text, {
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
        cellClassName: X.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, M.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function e_(e) {
    switch (e) {
        case C.C7.NativeLegacy:
            return p.GON;
        case C.C7.NativeOOP:
            return p.ljO;
        case C.C7.Renderer:
        case C.C7.Flux:
            return p.n6r;
        case C.C7.LegacyModule:
            return p.pzj;
        case C.C7.OOPModule:
            return p.m3e;
        default:
            return p.pzj;
    }
}
function ey(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let eC = ["__webpack_require__", "fn"],
    eS = ["web.js", "web.js.map"],
    eE = [
        {
            id: "details",
            name: "Details",
            group: q.v0.NONE,
            render: (e) => {
                var t, n, r, i;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: m, nativeId: h, stack: x, data: f, timestamp: g, pid: b } = s,
                    v = o()(g),
                    j = e_(u);
                return (0, a.jsxs)(p.w0Z, {
                    className: X.subPanelScroller,
                    children: [
                        (0, a.jsxs)(_.Z, {
                            className: l()(J.headerBar, X.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: ev(u, m) },
                                    className: X.headerIcon,
                                    children: (0, a.jsx)(j, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(_.Z.Title, {
                                    wrapperClassName: X.headerTitle,
                                    children: [
                                        d,
                                        " (",
                                        u,
                                        ")",
                                        (0, a.jsx)(p.P3F, {
                                            tag: "span",
                                            className: X.copyEventButton,
                                            onClick: () => (0, L.JG)(d),
                                            children: (0, a.jsx)(p.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(_.Z.Icon, {
                                    icon: p.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, L.JG)(ey(s));
                                    },
                                }),
                                (0, a.jsx)(_.Z.Icon, {
                                    icon: p.k$p,
                                    tooltip: "Close",
                                    onClick: c,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(H.E, {
                            className: X.commonProperties,
                            children: [
                                (0, a.jsx)(H.Z9, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, M.vc)(v, "LLLL"),
                                        children: (0, M.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(H.Z9, {
                                    name: "Log Type",
                                    copyValue: m,
                                    children: (0, a.jsx)("code", { children: m }),
                                }),
                                (0, a.jsx)(H.Z9, {
                                    name: "PID",
                                    copyValue: null != (t = null == b ? void 0 : b.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == b ? void 0 : b.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(H.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (r = null == h ? void 0 : h.toString()) ? r : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (i = null == h ? void 0 : h.toString()) ? i : "null",
                                    }),
                                }),
                                (0, a.jsx)(H.Z9, {
                                    name: "Data",
                                    copyValue: ey(f),
                                    children: (0, a.jsx)("code", { children: ey(f) }),
                                }),
                                null != x &&
                                    (0, a.jsx)(H.Z9, {
                                        name: "Stack Trace",
                                        copyValue: x,
                                        children: (0, a.jsx)("code", {
                                            children: x.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, r, i, l] = n,
                                                        s = r.split(/[\\/]/).pop();
                                                    return eC.includes(e.trim())
                                                        ? null
                                                        : (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, a.jsx)("span", {
                                                                          className: X.stackTraceFunction,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eS.includes(null != s ? s : "") &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, a.jsxs)("span", {
                                                                                      className: X.stackTraceLocation,
                                                                                      title: r,
                                                                                      children: [s, ":", i, ":", l],
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
        searchType: w.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e,
                i = [t, n, JSON.stringify(r)];
            return null != a && i.push(a), i;
        },
        throttleMs: 100,
    };
function eT() {
    let { ref: e, height: t } = (0, b.ZP)(),
        n = (0, d.e7)([N.Z], () => N.Z.isModuleLoggingEnabled()),
        [i, s] = r.useState(n),
        [o, c] = r.useState(!1),
        [u, m] = r.useState(null),
        [h, x] = r.useState(Object.keys(eb)),
        [g, v] = (0, d.e7)([N.Z], () => N.Z.getOverlayLoggingBreadcrumbs(), [], B.Q),
        [j, _] = r.useState(null),
        y = null != j ? j : g,
        C = null != j ? -1 : v;
    r.useEffect(() => {
        0 !== C &&
            (o
                ? m(y.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : m(null));
    }, [o, y, C]);
    let [S, E] = r.useState(""),
        O = r.useMemo(
            () =>
                0 === C
                    ? []
                    : y.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of h) {
                              let { filter: n } = eb[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [y, h, u, o, C],
        ),
        [T, P] = r.useState(O),
        [w, k] = r.useState(null),
        R = r.useMemo(() => y.find((e) => e.key === w), [y, w]),
        A = r.useCallback((e) => {
            P(e);
        }, []),
        { renderSelectedTab: D } = (0, q.ZP)({ tabs: eE }, []);
    (0, I.BO)(S, O, A, eO, [y]);
    let Z = r.useCallback((e) => {
            s(e), f.Z.setModuleLogging(e);
        }, []),
        [M, U] = r.useState(!1),
        F = r.useRef(null),
        G = r.useCallback(() => {
            (0, L.JG)(JSON.stringify(O)), U(!0);
        }, [O]);
    r.useEffect(() => {
        if (M)
            return (
                (F.current = setTimeout(() => {
                    U(!1);
                }, 4000)),
                () => {
                    null != F.current && clearTimeout(F.current);
                }
            );
    }, [M]);
    let V = r.useCallback((e) => {
            _(null != e ? JSON.parse(e) : null);
        }, []),
        H = r.useCallback(
            (e) => {
                if (e) return _(null);
                (0, p.h7j)(
                    (e) =>
                        (0, a.jsx)(eg, {
                            modalProps: e,
                            onClose: (t) => {
                                V(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    p.z1l,
                );
            },
            [V],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: X.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: X.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: l()(X.toolbar, X.filtersToolbar),
                        children: [
                            (0, a.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: X.pollBreadcrumbs,
                                children: (0, a.jsx)(p.Checkbox, {
                                    label: "Poll Native",
                                    checked: i,
                                    onChange: (e) => Z(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: X.pollBreadcrumbs,
                                children: (0, a.jsx)(p.Checkbox, {
                                    label: "Only Active Games",
                                    checked: o,
                                    onChange: (e) => c(e),
                                }),
                            }),
                            (0, a.jsxs)(p.P3F, {
                                className: X.copyAll,
                                onClick: G,
                                children: [
                                    (0, a.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: M ? "Copied" : "Copy All",
                                    }),
                                    M
                                        ? (0, a.jsx)(p.dz2, {
                                              size: "sm",
                                              color: p.TVs.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, a.jsx)(p.TIy, {
                                              color: "currentColor",
                                              size: "sm",
                                          }),
                                ],
                            }),
                            (0, a.jsx)(p.P3F, {
                                className: X.copyAll,
                                onClick: () => H(null != j),
                                children: (0, a.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(X.toolbar, X.filtersToolbar),
                        children: Object.entries(eb).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                p.P3F,
                                {
                                    className: l()(X.filter, h.includes(t) && X.activeFilter),
                                    onClick: () => {
                                        x((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, a.jsx)(p.Text, {
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
                        className: X.toolbar,
                        children: (0, a.jsx)(p.E1j, {
                            query: S,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(X.panelGroup, X.tableContainer),
                children: (0, a.jsx)(z.Z, {
                    columns: ej,
                    data: T,
                    selectedRowKey: null != w ? w : void 0,
                    onClickRow: (e) => k(e.key),
                }),
            }),
            null != R &&
                (0, a.jsx)(W.Z, {
                    className: l()(X.panelGroup, X.subPanel),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: D({
                        breadcrumb: R,
                        onClose: () => k(null),
                    }),
                }),
        ],
    });
}
let eN = r.memo(function () {
        let e = (0, d.e7)([T.Z], () => T.Z.getPopoutInitializationStages());
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                (0, a.jsx)("div", {
                    className: X.panelHeader,
                    children: (0, a.jsx)(p.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, a.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    eP = r.memo(function () {
        let e = (0, d.e7)([N.Z], () => N.Z.isStateDebuggingEnabled()),
            t = (0, d.e7)([N.Z], () => N.Z.getDebuggingState());
        return (
            r.useEffect(
                () => (
                    f.Z.setStateDebugging(!0),
                    () => {
                        f.Z.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, a.jsxs)("div", {
                className: X.panelGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: X.panelHeader,
                        children: (0, a.jsx)(p.rsf, {
                            checked: e,
                            onChange: () => f.Z.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, a.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function ew() {
    return (0, a.jsx)(p.w0Z, {
        children: (0, a.jsxs)("div", {
            className: l()(J.panel, X.subPanel),
            children: [
                (0, a.jsx)(eh, {}),
                (0, a.jsx)(ef, {}),
                (0, a.jsx)(ex, {}),
                (0, a.jsx)(em, {}),
                (0, a.jsx)(ec, {}),
                (0, a.jsx)(eu, {}),
                (0, a.jsx)(eN, {}),
                (0, a.jsx)(eP, {}),
            ],
        }),
    });
}
let eI = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    ek = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    eR = r.memo(function () {
        let e = (0, S.xj)(),
            t = (0, d.e7)([D.ZP], () => D.ZP.getOverlayKeybind());
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                (0, a.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Overlay Default Keybind Experiment",
                }),
                (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: "Experiment State",
                }),
                (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, a.jsx)("pre", {
                        children: JSON.stringify(ee($({}, e), { overlayKeybind: (0, F.BB)(t.shortcut) }), void 0, 2),
                    }),
                }),
                (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: "Overrides",
                }),
                (0, a.jsx)(u.B6, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === ek(e.overrideIsNewOverlayUser),
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
                        (0, S.jt)(eI(e));
                    },
                    popoutLayerContext: V.O$,
                }),
                (0, a.jsx)(u.B6, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === ek(e.overrideIsUsingDefaultOverlayKeybind),
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
                        (0, S.FM)(eI(e));
                    },
                    popoutLayerContext: V.O$,
                }),
                (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: "Actions",
                }),
                (0, a.jsx)(p.Button, {
                    size: "sm",
                    text: "Reset isNewOverlayUser",
                    onClick: () => (0, S.Wx)(),
                }),
                (0, a.jsx)(p.Button, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, S.Zh)(),
                }),
            ],
        });
    });
function eA() {
    return (0, a.jsx)(p.w0Z, {
        children: (0, a.jsx)("div", {
            className: l()(J.panel, X.subPanel),
            children: (0, a.jsx)(eR, {}),
        }),
    });
}
function eD() {
    let [e, t] = r.useState("state");
    return (
        r.useEffect(
            () => (
                h.Z.dispatch({
                    type: "OVERLAY_SET_DETAILED_LOGGING",
                    enabled: !0,
                }),
                () => {
                    h.Z.dispatch({
                        type: "OVERLAY_SET_DETAILED_LOGGING",
                        enabled: !1,
                    });
                }
            ),
            [],
        ),
        (0, a.jsxs)("div", {
            className: l()(J.panel, X.panel),
            children: [
                (0, a.jsxs)("div", {
                    className: X.toolbar,
                    children: [
                        (0, a.jsx)(p.P3F, {
                            className: l()(X.paneOption, "state" === e && X.activePaneOption),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(p.P3F, {
                            className: l()(X.paneOption, "logging" === e && X.activePaneOption),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, a.jsx)(p.P3F, {
                            className: l()(X.paneOption, "experiments" === e && X.activePaneOption),
                            onClick: () => t("experiments"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(ew, {}),
                "logging" === e && (0, a.jsx)(eT, {}),
                "experiments" === e && (0, a.jsx)(eA, {}),
            ],
        })
    );
}
