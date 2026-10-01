n.d(e, { A: () => p });
var l = n(582128),
    i = n(202163),
    a = n(989441),
    r = n(802516),
    s = n(49381),
    o = n(778591),
    c = n(853022),
    u = n(375708);
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
function p(t) {
    let { gameRecord: e } = (0, i.A)(t);
    return (0, l.useMemo)(() => {
        if (null == e) return f;
        let t = new Set(A),
            n = new Map();
        for (let l of e.thirdPartySkus) {
            let e = l.distributor;
            null != l.id && t.has(e) && !n.has(e) && n.set(e, l.id);
        }
        return A.flatMap((t) => {
            let e = n.get(t),
                l = d[t];
            return null == e || null == l ? [] : [{ ctaConfig: l, skuId: e }];
        });
    }, [e]);
}
