t.d(n, { Z: () => a }), t(47120), t(230036);
var r = t(192379),
    i = t(442837),
    o = t(823379),
    s = t(905128);
function a(e) {
    let n = (0, i.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e;
        if (null == n) return [];
        let { powerups: t, unlocked: r } = n;
        return Array.from(null !== (e = r.values()) && void 0 !== e ? e : [])
            .filter((e) => null != e.ends_at)
            .sort((e, n) => (e.ends_at < n.ends_at ? -1 : 1))
            .map((e) => t.get(e.sku_id))
            .filter(o.lm)
            .slice(0, 1);
    }, [n]);
}
