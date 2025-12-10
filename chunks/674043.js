n.d(t, { b: () => f }), n(953529), n(388685);
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
    title: "DatePicker",
    stories: [
        {
            id: "date-picker",
            name: "DatePicker",
            component: function (e) {
                let {
                        label: t,
                        description: n,
                        disabled: f,
                        required: p,
                        granularity: _,
                        hourCycle: m,
                        hideTimeZone: h,
                        showMinMax: g,
                    } = e,
                    [E, b] = i.useState((0, a.Lg)((0, a.iT)())),
                    [y, O] = i.useState(""),
                    v = i.useCallback((e) => {
                        b(e), O("");
                    }, []),
                    S = i.useCallback(() => {
                        b(null);
                    }, []),
                    I = i.useCallback(() => {
                        b((0, a.Lg)((0, a.iT)()));
                    }, []),
                    T = i.useCallback(() => {
                        "day" === _ ? b((0, o.sG)("2024-12-25")) : b((0, o.wG)("2024-12-25T15:30"));
                    }, [_]),
                    C = i.useCallback(() => {
                        if (p && null == E) O("This field is required");
                        else if (g && null != E) {
                            let e = (0, o.sG)("2024-01-01"),
                                t = (0, o.sG)("2024-12-31");
                            (0 > E.compare(e) || E.compare(t) > 0) && O("Date must be within 2024");
                        }
                    }, [E, p, g]);
                return (0, d.K)("CalendarStory")
                    ? (0, r.jsxs)(c.Kqy, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.M, {
                                  label: t,
                                  description: "" !== n ? n : void 0,
                                  value: E,
                                  onChange: v,
                                  disabled: f,
                                  required: p,
                                  granularity: _,
                                  hourCycle: m,
                                  hideTimeZone: h,
                                  minValue: g ? (0, o.sG)("2024-01-01") : void 0,
                                  maxValue: g ? (0, o.sG)("2024-12-31") : void 0,
                                  errorMessage: y,
                                  helperText: null != E ? (0, s.default)(E.toDate((0, a.iT)()), "MMMM d, yyyy") : "",
                              }),
                              (0, r.jsxs)(c.Kqy, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: S,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: I,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Dec 25",
                                          onClick: T,
                                          disabled: f,
                                      }),
                                      (0, r.jsx)(u.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: "Validate",
                                          onClick: C,
                                          disabled: f,
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
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Select a date",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "Choose your preferred date",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
                granularity: {
                    type: "select",
                    label: "Granularity",
                    options: [
                        {
                            label: "Day",
                            value: "day",
                        },
                        {
                            label: "Hour",
                            value: "hour",
                        },
                        {
                            label: "Minute",
                            value: "minute",
                        },
                        {
                            label: "Second",
                            value: "second",
                        },
                    ],
                    defaultValue: "day",
                },
                hourCycle: {
                    type: "select",
                    label: "Hour Cycle",
                    options: [
                        {
                            label: "12 Hour",
                            value: 12,
                        },
                        {
                            label: "24 Hour",
                            value: 24,
                        },
                    ],
                    defaultValue: 24,
                },
                hideTimeZone: {
                    type: "boolean",
                    label: "Hide Time Zone",
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
