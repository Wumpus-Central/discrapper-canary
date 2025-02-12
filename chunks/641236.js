var r = a(161581),
    n = a(972277),
    _ = a(740362),
    o = a(457507),
    i = a(400957),
    c = a(769992),
    s = r.Symbol,
    E = n('wks'),
    l = c ? s.for || s : (s && s.withoutSetter) || o;
t.exports = function (t) {
    return _(E, t) || (E[t] = i && _(s, t) ? s[t] : l('Symbol.' + t)), E[t];
};
