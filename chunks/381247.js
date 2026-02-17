"use strict";
n.d(t, { h: () => u, i: () => c });
var r = n(627968),
    i = n(64700),
    a = n(435371),
    s = n(397927),
    o = n(297689),
    l = n(861175);
function u(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: a,
            isDisabled: s = !1,
            collapsedContent: u,
            children: c,
        } = e,
        [d, _] = i.useState(n),
        f = i.useCallback(
            (e) => {
                _(e), null != a && a(e);
            },
            [a],
        );
    return (0, r.jsxs)(o.nD, {
        defaultExpanded: n,
        isDisabled: s,
        onExpandedChange: f,
        children: [
            (0, r.jsxs)("div", {
                className: l.wx,
                children: [
                    (0, r.jsx)(o.$m, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || s) && u,
                ],
            }),
            (0, r.jsx)(o.vr, { children: (0, r.jsx)("div", { className: l.CS, children: c }) }),
        ],
    });
}
function c(e) {
    let {
        label: t,
        value: n,
        color: i = "text-muted",
        valueColor: o = "text-muted",
        icon: u,
        tooltip: c,
        tooltipAriaLabel: d,
    } = e;
    return (0, r.jsxs)("div", {
        className: l.Yn,
        children: [
            (0, r.jsxs)(s.Text, {
                variant: "text-md/normal",
                color: i,
                className: l.yB,
                children: [
                    u,
                    t,
                    null != c &&
                        (0, r.jsx)(a.m_, {
                            text: c,
                            children: (0, r.jsx)(s.cBN, { size: "xs", color: "currentColor", "aria-label": d }),
                        }),
                ],
            }),
            (0, r.jsx)(s.Text, { variant: "text-md/normal", color: o, children: n }),
        ],
    });
}
