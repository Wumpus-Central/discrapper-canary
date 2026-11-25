n.d(t, { A: () => p });
var l = n(582128),
    i = n(202163),
    a = n(989441),
    r = n(802516),
    s = n(49381),
    o = n(778591),
    u = n(853022),
    c = n(792996);
let d = {
        [a.D.XBOX_GAME_PASS]: {
            distributor: a.D.XBOX_GAME_PASS,
            getLabel: () => c.intl.string(c.t["s7+3um"]),
            getStoreName: () => c.intl.string(c.t["QpN/Iz"]),
            icon: r.XboxNeutralIcon,
            getStoreUrl: u.jA,
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [a.D.STEAM]: {
            distributor: a.D.STEAM,
            getLabel: () => c.intl.string(c.t.L1N2gh),
            getStoreName: () => c.intl.string(c.t.FsANs4),
            icon: s.SteamNeutralIcon,
            getStoreUrl: o.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    m = [a.D.XBOX_GAME_PASS, a.D.STEAM],
    A = [];
function p(e) {
    let { gameRecord: t } = (0, i.Ay)(e);
    return (0, l.useMemo)(() => {
        if (null == t) return A;
        let e = new Set(m),
            n = new Map();
        for (let l of t.thirdPartySkus) {
            let t = l.distributor;
            null != l.id && e.has(t) && !n.has(t) && n.set(t, l.id);
        }
        return m.flatMap((e) => {
            let t = n.get(e),
                l = d[e];
            return null == t || null == l ? [] : [{ ctaConfig: l, skuId: t }];
        });
    }, [t]);
}
