"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(975807),
    s = n(276666),
    a = n(985603),
    o = n(777376);
function l(e) {
    let t = (0, a.A)();
    return i.useCallback(async () => {
        if (null != e && (0, o.Nk)(e)) (0, r.A)(e.url, !0);
        else {
            let e = await (0, s.aB)(o.n9.XGPP);
            e?.redirect != null && (0, r.A)(e.redirect.url, !0);
        }
        t(a.xf.CLAIM);
    }, [e, t]);
}
