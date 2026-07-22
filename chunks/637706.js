n.d(t, { C: () => u, a: () => _ });
var i = n(17928),
    l = n(97352),
    r = n(975571),
    c = n(428262),
    a = n(580630),
    s = n(202541),
    o = n(375708);
function _(e) {
    let t = "...",
        n = (0, i.bG)([l.A], () => l.A.isLoadedForSKU(s.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = c.Ay.getDefaultPrice(s.gD.PREMIUM_MONTH_TIER_2);
            t = (0, a.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : o.intl.string(o.t["sBp+u0"]);
    return { url: r.A.getArticleURL(n), linkText: i };
}
