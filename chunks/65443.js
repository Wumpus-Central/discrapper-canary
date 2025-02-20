n.d(t, { Z: () => g });
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(918701),
    c = n(467628),
    u = n(373370),
    d = n(566078),
    m = n(46140),
    p = n(388032),
    x = n(810653);
function g(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: i = 'text-normal', withRewardName: g = !1, withPremiumHighlight: h = !0, quest: f } = e,
        j = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        v = s.useMemo(() => d.r.build(f.config), [f.config]),
        b = v.defaultReward.messages.name,
        C = v.defaultReward.messages.nameWithArticle,
        N = (0, a.Kr)(f.config),
        E = (0, u.mK)(f.config);
    return (0, r.jsxs)('div', {
        children: [
            g &&
                (0, r.jsx)(l.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: p.NW.formatToPlainString(p.t['W8/b3d'], { rewardName: j ? b : C })
                }),
            null != N &&
                (0, r.jsxs)('ul', {
                    className: o()(x.rewardsDisclosures, {
                        [x.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [x.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: o()({ [x.rewardsDisclosuresDurationPremiumExtendable]: null != E }),
                            color: i,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: p.NW.formatToPlainString(p.t.coKAb2, { rewardsDuration: N })
                        }),
                        null != E &&
                            (0, r.jsx)(l.Text, {
                                className: o()({ [x.rewardsDisclosuresItemPremiumHighlight]: h }),
                                tag: 'li',
                                color: h ? void 0 : i,
                                variant: 'text-xs/medium',
                                children: E
                            })
                    ]
                })
        ]
    });
}
