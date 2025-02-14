n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(970606),
    s = n(388032),
    o = n(739387);
let d = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        d = null == n ? void 0 : n.id;
    return (
        l.useEffect(() => {
            null != d && (0, a.Pq)(d);
        }, [d]),
        (0, i.jsxs)('div', {
            className: o.confirmation,
            children: [
                (0, i.jsx)('div', {
                    className: o.iconWrapper,
                    children: (0, i.jsx)(r.wGF, {
                        size: 'md',
                        color: r.TVs.colors.INTERACTIVE_ACTIVE
                    })
                }),
                (0, i.jsxs)('div', {
                    className: o.statusTextContainer,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: (null == n ? void 0 : n.name) != null ? s.intl.formatToPlainString(s.t['0Qlu//'], { guildName: n.name }) : s.intl.string(s.t['5iLvS0'])
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: s.intl.string(s.t.FdsK4u)
                        })
                    ]
                }),
                (0, i.jsx)(r.zxk, {
                    fullWidth: !0,
                    onClick: t,
                    look: r.zxk.Looks.FILLED,
                    color: r.zxk.Colors.RED,
                    size: r.zxk.Sizes.LARGE,
                    children: s.intl.string(s.t.g9tK0t)
                })
            ]
        })
    );
};
