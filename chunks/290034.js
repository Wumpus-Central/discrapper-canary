n.d(i, {
    Z: function () {
        return g;
    }
});
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(297700),
    a = n(471885),
    c = n(981631),
    s = n(201950);
let d = {
        [c.Eu4.NONE]: s.iconBackgroundTierNone,
        [c.Eu4.TIER_1]: s.iconBackgroundTierOne,
        [c.Eu4.TIER_2]: s.iconBackgroundTierTwo,
        [c.Eu4.TIER_3]: s.iconBackgroundTierThree
    },
    u = {
        [c.Eu4.NONE]: s.iconTierNone,
        [c.Eu4.TIER_1]: s.iconTierOne,
        [c.Eu4.TIER_2]: s.iconTierTwo,
        [c.Eu4.TIER_3]: s.iconTierThree
    };
function g(e) {
    let { premiumTier: i, iconBackgroundClassName: n, iconClassName: o, size: c } = e;
    return (0, t.jsx)(l.Z, {
        className: r()(n, d[i]),
        size: c,
        children: (0, t.jsx)(a.Z, {
            tier: i,
            className: r()(o, s.boostedGuildIconGem, u[i])
        })
    });
}
