"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(534514),
    r = n(834730),
    l = n(573435),
    s = n(486020),
    d = n(985018),
    o = n(369640);
let c = (e) => {
    let { entry: t } = e,
        { id: n, icon: c, name: u } = t,
        _ = s.Ay.getGuildIconURL({ id: n, icon: c, size: 32 }) ?? void 0;
    return (0, a.jsxs)("div", {
        className: o.kL,
        children: [
            (0, a.jsx)(i.D, { className: o.wx, variant: "heading-sm/semibold", children: d.intl.string(d.t.nTe4HC) }),
            (0, a.jsx)("div", {
                className: o.bo,
                children: (0, a.jsxs)("div", {
                    className: o.OA,
                    children: [
                        (0, a.jsx)(l.Ay, {
                            mask: l.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.$d,
                            children: (0, a.jsx)("img", { src: _, alt: "", className: o.$f }),
                        }),
                        (0, a.jsx)(r.E, { color: "text-default", variant: "text-sm/normal", children: u }),
                    ],
                }),
            }),
        ],
    });
};
