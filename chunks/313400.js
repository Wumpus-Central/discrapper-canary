"use strict";
var r = n(410323),
    i = n(503628),
    s = n(339626),
    a = n(210140),
    o = n(257943),
    l = n(814113).CONFIGURABLE,
    u = n(997159),
    c = n(883972),
    d = c.enforce,
    _ = c.get,
    f = String,
    p = Object.defineProperty,
    h = r("".slice),
    E = r("".replace),
    m = r([].join),
    g =
        o &&
        !i(function () {
            return 8 !== p(function () {}, "length", { value: 8 }).length;
        }),
    A = String(String).split("String"),
    I = (e.exports = function (e, t, n) {
        "Symbol(" === h(f(t), 0, 7) && (t = "[" + E(f(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!a(e, "name") || (l && e.name !== t)) && (o ? p(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
            g && n && a(n, "arity") && e.length !== n.arity && p(e, "length", { value: n.arity });
        try {
            n && a(n, "constructor") && n.constructor
                ? o && p(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var r = d(e);
        return a(r, "source") || (r.source = m(A, "string" == typeof t ? t : "")), e;
    });
Function.prototype.toString = I(function () {
    return (s(this) && _(this).source) || u(this);
}, "toString");
