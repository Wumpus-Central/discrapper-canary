i.d(t, { C: () => u, a: () => o });
var s = i(17928),
    a = i(97352),
    n = i(975571),
    r = i(927578),
    l = i(580630),
    c = i(788868),
    d = i(375708);
function o(e) {
    let t = "...",
        i = (0, s.bG)([a.A], () => a.A.isLoadedForSKU(c.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && i)
        try {
            let e = r.Ay.getDefaultPrice(c.gD.PREMIUM_MONTH_TIER_2);
            t = (0, l.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let i = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === i) return null;
    let s = e?.linkText != null && "" !== e.linkText ? e.linkText : d.intl.string(d.t["sBp+u0"]);
    return { url: n.A.getArticleURL(i), linkText: s };
}
