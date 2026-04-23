var n = e(860511),
    o = e(635896),
    i = e(210140),
    u = e(753891),
    a = e(812294),
    c = e(633895),
    f = n.Symbol,
    s = o("wks"),
    p = c ? f.for || f : (f && f.withoutSetter) || u;
r.exports = function (r) {
    return i(s, r) || (s[r] = a && i(f, r) ? f[r] : p("Symbol." + r)), s[r];
};
