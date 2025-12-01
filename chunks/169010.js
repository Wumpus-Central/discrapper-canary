n.d(t, {
    S: () => a,
    z: () => o,
}),
    n(388685),
    n(539854);
var r = n(494497),
    i = n(535396);
let o = {
        guildTagsBadgePacks: [r.MB, r.Vk],
    },
    l = Object.entries(o).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {});
function a(e, t, n) {
    let o = [];
    n && e === i.Us.PERK && o.push({ type: "gameServer" });
    let a = t.reduce((e, t) => {
        if (t.type !== i.Us.PERK) return e;
        let n = l[t.skuId];
        return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e;
    }, {});
    for (let e of t) {
        if (e.type === i.Us.LEVEL) {
            o.push({
                type: "singleLevel",
                powerup: e,
            });
            continue;
        }
        let t = l[e.skuId];
        if (null != t) {
            let e = a[t];
            void 0 !== e &&
                (o.push({
                    type: "multiPerk",
                    group: t,
                    powerups: e,
                }),
                (a[t] = void 0));
            continue;
        }
        o.push({
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
                o = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN);
            return t.splice(o + 1, 0, i), t;
        }
        return e;
    })(o);
}
