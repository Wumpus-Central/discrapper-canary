n.d(t, { Z: () => o });
var i = n(73800),
    r = n(442837),
    s = n(384275),
    l = n(870822),
    a = n(881998);
function o(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getFetchState()),
        n = (0, r.e7)([a.Z], () => (e ? a.Z.getNonChildrenApps() : a.Z.getApps())),
        o = i.useMemo(() => (null == n ? [] : n.filter((e) => (0, l.Z)(e.application)).map((e) => e.application)), [n]);
    return (
        i.useEffect(() => {
            s.Z.fetch();
        }, []),
        {
            showLoadingIndicator: t === a.M.FETCHING && null == n,
            slayerSdkApplications: o
        }
    );
}
