n.d(t, { A: () => l });
var a = n(64700),
    i = n(975807),
    r = n(276666),
    s = n(777376);
function l(e) {
    return a.useCallback(async () => {
        if (null != e && (0, s.Nk)(e)) return void (0, i.A)(e.url, !0);
        let t = await (0, r.aB)(s.n9.XGPP);
        t?.redirect != null && (0, i.A)(t.redirect.url, !0);
    }, [e]);
}
