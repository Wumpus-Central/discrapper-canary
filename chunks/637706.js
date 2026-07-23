n.d(t, { C: () => s, a: () => d });
var r = n(17928),
    l = n(97352),
    i = n(975571),
    a = n(428262),
    u = n(580630),
    o = n(202541),
    c = n(375708);
function d(e) {
    let t = "...",
        n = (0, r.bG)([l.A], () => l.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = a.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
            t = (0, u.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function s(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let r = e?.linkText != null && "" !== e.linkText ? e.linkText : c.intl.string(c.t["sBp+u0"]);
    return { url: i.A.getArticleURL(n), linkText: r };
}
