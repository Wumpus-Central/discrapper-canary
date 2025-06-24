n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(298213),
    s = n(388032),
    a = n(884492);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, u] = i.useState(!1),
        [d, h] = i.useState(!1),
        p = i.useCallback(
            async (e) => {
                e.stopPropagation(), h(!0);
                try {
                    await o.Z.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: 'ActionButtonFriendRequest'
                    });
                } finally {
                    h(!1);
                }
            },
            [n, t]
        ),
        f = i.useCallback(
            async (e) => {
                e.stopPropagation(), u(!0);
                try {
                    await o.Z.maybeConfirmFriendRequestAccept({
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
        className: a.friendRequestContainer,
        children: [
            (0, r.jsx)(l.zxk, {
                className: a.acceptButton,
                look: l.zxk.Looks.FILLED,
                color: l.zxk.Colors.GREEN,
                size: l.zxk.Sizes.NONE,
                submitting: c,
                disabled: d,
                onClick: f,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.ZcibdX)
                })
            }),
            (0, r.jsx)(l.zxk, {
                className: a.ignoreButton,
                look: l.zxk.Looks.FILLED,
                color: l.zxk.Colors.PRIMARY,
                size: l.zxk.Sizes.NONE,
                submitting: d,
                disabled: c,
                onClick: p,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.xuio0N)
                })
            })
        ]
    });
}
