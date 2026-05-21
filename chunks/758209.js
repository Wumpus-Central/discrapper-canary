n.d(t, { A: () => E });
var i = n(64700),
    l = n(17928),
    r = n(975807),
    s = n(927813),
    a = n(276666),
    c = n(545600),
    o = n(985603),
    d = n(777376);
let u = 5 * s.A.Millis.MINUTE;
function E(e) {
    let t = (0, l.bG)([c.A], () => c.A.getLastFetchTime()),
        n = (0, o.A)();
    return i.useCallback(async () => {
        var i;
        if (null != e && null != (i = t) && Date.now() - i < u) (0, r.A)(e.url, !0);
        else {
            let e = await (0, a.aB)(d.n9.XGPP);
            e?.redirect != null && (0, r.A)(e.redirect.url, !0);
        }
        n(o.xf.CLAIM);
    }, [e, t, n]);
}
