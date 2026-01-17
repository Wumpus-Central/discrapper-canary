n.d(t, { $: () => l }), n(704826), n(35282);
var r = n(442837),
    i = n(509545),
    a = n(74538),
    o = n(937615),
    s = n(474936);
function l(e) {
    let t = "...",
        n = (0, r.e7)([i.Z], () => i.Z.isLoadedForSKU(s.Si.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
        try {
            let e = a.ZP.getDefaultPrice(s.Xh.PREMIUM_MONTH_TIER_2);
            t = (0, o.T4)(e.amount, e.currency);
        } catch (e) {}
    return e.replace(/\{price\}/g, t);
}
