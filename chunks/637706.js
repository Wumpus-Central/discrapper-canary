t.d(e, { C: () => R, a: () => O });
var A = t(17928),
    n = t(97352),
    l = t(975571),
    T = t(24482),
    N = t(580630),
    E = t(202541),
    r = t(105292);
function O(_) {
    let e = "...",
        t = (0, A.bG)([n.A], () => n.A.isLoadedForSKU(E.pe.TIER_2));
    if (-1 !== _.indexOf("{price}") && t)
        try {
            let _ = T.Ay.getDefaultPrice(E.gD.PREMIUM_MONTH_TIER_2);
            e = (0, N.$g)(_.amount, _.currency);
        } catch {}
    return _.replace(/\{price\}/g, e);
}
function R(_, e) {
    let t = _?.id != null && "" !== _.id ? _.id : e;
    if ("" === t) return null;
    let A = _?.linkText != null && "" !== _.linkText ? _.linkText : r.intl.string(r.t["sBp+u0"]);
    return { url: l.A.getArticleURL(t), linkText: A };
}
