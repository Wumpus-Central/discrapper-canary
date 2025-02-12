n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(793030),
    l = n(553896),
    o = n(848572),
    c = n(787528),
    d = n(474936),
    u = n(388032),
    m = n(734073);
let g = (e) => {
        switch (e) {
            case d.JN.PREMIUM_TENURE_1_MONTH:
            case d.w7.PREMIUM_TENURE_1_MONTH:
                return m.badgeBronzeGlow;
            case d.JN.PREMIUM_TENURE_3_MONTH:
            case d.w7.PREMIUM_TENURE_3_MONTH:
                return m.badgeSilverGlow;
            case d.JN.PREMIUM_TENURE_6_MONTH:
            case d.w7.PREMIUM_TENURE_6_MONTH:
                return m.badgeGoldGlow;
            case d.JN.PREMIUM_TENURE_12_MONTH:
            case d.w7.PREMIUM_TENURE_12_MONTH:
                return m.badgePlatinumGlow;
            case d.JN.PREMIUM_TENURE_24_MONTH:
            case d.w7.PREMIUM_TENURE_24_MONTH:
                return m.badgeDiamondGlow;
            case d.JN.PREMIUM_TENURE_36_MONTH:
            case d.w7.PREMIUM_TENURE_36_MONTH:
                return m.badgeEmeraldGlow;
            case d.JN.PREMIUM_TENURE_60_MONTH:
            case d.w7.PREMIUM_TENURE_60_MONTH:
                return m.badgeRubyGlow;
            case d.JN.PREMIUM_TENURE_72_MONTH:
                return m.badgeFireGlow;
            case d.w7.PREMIUM_TENURE_72_MONTH:
                return m.badgeOpalGlow;
            default:
                return;
        }
    },
    _ = () => {
        var e;
        let t = (0, o.Rw)(),
            n = null !== (e = (0, o.GG)()) && void 0 !== e ? e : new Date();
        if (null == t) return null;
        let r = (0, c.J)(t.id),
            { id: d, badgeVersion: _, nameUnformatted: p, tenureReqNumMonths: f, hasWideArt: h } = t,
            x = u.intl.string(p),
            E = (0, l.q)(d, f);
        if (1 === _) {
            let e = t.status === o.Vq.EARNED ? t.earnedOnDate : null;
            return (0, i.jsxs)('div', {
                className: a()(m.container, g(d)),
                children: [
                    (0, i.jsx)('div', {}),
                    ' ',
                    (0, i.jsx)('img', {
                        src: r,
                        alt: x,
                        className: m.badgeImage
                    }),
                    (0, i.jsxs)('div', {
                        className: m.textColumn,
                        children: [
                            (0, i.jsx)(s.xv, {
                                variant: 'text-lg/semibold',
                                className: m.badgeText,
                                children: x
                            }),
                            (0, i.jsx)(s.xv, {
                                variant: 'text-xs/normal',
                                children: u.intl.format(u.t.zl7yMD, { date: e })
                            })
                        ]
                    })
                ]
            });
        }
        return (0, i.jsxs)('div', {
            className: a()(m.container, g(d)),
            children: [
                (0, i.jsx)('div', {}),
                ' ',
                (0, i.jsx)('img', {
                    src: r,
                    alt: x,
                    className: a()(m.badgeImage, m.badgeImageV2, { [m.wide]: h })
                }),
                (0, i.jsxs)('div', {
                    className: m.textColumn,
                    children: [
                        (0, i.jsx)(s.xv, {
                            variant: 'text-lg/semibold',
                            className: m.badgeText,
                            children: x
                        }),
                        (0, i.jsx)(s.xv, {
                            variant: 'text-md/normal',
                            className: m.badgeText,
                            children: E
                        }),
                        (0, i.jsx)(s.xv, {
                            variant: 'text-xs/normal',
                            children: u.intl.formatToPlainString(u.t['8zbGNT'], { date: n })
                        })
                    ]
                })
            ]
        });
    };
