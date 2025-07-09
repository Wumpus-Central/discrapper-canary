n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(906732),
    c = n(646476),
    d = n(736519),
    u = n(388032),
    m = n(944680),
    p = n(568147),
    g = n(332796);
let h = (e) => {
    let { className: t, location: n, analyticsLocation: r } = e,
        { analyticsLocations: h } = (0, o.ZP)(n),
        f = (0, c.rK)(),
        { enabled: b } = c.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: f }),
        x = b && f;
    return (0, i.jsx)(o.Gt, {
        value: h,
        children: (0, i.jsxs)('div', {
            className: s()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.textContainer,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            className: m.heading,
                            children: x ? u.intl.string(u.t.LB3bJC) : u.intl.string(u.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: x ? u.intl.string(u.t.u49cn5) : u.intl.string(u.t.yQ06u7)
                        }),
                        (0, i.jsx)(d.Z, {
                            className: m.giftCardButton,
                            textOptions: {
                                textOverride: u.intl.string(u.t.Ve9Ge3),
                                textClassName: m.giftButtonCTA
                            },
                            color: a.zx.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: r
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: x ? g : p,
                    className: m.bannerImage,
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
