n.d(i, { default: () => c });
var e = n(627968),
    r = n(158954),
    s = n(657331),
    a = n(287809),
    l = n(518477),
    o = n(985018);
function c(t) {
    let { transitionState: i, onClose: n, graphic: c } = t,
        d = a.default.getCurrentUser();
    return (0, e.jsx)(r.ExpressiveModal, {
        transitionState: i,
        title: o.intl.string(o.t.L4Wg3B),
        subtitle: o.intl.string(o.t.SXb73A),
        graphic: c,
        onClose: n,
        actions: [
            {
                text: o.intl.string(o.t.TxBQzD),
                onClick: () => {
                    null != d && (0, s.openUserProfileModal)({ userId: d.id, tabSection: l.RP.WISHLIST }), n();
                },
                variant: "secondary",
            },
            { variant: "primary", text: o.intl.string(o.t.tM4PUv), onClick: n },
        ],
    });
}
