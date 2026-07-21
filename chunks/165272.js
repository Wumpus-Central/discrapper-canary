n.d(t, { S: () => o });
var r = n(627968);
n(64700);
var a = n(355522),
    s = n(834730),
    i = n(866665),
    l = n(812745),
    u = n(70237);
function o(e) {
    let { label: t, icon: n, tooltipText: o } = e,
        c =
            null != n
                ? n === l.Be.BANK
                    ? (0, r.jsx)(a.M, { className: u.s7 })
                    : (0, r.jsx)("img", { src: (0, l.Nj)(n), alt: "", className: u.s7 })
                : void 0,
        d = (0, r.jsxs)("div", {
            className: u.kL,
            children: [c, (0, r.jsx)(s.E, { variant: "text-md/normal", className: u.Pf, children: t })],
        });
    return null != o ? (0, r.jsx)(i.m, { text: o, asContainer: !0, children: d }) : d;
}
