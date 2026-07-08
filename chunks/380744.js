var n = e(860511),
    o = e(635896),
    i = e(210140),
    a = e(753891),
    u = e(812294),
    c = e(633895),
    f = n.Symbol,
    p = o("wks"),
    s = c ? f.for || f : (f && f.withoutSetter) || a;
r.exports = function (r) {
    return i(p, r) || (p[r] = u && i(f, r) ? f[r] : s("Symbol." + r)), p[r];
};
