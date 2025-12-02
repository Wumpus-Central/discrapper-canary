var r = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    a = r && i && "function" == typeof i.get ? i.get : null,
    o = r && Map.prototype.forEach,
    s = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    c = s && l && "function" == typeof l.get ? l.get : null,
    u = s && Set.prototype.forEach,
    d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    _ = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    h = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    b = String.prototype.replace,
    y = String.prototype.toUpperCase,
    O = String.prototype.toLowerCase,
    v = RegExp.prototype.test,
    S = Array.prototype.concat,
    I = Array.prototype.join,
    T = Array.prototype.slice,
    A = Math.floor,
    C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    N = Object.getOwnPropertySymbols,
    P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    w =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === R ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    D = Object.prototype.propertyIsEnumerable,
    x =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function L(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || v.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -A(-e) : A(e);
        if (r !== e) {
            var i = String(r),
                a = E.call(t, i.length + 1);
            return b.call(i, n, "$&_") + "." + b.call(b.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return b.call(t, n, "$&_");
}
var j = n(706827),
    M = j.custom,
    k = X(M) ? M : null,
    U = {
        __proto__: null,
        double: '"',
        single: "'",
    },
    G = {
        __proto__: null,
        double: /(["\\])/g,
        single: /(['\\])/g,
    };
function Z(e, t, n) {
    var r = U[n.quoteStyle || t];
    return r + e + r;
}
function B(e) {
    return b.call(String(e), /"/g, "&quot;");
}
function F(e) {
    return !w || !("object" == typeof e && (w in e || void 0 !== e[w]));
}
function V(e) {
    return "[object Array]" === ee(e) && F(e);
}
function H(e) {
    return "[object Date]" === ee(e) && F(e);
}
function Y(e) {
    return "[object RegExp]" === ee(e) && F(e);
}
function W(e) {
    return "[object Error]" === ee(e) && F(e);
}
function K(e) {
    return "[object String]" === ee(e) && F(e);
}
function z(e) {
    return "[object Number]" === ee(e) && F(e);
}
function q(e) {
    return "[object Boolean]" === ee(e) && F(e);
}
function X(e) {
    if (R) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !P) return !1;
    try {
        return P.call(e), !0;
    } catch (e) {}
    return !1;
}
function Q(e) {
    if (!e || "object" != typeof e || !C) return !1;
    try {
        return C.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, s) {
    var l = r || {};
    if ($(l, "quoteStyle") && !$(U, l.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        $(l, "maxStringLength") &&
        ("number" == typeof l.maxStringLength
            ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
            : null !== l.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var d = !$(l, "customInspect") || l.customInspect;
    if ("boolean" != typeof d && "symbol" !== d)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        $(l, "indent") &&
        null !== l.indent &&
        "\t" !== l.indent &&
        !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if ($(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var f = l.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t) return ec(t, l);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var p = String(t);
        return f ? L(t, p) : p;
    }
    if ("bigint" == typeof t) {
        var m = String(t) + "n";
        return f ? L(t, m) : m;
    }
    var h = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= h && h > 0 && "object" == typeof t)) return V(t) ? "[Array]" : "[Object]";
    var g = em(l, i);
    if (void 0 === s) s = [];
    else if (en(s, t) >= 0) return "[Circular]";
    function y(t, n, r) {
        if ((n && (s = T.call(s)).push(n), r)) {
            var a = { depth: l.depth };
            return $(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, s);
        }
        return e(t, l, i + 1, s);
    }
    if ("function" == typeof t && !Y(t)) {
        var v = et(t),
            A = eg(t, y);
        return (
            "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (A.length > 0 ? " { " + I.call(A, ", ") + " }" : "")
        );
    }
    if (X(t)) {
        var N = R ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(t);
        return "object" != typeof t || R ? N : ed(N);
    }
    if (el(t)) {
        for (var M = "<" + O.call(String(t.nodeName)), G = t.attributes || [], F = 0; F < G.length; F++)
            M += " " + G[F].name + "=" + Z(B(G[F].value), "double", l);
        return (
            (M += ">"),
            t.childNodes && t.childNodes.length && (M += "..."),
            (M += "</" + O.call(String(t.nodeName)) + ">")
        );
    }
    if (V(t)) {
        if (0 === t.length) return "[]";
        var J = eg(t, y);
        return g && !e_(J) ? "[" + eh(J, g) + "]" : "[ " + I.call(J, ", ") + " ]";
    }
    if (W(t)) {
        var eu = eg(t, y);
        return "cause" in Error.prototype || !("cause" in t) || D.call(t, "cause")
            ? 0 === eu.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + I.call(eu, ", ") + " }"
            : "{ [" + String(t) + "] " + I.call(S.call("[cause]: " + y(t.cause), eu), ", ") + " }";
    }
    if ("object" == typeof t && d) {
        if (k && "function" == typeof t[k] && j) return j(t, { depth: h - i });
        else if ("symbol" !== d && "function" == typeof t.inspect) return t.inspect();
    }
    if (er(t)) {
        var eE = [];
        return (
            o &&
                o.call(t, function (e, n) {
                    eE.push(y(n, t, !0) + " => " + y(e, t));
                }),
            ep("Map", a.call(t), eE, g)
        );
    }
    if (eo(t)) {
        var eb = [];
        return (
            u &&
                u.call(t, function (e) {
                    eb.push(y(e, t));
                }),
            ep("Set", c.call(t), eb, g)
        );
    }
    if (ei(t)) return ef("WeakMap");
    if (es(t)) return ef("WeakSet");
    if (ea(t)) return ef("WeakRef");
    if (z(t)) return ed(y(Number(t)));
    if (Q(t)) return ed(y(C.call(t)));
    if (q(t)) return ed(_.call(t));
    if (K(t)) return ed(y(String(t)));
    if ("undefined" != typeof window && t === window) return "{ [object Window] }";
    if (("undefined" != typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!H(t) && !Y(t)) {
        var ey = eg(t, y),
            eO = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            ev = t instanceof Object ? "" : "null prototype",
            eS = !eO && w && Object(t) === t && w in t ? E.call(ee(t), 8, -1) : ev ? "Object" : "",
            eI =
                (eO || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (eS || ev ? "[" + I.call(S.call([], eS || [], ev || []), ": ") + "] " : "");
        return 0 === ey.length ? eI + "{}" : g ? eI + "{" + eh(ey, g) + "}" : eI + "{ " + I.call(ey, ", ") + " }";
    }
    return String(t);
};
var J =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function $(e, t) {
    return J.call(e, t);
}
function ee(e) {
    return m.call(e);
}
function et(e) {
    if (e.name) return e.name;
    var t = g.call(h.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
}
function en(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function er(e) {
    if (!a || !e || "object" != typeof e) return !1;
    try {
        a.call(e);
        try {
            c.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Map;
    } catch (e) {}
    return !1;
}
function ei(e) {
    if (!d || !e || "object" != typeof e) return !1;
    try {
        d.call(e, d);
        try {
            f.call(e, f);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    } catch (e) {}
    return !1;
}
function ea(e) {
    if (!p || !e || "object" != typeof e) return !1;
    try {
        return p.call(e), !0;
    } catch (e) {}
    return !1;
}
function eo(e) {
    if (!c || !e || "object" != typeof e) return !1;
    try {
        c.call(e);
        try {
            a.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Set;
    } catch (e) {}
    return !1;
}
function es(e) {
    if (!f || !e || "object" != typeof e) return !1;
    try {
        f.call(e, f);
        try {
            d.call(e, d);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    } catch (e) {}
    return !1;
}
function el(e) {
    return (
        !!e &&
        "object" == typeof e &&
        (!!("undefined" != typeof HTMLElement && e instanceof HTMLElement) ||
            ("string" == typeof e.nodeName && "function" == typeof e.getAttribute))
    );
}
function ec(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength,
            r = "... " + n + " more character" + (n > 1 ? "s" : "");
        return ec(E.call(e, 0, t.maxStringLength), t) + r;
    }
    var i = G[t.quoteStyle || "single"];
    return (i.lastIndex = 0), Z(b.call(b.call(e, i, "\\$1"), /[\x00-\x1f]/g, eu), "single", t);
}
function eu(e) {
    var t = e.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r",
        }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + y.call(t.toString(16));
}
function ed(e) {
    return "Object(" + e + ")";
}
function ef(e) {
    return e + " { ? }";
}
function ep(e, t, n, r) {
    return e + " (" + t + ") {" + (r ? eh(n, r) : I.call(n, ", ")) + "}";
}
function e_(e) {
    for (var t = 0; t < e.length; t++) if (en(e[t], "\n") >= 0) return !1;
    return !0;
}
function em(e, t) {
    var n;
    if ("\t" === e.indent) n = "\t";
    else {
        if ("number" != typeof e.indent || !(e.indent > 0)) return null;
        n = I.call(Array(e.indent + 1), " ");
    }
    return {
        base: n,
        prev: I.call(Array(t + 1), n),
    };
}
function eh(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + I.call(e, "," + n) + "\n" + t.prev;
}
function eg(e, t) {
    var n,
        r = V(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = $(e, a) ? t(e[a], e) : "";
    }
    var o = "function" == typeof N ? N(e) : [];
    if (R) {
        n = {};
        for (var s = 0; s < o.length; s++) n["$" + o[s]] = o[s];
    }
    for (var l in e)
        if ($(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (R && n["$" + l] instanceof Symbol) continue;
            else v.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof N)
        for (var c = 0; c < o.length; c++) D.call(e, o[c]) && i.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
    return i;
}
