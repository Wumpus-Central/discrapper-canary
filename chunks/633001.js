n.d(t, { Z: () => eN }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
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
    p = n(570140),
    h = n(765250),
    x = n(13245),
    f = n(593472),
    b = n(393238),
    g = n(600164),
    v = n(594190),
    j = n(984370),
    _ = n(427860),
    y = n(837268),
    C = n(371651),
    E = n(829907),
    N = n(610394),
    S = n(556809),
    T = n(886118),
    O = n(301801),
    P = n(352527),
    I = n(355863),
    k = n(449224),
    w = n(808506),
    R = n(572004),
    A = n(55935),
    Z = n(70956),
    D = n(136015),
    L = n(145597),
    M = n(246992),
    U = n(257785),
    F = n(484036),
    G = n(681619),
    B = n(621060),
    z = n(981631),
    V = n(757744),
    H = n(388032),
    W = n(312079),
    K = n(866403);
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
function Y(e, t) {
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
            Y(
                q(
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
                    I.Z.getWidgetDefaultSettings(z.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [z.Odu.PERFORMANCE_DEBUG]: (e) =>
            Y(
                q(
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
                    I.Z.getWidgetDefaultSettings(z.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    J = {};
function Q(e) {
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
                (0, R.JG)(t, () => i(!0));
            },
            className: W.copyId,
            children: ["Application Id: ", t, " ", n ? H.intl.string(H.t["t5VZ8/"]) : null],
        })
    );
}
let $ = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([k.Z], () => k.Z.getGameForPID(t.pid)),
            i = (0, d.e7)([v.ZP], () => (null == n ? null : v.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: W.panelGroup,
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
                        children: (0, a.jsx)(Q, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, E.sS)(t.fullscreenType)],
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
                    className: W.panelGroup,
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
                            children: ["overlayMethod: ", (0, E.P_)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsxs)("div", {
                        className: W.panelGroup,
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
                                children: ["raw overlayMethod: ", (0, E.P_)(i.overlayMethod)],
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
    ee = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cj)([w.default], () => w.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([C.default], () => C.default.getTrackedGames()),
            i = (0, d.e7)([w.default], () => w.default.isInputLocked(t), [t]),
            l = (0, d.e7)([w.default], () => w.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([w.default], () => w.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([w.default], () => w.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: W.panelGroup,
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
function et(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([I.Z], () => I.Z.getWidgetsForLayout(V.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, h.E9)(n.id);
            else {
                let t = X[e];
                if (null == t) return;
                let n = t(V.$S);
                (0, h.A4)(n);
            }
        },
    ];
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, A.vc)(o()(e), "h:mm:ss.SSS");
}
let ea = r.memo(function (e) {
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
    let r = (0, d.e7)([C.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = C.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((J[t] = a), a) : null != (n = J[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        m.Text,
        Y(q({}, n), {
            variant: "text-md/semibold",
            color: "text-primary",
            children: r,
        }),
    );
});
function er() {
    let e = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([C.default], () => C.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: W.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: W.panelHeader,
                children: [
                    (0, a.jsx)(m.XZJ, {
                        checked: e,
                        onChange: () =>
                            void x.Z.setRenderDebugMode(
                                !N.ZP.hasRenderDebugMode(y.GO.TrackFocusPIDs),
                                y.GO.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                        labelType: "secondary",
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: W.panelButton,
                        onClick: () => x.Z.clearTrackedPids(),
                        children: (0, a.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(m.zJl, {
                className: l()(W.panelGroup, W.scroller),
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
                                    text: i === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, a.jsx)(
                                            "div",
                                            Y(q({}, e), {
                                                children: (0, a.jsxs)(m.Text, {
                                                    variant: "text-sm/medium",
                                                    color: i === y.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                                                    children: [
                                                        (0, a.jsx)(ea, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == n ? void 0 : n.toString()) ? r : "null",
                                                        " @ ",
                                                        en(t),
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
let ei = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([C.default, v.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = C.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = v.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : f.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, E.sS)(n) : "Unknown"],
        });
    }),
    el = r.memo(function () {
        let e = (0, d.cj)([C.default], () => C.default.getTrackedGames()),
            [t, n] = r.useState({}),
            i = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    (i.current = setInterval(async () => {
                        let e = v.ZP.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, E.hj)(n.pid, 0).then((e) => [n.pid, e, a]));
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
                    }, +Z.Z.Millis.SECOND)),
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
                        Y(q({}, n), {
                            children: (0, a.jsxs)(m.zJl, {
                                className: l()(W.panelGroup, W.scroller),
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
                                                    (0, a.jsx)(ea, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, a.jsx)(ei, { pid: e.pid }),
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
                                                                        .concat((0, E.sS)(n), " @ ")
                                                                        .concat(en(r)),
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
    es = r.memo(function () {
        var e, t;
        let n = (0, d.cj)([C.default], () => C.default.getTrackedGames()),
            r = (0, L.getPID)(),
            i = (0, d.e7)([C.default], () => C.default.isOverlayOOPEnabledForPid(r), [r]),
            [l, s] = (0, d.Wu)([P.Z], () => [P.Z.enabled, P.Z.keepOpen]),
            o = (0, d.e7)([w.default], () => w.default.getFocusedPID()),
            c = (0, d.e7)([w.default], () => w.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: W.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(ee, { pid: e.pid }, e.pid)),
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
    eo = r.memo(function () {
        let [e, t] = et(z.Odu.CLICK_ZONE_DEBUG),
            [n, i] = et(z.Odu.PERFORMANCE_DEBUG),
            l = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.ClickZones)),
            s = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.WidgetAreas)),
            o = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.WindowContainer)),
            c = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.DisabledGPUBoost)),
            u = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.ForceGPUBoost)),
            p = (0, d.e7)([N.ZP], () => N.ZP.hasRenderDebugMode(y.GO.OverlayRafManagerForceEnabled)),
            h = (e) => {
                x.Z.setRenderDebugMode(!N.ZP.hasRenderDebugMode(e), e);
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
                className: W.panelGroup,
                children: [
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Enables a red border around click zones to help with debugging.",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: l,
                                        onChange: () => void h(y.GO.ClickZones),
                                        label: "Enable Click Zone Debug Mode",
                                        labelType: "secondary",
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
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: s,
                                        onChange: () => void h(y.GO.WidgetAreas),
                                        label: "Enable Render Debug Mode",
                                        labelType: "secondary",
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.ua7, {
                        position: "left",
                        text: "Enables a border the overlay window",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: o,
                                        onChange: () => void h(y.GO.WindowContainer),
                                        label: "Enable Window Container Debug Mode",
                                        labelType: "secondary",
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
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: c,
                                        onChange: () => void h(y.GO.DisabledGPUBoost),
                                        label: "Disable GPU Boost",
                                        labelType: "secondary",
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
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: u,
                                        onChange: () => void h(y.GO.ForceGPUBoost),
                                        label: "Force GPU Boost",
                                        labelType: "secondary",
                                        disabled: c,
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
                                Y(q({}, n), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: null != e,
                                        onChange: () => t(),
                                        label: "Click Zone Debug Widget",
                                        labelType: "secondary",
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
                                Y(q({}, e), {
                                    children: (0, a.jsx)(m.XZJ, {
                                        checked: null != n,
                                        onChange: () => i(),
                                        label: "Overlay Performance Debug Widget",
                                        labelType: "secondary",
                                    }),
                                }),
                            ),
                    }),
                    (0, a.jsx)(m.XZJ, {
                        checked: p,
                        onChange: () => void h(y.GO.OverlayRafManagerForceEnabled),
                        label: "Overlay SmartRAF (".concat(S.Z.getLastRAFCallbackReason(), ")"),
                        labelType: "secondary",
                    }),
                ],
            })
        );
    }),
    ec = r.memo(function () {
        let e = (0, d.cj)([C.default], () => C.default.getTrackedGames()),
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
                                Y(q({}, e), {
                                    children: (0, a.jsxs)("div", {
                                        className: W.panelGroup,
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
                                                        (0, a.jsx)(ei, { pid: e.pid }),
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
                            Y(q({}, t), {
                                children: (0, a.jsxs)("div", {
                                    className: W.panelGroup,
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
    ed = r.memo(function () {
        let e = (0, d.e7)([C.default], () => C.default.getForcedRenderMode()),
            [t, n] = r.useState(e),
            i = (e) => {
                n(e), x.Z.forceRenderMode(e);
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
            ].map((t) => Y(q({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(m.ua7, {
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, a.jsx)(
                    "div",
                    Y(q({}, e), {
                        className: W.panelGroup,
                        children: (0, a.jsx)(m.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: l,
                            select: i,
                            popoutLayerContext: M.O$,
                        }),
                    }),
                ),
        });
    });
function eu(e) {
    let { modalProps: t, onClose: n } = e,
        [i, l] = r.useState(null);
    function s() {
        n(null);
    }
    return (0, a.jsxs)(
        m.Y0X,
        Y(
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
                        align: g.Z.Align.CENTER,
                        justify: g.Z.Justify.BETWEEN,
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
                            className: W.panelGroup,
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
let em = {
    native: {
        label: "Native",
        filter: (e) => e.type === _.C7.NativeLegacy || e.type === _.C7.NativeOOP,
    },
    render: {
        label: "Render",
        filter: (e) => e.type === _.C7.Renderer,
    },
    flux: {
        label: "Flux",
        filter: (e) => e.type === _.C7.Flux,
    },
    client: {
        label: "Client",
        filter: (e) => e.type === _.C7.OOPModule || e.type === _.C7.LegacyModule,
    },
};
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.l6.Info;
    if (t === _.l6.Error) return "var(--text-danger)";
    switch (e) {
        case _.C7.NativeLegacy:
            return "var(--yellow-500)";
        case _.C7.NativeOOP:
            return "var(--green-500)";
        case _.C7.Flux:
            return "var(--brand-400)";
        case _.C7.Renderer:
            return "var(--brand-500)";
        case _.C7.LegacyModule:
            return "var(--yellow-300)";
        case _.C7.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let eh = [
    {
        key: "type",
        cellClassName: W.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = ex(t);
            return (0, a.jsx)("div", {
                className: W.tableBar,
                style: { color: ep(t, n) },
                children: (0, a.jsx)(r, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: W.nameColumn,
        render(e) {
            let { name: t, type: n, logType: r } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case _.l6.Info:
                                    return "text-primary";
                                case _.l6.Warning:
                                    return "text-feedback-warning";
                                case _.l6.Error:
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
        cellClassName: W.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, A.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function ex(e) {
    switch (e) {
        case _.C7.NativeLegacy:
            return m.GON;
        case _.C7.NativeOOP:
            return m.ljO;
        case _.C7.Renderer:
        case _.C7.Flux:
            return m.n6r;
        case _.C7.LegacyModule:
            return m.pzj;
        case _.C7.OOPModule:
            return m.m3e;
        default:
            return m.pzj;
    }
}
function ef(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let eb = ["__webpack_require__", "fn"],
    eg = ["web.js", "web.js.map"],
    ev = [
        {
            id: "details",
            name: "Details",
            group: B.v0.NONE,
            render: (e) => {
                var t, n, r, i;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: p, nativeId: h, stack: x, data: f, timestamp: b, pid: g } = s,
                    v = o()(b),
                    _ = ex(u);
                return (0, a.jsxs)(m.w0Z, {
                    className: W.subPanelScroller,
                    children: [
                        (0, a.jsxs)(j.Z, {
                            className: l()(K.headerBar, W.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: ep(u, p) },
                                    className: W.headerIcon,
                                    children: (0, a.jsx)(_, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(j.Z.Title, {
                                    wrapperClassName: W.headerTitle,
                                    children: [
                                        d,
                                        " (",
                                        u,
                                        ")",
                                        (0, a.jsx)(m.P3F, {
                                            tag: "span",
                                            className: W.copyEventButton,
                                            onClick: () => (0, R.JG)(d),
                                            children: (0, a.jsx)(m.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(j.Z.Icon, {
                                    icon: m.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, R.JG)(ef(s));
                                    },
                                }),
                                (0, a.jsx)(j.Z.Icon, {
                                    icon: m.k$p,
                                    tooltip: "Close",
                                    onClick: c,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(U.E, {
                            className: W.commonProperties,
                            children: [
                                (0, a.jsx)(U.Z9, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, A.vc)(v, "LLLL"),
                                        children: (0, A.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(U.Z9, {
                                    name: "Log Type",
                                    copyValue: p,
                                    children: (0, a.jsx)("code", { children: p }),
                                }),
                                (0, a.jsx)(U.Z9, {
                                    name: "PID",
                                    copyValue: null != (t = null == g ? void 0 : g.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == g ? void 0 : g.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(U.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (r = null == h ? void 0 : h.toString()) ? r : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (i = null == h ? void 0 : h.toString()) ? i : "null",
                                    }),
                                }),
                                (0, a.jsx)(U.Z9, {
                                    name: "Data",
                                    copyValue: ef(f),
                                    children: (0, a.jsx)("code", { children: ef(f) }),
                                }),
                                null != x &&
                                    (0, a.jsx)(U.Z9, {
                                        name: "Stack Trace",
                                        copyValue: x,
                                        children: (0, a.jsx)("code", {
                                            children: x.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, r, i, l] = n,
                                                        s = r.split(/[\\/]/).pop();
                                                    return eb.includes(e.trim())
                                                        ? null
                                                        : (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, a.jsx)("span", {
                                                                          className: W.stackTraceFunction,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eg.includes(null != s ? s : "") &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, a.jsxs)("span", {
                                                                                      className: W.stackTraceLocation,
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
    ej = {
        searchType: T.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e,
                i = [t, n, JSON.stringify(r)];
            return null != a && i.push(a), i;
        },
        throttleMs: 100,
    };
function e_() {
    let { ref: e, height: t } = (0, b.ZP)(),
        n = (0, d.e7)([N.ZP], () => N.ZP.DEV_isOverlayModuleLoggingEnabled()),
        [i, s] = r.useState(n),
        [o, c] = r.useState(!1),
        [u, p] = r.useState(null),
        [h, f] = r.useState(Object.keys(em)),
        [g, v] = (0, d.e7)([N.ZP], () => N.ZP.DEV_getOverlayLoggingBreadcrumbs(), [], D.Q),
        [j, _] = r.useState(null),
        y = null != j ? j : g,
        C = null != j ? -1 : v;
    r.useEffect(() => {
        0 !== C &&
            (o
                ? p(y.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : p(null));
    }, [o, y, C]);
    let [E, S] = r.useState(""),
        T = r.useMemo(
            () =>
                0 === C
                    ? []
                    : y.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of h) {
                              let { filter: n } = em[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [y, h, u, o, C],
        ),
        [P, I] = r.useState(T),
        [k, w] = r.useState(null),
        A = r.useMemo(() => y.find((e) => e.key === k), [y, k]),
        Z = r.useCallback((e) => {
            I(e);
        }, []),
        { renderSelectedTab: L } = (0, B.ZP)({ tabs: ev }, []);
    (0, O.BO)(E, T, Z, ej, [y]);
    let M = r.useCallback((e) => {
            s(e), x.Z.setModuleLogging(e);
        }, []),
        [U, z] = r.useState(!1),
        V = r.useRef(null),
        H = r.useCallback(() => {
            (0, R.JG)(JSON.stringify(T)), z(!0);
        }, [T]);
    r.useEffect(() => {
        if (U)
            return (
                (V.current = setTimeout(() => {
                    z(!1);
                }, 4000)),
                () => {
                    null != V.current && clearTimeout(V.current);
                }
            );
    }, [U]);
    let K = r.useCallback((e) => {
            _(null != e ? JSON.parse(e) : null);
        }, []),
        q = r.useCallback(
            (e) => {
                if (e) return _(null);
                (0, m.h7j)(
                    (e) =>
                        (0, a.jsx)(eu, {
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
        className: W.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: W.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: l()(W.toolbar, W.filtersToolbar),
                        children: [
                            (0, a.jsxs)("div", {
                                title: "Toggles the Polling of Native",
                                className: W.pollBreadcrumbs,
                                children: [
                                    (0, a.jsx)(m.XZJ, {
                                        checked: i,
                                        onChange: (e) => M(e),
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
                                className: W.pollBreadcrumbs,
                                children: [
                                    (0, a.jsx)(m.XZJ, {
                                        checked: o,
                                        onChange: (e) => c(e),
                                    }),
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "currentColor",
                                        children: "Only Active Games",
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(m.P3F, {
                                className: W.copyAll,
                                onClick: H,
                                children: [
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: U ? "Copied" : "Copy All",
                                    }),
                                    U
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
                                className: W.copyAll,
                                onClick: () => q(null != j),
                                children: (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(W.toolbar, W.filtersToolbar),
                        children: Object.entries(em).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                m.P3F,
                                {
                                    className: l()(W.filter, h.includes(t) && W.activeFilter),
                                    onClick: () => {
                                        f((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                        className: W.toolbar,
                        children: (0, a.jsx)(m.E1j, {
                            query: E,
                            onChange: S,
                            onClear: () => S(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(W.panelGroup, W.tableContainer),
                children: (0, a.jsx)(G.Z, {
                    columns: eh,
                    data: P,
                    selectedRowKey: null != k ? k : void 0,
                    onClickRow: (e) => w(e.key),
                }),
            }),
            null != A &&
                (0, a.jsx)(F.Z, {
                    className: l()(W.panelGroup, W.subPanel),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: L({
                        breadcrumb: A,
                        onClose: () => w(null),
                    }),
                }),
        ],
    });
}
let ey = r.memo(function () {
        let e = (0, d.e7)([N.ZP], () => N.ZP.getInitializationStages());
        return (0, a.jsxs)("div", {
            className: W.panelGroup,
            children: [
                (0, a.jsx)("div", {
                    className: W.panelHeader,
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
    eC = r.memo(function () {
        let e = (0, d.e7)([N.ZP], () => N.ZP.DEV_isStateDebuggingEnabled()),
            t = (0, d.e7)([N.ZP], () => N.ZP.DEV_getDebuggingState());
        return (
            r.useEffect(
                () => (
                    x.Z.setStateDebugging(!0),
                    () => {
                        x.Z.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, a.jsxs)("div", {
                className: W.panelGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: W.panelHeader,
                        children: (0, a.jsx)(m.XZJ, {
                            checked: e,
                            onChange: () => x.Z.setStateDebugging(!e),
                            label: "Poll Native Module State",
                            labelType: "secondary",
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
function eE() {
    return (0, a.jsx)(m.w0Z, {
        children: (0, a.jsxs)("div", {
            className: l()(K.panel, W.subPanel),
            children: [
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(ed, {}),
                (0, a.jsx)(ec, {}),
                (0, a.jsx)(es, {}),
                (0, a.jsx)(er, {}),
                (0, a.jsx)(el, {}),
                (0, a.jsx)(ey, {}),
                (0, a.jsx)(eC, {}),
            ],
        }),
    });
}
function eN() {
    let [e, t] = r.useState("state");
    return (
        r.useEffect(
            () => (
                p.Z.dispatch({
                    type: "OVERLAY_SET_DETAILED_LOGGING",
                    enabled: !0,
                }),
                () => {
                    p.Z.dispatch({
                        type: "OVERLAY_SET_DETAILED_LOGGING",
                        enabled: !1,
                    });
                }
            ),
            [],
        ),
        (0, a.jsxs)("div", {
            className: l()(K.panel, W.panel),
            children: [
                (0, a.jsxs)("div", {
                    className: W.toolbar,
                    children: [
                        (0, a.jsx)(m.P3F, {
                            className: l()(W.paneOption, "state" === e && W.activePaneOption),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(m.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(m.P3F, {
                            className: l()(W.paneOption, "logging" === e && W.activePaneOption),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(m.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(eE, {}),
                "logging" === e && (0, a.jsx)(e_, {}),
            ],
        })
    );
}
