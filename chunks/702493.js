n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(232567),
    s = n(110924),
    o = n(314897);
function l() {
    let [e, t] = (0, r.Wu)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]),
        n = (0, s.Z)(e);
    i.useEffect(() => {
        n || !e || t || a.k({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
