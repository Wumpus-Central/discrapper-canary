t.d(n, { Z: () => l });
var r = t(73800),
    i = t(442837),
    o = t(823379),
    a = t(905128),
    s = t(19394);
function l(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == n) return [];
        let { allPowerups: e, unlockedPowerups: t } = n;
        return (0, s.h)(t)
            .map((n) => e[n.sku_id])
            .filter(o.lm);
    }, [n]);
}
