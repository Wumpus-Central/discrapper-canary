a.d(t, { MZ: () => c, wJ: () => d });
var r = a(975571),
    l = a(927812),
    n = a(660183);
let o = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    s = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function i(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function d(e, t) {
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
function c(e) {
    var t, a, r;
    let o,
        { promotion: s, promotionProgress: i, progressIndicator: c, helpCenterId: u, daysRemaining: m, locale: p } = e,
        g =
            ((t = s.rewardStatus),
            (a = i?.current ?? 0),
            (o = (0, l.x)(c.rewardStates, t, a)),
            { title: o?.title ?? c.title, description: o?.description ?? c.description }),
        h = { locale: p, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: u },
        v = null != i ? n.intl.formatToPlainString(n.t.lyXyiY, { current: i.current, target: i.target }) : null,
        x = null != m && m > 0 ? n.intl.formatToPlainString(n.t.w4GEvw, { days: m }) : null;
    return {
        title: d(g.title, h),
        description: ((r = g.description), null != r && "" !== r ? d(r, h) : null),
        progressText: v,
        timeLeftText: x,
    };
}
