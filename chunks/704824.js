"use strict";
r.d(t, { U: () => c, j: () => o });
var n = r(64700),
    i = r(17928),
    a = r(824552),
    l = r(546183),
    s = r(403362);
function o(e, t) {
    let { disableFetch: r = !1 } = t ?? {},
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
        n.useEffect(() => {
            r || 0 === u.length || a.A.fetch(u);
        }, [r, u]),
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
