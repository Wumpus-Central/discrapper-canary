n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(28664),
    l = n(481060),
    a = n(704210);
function s(e) {
    let { label: t, sublabel: n, value: s, additionalContent: o, tooltip: c } = e;
    return (0, r.jsxs)("div", {
        className: a.metricCard,
        "aria-label": t,
        children: [
            (0, r.jsxs)("div", {
                className: a.metricCardLabelContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: a.metricCardLabel,
                        variant: "text-xs/medium",
                        color: "interactive-normal",
                        "aria-hidden": !0,
                        children: t,
                    }),
                    null != c &&
                        (0, r.jsx)(i.u, {
                            text: c,
                            children: (0, r.jsx)(l.d3s, {
                                size: "xs",
                                color: "currentColor",
                                className: a.__invalid_labelTooltipIcon,
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
                color: "header-primary",
                children: s,
            }),
            o,
        ],
    });
}
