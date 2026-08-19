"use strict";
n.d(t, { A: () => f });
var l = n(582128),
    i = n(202163),
    s = n(989441),
    r = n(802516),
    a = n(49381),
    o = n(778591),
    u = n(853022),
    c = n(375708);
let d = {
        [s.D.XBOX_GAME_PASS]: {
            distributor: s.D.XBOX_GAME_PASS,
            getLabel: () => c.intl.string(c.t["s7+3um"]),
            getStoreName: () => c.intl.string(c.t["QpN/Iz"]),
            icon: r.Y,
            getStoreUrl: u.jA,
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [s.D.STEAM]: {
            distributor: s.D.STEAM,
            getLabel: () => c.intl.string(c.t.L1N2gh),
            getStoreName: () => c.intl.string(c.t.FsANs4),
            icon: a.N,
            getStoreUrl: o.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    h = [s.D.XBOX_GAME_PASS, s.D.STEAM],
    m = [];
function f(e) {
    let { gameRecord: t } = (0, i.A)(e);
    return (0, l.useMemo)(() => {
        if (null == t) return m;
        let e = new Set(h),
            n = new Map();
        for (let l of t.thirdPartySkus) {
            let t = l.distributor;
            null != l.id && e.has(t) && !n.has(t) && n.set(t, l.id);
        }
        return h.flatMap((e) => {
            let t = n.get(e),
                l = d[e];
            return null == t || null == l ? [] : [{ ctaConfig: l, skuId: t }];
        });
    }, [t]);
}
