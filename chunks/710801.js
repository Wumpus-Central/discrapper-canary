t.d(n, { A: () => r });
var i = t(477900);
t(582128);
var l = t(789645),
    s = t(387755),
    a = t(204651),
    o = t(375708);
function r(e) {
    let { channel: n, ...t } = e;
    return (0, i.jsx)(a.l, {
        ...t,
        iconComponent: l.P,
        label: o.intl.string(o.t.WAI6xu),
        onClick: () => s.A.stopRinging(n.id),
    });
}
