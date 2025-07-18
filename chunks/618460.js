n.d(t, { Z: () => l });
var r = n(73800),
    o = n(442837),
    i = n(823379),
    s = n(905128),
    a = n(19394);
function l(e) {
    let t = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: n } = t;
        return (0, a.h)(n)
            .map((t) => e[t.sku_id])
            .filter(i.lm);
    }, [t]);
}
