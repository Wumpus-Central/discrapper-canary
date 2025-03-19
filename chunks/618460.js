t.d(n, { Z: () => l });
var i = t(192379),
    r = t(442837),
    s = t(823379),
    o = t(905128),
    a = t(19394);
function l(e) {
    let n = (0, r.e7)([o.Z], () => o.Z.getStateForGuild(e));
    return i.useMemo(() => {
        if (null == n) return [];
        let { powerups: e, unlocked: t } = n;
        return (0, a.h)(t)
            .map((n) => e.get(n.sku_id))
            .filter(s.lm)
            .slice(0, 1);
    }, [n]);
}
