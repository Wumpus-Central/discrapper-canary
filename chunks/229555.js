n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(793030),
    a = n(553896),
    o = n(848572),
    c = n(787528),
    d = n(474936),
    u = n(388032),
    m = n(536564);
let g = (e, t) =>
        (null == e ? void 0 : e.status) === o.Vq.EARNED
            ? u.intl.format(u.t.Hu4jfn, { date: null != t ? t : new Date() })
            : (null == e ? void 0 : e.status) === o.Vq.UPCOMING
              ? u.intl.format(u.t.E85flp, {
                    date: null != t ? t : new Date(),
                    days: e.daysLeft
                })
              : null,
    p = (e) => {
        switch (e) {
            case d.VU.PREMIUM_TENURE_1_MONTH:
                return m.badgeBronzeGlow;
            case d.VU.PREMIUM_TENURE_3_MONTH:
                return m.badgeSilverGlow;
            case d.VU.PREMIUM_TENURE_6_MONTH:
                return m.badgeGoldGlow;
            case d.VU.PREMIUM_TENURE_12_MONTH:
                return m.badgePlatinumGlow;
            case d.VU.PREMIUM_TENURE_24_MONTH:
                return m.badgeDiamondGlow;
            case d.VU.PREMIUM_TENURE_36_MONTH:
                return m.badgeEmeraldGlow;
            case d.VU.PREMIUM_TENURE_60_MONTH:
                return m.badgeRubyGlow;
            case d.VU.PREMIUM_TENURE_72_MONTH:
                return m.badgeOpalGlow;
            default:
                return;
        }
    },
    h = () => {
        var e;
        let t = (0, o.Rw)(),
            n = null != (e = (0, o.GG)()) ? e : new Date();
        if (null == t) return null;
        let r = (0, c.J)(t.id),
            { id: d, nameUnformatted: h, tenureReqNumMonths: f, hasWideArt: b } = t,
            _ = u.intl.string(h),
            x = (0, a.q)(d, f);
        return (0, i.jsxs)('div', {
            className: s()(m.container, p(d)),
            children: [
                (0, i.jsx)('div', {}),
                ' ',
                (0, i.jsx)('img', {
                    src: r,
                    alt: _,
                    className: s()(m.badgeImage, m.badgeImageV2, {
                        [m.upcomingBadge]: t.status === o.Vq.UPCOMING,
                        [m.wide]: b
                    })
                }),
                (0, i.jsxs)('div', {
                    className: m.textColumn,
                    children: [
                        (0, i.jsx)(l.xv, {
                            variant: 'text-lg/semibold',
                            className: m.badgeText,
                            children: _
                        }),
                        (0, i.jsx)(l.xv, {
                            variant: 'text-md/normal',
                            className: m.badgeText,
                            children: x
                        }),
                        (0, i.jsx)(l.xv, {
                            variant: 'text-xs/normal',
                            children: g(t, n)
                        })
                    ]
                })
            ]
        });
    };
