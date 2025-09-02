n.d(t, { Z: () => eg }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(772848),
    d = n(442837),
    u = n(755721),
    m = n(481060),
    x = n(765250),
    h = n(13245),
    p = n(593472),
    f = n(393238),
    v = n(594190),
    b = n(984370),
    j = n(427860),
    g = n(837268),
    _ = n(371651),
    y = n(829907),
    C = n(610394),
    N = n(556809),
    E = n(886118),
    O = n(301801),
    T = n(352527),
    S = n(355863),
    P = n(449224),
    w = n(808506),
    I = n(572004),
    k = n(55935),
    R = n(70956),
    Z = n(136015),
    A = n(145597),
    D = n(246992),
    L = n(257785),
    M = n(484036),
    F = n(681619),
    U = n(621060),
    z = n(981631),
    B = n(757744),
    G = n(388032),
    V = n(454741),
    H = n(451429);
function W(e) {
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
function K(e, t) {
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
let X = {
        [z.Odu.CLICK_ZONE_DEBUG]: (e) =>
            K(
                W(
                    {
                        type: z.Odu.CLICK_ZONE_DEBUG,
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
                    S.Z.getWidgetDefaultSettings(z.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [z.Odu.PERFORMANCE_DEBUG]: (e) =>
            K(
                W(
                    {
                        type: z.Odu.PERFORMANCE_DEBUG,
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
                    S.Z.getWidgetDefaultSettings(z.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    Y = {};
function q(e) {
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
        (0, a.jsxs)(u.zx, {
            look: u.zx.Looks.LINK,
            color: u.zx.Colors.LINK,
            size: u.zx.Sizes.MIN,
            onClick: function () {
                (0, I.JG)(t, () => l(!0));
            },
            className: V.copyId,
            children: ["Application Id: ", t, " ", n ? G.intl.string(G.t["t5VZ8/"]) : null],
        })
    );
}
let J = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([P.Z], () => P.Z.getGameForPID(t.pid)),
            l = (0, d.e7)([v.ZP], () => (null == n ? null : v.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: V.panelGroup,
            children: [
                (0, a.jsx)(m.Text, {
                    variant: "text-md/bold",
                    color: "text-primary",
                    children: t.gameName,
                }),
                (0, a.jsx)(m.Text, {
                    variant: "text-sm/bold",
                    color: "text-secondary",
                    children: t.pid,
                }),
                (0, a.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: null == n ? void 0 : n.exeName,
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", (null == n ? void 0 : n.isLauncher) ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, a.jsx)(m.Text, {
                        variant: "text-md/bold",
                        color: "text-primary",
                        children: (0, a.jsx)(q, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, y.sS)(t.fullscreenType)],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["state: ", t.state],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, a.jsxs)("div", {
                    className: V.panelGroup,
                    children: [
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, y.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, a.jsxs)("div", {
                        className: V.panelGroup,
                        children: [
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, y.P_)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", (null == n ? void 0 : n.hidden) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", (null == r ? void 0 : r.hook) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", (null == r ? void 0 : r.overlay) ? "Yes" : "No"],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: [
                        "overlayCompatibilityHook: ",
                        (null == r ? void 0 : r.overlayCompatibilityHook) ? "Yes" : "No",
                    ],
                }),
                (0, a.jsxs)(m.Text, {
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
            n = (0, d.cj)([w.default], () => w.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            l = (0, d.e7)([w.default], () => w.default.isInputLocked(t), [t]),
            i = (0, d.e7)([w.default], () => w.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([w.default], () => w.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([w.default], () => w.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: V.panelGroup,
            children: [
                (0, a.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-primary",
                    children: "".concat(t),
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
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
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
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
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
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
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["Bridge Status: ", n.get(Number(t))],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLocked: ", l],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isReady: ", o],
                }),
            ],
        });
    });
function Q(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([S.Z], () => S.Z.getWidgetsForLayout(B.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, x.E9)(n.id);
            else {
                let t = X[e];
                if (null == t) return;
                let n = t(B.$S);
                (0, x.A4)(n);
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
    let r = (0, d.e7)([_.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = _.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((Y[t] = a), a) : null != (n = Y[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        m.Text,
        K(W({}, n), {
            variant: "text-md/semibold",
            color: "text-primary",
            children: r,
        }),
    );
});
function en() {
    let e = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([_.default], () => _.default.getDevToolsFocusedPidsWithTimestamp(), []);
    return (0, a.jsxs)("div", {
        className: V.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: V.panelHeader,
                children: [
                    (0, a.jsx)(u.$q, {
                        value: e,
                        onChange: () =>
                            void h.Z.setRenderDebugMode(
                                !C.ZP.hasRenderDebugMode(g.GO.TrackFocusPIDs),
                                g.GO.TrackFocusPIDs,
                            ),
                        size: 18,
                        type: u.M0.INVERTED,
                        shape: u.zV.BOX,
                        children: (0, a.jsx)(m.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "Track Focus Pids",
                        }),
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: V.panelButton,
                        onClick: () => h.Z.clearTrackedPids(),
                        children: (0, a.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(m.zJl, {
                className: i()(V.panelGroup, V.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, n, l] = e;
                        return (0, a.jsx)(
                            r.Fragment,
                            {
                                children: (0, a.jsx)(m.ua7, {
                                    position: "left",
                                    text: l === g.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, a.jsx)(
                                            "div",
                                            K(W({}, e), {
                                                children: (0, a.jsxs)(m.Text, {
                                                    variant: "text-sm/medium",
                                                    color: l === g.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                                                    children: [
                                                        (0, a.jsx)(et, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == n ? void 0 : n.toString()) ? r : "null",
                                                        " @ ",
                                                        ee(t, !0),
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
let ea = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([_.default, v.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = _.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = v.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : p.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, y.sS)(n) : "Unknown"],
        });
    }),
    er = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            [t, n] = r.useState({}),
            l = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = v.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, y.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
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
                                W({}, e),
                            ),
                        );
                    }, +R.Z.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, a.jsx)(m.ua7, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (n) =>
                    (0, a.jsx)(
                        "div",
                        K(W({}, n), {
                            children: (0, a.jsxs)(m.zJl, {
                                className: i()(V.panelGroup, V.scroller),
                                children: [
                                    0 === Object.keys(e).length &&
                                        (0, a.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "No recent screen types",
                                        }),
                                    Object.values(e).map((e) =>
                                        (0, a.jsxs)(
                                            "div",
                                            {
                                                children: [
                                                    (0, a.jsx)(et, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, a.jsx)(ea, { pid: e.pid }),
                                                    null != t[e.pid] &&
                                                        [...t[e.pid]].reverse().map((t) => {
                                                            let { screenType: n, timestamp: r } = t;
                                                            return (0, a.jsx)(
                                                                m.Text,
                                                                {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-default",
                                                                    children: ""
                                                                        .concat(n, ":")
                                                                        .concat((0, y.sS)(n), " @ ")
                                                                        .concat(ee(r)),
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
    el = r.memo(function () {
        var e, t;
        let n = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            r = (0, A.getPID)(),
            l = (0, d.e7)([_.default], () => _.default.isOverlayOOPEnabledForPid(r), [r]),
            [i, s] = (0, d.Wu)([T.Z], () => [T.Z.enabled, T.Z.keepOpen]),
            o = (0, d.e7)([w.default], () => w.default.getFocusedPID()),
            c = (0, d.e7)([w.default], () => w.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: V.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)($, { pid: e.pid }, e.pid)),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/medium",
                            color: "text-primary",
                            children: ["focusedPID: ", null != (e = null == o ? void 0 : o.toString()) ? e : "null"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["isFocusedPidOutOfProcess: ", c ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/medium",
                            color: "text-primary",
                            children: ["processPid: ", null != (t = null == r ? void 0 : r.toString()) ? t : "unknown"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["isOOPEnabledForPid: ", l ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
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
        let [e, t] = Q(z.Odu.CLICK_ZONE_DEBUG),
            [n, l] = Q(z.Odu.PERFORMANCE_DEBUG),
            i = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ClickZones)),
            s = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.WidgetAreas)),
            o = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.DisabledGPUBoost)),
            c = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.ForceGPUBoost)),
            x = (0, d.e7)([C.ZP], () => C.ZP.hasRenderDebugMode(g.GO.OverlayRafManagerForceEnabled)),
            p = (e) => {
                h.Z.setRenderDebugMode(!C.ZP.hasRenderDebugMode(e), e);
            },
            [f, v] = r.useState({});
        return (
            r.useEffect(() => {
                let e = setInterval(() => {
                    v({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, a.jsxs)("div", {
                className: V.panelGroup,
                children: [
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Enables a red border around click zones to help with debugging.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: i,
                                        onChange: () => void p(g.GO.ClickZones),
                                        size: 18,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Enable Click Zone Debug Mode",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: s,
                                        onChange: () => void p(g.GO.WidgetAreas),
                                        size: 18,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Enable Render Debug Mode",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: o,
                                        onChange: () => void p(g.GO.DisabledGPUBoost),
                                        size: 18,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Disable GPU Boost",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: c,
                                        onChange: () => void p(g.GO.ForceGPUBoost),
                                        size: 18,
                                        disabled: o,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Force GPU Boost",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
                        children: (n) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, n), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: null != e,
                                        onChange: () => t(),
                                        size: 18,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Click Zone Debug Widget",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Creates a widget that shows the overlay's window performance metrics.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: null != n,
                                        onChange: () => l(),
                                        size: 18,
                                        type: u.M0.INVERTED,
                                        shape: u.zV.BOX,
                                        children: (0, a.jsx)(m.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: "Overlay Performance Debug Widget",
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(u.$q, {
                        value: x,
                        onChange: () => void p(g.GO.OverlayRafManagerForceEnabled),
                        size: 18,
                        type: u.M0.INVERTED,
                        shape: u.zV.BOX,
                        children: (0, a.jsxs)(m.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ["Overlay SmartRAF (", N.Z.getLastRAFCallbackReason(), ")"],
                        }),
                    }),
                ],
            })
        );
    }),
    es = r.memo(function () {
        let e = (0, d.cj)([_.default], () => _.default.getTrackedGames()),
            t = (0, d.e7)([v.ZP], () => v.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(W({}, e), {
                                    children: (0, a.jsxs)("div", {
                                        className: V.panelGroup,
                                        children: [
                                            (0, a.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                color: "text-danger",
                                                children: "Untracked Running Games",
                                            }),
                                            t.map((e) =>
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(
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
                                                        (0, a.jsx)(ea, { pid: e.pid }),
                                                    ],
                                                }),
                                            ),
                                        ],
                                    }),
                                }),
                            ),
                    }),
                (0, a.jsx)(m.ua7, {
                    position: "left",
                    text: "The current running games process information",
                    children: (t) =>
                        (0, a.jsx)(
                            "div",
                            K(W({}, t), {
                                children: (0, a.jsxs)("div", {
                                    className: V.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, a.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, a.jsx)(J, { trackedGame: e }, e.pid)),
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
            [t, n] = r.useState(e),
            l = (e) => {
                n(e), h.Z.forceRenderMode(e);
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
            ].map((t) => K(W({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(m.ua7, {
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, a.jsx)(
                    "div",
                    K(W({}, e), {
                        className: V.panelGroup,
                        children: (0, a.jsx)(m.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: i,
                            select: l,
                            popoutLayerContext: D.O$,
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
        cellClassName: V.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = em(t);
            return (0, a.jsx)("div", {
                className: V.tableBar,
                style: { color: ed(t, n) },
                children: (0, a.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: V.nameColumn,
        render(e) {
            let { name: t, type: n, logType: r } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(m.Text, {
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
                    (0, a.jsxs)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: ["(", n, ")"],
                    }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: V.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, k.vc)(o()(t), "h:mm:ss.SSS");
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
let eh = ["__webpack_require__", "fn"],
    ep = ["web.js", "web.js.map"],
    ef = [
        {
            id: "details",
            name: "Details",
            group: U.v0.NONE,
            render: (e) => {
                var t, n;
                let { breadcrumb: r, onClose: l } = e,
                    { name: s, type: c, logType: d, nativeId: u, stack: x, data: h, timestamp: p } = r,
                    f = o()(p),
                    v = em(c);
                return (0, a.jsxs)(m.w0Z, {
                    className: V.subPanelScroller,
                    children: [
                        (0, a.jsxs)(b.Z, {
                            className: i()(H.headerBar, V.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: ed(c, d) },
                                    className: V.headerIcon,
                                    children: (0, a.jsx)(v, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(b.Z.Title, {
                                    wrapperClassName: V.headerTitle,
                                    children: [
                                        s,
                                        " (",
                                        c,
                                        ")",
                                        (0, a.jsx)(m.P3F, {
                                            tag: "span",
                                            className: V.copyEventButton,
                                            onClick: () => (0, I.JG)(s),
                                            children: (0, a.jsx)(m.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(b.Z.Icon, {
                                    icon: m.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, I.JG)(ex(r));
                                    },
                                }),
                                (0, a.jsx)(b.Z.Icon, {
                                    icon: m.k$p,
                                    tooltip: "Close",
                                    onClick: l,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(L.E, {
                            className: V.commonProperties,
                            children: [
                                (0, a.jsx)(L.Z9, {
                                    name: "Timestamp",
                                    copyValue: f.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: f.toISOString(),
                                        title: (0, k.vc)(f, "LLLL"),
                                        children: (0, k.vc)(f, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(L.Z9, {
                                    name: "Log Type",
                                    copyValue: d,
                                    children: (0, a.jsx)("code", { children: d }),
                                }),
                                (0, a.jsx)(L.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (t = null == u ? void 0 : u.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == u ? void 0 : u.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(L.Z9, {
                                    name: "Data",
                                    copyValue: ex(h),
                                    children: (0, a.jsx)("code", { children: ex(h) }),
                                }),
                                (0, a.jsx)(L.Z9, {
                                    name: "Stack Trace",
                                    copyValue: x,
                                    children: (0, a.jsx)("code", {
                                        children: x.split("\n").map((e, t) => {
                                            let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                            if (null != n) {
                                                let [, e, r, l, i] = n,
                                                    s = r.split(/[\\/]/).pop();
                                                return eh.includes(e.trim())
                                                    ? null
                                                    : (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              children: [
                                                                  (0, a.jsx)("span", {
                                                                      className: V.stackTraceFunction,
                                                                      children: e.trim(),
                                                                  }),
                                                                  !ep.includes(null != s ? s : "") &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              " (",
                                                                              (0, a.jsxs)("span", {
                                                                                  className: V.stackTraceLocation,
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
    ev = {
        searchType: E.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e;
            return [t, n, a, JSON.stringify(r)];
        },
        throttleMs: 100,
    };
function eb() {
    let [e, t] = (0, d.e7)([C.ZP], () => C.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], Z.Q),
        { ref: n, height: l } = (0, f.ZP)(),
        s = (0, d.e7)([C.ZP], () => C.ZP.DEV_isOverlayModuleLoggingEnabled()),
        [o, c] = r.useState(s),
        [u, x] = r.useState(Object.keys(ec)),
        [p, v] = r.useState(""),
        b = r.useMemo(
            () =>
                0 === t
                    ? []
                    : e.filter((e) => {
                          for (let t of u) {
                              let { filter: n } = ec[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [e, u, t],
        ),
        [j, g] = r.useState(b),
        [_, y] = r.useState(null),
        N = r.useMemo(() => e.find((e) => e.key === _), [e, _]),
        E = r.useCallback((e) => {
            g(e);
        }, []),
        { renderSelectedTab: T } = (0, U.ZP)({ tabs: ef }, []);
    (0, O.BO)(p, b, E, ev, [e]);
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
    let [P, w] = r.useState(!1),
        k = r.useRef(null),
        R = r.useCallback(() => {
            (0, I.JG)(JSON.stringify(e)), w(!0);
        }, [e]);
    return (
        r.useEffect(() => {
            if (P)
                return (
                    (k.current = setTimeout(() => {
                        w(!1);
                    }, 4000)),
                    () => {
                        null != k.current && clearTimeout(k.current);
                    }
                );
        }, [P]),
        (0, a.jsxs)("div", {
            ref: n,
            className: V.panelContainer,
            children: [
                (0, a.jsxs)("div", {
                    className: V.panelGroup,
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(V.toolbar, V.filtersToolbar),
                            children: [
                                (0, a.jsxs)("div", {
                                    title: "Toggles the Polling of Native",
                                    className: V.pollBreadcrumbs,
                                    children: [
                                        (0, a.jsx)(m.rsf, {
                                            checked: o,
                                            onChange: (e) => S(e),
                                        }),
                                        (0, a.jsx)(m.Text, {
                                            variant: "text-md/normal",
                                            color: "currentColor",
                                            children: "Poll Native",
                                        }),
                                    ],
                                }),
                                Object.entries(ec).map((e) => {
                                    let [t, n] = e;
                                    return (0, a.jsx)(
                                        m.P3F,
                                        {
                                            className: i()(V.filter, u.includes(t) && V.activeFilter),
                                            onClick: () => {
                                                x((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                            },
                                            children: (0, a.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "currentColor",
                                                children: n.label,
                                            }),
                                        },
                                        t,
                                    );
                                }),
                                (0, a.jsxs)(m.P3F, {
                                    className: V.copyAll,
                                    onClick: R,
                                    children: [
                                        (0, a.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: P ? "Copied" : "Copy All",
                                        }),
                                        P
                                            ? (0, a.jsx)(m.dz2, {
                                                  size: "sm",
                                                  color: m.TVs.unsafe_rawColors.GREEN_330.css,
                                              })
                                            : (0, a.jsx)(m.TIy, {
                                                  color: "currentColor",
                                                  size: "sm",
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: V.toolbar,
                            children: (0, a.jsx)(m.E1j, {
                                className: V.searchBar,
                                query: p,
                                onChange: v,
                                onClear: () => v(""),
                                placeholder: "Regex search by breadcrumb name and data",
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: i()(V.panelGroup, V.tableContainer),
                    children: (0, a.jsx)(F.Z, {
                        columns: eu,
                        data: j,
                        selectedRowKey: null != _ ? _ : void 0,
                        onClickRow: (e) => y(e.key),
                    }),
                }),
                null != N &&
                    (0, a.jsx)(M.Z, {
                        className: i()(V.panelGroup, V.subPanel),
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
function ej() {
    return (0, a.jsx)(m.w0Z, {
        children: (0, a.jsxs)("div", {
            className: i()(H.panel, V.subPanel),
            children: [
                (0, a.jsx)(ei, {}),
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(es, {}),
                (0, a.jsx)(el, {}),
                (0, a.jsx)(en, {}),
                (0, a.jsx)(er, {}),
            ],
        }),
    });
}
function eg() {
    let [e, t] = r.useState("state");
    return (0, a.jsxs)("div", {
        className: i()(H.panel, V.panel),
        children: [
            (0, a.jsxs)("div", {
                className: V.toolbar,
                children: [
                    (0, a.jsx)(m.P3F, {
                        className: i()(V.paneOption, "state" === e && V.activePaneOption),
                        onClick: () => t("state"),
                        children: (0, a.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Client State",
                        }),
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: i()(V.paneOption, "logging" === e && V.activePaneOption),
                        onClick: () => t("logging"),
                        children: (0, a.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Logging",
                        }),
                    }),
                ],
            }),
            "state" === e && (0, a.jsx)(ej, {}),
            "logging" === e && (0, a.jsx)(eb, {}),
        ],
    });
}
