var n = e(230606),
    o = e(410323),
    i = e(855835),
    a = e(800098),
    u = e(101968),
    c = o([].concat);
r.exports =
    n("Reflect", "ownKeys") ||
    function (r) {
        var t = i.f(u(r)),
            e = a.f;
        return e ? c(t, e(r)) : t;
    };
