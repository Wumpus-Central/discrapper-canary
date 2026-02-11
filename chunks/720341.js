"use strict";
n.d(t, { V: () => h });
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
    f = n(22051);
function h(e) {
    let {
            value: t,
            onChange: n,
            minValue: a,
            maxValue: h,
            disabled: p = !1,
            readOnly: g = !1,
            className: E,
            "aria-label": A,
        } = e,
        { i18n: I } = (0, d.G9)(),
        [T, y] = i.useState(t);
    return (
        i.useEffect(() => {
            y(t);
        }, [t]),
        (0, r.jsx)(o.Vv, {
            value: t,
            focusedValue: T,
            onFocusChange: y,
            onChange: n,
            minValue: a,
            maxValue: h,
            isDisabled: p,
            isReadOnly: g,
            "aria-label": A,
            "data-mana-component": "calendar",
            className: s()(f.BJ, E),
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
                                    "aria-label": I.CALENDAR_PREVIOUS_MONTH_LABEL,
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
                                    "aria-label": I.CALENDAR_NEXT_MONTH_LABEL,
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
