"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    r = n(796416);
function a(e) {
    let { label: t, sublabel: n, value: a, additionalContent: o, tooltip: d } = e;
    return (0, i.jsxs)("div", {
        className: r.l9,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: r.gA,
                children: [
                    (0, i.jsx)(l.Text, {
                        className: r.HW,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: t,
                    }),
                    null != d &&
                        (0, i.jsx)(s.m, {
                            text: d,
                            children: (0, i.jsx)(l.mir, {
                                size: "xs",
                                color: "currentColor",
                                className: r.__invalid_labelTooltipIcon,
                            }),
                        }),
                    null != n
                        ? (0, i.jsx)(l.Text, { variant: "text-xs/normal", color: "text-muted", children: n })
                        : null,
                ],
            }),
            (0, i.jsx)(l.Text, { tag: "span", variant: "heading-xl/medium", color: "text-strong", children: a }),
            o,
        ],
    });
}
