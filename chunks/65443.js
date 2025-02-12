n.d(t, { Z: () => g });
var s = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(481060),
    o = n(918701),
    d = n(467628),
    u = n(373370),
    c = n(566078),
    m = n(46140),
    x = n(388032),
    h = n(547992);
function g(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-normal', textColor: l = 'text-normal', withRewardName: g = !1, withPremiumHighlight: C = !0, quest: p } = e,
        j = (0, d.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        T = i.useMemo(() => c.r.build(p.config), [p.config]),
        v = T.defaultReward.messages.name,
        E = T.defaultReward.messages.nameWithArticle,
        f = (0, o.Kr)(p.config),
        N = (0, u.mK)(p.config);
    return (0, s.jsxs)('div', {
        children: [
            g &&
                (0, s.jsx)(r.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: x.intl.formatToPlainString(x.t['W8/b3d'], { rewardName: j ? v : E })
                }),
            null != f &&
                (0, s.jsxs)('ul', {
                    className: a()(h.rewardsDisclosures, {
                        [h.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [h.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, s.jsx)(r.Text, {
                            className: a()({ [h.rewardsDisclosuresDurationPremiumExtendable]: null != N }),
                            color: l,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: x.intl.formatToPlainString(x.t.coKAb2, { rewardsDuration: f })
                        }),
                        null != N &&
                            (0, s.jsx)(r.Text, {
                                className: a()({ [h.rewardsDisclosuresItemPremiumHighlight]: C }),
                                tag: 'li',
                                color: C ? void 0 : l,
                                variant: 'text-xs/medium',
                                children: N
                            })
                    ]
                })
        ]
    });
}
