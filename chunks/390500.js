n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(970606),
    a = n(388032),
    s = n(92850);
let c = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        c = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != c && (0, o.Pq)(c);
        }, [c]),
        (0, r.jsxs)('div', {
            className: s.confirmation,
            children: [
                (0, r.jsx)('div', {
                    className: s.iconWrapper,
                    children: (0, r.jsx)(l.wGF, {
                        size: 'md',
                        color: l.TVs.colors.INTERACTIVE_ACTIVE
                    })
                }),
                (0, r.jsxs)('div', {
                    className: s.statusTextContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: (null == n ? void 0 : n.name) != null ? a.NW.formatToPlainString(a.t['0Qlu//'], { guildName: n.name }) : a.NW.string(a.t['5iLvS0'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: a.NW.string(a.t.FdsK4u)
                        })
                    ]
                }),
                (0, r.jsx)(l.zxk, {
                    fullWidth: !0,
                    onClick: t,
                    look: l.zxk.Looks.FILLED,
                    color: l.zxk.Colors.RED,
                    size: l.zxk.Sizes.LARGE,
                    children: a.NW.string(a.t.g9tK0t)
                })
            ]
        })
    );
};
