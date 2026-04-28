"use strict";
n.d(t, { U: () => c, j: () => o });
var r = n(64700),
    a = n(17928),
    i = n(824552),
    l = n(546183),
    s = n(403362);
function o(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        o = (0, a.yK)([l.default], () => e?.map((e) => l.default.getNewestTokenForApplication(e)).filter(s.Vq) ?? [], [
            e,
        ]),
        c = (0, a.bG)(
            [l.default],
            () => e?.every((e) => l.default.getFetchStateForApplication(e) === l.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, a.yK)(
            [l.default],
            () => e?.filter((e) => l.default.getFetchStateForApplication(e) === l.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        r.useEffect(() => {
            n || 0 === d.length || i.A.fetch(d);
        }, [n, d]),
        { tokens: o, fetched: c }
    );
}
function c(e, t) {
    let { tokens: n, fetched: a } = o(
        r.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: a };
}
