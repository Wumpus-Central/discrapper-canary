t.d(n, { Z: () => d }), t(724458), t(47120), t(653041);
var i = t(192379),
    l = t(442837),
    a = t(924301),
    r = t(765305);
function d(e, n) {
    let t = (0, l.Wu)([a.ZP], () => Object.values(a.ZP.getUsersForGuildEvent(e, null)), [e]),
        d = (0, l.Wu)([a.ZP], () => Object.values(a.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, i.useMemo)(() => {
        let e = d.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === r.gv.INTERESTED;
            }),
            i = d.filter((e) => e.response === r.gv.INTERESTED),
            l = new Set(),
            a = [],
            s = (e) => {
                l.has(e.user_id) || (a.push(e), l.add(e.user_id));
            };
        return n.forEach(s), i.forEach(s), a;
    }, [t, d]);
}
