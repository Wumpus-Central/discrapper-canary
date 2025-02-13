n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(297700),
    l = n(471885),
    s = n(981631),
    c = n(122425);
let d = {
        [s.Eu4.NONE]: c.iconBackgroundTierNone,
        [s.Eu4.TIER_1]: c.iconBackgroundTierOne,
        [s.Eu4.TIER_2]: c.iconBackgroundTierTwo,
        [s.Eu4.TIER_3]: c.iconBackgroundTierThree
    },
    u = {
        [s.Eu4.NONE]: c.iconTierNone,
        [s.Eu4.TIER_1]: c.iconTierOne,
        [s.Eu4.TIER_2]: c.iconTierTwo,
        [s.Eu4.TIER_3]: c.iconTierThree
    };
function _(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: o, size: s } = e;
    return (0, i.jsx)(a.Z, {
        className: r()(n, d[t]),
        size: s,
        children: (0, i.jsx)(l.Z, {
            tier: t,
            className: r()(o, c.boostedGuildIconGem, u[t])
        })
    });
}
