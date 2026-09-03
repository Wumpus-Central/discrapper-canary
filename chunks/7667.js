i.d(t, { A: () => c }), i(321073);
var s = i(17928),
    n = i(412260),
    r = i(852218),
    l = i(421108),
    a = i(773669),
    o = i(375708);
function c(e) {
    let t = (0, s.bG)([n.A], () => n.A.getPromotionByTypeAndId(r.pt.MARKETING_MOMENT, e) ?? null),
        i = (0, s.bG)([a.default], () => a.default.locale),
        c = t?.boostBogoMaxCredits ?? null,
        d = t?.endDate ?? null,
        u = (0, l.dA)(d),
        m = [];
    return (
        null != c && m.push(o.intl.formatToPlainString(o.t["JR+Zws"], { maxCredits: c })),
        null != d &&
            m.push(
                o.intl.formatToPlainString(o.t.PdIODz, {
                    date: d.toLocaleDateString(i, { month: "numeric", day: "numeric" }),
                }),
            ),
        { countdownText: u, terms: m.join(" ") }
    );
}
