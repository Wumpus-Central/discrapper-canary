n.d(t, {
    I5: () => a,
    M5: () => s,
    ZP: () => l,
    xI: () => o,
    yd: () => i
});
var r = n(474936);
function i(e, t) {
    return null == t || (null != e && r.$e[e] >= r.$e[t]);
}
function o(e, t) {
    return null == e || r.$e[e] <= r.$e[t];
}
function a(e, t) {
    return null != e && null != e.premiumType && i(e.premiumType, t);
}
function s(e, t) {
    return null != e && e.premiumType === t;
}
let l = {
    isPremiumAtLeast: i,
    isPremium: a,
    isPremiumExactly: s
};
