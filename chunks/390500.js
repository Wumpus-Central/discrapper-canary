n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(926526),
    o = n(388032),
    s = n(568410);
let c = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        c = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != c && (0, a.Pq)(c);
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
                            children: (null == n ? void 0 : n.name) != null ? o.intl.formatToPlainString(o.t['0Qlu//'], { guildName: n.name }) : o.intl.string(o.t['5iLvS0'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: o.intl.string(o.t.FdsK4u)
                        })
                    ]
                }),
                (0, r.jsx)(l.zxk, {
                    fullWidth: !0,
                    onClick: t,
                    look: l.zxk.Looks.FILLED,
                    color: l.zxk.Colors.RED,
                    size: l.zxk.Sizes.LARGE,
                    children: o.intl.string(o.t.g9tK0t)
                })
            ]
        })
    );
};
