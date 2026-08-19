n.d(t, { S: () => o });
var s = n(477900);
n(582128);
var r = n(355522),
    i = n(352224),
    a = n(834730),
    l = n(866665),
    u = n(812745),
    c = n(113072);
function o(e) {
    let { label: t, icon: n, tooltipText: o } = e,
        d =
            null != n
                ? n === u.Be.BANK
                    ? (0, s.jsx)(r.M, { className: c.s7 })
                    : n === u.Be.IDEAL
                      ? (0, s.jsx)(i.E, { className: c.s7 })
                      : (0, s.jsx)("img", { src: (0, u.Nj)(n), alt: "", className: c.s7 })
                : void 0,
        m = (0, s.jsxs)("div", {
            className: c.kL,
            children: [d, (0, s.jsx)(a.E, { variant: "text-md/normal", className: c.Pf, children: t })],
        });
    return null != o ? (0, s.jsx)(l.m, { text: o, asContainer: !0, children: m }) : m;
}
