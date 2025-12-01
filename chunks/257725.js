n.d(t, { X: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(533426),
    o = n(333684),
    s = n(119058),
    l = n(634201),
    c = n(793030),
    u = n(159691),
    d = n(70989);
let f = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: t, readOnly: n, showMinMax: f } = e,
                    [p, _] = i.useState((0, a.Lg)((0, a.iT)())),
                    m = i.useCallback((e) => {
                        _(e);
                    }, []),
                    h = i.useCallback(() => {
                        _(null);
                    }, []),
                    g = i.useCallback(() => {
                        _((0, a.Lg)((0, a.iT)()));
                    }, []),
                    E = i.useCallback(() => {
                        _((0, o.sG)("2024-12-25"));
                    }, []);
                return (0, d.K)("CalendarStory")
                    ? (0, r.jsxs)(c.Kqy, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.f, {
                                  value: p,
                                  onChange: m,
                                  disabled: t,
                                  readOnly: n,
                                  minValue: f ? (0, o.sG)("2024-01-01") : void 0,
                                  maxValue: f ? (0, o.sG)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, r.jsxs)(c.xvT, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != p ? (0, s.default)(p.toDate((0, a.iT)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, r.jsxs)(c.Kqy, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: h,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: g,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: E,
                                          disabled: t || n,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.M14, {
                          type: "critical",
                          children: [
                              "This component is experimental and only available behind the ",
                              (0, r.jsx)("code", { children: "2025-10-mana-date-inputs" }),
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
