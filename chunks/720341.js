a.d(l, { V: () => x });
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
    p = a(376887),
    m = a(202336);
function x(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: x,
            disabled: h = !1,
            readOnly: v = !1,
            className: y,
            "aria-label": f,
        } = e,
        { i18n: g } = (0, c.G9)(),
        [V, C] = o.useState(l);
    return (
        o.useEffect(() => {
            C(l);
        }, [l]),
        (0, t.jsx)(s.Vv, {
            value: l,
            focusedValue: V,
            onFocusChange: C,
            onChange: a,
            minValue: n,
            maxValue: x,
            isDisabled: h,
            isReadOnly: v,
            "aria-label": f,
            "data-mana-component": "calendar",
            className: i()(m.BJ, y),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: m.I4,
                            children: [
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallLeftIcon,
                                    "aria-label": g.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: m.Wb,
                                    children: (0, t.jsx)(b.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: (0, t.jsx)(r.D, {}),
                                    }),
                                }),
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": g.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", { className: m.US, children: (0, t.jsx)(p.N, {}) }),
                    ],
                }),
        })
    );
}
