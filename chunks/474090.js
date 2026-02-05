"use strict";
n.d(t, { Ay: () => l, CC: () => i, YE: () => o, cr: () => a, ki: () => s });
var r = n(788868);
function i(e, t) {
    return null == t || (null != e && r.ci[e] >= r.ci[t]);
}
function a(e, t) {
    return null == e || r.ci[e] <= r.ci[t];
}
function s(e, t) {
    return null != e && null != e.premiumType && i(e.premiumType, t);
}
function o(e, t) {
    return null != e && e.premiumType === t;
}
let l = { isPremiumAtLeast: i, isPremium: s, isPremiumExactly: o };
