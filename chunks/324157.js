var l = n(975571),
    i = n(927812),
    r = n(792996);
let a =
        /\{(promotion_end_date|claim_end_date|help_center_url|promotion_display_name|position|discount_percent|orbs_back)\}/g,
    s = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function o(e, t) {
    return null == e ? null : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function u(e, t) {
    let n = null;
    null != t.helpCenterId && "" !== t.helpCenterId && (n = l.A.getArticleURL(t.helpCenterId));
    let i = null != n ? e : e.replace(s, "$1"),
        r = /[{}]/.test(i.replace(a, ""));
    return {
        text: i.replace(a, (e, l) => {
            let i = (function (e, t, n) {
                switch (e) {
                    case "promotion_end_date":
                        return o(t.endsAt, t.locale);
                    case "claim_end_date":
                        return o(t.redemptionEndsAt, t.locale);
                    case "help_center_url":
                        return n;
                    case "promotion_display_name":
                        return null != t.promotionDisplayName && "" !== t.promotionDisplayName
                            ? t.promotionDisplayName
                            : null;
                    case "position":
                        return null != t.position ? String(t.position) : null;
                    case "discount_percent":
                        return null != t.discountPercent ? String(t.discountPercent) : null;
                    case "orbs_back":
                        return null != t.orbsBack && t.orbsBack > 0 ? String(t.orbsBack) : null;
                    default:
                        return null;
                }
            })(l, t, n);
            return (null == i && (r = !0), i ?? "");
        }),
        hasMissingValue: r,
    };
}
function c(e, t) {
    return u(e, t).text;
}
n.d(
    t,
    {},
    {
        FV: function (e, t) {
            let { text: n, hasMissingValue: l } = u(e, t);
            return l ? null : n;
        },
        MZ: function (e) {
            var t, n, l;
            let a,
                {
                    promotion: s,
                    promotionProgress: o,
                    progressIndicator: u,
                    helpCenterId: d,
                    daysRemaining: m,
                    locale: p,
                } = e,
                h =
                    ((t = s.rewardStatus),
                    (n = o?.current ?? 0),
                    (a = (0, i.x)(u.rewardStates, t, n)),
                    { title: a?.title ?? u.title, description: a?.description ?? u.description }),
                C = { locale: p, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: d },
                f = null != o ? r.intl.formatToPlainString(r.t.lyXyiY, { current: o.current, target: o.target }) : null,
                E = null != m && m > 0 ? r.intl.formatToPlainString(r.t.w4GEvw, { days: m }) : null;
            return {
                title: c(h.title, C),
                description: ((l = h.description), null != l && "" !== l ? c(l, C) : null),
                progressText: f,
                timeLeftText: E,
            };
        },
        wJ: c,
    },
);
