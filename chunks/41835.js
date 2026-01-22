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
    if (!v(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
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
        O(o) || !T(o) ? (s += " " + o) : (s += " " + c(o));
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
function c(e, n) {
    var r = {
        seen: [],
        stylize: d,
    };
    return (
        arguments.length >= 3 && (r.depth = arguments[2]),
        arguments.length >= 4 && (r.colors = arguments[3]),
        y(n) ? (r.showHidden = n) : n && t._extend(r, n),
        S(r.showHidden) && (r.showHidden = !1),
        S(r.depth) && (r.depth = 2),
        S(r.colors) && (r.colors = !1),
        S(r.customInspect) && (r.customInspect = !0),
        r.colors && (r.stylize = u),
        p(r, e, r.depth)
    );
}
function u(e, t) {
    var n = c.styles[t];
    return n ? "\x1B[" + c.colors[n][0] + "m" + e + "\x1B[" + c.colors[n][1] + "m" : e;
}
function d(e, t) {
    return e;
}
function f(e) {
    var t = {};
    return (
        e.forEach(function (e, n) {
            t[e] = !0;
        }),
        t
    );
}
function p(e, n, r) {
    if (
        e.customInspect &&
        n &&
        R(n.inspect) &&
        n.inspect !== t.inspect &&
        !(n.constructor && n.constructor.prototype === n)
    ) {
        var i,
            a = n.inspect(r, e);
        return v(a) || (a = p(e, a, r)), a;
    }
    var s = _(e, n);
    if (s) return s;
    var o = Object.keys(n),
        l = f(o);
    if (
        (e.showHidden && (o = Object.getOwnPropertyNames(n)),
        N(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    )
        return h(n);
    if (0 === o.length) {
        if (R(n)) {
            var c = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + c + "]", "special");
        }
        if (I(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        if (C(n)) return e.stylize(Date.prototype.toString.call(n), "date");
        if (N(n)) return h(n);
    }
    var u = "",
        d = !1,
        y = ["{", "}"];
    if (
        (b(n) && ((d = !0), (y = ["[", "]"])),
        R(n) && (u = " [Function" + (n.name ? ": " + n.name : "") + "]"),
        I(n) && (u = " " + RegExp.prototype.toString.call(n)),
        C(n) && (u = " " + Date.prototype.toUTCString.call(n)),
        N(n) && (u = " " + h(n)),
        0 === o.length && (!d || 0 == n.length))
    )
        return y[0] + u + y[1];
    if (r < 0)
        if (I(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        else return e.stylize("[Object]", "special");
    return (
        e.seen.push(n),
        (i = d
            ? m(e, n, r, l, o)
            : o.map(function (t) {
                  return g(e, n, r, l, t, d);
              })),
        e.seen.pop(),
        E(i, u, y)
    );
}
function _(e, t) {
    if (S(t)) return e.stylize("undefined", "undefined");
    if (v(t)) {
        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(n, "string");
    }
    return A(t)
        ? e.stylize("" + t, "number")
        : y(t)
          ? e.stylize("" + t, "boolean")
          : O(t)
            ? e.stylize("null", "null")
            : void 0;
}
function h(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
}
function m(e, t, n, r, i) {
    for (var a = [], s = 0, o = t.length; s < o; ++s)
        L(t, String(s)) ? a.push(g(e, t, n, r, String(s), !0)) : a.push("");
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
        L(r, i) || (s = "[" + i + "]"),
        !o &&
            (0 > e.seen.indexOf(l.value)
                ? (o = O(n) ? p(e, l.value, null) : p(e, l.value, n - 1)).indexOf("\n") > -1 &&
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
        S(s))
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
function b(e) {
    return Array.isArray(e);
}
function y(e) {
    return "boolean" == typeof e;
}
function O(e) {
    return null === e;
}
function A(e) {
    return "number" == typeof e;
}
function v(e) {
    return "string" == typeof e;
}
function S(e) {
    return void 0 === e;
}
function I(e) {
    return T(e) && "[object RegExp]" === w(e);
}
function T(e) {
    return "object" == typeof e && null !== e;
}
function C(e) {
    return T(e) && "[object Date]" === w(e);
}
function N(e) {
    return T(e) && ("[object Error]" === w(e) || e instanceof Error);
}
function R(e) {
    return "function" == typeof e;
}
function w(e) {
    return Object.prototype.toString.call(e);
}
function P(e) {
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
    (t.inspect = c),
    (c.colors = {
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
    (c.styles = {
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
    (t.isArray = b),
    (t.isBoolean = y),
    (t.isNull = O),
    (t.isNullOrUndefined = function (e) {
        return null == e;
    }),
    (t.isNumber = A),
    (t.isString = v),
    (t.isSymbol = function (e) {
        return "symbol" == typeof e;
    }),
    (t.isUndefined = S),
    (t.isRegExp = I),
    (t.types.isRegExp = I),
    (t.isObject = T),
    (t.isDate = C),
    (t.types.isDate = C),
    (t.isError = N),
    (t.types.isNativeError = N),
    (t.isFunction = R),
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
var D = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function x() {
    var e = new Date(),
        t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":");
    return [e.getDate(), D[e.getMonth()], t].join(" ");
}
function L(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    console.log("%s - %s", x(), t.format.apply(t, arguments));
}),
    (t.inherits = n(618628)),
    (t._extend = function (e, t) {
        if (!t || !T(t)) return e;
        for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
        return e;
    });
var j = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function M(e, t) {
    if (!e) {
        var n = Error("Promise was rejected with a falsy value");
        (n.reason = e), (e = n);
    }
    return t(e);
}
(t.promisify = function (e) {
    if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (j && e[j]) {
        var t = e[j];
        if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return (
            Object.defineProperty(t, j, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0,
            }),
            t
        );
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
        j &&
            Object.defineProperty(t, j, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0,
            }),
        Object.defineProperties(t, i(e))
    );
}),
    (t.promisify.custom = j),
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
                    r.nextTick(M.bind(null, e, s));
                },
            );
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t;
    });
