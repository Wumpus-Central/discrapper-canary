n.d(t, { Z: () => d });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    l = n(524437),
    o = n(453473),
    s = n(216789),
    c = n(791914),
    u = n(929968);
function d(e) {
    let { setTab: t, closePopout: n, badgeState: i } = e,
        d = (0, s.Us)({ location: 'ForLaterInbox' });
    return (0, r.jsxs)('div', {
        className: a()(u.container, { [u.widerInbox]: d }),
        children: [
            (0, r.jsx)(c.Z, {
                tab: l.X.BOOKMARKS,
                setTab: t,
                closePopout: n,
                badgeState: i
            }),
            (0, r.jsx)(o.K, { closePopout: n })
        ]
    });
}
