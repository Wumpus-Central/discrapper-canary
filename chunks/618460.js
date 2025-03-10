n.d(t, {
    Z: () => s,
    u: () => a
}),
    n(47120),
    n(230036);
var r = n(192379),
    i = n(442837),
    o = n(823379),
    l = n(905128);
function a(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e;
        if (null == t) return [];
        let { unlocked: n } = t;
        return Array.from(null !== (e = n.values()) && void 0 !== e ? e : [])
            .filter((e) => null != e.ends_at)
            .sort((e, t) => (e.ends_at < t.ends_at ? -1 : 1));
    }, [t]);
}
function s(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getStateForGuild(e)),
        n = a(e);
    return r.useMemo(() => {
        if (null == t) return [];
        let { powerups: e } = t;
        return n
            .map((t) => e.get(t.sku_id))
            .filter(o.lm)
            .slice(0, 1);
    }, [t, n]);
}
