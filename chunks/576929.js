n.d(t, {
    O: () => c,
    r: () => u,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(681715),
    o = n(481060),
    s = n(126484),
    l = n(143867);
function c(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: a,
            isDisabled: o = !1,
            collapsedContent: c,
            children: u,
        } = e,
        [d, f] = i.useState(n),
        p = i.useCallback(
            (e) => {
                f(e), null != a && a(e);
            },
            [a],
        );
    return (0, r.jsxs)(s.UQ, {
        defaultExpanded: n,
        isDisabled: o,
        onExpandedChange: p,
        children: [
            (0, r.jsxs)("div", {
                className: l.header,
                children: [
                    (0, r.jsx)(s.o4, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || o) && c,
                ],
            }),
            (0, r.jsx)(s.Hk, {
                children: (0, r.jsx)("div", {
                    className: l.lineItemsContainer,
                    children: u,
                }),
            }),
        ],
    });
}
function u(e) {
    let { label: t, value: n, color: i = "text-muted", valueColor: s = "text-muted", icon: c, tooltip: u } = e;
    return (0, r.jsxs)("div", {
        className: l.lineItem,
        children: [
            (0, r.jsxs)(o.Text, {
                variant: "text-md/normal",
                color: i,
                className: l.lineItemLabel,
                children: [
                    c,
                    t,
                    null != u &&
                        (0, r.jsx)(a.u, {
                            text: u,
                            children: (0, r.jsx)(o.idN, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: s,
                children: n,
            }),
        ],
    });
}
