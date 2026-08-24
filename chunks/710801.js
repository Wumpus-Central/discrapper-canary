t.d(n, { A: () => o });
var l = t(477900);
t(582128);
var i = t(789645),
    a = t(387755),
    s = t(204651),
    r = t(375708);
function o(e) {
    let { channel: n, ...t } = e;
    return (0, l.jsx)(s.l, {
        ...t,
        iconComponent: i.P,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => a.A.stopRinging(n.id),
    });
}
