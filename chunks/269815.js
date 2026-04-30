n.d(t, { A: () => o });
var i = n(64700),
    a = n(17928),
    r = n(803306),
    s = n(475743),
    l = n(495544);
function o() {
    let [e, t] = (0, a.yK)([l.default], () => [l.default.isAuthenticated(), null != l.default.getAnalyticsToken()]),
        n = (0, s.A)(e);
    i.useEffect(() => {
        n || !e || t || r.rQ({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
