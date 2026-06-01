r.d(e, { IK: () => E, wH: () => c });
var s = r(627968),
    n = r(64700),
    i = r(947641),
    a = r(990078),
    l = r(476931);
function d(t) {
    let { preset: e, theme: r, className: i } = t,
        a = n.useId().replaceAll(":", "-"),
        d = (0, l.oE)(e, r);
    return (0, s.jsxs)("svg", {
        "aria-hidden": "true",
        className: i,
        viewBox: "0 0 46 46",
        children: [
            (0, s.jsx)("defs", {
                children: (0, s.jsx)("linearGradient", {
                    id: a,
                    gradientTransform: `rotate(${d.angle - 90} 0.5 0.5)`,
                    children: d.colors.map((t) => {
                        let { hex: r, stop: n } = t;
                        return (0, s.jsx)("stop", { offset: `${n}%`, stopColor: r }, `${e.id}-${r}-${n}`);
                    }),
                }),
            }),
            (0, s.jsx)("rect", {
                x: 0.5,
                y: 0.5,
                width: 45,
                height: 45,
                rx: 11.5,
                fill: `url(#${a})`,
                shapeRendering: "geometricPrecision",
                stroke: "rgba(151, 151, 159, 0.12)",
                strokeWidth: 1,
            }),
        ],
    });
}
function c(t) {
    let { className: e, testId: r } = t;
    return (0, s.jsx)("span", {
        "aria-hidden": "true",
        className: e,
        "data-testid": r,
        children: (0, s.jsx)(i.r, { size: "xxs", color: "var(--icon-default)" }),
    });
}
function E(t) {
    let {
        preset: e,
        selected: r,
        disabled: n,
        onClick: i,
        label: l,
        theme: E,
        buttonClassName: o,
        graphicClassName: u,
        selectedIndicatorClassName: h,
        selectedIndicatorTestId: p,
    } = t;
    return (0, s.jsx)(a.m, {
        text: l,
        children: (0, s.jsxs)("button", {
            type: "button",
            className: o,
            disabled: n,
            "aria-label": l,
            "aria-pressed": r,
            onClick: i,
            children: [
                (0, s.jsx)(d, { preset: e, theme: E, className: u }),
                r && (0, s.jsx)(c, { className: h, testId: p }),
            ],
        }),
    });
}
