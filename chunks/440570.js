l.d(t, { e: () => i });
var s = l(477900);
l(582128);
var n = l(834730),
    a = l(202541),
    r = l(375708);
function i(e) {
    let t,
        { premiumType: l, size: i, className: c, tag: d = "span", ...u } = e;
    switch (l) {
        case a.PremiumTypes.TIER_0:
            t = r.intl.string(r.t["t9uG/o"]);
            break;
        case a.PremiumTypes.TIER_1:
            t = r.intl.string(r.t.FSOz78);
            break;
        case a.PremiumTypes.TIER_2:
            t = r.intl.string(r.t.lG6a5x);
    }
    return (0, s.jsx)(n.E, { tag: d, variant: `nitro-${i}`, className: c, ...u, children: t });
}
