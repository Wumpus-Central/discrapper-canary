n.d(t, { A: () => d }), n(321073);
var u = n(64700),
    l = n(512750),
    r = n(17928),
    i = n(71393),
    o = n(645619),
    s = n(832547),
    E = n(864310),
    _ = n(568065),
    A = n(652215);
let a = [
    { skuId: l.ec, threshold: 1 },
    { skuId: l.RV, threshold: 2 },
    { skuId: l.YG, threshold: 2 },
    { skuId: l.SL, threshold: 1 },
    { skuId: l.aN, threshold: 1 },
    { skuId: l.jF, threshold: 1 },
    { skuId: l.OJ, threshold: 1 },
];
function d(e) {
    let t = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        { available: n } = (0, E.A)(e),
        l = (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(A.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        d = (0, s.M)("useBoostToUnlockFeaturedPowerup"),
        [G] = u.useState(() => Math.random());
    return u.useMemo(() => {
        if (null == t || !d) return;
        let { allPowerups: e, unlockedPowerups: u } = t,
            r = [];
        for (let t of a) {
            let { skuId: i, threshold: o } = t,
                s = e[i];
            if (null == s || (l && _.o2.has(i)) || null != u[i] || !s.dependencies.every((e) => null != u[e])) continue;
            let E = s.cost - n;
            E > 0 && E <= o && r.push(s);
        }
        if (r.length > 0) {
            let e = Math.floor(G * r.length);
            return r[e];
        }
    }, [t, n, l, d, G]);
}
