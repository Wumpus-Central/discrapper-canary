t.d(s, { S: () => o });
var n = t(477900);
t(582128);
var r = t(355522),
    a = t(352224),
    i = t(834730),
    l = t(866665),
    c = t(812745),
    u = t(113072);
function o(e) {
    let { label: s, icon: t, tooltipText: o } = e,
        d =
            null != t
                ? t === c.Be.BANK
                    ? (0, n.jsx)(r.M, { className: u.s7 })
                    : t === c.Be.IDEAL
                      ? (0, n.jsx)(a.E, { className: u.s7 })
                      : (0, n.jsx)("img", { src: (0, c.Nj)(t), alt: "", className: u.s7 })
                : void 0,
        m = (0, n.jsxs)("div", {
            className: u.kL,
            children: [d, (0, n.jsx)(i.E, { variant: "text-md/normal", className: u.Pf, children: s })],
        });
    return null != o ? (0, n.jsx)(l.m, { text: o, asContainer: !0, children: m }) : m;
}
