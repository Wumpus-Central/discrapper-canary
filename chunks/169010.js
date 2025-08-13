n.d(t, {
    S: () => s,
    z: () => i,
}),
    n(388685),
    n(539854);
var r = n(494497),
    o = n(535396);
let i = {
        guildTagsBadgePacks: [r.MB, r.Vk],
    },
    l = Object.entries(i).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {});
function s(e) {
    let t = [],
        n = e.reduce((e, t) => {
            var n;
            if (t.type !== o.Us.PERK) return e;
            let r = l[t.skuId];
            return null == r || (null != e[r] || (e[r] = []), e[r].push(t)), e;
        }, {});
    for (let r of e) {
        if (r.type === o.Us.LEVEL) {
            t.push({
                type: "singleLevel",
                powerup: r,
            });
            continue;
        }
        let e = l[r.skuId];
        if (null != e) {
            let r = n[e];
            void 0 !== r &&
                (t.push({
                    type: "multiPerk",
                    group: e,
                    powerups: r,
                }),
                (n[e] = void 0));
            continue;
        }
        t.push({
            type: "singlePerk",
            powerup: r,
        });
    }
    return (function (e) {
        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN),
            n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
        if (-1 !== t && -1 !== n && n !== t + 1) {
            let t = [...e],
                [o] = t.splice(n, 1),
                i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN);
            return t.splice(i + 1, 0, o), t;
        }
        return e;
    })(t);
}
