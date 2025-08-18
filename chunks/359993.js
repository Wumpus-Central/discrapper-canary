n.d(t, { Z: () => s }), n(539854), n(388685);
var r = n(647438),
    a = n(442837),
    i = n(38618),
    l = n(430824),
    o = n(204298);
function s(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        s = (0, a.e7)([o.Z], () => o.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        c = (0, a.e7)([i.Z], () => i.Z.isConnected());
    return r.useMemo(() => {
        let e = [];
        if (!c || !n || null == s || null == t) return e;
        for (let t of s) {
            let n = l.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [c, s, t, n]);
}
