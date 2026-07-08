var n = e(410323),
    o = e(503628),
    i = e(339626),
    a = e(210140),
    u = e(257943),
    c = e(814113).CONFIGURABLE,
    f = e(997159),
    p = e(883972),
    s = p.enforce,
    y = p.get,
    v = String,
    l = Object.defineProperty,
    h = n("".slice),
    d = n("".replace),
    g = n([].join),
    b =
        u &&
        !o(function () {
            return 8 !== l(function () {}, "length", { value: 8 }).length;
        }),
    x = String(String).split("String"),
    w = (r.exports = function (r, t, e) {
        "Symbol(" === h(v(t), 0, 7) && (t = "[" + d(v(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            e && e.getter && (t = "get " + t),
            e && e.setter && (t = "set " + t),
            (!a(r, "name") || (c && r.name !== t)) && (u ? l(r, "name", { value: t, configurable: !0 }) : (r.name = t)),
            b && e && a(e, "arity") && r.length !== e.arity && l(r, "length", { value: e.arity });
        try {
            e && a(e, "constructor") && e.constructor
                ? u && l(r, "prototype", { writable: !1 })
                : r.prototype && (r.prototype = void 0);
        } catch (r) {}
        var n = s(r);
        return a(n, "source") || (n.source = g(x, "string" == typeof t ? t : "")), r;
    });
Function.prototype.toString = w(function () {
    return (i(this) && y(this).source) || f(this);
}, "toString");
