n.d(t, { Z: () => eZ }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
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
    N = n(829907),
    O = n(610394),
    T = n(338949),
    P = n(556809),
    I = n(886118),
    w = n(301801),
    k = n(352527),
    R = n(355863),
    A = n(449224),
    Z = n(556296),
    D = n(808506),
    L = n(572004),
    M = n(55935),
    U = n(70956),
    B = n(136015),
    F = n(13140),
    G = n(145597),
    z = n(246992),
    V = n(257785),
    H = n(484036),
    W = n(681619),
    K = n(621060),
    q = n(981631),
    Y = n(757744),
    J = n(388032),
    X = n(454741),
    Q = n(451429);
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
        [q.Odu.CLICK_ZONE_DEBUG]: (e) =>
            ee(
                $(
                    {
                        type: q.Odu.CLICK_ZONE_DEBUG,
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
                    R.Z.getWidgetDefaultSettings(q.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [q.Odu.PERFORMANCE_DEBUG]: (e) =>
            ee(
                $(
                    {
                        type: q.Odu.PERFORMANCE_DEBUG,
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
                    R.Z.getWidgetDefaultSettings(q.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    en = {};
function ea(e) {
    let { id: t } = e,
        [n, r] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        r(!1);
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
                (0, L.JG)(t, () => r(!0));
            },
            className: X.copyId,
            children: ["Application Id: ", t, " ", n ? J.intl.string(J.t.t5VZ88) : null],
        })
    );
}
let el = l.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([j.ZP], () => j.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, d.e7)([A.Z], () => A.Z.getGameForPID(t.pid)),
            r = (0, d.e7)([j.ZP], () => (null == n ? null : j.ZP.getGameOverlayStatus(n)));
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
                    children: ["fullscreenType: ", (0, N.sS)(t.fullscreenType)],
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
                            children: ["overlayMethod: ", (0, N.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != r &&
                    (0, a.jsxs)("div", {
                        className: X.panelGroup,
                        children: [
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", r.source],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", r.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", r.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, N.P_)(r.overlayMethod)],
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
                    children: ["hook: ", (null == l ? void 0 : l.hook) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", (null == l ? void 0 : l.overlay) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "overlayCompatibilityHook: ",
                        (null == l ? void 0 : l.overlayCompatibilityHook) ? "Yes" : "No",
                    ],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "supportsOutOfProcessOverlay: ",
                        (null == l ? void 0 : l.supportsOutOfProcessOverlay) ? "Yes" : "No",
                    ],
                }),
            ],
        });
    }),
    er = l.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cj)([D.default], () => D.default.getOverlayPIDStatuses()),
            l = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            r = (0, d.e7)([D.default], () => D.default.isInputLocked(t), [t]),
            i = (0, d.e7)([D.default], () => D.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([D.default], () => D.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([D.default], () => D.default.isReady(t), [t]);
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
                            let n = null == (t = l[e]) ? void 0 : t.timer;
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
                            let n = null == (t = l[e]) ? void 0 : t.timer;
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
                            let n = null == (t = l[e]) ? void 0 : t.timer;
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
                    children: ["isInputLocked: ", r],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
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
function ei(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([R.Z], () => R.Z.getWidgetsForLayout(Y.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, x.E9)(n.id);
            else {
                let t = et[e];
                if (null == t) return;
                let n = t(Y.$S);
                (0, x.A4)(n);
            }
        },
    ];
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, M.vc)(o()(e), "h:mm:ss.SSS");
}
let eo = l.memo(function (e) {
    var { pid: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        l = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["pid"]);
    let l = (0, d.e7)([E.default], () => {
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
            children: l,
        }),
    );
});
function ec() {
    let e = (0, d.e7)([T.Z], () => T.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs)),
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
                                !T.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs),
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
                className: i()(X.panelGroup, X.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, n, r] = e;
                        return (0, a.jsx)(
                            l.Fragment,
                            {
                                children: (0, a.jsx)(p.aML, {
                                    "data-migration-pending": !0,
                                    position: "left",
                                    text: r === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var l;
                                        return (0, a.jsx)(
                                            "div",
                                            ee($({}, e), {
                                                children: (0, a.jsxs)(p.Text, {
                                                    variant: "text-sm/medium",
                                                    color:
                                                        r === y.d5.TRACK_FOCUS
                                                            ? "text-default"
                                                            : "text-feedback-critical",
                                                    children: [
                                                        (0, a.jsx)(eo, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (l = null == n ? void 0 : n.toString()) ? l : "null",
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
let ed = l.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([E.default, j.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = E.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let l = j.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == l ? void 0 : l.fullscreenType) ? n : g.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, N.sS)(n) : "Unknown"],
        });
    }),
    eu = l.memo(function () {
        let e = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            [t, n] = l.useState({}),
            r = l.useRef(null);
        return (
            l.useEffect(
                () => (
                    (r.current = setInterval(async () => {
                        let e = j.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, N.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
                        let l = await Promise.all(t);
                        n((e) =>
                            l.reduce(
                                (e, t) => {
                                    var n, a;
                                    let [l, r, i] = t;
                                    if (null == r || null == l) return e;
                                    let s = null != (a = e[l]) ? a : [],
                                        o = null == (n = s[s.length - 1]) ? void 0 : n.screenType;
                                    return (
                                        (0 === s.length || o !== r) &&
                                            (e[l] = [
                                                ...s,
                                                {
                                                    pid: l,
                                                    screenType: r,
                                                    timestamp: i,
                                                },
                                            ]),
                                        e
                                    );
                                },
                                $({}, e),
                            ),
                        );
                    }, +U.Z.Millis.SECOND)),
                    () => clearInterval(r.current)
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
                                className: i()(X.panelGroup, X.scroller),
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
                                                            let { screenType: n, timestamp: l } = t;
                                                            return (0, a.jsx)(
                                                                p.Text,
                                                                {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-default",
                                                                    children: ""
                                                                        .concat(n, ":")
                                                                        .concat((0, N.sS)(n), " @ ")
                                                                        .concat(es(l)),
                                                                },
                                                                "".concat(e.pid, "-").concat(n, "-").concat(l),
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
    em = l.memo(function () {
        var e, t;
        let n = (0, d.cj)([E.default], () => E.default.getTrackedGames()),
            l = (0, G.getPID)(),
            r = (0, d.e7)([E.default], () => E.default.isOverlayOOPEnabledForPid(l), [l]),
            [i, s] = (0, d.Wu)([k.Z], () => [k.Z.enabled, k.Z.keepOpen]),
            o = (0, d.e7)([D.default], () => D.default.getFocusedPID()),
            c = (0, d.e7)([D.default], () => D.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: X.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(er, { pid: e.pid }, e.pid)),
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
                            children: ["processPid: ", null != (t = null == l ? void 0 : l.toString()) ? t : "unknown"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", r ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"],
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
    eh = l.memo(function () {
        let [e, t] = ei(q.Odu.CLICK_ZONE_DEBUG),
            [n, r] = ei(q.Odu.PERFORMANCE_DEBUG),
            i = (0, d.e7)([T.Z], () => T.Z.getRenderDebugModes()),
            [s, o] = l.useState({});
        return (
            l.useEffect(() => {
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
                                  : i.has(s.mode);
                    return (0, a.jsx)(
                        l.Fragment,
                        {
                            children: (0, a.jsx)(p.rsf, {
                                checked: c(),
                                onChange: () => {
                                    var e;
                                    let n = c();
                                    s.mode === y.GO.ClickZones && t(),
                                        s.mode === y.GO.WidgetAreas && r(),
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
    ex = l.memo(function () {
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
                                        Object.values(e).map((e) => (0, a.jsx)(el, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    ef = l.memo(function () {
        let e = (0, d.e7)([E.default], () => E.default.getForcedRenderMode()),
            [t, n] = l.useState(e),
            r = (e) => {
                n(e), f.Z.forceRenderMode(e);
            },
            i = [
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
                            options: i,
                            select: r,
                            popoutLayerContext: z.O$,
                        }),
                    }),
                ),
        });
    });
function eg(e) {
    let { modalProps: t, onClose: n } = e,
        [r, i] = l.useState(null);
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
                                onChange: i,
                                value: null != r ? r : "",
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
                                        n(r);
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
                l = e_(t);
            return (0, a.jsx)("div", {
                className: X.tableBar,
                style: { color: ev(t, n) },
                children: (0, a.jsx)(l, {
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
            let { name: t, type: n, logType: l } = e;
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
                        })(l),
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
            group: K.v0.NONE,
            render: (e) => {
                var t, n, l, r;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: m, nativeId: h, stack: x, data: f, timestamp: g, pid: b } = s,
                    v = o()(g),
                    j = e_(u);
                return (0, a.jsxs)(p.w0Z, {
                    className: X.subPanelScroller,
                    children: [
                        (0, a.jsxs)(_.Z, {
                            className: i()(Q.headerBar, X.subPanelHeaderBar),
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
                        (0, a.jsxs)(V.E, {
                            className: X.commonProperties,
                            children: [
                                (0, a.jsx)(V.Z9, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, M.vc)(v, "LLLL"),
                                        children: (0, M.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(V.Z9, {
                                    name: "Log Type",
                                    copyValue: m,
                                    children: (0, a.jsx)("code", { children: m }),
                                }),
                                (0, a.jsx)(V.Z9, {
                                    name: "PID",
                                    copyValue: null != (t = null == b ? void 0 : b.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == b ? void 0 : b.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(V.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (l = null == h ? void 0 : h.toString()) ? l : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (r = null == h ? void 0 : h.toString()) ? r : "null",
                                    }),
                                }),
                                (0, a.jsx)(V.Z9, {
                                    name: "Data",
                                    copyValue: ey(f),
                                    children: (0, a.jsx)("code", { children: ey(f) }),
                                }),
                                null != x &&
                                    (0, a.jsx)(V.Z9, {
                                        name: "Stack Trace",
                                        copyValue: x,
                                        children: (0, a.jsx)("code", {
                                            children: x.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, l, r, i] = n,
                                                        s = l.split(/[\\/]/).pop();
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
                                                                                      title: l,
                                                                                      children: [s, ":", r, ":", i],
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
    eN = {
        searchType: I.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: l } = e,
                r = [t, n, JSON.stringify(l)];
            return null != a && r.push(a), r;
        },
        throttleMs: 100,
    };
function eO() {
    let { ref: e, height: t } = (0, b.ZP)(),
        n = (0, d.e7)([T.Z], () => T.Z.isModuleLoggingEnabled()),
        [r, s] = l.useState(n),
        [o, c] = l.useState(!1),
        [u, m] = l.useState(null),
        [h, x] = l.useState(Object.keys(eb)),
        [g, v] = (0, d.e7)([T.Z], () => T.Z.getOverlayLoggingBreadcrumbs(), [], B.Q),
        [j, _] = l.useState(null),
        y = null != j ? j : g,
        C = null != j ? -1 : v;
    l.useEffect(() => {
        0 !== C &&
            (o
                ? m(y.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : m(null));
    }, [o, y, C]);
    let [S, E] = l.useState(""),
        N = l.useMemo(
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
        [O, P] = l.useState(N),
        [I, k] = l.useState(null),
        R = l.useMemo(() => y.find((e) => e.key === I), [y, I]),
        A = l.useCallback((e) => {
            P(e);
        }, []),
        { renderSelectedTab: Z } = (0, K.ZP)({ tabs: eE }, []);
    (0, w.BO)(S, N, A, eN, [y]);
    let D = l.useCallback((e) => {
            s(e), f.Z.setModuleLogging(e);
        }, []),
        [M, U] = l.useState(!1),
        F = l.useRef(null),
        G = l.useCallback(() => {
            (0, L.JG)(JSON.stringify(N)), U(!0);
        }, [N]);
    l.useEffect(() => {
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
    let z = l.useCallback((e) => {
            _(null != e ? JSON.parse(e) : null);
        }, []),
        V = l.useCallback(
            (e) => {
                if (e) return _(null);
                (0, p.h7j)(
                    (e) =>
                        (0, a.jsx)(eg, {
                            modalProps: e,
                            onClose: (t) => {
                                z(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    p.z1l,
                );
            },
            [z],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: X.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: X.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: i()(X.toolbar, X.filtersToolbar),
                        children: [
                            (0, a.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: X.pollBreadcrumbs,
                                children: (0, a.jsx)(p.Checkbox, {
                                    label: "Poll Native",
                                    checked: r,
                                    onChange: (e) => D(e),
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
                                onClick: () => V(null != j),
                                children: (0, a.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i()(X.toolbar, X.filtersToolbar),
                        children: Object.entries(eb).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                p.P3F,
                                {
                                    className: i()(X.filter, h.includes(t) && X.activeFilter),
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
                className: i()(X.panelGroup, X.tableContainer),
                children: (0, a.jsx)(W.Z, {
                    columns: ej,
                    data: O,
                    selectedRowKey: null != I ? I : void 0,
                    onClickRow: (e) => k(e.key),
                }),
            }),
            null != R &&
                (0, a.jsx)(H.Z, {
                    className: i()(X.panelGroup, X.subPanel),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: Z({
                        breadcrumb: R,
                        onClose: () => k(null),
                    }),
                }),
        ],
    });
}
let eT = l.memo(function () {
        let e = (0, d.e7)([O.Z], () => O.Z.getPopoutInitializationStages());
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
    eP = l.memo(function () {
        let e = (0, d.e7)([T.Z], () => T.Z.isStateDebuggingEnabled()),
            t = (0, d.e7)([T.Z], () => T.Z.getDebuggingState());
        return (
            l.useEffect(
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
function eI() {
    return (0, a.jsx)(p.w0Z, {
        children: (0, a.jsxs)("div", {
            className: i()(Q.panel, X.subPanel),
            children: [
                (0, a.jsx)(eh, {}),
                (0, a.jsx)(ef, {}),
                (0, a.jsx)(ex, {}),
                (0, a.jsx)(em, {}),
                (0, a.jsx)(ec, {}),
                (0, a.jsx)(eu, {}),
                (0, a.jsx)(eT, {}),
                (0, a.jsx)(eP, {}),
            ],
        }),
    });
}
let ew = (e) => {
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
    eR = l.memo(function () {
        let e = (0, S.xj)(),
            t = (0, d.e7)([Z.ZP], () => Z.ZP.getOverlayKeybind());
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
                        (0, S.jt)(ew(e));
                    },
                    popoutLayerContext: z.O$,
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
                        (0, S.FM)(ew(e));
                    },
                    popoutLayerContext: z.O$,
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
            className: i()(Q.panel, X.subPanel),
            children: (0, a.jsx)(eR, {}),
        }),
    });
}
function eZ() {
    let [e, t] = l.useState("state");
    return (
        l.useEffect(
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
            className: i()(Q.panel, X.panel),
            children: [
                (0, a.jsxs)("div", {
                    className: X.toolbar,
                    children: [
                        (0, a.jsx)(p.P3F, {
                            className: i()(X.paneOption, "state" === e && X.activePaneOption),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(p.P3F, {
                            className: i()(X.paneOption, "logging" === e && X.activePaneOption),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, a.jsx)(p.P3F, {
                            className: i()(X.paneOption, "experiments" === e && X.activePaneOption),
                            onClick: () => t("experiments"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(eI, {}),
                "logging" === e && (0, a.jsx)(eO, {}),
                "experiments" === e && (0, a.jsx)(eA, {}),
            ],
        })
    );
}
