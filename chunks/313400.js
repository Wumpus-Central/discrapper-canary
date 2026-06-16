"use strict";
var i = n(410323),
    r = n(503628),
    s = n(339626),
    a = n(210140),
    o = n(257943),
    l = n(814113).CONFIGURABLE,
    u = n(997159),
    c = n(883972),
    d = c.enforce,
    _ = c.get,
    h = String,
    f = Object.defineProperty,
    p = i("".slice),
    E = i("".replace),
    m = i([].join),
    g =
        o &&
        !r(function () {
            return 8 !== f(function () {}, "length", { value: 8 }).length;
        }),
    A = String(String).split("String"),
    I = (e.exports = function (e, t, n) {
        "Symbol(" === p(h(t), 0, 7) && (t = "[" + E(h(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!a(e, "name") || (l && e.name !== t)) && (o ? f(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
            g && n && a(n, "arity") && e.length !== n.arity && f(e, "length", { value: n.arity });
        try {
            n && a(n, "constructor") && n.constructor
                ? o && f(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var i = d(e);
        return a(i, "source") || (i.source = m(A, "string" == typeof t ? t : "")), e;
    });
Function.prototype.toString = I(function () {
    return (s(this) && _(this).source) || u(this);
}, "toString");
