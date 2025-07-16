n.d(t, { Z: () => l });
var r = n(73800),
    i = n(442837),
    o = n(823379),
    a = n(905128),
    s = n(19394);
function l(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: n } = t;
        return (0, s.h)(n)
            .map((t) => e[t.sku_id])
            .filter(o.lm);
    }, [t]);
}
