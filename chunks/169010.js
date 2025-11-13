n.d(t, {
    S: () => a,
    z: () => l,
}),
    n(388685),
    n(539854);
var r = n(494497),
    i = n(535396);
let l = {
        guildTagsBadgePacks: [r.MB, r.Vk],
    },
    o = Object.entries(l).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {});
function a(e, t, n) {
    let l = [];
    n && e === i.Us.PERK && l.push({ type: "gameServer" });
    let a = t.reduce((e, t) => {
        if (t.type !== i.Us.PERK) return e;
        let n = o[t.skuId];
        return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e;
    }, {});
    for (let e of t) {
        if (e.type === i.Us.LEVEL) {
            l.push({
                type: "singleLevel",
                powerup: e,
            });
            continue;
        }
        let t = o[e.skuId];
        if (null != t) {
            let e = a[t];
            void 0 !== e &&
                (l.push({
                    type: "multiPerk",
                    group: t,
                    powerups: e,
                }),
                (a[t] = void 0));
            continue;
        }
        l.push({
            type: "singlePerk",
            powerup: e,
        });
    }
    return (function (e) {
        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN),
            n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
        if (-1 !== t && -1 !== n && n !== t + 1) {
            let t = [...e],
                [i] = t.splice(n, 1),
                l = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN);
            return t.splice(l + 1, 0, i), t;
        }
        return e;
    })(l);
}
