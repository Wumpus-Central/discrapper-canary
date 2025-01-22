var i = r(668530),
    a = r(293303),
    o = r(141603),
    s = r(348343),
    l = r(828596),
    u = r(756234),
    c = i.Symbol,
    d = a('wks'),
    f = u ? c.for || c : (c && c.withoutSetter) || s;
e.exports = function (e) {
    return !o(d, e) && (d[e] = l && o(c, e) ? c[e] : f('Symbol.' + e)), d[e];
};
