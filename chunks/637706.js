"use strict";
n.d(t, { C: () => u, a: () => c });
var i = n(17928),
    r = n(97352),
    a = n(975571),
    s = n(428262),
    l = n(580630),
    o = n(202541),
    d = n(375708);
function c(e) {
    let t = "...",
        n = (0, i.bG)([r.A], () => r.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = s.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
            t = (0, l.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : d.intl.string(d.t["sBp+u0"]);
    return { url: a.A.getArticleURL(n), linkText: i };
}
