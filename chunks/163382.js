n.d(t, {
    A: () => a,
}),
    n(896048),
    n(321073);
var l = n(64700),
    r = n(311907),
    s = n(698441),
    i = n(988794);

function a(e, t) {
    let n = (0, r.yK)([s.Ay], () => Object.values(s.Ay.getUsersForGuildEvent(e, null)), [e]),
        a = (0, r.yK)([s.Ay], () => Object.values(s.Ay.getUsersForGuildEvent(e, t)), [e, t]);
    return (0, l.useMemo)(() => {
        let e = a.reduce((e, t) => ((e[t.user_id] = t), e), {}),
            t = n.filter((t) => {
                let n = e[t.user_id];
                return null == n || n.response === i.Qi.INTERESTED;
            }),
            l = a.filter((e) => e.response === i.Qi.INTERESTED),
            r = new Set(),
            s = [],
            c = (e) => {
                r.has(e.user_id) || (s.push(e), r.add(e.user_id));
            };
        return t.forEach(c), l.forEach(c), s;
    }, [n, a]);
}
