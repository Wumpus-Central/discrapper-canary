n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(477782),
    a = n(964355),
    r = n(926919),
    o = n(172272),
    d = n(540999),
    u = n(111162),
    c = n(253932),
    g = n(780964),
    m = n(858897);
function _() {
    let {
            layoutDebuggingEnabled: e,
            isDeveloper: t,
            isLoggingGatewayEvents: n,
            isLoggingOverlayEvents: _,
            isLoggingAnalyticsEvents: A,
            isTracingRequests: h,
            isForcedCanary: p,
            isAxeEnabled: x,
            preventPopoutClose: E,
            onlyShowPreviewAppCollections: T,
            disableAppCollectionsCache: S,
        } = (0, s.cf)([u.default, d.A], () => ({
            layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
            isDeveloper: d.A.isDeveloper,
            isLoggingGatewayEvents: u.default.isLoggingGatewayEvents,
            isLoggingOverlayEvents: u.default.isLoggingOverlayEvents,
            isLoggingAnalyticsEvents: u.default.isLoggingAnalyticsEvents,
            isTracingRequests: u.default.isTracingRequests,
            isForcedCanary: u.default.isForcedCanary,
            isSourceMapsEnabled: u.default.sourceMapsEnabled,
            isAxeEnabled: u.default.isAxeEnabled,
            preventPopoutClose: u.default.preventPopoutClose,
            onlyShowPreviewAppCollections: u.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: u.default.disableAppCollectionsCache,
        })),
        { horizontalSpacing: f, verticalSpacing: b } = (0, o.Or)(),
        { setHorizontalSpacing: C, setVerticalSpacing: v } = o.Or.getState(),
        N = c.HZ.useSetting();
    return t
        ? [
              (0, i.jsxs)(
                  l.Dr,
                  {
                      id: "overrides",
                      label: "Overrides",
                      action: () => {
                          (0, m.openUserSettings)(g.X.DEV_OVERRIDES);
                      },
                      children: [
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "always-deliver",
                                  label: "Always Deliver Ads",
                                  checked: N,
                                  action: () => {
                                      c.HZ.updateSetting(!N);
                                  },
                              },
                              "always-deliver",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "forced-canary",
                                  label: "Forced Canary",
                                  checked: p,
                                  action: () => {
                                      (0, r.x)({ canary: !p });
                                  },
                              },
                              "forced-canary",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "preview-collections",
                                  label: "Preview Unpublished Collections",
                                  checked: T,
                                  action: () => {
                                      (0, r.x)({ onlyShowPreviewAppCollections: !T });
                                  },
                              },
                              "preview-collections",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "disable-collections-cache",
                                  label: "Disable Collections Cache",
                                  checked: S,
                                  action: () => {
                                      (0, r.x)({ disableAppCollectionsCache: !S });
                                  },
                              },
                              "disable-collections-cache",
                          ),
                      ],
                  },
                  "overrides",
              ),
              (0, i.jsxs)(
                  l.Dr,
                  {
                      id: "logging",
                      label: "Logging",
                      action: () => {
                          (0, m.openUserSettings)(g.X.LOGGING);
                      },
                      children: [
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "gateway-events",
                                  label: "Gateway Events",
                                  checked: n,
                                  action: () => {
                                      (0, r.x)({ logGatewayEvents: !n });
                                  },
                              },
                              "gateway-events",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "overlay-events",
                                  label: "Overlay RPC Events",
                                  checked: _,
                                  action: () => {
                                      (0, r.x)({ logOverlayEvents: !_ });
                                  },
                              },
                              "overlay-events",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "analytics-events",
                                  label: "Analytics Events",
                                  checked: A,
                                  action: () => {
                                      (0, r.x)({ logAnalyticsEvents: !A });
                                  },
                              },
                              "analytics-events",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "tracing-requests",
                                  label: "Tracing Requests",
                                  checked: h,
                                  action: () => {
                                      (0, r.x)({ trace: !h });
                                  },
                              },
                              "tracing-requests",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "prevent-popout-close",
                                  label: "Prevent Popouts From Closing",
                                  checked: E,
                                  action: () => {
                                      (0, r.x)({ preventPopoutClose: !E });
                                  },
                              },
                              "prevent-popout-close",
                          ),
                      ],
                  },
                  "logging",
              ),
              (0, i.jsxs)(
                  l.Dr,
                  {
                      id: "design-tools",
                      label: "Design/A11y Tools",
                      action: () => {
                          (0, m.openUserSettings)(g.X.DESIGN_TOOLS);
                      },
                      children: [
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "accessibility-auditing",
                                  label: "Accessibility Auditing",
                                  checked: x,
                                  action: () => {
                                      (0, r.x)({ axeEnabled: !x });
                                  },
                              },
                              "accessibility-auditing",
                          ),
                          (0, i.jsx)(
                              l.sL,
                              {
                                  id: "layout-debugging",
                                  label: "Enable Layout Debugging",
                                  checked: e,
                                  action: () => {
                                      (0, r.x)({ layoutDebuggingEnabled: !e });
                                  },
                              },
                              "layout-debugging",
                          ),
                          e &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(
                                          l.aK,
                                          {
                                              id: "horizontal-spacing",
                                              label: "Horizontal Spacing",
                                              control: (e, t) =>
                                                  (0, i.jsx)(a.i, {
                                                      ...e,
                                                      ref: t,
                                                      value: f,
                                                      minValue: 0,
                                                      maxValue: o.YR,
                                                      onChange: (e) => C(e),
                                                      renderValue: (e) => `${Math.round(e)}px`,
                                                      "aria-label": "Horizontal Spacing",
                                                  }),
                                          },
                                          "horizontal-spacing",
                                      ),
                                      (0, i.jsx)(
                                          l.aK,
                                          {
                                              id: "vertical-spacing",
                                              label: "Vertical Spacing",
                                              control: (e, t) =>
                                                  (0, i.jsx)(a.i, {
                                                      ...e,
                                                      ref: t,
                                                      value: b,
                                                      minValue: 0,
                                                      maxValue: o.YR,
                                                      onChange: (e) => v(e),
                                                      "aria-label": "Vertical Spacing",
                                                      renderValue: (e) => `${Math.round(e)}px`,
                                                  }),
                                          },
                                          "vertical-spacing",
                                      ),
                                  ],
                              }),
                      ],
                  },
                  "design-tools",
              ),
          ]
        : null;
}
