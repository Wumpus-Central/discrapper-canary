n.d(t, {
    a: function () {
        return _;
    }
});
var i,
    r,
    a = n(200651);
n(192379);
var s = n(481060),
    l = n(706454),
    o = n(74538),
    c = n(937615),
    d = n(474936),
    u = n(981631),
    g = n(388032),
    m = n(637444);
let f = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, a.jsxs)(s.Text, {
            color: 'none',
            variant: null != i ? i : 'text-md/medium',
            className: m.rowLabelText,
            children: [t, ' ', n]
        });
    },
    p = (e) => {
        let { includes: t, isTier0: n } = e;
        return t
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? m.basicCheckMark : m.premiumCheckMark,
                          'aria-hidden': !0
                      }),
                      (0, a.jsx)(s.HiddenVisually, { children: g.intl.string(g.t['tq+6t7']) })
                  ]
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, a.jsx)(s.HiddenVisually, { children: g.intl.string(g.t.l4qZrq) })
                  ]
              });
    };
((i = r || (r = {}))[(i.PRICE = 0)] = 'PRICE'), (i[(i.EMOJI = 1)] = 'EMOJI'), (i[(i.STICKER = 2)] = 'STICKER'), (i[(i.CUSTOM_APP_ICONS = 3)] = 'CUSTOM_APP_ICONS'), (i[(i.SUPER_REACTIONS = 4)] = 'SUPER_REACTIONS'), (i[(i.UPLOAD = 5)] = 'UPLOAD'), (i[(i.STREAMING = 6)] = 'STREAMING'), (i[(i.BOOSTS = 7)] = 'BOOSTS'), (i[(i.SERVER_PROFILE = 8)] = 'SERVER_PROFILE'), (i[(i.SHOP_DISCOUNTS = 9)] = 'SHOP_DISCOUNTS'), (i[(i.CLIENT_THEME = 10)] = 'CLIENT_THEME'), (i[(i.BADGE = 11)] = 'BADGE'), (i[(i.VIDEO_BACKGROUND = 12)] = 'VIDEO_BACKGROUND'), (i[(i.CUSTOM_SOUNDS_ANYWHERE = 13)] = 'CUSTOM_SOUNDS_ANYWHERE'), (i[(i.CUSTOM_ENTRY_SOUNDS = 14)] = 'CUSTOM_ENTRY_SOUNDS'), (i[(i.SERVER_LIMIT = 15)] = 'SERVER_LIMIT'), (i[(i.MESSAGE_LENGTH = 16)] = 'MESSAGE_LENGTH'), (i[(i.REFERRAL_PROGRAM = 17)] = 'REFERRAL_PROGRAM'), (i[(i.SHOW_YOUR_STYLE_HEADER = 18)] = 'SHOW_YOUR_STYLE_HEADER'), (i[(i.YOUR_SPACE_HEADER = 19)] = 'YOUR_SPACE_HEADER'), (i[(i.NO_LIMITS_HEADER = 20)] = 'NO_LIMITS_HEADER'), (i[(i.EARLY_ACCESS = 21)] = 'EARLY_ACCESS');
let _ = (e, t, n, i) => {
    let r = {
        0: {
            label: (0, a.jsx)(f, {
                text: g.intl.string(g.t['09yRKy']),
                variant: 'text-lg/bold'
            }),
            tier0Column: (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(f, { text: o.ZP.formatPriceString(e, d.rV.MONTH) }) }),
            tier2Column: (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(f, { text: n ? i : o.ZP.formatPriceString(t, d.rV.MONTH) }) }),
            withBottomBorder: !0,
            withBottomMargin: !0
        },
        18: {
            label: (0, a.jsx)(f, {
                text: g.intl.string(g.t.Ij3Zmp),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        11: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t['svn/YW']) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        8: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.ID5B6e) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        14: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.PBUrx8) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 }),
            withBottomMargin: !0
        },
        19: {
            label: (0, a.jsx)(f, {
                text: g.intl.string(g.t.Wme3nZ),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        1: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.s186xc) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        2: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.RIRtn5) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        3: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.Uukj4u) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        13: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.NIKDqK) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        10: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t['5OAKh4']) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 }),
            withBottomMargin: !0
        },
        20: {
            label: (0, a.jsx)(f, {
                text: g.intl.string(g.t['6b3ydH']),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        5: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.zAn3dH) }),
            tier0Column: (0, a.jsx)(f, { text: (0, o.v9)(d.p9.TIER_0) }),
            tier2Column: (0, a.jsx)(f, { text: (0, o.v9)(d.p9.TIER_2) })
        },
        12: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.qQxxVV) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        4: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t['9kRJS0']) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        6: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.VwxlMz) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        7: {
            label: (0, a.jsx)(f, {
                text: g.intl.formatToPlainString(g.t.nyhDp6, {
                    numBoosts: d.cb,
                    percentageOff: (0, c.T3)(l.default.locale, d.Rr / 100)
                })
            }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        17: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t['93xPy8']) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        9: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.IzrZHx) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        21: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t.Rj1Qys) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        16: {
            label: (0, a.jsx)(f, { text: g.intl.formatToPlainString(g.t['8crdzM'], { maxChars: u.en1 }) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        },
        15: {
            label: (0, a.jsx)(f, { text: g.intl.string(g.t['il8+nJ']) }),
            tier0Column: (0, a.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, a.jsx)(p, { includes: !0 })
        }
    };
    return [0, 18, 11, 8, 14, 19, 1, 2, 3, 13, 10, 20, 5, 12, 4, 6, 7, 17, 9, 21, 16, 15].map((e) => r[e]);
};
