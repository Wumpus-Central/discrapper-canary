"use strict";
n.d(t, { A: () => A });
var i = n(582128),
    r = n(202163),
    a = n(989441),
    s = n(802516),
    l = n(49381),
    o = n(778591),
    d = n(853022),
    c = n(375708);
let u = {
        [a.D.XBOX_GAME_PASS]: {
            distributor: a.D.XBOX_GAME_PASS,
            getLabel: () => c.intl.string(c.t["s7+3um"]),
            getStoreName: () => c.intl.string(c.t["QpN/Iz"]),
            icon: s.Y,
            getStoreUrl: d.jA,
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [a.D.STEAM]: {
            distributor: a.D.STEAM,
            getLabel: () => c.intl.string(c.t.L1N2gh),
            getStoreName: () => c.intl.string(c.t.FsANs4),
            icon: l.N,
            getStoreUrl: o.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    _ = [a.D.XBOX_GAME_PASS, a.D.STEAM],
    E = [];
function A(e) {
    let { gameRecord: t } = (0, r.A)(e);
    return (0, i.useMemo)(() => {
        if (null == t) return E;
        let e = new Set(_),
            n = new Map();
        for (let i of t.thirdPartySkus) {
            let t = i.distributor;
            null != i.id && e.has(t) && !n.has(t) && n.set(t, i.id);
        }
        return _.flatMap((e) => {
            let t = n.get(e),
                i = u[e];
            return null == t || null == i ? [] : [{ ctaConfig: i, skuId: t }];
        });
    }, [t]);
}
