n.d(t, { A: () => f }), n(321073);
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(926919),
    s = n(172272),
    o = n(540999),
    c = n(111162),
    u = n(287809),
    d = n(253932),
    g = n(780964),
    p = n(840065),
    b = n(531525),
    O = n(652215);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
            isLoggingOverlayEvents: v,
            isLoggingAnalyticsEvents: h,
            isAnalyticsDebuggerEnabled: S,
            isTracingRequests: P,
            isForcedCanary: A,
            isSourceMapsEnabled: j,
            isIdleStatusIndicatorEnabled: _,
            isAxeEnabled: x,
            preventPopoutClose: D,
            onlyShowPreviewAppCollections: L,
            disableAppCollectionsCache: T,
        } = (0, l.cf)([c.default, u.default, o.A], () => {
            var e;
            return {
                layoutDebuggingEnabled: c.default.layoutDebuggingEnabled,
                isStaff: (null == (e = u.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0,
                isDeveloper: o.A.isDeveloper,
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
        { horizontalSpacing: I, verticalSpacing: w, maxHorizontalSpacing: C, maxVerticalSpacing: N } = (0, s.O)(),
        { setHorizontalSpacing: m, setVerticalSpacing: R } = s.O.getState(),
        V = d.HZ.useSetting(),
        k = [];
    return (
        t &&
            n &&
            (k.push(
                (0, i.jsx)(
                    r.Drp,
                    {
                        id: "overrides",
                        label: "Overrides",
                        action: () => {
                            (0, p.openUserSettings)(g.X.DEVELOPER_OPTIONS_PANEL, {
                                section: O.nc_.DEVELOPER_OPTIONS,
                                subsection: b.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                            });
                        },
                    },
                    "overrides",
                ),
            ),
            k.push(
                (0, i.jsx)(
                    r.Drp,
                    {
                        id: "manual-triggers",
                        label: "Manual Triggers",
                        action: () => {
                            (0, p.openUserSettings)(g.X.DEVELOPER_OPTIONS_PANEL, {
                                section: O.nc_.DEVELOPER_OPTIONS,
                                subsection: b.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                            });
                        },
                    },
                    "manual-triggers",
                ),
            ),
            k.push(
                (0, i.jsxs)(
                    r.Drp,
                    {
                        id: "developer-flags",
                        label: "Developer Flags",
                        action: () => {
                            (0, p.openUserSettings)(g.X.DEVELOPER_OPTIONS_PANEL, {
                                section: O.nc_.DEVELOPER_OPTIONS,
                                subsection: b.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                            });
                        },
                        children: [
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "tracing-requests",
                                    label: "Tracing Requests",
                                    checked: P,
                                    action: () => {
                                        (0, a.x)({ trace: !P });
                                    },
                                },
                                "tracing-requests",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "forced-canary",
                                    label: "Forced Canary",
                                    checked: A,
                                    action: () => {
                                        (0, a.x)({ canary: !A });
                                    },
                                },
                                "forced-canary",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "always-deliver",
                                    label: "Ads auto-targeting",
                                    checked: V,
                                    action: () => {
                                        d.HZ.updateSetting(!V);
                                    },
                                },
                                "always-deliver",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "source-maps",
                                    label: "Source Maps",
                                    checked: j,
                                    action: () => {
                                        (0, a.x)({ sourceMapsEnabled: !j });
                                    },
                                },
                                "source-maps",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "idle-status",
                                    label: "Idle Status Indicator",
                                    checked: _,
                                    action: () => {
                                        (0, a.x)({ idleStatusIndicatorEnabled: !_ });
                                    },
                                },
                                "idle-status",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "accessibility-auditing",
                                    label: "Accessibility Auditing",
                                    checked: x,
                                    action: () => {
                                        (0, a.x)({ axeEnabled: !x });
                                    },
                                },
                                "accessibility-auditing",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "prevent-popout-close",
                                    label: "Prevent Popouts From Closing",
                                    checked: D,
                                    action: () => {
                                        (0, a.x)({ preventPopoutClose: !D });
                                    },
                                },
                                "prevent-popout-close",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "preview-collections",
                                    label: "Preview Unpublished Collections",
                                    checked: L,
                                    action: () => {
                                        (0, a.x)({ onlyShowPreviewAppCollections: !L });
                                    },
                                },
                                "preview-collections",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "disable-collections-cache",
                                    label: "Disable Collections Cache",
                                    checked: T,
                                    action: () => {
                                        (0, a.x)({ disableAppCollectionsCache: !T });
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
                (0, i.jsxs)(
                    r.Drp,
                    {
                        id: "logging",
                        label: "Logging",
                        action: () => {
                            (0, p.openUserSettings)(g.X.DEVELOPER_OPTIONS_PANEL, {
                                section: O.nc_.DEVELOPER_OPTIONS,
                                subsection: b.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                            });
                        },
                        children: [
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "gateway-events",
                                    label: "Gateway Events",
                                    checked: f,
                                    action: () => {
                                        (0, a.x)({ logGatewayEvents: !f });
                                    },
                                },
                                "gateway-events",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "overlay-events",
                                    label: "Overlay RPC Events",
                                    checked: v,
                                    action: () => {
                                        (0, a.x)({ logOverlayEvents: !v });
                                    },
                                },
                                "overlay-events",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "analytics-events",
                                    label: "Analytics Events",
                                    checked: h,
                                    action: () => {
                                        (0, a.x)({ logAnalyticsEvents: !h });
                                    },
                                },
                                "analytics-events",
                            ),
                            (0, i.jsx)(
                                r.sLh,
                                {
                                    id: "analytics-debugger",
                                    label: "Analytics Debugger",
                                    checked: S,
                                    action: () => {
                                        (0, a.x)({ analyticsDebuggerEnabled: !S });
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
                (0, i.jsx)(
                    r.Drp,
                    {
                        id: "design-tools",
                        label: "Design Tools",
                        action: () => {
                            (0, p.openUserSettings)(g.X.DEVELOPER_OPTIONS_PANEL, {
                                section: O.nc_.DEVELOPER_OPTIONS,
                                subsection: b.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                            });
                        },
                        children: (0, i.jsx)(
                            r.sLh,
                            {
                                id: "layout-debugging",
                                label: "Enable Layout Debugging",
                                checked: e,
                                action: () => {
                                    (0, a.x)({ layoutDebuggingEnabled: !e });
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
                    (0, i.jsx)(
                        r.aK1,
                        {
                            id: "horizontal-spacing",
                            label: "Horizontal Spacing",
                            control: (e, t) =>
                                (0, i.jsx)(
                                    r.i42,
                                    y(E({}, e), {
                                        ref: t,
                                        value: I,
                                        minValue: 0,
                                        maxValue: C,
                                        onChange: (e) => m(e),
                                        renderValue: (e) => "".concat(Math.round(e), "px"),
                                        "aria-label": "Horizontal Spacing",
                                    }),
                                ),
                        },
                        "horizontal-spacing",
                    ),
                ),
                k.push(
                    (0, i.jsx)(
                        r.aK1,
                        {
                            id: "vertical-spacing",
                            label: "Vertical Spacing",
                            control: (e, t) =>
                                (0, i.jsx)(
                                    r.i42,
                                    y(E({}, e), {
                                        ref: t,
                                        value: w,
                                        minValue: 0,
                                        maxValue: N,
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
