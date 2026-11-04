var r = n(477900),
    e = n(772707),
    s = n(192308),
    a = n(702476),
    l = n(287809),
    o = n(518477),
    u = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: n, graphic: c } = t,
                d = l.default.getCurrentUser();
            return (0, r.jsx)(e.k, {
                transitionState: i,
                title: u.intl.string(u.t.L4Wg3B),
                subtitle: u.intl.string(u.t.SXb73A),
                graphic: c,
                onClose: n,
                actions: [
                    {
                        text: u.intl.string(u.t.TxBQzD),
                        onClick: () => {
                            ((0, s.s7)(),
                                null != d && (0, a.openUserProfileModal)({ userId: d.id, tabSection: o.RP.WISHLIST }));
                        },
                        variant: "secondary",
                    },
                    { variant: "primary", text: u.intl.string(u.t.tM4PUv), onClick: n, autoFocus: !1 },
                ],
            });
        },
    },
);
