n.d(t, {
    V: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(968172),
    l = n(493108),
    c = n(408278),
    u = n(934551),
    d = n(460890),
    f = n(834730),
    p = n(730909);

function _(e) {
    let {
            value: t,
            onChange: n,
            minValue: a,
            maxValue: _,
            disabled: h = !1,
            readOnly: m = !1,
            className: g,
            "aria-label": E,
        } = e,
        { i18n: b } = (0, d.G9)(),
        [y, O] = i.useState(t);
    return (
        i.useEffect(() => {
            O(t);
        }, [t]),
        (0, r.jsx)(o.Vv, {
            value: t,
            focusedValue: y,
            onFocusChange: O,
            onChange: n,
            minValue: a,
            maxValue: _,
            isDisabled: h,
            isReadOnly: m,
            "aria-label": E,
            "data-mana-component": "calendar",
            className: s()(p.BJ, g),
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("header", {
                            className: p.I4,
                            children: [
                                (0, r.jsx)(c.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallLeftIcon,
                                    "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, r.jsx)(f.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: (0, r.jsx)(l.D, {}),
                                }),
                                (0, r.jsx)(c.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronSmallRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.r8, {
                            className: p.ZP,
                            weekdayStyle: "short",
                            children: [
                                (0, r.jsx)(o.co, {
                                    children: (e) =>
                                        (0, r.jsx)(o.W$, {
                                            className: p.e4,
                                            children: (0, r.jsx)(f.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e,
                                            }),
                                        }),
                                }),
                                (0, r.jsx)(o.Xq, {
                                    children: (e) =>
                                        (0, r.jsx)(o.Zr, {
                                            date: e,
                                            className: p.Hn,
                                            children: (e) => {
                                                let { formattedDate: t } = e;
                                                return (0, r.jsx)(f.E, {
                                                    variant: "text-md/normal",
                                                    color: "currentColor",
                                                    children: t,
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
