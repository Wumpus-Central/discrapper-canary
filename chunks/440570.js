l.d(t, { e: () => u });
var s = l(627968);
l(64700);
var n = l(503698),
    a = l.n(n),
    r = l(834730),
    i = l(202541),
    d = l(375708),
    c = l(577129);
function u(e) {
    let t,
        { premiumType: l, size: n, className: u, tag: o = "span", ...m } = e;
    switch (l) {
        case i.PremiumTypes.TIER_0:
            t = d.intl.string(d.t["t9uG/o"]);
            break;
        case i.PremiumTypes.TIER_1:
            t = d.intl.string(d.t.FSOz78);
            break;
        case i.PremiumTypes.TIER_2:
            t = d.intl.string(d.t.lG6a5x);
    }
    return (0, s.jsx)(r.E, { tag: o, variant: `display-${n}`, className: a()(u, c.Q), ...m, children: t });
}
