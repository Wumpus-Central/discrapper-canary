"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(975807),
    a = n(927813),
    o = n(276666),
    l = n(545600),
    u = n(985603),
    c = n(777376);
let d = 5 * a.A.Millis.MINUTE;
function _(e) {
    let t = (0, r.bG)([l.A], () => l.A.getLastFetchTime()),
        n = (0, u.A)();
    return i.useCallback(async () => {
        var i;
        if (null != e && null != (i = t) && Date.now() - i < d) (0, s.A)(e.url, !0);
        else {
            let e = await (0, o.aB)(c.n9.XGPP);
            e?.redirect != null && (0, s.A)(e.redirect.url, !0);
        }
        n(u.xf.CLAIM);
    }, [e, t, n]);
}
