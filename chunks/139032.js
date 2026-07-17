n.d(t, { A: () => a }), n(321073);
var l = n(64700),
    u = n(512750),
    r = n(17928),
    i = n(71393),
    o = n(645619),
    s = n(864310),
    A = n(568065),
    _ = n(652215);
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
        { available: n } = (0, s.A)(e),
        u = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(_.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        [a] = l.useState(() => Math.random());
    return l.useMemo(() => {
        if (null == t) return;
        let { allPowerups: e, unlockedPowerups: l } = t,
            r = [];
        for (let t of E) {
            let { skuId: i, threshold: o } = t,
                s = e[i];
            if (null == s || (u && A.o2.has(i)) || null != l[i] || !s.dependencies.every((e) => null != l[e])) continue;
            let _ = s.cost - n;
            _ > 0 && _ <= o && r.push(s);
        }
        if (r.length > 0) {
            let e = Math.floor(a * r.length);
            return r[e];
        }
    }, [t, n, u, a]);
}
