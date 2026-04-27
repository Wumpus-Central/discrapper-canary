"use strict";
r.r(t), r.d(t, { createStringInterpolator: () => D });
var n,
    s = function () {
        return (s =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var s in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e;
            }).apply(this, arguments);
    },
    a = r(85402),
    o = r(929849),
    i = "[-+]?\\d*\\.?\\d+",
    u = i + "%";
function c() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var l = RegExp("rgb" + c(i, i, i)),
    d = RegExp("rgba" + c(i, i, i, i)),
    f = RegExp("hsl" + c(i, u, u)),
    p = RegExp("hsla" + c(i, u, u, i)),
    h = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    m = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    v = /^#([0-9a-fA-F]{6})$/,
    g = /^#([0-9a-fA-F]{8})$/,
    y = r(672722);
function b(e, t, r) {
    var n = (1 - Math.abs(2 * r - 1)) * t,
        s = n * (1 - Math.abs(((e / 60) % 2) - 1)),
        a = r - n / 2,
        o =
            e < 60
                ? [n, s, 0]
                : e < 120
                  ? [s, n, 0]
                  : e < 180
                    ? [0, n, s]
                    : e < 240
                      ? [0, s, n]
                      : e < 300
                        ? [s, 0, n]
                        : [n, 0, s];
    return (
        (Math.round((o[0] + a) * 255) << 24) |
        (Math.round((o[1] + a) * 255) << 16) |
        (Math.round((o[2] + a) * 255) << 8)
    );
}
function _(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function x(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function w(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function k(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function M(e) {
    var t,
        r =
            "number" == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
                    ? e
                    : null
                : (t = v.exec(e))
                  ? parseInt(t[1] + "ff", 16) >>> 0
                  : y.colorNames && void 0 !== y.colorNames[e]
                    ? y.colorNames[e]
                    : (t = l.exec(e))
                      ? ((_(t[1]) << 24) | (_(t[2]) << 16) | (_(t[3]) << 8) | 255) >>> 0
                      : (t = d.exec(e))
                        ? ((_(t[1]) << 24) | (_(t[2]) << 16) | (_(t[3]) << 8) | w(t[4])) >>> 0
                        : (t = h.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                          : (t = g.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = m.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = f.exec(e))
                                ? (255 | b(x(t[1]), k(t[2]), k(t[3]))) >>> 0
                                : (t = p.exec(e))
                                  ? (b(x(t[1]), k(t[2]), k(t[3])) | w(t[4])) >>> 0
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
var S = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    E = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    L = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    T = function (e, t, r, n, s) {
        return "rgba(" + Math.round(t) + ", " + Math.round(r) + ", " + Math.round(n) + ", " + s + ")";
    },
    D = function (e) {
        n || (n = y.colorNames ? RegExp("(" + Object.keys(y.colorNames).join("|") + ")", "g") : /^\b$/);
        var t = e.output.map(function (e) {
                return (0, a.oq)(e).replace(E, M).replace(n, M);
            }),
            r = t.map(function (e) {
                return e.match(S).map(Number);
            }),
            i = r[0]
                .map(function (e, t) {
                    return r.map(function (e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    });
                })
                .map(function (t) {
                    return (0, o.k)(s(s({}, e), { output: t }));
                });
        return function (e) {
            var r = 0;
            return t[0]
                .replace(S, function () {
                    return String(i[r++](e));
                })
                .replace(L, T);
        };
    };
