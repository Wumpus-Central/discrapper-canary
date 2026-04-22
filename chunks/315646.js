var r = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    s = r && i && "function" == typeof i.get ? i.get : null,
    a = r && Map.prototype.forEach,
    o = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    u = o && l && "function" == typeof l.get ? l.get : null,
    d = o && Set.prototype.forEach,
    c = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    _ = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    E = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    p = Function.prototype.toString,
    m = String.prototype.match,
    g = String.prototype.slice,
    A = String.prototype.replace,
    I = String.prototype.toUpperCase,
    T = String.prototype.toLowerCase,
    S = RegExp.prototype.test,
    y = Array.prototype.concat,
    N = Array.prototype.join,
    O = Array.prototype.slice,
    R = Math.floor,
    v = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    C = Object.getOwnPropertySymbols,
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    D = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    L =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === D ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    w = Object.prototype.propertyIsEnumerable,
    M =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function P(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || S.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -R(-e) : R(e);
        if (r !== e) {
            var i = String(r),
                s = g.call(t, i.length + 1);
            return A.call(i, n, "$&_") + "." + A.call(A.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return A.call(t, n, "$&_");
}
var U = n(234629),
    k = U.custom,
    x = W(k) ? k : null,
    G = { __proto__: null, double: '"', single: "'" },
    V = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function F(e, t, n) {
    var r = G[n.quoteStyle || t];
    return r + e + r;
}
function B(e) {
    return !L || !("object" == typeof e && (L in e || void 0 !== e[L]));
}
function H(e) {
    return "[object Array]" === $(e) && B(e);
}
function Y(e) {
    return "[object RegExp]" === $(e) && B(e);
}
function W(e) {
    if (D) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !b) return !1;
    try {
        return b.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, o) {
    var l,
        h,
        I,
        S,
        R,
        C = r || {};
    if (K(C, "quoteStyle") && !K(G, C.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        K(C, "maxStringLength") &&
        ("number" == typeof C.maxStringLength
            ? C.maxStringLength < 0 && C.maxStringLength !== 1 / 0
            : null !== C.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var k = !K(C, "customInspect") || C.customInspect;
    if ("boolean" != typeof k && "symbol" !== k)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        K(C, "indent") &&
        null !== C.indent &&
        "	" !== C.indent &&
        !(parseInt(C.indent, 10) === C.indent && C.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (K(C, "numericSeparator") && "boolean" != typeof C.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var j = C.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t)
        return (function e(t, n) {
            if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return e(g.call(t, 0, n.maxStringLength), n) + ("... " + r) + " more character" + (r > 1 ? "s" : "");
            }
            var i = V[n.quoteStyle || "single"];
            return (i.lastIndex = 0), F(A.call(A.call(t, i, "\\$1"), /[\x00-\x1f]/g, q), "single", n);
        })(t, C);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var et = String(t);
        return j ? P(t, et) : et;
    }
    if ("bigint" == typeof t) {
        var en = String(t) + "n";
        return j ? P(t, en) : en;
    }
    var er = void 0 === C.depth ? 5 : C.depth;
    if ((void 0 === i && (i = 0), i >= er && er > 0 && "object" == typeof t)) return H(t) ? "[Array]" : "[Object]";
    var ei = (function (e, t) {
        var n;
        if ("	" === e.indent) n = "	";
        else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            n = N.call(Array(e.indent + 1), " ");
        }
        return { base: n, prev: N.call(Array(t + 1), n) };
    })(C, i);
    if (void 0 === o) o = [];
    else if (z(o, t) >= 0) return "[Circular]";
    function es(t, n, r) {
        if ((n && (o = O.call(o)).push(n), r)) {
            var s = { depth: C.depth };
            return K(C, "quoteStyle") && (s.quoteStyle = C.quoteStyle), e(t, s, i + 1, o);
        }
        return e(t, C, i + 1, o);
    }
    if ("function" == typeof t && !Y(t)) {
        var ea = (function (e) {
                if (e.name) return e.name;
                var t = m.call(p.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            })(t),
            eo = ee(t, es);
        return (
            "[Function" +
            (ea ? ": " + ea : " (anonymous)") +
            "]" +
            (eo.length > 0 ? " { " + N.call(eo, ", ") + " }" : "")
        );
    }
    if (W(t)) {
        var el = D ? A.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : b.call(t);
        return "object" != typeof t || D ? el : X(el);
    }
    if (
        (eu = t) &&
        "object" == typeof eu &&
        (("u" > typeof HTMLElement && eu instanceof HTMLElement) ||
            ("string" == typeof eu.nodeName && "function" == typeof eu.getAttribute))
    ) {
        for (var eu, ed, ec = "<" + T.call(String(t.nodeName)), e_ = t.attributes || [], ef = 0; ef < e_.length; ef++) {
            ec += " " + e_[ef].name + "=" + F(((ed = e_[ef].value), A.call(String(ed), /"/g, "&quot;")), "double", C);
        }
        return (
            (ec += ">"),
            t.childNodes && t.childNodes.length && (ec += "..."),
            (ec += "</" + T.call(String(t.nodeName)) + ">")
        );
    }
    if (H(t)) {
        if (0 === t.length) return "[]";
        var eE = ee(t, es);
        return ei &&
            !(function (e) {
                for (var t = 0; t < e.length; t++) if (z(e[t], "\n") >= 0) return !1;
                return !0;
            })(eE)
            ? "[" + Z(eE, ei) + "]"
            : "[ " + N.call(eE, ", ") + " ]";
    }
    if ("[object Error]" === $((l = t)) && B(l)) {
        var eh = ee(t, es);
        return "cause" in Error.prototype || !("cause" in t) || w.call(t, "cause")
            ? 0 === eh.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + N.call(eh, ", ") + " }"
            : "{ [" + String(t) + "] " + N.call(y.call("[cause]: " + es(t.cause), eh), ", ") + " }";
    }
    if ("object" == typeof t && k) {
        if (x && "function" == typeof t[x] && U) return U(t, { depth: er - i });
        else if ("symbol" !== k && "function" == typeof t.inspect) return t.inspect();
    }
    if (
        (function (e) {
            if (!s || !e || "object" != typeof e) return !1;
            try {
                s.call(e);
                try {
                    u.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Map;
            } catch (e) {}
            return !1;
        })(t)
    ) {
        var ep = [];
        return (
            a &&
                a.call(t, function (e, n) {
                    ep.push(es(n, t, !0) + " => " + es(e, t));
                }),
            J("Map", s.call(t), ep, ei)
        );
    }
    if (
        (function (e) {
            if (!u || !e || "object" != typeof e) return !1;
            try {
                u.call(e);
                try {
                    s.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Set;
            } catch (e) {}
            return !1;
        })(t)
    ) {
        var em = [];
        return (
            d &&
                d.call(t, function (e) {
                    em.push(es(e, t));
                }),
            J("Set", u.call(t), em, ei)
        );
    }
    if (
        (function (e) {
            if (!c || !e || "object" != typeof e) return !1;
            try {
                c.call(e, c);
                try {
                    _.call(e, _);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch (e) {}
            return !1;
        })(t)
    )
        return Q("WeakMap");
    if (
        (function (e) {
            if (!_ || !e || "object" != typeof e) return !1;
            try {
                _.call(e, _);
                try {
                    c.call(e, c);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch (e) {}
            return !1;
        })(t)
    )
        return Q("WeakSet");
    if (
        (function (e) {
            if (!f || !e || "object" != typeof e) return !1;
            try {
                return f.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return Q("WeakRef");
    if ("[object Number]" === $((h = t)) && B(h)) return X(es(Number(t)));
    if (
        (function (e) {
            if (!e || "object" != typeof e || !v) return !1;
            try {
                return v.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return X(es(v.call(t)));
    if ("[object Boolean]" === $((I = t)) && B(I)) return X(E.call(t));
    if ("[object String]" === $((S = t)) && B(S)) return X(es(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!("[object Date]" === $((R = t)) && B(R)) && !Y(t)) {
        var eg = ee(t, es),
            eA = M ? M(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eI = t instanceof Object ? "" : "null prototype",
            eT = !eA && L && Object(t) === t && L in t ? g.call($(t), 8, -1) : eI ? "Object" : "",
            eS =
                (eA || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (eT || eI ? "[" + N.call(y.call([], eT || [], eI || []), ": ") + "] " : "");
        return 0 === eg.length ? eS + "{}" : ei ? eS + "{" + Z(eg, ei) + "}" : eS + "{ " + N.call(eg, ", ") + " }";
    }
    return String(t);
};
var j =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function K(e, t) {
    return j.call(e, t);
}
function $(e) {
    return h.call(e);
}
function z(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function q(e) {
    var t = e.charCodeAt(0),
        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + I.call(t.toString(16));
}
function X(e) {
    return "Object(" + e + ")";
}
function Q(e) {
    return e + " { ? }";
}
function J(e, t, n, r) {
    return e + " (" + t + ") {" + (r ? Z(n, r) : N.call(n, ", ")) + "}";
}
function Z(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + N.call(e, "," + n) + "\n" + t.prev;
}
function ee(e, t) {
    var n,
        r = H(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var s = 0; s < e.length; s++) i[s] = K(e, s) ? t(e[s], e) : "";
    }
    var a = "function" == typeof C ? C(e) : [];
    if (D) {
        n = {};
        for (var o = 0; o < a.length; o++) n["$" + a[o]] = a[o];
    }
    for (var l in e)
        if (K(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (D && n["$" + l] instanceof Symbol) continue;
            else S.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof C)
        for (var u = 0; u < a.length; u++) w.call(e, a[u]) && i.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
    return i;
}
