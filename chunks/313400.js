var n = e(410323),
    o = e(503628),
    i = e(339626),
    u = e(210140),
    a = e(257943),
    c = e(814113).CONFIGURABLE,
    f = e(997159),
    s = e(883972),
    p = s.enforce,
    l = s.get,
    v = String,
    y = Object.defineProperty,
    h = n("".slice),
    b = n("".replace),
    g = n([].join),
    x =
        a &&
        !o(function () {
            return 8 !== y(function () {}, "length", { value: 8 }).length;
        }),
    m = String(String).split("String"),
    d = (r.exports = function (r, t, e) {
        "Symbol(" === h(v(t), 0, 7) && (t = "[" + b(v(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            e && e.getter && (t = "get " + t),
            e && e.setter && (t = "set " + t),
            (!u(r, "name") || (c && r.name !== t)) && (a ? y(r, "name", { value: t, configurable: !0 }) : (r.name = t)),
            x && e && u(e, "arity") && r.length !== e.arity && y(r, "length", { value: e.arity });
        try {
            e && u(e, "constructor") && e.constructor
                ? a && y(r, "prototype", { writable: !1 })
                : r.prototype && (r.prototype = void 0);
        } catch (r) {}
        var n = p(r);
        return u(n, "source") || (n.source = g(m, "string" == typeof t ? t : "")), r;
    });
Function.prototype.toString = d(function () {
    return (i(this) && l(this).source) || f(this);
}, "toString");
