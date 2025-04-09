n.d(t, { a: () => h }), n(388685);
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
    m = n(835826);
let g = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, r.jsxs)(i.Text, {
            color: 'none',
            variant: null != s ? s : 'text-md/medium',
            className: m.rowLabelText,
            children: [t, ' ', n]
        });
    },
    p = (e) => {
        let { includes: t, isTier0: n } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? m.basicCheckMark : m.premiumCheckMark,
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
    h = (e, t, n, i) => {
        let m = (0, o.r)({ location: 'PlanComparisonTable' }).enabled,
            h = {
                0: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.string(u.t['09yRKy']),
                        variant: 'text-lg/bold'
                    }),
                    tier0Column: (0, r.jsx)(g, { text: a.ZP.formatPriceString(e, c.rV.MONTH) }),
                    tier2Column: (0, r.jsx)(g, { text: n ? i : a.ZP.formatPriceString(t, c.rV.MONTH) }),
                    withBottomBorder: !0,
                    withBottomMargin: !0
                },
                18: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.string(u.t.Ij3Zmp),
                        variant: 'text-lg/bold'
                    }),
                    withBottomBorder: !1
                },
                11: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['svn/YW']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                8: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.ID5B6e) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                14: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.PBUrx8) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 }),
                    withBottomMargin: !0
                },
                19: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.string(u.t.Wme3nZ),
                        variant: 'text-lg/bold'
                    }),
                    withBottomBorder: !1
                },
                1: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.LrUABg) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                2: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.RIRtn5) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                3: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.Uukj4u) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                13: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.NIKDqK) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                10: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['5OAKh4']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 }),
                    withBottomMargin: !0
                },
                20: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.string(u.t['6b3ydH']),
                        variant: 'text-lg/bold'
                    }),
                    withBottomBorder: !1
                },
                5: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.ufhQCw) }),
                    tier0Column: (0, r.jsx)(g, { text: (0, a.v9)(c.p9.TIER_0) }),
                    tier2Column: (0, r.jsx)(g, { text: (0, a.v9)(c.p9.TIER_2) })
                },
                12: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.qQxxVV) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                4: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['9kRJS0']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !0,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                22: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['5BJqND']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                6: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.VwxlMz) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                7: {
                    label: (0, r.jsx)(g, {
                        text: u.NW.formatToPlainString(u.t.nyhDp6, {
                            numBoosts: c.cb,
                            percentageOff: (0, l.T3)(s.default.locale, c.Rr / 100)
                        })
                    }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                17: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['93xPy8']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                9: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.IzrZHx) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                21: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t.Rj1Qys) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                16: {
                    label: (0, r.jsx)(g, { text: u.NW.formatToPlainString(u.t['8crdzM'], { maxChars: d.en1 }) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                },
                15: {
                    label: (0, r.jsx)(g, { text: u.NW.string(u.t['il8+nJ']) }),
                    tier0Column: (0, r.jsx)(p, {
                        includes: !1,
                        isTier0: !0
                    }),
                    tier2Column: (0, r.jsx)(p, { includes: !0 })
                }
            };
        return [h[0], h[18], h[11], h[8], h[14], h[19], h[1], h[2], h[3], h[13], h[10], h[20], h[5], h[12], h[4], ...(m ? [h[22]] : []), h[6], h[7], h[17], h[9], h[21], h[16], h[15]];
    };
