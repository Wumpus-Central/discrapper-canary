n.d(t, { Z: () => eE }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(772848),
    d = n(442837),
    u = n(755721),
    m = n(481060),
    p = n(765250),
    h = n(13245),
    x = n(593472),
    f = n(393238),
    b = n(600164),
    g = n(594190),
    v = n(984370),
    j = n(427860),
    _ = n(837268),
    y = n(371651),
    C = n(829907),
    E = n(610394),
    N = n(556809),
    S = n(886118),
    T = n(301801),
    O = n(352527),
    P = n(355863),
    I = n(449224),
    k = n(808506),
    w = n(572004),
    R = n(55935),
    A = n(70956),
    Z = n(136015),
    D = n(145597),
    L = n(246992),
    M = n(257785),
    U = n(484036),
    F = n(681619),
    B = n(621060),
    G = n(981631),
    z = n(757744),
    V = n(388032),
    H = n(454741),
    W = n(451429);
function q(e) {
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
let Y = {
        [G.Odu.CLICK_ZONE_DEBUG]: (e) =>
            K(
                q(
                    {
                        type: G.Odu.CLICK_ZONE_DEBUG,
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
                    P.Z.getWidgetDefaultSettings(G.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [G.Odu.PERFORMANCE_DEBUG]: (e) =>
            K(
                q(
                    {
                        type: G.Odu.PERFORMANCE_DEBUG,
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
                    P.Z.getWidgetDefaultSettings(G.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    X = {};
function J(e) {
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
        (0, a.jsxs)(u.zx, {
            look: u.zx.Looks.LINK,
            color: u.zx.Colors.LINK,
            size: u.zx.Sizes.MIN,
            onClick: function () {
                (0, w.JG)(t, () => i(!0));
            },
            className: H.copyId,
            children: ["Application Id: ", t, " ", n ? V.intl.string(V.t["t5VZ8/"]) : null],
        })
    );
}
let $ = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([g.ZP], () => g.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([I.Z], () => I.Z.getGameForPID(t.pid)),
            i = (0, d.e7)([g.ZP], () => (null == n ? null : g.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: H.panelGroup,
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
                        children: (0, a.jsx)(J, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, C.sS)(t.fullscreenType)],
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
                    className: H.panelGroup,
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
                            children: ["overlayMethod: ", (0, C.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsxs)("div", {
                        className: H.panelGroup,
                        children: [
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, a.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, C.P_)(i.overlayMethod)],
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
    Q = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cj)([k.default], () => k.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([y.default], () => y.default.getTrackedGames()),
            i = (0, d.e7)([k.default], () => k.default.isInputLocked(t), [t]),
            l = (0, d.e7)([k.default], () => k.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([k.default], () => k.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([k.default], () => k.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: H.panelGroup,
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
                    children: ["isInputLocked: ", i],
                }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-primary",
                    children: ["isInputLockedV3: ", l],
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
function ee(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([P.Z], () => P.Z.getWidgetsForLayout(z.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, p.E9)(n.id);
            else {
                let t = Y[e];
                if (null == t) return;
                let n = t(z.$S);
                (0, p.A4)(n);
            }
        },
    ];
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : new Date(e).toLocaleTimeString();
}
let en = r.memo(function (e) {
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
    let r = (0, d.e7)([y.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = y.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((X[t] = a), a) : null != (n = X[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        m.Text,
        K(q({}, n), {
            variant: "text-md/semibold",
            color: "text-primary",
            children: r,
        }),
    );
});
function ea() {
    let e = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([y.default], () => y.default.getDevToolsFocusedPidsWithTimestamp(), []);
    return (0, a.jsxs)("div", {
        className: H.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: H.panelHeader,
                children: [
                    (0, a.jsx)(u.$q, {
                        value: e,
                        onChange: () =>
                            void h.Z.setRenderDebugMode(
                                !E.ZP.hasRenderDebugMode(_.GO.TrackFocusPIDs),
                                _.GO.TrackFocusPIDs,
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
                        className: H.panelButton,
                        onClick: () => h.Z.clearTrackedPids(),
                        children: (0, a.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(m.zJl, {
                className: l()(H.panelGroup, H.scroller),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, n, i] = e;
                        return (0, a.jsx)(
                            r.Fragment,
                            {
                                children: (0, a.jsx)(m.ua7, {
                                    position: "left",
                                    text: i === _.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, a.jsx)(
                                            "div",
                                            K(q({}, e), {
                                                children: (0, a.jsxs)(m.Text, {
                                                    variant: "text-sm/medium",
                                                    color: i === _.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                                                    children: [
                                                        (0, a.jsx)(en, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == n ? void 0 : n.toString()) ? r : "null",
                                                        " @ ",
                                                        et(t, !0),
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
let er = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([y.default, g.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = y.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = g.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : x.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, C.sS)(n) : "Unknown"],
        });
    }),
    ei = r.memo(function () {
        let e = (0, d.cj)([y.default], () => y.default.getTrackedGames()),
            [t, n] = r.useState({}),
            i = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (i.current = setInterval(async () => {
                        let e = g.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, C.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
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
                                q({}, e),
                            ),
                        );
                    }, +A.Z.Millis.SECOND)),
                    () => clearInterval(i.current)
                ),
                [],
            ),
            (0, a.jsx)(m.ua7, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (n) =>
                    (0, a.jsx)(
                        "div",
                        K(q({}, n), {
                            children: (0, a.jsxs)(m.zJl, {
                                className: l()(H.panelGroup, H.scroller),
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
                                                    (0, a.jsx)(en, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, a.jsx)(er, { pid: e.pid }),
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
                                                                        .concat((0, C.sS)(n), " @ ")
                                                                        .concat(et(r)),
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
        let n = (0, d.cj)([y.default], () => y.default.getTrackedGames()),
            r = (0, D.getPID)(),
            i = (0, d.e7)([y.default], () => y.default.isOverlayOOPEnabledForPid(r), [r]),
            [l, s] = (0, d.Wu)([O.Z], () => [O.Z.enabled, O.Z.keepOpen]),
            o = (0, d.e7)([k.default], () => k.default.getFocusedPID()),
            c = (0, d.e7)([k.default], () => k.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: H.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(Q, { pid: e.pid }, e.pid)),
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
                            children: ["isOOPEnabledForPid: ", i ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"],
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
    es = r.memo(function () {
        let [e, t] = ee(G.Odu.CLICK_ZONE_DEBUG),
            [n, i] = ee(G.Odu.PERFORMANCE_DEBUG),
            l = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.ClickZones)),
            s = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.WidgetAreas)),
            o = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.DisabledGPUBoost)),
            c = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.ForceGPUBoost)),
            p = (0, d.e7)([E.ZP], () => E.ZP.hasRenderDebugMode(_.GO.OverlayRafManagerForceEnabled)),
            x = (e) => {
                h.Z.setRenderDebugMode(!E.ZP.hasRenderDebugMode(e), e);
            },
            [f, b] = r.useState({});
        return (
            r.useEffect(() => {
                let e = setInterval(() => {
                    b({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, a.jsxs)("div", {
                className: H.panelGroup,
                children: [
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Enables a red border around click zones to help with debugging.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(q({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: l,
                                        onChange: () => void x(_.GO.ClickZones),
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
                                K(q({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: s,
                                        onChange: () => void x(_.GO.WidgetAreas),
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
                                K(q({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: o,
                                        onChange: () => void x(_.GO.DisabledGPUBoost),
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
                                K(q({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: c,
                                        onChange: () => void x(_.GO.ForceGPUBoost),
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
                                K(q({}, n), {
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
                                K(q({}, e), {
                                    children: (0, a.jsx)(u.$q, {
                                        value: null != n,
                                        onChange: () => i(),
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
                        value: p,
                        onChange: () => void x(_.GO.OverlayRafManagerForceEnabled),
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
    eo = r.memo(function () {
        let e = (0, d.cj)([y.default], () => y.default.getTrackedGames()),
            t = (0, d.e7)([g.ZP], () => g.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                K(q({}, e), {
                                    children: (0, a.jsxs)("div", {
                                        className: H.panelGroup,
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
                                                        (0, a.jsx)(er, { pid: e.pid }),
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
                            K(q({}, t), {
                                children: (0, a.jsxs)("div", {
                                    className: H.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, a.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, a.jsx)($, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    ec = r.memo(function () {
        let e = (0, d.e7)([y.default], () => y.default.getForcedRenderMode()),
            [t, n] = r.useState(e),
            i = (e) => {
                n(e), h.Z.forceRenderMode(e);
            },
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
            ].map((t) => K(q({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(m.ua7, {
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, a.jsx)(
                    "div",
                    K(q({}, e), {
                        className: H.panelGroup,
                        children: (0, a.jsx)(m.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: l,
                            select: i,
                            popoutLayerContext: L.O$,
                        }),
                    }),
                ),
        });
    });
function ed(e) {
    let { modalProps: t, onClose: n } = e,
        [i, l] = r.useState(null);
    function s() {
        n(null);
    }
    return (0, a.jsxs)(
        m.Y0X,
        K(
            q(
                {
                    size: m.CgR.LARGE,
                    "aria-label": "Breadcrumb Import",
                },
                t,
            ),
            {
                transitionState: t.transitionState,
                parentComponent: "BreadcrumbImportPanel",
                children: [
                    (0, a.jsxs)(m.xBx, {
                        align: b.Z.Align.CENTER,
                        justify: b.Z.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(m.Text, {
                                variant: "text-md/bold",
                                color: "text-danger",
                                children: "Breadcrumb Import",
                            }),
                            (0, a.jsx)(m.olH, { onClick: s }),
                        ],
                    }),
                    (0, a.jsx)(m.hzk, {
                        children: (0, a.jsx)("div", {
                            className: H.panelGroup,
                            children: (0, a.jsx)(m.Kx8, {
                                label: "Paste JSON Here",
                                onChange: l,
                                value: null != i ? i : "",
                                rows: 12,
                            }),
                        }),
                    }),
                    (0, a.jsx)(m.mzw, {
                        children: (0, a.jsxs)(m.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(m.zxk, {
                                    variant: "primary",
                                    text: "Import",
                                    onClick: function () {
                                        n(i);
                                    },
                                }),
                                (0, a.jsx)(m.zxk, {
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
let eu = {
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
function em(e) {
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
let ep = [
    {
        key: "type",
        cellClassName: H.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = eh(t);
            return (0, a.jsx)("div", {
                className: H.tableBar,
                style: { color: em(t, n) },
                children: (0, a.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: H.nameColumn,
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
        cellClassName: H.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, R.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function eh(e) {
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
let ef = ["__webpack_require__", "fn"],
    eb = ["web.js", "web.js.map"],
    eg = [
        {
            id: "details",
            name: "Details",
            group: B.v0.NONE,
            render: (e) => {
                var t, n;
                let { breadcrumb: r, onClose: i } = e,
                    { name: s, type: c, logType: d, nativeId: u, stack: p, data: h, timestamp: x } = r,
                    f = o()(x),
                    b = eh(c);
                return (0, a.jsxs)(m.w0Z, {
                    className: H.subPanelScroller,
                    children: [
                        (0, a.jsxs)(v.Z, {
                            className: l()(W.headerBar, H.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: em(c, d) },
                                    className: H.headerIcon,
                                    children: (0, a.jsx)(b, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(v.Z.Title, {
                                    wrapperClassName: H.headerTitle,
                                    children: [
                                        s,
                                        " (",
                                        c,
                                        ")",
                                        (0, a.jsx)(m.P3F, {
                                            tag: "span",
                                            className: H.copyEventButton,
                                            onClick: () => (0, w.JG)(s),
                                            children: (0, a.jsx)(m.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.Z.Icon, {
                                    icon: m.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, w.JG)(ex(r));
                                    },
                                }),
                                (0, a.jsx)(v.Z.Icon, {
                                    icon: m.k$p,
                                    tooltip: "Close",
                                    onClick: i,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(M.E, {
                            className: H.commonProperties,
                            children: [
                                (0, a.jsx)(M.Z9, {
                                    name: "Timestamp",
                                    copyValue: f.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: f.toISOString(),
                                        title: (0, R.vc)(f, "LLLL"),
                                        children: (0, R.vc)(f, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(M.Z9, {
                                    name: "Log Type",
                                    copyValue: d,
                                    children: (0, a.jsx)("code", { children: d }),
                                }),
                                (0, a.jsx)(M.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (t = null == u ? void 0 : u.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == u ? void 0 : u.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(M.Z9, {
                                    name: "Data",
                                    copyValue: ex(h),
                                    children: (0, a.jsx)("code", { children: ex(h) }),
                                }),
                                (0, a.jsx)(M.Z9, {
                                    name: "Stack Trace",
                                    copyValue: p,
                                    children: (0, a.jsx)("code", {
                                        children: p.split("\n").map((e, t) => {
                                            let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                            if (null != n) {
                                                let [, e, r, i, l] = n,
                                                    s = r.split(/[\\/]/).pop();
                                                return ef.includes(e.trim())
                                                    ? null
                                                    : (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              children: [
                                                                  (0, a.jsx)("span", {
                                                                      className: H.stackTraceFunction,
                                                                      children: e.trim(),
                                                                  }),
                                                                  !eb.includes(null != s ? s : "") &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              " (",
                                                                              (0, a.jsxs)("span", {
                                                                                  className: H.stackTraceLocation,
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
    ev = {
        searchType: S.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e;
            return [t, n, a, JSON.stringify(r)];
        },
        throttleMs: 100,
    };
function ej() {
    let { ref: e, height: t } = (0, f.ZP)(),
        n = (0, d.e7)([E.ZP], () => E.ZP.DEV_isOverlayModuleLoggingEnabled()),
        [i, s] = r.useState(n),
        [o, c] = r.useState(!1),
        [p, x] = r.useState(null),
        [b, g] = r.useState(Object.keys(eu)),
        [v, j] = (0, d.e7)([E.ZP], () => E.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], Z.Q),
        [_, y] = r.useState(null),
        C = null != _ ? _ : v,
        N = null != _ ? -1 : j;
    r.useEffect(() => {
        0 !== N &&
            (o
                ? x(C.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : x(null));
    }, [o, C, N]);
    let [S, O] = r.useState(""),
        P = r.useMemo(
            () =>
                0 === N
                    ? []
                    : C.filter((e) => {
                          if (o && null != p && e.timestamp < p) return !1;
                          for (let t of b) {
                              let { filter: n } = eu[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [C, b, p, o, N],
        ),
        [I, k] = r.useState(P),
        [R, A] = r.useState(null),
        D = r.useMemo(() => C.find((e) => e.key === R), [C, R]),
        L = r.useCallback((e) => {
            k(e);
        }, []),
        { renderSelectedTab: M } = (0, B.ZP)({ tabs: eg }, []);
    (0, T.BO)(S, P, L, ev, [C]);
    let G = r.useCallback((e) => {
            s(e), h.Z.setModuleLogging(e);
        }, []),
        [z, V] = r.useState(!1),
        W = r.useRef(null),
        q = r.useCallback(() => {
            (0, w.JG)(JSON.stringify(C)), V(!0);
        }, [C]);
    r.useEffect(() => {
        if (z)
            return (
                (W.current = setTimeout(() => {
                    V(!1);
                }, 4000)),
                () => {
                    null != W.current && clearTimeout(W.current);
                }
            );
    }, [z]);
    let K = r.useCallback((e) => {
            y(null != e ? JSON.parse(e) : null);
        }, []),
        Y = r.useCallback(
            (e) => {
                if (e) return y(null);
                (0, m.h7j)(
                    (e) =>
                        (0, a.jsx)(ed, {
                            modalProps: e,
                            onClose: (t) => {
                                K(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    m.z1l,
                );
            },
            [K],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: H.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: H.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: l()(H.toolbar, H.filtersToolbar),
                        children: [
                            (0, a.jsxs)("div", {
                                title: "Toggles the Polling of Native",
                                className: H.pollBreadcrumbs,
                                children: [
                                    (0, a.jsx)(u.$q, {
                                        value: i,
                                        onChange: (e, t) => G(t),
                                    }),
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "currentColor",
                                        children: "Poll Native",
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: H.pollBreadcrumbs,
                                children: [
                                    (0, a.jsx)(u.$q, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                    }),
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "currentColor",
                                        children: "Only Active Games",
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(m.P3F, {
                                className: H.copyAll,
                                onClick: q,
                                children: [
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: z ? "Copied" : "Copy All",
                                    }),
                                    z
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
                            (0, a.jsx)(m.P3F, {
                                className: H.copyAll,
                                onClick: () => Y(null != _),
                                children: (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != _ ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(H.toolbar, H.filtersToolbar),
                        children: Object.entries(eu).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                m.P3F,
                                {
                                    className: l()(H.filter, b.includes(t) && H.activeFilter),
                                    onClick: () => {
                                        g((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                    }),
                    (0, a.jsx)("div", {
                        className: H.toolbar,
                        children: (0, a.jsx)(m.E1j, {
                            query: S,
                            onChange: O,
                            onClear: () => O(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(H.panelGroup, H.tableContainer),
                children: (0, a.jsx)(F.Z, {
                    columns: ep,
                    data: I,
                    selectedRowKey: null != R ? R : void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != D &&
                (0, a.jsx)(U.Z, {
                    className: l()(H.panelGroup, H.subPanel),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: M({
                        breadcrumb: D,
                        onClose: () => A(null),
                    }),
                }),
        ],
    });
}
let e_ = r.memo(function () {
        let e = (0, d.e7)([E.ZP], () => E.ZP.getInitializationStages());
        return (0, a.jsxs)("div", {
            className: H.panelGroup,
            children: [
                (0, a.jsx)("div", {
                    className: H.panelHeader,
                    children: (0, a.jsx)(m.Text, {
                        variant: "text-md/bold",
                        color: "text-primary",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, a.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: (0, a.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    ey = r.memo(function () {
        let e = (0, d.e7)([E.ZP], () => E.ZP.DEV_isStateDebuggingEnabled()),
            t = (0, d.e7)([E.ZP], () => E.ZP.DEV_getDebuggingState());
        return (
            r.useEffect(
                () => (
                    h.Z.setStateDebugging(!0),
                    () => {
                        h.Z.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, a.jsxs)("div", {
                className: H.panelGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: H.panelHeader,
                        children: (0, a.jsx)(u.$q, {
                            value: e,
                            onChange: () => h.Z.setStateDebugging(!e),
                            size: 18,
                            type: u.M0.INVERTED,
                            shape: u.zV.BOX,
                            children: (0, a.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: "Poll Native Module State",
                            }),
                        }),
                    }),
                    (0, a.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: (0, a.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function eC() {
    return (0, a.jsx)(m.w0Z, {
        children: (0, a.jsxs)("div", {
            className: l()(W.panel, H.subPanel),
            children: [
                (0, a.jsx)(es, {}),
                (0, a.jsx)(ec, {}),
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(el, {}),
                (0, a.jsx)(ea, {}),
                (0, a.jsx)(ei, {}),
                (0, a.jsx)(e_, {}),
                (0, a.jsx)(ey, {}),
            ],
        }),
    });
}
function eE() {
    let [e, t] = r.useState("state");
    return (0, a.jsxs)("div", {
        className: l()(W.panel, H.panel),
        children: [
            (0, a.jsxs)("div", {
                className: H.toolbar,
                children: [
                    (0, a.jsx)(m.P3F, {
                        className: l()(H.paneOption, "state" === e && H.activePaneOption),
                        onClick: () => t("state"),
                        children: (0, a.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Client State",
                        }),
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: l()(H.paneOption, "logging" === e && H.activePaneOption),
                        onClick: () => t("logging"),
                        children: (0, a.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            children: "Logging",
                        }),
                    }),
                ],
            }),
            "state" === e && (0, a.jsx)(eC, {}),
            "logging" === e && (0, a.jsx)(ej, {}),
        ],
    });
}
