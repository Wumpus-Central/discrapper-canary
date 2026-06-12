l.d(t, { e: () => u });
var s = l(627968);
l(64700);
var a = l(503698),
    n = l.n(a),
    i = l(834730),
    r = l(788868),
    d = l(375708),
    c = l(577129);
function u(e) {
    let t,
        { premiumType: l, size: a, className: u, tag: o = "span", ...m } = e;
    switch (l) {
        case r.PremiumTypes.TIER_0:
            t = d.intl.string(d.t["t9uG/o"]);
            break;
        case r.PremiumTypes.TIER_1:
            t = d.intl.string(d.t.FSOz78);
            break;
        case r.PremiumTypes.TIER_2:
            t = d.intl.string(d.t.lG6a5x);
    }
    return (0, s.jsx)(i.E, { tag: o, variant: `display-${a}`, className: n()(u, c.Q), ...m, children: t });
}
