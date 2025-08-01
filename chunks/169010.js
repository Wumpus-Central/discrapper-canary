(n.d(t, { S: () => l }), n(388685), n(539854));
var r = n(494497),
    o = n(535396);
let i = Object.entries({
    guildTagsBadgePacks: [r.MB, r.Vk]
}).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e;
}, {});
function l(e) {
    let t = [],
        n = e.reduce((e, t) => {
            var n;
            if (t.type !== o.Us.PERK) return e;
            let r = i[t.skuId];
            return (null == r || (null != e[r] || (e[r] = []), e[r].push(t)), e);
        }, {});
    for (let r of e) {
        if (r.type === o.Us.LEVEL) {
            t.push({
                type: 'singleLevel',
                powerup: r
            });
            continue;
        }
        let e = i[r.skuId];
        if (null != e) {
            let r = n[e];
            void 0 !== r &&
                (t.push({
                    type: 'multiPerk',
                    group: e,
                    powerups: r
                }),
                (n[e] = void 0));
            continue;
        }
        t.push({
            type: 'singlePerk',
            powerup: r
        });
    }
    return t;
}
