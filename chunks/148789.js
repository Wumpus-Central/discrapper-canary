n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(755721),
    o = n(298213),
    a = n(388032),
    s = n(231796);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, u] = i.useState(!1),
        [d, p] = i.useState(!1),
        f = i.useCallback(
            async (e) => {
                e.stopPropagation(), p(!0);
                try {
                    await o.Z.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    p(!1);
                }
            },
            [n, t],
        ),
        h = i.useCallback(
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
    return (0, r.jsxs)("div", {
        className: s.friendRequestContainer,
        children: [
            (0, r.jsx)(l.zx, {
                className: s.acceptButton,
                look: l.zx.Looks.FILLED,
                color: l.zx.Colors.GREEN,
                size: l.zx.Sizes.NONE,
                submitting: c,
                disabled: d,
                onClick: h,
                children: a.intl.string(a.t.Zcibdf),
            }),
            (0, r.jsx)(l.zx, {
                className: s.ignoreButton,
                look: l.zx.Looks.FILLED,
                color: l.zx.Colors.PRIMARY,
                size: l.zx.Sizes.NONE,
                submitting: d,
                disabled: c,
                onClick: f,
                children: a.intl.string(a.t.xuio0C),
            }),
        ],
    });
}
