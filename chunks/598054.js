var r = n(67867),
    i = n(570596),
    o = n(982665),
    a = n(28886),
    s = n(453556),
    l = n(65007),
    c = n(646948);
function u(e, t) {
    var n,
        r,
        d = arguments.length < 3 ? e : arguments[2];
    return a(e) === d ? e[t] : (n = l.f(e, t)) ? (s(n) ? n.value : void 0 === n.get ? void 0 : i(n.get, d)) : o((r = c(e))) ? u(r, t, d) : void 0;
}
r(
    {
        target: 'Reflect',
        stat: !0
    },
    { get: u }
);
