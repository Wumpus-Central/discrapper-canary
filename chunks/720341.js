a.d(l, { V: () => m });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(968172),
    r = a(493108),
    d = a(408278),
    u = a(934551),
    c = a(460890),
    b = a(834730),
    p = a(22051);
function m(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: m,
            disabled: x = !1,
            readOnly: v = !1,
            className: h,
            "aria-label": y,
        } = e,
        { i18n: f } = (0, c.G9)(),
        [g, V] = o.useState(l);
    return (
        o.useEffect(() => {
            V(l);
        }, [l]),
        (0, t.jsx)(s.Vv, {
            value: l,
            focusedValue: g,
            onFocusChange: V,
            onChange: a,
            minValue: n,
            maxValue: m,
            isDisabled: x,
            isReadOnly: v,
            "aria-label": y,
            "data-mana-component": "calendar",
            className: i()(p.BJ, h),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: p.I4,
                            children: [
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallLeftIcon,
                                    "aria-label": f.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)(b.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: (0, t.jsx)(r.D, {}),
                                }),
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": f.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.r8, {
                            className: p.ZP,
                            weekdayStyle: "short",
                            children: [
                                (0, t.jsx)(s.co, {
                                    children: (e) =>
                                        (0, t.jsx)(s.W$, {
                                            className: p.e4,
                                            children: (0, t.jsx)(b.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e,
                                            }),
                                        }),
                                }),
                                (0, t.jsx)(s.Xq, {
                                    children: (e) =>
                                        (0, t.jsx)(s.Zr, {
                                            date: e,
                                            className: p.Hn,
                                            children: (e) => {
                                                let { formattedDate: l } = e;
                                                return (0, t.jsx)(b.E, {
                                                    variant: "text-md/normal",
                                                    color: "currentColor",
                                                    children: l,
                                                });
                                            },
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
