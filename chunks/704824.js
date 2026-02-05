"use strict";
n.d(t, { U: () => u, j: () => l });
var r = n(64700),
    i = n(311907),
    a = n(824552),
    s = n(546183),
    o = n(403362);
function l(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        l = (0, i.yK)([s.default], () => e?.map((e) => s.default.getNewestTokenForApplication(e)).filter(o.Vq) ?? [], [
            e,
        ]),
        u = (0, i.bG)(
            [s.default],
            () => e?.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED) ?? !1,
            [e],
        ),
        c = (0, i.yK)(
            [s.default],
            () => e?.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        r.useEffect(() => {
            if (!n && 0 !== c.length) for (let e of c) a.A.fetchByApplicationId(e);
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
