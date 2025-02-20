n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(793030),
    l = n(553896),
    o = n(848572),
    c = n(787528),
    d = n(474936),
    u = n(388032),
    m = n(53073);
let g = (e, t) => {
        if ((null == e ? void 0 : e.status) === o.Vq.EARNED) {
            var n;
            return 2 === e.badgeVersion ? u.NW.format(u.t.Hu4jfn, { date: null != t ? t : new Date() }) : u.NW.format(u.t.zl7yMD, { date: null !== (n = e.earnedOnDate) && void 0 !== n ? n : new Date() });
        }
        return (null == e ? void 0 : e.status) === o.Vq.UPCOMING
            ? u.NW.format(u.t.E85flp, {
                  date: null != t ? t : new Date(),
                  days: e.daysLeft
              })
            : null;
    },
    p = (e) => {
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
    h = () => {
        var e;
        let t = (0, o.Rw)(),
            n = null !== (e = (0, o.GG)()) && void 0 !== e ? e : new Date();
        if (null == t) return null;
        let i = (0, c.J)(t.id),
            { id: d, badgeVersion: h, nameUnformatted: f, tenureReqNumMonths: b, hasWideArt: N } = t,
            x = u.NW.string(f),
            _ = (0, l.q)(d, b);
        return 1 === h
            ? (0, r.jsxs)('div', {
                  className: s()(m.container, p(d)),
                  children: [
                      (0, r.jsx)('div', {}),
                      ' ',
                      (0, r.jsx)('img', {
                          src: i,
                          alt: x,
                          className: m.badgeImage
                      }),
                      (0, r.jsxs)('div', {
                          className: m.textColumn,
                          children: [
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-lg/semibold',
                                  className: m.badgeText,
                                  children: x
                              }),
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-xs/normal',
                                  children: g(t)
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: s()(m.container, p(d)),
                  children: [
                      (0, r.jsx)('div', {}),
                      ' ',
                      (0, r.jsx)('img', {
                          src: i,
                          alt: x,
                          className: s()(m.badgeImage, m.badgeImageV2, {
                              [m.upcomingBadge]: t.status === o.Vq.UPCOMING,
                              [m.wide]: N
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: m.textColumn,
                          children: [
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-lg/semibold',
                                  className: m.badgeText,
                                  children: x
                              }),
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-md/normal',
                                  className: m.badgeText,
                                  children: _
                              }),
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-xs/normal',
                                  children: g(t, n)
                              })
                          ]
                      })
                  ]
              });
    };
