var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = r(512722),
    o = r(129629),
    s = r(420633),
    l = r(52738),
    u = r(535308),
    c = r(11746),
    d = r(728613),
    f = r(322659),
    p = r(919924),
    h = r(691181);
r(328794);
var _ = r(549639),
    m = r(466657),
    g = r(173821),
    E = function (e, n, r) {
        if (e instanceof l) {
            var a = i({}, n),
                o = i({}, n);
            for (var s in n) {
                var u = n[s],
                    c = u.x,
                    d = u.y;
                void 0 !== c && void 0 !== d && ((a[s] = c), (o[s] = d));
            }
            return T([r(e.x, a), r(e.y, o)], { stopTogether: !1 });
        }
        return null;
    },
    v = function e(n, r) {
        return (
            E(n, r, e) || {
                start: function (e) {
                    var i = n,
                        a = r;
                    i.stopTracking(), r.toValue instanceof o ? i.track(new p(i, r.toValue, g, a, e)) : i.animate(new g(a), e);
                },
                stop: function () {
                    n.stopAnimation();
                }
            }
        );
    },
    y = function e(n, r) {
        return (
            E(n, r, e) || {
                start: function (e) {
                    var i = n,
                        a = r;
                    i.stopTracking(), r.toValue instanceof o ? i.track(new p(i, r.toValue, _, a, e)) : i.animate(new _(a), e);
                },
                stop: function () {
                    n.stopAnimation();
                }
            }
        );
    },
    b = function e(n, r) {
        return (
            E(n, r, e) || {
                start: function (e) {
                    var i = n,
                        a = r;
                    i.stopTracking(), i.animate(new m(a), e);
                },
                stop: function () {
                    n.stopAnimation();
                }
            }
        );
    },
    I = function (e) {
        var n = 0;
        return {
            start: function (r) {
                var i = function i(a) {
                    if (!a.finished || ++n === e.length) {
                        r && r(a);
                        return;
                    }
                    e[n].start(i);
                };
                0 === e.length ? r && r({ finished: !0 }) : e[n].start(i);
            },
            stop: function () {
                n < e.length && e[n].stop();
            }
        };
    },
    T = function (e, n) {
        var r = 0,
            i = {},
            a = !(n && !1 === n.stopTogether),
            o = {
                start: function (n) {
                    if (r === e.length) {
                        n && n({ finished: !0 });
                        return;
                    }
                    e.forEach(function (s, l) {
                        var u = function (s) {
                            if (((i[l] = !0), ++r === e.length)) {
                                (r = 0), n && n(s);
                                return;
                            }
                            !s.finished && a && o.stop();
                        };
                        s ? s.start(u) : u({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, n) {
                        i[n] || e.stop(), (i[n] = !0);
                    });
                }
            };
        return o;
    },
    S = function (e) {
        return y(new s(0), {
            toValue: 0,
            delay: e,
            duration: 0
        });
    },
    A = function (e, n) {
        return T(
            n.map(function (n, r) {
                return I([S(e * r), n]);
            })
        );
    },
    C = function (e, n) {
        return function () {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            var l = function e(n, r, i) {
                if ('number' == typeof r) {
                    a(n instanceof s, 'Bad mapping of type ' + typeof n + ' for key ' + i + ', event value must map to AnimatedValue'), n.setValue(r);
                    return;
                }
                for (var i in (a('object' == typeof n, 'Bad mapping of type ' + typeof n + ' for key ' + i), a('object' == typeof r, 'Bad event of type ' + typeof r + ' for key ' + i), n)) e(n[i], r[i], i);
            };
            e.forEach(function (e, n) {
                l(e, i[n], 'arg' + n);
            }),
                n && n.listener && n.listener.apply(null, i);
        };
    };
e.exports = {
    Value: s,
    ValueXY: l,
    decay: b,
    timing: y,
    spring: v,
    add: function (e, n) {
        return new u(e, n);
    },
    multiply: function (e, n) {
        return new c(e, n);
    },
    modulo: function (e, n) {
        return new d(e, n);
    },
    template: function (e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return new f(e, r);
    },
    delay: S,
    sequence: I,
    parallel: T,
    stagger: A,
    event: C,
    isAnimated: h,
    createAnimatedComponent: r(350323),
    inject: {
        ApplyAnimatedValues: r(457958).inject,
        InteractionManager: r(431732).inject,
        FlattenStyle: r(108012).inject,
        RequestAnimationFrame: r(601102).inject,
        CancelAnimationFrame: r(887442).inject
    },
    __PropsOnlyForTests: r(724027)
};
