t.d(n, { Z: () => l });
var r = t(192379),
    o = t(442837),
    s = t(823379),
    i = t(905128),
    a = t(19394);
function l(e) {
    let n = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == n) return [];
        let { powerups: e, unlocked: t } = n;
        return (0, a.h)(t)
            .map((n) => e.get(n.sku_id))
            .filter(s.lm)
            .slice(0, 1);
    }, [n]);
}
