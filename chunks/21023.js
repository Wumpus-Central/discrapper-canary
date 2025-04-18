n.d(t, { n: () => h }), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(706454),
    a = n(74538),
    l = n(937615),
    o = n(474936),
    c = n(981631),
    d = n(388032),
    u = n(809649);
let m = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, r.jsxs)(i.Text, {
            color: 'text-normal',
            variant: null != s ? s : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    g = (e) => {
        let { text: t, variant: n } = e;
        return (0, r.jsx)(i.Text, {
            color: 'header-primary',
            variant: null != n ? n : 'text-md/semibold',
            children: t
        });
    },
    p = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: u.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: d.NW.string(d.t['tq+6t7']) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: u.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(i.nn4, { children: d.NW.string(d.t.l4qZrq) })
                  ]
              });
    },
    h = (e, t, n, h, f) => {
        let b = {
                0: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['09yRKy']) }),
                    column1: (0, r.jsx)(g, { text: a.ZP.formatPriceString(e, o.rV.MONTH) }),
                    column2: (0, r.jsx)(g, { text: n ? h : a.ZP.formatPriceString(t, o.rV.MONTH) }),
                    withBottomBorder: !0
                },
                1: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.vaDeDQ) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                2: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.RIRtn5) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                3: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.OuItFh) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                4: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['9kRJS0']) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                5: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.ufhQCw) }),
                    column1: (0, r.jsx)(g, { text: (0, a.v9)(o.p9.TIER_0) }),
                    column2: (0, r.jsx)(g, { text: (0, a.v9)(o.p9.TIER_2) })
                },
                6: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.VwxlMz) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(g, { text: d.NW.string(d.t.XdN6KS) })
                },
                7: {
                    label: (0, r.jsx)(m, {
                        text: d.NW.formatToPlainString(d.t.nyhDp6, {
                            numBoosts: o.cb,
                            percentageOff: (0, l.T3)(s.default.locale, o.Rr / 100)
                        })
                    }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                8: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.tFbcuL) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                9: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['aR/zTk']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                10: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.IzrZHx) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                11: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['HwNg/f']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                12: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['y+HHLy']) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                13: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.qQxxVV) }),
                    column1: (0, r.jsx)(p, { includes: !0 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                14: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.xi0NBA) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 }),
                    withBottomBorder: !0
                },
                15: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t.MfsUHh) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                21: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['A+0H1d']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                16: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['il8+nJ']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 })
                },
                17: {
                    label: (0, r.jsx)(m, { text: d.NW.formatToPlainString(d.t['8crdzM'], { maxChars: c.en1 }) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 }),
                    withBottomBorder: !0
                },
                18: {
                    label: (0, r.jsx)(i.X6q, {
                        className: u.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Make Discord Yours'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                19: {
                    label: (0, r.jsx)(i.X6q, {
                        className: u.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Enjoy an Upgraded Discord'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                20: {
                    label: (0, r.jsx)(i.X6q, {
                        className: u.__invalid_textColor,
                        variant: 'display-sm',
                        children: 'Show Up the Way You Want'
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1
                },
                22: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['93xPy8']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 }),
                    withBottomBorder: !0
                },
                23: {
                    label: (0, r.jsx)(m, { text: d.NW.string(d.t['5BJqND']) }),
                    column1: (0, r.jsx)(p, { includes: !1 }),
                    column2: (0, r.jsx)(p, { includes: !0 }),
                    withBottomBorder: !1
                }
            },
            _ = f === o.a$.FP_ONLY;
        return [b[0], b[1], b[2], b[3], b[4], b[5], b[6], ...(_ ? [] : [b[7]]), b[8], b[9], b[10], b[11], ...(_ ? [] : [b[12]]), b[13], b[14], b[15], b[16], b[17], b[22], b[23]];
    };
