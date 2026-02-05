"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(56494),
    a = n(26909),
    s = n(555045);
function o(e) {
    let { context: t, commands: n, limit: o = n.length } = e,
        l = (0, s.e)(t),
        u = (0, i.F)(l),
        c = r.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return r.useMemo(
        () =>
            u
                .map((e) => c[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = a.Ay.getScoreWithoutLoadingLatest(l, e);
                    return a.Ay.getScoreWithoutLoadingLatest(l, t) - n;
                })
                .slice(0, o),
        [u, c, l, o],
    );
}
