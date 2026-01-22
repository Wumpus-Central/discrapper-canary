var n = e(308227),
    o = e(175380),
    s = e(512008),
    i = e(226775),
    u = e(875746),
    c = e(524011),
    a = n.Symbol,
    f = o("wks"),
    p = c ? a.for || a : (a && a.withoutSetter) || i;
t.exports = function (t) {
    return s(f, t) || (f[t] = u && s(a, t) ? a[t] : p("Symbol." + t)), f[t];
};
