var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(906732),
    o = n(646476),
    c = n(197115),
    d = n(388032),
    u = n(587362),
    m = n(568147),
    g = n(332796);
t.Z = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: r, location: h, analyticsLocation: p } = e,
        { analyticsLocations: x } = (0, l.ZP)(h),
        f = (0, o.rK)(),
        { enabled: E } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: f }),
        _ = E && f;
    return (0, i.jsx)(l.Gt, {
        value: x,
        children: (0, i.jsxs)('div', {
            className: s()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.textContainer,
                    style: r,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: _ ? d.intl.string(d.t.LB3bJC) : d.intl.string(d.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            children: _ ? d.intl.string(d.t.u49cn5) : d.intl.string(d.t.yQ06u7)
                        }),
                        (0, i.jsx)(c.Z, {
                            isGift: !0,
                            className: u.giftCardButton,
                            look: a.Button.Looks.OUTLINED,
                            buttonText: d.intl.string(d.t.Ve9Ge3),
                            buttonTextClassName: u.giftButtonCTA,
                            color: a.Button.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: p
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: _ ? g : m,
                    className: s()(u.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
