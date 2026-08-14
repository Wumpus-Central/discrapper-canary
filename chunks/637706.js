n.d(t, { C: () => d, a: () => s });
var r = n(17928),
    i = n(97352),
    l = n(975571),
    o = n(158045),
    a = n(580630),
    u = n(202541),
    c = n(375708);
function s(e) {
    let t = "...",
        n = (0, r.bG)([i.A], () => i.A.isLoadedForSKU(u.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = o.Ay.getDefaultPrice(u.gD.PREMIUM_MONTH_TIER_2);
            t = (0, a.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function d(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let r = e?.linkText != null && "" !== e.linkText ? e.linkText : c.intl.string(c.t["sBp+u0"]);
    return { url: l.A.getArticleURL(n), linkText: r };
}
