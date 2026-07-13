"use strict";
n.d(t, { U: () => d, j: () => o });
var i = n(64700),
    r = n(17928),
    a = n(824552),
    s = n(546183),
    l = n(403362);
function o(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        o = (0, r.yK)([s.default], () => e?.map((e) => s.default.getNewestTokenForApplication(e)).filter(l.Vq) ?? [], [
            e,
        ]),
        d = (0, r.bG)(
            [s.default],
            () => e?.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED) ?? !1,
            [e],
        ),
        c = (0, r.yK)(
            [s.default],
            () => e?.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        i.useEffect(() => {
            n || 0 === c.length || a.A.fetch(c);
        }, [n, c]),
        { tokens: o, fetched: d }
    );
}
function d(e, t) {
    let { tokens: n, fetched: r } = o(
        i.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: r };
}
