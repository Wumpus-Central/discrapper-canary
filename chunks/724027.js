var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = (function () {
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
function o(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function s(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function l(e, n) {
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
var u = r(129629),
    c = r(330705),
    d = (function (e) {
        function n(e, r) {
            o(this, n);
            var a = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return e.style && (e = i({}, e, { style: new c(e.style) })), (a._props = e), (a._callback = r), a.__attach(), a;
        }
        return (
            l(n, e),
            a(n, [
                {
                    key: '__getValue',
                    value: function () {
                        var e = {};
                        for (var n in this._props) {
                            var r = this._props[n];
                            r instanceof u ? (e[n] = r.__getValue()) : (e[n] = r);
                        }
                        return e;
                    }
                },
                {
                    key: '__getAnimatedValue',
                    value: function () {
                        var e = {};
                        for (var n in this._props) {
                            var r = this._props[n];
                            r instanceof u && (e[n] = r.__getAnimatedValue());
                        }
                        return e;
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        for (var e in this._props) {
                            var n = this._props[e];
                            n instanceof u && n.__addChild(this);
                        }
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        for (var e in this._props) {
                            var n = this._props[e];
                            n instanceof u && n.__removeChild(this);
                        }
                    }
                },
                {
                    key: 'update',
                    value: function () {
                        this._callback();
                    }
                }
            ]),
            n
        );
    })(u);
e.exports = d;
