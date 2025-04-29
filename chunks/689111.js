var r = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
})();
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function a(e, t) {
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
var s = n(438648);
n(706057);
var l = n(622865),
    c = n(998217),
    u = n(752701);
e.exports = (function (e) {
    function t(e, n) {
        i(this, t);
        var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._a = 'number' == typeof e ? new l(e) : e), (r._b = 'number' == typeof n ? new l(n) : n), (r._listeners = {}), r;
    }
    return (
        a(t, e),
        r(t, [
            {
                key: '__getValue',
                value: function () {
                    return this._a.__getValue() * this._b.__getValue();
                }
            },
            {
                key: 'addListener',
                value: function (e) {
                    var t = this;
                    !this._aListener &&
                        this._a.addListener &&
                        (this._aListener = this._a.addListener(function () {
                            for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                        })),
                        !this._bListener &&
                            this._b.addListener &&
                            (this._bListener = this._b.addListener(function () {
                                for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                            }));
                    var n = guid();
                    return (this._listeners[n] = e), n;
                }
            },
            {
                key: 'removeListener',
                value: function (e) {
                    delete this._listeners[e];
                }
            },
            {
                key: 'interpolate',
                value: function (e) {
                    return new c(this, u.create(e));
                }
            },
            {
                key: '__attach',
                value: function () {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
            },
            {
                key: '__detach',
                value: function () {
                    this._a.__removeChild(this), this._b.__removeChild(this);
                }
            }
        ]),
        t
    );
})(s);
