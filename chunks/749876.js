n.d(t, { Z: () => o });
var i = n(192379),
    r = n(442837),
    s = n(384275),
    l = n(870822),
    a = n(881998);
function o() {
    let e = (0, r.e7)([a.Z], () => a.Z.getFetchState()),
        t = (0, r.e7)([a.Z], () => a.Z.getApps()),
        n = i.useMemo(() => (null == t ? [] : t.filter((e) => (0, l.Z)(e.application)).map((e) => e.application)), [t]);
    return (
        i.useEffect(() => {
            s.Z.fetch();
        }, []),
        {
            showLoadingIndicator: e === a.M.FETCHING && null == t,
            slayerSdkApplications: n
        }
    );
}
