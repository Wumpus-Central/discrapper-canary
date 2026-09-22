n.d(t, { e: () => i });
var l = n(477900);
n(582128);
var r = n(834730),
    s = n(202541),
    a = n(375708);
function i(e) {
    let t,
        { premiumType: n, size: i, className: o, tag: c = "span", ...d } = e;
    switch (n) {
        case s.PremiumTypes.TIER_0:
            t = a.intl.string(a.t["t9uG/o"]);
            break;
        case s.PremiumTypes.TIER_1:
            t = a.intl.string(a.t.FSOz78);
            break;
        case s.PremiumTypes.TIER_2:
            t = a.intl.string(a.t.lG6a5x);
    }
    return (0, l.jsx)(r.E, { tag: c, variant: `nitro-${i}`, className: o, ...d, children: t });
}
