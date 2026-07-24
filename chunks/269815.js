"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    a = n(803306),
    s = n(475743),
    l = n(280450);
function o() {
    let [e, t] = (0, r.yK)([l.default], () => [l.default.isAuthenticated(), null != l.default.getAnalyticsToken()]),
        n = (0, s.A)(e);
    i.useEffect(() => {
        n || !e || t || a.fetchCurrentUser({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
