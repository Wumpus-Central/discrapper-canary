n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    a = n(803306),
    s = n(475743),
    _ = n(495544);
function l() {
    let [e, t] = (0, r.yK)([_.default], () => [_.default.isAuthenticated(), null != _.default.getAnalyticsToken()]),
        n = (0, s.A)(e);
    i.useEffect(() => {
        n || !e || t || a.rQ({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
