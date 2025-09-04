n.d(t, {
    S: () => a,
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
function a(e, t, n) {
    let i = [],
        a = t.reduce((e, t) => {
            if (t.type !== o.Us.PERK) return e;
            let n = l[t.skuId];
            return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e;
        }, {});
    for (let e of t) {
        if (e.type === o.Us.LEVEL) {
            i.push({
                type: "singleLevel",
                powerup: e,
            });
            continue;
        }
        let t = l[e.skuId];
        if (null != t) {
            let e = a[t];
            void 0 !== e &&
                (i.push({
                    type: "multiPerk",
                    group: t,
                    powerups: e,
                }),
                (a[t] = void 0));
            continue;
        }
        i.push({
            type: "singlePerk",
            powerup: e,
        });
    }
    return (
        n && e === o.Us.PERK && i.push({ type: "portkey" }),
        (function (e) {
            let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN),
                n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
            if (-1 !== t && -1 !== n && n !== t + 1) {
                let t = [...e],
                    [o] = t.splice(n, 1),
                    i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === r.IN);
                return t.splice(i + 1, 0, o), t;
            }
            return e;
        })(i)
    );
}
