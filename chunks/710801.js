t.d(n, { A: () => o });
var l = t(627968);
t(64700);
var i = t(789645),
    s = t(387755),
    a = t(204651),
    r = t(375708);
function o(e) {
    let { channel: n, ...t } = e;
    return (0, l.jsx)(a.l, {
        ...t,
        iconComponent: i.P,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => s.A.stopRinging(n.id),
    });
}
