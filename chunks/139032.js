n.d(t, { A: () => A }), n(321073);
var i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(71393),
    r = n(645619),
    o = n(832547),
    c = n(864310),
    d = n(568065),
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
        { available: n } = (0, c.A)(e),
        l = (0, s.bG)([a.A], () => a.A.getGuild(e)?.features.has(u.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        A = (0, o.M)("useBoostToUnlockFeaturedPowerup"),
        [_] = i.useState(() => Math.random());
    return i.useMemo(() => {
        if (null == t || !A) return;
        let { allPowerups: e, unlockedPowerups: i } = t,
            s = [];
        for (let t of h) {
            let { skuId: a, threshold: r } = t,
                o = e[a];
            if (null == o || (l && d.o2.has(a)) || null != i[a] || !o.dependencies.every((e) => null != i[e])) continue;
            let c = o.cost - n;
            c > 0 && c <= r && s.push(o);
        }
        if (s.length > 0) {
            let e = Math.floor(_ * s.length);
            return s[e];
        }
    }, [t, n, l, A, _]);
}
