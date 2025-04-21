n.d(t, { Z: () => c }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(298213),
    o = n(388032),
    s = n(884492);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, u] = i.useState(!1),
        [d, p] = i.useState(!1),
        m = i.useCallback(
            async (e) => {
                e.stopPropagation(), p(!0);
                try {
                    await a.Z.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: 'ActionButtonFriendRequest'
                    });
                } finally {
                    p(!1);
                }
            },
            [n, t]
        ),
        f = i.useCallback(
            async (e) => {
                e.stopPropagation(), u(!0);
                try {
                    await a.Z.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: 'ActionButtonFriendRequest'
                    });
                } finally {
                    u(!1);
                }
            },
            [n, t]
        );
    return (0, r.jsxs)('div', {
        className: s.friendRequestContainer,
        children: [
            (0, r.jsx)(l.zxk, {
                className: s.acceptButton,
                look: l.zxk.Looks.FILLED,
                color: l.zxk.Colors.GREEN,
                size: l.zxk.Sizes.NONE,
                submitting: c,
                disabled: d,
                onClick: f,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.ZcibdX)
                })
            }),
            (0, r.jsx)(l.zxk, {
                className: s.ignoreButton,
                look: l.zxk.Looks.FILLED,
                color: l.zxk.Colors.PRIMARY,
                size: l.zxk.Sizes.NONE,
                submitting: d,
                disabled: c,
                onClick: m,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.xuio0N)
                })
            })
        ]
    });
}
