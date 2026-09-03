r.r(t), r.d(t, { createStringInterpolator: () => P });
var n,
    i = function () {
        return (i =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    },
    o = r(85402),
    a = r(929849),
    s = "[-+]?\\d*\\.?\\d+",
    l = s + "%";
function u() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var c = RegExp("rgb" + u(s, s, s)),
    f = RegExp("rgba" + u(s, s, s, s)),
    d = RegExp("hsl" + u(s, l, l)),
    p = RegExp("hsla" + u(s, l, l, s)),
    h = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    m = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    v = /^#([0-9a-fA-F]{6})$/,
    y = /^#([0-9a-fA-F]{8})$/,
    g = r(672722);
function b(e, t, r) {
    var n = (1 - Math.abs(2 * r - 1)) * t,
        i = n * (1 - Math.abs(((e / 60) % 2) - 1)),
        o = r - n / 2,
        a =
            e < 60
                ? [n, i, 0]
                : e < 120
                  ? [i, n, 0]
                  : e < 180
                    ? [0, n, i]
                    : e < 240
                      ? [0, i, n]
                      : e < 300
                        ? [i, 0, n]
                        : [n, 0, i];
    return (
        (Math.round((a[0] + o) * 255) << 24) |
        (Math.round((a[1] + o) * 255) << 16) |
        (Math.round((a[2] + o) * 255) << 8)
    );
}
function w(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function _(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function S(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function x(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function E(e) {
    var t,
        r =
            "number" == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
                    ? e
                    : null
                : (t = v.exec(e))
                  ? parseInt(t[1] + "ff", 16) >>> 0
                  : g.colorNames && void 0 !== g.colorNames[e]
                    ? g.colorNames[e]
                    : (t = c.exec(e))
                      ? ((w(t[1]) << 24) | (w(t[2]) << 16) | (w(t[3]) << 8) | 255) >>> 0
                      : (t = f.exec(e))
                        ? ((w(t[1]) << 24) | (w(t[2]) << 16) | (w(t[3]) << 8) | S(t[4])) >>> 0
                        : (t = h.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                          : (t = y.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = m.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = d.exec(e))
                                ? (255 | b(_(t[1]), x(t[2]), x(t[3]))) >>> 0
                                : (t = p.exec(e))
                                  ? (b(_(t[1]), x(t[2]), x(t[3])) | S(t[4])) >>> 0
                                  : null;
    return null === r
        ? e
        : "rgba(" +
              ((0xff000000 & (r = r || 0)) >>> 24) +
              ", " +
              ((0xff0000 & r) >>> 16) +
              ", " +
              ((65280 & r) >>> 8) +
              ", " +
              (255 & r) / 255 +
              ")";
}
var k = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    C = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    T = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    M = function (e, t, r, n, i) {
        return "rgba(" + Math.round(t) + ", " + Math.round(r) + ", " + Math.round(n) + ", " + i + ")";
    },
    P = function (e) {
        n || (n = g.colorNames ? RegExp("(" + Object.keys(g.colorNames).join("|") + ")", "g") : /^\b$/);
        var t = e.output.map(function (e) {
                return (0, o.oq)(e).replace(C, E).replace(n, E);
            }),
            r = t.map(function (e) {
                return e.match(k).map(Number);
            }),
            s = r[0]
                .map(function (e, t) {
                    return r.map(function (e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    });
                })
                .map(function (t) {
                    return (0, a.k)(i(i({}, e), { output: t }));
                });
        return function (e) {
            var r = 0;
            return t[0]
                .replace(k, function () {
                    return String(s[r++](e));
                })
                .replace(T, M);
        };
    };
