n.d(t, { Z: () => s }), n(539854), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(430824),
    l = n(204298);
function s(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        s = (0, i.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, i.e7)([a.Z], () => a.Z.isLoaded());
    return r.useMemo(() => {
        let e = [];
        if (!o || !n || null == s || null == t) return e;
        for (let t of s) {
            let n = a.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, s, t, n]);
}
