n.d(t, { A: () => c }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(607272),
    s = n(985018),
    o = n(993169);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, u] = l.useState(!1),
        [d, f] = l.useState(!1),
        p = l.useCallback(
            async (e) => {
                e.stopPropagation(), f(!0);
                try {
                    await a.A.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    f(!1);
                }
            },
            [n, t],
        ),
        h = l.useCallback(
            async (e) => {
                e.stopPropagation(), u(!0);
                try {
                    await a.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    u(!1);
                }
            },
            [n, t],
        );
    return (0, r.jsx)("div", {
        className: o.Ze,
        children: (0, r.jsxs)(i.e2v, {
            size: "sm",
            children: [
                (0, r.jsx)(i.$nd, {
                    variant: "active",
                    onClick: h,
                    text: s.intl.string(s.t.Zcibdf),
                    loading: c,
                    disabled: d,
                }),
                (0, r.jsx)(i.$nd, {
                    variant: "secondary",
                    onClick: p,
                    text: s.intl.string(s.t.xuio0C),
                    loading: d,
                    disabled: c,
                }),
            ],
        }),
    });
}
