var n = e(230606),
    o = e(410323),
    i = e(855835),
    u = e(800098),
    a = e(101968),
    c = o([].concat);
r.exports =
    n("Reflect", "ownKeys") ||
    function (r) {
        var t = i.f(a(r)),
            e = u.f;
        return e ? c(t, e(r)) : t;
    };
