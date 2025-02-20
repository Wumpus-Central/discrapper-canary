n.d(t, {
    I5: () => o,
    M5: () => a,
    ZP: () => s,
    yd: () => i
});
var r = n(474936);
function i(e, t) {
    return null == t || (null != e && r.$e[e] >= r.$e[t]);
}
function o(e, t) {
    return null != e && null != e.premiumType && i(e.premiumType, t);
}
function a(e, t) {
    return null != e && e.premiumType === t;
}
let s = {
    isPremiumAtLeast: i,
    isPremium: o,
    isPremiumExactly: a
};
