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
                        p = {
                            p: 0,
                            n: 0,
                            v: t,
                            a: d,
                            f: d.bind(t, 4),
                            d: function (e, r) {
                                return ((o = e), (a = 0), (s = t), (p.n = r), u);
                            },
                        };
                    function d(e, n) {
                        for (a = e, s = n, r = 0; !f && l && !i && r < c.length; r++) {
                            var i,
                                o = c[r],
                                d = p.p,
                                h = o[2];
                            e > 3
                                ? (i = h === n) && ((s = o[(a = o[4]) ? 5 : ((a = 3), 3)]), (o[4] = o[5] = t))
                                : o[0] <= d &&
                                  ((i = e < 2 && d < o[1])
                                      ? ((a = 0), (p.v = n), (p.n = o[1]))
                                      : d < h &&
                                        (i = e < 3 || o[0] > n || n > h) &&
                                        ((o[4] = e), (o[5] = n), (p.n = h), (a = 0)));
                        }
                        if (i || e > 1) return u;
                        throw ((f = !0), n);
                    }
                    return function (i, c, h) {
                        if (l > 1) throw TypeError("Generator is already running");
                        for (f && 1 === c && d(c, h), a = c, s = h; (r = a < 2 ? t : s) || !f;) {
                            o || (a ? (a < 3 ? (a > 1 && (p.n = -1), d(a, s)) : (p.n = s)) : (p.v = s));
                            try {
                                if (((l = 2), o)) {
                                    if ((a || (i = "next"), (r = o[i]))) {
                                        if (!(r = r.call(o, s))) throw TypeError("iterator result is not an object");
                                        if (!r.done) return r;
                                        ((s = r.value), a < 2 && (a = 0));
                                    } else
                                        (1 === a && (r = o.return) && r.call(o),
                                            a < 2 &&
                                                ((s = TypeError("The iterator does not provide a '" + i + "' method")),
                                                (a = 1)));
                                    o = t;
                                } else if ((r = (f = p.n < 0) ? s : e.call(n, p)) !== u) break;
                            } catch (e) {
                                ((o = t), (a = 1), (s = e));
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
    function p() {}
    r = Object.getPrototypeOf;
    var d =
        (p.prototype =
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
            Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : ((e.__proto__ = p), n(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
        );
    }
    return (
        (f.prototype = p),
        n(d, "constructor", p),
        n(p, "constructor", f),
        (f.displayName = "GeneratorFunction"),
        n(p, s, "GeneratorFunction"),
        n(d),
        n(d, s, "Generator"),
        n(d, a, function () {
            return this;
        }),
        n(d, "toString", function () {
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
((e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports));
