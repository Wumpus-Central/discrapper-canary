n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    s = n(796416);
function a(e) {
    let { label: t, sublabel: n, value: a, additionalContent: c, tooltip: o } = e;
    return (0, r.jsxs)("div", {
        className: s.l9,
        "aria-label": t,
        children: [
            (0, r.jsxs)("div", {
                className: s.gA,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: s.HW,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: t,
                    }),
                    null != o &&
                        (0, r.jsx)(i.m, {
                            text: o,
                            children: (0, r.jsx)(l.mir, {
                                size: "xs",
                                color: "currentColor",
                                className: s.__invalid_labelTooltipIcon,
                            }),
                        }),
                    null != n
                        ? (0, r.jsx)(l.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: n,
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(l.Text, {
                tag: "span",
                variant: "heading-xl/medium",
                color: "text-strong",
                children: a,
            }),
            c,
        ],
    });
}
