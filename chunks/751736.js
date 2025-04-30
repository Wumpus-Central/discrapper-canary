var r = a(127849),
    n = a(571078),
    _ = a(77025),
    o = a(744569),
    i = a(504290),
    c = a(677671),
    s = r.Symbol,
    E = n('wks'),
    l = c ? s.for || s : (s && s.withoutSetter) || o;
t.exports = function (t) {
    return _(E, t) || (E[t] = i && _(s, t) ? s[t] : l('Symbol.' + t)), E[t];
};
