e.d(n, { A: () => g });
var l = e(582128),
    i = e(202163),
    a = e(989441),
    r = e(802516),
    s = e(49381),
    o = e(778591),
    c = e(853022),
    u = e(105292);
let d = {
        [a.D.XBOX_GAME_PASS]: {
            distributor: a.D.XBOX_GAME_PASS,
            getLabel: () => u.intl.string(u.t["s7+3um"]),
            getStoreName: () => u.intl.string(u.t["QpN/Iz"]),
            icon: r.Y,
            getStoreUrl: c.jA,
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [a.D.STEAM]: {
            distributor: a.D.STEAM,
            getLabel: () => u.intl.string(u.t.L1N2gh),
            getStoreName: () => u.intl.string(u.t.FsANs4),
            icon: s.N,
            getStoreUrl: o.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    A = [a.D.XBOX_GAME_PASS, a.D.STEAM],
    f = [];
function g(t) {
    let { gameRecord: n } = (0, i.Ay)(t);
    return (0, l.useMemo)(() => {
        if (null == n) return f;
        let t = new Set(A),
            e = new Map();
        for (let l of n.thirdPartySkus) {
            let n = l.distributor;
            null != l.id && t.has(n) && !e.has(n) && e.set(n, l.id);
        }
        return A.flatMap((t) => {
            let n = e.get(t),
                l = d[t];
            return null == n || null == l ? [] : [{ ctaConfig: l, skuId: n }];
        });
    }, [n]);
}
