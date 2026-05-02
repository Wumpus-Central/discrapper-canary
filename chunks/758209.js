i.d(t, { A: () => m });
var s = i(64700),
    a = i(17928),
    n = i(975807),
    r = i(927813),
    l = i(276666),
    c = i(545600),
    d = i(985603),
    o = i(777376);
let u = 5 * r.A.Millis.MINUTE;
function m(e) {
    let t = (0, a.bG)([c.A], () => c.A.getLastFetchTime()),
        i = (0, d.A)();
    return s.useCallback(async () => {
        var s;
        if (null != e && null != (s = t) && Date.now() - s < u) (0, n.A)(e.url, !0);
        else {
            let e = await (0, l.aB)(o.n9.XGPP);
            e?.redirect != null && (0, n.A)(e.redirect.url, !0);
        }
        i(d.xf.CLAIM);
    }, [e, t, i]);
}
