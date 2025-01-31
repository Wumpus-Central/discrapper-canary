n.d(i, { Z: () => _ });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(297700),
    l = n(471885),
    d = n(981631),
    c = n(201950);
let s = {
        [d.Eu4.NONE]: c.iconBackgroundTierNone,
        [d.Eu4.TIER_1]: c.iconBackgroundTierOne,
        [d.Eu4.TIER_2]: c.iconBackgroundTierTwo,
        [d.Eu4.TIER_3]: c.iconBackgroundTierThree
    },
    u = {
        [d.Eu4.NONE]: c.iconTierNone,
        [d.Eu4.TIER_1]: c.iconTierOne,
        [d.Eu4.TIER_2]: c.iconTierTwo,
        [d.Eu4.TIER_3]: c.iconTierThree
    };
function _(e) {
    let { premiumTier: i, iconBackgroundClassName: n, iconClassName: o, size: d } = e;
    return (0, t.jsx)(a.Z, {
        className: r()(n, s[i]),
        size: d,
        children: (0, t.jsx)(l.Z, {
            tier: i,
            className: r()(o, c.boostedGuildIconGem, u[i])
        })
    });
}
