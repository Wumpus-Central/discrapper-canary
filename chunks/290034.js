n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(297700),
    s = n(471885),
    l = n(981631),
    c = n(306641);
let u = {
        [l.Eu4.NONE]: c.iconBackgroundTierNone,
        [l.Eu4.TIER_1]: c.iconBackgroundTierOne,
        [l.Eu4.TIER_2]: c.iconBackgroundTierTwo,
        [l.Eu4.TIER_3]: c.iconBackgroundTierThree
    },
    d = {
        [l.Eu4.NONE]: c.iconTierNone,
        [l.Eu4.TIER_1]: c.iconTierOne,
        [l.Eu4.TIER_2]: c.iconTierTwo,
        [l.Eu4.TIER_3]: c.iconTierThree
    };
function f(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: i, size: l } = e;
    return (0, r.jsx)(a.Z, {
        className: o()(n, u[t]),
        size: l,
        children: (0, r.jsx)(s.Z, {
            tier: t,
            color: 'currentColor',
            className: o()(i, c.boostedGuildIconGem, d[t])
        })
    });
}
