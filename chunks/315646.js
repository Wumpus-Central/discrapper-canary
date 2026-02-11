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
    h = Boolean.prototype.valueOf,
    p = Object.prototype.toString,
    g = Function.prototype.toString,
    E = String.prototype.match,
    A = String.prototype.slice,
    I = String.prototype.replace,
    T = String.prototype.toUpperCase,
    y = String.prototype.toLowerCase,
    S = RegExp.prototype.test,
    v = Array.prototype.concat,
    C = Array.prototype.join,
    b = Array.prototype.slice,
    N = Math.floor,
    R = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    O = Object.getOwnPropertySymbols,
    D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    L = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    w =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === L ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    x = Object.prototype.propertyIsEnumerable,
    P =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function M(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || S.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -N(-e) : N(e);
        if (r !== e) {
            var i = String(r),
                a = A.call(t, i.length + 1);
            return I.call(i, n, "$&_") + "." + I.call(I.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return I.call(t, n, "$&_");
}
var k = n(234629),
    U = k.custom,
    G = Z(U) ? U : null,
    F = { __proto__: null, double: '"', single: "'" },
    V = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function B(e, t, n) {
    var r = F[n.quoteStyle || t];
    return r + e + r;
}
function j(e) {
    return I.call(String(e), /"/g, "&quot;");
}
function H(e) {
    return !w || !("object" == typeof e && (w in e || void 0 !== e[w]));
}
function Y(e) {
    return "[object Array]" === et(e) && H(e);
}
function W(e) {
    return "[object Date]" === et(e) && H(e);
}
function K(e) {
    return "[object RegExp]" === et(e) && H(e);
}
function $(e) {
    return "[object Error]" === et(e) && H(e);
}
function z(e) {
    return "[object String]" === et(e) && H(e);
}
function q(e) {
    return "[object Number]" === et(e) && H(e);
}
function X(e) {
    return "[object Boolean]" === et(e) && H(e);
}
function Z(e) {
    if (L) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !D) return !1;
    try {
        return D.call(e), !0;
    } catch (e) {}
    return !1;
}
function Q(e) {
    if (!e || "object" != typeof e || !R) return !1;
    try {
        return R.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, o) {
    var l = r || {};
    if (ee(l, "quoteStyle") && !ee(F, l.quoteStyle))
        throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        ee(l, "maxStringLength") &&
        ("number" == typeof l.maxStringLength
            ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
            : null !== l.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var d = !ee(l, "customInspect") || l.customInspect;
    if ("boolean" != typeof d && "symbol" !== d)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        ee(l, "indent") &&
        null !== l.indent &&
        "	" !== l.indent &&
        !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ee(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var _ = l.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t) return ec(t, l);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var f = String(t);
        return _ ? M(t, f) : f;
    }
    if ("bigint" == typeof t) {
        var p = String(t) + "n";
        return _ ? M(t, p) : p;
    }
    var g = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= g && g > 0 && "object" == typeof t)) return Y(t) ? "[Array]" : "[Object]";
    var E = em(l, i);
    if (void 0 === o) o = [];
    else if (er(o, t) >= 0) return "[Circular]";
    function T(t, n, r) {
        if ((n && (o = b.call(o)).push(n), r)) {
            var a = { depth: l.depth };
            return ee(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o);
        }
        return e(t, l, i + 1, o);
    }
    if ("function" == typeof t && !K(t)) {
        var S = en(t),
            N = eE(t, T);
        return (
            "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (N.length > 0 ? " { " + C.call(N, ", ") + " }" : "")
        );
    }
    if (Z(t)) {
        var O = L ? I.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : D.call(t);
        return "object" != typeof t || L ? O : e_(O);
    }
    if (eu(t)) {
        for (var U = "<" + y.call(String(t.nodeName)), V = t.attributes || [], H = 0; H < V.length; H++)
            U += " " + V[H].name + "=" + B(j(V[H].value), "double", l);
        return (
            (U += ">"),
            t.childNodes && t.childNodes.length && (U += "..."),
            (U += "</" + y.call(String(t.nodeName)) + ">")
        );
    }
    if (Y(t)) {
        if (0 === t.length) return "[]";
        var J = eE(t, T);
        return E && !ep(J) ? "[" + eg(J, E) + "]" : "[ " + C.call(J, ", ") + " ]";
    }
    if ($(t)) {
        var ed = eE(t, T);
        return "cause" in Error.prototype || !("cause" in t) || x.call(t, "cause")
            ? 0 === ed.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + C.call(ed, ", ") + " }"
            : "{ [" + String(t) + "] " + C.call(v.call("[cause]: " + T(t.cause), ed), ", ") + " }";
    }
    if ("object" == typeof t && d) {
        if (G && "function" == typeof t[G] && k) return k(t, { depth: g - i });
        else if ("symbol" !== d && "function" == typeof t.inspect) return t.inspect();
    }
    if (ei(t)) {
        var eA = [];
        return (
            s &&
                s.call(t, function (e, n) {
                    eA.push(T(n, t, !0) + " => " + T(e, t));
                }),
            eh("Map", a.call(t), eA, E)
        );
    }
    if (eo(t)) {
        var eI = [];
        return (
            c &&
                c.call(t, function (e) {
                    eI.push(T(e, t));
                }),
            eh("Set", u.call(t), eI, E)
        );
    }
    if (ea(t)) return ef("WeakMap");
    if (el(t)) return ef("WeakSet");
    if (es(t)) return ef("WeakRef");
    if (q(t)) return e_(T(Number(t)));
    if (Q(t)) return e_(T(R.call(t)));
    if (X(t)) return e_(h.call(t));
    if (z(t)) return e_(T(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!W(t) && !K(t)) {
        var eT = eE(t, T),
            ey = P ? P(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eS = t instanceof Object ? "" : "null prototype",
            ev = !ey && w && Object(t) === t && w in t ? A.call(et(t), 8, -1) : eS ? "Object" : "",
            eC =
                (ey || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (ev || eS ? "[" + C.call(v.call([], ev || [], eS || []), ": ") + "] " : "");
        return 0 === eT.length ? eC + "{}" : E ? eC + "{" + eg(eT, E) + "}" : eC + "{ " + C.call(eT, ", ") + " }";
    }
    return String(t);
};
var J =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function ee(e, t) {
    return J.call(e, t);
}
function et(e) {
    return p.call(e);
}
function en(e) {
    if (e.name) return e.name;
    var t = E.call(g.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
}
function er(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function ei(e) {
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
function ea(e) {
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
function es(e) {
    if (!f || !e || "object" != typeof e) return !1;
    try {
        return f.call(e), !0;
    } catch (e) {}
    return !1;
}
function eo(e) {
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
function el(e) {
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
function eu(e) {
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
        return ec(A.call(e, 0, t.maxStringLength), t) + r;
    }
    var i = V[t.quoteStyle || "single"];
    return (i.lastIndex = 0), B(I.call(I.call(e, i, "\\$1"), /[\x00-\x1f]/g, ed), "single", t);
}
function ed(e) {
    var t = e.charCodeAt(0),
        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + T.call(t.toString(16));
}
function e_(e) {
    return "Object(" + e + ")";
}
function ef(e) {
    return e + " { ? }";
}
function eh(e, t, n, r) {
    return e + " (" + t + ") {" + (r ? eg(n, r) : C.call(n, ", ")) + "}";
}
function ep(e) {
    for (var t = 0; t < e.length; t++) if (er(e[t], "\n") >= 0) return !1;
    return !0;
}
function em(e, t) {
    var n;
    if ("	" === e.indent) n = "	";
    else {
        if ("number" != typeof e.indent || !(e.indent > 0)) return null;
        n = C.call(Array(e.indent + 1), " ");
    }
    return { base: n, prev: C.call(Array(t + 1), n) };
}
function eg(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + C.call(e, "," + n) + "\n" + t.prev;
}
function eE(e, t) {
    var n,
        r = Y(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = ee(e, a) ? t(e[a], e) : "";
    }
    var s = "function" == typeof O ? O(e) : [];
    if (L) {
        n = {};
        for (var o = 0; o < s.length; o++) n["$" + s[o]] = s[o];
    }
    for (var l in e)
        if (ee(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (L && n["$" + l] instanceof Symbol) continue;
            else S.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof O)
        for (var u = 0; u < s.length; u++) x.call(e, s[u]) && i.push("[" + t(s[u]) + "]: " + t(e[s[u]], e));
    return i;
}
