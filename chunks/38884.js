n.d(i, { default: () => c });
var e = n(627968),
    r = n(158954),
    s = n(657331),
    a = n(287809),
    l = n(518477),
    o = n(985018);
function c(t) {
    let { onClose: i, graphic: n } = t,
        c = a.default.getCurrentUser();
    return (0, e.jsx)(r.ExpressiveModal, {
        transitionState: r.ip4.ENTERED,
        title: o.intl.string(o.t.L4Wg3B),
        subtitle: o.intl.string(o.t.SXb73A),
        graphic: n,
        onClose: i,
        actions: [
            {
                text: o.intl.string(o.t.TxBQzD),
                onClick: () => {
                    null != c &&
                        (0, s.openUserProfileModal)({
                            userId: c.id,
                            tabSection: l.RP.WISHLIST,
                        }),
                        i();
                },
                variant: "secondary",
            },
            {
                variant: "primary",
                text: o.intl.string(o.t.tM4PUv),
                onClick: i,
            },
        ],
    });
}
