(i.d(t, { A: () => c }), i(321073));
var s = i(17928),
    r = i(412260),
    n = i(852218),
    a = i(421108),
    l = i(773669),
    o = i(375708);
function c(e) {
    let t = (0, s.bG)([r.A], () => r.A.getPromotionByTypeAndId(n.pt.MARKETING_MOMENT, e) ?? null),
        i = (0, s.bG)([l.default], () => l.default.locale),
        c = t?.boostBogoMaxCredits ?? null,
        d = t?.endDate ?? null,
        u = (0, a.dA)(d),
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
