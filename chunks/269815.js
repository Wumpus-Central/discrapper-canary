"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    a = n(803306),
    s = n(475743),
    o = n(961350);
function l() {
    let [e, t] = (0, i.yK)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]),
        n = (0, s.A)(e);
    r.useEffect(() => {
        n || !e || t || a.rQ({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
