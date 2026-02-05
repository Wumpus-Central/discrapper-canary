"use strict";
n.d(t, { V: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(968172),
    l = n(493108),
    u = n(408278),
    c = n(934551),
    d = n(460890),
    _ = n(834730),
    f = n(730909);
function p(e) {
    let {
            value: t,
            onChange: n,
            minValue: a,
            maxValue: p,
            disabled: h = !1,
            readOnly: m = !1,
            className: g,
            "aria-label": E,
        } = e,
        { i18n: A } = (0, d.G9)(),
        [I, T] = i.useState(t);
    return (
        i.useEffect(() => {
            T(t);
        }, [t]),
        (0, r.jsx)(o.Vv, {
            value: t,
            focusedValue: I,
            onFocusChange: T,
            onChange: n,
            minValue: a,
            maxValue: p,
            isDisabled: h,
            isReadOnly: m,
            "aria-label": E,
            "data-mana-component": "calendar",
            className: s()(f.BJ, g),
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("header", {
                            className: f.I4,
                            children: [
                                (0, r.jsx)(u.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: c.ChevronSmallLeftIcon,
                                    "aria-label": A.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: (0, r.jsx)(l.D, {}),
                                }),
                                (0, r.jsx)(u.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: c.ChevronSmallRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": A.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.r8, {
                            className: f.ZP,
                            weekdayStyle: "short",
                            children: [
                                (0, r.jsx)(o.co, {
                                    children: (e) =>
                                        (0, r.jsx)(o.W$, {
                                            className: f.e4,
                                            children: (0, r.jsx)(_.E, {
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
                                            className: f.Hn,
                                            children: (e) => {
                                                let { formattedDate: t } = e;
                                                return (0, r.jsx)(_.E, {
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
