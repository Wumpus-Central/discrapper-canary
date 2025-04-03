t.d(n, { Z: () => l });
var r = t(192379),
    o = t(442837),
    i = t(823379),
    s = t(905128),
    a = t(19394);
function l(e) {
    let n = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == n) return [];
        let { powerups: e, unlocked: t } = n;
        return (0, a.h)(t)
            .map((n) => e.get(n.sku_id))
            .filter(i.lm)
            .slice(0, 1);
    }, [n]);
}
