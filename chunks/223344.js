n.d(t, { A: () => o });
var a = n(627968),
    s = n(64700),
    i = n(317097),
    l = n(397927),
    r = n(350246);
let o = function (e) {
    let { colorKey: t, value: n, onChange: o, title: d } = e,
        c = s.useRef(null);
    return (0, a.jsx)(l.D0$, {
        label: d,
        children: (0, a.jsx)(l.YNO, {
            targetElementRef: c,
            renderPopout: (e) => (0, a.jsx)(l.VNw, { ...e, value: n, onChange: (e) => o(t, (0, i.Hl)(e)) }),
            children: (e) =>
                (0, a.jsx)(l.DUT, {
                    ...e,
                    innerRef: c,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: r.O6,
                    style: { backgroundColor: n },
                    children: (0, a.jsx)(l.dDg, { size: "xs", color: "currentColor", className: r.WY }),
                }),
        }),
    });
};
