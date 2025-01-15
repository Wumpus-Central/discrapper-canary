var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(793030),
    l = n(471309),
    o = n(976465),
    c = n(474936),
    d = n(388032),
    u = n(713994);
let m = (e, t) => {
    switch (e) {
        case c.VU.PREMIUM_TENURE_1_MONTH:
            return u.badgeBronzeGlow;
        case c.VU.PREMIUM_TENURE_3_MONTH:
            return u.badgeSilverGlow;
        case c.VU.PREMIUM_TENURE_6_MONTH:
            return u.badgeGoldGlow;
        case c.VU.PREMIUM_TENURE_12_MONTH:
            return u.badgePlatinumGlow;
        case c.VU.PREMIUM_TENURE_24_MONTH:
            return u.badgeDiamondGlow;
        case c.VU.PREMIUM_TENURE_36_MONTH:
            return u.badgeEmeraldGlow;
        case c.VU.PREMIUM_TENURE_60_MONTH:
            return u.badgeRubyGlow;
        case c.VU.PREMIUM_TENURE_72_MONTH:
            return 2 === t ? u.badgeOpalGlow : u.badgeFireGlow;
        default:
            return;
    }
};
t.Z = () => {
    var e;
    let { badge: t, image: n, name: s, earnedOnDate: c, tenureRequirement: g } = (0, o.Rw)(),
        { version: h } = (0, l.Z)(),
        p = null !== (e = (0, o.GG)()) && void 0 !== e ? e : new Date();
    return null == t || null == h
        ? null
        : 1 === h
          ? (0, i.jsxs)('div', {
                className: r()(u.container, m(t, h)),
                children: [
                    (0, i.jsx)('div', {}),
                    ' ',
                    (0, i.jsx)('img', {
                        src: n,
                        alt: s,
                        className: u.badgeImage
                    }),
                    (0, i.jsxs)('div', {
                        className: u.textColumn,
                        children: [
                            (0, i.jsx)(a.xv, {
                                variant: 'text-lg/semibold',
                                className: u.badgeText,
                                children: s
                            }),
                            (0, i.jsx)(a.xv, {
                                variant: 'text-xs/normal',
                                children: d.intl.format(d.t.zl7yMD, { date: c })
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: r()(u.container, m(t, h)),
                children: [
                    (0, i.jsx)('div', {}),
                    ' ',
                    (0, i.jsx)('img', {
                        src: n,
                        alt: s,
                        className: r()(u.badgeImage, u.badgeImageV2)
                    }),
                    (0, i.jsxs)('div', {
                        className: u.textColumn,
                        children: [
                            (0, i.jsx)(a.xv, {
                                variant: 'text-lg/semibold',
                                className: u.badgeText,
                                children: s
                            }),
                            (0, i.jsx)(a.xv, {
                                variant: 'text-md/normal',
                                className: u.badgeText,
                                children: g
                            }),
                            (0, i.jsx)(a.xv, {
                                variant: 'text-xs/normal',
                                children: d.intl.formatToPlainString(d.t['8zbGNT'], { date: p })
                            })
                        ]
                    })
                ]
            });
};
