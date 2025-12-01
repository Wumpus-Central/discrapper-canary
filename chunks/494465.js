var r = n(46015),
    i = n(621523),
    a = n(880181),
    o = n(77025),
    s = n(507604),
    l = n(938373).CONFIGURABLE,
    c = n(845691),
    u = n(199838),
    d = u.enforce,
    f = u.get,
    p = String,
    _ = Object.defineProperty,
    m = r("".slice),
    h = r("".replace),
    g = r([].join),
    E =
        s &&
        !i(function () {
            return 8 !== _(function () {}, "length", { value: 8 }).length;
        }),
    b = String(String).split("String"),
    y = (e.exports = function (e, t, n) {
        "Symbol(" === m(p(t), 0, 7) && (t = "[" + h(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!o(e, "name") || (l && e.name !== t)) &&
                (s
                    ? _(e, "name", {
                          value: t,
                          configurable: !0,
                      })
                    : (e.name = t)),
            E && n && o(n, "arity") && e.length !== n.arity && _(e, "length", { value: n.arity });
        try {
            n && o(n, "constructor") && n.constructor
                ? s && _(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var r = d(e);
        return o(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e;
    });
Function.prototype.toString = y(function () {
    return (a(this) && f(this).source) || c(this);
}, "toString");
