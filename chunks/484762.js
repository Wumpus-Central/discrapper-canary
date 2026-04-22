a.d(t, { A: () => e1 }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(989349),
    o = a.n(r),
    d = a(835245),
    c = a(311907),
    u = a(990078),
    m = a(862482),
    h = a(834730),
    p = a(243721),
    x = a(939249),
    g = a(241326),
    v = a(573613),
    b = a(691885),
    _ = a(935462),
    f = a(260598),
    j = a(825484),
    A = a(821609),
    y = a(93688),
    C = a(717400),
    E = a(676955),
    S = a(31300),
    N = a(500060),
    k = a(624479),
    I = a(285796),
    D = a(192308),
    T = a(231723),
    w = a(150934),
    O = a(933832),
    R = a(827734),
    L = a(892547),
    M = a(534514),
    P = a(73153),
    U = a(391973),
    B = a(684013),
    G = a(56562),
    F = a(765671),
    V = a(235986),
    $ = a(15285),
    W = a(742589),
    H = a(41984),
    z = a(181435),
    K = a(435736),
    Y = a(833551),
    q = a(515183),
    J = a(395011),
    Q = a(127242),
    X = a(869014),
    Z = a(379078),
    ee = a(704554),
    et = a(528772),
    ea = a(555528),
    en = a(157257),
    el = a(532624),
    ei = a(242286),
    es = a(957565),
    er = a(405269),
    eo = a(927813),
    ed = a(996439),
    ec = a(350535),
    eu = a(9302),
    em = a(708403),
    eh = a(260880),
    ep = a(303054),
    ex = a(231643),
    eg = a(652215),
    ev = a(644434),
    eb = a(985018),
    e_ = a(618137),
    ef = a(505206);
let ej = {
        [eg.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: eg.uss.CLICK_ZONE_DEBUG,
            id: (0, d.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...ea.A.getWidgetDefaultSettings(eg.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [eg.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: eg.uss.PERFORMANCE_DEBUG,
            id: (0, d.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...ea.A.getWidgetDefaultSettings(eg.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    eA = {};
function ey(e) {
    let { id: t } = e,
        [a, i] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        i(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, n.jsxs)(m.$n, {
            look: m.$n.Looks.LINK,
            color: m.$n.Colors.LINK,
            size: m.$n.Sizes.MIN,
            onClick: function () {
                (0, es.C)(t, () => i(!0));
            },
            className: e_.DT,
            children: ["Application Id: ", t, " ", a ? eb.intl.string(eb.t.t5VZ88) : null],
        })
    );
}
let eC = l.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, c.bG)([$.Ay], () => $.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, c.bG)([en.A], () => en.A.getGameForPID(t.pid)),
            i = (0, c.bG)([$.Ay], () => (null == a ? null : $.Ay.getGameOverlayStatus(a)));
        return (0, n.jsxs)("div", {
            className: e_.st,
            children: [
                (0, n.jsx)(h.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, n.jsx)(h.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, n.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, n.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, n.jsx)(ey, { id: t.applicationId }),
                    }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, q.wR)(t.fullscreenType)],
                }),
                (0, n.jsxs)(h.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, n.jsxs)("div", {
                    className: e_.st,
                    children: [
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, q.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, n.jsxs)("div", {
                        className: e_.st,
                        children: [
                            (0, n.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, n.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, n.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, n.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, q.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    eE = l.memo(function (e) {
        let { pid: t } = e,
            a = (0, c.cf)([ei.default], () => ei.default.getOverlayPIDStatuses()),
            l = (0, c.cf)([Y.default], () => Y.default.getTrackedGames()),
            i = (0, c.bG)([ei.default], () => ei.default.isInputLocked(t), [t]),
            s = (0, c.bG)([ei.default], () => ei.default.DEV_isInputLockedV3(t), [t]),
            r = (0, c.bG)([ei.default], () => ei.default.DEV_isInputLocked(t), [t]),
            o = (0, c.bG)([ei.default], () => ei.default.isReady(t), [t]);
        return (0, n.jsxs)("div", {
            className: e_.st,
            children: [
                (0, n.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            let t = l[e]?.timer;
                            if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                            let a = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        ((e) => {
                            let t = l[e]?.timer;
                            if (
                                null == t ||
                                null == t.moduleTrackingTimestamp ||
                                null == t.screenTypeResolutionTimestamp
                            )
                                return "...";
                            let a = t.moduleTrackingTimestamp - t.screenTypeResolutionTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        ((e) => {
                            let t = l[e]?.timer;
                            if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp)
                                return "...";
                            let a = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, n.jsxs)(h.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", i] }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, n.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", r],
                }),
                (0, n.jsxs)(h.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function eS(e) {
    let t,
        a = ((t = Object.values((0, c.yK)([ea.A], () => ea.A.getWidgetsForLayout(ev.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, U.uv)(a.id);
            else {
                let t = ej[e];
                if (null == t) return;
                let a = t(ev.G);
                (0, U.jn)(a);
            }
        },
    ];
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, er.i$)(o()(e), "h:mm:ss.SSS");
}
let ek = l.memo(function (e) {
    let { pid: t, ...a } = e,
        l = (0, c.bG)([Y.default], () => {
            if (null == t) return "Unknown";
            let e = Y.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((eA[t] = e), e) : (eA[t] ?? "Unknown");
        }, [t]);
    return (0, n.jsx)(h.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: l });
});
function eI() {
    let e = (0, c.bG)([Q.A], () => Q.A.hasRenderDebugMode(H.x7.TrackFocusPIDs)),
        t = (0, c.yK)([Y.default], () => Y.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, n.jsxs)("div", {
        className: e_.st,
        children: [
            (0, n.jsxs)("div", {
                className: e_.Iv,
                children: [
                    (0, n.jsx)(p.d, {
                        checked: e,
                        onChange: () =>
                            void B.A.setRenderDebugMode(
                                !Q.A.hasRenderDebugMode(H.x7.TrackFocusPIDs),
                                H.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, n.jsx)(x.D, {
                        className: e_.LL,
                        onClick: () => B.A.clearTrackedPids(),
                        children: (0, n.jsx)(g.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, n.jsxs)(v.Ip, {
                className: s()(e_.st, e_.XG),
                children: [
                    0 === t.length &&
                        (0, n.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, i] = e;
                        return (0, n.jsx)(
                            l.Fragment,
                            {
                                children: (0, n.jsx)(u.m, {
                                    position: "left",
                                    text: i === H.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, n.jsx)("div", {
                                        children: (0, n.jsxs)(h.E, {
                                            variant: "text-sm/medium",
                                            color: i === H.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, n.jsx)(ek, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                eN(t),
                                            ],
                                        }),
                                    }),
                                }),
                            },
                            `${a}-${t}`,
                        );
                    }),
                ],
            }),
        ],
    });
}
let eD = l.memo(function (e) {
        let { pid: t } = e,
            a = (0, c.bG)([Y.default, $.Ay], () => {
                if (null == t) return null;
                let e = Y.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = $.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? G.aI.UNKNOWN;
            }, [t]);
        return (0, n.jsxs)(h.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, q.wR)(a) : "Unknown"],
        });
    }),
    eT = l.memo(function () {
        let e = (0, c.cf)([Y.default], () => Y.default.getTrackedGames()),
            [t, a] = l.useState({}),
            i = l.useRef(null);
        return (
            l.useEffect(
                () => (
                    (i.current = setInterval(async () => {
                        let e = $.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, q.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let l = await Promise.all(t);
                        a((e) =>
                            l.reduce(
                                (e, t) => {
                                    let [a, n, l] = t;
                                    if (null == n || null == a) return e;
                                    let i = e[a] ?? [],
                                        s = i[i.length - 1]?.screenType;
                                    return (
                                        (0 === i.length || s !== n) &&
                                            (e[a] = [...i, { pid: a, screenType: n, timestamp: l }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +eo.A.Millis.SECOND)),
                    () => clearInterval(i.current)
                ),
                [],
            ),
            (0, n.jsx)(u.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsxs)(v.Ip, {
                        className: s()(e_.st, e_.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, n.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, n.jsx)(ek, { tag: "div", pid: e.pid }),
                                            (0, n.jsx)(eD, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: l } = t;
                                                    return (0, n.jsx)(
                                                        h.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, q.wR)(a)} @ ${eN(l)}`,
                                                        },
                                                        `${e.pid}-${a}-${l}`,
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
    ew = l.memo(function () {
        let e = (0, c.cf)([Y.default], () => Y.default.getTrackedGames()),
            t = (0, eu.getPID)(),
            a = (0, c.bG)([Y.default], () => Y.default.isOverlayOOPEnabledForPid(t), [t]),
            [l, i] = (0, c.yK)([et.A], () => [et.A.enabled, et.A.keepOpen]),
            s = (0, c.bG)([ei.default], () => ei.default.getFocusedPID()),
            r = (0, c.bG)([ei.default], () => ei.default.isFocusedPidOutOfProcess());
        return (0, n.jsxs)("div", {
            className: e_.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, n.jsx)(eE, { pid: e.pid }, e.pid)),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", r ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"],
                        }),
                        (0, n.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", i ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    eO = [
        {
            mode: H.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: H.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: H.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: H.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: H.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: H.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: H.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    eR = l.memo(function () {
        let [e, t] = eS(eg.uss.CLICK_ZONE_DEBUG),
            [a, i] = eS(eg.uss.PERFORMANCE_DEBUG),
            s = (0, c.bG)([Q.A], () => Q.A.getRenderDebugModes()),
            [r, o] = l.useState({});
        return (
            l.useEffect(() => {
                let e = setInterval(() => {
                    o({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, n.jsx)("div", {
                className: e_.st,
                children: eO.map((r) => {
                    let o =
                            r.mode === H.x7.OverlayRafManagerForceEnabled
                                ? `${r.label} (${X.A.getLastRAFCallbackReason()})`
                                : r.label,
                        d = () =>
                            r.mode === H.x7.ClickZones
                                ? null != e
                                : r.mode === H.x7.WidgetAreas
                                  ? null != a
                                  : s.has(r.mode);
                    return (0, n.jsx)(
                        l.Fragment,
                        {
                            children: (0, n.jsx)(p.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    r.mode === H.x7.ClickZones && t(),
                                        r.mode === H.x7.WidgetAreas && i(),
                                        (e = r.mode),
                                        B.A.setRenderDebugMode(!a, e);
                                },
                                label: o,
                                description: r.tooltip,
                            }),
                        },
                        r.mode,
                    );
                }),
            })
        );
    }),
    eL = l.memo(function () {
        let e = (0, c.cf)([Y.default], () => Y.default.getTrackedGames()),
            t = (0, c.bG)([$.Ay], () => $.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                t.length > 0 &&
                    (0, n.jsx)(u.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: e_.st,
                                children: [
                                    (0, n.jsx)(h.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(
                                                    h.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, n.jsx)(eD, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, n.jsx)(u.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsxs)("div", {
                            className: e_.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, n.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, n.jsx)(eC, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    eM = l.memo(function () {
        let e = (0, c.bG)([Y.default], () => Y.default.getForcedRenderMode()),
            [t, a] = l.useState(e),
            i = [
                { label: H.V6.UNSET, value: H.V6.UNSET, id: H.V6.UNSET },
                { label: H.V6.IN_PROCESS_V2, value: H.V6.IN_PROCESS_V2, id: H.V6.IN_PROCESS_V2 },
                { label: H.V6.OUT_OF_PROCESS_V3, value: H.V6.OUT_OF_PROCESS_V3, id: H.V6.OUT_OF_PROCESS_V3 },
                {
                    label: H.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: H.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: H.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, n.jsx)(b.l, {
            label: "Override the overlay render mode",
            value: t,
            options: i,
            onSelectionChange: (e) => {
                a(e), B.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function eP(e) {
    let { modalProps: t, onClose: a } = e,
        [i, s] = l.useState(null);
    function r() {
        a(null);
    }
    return (0, n.jsxs)(_.EO, {
        size: _.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, n.jsxs)(_.rQ, {
                align: V.A.Align.CENTER,
                justify: V.A.Justify.BETWEEN,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, n.jsx)(_.s_, { onClick: r }),
                ],
            }),
            (0, n.jsx)(_.$m, {
                children: (0, n.jsx)("div", {
                    className: e_.st,
                    children: (0, n.jsx)(f.f, { label: "Paste JSON Here", onChange: s, value: i ?? "", rows: 12 }),
                }),
            }),
            (0, n.jsx)(_.jl, {
                children: (0, n.jsxs)(j.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, n.jsx)(A.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(i);
                            },
                        }),
                        (0, n.jsx)(A.$, { variant: "secondary", text: "Clear", onClick: r }),
                    ],
                }),
            }),
        ],
    });
}
let eU = {
    native: { label: "Native", filter: (e) => e.type === z.ON.NativeLegacy || e.type === z.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === z.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === z.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === z.ON.OOPModule || e.type === z.ON.LegacyModule },
};
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z.QJ.Info;
    if (t === z.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case z.ON.NativeLegacy:
            return "var(--yellow-500)";
        case z.ON.NativeOOP:
            return "var(--green-500)";
        case z.ON.Flux:
            return "var(--brand-400)";
        case z.ON.Renderer:
            return "var(--brand-500)";
        case z.ON.LegacyModule:
            return "var(--yellow-300)";
        case z.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let eG = [
    {
        key: "type",
        cellClassName: e_.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                l = eF(t);
            return (0, n.jsx)("div", {
                className: e_.g$,
                style: { color: eB(t, a) },
                children: (0, n.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: e_.Cm,
        render(e) {
            let { name: t, type: a, logType: l } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case z.QJ.Info:
                                    return "text-strong";
                                case z.QJ.Warning:
                                    return "text-feedback-warning";
                                case z.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(l),
                        children: t,
                    }),
                    (0, n.jsxs)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: e_.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, er.i$)(o()(t), "h:mm:ss.SSS");
        },
    },
];
function eF(e) {
    switch (e) {
        case z.ON.NativeLegacy:
            return y.W;
        case z.ON.NativeOOP:
            return C.q;
        case z.ON.Renderer:
        case z.ON.Flux:
            return E.v;
        case z.ON.LegacyModule:
            return S.k;
        case z.ON.OOPModule:
            return N.o;
        default:
            return S.k;
    }
}
function eV(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let e$ = ["__webpack_require__", "fn"],
    eW = ["web.js", "web.js.map"],
    eH = [
        {
            id: "details",
            name: "Details",
            group: ex.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: l, type: i, logType: r, nativeId: d, stack: c, data: u, timestamp: m, pid: h } = t,
                    p = o()(m),
                    g = eF(i);
                return (0, n.jsxs)(v.Ar, {
                    className: e_.bW,
                    children: [
                        (0, n.jsxs)(W.A, {
                            className: s()(ef.jr, e_.nZ),
                            children: [
                                (0, n.jsx)("div", {
                                    style: { color: eB(i, r) },
                                    className: e_.nr,
                                    children: (0, n.jsx)(g, { color: "currentColor", size: "sm" }),
                                }),
                                (0, n.jsxs)(W.A.Title, {
                                    wrapperClassName: e_.qd,
                                    children: [
                                        l,
                                        " (",
                                        i,
                                        ")",
                                        (0, n.jsx)(x.D, {
                                            tag: "span",
                                            className: e_.KE,
                                            onClick: () => (0, es.C)(l),
                                            children: (0, n.jsx)(k.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(W.A.Icon, {
                                    icon: k.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, es.C)(eV(t));
                                    },
                                }),
                                (0, n.jsx)(W.A.Icon, { icon: I.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, n.jsxs)(em.OA, {
                            className: e_.ZK,
                            children: [
                                (0, n.jsx)(em.mA, {
                                    name: "Timestamp",
                                    copyValue: p.toISOString(),
                                    children: (0, n.jsx)("time", {
                                        dateTime: p.toISOString(),
                                        title: (0, er.i$)(p, "LLLL"),
                                        children: (0, er.i$)(p, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, n.jsx)(em.mA, {
                                    name: "Log Type",
                                    copyValue: r,
                                    children: (0, n.jsx)("code", { children: r }),
                                }),
                                (0, n.jsx)(em.mA, {
                                    name: "PID",
                                    copyValue: h?.toString() ?? "null",
                                    children: (0, n.jsx)("code", { children: h?.toString() ?? "null" }),
                                }),
                                (0, n.jsx)(em.mA, {
                                    name: "Native ID",
                                    copyValue: d?.toString() ?? "null",
                                    children: (0, n.jsx)("code", { children: d?.toString() ?? "null" }),
                                }),
                                (0, n.jsx)(em.mA, {
                                    name: "Data",
                                    copyValue: eV(u),
                                    children: (0, n.jsx)("code", { children: eV(u) }),
                                }),
                                null != c &&
                                    (0, n.jsx)(em.mA, {
                                        name: "Stack Trace",
                                        copyValue: c,
                                        children: (0, n.jsx)("code", {
                                            children: c.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, l, i, s] = a,
                                                        r = l.split(/[\\/]/).pop();
                                                    return e$.includes(e.trim())
                                                        ? null
                                                        : (0, n.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, n.jsx)("span", {
                                                                          className: e_.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !eW.includes(r ?? "") &&
                                                                          (0, n.jsxs)(n.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, n.jsxs)("span", {
                                                                                      className: e_.lz,
                                                                                      title: l,
                                                                                      children: [r, ":", i, ":", s],
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
    ez = {
        searchType: Z.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return null != n && i.push(n), i;
        },
        throttleMs: 100,
    };
function eK() {
    let { ref: e, height: t } = (0, F.Ay)(),
        a = (0, c.bG)([Q.A], () => Q.A.isModuleLoggingEnabled()),
        [i, r] = l.useState(a),
        [o, d] = l.useState(!1),
        [u, m] = l.useState(null),
        [p, g] = l.useState(Object.keys(eU)),
        [v, b] = (0, c.bG)([Q.A], () => Q.A.getOverlayLoggingBreadcrumbs(), [], ed.D),
        [_, f] = l.useState(null),
        j = _ ?? v,
        A = null != _ ? -1 : b;
    l.useEffect(() => {
        0 !== A &&
            (o
                ? m(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : m(null));
    }, [o, j, A]);
    let [y, C] = l.useState(""),
        E = l.useMemo(
            () =>
                0 === A
                    ? []
                    : j.filter((e) => {
                          if (o && null != u && e.timestamp < u) return !1;
                          for (let t of p) {
                              let { filter: a } = eU[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, p, u, o, A],
        ),
        [S, N] = l.useState(E),
        [I, M] = l.useState(null),
        P = l.useMemo(() => j.find((e) => e.key === I), [j, I]),
        U = l.useCallback((e) => {
            N(e);
        }, []),
        { renderSelectedTab: G } = (0, ex.Ay)({ tabs: eH }, []);
    (0, ee.RT)(y, E, U, ez, [j]);
    let V = l.useCallback((e) => {
            r(e), B.A.setModuleLogging(e);
        }, []),
        [$, W] = l.useState(!1),
        H = l.useRef(null),
        z = l.useCallback(() => {
            (0, es.C)(JSON.stringify(E)), W(!0);
        }, [E]);
    l.useEffect(() => {
        if ($)
            return (
                (H.current = setTimeout(() => {
                    W(!1);
                }, 4e3)),
                () => {
                    null != H.current && clearTimeout(H.current);
                }
            );
    }, [$]);
    let K = l.useCallback((e) => {
            f(null != e ? JSON.parse(e) : null);
        }, []),
        Y = l.useCallback(
            (e) => {
                if (e) return f(null);
                (0, D.openModal)(
                    (e) =>
                        (0, n.jsx)(eP, {
                            modalProps: e,
                            onClose: (t) => {
                                K(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    T.SY,
                );
            },
            [K],
        );
    return (0, n.jsxs)("div", {
        ref: e,
        className: e_.rh,
        children: [
            (0, n.jsxs)("div", {
                className: e_.st,
                children: [
                    (0, n.jsxs)("div", {
                        className: s()(e_._V, e_.XQ),
                        children: [
                            (0, n.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: e_.iR,
                                children: (0, n.jsx)(w.S, { label: "Poll Native", checked: i, onChange: (e) => V(e) }),
                            }),
                            (0, n.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: e_.iR,
                                children: (0, n.jsx)(w.S, {
                                    label: "Only Active Games",
                                    checked: o,
                                    onChange: (e) => d(e),
                                }),
                            }),
                            (0, n.jsxs)(x.D, {
                                className: e_.ny,
                                onClick: z,
                                children: [
                                    (0, n.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: $ ? "Copied" : "Copy All",
                                    }),
                                    $
                                        ? (0, n.jsx)(O.A, { size: "sm", color: R.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, n.jsx)(k.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, n.jsx)(x.D, {
                                className: e_.ny,
                                onClick: () => Y(null != _),
                                children: (0, n.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != _ ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(e_._V, e_.XQ),
                        children: Object.entries(eU).map((e) => {
                            let [t, a] = e;
                            return (0, n.jsx)(
                                x.D,
                                {
                                    className: s()(e_.pb, p.includes(t) && e_.bx),
                                    onClick: () => {
                                        g((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, n.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: e_._V,
                        children: (0, n.jsx)(L.I, {
                            query: y,
                            onChange: C,
                            onClear: () => C(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: s()(e_.st, e_.CZ),
                children: (0, n.jsx)(ep.A, {
                    columns: eG,
                    data: S,
                    selectedRowKey: I ?? void 0,
                    onClickRow: (e) => M(e.key),
                }),
            }),
            null != P &&
                (0, n.jsx)(eh.A, {
                    className: s()(e_.st, e_.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: G({ breadcrumb: P, onClose: () => M(null) }),
                }),
        ],
    });
}
let eY = l.memo(function () {
        let e = (0, c.bG)([J.A], () => J.A.getPopoutInitializationStages());
        return (0, n.jsxs)("div", {
            className: e_.st,
            children: [
                (0, n.jsx)("div", {
                    className: e_.Iv,
                    children: (0, n.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, n.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, n.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    eq = l.memo(function () {
        let e = (0, c.bG)([Q.A], () => Q.A.isStateDebuggingEnabled()),
            t = (0, c.bG)([Q.A], () => Q.A.getDebuggingState());
        return (
            l.useEffect(
                () => (
                    B.A.setStateDebugging(!0),
                    () => {
                        B.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, n.jsxs)("div", {
                className: e_.st,
                children: [
                    (0, n.jsx)("div", {
                        className: e_.Iv,
                        children: (0, n.jsx)(p.d, {
                            checked: e,
                            onChange: () => B.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, n.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function eJ() {
    return (0, n.jsx)(v.Ar, {
        children: (0, n.jsxs)("div", {
            className: s()(ef.nd, e_.rf),
            children: [
                (0, n.jsx)(eR, {}),
                (0, n.jsx)(eM, {}),
                (0, n.jsx)(eL, {}),
                (0, n.jsx)(ew, {}),
                (0, n.jsx)(eI, {}),
                (0, n.jsx)(eT, {}),
                (0, n.jsx)(eY, {}),
                (0, n.jsx)(eq, {}),
            ],
        }),
    });
}
let eQ = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    eX = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    eZ = l.memo(function () {
        let e = (0, K.wW)(),
            t = (0, c.bG)([el.Ay], () => el.Ay.getOverlayKeybind());
        return (0, n.jsxs)("div", {
            className: e_.st,
            children: [
                (0, n.jsx)(M.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, n.jsx)(M.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, n.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, n.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, ec.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, n.jsx)(M.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, n.jsx)(b.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: eX(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, K.sw)(eQ(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, n.jsx)(b.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: eX(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, K.C3)(eQ(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, n.jsx)(M.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, n.jsx)(A.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, K.xc)() }),
                (0, n.jsx)(A.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, K.tM)() }),
            ],
        });
    });
function e0() {
    return (0, n.jsx)(v.Ar, {
        children: (0, n.jsx)("div", { className: s()(ef.nd, e_.rf), children: (0, n.jsx)(eZ, {}) }),
    });
}
function e1() {
    let [e, t] = l.useState("state");
    return (
        l.useEffect(
            () => (
                P.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    P.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, n.jsxs)("div", {
            className: s()(ef.nd, e_.nd),
            children: [
                (0, n.jsxs)("div", {
                    className: e_._V,
                    children: [
                        (0, n.jsx)(x.D, {
                            className: s()(e_.k0, "state" === e && e_.a),
                            onClick: () => t("state"),
                            children: (0, n.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, n.jsx)(x.D, {
                            className: s()(e_.k0, "logging" === e && e_.a),
                            onClick: () => t("logging"),
                            children: (0, n.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, n.jsx)(x.D, {
                            className: s()(e_.k0, "experiments" === e && e_.a),
                            onClick: () => t("experiments"),
                            children: (0, n.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, n.jsx)(eJ, {}),
                "logging" === e && (0, n.jsx)(eK, {}),
                "experiments" === e && (0, n.jsx)(e0, {}),
            ],
        })
    );
}
