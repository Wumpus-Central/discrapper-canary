n.d(t, { Z: () => o });
var r = n(192379),
    i = n(442837),
    s = n(384275),
    a = n(870822),
    l = n(881998);
function o() {
    let e = (0, i.e7)([l.Z], () => l.Z.getFetchState()),
        t = (0, i.e7)([l.Z], () => l.Z.getApps()),
        n = r.useMemo(() => (null == t ? [] : t.filter((e) => (0, a.Z)(e.application)).map((e) => e.application)), [t]);
    return (
        r.useEffect(() => {
            s.Z.fetch();
        }, []),
        {
            showLoadingIndicator: e === l.M.FETCHING && null == t,
            slayerSdkApplications: n
        }
    );
}
