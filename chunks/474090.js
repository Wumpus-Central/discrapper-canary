"use strict";
n.d(t, { Ay: () => o, CC: () => r, YE: () => l, cr: () => a, ki: () => s });
var i = n(202541);
function r(e, t) {
    return null == t || (null != e && i.ci[e] >= i.ci[t]);
}
function a(e, t) {
    return null == e || i.ci[e] <= i.ci[t];
}
function s(e, t) {
    return null != e && null != e.premiumType && r(e.premiumType, t);
}
function l(e, t) {
    return null != e && e.premiumType === t;
}
let o = { isPremiumAtLeast: r, isPremium: s, isPremiumExactly: l };
