n.d(t, { MZ: () => c, wJ: () => u });
var r = n(975571),
    l = n(927812),
    s = n(105292);
let a = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    o = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function i(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function u(e, t) {
    let n = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (n = r.A.getArticleURL(t.helpCenterId)),
        (null != n ? e : e.replace(o, "$1")).replace(a, (e, r) => {
            switch (r) {
                case "promotion_end_date":
                    return i(t.endsAt, t.locale);
                case "claim_end_date":
                    return i(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return n ?? "";
                default:
                    return "";
            }
        })
    );
}
function c(e) {
    var t, n, r;
    let a,
        { promotion: o, promotionProgress: i, progressIndicator: c, helpCenterId: d, daysRemaining: p, locale: m } = e,
        g =
            ((t = o.rewardStatus),
            (n = i?.current ?? 0),
            (a = (0, l.x)(c.rewardStates, t, n)),
            { title: a?.title ?? c.title, description: a?.description ?? c.description }),
        h = { locale: m, endsAt: o.endsAt, redemptionEndsAt: o.redemptionEndsAt, helpCenterId: d },
        E = null != i ? s.intl.formatToPlainString(s.t.lyXyiY, { current: i.current, target: i.target }) : null,
        f = null != p && p > 0 ? s.intl.formatToPlainString(s.t.w4GEvw, { days: p }) : null;
    return {
        title: u(g.title, h),
        description: ((r = g.description), null != r && "" !== r ? u(r, h) : null),
        progressText: E,
        timeLeftText: f,
    };
}
