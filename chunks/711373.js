t.d(n, { Z: () => d }), t(47120), t(653041);
var i = t(192379),
    r = t(442837),
    l = t(924301),
    a = t(765305);
function d(e, n) {
    let t = (0, r.Wu)([l.ZP], () => Object.values(l.ZP.getUsersForGuildEvent(e, null)), [e]),
        d = (0, r.Wu)([l.ZP], () => Object.values(l.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, i.useMemo)(() => {
        let e = d.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === a.gv.INTERESTED;
            }),
            i = d.filter((e) => e.response === a.gv.INTERESTED),
            r = new Set(),
            l = [],
            o = (e) => {
                r.has(e.user_id) || (l.push(e), r.add(e.user_id));
            };
        return n.forEach(o), i.forEach(o), l;
    }, [t, d]);
}
