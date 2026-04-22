a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(317097),
    s = a(452027),
    r = a(265872),
    o = a(508274),
    d = a(939249),
    c = a(714385),
    u = a(359923);
let m = function (e) {
    let { colorKey: t, value: a, onChange: m, title: h } = e,
        p = l.useRef(null);
    return (0, n.jsx)(s.D, {
        label: h,
        children: (0, n.jsx)(r.Y, {
            targetElementRef: p,
            renderPopout: (e) => (0, n.jsx)(o.VN, { ...e, value: a, onChange: (e) => m(t, (0, i.Hl)(e)) }),
            children: (e) =>
                (0, n.jsx)(d.D, {
                    ...e,
                    innerRef: p,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: u.O6,
                    style: { backgroundColor: a },
                    children: (0, n.jsx)(c.d, { size: "xs", color: "currentColor", className: u.WY }),
                }),
        }),
    });
};
