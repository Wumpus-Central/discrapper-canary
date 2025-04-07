n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(297700),
    a = n(471885),
    u = n(981631),
    s = n(306641);
let c = {
        [u.Eu4.NONE]: s.iconBackgroundTierNone,
        [u.Eu4.TIER_1]: s.iconBackgroundTierOne,
        [u.Eu4.TIER_2]: s.iconBackgroundTierTwo,
        [u.Eu4.TIER_3]: s.iconBackgroundTierThree
    },
    d = {
        [u.Eu4.NONE]: s.iconTierNone,
        [u.Eu4.TIER_1]: s.iconTierOne,
        [u.Eu4.TIER_2]: s.iconTierTwo,
        [u.Eu4.TIER_3]: s.iconTierThree
    };
function p(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: i, size: u } = e;
    return (0, r.jsx)(o.Z, {
        className: l()(n, c[t]),
        size: u,
        children: (0, r.jsx)(a.Z, {
            tier: t,
            color: 'currentColor',
            className: l()(i, s.boostedGuildIconGem, d[t])
        })
    });
}
