var i = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
var o = r(780643),
    s = (function () {
        function e() {
            a(this, e);
        }
        return (
            i(e, null, [
                {
                    key: 'step0',
                    value: function (e) {
                        return e > 0 ? 1 : 0;
                    }
                },
                {
                    key: 'step1',
                    value: function (e) {
                        return e >= 1 ? 1 : 0;
                    }
                },
                {
                    key: 'linear',
                    value: function (e) {
                        return e;
                    }
                },
                {
                    key: 'ease',
                    value: function (e) {
                        return l(e);
                    }
                },
                {
                    key: 'quad',
                    value: function (e) {
                        return e * e;
                    }
                },
                {
                    key: 'cubic',
                    value: function (e) {
                        return e * e * e;
                    }
                },
                {
                    key: 'poly',
                    value: function (e) {
                        return function (n) {
                            return Math.pow(n, e);
                        };
                    }
                },
                {
                    key: 'sin',
                    value: function (e) {
                        return 1 - Math.cos((e * Math.PI) / 2);
                    }
                },
                {
                    key: 'circle',
                    value: function (e) {
                        return 1 - Math.sqrt(1 - e * e);
                    }
                },
                {
                    key: 'exp',
                    value: function (e) {
                        return Math.pow(2, 10 * (e - 1));
                    }
                },
                {
                    key: 'elastic',
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            n = e * Math.PI;
                        return function (e) {
                            return 1 - Math.pow(Math.cos((e * Math.PI) / 2), 3) * Math.cos(e * n);
                        };
                    }
                },
                {
                    key: 'back',
                    value: function (e) {
                        return (
                            void 0 === e && (e = 1.70158),
                            function (n) {
                                return n * n * ((e + 1) * n - e);
                            }
                        );
                    }
                },
                {
                    key: 'bounce',
                    value: function (e) {
                        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                    }
                },
                {
                    key: 'bezier',
                    value: function (e, n, r, i) {
                        return o(e, n, r, i);
                    }
                },
                {
                    key: 'in',
                    value: function (e) {
                        return e;
                    }
                },
                {
                    key: 'out',
                    value: function (e) {
                        return function (n) {
                            return 1 - e(1 - n);
                        };
                    }
                },
                {
                    key: 'inOut',
                    value: function (e) {
                        return function (n) {
                            return n < 0.5 ? e(2 * n) / 2 : 1 - e((1 - n) * 2) / 2;
                        };
                    }
                }
            ]),
            e
        );
    })(),
    l = s.bezier(0.42, 0, 1, 1);
e.exports = s;
