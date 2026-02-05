n.d(t, { a: () => o });
var i = n(311907),
    s = n(97352),
    r = n(927578),
    a = n(580630),
    l = n(788868);
function o(e) {
    let t = "...",
        n = (0, i.bG)([s.A], () => s.A.isLoadedForSKU(l.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = r.Ay.getDefaultPrice(l.gD.PREMIUM_MONTH_TIER_2);
            t = (0, a.$g)(e.amount, e.currency);
        } catch {}
    return e.replace(/\{price\}/g, t);
}
