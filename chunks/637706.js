n.d(t, { C: () => u, a: () => d });
var r = n(311907),
    a = n(97352),
    i = n(975571),
    s = n(927578),
    l = n(580630),
    c = n(788868),
    o = n(985018);
function d(e) {
    let t = "...",
        n = (0, r.bG)([a.A], () => a.A.isLoadedForSKU(c.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = s.Ay.getDefaultPrice(c.gD.PREMIUM_MONTH_TIER_2);
            t = (0, l.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let r = e?.linkText != null && "" !== e.linkText ? e.linkText : o.intl.string(o.t["sBp+u0"]);
    return { url: i.A.getArticleURL(n), linkText: r };
}
