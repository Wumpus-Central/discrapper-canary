n.d(t, { _P: () => c }), n(388685), n(539854), n(290780);
var r = n(473749),
    i = n(494497),
    o = n(442837),
    l = n(905128),
    a = n(535396);
let s = Object.entries({
        guildTagsBadgePacks: [i.MB, i.Vk],
    }).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {}),
    u = [a.Us.LEVEL, a.Us.PERK];
function c(e, t) {
    let n = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e));
    return r.useMemo(
        () =>
            u.reduce((e, r) => {
                let o = null == n ? void 0 : n.powerupCatalog[r];
                if (null == o) return e;
                let l = (function (e, t, n) {
                    let r = [],
                        o = t.reduce((e, t) => {
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
                            let e = o[t];
                            void 0 !== e &&
                                (r.push({
                                    type: "multiPerk",
                                    group: t,
                                    powerups: e,
                                }),
                                (o[t] = void 0));
                            continue;
                        }
                        r.push({
                            type: "singlePerk",
                            powerup: e,
                        });
                    }
                    return (
                        n && e === a.Us.PERK && r.unshift({ type: "gameServer" }),
                        (function (e) {
                            let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.IN),
                                n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
                            if (-1 !== t && -1 !== n && n !== t + 1) {
                                let t = [...e],
                                    [r] = t.splice(n, 1),
                                    o = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.IN);
                                return t.splice(o + 1, 0, r), t;
                            }
                            return e;
                        })(r)
                    );
                })(r, o, t);
                return (
                    e.push({
                        type: r,
                        listings: l,
                    }),
                    e
                );
            }, []),
        [null == n ? void 0 : n.powerupCatalog, t],
    );
}
