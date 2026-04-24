l.d(t, { e: () => u });
var n = l(627968);
l(64700);
var a = l(503698),
    r = l.n(a),
    s = l(834730),
    i = l(788868),
    c = l(985018),
    o = l(799510);
function u(e) {
    let t,
        { premiumType: l, size: a, className: u, tag: d = "span", ...m } = e;
    switch (l) {
        case i.PremiumTypes.TIER_0:
            t = c.intl.string(c.t["t9uG/o"]);
            break;
        case i.PremiumTypes.TIER_1:
            t = c.intl.string(c.t.FSOz78);
            break;
        case i.PremiumTypes.TIER_2:
            t = c.intl.string(c.t.lG6a5x);
    }
    return (0, n.jsx)(s.E, { tag: d, variant: `display-${a}`, className: r()(u, o.Q), ...m, children: t });
}
