n.d(t, { MZ: () => u, wJ: () => c });
var l = n(975571),
    r = n(927812),
    s = n(105292);
let a = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    i = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function o(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function c(e, t) {
    let n = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (n = l.A.getArticleURL(t.helpCenterId)),
        (null != n ? e : e.replace(i, "$1")).replace(a, (e, l) => {
            switch (l) {
                case "promotion_end_date":
                    return o(t.endsAt, t.locale);
                case "claim_end_date":
                    return o(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return n ?? "";
                default:
                    return "";
            }
        })
    );
}
function u(e) {
    var t, n, l;
    let a,
        { promotion: i, promotionProgress: o, progressIndicator: u, helpCenterId: d, daysRemaining: m, locale: g } = e,
        h =
            ((t = i.rewardStatus),
            (n = o?.current ?? 0),
            (a = (0, r.x)(u.rewardStates, t, n)),
            { title: a?.title ?? u.title, description: a?.description ?? u.description }),
        p = { locale: g, endsAt: i.endsAt, redemptionEndsAt: i.redemptionEndsAt, helpCenterId: d },
        x = null != o ? s.intl.formatToPlainString(s.t.lyXyiY, { current: o.current, target: o.target }) : null,
        f = null != m && m > 0 ? s.intl.formatToPlainString(s.t.w4GEvw, { days: m }) : null;
    return {
        title: c(h.title, p),
        description: ((l = h.description), null != l && "" !== l ? c(l, p) : null),
        progressText: x,
        timeLeftText: f,
    };
}
