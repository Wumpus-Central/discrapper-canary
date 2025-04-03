n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(906732),
    o = n(646476),
    c = n(197115),
    d = n(388032),
    u = n(944680),
    m = n(568147),
    g = n(332796);
let p = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: i, location: p, analyticsLocation: h } = e,
        { analyticsLocations: f } = (0, l.ZP)(p),
        b = (0, o.rK)(),
        { enabled: N } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: b }),
        x = N && b;
    return (0, r.jsx)(l.Gt, {
        value: f,
        children: (0, r.jsxs)('div', {
            className: s()(u.container, t),
            children: [
                (0, r.jsxs)('div', {
                    className: u.textContainer,
                    style: i,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-lg/extrabold',
                            className: u.heading,
                            children: x ? d.NW.string(d.t.LB3bJC) : d.NW.string(d.t.Ve9Ge3)
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            children: x ? d.NW.string(d.t.u49cn5) : d.NW.string(d.t.yQ06u7)
                        }),
                        (0, r.jsx)(c.Z, {
                            isGift: !0,
                            className: u.giftCardButton,
                            look: a.zxk.Looks.OUTLINED,
                            buttonText: d.NW.string(d.t.Ve9Ge3),
                            buttonTextClassName: u.giftButtonCTA,
                            color: a.zxk.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: h
                        })
                    ]
                }),
                (0, r.jsx)('img', {
                    src: x ? g : m,
                    className: s()(u.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};
