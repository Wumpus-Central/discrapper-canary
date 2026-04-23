n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(534514),
    a = n(834730),
    l = n(263063),
    s = n(253932),
    o = n(218394),
    d = n(258335),
    u = n(556545);
function c(e) {
    let { coverImageAsset: t, title: n, guild: c, description: A, children: h } = e,
        _ = s.kt.useSetting(),
        E = (0, o.j)(),
        [p, m] = (0, d.A)(t, E && _);
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)("div", {
                ref: p,
                className: u.El,
                children: null != m && (0, i.jsx)("img", { src: m, alt: "", className: u.N4 }),
            }),
            (0, i.jsx)("div", { className: u._C, children: (0, i.jsx)(l.Ay, { guild: c, size: l.Ay.Sizes.XLARGE }) }),
            (0, i.jsx)(r.D, { variant: "heading-xl/semibold", className: u.H1, children: n }),
            (0, i.jsx)(a.E, { className: u.jr, variant: "text-md/normal", color: "text-default", children: A }),
            h,
        ],
    });
}
