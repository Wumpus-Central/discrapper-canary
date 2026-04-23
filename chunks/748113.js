n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(534514),
    i = n(834730),
    r = n(573435),
    s = n(486020),
    d = n(985018),
    o = n(369640);
let c = (e) => {
    let { entry: t } = e,
        { id: n, icon: c, name: u } = t,
        _ = s.Ay.getGuildIconURL({ id: n, icon: c, size: 32 }) ?? void 0;
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsx)(a.D, { className: o.wx, variant: "heading-sm/semibold", children: d.intl.string(d.t.nTe4HC) }),
            (0, l.jsx)("div", {
                className: o.bo,
                children: (0, l.jsxs)("div", {
                    className: o.OA,
                    children: [
                        (0, l.jsx)(r.Ay, {
                            mask: r.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.$d,
                            children: (0, l.jsx)("img", { src: _, alt: "", className: o.$f }),
                        }),
                        (0, l.jsx)(i.E, { color: "text-default", variant: "text-sm/normal", children: u }),
                    ],
                }),
            }),
        ],
    });
};
