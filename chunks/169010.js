n.d(t, { _P: () => u }), n(388685), n(539854);
var r = n(473749),
    i = n(494497),
    l = n(442837),
    o = n(905128),
    a = n(535396);
let s = Object.entries({
        guildTagsBadgePacks: [i.MB, i.Vk],
    }).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {}),
    c = [a.Us.LEVEL, a.Us.PERK];
function u(e, t) {
    let n = (0, l.e7)([o.Z], () => o.Z.getStateForGuild(e));
    return r.useMemo(
        () =>
            c.reduce((e, r) => {
                let l = null == n ? void 0 : n.powerupCatalog[r];
                if (null == l) return e;
                let o = (function (e, t, n) {
                    let r = [];
                    n && e === a.Us.PERK && r.push({ type: "gameServer" });
                    let l = t.reduce((e, t) => {
                        if (t.type !== a.Us.PERK) return e;
                        let n = s[t.skuId];
                        return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e;
                    }, {});
                    for (let e of t) {
                        if (e.type === a.Us.LEVEL) {
                            r.push({
                                type: "singleLevel",
                                powerup: e,
                            });
                            continue;
                        }
                        let t = s[e.skuId];
                        if (null != t) {
                            let e = l[t];
                            void 0 !== e &&
                                (r.push({
                                    type: "multiPerk",
                                    group: t,
                                    powerups: e,
                                }),
                                (l[t] = void 0));
                            continue;
                        }
                        r.push({
                            type: "singlePerk",
                            powerup: e,
                        });
                    }
                    return (function (e) {
                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.IN),
                            n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
                        if (-1 !== t && -1 !== n && n !== t + 1) {
                            let t = [...e],
                                [r] = t.splice(n, 1),
                                l = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.IN);
                            return t.splice(l + 1, 0, r), t;
                        }
                        return e;
                    })(r);
                })(r, l, t);
                return (
                    e.push({
                        type: r,
                        listings: o,
                    }),
                    e
                );
            }, []),
        [null == n ? void 0 : n.powerupCatalog, t],
    );
}
