n.d(t, { Z: () => s }), n(388685), n(539854);
var l = n(473749),
    r = n(442837),
    i = n(924301),
    a = n(765305);
function s(e, t) {
    let n = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, null)), [e]),
        s = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, t)), [e, t]);
    return (0, l.useMemo)(() => {
        let e = s.reduce((e, t) => ((e[t.user_id] = t), e), {}),
            t = n.filter((t) => {
                let n = e[t.user_id];
                return null == n || n.response === a.gv.INTERESTED;
            }),
            l = s.filter((e) => e.response === a.gv.INTERESTED),
            r = new Set(),
            i = [],
            c = (e) => {
                r.has(e.user_id) || (i.push(e), r.add(e.user_id));
            };
        return t.forEach(c), l.forEach(c), i;
    }, [n, s]);
}
