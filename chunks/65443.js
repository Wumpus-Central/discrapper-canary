n.d(t, { Z: () => p });
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(918701),
    c = n(467628),
    u = n(373370),
    d = n(566078),
    m = n(46140),
    x = n(388032),
    g = n(954353);
function p(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: i = 'text-normal', withRewardName: p = !1, withPremiumHighlight: h = !0, quest: j } = e,
        f = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        b = s.useMemo(() => d.r.build(j.config), [j.config]),
        C = b.defaultReward.messages.name,
        v = b.defaultReward.messages.nameWithArticle,
        y = (0, l.Kr)(j.config),
        O = (0, u.mK)(j.config);
    return (0, r.jsxs)('div', {
        children: [
            p &&
                (0, r.jsx)(a.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: x.intl.formatToPlainString(x.t['W8/b3d'], { rewardName: f ? C : v })
                }),
            null != y &&
                (0, r.jsxs)('ul', {
                    className: o()(g.rewardsDisclosures, {
                        [g.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [g.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: o()({ [g.rewardsDisclosuresDurationPremiumExtendable]: null != O }),
                            color: i,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: x.intl.formatToPlainString(x.t.coKAb2, { rewardsDuration: y })
                        }),
                        null != O &&
                            (0, r.jsx)(a.Text, {
                                className: o()({ [g.rewardsDisclosuresItemPremiumHighlight]: h }),
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
