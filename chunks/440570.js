n.d(t, { e: () => c });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(834730),
    s = n(788868),
    o = n(985018),
    u = n(799510);
function c(e) {
    let t,
        { premiumType: n, size: l, className: c, tag: d = "span", ..._ } = e;
    switch (n) {
        case s.PremiumTypes.TIER_0:
            t = o.intl.string(o.t["t9uG/o"]);
            break;
        case s.PremiumTypes.TIER_1:
            t = o.intl.string(o.t.FSOz78);
            break;
        case s.PremiumTypes.TIER_2:
            t = o.intl.string(o.t.lG6a5x);
    }
    return (0, r.jsx)(a.E, { tag: d, variant: `display-${l}`, className: i()(c, u.Q), ..._, children: t });
}
