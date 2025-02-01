n.d(t, { Z: () => u });
var i = n(200651),
    l = n(120356),
    a = n.n(l),
    r = n(524437),
    s = n(453473),
    o = n(216789),
    c = n(791914),
    d = n(906322);
function u(e) {
    let { setTab: t, closePopout: n, badgeState: l } = e,
        u = (0, o.Us)({ location: 'ForLaterInbox' });
    return (0, i.jsxs)('div', {
        className: a()(d.container, { [d.widerInbox]: u }),
        children: [
            (0, i.jsx)(c.Z, {
                tab: r.X.BOOKMARKS,
                setTab: t,
                closePopout: n,
                badgeState: l
            }),
            (0, i.jsx)(s.K, { closePopout: n })
        ]
    });
}
