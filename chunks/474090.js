var i = n(682901);
function r(e, t) {
    return null == t || (null != e && i.ci[e] >= i.ci[t]);
}
function a(e, t) {
    return null != e && null != e.premiumType && r(e.premiumType, t);
}
function s(e, t) {
    return null != e && e.premiumType === t;
}
n.d(
    t,
    {},
    {
        Ay: { isPremiumAtLeast: r, isPremium: a, isPremiumExactly: s },
        CC: r,
        YE: s,
        cr: function (e, t) {
            return null == e || i.ci[e] <= i.ci[t];
        },
        ki: a,
    },
);
