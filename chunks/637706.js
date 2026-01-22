n.d(t, {
    a: () => l,
}),
    n(747238),
    n(812715);
var r = n(311907),
    i = n(97352),
    a = n(927578),
    s = n(580630),
    o = n(788868);

function l(e) {
    let t = "...",
        n = (0, r.bG)([i.A], () => i.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = a.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
            t = (0, s.$g)(e.amount, e.currency);
        } catch (e) {}
    return e.replace(/\{price\}/g, t);
}
