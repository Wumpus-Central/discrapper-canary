n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    a = n(481060),
    o = n(926526),
    s = n(388032),
    c = n(568410);
let u = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        u = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != u && (0, o.Pq)(u);
        }, [u]),
        (0, r.jsxs)('div', {
            className: c.confirmation,
            children: [
                (0, r.jsx)('div', {
                    className: c.iconWrapper,
                    children: (0, r.jsx)(a.wGF, {
                        size: 'md',
                        color: a.TVs.colors.INTERACTIVE_ACTIVE
                    })
                }),
                (0, r.jsxs)('div', {
                    className: c.statusTextContainer,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: (null == n ? void 0 : n.name) != null ? s.intl.formatToPlainString(s.t['0Qlu//'], { guildName: n.name }) : s.intl.string(s.t['5iLvS0'])
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: s.intl.string(s.t.FdsK4u)
                        })
                    ]
                }),
                (0, r.jsx)(l.zx, {
                    fullWidth: !0,
                    onClick: t,
                    look: l.zx.Looks.FILLED,
                    color: l.zx.Colors.RED,
                    size: l.zx.Sizes.LARGE,
                    children: s.intl.string(s.t.g9tK0t)
                })
            ]
        })
    );
};
