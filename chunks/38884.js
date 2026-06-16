n.d(i, { default: () => u });
var r = n(627968),
    e = n(772707),
    s = n(975732),
    a = n(287809),
    l = n(518477),
    o = n(375708);
function u(t) {
    let { transitionState: i, onClose: n, graphic: u } = t,
        c = a.default.getCurrentUser();
    return (0, r.jsx)(e.k, {
        transitionState: i,
        title: o.intl.string(o.t.L4Wg3B),
        subtitle: o.intl.string(o.t.SXb73A),
        graphic: u,
        onClose: n,
        actions: [
            {
                text: o.intl.string(o.t.TxBQzD),
                onClick: () => {
                    null != c && (0, s.openUserProfileModal)({ userId: c.id, tabSection: l.RP.WISHLIST }), n();
                },
                variant: "secondary",
            },
            { variant: "primary", text: o.intl.string(o.t.tM4PUv), onClick: n, autoFocus: !1 },
        ],
    });
}
