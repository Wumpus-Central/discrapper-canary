l.d(t, { A: () => i });
var s = l(64700),
    n = l(985194);
function i(e) {
    let t = n.A.useField("isLoading"),
        l = n.A.useField("imageHashes");
    return (
        s.useEffect(() => (null != e && n.A.getField("fetch")(e), () => n.A.getField("cancelPendingFetch")()), [e]),
        { recentImageHashes: l, isLoading: t }
    );
}
