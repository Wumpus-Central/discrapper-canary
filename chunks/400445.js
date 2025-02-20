n.d(t, { Z: () => u });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    o = n(524437),
    l = n(453473),
    s = n(216789),
    c = n(791914),
    d = n(253248);
function u(e) {
    let { setTab: t, closePopout: n, badgeState: i } = e,
        u = (0, s.Us)({ location: 'ForLaterInbox' });
    return (0, r.jsxs)('div', {
        className: a()(d.container, { [d.widerInbox]: u }),
        children: [
            (0, r.jsx)(c.Z, {
                tab: o.X.BOOKMARKS,
                setTab: t,
                closePopout: n,
                badgeState: i
            }),
            (0, r.jsx)(l.K, { closePopout: n })
        ]
    });
}
