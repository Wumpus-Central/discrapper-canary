a.d(t, { MZ: () => u, wJ: () => d });
var l = a(975571),
    n = a(993408),
    r = a(927812),
    o = a(375708);
let s = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    i = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function c(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function d(e, t) {
    let a = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (a = l.A.getArticleURL(t.helpCenterId)),
        (null != a ? e : e.replace(i, "$1")).replace(s, (e, l) => {
            switch (l) {
                case "promotion_end_date":
                    return c(t.endsAt, t.locale);
                case "claim_end_date":
                    return c(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return a ?? "";
                default:
                    return "";
            }
        })
    );
}
function u(e) {
    var t, a, l;
    let s,
        { promotion: i, promotionProgress: c, progressIndicator: u, helpCenterId: m, timeLeftDate: p, locale: h } = e,
        g =
            ((t = i.rewardStatus),
            (a = c?.current ?? 0),
            (s = (0, r.x)(u.rewardStates, t, a)),
            { title: s?.title ?? u.title, description: s?.description ?? u.description }),
        v = { locale: h, endsAt: i.endsAt, redemptionEndsAt: i.redemptionEndsAt, helpCenterId: m },
        x = null != p ? (0, n.WU)(p) : null,
        f = null != c ? o.intl.formatToPlainString(o.t.lyXyiY, { current: c.current, target: c.target }) : null,
        b = null != x && x > 0 ? o.intl.formatToPlainString(o.t.w4GEvw, { days: x }) : null;
    return {
        title: d(g.title, v),
        description: ((l = g.description), null != l && "" !== l ? d(l, v) : null),
        progressText: f,
        timeLeftText: b,
    };
}
