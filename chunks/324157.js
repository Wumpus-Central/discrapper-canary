a.d(t, { MZ: () => d, wJ: () => c });
var r = a(975571),
    n = a(927812),
    l = a(105292);
let o = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    s = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function i(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function c(e, t) {
    let a = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (a = r.A.getArticleURL(t.helpCenterId)),
        (null != a ? e : e.replace(s, "$1")).replace(o, (e, r) => {
            switch (r) {
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
    var t, a, r;
    let o,
        { promotion: s, promotionProgress: i, progressIndicator: d, helpCenterId: u, daysRemaining: m, locale: p } = e,
        g =
            ((t = s.rewardStatus),
            (a = i?.current ?? 0),
            (o = (0, n.x)(d.rewardStates, t, a)),
            { title: o?.title ?? d.title, description: o?.description ?? d.description }),
        h = { locale: p, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: u },
        v = null != i ? l.intl.formatToPlainString(l.t.lyXyiY, { current: i.current, target: i.target }) : null,
        x = null != m && m > 0 ? l.intl.formatToPlainString(l.t.w4GEvw, { days: m }) : null;
    return {
        title: c(g.title, h),
        description: ((r = g.description), null != r && "" !== r ? c(r, h) : null),
        progressText: v,
        timeLeftText: x,
    };
}
