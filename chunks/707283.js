a.d(l, { t: () => c });
var t = a(627968),
    o = a(64700),
    n = a(352404),
    i = a(961345),
    s = a(610479),
    r = a(158954),
    d = a(732955),
    u = a(996334);
let c = {
    title: "DateRangePicker",
    stories: [
        {
            id: "date-range-picker",
            name: "DateRangePicker",
            component: function (e) {
                let { label: l, errorMessage: a, description: c, disabled: b, required: p, showMinMax: m } = e,
                    [x, h] = o.useState({
                        start: (0, n.Ec)((0, n.Xj)()),
                        end: (0, n.Ec)((0, n.Xj)()).add({ days: 7 }),
                    }),
                    v = o.useCallback((e) => {
                        h(e);
                    }, []),
                    y = o.useCallback(() => {
                        h(null);
                    }, []),
                    f = o.useCallback(() => {
                        let e = (0, n.Ec)((0, n.Xj)());
                        h({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    g = (0, n.Ec)((0, n.Xj)()),
                    V = m ? g.subtract({ weeks: 1 }) : void 0,
                    C = m ? g.add({ weeks: 2 }) : void 0;
                return (0, u.i)("DateRangePickerStory")
                    ? (0, t.jsxs)(r.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, t.jsx)(s.Ur, {
                                  label: l,
                                  description: "" !== c ? c : void 0,
                                  value: x,
                                  onChange: v,
                                  disabled: b,
                                  required: p,
                                  errorMessage: "" !== a ? a : void 0,
                                  minValue: V,
                                  maxValue: C,
                                  helperText: (() => {
                                      if (null == x) return "";
                                      let e = (0, i.default)(x.start.toDate((0, n.Xj)()), "MMMM d, yyyy"),
                                          l = (0, i.default)(x.end.toDate((0, n.Xj)()), "MMMM d, yyyy");
                                      return `${e} – ${l}`;
                                  })(),
                              }),
                              (0, t.jsxs)(r.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, t.jsx)(d.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: y,
                                          disabled: b,
                                      }),
                                      (0, t.jsx)(d.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "This Week",
                                          onClick: f,
                                          disabled: b,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, t.jsxs)(r.wx6, {
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
