"use strict";
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = n(284009),
    s = n(313319),
    a = n(958554),
    o = n(410641),
    l = n(868671),
    u = n(120685),
    c = n(543881),
    d = n(197557),
    _ = n(505562),
    h = n(757927);
n(336258);
var f = n(253120),
    p = n(905386),
    E = n(362001),
    m = function (e, t, n) {
        if (e instanceof o) {
            var r = i({}, t),
                s = i({}, t);
            for (var a in t) {
                var l = t[a],
                    u = l.x,
                    c = l.y;
                void 0 !== u && void 0 !== c && ((r[a] = u), (s[a] = c));
            }
            return I([n(e.x, r), n(e.y, s)], { stopTogether: !1 });
        }
        return null;
    },
    g = function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(),
                        n.toValue instanceof s ? t.track(new _(t, n.toValue, f, n, e)) : t.animate(new f(n), e);
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
                    : e[t].start(function i(r) {
                          if (!r.finished || ++t === e.length) {
                              n && n(r);
                              return;
                          }
                          e[t].start(i);
                      });
            },
            stop: function () {
                t < e.length && e[t].stop();
            },
        };
    },
    I = function (e, t) {
        var n = 0,
            i = {},
            r = !(t && !1 === t.stopTogether),
            s = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (a, o) {
                        var l = function (a) {
                            if (((i[o] = !0), ++n === e.length)) {
                                (n = 0), t && t(a);
                                return;
                            }
                            !a.finished && r && s.stop();
                        };
                        a ? a.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        i[t] || e.stop(), (i[t] = !0);
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
                    t.stopTracking(), t.animate(new p(n), e);
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
                        n.toValue instanceof s ? t.track(new _(t, n.toValue, E, n, e)) : t.animate(new E(n), e);
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
        return new c(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return new d(e, n);
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
            for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
            var o = function e(t, n, i) {
                if ("number" == typeof n) {
                    r(
                        t instanceof a,
                        "Bad mapping of type " + typeof t + " for key " + i + ", event value must map to AnimatedValue",
                    ),
                        t.setValue(n);
                    return;
                }
                for (var i in (r("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + i),
                r("object" == typeof n, "Bad event of type " + typeof n + " for key " + i),
                t))
                    e(t[i], n[i], i);
            };
            e.forEach(function (e, t) {
                o(e, i[t], "arg" + t);
            }),
                t && t.listener && t.listener.apply(null, i);
        };
    },
    isAnimated: h,
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
