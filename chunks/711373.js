t.d(n, { Z: () => c }), t(388685), t(539854);
var l = t(73800),
    i = t(442837),
    r = t(924301),
    o = t(765305);
function c(e, n) {
    let t = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
        c = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, l.useMemo)(() => {
        let e = c.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === o.gv.INTERESTED;
            }),
            l = c.filter((e) => e.response === o.gv.INTERESTED),
            i = new Set(),
            r = [],
            s = (e) => {
                i.has(e.user_id) || (r.push(e), i.add(e.user_id));
            };
        return n.forEach(s), l.forEach(s), r;
    }, [t, c]);
}
