n.d(t, { Z: () => s }), n(642613);
var r = n(73800),
    i = n(700089),
    o = n(654455),
    a = n(496158);
function s(e) {
    let { context: t, commands: n, limit: s = n.length } = e,
        l = (0, a.D)(t),
        c = (0, i.R)(l),
        u = r.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return r.useMemo(
        () =>
            c
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = o.ZP.getScoreWithoutLoadingLatest(l, e);
                    return o.ZP.getScoreWithoutLoadingLatest(l, t) - n;
                })
                .slice(0, s),
        [c, u, l, s],
    );
}
