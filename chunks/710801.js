n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(789645),
    s = n(387755),
    a = n(709562),
    r = n(985018);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, l.jsx)(a.l, {
        ...n,
        iconComponent: i.P,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => s.A.stopRinging(t.id),
    });
}
