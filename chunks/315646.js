var r = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    a = r && i && "function" == typeof i.get ? i.get : null,
    s = r && Map.prototype.forEach,
    o = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    u = o && l && "function" == typeof l.get ? l.get : null,
    c = o && Set.prototype.forEach,
    d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    _ = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    p = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    m = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    A = String.prototype.replace,
    I = String.prototype.toUpperCase,
    T = String.prototype.toLowerCase,
    y = RegExp.prototype.test,
    S = Array.prototype.concat,
    v = Array.prototype.join,
    C = Array.prototype.slice,
    b = Math.floor,
    N = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    R = Object.getOwnPropertySymbols,
    O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    D = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    L =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === D ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    w = Object.prototype.propertyIsEnumerable,
    x =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function P(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || y.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -b(-e) : b(e);
        if (r !== e) {
            var i = String(r),
                a = E.call(t, i.length + 1);
            return A.call(i, n, "$&_") + "." + A.call(A.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return A.call(t, n, "$&_");
}
var M = n(234629),
    k = M.custom,
    U = Z(k) ? k : null,
    G = { __proto__: null, double: '"', single: "'" },
    V = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function F(e, t, n) {
    var r = G[n.quoteStyle || t];
    return r + e + r;
}
function B(e) {
    return A.call(String(e), /"/g, "&quot;");
}
function j(e) {
    return !L || !("object" == typeof e && (L in e || void 0 !== e[L]));
}
function H(e) {
    return "[object Array]" === ee(e) && j(e);
}
function Y(e) {
    return "[object Date]" === ee(e) && j(e);
}
function W(e) {
    return "[object RegExp]" === ee(e) && j(e);
}
function K(e) {
    return "[object Error]" === ee(e) && j(e);
}
function z(e) {
    return "[object String]" === ee(e) && j(e);
}
function $(e) {
    return "[object Number]" === ee(e) && j(e);
}
function q(e) {
    return "[object Boolean]" === ee(e) && j(e);
}
function Z(e) {
    if (D) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !O) return !1;
    try {
        return O.call(e), !0;
    } catch (e) {}
    return !1;
}
function Q(e) {
    if (!e || "object" != typeof e || !N) return !1;
    try {
        return N.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, o) {
    var l = r || {};
    if (J(l, "quoteStyle") && !J(G, l.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
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
    var _ = l.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t) return eu(t, l);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var f = String(t);
        return _ ? P(t, f) : f;
    }
    if ("bigint" == typeof t) {
        var h = String(t) + "n";
        return _ ? P(t, h) : h;
    }
    var m = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= m && m > 0 && "object" == typeof t)) return H(t) ? "[Array]" : "[Object]";
    var g = eh(l, i);
    if (void 0 === o) o = [];
    else if (en(o, t) >= 0) return "[Circular]";
    function I(t, n, r) {
        if ((n && (o = C.call(o)).push(n), r)) {
            var a = { depth: l.depth };
            return J(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o);
        }
        return e(t, l, i + 1, o);
    }
    if ("function" == typeof t && !W(t)) {
        var y = et(t),
            b = eg(t, I);
        return (
            "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (b.length > 0 ? " { " + v.call(b, ", ") + " }" : "")
        );
    }
    if (Z(t)) {
        var R = D ? A.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(t);
        return "object" != typeof t || D ? R : ed(R);
    }
    if (el(t)) {
        for (var k = "<" + T.call(String(t.nodeName)), V = t.attributes || [], j = 0; j < V.length; j++)
            k += " " + V[j].name + "=" + F(B(V[j].value), "double", l);
        return (
            (k += ">"),
            t.childNodes && t.childNodes.length && (k += "..."),
            (k += "</" + T.call(String(t.nodeName)) + ">")
        );
    }
    if (H(t)) {
        if (0 === t.length) return "[]";
        var X = eg(t, I);
        return g && !ep(X) ? "[" + em(X, g) + "]" : "[ " + v.call(X, ", ") + " ]";
    }
    if (K(t)) {
        var ec = eg(t, I);
        return "cause" in Error.prototype || !("cause" in t) || w.call(t, "cause")
            ? 0 === ec.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + v.call(ec, ", ") + " }"
            : "{ [" + String(t) + "] " + v.call(S.call("[cause]: " + I(t.cause), ec), ", ") + " }";
    }
    if ("object" == typeof t && d) {
        if (U && "function" == typeof t[U] && M) return M(t, { depth: m - i });
        else if ("symbol" !== d && "function" == typeof t.inspect) return t.inspect();
    }
    if (er(t)) {
        var eE = [];
        return (
            s &&
                s.call(t, function (e, n) {
                    eE.push(I(n, t, !0) + " => " + I(e, t));
                }),
            ef("Map", a.call(t), eE, g)
        );
    }
    if (es(t)) {
        var eA = [];
        return (
            c &&
                c.call(t, function (e) {
                    eA.push(I(e, t));
                }),
            ef("Set", u.call(t), eA, g)
        );
    }
    if (ei(t)) return e_("WeakMap");
    if (eo(t)) return e_("WeakSet");
    if (ea(t)) return e_("WeakRef");
    if ($(t)) return ed(I(Number(t)));
    if (Q(t)) return ed(I(N.call(t)));
    if (q(t)) return ed(p.call(t));
    if (z(t)) return ed(I(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!Y(t) && !W(t)) {
        var eI = eg(t, I),
            eT = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            ey = t instanceof Object ? "" : "null prototype",
            eS = !eT && L && Object(t) === t && L in t ? E.call(ee(t), 8, -1) : ey ? "Object" : "",
            ev =
                (eT || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (eS || ey ? "[" + v.call(S.call([], eS || [], ey || []), ": ") + "] " : "");
        return 0 === eI.length ? ev + "{}" : g ? ev + "{" + em(eI, g) + "}" : ev + "{ " + v.call(eI, ", ") + " }";
    }
    return String(t);
};
var X =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function J(e, t) {
    return X.call(e, t);
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
            u.call(e);
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
            _.call(e, _);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    } catch (e) {}
    return !1;
}
function ea(e) {
    if (!f || !e || "object" != typeof e) return !1;
    try {
        return f.call(e), !0;
    } catch (e) {}
    return !1;
}
function es(e) {
    if (!u || !e || "object" != typeof e) return !1;
    try {
        u.call(e);
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
    if (!_ || !e || "object" != typeof e) return !1;
    try {
        _.call(e, _);
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
function eu(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength,
            r = "... " + n + " more character" + (n > 1 ? "s" : "");
        return eu(E.call(e, 0, t.maxStringLength), t) + r;
    }
    var i = V[t.quoteStyle || "single"];
    return (i.lastIndex = 0), F(A.call(A.call(e, i, "\\$1"), /[\x00-\x1f]/g, ec), "single", t);
}
function ec(e) {
    var t = e.charCodeAt(0),
        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + I.call(t.toString(16));
}
function ed(e) {
    return "Object(" + e + ")";
}
function e_(e) {
    return e + " { ? }";
}
function ef(e, t, n, r) {
    return e + " (" + t + ") {" + (r ? em(n, r) : v.call(n, ", ")) + "}";
}
function ep(e) {
    for (var t = 0; t < e.length; t++) if (en(e[t], "\n") >= 0) return !1;
    return !0;
}
function eh(e, t) {
    var n;
    if ("	" === e.indent) n = "	";
    else {
        if ("number" != typeof e.indent || !(e.indent > 0)) return null;
        n = v.call(Array(e.indent + 1), " ");
    }
    return { base: n, prev: v.call(Array(t + 1), n) };
}
function em(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + v.call(e, "," + n) + "\n" + t.prev;
}
function eg(e, t) {
    var n,
        r = H(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = J(e, a) ? t(e[a], e) : "";
    }
    var s = "function" == typeof R ? R(e) : [];
    if (D) {
        n = {};
        for (var o = 0; o < s.length; o++) n["$" + s[o]] = s[o];
    }
    for (var l in e)
        if (J(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (D && n["$" + l] instanceof Symbol) continue;
            else y.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof R)
        for (var u = 0; u < s.length; u++) w.call(e, s[u]) && i.push("[" + t(s[u]) + "]: " + t(e[s[u]], e));
    return i;
}
