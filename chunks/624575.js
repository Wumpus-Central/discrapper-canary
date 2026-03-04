a.d(l, { i: () => b });
var t = a(627968),
    o = a(64700),
    n = a(352404),
    i = a(928231),
    s = a(961345),
    r = a(610479),
    d = a(158954),
    u = a(732955),
    c = a(996334);
let b = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: b } = e,
                    [p, m] = o.useState((0, n.Ec)((0, n.Xj)())),
                    x = o.useCallback((e) => {
                        m(e);
                    }, []),
                    h = o.useCallback(() => {
                        m(null);
                    }, []),
                    v = o.useCallback(() => {
                        m((0, n.Ec)((0, n.Xj)()));
                    }, []),
                    y = o.useCallback(() => {
                        m((0, i._U)("2024-12-25"));
                    }, []);
                return (0, c.i)("CalendarStory")
                    ? (0, t.jsxs)(d.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(r.Vv, {
                                  value: p,
                                  onChange: x,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: b ? (0, i._U)("2024-01-01") : void 0,
                                  maxValue: b ? (0, i._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, t.jsxs)(d.EYj, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != p ? (0, s.default)(p.toDate((0, n.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, t.jsxs)(d.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: h,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: v,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: y,
                                          disabled: l || a,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(d.wx6, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
