n.d(t, { Z: () => o }), n(539854), n(388685);
var a = n(473749),
    r = n(442837),
    i = n(38618),
    l = n(430824),
    s = n(204298);
function o(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        o = (0, r.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        c = (0, r.e7)([i.Z], () => i.Z.isConnected());
    return a.useMemo(() => {
        let e = [];
        if (!c || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = l.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [c, o, t, n]);
}
