n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(232567),
    a = n(110924),
    s = n(314897);
function l() {
    let [e, t] = (0, i.Wu)([s.default], () => [s.default.isAuthenticated(), null != s.default.getAnalyticsToken()]),
        n = (0, a.Z)(e);
    r.useEffect(() => {
        n || !e || t || o.k({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
