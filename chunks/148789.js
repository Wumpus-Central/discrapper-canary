n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(298213),
    s = n(388032),
    o = n(149681);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, d] = l.useState(!1),
        [u, m] = l.useState(!1),
        _ = l.useCallback(
            async (e) => {
                e.stopPropagation(), m(!0);
                try {
                    await r.Z.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: 'ActionButtonFriendRequest'
                    });
                } finally {
                    m(!1);
                }
            },
            [n, t]
        ),
        h = l.useCallback(
            async (e) => {
                e.stopPropagation(), d(!0);
                try {
                    await r.Z.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: 'ActionButtonFriendRequest'
                    });
                } finally {
                    d(!1);
                }
            },
            [n, t]
        );
    return (0, i.jsxs)('div', {
        className: o.friendRequestContainer,
        children: [
            (0, i.jsx)(a.zxk, {
                className: o.acceptButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.GREEN,
                size: a.zxk.Sizes.NONE,
                submitting: c,
                disabled: u,
                onClick: h,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.ZcibdX)
                })
            }),
            (0, i.jsx)(a.zxk, {
                className: o.ignoreButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.PRIMARY,
                size: a.zxk.Sizes.NONE,
                submitting: u,
                disabled: c,
                onClick: _,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.xuio0N)
                })
            })
        ]
    });
}
