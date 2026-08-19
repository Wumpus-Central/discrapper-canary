l.d(t, { e: () => u });
var n = l(477900);
l(582128);
var r = l(503698),
    a = l.n(r),
    i = l(834730),
    s = l(202541),
    o = l(375708),
    c = l(260897);
function u(e) {
    let t,
        { premiumType: l, size: r, className: u, tag: d = "span", ...m } = e;
    switch (l) {
        case s.PremiumTypes.TIER_0:
            t = o.intl.string(o.t["t9uG/o"]);
            break;
        case s.PremiumTypes.TIER_1:
            t = o.intl.string(o.t.FSOz78);
            break;
        case s.PremiumTypes.TIER_2:
            t = o.intl.string(o.t.lG6a5x);
    }
    return (0, n.jsx)(i.E, { tag: d, variant: `display-${r}`, className: a()(u, c.Q), ...m, children: t });
}
