"use strict";
n.r(t), n.d(t, { createStringInterpolator: () => f });
var r,
    i = n(55334),
    s = n(85402),
    a = n(273406),
    o = n(286815),
    l = n(476575),
    u = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    c = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    d = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    _ = function (e, t, n, r, i) {
        return "rgba(" + Math.round(t) + ", " + Math.round(n) + ", " + Math.round(r) + ", " + i + ")";
    },
    f = function (e) {
        r || (r = l.colorNames ? RegExp("(" + Object.keys(l.colorNames).join("|") + ")", "g") : /^\b$/);
        var t = e.output.map(function (e) {
                return (0, s.oq)(e).replace(c, o.b).replace(r, o.b);
            }),
            n = t.map(function (e) {
                return e.match(u).map(Number);
            }),
            f = n[0]
                .map(function (e, t) {
                    return n.map(function (e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    });
                })
                .map(function (t) {
                    return (0, a.k)((0, i.Cl)((0, i.Cl)({}, e), { output: t }));
                });
        return function (e) {
            var n = 0;
            return t[0]
                .replace(u, function () {
                    return String(f[n++](e));
                })
                .replace(d, _);
        };
    };
