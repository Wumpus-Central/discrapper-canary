i.d(e, { default: () => d });
var n = i(255367);
i(73800);
var r = i(755721),
    a = i(481060),
    s = i(313201),
    l = i(388032),
    o = i(708121),
    c = i(365627);
function d(t) {
    let { transitionState: e, onClose: i, storeListing: d, subscription: u } = t,
        m = (0, s.Dt)();
    return (0, n.jsxs)(a.Y0X, {
        transitionState: e,
        'aria-labelledby': m,
        parentComponent: 'SubscriptionRestartedModal',
        children: [
            (0, n.jsxs)(a.hzk, {
                className: o.contentContainer,
                children: [
                    (0, n.jsx)('img', {
                        src: c,
                        alt: ''
                    }),
                    (0, n.jsx)(a.X6q, {
                        className: o.title,
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        id: m,
                        children: l.intl.format(l.t['wLFT6+'], { tier: d.summary })
                    }),
                    (0, n.jsx)(a.Text, {
                        className: o.subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: l.intl.format(l.t.OsAK9v, { timestamp: null == u ? void 0 : u.currentPeriodEnd })
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(r.zx, {
                    size: r.zx.Sizes.MEDIUM,
                    grow: !1,
                    onClick: i,
                    children: l.intl.string(l.t['JtWl+f'])
                })
            })
        ]
    });
}
