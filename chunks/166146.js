n.d(t, { Z: () => u }), n(388685), n(539854);
var r = n(494497),
    i = n(447941),
    o = n(618460),
    l = n(914820),
    a = n(556970),
    s = n(388032);
function u(e) {
    let t = (0, o.Z)(e),
        n = (0, i.Z)(e),
        u = t.length > 0 || n.length > 0;
    if (!u)
        return {
            shouldShow: !1,
            expiringPowerups: [],
            expiringPowerupNames: [],
            warnings: [],
        };
    let c = n.length > 0 ? s.intl.string(l.default["B3OfL/"]) : void 0,
        d = [...t.map((e) => e.title), ...(null != c ? [c] : [])],
        f = [];
    return (
        t.some((e) => e.skuId === r.A$) && f.push(s.intl.string(a.default.Sfr0Jw)),
        n.length > 0 && f.push(s.intl.string(l.default.wiungr)),
        {
            shouldShow: u,
            expiringPowerups: t,
            expiringPowerupNames: d,
            warnings: f,
        }
    );
}
