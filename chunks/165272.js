n.d(t, { S: () => o });
var l = n(627968);
n(64700);
var a = n(355522),
    r = n(834730),
    i = n(990078),
    s = n(812745),
    u = n(873861);
function o(e) {
    let { label: t, icon: n, tooltipText: o } = e,
        c =
            null != n
                ? n === s.Be.BANK
                    ? (0, l.jsx)(a.M, { className: u.s7 })
                    : (0, l.jsx)("img", { src: (0, s.Nj)(n), alt: "", className: u.s7 })
                : void 0,
        d = (0, l.jsxs)("div", {
            className: u.kL,
            children: [c, (0, l.jsx)(r.E, { variant: "text-md/normal", className: u.Pf, children: t })],
        });
    return null != o ? (0, l.jsx)(i.m, { text: o, asContainer: !0, children: d }) : d;
}
