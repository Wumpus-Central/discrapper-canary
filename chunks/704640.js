n.d(t, { A: () => i });
var a = n(661531),
    l = n(202541);
let r = l.Ac.PREMIUM_TENURE_1_MONTH,
    s = {
        [l.Ac.PREMIUM_TENURE_1_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END",
        },
        [l.Ac.PREMIUM_TENURE_3_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END",
        },
        [l.Ac.PREMIUM_TENURE_6_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END",
        },
        [l.Ac.PREMIUM_TENURE_12_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END",
        },
        [l.Ac.PREMIUM_TENURE_24_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END",
        },
        [l.Ac.PREMIUM_TENURE_36_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END",
        },
        [l.Ac.PREMIUM_TENURE_60_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END",
        },
        [l.Ac.PREMIUM_TENURE_72_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END",
        },
    };
function i(e) {
    let t = s[e ?? r] ?? s[r];
    return { type: "custom", start: a.A.colors[t.start], end: a.A.colors[t.end] };
}
