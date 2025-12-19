n.d(t, { Z: () => l });
var r = n(473749),
    i = n(442837),
    a = n(384275),
    o = n(870822),
    s = n(881998);
function l(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getFetchState()),
        l = (0, i.e7)([s.default], () =>
            e ? s.default.getNewestTokensForNonChildrenApplications() : s.default.getNewestTokens(),
        ),
        c = r.useMemo(() => (null == l ? [] : l.filter((e) => (0, o.Z)(e.application)).map((e) => e.application)), [l]);
    return (
        r.useEffect(() => {
            t || a.Z.fetch();
        }, [t]),
        {
            showLoadingIndicator: n !== s.FetchState.FETCHED && (null == l || 0 === l.length),
            slayerSdkApplications: c,
        }
    );
}
