n.d(t, { A: () => eR }), n(896048), n(264879), n(321073), n(457529), n(747238), n(733351);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(835245),
    d = n(311907),
    u = n(435371),
    m = n(421380),
    p = n(397927),
    h = n(73153),
    f = n(391973),
    x = n(684013),
    b = n(56562),
    g = n(765671),
    v = n(235986),
    j = n(15285),
    y = n(742589),
    _ = n(41984),
    A = n(181435),
    C = n(435736),
    S = n(833551),
    O = n(515183),
    E = n(395011),
    N = n(127242),
    T = n(869014),
    I = n(379078),
    w = n(704554),
    k = n(528772),
    P = n(555528),
    R = n(157257),
    D = n(532624),
    M = n(242286),
    L = n(957565),
    U = n(405269),
    B = n(927813),
    G = n(996439),
    F = n(350535),
    V = n(9302),
    H = n(708403),
    W = n(260880),
    K = n(303054),
    z = n(231643),
    q = n(652215),
    Q = n(644434),
    Y = n(985018),
    J = n(167056),
    X = n(661251);
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
function Z(e, t) {
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
        [q.uss.CLICK_ZONE_DEBUG]: (e) =>
            Z(
                $(
                    {
                        type: q.uss.CLICK_ZONE_DEBUG,
                        id: (0, c.A)(),
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
                    P.A.getWidgetDefaultSettings(q.uss.CLICK_ZONE_DEBUG),
                ),
                { pinned: !0 },
            ),
        [q.uss.PERFORMANCE_DEBUG]: (e) =>
            Z(
                $(
                    {
                        type: q.uss.PERFORMANCE_DEBUG,
                        id: (0, c.A)(),
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
                    P.A.getWidgetDefaultSettings(q.uss.PERFORMANCE_DEBUG),
                ),
                { pinned: !0 },
            ),
    },
    et = {};
function en(e) {
    let { id: t } = e,
        [n, i] = l.useState(!1);
    return (
        l.useEffect(() => {
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
        (0, a.jsxs)(m.$n, {
            look: m.$n.Looks.LINK,
            color: m.$n.Colors.LINK,
            size: m.$n.Sizes.MIN,
            onClick: function () {
                (0, L.C)(t, () => i(!0));
            },
            className: J.DT,
            children: ["Application Id: ", t, " ", n ? Y.intl.string(Y.t.t5VZ88) : null],
        })
    );
}
let ea = l.memo(function (e) {
        let { trackedGame: t } = e,
            n = (0, d.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, d.bG)([R.A], () => R.A.getGameForPID(t.pid)),
            i = (0, d.bG)([j.Ay], () => (null == n ? null : j.Ay.getGameOverlayStatus(n)));
        return (0, a.jsxs)("div", {
            className: J.st,
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
                        children: (0, a.jsx)(en, { id: t.applicationId }),
                    }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, O.wR)(t.fullscreenType)],
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
                    className: J.st,
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
                            children: ["overlayMethod: ", (0, O.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsxs)("div", {
                        className: J.st,
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
                                children: ["raw overlayMethod: ", (0, O.gK)(i.overlayMethod)],
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
    el = l.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.cf)([M.default], () => M.default.getOverlayPIDStatuses()),
            l = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
            i = (0, d.bG)([M.default], () => M.default.isInputLocked(t), [t]),
            r = (0, d.bG)([M.default], () => M.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([M.default], () => M.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([M.default], () => M.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: J.st,
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
                    children: ["isInputLocked: ", i],
                }),
                (0, a.jsxs)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", r],
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
        n = ((t = Object.values((0, d.yK)([P.A], () => P.A.getWidgetsForLayout(Q.G)))), t.find((t) => t.type === e));
    return [
        n,
        () => {
            if (null != n) (0, f.uv)(n.id);
            else {
                let t = ee[e];
                if (null == t) return;
                let n = t(Q.G);
                (0, f.jn)(n);
            }
        },
    ];
}
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? "".concat(e.toFixed(2), "ms") : (0, U.i$)(o()(e), "h:mm:ss.SSS");
}
let es = l.memo(function (e) {
    let { pid: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (a = n[l]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (a = n[l]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
            return i;
        })(e, ["pid"]),
        l = (0, d.bG)([S.default], () => {
            var e, n;
            if (null == t) return "Unknown";
            let a = null == (n = S.default.getTrackedGameByPid(t)) ? void 0 : n.gameName;
            return null != a ? ((et[t] = a), a) : null != (e = et[t]) ? e : "Unknown";
        }, [t]);
    return (0, a.jsx)(
        p.Text,
        Z($({}, n), {
            variant: "text-md/semibold",
            color: "text-strong",
            children: l,
        }),
    );
});
function eo() {
    let e = (0, d.bG)([N.A], () => N.A.hasRenderDebugMode(_.x7.TrackFocusPIDs)),
        t = (0, d.yK)([S.default], () => S.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: J.st,
        children: [
            (0, a.jsxs)("div", {
                className: J.Iv,
                children: [
                    (0, a.jsx)(p.dOG, {
                        checked: e,
                        onChange: () =>
                            void x.A.setRenderDebugMode(
                                !N.A.hasRenderDebugMode(_.x7.TrackFocusPIDs),
                                _.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, a.jsx)(p.DUT, {
                        className: J.LL,
                        onClick: () => x.A.clearTrackedPids(),
                        children: (0, a.jsx)(p.ucK, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(p.IpV, {
                className: r()(J.st, J.XG),
                children: [
                    0 === t.length &&
                        (0, a.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        var t;
                        let [n, i, r] = e;
                        return (0, a.jsx)(
                            l.Fragment,
                            {
                                children: (0, a.jsx)(u.m_, {
                                    position: "left",
                                    text: r === _.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, a.jsx)("div", {
                                        children: (0, a.jsxs)(p.Text, {
                                            variant: "text-sm/medium",
                                            color: r === _.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, a.jsx)(es, {
                                                    pid: i,
                                                    tag: "span",
                                                }),
                                                " - ",
                                                null != (t = null == i ? void 0 : i.toString()) ? t : "null",
                                                " @ ",
                                                er(n),
                                            ],
                                        }),
                                    }),
                                }),
                            },
                            "".concat(i, "-").concat(n),
                        );
                    }),
                ],
            }),
        ],
    });
}
let ec = l.memo(function (e) {
        let { pid: t } = e,
            n = (0, d.bG)([S.default, j.Ay], () => {
                var e, n;
                if (null == t) return null;
                let a = null == (n = S.default.getTrackedGameByPid(t)) ? void 0 : n.fullscreenType;
                if (null != a) return a;
                let l = j.Ay.getGameOrTransformedSubgameForPID(t);
                return null != (e = null == l ? void 0 : l.fullscreenType) ? e : b.aI.UNKNOWN;
            }, [t]);
        return (0, a.jsxs)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, O.wR)(n) : "Unknown"],
        });
    }),
    ed = l.memo(function () {
        let e = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
            [t, n] = l.useState({}),
            i = l.useRef(null);
        return (
            l.useEffect(
                () => (
                    (i.current = setInterval(async () => {
                        let e = j.Ay.getRunningGames(),
                            t = [],
                            a = Date.now();
                        for (let n of e) t.push((0, O.E1)(n.pid, 0).then((e) => [n.pid, e, a]));
                        let l = await Promise.all(t);
                        n((e) =>
                            l.reduce(
                                (e, t) => {
                                    var n, a;
                                    let [l, i, r] = t;
                                    if (null == i || null == l) return e;
                                    let s = null != (n = e[l]) ? n : [],
                                        o = null == (a = s[s.length - 1]) ? void 0 : a.screenType;
                                    return (
                                        (0 === s.length || o !== i) &&
                                            (e[l] = [
                                                ...s,
                                                {
                                                    pid: l,
                                                    screenType: i,
                                                    timestamp: r,
                                                },
                                            ]),
                                        e
                                    );
                                },
                                $({}, e),
                            ),
                        );
                    }, +B.A.Millis.SECOND)),
                    () => clearInterval(i.current)
                ),
                [],
            ),
            (0, a.jsx)(u.m_, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, a.jsx)("div", {
                    children: (0, a.jsxs)(p.IpV, {
                        className: r()(J.st, J.XG),
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
                                            (0, a.jsx)(es, {
                                                tag: "div",
                                                pid: e.pid,
                                            }),
                                            (0, a.jsx)(ec, { pid: e.pid }),
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
                                                                .concat((0, O.wR)(n), " @ ")
                                                                .concat(er(l)),
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
            })
        );
    }),
    eu = l.memo(function () {
        var e, t;
        let n = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
            l = (0, V.getPID)(),
            i = (0, d.bG)([S.default], () => S.default.isOverlayOOPEnabledForPid(l), [l]),
            [r, s] = (0, d.yK)([k.A], () => [k.A.enabled, k.A.keepOpen]),
            o = (0, d.bG)([M.default], () => M.default.getFocusedPID()),
            c = (0, d.bG)([M.default], () => M.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: J.st,
            children: [
                0 === Object.keys(n).length &&
                    (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(n).map((e) => (0, a.jsx)(el, { pid: e.pid }, e.pid)),
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
                            children: ["isOOPEnabledForPid: ", i ? "Yes" : "No"],
                        }),
                        (0, a.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", r ? "Yes" : "No"],
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
    em = [
        {
            mode: _.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: _.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: _.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: _.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: _.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: _.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: _.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    ep = l.memo(function () {
        let [e, t] = ei(q.uss.CLICK_ZONE_DEBUG),
            [n, i] = ei(q.uss.PERFORMANCE_DEBUG),
            r = (0, d.bG)([N.A], () => N.A.getRenderDebugModes()),
            [s, o] = l.useState({});
        return (
            l.useEffect(() => {
                let e = setInterval(() => {
                    o({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, a.jsx)("div", {
                className: J.st,
                children: em.map((s) => {
                    let o =
                            s.mode === _.x7.OverlayRafManagerForceEnabled
                                ? "".concat(s.label, " (").concat(T.A.getLastRAFCallbackReason(), ")")
                                : s.label,
                        c = () =>
                            s.mode === _.x7.ClickZones
                                ? null != e
                                : s.mode === _.x7.WidgetAreas
                                  ? null != n
                                  : r.has(s.mode);
                    return (0, a.jsx)(
                        l.Fragment,
                        {
                            children: (0, a.jsx)(p.dOG, {
                                checked: c(),
                                onChange: () => {
                                    var e;
                                    let n = c();
                                    s.mode === _.x7.ClickZones && t(),
                                        s.mode === _.x7.WidgetAreas && i(),
                                        (e = s.mode),
                                        x.A.setRenderDebugMode(!n, e);
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
    eh = l.memo(function () {
        let e = (0, d.cf)([S.default], () => S.default.getTrackedGames()),
            t = (0, d.bG)([j.Ay], () => j.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                t.length > 0 &&
                    (0, a.jsx)(u.m_, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: J.st,
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
                                                (0, a.jsx)(ec, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, a.jsx)(u.m_, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: J.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, a.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, a.jsx)(ea, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    ef = l.memo(function () {
        let e = (0, d.bG)([S.default], () => S.default.getForcedRenderMode()),
            [t, n] = l.useState(e),
            i = [
                {
                    label: _.V6.UNSET,
                    value: _.V6.UNSET,
                    id: _.V6.UNSET,
                },
                {
                    label: _.V6.IN_PROCESS_V2,
                    value: _.V6.IN_PROCESS_V2,
                    id: _.V6.IN_PROCESS_V2,
                },
                {
                    label: _.V6.OUT_OF_PROCESS_V3,
                    value: _.V6.OUT_OF_PROCESS_V3,
                    id: _.V6.OUT_OF_PROCESS_V3,
                },
                {
                    label: _.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: _.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: _.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => Z($({}, t), { label: "".concat(t.label, " ").concat(e === t.value ? "(current)" : "") }));
        return (0, a.jsx)(p.l6P, {
            label: "Override the overlay render mode",
            value: t,
            options: i,
            onSelectionChange: (e) => {
                n(e), x.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function ex(e) {
    let { modalProps: t, onClose: n } = e,
        [i, r] = l.useState(null);
    function s() {
        n(null);
    }
    return (0, a.jsxs)(
        p.EOs,
        Z(
            $(
                {
                    size: p.rIJ.LARGE,
                    "aria-label": "Breadcrumb Import",
                },
                t,
            ),
            {
                transitionState: t.transitionState,
                parentComponent: "BreadcrumbImportPanel",
                children: [
                    (0, a.jsxs)(p.rQ0, {
                        align: v.A.Align.CENTER,
                        justify: v.A.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(p.Text, {
                                variant: "text-md/bold",
                                color: "text-feedback-critical",
                                children: "Breadcrumb Import",
                            }),
                            (0, a.jsx)(p.s_y, { onClick: s }),
                        ],
                    }),
                    (0, a.jsx)(p.$mQ, {
                        children: (0, a.jsx)("div", {
                            className: J.st,
                            children: (0, a.jsx)(p.fs1, {
                                label: "Paste JSON Here",
                                onChange: r,
                                value: null != i ? i : "",
                                rows: 12,
                            }),
                        }),
                    }),
                    (0, a.jsx)(p.jlY, {
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
        filter: (e) => e.type === A.ON.NativeLegacy || e.type === A.ON.NativeOOP,
    },
    render: {
        label: "Render",
        filter: (e) => e.type === A.ON.Renderer,
    },
    flux: {
        label: "Flux",
        filter: (e) => e.type === A.ON.Flux,
    },
    client: {
        label: "Client",
        filter: (e) => e.type === A.ON.OOPModule || e.type === A.ON.LegacyModule,
    },
};
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.QJ.Info;
    if (t === A.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case A.ON.NativeLegacy:
            return "var(--yellow-500)";
        case A.ON.NativeOOP:
            return "var(--green-500)";
        case A.ON.Flux:
            return "var(--brand-400)";
        case A.ON.Renderer:
            return "var(--brand-500)";
        case A.ON.LegacyModule:
            return "var(--yellow-300)";
        case A.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let ev = [
    {
        key: "type",
        cellClassName: J.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: n } = e,
                l = ej(t);
            return (0, a.jsx)("div", {
                className: J.g$,
                style: { color: eg(t, n) },
                children: (0, a.jsx)(l, {
                    color: "currentColor",
                    size: "sm",
                }),
            });
        },
    },
    {
        key: "name",
        cellClassName: J.Cm,
        render(e) {
            let { name: t, type: n, logType: l } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(p.Text, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case A.QJ.Info:
                                    return "text-strong";
                                case A.QJ.Warning:
                                    return "text-feedback-warning";
                                case A.QJ.Error:
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
        cellClassName: J.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, U.i$)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function ej(e) {
    switch (e) {
        case A.ON.NativeLegacy:
            return p.WxK;
        case A.ON.NativeOOP:
            return p.qXB;
        case A.ON.Renderer:
        case A.ON.Flux:
            return p.vH5;
        case A.ON.LegacyModule:
            return p.kN9;
        case A.ON.OOPModule:
            return p.ofK;
        default:
            return p.kN9;
    }
}
function ey(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let e_ = ["__webpack_require__", "fn"],
    eA = ["web.js", "web.js.map"],
    eC = [
        {
            id: "details",
            name: "Details",
            group: z.fu.NONE,
            render: (e) => {
                var t, n, l, i;
                let { breadcrumb: s, onClose: c } = e,
                    { name: d, type: u, logType: m, nativeId: h, stack: f, data: x, timestamp: b, pid: g } = s,
                    v = o()(b),
                    j = ej(u);
                return (0, a.jsxs)(p.ArX, {
                    className: J.bW,
                    children: [
                        (0, a.jsxs)(y.A, {
                            className: r()(X.jr, J.nZ),
                            children: [
                                (0, a.jsx)("div", {
                                    style: { color: eg(u, m) },
                                    className: J.nr,
                                    children: (0, a.jsx)(j, {
                                        color: "currentColor",
                                        size: "sm",
                                    }),
                                }),
                                (0, a.jsxs)(y.A.Title, {
                                    wrapperClassName: J.qd,
                                    children: [
                                        d,
                                        " (",
                                        u,
                                        ")",
                                        (0, a.jsx)(p.DUT, {
                                            tag: "span",
                                            className: J.KE,
                                            onClick: () => (0, L.C)(d),
                                            children: (0, a.jsx)(p.TdU, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(y.A.Icon, {
                                    icon: p.TdU,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, L.C)(ey(s));
                                    },
                                }),
                                (0, a.jsx)(y.A.Icon, {
                                    icon: p.aXh,
                                    tooltip: "Close",
                                    onClick: c,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(H.OA, {
                            className: J.ZK,
                            children: [
                                (0, a.jsx)(H.mA, {
                                    name: "Timestamp",
                                    copyValue: v.toISOString(),
                                    children: (0, a.jsx)("time", {
                                        dateTime: v.toISOString(),
                                        title: (0, U.i$)(v, "LLLL"),
                                        children: (0, U.i$)(v, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, a.jsx)(H.mA, {
                                    name: "Log Type",
                                    copyValue: m,
                                    children: (0, a.jsx)("code", { children: m }),
                                }),
                                (0, a.jsx)(H.mA, {
                                    name: "PID",
                                    copyValue: null != (t = null == g ? void 0 : g.toString()) ? t : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (n = null == g ? void 0 : g.toString()) ? n : "null",
                                    }),
                                }),
                                (0, a.jsx)(H.mA, {
                                    name: "Native ID",
                                    copyValue: null != (l = null == h ? void 0 : h.toString()) ? l : "null",
                                    children: (0, a.jsx)("code", {
                                        children: null != (i = null == h ? void 0 : h.toString()) ? i : "null",
                                    }),
                                }),
                                (0, a.jsx)(H.mA, {
                                    name: "Data",
                                    copyValue: ey(x),
                                    children: (0, a.jsx)("code", { children: ey(x) }),
                                }),
                                null != f &&
                                    (0, a.jsx)(H.mA, {
                                        name: "Stack Trace",
                                        copyValue: f,
                                        children: (0, a.jsx)("code", {
                                            children: f.split("\n").map((e, t) => {
                                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != n) {
                                                    let [, e, l, i, r] = n,
                                                        s = l.split(/[\\/]/).pop();
                                                    return e_.includes(e.trim())
                                                        ? null
                                                        : (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, a.jsx)("span", {
                                                                          className: J.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eA.includes(null != s ? s : "") &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, a.jsxs)("span", {
                                                                                      className: J.lz,
                                                                                      title: l,
                                                                                      children: [s, ":", i, ":", r],
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
    eS = {
        searchType: I.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: n, stack: a, data: l } = e,
                i = [t, n, JSON.stringify(l)];
            return null != a && i.push(a), i;
        },
        throttleMs: 100,
    };
function eO() {
    let { ref: e, height: t } = (0, g.Ay)(),
        n = (0, d.bG)([N.A], () => N.A.isModuleLoggingEnabled()),
        [i, s] = l.useState(n),
        [o, c] = l.useState(!1),
        [u, m] = l.useState(null),
        [h, f] = l.useState(Object.keys(eb)),
        [b, v] = (0, d.bG)([N.A], () => N.A.getOverlayLoggingBreadcrumbs(), [], G.D),
        [j, y] = l.useState(null),
        _ = null != j ? j : b,
        A = null != j ? -1 : v;
    l.useEffect(() => {
        0 !== A &&
            (o
                ? m(_.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : m(null));
    }, [o, _, A]);
    let [C, S] = l.useState(""),
        O = l.useMemo(
            () =>
                0 === A
                    ? []
                    : _.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of h) {
                              let { filter: n } = eb[t];
                              if (n(e)) return !0;
                          }
                          return !1;
                      }),
            [_, h, u, o, A],
        ),
        [E, T] = l.useState(O),
        [I, k] = l.useState(null),
        P = l.useMemo(() => _.find((e) => e.key === I), [_, I]),
        R = l.useCallback((e) => {
            T(e);
        }, []),
        { renderSelectedTab: D } = (0, z.Ay)({ tabs: eC }, []);
    (0, w.RT)(C, O, R, eS, [_]);
    let M = l.useCallback((e) => {
            s(e), x.A.setModuleLogging(e);
        }, []),
        [U, B] = l.useState(!1),
        F = l.useRef(null),
        V = l.useCallback(() => {
            (0, L.C)(JSON.stringify(O)), B(!0);
        }, [O]);
    l.useEffect(() => {
        if (U)
            return (
                (F.current = setTimeout(() => {
                    B(!1);
                }, 4000)),
                () => {
                    null != F.current && clearTimeout(F.current);
                }
            );
    }, [U]);
    let H = l.useCallback((e) => {
            y(null != e ? JSON.parse(e) : null);
        }, []),
        q = l.useCallback(
            (e) => {
                if (e) return y(null);
                (0, p.qfG)(
                    (e) =>
                        (0, a.jsx)(ex, {
                            modalProps: e,
                            onClose: (t) => {
                                H(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    p.SYi,
                );
            },
            [H],
        );
    return (0, a.jsxs)("div", {
        ref: e,
        className: J.rh,
        children: [
            (0, a.jsxs)("div", {
                className: J.st,
                children: [
                    (0, a.jsxs)("div", {
                        className: r()(J._V, J.XQ),
                        children: [
                            (0, a.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: J.iR,
                                children: (0, a.jsx)(p.Checkbox, {
                                    label: "Poll Native",
                                    checked: i,
                                    onChange: (e) => M(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: J.iR,
                                children: (0, a.jsx)(p.Checkbox, {
                                    label: "Only Active Games",
                                    checked: o,
                                    onChange: (e) => c(e),
                                }),
                            }),
                            (0, a.jsxs)(p.DUT, {
                                className: J.ny,
                                onClick: V,
                                children: [
                                    (0, a.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: U ? "Copied" : "Copy All",
                                    }),
                                    U
                                        ? (0, a.jsx)(p.A9s, {
                                              size: "sm",
                                              color: p.LU0.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, a.jsx)(p.TdU, {
                                              color: "currentColor",
                                              size: "sm",
                                          }),
                                ],
                            }),
                            (0, a.jsx)(p.DUT, {
                                className: J.ny,
                                onClick: () => q(null != j),
                                children: (0, a.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != j ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(J._V, J.XQ),
                        children: Object.entries(eb).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                p.DUT,
                                {
                                    className: r()(J.pb, h.includes(t) && J.bx),
                                    onClick: () => {
                                        f((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                        className: J._V,
                        children: (0, a.jsx)(p.IWV, {
                            query: C,
                            onChange: S,
                            onClear: () => S(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: r()(J.st, J.CZ),
                children: (0, a.jsx)(K.A, {
                    columns: ev,
                    data: E,
                    selectedRowKey: null != I ? I : void 0,
                    onClickRow: (e) => k(e.key),
                }),
            }),
            null != P &&
                (0, a.jsx)(W.A, {
                    className: r()(J.st, J.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: D({
                        breadcrumb: P,
                        onClose: () => k(null),
                    }),
                }),
        ],
    });
}
let eE = l.memo(function () {
        let e = (0, d.bG)([E.A], () => E.A.getPopoutInitializationStages());
        return (0, a.jsxs)("div", {
            className: J.st,
            children: [
                (0, a.jsx)("div", {
                    className: J.Iv,
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
    eN = l.memo(function () {
        let e = (0, d.bG)([N.A], () => N.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([N.A], () => N.A.getDebuggingState());
        return (
            l.useEffect(
                () => (
                    x.A.setStateDebugging(!0),
                    () => {
                        x.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, a.jsxs)("div", {
                className: J.st,
                children: [
                    (0, a.jsx)("div", {
                        className: J.Iv,
                        children: (0, a.jsx)(p.dOG, {
                            checked: e,
                            onChange: () => x.A.setStateDebugging(!e),
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
function eT() {
    return (0, a.jsx)(p.ArX, {
        children: (0, a.jsxs)("div", {
            className: r()(X.nd, J.rf),
            children: [
                (0, a.jsx)(ep, {}),
                (0, a.jsx)(ef, {}),
                (0, a.jsx)(eh, {}),
                (0, a.jsx)(eu, {}),
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(ed, {}),
                (0, a.jsx)(eE, {}),
                (0, a.jsx)(eN, {}),
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
    ek = l.memo(function () {
        let e = (0, C.wW)(),
            t = (0, d.bG)([D.Ay], () => D.Ay.getOverlayKeybind());
        return (0, a.jsxs)("div", {
            className: J.st,
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
                        children: JSON.stringify(Z($({}, e), { overlayKeybind: (0, F.dI)(t.shortcut) }), void 0, 2),
                    }),
                }),
                (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: "Overrides",
                }),
                (0, a.jsx)(p.l6P, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: ew(e.overrideIsNewOverlayUser),
                    options: [
                        {
                            label: "Disabled (no override)",
                            value: "Disabled",
                            id: "Disabled",
                        },
                        {
                            label: "Existing user",
                            value: "False",
                            id: "False",
                        },
                        {
                            label: "New user",
                            value: "True",
                            id: "True",
                        },
                    ],
                    onSelectionChange: (e) => {
                        (0, C.sw)(eI(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, a.jsx)(p.l6P, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: ew(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        {
                            label: "Disabled (no override)",
                            value: "Disabled",
                            id: "Disabled",
                        },
                        {
                            label: "Using default keybind",
                            value: "True",
                            id: "True",
                        },
                        {
                            label: "Not using default keybind",
                            value: "False",
                            id: "False",
                        },
                    ],
                    onSelectionChange: (e) => {
                        (0, C.C3)(eI(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: "Actions",
                }),
                (0, a.jsx)(p.Button, {
                    size: "sm",
                    text: "Reset isNewOverlayUser",
                    onClick: () => (0, C.xc)(),
                }),
                (0, a.jsx)(p.Button, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, C.tM)(),
                }),
            ],
        });
    });
function eP() {
    return (0, a.jsx)(p.ArX, {
        children: (0, a.jsx)("div", {
            className: r()(X.nd, J.rf),
            children: (0, a.jsx)(ek, {}),
        }),
    });
}
function eR() {
    let [e, t] = l.useState("state");
    return (
        l.useEffect(
            () => (
                h.h.dispatch({
                    type: "OVERLAY_SET_DETAILED_LOGGING",
                    enabled: !0,
                }),
                () => {
                    h.h.dispatch({
                        type: "OVERLAY_SET_DETAILED_LOGGING",
                        enabled: !1,
                    });
                }
            ),
            [],
        ),
        (0, a.jsxs)("div", {
            className: r()(X.nd, J.nd),
            children: [
                (0, a.jsxs)("div", {
                    className: J._V,
                    children: [
                        (0, a.jsx)(p.DUT, {
                            className: r()(J.k0, "state" === e && J.a),
                            onClick: () => t("state"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, a.jsx)(p.DUT, {
                            className: r()(J.k0, "logging" === e && J.a),
                            onClick: () => t("logging"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, a.jsx)(p.DUT, {
                            className: r()(J.k0, "experiments" === e && J.a),
                            onClick: () => t("experiments"),
                            children: (0, a.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, a.jsx)(eT, {}),
                "logging" === e && (0, a.jsx)(eO, {}),
                "experiments" === e && (0, a.jsx)(eP, {}),
            ],
        })
    );
}
