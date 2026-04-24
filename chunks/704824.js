"use strict";
n.d(t, { U: () => c, j: () => o });
var r = n(64700),
    i = n(17928),
    a = n(824552),
    l = n(546183),
    s = n(403362);
function o(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        o = (0, i.yK)([l.default], () => e?.map((e) => l.default.getNewestTokenForApplication(e)).filter(s.Vq) ?? [], [
            e,
        ]),
        c = (0, i.bG)(
            [l.default],
            () => e?.every((e) => l.default.getFetchStateForApplication(e) === l.FetchState.FETCHED) ?? !1,
            [e],
        ),
        u = (0, i.yK)(
            [l.default],
            () => e?.filter((e) => l.default.getFetchStateForApplication(e) === l.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        r.useEffect(() => {
            n || 0 === u.length || a.A.fetch(u);
        }, [n, u]),
        { tokens: o, fetched: c }
    );
}
function c(e, t) {
    let { tokens: n, fetched: i } = o(
        r.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: i };
}
