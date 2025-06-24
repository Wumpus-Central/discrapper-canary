n.d(t, { Z: () => f }), n(539854);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(179658),
    o = n(230711),
    c = n(482215),
    s = n(906467),
    u = n(857192),
    d = n(594174),
    p = n(695346),
    g = n(726985),
    b = n(981631);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
            isLoggingOverlayEvents: h,
            isLoggingAnalyticsEvents: j,
            isAnalyticsDebuggerEnabled: v,
            isTracingRequests: E,
            isForcedCanary: S,
            isSourceMapsEnabled: P,
            isIdleStatusIndicatorEnabled: m,
            isAxeEnabled: x,
            preventPopoutClose: w,
            onlyShowPreviewAppCollections: k,
            disableAppCollectionsCache: Z
        } = (0, i.cj)([u.default, d.default, s.Z], () => {
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
                disableAppCollectionsCache: u.default.disableAppCollectionsCache
            };
        }),
        { horizontalSpacing: D, verticalSpacing: A, maxHorizontalSpacing: C, maxVerticalSpacing: I } = (0, c.i)(),
        { setHorizontalSpacing: T, setVerticalSpacing: N } = c.i.getState(),
        _ = p.zY.useSetting(),
        R = [];
    return (
        t &&
            n &&
            (R.push(
                (0, r.jsx)(
                    l.sNh,
                    {
                        id: 'overrides',
                        label: 'Overrides',
                        action: () => {
                            o.Z.open(b.oAB.DEVELOPER_OPTIONS, g.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB);
                        }
                    },
                    'overrides'
                )
            ),
            R.push(
                (0, r.jsx)(
                    l.sNh,
                    {
                        id: 'manual-triggers',
                        label: 'Manual Triggers',
                        action: () => {
                            o.Z.open(b.oAB.DEVELOPER_OPTIONS, g.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB);
                        }
                    },
                    'manual-triggers'
                )
            ),
            R.push(
                (0, r.jsxs)(
                    l.sNh,
                    {
                        id: 'developer-flags',
                        label: 'Developer Flags',
                        action: () => {
                            o.Z.open(b.oAB.DEVELOPER_OPTIONS, g.s6.DEVELOPER_OPTIONS_FLAGS_TAB);
                        },
                        children: [
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'tracing-requests',
                                    label: 'Tracing Requests',
                                    checked: E,
                                    action: () => {
                                        (0, a.y)({ trace: !E });
                                    }
                                },
                                'tracing-requests'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'forced-canary',
                                    label: 'Forced Canary',
                                    checked: S,
                                    action: () => {
                                        (0, a.y)({ canary: !S });
                                    }
                                },
                                'forced-canary'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'always-deliver',
                                    label: 'Ads auto-targeting',
                                    checked: _,
                                    action: () => {
                                        p.zY.updateSetting(!_);
                                    }
                                },
                                'always-deliver'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'source-maps',
                                    label: 'Source Maps',
                                    checked: P,
                                    action: () => {
                                        (0, a.y)({ sourceMapsEnabled: !P });
                                    }
                                },
                                'source-maps'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'idle-status',
                                    label: 'Idle Status Indicator',
                                    checked: m,
                                    action: () => {
                                        (0, a.y)({ idleStatusIndicatorEnabled: !m });
                                    }
                                },
                                'idle-status'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'accessibility-auditing',
                                    label: 'Accessibility Auditing',
                                    checked: x,
                                    action: () => {
                                        (0, a.y)({ axeEnabled: !x });
                                    }
                                },
                                'accessibility-auditing'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'prevent-popout-close',
                                    label: 'Prevent Popouts From Closing',
                                    checked: w,
                                    action: () => {
                                        (0, a.y)({ preventPopoutClose: !w });
                                    }
                                },
                                'prevent-popout-close'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'preview-collections',
                                    label: 'Preview Unpublished Collections',
                                    checked: k,
                                    action: () => {
                                        (0, a.y)({ onlyShowPreviewAppCollections: !k });
                                    }
                                },
                                'preview-collections'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'disable-collections-cache',
                                    label: 'Disable Collections Cache',
                                    checked: Z,
                                    action: () => {
                                        (0, a.y)({ disableAppCollectionsCache: !Z });
                                    }
                                },
                                'disable-collections-cache'
                            )
                        ]
                    },
                    'developer-flags'
                )
            ),
            R.push(
                (0, r.jsxs)(
                    l.sNh,
                    {
                        id: 'logging',
                        label: 'Logging',
                        action: () => {
                            o.Z.open(b.oAB.DEVELOPER_OPTIONS, g.s6.DEVELOPER_OPTIONS_LOGGING_TAB);
                        },
                        children: [
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'gateway-events',
                                    label: 'Gateway Events',
                                    checked: f,
                                    action: () => {
                                        (0, a.y)({ logGatewayEvents: !f });
                                    }
                                },
                                'gateway-events'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'overlay-events',
                                    label: 'Overlay RPC Events',
                                    checked: h,
                                    action: () => {
                                        (0, a.y)({ logOverlayEvents: !h });
                                    }
                                },
                                'overlay-events'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'analytics-events',
                                    label: 'Analytics Events',
                                    checked: j,
                                    action: () => {
                                        (0, a.y)({ logAnalyticsEvents: !j });
                                    }
                                },
                                'analytics-events'
                            ),
                            (0, r.jsx)(
                                l.S89,
                                {
                                    id: 'analytics-debugger',
                                    label: 'Analytics Debugger',
                                    checked: v,
                                    action: () => {
                                        (0, a.y)({ analyticsDebuggerEnabled: !v });
                                    }
                                },
                                'analytics-debugger'
                            )
                        ]
                    },
                    'logging'
                )
            ),
            R.push(
                (0, r.jsx)(
                    l.sNh,
                    {
                        id: 'design-tools',
                        label: 'Design Tools',
                        action: () => {
                            o.Z.open(b.oAB.DEVELOPER_OPTIONS, g.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB);
                        },
                        children: (0, r.jsx)(
                            l.S89,
                            {
                                id: 'layout-debugging',
                                label: 'Enable Layout Debugging',
                                checked: e,
                                action: () => {
                                    (0, a.y)({ layoutDebuggingEnabled: !e });
                                }
                            },
                            'layout-debugging'
                        )
                    },
                    'design-tools'
                )
            ),
            e &&
                (R.push(
                    (0, r.jsx)(
                        l.II_,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, r.jsx)(
                                    l._wy,
                                    O(y({}, e), {
                                        ref: t,
                                        value: D,
                                        minValue: 0,
                                        maxValue: C,
                                        onChange: (e) => T(e),
                                        renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                        'aria-label': 'Horizontal Spacing'
                                    })
                                )
                        },
                        'horizontal-spacing'
                    )
                ),
                R.push(
                    (0, r.jsx)(
                        l.II_,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, r.jsx)(
                                    l._wy,
                                    O(y({}, e), {
                                        ref: t,
                                        value: A,
                                        minValue: 0,
                                        maxValue: I,
                                        onChange: (e) => N(e),
                                        'aria-label': 'Horizontal Spacing',
                                        renderValue: (e) => ''.concat(Math.round(e), 'px')
                                    })
                                )
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === R.length ? null : R
    );
}
