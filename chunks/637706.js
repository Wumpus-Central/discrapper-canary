n.d(t, { C: () => u, a: () => d });
var i = n(17928),
    a = n(97352),
    s = n(975571),
    r = n(428262),
    l = n(580630),
    c = n(202541),
    o = n(375708);
function d(e) {
    let t = "...",
        n = (0, i.bG)([a.A], () => a.A.isLoadedForSKU(c.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = r.Ay.getDefaultPrice(c.gD.PREMIUM_MONTH_TIER_2);
            t = (0, l.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : o.intl.string(o.t["sBp+u0"]);
    return { url: s.A.getArticleURL(n), linkText: i };
}
