n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(906732),
    o = n(646476),
    c = n(197115),
    d = n(388032),
    u = n(944680),
    m = n(568147),
    p = n(332796);
let g = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: r, location: g, analyticsLocation: h } = e,
        { analyticsLocations: f } = (0, a.ZP)(g),
        b = (0, o.rK)(),
        { enabled: _ } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: b }),
        x = _ && b;
    return (0, i.jsx)(a.Gt, {
        value: f,
        children: (0, i.jsxs)('div', {
            className: s()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.textContainer,
                    style: r,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: x ? d.intl.string(d.t.LB3bJC) : d.intl.string(d.t.Ve9Ge3)
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: x ? d.intl.string(d.t.u49cn5) : d.intl.string(d.t.yQ06u7)
                        }),
                        (0, i.jsx)(c.Z, {
                            isGift: !0,
                            className: u.giftCardButton,
                            look: l.zxk.Looks.OUTLINED,
                            buttonText: d.intl.string(d.t.Ve9Ge3),
                            buttonTextClassName: u.giftButtonCTA,
                            color: l.zxk.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: h
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    src: x ? p : m,
                    className: s()(u.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
