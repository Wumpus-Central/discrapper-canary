var e = r(127849),
    o = r(571078),
    i = r(77025),
    u = r(744569),
    c = r(504290),
    a = r(677671),
    f = e.Symbol,
    s = o('wks'),
    l = a ? f.for || f : (f && f.withoutSetter) || u;
t.exports = function (t) {
    return i(s, t) || (s[t] = c && i(f, t) ? f[t] : l('Symbol.' + t)), s[t];
};
