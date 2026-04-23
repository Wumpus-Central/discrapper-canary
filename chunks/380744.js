"use strict";
var r = n(860511),
    i = n(635896),
    s = n(210140),
    a = n(753891),
    o = n(812294),
    l = n(633895),
    u = r.Symbol,
    c = i("wks"),
    d = l ? u.for || u : (u && u.withoutSetter) || a;
e.exports = function (e) {
    return s(c, e) || (c[e] = o && s(u, e) ? u[e] : d("Symbol." + e)), c[e];
};
