n.d(i, { Z: () => _ });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(297700),
    l = n(471885),
    c = n(981631),
    d = n(30863);
let s = {
        [c.Eu4.NONE]: d.iconBackgroundTierNone,
        [c.Eu4.TIER_1]: d.iconBackgroundTierOne,
        [c.Eu4.TIER_2]: d.iconBackgroundTierTwo,
        [c.Eu4.TIER_3]: d.iconBackgroundTierThree
    },
    u = {
        [c.Eu4.NONE]: d.iconTierNone,
        [c.Eu4.TIER_1]: d.iconTierOne,
        [c.Eu4.TIER_2]: d.iconTierTwo,
        [c.Eu4.TIER_3]: d.iconTierThree
    };
function _(e) {
    let { premiumTier: i, iconBackgroundClassName: n, iconClassName: o, size: c } = e;
    return (0, t.jsx)(a.Z, {
        className: r()(n, s[i]),
        size: c,
        children: (0, t.jsx)(l.Z, {
            tier: i,
            className: r()(o, d.boostedGuildIconGem, u[i])
        })
    });
}
