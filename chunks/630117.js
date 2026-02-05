n.d(t, { A: () => u }), n(321073);
var r = n(512750),
    l = n(6316),
    i = n(141406),
    s = n(294726),
    o = n(333354),
    a = n(985018);
function u(e) {
    let t = (0, i.A)(e),
        n = (0, l.A)(e),
        u = t.length > 0 || n.length > 0;
    if (!u) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    let d = n.length > 0 ? a.intl.string(s.default["B3OfL/"]) : void 0,
        c = [...t.map((e) => e.title), ...(null != d ? [d] : [])],
        p = [];
    return (
        t.some((e) => e.skuId === r.FB) && p.push(a.intl.string(o.default.Sfr0Jw)),
        n.length > 0 && p.push(a.intl.string(s.default.wiungr)),
        { shouldShow: u, expiringPowerups: t, expiringPowerupNames: c, warnings: p }
    );
}
