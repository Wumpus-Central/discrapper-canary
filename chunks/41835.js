var n = r(72290),
    o =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
            return r;
        },
    i = /%[sdj%]/g;
(t.format = function (e) {
    if (!b(e)) {
        for (var t = [], r = 0; r < arguments.length; r++) t.push(u(arguments[r]));
        return t.join(" ");
    }
    for (
        var r = 1,
            n = arguments,
            o = n.length,
            a = String(e).replace(i, function (e) {
                if ("%%" === e) return "%";
                if (r >= o) return e;
                switch (e) {
                    case "%s":
                        return String(n[r++]);
                    case "%d":
                        return Number(n[r++]);
                    case "%j":
                        try {
                            return JSON.stringify(n[r++]);
                        } catch (e) {
                            return "[Circular]";
                        }
                    default:
                        return e;
                }
            }),
            s = n[r];
        r < o;
        s = n[++r]
    )
        y(s) || !S(s) ? (a += " " + s) : (a += " " + u(s));
    return a;
}),
    (t.deprecate = function (e, r) {
        if (void 0 !== n && !0 === n.noDeprecation) return e;
        if (void 0 === n)
            return function () {
                return t.deprecate(e, r).apply(this, arguments);
            };
        var o = !1;
        return function () {
            if (!o) {
                if (n.throwDeprecation) throw Error(r);
                n.traceDeprecation ? console.trace(r) : console.error(r), (o = !0);
            }
            return e.apply(this, arguments);
        };
    });
var a = {},
    s = /^$/;
if (n.env.NODE_DEBUG) {
    var l = n.env.NODE_DEBUG;
    s = RegExp(
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
function u(e, r) {
    var n = { seen: [], stylize: f };
    return (
        arguments.length >= 3 && (n.depth = arguments[2]),
        arguments.length >= 4 && (n.colors = arguments[3]),
        v(r) ? (n.showHidden = r) : r && t._extend(n, r),
        w(n.showHidden) && (n.showHidden = !1),
        w(n.depth) && (n.depth = 2),
        w(n.colors) && (n.colors = !1),
        w(n.customInspect) && (n.customInspect = !0),
        n.colors && (n.stylize = c),
        p(n, e, n.depth)
    );
}
function c(e, t) {
    var r = u.styles[t];
    return r ? "\x1b[" + u.colors[r][0] + "m" + e + "\x1b[" + u.colors[r][1] + "m" : e;
}
function f(e, t) {
    return e;
}
function p(e, r, n) {
    if (
        e.customInspect &&
        r &&
        k(r.inspect) &&
        r.inspect !== t.inspect &&
        !(r.constructor && r.constructor.prototype === r)
    ) {
        var o,
            i,
            a,
            s,
            l,
            u,
            c = r.inspect(n, e);
        return b(c) || (c = p(e, c, n)), c;
    }
    var f = (function (e, t) {
        if (w(t)) return e.stylize("undefined", "undefined");
        if (b(t)) {
            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(r, "string");
        }
        return g(t)
            ? e.stylize("" + t, "number")
            : v(t)
              ? e.stylize("" + t, "boolean")
              : y(t)
                ? e.stylize("null", "null")
                : void 0;
    })(e, r);
    if (f) return f;
    var S = Object.keys(r),
        C =
            ((l = {}),
            S.forEach(function (e, t) {
                l[e] = !0;
            }),
            l);
    if (
        (e.showHidden && (S = Object.getOwnPropertyNames(r)),
        x(r) && (S.indexOf("message") >= 0 || S.indexOf("description") >= 0))
    )
        return d(r);
    if (0 === S.length) {
        if (k(r)) {
            var T = r.name ? ": " + r.name : "";
            return e.stylize("[Function" + T + "]", "special");
        }
        if (_(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
        if (E(r)) return e.stylize(Date.prototype.toString.call(r), "date");
        if (x(r)) return d(r);
    }
    var M = "",
        A = !1,
        O = ["{", "}"];
    if (
        (m(r) && ((A = !0), (O = ["[", "]"])),
        k(r) && (M = " [Function" + (r.name ? ": " + r.name : "") + "]"),
        _(r) && (M = " " + RegExp.prototype.toString.call(r)),
        E(r) && (M = " " + Date.prototype.toUTCString.call(r)),
        x(r) && (M = " " + d(r)),
        0 === S.length && (!A || 0 == r.length))
    )
        return O[0] + M + O[1];
    if (n < 0)
        if (_(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
        else return e.stylize("[Object]", "special");
    return (
        e.seen.push(r),
        (u = A
            ? (function (e, t, r, n, o) {
                  for (var i = [], a = 0, s = t.length; a < s; ++a)
                      P(t, String(a)) ? i.push(h(e, t, r, n, String(a), !0)) : i.push("");
                  return (
                      o.forEach(function (o) {
                          o.match(/^\d+$/) || i.push(h(e, t, r, n, o, !0));
                      }),
                      i
                  );
              })(e, r, n, C, S)
            : S.map(function (t) {
                  return h(e, r, n, C, t, A);
              })),
        e.seen.pop(),
        (o = u),
        (i = M),
        (a = O),
        (s = 0),
        o.reduce(function (e, t) {
            return s++, t.indexOf("\n") >= 0 && s++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60
            ? a[0] + ("" === i ? "" : i + "\n ") + " " + o.join(",\n  ") + " " + a[1]
            : a[0] + i + " " + o.join(", ") + " " + a[1]
    );
}
function d(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
}
function h(e, t, r, n, o, i) {
    var a, s, l;
    if (
        ((l = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }).get
            ? (s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
            : l.set && (s = e.stylize("[Setter]", "special")),
        P(n, o) || (a = "[" + o + "]"),
        !s &&
            (0 > e.seen.indexOf(l.value)
                ? (s = y(r) ? p(e, l.value, null) : p(e, l.value, r - 1)).indexOf("\n") > -1 &&
                  (s = i
                      ? s
                            .split("\n")
                            .map(function (e) {
                                return "  " + e;
                            })
                            .join("\n")
                            .slice(2)
                      : "\n" +
                        s
                            .split("\n")
                            .map(function (e) {
                                return "   " + e;
                            })
                            .join("\n"))
                : (s = e.stylize("[Circular]", "special"))),
        w(a))
    ) {
        if (i && o.match(/^\d+$/)) return s;
        (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.slice(1, -1)), (a = e.stylize(a, "name")))
            : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
    }
    return a + ": " + s;
}
function m(e) {
    return Array.isArray(e);
}
function v(e) {
    return "boolean" == typeof e;
}
function y(e) {
    return null === e;
}
function g(e) {
    return "number" == typeof e;
}
function b(e) {
    return "string" == typeof e;
}
function w(e) {
    return void 0 === e;
}
function _(e) {
    return S(e) && "[object RegExp]" === C(e);
}
function S(e) {
    return "object" == typeof e && null !== e;
}
function E(e) {
    return S(e) && "[object Date]" === C(e);
}
function x(e) {
    return S(e) && ("[object Error]" === C(e) || e instanceof Error);
}
function k(e) {
    return "function" == typeof e;
}
function C(e) {
    return Object.prototype.toString.call(e);
}
function T(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
(t.debuglog = function (e) {
    if (!a[(e = e.toUpperCase())])
        if (s.test(e)) {
            var r = n.pid;
            a[e] = function () {
                var n = t.format.apply(t, arguments);
                console.error("%s %d: %s", e, r, n);
            };
        } else a[e] = function () {};
    return a[e];
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
    (t.types = r(709930)),
    (t.isArray = m),
    (t.isBoolean = v),
    (t.isNull = y),
    (t.isNullOrUndefined = function (e) {
        return null == e;
    }),
    (t.isNumber = g),
    (t.isString = b),
    (t.isSymbol = function (e) {
        return "symbol" == typeof e;
    }),
    (t.isUndefined = w),
    (t.isRegExp = _),
    (t.types.isRegExp = _),
    (t.isObject = S),
    (t.isDate = E),
    (t.types.isDate = E),
    (t.isError = x),
    (t.types.isNativeError = x),
    (t.isFunction = k),
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
    (t.isBuffer = r(308505));
var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function P(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    var e, r;
    console.log(
        "%s - %s",
        ((r = [T((e = new Date()).getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":")),
        [e.getDate(), M[e.getMonth()], r].join(" ")),
        t.format.apply(t, arguments),
    );
}),
    (t.inherits = r(618628)),
    (t._extend = function (e, t) {
        if (!t || !S(t)) return e;
        for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
        return e;
    });
var A = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function O(e, t) {
    if (!e) {
        var r = Error("Promise was rejected with a falsy value");
        (r.reason = e), (e = r);
    }
    return t(e);
}
(t.promisify = function (e) {
    if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (A && e[A]) {
        var t = e[A];
        if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, A, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
    }
    function t() {
        for (
            var t,
                r,
                n = new Promise(function (e, n) {
                    (t = e), (r = n);
                }),
                o = [],
                i = 0;
            i < arguments.length;
            i++
        )
            o.push(arguments[i]);
        o.push(function (e, n) {
            e ? r(e) : t(n);
        });
        try {
            e.apply(this, o);
        } catch (e) {
            r(e);
        }
        return n;
    }
    return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        A && Object.defineProperty(t, A, { value: t, enumerable: !1, writable: !1, configurable: !0 }),
        Object.defineProperties(t, o(e))
    );
}),
    (t.promisify.custom = A),
    (t.callbackify = function (e) {
        if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
        function t() {
            for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
            var o = t.pop();
            if ("function" != typeof o) throw TypeError("The last argument must be of type Function");
            var i = this,
                a = function () {
                    return o.apply(i, arguments);
                };
            e.apply(this, t).then(
                function (e) {
                    n.nextTick(a.bind(null, null, e));
                },
                function (e) {
                    n.nextTick(O.bind(null, e, a));
                },
            );
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, o(e)), t;
    });
