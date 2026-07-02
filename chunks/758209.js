"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(975807),
    a = n(183972),
    o = n(919466),
    l = n(196099),
    u = n(297966),
    c = n(927813);
n(985603);
let d = 5 * c.A.Millis.MINUTE;
function _(e) {
    let t = (0, r.bG)([o.A], () => o.A.getLastFetchTime()),
        n = (0, l.M)("xbox");
    return i.useCallback(async () => {
        var i;
        if (null != e && null != (i = t) && Date.now() - i < d) (0, s.A)(e.url, !0);
        else {
            let e = await (0, a.aB)(u.n9.XGPP);
            e?.redirect != null && (0, s.A)(e.redirect.url, !0);
        }
        n(l.H.CLAIM);
    }, [e, t, n]);
}
