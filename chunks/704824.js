"use strict";
n.d(t, { U: () => u, j: () => l });
var i = n(64700),
    r = n(17928),
    s = n(824552),
    a = n(546183),
    o = n(403362);
function l(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        l = (0, r.yK)([a.default], () => e?.map((e) => a.default.getNewestTokenForApplication(e)).filter(o.Vq) ?? [], [
            e,
        ]),
        u = (0, r.bG)(
            [a.default],
            () => e?.every((e) => a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED) ?? !1,
            [e],
        ),
        c = (0, r.yK)(
            [a.default],
            () => e?.filter((e) => a.default.getFetchStateForApplication(e) === a.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        i.useEffect(() => {
            n || 0 === c.length || s.A.fetch(c);
        }, [n, c]),
        { tokens: l, fetched: u }
    );
}
function u(e, t) {
    let { tokens: n, fetched: r } = l(
        i.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: r };
}
