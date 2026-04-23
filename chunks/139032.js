n.d(t, { A: () => A }), n(321073);
var i = n(64700),
    l = n(512750),
    s = n(17928),
    r = n(71393),
    a = n(645619),
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
    let t = (0, s.bG)([a.A], () => a.A.getStateForGuild(e)),
        { available: n } = (0, d.A)(e),
        l = (0, s.bG)([r.A], () => r.A.getGuild(e)?.features.has(u.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        A = (0, o.M)("useBoostToUnlockFeaturedPowerup"),
        [_] = i.useState(() => Math.random());
    return i.useMemo(() => {
        if (null == t || !A) return;
        let { allPowerups: e, unlockedPowerups: i } = t,
            s = [];
        for (let t of h) {
            let { skuId: r, threshold: a } = t,
                o = e[r];
            if (null == o || (l && c.o2.has(r)) || null != i[r] || !o.dependencies.every((e) => null != i[e])) continue;
            let d = o.cost - n;
            d > 0 && d <= a && s.push(o);
        }
        if (s.length > 0) {
            let e = Math.floor(_ * s.length);
            return s[e];
        }
    }, [t, n, l, A, _]);
}
