var n = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    o = n && i && "function" == typeof i.get ? i.get : null,
    a = n && Map.prototype.forEach,
    s = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    u = s && l && "function" == typeof l.get ? l.get : null,
    c = s && Set.prototype.forEach,
    d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    h = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    g = Function.prototype.toString,
    v = String.prototype.match,
    y = String.prototype.slice,
    b = String.prototype.replace,
    _ = String.prototype.toUpperCase,
    w = String.prototype.toLowerCase,
    x = RegExp.prototype.test,
    E = Array.prototype.concat,
    S = Array.prototype.join,
    k = Array.prototype.slice,
    T = Math.floor,
    C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    A = Object.getOwnPropertySymbols,
    P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    M = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    O =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === M ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    R = Object.prototype.propertyIsEnumerable,
    I =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function L(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || x.call(/e/, t)) return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var n = e < 0 ? -T(-e) : T(e);
        if (n !== e) {
            var i = String(n),
                o = y.call(t, i.length + 1);
            return b.call(i, r, "$&_") + "." + b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return b.call(t, r, "$&_");
}
var D = r(234629),
    F = D.custom,
    N = z(F) ? F : null,
    V = { __proto__: null, double: '"', single: "'" },
    j = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function B(e, t, r) {
    var n = V[r.quoteStyle || t];
    return n + e + n;
}
function U(e) {
    return !O || !("object" == typeof e && (O in e || void 0 !== e[O]));
}
function K(e) {
    return "[object Array]" === H(e) && U(e);
}
function $(e) {
    return "[object RegExp]" === H(e) && U(e);
}
function z(e) {
    if (M) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !P) return !1;
    try {
        return P.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, n, i, s) {
    var l,
        m,
        _,
        x,
        T,
        A = n || {};
    if (G(A, "quoteStyle") && !G(V, A.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        G(A, "maxStringLength") &&
        ("number" == typeof A.maxStringLength
            ? A.maxStringLength < 0 && A.maxStringLength !== 1 / 0
            : null !== A.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var F = !G(A, "customInspect") || A.customInspect;
    if ("boolean" != typeof F && "symbol" !== F)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        G(A, "indent") &&
        null !== A.indent &&
        "	" !== A.indent &&
        !(parseInt(A.indent, 10) === A.indent && A.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (G(A, "numericSeparator") && "boolean" != typeof A.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var W = A.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t)
        return (function e(t, r) {
            if (t.length > r.maxStringLength) {
                var n = t.length - r.maxStringLength;
                return e(y.call(t, 0, r.maxStringLength), r) + ("... " + n) + " more character" + (n > 1 ? "s" : "");
            }
            var i = j[r.quoteStyle || "single"];
            return (i.lastIndex = 0), B(b.call(b.call(t, i, "\\$1"), /[\x00-\x1f]/g, Y), "single", r);
        })(t, A);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var et = String(t);
        return W ? L(t, et) : et;
    }
    if ("bigint" == typeof t) {
        var er = String(t) + "n";
        return W ? L(t, er) : er;
    }
    var en = void 0 === A.depth ? 5 : A.depth;
    if ((void 0 === i && (i = 0), i >= en && en > 0 && "object" == typeof t)) return K(t) ? "[Array]" : "[Object]";
    var ei = (function (e, t) {
        var r;
        if ("	" === e.indent) r = "	";
        else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            r = S.call(Array(e.indent + 1), " ");
        }
        return { base: r, prev: S.call(Array(t + 1), r) };
    })(A, i);
    if (void 0 === s) s = [];
    else if (q(s, t) >= 0) return "[Circular]";
    function eo(t, r, n) {
        if ((r && (s = k.call(s)).push(r), n)) {
            var o = { depth: A.depth };
            return G(A, "quoteStyle") && (o.quoteStyle = A.quoteStyle), e(t, o, i + 1, s);
        }
        return e(t, A, i + 1, s);
    }
    if ("function" == typeof t && !$(t)) {
        var ea = (function (e) {
                if (e.name) return e.name;
                var t = v.call(g.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            })(t),
            es = ee(t, eo);
        return (
            "[Function" +
            (ea ? ": " + ea : " (anonymous)") +
            "]" +
            (es.length > 0 ? " { " + S.call(es, ", ") + " }" : "")
        );
    }
    if (z(t)) {
        var el = M ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(t);
        return "object" != typeof t || M ? el : X(el);
    }
    if (
        (eu = t) &&
        "object" == typeof eu &&
        (("u" > typeof HTMLElement && eu instanceof HTMLElement) ||
            ("string" == typeof eu.nodeName && "function" == typeof eu.getAttribute))
    ) {
        for (var eu, ec, ed = "<" + w.call(String(t.nodeName)), ef = t.attributes || [], ep = 0; ep < ef.length; ep++) {
            ed += " " + ef[ep].name + "=" + B(((ec = ef[ep].value), b.call(String(ec), /"/g, "&quot;")), "double", A);
        }
        return (
            (ed += ">"),
            t.childNodes && t.childNodes.length && (ed += "..."),
            (ed += "</" + w.call(String(t.nodeName)) + ">")
        );
    }
    if (K(t)) {
        if (0 === t.length) return "[]";
        var eh = ee(t, eo);
        return ei &&
            !(function (e) {
                for (var t = 0; t < e.length; t++) if (q(e[t], "\n") >= 0) return !1;
                return !0;
            })(eh)
            ? "[" + Q(eh, ei) + "]"
            : "[ " + S.call(eh, ", ") + " ]";
    }
    if ("[object Error]" === H((l = t)) && U(l)) {
        var em = ee(t, eo);
        return "cause" in Error.prototype || !("cause" in t) || R.call(t, "cause")
            ? 0 === em.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + S.call(em, ", ") + " }"
            : "{ [" + String(t) + "] " + S.call(E.call("[cause]: " + eo(t.cause), em), ", ") + " }";
    }
    if ("object" == typeof t && F) {
        if (N && "function" == typeof t[N] && D) return D(t, { depth: en - i });
        else if ("symbol" !== F && "function" == typeof t.inspect) return t.inspect();
    }
    if (
        (function (e) {
            if (!o || !e || "object" != typeof e) return !1;
            try {
                o.call(e);
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
        var eg = [];
        return (
            a &&
                a.call(t, function (e, r) {
                    eg.push(eo(r, t, !0) + " => " + eo(e, t));
                }),
            Z("Map", o.call(t), eg, ei)
        );
    }
    if (
        (function (e) {
            if (!u || !e || "object" != typeof e) return !1;
            try {
                u.call(e);
                try {
                    o.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Set;
            } catch (e) {}
            return !1;
        })(t)
    ) {
        var ev = [];
        return (
            c &&
                c.call(t, function (e) {
                    ev.push(eo(e, t));
                }),
            Z("Set", u.call(t), ev, ei)
        );
    }
    if (
        (function (e) {
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
        })(t)
    )
        return J("WeakMap");
    if (
        (function (e) {
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
        })(t)
    )
        return J("WeakSet");
    if (
        (function (e) {
            if (!p || !e || "object" != typeof e) return !1;
            try {
                return p.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return J("WeakRef");
    if ("[object Number]" === H((m = t)) && U(m)) return X(eo(Number(t)));
    if (
        (function (e) {
            if (!e || "object" != typeof e || !C) return !1;
            try {
                return C.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return X(eo(C.call(t)));
    if ("[object Boolean]" === H((_ = t)) && U(_)) return X(h.call(t));
    if ("[object String]" === H((x = t)) && U(x)) return X(eo(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== r.g && t === r.g))
        return "{ [object globalThis] }";
    if (!("[object Date]" === H((T = t)) && U(T)) && !$(t)) {
        var ey = ee(t, eo),
            eb = I ? I(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            e_ = t instanceof Object ? "" : "null prototype",
            ew = !eb && O && Object(t) === t && O in t ? y.call(H(t), 8, -1) : e_ ? "Object" : "",
            ex =
                (eb || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (ew || e_ ? "[" + S.call(E.call([], ew || [], e_ || []), ": ") + "] " : "");
        return 0 === ey.length ? ex + "{}" : ei ? ex + "{" + Q(ey, ei) + "}" : ex + "{ " + S.call(ey, ", ") + " }";
    }
    return String(t);
};
var W =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function G(e, t) {
    return W.call(e, t);
}
function H(e) {
    return m.call(e);
}
function q(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
    return -1;
}
function Y(e) {
    var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + _.call(t.toString(16));
}
function X(e) {
    return "Object(" + e + ")";
}
function J(e) {
    return e + " { ? }";
}
function Z(e, t, r, n) {
    return e + " (" + t + ") {" + (n ? Q(r, n) : S.call(r, ", ")) + "}";
}
function Q(e, t) {
    if (0 === e.length) return "";
    var r = "\n" + t.prev + t.base;
    return r + S.call(e, "," + r) + "\n" + t.prev;
}
function ee(e, t) {
    var r,
        n = K(e),
        i = [];
    if (n) {
        i.length = e.length;
        for (var o = 0; o < e.length; o++) i[o] = G(e, o) ? t(e[o], e) : "";
    }
    var a = "function" == typeof A ? A(e) : [];
    if (M) {
        r = {};
        for (var s = 0; s < a.length; s++) r["$" + a[s]] = a[s];
    }
    for (var l in e)
        if (G(e, l) && (!n || String(Number(l)) !== l || !(l < e.length)))
            if (M && r["$" + l] instanceof Symbol) continue;
            else x.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof A)
        for (var u = 0; u < a.length; u++) R.call(e, a[u]) && i.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
    return i;
}
