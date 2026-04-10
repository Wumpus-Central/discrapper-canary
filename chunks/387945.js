r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var l = r(575593),
    i = r(397927),
    s = r(320447),
    a = r(536572),
    u = r(561769),
    o = r(985018);
let d = (e) => {
    let { skuId: t, className: r } = e,
        d = (0, u.Vm)(t),
        c = (0, a.VG)(d),
        { enabled: p } = (0, s.P)("ProductCardName"),
        m = p && null != d && d.type === l.R.BUNDLE && d.items.length > 0;
    return (0, n.jsx)(i.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: m ? o.intl.format(o.t.UTc0ny, { count: d.items.length, productName: c }) : c,
    });
};
