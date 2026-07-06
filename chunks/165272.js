n.d(t, { S: () => o });
var a = n(627968);
n(64700);
var r = n(355522),
    l = n(834730),
    i = n(990078),
    s = n(812745),
    u = n(873861);
function o(e) {
    let { label: t, icon: n, tooltipText: o } = e,
        c =
            null != n
                ? n === s.Be.BANK
                    ? (0, a.jsx)(r.M, { className: u.s7 })
                    : (0, a.jsx)("img", { src: (0, s.Nj)(n), alt: "", className: u.s7 })
                : void 0,
        d = (0, a.jsxs)("div", {
            className: u.kL,
            children: [c, (0, a.jsx)(l.E, { variant: "text-md/normal", className: u.Pf, children: t })],
        });
    return null != o ? (0, a.jsx)(i.m, { text: o, asContainer: !0, children: d }) : d;
}
