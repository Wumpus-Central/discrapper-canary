s.d(a, { V: () => N });
var l = s(477900),
    r = s(582128),
    n = s(503698),
    i = s.n(n),
    c = s(349892),
    t = s(325558),
    o = s(408278),
    d = s(921853),
    m = s(320448),
    u = s(432816),
    h = s(834730),
    x = s(376887),
    j = s(859962);
function N(e) {
    let {
            value: a,
            onChange: s,
            minValue: n,
            maxValue: N,
            disabled: b = !1,
            readOnly: v = !1,
            className: E,
            "aria-label": f,
        } = e,
        { i18n: y } = (0, u.G9)(),
        [p, _] = r.useState(a);
    return (
        r.useEffect(() => {
            _(a);
        }, [a]),
        (0, l.jsx)(c.Vv, {
            value: a,
            focusedValue: p,
            onFocusChange: _,
            onChange: s,
            minValue: n,
            maxValue: N,
            isDisabled: b,
            isReadOnly: v,
            "aria-label": f,
            "data-mana-component": "calendar",
            className: i()(j.BJ, E),
            children: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("header", {
                            className: j.I4,
                            children: [
                                (0, l.jsx)(o.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: d.n,
                                    "aria-label": y.CALENDAR_PREVIOUS_MONTH_LABEL,
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
                                    icon: m._,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": y.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", { className: j.US, children: (0, l.jsx)(x.N, {}) }),
                    ],
                }),
        })
    );
}
