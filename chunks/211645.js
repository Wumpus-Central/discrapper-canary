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
function o(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function s(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var l = r(129629),
    u = (function (e) {
        function n(e) {
            a(this, n);
            var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (r._transforms = e), r;
        }
        return (
            s(n, e),
            i(n, [
                {
                    key: '__getValue',
                    value: function () {
                        return this._transforms.map(function (e) {
                            var n = {};
                            for (var r in e) {
                                var i = e[r];
                                i instanceof l ? (n[r] = i.__getValue()) : (n[r] = i);
                            }
                            return n;
                        });
                    }
                },
                {
                    key: '__getAnimatedValue',
                    value: function () {
                        return this._transforms.map(function (e) {
                            var n = {};
                            for (var r in e) {
                                var i = e[r];
                                i instanceof l ? (n[r] = i.__getAnimatedValue()) : (n[r] = i);
                            }
                            return n;
                        });
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        var e = this;
                        this._transforms.forEach(function (n) {
                            for (var r in n) {
                                var i = n[r];
                                i instanceof l && i.__addChild(e);
                            }
                        });
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        var e = this;
                        this._transforms.forEach(function (n) {
                            for (var r in n) {
                                var i = n[r];
                                i instanceof l && i.__removeChild(e);
                            }
                        });
                    }
                }
            ]),
            n
        );
    })(r(22672));
e.exports = u;
