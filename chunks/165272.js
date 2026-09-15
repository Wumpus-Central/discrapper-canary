s.d(t, { S: () => o });
var n = s(477900);
s(582128);
var r = s(355522),
    a = s(352224),
    i = s(834730),
    l = s(866665),
    c = s(812745),
    u = s(113072);
function o(e) {
    let { label: t, icon: s, tooltipText: o } = e,
        d =
            null != s
                ? s === c.Be.BANK
                    ? (0, n.jsx)(r.M, { className: u.s7 })
                    : s === c.Be.IDEAL
                      ? (0, n.jsx)(a.E, { className: u.s7 })
                      : (0, n.jsx)("img", { src: (0, c.Nj)(s), alt: "", className: u.s7 })
                : void 0,
        m = (0, n.jsxs)("div", {
            className: u.kL,
            children: [d, (0, n.jsx)(i.E, { variant: "text-md/normal", className: u.Pf, children: t })],
        });
    return null != o ? (0, n.jsx)(l.m, { text: o, asContainer: !0, children: m }) : m;
}
