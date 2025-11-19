n.d(t, { Z: () => s }), n(642613);
var r = n(473749),
    i = n(700089),
    a = n(654455),
    o = n(496158);
function s(e) {
    let { context: t, commands: n, limit: s = n.length } = e,
        l = (0, o.D)(t),
        c = (0, i.R)(l),
        u = r.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return r.useMemo(
        () =>
            c
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = a.ZP.getScoreWithoutLoadingLatest(l, e);
                    return a.ZP.getScoreWithoutLoadingLatest(l, t) - n;
                })
                .slice(0, s),
        [c, u, l, s],
    );
}
