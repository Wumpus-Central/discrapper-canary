n.d(t, {
    a: function () {
        return x;
    }
});
var i,
    r,
    s = n(200651);
n(192379);
var a = n(481060),
    l = n(706454),
    o = n(74538),
    c = n(937615),
    d = n(474936),
    u = n(981631),
    m = n(388032),
    g = n(637444);
let h = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, s.jsxs)(a.Text, {
            color: 'none',
            variant: null != i ? i : 'text-md/medium',
            className: g.rowLabelText,
            children: [t, ' ', n]
        });
    },
    p = (e) => {
        let { includes: t, isTier0: n } = e;
        return t
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(a.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? g.basicCheckMark : g.premiumCheckMark,
                          'aria-hidden': !0
                      }),
                      (0, s.jsx)(a.HiddenVisually, { children: m.intl.string(m.t['tq+6t7']) })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(a.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, s.jsx)(a.HiddenVisually, { children: m.intl.string(m.t.l4qZrq) })
                  ]
              });
    };
((i = r || (r = {}))[(i.PRICE = 0)] = 'PRICE'), (i[(i.EMOJI = 1)] = 'EMOJI'), (i[(i.STICKER = 2)] = 'STICKER'), (i[(i.CUSTOM_APP_ICONS = 3)] = 'CUSTOM_APP_ICONS'), (i[(i.SUPER_REACTIONS = 4)] = 'SUPER_REACTIONS'), (i[(i.UPLOAD = 5)] = 'UPLOAD'), (i[(i.STREAMING = 6)] = 'STREAMING'), (i[(i.BOOSTS = 7)] = 'BOOSTS'), (i[(i.SERVER_PROFILE = 8)] = 'SERVER_PROFILE'), (i[(i.SHOP_DISCOUNTS = 9)] = 'SHOP_DISCOUNTS'), (i[(i.CLIENT_THEME = 10)] = 'CLIENT_THEME'), (i[(i.BADGE = 11)] = 'BADGE'), (i[(i.VIDEO_BACKGROUND = 12)] = 'VIDEO_BACKGROUND'), (i[(i.CUSTOM_SOUNDS_ANYWHERE = 13)] = 'CUSTOM_SOUNDS_ANYWHERE'), (i[(i.CUSTOM_ENTRY_SOUNDS = 14)] = 'CUSTOM_ENTRY_SOUNDS'), (i[(i.SERVER_LIMIT = 15)] = 'SERVER_LIMIT'), (i[(i.MESSAGE_LENGTH = 16)] = 'MESSAGE_LENGTH'), (i[(i.REFERRAL_PROGRAM = 17)] = 'REFERRAL_PROGRAM'), (i[(i.SHOW_YOUR_STYLE_HEADER = 18)] = 'SHOW_YOUR_STYLE_HEADER'), (i[(i.YOUR_SPACE_HEADER = 19)] = 'YOUR_SPACE_HEADER'), (i[(i.NO_LIMITS_HEADER = 20)] = 'NO_LIMITS_HEADER'), (i[(i.EARLY_ACCESS = 21)] = 'EARLY_ACCESS');
let x = (e, t, n, i) => {
    let r = {
        0: {
            label: (0, s.jsx)(h, {
                text: m.intl.string(m.t['09yRKy']),
                variant: 'text-lg/bold'
            }),
            tier0Column: (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(h, { text: o.ZP.formatPriceString(e, d.rV.MONTH) }) }),
            tier2Column: (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(h, { text: n ? i : o.ZP.formatPriceString(t, d.rV.MONTH) }) }),
            withBottomBorder: !0,
            withBottomMargin: !0
        },
        18: {
            label: (0, s.jsx)(h, {
                text: m.intl.string(m.t.Ij3Zmp),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        11: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t['svn/YW']) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        8: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.ID5B6e) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        14: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.PBUrx8) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 }),
            withBottomMargin: !0
        },
        19: {
            label: (0, s.jsx)(h, {
                text: m.intl.string(m.t.Wme3nZ),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        1: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.s186xc) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        2: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.RIRtn5) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        3: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.Uukj4u) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        13: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.NIKDqK) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        10: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t['5OAKh4']) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 }),
            withBottomMargin: !0
        },
        20: {
            label: (0, s.jsx)(h, {
                text: m.intl.string(m.t['6b3ydH']),
                variant: 'text-lg/bold'
            }),
            withBottomBorder: !1
        },
        5: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.zAn3dH) }),
            tier0Column: (0, s.jsx)(h, { text: (0, o.v9)(d.p9.TIER_0) }),
            tier2Column: (0, s.jsx)(h, { text: (0, o.v9)(d.p9.TIER_2) })
        },
        12: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.qQxxVV) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        4: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t['9kRJS0']) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !0,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        6: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.VwxlMz) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        7: {
            label: (0, s.jsx)(h, {
                text: m.intl.formatToPlainString(m.t.nyhDp6, {
                    numBoosts: d.cb,
                    percentageOff: (0, c.T3)(l.default.locale, d.Rr / 100)
                })
            }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        17: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t['93xPy8']) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        9: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.IzrZHx) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        21: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t.Rj1Qys) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        16: {
            label: (0, s.jsx)(h, { text: m.intl.formatToPlainString(m.t['8crdzM'], { maxChars: u.en1 }) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        },
        15: {
            label: (0, s.jsx)(h, { text: m.intl.string(m.t['il8+nJ']) }),
            tier0Column: (0, s.jsx)(p, {
                includes: !1,
                isTier0: !0
            }),
            tier2Column: (0, s.jsx)(p, { includes: !0 })
        }
    };
    return [0, 18, 11, 8, 14, 19, 1, 2, 3, 13, 10, 20, 5, 12, 4, 6, 7, 17, 9, 21, 16, 15].map((e) => r[e]);
};
