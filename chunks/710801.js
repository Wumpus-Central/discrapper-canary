t.d(n, { A: () => o });
var i = t(477900);
t(582128);
var l = t(789645),
    s = t(387755),
    a = t(204651),
    r = t(105292);
function o(e) {
    let { channel: n, ...t } = e;
    return (0, i.jsx)(a.l, {
        ...t,
        iconComponent: l.P,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => s.A.stopRinging(n.id),
    });
}
