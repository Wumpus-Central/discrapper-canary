n.d(t, {
    I5: () => a,
    M5: () => s,
    ZP: () => o,
    yd: () => r
});
var i = n(474936);
function r(e, t) {
    return null == t || (null != e && i.$e[e] >= i.$e[t]);
}
function a(e, t) {
    return null != e && null != e.premiumType && r(e.premiumType, t);
}
function s(e, t) {
    return null != e && e.premiumType === t;
}
let o = {
    isPremiumAtLeast: r,
    isPremium: a,
    isPremiumExactly: s
};
