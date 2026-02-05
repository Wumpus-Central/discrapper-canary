"use strict";
n.d(t, { i: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(352404),
    s = n(928231),
    o = n(961345),
    l = n(610479),
    u = n(158954),
    c = n(732955),
    d = n(996334);
let _ = {
    title: "Calendar",
    stories: [
        {
            id: "calendar",
            name: "Calendar",
            component: function (e) {
                let { disabled: t, readOnly: n, showMinMax: _ } = e,
                    [f, p] = i.useState((0, a.Ec)((0, a.Xj)())),
                    h = i.useCallback((e) => {
                        p(e);
                    }, []),
                    m = i.useCallback(() => {
                        p(null);
                    }, []),
                    g = i.useCallback(() => {
                        p((0, a.Ec)((0, a.Xj)()));
                    }, []),
                    E = i.useCallback(() => {
                        p((0, s._U)("2024-12-25"));
                    }, []);
                return (0, d.i)("CalendarStory")
                    ? (0, r.jsxs)(u.BJc, {
                          direction: "vertical",
                          gap: "md",
                          children: [
                              (0, r.jsx)(l.V, {
                                  value: f,
                                  onChange: h,
                                  disabled: t,
                                  readOnly: n,
                                  minValue: _ ? (0, s._U)("2024-01-01") : void 0,
                                  maxValue: _ ? (0, s._U)("2024-12-31") : void 0,
                                  "aria-label": "Select a date",
                              }),
                              (0, r.jsxs)(u.EYj, {
                                  variant: "text-sm/normal",
                                  children: [
                                      "Selected date: ",
                                      null != f ? (0, o.default)(f.toDate((0, a.Xj)()), "MMMM d, yyyy") : "None",
                                  ],
                              }),
                              (0, r.jsxs)(u.BJc, {
                                  direction: "horizontal",
                                  gap: "sm",
                                  children: [
                                      (0, r.jsx)(c.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Clear",
                                          onClick: m,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(c.$nd, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Set Today",
                                          onClick: g,
                                          disabled: t || n,
                                      }),
                                      (0, r.jsx)(c.$nd, {
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
                    : (0, r.jsxs)(u.wx6, {
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
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                showMinMax: { type: "boolean", label: "Show Min/Max (2024)", defaultValue: !1 },
            },
        },
    ],
};
