"use strict";
n.d(t, { U: () => u, j: () => l });
var r = n(64700),
    i = n(311907),
    s = n(824552),
    a = n(546183),
    o = n(403362);
function l(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        l = (0, i.yK)([a.default], () => e?.map((e) => a.default.getNewestTokenForApplication(e)).filter(o.Vq) ?? [], [
            e,
        ]),
        u = (0, i.bG)(
            [a.default],
            () => e?.every((e) => a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED) ?? !1,
            [e],
        ),
        c = (0, i.yK)(
            [a.default],
            () => e?.filter((e) => a.default.getFetchStateForApplication(e) === a.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        r.useEffect(() => {
            n || 0 === c.length || s.A.fetch(c);
        }, [n, c]),
        { tokens: l, fetched: u }
    );
}
function u(e, t) {
    let { tokens: n, fetched: i } = l(
        r.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: i };
}
