n.d(t, { A: () => A });
var i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(71393),
    r = n(645619),
    o = n(832547),
    d = n(864310),
    c = n(568065),
    u = n(652215);
let h = [
    { skuId: l.ec, threshold: 1 },
    { skuId: l.RV, threshold: 2 },
    { skuId: l.YG, threshold: 2 },
    { skuId: l.SL, threshold: 1 },
    { skuId: l.aN, threshold: 1 },
    { skuId: l.jF, threshold: 1 },
    { skuId: l.OJ, threshold: 1 },
];
function A(e) {
    let t = (0, s.bG)([r.A], () => r.A.getStateForGuild(e)),
        { available: n } = (0, d.A)(e),
        l = (0, s.bG)([a.A], () => a.A.getGuild(e)?.features.has(u.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        A = (0, o.M)("useBoostToUnlockFeaturedPowerup");
    return i.useMemo(() => {
        if (null == t || !A) return;
        let { allPowerups: e, unlockedPowerups: i } = t;
        for (let t of h) {
            let { skuId: s, threshold: a } = t,
                r = e[s];
            if (null == r || (l && c.o2.has(s)) || null != i[s] || !r.dependencies.every((e) => null != i[e])) continue;
            let o = r.cost - n;
            if (o > 0 && o <= a) return r;
        }
    }, [t, n, l, A]);
}
