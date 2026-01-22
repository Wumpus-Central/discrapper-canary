var r = n(230606),
    i = n(410323),
    a = n(855835),
    s = n(800098),
    o = n(101968),
    l = i([].concat);
e.exports =
    r("Reflect", "ownKeys") ||
    function (e) {
        var t = a.f(o(e)),
            n = s.f;
        return n ? l(t, n(e)) : t;
    };
