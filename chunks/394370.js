var e = n(424353),
    o = n(866686),
    i = n(185698),
    u = n(290619),
    s = n(969493),
    c = n(180300),
    f = e.Symbol,
    a = o('wks'),
    p = c ? f.for || f : (f && f.withoutSetter) || u;
t.exports = function (t) {
    return i(a, t) || (a[t] = s && i(f, t) ? f[t] : p('Symbol.' + t)), a[t];
};
