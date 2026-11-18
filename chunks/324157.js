var r = n(975571),
    l = n(927812),
    i = n(792996);
let o =
        /\{(promotion_end_date|claim_end_date|help_center_url|promotion_display_name|position|discount_percent|orbs_back)\}/g,
    a = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function u(t, e) {
    return null == t ? null : t.toLocaleDateString(e, { month: "long", day: "numeric", year: "numeric" });
}
function c(t, e) {
    let n = null;
    null != e.helpCenterId && "" !== e.helpCenterId && (n = r.A.getArticleURL(e.helpCenterId));
    let l = null != n ? t : t.replace(a, "$1"),
        i = /[{}]/.test(l.replace(o, ""));
    return {
        text: l.replace(o, (t, r) => {
            let l = (function (t, e, n) {
                switch (t) {
                    case "promotion_end_date":
                        return u(e.endsAt, e.locale);
                    case "claim_end_date":
                        return u(e.redemptionEndsAt, e.locale);
                    case "help_center_url":
                        return n;
                    case "promotion_display_name":
                        return null != e.promotionDisplayName && "" !== e.promotionDisplayName
                            ? e.promotionDisplayName
                            : null;
                    case "position":
                        return null != e.position ? String(e.position) : null;
                    case "discount_percent":
                        return null != e.discountPercent ? String(e.discountPercent) : null;
                    case "orbs_back":
                        return null != e.orbsBack && e.orbsBack > 0 ? String(e.orbsBack) : null;
                    default:
                        return null;
                }
            })(r, e, n);
            return (null == l && (i = !0), l ?? "");
        }),
        hasMissingValue: i,
    };
}
function s(t, e) {
    return c(t, e).text;
}
n.d(
    e,
    {},
    {
        FV: function (t, e) {
            let { text: n, hasMissingValue: r } = c(t, e);
            return r ? null : n;
        },
        MZ: function (t) {
            var e, n, r;
            let o,
                {
                    promotion: a,
                    promotionProgress: u,
                    progressIndicator: c,
                    helpCenterId: d,
                    daysRemaining: p,
                    locale: m,
                } = t,
                _ =
                    ((e = a.rewardStatus),
                    (n = u?.current ?? 0),
                    (o = (0, l.x)(c.rewardStates, e, n)),
                    { title: o?.title ?? c.title, description: o?.description ?? c.description }),
                h = { locale: m, endsAt: a.endsAt, redemptionEndsAt: a.redemptionEndsAt, helpCenterId: d },
                g = null != u ? i.intl.formatToPlainString(i.t.lyXyiY, { current: u.current, target: u.target }) : null,
                f = null != p && p > 0 ? i.intl.formatToPlainString(i.t.w4GEvw, { days: p }) : null;
            return {
                title: s(_.title, h),
                description: ((r = _.description), null != r && "" !== r ? s(r, h) : null),
                progressText: g,
                timeLeftText: f,
            };
        },
        wJ: s,
    },
);
