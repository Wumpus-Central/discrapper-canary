t.d(n, { Z: () => d }), t(388685), t(539854);
var i = t(192379),
    l = t(442837),
    r = t(924301),
    a = t(765305);
function d(e, n) {
    let t = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
        d = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, i.useMemo)(() => {
        let e = d.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === a.gv.INTERESTED;
            }),
            i = d.filter((e) => e.response === a.gv.INTERESTED),
            l = new Set(),
            r = [],
            o = (e) => {
                l.has(e.user_id) || (r.push(e), l.add(e.user_id));
            };
        return n.forEach(o), i.forEach(o), r;
    }, [t, d]);
}
