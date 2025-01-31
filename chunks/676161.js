n.d(t, { Z: () => s }), n(724458);
var i = n(192379),
    l = n(700089),
    a = n(654455),
    o = n(496158);
function s(e) {
    let { context: t, commands: n, limit: s = n.length } = e,
        r = (0, o.D)(t),
        c = (0, l.R)(r),
        d = i.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return i.useMemo(
        () =>
            c
                .map((e) => d[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = a.ZP.getScoreWithoutLoadingLatest(r, e);
                    return a.ZP.getScoreWithoutLoadingLatest(r, t) - n;
                })
                .slice(0, s),
        [c, d, r, s]
    );
}
