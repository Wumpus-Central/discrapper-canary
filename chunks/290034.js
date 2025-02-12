n.d(i, { Z: () => _ });
var o = n(200651);
n(192379);
var t = n(120356),
    a = n.n(t),
    l = n(297700),
    r = n(471885),
    c = n(981631),
    s = n(30863);
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
function _(e) {
    let { premiumTier: i, iconBackgroundClassName: n, iconClassName: t, size: c } = e;
    return (0, o.jsx)(l.Z, {
        className: a()(n, d[i]),
        size: c,
        children: (0, o.jsx)(r.Z, {
            tier: i,
            className: a()(t, s.boostedGuildIconGem, u[i])
        })
    });
}
