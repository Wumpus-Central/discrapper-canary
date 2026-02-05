"use strict";
n.d(t, { e: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(788868),
    l = n(985018),
    u = n(465052);
function c(e) {
    let t,
        { premiumType: n, size: i, className: c, tag: d = "span", ..._ } = e;
    switch (n) {
        case o.PremiumTypes.TIER_0:
            t = l.intl.string(l.t["t9uG/o"]);
            break;
        case o.PremiumTypes.TIER_1:
            t = l.intl.string(l.t.FSOz78);
            break;
        case o.PremiumTypes.TIER_2:
            t = l.intl.string(l.t.lG6a5x);
    }
    return (0, r.jsx)(s.EYj, { tag: d, variant: `display-${i}`, className: a()(c, u.Q), ..._, children: t });
}
