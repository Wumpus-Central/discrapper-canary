_.d(t, { C: () => R, a: () => I });
var A = _(17928),
    n = _(97352),
    l = _(975571),
    E = _(158045),
    T = _(580630),
    N = _(202541),
    r = _(105292);
function I(e) {
    let t = "...",
        _ = (0, A.bG)([n.A], () => n.A.isLoadedForSKU(N.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && _)
        try {
            let e = E.Ay.getDefaultPrice(N.gD.PREMIUM_MONTH_TIER_2);
            t = (0, T.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
function R(e, t) {
    let _ = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === _) return null;
    let A = e?.linkText != null && "" !== e.linkText ? e.linkText : r.intl.string(r.t["sBp+u0"]);
    return { url: l.A.getArticleURL(_), linkText: A };
}
