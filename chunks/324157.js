l.d(t, { MZ: () => u, wJ: () => c });
var n = l(975571),
    a = l(927812),
    i = l(105292);
let r = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    s = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function o(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function c(e, t) {
    let l = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (l = n.A.getArticleURL(t.helpCenterId)),
        (null != l ? e : e.replace(s, "$1")).replace(r, (e, n) => {
            switch (n) {
                case "promotion_end_date":
                    return o(t.endsAt, t.locale);
                case "claim_end_date":
                    return o(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return l ?? "";
                default:
                    return "";
            }
        })
    );
}
function u(e) {
    var t, l, n;
    let r,
        { promotion: s, promotionProgress: o, progressIndicator: u, helpCenterId: E, daysRemaining: d, locale: p } = e,
        A =
            ((t = s.rewardStatus),
            (l = o?.current ?? 0),
            (r = (0, a.x)(u.rewardStates, t, l)),
            { title: r?.title ?? u.title, description: r?.description ?? u.description }),
        _ = { locale: p, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: E },
        C = null != o ? i.intl.formatToPlainString(i.t.lyXyiY, { current: o.current, target: o.target }) : null,
        O = null != d && d > 0 ? i.intl.formatToPlainString(i.t.w4GEvw, { days: d }) : null;
    return {
        title: c(A.title, _),
        description: ((n = A.description), null != n && "" !== n ? c(n, _) : null),
        progressText: C,
        timeLeftText: O,
    };
}
