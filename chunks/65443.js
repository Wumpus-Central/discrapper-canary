n.d(t, { Z: () => h });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    l = n(918701),
    c = n(467628),
    u = n(373370),
    d = n(566078),
    m = n(46140),
    x = n(388032),
    p = n(954353);
function h(e) {
    let { orientation: t = 'horizontal', headingColor: n = 'text-default', textColor: o = 'text-default', withRewardName: h = !1, withPremiumHighlight: g = !0, quest: j } = e,
        f = (0, c.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        C = s.useMemo(() => d.r.build(j.config), [j.config]),
        b = C.defaultRewardName,
        v = C.defaultRewardNameWithArticle,
        y = (0, l.Kr)(j.config),
        N = (0, u.mK)(j.config);
    return (0, r.jsxs)('div', {
        children: [
            h &&
                (0, r.jsx)(a.Text, {
                    color: n,
                    variant: 'text-sm/normal',
                    children: x.intl.formatToPlainString(x.t['W8/b3d'], { rewardName: f ? b : v })
                }),
            null != y &&
                (0, r.jsxs)('ul', {
                    className: i()(p.rewardsDisclosures, {
                        [p.rewardsDisclosuresHorizontal]: 'horizontal' === t,
                        [p.rewardsDisclosuresStack]: 'stack' === t
                    }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: i()({ [p.rewardsDisclosuresDurationPremiumExtendable]: null != N }),
                            color: o,
                            tag: 'li',
                            variant: 'text-xs/medium',
                            children: x.intl.formatToPlainString(x.t.coKAb2, { rewardsDuration: y })
                        }),
                        null != N &&
                            (0, r.jsx)(a.Text, {
                                className: i()({ [p.rewardsDisclosuresItemPremiumHighlight]: g }),
                                tag: 'li',
                                color: g ? void 0 : o,
                                variant: 'text-xs/medium',
                                children: N
                            })
                    ]
                })
        ]
    });
}
