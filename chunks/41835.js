var r = n(72290),
    i =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
                n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
        },
    a = /%[sdj%]/g;
(t.format = function (e) {
    if (!S(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
        return t.join(" ");
    }
    for (
        var n = 1,
            r = arguments,
            i = r.length,
            s = String(e).replace(a, function (e) {
                if ("%%" === e) return "%";
                if (n >= i) return e;
                switch (e) {
                    case "%s":
                        return String(r[n++]);
                    case "%d":
                        return Number(r[n++]);
                    case "%j":
                        try {
                            return JSON.stringify(r[n++]);
                        } catch (e) {
                            return "[Circular]";
                        }
                    default:
                        return e;
                }
            }),
            o = r[n];
        n < i;
        o = r[++n]
    )
        T(o) || !b(o) ? (s += " " + o) : (s += " " + u(o));
    return s;
}),
    (t.deprecate = function (e, n) {
        if (void 0 !== r && !0 === r.noDeprecation) return e;
        if (void 0 === r)
            return function () {
                return t.deprecate(e, n).apply(this, arguments);
            };
        var i = !1;
        return function () {
            if (!i) {
                if (r.throwDeprecation) throw Error(n);
                r.traceDeprecation ? console.trace(n) : console.error(n), (i = !0);
            }
            return e.apply(this, arguments);
        };
    });
var s = {},
    o = /^$/;
if (r.env.NODE_DEBUG) {
    var l = r.env.NODE_DEBUG;
    o = RegExp(
        "^" +
            (l = l
                .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
                .replace(/\*/g, ".*")
                .replace(/,/g, "$|^")
                .toUpperCase()) +
            "$",
        "i",
    );
}
function u(e, n) {
    var r = { seen: [], stylize: d };
    return (
        arguments.length >= 3 && (r.depth = arguments[2]),
        arguments.length >= 4 && (r.colors = arguments[3]),
        I(n) ? (r.showHidden = n) : n && t._extend(r, n),
        v(r.showHidden) && (r.showHidden = !1),
        v(r.depth) && (r.depth = 2),
        v(r.colors) && (r.colors = !1),
        v(r.customInspect) && (r.customInspect = !0),
        r.colors && (r.stylize = c),
        f(r, e, r.depth)
    );
}
function c(e, t) {
    var n = u.styles[t];
    return n ? "\x1b[" + u.colors[n][0] + "m" + e + "\x1b[" + u.colors[n][1] + "m" : e;
}
function d(e, t) {
    return e;
}
function _(e) {
    var t = {};
    return (
        e.forEach(function (e, n) {
            t[e] = !0;
        }),
        t
    );
}
function f(e, n, r) {
    if (
        e.customInspect &&
        n &&
        O(n.inspect) &&
        n.inspect !== t.inspect &&
        !(n.constructor && n.constructor.prototype === n)
    ) {
        var i,
            a = n.inspect(r, e);
        return S(a) || (a = f(e, a, r)), a;
    }
    var s = p(e, n);
    if (s) return s;
    var o = Object.keys(n),
        l = _(o);
    if (
        (e.showHidden && (o = Object.getOwnPropertyNames(n)),
        R(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    )
        return h(n);
    if (0 === o.length) {
        if (O(n)) {
            var u = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + u + "]", "special");
        }
        if (C(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        if (N(n)) return e.stylize(Date.prototype.toString.call(n), "date");
        if (R(n)) return h(n);
    }
    var c = "",
        d = !1,
        I = ["{", "}"];
    if (
        (A(n) && ((d = !0), (I = ["[", "]"])),
        O(n) && (c = " [Function" + (n.name ? ": " + n.name : "") + "]"),
        C(n) && (c = " " + RegExp.prototype.toString.call(n)),
        N(n) && (c = " " + Date.prototype.toUTCString.call(n)),
        R(n) && (c = " " + h(n)),
        0 === o.length && (!d || 0 == n.length))
    )
        return I[0] + c + I[1];
    if (r < 0)
        if (C(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        else return e.stylize("[Object]", "special");
    return (
        e.seen.push(n),
        (i = d
            ? m(e, n, r, l, o)
            : o.map(function (t) {
                  return g(e, n, r, l, t, d);
              })),
        e.seen.pop(),
        E(i, c, I)
    );
}
function p(e, t) {
    if (v(t)) return e.stylize("undefined", "undefined");
    if (S(t)) {
        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(n, "string");
    }
    return y(t)
        ? e.stylize("" + t, "number")
        : I(t)
          ? e.stylize("" + t, "boolean")
          : T(t)
            ? e.stylize("null", "null")
            : void 0;
}
function h(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
}
function m(e, t, n, r, i) {
    for (var a = [], s = 0, o = t.length; s < o; ++s)
        P(t, String(s)) ? a.push(g(e, t, n, r, String(s), !0)) : a.push("");
    return (
        i.forEach(function (i) {
            i.match(/^\d+$/) || a.push(g(e, t, n, r, i, !0));
        }),
        a
    );
}
function g(e, t, n, r, i, a) {
    var s, o, l;
    if (
        ((l = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
            ? (o = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
            : l.set && (o = e.stylize("[Setter]", "special")),
        P(r, i) || (s = "[" + i + "]"),
        !o &&
            (0 > e.seen.indexOf(l.value)
                ? (o = T(n) ? f(e, l.value, null) : f(e, l.value, n - 1)).indexOf("\n") > -1 &&
                  (o = a
                      ? o
                            .split("\n")
                            .map(function (e) {
                                return "  " + e;
                            })
                            .join("\n")
                            .slice(2)
                      : "\n" +
                        o
                            .split("\n")
                            .map(function (e) {
                                return "   " + e;
                            })
                            .join("\n"))
                : (o = e.stylize("[Circular]", "special"))),
        v(s))
    ) {
        if (a && i.match(/^\d+$/)) return o;
        (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((s = s.slice(1, -1)), (s = e.stylize(s, "name")))
            : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (s = e.stylize(s, "string")));
    }
    return s + ": " + o;
}
function E(e, t, n) {
    var r = 0;
    return e.reduce(function (e, t) {
        return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60
        ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1]
        : n[0] + t + " " + e.join(", ") + " " + n[1];
}
function A(e) {
    return Array.isArray(e);
}
function I(e) {
    return "boolean" == typeof e;
}
function T(e) {
    return null === e;
}
function y(e) {
    return "number" == typeof e;
}
function S(e) {
    return "string" == typeof e;
}
function v(e) {
    return void 0 === e;
}
function C(e) {
    return b(e) && "[object RegExp]" === D(e);
}
function b(e) {
    return "object" == typeof e && null !== e;
}
function N(e) {
    return b(e) && "[object Date]" === D(e);
}
function R(e) {
    return b(e) && ("[object Error]" === D(e) || e instanceof Error);
}
function O(e) {
    return "function" == typeof e;
}
function D(e) {
    return Object.prototype.toString.call(e);
}
function L(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
(t.debuglog = function (e) {
    if (!s[(e = e.toUpperCase())])
        if (o.test(e)) {
            var n = r.pid;
            s[e] = function () {
                var r = t.format.apply(t, arguments);
                console.error("%s %d: %s", e, n, r);
            };
        } else s[e] = function () {};
    return s[e];
}),
    (t.inspect = u),
    (u.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39],
    }),
    (u.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red",
    }),
    (t.types = n(709930)),
    (t.isArray = A),
    (t.isBoolean = I),
    (t.isNull = T),
    (t.isNullOrUndefined = function (e) {
        return null == e;
    }),
    (t.isNumber = y),
    (t.isString = S),
    (t.isSymbol = function (e) {
        return "symbol" == typeof e;
    }),
    (t.isUndefined = v),
    (t.isRegExp = C),
    (t.types.isRegExp = C),
    (t.isObject = b),
    (t.isDate = N),
    (t.types.isDate = N),
    (t.isError = R),
    (t.types.isNativeError = R),
    (t.isFunction = O),
    (t.isPrimitive = function (e) {
        return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
        );
    }),
    (t.isBuffer = n(308505));
var w = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function x() {
    var e = new Date(),
        t = [L(e.getHours()), L(e.getMinutes()), L(e.getSeconds())].join(":");
    return [e.getDate(), w[e.getMonth()], t].join(" ");
}
function P(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    console.log("%s - %s", x(), t.format.apply(t, arguments));
}),
    (t.inherits = n(618628)),
    (t._extend = function (e, t) {
        if (!t || !b(t)) return e;
        for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
        return e;
    });
var M = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function k(e, t) {
    if (!e) {
        var n = Error("Promise was rejected with a falsy value");
        (n.reason = e), (e = n);
    }
    return t(e);
}
(t.promisify = function (e) {
    if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (M && e[M]) {
        var t = e[M];
        if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, M, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
    }
    function t() {
        for (
            var t,
                n,
                r = new Promise(function (e, r) {
                    (t = e), (n = r);
                }),
                i = [],
                a = 0;
            a < arguments.length;
            a++
        )
            i.push(arguments[a]);
        i.push(function (e, r) {
            e ? n(e) : t(r);
        });
        try {
            e.apply(this, i);
        } catch (e) {
            n(e);
        }
        return r;
    }
    return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        M && Object.defineProperty(t, M, { value: t, enumerable: !1, writable: !1, configurable: !0 }),
        Object.defineProperties(t, i(e))
    );
}),
    (t.promisify.custom = M),
    (t.callbackify = function (e) {
        if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
        function t() {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
            var i = t.pop();
            if ("function" != typeof i) throw TypeError("The last argument must be of type Function");
            var a = this,
                s = function () {
                    return i.apply(a, arguments);
                };
            e.apply(this, t).then(
                function (e) {
                    r.nextTick(s.bind(null, null, e));
                },
                function (e) {
                    r.nextTick(k.bind(null, e, s));
                },
            );
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t;
    });
