var r = a(161581),
    n = a(972277),
    o = a(740362),
    _ = a(457507),
    i = a(400957),
    c = a(769992),
    s = r.Symbol,
    E = n('wks'),
    l = c ? s.for || s : (s && s.withoutSetter) || _;
t.exports = function (t) {
    return o(E, t) || (E[t] = i && o(s, t) ? s[t] : l('Symbol.' + t)), E[t];
};
