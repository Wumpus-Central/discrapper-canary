"use strict";
n.d(t, { A: () => E });
var i = n(64700),
    r = n(569926);
let s = (0, n(945810).mj)({
    name: "2026-03-play-with-xbox-game-pass",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var a = n(989441),
    o = n(802516),
    l = n(49381),
    u = n(778591),
    c = n(723702);
let d = "discord7937464";
var _ = n(375708);
let f = {
        [a.D.XBOX_GAME_PASS]: {
            distributor: a.D.XBOX_GAME_PASS,
            getLabel: () => _.intl.string(_.t["s7+3um"]),
            getStoreName: () => _.intl.string(_.t["QpN/Iz"]),
            icon: o.Y,
            getStoreUrl: function (e) {
                let t = encodeURIComponent(e);
                return (0, c.isWindows)()
                    ? `msxbox://game/?productid=${t}&ocid=${d}`
                    : `https://www.xbox.com/games/store/title/${t}?ocid=${d}`;
            },
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [a.D.STEAM]: {
            distributor: a.D.STEAM,
            getLabel: () => _.intl.string(_.t.L1N2gh),
            getStoreName: () => _.intl.string(_.t.FsANs4),
            icon: l.N,
            getStoreUrl: u.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    h = [a.D.XBOX_GAME_PASS, a.D.STEAM],
    p = [];
function E(e, t) {
    let n = (function (e) {
            let { enabled: t } = s.useConfig({ location: e });
            return t;
        })(e),
        { data: a } = (0, r.I)(n ? t : null);
    return (0, i.useMemo)(() => {
        if (!n || null == a) return p;
        let e = new Set(h),
            t = new Map();
        for (let n of a.thirdPartySkus) {
            let i = n.distributor;
            null != n.id && e.has(i) && !t.has(i) && t.set(i, n.id);
        }
        return h.flatMap((e) => {
            let n = t.get(e),
                i = f[e];
            return null == n || null == i ? [] : [{ ctaConfig: i, skuId: n }];
        });
    }, [n, a]);
}
