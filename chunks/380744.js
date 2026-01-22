var r = n(860511),
    i = n(635896),
    a = n(210140),
    s = n(753891),
    o = n(812294),
    l = n(633895),
    c = r.Symbol,
    u = i("wks"),
    d = l ? c.for || c : (c && c.withoutSetter) || s;
e.exports = function (e) {
    return a(u, e) || (u[e] = o && a(c, e) ? c[e] : d("Symbol." + e)), u[e];
};
