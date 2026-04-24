n.d(t, { A: () => l });
var a = n(64700),
    i = n(76843),
    r = n(276666),
    s = n(777376);
function l(e) {
    return a.useCallback(async () => {
        if (null != e && (0, s.Nk)(e)) return void (0, i.h)({ href: e.url });
        let t = await (0, r.aB)(s.n9.XGPP);
        t?.redirect != null && (0, i.h)({ href: t.redirect.url });
    }, [e]);
}
