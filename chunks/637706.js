n.d(t, { C: () => I, a: () => E });
var A = n(17928),
    l = n(97352),
    _ = n(975571),
    r = n(158045),
    N = n(580630),
    T = n(202541),
    i = n(375708);
function E(e) {
    let t = "...",
        n = (0, A.bG)([l.A], () => l.A.isLoadedForSKU(T.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = r.Ay.getDefaultPrice(T.gD.PREMIUM_MONTH_TIER_2);
            t = (0, N.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function I(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let A = e?.linkText != null && "" !== e.linkText ? e.linkText : i.intl.string(i.t["sBp+u0"]);
    return { url: _.A.getArticleURL(n), linkText: A };
}
