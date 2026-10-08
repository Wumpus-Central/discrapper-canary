(l.d(t, { A: () => a }), l(321073));
var n = l(582128),
    u = l(512750),
    r = l(17928),
    i = l(71393),
    o = l(645619),
    s = l(864310),
    A = l(568065),
    _ = l(652215);
let E = [
    { skuId: u.ec, threshold: 1 },
    { skuId: u.RV, threshold: 2 },
    { skuId: u.YG, threshold: 2 },
    { skuId: u.SL, threshold: 1 },
    { skuId: u.aN, threshold: 1 },
    { skuId: u.jF, threshold: 1 },
    { skuId: u.OJ, threshold: 1 },
];
function a(e) {
    let t = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        { available: l } = (0, s.A)(e),
        u = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(_.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        [a] = n.useState(() => Math.random());
    return n.useMemo(() => {
        if (null == t) return;
        let { allPowerups: e, unlockedPowerups: n } = t,
            r = [];
        for (let t of E) {
            let { skuId: i, threshold: o } = t,
                s = e[i];
            if (null == s || (u && A.o2.has(i)) || null != n[i] || !s.dependencies.every((e) => null != n[e])) continue;
            let _ = s.cost - l;
            _ > 0 && _ <= o && r.push(s);
        }
        if (r.length > 0) {
            let e = Math.floor(a * r.length);
            return r[e];
        }
    }, [t, l, u, a]);
}
