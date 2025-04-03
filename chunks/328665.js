n.d(t, { f: () => d });
var r = n(192379),
    s = n(442837),
    o = n(668826),
    a = n(120421),
    i = n(67411),
    c = n(477839);
let l = [c.FK.CLICKS_1, c.FK.CLICKS_2, c.FK.CLICKS_3],
    u = [c.FK.PURCHASE_1, c.FK.PURCHASE_2, c.FK.PURCHASE_3, c.FK.PURCHASE_4];
function d() {
    let e = (0, s.e7)([a.Z], () => a.Z.purchasedItems),
        t = (0, s.e7)([a.Z], () => a.Z.getContributionsForItem(c.yN.CLICKER_BUTTON));
    (0, r.useEffect)(() => {
        if (!a.Z.hasUnlockedAchievement(c.FK.PURCHASE_5)) {
            let t = Object.keys((0, c.w2)()).every((t) => {
                    let n = Number(t);
                    return n === c.yN.COMPLETE_GAME || null != e[n];
                }),
                n = (0, c.r7)(),
                r = Object.keys(n).every((t) => {
                    var r, s;
                    return (null != (s = null == (r = e[n[t].itemId]) ? void 0 : r.upgrades[t]) ? s : 0) > 0;
                });
            t && r && (0, o.TD)(c.FK.PURCHASE_5);
        }
    }, [e]),
        (0, i.Z)(u, Object.keys(e).length),
        (0, i.Z)(l, t);
}
