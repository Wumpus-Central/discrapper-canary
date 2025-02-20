n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(298213),
    l = n(388032),
    s = n(632852);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, d] = i.useState(!1),
        [u, p] = i.useState(!1),
        m = i.useCallback(
            async (e) => {
                e.stopPropagation(), p(!0);
                try {
                    await o.Z.cancelFriendRequest({
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
                e.stopPropagation(), d(!0);
                try {
                    await o.Z.maybeConfirmFriendRequestAccept({
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
    return (0, r.jsxs)('div', {
        className: s.friendRequestContainer,
        children: [
            (0, r.jsx)(a.zxk, {
                className: s.acceptButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.GREEN,
                size: a.zxk.Sizes.NONE,
                submitting: c,
                disabled: u,
                onClick: f,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: l.NW.string(l.t.ZcibdX)
                })
            }),
            (0, r.jsx)(a.zxk, {
                className: s.ignoreButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.PRIMARY,
                size: a.zxk.Sizes.NONE,
                submitting: u,
                disabled: c,
                onClick: m,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: l.NW.string(l.t.xuio0N)
                })
            })
        ]
    });
}
