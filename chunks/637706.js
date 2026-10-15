A.d(t, { C: () => I, a: () => i });
var _ = A(17928),
    n = A(97352),
    l = A(975571),
    E = A(158045),
    r = A(580630),
    T = A(202541),
    N = A(105292);
function i(e) {
    let t = "...",
        A = (0, _.bG)([n.A], () => n.A.isLoadedForSKU(T.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && A)
        try {
            let e = E.Ay.getDefaultPrice(T.gD.PREMIUM_MONTH_TIER_2);
            t = (0, r.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function I(e, t) {
    let A = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === A) return null;
    let _ = e?.linkText != null && "" !== e.linkText ? e.linkText : N.intl.string(N.t["sBp+u0"]);
    return { url: l.A.getArticleURL(A), linkText: _ };
}
