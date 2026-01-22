n.d(t, {
    U: () => c,
    j: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(824552),
    s = n(546183),
    o = n(403362);
function l(e, t) {
    let { disableFetch: n = !1 } = null != t ? t : {},
        l = (0, i.yK)([s.default], () => {
            var t;
            return null !=
                (t = null == e ? void 0 : e.map((e) => s.default.getNewestTokenForApplication(e)).filter(o.Vq))
                ? t
                : [];
        }, [e]),
        c = (0, i.bG)([s.default], () => {
            var t;
            return (
                null !=
                    (t =
                        null == e
                            ? void 0
                            : e.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED)) && t
            );
        }, [e]),
        u = (0, i.yK)([s.default], () => {
            var t;
            return null !=
                (t =
                    null == e
                        ? void 0
                        : e.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED))
                ? t
                : [];
        }, [e]);
    return (
        r.useEffect(() => {
            if (!n && 0 !== u.length) for (let e of u) a.A.fetchByApplicationId(e);
        }, [n, u]),
        {
            tokens: l,
            fetched: c,
        }
    );
}
function c(e, t) {
    let { tokens: n, fetched: i } = l(
        r.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return {
        token: n.length > 0 ? n[0] : null,
        fetched: i,
    };
}
