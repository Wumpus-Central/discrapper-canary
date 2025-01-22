r.d(n, {
    I5: function () {
        return o;
    },
    M5: function () {
        return s;
    },
    yd: function () {
        return a;
    }
});
var i = r(474936);
function a(e, n) {
    return null == n || (null != e && i.$e[e] >= i.$e[n]);
}
function o(e, n) {
    return null != e && null != e.premiumType && a(e.premiumType, n);
}
function s(e, n) {
    return null != e && e.premiumType === n;
}
n.ZP = {
    isPremiumAtLeast: a,
    isPremium: o,
    isPremiumExactly: s
};
