t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(724458);
var i = t(192379),
    l = t(700089),
    o = t(654455),
    a = t(496158);
function r(e) {
    let { context: n, commands: t, limit: r = t.length } = e,
        s = (0, a.D)(n),
        c = (0, l.R)(s),
        d = i.useMemo(() => t.reduce((e, n) => ((e[n.id] = n), e), {}), [t]);
    return i.useMemo(
        () =>
            c
                .map((e) => d[e])
                .filter((e) => null != e)
                .sort((e, n) => {
                    let t = o.ZP.getScoreWithoutLoadingLatest(s, e);
                    return o.ZP.getScoreWithoutLoadingLatest(s, n) - t;
                })
                .slice(0, r),
        [c, d, s, r]
    );
}
