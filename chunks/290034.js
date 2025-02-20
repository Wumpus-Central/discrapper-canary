n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(297700),
    s = n(471885),
    a = n(981631),
    u = n(721945);
let d = {
        [a.Eu4.NONE]: u.iconBackgroundTierNone,
        [a.Eu4.TIER_1]: u.iconBackgroundTierOne,
        [a.Eu4.TIER_2]: u.iconBackgroundTierTwo,
        [a.Eu4.TIER_3]: u.iconBackgroundTierThree
    },
    c = {
        [a.Eu4.NONE]: u.iconTierNone,
        [a.Eu4.TIER_1]: u.iconTierOne,
        [a.Eu4.TIER_2]: u.iconTierTwo,
        [a.Eu4.TIER_3]: u.iconTierThree
    };
function h(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: r, size: a } = e;
    return (0, i.jsx)(o.Z, {
        className: l()(n, d[t]),
        size: a,
        children: (0, i.jsx)(s.Z, {
            tier: t,
            className: l()(r, u.boostedGuildIconGem, c[t])
        })
    });
}
