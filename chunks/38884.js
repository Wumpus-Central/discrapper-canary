n.d(i, { default: () => u });
var e = n(477900),
    r = n(772707),
    s = n(192308),
    a = n(402860),
    l = n(287809),
    o = n(518477),
    c = n(105292);
function u(t) {
    let { transitionState: i, onClose: n, graphic: u } = t,
        d = l.default.getCurrentUser();
    return (0, e.jsx)(r.k, {
        transitionState: i,
        title: c.intl.string(c.t.L4Wg3B),
        subtitle: c.intl.string(c.t.SXb73A),
        graphic: u,
        onClose: n,
        actions: [
            {
                text: c.intl.string(c.t.TxBQzD),
                onClick: () => {
                    ((0, s.closeAllModals)(),
                        null != d && (0, a.openUserProfileModal)({ userId: d.id, tabSection: o.RP.WISHLIST }));
                },
                variant: "secondary",
            },
            { variant: "primary", text: c.intl.string(c.t.tM4PUv), onClick: n, autoFocus: !1 },
        ],
    });
}
