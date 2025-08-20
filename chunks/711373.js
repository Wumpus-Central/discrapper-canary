n.d(t, { Z: () => d }), n(388685), n(539854);
var i = n(647438),
    l = n(442837),
    r = n(924301),
    a = n(765305);
function d(e, t) {
    let n = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
        d = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, t)), [e, t]);
    return (0, i.useMemo)(() => {
        let e = d.reduce((e, t) => ((e[t.user_id] = t), e), {}),
            t = n.filter((t) => {
                let n = e[t.user_id];
                return null == n || n.response === a.gv.INTERESTED;
            }),
            i = d.filter((e) => e.response === a.gv.INTERESTED),
            l = new Set(),
            r = [],
            s = (e) => {
                l.has(e.user_id) || (r.push(e), l.add(e.user_id));
            };
        return t.forEach(s), i.forEach(s), r;
    }, [n, d]);
}
