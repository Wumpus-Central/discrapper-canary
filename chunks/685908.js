"use strict";
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
    s = n(313319),
    a = n(958554),
    o = n(410641),
    l = n(868671),
    u = n(120685),
    d = n(543881),
    c = n(197557),
    _ = n(505562),
    f = n(757927);
n(336258);
var E = n(253120),
    h = n(905386),
    p = n(362001),
    m = function (e, t, n) {
        if (e instanceof o) {
            var i = r({}, t),
                s = r({}, t);
            for (var a in t) {
                var l = t[a],
                    u = l.x,
                    d = l.y;
                void 0 !== u && void 0 !== d && ((i[a] = u), (s[a] = d));
            }
            return I([n(e.x, i), n(e.y, s)], { stopTogether: !1 });
        }
        return null;
    },
    g = function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(),
                        n.toValue instanceof s ? t.track(new _(t, n.toValue, E, n, e)) : t.animate(new E(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    A = function (e) {
        var t = 0;
        return {
            start: function (n) {
                0 === e.length
                    ? n && n({ finished: !0 })
                    : e[t].start(function r(i) {
                          if (!i.finished || ++t === e.length) {
                              n && n(i);
                              return;
                          }
                          e[t].start(r);
                      });
            },
            stop: function () {
                t < e.length && e[t].stop();
            },
        };
    },
    I = function (e, t) {
        var n = 0,
            r = {},
            i = !(t && !1 === t.stopTogether),
            s = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (a, o) {
                        var l = function (a) {
                            if (((r[o] = !0), ++n === e.length)) {
                                (n = 0), t && t(a);
                                return;
                            }
                            !a.finished && i && s.stop();
                        };
                        a ? a.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        r[t] || e.stop(), (r[t] = !0);
                    });
                },
            };
        return s;
    },
    T = function (e) {
        return g(new a(0), { toValue: 0, delay: e, duration: 0 });
    };
e.exports = {
    Value: a,
    ValueXY: o,
    decay: function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(), t.animate(new h(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                },
            }
        );
    },
    timing: g,
    spring: function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(),
                        n.toValue instanceof s ? t.track(new _(t, n.toValue, p, n, e)) : t.animate(new p(n), e);
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
        return new u(e, t);
    },
    modulo: function (e, t) {
        return new d(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new c(e, n);
    },
    delay: T,
    sequence: A,
    parallel: I,
    stagger: function (e, t) {
        return I(
            t.map(function (t, n) {
                return A([T(e * n), t]);
            }),
        );
    },
    event: function (e, t) {
        return function () {
            for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
            var o = function e(t, n, r) {
                if ("number" == typeof n) {
                    i(
                        t instanceof a,
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
    },
    isAnimated: f,
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
