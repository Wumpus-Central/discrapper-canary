n.d(t, { Z: () => s }), n(539854), n(388685);
var r = n(192379),
    a = n(442837),
    i = n(430824),
    l = n(204298);
function s(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        s = (0, a.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, a.e7)([i.Z], () => i.Z.isLoaded());
    return r.useMemo(() => {
        let e = [];
        if (!o || !n || null == s || null == t) return e;
        for (let t of s) {
            let n = i.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, s, t, n]);
}
