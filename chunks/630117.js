l.d(t, {
    A: () => u,
}),
    l(896048),
    l(321073);
var r = l(512750),
    n = l(6316),
    i = l(141406),
    s = l(294726),
    o = l(333354),
    a = l(985018);

function u(e) {
    let t = (0, i.A)(e),
        l = (0, n.A)(e),
        u = t.length > 0 || l.length > 0;
    if (!u)
        return {
            shouldShow: !1,
            expiringPowerups: [],
            expiringPowerupNames: [],
            warnings: [],
        };
    let d = l.length > 0 ? a.intl.string(s.default["B3OfL/"]) : void 0,
        c = [...t.map((e) => e.title), ...(null != d ? [d] : [])],
        f = [];
    return (
        t.some((e) => e.skuId === r.FB) && f.push(a.intl.string(o.default.Sfr0Jw)),
        l.length > 0 && f.push(a.intl.string(s.default.wiungr)),
        {
            shouldShow: u,
            expiringPowerups: t,
            expiringPowerupNames: c,
            warnings: f,
        }
    );
}
