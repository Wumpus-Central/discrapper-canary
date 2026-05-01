"use strict";
var i = n(860511),
    r = n(635896),
    s = n(210140),
    a = n(753891),
    o = n(812294),
    l = n(633895),
    u = i.Symbol,
    c = r("wks"),
    d = l ? u.for || u : (u && u.withoutSetter) || a;
e.exports = function (e) {
    return s(c, e) || (c[e] = o && s(u, e) ? u[e] : d("Symbol." + e)), c[e];
};
