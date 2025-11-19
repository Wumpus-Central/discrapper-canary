n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    l = n(823379),
    o = n(905128),
    a = n(19394);
function s(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: n } = t;
        return (0, a.h)(Object.values(n))
            .map((t) => e[t.sku_id])
            .filter(l.lm);
    }, [t]);
}
