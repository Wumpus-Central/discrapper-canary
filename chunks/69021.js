n.d(t, { Z: () => f }), n(539854);
var a = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    i = n(179658),
    o = n(230711),
    c = n(482215),
    s = n(906467),
    u = n(857192),
    d = n(594174),
    g = n(695346),
    b = n(726985),
    p = n(981631);
function y(e) {
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
function O(e, t) {
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
function f() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n,
            isLoggingGatewayEvents: f,
            isLoggingOverlayEvents: E,
            isLoggingAnalyticsEvents: v,
            isAnalyticsDebuggerEnabled: S,
            isTracingRequests: h,
            isForcedCanary: j,
            isSourceMapsEnabled: P,
            isIdleStatusIndicatorEnabled: w,
            isAxeEnabled: A,
            preventPopoutClose: x,
            onlyShowPreviewAppCollections: D,
            disableAppCollectionsCache: I,
        } = (0, l.cj)([u.default, d.default, s.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
                isStaff: (null == (e = d.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0,
                isDeveloper: s.Z.isDeveloper,
                isLoggingGatewayEvents: u.default.isLoggingGatewayEvents,
                isLoggingOverlayEvents: u.default.isLoggingOverlayEvents,
                isLoggingAnalyticsEvents: u.default.isLoggingAnalyticsEvents,
                isAnalyticsDebuggerEnabled: u.default.isAnalyticsDebuggerEnabled,
                isTracingRequests: u.default.isTracingRequests,
                isForcedCanary: u.default.isForcedCanary,
                isSourceMapsEnabled: u.default.sourceMapsEnabled,
                isIdleStatusIndicatorEnabled: u.default.isIdleStatusIndicatorEnabled,
                isAxeEnabled: u.default.isAxeEnabled,
                preventPopoutClose: u.default.preventPopoutClose,
                onlyShowPreviewAppCollections: u.default.onlyShowPreviewAppCollections,
                disableAppCollectionsCache: u.default.disableAppCollectionsCache,
            };
        }),
        { horizontalSpacing: _, verticalSpacing: N, maxHorizontalSpacing: T, maxVerticalSpacing: Z } = (0, c.i)(),
        { setHorizontalSpacing: m, setVerticalSpacing: k } = c.i.getState(),
        C = g.zY.useSetting(),
        R = [];
    return (
        t &&
            n &&
            (R.push(
                (0, a.jsx)(
                    r.sNh,
                    {
                        id: "overrides",
                        label: "Overrides",
                        action: () => {
                            o.Z.open(p.oAB.DEVELOPER_OPTIONS, b.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB);
                        },
                    },
                    "overrides",
                ),
            ),
            R.push(
                (0, a.jsx)(
                    r.sNh,
                    {
                        id: "manual-triggers",
                        label: "Manual Triggers",
                        action: () => {
                            o.Z.open(p.oAB.DEVELOPER_OPTIONS, b.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB);
                        },
                    },
                    "manual-triggers",
                ),
            ),
            R.push(
                (0, a.jsxs)(
                    r.sNh,
                    {
                        id: "developer-flags",
                        label: "Developer Flags",
                        action: () => {
                            o.Z.open(p.oAB.DEVELOPER_OPTIONS, b.s6.DEVELOPER_OPTIONS_FLAGS_TAB);
                        },
                        children: [
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "tracing-requests",
                                    label: "Tracing Requests",
                                    checked: h,
                                    action: () => {
                                        (0, i.y)({ trace: !h });
                                    },
                                },
                                "tracing-requests",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "forced-canary",
                                    label: "Forced Canary",
                                    checked: j,
                                    action: () => {
                                        (0, i.y)({ canary: !j });
                                    },
                                },
                                "forced-canary",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "always-deliver",
                                    label: "Ads auto-targeting",
                                    checked: C,
                                    action: () => {
                                        g.zY.updateSetting(!C);
                                    },
                                },
                                "always-deliver",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "source-maps",
                                    label: "Source Maps",
                                    checked: P,
                                    action: () => {
                                        (0, i.y)({ sourceMapsEnabled: !P });
                                    },
                                },
                                "source-maps",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "idle-status",
                                    label: "Idle Status Indicator",
                                    checked: w,
                                    action: () => {
                                        (0, i.y)({ idleStatusIndicatorEnabled: !w });
                                    },
                                },
                                "idle-status",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "accessibility-auditing",
                                    label: "Accessibility Auditing",
                                    checked: A,
                                    action: () => {
                                        (0, i.y)({ axeEnabled: !A });
                                    },
                                },
                                "accessibility-auditing",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "prevent-popout-close",
                                    label: "Prevent Popouts From Closing",
                                    checked: x,
                                    action: () => {
                                        (0, i.y)({ preventPopoutClose: !x });
                                    },
                                },
                                "prevent-popout-close",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "preview-collections",
                                    label: "Preview Unpublished Collections",
                                    checked: D,
                                    action: () => {
                                        (0, i.y)({ onlyShowPreviewAppCollections: !D });
                                    },
                                },
                                "preview-collections",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "disable-collections-cache",
                                    label: "Disable Collections Cache",
                                    checked: I,
                                    action: () => {
                                        (0, i.y)({ disableAppCollectionsCache: !I });
                                    },
                                },
                                "disable-collections-cache",
                            ),
                        ],
                    },
                    "developer-flags",
                ),
            ),
            R.push(
                (0, a.jsxs)(
                    r.sNh,
                    {
                        id: "logging",
                        label: "Logging",
                        action: () => {
                            o.Z.open(p.oAB.DEVELOPER_OPTIONS, b.s6.DEVELOPER_OPTIONS_LOGGING_TAB);
                        },
                        children: [
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "gateway-events",
                                    label: "Gateway Events",
                                    checked: f,
                                    action: () => {
                                        (0, i.y)({ logGatewayEvents: !f });
                                    },
                                },
                                "gateway-events",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "overlay-events",
                                    label: "Overlay RPC Events",
                                    checked: E,
                                    action: () => {
                                        (0, i.y)({ logOverlayEvents: !E });
                                    },
                                },
                                "overlay-events",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "analytics-events",
                                    label: "Analytics Events",
                                    checked: v,
                                    action: () => {
                                        (0, i.y)({ logAnalyticsEvents: !v });
                                    },
                                },
                                "analytics-events",
                            ),
                            (0, a.jsx)(
                                r.S89,
                                {
                                    id: "analytics-debugger",
                                    label: "Analytics Debugger",
                                    checked: S,
                                    action: () => {
                                        (0, i.y)({ analyticsDebuggerEnabled: !S });
                                    },
                                },
                                "analytics-debugger",
                            ),
                        ],
                    },
                    "logging",
                ),
            ),
            R.push(
                (0, a.jsx)(
                    r.sNh,
                    {
                        id: "design-tools",
                        label: "Design Tools",
                        action: () => {
                            o.Z.open(p.oAB.DEVELOPER_OPTIONS, b.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB);
                        },
                        children: (0, a.jsx)(
                            r.S89,
                            {
                                id: "layout-debugging",
                                label: "Enable Layout Debugging",
                                checked: e,
                                action: () => {
                                    (0, i.y)({ layoutDebuggingEnabled: !e });
                                },
                            },
                            "layout-debugging",
                        ),
                    },
                    "design-tools",
                ),
            ),
            e &&
                (R.push(
                    (0, a.jsx)(
                        r.II_,
                        {
                            id: "horizontal-spacing",
                            label: "Horizontal Spacing",
                            control: (e, t) =>
                                (0, a.jsx)(
                                    r._wy,
                                    O(y({}, e), {
                                        ref: t,
                                        value: _,
                                        minValue: 0,
                                        maxValue: T,
                                        onChange: (e) => m(e),
                                        renderValue: (e) => "".concat(Math.round(e), "px"),
                                        "aria-label": "Horizontal Spacing",
                                    }),
                                ),
                        },
                        "horizontal-spacing",
                    ),
                ),
                R.push(
                    (0, a.jsx)(
                        r.II_,
                        {
                            id: "vertical-spacing",
                            label: "Vertical Spacing",
                            control: (e, t) =>
                                (0, a.jsx)(
                                    r._wy,
                                    O(y({}, e), {
                                        ref: t,
                                        value: N,
                                        minValue: 0,
                                        maxValue: Z,
                                        onChange: (e) => k(e),
                                        "aria-label": "Horizontal Spacing",
                                        renderValue: (e) => "".concat(Math.round(e), "px"),
                                    }),
                                ),
                        },
                        "vertical-spacing",
                    ),
                ))),
        0 === R.length ? null : R
    );
}
