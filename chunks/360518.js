var e = n(668530),
    o = n(293303),
    i = n(141603),
    u = n(348343),
    s = n(828596),
    c = n(756234),
    f = e.Symbol,
    a = o('wks'),
    p = c ? f.for || f : (f && f.withoutSetter) || u;
t.exports = function (t) {
    return i(a, t) || (a[t] = s && i(f, t) ? f[t] : p('Symbol.' + t)), a[t];
};
