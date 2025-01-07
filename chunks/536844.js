var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(906732),
    o = n(646476),
    c = n(197115),
    d = n(388032),
    u = n(587362),
    g = n(568147),
    m = n(332796);
t.Z = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: r, location: f, analyticsLocation: p } = e,
        { analyticsLocations: _ } = (0, l.ZP)(f),
        h = (0, o.rK)(),
        { enabled: x } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: h }),
        E = x && h;
    return (0, i.jsx)(l.Gt, {
        value: _,
        children: (0, i.jsxs)('div', {
            className: a()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.textContainer,
                    style: r,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: E ? d.intl.string(d.t.LB3bJC) : d.intl.string(d.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            children: E ? d.intl.string(d.t.u49cn5) : d.intl.string(d.t.yQ06u7)
                        }),
                        (0, i.jsx)(c.Z, {
                            isGift: !0,
                            className: u.giftCardButton,
                            look: s.Button.Looks.OUTLINED,
                            buttonText: d.intl.string(d.t.Ve9Ge3),
                            buttonTextClassName: u.giftButtonCTA,
                            color: s.Button.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: p
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: E ? m : g,
                    className: a()(u.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
