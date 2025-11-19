n.d(t, { Z: () => l });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(589518);
let l = (e) => {
    let { className: t, color: n = "header-primary", responsive: i = !0, children: l } = e;
    return (0, r.jsx)(o.Heading, {
        className: a()(s.header, t, i && s.responsive),
        variant: "display-md",
        color: n,
        children: l,
    });
};
