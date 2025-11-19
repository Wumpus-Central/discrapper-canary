t.d(n, { Z: () => c }), t(388685), t(539854);
var l = t(473749),
    r = t(442837),
    i = t(924301),
    s = t(765305);
function c(e, n) {
    let t = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, null)), [e]),
        c = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, l.useMemo)(() => {
        let e = c.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === s.gv.INTERESTED;
            }),
            l = c.filter((e) => e.response === s.gv.INTERESTED),
            r = new Set(),
            i = [],
            o = (e) => {
                r.has(e.user_id) || (i.push(e), r.add(e.user_id));
            };
        return n.forEach(o), l.forEach(o), i;
    }, [t, c]);
}
