var i = "function" == typeof Map && Map.prototype,
    r = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    s = i && r && "function" == typeof r.get ? r.get : null,
    a = i && Map.prototype.forEach,
    o = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    u = o && l && "function" == typeof l.get ? l.get : null,
    c = o && Set.prototype.forEach,
    d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    _ = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    h = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    f = Boolean.prototype.valueOf,
    p = Object.prototype.toString,
    E = Function.prototype.toString,
    m = String.prototype.match,
    g = String.prototype.slice,
    A = String.prototype.replace,
    I = String.prototype.toUpperCase,
    T = String.prototype.toLowerCase,
    S = RegExp.prototype.test,
    y = Array.prototype.concat,
    C = Array.prototype.join,
    N = Array.prototype.slice,
    v = Math.floor,
    R = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    O = Object.getOwnPropertySymbols,
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
        var i = e < 0 ? -v(-e) : v(e);
        if (i !== e) {
            var r = String(i),
                s = g.call(t, r.length + 1);
            return A.call(r, n, "$&_") + "." + A.call(A.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return A.call(t, n, "$&_");
}
var x = n(234629),
    k = x.custom,
    U = Y(k) ? k : null,
    G = { __proto__: null, double: '"', single: "'" },
    F = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function V(e, t, n) {
    var i = G[n.quoteStyle || t];
    return i + e + i;
}
function B(e) {
    return !L || !("object" == typeof e && (L in e || void 0 !== e[L]));
}
function j(e) {
    return "[object Array]" === $(e) && B(e);
}
function H(e) {
    return "[object RegExp]" === $(e) && B(e);
}
function Y(e) {
    if (D) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !b) return !1;
    try {
        return b.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, i, r, o) {
    var l,
        p,
        I,
        S,
        v,
        O = i || {};
    if (K(O, "quoteStyle") && !K(G, O.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        K(O, "maxStringLength") &&
        ("number" == typeof O.maxStringLength
            ? O.maxStringLength < 0 && O.maxStringLength !== 1 / 0
            : null !== O.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var k = !K(O, "customInspect") || O.customInspect;
    if ("boolean" != typeof k && "symbol" !== k)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        K(O, "indent") &&
        null !== O.indent &&
        "	" !== O.indent &&
        !(parseInt(O.indent, 10) === O.indent && O.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (K(O, "numericSeparator") && "boolean" != typeof O.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var W = O.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t)
        return (function e(t, n) {
            if (t.length > n.maxStringLength) {
                var i = t.length - n.maxStringLength;
                return e(g.call(t, 0, n.maxStringLength), n) + ("... " + i) + " more character" + (i > 1 ? "s" : "");
            }
            var r = F[n.quoteStyle || "single"];
            return (r.lastIndex = 0), V(A.call(A.call(t, r, "\\$1"), /[\x00-\x1f]/g, q), "single", n);
        })(t, O);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var et = String(t);
        return W ? P(t, et) : et;
    }
    if ("bigint" == typeof t) {
        var en = String(t) + "n";
        return W ? P(t, en) : en;
    }
    var ei = void 0 === O.depth ? 5 : O.depth;
    if ((void 0 === r && (r = 0), r >= ei && ei > 0 && "object" == typeof t)) return j(t) ? "[Array]" : "[Object]";
    var er = (function (e, t) {
        var n;
        if ("	" === e.indent) n = "	";
        else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            n = C.call(Array(e.indent + 1), " ");
        }
        return { base: n, prev: C.call(Array(t + 1), n) };
    })(O, r);
    if (void 0 === o) o = [];
    else if (z(o, t) >= 0) return "[Circular]";
    function es(t, n, i) {
        if ((n && (o = N.call(o)).push(n), i)) {
            var s = { depth: O.depth };
            return K(O, "quoteStyle") && (s.quoteStyle = O.quoteStyle), e(t, s, r + 1, o);
        }
        return e(t, O, r + 1, o);
    }
    if ("function" == typeof t && !H(t)) {
        var ea = (function (e) {
                if (e.name) return e.name;
                var t = m.call(E.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            })(t),
            eo = ee(t, es);
        return (
            "[Function" +
            (ea ? ": " + ea : " (anonymous)") +
            "]" +
            (eo.length > 0 ? " { " + C.call(eo, ", ") + " }" : "")
        );
    }
    if (Y(t)) {
        var el = D ? A.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : b.call(t);
        return "object" != typeof t || D ? el : Z(el);
    }
    if (
        (eu = t) &&
        "object" == typeof eu &&
        (("u" > typeof HTMLElement && eu instanceof HTMLElement) ||
            ("string" == typeof eu.nodeName && "function" == typeof eu.getAttribute))
    ) {
        for (var eu, ec, ed = "<" + T.call(String(t.nodeName)), e_ = t.attributes || [], eh = 0; eh < e_.length; eh++) {
            ed += " " + e_[eh].name + "=" + V(((ec = e_[eh].value), A.call(String(ec), /"/g, "&quot;")), "double", O);
        }
        return (
            (ed += ">"),
            t.childNodes && t.childNodes.length && (ed += "..."),
            (ed += "</" + T.call(String(t.nodeName)) + ">")
        );
    }
    if (j(t)) {
        if (0 === t.length) return "[]";
        var ef = ee(t, es);
        return er &&
            !(function (e) {
                for (var t = 0; t < e.length; t++) if (z(e[t], "\n") >= 0) return !1;
                return !0;
            })(ef)
            ? "[" + J(ef, er) + "]"
            : "[ " + C.call(ef, ", ") + " ]";
    }
    if ("[object Error]" === $((l = t)) && B(l)) {
        var ep = ee(t, es);
        return "cause" in Error.prototype || !("cause" in t) || w.call(t, "cause")
            ? 0 === ep.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + C.call(ep, ", ") + " }"
            : "{ [" + String(t) + "] " + C.call(y.call("[cause]: " + es(t.cause), ep), ", ") + " }";
    }
    if ("object" == typeof t && k) {
        if (U && "function" == typeof t[U] && x) return x(t, { depth: ei - r });
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
        var eE = [];
        return (
            a &&
                a.call(t, function (e, n) {
                    eE.push(es(n, t, !0) + " => " + es(e, t));
                }),
            Q("Map", s.call(t), eE, er)
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
            c &&
                c.call(t, function (e) {
                    em.push(es(e, t));
                }),
            Q("Set", u.call(t), em, er)
        );
    }
    if (
        (function (e) {
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
        })(t)
    )
        return X("WeakMap");
    if (
        (function (e) {
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
        })(t)
    )
        return X("WeakSet");
    if (
        (function (e) {
            if (!h || !e || "object" != typeof e) return !1;
            try {
                return h.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return X("WeakRef");
    if ("[object Number]" === $((p = t)) && B(p)) return Z(es(Number(t)));
    if (
        (function (e) {
            if (!e || "object" != typeof e || !R) return !1;
            try {
                return R.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return Z(es(R.call(t)));
    if ("[object Boolean]" === $((I = t)) && B(I)) return Z(f.call(t));
    if ("[object String]" === $((S = t)) && B(S)) return Z(es(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
        return "{ [object globalThis] }";
    if (!("[object Date]" === $((v = t)) && B(v)) && !H(t)) {
        var eg = ee(t, es),
            eA = M ? M(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eI = t instanceof Object ? "" : "null prototype",
            eT = !eA && L && Object(t) === t && L in t ? g.call($(t), 8, -1) : eI ? "Object" : "",
            eS =
                (eA || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (eT || eI ? "[" + C.call(y.call([], eT || [], eI || []), ": ") + "] " : "");
        return 0 === eg.length ? eS + "{}" : er ? eS + "{" + J(eg, er) + "}" : eS + "{ " + C.call(eg, ", ") + " }";
    }
    return String(t);
};
var W =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function K(e, t) {
    return W.call(e, t);
}
function $(e) {
    return p.call(e);
}
function z(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
    return -1;
}
function q(e) {
    var t = e.charCodeAt(0),
        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + I.call(t.toString(16));
}
function Z(e) {
    return "Object(" + e + ")";
}
function X(e) {
    return e + " { ? }";
}
function Q(e, t, n, i) {
    return e + " (" + t + ") {" + (i ? J(n, i) : C.call(n, ", ")) + "}";
}
function J(e, t) {
    if (0 === e.length) return "";
    var n = "\n" + t.prev + t.base;
    return n + C.call(e, "," + n) + "\n" + t.prev;
}
function ee(e, t) {
    var n,
        i = j(e),
        r = [];
    if (i) {
        r.length = e.length;
        for (var s = 0; s < e.length; s++) r[s] = K(e, s) ? t(e[s], e) : "";
    }
    var a = "function" == typeof O ? O(e) : [];
    if (D) {
        n = {};
        for (var o = 0; o < a.length; o++) n["$" + a[o]] = a[o];
    }
    for (var l in e)
        if (K(e, l) && (!i || String(Number(l)) !== l || !(l < e.length)))
            if (D && n["$" + l] instanceof Symbol) continue;
            else S.call(/[^\w$]/, l) ? r.push(t(l, e) + ": " + t(e[l], e)) : r.push(l + ": " + t(e[l], e));
    if ("function" == typeof O)
        for (var u = 0; u < a.length; u++) w.call(e, a[u]) && r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
    return r;
}
