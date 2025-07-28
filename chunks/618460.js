n.d(t, { Z: () => a });
var r = n(73800),
    o = n(442837),
    i = n(823379),
    l = n(905128),
    s = n(19394);
function a(e) {
    let t = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: n } = t;
        return (0, s.h)(n)
            .map((t) => e[t.sku_id])
            .filter(i.lm);
    }, [t]);
}
