"use strict";
n.d(t, { C: () => d, a: () => c });
var i = n(17928),
    r = n(97352),
    s = n(975571),
    a = n(927578),
    o = n(580630),
    l = n(788868),
    u = n(375708);
function c(e) {
    let t = "...",
        n = (0, i.bG)([r.A], () => r.A.isLoadedForSKU(l.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = a.Ay.getDefaultPrice(l.gD.PREMIUM_MONTH_TIER_2);
            t = (0, o.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function d(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : u.intl.string(u.t["sBp+u0"]);
    return { url: s.A.getArticleURL(n), linkText: i };
}
