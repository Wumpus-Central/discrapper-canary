a.d(l, { t: () => b });
var t = a(627968),
    n = a(64700),
    o = a(352404),
    i = a(961345),
    r = a(53405),
    s = a(683071),
    d = a(331322),
    u = a(821609),
    c = a(996334);
let b = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: b, disabled: p, required: m, showMinMax: h } = e,
                    [x, g] = n.useState({
                        start: (0, o.Ec)((0, o.Xj)()),
                        end: (0, o.Ec)((0, o.Xj)()).add({ days: 7 }),
                    }),
                    f = n.useCallback((e) => {
                        g(e);
                    }, []),
                    v = n.useCallback(() => {
                        g(null);
                    }, []),
                    y = n.useCallback(() => {
                        let e = (0, o.Ec)((0, o.Xj)());
                        g({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    _ = (0, o.Ec)((0, o.Xj)()),
                    C = h ? _.subtract({ weeks: 1 }) : void 0,
                    j = h ? _.add({ weeks: 2 }) : void 0;
                return (0, c.i)("DateRangePickerStory")
                    ? (0, t.jsxs)(d.B, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(r.U, {
                                  label: l,
                                  description: "" !== b ? b : void 0,
                                  value: x,
                                  onChange: f,
                                  disabled: p,
                                  required: m,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: C,
                                  maxValue: j,
                                  helperText: (() => {
                                      if (null == x) return "";
                                      let e = (0, i.default)(x.start.toDate((0, o.Xj)()), "MMMM d, yyyy"),
                                          l = (0, i.default)(x.end.toDate((0, o.Xj)()), "MMMM d, yyyy");
                                      return `${e} – ${l}`;
                                  })(),
                              }),
                              (0, t.jsxs)(d.B, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(u.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: v,
                                          disabled: p,
                                      }),
                                      (0, t.jsx)(u.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: y,
                                          disabled: p,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(s.w, {
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
                label: { type: "text", label: "Label", defaultValue: "Select a date range" },
                description: { type: "text", label: "Description", defaultValue: "Choose your preferred date range" },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (\xb11 week)", defaultValue: !1 },
            },
        },
    ],
};
