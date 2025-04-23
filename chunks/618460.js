t.d(n, { Z: () => l });
var r = t(192379),
    i = t(442837),
    o = t(823379),
    s = t(905128),
    a = t(19394);
function l(e) {
    let n = (0, i.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == n) return [];
        let { allPowerups: e, unlockedPowerups: t } = n;
        return (0, a.h)(t)
            .map((n) => e[n.sku_id])
            .filter(o.lm);
    }, [n]);
}
