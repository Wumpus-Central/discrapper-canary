n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(194359),
    o = n(388032),
    s = n(586210);
function c(e) {
    let { userId: t } = e,
        n = r.useCallback(
            (e) => {
                e.stopPropagation(), a.Z.cancelFriendRequest(t);
            },
            [t]
        ),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(), a.Z.addRelationship({ userId: t });
            },
            [t]
        );
    return (0, i.jsxs)('div', {
        className: s.friendRequestContainer,
        children: [
            (0, i.jsx)(l.Button, {
                className: s.acceptButton,
                look: l.Button.Looks.FILLED,
                color: l.Button.Colors.GREEN,
                size: l.Button.Sizes.NONE,
                onClick: c,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.ZcibdX)
                })
            }),
            (0, i.jsx)(l.Button, {
                className: s.ignoreButton,
                look: l.Button.Looks.FILLED,
                color: l.Button.Colors.PRIMARY,
                size: l.Button.Sizes.NONE,
                onClick: n,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.xuio0N)
                })
            })
        ]
    });
}
