l.d(t, { e: () => o });
var n = l(477900);
l(582128);
var r = l(503698),
    i = l.n(r),
    s = l(834730),
    a = l(202541),
    c = l(375708),
    u = l(797918);
function o(e) {
    let t,
        { premiumType: l, size: r, className: o, tag: d = "span", ...m } = e;
    switch (l) {
        case a.PremiumTypes.TIER_0:
            t = c.intl.string(c.t["t9uG/o"]);
            break;
        case a.PremiumTypes.TIER_1:
            t = c.intl.string(c.t.FSOz78);
            break;
        case a.PremiumTypes.TIER_2:
            t = c.intl.string(c.t.lG6a5x);
    }
    return (0, n.jsx)(s.E, { tag: d, variant: `display-${r}`, className: i()(o, u.Q), ...m, children: t });
}
