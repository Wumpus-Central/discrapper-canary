n.d(t, { f: () => d });
var r = n(192379),
    s = n(442837),
    o = n(668826),
    i = n(120421),
    a = n(67411),
    c = n(477839);
let l = [c.FK.CLICKS_1, c.FK.CLICKS_2, c.FK.CLICKS_3],
    u = [c.FK.PURCHASE_1, c.FK.PURCHASE_2, c.FK.PURCHASE_3, c.FK.PURCHASE_4];
function d() {
    let e = (0, s.e7)([i.Z], () => i.Z.purchasedItems),
        t = (0, s.e7)([i.Z], () => i.Z.getContributionsForItem(c.yN.CLICKER_BUTTON));
    (0, r.useEffect)(() => {
        !i.Z.hasUnlockedAchievement(c.FK.PURCHASE_5) &&
            Object.keys((0, c.w2)()).every(
                (t) =>
                    t === c.yN.COMPLETE_GAME ||
                    (null != e[t] &&
                        Object.keys((0, c.r7)()).every((n) => {
                            var r, s;
                            return (null !== (s = null === (r = e[t]) || void 0 === r ? void 0 : r.upgrades[n]) && void 0 !== s ? s : 0) > 0;
                        }))
            ) &&
            (0, o.TD)(c.FK.PURCHASE_5);
    }, [e]),
        (0, a.Z)(u, Object.keys(e).length),
        (0, a.Z)(l, t);
}
