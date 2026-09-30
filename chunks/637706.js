i.d(t, { C: () => u, a: () => d });
var n = i(17928),
    s = i(97352),
    r = i(975571),
    l = i(158045),
    a = i(580630),
    o = i(202541),
    c = i(375708);
function d(e) {
    let t = "...",
        i = (0, n.bG)([s.A], () => s.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && i)
        try {
            let e = l.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
            t = (0, a.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let i = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === i) return null;
    let n = e?.linkText != null && "" !== e.linkText ? e.linkText : c.intl.string(c.t["sBp+u0"]);
    return { url: r.A.getArticleURL(i), linkText: n };
}
