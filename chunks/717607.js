n.d(t, { A: () => u, R: () => d });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(308528),
    r = n(607272),
    o = n(985018),
    c = n(174720);
function d(e) {
    let { userId: t } = e,
        n = l.useCallback(
            (e) => {
                e.stopPropagation(), a.A.openPrivateChannel({ recipientIds: [t] });
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: c.Ze,
        children: (0, i.jsx)(s.e2v, {
            size: "sm",
            children: (0, i.jsx)(s.$nd, { variant: "secondary", onClick: n, text: o.intl.string(o.t["g33r/P"]) }),
        }),
    });
}
function u(e) {
    let { userId: t, applicationId: n } = e,
        [a, d] = l.useState(!1),
        [u, h] = l.useState(!1),
        A = l.useCallback(
            async (e) => {
                e.stopPropagation(), h(!0);
                try {
                    await r.A.cancelFriendRequest({
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
        _ = l.useCallback(
            async (e) => {
                e.stopPropagation(), d(!0);
                try {
                    await r.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    d(!1);
                }
            },
            [n, t],
        );
    return (0, i.jsx)("div", {
        className: c.Ze,
        children: (0, i.jsxs)(s.e2v, {
            size: "sm",
            children: [
                (0, i.jsx)(s.$nd, {
                    variant: "active",
                    onClick: _,
                    text: o.intl.string(o.t.Zcibdf),
                    loading: a,
                    disabled: u,
                }),
                (0, i.jsx)(s.$nd, {
                    variant: "secondary",
                    onClick: A,
                    text: o.intl.string(o.t.xuio0C),
                    loading: u,
                    disabled: a,
                }),
            ],
        }),
    });
}
