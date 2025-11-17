n.d(t, { Z: () => f }), n(539854);
var l = n(54381);
n(473749);
var a = n(442837),
    i = n(481060),
    r = n(179658),
    o = n(482215),
    s = n(906467),
    c = n(857192),
    u = n(594174),
    d = n(695346),
    g = n(313789),
    b = n(518596),
    p = n(726985),
    O = n(981631);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n,
            isLoggingGatewayEvents: f,
            isLoggingOverlayEvents: S,
            isLoggingAnalyticsEvents: v,
            isAnalyticsDebuggerEnabled: P,
            isTracingRequests: h,
            isForcedCanary: j,
            isSourceMapsEnabled: A,
            isIdleStatusIndicatorEnabled: N,
            isAxeEnabled: w,
            preventPopoutClose: _,
            onlyShowPreviewAppCollections: D,
            disableAppCollectionsCache: x,
        } = (0, a.cj)([c.default, u.default, s.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: c.default.layoutDebuggingEnabled,
                isStaff: (null == (e = u.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0,
                isDeveloper: s.Z.isDeveloper,
                isLoggingGatewayEvents: c.default.isLoggingGatewayEvents,
                isLoggingOverlayEvents: c.default.isLoggingOverlayEvents,
                isLoggingAnalyticsEvents: c.default.isLoggingAnalyticsEvents,
                isAnalyticsDebuggerEnabled: c.default.isAnalyticsDebuggerEnabled,
                isTracingRequests: c.default.isTracingRequests,
                isForcedCanary: c.default.isForcedCanary,
                isSourceMapsEnabled: c.default.sourceMapsEnabled,
                isIdleStatusIndicatorEnabled: c.default.isIdleStatusIndicatorEnabled,
                isAxeEnabled: c.default.isAxeEnabled,
                preventPopoutClose: c.default.preventPopoutClose,
                onlyShowPreviewAppCollections: c.default.onlyShowPreviewAppCollections,
                disableAppCollectionsCache: c.default.disableAppCollectionsCache,
            };
        }),
        { horizontalSpacing: I, verticalSpacing: T, maxHorizontalSpacing: C, maxVerticalSpacing: m } = (0, o.i)(),
        { setHorizontalSpacing: L, setVerticalSpacing: R } = o.i.getState(),
        Z = d.zY.useSetting(),
        k = [];
    return (
        t &&
            n &&
            (k.push(
                (0, l.jsx)(
                    i.sNh,
                    {
                        id: "overrides",
                        label: "Overrides",
                        action: () => {
                            (0, b.openUserSettings)(g.n.DEVELOPER_OPTIONS_PANEL, {
                                section: O.oAB.DEVELOPER_OPTIONS,
                                subsection: p.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                            });
                        },
                    },
                    "overrides",
                ),
            ),
            k.push(
                (0, l.jsx)(
                    i.sNh,
                    {
                        id: "manual-triggers",
                        label: "Manual Triggers",
                        action: () => {
                            (0, b.openUserSettings)(g.n.DEVELOPER_OPTIONS_PANEL, {
                                section: O.oAB.DEVELOPER_OPTIONS,
                                subsection: p.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                            });
                        },
                    },
                    "manual-triggers",
                ),
            ),
            k.push(
                (0, l.jsxs)(
                    i.sNh,
                    {
                        id: "developer-flags",
                        label: "Developer Flags",
                        action: () => {
                            (0, b.openUserSettings)(g.n.DEVELOPER_OPTIONS_PANEL, {
                                section: O.oAB.DEVELOPER_OPTIONS,
                                subsection: p.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                            });
                        },
                        children: [
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "tracing-requests",
                                    label: "Tracing Requests",
                                    checked: h,
                                    action: () => {
                                        (0, r.y)({ trace: !h });
                                    },
                                },
                                "tracing-requests",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "forced-canary",
                                    label: "Forced Canary",
                                    checked: j,
                                    action: () => {
                                        (0, r.y)({ canary: !j });
                                    },
                                },
                                "forced-canary",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "always-deliver",
                                    label: "Ads auto-targeting",
                                    checked: Z,
                                    action: () => {
                                        d.zY.updateSetting(!Z);
                                    },
                                },
                                "always-deliver",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "source-maps",
                                    label: "Source Maps",
                                    checked: A,
                                    action: () => {
                                        (0, r.y)({ sourceMapsEnabled: !A });
                                    },
                                },
                                "source-maps",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "idle-status",
                                    label: "Idle Status Indicator",
                                    checked: N,
                                    action: () => {
                                        (0, r.y)({ idleStatusIndicatorEnabled: !N });
                                    },
                                },
                                "idle-status",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "accessibility-auditing",
                                    label: "Accessibility Auditing",
                                    checked: w,
                                    action: () => {
                                        (0, r.y)({ axeEnabled: !w });
                                    },
                                },
                                "accessibility-auditing",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "prevent-popout-close",
                                    label: "Prevent Popouts From Closing",
                                    checked: _,
                                    action: () => {
                                        (0, r.y)({ preventPopoutClose: !_ });
                                    },
                                },
                                "prevent-popout-close",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "preview-collections",
                                    label: "Preview Unpublished Collections",
                                    checked: D,
                                    action: () => {
                                        (0, r.y)({ onlyShowPreviewAppCollections: !D });
                                    },
                                },
                                "preview-collections",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "disable-collections-cache",
                                    label: "Disable Collections Cache",
                                    checked: x,
                                    action: () => {
                                        (0, r.y)({ disableAppCollectionsCache: !x });
                                    },
                                },
                                "disable-collections-cache",
                            ),
                        ],
                    },
                    "developer-flags",
                ),
            ),
            k.push(
                (0, l.jsxs)(
                    i.sNh,
                    {
                        id: "logging",
                        label: "Logging",
                        action: () => {
                            (0, b.openUserSettings)(g.n.DEVELOPER_OPTIONS_PANEL, {
                                section: O.oAB.DEVELOPER_OPTIONS,
                                subsection: p.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                            });
                        },
                        children: [
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "gateway-events",
                                    label: "Gateway Events",
                                    checked: f,
                                    action: () => {
                                        (0, r.y)({ logGatewayEvents: !f });
                                    },
                                },
                                "gateway-events",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "overlay-events",
                                    label: "Overlay RPC Events",
                                    checked: S,
                                    action: () => {
                                        (0, r.y)({ logOverlayEvents: !S });
                                    },
                                },
                                "overlay-events",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "analytics-events",
                                    label: "Analytics Events",
                                    checked: v,
                                    action: () => {
                                        (0, r.y)({ logAnalyticsEvents: !v });
                                    },
                                },
                                "analytics-events",
                            ),
                            (0, l.jsx)(
                                i.S89,
                                {
                                    id: "analytics-debugger",
                                    label: "Analytics Debugger",
                                    checked: P,
                                    action: () => {
                                        (0, r.y)({ analyticsDebuggerEnabled: !P });
                                    },
                                },
                                "analytics-debugger",
                            ),
                        ],
                    },
                    "logging",
                ),
            ),
            k.push(
                (0, l.jsx)(
                    i.sNh,
                    {
                        id: "design-tools",
                        label: "Design Tools",
                        action: () => {
                            (0, b.openUserSettings)(g.n.DEVELOPER_OPTIONS_PANEL, {
                                section: O.oAB.DEVELOPER_OPTIONS,
                                subsection: p.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                            });
                        },
                        children: (0, l.jsx)(
                            i.S89,
                            {
                                id: "layout-debugging",
                                label: "Enable Layout Debugging",
                                checked: e,
                                action: () => {
                                    (0, r.y)({ layoutDebuggingEnabled: !e });
                                },
                            },
                            "layout-debugging",
                        ),
                    },
                    "design-tools",
                ),
            ),
            e &&
                (k.push(
                    (0, l.jsx)(
                        i.II_,
                        {
                            id: "horizontal-spacing",
                            label: "Horizontal Spacing",
                            control: (e, t) =>
                                (0, l.jsx)(
                                    i._wy,
                                    y(E({}, e), {
                                        ref: t,
                                        value: I,
                                        minValue: 0,
                                        maxValue: C,
                                        onChange: (e) => L(e),
                                        renderValue: (e) => "".concat(Math.round(e), "px"),
                                        "aria-label": "Horizontal Spacing",
                                    }),
                                ),
                        },
                        "horizontal-spacing",
                    ),
                ),
                k.push(
                    (0, l.jsx)(
                        i.II_,
                        {
                            id: "vertical-spacing",
                            label: "Vertical Spacing",
                            control: (e, t) =>
                                (0, l.jsx)(
                                    i._wy,
                                    y(E({}, e), {
                                        ref: t,
                                        value: T,
                                        minValue: 0,
                                        maxValue: m,
                                        onChange: (e) => R(e),
                                        "aria-label": "Horizontal Spacing",
                                        renderValue: (e) => "".concat(Math.round(e), "px"),
                                    }),
                                ),
                        },
                        "vertical-spacing",
                    ),
                ))),
        0 === k.length ? null : k
    );
}
