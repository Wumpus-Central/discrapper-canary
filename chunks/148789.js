n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(194359),
    s = n(298213),
    o = n(388032),
    c = n(149681);
function d(e) {
    let { userId: t } = e,
        n = l.useCallback(
            (e) => {
                e.stopPropagation(), r.Z.cancelFriendRequest(t);
            },
            [t]
        ),
        d = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    s.Z.maybeConfirmFriendRequestAccept({
                        userId: t,
                        location: 'ActionButtonFriendRequest'
                    });
            },
            [t]
        );
    return (0, i.jsxs)('div', {
        className: c.friendRequestContainer,
        children: [
            (0, i.jsx)(a.zxk, {
                className: c.acceptButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.GREEN,
                size: a.zxk.Sizes.NONE,
                onClick: d,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.ZcibdX)
                })
            }),
            (0, i.jsx)(a.zxk, {
                className: c.ignoreButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.PRIMARY,
                size: a.zxk.Sizes.NONE,
                onClick: n,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.xuio0N)
                })
            })
        ]
    });
}
