var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = n(512722),
    a = n(129629),
    s = n(420633),
    o = n(52738),
    l = n(535308),
    u = n(11746),
    c = n(728613),
    d = n(322659),
    f = n(919924),
    _ = n(691181);
n(328794);
var p = n(549639),
    h = n(466657),
    m = n(173821),
    g = function (e, t, n) {
        if (e instanceof o) {
            var r = i({}, t),
                a = i({}, t);
            for (var s in t) {
                var l = t[s],
                    u = l.x,
                    c = l.y;
                void 0 !== u && void 0 !== c && ((r[s] = u), (a[s] = c));
            }
            return b([n(e.x, r), n(e.y, a)], { stopTogether: !1 });
        }
        return null;
    },
    E = function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var i = t,
                        r = n;
                    i.stopTracking(), n.toValue instanceof a ? i.track(new f(i, n.toValue, m, r, e)) : i.animate(new m(r), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    v = function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var i = t,
                        r = n;
                    i.stopTracking(), n.toValue instanceof a ? i.track(new f(i, n.toValue, p, r, e)) : i.animate(new p(r), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    y = function e(t, n) {
        return (
            g(t, n, e) || {
                start: function (e) {
                    var i = t,
                        r = n;
                    i.stopTracking(), i.animate(new h(r), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    I = function (e) {
        var t = 0;
        return {
            start: function (n) {
                var i = function i(r) {
                    if (!r.finished || ++t === e.length) {
                        n && n(r);
                        return;
                    }
                    e[t].start(i);
                };
                0 === e.length ? n && n({ finished: !0 }) : e[t].start(i);
            },
            stop: function () {
                t < e.length && e[t].stop();
            }
        };
    },
    b = function (e, t) {
        var n = 0,
            i = {},
            r = !(t && !1 === t.stopTogether),
            a = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (s, o) {
                        var l = function (s) {
                            if (((i[o] = !0), ++n === e.length)) {
                                (n = 0), t && t(s);
                                return;
                            }
                            !s.finished && r && a.stop();
                        };
                        s ? s.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        i[t] || e.stop(), (i[t] = !0);
                    });
                }
            };
        return a;
    },
    T = function (e) {
        return v(new s(0), {
            toValue: 0,
            delay: e,
            duration: 0
        });
    },
    S = function (e, t) {
        return b(
            t.map(function (t, n) {
                return I([T(e * n), t]);
            })
        );
    },
    A = function (e, t) {
        return function () {
            for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            var o = function e(t, n, i) {
                if ('number' == typeof n) {
                    r(t instanceof s, 'Bad mapping of type ' + typeof t + ' for key ' + i + ', event value must map to AnimatedValue'), t.setValue(n);
                    return;
                }
                for (var i in (r('object' == typeof t, 'Bad mapping of type ' + typeof t + ' for key ' + i), r('object' == typeof n, 'Bad event of type ' + typeof n + ' for key ' + i), t)) e(t[i], n[i], i);
            };
            e.forEach(function (e, t) {
                o(e, i[t], 'arg' + t);
            }),
                t && t.listener && t.listener.apply(null, i);
        };
    };
e.exports = {
    Value: s,
    ValueXY: o,
    decay: y,
    timing: v,
    spring: E,
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
    sequence: I,
    parallel: b,
    stagger: S,
    event: A,
    isAnimated: _,
    createAnimatedComponent: n(350323),
    inject: {
        ApplyAnimatedValues: n(457958).inject,
        InteractionManager: n(431732).inject,
        FlattenStyle: n(108012).inject,
        RequestAnimationFrame: n(601102).inject,
        CancelAnimationFrame: n(887442).inject
    },
    __PropsOnlyForTests: n(724027)
};
