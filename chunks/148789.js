n.d(t, { Z: () => c });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(194359),
    s = n(388032),
    o = n(586210);
function c(e) {
    let { userId: t } = e,
        n = l.useCallback(
            (e) => {
                e.stopPropagation(), r.Z.cancelFriendRequest(t);
            },
            [t]
        ),
        c = l.useCallback(
            (e) => {
                e.stopPropagation(), r.Z.addRelationship({ userId: t });
            },
            [t]
        );
    return (0, i.jsxs)('div', {
        className: o.friendRequestContainer,
        children: [
            (0, i.jsx)(a.zxk, {
                className: o.acceptButton,
                look: a.zxk.Looks.FILLED,
                color: a.zxk.Colors.GREEN,
                size: a.zxk.Sizes.NONE,
                onClick: c,
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
                onClick: n,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.xuio0N)
                })
            })
        ]
    });
}
