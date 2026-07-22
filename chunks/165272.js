n.d(t, { S: () => c });
var a = n(627968);
n(64700);
var s = n(355522),
    r = n(352224),
    i = n(834730),
    l = n(866665),
    u = n(812745),
    o = n(70237);
function c(e) {
    let { label: t, icon: n, tooltipText: c } = e,
        d =
            null != n
                ? n === u.Be.BANK
                    ? (0, a.jsx)(s.M, { className: o.s7 })
                    : n === u.Be.IDEAL
                      ? (0, a.jsx)(r.E, { className: o.s7 })
                      : (0, a.jsx)("img", { src: (0, u.Nj)(n), alt: "", className: o.s7 })
                : void 0,
        m = (0, a.jsxs)("div", {
            className: o.kL,
            children: [d, (0, a.jsx)(i.E, { variant: "text-md/normal", className: o.Pf, children: t })],
        });
    return null != c ? (0, a.jsx)(l.m, { text: c, asContainer: !0, children: m }) : m;
}
