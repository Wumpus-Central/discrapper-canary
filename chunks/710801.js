t.d(n, { A: () => o });
var l = t(627968);
t(64700);
var i = t(789645),
    a = t(387755),
    s = t(709562),
    r = t(985018);
function o(e) {
    let { channel: n, ...t } = e;
    return (0, l.jsx)(s.l, {
        ...t,
        iconComponent: i.P,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => a.A.stopRinging(n.id),
    });
}
