n.d(t, {
    n: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i,
    r,
    a = n(200651);
n(192379);
var s = n(481060),
    l = n(706454),
    o = n(74538),
    c = n(937615),
    d = n(734741),
    u = n(474936),
    g = n(981631),
    m = n(388032),
    f = n(808112);
let p = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, a.jsxs)(s.Text, {
            color: 'text-normal',
            variant: null != i ? i : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    _ = (e) => {
        let { text: t, variant: n } = e;
        return (0, a.jsx)(s.Text, {
            color: 'header-primary',
            variant: null != n ? n : 'text-md/semibold',
            children: t
        });
    },
    h = (e) => {
        let { includes: t } = e;
        return t
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: f.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, a.jsx)(s.HiddenVisually, { children: m.intl.string(m.t['tq+6t7']) })
                  ]
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: f.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, a.jsx)(s.HiddenVisually, { children: m.intl.string(m.t.l4qZrq) })
                  ]
              });
    };
((r = i || (i = {}))[(r.PRICE = 0)] = 'PRICE'), (r[(r.EMOJI = 1)] = 'EMOJI'), (r[(r.STICKER = 2)] = 'STICKER'), (r[(r.CUSTOM_APP_ICONS = 3)] = 'CUSTOM_APP_ICONS'), (r[(r.SUPER_REACTIONS = 4)] = 'SUPER_REACTIONS'), (r[(r.UPLOAD = 5)] = 'UPLOAD'), (r[(r.STREAMING = 6)] = 'STREAMING'), (r[(r.BOOSTS = 7)] = 'BOOSTS'), (r[(r.PROFILE_THEMES = 8)] = 'PROFILE_THEMES'), (r[(r.SERVER_PROFILE = 9)] = 'SERVER_PROFILE'), (r[(r.SHOP_DISCOUNTS = 10)] = 'SHOP_DISCOUNTS'), (r[(r.CLIENT_THEME = 11)] = 'CLIENT_THEME'), (r[(r.BADGE = 12)] = 'BADGE'), (r[(r.VIDEO_BACKGROUND = 13)] = 'VIDEO_BACKGROUND'), (r[(r.CUSTOM_SOUNDS_ANYWHERE = 14)] = 'CUSTOM_SOUNDS_ANYWHERE'), (r[(r.CUSTOM_ENTRY_SOUNDS = 15)] = 'CUSTOM_ENTRY_SOUNDS'), (r[(r.SERVER_LIMIT = 16)] = 'SERVER_LIMIT'), (r[(r.MESSAGE_LENGTH = 17)] = 'MESSAGE_LENGTH'), (r[(r.CUSTOMIZATION_CATEGORY = 18)] = 'CUSTOMIZATION_CATEGORY'), (r[(r.FEATURE_UPGRADES_CATEGORY = 19)] = 'FEATURE_UPGRADES_CATEGORY'), (r[(r.PERSONALIZATION_CATEGORY = 20)] = 'PERSONALIZATION_CATEGORY'), (r[(r.AVATAR_AND_BANNER = 21)] = 'AVATAR_AND_BANNER'), (r[(r.REFERRAL_PROGRAM = 22)] = 'REFERRAL_PROGRAM');
let x = (e, t, n, i, r) => {
    let x = {
            0: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['09yRKy']) }),
                column1: (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(_, { text: o.ZP.formatPriceString(e, u.rV.MONTH) }) }),
                column2: (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(_, { text: n ? i : o.ZP.formatPriceString(t, u.rV.MONTH) }) }),
                withBottomBorder: !0
            },
            1: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.vaDeDQ) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            2: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.RIRtn5) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            3: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.OuItFh) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            4: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['9kRJS0']) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            5: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.zAn3dH) }),
                column1: (0, a.jsx)(_, { text: (0, o.v9)(u.p9.TIER_0) }),
                column2: (0, a.jsx)(_, { text: (0, o.v9)(u.p9.TIER_2) })
            },
            6: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.VwxlMz) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(_, { text: m.intl.string(m.t.XdN6KS) })
            },
            7: {
                label: (0, a.jsx)(p, {
                    text: m.intl.formatToPlainString(m.t.nyhDp6, {
                        numBoosts: u.cb,
                        percentageOff: (0, c.T3)(l.default.locale, u.Rr / 100)
                    })
                }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            8: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.tFbcuL) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            9: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['aR/zTk']) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            10: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.IzrZHx) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            11: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['HwNg/f']) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            12: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['y+HHLy']) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            13: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.qQxxVV) }),
                column1: (0, a.jsx)(h, { includes: !0 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            14: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.xi0NBA) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 }),
                withBottomBorder: !0
            },
            15: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t.MfsUHh) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            21: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['A+0H1d']) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            16: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['il8+nJ']) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 })
            },
            17: {
                label: (0, a.jsx)(p, { text: m.intl.formatToPlainString(m.t['8crdzM'], { maxChars: g.en1 }) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 }),
                withBottomBorder: !0
            },
            18: {
                label: (0, a.jsx)(s.Heading, {
                    className: f.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Make Discord Yours'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            19: {
                label: (0, a.jsx)(s.Heading, {
                    className: f.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Enjoy an Upgraded Discord'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            20: {
                label: (0, a.jsx)(s.Heading, {
                    className: f.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Show Up the Way You Want'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            22: {
                label: (0, a.jsx)(p, { text: m.intl.string(m.t['93xPy8']) }),
                column1: (0, a.jsx)(h, { includes: !1 }),
                column2: (0, a.jsx)(h, { includes: !0 }),
                withBottomBorder: !1
            }
        },
        E = r === u.a$.FP_ONLY,
        b = [x[0], x[1], x[2], x[3], x[4], x[5], x[6], ...(E ? [] : [x[7]]), x[8], x[9], x[10], x[11], ...(E ? [] : [x[12]]), x[13], x[14], x[15], x[16], x[17]];
    return (0, d.V)() && b.push(x[22]), b;
};
