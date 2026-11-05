var s = r(477900),
    n = r(582128),
    a = r(947641),
    i = r(866665),
    l = r(476931);
function d(e) {
    let { preset: t, theme: r, className: a } = e,
        i = n.useId().replaceAll(":", "-"),
        d = (0, l.oE)(t, r);
    return (0, s.jsxs)("svg", {
        "aria-hidden": "true",
        className: a,
        viewBox: "0 0 46 46",
        children: [
            (0, s.jsx)("defs", {
                children: (0, s.jsx)("linearGradient", {
                    id: i,
                    gradientTransform: `rotate(${d.angle - 90} 0.5 0.5)`,
                    children: d.colors.map((e) => {
                        let { hex: r, stop: n } = e;
                        return (0, s.jsx)("stop", { offset: `${n}%`, stopColor: r }, `${t.id}-${r}-${n}`);
                    }),
                }),
            }),
            (0, s.jsx)("rect", {
                x: 0.5,
                y: 0.5,
                width: 45,
                height: 45,
                rx: 11.5,
                fill: `url(#${i})`,
                shapeRendering: "geometricPrecision",
                stroke: "rgba(151, 151, 159, 0.12)",
                strokeWidth: 1,
            }),
        ],
    });
}
function c(e) {
    let { className: t, testId: r } = e;
    return (0, s.jsx)("span", {
        "aria-hidden": "true",
        className: t,
        "data-testid": r,
        children: (0, s.jsx)(a.CheckmarkLargeBoldIcon, { size: "xxs", color: "var(--white)" }),
    });
}
r.d(
    t,
    {},
    {
        IK: function (e) {
            let {
                preset: t,
                selected: r,
                disabled: n,
                onClick: a,
                label: l,
                theme: u,
                buttonClassName: o,
                graphicClassName: h,
                selectedIndicatorClassName: x,
                selectedIndicatorTestId: f,
            } = e;
            return (0, s.jsx)(i.m, {
                text: l,
                children: (0, s.jsxs)("button", {
                    type: "button",
                    className: o,
                    disabled: n,
                    "aria-label": l,
                    "aria-pressed": r,
                    onClick: a,
                    children: [
                        (0, s.jsx)(d, { preset: t, theme: u, className: h }),
                        r && (0, s.jsx)(c, { className: x, testId: f }),
                    ],
                }),
            });
        },
        wH: c,
    },
);
