n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(990078),
    s = n(834730),
    r = n(885574),
    a = n(456365);
function o(e) {
    let { label: t, sublabel: n, value: o, additionalContent: d, tooltip: c } = e;
    return (0, i.jsxs)("div", {
        className: a.l9,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: a.gA,
                children: [
                    (0, i.jsx)(s.E, {
                        className: a.HW,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: t,
                    }),
                    null != c &&
                        (0, i.jsx)(l.m, {
                            text: c,
                            children: (0, i.jsx)(r.m, {
                                size: "xs",
                                color: "currentColor",
                                className: a.__invalid_labelTooltipIcon,
                            }),
                        }),
                    null != n ? (0, i.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n }) : null,
                ],
            }),
            (0, i.jsx)(s.E, { tag: "span", variant: "heading-xl/medium", color: "text-strong", children: o }),
            d,
        ],
    });
}
