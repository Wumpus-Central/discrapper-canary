var r = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    a = r && i && "function" == typeof i.get ? i.get : null,
    s = r && Map.prototype.forEach,
    o = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    c = o && l && "function" == typeof l.get ? l.get : null,
    u = o && Set.prototype.forEach,
    d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    _ = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    m = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    b = String.prototype.replace,
    y = String.prototype.toUpperCase,
    O = String.prototype.toLowerCase,
    A = RegExp.prototype.test,
    v = Array.prototype.concat,
    S = Array.prototype.join,
    I = Array.prototype.slice,
    T = Math.floor,
    C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    N = Object.getOwnPropertySymbols,
    R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    w = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    P =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === w ? "object" : "symbol")
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
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || A.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -T(-e) : T(e);
        if (r !== e) {
            var i = String(r),
                a = E.call(t, i.length + 1);
            return b.call(i, n, "$&_") + "." + b.call(b.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return b.call(t, n, "$&_");
}
var j = n(234629),
    M = j.custom,
    k = Z(M) ? M : null,
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

function V(e, t, n) {
    var r = U[n.quoteStyle || t];
    return r + e + r;
}

function F(e) {
    return b.call(String(e), /"/g, "&quot;");
}

function B(e) {
    return !P || !("object" == typeof e && (P in e || void 0 !== e[P]));
}

function H(e) {
    return "[object Array]" === ee(e) && B(e);
}

function Y(e) {
    return "[object Date]" === ee(e) && B(e);
}

function W(e) {
    return "[object RegExp]" === ee(e) && B(e);
}

function K(e) {
    return "[object Error]" === ee(e) && B(e);
}

function z(e) {
    return "[object String]" === ee(e) && B(e);
}

function q(e) {
    return "[object Number]" === ee(e) && B(e);
}

function X(e) {
    return "[object Boolean]" === ee(e) && B(e);
}

function Z(e) {
    if (w) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !R) return !1;
    try {
        return R.call(e), !0;
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
e.exports = function e(t, r, i, o) {
    var l = r || {};
    if (J(l, "quoteStyle") && !J(U, l.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        J(l, "maxStringLength") &&
        ("number" == typeof l.maxStringLength
            ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
            : null !== l.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var d = !J(l, "customInspect") || l.customInspect;
    if ("boolean" != typeof d && "symbol" !== d)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        J(l, "indent") &&
        null !== l.indent &&
        "	" !== l.indent &&
        !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (J(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
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
        var h = String(t) + "n";
        return f ? L(t, h) : h;
    }
    var m = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= m && m > 0 && "object" == typeof t)) return H(t) ? "[Array]" : "[Object]";
    var g = eh(l, i);
    if (void 0 === o) o = [];
    else if (en(o, t) >= 0) return "[Circular]";

    function y(t, n, r) {
        if ((n && (o = I.call(o)).push(n), r)) {
            var a = {
                depth: l.depth,
            };
            return J(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o);
        }
        return e(t, l, i + 1, o);
    }
    if ("function" == typeof t && !W(t)) {
        var A = et(t),
            T = eg(t, y);
        return (
            "[Function" + (A ? ": " + A : " (anonymous)") + "]" + (T.length > 0 ? " { " + S.call(T, ", ") + " }" : "")
        );
    }
    if (Z(t)) {
        var N = w ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : R.call(t);
        return "object" != typeof t || w ? N : ed(N);
    }
    if (el(t)) {
        for (var M = "<" + O.call(String(t.nodeName)), G = t.attributes || [], B = 0; B < G.length; B++)
            M += " " + G[B].name + "=" + V(F(G[B].value), "double", l);
        return (
            (M += ">"),
            t.childNodes && t.childNodes.length && (M += "..."),
            (M += "</" + O.call(String(t.nodeName)) + ">")
        );
    }
    if (H(t)) {
        if (0 === t.length) return "[]";
        var $ = eg(t, y);
        return g && !e_($) ? "[" + em($, g) + "]" : "[ " + S.call($, ", ") + " ]";
    }
    if (K(t)) {
        var eu = eg(t, y);
        return "cause" in Error.prototype || !("cause" in t) || D.call(t, "cause")
            ? 0 === eu.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + S.call(eu, ", ") + " }"
            : "{ [" + String(t) + "] " + S.call(v.call("[cause]: " + y(t.cause), eu), ", ") + " }";
    }
    if ("object" == typeof t && d) {
        if (k && "function" == typeof t[k] && j)
            return j(t, {
                depth: m - i,
            });
        else if ("symbol" !== d && "function" == typeof t.inspect) return t.inspect();
    }
    if (er(t)) {
        var eE = [];
        return (
            s &&
                s.call(t, function (e, n) {
                    eE.push(y(n, t, !0) + " => " + y(e, t));
                }),
            ep("Map", a.call(t), eE, g)
        );
    }
    if (es(t)) {
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
    if (eo(t)) return ef("WeakSet");
    if (ea(t)) return ef("WeakRef");
    if (q(t)) return ed(y(Number(t)));
    if (Q(t)) return ed(y(C.call(t)));
    if (X(t)) return ed(_.call(t));
    if (z(t)) return ed(y(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!Y(t) && !W(t)) {
        var ey = eg(t, y),
            eO = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eA = t instanceof Object ? "" : "null prototype",
            ev = !eO && P && Object(t) === t && P in t ? E.call(ee(t), 8, -1) : eA ? "Object" : "",
            eS =
                (eO || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (ev || eA ? "[" + S.call(v.call([], ev || [], eA || []), ": ") + "] " : "");
        return 0 === ey.length ? eS + "{}" : g ? eS + "{" + em(ey, g) + "}" : eS + "{ " + S.call(ey, ", ") + " }";
    }
    return String(t);
};
var $ =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };

function J(e, t) {
    return $.call(e, t);
}

function ee(e) {
    return h.call(e);
}

function et(e) {
    if (e.name) return e.name;
    var t = g.call(m.call(e), /^function\s*([\w$]+)/);
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

function es(e) {
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

function eo(e) {
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
        (!!("u" > typeof HTMLElement && e instanceof HTMLElement) ||
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
    return (i.lastIndex = 0), V(b.call(b.call(e, i, "\\$1"), /[\x00-\x1f]/g, eu), "single", t);
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
    return e + " (" + t + ") {" + (r ? em(n, r) : S.call(n, ", ")) + "}";
}

function e_(e) {
    for (var t = 0; t < e.length; t++) if (en(e[t], "\n") >= 0) return !1;
    return !0;
}

function eh(e, t) {
    var n;
    if ("	" === e.indent) n = "	";
    else {
        if ("number" != typeof e.indent || !(e.indent > 0)) return null;
        n = S.call(Array(e.indent + 1), " ");
    }
    return {
        base: n,
        prev: S.call(Array(t + 1), n),
    };
}

function em(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + S.call(e, "," + n) + "\n" + t.prev;
}

function eg(e, t) {
    var n,
        r = H(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = J(e, a) ? t(e[a], e) : "";
    }
    var s = "function" == typeof N ? N(e) : [];
    if (w) {
        n = {};
        for (var o = 0; o < s.length; o++) n["$" + s[o]] = s[o];
    }
    for (var l in e)
        if (J(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (w && n["$" + l] instanceof Symbol) continue;
            else A.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof N)
        for (var c = 0; c < s.length; c++) D.call(e, s[c]) && i.push("[" + t(s[c]) + "]: " + t(e[s[c]], e));
    return i;
}
