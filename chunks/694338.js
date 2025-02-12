n.d(t, { a: () => _ });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(706454),
    s = n(74538),
    l = n(937615),
    o = n(474936),
    c = n(981631),
    d = n(388032),
    u = n(395943);
let m = (e) => {
        let { text: t, badge: n, variant: a } = e;
        return (0, i.jsxs)(r.Text, {
            color: 'none',
            variant: null != a ? a : 'text-md/medium',
            className: u.rowLabelText,
            children: [t, ' ', n]
        });
    },
    g = (e) => {
        let { includes: t, isTier0: n } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(r.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? u.basicCheckMark : u.premiumCheckMark,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(r.nn4, { children: d.intl.string(d.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(r.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: u.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(r.nn4, { children: d.intl.string(d.t.l4qZrq) })
                  ]
              });
    },
    _ = (e, t, n, r) => {
        let u = {
            0: {
                label: (0, i.jsx)(m, {
                    text: d.intl.string(d.t['09yRKy']),
                    variant: 'text-lg/bold'
                }),
                tier0Column: (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(m, { text: s.ZP.formatPriceString(e, o.rV.MONTH) }) }),
                tier2Column: (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(m, { text: n ? r : s.ZP.formatPriceString(t, o.rV.MONTH) }) }),
                withBottomBorder: !0,
                withBottomMargin: !0
            },
            18: {
                label: (0, i.jsx)(m, {
                    text: d.intl.string(d.t.Ij3Zmp),
                    variant: 'text-lg/bold'
                }),
                withBottomBorder: !1
            },
            11: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t['svn/YW']) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            8: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.ID5B6e) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            14: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.PBUrx8) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 }),
                withBottomMargin: !0
            },
            19: {
                label: (0, i.jsx)(m, {
                    text: d.intl.string(d.t.Wme3nZ),
                    variant: 'text-lg/bold'
                }),
                withBottomBorder: !1
            },
            1: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.s186xc) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            2: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.RIRtn5) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            3: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.Uukj4u) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            13: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.NIKDqK) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            10: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t['5OAKh4']) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 }),
                withBottomMargin: !0
            },
            20: {
                label: (0, i.jsx)(m, {
                    text: d.intl.string(d.t['6b3ydH']),
                    variant: 'text-lg/bold'
                }),
                withBottomBorder: !1
            },
            5: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.zAn3dH) }),
                tier0Column: (0, i.jsx)(m, { text: (0, s.v9)(o.p9.TIER_0) }),
                tier2Column: (0, i.jsx)(m, { text: (0, s.v9)(o.p9.TIER_2) })
            },
            12: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.qQxxVV) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            4: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t['9kRJS0']) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !0,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            6: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.VwxlMz) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            7: {
                label: (0, i.jsx)(m, {
                    text: d.intl.formatToPlainString(d.t.nyhDp6, {
                        numBoosts: o.cb,
                        percentageOff: (0, l.T3)(a.default.locale, o.Rr / 100)
                    })
                }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            17: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t['93xPy8']) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            9: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.IzrZHx) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            21: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t.Rj1Qys) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            16: {
                label: (0, i.jsx)(m, { text: d.intl.formatToPlainString(d.t['8crdzM'], { maxChars: c.en1 }) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            },
            15: {
                label: (0, i.jsx)(m, { text: d.intl.string(d.t['il8+nJ']) }),
                tier0Column: (0, i.jsx)(g, {
                    includes: !1,
                    isTier0: !0
                }),
                tier2Column: (0, i.jsx)(g, { includes: !0 })
            }
        };
        return [0, 18, 11, 8, 14, 19, 1, 2, 3, 13, 10, 20, 5, 12, 4, 6, 7, 17, 9, 21, 16, 15].map((e) => u[e]);
    };
