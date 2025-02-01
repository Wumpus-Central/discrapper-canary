var i = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
})();
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var o = n(129629),
    l = (function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (n._transforms = e), n;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: '__getValue',
                    value: function () {
                        return this._transforms.map(function (e) {
                            var t = {};
                            for (var n in e) {
                                var i = e[n];
                                i instanceof o ? (t[n] = i.__getValue()) : (t[n] = i);
                            }
                            return t;
                        });
                    }
                },
                {
                    key: '__getAnimatedValue',
                    value: function () {
                        return this._transforms.map(function (e) {
                            var t = {};
                            for (var n in e) {
                                var i = e[n];
                                i instanceof o ? (t[n] = i.__getAnimatedValue()) : (t[n] = i);
                            }
                            return t;
                        });
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        var e = this;
                        this._transforms.forEach(function (t) {
                            for (var n in t) {
                                var i = t[n];
                                i instanceof o && i.__addChild(e);
                            }
                        });
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        var e = this;
                        this._transforms.forEach(function (t) {
                            for (var n in t) {
                                var i = t[n];
                                i instanceof o && i.__removeChild(e);
                            }
                        });
                    }
                }
            ]),
            t
        );
    })(n(22672));
e.exports = l;
