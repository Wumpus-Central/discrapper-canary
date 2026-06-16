var i = n(72290),
    r =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++)
                n[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
            return n;
        },
    s = /%[sdj%]/g;
(t.format = function (e) {
    if (!A(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
        return t.join(" ");
    }
    for (
        var n = 1,
            i = arguments,
            r = i.length,
            a = String(e).replace(s, function (e) {
                if ("%%" === e) return "%";
                if (n >= r) return e;
                switch (e) {
                    case "%s":
                        return String(i[n++]);
                    case "%d":
                        return Number(i[n++]);
                    case "%j":
                        try {
                            return JSON.stringify(i[n++]);
                        } catch (e) {
                            return "[Circular]";
                        }
                    default:
                        return e;
                }
            }),
            o = i[n];
        n < r;
        o = i[++n]
    )
        m(o) || !S(o) ? (a += " " + o) : (a += " " + u(o));
    return a;
}),
    (t.deprecate = function (e, n) {
        if (void 0 !== i && !0 === i.noDeprecation) return e;
        if (void 0 === i)
            return function () {
                return t.deprecate(e, n).apply(this, arguments);
            };
        var r = !1;
        return function () {
            if (!r) {
                if (i.throwDeprecation) throw Error(n);
                i.traceDeprecation ? console.trace(n) : console.error(n), (r = !0);
            }
            return e.apply(this, arguments);
        };
    });
var a = {},
    o = /^$/;
if (i.env.NODE_DEBUG) {
    var l = i.env.NODE_DEBUG;
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
    var i = { seen: [], stylize: d };
    return (
        arguments.length >= 3 && (i.depth = arguments[2]),
        arguments.length >= 4 && (i.colors = arguments[3]),
        E(n) ? (i.showHidden = n) : n && t._extend(i, n),
        I(i.showHidden) && (i.showHidden = !1),
        I(i.depth) && (i.depth = 2),
        I(i.colors) && (i.colors = !1),
        I(i.customInspect) && (i.customInspect = !0),
        i.colors && (i.stylize = c),
        _(i, e, i.depth)
    );
}
function c(e, t) {
    var n = u.styles[t];
    return n ? "\x1b[" + u.colors[n][0] + "m" + e + "\x1b[" + u.colors[n][1] + "m" : e;
}
function d(e, t) {
    return e;
}
function _(e, n, i) {
    if (
        e.customInspect &&
        n &&
        N(n.inspect) &&
        n.inspect !== t.inspect &&
        !(n.constructor && n.constructor.prototype === n)
    ) {
        var r,
            s,
            a,
            o,
            l,
            u,
            c = n.inspect(i, e);
        return A(c) || (c = _(e, c, i)), c;
    }
    var d = (function (e, t) {
        if (I(t)) return e.stylize("undefined", "undefined");
        if (A(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(n, "string");
        }
        return g(t)
            ? e.stylize("" + t, "number")
            : E(t)
              ? e.stylize("" + t, "boolean")
              : m(t)
                ? e.stylize("null", "null")
                : void 0;
    })(e, n);
    if (d) return d;
    var S = Object.keys(n),
        v =
            ((l = {}),
            S.forEach(function (e, t) {
                l[e] = !0;
            }),
            l);
    if (
        (e.showHidden && (S = Object.getOwnPropertyNames(n)),
        C(n) && (S.indexOf("message") >= 0 || S.indexOf("description") >= 0))
    )
        return h(n);
    if (0 === S.length) {
        if (N(n)) {
            var R = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + R + "]", "special");
        }
        if (T(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        if (y(n)) return e.stylize(Date.prototype.toString.call(n), "date");
        if (C(n)) return h(n);
    }
    var O = "",
        D = !1,
        L = ["{", "}"];
    if (
        (p(n) && ((D = !0), (L = ["[", "]"])),
        N(n) && (O = " [Function" + (n.name ? ": " + n.name : "") + "]"),
        T(n) && (O = " " + RegExp.prototype.toString.call(n)),
        y(n) && (O = " " + Date.prototype.toUTCString.call(n)),
        C(n) && (O = " " + h(n)),
        0 === S.length && (!D || 0 == n.length))
    )
        return L[0] + O + L[1];
    if (i < 0)
        if (T(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        else return e.stylize("[Object]", "special");
    return (
        e.seen.push(n),
        (u = D
            ? (function (e, t, n, i, r) {
                  for (var s = [], a = 0, o = t.length; a < o; ++a)
                      b(t, String(a)) ? s.push(f(e, t, n, i, String(a), !0)) : s.push("");
                  return (
                      r.forEach(function (r) {
                          r.match(/^\d+$/) || s.push(f(e, t, n, i, r, !0));
                      }),
                      s
                  );
              })(e, n, i, v, S)
            : S.map(function (t) {
                  return f(e, n, i, v, t, D);
              })),
        e.seen.pop(),
        (r = u),
        (s = O),
        (a = L),
        (o = 0),
        r.reduce(function (e, t) {
            return o++, t.indexOf("\n") >= 0 && o++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60
            ? a[0] + ("" === s ? "" : s + "\n ") + " " + r.join(",\n  ") + " " + a[1]
            : a[0] + s + " " + r.join(", ") + " " + a[1]
    );
}
function h(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
}
function f(e, t, n, i, r, s) {
    var a, o, l;
    if (
        ((l = Object.getOwnPropertyDescriptor(t, r) || { value: t[r] }).get
            ? (o = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
            : l.set && (o = e.stylize("[Setter]", "special")),
        b(i, r) || (a = "[" + r + "]"),
        !o &&
            (0 > e.seen.indexOf(l.value)
                ? (o = m(n) ? _(e, l.value, null) : _(e, l.value, n - 1)).indexOf("\n") > -1 &&
                  (o = s
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
        I(a))
    ) {
        if (s && r.match(/^\d+$/)) return o;
        (a = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.slice(1, -1)), (a = e.stylize(a, "name")))
            : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
    }
    return a + ": " + o;
}
function p(e) {
    return Array.isArray(e);
}
function E(e) {
    return "boolean" == typeof e;
}
function m(e) {
    return null === e;
}
function g(e) {
    return "number" == typeof e;
}
function A(e) {
    return "string" == typeof e;
}
function I(e) {
    return void 0 === e;
}
function T(e) {
    return S(e) && "[object RegExp]" === v(e);
}
function S(e) {
    return "object" == typeof e && null !== e;
}
function y(e) {
    return S(e) && "[object Date]" === v(e);
}
function C(e) {
    return S(e) && ("[object Error]" === v(e) || e instanceof Error);
}
function N(e) {
    return "function" == typeof e;
}
function v(e) {
    return Object.prototype.toString.call(e);
}
function R(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
(t.debuglog = function (e) {
    if (!a[(e = e.toUpperCase())])
        if (o.test(e)) {
            var n = i.pid;
            a[e] = function () {
                var i = t.format.apply(t, arguments);
                console.error("%s %d: %s", e, n, i);
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
    (t.types = n(709930)),
    (t.isArray = p),
    (t.isBoolean = E),
    (t.isNull = m),
    (t.isNullOrUndefined = function (e) {
        return null == e;
    }),
    (t.isNumber = g),
    (t.isString = A),
    (t.isSymbol = function (e) {
        return "symbol" == typeof e;
    }),
    (t.isUndefined = I),
    (t.isRegExp = T),
    (t.types.isRegExp = T),
    (t.isObject = S),
    (t.isDate = y),
    (t.types.isDate = y),
    (t.isError = C),
    (t.types.isNativeError = C),
    (t.isFunction = N),
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
var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function b(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    var e, n;
    console.log(
        "%s - %s",
        ((n = [R((e = new Date()).getHours()), R(e.getMinutes()), R(e.getSeconds())].join(":")),
        [e.getDate(), O[e.getMonth()], n].join(" ")),
        t.format.apply(t, arguments),
    );
}),
    (t.inherits = n(618628)),
    (t._extend = function (e, t) {
        if (!t || !S(t)) return e;
        for (var n = Object.keys(t), i = n.length; i--; ) e[n[i]] = t[n[i]];
        return e;
    });
var D = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function L(e, t) {
    if (!e) {
        var n = Error("Promise was rejected with a falsy value");
        (n.reason = e), (e = n);
    }
    return t(e);
}
(t.promisify = function (e) {
    if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (D && e[D]) {
        var t = e[D];
        if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, D, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
    }
    function t() {
        for (
            var t,
                n,
                i = new Promise(function (e, i) {
                    (t = e), (n = i);
                }),
                r = [],
                s = 0;
            s < arguments.length;
            s++
        )
            r.push(arguments[s]);
        r.push(function (e, i) {
            e ? n(e) : t(i);
        });
        try {
            e.apply(this, r);
        } catch (e) {
            n(e);
        }
        return i;
    }
    return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        D && Object.defineProperty(t, D, { value: t, enumerable: !1, writable: !1, configurable: !0 }),
        Object.defineProperties(t, r(e))
    );
}),
    (t.promisify.custom = D),
    (t.callbackify = function (e) {
        if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
        function t() {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
            var r = t.pop();
            if ("function" != typeof r) throw TypeError("The last argument must be of type Function");
            var s = this,
                a = function () {
                    return r.apply(s, arguments);
                };
            e.apply(this, t).then(
                function (e) {
                    i.nextTick(a.bind(null, null, e));
                },
                function (e) {
                    i.nextTick(L.bind(null, e, a));
                },
            );
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, r(e)), t;
    });
