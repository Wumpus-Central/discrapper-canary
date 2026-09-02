n.d(t, { C: () => d, a: () => s });
var r = n(17928),
    i = n(97352),
    l = n(975571),
    u = n(158045),
    o = n(580630),
    c = n(202541),
    a = n(375708);
function s(e) {
    let t = "...",
        n = (0, r.bG)([i.A], () => i.A.isLoadedForSKU(c.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = u.Ay.getDefaultPrice(c.gD.PREMIUM_MONTH_TIER_2);
            t = (0, o.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function d(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let r = e?.linkText != null && "" !== e.linkText ? e.linkText : a.intl.string(a.t["sBp+u0"]);
    return { url: l.A.getArticleURL(n), linkText: r };
}
