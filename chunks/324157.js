a.d(t, { MZ: () => d, wJ: () => c });
var l = a(975571),
    n = a(927812),
    r = a(375708);
let o = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    s = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function i(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function c(e, t) {
    let a = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (a = l.A.getArticleURL(t.helpCenterId)),
        (null != a ? e : e.replace(s, "$1")).replace(o, (e, l) => {
            switch (l) {
                case "promotion_end_date":
                    return i(t.endsAt, t.locale);
                case "claim_end_date":
                    return i(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return a ?? "";
                default:
                    return "";
            }
        })
    );
}
function d(e) {
    var t, a, l;
    let o,
        { promotion: s, promotionProgress: i, progressIndicator: d, helpCenterId: u, daysRemaining: m, locale: p } = e,
        h =
            ((t = s.rewardStatus),
            (a = i?.current ?? 0),
            (o = (0, n.x)(d.rewardStates, t, a)),
            { title: o?.title ?? d.title, description: o?.description ?? d.description }),
        g = { locale: p, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: u },
        v = null != i ? r.intl.formatToPlainString(r.t.lyXyiY, { current: i.current, target: i.target }) : null,
        x = null != m && m > 0 ? r.intl.formatToPlainString(r.t.w4GEvw, { days: m }) : null;
    return {
        title: c(h.title, g),
        description: ((l = h.description), null != l && "" !== l ? c(l, g) : null),
        progressText: v,
        timeLeftText: x,
    };
}
