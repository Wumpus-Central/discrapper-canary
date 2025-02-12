n.d(t, { n: () => f }), n(47120), n(653041);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(706454),
    s = n(74538),
    l = n(937615),
    o = n(734741),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(226087);
let g = (e) => {
        let { text: t, badge: n, variant: a } = e;
        return (0, i.jsxs)(r.Text, {
            color: 'text-normal',
            variant: null != a ? a : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    _ = (e) => {
        let { text: t, variant: n } = e;
        return (0, i.jsx)(r.Text, {
            color: 'header-primary',
            variant: null != n ? n : 'text-md/semibold',
            children: t
        });
    },
    p = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(r.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(r.nn4, { children: u.intl.string(u.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(r.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(r.nn4, { children: u.intl.string(u.t.l4qZrq) })
                  ]
              });
    },
    f = (e, t, n, f, h) => {
        let x = {
                0: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['09yRKy']) }),
                    column1: (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(_, { text: s.ZP.formatPriceString(e, c.rV.MONTH) }) }),
                    column2: (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(_, { text: n ? f : s.ZP.formatPriceString(t, c.rV.MONTH) }) }),
                    withBottomBorder: !0
                },
                1: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.vaDeDQ) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                2: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.RIRtn5) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                3: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.OuItFh) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                4: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['9kRJS0']) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                5: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.zAn3dH) }),
                    column1: (0, i.jsx)(_, { text: (0, s.v9)(c.p9.TIER_0) }),
                    column2: (0, i.jsx)(_, { text: (0, s.v9)(c.p9.TIER_2) })
                },
                6: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.VwxlMz) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(_, { text: u.intl.string(u.t.XdN6KS) })
                },
                7: {
                    label: (0, i.jsx)(g, {
                        text: u.intl.formatToPlainString(u.t.nyhDp6, {
                            numBoosts: c.cb,
                            percentageOff: (0, l.T3)(a.default.locale, c.Rr / 100)
                        })
                    }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                8: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.tFbcuL) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                9: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['aR/zTk']) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                10: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.IzrZHx) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                11: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['HwNg/f']) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                12: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['y+HHLy']) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                13: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.qQxxVV) }),
                    column1: (0, i.jsx)(p, { includes: !0 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                14: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.xi0NBA) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 }),
                    withBottomBorder: !0
                },
                15: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t.MfsUHh) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                21: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['A+0H1d']) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                16: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['il8+nJ']) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 })
                },
                17: {
                    label: (0, i.jsx)(g, { text: u.intl.formatToPlainString(u.t['8crdzM'], { maxChars: d.en1 }) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 }),
                    withBottomBorder: !0
                },
                18: {
                    label: (0, i.jsx)(r.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Make Discord Yours'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                19: {
                    label: (0, i.jsx)(r.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Enjoy an Upgraded Discord'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                20: {
                    label: (0, i.jsx)(r.X6q, {
                        className: m.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Show Up the Way You Want'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                22: {
                    label: (0, i.jsx)(g, { text: u.intl.string(u.t['93xPy8']) }),
                    column1: (0, i.jsx)(p, { includes: !1 }),
                    column2: (0, i.jsx)(p, { includes: !0 }),
                    withBottomBorder: !1
                }
            },
            E = h === c.a$.FP_ONLY,
            C = [x[0], x[1], x[2], x[3], x[4], x[5], x[6], ...(E ? [] : [x[7]]), x[8], x[9], x[10], x[11], ...(E ? [] : [x[12]]), x[13], x[14], x[15], x[16], x[17]];
        return (0, o.V)() && C.push(x[22]), C;
    };
