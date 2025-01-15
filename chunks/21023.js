n.d(t, {
    n: function () {
        return _;
    }
}),
    n(47120),
    n(653041);
var i,
    s,
    r = n(200651);
n(192379);
var a = n(481060),
    l = n(706454),
    o = n(74538),
    c = n(937615),
    d = n(734741),
    u = n(474936),
    m = n(981631),
    g = n(388032),
    h = n(808112);
let p = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, r.jsxs)(a.Text, {
            color: 'text-normal',
            variant: null != i ? i : 'text-sm/normal',
            children: [t, ' ', n]
        });
    },
    x = (e) => {
        let { text: t, variant: n } = e;
        return (0, r.jsx)(a.Text, {
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
                      (0, r.jsx)(a.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: h.checkmarkIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(a.HiddenVisually, { children: g.intl.string(g.t['tq+6t7']) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: h.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, r.jsx)(a.HiddenVisually, { children: g.intl.string(g.t.l4qZrq) })
                  ]
              });
    };
((s = i || (i = {}))[(s.PRICE = 0)] = 'PRICE'), (s[(s.EMOJI = 1)] = 'EMOJI'), (s[(s.STICKER = 2)] = 'STICKER'), (s[(s.CUSTOM_APP_ICONS = 3)] = 'CUSTOM_APP_ICONS'), (s[(s.SUPER_REACTIONS = 4)] = 'SUPER_REACTIONS'), (s[(s.UPLOAD = 5)] = 'UPLOAD'), (s[(s.STREAMING = 6)] = 'STREAMING'), (s[(s.BOOSTS = 7)] = 'BOOSTS'), (s[(s.PROFILE_THEMES = 8)] = 'PROFILE_THEMES'), (s[(s.SERVER_PROFILE = 9)] = 'SERVER_PROFILE'), (s[(s.SHOP_DISCOUNTS = 10)] = 'SHOP_DISCOUNTS'), (s[(s.CLIENT_THEME = 11)] = 'CLIENT_THEME'), (s[(s.BADGE = 12)] = 'BADGE'), (s[(s.VIDEO_BACKGROUND = 13)] = 'VIDEO_BACKGROUND'), (s[(s.CUSTOM_SOUNDS_ANYWHERE = 14)] = 'CUSTOM_SOUNDS_ANYWHERE'), (s[(s.CUSTOM_ENTRY_SOUNDS = 15)] = 'CUSTOM_ENTRY_SOUNDS'), (s[(s.SERVER_LIMIT = 16)] = 'SERVER_LIMIT'), (s[(s.MESSAGE_LENGTH = 17)] = 'MESSAGE_LENGTH'), (s[(s.CUSTOMIZATION_CATEGORY = 18)] = 'CUSTOMIZATION_CATEGORY'), (s[(s.FEATURE_UPGRADES_CATEGORY = 19)] = 'FEATURE_UPGRADES_CATEGORY'), (s[(s.PERSONALIZATION_CATEGORY = 20)] = 'PERSONALIZATION_CATEGORY'), (s[(s.AVATAR_AND_BANNER = 21)] = 'AVATAR_AND_BANNER'), (s[(s.REFERRAL_PROGRAM = 22)] = 'REFERRAL_PROGRAM');
let _ = (e, t, n, i, s) => {
    let _ = {
            0: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['09yRKy']) }),
                column1: (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(x, { text: o.ZP.formatPriceString(e, u.rV.MONTH) }) }),
                column2: (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(x, { text: n ? i : o.ZP.formatPriceString(t, u.rV.MONTH) }) }),
                withBottomBorder: !0
            },
            1: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.vaDeDQ) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            2: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.RIRtn5) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            3: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.OuItFh) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            4: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['9kRJS0']) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            5: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.zAn3dH) }),
                column1: (0, r.jsx)(x, { text: (0, o.v9)(u.p9.TIER_0) }),
                column2: (0, r.jsx)(x, { text: (0, o.v9)(u.p9.TIER_2) })
            },
            6: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.VwxlMz) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(x, { text: g.intl.string(g.t.XdN6KS) })
            },
            7: {
                label: (0, r.jsx)(p, {
                    text: g.intl.formatToPlainString(g.t.nyhDp6, {
                        numBoosts: u.cb,
                        percentageOff: (0, c.T3)(l.default.locale, u.Rr / 100)
                    })
                }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            8: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.tFbcuL) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            9: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['aR/zTk']) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            10: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.IzrZHx) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            11: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['HwNg/f']) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            12: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['y+HHLy']) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            13: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.qQxxVV) }),
                column1: (0, r.jsx)(f, { includes: !0 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            14: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.xi0NBA) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 }),
                withBottomBorder: !0
            },
            15: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t.MfsUHh) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            21: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['A+0H1d']) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            16: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['il8+nJ']) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 })
            },
            17: {
                label: (0, r.jsx)(p, { text: g.intl.formatToPlainString(g.t['8crdzM'], { maxChars: m.en1 }) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 }),
                withBottomBorder: !0
            },
            18: {
                label: (0, r.jsx)(a.Heading, {
                    className: h.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Make Discord Yours'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            19: {
                label: (0, r.jsx)(a.Heading, {
                    className: h.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Enjoy an Upgraded Discord'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            20: {
                label: (0, r.jsx)(a.Heading, {
                    className: h.__invalid_textColor,
                    variant: 'display-sm',
                    children: 'Show Up the Way You Want'
                }),
                column1: null,
                column2: null,
                withBottomBorder: !1
            },
            22: {
                label: (0, r.jsx)(p, { text: g.intl.string(g.t['93xPy8']) }),
                column1: (0, r.jsx)(f, { includes: !1 }),
                column2: (0, r.jsx)(f, { includes: !0 }),
                withBottomBorder: !1
            }
        },
        E = s === u.a$.FP_ONLY,
        C = [_[0], _[1], _[2], _[3], _[4], _[5], _[6], ...(E ? [] : [_[7]]), _[8], _[9], _[10], _[11], ...(E ? [] : [_[12]]), _[13], _[14], _[15], _[16], _[17]];
    return (0, d.V)() && C.push(_[22]), C;
};
