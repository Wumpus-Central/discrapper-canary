n.d(t, { n: () => b }), n(47120), n(653041);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(706454),
    a = n(74538),
    l = n(937615),
    o = n(781320),
    c = n(734741),
    d = n(474936),
    u = n(981631),
    m = n(388032),
    g = n(914066);
let p = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, r.jsxs)(i.Text, {
            color: 'text-normal',
            variant: null != s ? s : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    h = (e) => {
        let { text: t, variant: n } = e;
        return (0, r.jsx)(i.Text, {
            color: 'header-primary',
            variant: null != n ? n : 'text-md/semibold',
            children: t
        });
    },
    f = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: m.NW.string(m.t['tq+6t7']) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: m.NW.string(m.t.l4qZrq) })
                  ]
              });
    },
    b = (e, t, n, b, x) => {
        let N = {
                0: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['09yRKy']) }),
                    column1: (0, r.jsx)(h, { text: a.ZP.formatPriceString(e, d.rV.MONTH) }),
                    column2: (0, r.jsx)(h, { text: n ? b : a.ZP.formatPriceString(t, d.rV.MONTH) }),
                    withBottomBorder: !0
                },
                1: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.vaDeDQ) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                2: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.RIRtn5) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                3: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.OuItFh) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                4: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['9kRJS0']) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                5: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.zAn3dH) }),
                    column1: (0, r.jsx)(h, { text: (0, a.v9)(d.p9.TIER_0) }),
                    column2: (0, r.jsx)(h, { text: (0, a.v9)(d.p9.TIER_2) })
                },
                6: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.VwxlMz) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(h, { text: m.NW.string(m.t.XdN6KS) })
                },
                7: {
                    label: (0, r.jsx)(p, {
                        text: m.NW.formatToPlainString(m.t.nyhDp6, {
                            numBoosts: d.cb,
                            percentageOff: (0, l.T3)(s.default.locale, d.Rr / 100)
                        })
                    }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                8: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.tFbcuL) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                9: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['aR/zTk']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                10: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.IzrZHx) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                11: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['HwNg/f']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                12: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['y+HHLy']) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                13: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.qQxxVV) }),
                    column1: (0, r.jsx)(f, { includes: !0 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                14: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.xi0NBA) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 }),
                    withBottomBorder: !0
                },
                15: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t.MfsUHh) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                21: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['A+0H1d']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                16: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['il8+nJ']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 })
                },
                17: {
                    label: (0, r.jsx)(p, { text: m.NW.formatToPlainString(m.t['8crdzM'], { maxChars: u.en1 }) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 }),
                    withBottomBorder: !0
                },
                18: {
                    label: (0, r.jsx)(i.X6q, {
                        className: g.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Make Discord Yours'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                19: {
                    label: (0, r.jsx)(i.X6q, {
                        className: g.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Enjoy an Upgraded Discord'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                20: {
                    label: (0, r.jsx)(i.X6q, {
                        className: g.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Show Up the Way You Want'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                22: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['93xPy8']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 }),
                    withBottomBorder: !1
                },
                23: {
                    label: (0, r.jsx)(p, { text: m.NW.string(m.t['5BJqND']) }),
                    column1: (0, r.jsx)(f, { includes: !1 }),
                    column2: (0, r.jsx)(f, { includes: !0 }),
                    withBottomBorder: !1
                }
            },
            _ = x === d.a$.FP_ONLY,
            E = [N[0], N[1], N[2], N[3], N[4], N[5], N[6], ...(_ ? [] : [N[7]]), N[8], N[9], N[10], N[11], ...(_ ? [] : [N[12]]), N[13], N[14], N[15], N[16], N[17]],
            j = (0, o.r)({ location: 'useGetPlanComparisonTableRows' }).enabled;
        return (0, c.V)() && (j && (N[22].withBottomBorder = !0), E.push(N[22])), j && E.push(N[23]), E;
    };
