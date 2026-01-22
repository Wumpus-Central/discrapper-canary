var r = n(410323),
    i = n(503628),
    a = n(339626),
    s = n(210140),
    o = n(257943),
    l = n(814113).CONFIGURABLE,
    c = n(997159),
    u = n(883972),
    d = u.enforce,
    f = u.get,
    p = String,
    _ = Object.defineProperty,
    h = r("".slice),
    m = r("".replace),
    g = r([].join),
    E =
        o &&
        !i(function () {
            return 8 !== _(function () {}, "length", { value: 8 }).length;
        }),
    b = String(String).split("String"),
    y = (e.exports = function (e, t, n) {
        "Symbol(" === h(p(t), 0, 7) && (t = "[" + m(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!s(e, "name") || (l && e.name !== t)) &&
                (o
                    ? _(e, "name", {
                          value: t,
                          configurable: !0,
                      })
                    : (e.name = t)),
            E && n && s(n, "arity") && e.length !== n.arity && _(e, "length", { value: n.arity });
        try {
            n && s(n, "constructor") && n.constructor
                ? o && _(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var r = d(e);
        return s(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e;
    });
Function.prototype.toString = y(function () {
    return (a(this) && f(this).source) || c(this);
}, "toString");
