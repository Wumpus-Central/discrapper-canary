n.d(t, { Z: () => d });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    a = n(524437),
    o = n(453473),
    s = n(216789),
    c = n(791914),
    u = n(929968);
function d(e) {
    let { setTab: t, closePopout: n, badgeState: i } = e,
        d = (0, s.Us)({ location: 'ForLaterInbox' });
    return (0, r.jsxs)('div', {
        className: l()(u.container, { [u.widerInbox]: d }),
        children: [
            (0, r.jsx)(c.Z, {
                tab: a.X.BOOKMARKS,
                setTab: t,
                closePopout: n,
                badgeState: i
            }),
            (0, r.jsx)(o.K, { closePopout: n })
        ]
    });
}
