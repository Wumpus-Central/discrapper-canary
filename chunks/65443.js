n.d(t, { Z: () => g });
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(918701),
    c = n(467628),
    u = n(373370),
    d = n(566078),
    m = n(46140),
    p = n(388032),
    x = n(954353);
function g(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: i = 'text-normal', withRewardName: g = !1, withPremiumHighlight: h = !0, quest: f } = e,
        j = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        b = s.useMemo(() => d.r.build(f.config), [f.config]),
        C = b.defaultReward.messages.name,
        v = b.defaultReward.messages.nameWithArticle,
        y = (0, l.Kr)(f.config),
        O = (0, u.mK)(f.config);
    return (0, r.jsxs)('div', {
        children: [
            g &&
                (0, r.jsx)(a.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: p.intl.formatToPlainString(p.t['W8/b3d'], { rewardName: j ? C : v })
                }),
            null != y &&
                (0, r.jsxs)('ul', {
                    className: o()(x.rewardsDisclosures, {
                        [x.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [x.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: o()({ [x.rewardsDisclosuresDurationPremiumExtendable]: null != O }),
                            color: i,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: p.intl.formatToPlainString(p.t.coKAb2, { rewardsDuration: y })
                        }),
                        null != O &&
                            (0, r.jsx)(a.Text, {
                                className: o()({ [x.rewardsDisclosuresItemPremiumHighlight]: h }),
                                tag: 'li',
                                color: h ? void 0 : i,
                                variant: 'text-xs/medium',
                                children: O
                            })
                    ]
                })
        ]
    });
}
