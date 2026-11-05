var l = s(477900),
    n = s(582128),
    r = s(503698),
    i = s.n(r),
    c = s(221174),
    t = s(325558),
    o = s(408278),
    d = s(921853),
    m = s(320448),
    u = s(116711),
    h = s(834730),
    x = s(376887),
    j = s(859962);
s.d(
    a,
    {},
    {
        V: function (e) {
            let {
                    value: a,
                    onChange: s,
                    minValue: r,
                    maxValue: N,
                    isDateUnavailable: b,
                    disabled: v = !1,
                    readOnly: E = !1,
                    className: f,
                    "aria-label": y,
                } = e,
                { i18n: C } = (0, u.G9)(),
                [g, p] = n.useState(a);
            return (
                n.useEffect(() => {
                    p(a);
                }, [a]),
                (0, l.jsx)(c.Vv, {
                    value: a,
                    focusedValue: g,
                    onFocusChange: p,
                    onChange: s,
                    minValue: r,
                    maxValue: N,
                    isDateUnavailable: b,
                    isDisabled: v,
                    isReadOnly: E,
                    "aria-label": y,
                    "data-mana-component": "calendar",
                    className: i()(j.BJ, f),
                    children: (e) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("header", {
                                    className: j.I4,
                                    children: [
                                        (0, l.jsx)(o.K, {
                                            variant: "icon-only",
                                            size: "sm",
                                            icon: d.ChevronSmallLeftIcon,
                                            "aria-label": C.CALENDAR_PREVIOUS_MONTH_LABEL,
                                            onClick: () => e.state.focusPreviousPage(),
                                            slot: "previous",
                                        }),
                                        (0, l.jsx)("div", {
                                            className: j.Wb,
                                            children: (0, l.jsx)(h.E, {
                                                variant: "body-md/semibold",
                                                color: "text-strong",
                                                children: (0, l.jsx)(t.D, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(o.K, {
                                            variant: "icon-only",
                                            size: "sm",
                                            icon: m.ChevronSmallRightIcon,
                                            onClick: () => e.state.focusNextPage(),
                                            "aria-label": C.CALENDAR_NEXT_MONTH_LABEL,
                                            slot: "next",
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: j.US, children: (0, l.jsx)(x.N, {}) }),
                            ],
                        }),
                })
            );
        },
    },
);
