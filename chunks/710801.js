t.d(n, { A: () => r });
var l = t(477900);
t(582128);
var i = t(789645),
    a = t(387755),
    s = t(204651),
    o = t(660183);
function r(e) {
    let { channel: n, ...t } = e;
    return (0, l.jsx)(s.l, {
        ...t,
        iconComponent: i.P,
        label: o.intl.string(o.t.WAI6xu),
        onClick: () => a.A.stopRinging(n.id),
    });
}
