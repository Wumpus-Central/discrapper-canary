n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(297700),
    l = n(471885),
    c = n(981631),
    s = n(483566);
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
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: o, size: c } = e;
    return (0, i.jsx)(a.Z, {
        className: r()(n, d[t]),
        size: c,
        children: (0, i.jsx)(l.Z, {
            tier: t,
            color: 'currentColor',
            className: r()(o, s.boostedGuildIconGem, u[t])
        })
    });
}
