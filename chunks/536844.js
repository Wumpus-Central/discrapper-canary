n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(906732),
    o = n(646476),
    c = n(197115),
    d = n(388032),
    u = n(587362),
    m = n(568147),
    g = n(332796);
let h = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: s, location: h, analyticsLocation: x } = e,
        { analyticsLocations: _ } = (0, a.ZP)(h),
        p = (0, o.rK)(),
        { enabled: E } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: p }),
        C = E && p;
    return (0, i.jsx)(a.Gt, {
        value: _,
        children: (0, i.jsxs)('div', {
            className: r()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.textContainer,
                    style: s,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: C ? d.intl.string(d.t.LB3bJC) : d.intl.string(d.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: C ? d.intl.string(d.t.u49cn5) : d.intl.string(d.t.yQ06u7)
                        }),
                        (0, i.jsx)(c.Z, {
                            isGift: !0,
                            className: u.giftCardButton,
                            look: l.zxk.Looks.OUTLINED,
                            buttonText: d.intl.string(d.t.Ve9Ge3),
                            buttonTextClassName: u.giftButtonCTA,
                            color: l.zxk.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: x
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: C ? g : m,
                    className: r()(u.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
