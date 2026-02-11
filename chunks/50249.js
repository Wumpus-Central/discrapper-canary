"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(147925),
    r = n(985018),
    a = n(521991);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, i.jsxs)(s.DUT, {
        className: a.kL,
        onClick: n,
        children: [
            (0, i.jsx)("div", {
                className: a.Kk,
                children: (0, i.jsx)(s.nFg, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
            (0, i.jsxs)("div", {
                className: a.h_,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: a.Pf,
                        color: "none",
                        variant: "text-md/bold",
                        children: r.intl.string(r.t.yiaoNr),
                    }),
                    (0, i.jsxs)(s.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: [t.name, " • ", r.intl.string(r.t.JwYI3O)],
                    }),
                ],
            }),
            (0, i.jsx)(l.A, { className: a.UE, direction: l.A.Directions.RIGHT }),
        ],
    });
}
