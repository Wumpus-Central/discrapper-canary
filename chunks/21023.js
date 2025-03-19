n.d(t, { n: () => f }), n(47120), n(653041);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(706454),
    a = n(74538),
    l = n(937615),
    o = n(781320),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(914066);
let g = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, r.jsxs)(i.Text, {
            color: 'text-normal',
            variant: null != s ? s : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    p = (e) => {
        let { text: t, variant: n } = e;
        return (0, r.jsx)(i.Text, {
            color: 'header-primary',
            variant: null != n ? n : 'text-md/semibold',
            children: t
        });
    },
    h = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: u.NW.string(u.t['tq+6t7']) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: u.NW.string(u.t.l4qZrq) })
                  ]
              });
    },
    f = (e, t, n, f, x) => {
        let N = (0, o.r)({ location: 'useGetPlanComparisonTableRows' }).enabled,
            b = {
                0: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['09yRKy']) }),
                    column1: (0, r.jsx)(p, { text: a.ZP.formatPriceString(e, c.rV.MONTH) }),
                    column2: (0, r.jsx)(p, { text: n ? f : a.ZP.formatPriceString(t, c.rV.MONTH) }),
                    withBottomBorder: !0
                },
                1: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.vaDeDQ) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                2: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.RIRtn5) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                3: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.OuItFh) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                4: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['9kRJS0']) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                5: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.zAn3dH) }),
                    column1: (0, r.jsx)(p, { text: (0, a.v9)(c.p9.TIER_0) }),
                    column2: (0, r.jsx)(p, { text: (0, a.v9)(c.p9.TIER_2) })
                },
                6: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.VwxlMz) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(p, { text: u.NW.string(u.t.XdN6KS) })
                },
                7: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.formatToPlainString(u.t.nyhDp6, {
                            numBoosts: c.cb,
                            percentageOff: (0, l.T3)(s.default.locale, c.Rr / 100)
                        })
                    }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                8: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.tFbcuL) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                9: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['aR/zTk']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                10: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.IzrZHx) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                11: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['HwNg/f']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                12: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['y+HHLy']) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                13: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.qQxxVV) }),
                    column1: (0, r.jsx)(h, { includes: !0 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                14: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.xi0NBA) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 }),
                    withBottomBorder: !0
                },
                15: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.MfsUHh) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                21: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['A+0H1d']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                16: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['il8+nJ']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 })
                },
                17: {
                    label: (0, r.jsx)(g, { text: u.NW.formatToPlainString(u.t['8crdzM'], { maxChars: d.en1 }) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 }),
                    withBottomBorder: !0
                },
                18: {
                    label: (0, r.jsx)(i.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Make Discord Yours'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                19: {
                    label: (0, r.jsx)(i.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Enjoy an Upgraded Discord'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                20: {
                    label: (0, r.jsx)(i.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Show Up the Way You Want'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                22: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['93xPy8']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 }),
                    withBottomBorder: N
                },
                23: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['5BJqND']) }),
                    column1: (0, r.jsx)(h, { includes: !1 }),
                    column2: (0, r.jsx)(h, { includes: !0 }),
                    withBottomBorder: !1
                }
            },
            _ = x === c.a$.FP_ONLY,
            E = [b[0], b[1], b[2], b[3], b[4], b[5], b[6], ...(_ ? [] : [b[7]]), b[8], b[9], b[10], b[11], ...(_ ? [] : [b[12]]), b[13], b[14], b[15], b[16], b[17], b[22]];
        return N && E.push(b[23]), E;
    };
