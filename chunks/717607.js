n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(607272),
    r = n(985018),
    o = n(993169);
function d(e) {
    let { userId: t, applicationId: n } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(!1),
        A = l.useCallback(
            async (e) => {
                e.stopPropagation(), h(!0);
                try {
                    await a.A.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    h(!1);
                }
            },
            [n, t],
        ),
        g = l.useCallback(
            async (e) => {
                e.stopPropagation(), c(!0);
                try {
                    await a.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    c(!1);
                }
            },
            [n, t],
        );
    return (0, i.jsx)("div", {
        className: o.Ze,
        children: (0, i.jsxs)(s.e2v, {
            size: "sm",
            children: [
                (0, i.jsx)(s.$nd, {
                    variant: "active",
                    onClick: g,
                    text: r.intl.string(r.t.Zcibdf),
                    loading: d,
                    disabled: u,
                }),
                (0, i.jsx)(s.$nd, {
                    variant: "secondary",
                    onClick: A,
                    text: r.intl.string(r.t.xuio0C),
                    loading: u,
                    disabled: d,
                }),
            ],
        }),
    });
}
