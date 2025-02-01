var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
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
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function s(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function o(e, t) {
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
var l = n(129629),
    u = n(22672),
    c = n(211645),
    d = n(108012),
    f = (function (e) {
        function t(e) {
            a(this, t);
            var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return !(e = d.current(e) || {}).transform || e.transform instanceof l || (e = i({}, e, { transform: new c(e.transform) })), (n._style = e), n;
        }
        return (
            o(t, e),
            r(t, [
                {
                    key: '__getValue',
                    value: function () {
                        var e = {};
                        for (var t in this._style) {
                            var n = this._style[t];
                            n instanceof l ? (e[t] = n.__getValue()) : (e[t] = n);
                        }
                        return e;
                    }
                },
                {
                    key: '__getAnimatedValue',
                    value: function () {
                        var e = {};
                        for (var t in this._style) {
                            var n = this._style[t];
                            n instanceof l && (e[t] = n.__getAnimatedValue());
                        }
                        return e;
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        for (var e in this._style) {
                            var t = this._style[e];
                            t instanceof l && t.__addChild(this);
                        }
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        for (var e in this._style) {
                            var t = this._style[e];
                            t instanceof l && t.__removeChild(this);
                        }
                    }
                }
            ]),
            t
        );
    })(u);
e.exports = f;
