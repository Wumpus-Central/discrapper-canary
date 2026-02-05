t.d(n, { A: () => E });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(397927),
    s = t(926919),
    r = t(172272),
    c = t(540999),
    o = t(111162),
    d = t(253932),
    u = t(780964),
    g = t(840065),
    p = t(652215);
function E() {
    let {
            layoutDebuggingEnabled: e,
            isDeveloper: n,
            isLoggingGatewayEvents: t,
            isLoggingOverlayEvents: E,
            isLoggingAnalyticsEvents: v,
            isTracingRequests: A,
            isForcedCanary: b,
            isAxeEnabled: h,
            preventPopoutClose: y,
            onlyShowPreviewAppCollections: S,
            disableAppCollectionsCache: x,
        } = (0, i.cf)([o.default, c.A], () => ({
            layoutDebuggingEnabled: o.default.layoutDebuggingEnabled,
            isDeveloper: c.A.isDeveloper,
            isLoggingGatewayEvents: o.default.isLoggingGatewayEvents,
            isLoggingOverlayEvents: o.default.isLoggingOverlayEvents,
            isLoggingAnalyticsEvents: o.default.isLoggingAnalyticsEvents,
            isTracingRequests: o.default.isTracingRequests,
            isForcedCanary: o.default.isForcedCanary,
            isSourceMapsEnabled: o.default.sourceMapsEnabled,
            isAxeEnabled: o.default.isAxeEnabled,
            preventPopoutClose: o.default.preventPopoutClose,
            onlyShowPreviewAppCollections: o.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: o.default.disableAppCollectionsCache,
        })),
        { horizontalSpacing: f, verticalSpacing: C } = (0, r.Or)(),
        { setHorizontalSpacing: O, setVerticalSpacing: _ } = r.Or.getState(),
        I = d.HZ.useSetting();
    return n
        ? [
              (0, l.jsxs)(
                  a.Drp,
                  {
                      id: "overrides",
                      label: "Overrides",
                      action: () => {
                          (0, g.openUserSettings)(u.X.DEV_OVERRIDES, { section: p.nc_.DEVELOPER_OPTIONS });
                      },
                      children: [
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "always-deliver",
                                  label: "Always Deliver Ads",
                                  checked: I,
                                  action: () => {
                                      d.HZ.updateSetting(!I);
                                  },
                              },
                              "always-deliver",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "forced-canary",
                                  label: "Forced Canary",
                                  checked: b,
                                  action: () => {
                                      (0, s.x)({ canary: !b });
                                  },
                              },
                              "forced-canary",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "preview-collections",
                                  label: "Preview Unpublished Collections",
                                  checked: S,
                                  action: () => {
                                      (0, s.x)({ onlyShowPreviewAppCollections: !S });
                                  },
                              },
                              "preview-collections",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "disable-collections-cache",
                                  label: "Disable Collections Cache",
                                  checked: x,
                                  action: () => {
                                      (0, s.x)({ disableAppCollectionsCache: !x });
                                  },
                              },
                              "disable-collections-cache",
                          ),
                      ],
                  },
                  "overrides",
              ),
              (0, l.jsxs)(
                  a.Drp,
                  {
                      id: "logging",
                      label: "Logging",
                      action: () => {
                          (0, g.openUserSettings)(u.X.LOGGING, { section: p.nc_.DEVELOPER_OPTIONS });
                      },
                      children: [
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "gateway-events",
                                  label: "Gateway Events",
                                  checked: t,
                                  action: () => {
                                      (0, s.x)({ logGatewayEvents: !t });
                                  },
                              },
                              "gateway-events",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "overlay-events",
                                  label: "Overlay RPC Events",
                                  checked: E,
                                  action: () => {
                                      (0, s.x)({ logOverlayEvents: !E });
                                  },
                              },
                              "overlay-events",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "analytics-events",
                                  label: "Analytics Events",
                                  checked: v,
                                  action: () => {
                                      (0, s.x)({ logAnalyticsEvents: !v });
                                  },
                              },
                              "analytics-events",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "tracing-requests",
                                  label: "Tracing Requests",
                                  checked: A,
                                  action: () => {
                                      (0, s.x)({ trace: !A });
                                  },
                              },
                              "tracing-requests",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "prevent-popout-close",
                                  label: "Prevent Popouts From Closing",
                                  checked: y,
                                  action: () => {
                                      (0, s.x)({ preventPopoutClose: !y });
                                  },
                              },
                              "prevent-popout-close",
                          ),
                      ],
                  },
                  "logging",
              ),
              (0, l.jsxs)(
                  a.Drp,
                  {
                      id: "design-tools",
                      label: "Design/A11y Tools",
                      action: () => {
                          (0, g.openUserSettings)(u.X.DESIGN_TOOLS, { section: p.nc_.DEVELOPER_OPTIONS });
                      },
                      children: [
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "accessibility-auditing",
                                  label: "Accessibility Auditing",
                                  checked: h,
                                  action: () => {
                                      (0, s.x)({ axeEnabled: !h });
                                  },
                              },
                              "accessibility-auditing",
                          ),
                          (0, l.jsx)(
                              a.sLh,
                              {
                                  id: "layout-debugging",
                                  label: "Enable Layout Debugging",
                                  checked: e,
                                  action: () => {
                                      (0, s.x)({ layoutDebuggingEnabled: !e });
                                  },
                              },
                              "layout-debugging",
                          ),
                          e &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(
                                          a.aK1,
                                          {
                                              id: "horizontal-spacing",
                                              label: "Horizontal Spacing",
                                              control: (e, n) =>
                                                  (0, l.jsx)(a.i42, {
                                                      ...e,
                                                      ref: n,
                                                      value: f,
                                                      minValue: 0,
                                                      maxValue: r.YR,
                                                      onChange: (e) => O(e),
                                                      renderValue: (e) => `${Math.round(e)}px`,
                                                      "aria-label": "Horizontal Spacing",
                                                  }),
                                          },
                                          "horizontal-spacing",
                                      ),
                                      (0, l.jsx)(
                                          a.aK1,
                                          {
                                              id: "vertical-spacing",
                                              label: "Vertical Spacing",
                                              control: (e, n) =>
                                                  (0, l.jsx)(a.i42, {
                                                      ...e,
                                                      ref: n,
                                                      value: C,
                                                      minValue: 0,
                                                      maxValue: r.YR,
                                                      onChange: (e) => _(e),
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
