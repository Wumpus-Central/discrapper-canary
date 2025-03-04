n.d(t, { Z: () => o }), n(653041), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(430824),
    a = n(204298);
function o(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        o = (0, l.e7)([a.Z], () => a.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        s = (0, l.e7)([i.Z], () => i.Z.isLoaded());
    return r.useMemo(() => {
        let e = [];
        if (!s || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = i.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [s, o, t, n]);
}
