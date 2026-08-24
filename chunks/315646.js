var n = "function" == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    o = n && i && "function" == typeof i.get ? i.get : null,
    a = n && Map.prototype.forEach,
    s = "function" == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    u = s && l && "function" == typeof l.get ? l.get : null,
    c = s && Set.prototype.forEach,
    f = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    h = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    v = Function.prototype.toString,
    y = String.prototype.match,
    g = String.prototype.slice,
    b = String.prototype.replace,
    w = String.prototype.toUpperCase,
    _ = String.prototype.toLowerCase,
    S = RegExp.prototype.test,
    x = Array.prototype.concat,
    E = Array.prototype.join,
    k = Array.prototype.slice,
    C = Math.floor,
    T = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    M = Object.getOwnPropertySymbols,
    P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    A = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    I =
        "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === A ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
    O = Object.prototype.propertyIsEnumerable,
    D =
        ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function R(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || S.call(/e/, t)) return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var n = e < 0 ? -C(-e) : C(e);
        if (n !== e) {
            var i = String(n),
                o = g.call(t, i.length + 1);
            return b.call(i, r, "$&_") + "." + b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return b.call(t, r, "$&_");
}
var L = r(234629),
    F = L.custom,
    N = z(F) ? F : null,
    j = { __proto__: null, double: '"', single: "'" },
    B = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
function K(e, t, r) {
    var n = j[r.quoteStyle || t];
    return n + e + n;
}
function $(e) {
    return !I || !("object" == typeof e && (I in e || void 0 !== e[I]));
}
function V(e) {
    return "[object Array]" === G(e) && $(e);
}
function U(e) {
    return "[object RegExp]" === G(e) && $(e);
}
function z(e) {
    if (A) return e && "object" == typeof e && e instanceof Symbol;
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
        w,
        S,
        C,
        M = n || {};
    if (H(M, "quoteStyle") && !H(j, M.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (
        H(M, "maxStringLength") &&
        ("number" == typeof M.maxStringLength
            ? M.maxStringLength < 0 && M.maxStringLength !== 1 / 0
            : null !== M.maxStringLength)
    )
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var F = !H(M, "customInspect") || M.customInspect;
    if ("boolean" != typeof F && "symbol" !== F)
        throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (
        H(M, "indent") &&
        null !== M.indent &&
        "	" !== M.indent &&
        !(parseInt(M.indent, 10) === M.indent && M.indent > 0)
    )
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(M, "numericSeparator") && "boolean" != typeof M.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var W = M.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t)
        return (function e(t, r) {
            if (t.length > r.maxStringLength) {
                var n = t.length - r.maxStringLength;
                return e(g.call(t, 0, r.maxStringLength), r) + ("... " + n) + " more character" + (n > 1 ? "s" : "");
            }
            var i = B[r.quoteStyle || "single"];
            return (i.lastIndex = 0), K(b.call(b.call(t, i, "\\$1"), /[\x00-\x1f]/g, Y), "single", r);
        })(t, M);
    if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var et = String(t);
        return W ? R(t, et) : et;
    }
    if ("bigint" == typeof t) {
        var er = String(t) + "n";
        return W ? R(t, er) : er;
    }
    var en = void 0 === M.depth ? 5 : M.depth;
    if ((void 0 === i && (i = 0), i >= en && en > 0 && "object" == typeof t)) return V(t) ? "[Array]" : "[Object]";
    var ei = (function (e, t) {
        var r;
        if ("	" === e.indent) r = "	";
        else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            r = E.call(Array(e.indent + 1), " ");
        }
        return { base: r, prev: E.call(Array(t + 1), r) };
    })(M, i);
    if (void 0 === s) s = [];
    else if (q(s, t) >= 0) return "[Circular]";
    function eo(t, r, n) {
        if ((r && (s = k.call(s)).push(r), n)) {
            var o = { depth: M.depth };
            return H(M, "quoteStyle") && (o.quoteStyle = M.quoteStyle), e(t, o, i + 1, s);
        }
        return e(t, M, i + 1, s);
    }
    if ("function" == typeof t && !U(t)) {
        var ea = (function (e) {
                if (e.name) return e.name;
                var t = y.call(v.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            })(t),
            es = ee(t, eo);
        return (
            "[Function" +
            (ea ? ": " + ea : " (anonymous)") +
            "]" +
            (es.length > 0 ? " { " + E.call(es, ", ") + " }" : "")
        );
    }
    if (z(t)) {
        var el = A ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(t);
        return "object" != typeof t || A ? el : X(el);
    }
    if (
        (eu = t) &&
        "object" == typeof eu &&
        (("u" > typeof HTMLElement && eu instanceof HTMLElement) ||
            ("string" == typeof eu.nodeName && "function" == typeof eu.getAttribute))
    ) {
        for (var eu, ec, ef = "<" + _.call(String(t.nodeName)), ed = t.attributes || [], ep = 0; ep < ed.length; ep++) {
            ef += " " + ed[ep].name + "=" + K(((ec = ed[ep].value), b.call(String(ec), /"/g, "&quot;")), "double", M);
        }
        return (
            (ef += ">"),
            t.childNodes && t.childNodes.length && (ef += "..."),
            (ef += "</" + _.call(String(t.nodeName)) + ">")
        );
    }
    if (V(t)) {
        if (0 === t.length) return "[]";
        var eh = ee(t, eo);
        return ei &&
            !(function (e) {
                for (var t = 0; t < e.length; t++) if (q(e[t], "\n") >= 0) return !1;
                return !0;
            })(eh)
            ? "[" + Z(eh, ei) + "]"
            : "[ " + E.call(eh, ", ") + " ]";
    }
    if ("[object Error]" === G((l = t)) && $(l)) {
        var em = ee(t, eo);
        return "cause" in Error.prototype || !("cause" in t) || O.call(t, "cause")
            ? 0 === em.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + E.call(em, ", ") + " }"
            : "{ [" + String(t) + "] " + E.call(x.call("[cause]: " + eo(t.cause), em), ", ") + " }";
    }
    if ("object" == typeof t && F) {
        if (N && "function" == typeof t[N] && L) return L(t, { depth: en - i });
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
        var ev = [];
        return (
            a &&
                a.call(t, function (e, r) {
                    ev.push(eo(r, t, !0) + " => " + eo(e, t));
                }),
            Q("Map", o.call(t), ev, ei)
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
        var ey = [];
        return (
            c &&
                c.call(t, function (e) {
                    ey.push(eo(e, t));
                }),
            Q("Set", u.call(t), ey, ei)
        );
    }
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
                return e instanceof WeakMap;
            } catch (e) {}
            return !1;
        })(t)
    )
        return J("WeakMap");
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
    if ("[object Number]" === G((m = t)) && $(m)) return X(eo(Number(t)));
    if (
        (function (e) {
            if (!e || "object" != typeof e || !T) return !1;
            try {
                return T.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return X(eo(T.call(t)));
    if ("[object Boolean]" === G((w = t)) && $(w)) return X(h.call(t));
    if ("[object String]" === G((S = t)) && $(S)) return X(eo(String(t)));
    if ("u" > typeof window && t === window) return "{ [object Window] }";
    if (("u" > typeof globalThis && t === globalThis) || (void 0 !== r.g && t === r.g))
        return "{ [object globalThis] }";
    if (!("[object Date]" === G((C = t)) && $(C)) && !U(t)) {
        var eg = ee(t, eo),
            eb = D ? D(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            ew = t instanceof Object ? "" : "null prototype",
            e_ = !eb && I && Object(t) === t && I in t ? g.call(G(t), 8, -1) : ew ? "Object" : "",
            eS =
                (eb || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (e_ || ew ? "[" + E.call(x.call([], e_ || [], ew || []), ": ") + "] " : "");
        return 0 === eg.length ? eS + "{}" : ei ? eS + "{" + Z(eg, ei) + "}" : eS + "{ " + E.call(eg, ", ") + " }";
    }
    return String(t);
};
var W =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function H(e, t) {
    return W.call(e, t);
}
function G(e) {
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
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16));
}
function X(e) {
    return "Object(" + e + ")";
}
function J(e) {
    return e + " { ? }";
}
function Q(e, t, r, n) {
    return e + " (" + t + ") {" + (n ? Z(r, n) : E.call(r, ", ")) + "}";
}
function Z(e, t) {
    if (0 === e.length) return "";
    var r = "\n" + t.prev + t.base;
    return r + E.call(e, "," + r) + "\n" + t.prev;
}
function ee(e, t) {
    var r,
        n = V(e),
        i = [];
    if (n) {
        i.length = e.length;
        for (var o = 0; o < e.length; o++) i[o] = H(e, o) ? t(e[o], e) : "";
    }
    var a = "function" == typeof M ? M(e) : [];
    if (A) {
        r = {};
        for (var s = 0; s < a.length; s++) r["$" + a[s]] = a[s];
    }
    for (var l in e)
        if (H(e, l) && (!n || String(Number(l)) !== l || !(l < e.length)))
            if (A && r["$" + l] instanceof Symbol) continue;
            else S.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
    if ("function" == typeof M)
        for (var u = 0; u < a.length; u++) O.call(e, a[u]) && i.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
    return i;
}
