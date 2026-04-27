"use strict";
r.d(t, { U: () => c, j: () => o });
var n = r(64700),
    i = r(17928),
    a = r(824552),
    s = r(546183),
    l = r(403362);
function o(e, t) {
    let { disableFetch: r = !1 } = t ?? {},
        o = (0, i.yK)([s.default], () => e?.map((e) => s.default.getNewestTokenForApplication(e)).filter(l.Vq) ?? [], [
            e,
        ]),
        c = (0, i.bG)(
            [s.default],
            () => e?.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, i.yK)(
            [s.default],
            () => e?.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        n.useEffect(() => {
            r || 0 === d.length || a.A.fetch(d);
        }, [r, d]),
        { tokens: o, fetched: c }
    );
}
function c(e, t) {
    let { tokens: r, fetched: i } = o(
        n.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: r.length > 0 ? r[0] : null, fetched: i };
}
