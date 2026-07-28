n.d(t, { A: () => a }), n(321073);
var u = n(582128),
    l = n(512750),
    r = n(17928),
    i = n(71393),
    o = n(645619),
    s = n(864310),
    A = n(568065),
    _ = n(652215);
let E = [
    { skuId: l.ec, threshold: 1 },
    { skuId: l.RV, threshold: 2 },
    { skuId: l.YG, threshold: 2 },
    { skuId: l.SL, threshold: 1 },
    { skuId: l.aN, threshold: 1 },
    { skuId: l.jF, threshold: 1 },
    { skuId: l.OJ, threshold: 1 },
];
function a(e) {
    let t = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        { available: n } = (0, s.A)(e),
        l = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(_.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        [a] = u.useState(() => Math.random());
    return u.useMemo(() => {
        if (null == t) return;
        let { allPowerups: e, unlockedPowerups: u } = t,
            r = [];
        for (let t of E) {
            let { skuId: i, threshold: o } = t,
                s = e[i];
            if (null == s || (l && A.o2.has(i)) || null != u[i] || !s.dependencies.every((e) => null != u[e])) continue;
            let _ = s.cost - n;
            _ > 0 && _ <= o && r.push(s);
        }
        if (r.length > 0) {
            let e = Math.floor(a * r.length);
            return r[e];
        }
    }, [t, n, l, a]);
}
