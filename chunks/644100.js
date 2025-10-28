t.d(l, { X: () => b }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(533426),
    i = t(333684),
    r = t(119058),
    s = t(634201),
    u = t(793030),
    d = t(159691),
    c = t(70989);
let b = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: l, readOnly: t, showMinMax: b } = e,
                    [p, y] = n.useState((0, o.Lg)((0, o.iT)())),
                    m = n.useCallback((e) => {
                        y(e);
                    }, []),
                    f = n.useCallback(() => {
                        y(null);
                    }, []),
                    v = n.useCallback(() => {
                        y((0, o.Lg)((0, o.iT)()));
                    }, []),
                    h = n.useCallback(() => {
                        y((0, i.sG)("2024-12-25"));
                    }, []);
                return (0, c.K)("CalendarStory")
                    ? (0, a.jsxs)(u.Kqy, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, a.jsx)(s.f, {
                                  value: p,
                                  onChange: m,
                                  disabled: l,
                                  readOnly: t,
                                  minValue: b ? (0, i.sG)("2024-01-01") : void 0,
                                  maxValue: b ? (0, i.sG)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, a.jsxs)(u.xvT, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != p ? (0, r.default)(p.toDate((0, o.iT)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, a.jsxs)(u.Kqy, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: f,
                                          disabled: l || t,
                                      }),
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: v,
                                          disabled: l || t,
                                      }),
                                      (0, a.jsx)(d.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: h,
                                          disabled: l || t,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, a.jsxs)(u.M14, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, a.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                              " ",
                              "experiment. Do not use this in production yet.",
                          ],
                      });
            },
            controls: {
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                readOnly: {
                    type: "boolean",
                    label: "Read Only",
                    defaultValue: !1,
                },
                showMinMax: {
                    type: "boolean",
                    label: "Show Min/Max (2024)",
                    defaultValue: !1,
                },
            },
        },
    ],
};
