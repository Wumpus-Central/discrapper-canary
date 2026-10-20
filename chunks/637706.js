_.d(t, { C: () => I, a: () => O });
var A = _(17928),
    n = _(97352),
    l = _(975571),
    T = _(158045),
    N = _(580630),
    E = _(202541),
    r = _(105292);
function O(e) {
    let t = "...",
        _ = (0, A.bG)([n.A], () => n.A.isLoadedForSKU(E.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && _)
        try {
            let e = T.Ay.getDefaultPrice(E.gD.PREMIUM_MONTH_TIER_2);
            t = (0, N.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function I(e, t) {
    let _ = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === _) return null;
    let A = e?.linkText != null && "" !== e.linkText ? e.linkText : r.intl.string(r.t["sBp+u0"]);
    return { url: l.A.getArticleURL(_), linkText: A };
}
