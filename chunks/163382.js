t.d(n, { A: () => s }), t(321073);
var i = t(64700),
    l = t(311907),
    d = t(698441),
    r = t(988794);
function s(e, n) {
    let t = (0, l.yK)([d.Ay], () => Object.values(d.Ay.getUsersForGuildEvent(e, null)), [e]),
        s = (0, l.yK)([d.Ay], () => Object.values(d.Ay.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, i.useMemo)(() => {
        let e = s.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === r.Qi.INTERESTED;
            }),
            i = s.filter((e) => e.response === r.Qi.INTERESTED),
            l = new Set(),
            d = [],
            a = (e) => {
                l.has(e.user_id) || (d.push(e), l.add(e.user_id));
            };
        return n.forEach(a), i.forEach(a), d;
    }, [t, s]);
}
