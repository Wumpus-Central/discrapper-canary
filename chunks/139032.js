"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(64700),
    s = n(512750),
    l = n(311907),
    r = n(71393),
    a = n(645619),
    o = n(832547),
    c = n(864310),
    d = n(568065),
    u = n(652215);
let h = [
    { skuId: s.ec, threshold: 1 },
    { skuId: s.RV, threshold: 2 },
    { skuId: s.YG, threshold: 2 },
    { skuId: s.SL, threshold: 1 },
    { skuId: s.aN, threshold: 1 },
    { skuId: s.jF, threshold: 1 },
    { skuId: s.OJ, threshold: 1 },
];
function A(e) {
    let t = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        { available: n } = (0, c.A)(e),
        s = (0, l.bG)([r.A], () => r.A.getGuild(e)?.features.has(u.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0),
        A = (0, o.M)("useBoostToUnlockFeaturedPowerup"),
        [p] = i.useState(() => Math.random());
    return i.useMemo(() => {
        if (null == t || !A) return;
        let { allPowerups: e, unlockedPowerups: i } = t,
            l = [];
        for (let t of h) {
            let { skuId: r, threshold: a } = t,
                o = e[r];
            if (null == o || (s && d.o2.has(r)) || null != i[r] || !o.dependencies.every((e) => null != i[e])) continue;
            let c = o.cost - n;
            c > 0 && c <= a && l.push(o);
        }
        if (l.length > 0) {
            let e = Math.floor(p * l.length);
            return l[e];
        }
    }, [t, n, s, A, p]);
}
