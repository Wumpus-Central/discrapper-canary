n.d(t, { Z: () => h });
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
    p = n(954353);
function h(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: i = 'text-normal', withRewardName: h = !1, withPremiumHighlight: g = !0, quest: j } = e,
        f = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        b = s.useMemo(() => d.r.build(j.config), [j.config]),
        C = b.defaultRewardName,
        v = b.defaultRewardNameWithArticle,
        y = (0, l.Kr)(j.config),
        N = (0, u.mK)(j.config);
    return (0, r.jsxs)('div', {
        children: [
            h &&
                (0, r.jsx)(a.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: x.intl.formatToPlainString(x.t['W8/b3d'], { rewardName: f ? C : v })
                }),
            null != y &&
                (0, r.jsxs)('ul', {
                    className: o()(p.rewardsDisclosures, {
                        [p.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [p.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: o()({ [p.rewardsDisclosuresDurationPremiumExtendable]: null != N }),
                            color: i,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: x.intl.formatToPlainString(x.t.coKAb2, { rewardsDuration: y })
                        }),
                        null != N &&
                            (0, r.jsx)(a.Text, {
                                className: o()({ [p.rewardsDisclosuresItemPremiumHighlight]: g }),
                                tag: 'li',
                                color: g ? void 0 : i,
                                variant: 'text-xs/medium',
                                children: N
                            })
                    ]
                })
        ]
    });
}
