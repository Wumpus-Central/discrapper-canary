n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(906732),
    o = n(646476),
    c = n(736519),
    d = n(388032),
    u = n(944680),
    m = n(568147),
    g = n(332796);
let p = (e) => {
    let { className: t, location: n, analyticsLocation: r } = e,
        { analyticsLocations: p } = (0, a.ZP)(n),
        h = (0, o.rK)(),
        { enabled: f } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: h }),
        b = f && h;
    return (0, i.jsx)(a.Gt, {
        value: p,
        children: (0, i.jsxs)('div', {
            className: s()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.textContainer,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: b ? d.intl.string(d.t.LB3bJC) : d.intl.string(d.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: b ? d.intl.string(d.t.u49cn5) : d.intl.string(d.t.yQ06u7)
                        }),
                        (0, i.jsx)(c.Z, {
                            className: u.giftCardButton,
                            textOptions: {
                                textOverride: d.intl.string(d.t.Ve9Ge3),
                                textClassName: u.giftButtonCTA
                            },
                            color: l.zxk.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: r
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: b ? g : m,
                    className: u.bannerImage,
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
