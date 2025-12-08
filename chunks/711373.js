n.d(t, { Z: () => c }), n(388685), n(539854);
var l = n(473749),
    r = n(442837),
    i = n(924301),
    s = n(765305);
function c(e, t) {
    let n = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, null)), [e]),
        c = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, t)), [e, t]);
    return (0, l.useMemo)(() => {
        let e = c.reduce((e, t) => ((e[t.user_id] = t), e), {}),
            t = n.filter((t) => {
                let n = e[t.user_id];
                return null == n || n.response === s.gv.INTERESTED;
            }),
            l = c.filter((e) => e.response === s.gv.INTERESTED),
            r = new Set(),
            i = [],
            o = (e) => {
                r.has(e.user_id) || (i.push(e), r.add(e.user_id));
            };
        return t.forEach(o), l.forEach(o), i;
    }, [n, c]);
}
