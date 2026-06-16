"use strict";
n.d(t, { S: () => u });
var i = n(627968);
n(64700);
var r = n(355522),
    s = n(834730),
    a = n(990078),
    o = n(812745),
    l = n(873861);
function u(e) {
    let { label: t, icon: n, tooltipText: u } = e,
        c =
            null != n
                ? n === o.Be.BANK
                    ? (0, i.jsx)(r.M, { className: l.s7 })
                    : (0, i.jsx)("img", { src: (0, o.Nj)(n), alt: "", className: l.s7 })
                : void 0,
        d = (0, i.jsxs)("div", {
            className: l.kL,
            children: [c, (0, i.jsx)(s.E, { variant: "text-md/normal", className: l.Pf, children: t })],
        });
    return null != u ? (0, i.jsx)(a.m, { text: u, asContainer: !0, children: d }) : d;
}
