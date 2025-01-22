r.r(n),
    r.d(n, {
        createStringInterpolator: function () {
            return h;
        }
    });
var i,
    a = r(109393),
    o = r(414776),
    s = r(707506),
    l = r(566867),
    u = r(239189),
    c = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    d = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    f = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    p = function (e, n, r, i, a) {
        return 'rgba(' + Math.round(n) + ', ' + Math.round(r) + ', ' + Math.round(i) + ', ' + a + ')';
    },
    h = function (e) {
        !i && (i = u.colorNames ? RegExp('(' + Object.keys(u.colorNames).join('|') + ')', 'g') : /^\b$/);
        var n = e.output.map(function (e) {
                return (0, o.je)(e).replace(d, l.c).replace(i, l.c);
            }),
            r = n.map(function (e) {
                return e.match(c).map(Number);
            }),
            h = r[0]
                .map(function (e, n) {
                    return r.map(function (e) {
                        if (!(n in e)) throw Error('The arity of each "output" value must be equal');
                        return e[n];
                    });
                })
                .map(function (n) {
                    return (0, s.m)((0, a.pi)((0, a.pi)({}, e), { output: n }));
                });
        return function (e) {
            var r = 0;
            return n[0]
                .replace(c, function () {
                    return String(h[r++](e));
                })
                .replace(f, p);
        };
    };
