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
        { promotion: i, progressIndicator: c, helpCenterId: u, timeLeftDate: m, locale: p } = e,
        h =
            ((t = i.rewardStatus),
            (a = i.progress?.current ?? 0),
            (s = (0, r.x)(c.rewardStates, t, a)),
            { title: s?.title ?? c.title, description: s?.description ?? c.description }),
        g = { locale: p, endsAt: i.endsAt, redemptionEndsAt: i.redemptionEndsAt, helpCenterId: u },
        v = null != m ? (0, n.WU)(m) : null,
        x = i.progress,
        f = null != x ? o.intl.formatToPlainString(o.t.lyXyiY, { current: x.current, target: x.target }) : null,
        b = null != v && v > 0 ? o.intl.formatToPlainString(o.t.w4GEvw, { days: v }) : null;
    return {
        title: d(h.title, g),
        description: ((l = h.description), null != l && "" !== l ? d(l, g) : null),
        progressText: f,
        timeLeftText: b,
    };
}
