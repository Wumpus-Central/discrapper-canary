i.d(t, { A: () => c });
var s = i(64700),
    a = i(975807),
    n = i(276666),
    r = i(985603),
    l = i(777376);
function c(e) {
    let t = (0, r.A)();
    return s.useCallback(async () => {
        if (null != e && (0, l.Nk)(e)) (0, a.A)(e.url, !0);
        else {
            let e = await (0, n.aB)(l.n9.XGPP);
            e?.redirect != null && (0, a.A)(e.redirect.url, !0);
        }
        t(r.xf.CLAIM);
    }, [e, t]);
}
