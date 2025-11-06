n.d(t, { Z: () => l });
var r = n(647438),
    i = n(442837),
    a = n(384275),
    o = n(870822),
    s = n(881998);
function l(e) {
    let t = (0, i.e7)([s.default], () => s.default.getFetchState()),
        n = (0, i.e7)([s.default], () =>
            e ? s.default.getNewestTokensForNonChildrenApplications() : s.default.getNewestTokens(),
        ),
        l = r.useMemo(() => (null == n ? [] : n.filter((e) => (0, o.Z)(e.application)).map((e) => e.application)), [n]);
    return (
        r.useEffect(() => {
            a.Z.fetch();
        }, []),
        {
            showLoadingIndicator: t === s.FetchState.FETCHING && null == n,
            slayerSdkApplications: l,
        }
    );
}
