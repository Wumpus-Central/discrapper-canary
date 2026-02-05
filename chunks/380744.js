"use strict";
var r = n(860511),
    i = n(635896),
    a = n(210140),
    s = n(753891),
    o = n(812294),
    l = n(633895),
    u = r.Symbol,
    c = i("wks"),
    d = l ? u.for || u : (u && u.withoutSetter) || s;
e.exports = function (e) {
    return a(c, e) || (c[e] = o && a(u, e) ? u[e] : d("Symbol." + e)), c[e];
};
