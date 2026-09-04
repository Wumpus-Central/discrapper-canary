l.d(t, { e: () => a });
var n = l(477900);
l(582128);
var r = l(834730),
    i = l(202541),
    s = l(375708);
function a(e) {
    let t,
        { premiumType: l, size: a, className: u, tag: c = "span", ...o } = e;
    switch (l) {
        case i.PremiumTypes.TIER_0:
            t = s.intl.string(s.t["t9uG/o"]);
            break;
        case i.PremiumTypes.TIER_1:
            t = s.intl.string(s.t.FSOz78);
            break;
        case i.PremiumTypes.TIER_2:
            t = s.intl.string(s.t.lG6a5x);
    }
    return (0, n.jsx)(r.E, { tag: c, variant: `nitro-${a}`, className: u, ...o, children: t });
}
