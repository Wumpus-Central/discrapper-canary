var i = n(668530),
    r = n(293303),
    a = n(141603),
    s = n(348343),
    o = n(828596),
    l = n(756234),
    u = i.Symbol,
    c = r('wks'),
    d = l ? u.for || u : (u && u.withoutSetter) || s;
e.exports = function (e) {
    return a(c, e) || (c[e] = o && a(u, e) ? u[e] : d('Symbol.' + e)), c[e];
};
