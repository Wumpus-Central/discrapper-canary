var i = r(67867),
    a = r(570596),
    o = r(982665),
    s = r(28886),
    l = r(453556),
    u = r(65007),
    c = r(646948);
function d(e, n) {
    var r,
        i,
        f = arguments.length < 3 ? e : arguments[2];
    return s(e) === f ? e[n] : (r = u.f(e, n)) ? (l(r) ? r.value : void 0 === r.get ? void 0 : a(r.get, f)) : o((i = c(e))) ? d(i, n, f) : void 0;
}
i(
    {
        target: 'Reflect',
        stat: !0
    },
    { get: d }
);
