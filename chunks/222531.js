var r = a(581031),
    n = a(740362),
    o = a(299623),
    _ = a(953326).indexOf,
    i = a(624906),
    c = r([].push);
t.exports = function (t, e) {
    var a,
        r = o(t),
        s = 0,
        E = [];
    for (a in r) !n(i, a) && n(r, a) && c(E, a);
    for (; e.length > s; ) n(r, (a = e[s++])) && (~_(E, a) || c(E, a));
    return E;
};
