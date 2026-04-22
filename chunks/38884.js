n.d(i, { default: () => c });
var e = n(627968),
    r = n(772707),
    l = n(657331),
    s = n(287809),
    a = n(518477),
    d = n(985018);
function c(t) {
    let { transitionState: i, onClose: n, graphic: c } = t,
        o = s.default.getCurrentUser();
    return (0, e.jsx)(r.k, {
        transitionState: i,
        title: d.intl.string(d.t.L4Wg3B),
        subtitle: d.intl.string(d.t.SXb73A),
        graphic: c,
        onClose: n,
        actions: [
            {
                text: d.intl.string(d.t.TxBQzD),
                onClick: () => {
                    null != o && (0, l.openUserProfileModal)({ userId: o.id, tabSection: a.RP.WISHLIST }), n();
                },
                variant: "secondary",
            },
            { variant: "primary", text: d.intl.string(d.t.tM4PUv), onClick: n },
        ],
    });
}
