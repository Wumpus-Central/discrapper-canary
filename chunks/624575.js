a.d(l, { i: () => m });
var t = a(627968),
    n = a(64700),
    o = a(352404),
    i = a(928231),
    r = a(961345),
    s = a(720341),
    d = a(683071),
    u = a(331322),
    c = a(834730),
    b = a(821609),
    p = a(996334);
let m = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: m } = e,
                    [h, x] = n.useState((0, o.Ec)((0, o.Xj)())),
                    g = n.useCallback((e) => {
                        x(e);
                    }, []),
                    f = n.useCallback(() => {
                        x(null);
                    }, []),
                    v = n.useCallback(() => {
                        x((0, o.Ec)((0, o.Xj)()));
                    }, []),
                    y = n.useCallback(() => {
                        x((0, i._U)("2024-12-25"));
                    }, []);
                return (0, p.i)("CalendarStory")
                    ? (0, t.jsxs)(u.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(s.V, {
                                  value: h,
                                  onChange: g,
                                  disabled: l,
                                  readOnly: a,
                                  minValue: m ? (0, i._U)("2024-01-01") : void 0,
                                  maxValue: m ? (0, i._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, t.jsxs)(c.E, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != h ? (0, r.default)(h.toDate((0, o.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, t.jsxs)(u.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: f,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(b.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: v,
                                          disabled: l || a,
                                      }),
                                      (0, t.jsx)(b.$, {
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
                    : (0, t.jsxs)(d.w, {
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
