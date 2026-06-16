t.d(e, { A: () => R });
var _ = t(661531),
    a = t(788868);
let r = a.Ac.PREMIUM_TENURE_1_MONTH,
    n = {
        [a.Ac.PREMIUM_TENURE_1_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END",
        },
        [a.Ac.PREMIUM_TENURE_3_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END",
        },
        [a.Ac.PREMIUM_TENURE_6_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END",
        },
        [a.Ac.PREMIUM_TENURE_12_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END",
        },
        [a.Ac.PREMIUM_TENURE_24_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END",
        },
        [a.Ac.PREMIUM_TENURE_36_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END",
        },
        [a.Ac.PREMIUM_TENURE_60_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END",
        },
        [a.Ac.PREMIUM_TENURE_72_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END",
        },
    };
function R(E) {
    let e = n[E ?? r] ?? n[r];
    return { type: "custom", start: _.A.colors[e.start], end: _.A.colors[e.end] };
}
