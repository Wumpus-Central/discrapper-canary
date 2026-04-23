r.d(t, { A: () => o });
var i = r(627968);
r(64700);
var n = r(575593),
    l = r(534514),
    s = r(320447),
    a = r(536572),
    u = r(561769),
    c = r(985018);
let o = (e) => {
    let { skuId: t, className: r } = e,
        o = (0, u.Vm)(t),
        d = (0, a.VG)(o),
        { enabled: k } = (0, s.P)("ProductCardName"),
        p = k && null != o && o.type === n.R.BUNDLE && o.items.length > 0;
    return (0, i.jsx)(l.D, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: p ? c.intl.format(c.t.UTc0ny, { count: o.items.length, productName: d }) : d,
    });
};
