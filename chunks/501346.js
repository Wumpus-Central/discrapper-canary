"use strict";
var i = n(230606),
    r = n(410323),
    s = n(855835),
    a = n(800098),
    o = n(101968),
    l = r([].concat);
e.exports =
    i("Reflect", "ownKeys") ||
    function (e) {
        var t = s.f(o(e)),
            n = a.f;
        return n ? l(t, n(e)) : t;
    };
