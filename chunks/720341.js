a.d(l, { V: () => x });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
    r = a(968172),
    s = a(493108),
    d = a(408278),
    u = a(921853),
    c = a(320448),
    b = a(460890),
    p = a(834730),
    m = a(376887),
    h = a(195529);
function x(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: x,
            disabled: v = !1,
            readOnly: f = !1,
            className: g,
            "aria-label": y,
        } = e,
        { i18n: C } = (0, b.G9)(),
        [j, V] = o.useState(l);
    return (
        o.useEffect(() => {
            V(l);
        }, [l]),
        (0, t.jsx)(r.Vv, {
            value: l,
            focusedValue: j,
            onFocusChange: V,
            onChange: a,
            minValue: n,
            maxValue: x,
            isDisabled: v,
            isReadOnly: f,
            "aria-label": y,
            "data-mana-component": "calendar",
            className: i()(h.BJ, g),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: h.I4,
                            children: [
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.n,
                                    "aria-label": C.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: h.Wb,
                                    children: (0, t.jsx)(p.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: (0, t.jsx)(s.D, {}),
                                    }),
                                }),
                                (0, t.jsx)(d.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: c._,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": C.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", { className: h.US, children: (0, t.jsx)(m.N, {}) }),
                    ],
                }),
        })
    );
}
