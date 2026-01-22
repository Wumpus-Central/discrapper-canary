n.d(t, { i: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(352404),
    s = n(928231),
    o = n(961345),
    l = n(610479),
    c = n(158954),
    u = n(732955),
    d = n(996334);
let f = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: t, readOnly: n, showMinMax: f } = e,
                    [p, _] = i.useState((0, a.Ec)((0, a.Xj)())),
                    h = i.useCallback((e) => {
                        _(e);
                    }, []),
                    m = i.useCallback(() => {
                        _(null);
                    }, []),
                    g = i.useCallback(() => {
                        _((0, a.Ec)((0, a.Xj)()));
                    }, []),
                    E = i.useCallback(() => {
                        _((0, s._U)("2024-12-25"));
                    }, []);
                return (0, d.i)("CalendarStory")
                    ? (0, r.jsxs)(c.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.V, {
                                  value: p,
                                  onChange: h,
                                  disabled: t,
                                  readOnly: n,
                                  minValue: f ? (0, s._U)("2024-01-01") : void 0,
                                  maxValue: f ? (0, s._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, r.jsxs)(c.EYj, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != p ? (0, o.default)(p.toDate((0, a.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, r.jsxs)(c.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: m,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(u.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: g,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(u.$nd, {
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
                    : (0, r.jsxs)(c.wx6, {
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
