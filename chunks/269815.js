"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(803306),
    a = n(475743),
    o = n(495544);
function l() {
    let [e, t] = (0, r.yK)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]),
        n = (0, a.A)(e);
    i.useEffect(() => {
        n || !e || t || s.rQ({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
