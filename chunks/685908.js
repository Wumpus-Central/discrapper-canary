var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = n(284009),
    a = n(313319),
    s = n(958554),
    o = n(410641),
    l = n(868671),
    c = n(120685),
    u = n(543881),
    d = n(197557),
    f = n(505562),
    p = n(757927);
n(336258);
var _ = n(253120),
    h = n(905386),
    m = n(362001),
    g = function (e, t, n) {
        if (e instanceof o) {
            var i = r({}, t),
                a = r({}, t);
            for (var s in t) {
                var l = t[s],
                    c = l.x,
                    u = l.y;
                void 0 !== c && void 0 !== u && ((i[s] = c), (a[s] = u));
            }
            return y([n(e.x, i), n(e.y, a)], {
                stopTogether: !1,
            });
        }
        return null;
    },
    E = function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(),
                        n.toValue instanceof a ? r.track(new f(r, n.toValue, _, i, e)) : r.animate(new _(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    b = function (e) {
        var t = 0;
        return {
            start: function (n) {
                var r = function r(i) {
                    if (!i.finished || ++t === e.length) {
                        n && n(i);
                        return;
                    }
                    e[t].start(r);
                };
                0 === e.length
                    ? n &&
                      n({
                          finished: !0,
                      })
                    : e[t].start(r);
            },
            stop: function () {
                t < e.length && e[t].stop();
            },
        };
    },
    y = function (e, t) {
        var n = 0,
            r = {},
            i = !(t && !1 === t.stopTogether),
            a = {
                start: function (t) {
                    if (n === e.length) {
                        t &&
                            t({
                                finished: !0,
                            });
                        return;
                    }
                    e.forEach(function (s, o) {
                        var l = function (s) {
                            if (((r[o] = !0), ++n === e.length)) {
                                (n = 0), t && t(s);
                                return;
                            }
                            !s.finished && i && a.stop();
                        };
                        s
                            ? s.start(l)
                            : l({
                                  finished: !0,
                              });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        r[t] || e.stop(), (r[t] = !0);
                    });
                },
            };
        return a;
    },
    O = function (e) {
        return E(new s(0), {
            toValue: 0,
            delay: e,
            duration: 0,
        });
    },
    A = function (e, t) {
        return y(
            t.map(function (t, n) {
                return b([O(e * n), t]);
            }),
        );
    },
    v = function (e, t) {
        return function () {
            for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            var o = function e(t, n, r) {
                if ("number" == typeof n) {
                    i(
                        t instanceof s,
                        "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue",
                    ),
                        t.setValue(n);
                    return;
                }
                for (var r in (i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r),
                i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r),
                t))
                    e(t[r], n[r], r);
            };
            e.forEach(function (e, t) {
                o(e, r[t], "arg" + t);
            }),
                t && t.listener && t.listener.apply(null, r);
        };
    };
e.exports = {
    Value: s,
    ValueXY: o,
    decay: function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(), r.animate(new h(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    timing: E,
    spring: function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var r = t,
                        i = n;
                    r.stopTracking(),
                        n.toValue instanceof a ? r.track(new f(r, n.toValue, m, i, e)) : r.animate(new m(i), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    add: function (e, t) {
        return new l(e, t);
    },
    multiply: function (e, t) {
        return new c(e, t);
    },
    modulo: function (e, t) {
        return new u(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new d(e, n);
    },
    delay: O,
    sequence: b,
    parallel: y,
    stagger: A,
    event: v,
    isAnimated: p,
    createAnimatedComponent: n(587452),
    inject: {
        ApplyAnimatedValues: n(207147).inject,
        InteractionManager: n(87805).inject,
        FlattenStyle: n(646709).inject,
        RequestAnimationFrame: n(259126).inject,
        CancelAnimationFrame: n(110799).inject,
    },
    __PropsOnlyForTests: n(267017),
};
