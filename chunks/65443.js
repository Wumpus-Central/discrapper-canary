n.d(t, { Z: () => g });
var r = n(200651),
    s = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    l = n(918701),
    c = n(467628),
    u = n(373370),
    d = n(566078),
    m = n(46140),
    p = n(388032),
    x = n(954353);
function g(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: o = 'text-normal', withRewardName: g = !1, withPremiumHighlight: h = !0, quest: f } = e,
        j = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        b = s.useMemo(() => d.r.build(f.config), [f.config]),
        C = b.defaultReward.messages.name,
        N = b.defaultReward.messages.nameWithArticle,
        v = (0, l.Kr)(f.config),
        y = (0, u.mK)(f.config);
    return (0, r.jsxs)('div', {
        children: [
            g &&
                (0, r.jsx)(a.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: p.NW.formatToPlainString(p.t['W8/b3d'], { rewardName: j ? C : N })
                }),
            null != v &&
                (0, r.jsxs)('ul', {
                    className: i()(x.rewardsDisclosures, {
                        [x.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [x.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: i()({ [x.rewardsDisclosuresDurationPremiumExtendable]: null != y }),
                            color: o,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: p.NW.formatToPlainString(p.t.coKAb2, { rewardsDuration: v })
                        }),
                        null != y &&
                            (0, r.jsx)(a.Text, {
                                className: i()({ [x.rewardsDisclosuresItemPremiumHighlight]: h }),
                                tag: 'li',
                                color: h ? void 0 : o,
                                variant: 'text-xs/medium',
                                children: y
                            })
                    ]
                })
        ]
    });
}
