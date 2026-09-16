t.d(n, { A: () => r });
var i = t(477900);
t(582128);
var l = t(789645),
    a = t(387755),
    s = t(204651),
    o = t(375708);
function r(e) {
    let { channel: n, ...t } = e;
    return (0, i.jsx)(s.l, {
        ...t,
        iconComponent: l.P,
        label: o.intl.string(o.t.WAI6xu),
        onClick: () => a.A.stopRinging(n.id),
    });
}
