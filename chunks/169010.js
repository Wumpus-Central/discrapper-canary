(n.d(t, { S: () => u }), n(388685), n(539854));
var r = n(494497),
    o = n(535396),
    i = n(93841),
    l = n(388032),
    s = n(46310),
    a = n(175435);
let c = Object.entries({
    guildTagsBadgePacks: {
        title: l.intl.string(i.default.KC9HRU),
        description: l.intl.string(i.default.GJiSmJ),
        image: {
            staticUrl: a.Z,
            animatedUrl: s.Z
        },
        skuIds: [r.MB, r.Vk]
    }
}).reduce((e, t) => {
    let [n, { skuIds: r }] = t;
    for (let t of r) e[t] = n;
    return e;
}, {});
function u(e) {
    let t = [],
        n = e.reduce((e, t) => {
            var n;
            if (t.type !== o.Us.PERK) return e;
            let r = c[t.skuId];
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
        let e = c[r.skuId];
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
