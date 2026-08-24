var n = r(993001);
function i() {
    var t,
        r,
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        s = o.toStringTag || "@@toStringTag";
    function l(e, i, o, a) {
        var s = Object.create((i && i.prototype instanceof c ? i : c).prototype);
        return (
            n(
                s,
                "_invoke",
                (function (e, n, i) {
                    var o,
                        a,
                        s,
                        l = 0,
                        c = i || [],
                        f = !1,
                        d = {
                            p: 0,
                            n: 0,
                            v: t,
                            a: p,
                            f: p.bind(t, 4),
                            d: function (e, r) {
                                return (o = e), (a = 0), (s = t), (d.n = r), u;
                            },
                        };
                    function p(e, n) {
                        for (a = e, s = n, r = 0; !f && l && !i && r < c.length; r++) {
                            var i,
                                o = c[r],
                                p = d.p,
                                h = o[2];
                            e > 3
                                ? (i = h === n) && ((s = o[(a = o[4]) ? 5 : ((a = 3), 3)]), (o[4] = o[5] = t))
                                : o[0] <= p &&
                                  ((i = e < 2 && p < o[1])
                                      ? ((a = 0), (d.v = n), (d.n = o[1]))
                                      : p < h &&
                                        (i = e < 3 || o[0] > n || n > h) &&
                                        ((o[4] = e), (o[5] = n), (d.n = h), (a = 0)));
                        }
                        if (i || e > 1) return u;
                        throw ((f = !0), n);
                    }
                    return function (i, c, h) {
                        if (l > 1) throw TypeError("Generator is already running");
                        for (f && 1 === c && p(c, h), a = c, s = h; (r = a < 2 ? t : s) || !f; ) {
                            o || (a ? (a < 3 ? (a > 1 && (d.n = -1), p(a, s)) : (d.n = s)) : (d.v = s));
                            try {
                                if (((l = 2), o)) {
                                    if ((a || (i = "next"), (r = o[i]))) {
                                        if (!(r = r.call(o, s))) throw TypeError("iterator result is not an object");
                                        if (!r.done) return r;
                                        (s = r.value), a < 2 && (a = 0);
                                    } else
                                        1 === a && (r = o.return) && r.call(o),
                                            a < 2 &&
                                                ((s = TypeError("The iterator does not provide a '" + i + "' method")),
                                                (a = 1));
                                    o = t;
                                } else if ((r = (f = d.n < 0) ? s : e.call(n, d)) !== u) break;
                            } catch (e) {
                                (o = t), (a = 1), (s = e);
                            } finally {
                                l = 1;
                            }
                        }
                        return { value: r, done: f };
                    };
                })(e, o, a),
                !0,
            ),
            s
        );
    }
    var u = {};
    function c() {}
    function f() {}
    function d() {}
    r = Object.getPrototypeOf;
    var p =
        (d.prototype =
        c.prototype =
            Object.create(
                [][a]
                    ? r(r([][a]()))
                    : (n((r = {}), a, function () {
                          return this;
                      }),
                      r),
            ));
    function h(e) {
        return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : ((e.__proto__ = d), n(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
        );
    }
    return (
        (f.prototype = d),
        n(p, "constructor", d),
        n(d, "constructor", f),
        (f.displayName = "GeneratorFunction"),
        n(d, s, "GeneratorFunction"),
        n(p),
        n(p, s, "Generator"),
        n(p, a, function () {
            return this;
        }),
        n(p, "toString", function () {
            return "[object Generator]";
        }),
        ((e.exports = i =
            function () {
                return { w: l, m: h };
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))()
    );
}
(e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
