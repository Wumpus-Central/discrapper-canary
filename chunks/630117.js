n.d(t, { A: () => d }), n(321073);
var r = n(512750),
    i = n(6316),
    l = n(141406),
    s = n(576709),
    a = n(853513),
    o = n(985018);
function d(e) {
    let t = (0, l.A)(e),
        n = (0, i.A)(e),
        d = t.length > 0 || n.length > 0;
    if (!d) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    let u = n.length > 0 ? o.intl.string(s.default["B3OfL/"]) : void 0,
        c = [...t.map((e) => e.title), ...(null != u ? [u] : [])],
        _ = [];
    return (
        t.some((e) => e.skuId === r.FB) && _.push(o.intl.string(a.default.Sfr0Jw)),
        n.length > 0 && _.push(o.intl.string(s.default.wiungr)),
        { shouldShow: d, expiringPowerups: t, expiringPowerupNames: c, warnings: _ }
    );
}
