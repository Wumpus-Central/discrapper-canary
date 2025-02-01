var i = n(67867),
    r = n(570596),
    a = n(982665),
    s = n(28886),
    o = n(453556),
    l = n(65007),
    u = n(646948);
function c(e, t) {
    var n,
        i,
        d = arguments.length < 3 ? e : arguments[2];
    return s(e) === d ? e[t] : (n = l.f(e, t)) ? (o(n) ? n.value : void 0 === n.get ? void 0 : r(n.get, d)) : a((i = u(e))) ? c(i, t, d) : void 0;
}
i(
    {
        target: 'Reflect',
        stat: !0
    },
    { get: c }
);
