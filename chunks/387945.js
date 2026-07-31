n.d(t, { A: () => u });
var r = n(477900);
n(582128);
var i = n(575593),
    s = n(834730),
    l = n(536572),
    a = n(561769),
    o = n(375708);
let u = function (e) {
    let { skuId: t, className: n } = e,
        u = (0, a.Vm)(t),
        c = (0, l.VG)(u),
        d = null != u && u.type === i.R.BUNDLE && u.items.length > 0;
    return (0, r.jsx)(s.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: d ? o.intl.format(o.t.UTc0ny, { count: u.items.length, productName: c }) : c,
    });
};
