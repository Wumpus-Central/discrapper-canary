n.d(t, { Z: () => eA }), n(388685), n(583741), n(539854), n(49124), n(35282), n(781311);
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
    g = n(593472),
    f = n(393238),
    b = n(600164),
    v = n(594190),
    j = n(984370),
    _ = n(427860),
    y = n(837268),
    C = n(991186),
    S = n(371651),
    E = n(829907),
    T = n(610394),
    N = n(338949),
    O = n(556809),
    P = n(886118),
    I = n(301801),
    w = n(352527),
    k = n(355863),
    R = n(449224),
    A = n(556296),
    Z = n(808506),
    D = n(572004),
    L = n(55935),
    M = n(70956),
    U = n(136015),
    F = n(13140),
    B = n(145597),
    G = n(246992),
    z = n(257785),
    V = n(484036),
    H = n(681619),
    W = n(621060),
    K = n(981631),
    q = n(757744),
    Y = n(388032),
    J = n(454741),
    X = n(451429);
function Q(e) {
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
function $(e, t) {
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
let ee = {
        [K.Odu.CLICK_ZONE_DEBUG]: (e) =>
            $(
                Q(
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
                    k.Z.getWidgetDefaultSettings(K.Odu.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [K.Odu.PERFORMANCE_DEBUG]: (e) =>
            $(
                Q(
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
                    k.Z.getWidgetDefaultSettings(K.Odu.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    et = {};
function en(e) {
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
                (0, D.JG)(t, () => i(!0));
            },
            className: J.copyId,
            children: ["Application Id: ", t, " ", n ? Y.intl.string(Y.t.t5VZ88) : null],
        })
    );
}
let ea = r.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.e7)([v.ZP], () => v.ZP.getGameOrTransformedSubgameForPID(t.pid)),
            r = (0, d.e7)([R.Z], () => R.Z.getGameForPID(t.pid)),
            i = (0, d.e7)([v.ZP], () => (null == n ? null : v.ZP.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
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
                        children: (0, a.jsx)(en, { id: t.applicationId }),
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
                    className: J.panelGroup,
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
                        className: J.panelGroup,
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
    er = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cj)([Z.default], () => Z.default.getOverlayPIDStatuses()),
            r = (0, d.cj)([S.default], () => S.default.getTrackedGames()),
            i = (0, d.e7)([Z.default], () => Z.default.isInputLocked(t), [t]),
            l = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.e7)([Z.default], () => Z.default.DEV_isInputLocked(t), [t]),
            o = (0, d.e7)([Z.default], () => Z.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
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
function ei(e) {
    let t,
        n = ((t = Object.values((0, d.Wu)([k.Z], () => k.Z.getWidgetsForLayout(q.$S)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, h.E9)(n.id);
            else {
                let t = ee[e];
                if (null == t) return;
                let n = t(q.$S);
                (0, h.A4)(n);
            }
        },
    ];
}
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, L.vc)(o()(e), "h:mm:ss.SSS");
}
let es = r.memo(function (e) {
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
    let r = (0, d.e7)([S.default], () => {
        var e, n;
        if (null == t) return "Unknown";
        let a = null == (e = S.default.getTrackedGameByPid(t)) ? void 0 : e.gameName;
        return null != a ? ((et[t] = a), a) : null != (n = et[t]) ? n : "Unknown";
    }, [t]);
    return (0, a.jsx)(
        m.Text,
        $(Q({}, n), {
            variant: "text-md/semibold",
            color: "text-primary",
            children: r,
        }),
    );
});
function eo() {
    let e = (0, d.e7)([N.Z], () => N.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs)),
        t = (0, d.Wu)([S.default], () => S.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: J.panelGroup,
        children: [
            (0, a.jsxs)("div", {
                className: J.panelHeader,
                children: [
                    (0, a.jsx)(m.rsf, {
                        checked: e,
                        onChange: () =>
                            void x.Z.setRenderDebugMode(
                                !N.Z.hasRenderDebugMode(y.GO.TrackFocusPIDs),
                                y.GO.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, a.jsx)(m.P3F, {
                        className: J.panelButton,
                        onClick: () => x.Z.clearTrackedPids(),
                        children: (0, a.jsx)(m.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(m.zJl, {
                className: l()(J.panelGroup, J.scroller),
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
                                children: (0, a.jsx)(m.aML, {
                                    "data-migration-pending": !0,
                                    position: "left",
                                    text: i === y.d5.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (e) => {
                                        var r;
                                        return (0, a.jsx)(
                                            "div",
                                            $(Q({}, e), {
                                                children: (0, a.jsxs)(m.Text, {
                                                    variant: "text-sm/medium",
                                                    color: i === y.d5.TRACK_FOCUS ? "text-default" : "text-danger",
                                                    children: [
                                                        (0, a.jsx)(es, {
                                                            pid: n,
                                                            tag: "span",
                                                        }),
                                                        " - ",
                                                        null != (r = null == n ? void 0 : n.toString()) ? r : "null",
                                                        " @ ",
                                                        el(t),
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
let ec = r.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.e7)([S.default, v.ZP], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (e = S.default.getTrackedGameByPid(t)) ? void 0 : e.fullscreenType;
                if (null != a) return a;
                let r = v.ZP.getGameOrTransformedSubgameForPID(t);
                return null != (n = null == r ? void 0 : r.fullscreenType) ? n : g.Jx.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, E.sS)(n) : "Unknown"],
        });
    }),
    ed = r.memo(function () {
        let e = (0, d.cj)([S.default], () => S.default.getTrackedGames()),
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
                                Q({}, e),
                            ),
                        );
                    }, +M.Z.Millis.SECOND)),
                    () => clearInterval(i.current)
                ),
                [],
            ),
            (0, a.jsx)(m.aML, {
                "data-migration-pending": !0,
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (n) =>
                    (0, a.jsx)(
                        "div",
                        $(Q({}, n), {
                            children: (0, a.jsxs)(m.zJl, {
                                className: l()(J.panelGroup, J.scroller),
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
                                                    (0, a.jsx)(es, {
                                                        tag: "div",
                                                        pid: e.pid,
                                                    }),
                                                    (0, a.jsx)(ec, { pid: e.pid }),
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
                                                                        .concat(el(r)),
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
    eu = r.memo(function () {
        var e, t;
        let n = (0, d.cj)([S.default], () => S.default.getTrackedGames()),
            r = (0, B.getPID)(),
            i = (0, d.e7)([S.default], () => S.default.isOverlayOOPEnabledForPid(r), [r]),
            [l, s] = (0, d.Wu)([w.Z], () => [w.Z.enabled, w.Z.keepOpen]),
            o = (0, d.e7)([Z.default], () => Z.default.getFocusedPID()),
            c = (0, d.e7)([Z.default], () => Z.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(er, { pid: e.pid }, e.pid)),
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
    em = [
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
    ep = r.memo(function () {
        let [e, t] = ei(K.Odu.CLICK_ZONE_DEBUG),
            [n, i] = ei(K.Odu.PERFORMANCE_DEBUG),
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
                className: J.panelGroup,
                children: em.map((s) => {
                    let o =
                            s.mode === y.GO.OverlayRafManagerForceEnabled
                                ? "".concat(s.label, " (").concat(O.Z.getLastRAFCallbackReason(), ")")
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
                            children: (0, a.jsx)(m.rsf, {
                                checked: c(),
                                onChange: () => {
                                    var e;
                                    let n = c();
                                    s.mode === y.GO.ClickZones && t(),
                                        s.mode === y.GO.WidgetAreas && i(),
                                        (e = s.mode),
                                        x.Z.setRenderDebugMode(!n, e);
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
    eh = r.memo(function () {
        let e = (0, d.cj)([S.default], () => S.default.getTrackedGames()),
            t = (0, d.e7)([v.ZP], () => v.ZP.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(m.aML, {
                        "data-migration-pending": !0,
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (e) =>
                            (0, a.jsx)(
                                "div",
                                $(Q({}, e), {
                                    children: (0, a.jsxs)("div", {
                                        className: J.panelGroup,
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
                                                        (0, a.jsx)(ec, { pid: e.pid }),
                                                    ],
                                                }),
                                            ),
                                        ],
                                    }),
                                }),
                            ),
                    }),
                (0, a.jsx)(m.aML, {
                    "data-migration-pending": !0,
                    position: "left",
                    text: "The current running games process information",
                    children: (t) =>
                        (0, a.jsx)(
                            "div",
                            $(Q({}, t), {
                                children: (0, a.jsxs)("div", {
                                    className: J.panelGroup,
                                    children: [
                                        0 === Object.keys(e).length &&
                                            (0, a.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: "No running games",
                                            }),
                                        Object.values(e).map((e) => (0, a.jsx)(ea, { trackedGame: e }, e.pid)),
                                    ],
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    ex = r.memo(function () {
        let e = (0, d.e7)([S.default], () => S.default.getForcedRenderMode()),
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
            ].map((t) => $(Q({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(m.aML, {
            "data-migration-pending": !0,
            position: "left",
            text: "Override the overlay render mode",
            children: (e) =>
                (0, a.jsx)(
                    "div",
                    $(Q({}, e), {
                        className: J.panelGroup,
                        children: (0, a.jsx)(m.PhF, {
                            serialize: (e) => e,
                            isSelected: (e) => e === t,
                            options: l,
                            select: i,
                            popoutLayerContext: G.O$,
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
        m.Y0X,
        $(
            Q(
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
                            className: J.panelGroup,
                            children: (0, a.jsx)(m.Kx8, {
                                label: "Paste JSON Here",
                                onChange: l,
                                value: null != i ? i : "",
                                rows: 12,
                            }),
                        }),
                    }),
                    (0, a.jsx)(m.mzw, {
                        children: (0, a.jsxs)(m.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(m.Button, {
                                    variant: "primary",
                                    text: "Import",
                                    onClick: function () {
                                        n(i);
                                    },
                                }),
                                (0, a.jsx)(m.Button, {
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
let ef = {
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
function eb(e) {
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
let ev = [
    {
        key: "type",
        cellClassName: J.tableBarColumn,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                r = ej(t);
            return (0, a.jsx)("div", {
                className: J.tableBar,
                style: { color: eb(t, n) },
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
        cellClassName: J.rightColumn,
        render(e) {
            let { timestamp: t } = e;
            return (0, L.vc)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function ej(e) {
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
function e_(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let ey = ["__webpack_require__", "fn"],
    eC = ["web.js", "web.js.map"],
    eS = [
        {
            id: "details",
            name: "Details",
            group: W.v0.NONE,
            render: (e) => {
                var t, n, r, i;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: p, nativeId: h, stack: x, data: g, timestamp: f, pid: b } = s,
                    v = o()(f),
                    _ = ej(u);
                return (0, a.jsxs)(m.w0Z, {
                    className: J.subPanelScroller,
                    children: [
                        (0, a.jsxs)(j.Z, {
                            className: l()(X.headerBar, J.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: eb(u, p) },
                                    className: J.headerIcon,
                                    children: (0, a.jsx)(_, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(j.Z.Title, {
                                    wrapperClassName: J.headerTitle,
                                    children: [
                                        d,
                                        " (",
                                        u,
                                        ")",
                                        (0, a.jsx)(m.P3F, {
                                            tag: "span",
                                            className: J.copyEventButton,
                                            onClick: () => (0, D.JG)(d),
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
                                        (0, D.JG)(e_(s));
                                    },
                                }),
                                (0, a.jsx)(j.Z.Icon, {
                                    icon: m.k$p,
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
                                        title: (0, L.vc)(v, "LLLL"),
                                        children: (0, L.vc)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Log Type",
                                    copyValue: p,
                                    children: (0, a.jsx)("code", { children: p }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "PID",
                                    copyValue: null != (t = null == b ? void 0 : b.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == b ? void 0 : b.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Native ID",
                                    copyValue: null != (r = null == h ? void 0 : h.toString()) ? r : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (i = null == h ? void 0 : h.toString()) ? i : "null",
                                    }),
                                }),
                                (0, a.jsx)(z.Z9, {
                                    name: "Data",
                                    copyValue: e_(g),
                                    children: (0, a.jsx)("code", { children: e_(g) }),
                                }),
                                null != x &&
                                    (0, a.jsx)(z.Z9, {
                                        name: "Stack Trace",
                                        copyValue: x,
                                        children: (0, a.jsx)("code", {
                                            children: x.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, r, i, l] = n,
                                                        s = r.split(/[\\/]/).pop();
                                                    return ey.includes(e.trim())
                                                        ? null
                                                        : (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, a.jsx)("span", {
                                                                          className: J.stackTraceFunction,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eC.includes(null != s ? s : "") &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, a.jsxs)("span", {
                                                                                      className: J.stackTraceLocation,
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
    eE = {
        searchType: P.S.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: r } = e,
                i = [t, n, JSON.stringify(r)];
            return null != a && i.push(a), i;
        },
        throttleMs: 100,
    };
function eT() {
    let { ref: e, height: t } = (0, f.ZP)(),
        n = (0, d.e7)([N.Z], () => N.Z.isModuleLoggingEnabled()),
        [i, s] = r.useState(n),
        [o, c] = r.useState(!1),
        [u, p] = r.useState(null),
        [h, g] = r.useState(Object.keys(ef)),
        [b, v] = (0, d.e7)([N.Z], () => N.Z.getOverlayLoggingBreadcrumbs(), [], U.Q),
        [j, _] = r.useState(null),
        y = null != j ? j : b,
        C = null != j ? -1 : v;
    r.useEffect(() => {
        0 !== C &&
            (o
                ? p(y.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : p(null));
    }, [o, y, C]);
    let [S, E] = r.useState(""),
        T = r.useMemo(
            () =>
                0 === C
                    ? []
                    : y.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of h) {
                              let { filter: n } = ef[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [y, h, u, o, C],
        ),
        [O, P] = r.useState(T),
        [w, k] = r.useState(null),
        R = r.useMemo(() => y.find((e) => e.key === w), [y, w]),
        A = r.useCallback((e) => {
            P(e);
        }, []),
        { renderSelectedTab: Z } = (0, W.ZP)({ tabs: eS }, []);
    (0, I.BO)(S, T, A, eE, [y]);
    let L = r.useCallback((e) => {
            s(e), x.Z.setModuleLogging(e);
        }, []),
        [M, F] = r.useState(!1),
        B = r.useRef(null),
        G = r.useCallback(() => {
            (0, D.JG)(JSON.stringify(T)), F(!0);
        }, [T]);
    r.useEffect(() => {
        if (M)
            return (
                (B.current = setTimeout(() => {
                    F(!1);
                }, 4000)),
                () => {
                    null != B.current && clearTimeout(B.current);
                }
            );
    }, [M]);
    let z = r.useCallback((e) => {
            _(null != e ? JSON.parse(e) : null);
        }, []),
        K = r.useCallback(
            (e) => {
                if (e) return _(null);
                (0, m.h7j)(
                    (e) =>
                        (0, a.jsx)(eg, {
                            modalProps: e,
                            onClose: (t) => {
                                z(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    m.z1l,
                );
            },
            [z],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: J.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: J.panelGroup,
                children: [
                    (0, a.jsxs)("div", {
                        className: l()(J.toolbar, J.filtersToolbar),
                        children: [
                            (0, a.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: J.pollBreadcrumbs,
                                children: (0, a.jsx)(m.Checkbox, {
                                    label: "Poll Native",
                                    checked: i,
                                    onChange: (e) => L(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: J.pollBreadcrumbs,
                                children: (0, a.jsx)(m.Checkbox, {
                                    label: "Only Active Games",
                                    checked: o,
                                    onChange: (e) => c(e),
                                }),
                            }),
                            (0, a.jsxs)(m.P3F, {
                                className: J.copyAll,
                                onClick: G,
                                children: [
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: M ? "Copied" : "Copy All",
                                    }),
                                    M
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
                                className: J.copyAll,
                                onClick: () => K(null != j),
                                children: (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(J.toolbar, J.filtersToolbar),
                        children: Object.entries(ef).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                m.P3F,
                                {
                                    className: l()(J.filter, h.includes(t) && J.activeFilter),
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
                        className: J.toolbar,
                        children: (0, a.jsx)(m.E1j, {
                            query: S,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(J.panelGroup, J.tableContainer),
                children: (0, a.jsx)(H.Z, {
                    columns: ev,
                    data: O,
                    selectedRowKey: null != w ? w : void 0,
                    onClickRow: (e) => k(e.key),
                }),
            }),
            null != R &&
                (0, a.jsx)(V.Z, {
                    className: l()(J.panelGroup, J.subPanel),
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
let eN = r.memo(function () {
        let e = (0, d.e7)([T.Z], () => T.Z.getPopoutInitializationStages());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)("div", {
                    className: J.panelHeader,
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
    eO = r.memo(function () {
        let e = (0, d.e7)([N.Z], () => N.Z.isStateDebuggingEnabled()),
            t = (0, d.e7)([N.Z], () => N.Z.getDebuggingState());
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
                className: J.panelGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: J.panelHeader,
                        children: (0, a.jsx)(m.rsf, {
                            checked: e,
                            onChange: () => x.Z.setStateDebugging(!e),
                            label: "Poll Native Module State",
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
function eP() {
    return (0, a.jsx)(m.w0Z, {
        children: (0, a.jsxs)("div", {
            className: l()(X.panel, J.subPanel),
            children: [
                (0, a.jsx)(ep, {}),
                (0, a.jsx)(ex, {}),
                (0, a.jsx)(eh, {}),
                (0, a.jsx)(eu, {}),
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(ed, {}),
                (0, a.jsx)(eN, {}),
                (0, a.jsx)(eO, {}),
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
    ew = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    ek = r.memo(function () {
        let e = (0, C.xj)(),
            t = (0, d.e7)([A.ZP], () => A.ZP.getOverlayKeybind());
        return (0, a.jsxs)("div", {
            className: J.panelGroup,
            children: [
                (0, a.jsx)(m.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Overlay Default Keybind Experiment",
                }),
                (0, a.jsx)(m.Heading, {
                    variant: "heading-md/semibold",
                    children: "Experiment State",
                }),
                (0, a.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: (0, a.jsx)("pre", {
                        children: JSON.stringify($(Q({}, e), { overlayKeybind: (0, F.BB)(t.shortcut) }), void 0, 2),
                    }),
                }),
                (0, a.jsx)(m.Heading, {
                    variant: "heading-md/semibold",
                    children: "Overrides",
                }),
                (0, a.jsx)(m.PhF, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === ew(e.overrideIsNewOverlayUser),
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
                        (0, C.jt)(eI(e));
                    },
                    popoutLayerContext: G.O$,
                }),
                (0, a.jsx)(m.PhF, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    serialize: (e) => (null != e ? e.toString() : "Disabled"),
                    isSelected: (t) => t === ew(e.overrideIsUsingDefaultOverlayKeybind),
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
                        (0, C.FM)(eI(e));
                    },
                    popoutLayerContext: G.O$,
                }),
                (0, a.jsx)(m.Heading, {
                    variant: "heading-md/semibold",
                    children: "Actions",
                }),
                (0, a.jsx)(m.Button, {
                    size: "sm",
                    text: "Reset isNewOverlayUser",
                    onClick: () => (0, C.Wx)(),
                }),
                (0, a.jsx)(m.Button, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, C.Zh)(),
                }),
            ],
        });
    });
function eR() {
    return (0, a.jsx)(m.w0Z, {
        children: (0, a.jsx)("div", {
            className: l()(X.panel, J.subPanel),
            children: (0, a.jsx)(ek, {}),
        }),
    });
}
function eA() {
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
            className: l()(X.panel, J.panel),
            children: [
                (0, a.jsxs)("div", {
                    className: J.toolbar,
                    children: [
                        (0, a.jsx)(m.P3F, {
                            className: l()(J.paneOption, "state" === e && J.activePaneOption),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(m.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(m.P3F, {
                            className: l()(J.paneOption, "logging" === e && J.activePaneOption),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(m.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, a.jsx)(m.P3F, {
                            className: l()(J.paneOption, "experiments" === e && J.activePaneOption),
                            onClick: () => t("experiments"),
                            children: (0, a.jsx)(m.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(eP, {}),
                "logging" === e && (0, a.jsx)(eT, {}),
                "experiments" === e && (0, a.jsx)(eR, {}),
            ],
        })
    );
}
