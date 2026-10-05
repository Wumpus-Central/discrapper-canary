n.d(t, { S: () => o });
var r = n(477900);
n(582128);
var i = n(355522),
    a = n(352224),
    l = n(834730),
    s = n(866665),
    u = n(812745),
    c = n(113072);
function o(e) {
    let { label: t, icon: n, tooltipText: o } = e,
        d =
            null != n
                ? n === u.Be.BANK
                    ? (0, r.jsx)(i.M, { className: c.s7 })
                    : n === u.Be.IDEAL
                      ? (0, r.jsx)(a.E, { className: c.s7 })
                      : (0, r.jsx)("img", { src: (0, u.Nj)(n), alt: "", className: c.s7 })
                : void 0,
        m = (0, r.jsxs)("div", {
            className: c.kL,
            children: [d, (0, r.jsx)(l.E, { variant: "text-md/normal", className: c.Pf, children: t })],
        });
    return null != o ? (0, r.jsx)(s.m, { text: o, asContainer: !0, children: m }) : m;
}
