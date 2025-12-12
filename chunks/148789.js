n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    o = n(298213),
    a = n(388032),
    s = n(231796);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, u] = i.useState(!1),
        [d, f] = i.useState(!1),
        h = i.useCallback(
            async (e) => {
                e.stopPropagation(), f(!0);
                try {
                    await o.Z.cancelFriendRequest({
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
        p = i.useCallback(
            async (e) => {
                e.stopPropagation(), u(!0);
                try {
                    await o.Z.maybeConfirmFriendRequestAccept({
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
        className: s.friendRequestContainer,
        children: (0, r.jsxs)(l.hE2, {
            size: "sm",
            children: [
                (0, r.jsx)(l.zxk, {
                    variant: "active",
                    onClick: p,
                    text: a.intl.string(a.t.Zcibdf),
                    loading: c,
                    disabled: d,
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    onClick: h,
                    text: a.intl.string(a.t.xuio0C),
                    loading: d,
                    disabled: c,
                }),
            ],
        }),
    });
}
