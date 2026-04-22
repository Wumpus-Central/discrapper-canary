a.d(l, { p: () => m });
var t = a(627968),
    n = a(64700),
    o = a(352404),
    i = a(928231),
    r = a(961345),
    s = a(796033),
    d = a(683071),
    u = a(331322),
    c = a(834730),
    b = a(821609),
    p = a(996334);
let m = {
    title: "RangeCalendar",
    stories: [
        {
            id: "range-calendar",
            name: "RangeCalendar",
            component: function (e) {
                let { disabled: l, readOnly: a, showMinMax: m } = e,
                    [h, x] = n.useState({
                        start: (0, o.Ec)((0, o.Xj)()),
                        end: (0, o.Ec)((0, o.Xj)()).add({ days: 7 }),
                    }),
                    g = n.useCallback((e) => {
                        x(e);
                    }, []),
                    f = n.useCallback(() => {
                        x(null);
                    }, []),
                    v = n.useCallback(() => {
                        let e = (0, o.Ec)((0, o.Xj)());
                        x({ start: e, end: e.add({ days: 7 }) });
                    }, []),
                    y = n.useCallback(() => {
                        x({ start: (0, i._U)("2024-12-01"), end: (0, i._U)("2024-12-31") });
                    }, []);
                if (!(0, p.i)("RangeCalendarStory"))
                    return (0, t.jsxs)(d.w, {
                        type: "critical",
                        children: [
                            "This component is experimental and only available behind the ",
                            (0, t.jsx)("code", { children: "2025-10-mana-date-inputs" }),
                            " ",
                            "experiment. Do not use this in production yet.",
                        ],
                    });
                let _ = (e) => (null == e ? "None" : (0, r.default)(e.toDate((0, o.Xj)()), "MMMM d, yyyy"));
                return (0, t.jsxs)(u.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(s._, {
                            value: h,
                            onChange: g,
                            isDisabled: l,
                            isReadOnly: a,
                            minValue: m ? (0, i._U)("2024-01-01") : void 0,
                            maxValue: m ? (0, i._U)("2024-12-31") : void 0,
                            "aria-label": "Select a date range",
                        }),
                        (0, t.jsxs)(c.E, {
                            variant: "text-sm/normal",
                            children: ["Selected range: ", null != h ? `${_(h.start)} – ${_(h.end)}` : "None"],
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
                                    text: "This Week",
                                    onClick: v,
                                    disabled: l || a,
                                }),
                                (0, t.jsx)(b.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "December",
                                    onClick: y,
                                    disabled: l || a,
                                }),
                            ],
                        }),
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
