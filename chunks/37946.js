var r = n(993001);
function i() {
    var t,
        n,
        s = "function" == typeof Symbol ? Symbol : {},
        a = s.iterator || "@@iterator",
        o = s.toStringTag || "@@toStringTag";
    function l(e, i, s, a) {
        var o = Object.create((i && i.prototype instanceof c ? i : c).prototype);
        return (
            r(
                o,
                "_invoke",
                (function (e, r, i) {
                    var s,
                        a,
                        o,
                        l = 0,
                        c = i || [],
                        d = !1,
                        _ = {
                            p: 0,
                            n: 0,
                            v: t,
                            a: f,
                            f: f.bind(t, 4),
                            d: function (e, n) {
                                return (s = e), (a = 0), (o = t), (_.n = n), u;
                            },
                        };
                    function f(e, r) {
                        for (a = e, o = r, n = 0; !d && l && !i && n < c.length; n++) {
                            var i,
                                s = c[n],
                                f = _.p,
                                p = s[2];
                            e > 3
                                ? (i = p === r) && ((o = s[(a = s[4]) ? 5 : ((a = 3), 3)]), (s[4] = s[5] = t))
                                : s[0] <= f &&
                                  ((i = e < 2 && f < s[1])
                                      ? ((a = 0), (_.v = r), (_.n = s[1]))
                                      : f < p &&
                                        (i = e < 3 || s[0] > r || r > p) &&
                                        ((s[4] = e), (s[5] = r), (_.n = p), (a = 0)));
                        }
                        if (i || e > 1) return u;
                        throw ((d = !0), r);
                    }
                    return function (i, c, p) {
                        if (l > 1) throw TypeError("Generator is already running");
                        for (d && 1 === c && f(c, p), a = c, o = p; (n = a < 2 ? t : o) || !d; ) {
                            s || (a ? (a < 3 ? (a > 1 && (_.n = -1), f(a, o)) : (_.n = o)) : (_.v = o));
                            try {
                                if (((l = 2), s)) {
                                    if ((a || (i = "next"), (n = s[i]))) {
                                        if (!(n = n.call(s, o))) throw TypeError("iterator result is not an object");
                                        if (!n.done) return n;
                                        (o = n.value), a < 2 && (a = 0);
                                    } else
                                        1 === a && (n = s.return) && n.call(s),
                                            a < 2 &&
                                                ((o = TypeError("The iterator does not provide a '" + i + "' method")),
                                                (a = 1));
                                    s = t;
                                } else if ((n = (d = _.n < 0) ? o : e.call(r, _)) !== u) break;
                            } catch (e) {
                                (s = t), (a = 1), (o = e);
                            } finally {
                                l = 1;
                            }
                        }
                        return { value: n, done: d };
                    };
                })(e, s, a),
                !0,
            ),
            o
        );
    }
    var u = {};
    function c() {}
    function d() {}
    function _() {}
    n = Object.getPrototypeOf;
    var f =
        (_.prototype =
        c.prototype =
            Object.create(
                [][a]
                    ? n(n([][a]()))
                    : (r((n = {}), a, function () {
                          return this;
                      }),
                      n),
            ));
    function p(e) {
        return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : ((e.__proto__ = _), r(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
        );
    }
    return (
        (d.prototype = _),
        r(f, "constructor", _),
        r(_, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        r(_, o, "GeneratorFunction"),
        r(f),
        r(f, o, "Generator"),
        r(f, a, function () {
            return this;
        }),
        r(f, "toString", function () {
            return "[object Generator]";
        }),
        ((e.exports = i =
            function () {
                return { w: l, m: p };
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))()
    );
}
(e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
