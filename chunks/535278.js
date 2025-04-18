i.d(e, { default: () => o });
var n = i(200651);
i(192379);
var r = i(481060),
    a = i(313201),
    s = i(388032),
    l = i(708121),
    c = i(365627);
function o(t) {
    let { transitionState: e, onClose: i, storeListing: o, subscription: d } = t,
        u = (0, a.Dt)();
    return (0, n.jsxs)(r.Y0X, {
        transitionState: e,
        'aria-labelledby': u,
        children: [
            (0, n.jsxs)(r.hzk, {
                className: l.contentContainer,
                children: [
                    (0, n.jsx)('img', {
                        src: c,
                        alt: ''
                    }),
                    (0, n.jsx)(r.X6q, {
                        className: l.title,
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        id: u,
                        children: s.NW.format(s.t['wLFT6+'], { tier: o.summary })
                    }),
                    (0, n.jsx)(r.Text, {
                        className: l.subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s.NW.format(s.t.OsAK9v, { timestamp: null == d ? void 0 : d.currentPeriodEnd })
                    })
                ]
            }),
            (0, n.jsx)(r.mzw, {
                children: (0, n.jsx)(r.zxk, {
                    size: r.zxk.Sizes.MEDIUM,
                    grow: !1,
                    onClick: i,
                    children: s.NW.string(s.t['JtWl+f'])
                })
            })
        ]
    });
}
