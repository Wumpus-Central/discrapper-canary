t.d(l, { A: () => r });
var s = t(64700),
    n = t(985194);
function r(e) {
    let l = n.A.useField("isLoading"),
        t = n.A.useField("imageHashes");
    return (
        s.useEffect(() => (null != e && n.A.getField("fetch")(e), () => n.A.getField("cancelPendingFetch")()), [e]),
        { recentImageHashes: t, isLoading: l }
    );
}
