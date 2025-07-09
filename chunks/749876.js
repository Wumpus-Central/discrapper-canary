n.d(t, { Z: () => o });
var i = n(73800),
    r = n(442837),
    s = n(384275),
    a = n(870822),
    l = n(881998);
function o(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getFetchState()),
        n = (0, r.e7)([l.Z], () => (e ? l.Z.getNonChildrenApps() : l.Z.getApps())),
        o = i.useMemo(() => (null == n ? [] : n.filter((e) => (0, a.Z)(e.application)).map((e) => e.application)), [n]);
    return (
        i.useEffect(() => {
            s.Z.fetch();
        }, []),
        {
            showLoadingIndicator: t === l.M.FETCHING && null == n,
            slayerSdkApplications: o
        }
    );
}
