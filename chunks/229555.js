n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(793030),
    a = n(553896),
    o = n(848572),
    c = n(787528),
    d = n(474936),
    u = n(388032),
    m = n(734073);
let h = (e, t) => {
        if ((null == e ? void 0 : e.status) === o.Vq.EARNED) {
            var n;
            return 2 === e.badgeVersion ? u.intl.format(u.t.Hu4jfn, { date: null != t ? t : new Date() }) : u.intl.format(u.t.zl7yMD, { date: null !== (n = e.earnedOnDate) && void 0 !== n ? n : new Date() });
        }
        return (null == e ? void 0 : e.status) === o.Vq.UPCOMING
            ? u.intl.format(u.t.E85flp, {
                  date: null != t ? t : new Date(),
                  days: e.daysLeft
              })
            : null;
    },
    g = (e) => {
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
    x = () => {
        var e;
        let t = (0, o.Rw)(),
            n = null !== (e = (0, o.GG)()) && void 0 !== e ? e : new Date();
        if (null == t) return null;
        let s = (0, c.J)(t.id),
            { id: d, badgeVersion: x, nameUnformatted: _, tenureReqNumMonths: p, hasWideArt: E } = t,
            C = u.intl.string(_),
            f = (0, a.q)(d, p);
        return 1 === x
            ? (0, i.jsxs)('div', {
                  className: r()(m.container, g(d)),
                  children: [
                      (0, i.jsx)('div', {}),
                      ' ',
                      (0, i.jsx)('img', {
                          src: s,
                          alt: C,
                          className: m.badgeImage
                      }),
                      (0, i.jsxs)('div', {
                          className: m.textColumn,
                          children: [
                              (0, i.jsx)(l.xv, {
                                  variant: 'text-lg/semibold',
                                  className: m.badgeText,
                                  children: C
                              }),
                              (0, i.jsx)(l.xv, {
                                  variant: 'text-xs/normal',
                                  children: h(t)
                              })
                          ]
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: r()(m.container, g(d)),
                  children: [
                      (0, i.jsx)('div', {}),
                      ' ',
                      (0, i.jsx)('img', {
                          src: s,
                          alt: C,
                          className: r()(m.badgeImage, m.badgeImageV2, {
                              [m.upcomingBadge]: t.status === o.Vq.UPCOMING,
                              [m.wide]: E
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: m.textColumn,
                          children: [
                              (0, i.jsx)(l.xv, {
                                  variant: 'text-lg/semibold',
                                  className: m.badgeText,
                                  children: C
                              }),
                              (0, i.jsx)(l.xv, {
                                  variant: 'text-md/normal',
                                  className: m.badgeText,
                                  children: f
                              }),
                              (0, i.jsx)(l.xv, {
                                  variant: 'text-xs/normal',
                                  children: h(t, n)
                              })
                          ]
                      })
                  ]
              });
    };
