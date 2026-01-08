n.d(t, {
    O: () => l,
    o: () => c,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(384275),
    o = n(881998),
    s = n(823379);
function l(e, t) {
    let { disableFetch: n = !1 } = null != t ? t : {},
        l = (0, i.Wu)([o.default], () => {
            var t;
            return null !=
                (t = null == e ? void 0 : e.map((e) => o.default.getNewestTokenForApplication(e)).filter(s.lm))
                ? t
                : [];
        }, [e]),
        c = (0, i.e7)([o.default], () => {
            var t;
            return (
                null !=
                    (t =
                        null == e
                            ? void 0
                            : e.every((e) => o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED)) && t
            );
        }, [e]),
        u = (0, i.Wu)([o.default], () => {
            var t;
            return null !=
                (t =
                    null == e
                        ? void 0
                        : e.filter((e) => o.default.getFetchStateForApplication(e) === o.FetchState.NOT_FETCHED))
                ? t
                : [];
        }, [e]);
    return (
        r.useEffect(() => {
            if (!n && 0 !== u.length) for (let e of u) a.Z.fetchByApplicationId(e);
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
